import glob, re

files = glob.glob("frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/climatizacion/eficiencia/*.md")

valid_ids = ["Q_est", "SCOP", "E_est", "precio_medio", "C_est", "E_base", "E_nuevo", "Ahorro_pct", "base", "nuevo"]

for f in files:
    with open(f, "r", encoding="utf-8") as file:
        content = file.read()
    
    # Fix inverted tags [[id|Label]] -> [[Label|id]]
    for vid in valid_ids:
        pattern = r'\[\[' + vid + r'\|([^\]]+)\]\]'
        content = re.sub(pattern, r'[[\1|' + vid + ']]', content)

    # Fix invalid tags
    content = re.sub(r'\[\[eficiencia\]\]', r'[[eficiencia|SCOP]]', content)
    content = re.sub(r'\[\[efficiency\]\]', r'[[efficiency|SCOP]]', content)
    content = re.sub(r'\[\[Efficiency\]\]', r'[[Efficiency|SCOP]]', content)
    content = re.sub(r'\[\[consigna\]\]', r'consigna', content)
    content = re.sub(r'\[\[demanda\]\]', r'[[demanda|Q_est]]', content)
    content = re.sub(r'\[\[demand\]\]', r'[[demand|Q_est]]', content)
    content = re.sub(r'\[\[consumo\]\]', r'[[consumo|E_est]]', content)
    content = re.sub(r'\[\[consumption\]\]', r'[[consumption|E_est]]', content)
    content = re.sub(r'\[\[euros\]\]', r'euros', content)
    content = re.sub(r'\[\[kilovatios\]\]', r'kilovatios', content)
    content = re.sub(r'\[\[kilowatts\]\]', r'kilowatts', content)
    content = re.sub(r'\[\[kilowatt-hours\]\]', r'kilowatt-hours', content)
    content = re.sub(r'\[\[new\]\]', r'[[new|nuevo]]', content)
    content = re.sub(r'\[\[confort\]\]', r'confort', content)

    # Fix raw occurrences by wrapping them in [[id]] if they are isolated words
    # Only if they are not already inside [[ ]] or {{ }}
    for vid in valid_ids:
        # Complex regex to replace isolated raw valid_ids with [[valid_id]]
        # e.g., if we see `Ahorro_pct` but not `[[Ahorro_pct]]`
        # We find occurrences that don't have `[` before them
        pattern = r'(?<!\[)(?<!\[\w\|)(?<!\{\{f:)\b' + vid + r'\b(?!\])'
        content = re.sub(pattern, r'[[' + vid + ']]', content)

    with open(f, "w", encoding="utf-8") as file:
        file.write(content)

print("Tags fixed.")
