#!/usr/bin/env python3
"""Sanity-check a part before committing.

Usage:  python3 tools/check_part.py ch09        (run from the repo root, after build_audio.py)

Checks: every speaker is in the cast, every choice/option/hotspot points to an existing scene,
every audio clip and image exists, the part is listed in data/parts.js, and no line contains
straight double quotes (dialogue quotes are added by the app).
Exit code 1 if anything is wrong.
"""
import json
import sys
from pathlib import Path

root = Path(__file__).resolve().parent.parent
pid = sys.argv[1]
src = json.loads((root / "data" / f"{pid}.json").read_text())
gen_path = root / "data" / f"{pid}.js"
problems = []

if not gen_path.exists():
    problems.append(f"data/{pid}.js missing: run tools/build_audio.py")
    gen = None
else:
    t = gen_path.read_text()
    gen = json.loads(t[t.index("{"):t.rindex("}") + 1])

ids = {s["id"] for s in src["scenes"]}
for s in src["scenes"]:
    if s.get("tab") not in ("story", "play", "ending", "interaction"):
        problems.append(f"{s['id']}: bad tab {s.get('tab')!r}")
    for para in s["paragraphs"]:
        for who, text in para:
            if who not in src["cast"]:
                problems.append(f"{s['id']}: speaker {who!r} not in cast")
            if '"' in text:
                problems.append(f"{s['id']}: straight double quote in {text[:40]!r}")
    for c in s.get("choices", []):
        if c not in ids:
            problems.append(f"{s['id']}: choice {c} does not exist")
for p in src.get("interactions", []):
    for c in p["options"] + list(p.get("hotspots", {})):
        if c not in ids:
            problems.append(f"BoI page {p['page']}: option {c} does not exist")
    if p.get("image") and not (root / p["image"]).exists():
        problems.append(f"missing image {p['image']}")
for key in ("header", "setup"):
    if src.get(key) and not (root / src[key]).exists():
        problems.append(f"missing image {src[key]}")
if gen:
    n = 0
    for s in gen["scenes"]:
        for para in s["paragraphs"]:
            for ln in para:
                n += 1
                if not (root / ln["audio"]).exists():
                    problems.append(f"missing audio {ln['audio']}")
    if json.dumps(gen["scenes"][0]["paragraphs"][0][0]["text"]) != json.dumps(src["scenes"][0]["paragraphs"][0][0][1]):
        problems.append(f"data/{pid}.js is out of date: re-run tools/build_audio.py")
if f'id: "{pid}"' not in (root / "data" / "parts.js").read_text():
    problems.append(f"{pid} is not listed in data/parts.js")

print(f"{pid}: {len(ids)} scenes, {len(src['cast'])} speakers")
for p in problems:
    print("  ✗", p)
print("  ✓ all good" if not problems else f"  {len(problems)} problem(s)")
sys.exit(1 if problems else 0)
