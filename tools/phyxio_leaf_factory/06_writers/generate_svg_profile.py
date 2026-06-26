#!/usr/bin/env python3
"""
Generador automático de perfiles SVG para leaves de Phyxio.
Crea archivos .svg.profile.jsx basados en metadatos del leaf.
"""

import os
import re
import argparse
from pathlib import Path


def snake_to_pascal(snake_str):
    """Convierte snake_case a PascalCase."""
    return ''.join(word.capitalize() for word in snake_str.split('_'))


def get_domain_from_leaf_id(leaf_id):
    """Determina el dominio físico desde el ID del leaf."""
    domains = {
        'termodinamica': ['conveccion', 'conduccion', 'radiacion', 'calor', 'entropia', 'entalpia', 'temperatura'],
        'mecanica': ['dinamica', 'estatica', 'movimiento', 'velocidad', 'aceleracion', 'fuerza', 'masa'],
        'ondas': ['onda', 'sonido', 'luz', 'interferencia'],
        'electromagnetismo': ['campo', 'carga', 'corriente', 'voltaje'],
        'fluidos': ['fluido', 'presion', 'viscosidad', 'bernoulli'],
    }
    
    leaf_lower = leaf_id.lower()
    for domain, keywords in domains.items():
        if any(kw in leaf_lower for kw in keywords):
            return domain
    return 'general'


def generate_svg_profile_code(leaf_id, title_es, title_en, domain):
    """Genera el código del perfil SVG basado en el dominio."""
    
    component_name = f"{snake_to_pascal(leaf_id)}SvgProfile"
    
    # Seleccionar template según dominio
    if domain == 'termodinamica':
        return generate_thermodynamics_template(leaf_id, title_es, title_en)
    elif domain == 'mecanica':
        return generate_mechanics_template(leaf_id, title_es, title_en)
    elif domain == 'fluidos':
        return generate_fluids_template(leaf_id, title_es, title_en)
    else:
        return generate_generic_template(leaf_id, title_es, title_en)


def generate_thermodynamics_template(leaf_id, title_es, title_en):
    """Template para dominio termodinámico - transferencia de calor."""
    
    profile_name = f"{snake_to_pascal(leaf_id)}.svg.profile"
    
    return f'''import React from "react";
import {{
  SVG_CONTROL_TYPES,
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
  SVG_COLORS,
}} from "../svgGrammar";

import {{ createSvgProfileContract }} from "./svgProfileContracts.js";

const profile = {{
  id: "{leaf_id}",
  key: "{leaf_id}",
  meta: {{
    id: "{leaf_id}",
    leafId: "{leaf_id}",
    title: {{
      es: "{title_es}",
      en: "{title_en}",
    }},
    subtitle: {{
      es: "Intercambio de calor entre sistemas termodinámicos.",
      en: "Heat exchange between thermodynamic systems.",
    }},
  }},

  graph_identity: {{
    pregunta_principal: {{
      es: "¿Cómo se transfiere la energía térmica entre el sistema y su entorno?",
      en: "How is thermal energy transferred between the system and its surroundings?",
    }},
    magnitud_estrella: "Q",
  }},
  
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 800 500",
  svgHeight: 520,

  motion: {{
    type: SVG_MOTION_TYPES.NONE,
  }},

  interpretation_binding: {{
    paramsIn: ["T1", "T2", "A"],
    stateOut: ["Q", "P"],
    target: "Q",
  }},

  graph_contract: createSvgProfileContract({{
    leafId: "{leaf_id}",
    sceneType: "heat_transfer",
    magnitudes: ["T", "Q", "P", "A"],
    equations: ["P = k·A·ΔT/L", "Q = m·c·ΔT"],
  }}),

  objects: [
    {{
      id: "hot_surface",
      type: "rectangle",
      x: 50,
      y: 150,
      width: 120,
      height: 200,
      fill: "rgba(239,68,68,0.6)",
      stroke: "rgba(239,68,68,1)",
      strokeWidth: 2,
      label: {{ es: "T₁ (caliente)", en: "T₁ (hot)" }},
      labelPosition: "left",
    }},
    {{
      id: "cold_surface",
      type: "rectangle",
      x: 630,
      y: 150,
      width: 120,
      height: 200,
      fill: "rgba(59,130,246,0.6)",
      stroke: "rgba(59,130,246,1)",
      strokeWidth: 2,
      label: {{ es: "T₂ (frío)", en: "T₂ (cold)" }},
      labelPosition: "right",
    }},
    {{
      id: "medium",
      type: "rectangle",
      x: 170,
      y: 170,
      width: 460,
      height: 160,
      fill: "rgba(148,163,184,0.3)",
      stroke: "rgba(148,163,184,0.5)",
      strokeWidth: 1,
      label: {{ es: "Medio de transferencia", en: "Transfer medium" }},
      labelPosition: "top",
    }},
    {{
      id: "heat_flow_1",
      type: "arrow",
      x1: 170,
      y1: 220,
      x2: 250,
      y2: 220,
      stroke: "rgba(239,68,68,0.8)",
      strokeWidth: 4,
      label: {{ es: "Φ", en: "Φ" }},
    }},
    {{
      id: "heat_flow_2",
      type: "arrow",
      x1: 170,
      y1: 280,
      x2: 250,
      y2: 280,
      stroke: "rgba(239,68,68,0.8)",
      strokeWidth: 4,
    }},
    {{
      id: "heat_flow_3",
      type: "arrow",
      x1: 550,
      y1: 220,
      x2: 630,
      y2: 220,
      stroke: "rgba(59,130,246,0.8)",
      strokeWidth: 4,
    }},
    {{
      id: "delta_T_label",
      type: "text",
      x: 380,
      y: 140,
      text: {{ es: "ΔT = T₁ - T₂", en: "ΔT = T₁ - T₂" }},
      fontSize: 16,
      fill: "rgba(255,255,255,0.9)",
      fontWeight: "bold",
    }},
    {{
      id: "area_label",
      type: "text",
      x: 360,
      y: 360,
      text: {{ es: "A (área de sección)", en: "A (cross-section)" }},
      fontSize: 14,
      fill: "rgba(255,255,255,0.7)",
    }},
  ],

  controls: [
    {{
      id: "T1",
      type: SVG_CONTROL_TYPES.SLIDER,
      label: {{ es: "T₁ (K)", en: "T₁ (K)" }},
      min: 273,
      max: 1000,
      step: 10,
      default: 400,
    }},
    {{
      id: "T2",
      type: SVG_CONTROL_TYPES.SLIDER,
      label: {{ es: "T₂ (K)", en: "T₂ (K)" }},
      min: 200,
      max: 500,
      step: 10,
      default: 300,
    }},
    {{
      id: "A",
      type: SVG_CONTROL_TYPES.SLIDER,
      label: {{ es: "A (m²)", en: "A (m²)" }},
      min: 0.01,
      max: 5.0,
      step: 0.01,
      default: 1.0,
    }},
  ],
}};

export default profile;
'''


def generate_mechanics_template(leaf_id, title_es, title_en):
    """Template para dominio mecánico."""
    
    return f'''import React from "react";
import {{
  SVG_CONTROL_TYPES,
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
  SVG_COLORS,
}} from "../svgGrammar";

import {{ createSvgProfileContract }} from "./svgProfileContracts.js";

const profile = {{
  id: "{leaf_id}",
  key: "{leaf_id}",
  meta: {{
    id: "{leaf_id}",
    leafId: "{leaf_id}",
    title: {{
      es: "{title_es}",
      en: "{title_en}",
    }},
    subtitle: {{
      es: "Análisis del movimiento y las fuerzas.",
      en: "Analysis of motion and forces.",
    }},
  }},

  graph_identity: {{
    pregunta_principal: {{
      es: "¿Cómo se relacionan fuerza, masa y aceleración?",
      en: "How are force, mass, and acceleration related?",
    }},
    magnitud_estrella: "a",
  }},
  
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 800 500",
  svgHeight: 520,

  motion: {{
    type: SVG_MOTION_TYPES.TIME,
    duration: 5,
  }},

  interpretation_binding: {{
    paramsIn: ["m", "F", "v0"],
    stateOut: ["a", "v", "x"],
    target: "a",
  }},

  graph_contract: createSvgProfileContract({{
    leafId: "{leaf_id}",
    sceneType: "mechanics",
    magnitudes: ["m", "F", "a", "v", "x"],
    equations: ["F = m·a", "v = v₀ + a·t"],
  }}),

  objects: [
    {{
      id: "body",
      type: "rectangle",
      x: 350,
      y: 300,
      width: 100,
      height: 100,
      fill: "rgba(59,130,246,0.6)",
      stroke: "rgba(59,130,246,1)",
      strokeWidth: 2,
      label: {{ es: "m", en: "m" }},
      labelPosition: "center",
    }},
    {{
      id: "force_vector",
      type: "arrow",
      x1: 350,
      y1: 350,
      x2: 250,
      y2: 350,
      stroke: "rgba(239,68,68,0.9)",
      strokeWidth: 4,
      label: {{ es: "F", en: "F" }},
      labelPosition: "top",
    }},
    {{
      id: "velocity_vector",
      type: "arrow",
      x1: 400,
      y1: 280,
      x2: 500,
      y2: 280,
      stroke: "rgba(34,197,94,0.9)",
      strokeWidth: 3,
      label: {{ es: "v", en: "v" }},
      labelPosition: "top",
    }},
    {{
      id: "acceleration_vector",
      type: "arrow",
      x1: 430,
      y1: 350,
      x2: 530,
      y2: 350,
      stroke: "rgba(168,85,247,0.9)",
      strokeWidth: 3,
      label: {{ es: "a", en: "a" }},
      labelPosition: "bottom",
    }},
    {{
      id: "surface",
      type: "line",
      x1: 0,
      y1: 400,
      x2: 800,
      y2: 400,
      stroke: "rgba(148,163,184,0.8)",
      strokeWidth: 3,
    }},
    {{
      id: "time_display",
      type: "text",
      x: 50,
      y: 50,
      text: {{ es: "t = 0 s", en: "t = 0 s" }},
      fontSize: 16,
      fill: "rgba(255,255,255,0.9)",
    }},
  ],

  controls: [
    {{
      id: "m",
      type: SVG_CONTROL_TYPES.SLIDER,
      label: {{ es: "m (kg)", en: "m (kg)" }},
      min: 0.1,
      max: 100,
      step: 0.1,
      default: 10,
    }},
    {{
      id: "F",
      type: SVG_CONTROL_TYPES.SLIDER,
      label: {{ es: "F (N)", en: "F (N)" }},
      min: -100,
      max: 100,
      step: 1,
      default: 50,
    }},
    {{
      id: "v0",
      type: SVG_CONTROL_TYPES.SLIDER,
      label: {{ es: "v₀ (m/s)", en: "v₀ (m/s)" }},
      min: -20,
      max: 20,
      step: 0.5,
      default: 0,
    }},
  ],
}};

export default profile;
'''


def generate_fluids_template(leaf_id, title_es, title_en):
    """Template para dominio de fluidos."""
    
    return f'''import React from "react";
import {{
  SVG_CONTROL_TYPES,
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
  SVG_COLORS,
}} from "../svgGrammar";

import {{ createSvgProfileContract }} from "./svgProfileContracts.js";

const profile = {{
  id: "{leaf_id}",
  key: "{leaf_id}",
  meta: {{
    id: "{leaf_id}",
    leafId: "{leaf_id}",
    title: {{
      es: "{title_es}",
      en: "{title_en}",
    }},
    subtitle: {{
      es: "Comportamiento de fluidos en reposo o movimiento.",
      en: "Fluid behavior at rest or in motion.",
    }},
  }},

  graph_identity: {{
    pregunta_principal: {{
      es: "¿Cómo se distribuye la presión en un fluido?",
      en: "How is pressure distributed in a fluid?",
    }},
    magnitud_estrella: "p",
  }},
  
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 800 500",
  svgHeight: 520,

  motion: {{
    type: SVG_MOTION_TYPES.NONE,
  }},

  interpretation_binding: {{
    paramsIn: ["rho", "h", "g"],
    stateOut: ["p", "F"],
    target: "p",
  }},

  graph_contract: createSvgProfileContract({{
    leafId: "{leaf_id}",
    sceneType: "fluids",
    magnitudes: ["p", "rho", "h", "v", "A"],
    equations: ["p = p₀ + ρ·g·h", "Q = v·A"],
  }}),

  objects: [
    {{
      id: "container",
      type: "rectangle",
      x: 250,
      y: 100,
      width: 300,
      height: 350,
      fill: "rgba(56,189,248,0.2)",
      stroke: "rgba(56,189,248,0.5)",
      strokeWidth: 2,
    }},
    {{
      id: "fluid_surface",
      type: "line",
      x1: 250,
      y1: 150,
      x2: 550,
      y2: 150,
      stroke: "rgba(56,189,248,0.8)",
      strokeWidth: 3,
      label: {{ es: "superficie libre", en: "free surface" }},
    }},
    {{
      id: "pressure_depth",
      type: "arrow",
      x1: 600,
      y1: 150,
      x2: 600,
      y2: 400,
      stroke: "rgba(148,163,184,0.8)",
      strokeWidth: 2,
      label: {{ es: "h", en: "h" }},
    }},
    {{
      id: "pressure_point",
      type: "circle",
      cx: 400,
      cy: 350,
      r: 8,
      fill: "rgba(239,68,68,0.8)",
      stroke: "rgba(239,68,68,1)",
      strokeWidth: 2,
      label: {{ es: "p", en: "p" }},
    }},
    {{
      id: "velocity_arrow",
      type: "arrow",
      x1: 400,
      y1: 350,
      x2: 500,
      y2: 350,
      stroke: "rgba(34,197,94,0.8)",
      strokeWidth: 3,
      label: {{ es: "v", en: "v" }},
    }},
  ],

  controls: [
    {{
      id: "rho",
      type: SVG_CONTROL_TYPES.SLIDER,
      label: {{ es: "ρ (kg/m³)", en: "ρ (kg/m³)" }},
      min: 1,
      max: 20000,
      step: 10,
      default: 1000,
    }},
    {{
      id: "h",
      type: SVG_CONTROL_TYPES.SLIDER,
      label: {{ es: "h (m)", en: "h (m)" }},
      min: 0,
      max: 100,
      step: 0.5,
      default: 10,
    }},
    {{
      id: "v",
      type: SVG_CONTROL_TYPES.SLIDER,
      label: {{ es: "v (m/s)", en: "v (m/s)" }},
      min: 0,
      max: 50,
      step: 0.5,
      default: 5,
    }},
  ],
}};

export default profile;
'''


def generate_generic_template(leaf_id, title_es, title_en):
    """Template genérico para cualquier dominio."""
    
    return f'''import React from "react";
import {{
  SVG_CONTROL_TYPES,
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
  SVG_COLORS,
}} from "../svgGrammar";

import {{ createSvgProfileContract }} from "./svgProfileContracts.js";

const profile = {{
  id: "{leaf_id}",
  key: "{leaf_id}",
  meta: {{
    id: "{leaf_id}",
    leafId: "{leaf_id}",
    title: {{
      es: "{title_es}",
      en: "{title_en}",
    }},
    subtitle: {{
      es: "Visualización interactiva del concepto físico.",
      en: "Interactive visualization of the physical concept.",
    }},
  }},

  graph_identity: {{
    pregunta_principal: {{
      es: "¿Cómo se comporta este sistema físico?",
      en: "How does this physical system behave?",
    }},
    magnitud_estrella: "x",
  }},
  
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 800 500",
  svgHeight: 520,

  motion: {{
    type: SVG_MOTION_TYPES.NONE,
  }},

  interpretation_binding: {{
    paramsIn: ["a", "b"],
    stateOut: ["y"],
    target: "y",
  }},

  graph_contract: createSvgProfileContract({{
    leafId: "{leaf_id}",
    sceneType: "generic",
    magnitudes: ["x", "y", "z"],
    equations: ["y = f(x)"],
  }}),

  objects: [
    {{
      id: "main_system",
      type: "circle",
      cx: 400,
      cy: 250,
      r: 100,
      fill: "rgba(59,130,246,0.3)",
      stroke: "rgba(59,130,246,0.8)",
      strokeWidth: 2,
      label: {{ es: "Sistema", en: "System" }},
      labelPosition: "center",
    }},
    {{
      id: "parameter_a",
      type: "text",
      x: 50,
      y: 50,
      text: {{ es: "Parámetro a", en: "Parameter a" }},
      fontSize: 16,
      fill: "rgba(255,255,255,0.9)",
    }},
    {{
      id: "parameter_b",
      type: "text",
      x: 50,
      y: 80,
      text: {{ es: "Parámetro b", en: "Parameter b" }},
      fontSize: 16,
      fill: "rgba(255,255,255,0.9)",
    }},
  ],

  controls: [
    {{
      id: "a",
      type: SVG_CONTROL_TYPES.SLIDER,
      label: {{ es: "a", en: "a" }},
      min: 0,
      max: 100,
      step: 1,
      default: 10,
    }},
    {{
      id: "b",
      type: SVG_CONTROL_TYPES.SLIDER,
      label: {{ es: "b", en: "b" }},
      min: 0,
      max: 100,
      step: 1,
      default: 20,
    }},
  ],
}};

export default profile;
'''


def generate_svg_profile(leaf_id, title_es, title_en, output_dir, domain=None):
    """Genera un perfil SVG completo para un leaf."""
    
    if domain is None:
        domain = get_domain_from_leaf_id(leaf_id)
    
    code = generate_svg_profile_code(leaf_id, title_es, title_en, domain)
    
    # Guardar archivo
    filename = f"{leaf_id}.svg.profile.jsx"
    output_path = Path(output_dir) / filename
    
    os.makedirs(output_dir, exist_ok=True)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(code)
    
    return str(output_path)


def main():
    parser = argparse.ArgumentParser(
        description="Genera perfiles SVG automáticamente para leaves de Phyxio"
    )
    parser.add_argument(
        "--leaf-id", 
        required=True, 
        help="ID del leaf (ej: conveccion, caida_libre)"
    )
    parser.add_argument(
        "--title-es", 
        required=True, 
        help="Título en español"
    )
    parser.add_argument(
        "--title-en", 
        required=True, 
        help="Título en inglés"
    )
    parser.add_argument(
        "--output-dir", 
        default="frontend/src/v2/components/SVG/profiles",
        help="Directorio de salida para el perfil"
    )
    parser.add_argument(
        "--domain",
        choices=['termodinamica', 'mecanica', 'fluidos', 'ondas', 'electromagnetismo', 'general'],
        help="Dominio físico (auto-detectado si no se especifica)"
    )
    
    args = parser.parse_args()
    
    output_path = generate_svg_profile(
        args.leaf_id,
        args.title_es,
        args.title_en,
        args.output_dir,
        args.domain
    )
    
    print(f"✅ Perfil SVG generado: {output_path}")


if __name__ == "__main__":
    main()
