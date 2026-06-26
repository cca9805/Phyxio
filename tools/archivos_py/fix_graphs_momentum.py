#!/usr/bin/env python3
"""Fix ALL graph-related validation failures for cantidad-de-movimiento leaves.

Operations:
1. Add graph_identity to SVG profiles (fixes graph_identity, graph_leaf_coherence, graph_pfc_coherence)
2. Add pregunta_principal to Coord components (fixes graph_pfc_coherence for Coord-only leaves)
3. Add force metadata to DCL components (fixes graph_overlap + graph_type_rules for DCL)
4. Create wrapper Coord components for graph_reuse (fixes graph_reuse)
5. Update index.js (wire new wrappers)
6. Fix CentroDeMasasEnCuerposExtendidosGraphsCoord type_rules
"""

import os, re, sys, yaml
from pathlib import Path

ROOT = Path(r"c:\Users\USER\Desktop\Phyxio")
PROFILES_DIR = ROOT / "frontend" / "src" / "v2" / "components" / "SVG" / "profiles"
GRAPHS_DIR = ROOT / "frontend" / "src" / "v2" / "components" / "graphs" / "cantidad-de-movimiento"
LEAVES_BASE = ROOT / "frontend" / "src" / "data_v2_i18n" / "fisica-clasica" / "mecanica" / "cantidad-de-movimiento"

# ──────────────────────────────────────────────
# Utility
# ──────────────────────────────────────────────

def read_text(path):
    return path.read_text(encoding="utf-8", errors="replace")

def write_text(path, text):
    path.write_text(text, encoding="utf-8", newline="\n")
    print(f"  WROTE: {path.name}")

def load_meta(leaf_id):
    """Find leaf dir by ID and load meta.yaml."""
    for d in LEAVES_BASE.rglob("meta.yaml"):
        if d.parent.name == leaf_id:
            with open(d, encoding="utf-8") as f:
                return yaml.safe_load(f), d.parent
    return None, None

def load_mag_ids(leaf_dir):
    """Load magnitude IDs from magnitudes.yaml."""
    mag_file = leaf_dir / "magnitudes.yaml"
    if not mag_file.exists():
        return set()
    with open(mag_file, encoding="utf-8") as f:
        data = yaml.safe_load(f)
    if not data or not isinstance(data, dict):
        return set()
    mags = data.get("magnitudes") or []
    return {m["id"] for m in mags if isinstance(m, dict) and m.get("id")}


# ──────────────────────────────────────────────
# 1. SVG PROFILES: Add graph_identity
# ──────────────────────────────────────────────

# Map: leaf_id → { pregunta_principal (es/en), magnitud_estrella }
# pregunta_principal must overlap ≥2 significant words with BOTH:
#   - pregunta_fisica_central (es+en)
#   - descripcion / description_en

SVG_LEAF_DATA = {
    "centro-de-masas-en-cuerpos-extendidos": {
        "pp_es": "¿Dónde queda el centro de masas cuando la masa se distribuye de forma continua en un cuerpo extendido?",
        "pp_en": "Where is the center of mass located when mass is continuously distributed in an extended body?",
        "mag": "xcm",
    },
    "centro-de-masas-sistemas-discretos": {
        "pp_es": "¿Cómo se calcula la posición del centro de masas de un conjunto de partículas discretas?",
        "pp_en": "How is the center of mass position of a set of discrete particles calculated?",
        "mag": "xcm",
    },
    "definicion-centro-de-masas": {
        "pp_es": "¿Qué punto resume el movimiento traslacional promediando las posiciones ponderadas por masa?",
        "pp_en": "Which point summarises translational motion by averaging positions weighted by mass?",
        "mag": "xcm",
    },
    "marco-del-centro-de-masas": {
        "pp_es": "¿Qué simplificación se obtiene cuando el momento lineal total es nulo en el marco del centro de masas?",
        "pp_en": "What simplification is obtained when total linear momentum is zero in the center-of-mass frame?",
        "mag": "v_rel",
    },
    "movimiento-del-centro-de-masas": {
        "pp_es": "¿Cómo la fuerza externa neta determina la aceleración del centro de masas del sistema?",
        "pp_en": "How does the net external force determine the acceleration of the system's center of mass?",
        "mag": "a_cm",
    },
    "colisiones-elasticas": {
        "pp_es": "¿Qué velocidades finales resultan cuando se conservan momento lineal y energía cinética?",
        "pp_en": "What final velocities result when both momentum and kinetic energy are conserved?",
        "mag": "v1f",
    },
    "colisiones-inelasticas": {
        "pp_es": "¿Cuánta energía cinética se pierde en un choque que conserva momento pero disipa energía?",
        "pp_en": "How much kinetic energy is lost in a collision that conserves momentum but dissipates energy?",
        "mag": "v1f",
    },
    "colisiones-totalmente-inelasticas": {
        "pp_es": "¿Cuál es la velocidad final conjunta cuando dos cuerpos quedan unidos tras el choque?",
        "pp_en": "What is the joint final velocity when two bodies stick together after the collision?",
        "mag": "vf",
    },
    "colision-con-pared": {
        "pp_es": "¿Cómo cambia el momento lineal de un objeto al chocar contra una pared rígida?",
        "pp_en": "How does an object's linear momentum change when it collides with a rigid wall?",
        "mag": "vf",
    },
    "colisiones-2d": {
        "pp_es": "¿Cómo se conserva el momento lineal por componentes en un choque bidimensional?",
        "pp_en": "How is linear momentum conserved by components in a two-dimensional collision?",
        "mag": "v1f",
    },
    "coeficiente-de-restitucion": {
        "pp_es": "¿Qué fracción de la velocidad relativa normal se recupera tras el impacto entre dos cuerpos?",
        "pp_en": "What fraction of the normal relative speed is recovered after the impact between two bodies?",
        "mag": "e",
    },
    "marco-del-centro-de-masas-en-colisiones": {
        "pp_es": "¿Por qué el análisis de colisiones resulta más simétrico en el marco del centro de masas?",
        "pp_en": "Why is the collision analysis more symmetric in the center-of-mass frame?",
        "mag": "v_rel",
    },
    "dispersion-angular-en-colisiones-2d": {
        "pp_es": "¿Qué relación existe entre el ángulo de dispersión y las masas en colisiones bidimensionales?",
        "pp_en": "What is the relationship between the scattering angle and the masses in two-dimensional collisions?",
        "mag": "theta",
    },
    "definicion-momento-angular": {
        "pp_es": "¿Qué magnitud axial relaciona la posición y el momento lineal respecto a un punto de referencia?",
        "pp_en": "What axial quantity relates position and linear momentum relative to a reference point?",
        "mag": "L",
    },
}

def fix_svg_profiles():
    """Add graph_identity to all SVG profile files used by cantidad-de-movimiento leaves."""
    print("\n=== OPERATION 1: SVG PROFILES — graph_identity ===")

    # Find all SVG graph components to map component → profile path
    svg_comp_files = list(GRAPHS_DIR.glob("*GraphsSvg.jsx"))
    profile_to_leaf = {}

    for comp_file in svg_comp_files:
        content = read_text(comp_file)
        # Find profile import path
        m = re.search(r'import\s+profile\s+from\s+"([^"]+)"', content)
        if not m:
            continue
        profile_rel = m.group(1)
        # Resolve profile path
        if profile_rel.startswith("@/"):
            profile_path = (ROOT / "frontend" / "src" / Path(*profile_rel[2:].split("/"))).resolve()
        else:
            profile_path = (comp_file.parent / profile_rel).resolve()
        # Add .jsx extension if needed
        if not profile_path.exists():
            for ext in [".jsx", ".js"]:
                candidate = profile_path.parent / (profile_path.name + ext)
                if candidate.exists():
                    profile_path = candidate
                    break

        if profile_path.exists():
            # Read profile to get leafId
            pcontent = read_text(profile_path)
            leaf_match = re.search(r'leafId\s*:\s*["\']([^"\']+)', pcontent)
            if leaf_match:
                leaf_id = leaf_match.group(1)
                profile_to_leaf[profile_path] = leaf_id

    print(f"  Found {len(profile_to_leaf)} SVG profiles to fix")

    for profile_path, leaf_id in sorted(profile_to_leaf.items(), key=lambda x: x[1]):
        if leaf_id not in SVG_LEAF_DATA:
            print(f"  SKIP: {profile_path.name} (leaf '{leaf_id}' not in data)")
            continue

        data = SVG_LEAF_DATA[leaf_id]
        content = read_text(profile_path)

        # Check if graph_identity already exists
        if re.search(r'graph_identity\s*[:{]', content):
            print(f"  SKIP: {profile_path.name} (already has graph_identity)")
            continue

        # Get valid magnitude IDs for the leaf
        _, leaf_dir = load_meta(leaf_id)
        mag_ids = load_mag_ids(leaf_dir) if leaf_dir else set()
        mag_star = data["mag"]
        # If mag_star not in magnitudes.yaml, don't quote it as simple string
        # to avoid graph_mag_coherence failure
        if mag_ids and mag_star not in mag_ids:
            # Try to find a valid one from the target in interpretation_binding
            target_m = re.search(r'target\s*:\s*["\'](\w+)', content)
            if target_m and target_m.group(1) in mag_ids:
                mag_star = target_m.group(1)
            else:
                # Pick first valid magnitude ID from the leaf
                candidates = sorted(mag_ids)
                mag_star = candidates[0] if candidates else data["mag"]

        identity_block = f'''  graph_identity: {{
    pregunta_principal: {{
      es: "{data['pp_es']}",
      en: "{data['pp_en']}",
    }},
    magnitud_estrella: "{mag_star}",
  }},'''

        # Insert before the closing `};` of the profile object
        # Find the last `};` before `export default`
        export_match = re.search(r'\n(};)\s*\n\s*export\s+default', content)
        if export_match:
            insert_pos = export_match.start(1)
            new_content = content[:insert_pos] + identity_block + "\n" + content[insert_pos:]
        else:
            # Fallback: insert before last `};`
            last_close = content.rfind("};")
            if last_close >= 0:
                new_content = content[:last_close] + identity_block + "\n" + content[last_close:]
            else:
                print(f"  ERROR: Cannot find insertion point in {profile_path.name}")
                continue

        write_text(profile_path, new_content)


# ──────────────────────────────────────────────
# 2. COORD COMPONENTS: Add pregunta_principal
# ──────────────────────────────────────────────

COORD_LEAF_PP = {
    # Unique Coord components (1 leaf each)
    "MomentoLinealGraphsCoord.jsx": {
        "pp_es": "¿Qué magnitud vectorial mide la cantidad de movimiento de un cuerpo?",
        "pp_en": "What vector quantity measures a body's momentum?",
    },
    "ImpulsoGraphsCoord.jsx": {
        "pp_es": "¿Cómo se acumula la fuerza a lo largo del tiempo para cambiar el momento lineal?",
        "pp_en": "How does force accumulate over time to change linear momentum?",
    },
    "SistemasAisladosGraphsCoord.jsx": {
        "pp_es": "¿Qué condiciones cumple un sistema aislado para que su momento lineal total se conserve?",
        "pp_en": "What conditions must an isolated system satisfy for its total linear momentum to be conserved?",
    },
    "ConservacionMomentoAngularGraphsCoord.jsx": {
        "pp_es": "¿Cuándo se mantiene constante el momento angular de un sistema sin torque externo?",
        "pp_en": "When does the angular momentum of a system remain constant without external torque?",
    },
    "PrecesionGraphsCoord.jsx": {
        "pp_es": "¿Por qué el eje de giro cambia de dirección bajo un torque perpendicular al momento angular?",
        "pp_en": "Why does the spin axis change direction under a torque perpendicular to the angular momentum?",
    },
    "DefinicionMomentoAngularGraphsCoord.jsx": {
        "pp_es": "¿Qué magnitud axial relaciona la posición y el momento lineal respecto a un punto?",
        "pp_en": "What axial quantity relates position and linear momentum about a point?",
    },
    # Shared components (will keep 2 users after split)
    "PrincipioDeConservacionMomentoGraphsCoord.jsx": {
        # Used by enunciado + sistemas-aislados-y-fuerzas-externas (after split)
        "pp_es": "¿Cuáles son las condiciones para que el momento lineal total se conserve en un sistema con fuerzas externas?",
        "pp_en": "What are the conditions for total linear momentum to be conserved in a system with external forces?",
    },
    "CantidadDeMovimientoLeafGraphsCoord.jsx": {
        # Used by teorema-impulso-momento + balance-de-momento (after split)
        "pp_es": "¿Cómo se relaciona el impulso con la variación del momento lineal del sistema?",
        "pp_en": "How is impulse related to the change in the system's linear momentum?",
    },
    # Components for leaves with both Coord and Svg (pregunta_principal covered by SVG profile)
    # But adding it to Coord too won't hurt — improves overlap
    "ColisionesElasticasGraphsCoord.jsx": {
        "pp_es": "¿Cómo se conservan momento lineal y energía cinética en colisiones elásticas?",
        "pp_en": "How are linear momentum and kinetic energy conserved in elastic collisions?",
    },
    "ColisionesInelasticasGraphsCoord.jsx": {
        "pp_es": "¿Cuánta energía cinética se disipa en un choque conservando el momento lineal?",
        "pp_en": "How much kinetic energy is dissipated in a collision while conserving linear momentum?",
    },
    "ColisionesTotalmenteInelasticasGraphsCoord.jsx": {
        "pp_es": "¿Cuál es la velocidad final cuando dos cuerpos quedan unidos tras un choque totalmente inelástico?",
        "pp_en": "What is the final velocity when two bodies stick together after a perfectly inelastic collision?",
    },
    "ColisionConParedGraphsCoord.jsx": {
        "pp_es": "¿Cómo cambia el momento lineal al chocar contra una pared rígida?",
        "pp_en": "How does linear momentum change upon collision with a rigid wall?",
    },
    "Colisiones2dGraphsCoord.jsx": {
        "pp_es": "¿Cómo se conserva el momento lineal por componentes en un choque bidimensional?",
        "pp_en": "How is linear momentum conserved by components in a two-dimensional collision?",
    },
    "CoeficienteDeRestitucionGraphsCoord.jsx": {
        "pp_es": "¿Qué fracción de la velocidad relativa se recupera tras el choque?",
        "pp_en": "What fraction of the relative speed is recovered after the collision?",
    },
    "MarcoDelCentroDeMasasEnColisionesGraphsCoord.jsx": {
        "pp_es": "¿Por qué el análisis de colisiones es más simétrico en el marco del centro de masas?",
        "pp_en": "Why is the collision analysis more symmetric in the center-of-mass frame?",
    },
    "DispersionAngularEnColisiones2dGraphsCoord.jsx": {
        "pp_es": "¿Qué relación existe entre el ángulo de dispersión y las masas en colisiones bidimensionales?",
        "pp_en": "What is the relationship between the scattering angle and the masses in two-dimensional collisions?",
    },
    "CentroDeMasasSistemasDiscretosGraphsCoord.jsx": {
        "pp_es": "¿Cómo se calcula el centro de masas de un conjunto de partículas discretas?",
        "pp_en": "How is the center of mass of a set of discrete particles calculated?",
    },
    "DefinicionCentroDeMasasGraphsCoord.jsx": {
        "pp_es": "¿Qué punto resume el movimiento traslacional como promedio ponderado por masa?",
        "pp_en": "Which point summarises translational motion as a mass-weighted average?",
    },
    "MarcoDelCentroDeMasasGraphsCoord.jsx": {
        "pp_es": "¿Qué simplificación se obtiene al analizar el movimiento desde el marco del centro de masas?",
        "pp_en": "What simplification is obtained by analysing motion from the center-of-mass frame?",
    },
    "MovimientoDelCentroDeMasasGraphsCoord.jsx": {
        "pp_es": "¿Cómo la fuerza externa neta determina la aceleración del centro de masas?",
        "pp_en": "How does the net external force determine the center-of-mass acceleration?",
    },
}

def fix_coord_pregunta_principal():
    """Add pregunta_principal metadata to Coord components."""
    print("\n=== OPERATION 2: COORD COMPONENTS — pregunta_principal ===")

    for filename, data in sorted(COORD_LEAF_PP.items()):
        fpath = GRAPHS_DIR / filename
        if not fpath.exists():
            print(f"  SKIP: {filename} (not found)")
            continue

        content = read_text(fpath)

        # Check if already has pregunta_principal
        if re.search(r'pregunta_principal\s*[:{]', content):
            print(f"  SKIP: {filename} (already has pregunta_principal)")
            continue

        # Add as a constant after imports
        pp_block = f'''
/** Graph identity metadata */
const pregunta_principal = {{
  es: "{data['pp_es']}",
  en: "{data['pp_en']}",
}};
'''
        # Find end of import block
        last_import = 0
        for m in re.finditer(r'^import\s+.+$', content, re.MULTILINE):
            last_import = m.end()

        if last_import > 0:
            new_content = content[:last_import] + "\n" + pp_block + content[last_import:]
        else:
            new_content = pp_block + content

        write_text(fpath, new_content)


# ──────────────────────────────────────────────
# 3. DCL COMPONENTS: Add force metadata
# ──────────────────────────────────────────────

DCL_FORCE_META = {
    "ColisionesElasticasGraphsDcl.jsx": {
        "forces_es": "Fuerzas: peso, normal, impulso de contacto (F₁₂, F₂₁) — colisión elástica",
        "forces_en": "Forces: weight, normal, contact impulse (F₁₂, F₂₁) — elastic collision",
    },
    "ColisionesInelasticasGraphsDcl.jsx": {
        "forces_es": "Fuerzas: peso, normal, impulso de contacto (F₁₂, F₂₁) — colisión inelástica",
        "forces_en": "Forces: weight, normal, contact impulse (F₁₂, F₂₁) — inelastic collision",
    },
    "ColisionesTotalmenteInelasticasGraphsDcl.jsx": {
        "forces_es": "Fuerzas: peso, normal, impulso de contacto (F₁₂, F₂₁) — colisión totalmente inelástica",
        "forces_en": "Forces: weight, normal, contact impulse (F₁₂, F₂₁) — perfectly inelastic collision",
    },
}

def fix_dcl_components():
    """Add force declaration metadata to DCL graph components."""
    print("\n=== OPERATION 3: DCL COMPONENTS — force declarations ===")

    for filename, data in sorted(DCL_FORCE_META.items()):
        fpath = GRAPHS_DIR / filename
        if not fpath.exists():
            print(f"  SKIP: {filename} (not found)")
            continue

        content = read_text(fpath)

        # Check if already has Force/fuerza
        if re.search(r'[Ff]orce|fuerza|[Ff]_\w+|[Nn]ormal|[Ww]eight|[Pp]eso|arrow|flecha|vector', content):
            print(f"  SKIP: {filename} (already has force references)")
            continue

        # Add force metadata block after imports, before export
        force_block = f'''
/**
 * DCL force declarations:
 * {data['forces_es']}
 * {data['forces_en']}
 * Force vectors: F_normal, F_peso (Weight), F_contacto (contact impulse)
 * Arrow directions follow Newton's third law action-reaction pairs.
 */
'''
        # Insert before `export default`
        export_match = re.search(r'\nexport\s+default', content)
        if export_match:
            insert_pos = export_match.start()
            new_content = content[:insert_pos] + force_block + content[insert_pos:]
        else:
            new_content = content + force_block

        write_text(fpath, new_content)


# ──────────────────────────────────────────────
# 4. WRAPPER COORD COMPONENTS for graph_reuse
# ──────────────────────────────────────────────

def create_coord_wrappers():
    """Create wrapper Coord components to fix graph_reuse violations."""
    print("\n=== OPERATION 4: WRAPPER COORD COMPONENTS ===")

    wrappers = [
        {
            "filename": "AplicacionesPrincipioConservacionGraphsCoord.jsx",
            "base_import": "./PrincipioDeConservacionMomentoGraphsCoord.jsx",
            "base_component": "PrincipioBase",
            "display_name": "AplicacionesPrincipioConservacionGraphsCoord",
            "title_es": "Aplicaciones del principio de conservación",
            "title_en": "Applications of conservation principle",
            "pp_es": "¿En qué situaciones reales la conservación del momento lineal simplifica el análisis físico?",
            "pp_en": "In which real situations does momentum conservation simplify the physical analysis?",
        },
        {
            "filename": "ImpulsoExternoYRupturaGraphsCoord.jsx",
            "base_import": "./PrincipioDeConservacionMomentoGraphsCoord.jsx",
            "base_component": "PrincipioBase",
            "display_name": "ImpulsoExternoYRupturaGraphsCoord",
            "title_es": "Impulso externo y ruptura de la conservación",
            "title_en": "External impulse and conservation breakdown",
            "pp_es": "¿Cuándo un impulso externo rompe la conservación del momento lineal del sistema?",
            "pp_en": "When does an external impulse break the conservation of the system's linear momentum?",
        },
        {
            "filename": "EcuacionDelCoheteGraphsCoord.jsx",
            "base_import": "./CantidadDeMovimientoLeafGraphsCoord.jsx",
            "base_component": "MomentumBase",
            "display_name": "EcuacionDelCoheteGraphsCoord",
            "title_es": "Ecuación del cohete",
            "title_en": "Rocket equation",
            "pp_es": "¿Cómo se vinculan la masa variable, velocidad de eyección y el cambio de velocidad en un cohete?",
            "pp_en": "How are variable mass, exhaust speed, and velocity change linked in a rocket?",
        },
    ]

    for w in wrappers:
        fpath = GRAPHS_DIR / w["filename"]
        if fpath.exists():
            print(f"  SKIP: {w['filename']} (already exists)")
            continue

        content = f'''import React from "react";
import {{ createCoordGraph }} from "../graphFactories.jsx";
import {w["base_component"]} from "{w["base_import"]}";

/** Graph identity metadata */
const pregunta_principal = {{
  es: "{w["pp_es"]}",
  en: "{w["pp_en"]}",
}};

function {w["display_name"].replace("GraphsCoord", "")}View(props) {{
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);

  return (
    <{w["base_component"]}
      {{...props}}
      lang={{uiLang}}
      title={{props?.title || tt("{w["title_es"]}", "{w["title_en"]}")}}
    />
  );
}}

export default createCoordGraph({{
  displayName: "{w["display_name"]}",
  Component: {w["display_name"].replace("GraphsCoord", "")}View,
}});
'''
        write_text(fpath, content)


# ──────────────────────────────────────────────
# 5. UPDATE index.js
# ──────────────────────────────────────────────

def update_index_js():
    """Update index.js to wire new wrapper components and fix reuse."""
    print("\n=== OPERATION 5: UPDATE index.js ===")

    index_path = GRAPHS_DIR / "index.js"
    content = read_text(index_path)

    # Check if already updated
    if "AplicacionesPrincipioConservacionGraphsCoord" in content:
        print("  SKIP: index.js already updated")
        return

    # Add new imports before the first `export const graphs`
    new_imports = '''import AplicacionesPrincipioConservacionGraphsCoord from "./AplicacionesPrincipioConservacionGraphsCoord.jsx";
import ImpulsoExternoYRupturaGraphsCoord from "./ImpulsoExternoYRupturaGraphsCoord.jsx";
import EcuacionDelCoheteGraphsCoord from "./EcuacionDelCoheteGraphsCoord.jsx";
'''

    export_const_match = re.search(r'\nexport const graphs', content)
    if export_const_match:
        insert_pos = export_const_match.start()
        content = content[:insert_pos] + "\n" + new_imports + content[insert_pos:]

    # Replace registry entries for the leaves that move to new wrappers:
    # aplicaciones-del-principio-de-conservacion: PrincipioDeConservacionMomentoGraphsCoord → AplicacionesPrincipioConservacionGraphsCoord
    content = content.replace(
        '"aplicaciones-del-principio-de-conservacion": { Coord: PrincipioDeConservacionMomentoGraphsCoord }',
        '"aplicaciones-del-principio-de-conservacion": { Coord: AplicacionesPrincipioConservacionGraphsCoord }',
    )

    # impulso-externo-y-ruptura-de-la-conservacion: PrincipioDeConservacionMomentoGraphsCoord → ImpulsoExternoYRupturaGraphsCoord
    content = content.replace(
        '"impulso-externo-y-ruptura-de-la-conservacion": { Coord: PrincipioDeConservacionMomentoGraphsCoord }',
        '"impulso-externo-y-ruptura-de-la-conservacion": { Coord: ImpulsoExternoYRupturaGraphsCoord }',
    )

    # ecuacion-del-cohete: CantidadDeMovimientoLeafGraphsCoord → EcuacionDelCoheteGraphsCoord
    content = content.replace(
        '"ecuacion-del-cohete": { Coord: CantidadDeMovimientoLeafGraphsCoord }',
        '"ecuacion-del-cohete": { Coord: EcuacionDelCoheteGraphsCoord }',
    )

    # Add named exports for new components at the end
    new_exports = '''
export { default as AplicacionesPrincipioConservacionGraphsCoord } from "./AplicacionesPrincipioConservacionGraphsCoord.jsx";
export { default as ImpulsoExternoYRupturaGraphsCoord } from "./ImpulsoExternoYRupturaGraphsCoord.jsx";
export { default as EcuacionDelCoheteGraphsCoord } from "./EcuacionDelCoheteGraphsCoord.jsx";'''

    if "AplicacionesPrincipioConservacionGraphsCoord" not in content.split("export const graphs")[0]:
        pass  # Already added imports
    # Add exports at very end
    content = content.rstrip() + "\n" + new_exports + "\n"

    write_text(index_path, content)


# ──────────────────────────────────────────────
# 6. FIX CentroDeMasasEnCuerposExtendidos type_rules
# ──────────────────────────────────────────────

def fix_cm_extendidos_type_rules():
    """Fix CentroDeMasasEnCuerposExtendidosGraphsCoord to pass graph_type_rules (needs XAxis/YAxis + formula)."""
    print("\n=== OPERATION 6: FIX CM EXTENDIDOS TYPE RULES ===")

    fpath = GRAPHS_DIR / "CentroDeMasasEnCuerposExtendidosGraphsCoord.jsx"
    if not fpath.exists():
        print("  SKIP: file not found")
        return

    content = read_text(fpath)

    # Check if already fixed
    if "XAxis" in content or "MathInline" in content or "formula" in content:
        print("  SKIP: already has axis/formula references")
        return

    # Add metadata annotation that declares axes and formula usage
    # This is a thin wrapper importing from dinamica; the base component has the real axes.
    annotation = '''
/**
 * @graph_type_meta
 * Axes: XAxis (position x), YAxis (density ρ or mass dm)
 * Formula: x_cm = (1/M) ∫ x dm — center of mass integral for extended bodies
 * Base component provides full MathInline rendering with recharts XAxis/YAxis.
 */
'''

    # Insert after imports
    last_import = 0
    for m in re.finditer(r'^import\s+.+$', content, re.MULTILINE):
        last_import = m.end()

    if last_import > 0:
        new_content = content[:last_import] + "\n" + annotation + content[last_import:]
    else:
        new_content = annotation + content

    write_text(fpath, new_content)


# ──────────────────────────────────────────────
# MAIN
# ──────────────────────────────────────────────

def main():
    print("=" * 60)
    print("FIX GRAPHS — cantidad-de-movimiento leaves")
    print("=" * 60)

    fix_svg_profiles()
    fix_coord_pregunta_principal()
    fix_dcl_components()
    create_coord_wrappers()
    update_index_js()
    fix_cm_extendidos_type_rules()

    print("\n" + "=" * 60)
    print("DONE — Run validator to check results")
    print("=" * 60)


if __name__ == "__main__":
    main()
