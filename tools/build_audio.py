#!/usr/bin/env python3
"""Pre-render chapter narration with Piper (local neural TTS).

Usage:
  <venv>/bin/python -I tools/build_audio.py data/ch06.json --voices <dir-with-onnx-models>

Reads the chapter JSON, renders every line with the voice of its speaker
(see "cast"), and writes data/<id>.js which the website loads.
Already rendered lines are cached by a hash of text + voice settings,
so re-running after editing one line only re-renders that line.
"""
import argparse
import hashlib
import json
import re
import subprocess
import sys
import wave
from pathlib import Path

from piper import PiperVoice, SynthesisConfig


def spoken(text):
    """Make text friendlier for TTS without changing what is displayed."""
    t = text.replace("—", ", ").replace("–", ", ").replace("...", "… ")
    t = re.sub(r"[“”\"]", "", t)
    t = t.replace("FOCUS", "Focus")
    t = re.sub(r"\s+", " ", t).strip()
    return t


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("chapter")
    ap.add_argument("--voices", required=True)
    args = ap.parse_args()

    chapter_path = Path(args.chapter).resolve()
    site = chapter_path.parent.parent
    audio_dir = site / "audio" / chapter_path.stem
    audio_dir.mkdir(parents=True, exist_ok=True)
    chapter = json.loads(chapter_path.read_text())

    loaded = {}

    def voice(name):
        if name not in loaded:
            loaded[name] = PiperVoice.load(str(Path(args.voices) / f"{name}.onnx"))
        return loaded[name]

    used = set()
    for scene in chapter["scenes"]:
        for p_i, para in enumerate(scene["paragraphs"]):
            for l_i, line in enumerate(para):
                speaker, text = line[0], line[1]
                cast = chapter["cast"][speaker]
                key = json.dumps([text, cast], sort_keys=True)
                h = hashlib.sha1(key.encode()).hexdigest()[:10]
                name = f"{scene['id']}_{p_i:02d}_{l_i:02d}_{speaker}_{h}.mp3"
                out = audio_dir / name
                used.add(name)
                if not out.exists():
                    wav = audio_dir / "tmp.wav"
                    cfg = SynthesisConfig(
                        speaker_id=cast.get("speaker_id"),
                        length_scale=cast.get("length_scale", 1.0),
                        noise_scale=cast.get("noise_scale", 0.667),
                        noise_w_scale=cast.get("noise_w_scale", 0.8),
                    )
                    v = voice(cast["voice"])
                    with wave.open(str(wav), "wb") as wf:
                        v.synthesize_wav(spoken(text), wf, syn_config=cfg)
                    sr = v.config.sample_rate
                    pitch = cast.get("pitch", 1.0)
                    # Lower/raise pitch, then compensate tempo so speed stays the same.
                    af = (f"asetrate={int(sr * pitch)},aresample=44100,atempo={1 / pitch:.4f},"
                          if pitch != 1.0 else "aresample=44100,")
                    if cast.get("fx") == "ghost":
                        af += "lowpass=f=3200,aecho=0.8:0.75:70|140|260:0.35|0.25|0.15,"
                    af += "loudnorm=I=-16:TP=-1.5"
                    subprocess.run(
                        ["ffmpeg", "-loglevel", "error", "-y", "-i", str(wav), "-af", af,
                         "-ac", "1", "-b:a", "96k", str(out)],
                        check=True,
                    )
                    wav.unlink()
                    print("rendered", name, file=sys.stderr)
                line_out = {"who": speaker, "text": text, "audio": f"audio/{chapter_path.stem}/{name}"}
                para[l_i] = line_out

    for f in audio_dir.glob("*.mp3"):
        if f.name not in used:
            f.unlink()

    js = site / "data" / f"{chapter_path.stem}.js"
    js.write_text("window.CHAPTER = " + json.dumps(chapter, ensure_ascii=False, indent=1) + ";\n")
    print("wrote", js, file=sys.stderr)


if __name__ == "__main__":
    main()
