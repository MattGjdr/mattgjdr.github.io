(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const h = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- prefs (shared by all parts) ---------- */
  const PKEY = "aod-prefs";
  let P = { speed: 1, voice: 1, rules: false, ambvol: 0.5 };
  try { Object.assign(P, JSON.parse(localStorage.getItem(PKEY)) || {}); } catch {}
  const savePrefs = () => { try { localStorage.setItem(PKEY, JSON.stringify(P)); } catch {} };

  /* ---------- toast ---------- */
  let toastTimer;
  function toast(title, msg, bad = false, ms = 7000) {
    const t = $("#toast");
    t.innerHTML = `<b>${title}</b>${msg}`;
    t.classList.toggle("bad", bad);
    t.classList.remove("hidden");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.add("hidden"), ms);
  }
  $("#toast").onclick = () => $("#toast").classList.add("hidden");

  /* ---------- zoom ---------- */
  function zoomable(img) { img.onclick = () => { $("#zoom img").src = img.src; $("#zoom").classList.remove("hidden"); }; }
  $("#zoom").onclick = () => $("#zoom").classList.add("hidden");

  /* ---------- home page ---------- */
  const label = p => (p.kind === "Campaign" ? "Chapter" : p.kind) + " " + p.number;
  const partId = new URLSearchParams(location.search).get("c");
  if (!partId) {
    $("#home").classList.remove("hidden");
    const box = $("#parts");
    (window.PARTS || []).forEach(p => {
      const a = h("a", "part-card");
      a.href = "?c=" + p.id;
      a.innerHTML = `<img src="img/${p.id}-header.jpg" alt=""><span class="pk">${label(p)} · p. ${p.pages}</span><b>${esc(p.title)}</b>`;
      box.appendChild(a);
    });
    return;
  }

  // load the part's generated data file, then start
  const s = document.createElement("script");
  s.src = `data/${partId}.js`;
  s.onload = () => start(window.CHAPTER);
  s.onerror = () => { $("#home").classList.remove("hidden"); $("#parts").innerHTML = `<p class="muted">Part “${esc(partId)}” not found. <a href="./">Back to all parts</a></p>`; };
  document.body.appendChild(s);

  function start(CH) {
    const scenes = Object.fromEntries(CH.scenes.map(s => [s.id, s]));
    document.title = `${label(CH)} – ${CH.title}`;
    if (CH.header) $("#hero-img").src = CH.header;
    $("#hero-eyebrow").textContent = `${CH.kind} · Adventure Book p. ${CH.pages}`;
    $("#hero-title").innerHTML = `${label(CH)}<span>${esc(CH.title)}</span>`;
    $("#part").classList.remove("hidden");
    $("#player").classList.remove("hidden");

    /* ---------- per-part state ---------- */
    const KEY = "aod-" + CH.id;
    const fresh = () => ({ checklist: [], trackers: {}, plugin: {} });
    let S;
    try { S = Object.assign(fresh(), JSON.parse(localStorage.getItem(KEY)) || {}); } catch { S = fresh(); }
    const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} };

    /* ---------- speakers ---------- */
    const PALETTE = ["#f2a65a", "#c792ea", "#7fdbca", "#ff8fa3", "#c3e88d", "#89ddff"];
    const color = {};
    let pi = 0;
    Object.entries(CH.cast).forEach(([k, c]) => {
      color[k] = c.color || (k === "narrator" ? "var(--text)" : k === "rules" ? "var(--gold)" : k === "tharmagar" ? "var(--sage)" : PALETTE[pi++ % PALETTE.length]);
    });
    const nameOf = k => (CH.cast[k] && CH.cast[k].name) || k;

    /* ---------- tabs ---------- */
    const byTab = t => CH.scenes.filter(s => s.tab === t);
    const hasSetup = (CH.rules && CH.rules.length) || (CH.checklist && CH.checklist.length) || CH.setup;
    const hasPlay = byTab("play").length || (CH.interactions && CH.interactions.length) || (CH.trackers && CH.trackers.length) || CH.plugin;
    const hasEnding = byTab("ending").length || CH.rewards;
    const shown = { story: byTab("story").length > 0, setup: !!hasSetup, play: !!hasPlay, ending: !!hasEnding };
    $$(".tabs button").forEach(b => b.classList.toggle("hidden", !shown[b.dataset.tab]));
    function showTab(name, scroll = true) {
      $$(".tabs button").forEach(b => b.classList.toggle("active", b.dataset.tab === name));
      $$(".tab").forEach(t => t.classList.toggle("active", t.id === "tab-" + name));
      if (scroll) window.scrollTo({ top: $(".tabs").offsetTop, behavior: "smooth" });
    }
    $$(".tabs button").forEach(b => b.onclick = () => showTab(b.dataset.tab));
    document.addEventListener("click", e => {
      const a = e.target.closest("[data-goto]");
      if (a) { e.preventDefault(); showTab(a.dataset.goto); }
    });

    /* ---------- scene rendering ---------- */
    function renderScene(id, opts = {}) {
      const sc = scenes[id];
      if (!sc) return h("p", "muted", `Missing scene ${esc(id)}`);
      const el = h("article", "scene");
      el.dataset.scene = id;
      const used = [...new Set(sc.paragraphs.flat().map(l => l.who))];
      el.innerHTML = `
        <div class="scene-head">
          <div>${sc.kicker ? `<div class="kicker">${esc(sc.kicker)}</div>` : ""}<h2>${esc(sc.title)}</h2></div>
          <button class="btn narrate">▶ Narrate</button>
        </div>
        <div class="legend">${used.map(k => `<span><i style="background:${color[k]}"></i>${esc(nameOf(k))}</span>`).join("")}</div>`;
      let idx = 0;
      sc.paragraphs.forEach((para, p) => {
        const pe = h("p");
        para.forEach((ln, li) => {
          const span = h("span", "line " + (ln.who === "narrator" ? "narr" : ln.who === "rules" ? "rules" : "speech"));
          span.textContent = ln.text;
          if (ln.who !== "narrator" && ln.who !== "rules") span.style.color = color[ln.who];
          Object.assign(span.dataset, { i: idx++, p, audio: ln.audio, who: ln.who });
          span.onclick = () => Player.start(el, +span.dataset.i, true);
          pe.appendChild(span);
          if (li < para.length - 1) pe.appendChild(document.createTextNode(" "));
        });
        el.appendChild(pe);
      });
      if (sc.choices && sc.choices.length) {
        const ch = h("div", "choices");
        ch.innerHTML = `<div class="kicker">${esc(sc.choiceNote || "Choose as a group. A tie is decided by the Party Leader.")}</div>`;
        sc.choices.forEach(cid => {
          const b = h("button", "choice", esc(scenes[cid] ? scenes[cid].title : cid));
          b.onclick = () => (opts.onChoice || openOutcome)(cid);
          ch.appendChild(b);
        });
        el.appendChild(ch);
      }
      $(".narrate", el).onclick = () => Player.toggleScene(el);
      return el;
    }

    /* ---------- STORY tab ---------- */
    const story = $("#tab-story");
    byTab("story").forEach(sc => story.appendChild(renderScene(sc.id)));
    if (shown.setup || shown.play) story.appendChild(h("div", "next-hint", `When the story ends, set up the board in <a href="#" data-goto="setup">Setup &amp; Rules</a>, then open the <a href="#" data-goto="play">Play</a> tab.`));
    else if (CH.next) story.appendChild(h("div", "next-hint", `Next: ${esc(CH.next)}`));

    /* ---------- SETUP tab ---------- */
    const setup = $("#tab-setup");
    if (CH.setup || CH.checklist) {
      const c = h("div", "card");
      c.innerHTML = `<h2>Board setup</h2>`;
      if (CH.setup) { const img = h("img", "map"); img.src = CH.setup; img.alt = "Setup map"; zoomable(img); c.appendChild(img); c.appendChild(h("p", "muted small", "Tap the map to zoom. " + (CH.setupNote || ""))); }
      if (CH.checklist) {
        c.appendChild(h("h3", null, "Before you start"));
        const ul = h("ul", "checklist");
        const draw = () => {
          ul.innerHTML = "";
          CH.checklist.forEach((txt, k) => {
            const done = S.checklist.includes(k);
            const li = h("li", done ? "done" : "", `<span class="box">${done ? "✓" : ""}</span><span>${txt}</span>`);
            li.onclick = () => { S.checklist = done ? S.checklist.filter(x => x !== k) : [...S.checklist, k]; save(); draw(); };
            ul.appendChild(li);
          });
        };
        draw();
        c.appendChild(ul);
      }
      setup.appendChild(c);
    }
    if (CH.rules) {
      setup.appendChild(h("h2", "section-title", "Rules for this adventure"));
      const g = h("div", "grid2");
      CH.rules.forEach(r => g.appendChild(h("div", "card rule " + (r.tone || ""), `<h3>${esc(r.title)}</h3><div>${r.html}</div>`)));
      setup.appendChild(g);
    }

    /* ---------- PLAY tab ---------- */
    const play = $("#tab-play");
    const reader = h("div", "reader");
    const trail = [];
    function openOutcome(id, fromPage = false) {
      if (fromPage) trail.length = 0;
      trail.push(id);
      drawReader();
      reader.scrollIntoView({ behavior: "smooth", block: "start" });
      if (plugin && plugin.onScene) plugin.onScene(id);
      Player.start($(".scene", reader), 0);
    }
    function drawReader() {
      reader.innerHTML = "";
      if (!trail.length) return;
      const bar = h("div", "trail");
      trail.forEach((id, k) => {
        const b = h("button", k === trail.length - 1 ? "on" : "", esc((scenes[id] || {}).title || id).replace(/:.*/, ""));
        b.onclick = () => { trail.length = k + 1; drawReader(); };
        bar.appendChild(b);
        if (k < trail.length - 1) bar.appendChild(h("span", null, "›"));
      });
      const close = h("button", "close", "✕");
      close.title = "Close";
      close.onclick = () => { trail.length = 0; Player.stop(); drawReader(); };
      bar.appendChild(close);
      reader.appendChild(bar);
      reader.appendChild(renderScene(trail[trail.length - 1], { onChoice: id => openOutcome(id) }));
    }

    (CH.interactions || []).forEach(page => {
      const c = h("div", "card boi");
      c.innerHTML = `<div class="card-head"><h2>${esc(page.label)}</h2><span class="pill">Book of Interactions p. ${page.page}</span></div>
        ${page.when ? `<p class="muted small">${esc(page.when)}</p>` : ""}`;
      if (page.image) {
        const fig = h("div", "boi-img");
        fig.innerHTML = `<img src="${page.image}" alt="">`;
        Object.entries(page.hotspots || {}).forEach(([id, [x, y]]) => {
          const b = h("button", "hot", "#" + id.replace(/^i/, ""));
          b.style.left = x + "%"; b.style.top = y + "%";
          b.title = (scenes[id] || {}).title || id;
          b.onclick = () => openOutcome(id, true);
          fig.appendChild(b);
        });
        c.appendChild(fig);
      }
      const opts = h("div", "options");
      page.options.forEach(id => {
        const b = h("button", "choice", esc((scenes[id] || {}).title || id));
        b.onclick = () => openOutcome(id, true);
        opts.appendChild(b);
      });
      c.appendChild(opts);
      play.appendChild(c);
    });
    const outcomeIds = CH.scenes.filter(s => s.tab === "interaction").map(s => s.id);
    if (outcomeIds.length) {
      const look = h("div", "lookup", `<label>Book says “read #…”? Open outcome <input type="number" inputmode="numeric" placeholder="#"></label><button class="btn">Open</button>`);
      const go = () => {
        const n = $("input", look).value.trim();
        if (scenes["i" + n]) openOutcome("i" + n, true); else toast("Not in this part", `Outcome #${esc(n)} isn't part of ${esc(CH.title)}.`, true, 4000);
      };
      $("button", look).onclick = go;
      $("input", look).onkeydown = e => { if (e.key === "Enter") go(); };
      play.appendChild(look);
    }
    play.appendChild(reader);

    if (byTab("play").length) {
      play.appendChild(h("h2", "section-title", "Events during the adventure"));
      byTab("play").forEach(sc => {
        const d = h("details", "event");
        d.innerHTML = `<summary>${esc(sc.title)}${sc.kicker ? `<span class="muted small"> · ${esc(sc.kicker)}</span>` : ""}</summary>`;
        d.appendChild(renderScene(sc.id));
        play.appendChild(d);
      });
    }

    // plugin-specific trackers (e.g. Chapter 06 rune track)
    const plugin = CH.plugin && PLUGINS[CH.plugin] ? PLUGINS[CH.plugin] : null;
    const pluginBox = h("div");
    play.appendChild(pluginBox);

    // generic trackers
    const trackBox = h("div", "grid2");
    play.appendChild(trackBox);
    function drawTrackers() {
      trackBox.innerHTML = "";
      (CH.trackers || []).forEach(t => {
        const c = h("div", "card tracker");
        c.innerHTML = `<h2>${esc(t.label)}</h2>${t.note ? `<p class="muted small">${esc(t.note)}</p>` : ""}`;
        const set = v => { S.trackers[t.id] = v; save(); drawTrackers(); };
        if (t.type === "flip") {
          const v = S.trackers[t.id] || t.faces[0];
          const b = h("button", "flip" + (v !== t.faces[0] ? " b" : ""), `<span>Face</span><b>${esc(v)}</b>`);
          b.onclick = () => { b.classList.add("spin"); setTimeout(() => set(t.faces[(t.faces.indexOf(v) + 1) % t.faces.length]), 200); };
          c.appendChild(b);
        } else if (t.type === "status") {
          const v = S.trackers[t.id] || t.states[0];
          const row = h("div", "row");
          t.states.forEach(st => {
            const b = h("button", "seg" + (st === v ? " on" : "") + ((t.bad || []).includes(st) ? " bad" : ""), esc(st));
            b.onclick = () => { set(st); if (st !== v && t.alerts && t.alerts[st]) toast(`${t.label}: ${st}`, t.alerts[st], (t.bad || []).includes(st), 9000); };
            row.appendChild(b);
          });
          c.appendChild(row);
        } else if (t.type === "counter") {
          const v = S.trackers[t.id] ?? t.start ?? t.min ?? 0;
          const row = h("div", "row counter", `<button class="icon">−</button><b class="count">${v}</b><button class="icon big">+</button>${t.max != null ? `<span class="muted small">of ${t.max}</span>` : ""}`);
          const bump = d => {
            const n = Math.max(t.min ?? -Infinity, Math.min(t.max ?? Infinity, v + d));
            if (n === v) return;
            set(n);
            if (t.alerts && t.alerts[n] != null) toast(t.label, t.alerts[n], true, 9000);
          };
          $$("button", row)[0].onclick = () => bump(-1);
          $$("button", row)[1].onclick = () => bump(1);
          c.appendChild(row);
        } else if (t.type === "checks") {
          const v = S.trackers[t.id] || [];
          const row = h("div", "row wrap");
          t.items.forEach(it => {
            const on = v.includes(it);
            const b = h("button", "seg" + (on ? " on" : ""), (on ? "✓ " : "") + esc(it));
            b.onclick = () => set(on ? v.filter(x => x !== it) : [...v, it]);
            row.appendChild(b);
          });
          c.appendChild(row);
        }
        trackBox.appendChild(c);
      });
    }
    drawTrackers();

    const resetRow = h("div", "row end", `<button class="btn ghost">Reset this adventure</button>`);
    $("button", resetRow).onclick = () => {
      if (!confirm("Reset all trackers and checklists for this adventure?")) return;
      S = fresh(); save(); location.reload();
    };
    play.appendChild(resetRow);

    /* ---------- ENDING tab ---------- */
    const ending = $("#tab-ending");
    byTab("ending").forEach(sc => ending.appendChild(renderScene(sc.id)));
    if (CH.rewards) ending.appendChild(h("div", "card reward", `<h3>Rewards</h3><p>${CH.rewards}</p>`));
    if (CH.next) ending.appendChild(h("div", "next-hint", `Next: ${esc(CH.next)}`));

    initPlayer(CH);
    if (plugin) plugin.init({ CH, S, save, toast, pluginBox, showTab, h, $, $$, esc, openOutcome, Player });

    const want = location.hash.slice(1);
    showTab(shown[want] ? want : shown.story ? "story" : "play", false);
  }

  /* ---------- narration player ---------- */
  let Player;
  function initPlayer(CH) {
    const names = k => (CH.cast[k] && CH.cast[k].name) || k;
    const audio = new Audio();
    audio.preload = "auto";
    let scene = null, lines = [], i = -1, playing = false, gapTimer = null, forced = false;

    function setUI() {
      $("#p-play").textContent = playing ? "❚❚" : "▶";
      $$(".narrate").forEach(b => b.textContent = (playing && b.closest(".scene") === scene) ? "❚❚ Pause" : "▶ Narrate");
      const ln = lines[i];
      if (ln) {
        $("#now-who").textContent = names(ln.dataset.who);
        $("#now-who").style.color = ln.dataset.who === "narrator" ? "" : getComputedStyle(ln).color;
        $("#now-what").textContent = ln.textContent;
      }
    }
    function highlight() {
      $$(".line.playing").forEach(l => l.classList.remove("playing"));
      const ln = lines[i];
      if (!ln) return;
      ln.classList.add("playing");
      const r = ln.getBoundingClientRect();
      if (r.top < 70 || r.bottom > innerHeight - 130) ln.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    const skipRule = k => lines[k] && lines[k].dataset.who === "rules" && !P.rules;
    function playIndex(k) {
      clearTimeout(gapTimer);
      while (k < lines.length && skipRule(k) && !(forced && k === i)) k++;
      if (k >= lines.length) return finish();
      i = k;
      audio.src = lines[i].dataset.audio;
      audio.playbackRate = P.speed;
      audio.volume = P.voice;
      audio.play().catch(() => {});
      playing = true;
      Ambience.duck(true);
      highlight(); setUI();
    }
    function finish() {
      playing = false; i = -1; forced = false;
      $$(".line.playing").forEach(l => l.classList.remove("playing"));
      Ambience.duck(false);
      $("#now-who").textContent = "Done"; $("#now-who").style.color = "";
      $("#now-what").textContent = scene ? "Finished: " + $("h2", scene).textContent : "";
      setUI();
    }
    audio.addEventListener("ended", () => {
      forced = false;
      const cur = lines[i], nxt = lines[i + 1];
      const gap = !nxt ? 0 : (nxt.dataset.p !== cur.dataset.p ? 650 : 220) / P.speed;
      gapTimer = setTimeout(() => playIndex(i + 1), gap);
    });

    Player = {
      start(sceneEl, k = 0, clicked = false) {
        if (!sceneEl) return;
        scene = sceneEl; lines = $$(".line", sceneEl); forced = clicked; i = k; playIndex(k);
      },
      toggleScene(sceneEl) { if (scene === sceneEl && i >= 0) return this.toggle(); this.start(sceneEl, 0); },
      toggle() {
        if (i < 0) { const first = $(".tab.active .scene"); if (first) this.start(first, 0); return; }
        if (playing) { audio.pause(); clearTimeout(gapTimer); playing = false; Ambience.duck(false); }
        else { audio.play(); playing = true; Ambience.duck(true); }
        setUI();
      },
      next() { if (i >= 0) playIndex(i + 1); },
      prev() { if (i < 0) return; let k = i - 1; while (k > 0 && skipRule(k)) k--; playIndex(Math.max(0, k)); },
      stop() { audio.pause(); clearTimeout(gapTimer); if (i >= 0) finish(); },
    };

    $("#p-play").onclick = () => Player.toggle();
    $("#p-next").onclick = () => Player.next();
    $("#p-prev").onclick = () => Player.prev();
    $("#p-stop").onclick = () => Player.stop();
    $("#p-settings").onclick = () => $("#settings").classList.toggle("hidden");
    document.addEventListener("keydown", e => {
      if (e.code === "Space" && !/INPUT|SELECT|TEXTAREA|BUTTON/.test(e.target.tagName)) { e.preventDefault(); Player.toggle(); }
    });

    const sp = $("#s-speed"), sv = $("#s-voice"), sr = $("#s-rules"), sa = $("#s-amb"), sav = $("#s-ambvol");
    sp.value = String(P.speed); sv.value = P.voice; sr.checked = P.rules; sav.value = P.ambvol;
    sp.onchange = () => { P.speed = +sp.value; audio.playbackRate = P.speed; savePrefs(); };
    sv.oninput = () => { P.voice = +sv.value; audio.volume = P.voice; savePrefs(); };
    sr.onchange = () => { P.rules = sr.checked; savePrefs(); };
    sa.onchange = () => Ambience.set(sa.checked);
    sav.oninput = () => { P.ambvol = +sav.value; Ambience.apply(); savePrefs(); };
  }
  /* ---------- dungeon ambience (synthesised, no files) ---------- */
  const Ambience = (() => {
    let ctx, master, on = false, ducked = false;
    function build() {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
      const len = ctx.sampleRate * 4, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
      let last = 0;
      for (let k = 0; k < len; k++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; d[k] = last * 3.5; }
      const noise = ctx.createBufferSource(); noise.buffer = buf; noise.loop = true;
      const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 380;
      const ng = ctx.createGain(); ng.gain.value = 0.55;
      const lfo = ctx.createOscillator(); lfo.frequency.value = 0.07;
      const lfoG = ctx.createGain(); lfoG.gain.value = 160;
      lfo.connect(lfoG).connect(lp.frequency);
      noise.connect(lp).connect(ng).connect(master); noise.start(); lfo.start();
      [55, 82.4, 110.6].forEach((f, n) => {
        const o = ctx.createOscillator(); o.type = n === 2 ? "triangle" : "sine"; o.frequency.value = f;
        const g = ctx.createGain(); g.gain.value = n === 2 ? 0.025 : 0.06;
        const l = ctx.createOscillator(); l.frequency.value = 0.05 + n * 0.03;
        const lg = ctx.createGain(); lg.gain.value = g.gain.value * 0.8;
        l.connect(lg).connect(g.gain); o.connect(g).connect(master); o.start(); l.start();
      });
      const delay = ctx.createDelay(1.5); delay.delayTime.value = 0.38;
      const fb = ctx.createGain(); fb.gain.value = 0.42;
      const dl = ctx.createBiquadFilter(); dl.type = "lowpass"; dl.frequency.value = 2200;
      delay.connect(dl).connect(fb).connect(delay); delay.connect(master);
      (function drip() {
        const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain(), f = 900 + Math.random() * 900;
        o.frequency.setValueAtTime(f, t); o.frequency.exponentialRampToValueAtTime(f * 2.2, t + 0.05);
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.12, t + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
        o.connect(g); g.connect(master); g.connect(delay); o.start(t); o.stop(t + 0.1);
        setTimeout(drip, 2500 + Math.random() * 7000);
      })();
    }
    function apply() { if (ctx) master.gain.setTargetAtTime(on ? P.ambvol * (ducked ? 0.35 : 1) : 0, ctx.currentTime, 0.6); }
    return {
      set(v) { on = v; if (on && !ctx) build(); if (ctx && ctx.state === "suspended") ctx.resume(); apply(); },
      duck(v) { ducked = v; apply(); },
      apply,
    };
  })();

  /* ---------- part-specific plugins ---------- */
  var PLUGINS = {
    // Chapter 06: Collapsing Roof rune track + rooms/doors/Runekeys, driven by the lever outcomes #68–#71.
    ch06: {
      LEVER_ROOM: { i68: "orange", i69: "green", i70: "grey", i71: "red" },
      init(api) {
        this.api = api;
        const st = api.S.plugin;
        st.runes = st.runes || { grey: 0, green: 0, orange: 0, red: 0, other: 0 };
        st.rooms = st.rooms || { grey: "locked", green: "locked", orange: "locked", red: "locked" };
        st.keys = st.keys || {};
        this.draw();
      },
      onScene(id) {
        const room = this.LEVER_ROOM[id], st = this.api.S.plugin;
        if (!room || st.rooms[room] !== "locked") return;
        st.rooms[room] = "open";
        this.api.save(); this.draw();
        const locked = Object.values(st.rooms).filter(r => r === "locked").length;
        this.api.toast(`${this.COLORS[room].name} door opens`,
          `Gain FOCUS 2 · add the room's Setup · then <u>draw a Buried Surprise card</u>.` +
          (locked ? ` Another door is still locked, so the Interaction Token stays.` : ` No locked doors remain, so reduce the Interaction Token.`));
      },
      COLORS: {
        grey: { name: "Grey", css: "var(--grey)" }, green: { name: "Green", css: "var(--green)" },
        orange: { name: "Orange", css: "var(--orange)" }, red: { name: "Red", css: "var(--red)" },
        other: { name: "5th colour", css: "var(--other)" },
      },
      draw() {
        const { h, $, pluginBox, S, save, toast, showTab, Player } = this.api;
        const st = S.plugin, C = this.COLORS, ROOMS = ["grey", "green", "orange", "red"];
        pluginBox.innerHTML = "";
        const g = h("div", "grid2");
        // rune track
        const rc = h("div", "card", `<div class="card-head"><h2>Rune track</h2><span class="pill" id="rune-total"></span></div>
          <p class="muted small">Tap a colour each time a Rune of it is placed on the Initiative Track. The third of a colour collapses its room unless that room's door is open.</p>`);
        const runes = h("div", "runes");
        let total = 0;
        Object.entries(C).forEach(([c, info]) => {
          const n = st.runes[c]; total += n;
          let sub = "No room tied to this colour";
          if (ROOMS.includes(c)) sub = st.rooms[c] === "collapsed" ? "Room collapsed" : st.rooms[c] === "open" ? "Door open, so the room is safe" : n === 2 ? "⚠ next one collapses this room" : "";
          const row = h("div", "rune", `<span class="label"><span class="dot" style="background:${info.css}"></span>${info.name}</span>
            <span class="pips">${[0, 1, 2].map(k => `<span class="pip${k < n ? " on" : ""}" style="${k < n ? "background:" + info.css : ""}"></span>`).join("")}</span>
            <span class="ctl"><button aria-label="remove">−</button><button class="add" aria-label="add">+</button></span>${sub ? `<span class="sub">${sub}</span>` : ""}`);
          const [minus, plus] = row.querySelectorAll(".ctl button");
          const bump = d => {
            const v = Math.max(0, Math.min(3, st.runes[c] + d));
            if (v === st.runes[c]) return;
            st.runes[c] = v;
            if (ROOMS.includes(c)) {
              if (d > 0 && v === 3 && st.rooms[c] === "locked") {
                st.rooms[c] = "collapsed"; delete st.keys[c];
                toast("The roof collapses!", `Third ${info.name} Rune placed. Remove the ${info.name} room: its Dungeon Tray, Map tiles and Door. Its Runekey is lost.`, true, 10000);
              } else if (d < 0 && v < 3 && st.rooms[c] === "collapsed") st.rooms[c] = "locked";
            }
            const tot = Object.values(st.runes).reduce((a, b) => a + b, 0);
            if (d > 0 && tot === 15) toast("The last Rune is drawn", "The Rune Bag is empty, so the adventure fails.", true, 12000);
            save(); this.draw();
          };
          minus.onclick = () => bump(-1); plus.onclick = () => bump(1);
          runes.appendChild(row);
        });
        rc.appendChild(runes);
        const tp = $("#rune-total", rc);
        tp.textContent = `${total} / 15`;
        tp.className = "pill" + (total >= 15 ? " bad" : total >= 12 ? " warn" : "");
        g.appendChild(rc);
        // rooms + runekeys
        const k = Object.keys(st.keys).length;
        const rm = h("div", "card", `<div class="card-head"><h2>Rooms &amp; Runekeys</h2><span class="pill${k >= 3 ? " good" : ""}">${k} / 3</span></div>`);
        const rooms = h("div", "rooms");
        ROOMS.forEach(c => {
          const s = st.rooms[c], got = !!st.keys[c];
          const row = h("div", "room" + (s === "collapsed" ? " collapsed" : ""), `<span class="dot" style="background:${C[c].css}"></span>
            <span class="name">${C[c].name} room<span class="state">${{ locked: "Door locked", open: "Door open", collapsed: "Collapsed" }[s]}</span></span>
            <button class="key${got ? " got" : ""}">${got ? "✓ Runekey" : "Runekey"}</button>`);
          row.querySelector(".key").onclick = () => {
            if (st.keys[c]) delete st.keys[c]; else { st.keys[c] = true; toast("Runekey collected", "The looting Hero may move to any Hero Starting Position.", false, 5000); }
            save(); this.draw();
          };
          rooms.appendChild(row);
        });
        rm.appendChild(rooms);
        if (k >= 3) {
          const b = h("button", "btn primary wide", "All 3 Runekeys collected and the last enemy defeated? Read the ending →");
          b.onclick = () => { showTab("ending"); setTimeout(() => Player.start(document.querySelector("#tab-ending .scene"), 0), 400); };
          rm.appendChild(b);
        }
        g.appendChild(rm);
        pluginBox.appendChild(g);
      },
    },
  };
})();
