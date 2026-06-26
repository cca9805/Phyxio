import os, glob, re

d = "frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/climatizacion/eficiencia"
files = glob.glob(d + "/*.md")

replacements = {
    r'\[\[eficiencia\]\]': 'eficiencia',
    r'\[\[kilovatio-hora\]\]': 'kilovatio-hora',
    r'\[\[kWh\|kilovatio-hora\]\]': 'kilovatio-hora',
    r'\[\[confort\]\]': 'confort',
    r'\[\[EUR\]\]': 'EUR',
    r'\[\[crisis\]\]': 'crisis',
    r'\[\[consigna\]\]': 'consigna',
    r'\[\[demanda\]\]': '[[Q_est|demanda]]',
    r'\[\[consumo\]\]': '[[E_est|consumo]]',
    r'\[\[m2\]\]': 'm²',
    r'\[\[kWh\]\]': 'kWh',
    r'\[\[Efficiency\]\]': 'efficiency',
    r'\[\[efficiency\]\]': 'efficiency',
    r'\[\[consumption\]\]': '[[E_est|consumption]]',
    r'\[\[demand\]\]': '[[Q_est|demand]]',
    r'\[\[euros\]\]': 'euros',
    r'\[\[kilowatts\]\]': 'kilowatts',
    r'\[\[kilowatt-hours\]\]': 'kilowatt-hours',
    r'\[\[new\]\]': 'new',
}

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    for k, v in replacements.items():
        content = re.sub(k, v, content)
        
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)

print("Entities fixed.")
