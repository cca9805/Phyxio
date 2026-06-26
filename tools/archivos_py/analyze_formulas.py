
with open(r'c:\Users\USER\Desktop\Phyxio\docsV2\formulas-mecanica.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

subblocks = set()
formulas_count = 0
for line in lines:
    if '|' in line and 'Área' not in line and '---' not in line:
        parts = line.split('|')
        if len(parts) > 3:
            subblocks.add(parts[3].strip())
            formulas_count += 1

print(f"Subblocks found in file: {subblocks}")
print(f"Total formulas: {formulas_count}")
