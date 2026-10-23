#!/usr/bin/env python3
"""
Kontrollib, kas poe pildifailid kannatavad välja mõõdud, mida me müüme.

Lõuend andestab palju — kangas peidab pehmust ja suurt tööd vaadatakse
kaugemalt — aga alla 75 DPI hakkab see nähtavaks muutuma ja alla 50 ei
peida seda miski. Meetrise töö juurde tuleb inimene just lähedale.

    DPI = pikslilaius / (sentimeetrit / 2.54)

Mõõdud loetakse data/pood.ts-ist, nii et uue mõõdu lisamisel ei pea
siin midagi muutma.

Kasutus:
    python3 scripts/check-print-res.py                 # public/pood
    python3 scripts/check-print-res.py uued-failid/    # enne üleslaadimist
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    sys.exit("Vajab Pillow'd:  pip install --break-system-packages Pillow")

REPO = Path(__file__).resolve().parent.parent

# Trüki kvaliteedilävendid lõuendil.
IDEAL = 150
GOOD = 120
FLOOR = 75

EXTS = {".webp", ".jpg", ".jpeg", ".png", ".tif", ".tiff"}


def sizes_from_data() -> list[int]:
    """Loeb SIZES-i cm-väärtused. Ebaõnnestumisel langeb tagasi vaikimisi."""
    try:
        src = (REPO / "data" / "pood.ts").read_text(encoding="utf-8")
        block = re.search(r"export const SIZES[^=]*=\s*\[(.*?)\n\];", src, re.S)
        if block:
            found = [int(m) for m in re.findall(r"\bcm:\s*(\d+)", block.group(1))]
            if found:
                return sorted(set(found))
    except OSError:
        pass
    return [20, 30, 40, 50]


def dpi(px: int, cm: int) -> float:
    return px / (cm / 2.54)


def max_cm(px: int, target: int) -> float:
    return px * 2.54 / target


def main() -> int:
    root = Path(sys.argv[1]) if len(sys.argv) > 1 else REPO / "public" / "pood"
    if not root.exists():
        sys.exit(f"Pole olemas: {root}")

    files = sorted(p for p in root.rglob("*") if p.suffix.lower() in EXTS)
    if not files:
        sys.exit(f"Pilte ei leidnud: {root}")

    sizes = sizes_from_data()
    biggest = max(sizes)

    print(f"{len(files)} faili · müügis mõõdud {', '.join(f'{c}×{c}' for c in sizes)} cm")
    print(f"lävendid: {IDEAL}+ tipp · {GOOD}+ hea · {FLOOR}+ talutav · alla selle ei müü\n")

    failures: list[tuple[Path, int, float]] = []

    for f in files:
        try:
            with Image.open(f) as im:
                w, h = im.size
        except OSError:
            print(f"  ?  {f.relative_to(root)}  — ei avane")
            continue

        side = min(w, h)
        d = dpi(side, biggest)

        if d >= GOOD:
            mark, note = "OK ", ""
        elif d >= FLOOR:
            mark, note = "!  ", "  piiri peal"
        else:
            mark, note = "EI ", "  liiga vähe"
            failures.append((f, side, d))

        square = "" if w == h else f"  (ei ole ruut: {w}×{h})"
        print(
            f"  {mark}{f.relative_to(root)!s:<40} {w}×{h}"
            f"  →  {d:5.0f} DPI @ {biggest} cm"
            f"  ·  kuni {max_cm(side, GOOD):4.0f} cm heas kvaliteedis{note}{square}"
        )

    print()
    for target_cm in (60, 80, 100, 120):
        need = round(target_cm / 2.54 * GOOD)
        print(f"  {target_cm}×{target_cm} cm müügiks on vaja {need} px külge")

    if failures:
        print(f"\n{len(failures)} faili ei kanna välja {biggest} cm mõõtu:")
        for f, side, d in failures:
            print(f"  {f.relative_to(root)}  {side} px  =  {d:.0f} DPI")
        return 1

    print(f"\nKõik failid kannavad välja {biggest} cm.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
