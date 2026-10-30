#!/usr/bin/env python3
"""Dump PDF pages as text in true reading order (two-column aware).

Usage:
  <venv>/bin/python -I tools/extract_pages.py BOOK.pdf FIRST LAST > out.txt

Each paragraph is prefixed with a tag so you can tell story from rules:
  [H]  heading (coloured / large text)
  [I]  italic body text   -> read-aloud story text
  [B]  bold body text     -> rules / game instructions
  [T]  regular text
Full-width boxes (rule panels) are printed where they appear vertically.
"""
import sys

import pymupdf as fitz


def span_kind(span, body_size):
    bold = bool(span["flags"] & 16) or "Bold" in span["font"]
    italic = bool(span["flags"] & 2) or "Italic" in span["font"]
    coloured = span["color"] not in (0, 0x231F20, 0x000000) and span["color"] < 0xF00000 or span["color"] in (0xE4322B, 0xD7282F)
    if span["size"] > body_size + 2 or (bold and coloured):
        return "H"
    if italic:
        return "I"
    if bold:
        return "B"
    return "T"


def main():
    pdf, first, last = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
    doc = fitz.open(pdf)
    for pno in range(first - 1, last):
        page = doc[pno]
        w = page.rect.width
        d = page.get_text("dict")
        sizes = [s["size"] for b in d["blocks"] if b["type"] == 0 for l in b["lines"] for s in l["spans"] if s["text"].strip()]
        body = sorted(sizes)[len(sizes) // 2] if sizes else 10
        items = []
        for b in d["blocks"]:
            if b["type"] != 0:
                continue
            x0, y0, x1, y1 = b["bbox"]
            if x1 - x0 > w * 0.6:
                col = "F"
            else:
                col = "L" if (x0 + x1) / 2 < w / 2 else "R"
            # split block into runs by kind
            runs, cur, text = [], None, ""
            for l in b["lines"]:
                for s in l["spans"]:
                    t = s["text"]
                    if not t.strip():
                        text += t
                        continue
                    k = span_kind(s, body)
                    if k != cur and text.strip():
                        runs.append((cur, text.strip()))
                        text = ""
                    cur = k
                    text += t
                text += " "
            if text.strip():
                runs.append((cur, text.strip()))
            # coloured names inside a sentence ("Tharmagar", "Book of Interactions") are not headings:
            # fold them into the surrounding text
            if len(runs) > 1:
                merged = []
                for k, t in runs:
                    inline = k == "H" and not t.replace(" ", "").isupper()
                    if merged and (inline or merged[-1][2]):
                        pk, pt, _ = merged[-1]
                        merged[-1] = (pk if not merged[-1][2] else k, pt + " " + t, False)
                    else:
                        merged.append((k, t, inline))
                runs = [(k if not inl else "T", t) for k, t, inl in merged]
            for k, t in runs:
                items.append((col, y0, x0, k, " ".join(t.split())))
        # reading order: full-width items split the page into bands; within a band, left col then right col
        fulls = sorted([i for i in items if i[0] == "F"], key=lambda i: i[1])
        cols = [i for i in items if i[0] != "F"]
        out, prev_y = [], -1
        for f in fulls + [("F", 1e9, 0, "", None)]:
            band = [i for i in cols if prev_y <= i[1] < f[1]]
            band.sort(key=lambda i: (i[0] != "L", i[1], i[2]))
            out += band
            if f[4] is not None:
                out.append(f)
            prev_y = f[1]
        print(f"\n===== PAGE {pno + 1} =====")
        for col, y, x, k, t in out:
            print(f"[{k}] {t}")


if __name__ == "__main__":
    main()
