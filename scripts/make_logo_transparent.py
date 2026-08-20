from PIL import Image
from pathlib import Path

assets = Path(r"C:\Users\PC\.cursor\projects\c-Users-PC-cursor-P27website\assets")
brand = Path(r"C:\Users\PC\.cursor\P27website\public\brand")

# Newest shared horizontal logo
shared = sorted(assets.glob("*p27logo_small__horizontal*.png"), key=lambda p: p.stat().st_mtime, reverse=True)
src = Image.open(shared[0] if shared else brand / "p27-solver-mark.png").convert("RGBA")
pixels = src.load()
w, h = src.size
for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if r <= 45 and g <= 45 and b <= 45:
            pixels[x, y] = (0, 0, 0, 0)

out = brand / "p27-solver-mark-transparent.png"
src.save(out)
print(f"saved {out} {w}x{h}")

# Cube crop from transparent logo: left square-ish region
# Find content bounds on left for cube
xs = []
ys = []
for y in range(h):
    for x in range(w):
        if pixels[x, y][3] > 10:
            xs.append(x)
            ys.append(y)
minx, maxx, miny, maxy = min(xs), max(xs), min(ys), max(ys)
# Cube is left part before text gap — find large empty vertical gap
gap_start = None
empty_run = 0
for x in range(minx, maxx + 1):
    col_empty = all(pixels[x, y][3] <= 10 for y in range(miny, maxy + 1))
    if col_empty:
        empty_run += 1
        if empty_run >= 8 and gap_start is None:
            gap_start = x - empty_run + 1
            break
    else:
        empty_run = 0

cube_right = gap_start if gap_start else minx + int((maxx - minx) * 0.35)
cube = src.crop((minx, miny, cube_right, maxy + 1))
cube_out = brand / "p27-cube.png"
cube.save(cube_out)
print(f"saved cube {cube_out} {cube.size}")
