import glob, re
files = glob.glob("frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/climatizacion/eficiencia/*.md")
for f in files:
    with open(f, "r", encoding="utf-8") as file:
        c = file.read()
    
    # Fix remaining bad tags
    c = re.sub(r'\[\[efficiency\]\]', r'[[efficiency|SCOP]]', c, flags=re.IGNORECASE)
    c = re.sub(r'\[\[euros\]\]', r'euros', c, flags=re.IGNORECASE)
    c = re.sub(r'\[\[kilowatt-hours\]\]', r'kilowatt-hours', c, flags=re.IGNORECASE)
    c = re.sub(r'\[\[consigna\]\]', r'consigna', c, flags=re.IGNORECASE)
    c = re.sub(r'\[\[kilowatts\]\]', r'kilowatts', c, flags=re.IGNORECASE)
    c = re.sub(r'\[\[kilovatios\]\]', r'kilovatios', c, flags=re.IGNORECASE)
    c = re.sub(r'\[\[confort\]\]', r'confort', c, flags=re.IGNORECASE)
    
    # Add "# Real-world example" back to ejemplos.en.md
    if "ejemplos.en.md" in f:
        if "# Real-world example" not in c:
            c = c.replace("## Context", "# Real-world example\n\n## Context")
            
    # Remove raw IDs to fix "magnitudes visibles usan formato [[id]]"
    # for ejemplos.md
    if "ejemplos.md" in f:
        c = re.sub(r'(?<!\[)(?<!\[\w\|)(?<!\{\{f:)\bE_est\b(?!\])', r'[[E_est]]', c)
        c = re.sub(r'(?<!\[)(?<!\[\w\|)(?<!\{\{f:)\bQ_est\b(?!\])', r'[[Q_est]]', c)
    if "errores.en.md" in f or "errores.md" in f or "modelos.en.md" in f or "modelos.md" in f:
        c = re.sub(r'(?<!\[)(?<!\[\w\|)(?<!\{\{f:)\bSCOP\b(?!\])', r'[[SCOP]]', c)

    with open(f, "w", encoding="utf-8") as file:
        file.write(c)
