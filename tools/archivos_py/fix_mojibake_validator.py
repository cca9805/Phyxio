from pathlib import Path

PATH = Path(r"C:/Users/USER/Desktop/Phyxio/tools/phyxio_leaf_validator.py")
text = PATH.read_text(encoding="utf-8")

replacements = {
    "\u00ad": "",
    "â”€": "-",
    "â€”": "—",
    "â€“": "–",
    "â€¦": "…",
    "â‰¥": "≥",
    "â‰¤": "≤",
    "â†’": "→",
    "â€‘": "-",
    "â€œ": "“",
    "â€\x9d": "”",
    "â€˜": "‘",
    "â€™": "’",
    "â€¢": "•",
    "â‚¬": "€",
    "â„¢": "™",
    "ðŸŸ¢": "🟢",
    "ðŸ”µ": "🔵",
    "ðŸ”´": "🔴",
    "segíºn": "según",
    "segiºn": "según",
    "níºcleo": "núcleo",
    "níºmero": "número",
    "íºnico": "único",
    "bíºsquedas": "búsquedas",
    "mayíºsculas": "mayúsculas",
    "espaí±ol": "español",
    "comíºn": "común",
    "algíºn": "algún",
    "ningíºn": "ningún",
    "aí±adir": "añadir",
    "pestaí±a": "pestaña",
    "pequeí±o": "pequeño",
    "fíƒÂ³rmulas": "fórmulas",
    "Tâ»Â²": "T⁻²",
}

for bad, good in replacements.items():
    text = text.replace(bad, good)

# Remove C1 control chars commonly introduced by mojibake.
text = "".join(ch for ch in text if ord(ch) not in {0x81, 0x8D, 0x90, 0x9D})

PATH.write_text(text, encoding="utf-8")
print("done")
