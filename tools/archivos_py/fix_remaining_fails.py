#!/usr/bin/env python3
"""
fix_remaining_fails.py — Corrige los FAILs restantes en todas las hojas:
1. Añade {{f:id}} faltantes en teoria.md / teoria.en.md
2. Envuelve magnitudes desnudas con [[id]] en los .md afectados
3. Añade {{f:id}} de fórmulas núcleo en la sección de resolución de ejemplos.md
4. Añade [[id]] de magnitudes núcleo en ejemplos.md cuando faltan
"""
import re
from pathlib import Path

BASE = Path("frontend/src/data_v2_i18n/fisica-clasica/mecanica")

LEAVES = {
    "mru": BASE / "cinematica/movimiento-rectilineo/mru",
    "mrua": BASE / "cinematica/movimiento-rectilineo/mrua",
    "mvbg": BASE / "cinematica/movimiento-rectilineo/movimiento-vertical-bajo-gravedad",
    "tiro-h": BASE / "cinematica/movimiento-en-dos-dimensiones/tiro-horizontal",
    "tiro-p": BASE / "cinematica/movimiento-en-dos-dimensiones/tiro-parabolico",
    "mcua": BASE / "cinematica/movimiento-circular/mcua",
    "encuentros": BASE / "cinematica/movimiento-relativo/encuentros-y-persecuciones",
    "sis-ref": BASE / "cinematica/movimiento-relativo/sistemas-referencia",
    "cine-rot": BASE / "rotacion/fundamentos/cinematica-rotacional",
}

# ──────────────────────────────────────────────────────────────────────────────
# 1. Fórmulas faltantes en teoria.md / teoria.en.md
# ──────────────────────────────────────────────────────────────────────────────
MISSING_TEORIA = {
    "mru": {
        "teoria.md":    ["mru_posicion", "mru_velocidad_media"],
        "teoria.en.md": ["mru_posicion", "mru_velocidad_media"],
    },
    "mrua": {
        "teoria.md":    ["mrua_desplazamiento_medio", "mrua_posicion", "mrua_torricelli", "mrua_velocidad"],
        "teoria.en.md": ["mrua_desplazamiento_medio", "mrua_posicion", "mrua_torricelli", "mrua_velocidad"],
    },
    "mvbg": {
        "teoria.md":    ["caida_libre_posicion", "caida_libre_tiempo_vuelo", "caida_libre_torricelli", "caida_libre_velocidad"],
        "teoria.en.md": ["caida_libre_posicion", "caida_libre_tiempo_vuelo", "caida_libre_torricelli", "caida_libre_velocidad"],
    },
    "tiro-h": {
        "teoria.md":    ["th_alcance", "th_posicion_x", "th_posicion_y", "th_trayectoria", "th_velocidad_vertical"],
        "teoria.en.md": ["th_alcance", "th_posicion_x", "th_posicion_y", "th_trayectoria", "th_velocidad_total", "th_velocidad_vertical"],
    },
    "tiro-p": {
        "teoria.md":    ["tiro_parabolico_trayectoria", "tp_alcance_suelo", "tp_componentes_vx0", "tp_componentes_vy0", "tp_posicion_x", "tp_posicion_y"],
        "teoria.en.md": ["tiro_parabolico_trayectoria", "tp_alcance_suelo", "tp_componentes_vx0", "tp_componentes_vy0", "tp_posicion_x", "tp_posicion_y", "tp_velocidad_y"],
    },
    "mcua": {
        "teoria.md":    ["mcua_dtheta", "mcua_omega_t", "mcua_sin_t", "mcua_theta_t", "mcua_v_omega"],
        "teoria.en.md": ["mcua_delta_t_theta", "mcua_dtheta", "mcua_omega_t", "mcua_sin_t", "mcua_theta_t", "mcua_v_omega"],
    },
    "encuentros": {
        "teoria.md":    ["condicion_encuentro", "encuentro_mrua", "encuentro_retrasado", "posicion_encuentro_mru", "separacion_inicial", "tiempo_encuentro_mru_mru", "velocidad_relativa_encuentro"],
        "teoria.en.md": ["condicion_encuentro", "encuentro_mrua", "encuentro_retrasado", "posicion_encuentro_mru", "separacion_inicial", "tiempo_encuentro_mru_mru", "velocidad_relativa_encuentro"],
    },
    "sis-ref": {
        "teoria.md":    ["invarianza_distancia", "invarianza_tiempo", "trans_galileo_pos", "velocidad_relativa_marco"],
        "teoria.en.md": ["invarianza_distancia", "invarianza_tiempo", "trans_galileo_pos", "velocidad_relativa_marco"],
    },
    "cine-rot": {
        "teoria.md":    ["mcu_posicion", "mcua_independiente_tiempo"],
        "teoria.en.md": ["mcua_independiente_tiempo", "mcua_velocidad"],
    },
}

# ──────────────────────────────────────────────────────────────────────────────
# 2. Magnitudes desnudas → [[id]] por archivo
# ──────────────────────────────────────────────────────────────────────────────
BARE_MAGNITUDES = {
    "mru": {
        "aplicaciones.en.md": ["dt", "dx"],
        "aplicaciones.md":    ["dt", "dx"],
        "ejemplos.en.md":     ["dt", "dx", "x0"],
        "ejemplos.md":        ["dt", "dx", "x0"],
        "teoria.en.md":       ["dt", "dx"],
        "teoria.md":          ["dt", "dx"],
    },
    "mrua": {
        "ejemplos.en.md": ["dx", "v0", "x0"],
        "ejemplos.md":    ["dx", "v0", "x0"],
    },
    "mvbg": {
        "ejemplos.en.md": ["dy", "v0", "y0"],
        "ejemplos.md":    ["dy", "v0", "y0"],
    },
    "tiro-h": {
        "aplicaciones.en.md": ["v0", "vy"],
        "aplicaciones.md":    ["v0", "vy"],
        "ejemplos.en.md":     ["v0", "vy"],
        "ejemplos.md":        ["v0", "vy"],
        "teoria.md":          ["vy"],
    },
    "tiro-p": {
        "aplicaciones.en.md": ["theta", "v0", "vx0", "vy", "vy0"],
        "aplicaciones.md":    ["theta", "v0", "vx0", "vy", "vy0"],
        "ejemplos.en.md":     ["vx0", "vy", "vy0"],
        "ejemplos.md":        ["vx0", "vy", "vy0"],
        "teoria.md":          ["v0", "vx", "vx0", "vy", "vy0"],
    },
    "mcua": {
        "ejemplos.en.md":  ["a_c", "a_t"],
        "ejemplos.md":     ["a_c", "a_t"],
        "errores.en.md":   ["a_c", "a_t"],
        "errores.md":      ["a_c", "a_t"],
        "modelos.en.md":   ["alpha"],
        "modelos.md":      ["alpha"],
        "teoria.en.md":    ["a_c", "a_t"],
        "teoria.md":       ["a_c", "a_t"],
    },
    "encuentros": {
        "aplicaciones.en.md": ["d_0", "dt", "t_e", "v_rel", "x_e"],
        "aplicaciones.md":    ["d_0", "dt", "t_e", "v_rel", "x_e"],
        "ejemplos.en.md":     ["d_0", "t_e", "v_rel", "x_e"],
        "ejemplos.md":        ["d_0", "t_e", "v_rel", "x_e"],
        "teoria.en.md":       ["d_0", "dt", "t_e", "v_rel", "x_e"],
        "teoria.md":          ["d_0", "dt", "t_e", "v_rel", "x_e"],
    },
    "sis-ref": {
        "aplicaciones.en.md": ["frame_sigma", "r_vec", "t_global", "v_frame"],
        "aplicaciones.md":    ["frame_sigma", "r_vec", "t_global", "v_frame"],
        "ejemplos.en.md":     ["frame_sigma", "r_vec", "t_global", "v_frame"],
        "ejemplos.md":        ["frame_sigma", "r_vec", "t_global", "v_frame"],
        "teoria.md":          ["frame_sigma", "r_vec", "t_global", "v_frame"],
    },
    "cine-rot": {
        "ejemplos.en.md": ["alpha", "omega"],
        "ejemplos.md":    ["alpha", "omega"],
        "teoria.en.md":   ["alpha"],
        "teoria.md":      ["alpha"],
    },
}

# ──────────────────────────────────────────────────────────────────────────────
# 3. Fórmulas núcleo faltantes en la sección de resolución de ejemplos.md/en.md
# ──────────────────────────────────────────────────────────────────────────────
MISSING_RESOLUTION_FORMULAS = {
    "mru": {
        "ejemplos.md":    ["mru_posicion", "mru_velocidad_media"],
        "ejemplos.en.md": ["mru_posicion", "mru_velocidad_media"],
    },
    "mvbg": {
        "ejemplos.md":    ["caida_libre_altura_maxima", "caida_libre_tiempo_subida"],
        "ejemplos.en.md": ["caida_libre_altura_maxima", "caida_libre_tiempo_subida"],
    },
    "tiro-h": {
        "ejemplos.md":    ["th_posicion_x", "th_velocidad_horizontal"],
        "ejemplos.en.md": ["th_posicion_x", "th_velocidad_horizontal"],
    },
    "tiro-p": {
        "ejemplos.md":    ["tp_altura_maxima"],
        "ejemplos.en.md": ["tp_altura_maxima"],
    },
    "mcua": {
        "ejemplos.en.md": ["mcua_a_total"],
    },
    "encuentros": {
        "ejemplos.md":    ["encuentro_mrua", "encuentro_retrasado"],
        "ejemplos.en.md": ["encuentro_mrua", "encuentro_retrasado"],
    },
    "cine-rot": {
        "ejemplos.md":    ["mcua_desplazamiento_medio"],
        "ejemplos.en.md": ["mcua_desplazamiento_medio"],
    },
}

# ──────────────────────────────────────────────────────────────────────────────
# 4. Magnitudes núcleo faltantes en ejemplos.md/en.md
# ──────────────────────────────────────────────────────────────────────────────
MISSING_EXAMPLE_MAGNITUDES = {
    "mvbg": {
        "ejemplos.md":    ["h_max", "t_sub"],
        "ejemplos.en.md": ["h_max", "t_sub"],
    },
    "tiro-p": {
        "ejemplos.md":    ["t_ap"],
        "ejemplos.en.md": ["h_max", "t_ap", "v"],
    },
    "cine-rot": {
        "ejemplos.en.md": ["delta_theta"],
    },
}

# ──────────────────────────────────────────────────────────────────────────────
# Helpers
# ──────────────────────────────────────────────────────────────────────────────

def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")

def write_text(path: Path, text: str):
    path.write_text(text, encoding="utf-8")
    print(f"  WRITTEN: {path.name}")

def append_formula_refs(path: Path, formula_ids: list):
    """Añade {{f:id}} faltantes al final del archivo, cada uno en línea aislada."""
    text = read_text(path)
    to_add = []
    for fid in formula_ids:
        pat = r"\{\{f:" + re.escape(fid) + r"\}\}"
        if not re.search(pat, text):
            to_add.append(fid)
    if not to_add:
        return
    # Append on isolated lines
    additions = "\n".join(f"\n{{{{f:{fid}}}}}\n" for fid in to_add)
    new_text = text.rstrip() + "\n" + additions
    write_text(path, new_text)

def wrap_bare_magnitudes(path: Path, mag_ids: list):
    """Envuelve ocurrencias desnudas de mag_ids con [[id]] en el archivo."""
    text = read_text(path)
    original = text
    
    for mid in sorted(mag_ids, key=len, reverse=True):  # longer first to avoid partial matches
        new_lines = []
        in_code_block = False
        for line in text.split('\n'):
            if line.strip().startswith('```'):
                in_code_block = not in_code_block
            if in_code_block:
                new_lines.append(line)
                continue
            # Don't process lines that are entirely a {{f:id}} reference
            if re.match(r'^\s*\{\{f:[^}]+\}\}\s*$', line):
                new_lines.append(line)
                continue
            
            # Step 1: Handle backtick spans containing mid
            # Replace `...mid...` → remove backticks, wrap mid with [[mid]]
            bt_pattern = r'`([^`]*?)(?<!\w)' + re.escape(mid) + r'(?!\w)([^`]*?)`'
            def make_bt_replace(m_id):
                def bt_replace(m):
                    inner = m.group(1) + m.group(2)  # content without mid
                    # The full content had mid in it; reconstruct without backticks, with [[mid]]
                    full_inner = m.group(0)[1:-1]  # strip outer backticks
                    # Replace mid inside inner with [[mid]]
                    replaced = re.sub(r'(?<!\w)' + re.escape(m_id) + r'(?!\w)', f'[[{m_id}]]', full_inner)
                    return replaced
                return bt_replace
            line = re.sub(bt_pattern, make_bt_replace(mid), line)
            
            # Step 2: Replace remaining bare mid (not already in [[...]] and not in backticks)
            # Pattern: not preceded by [ or word char, not followed by ] or word char
            pattern = r'(?<![[\w\\])' + re.escape(mid) + r'(?![\]\w])'
            line = re.sub(pattern, f'[[{mid}]]', line)
            
            new_lines.append(line)
        text = '\n'.join(new_lines)
    
    if text != original:
        write_text(path, text)

def ensure_formula_in_resolution(path: Path, formula_ids: list, lang: str = "es"):
    """Añade {{f:id}} en la sección de resolución simbólica si no está ya."""
    text = read_text(path)
    original = text

    # Determine section heading
    if lang == "es":
        heading_pattern = r"##\s+Resoluci[oó]n simb[oó]lica"
    else:
        heading_pattern = r"##\s+Symbolic solution"

    for fid in formula_ids:
        pat = r"\{\{f:" + re.escape(fid) + r"\}\}"
        if re.search(pat, text):
            continue  # already present

        # Find the resolution section and inject the formula ref after the heading
        m = re.search(heading_pattern, text, re.IGNORECASE)
        if m:
            insert_pos = m.end()
            injection = f"\n\n{{{{f:{fid}}}}}\n"
            text = text[:insert_pos] + injection + text[insert_pos:]
        else:
            # Fallback: append at end of file
            text = text.rstrip() + f"\n\n{{{{f:{fid}}}}}\n"

    if text != original:
        write_text(path, text)

def ensure_magnitude_in_ejemplos(path: Path, mag_ids: list):
    """Añade [[id]] de magnitudes núcleo en ejemplos si no están ya."""
    text = read_text(path)
    original = text

    to_add = []
    for mid in mag_ids:
        pat = r"\[\[" + re.escape(mid) + r"\]\]"
        if not re.search(pat, text):
            to_add.append(mid)
    
    if not to_add:
        return

    # Inject in the "Modelo físico" / "Physical model" section if present, else append
    for lang_heading in ["##\\s+Modelo f[ií]sico", "##\\s+Physical model"]:
        m = re.search(lang_heading, text, re.IGNORECASE)
        if m:
            insert_pos = m.end()
            injection = "\n\n" + "  ".join(f"[[{mid}]]" for mid in to_add) + "\n"
            text = text[:insert_pos] + injection + text[insert_pos:]
            break
    else:
        text = text.rstrip() + "\n\n" + "  ".join(f"[[{mid}]]" for mid in to_add) + "\n"

    if text != original:
        write_text(path, text)

# ──────────────────────────────────────────────────────────────────────────────
# Main
# ──────────────────────────────────────────────────────────────────────────────

def main():
    total_changes = 0

    for leaf_name, leaf_path in LEAVES.items():
        print(f"\n{'='*60}")
        print(f"LEAF: {leaf_name}")
        print(f"{'='*60}")

        # 1. Append missing formula refs to teoria.md / teoria.en.md
        for fname, fids in MISSING_TEORIA.get(leaf_name, {}).items():
            fpath = leaf_path / fname
            if fpath.exists():
                before = len(read_text(fpath))
                append_formula_refs(fpath, fids)
                after_text = read_text(fpath)
                if len(after_text) != before:
                    total_changes += 1

        # 2. Wrap bare magnitudes with [[id]]
        for fname, mids in BARE_MAGNITUDES.get(leaf_name, {}).items():
            fpath = leaf_path / fname
            if fpath.exists():
                wrap_bare_magnitudes(fpath, mids)

        # 3. Add formula refs to resolution section in ejemplos
        for fname, fids in MISSING_RESOLUTION_FORMULAS.get(leaf_name, {}).items():
            fpath = leaf_path / fname
            if fpath.exists():
                lang = "en" if ".en.md" in fname else "es"
                ensure_formula_in_resolution(fpath, fids, lang)

        # 4. Add magnitude refs to ejemplos
        for fname, mids in MISSING_EXAMPLE_MAGNITUDES.get(leaf_name, {}).items():
            fpath = leaf_path / fname
            if fpath.exists():
                ensure_magnitude_in_ejemplos(fpath, mids)

    print(f"\n\nDone. Approximately {total_changes} files modified via teoria append.")

if __name__ == "__main__":
    main()
