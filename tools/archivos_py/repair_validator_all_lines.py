from pathlib import Path

PATH = Path(r"C:/Users/USER/Desktop/Phyxio/tools/phyxio_leaf_validator.py")
lines = PATH.read_text(encoding="utf-8").splitlines()

markers = ("Ã", "Â", "â", "ð")

def badness(s: str) -> int:
    score = 0
    for ch in s:
        o = ord(ch)
        if ch in markers:
            score += 3
        if 0x80 <= o <= 0x9F:
            score += 4
    score += s.count("â") + s.count("Ã") + s.count("Â") + s.count("ð")
    return score

out = []
for line in lines:
    fixed = line
    if any(m in line for m in markers):
        try:
            candidate = line.encode("latin1").decode("utf-8")
            if badness(candidate) <= badness(line):
                fixed = candidate
        except Exception:
            pass
    out.append(fixed)

text = "\n".join(out) + "\n"
text = text.replace("\u00ad", "")
PATH.write_text(text, encoding="utf-8")
print("done")
