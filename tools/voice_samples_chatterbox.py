#!/usr/bin/env python3
"""Render Chapter 08 sample lines with Chatterbox (expressive TTS, CPU) for comparison.

Chatterbox clones the timbre of a short reference clip; we use Kokoro sample clips as references,
so run voice_samples_kokoro.py first. 'exaggeration' controls how emotional the delivery is.

Usage:
  ~/.cache/aod-tts/venv-chatterbox/bin/python -I tools/voice_samples_chatterbox.py voice-samples
"""
import subprocess
import sys
from pathlib import Path

import torchaudio as ta
from chatterbox.tts import ChatterboxTTS

ROOT = Path(sys.argv[1])
OUT = ROOT / "chatterbox"
OUT.mkdir(parents=True, exist_ok=True)

LINES = {
    "narrator": "The creatures grunt louder and louder, signaling that they are closer to finding a way to you. "
                "Tharmagar, however, remains euphoric, unstoppable in asking questions.",
    "tharmagar": "Prince... King... He may have been someone that he's not anymore. A prince who inherited the crown? "
                 "One who set the sword aside with the coming of age? Do those things even age?",
    "lakin": "Go! Through that door! You will pass through some galleries, and then keep going ahead, always up. "
             "You will reach the surface! The path won't be easy, but death is certain if you remain here.",
    "volin": "You don't seem akin to these monsters. Therefore, I'll give you the chance to introduce yourselves... "
             "Who are you in the service of?",
}
# (role, reference clip or None for the built-in voice, exaggeration)
RUNS = [
    ("narrator", None, 0.5),
    ("narrator", "kokoro/narrator/bm_george.mp3", 0.5),
    ("narrator", "kokoro/narrator/am_michael.mp3", 0.5),
    ("tharmagar", "kokoro/tharmagar/bm_lewis.mp3", 0.6),
    ("tharmagar", "kokoro/tharmagar/bm_fable.mp3", 0.6),
    ("lakin", "kokoro/narrator/am_onyx.mp3", 0.8),
    ("lakin", "kokoro/narrator/bm_daniel.mp3", 0.8),
    ("volin", "kokoro/volin/am_fenrir.mp3", 0.5),
    ("volin", "kokoro/volin/bm_fable.mp3", 0.5),
]
GHOST = ",lowpass=f=3200,aecho=0.8:0.75:70|140|260:0.35|0.25|0.15"

model = ChatterboxTTS.from_pretrained(device="cpu")
for role, ref, ex in RUNS:
    kw = {"exaggeration": ex, "cfg_weight": 0.4 if ex > 0.6 else 0.5}
    if ref:
        kw["audio_prompt_path"] = str(ROOT / ref)
    wav = model.generate(LINES[role], **kw)
    name = f"{role}_{Path(ref).stem if ref else 'default'}_ex{ex}"
    tmp = OUT / "tmp.wav"
    ta.save(str(tmp), wav, model.sr)
    af = "aresample=44100" + (GHOST if role == "lakin" else "")
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", str(tmp), "-af", af, "-b:a", "96k",
                    str(OUT / f"{name}.mp3")], check=True)
    tmp.unlink()
    print(name, flush=True)
