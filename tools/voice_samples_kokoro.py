#!/usr/bin/env python3
"""Render Chapter 08 sample lines with Kokoro-82M voices for side-by-side comparison.

Usage:
  ~/.cache/aod-tts/venv-kokoro/bin/python -I tools/voice_samples_kokoro.py voice-samples
"""
import subprocess
import sys
from pathlib import Path

import soundfile as sf
from kokoro_onnx import Kokoro

M = Path.home() / ".cache/aod-tts/kokoro"
OUT = Path(sys.argv[1]) / "kokoro"

LINES = {
    "narrator": "The creatures grunt louder and louder, signaling that they are closer to finding a way to you. "
                "Tharmagar, however, remains euphoric, unstoppable in asking questions.",
    "tharmagar": "Prince… King… He may have been someone that he's not anymore. A prince who inherited the crown? "
                 "One who set the sword aside with the coming of age? Do those things even age?",
    "lakin": "Go! Through that door! You will pass through some galleries, and then keep going ahead, always up. "
             "You will reach the surface! The path won't be easy, but death is certain if you remain here.",
    "volin": "You don't seem akin to these monsters. Therefore, I'll give you the chance to introduce yourselves… "
             "Who are you in the service of?",
    "woman": "Hezechia is a peaceful place, distant, with few people… They won't be able to survive without help "
             "from capable people like you.",
}
MALE = ["am_adam", "am_echo", "am_eric", "am_fenrir", "am_liam", "am_michael", "am_onyx", "am_puck",
        "bm_daniel", "bm_fable", "bm_george", "bm_lewis"]
FEMALE = ["af_heart", "af_bella", "af_nicole", "af_sarah", "bf_alice", "bf_emma", "bf_isabella", "bf_lily"]
GHOST = "lowpass=f=3200,aecho=0.8:0.75:70|140|260:0.35|0.25|0.15,"

k = Kokoro(str(M / "kokoro-v1.0.onnx"), str(M / "voices-v1.0.bin"))
for role, text in LINES.items():
    d = OUT / role
    d.mkdir(parents=True, exist_ok=True)
    for v in (FEMALE if role == "woman" else MALE):
        lang = "en-gb" if v.startswith("b") else "en-us"
        audio, sr = k.create(text, voice=v, speed=0.95, lang=lang)
        wav = d / "tmp.wav"
        sf.write(wav, audio, sr)
        af = "aresample=44100," + (GHOST if role == "lakin" else "")
        subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", str(wav), "-af", af.rstrip(","),
                        "-b:a", "96k", str(d / f"{v}.mp3")], check=True)
        wav.unlink()
        print(role, v, flush=True)
