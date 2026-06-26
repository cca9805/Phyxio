from pathlib import Path

path = Path(r"C:/Users/USER/Desktop/Phyxio/tools/phyxio_leaf_validator.py")
text = path.read_text(encoding="utf-8")

pairs = [
    ("Aí±adir", "Añadir"),
    ("Aí±ade", "Añade"),
    ("seí±ales", "señales"),
    ("Seí±ales", "Señales"),
    ("íºtiles", "útiles"),
    ("DIDíCTICO", "DIDÁCTICO"),
    ("DINíMICA", "DINÁMICA"),
    ("SEMíNTICA", "SEMÁNTICA"),
    ("INTERPRETACIí“N", "INTERPRETACIÓN"),
    ("íºtil", "útil"),
    ("Níºcleo", "Núcleo"),
    ("â†”", "↔"),
    ("â€”", "—"),
    ("â•", "="),
    ("â‰ˆ", "≈"),
    ("[A-Zíí‰íí“íš][a-záéíóíºí±]+", "[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+"),
    ("[a-zA-Záéíóíºí±0-9", "[a-zA-Záéíóúñ0-9"),
    ("físico íºtil", "físico útil"),
    ("segíºn", "según"),
    ("pequeí±o", "pequeño"),
]
for old, new in pairs:
    text = text.replace(old, new)

# Cleanup duplicated emoji arrays introduced by previous conversion.
text = text.replace('["🟢", "🟢"]', '["🟢"]')
text = text.replace('["🔵", "🔵"]', '["🔵"]')
text = text.replace('["🔴", "🔴"]', '["🔴"]')

path.write_text(text, encoding="utf-8")
print("done")
