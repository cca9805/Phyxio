import os

filepath = r"c:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\ondas\ondas-mecanicas\ondas-en-solidos\ondas-flexionales-en-vigas\interpretacion.yaml"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Define the exact substitutions to perform safely
replacements = [
    # Bracketed references
    ("[[E_young]]", "[[modulo_de_young]]"),
    ("[[I_seccion]]", "[[momento_de_inercia_de_la_seccion_transversal]]"),
    
    # Target keys
    ("  E_young:", "  modulo_de_young:"),
    ("  I_seccion:", "  momento_de_inercia_de_la_seccion_transversal:"),
    
    # Semantic roles
    ("Resultado de E_young", "Resultado de modulo_de_young"),
    ("Result of E_young", "Result of modulo_de_young"),
    ("Resultado de I_seccion", "Resultado de momento_de_inercia_de_la_seccion_transversal"),
    ("Result of I_seccion", "Result of momento_de_inercia_de_la_seccion_transversal"),
    
    # Rule IDs
    ("E_young_", "modulo_de_young_"),
    ("I_seccion_", "momento_de_inercia_de_la_seccion_transversal_"),
]

modified_content = content
for target, replacement in replacements:
    modified_content = modified_content.replace(target, replacement)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(modified_content)

print("Done. Replacements applied successfully to ondas-flexionales-en-vigas/interpretacion.yaml.")
