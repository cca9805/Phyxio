import re

def clean_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace $...$ with `...`
    content = re.sub(r'\$(.*?)\$', r'`\1`', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

clean_file('frontend/src/data_v2_i18n/fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/teorema-impulso-momento/teoria.md')
clean_file('frontend/src/data_v2_i18n/fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/teorema-impulso-momento/teoria.en.md')
