import yaml
import os

BASE_DIR = r'c:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\rotacion'

subblocks = ['fundamentos', 'dinamica', 'energia', 'rodadura', 'momento-angular']

BLOCK_NAME = 'Rotación'
BLOCK_NAME_EN = 'Rotation'

SUBBLOCK_DATA = {
    'fundamentos': ('Fundamentos de Rotación', 'Rotation Fundamentals'),
    'dinamica': ('Dinámica de Rotación', 'Rotational Dynamics'),
    'energia': ('Energía en Rotación', 'Energy in Rotation'),
    'rodadura': ('Rodadura', 'Rolling'),
    'momento-angular': ('Momento Angular', 'Angular Momentum')
}

def sync_leaf(sb_name, leaf_id):
    leaf_path = os.path.join(BASE_DIR, sb_name, leaf_id)
    meta_path = os.path.join(leaf_path, 'meta.yaml')
    
    if os.path.exists(meta_path):
        with open(meta_path, 'r', encoding='utf-8') as f:
            meta = yaml.safe_load(f)
    else:
        meta = {
            'id': leaf_id,
            'titulo': leaf_id.replace('-', ' ').capitalize(),
            'titulo_en': leaf_id.replace('-', ' ').capitalize(),
            'niveles': {'es': ['BACHILLERATO', 'UNIVERSIDAD'], 'en': ['Upper Secondary', 'University']}
        }

    sb_es, sb_en = SUBBLOCK_DATA[sb_name]
    
    meta['bloque'] = BLOCK_NAME
    meta['bloque_en'] = BLOCK_NAME_EN
    meta['subbloque'] = sb_es
    meta['subbloque_en'] = sb_en
    meta['ruta_relativa'] = f"fisica-clasica/mecanica/rotacion/{sb_name}/{leaf_id}"
    
    with open(meta_path, 'w', encoding='utf-8') as f:
        yaml.dump(meta, f, allow_unicode=True, sort_keys=False)

for sb in subblocks:
    sb_path = os.path.join(BASE_DIR, sb)
    if not os.path.exists(sb_path): continue
    for leaf in os.listdir(sb_path):
        if os.path.isdir(os.path.join(sb_path, leaf)):
            sync_leaf(sb, leaf)

print("Meta files synced successfully.")
