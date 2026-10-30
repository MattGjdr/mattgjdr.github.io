#!/usr/bin/env bash
# One-time setup of the local narration tools: Piper TTS + PyMuPDF in a venv, plus voice models.
set -euo pipefail
ROOT="${AOD_TTS:-$HOME/.cache/aod-tts}"
mkdir -p "$ROOT/voices"
[ -x "$ROOT/venv/bin/python" ] || python3 -m venv "$ROOT/venv"
"$ROOT/venv/bin/pip" install -q piper-tts pymupdf
B=https://huggingface.co/rhasspy/piper-voices/resolve/main/en
for v in en_US/ryan/high/en_US-ryan-high \
         en_GB/alan/medium/en_GB-alan-medium \
         en_US/lessac/high/en_US-lessac-high \
         en_GB/northern_english_male/medium/en_GB-northern_english_male-medium \
         en_GB/semaine/medium/en_GB-semaine-medium \
         en_GB/cori/high/en_GB-cori-high; do
  n=$(basename "$v")
  for ext in onnx onnx.json; do
    [ -s "$ROOT/voices/$n.$ext" ] || curl -sfL -o "$ROOT/voices/$n.$ext" "$B/$v.$ext"
  done
  echo "voice ok: $n"
done
echo "Done. Python: $ROOT/venv/bin/python   Voices: $ROOT/voices"
