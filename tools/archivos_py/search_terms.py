
terms = ['Potencia', 'Polea', 'Torsion', 'Viscosidad', 'Bernoulli', 'Capilaridad', 'Tension superficial', 'Elasticidad', 'Young', 'Poiseuille', 'Stokes']
f_path = r'c:\Users\USER\Desktop\Phyxio\docsV2\formulas-mecanica.md'

with open(f_path, 'r', encoding='utf-8') as f:
    content = f.read().lower()

print("Búsqueda de términos específicos:")
for t in terms:
    found = "Encontrado" if t.lower() in content else "NO ENCONTRADO"
    print(f"- {t}: {found}")
