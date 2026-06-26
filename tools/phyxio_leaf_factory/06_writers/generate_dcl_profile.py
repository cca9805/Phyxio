#!/usr/bin/env python3
"""
Generador automático de perfiles DCL (Diagramas de Cuerpo Libre) para leaves de Phyxio.
Crea archivos .dcl.profile.js basados en metadatos del leaf.
"""

import os
import re
import argparse
from pathlib import Path


def snake_to_camel(snake_str):
    """Convierte snake_case a camelCase."""
    components = snake_str.split('_')
    return components[0] + ''.join(x.capitalize() for x in components[1:])


def get_dcl_type_from_leaf_id(leaf_id):
    """Determina el tipo de DCL según el ID del leaf."""
    leaf_lower = leaf_id.lower()
    
    # Mapeo de tipos de sistema mecánico
    types = {
        'inclined_plane': ['plano', 'inclinado', 'rampa', 'pendiente'],
        'hanging_mass': ['colgante', 'pendulo', 'cuerda', 'suspension'],
        'pulley': ['polea', 'carrucola'],
        'collision': ['colision', 'choque', 'rebote'],
        'spring': ['muelle', 'resorte', 'elastico'],
        'floating': ['flotacion', 'empuje', 'sumergido'],
        'projectile': ['tiro', 'parabolico', 'proyectil'],
        'circular': ['circular', 'rotacion', 'centrifuga', 'centripeta'],
        'block_on_table': ['mesa', 'tabla', 'plano_horizontal'],
        'friction': ['friccion', 'rozamiento'],
    }
    
    for dcl_type, keywords in types.items():
        if any(kw in leaf_lower for kw in keywords):
            return dcl_type
    
    return 'generic'


def generate_forces_for_type(dcl_type, magnitudes=None):
    """Genera las fuerzas según el tipo de DCL."""
    
    forces_by_type = {
        'inclined_plane': '''
  forces: [
    {
      id: "weight",
      label: { es: "Peso", en: "Weight" },
      symbol: "mg",
      direction: "vertical_down",
      magnitude: "m*g",
      color: "#ef4444",
      appliedAt: "center",
    },
    {
      id: "normal",
      label: { es: "Normal", en: "Normal" },
      symbol: "N",
      direction: "normal_surface",
      magnitude: "m*g*cos(theta)",
      color: "#3b82f6",
      appliedAt: "contact",
    },
    {
      id: "friction",
      label: { es: "Fricción", en: "Friction" },
      symbol: "f",
      direction: "tangential_opposite",
      magnitude: "mu*N",
      color: "#a855f7",
      appliedAt: "contact",
      optional: true,
    },
  ],''',
        
        'hanging_mass': '''
  forces: [
    {
      id: "weight",
      label: { es: "Peso", en: "Weight" },
      symbol: "mg",
      direction: "vertical_down",
      magnitude: "m*g",
      color: "#ef4444",
      appliedAt: "center",
    },
    {
      id: "tension",
      label: { es: "Tensión", en: "Tension" },
      symbol: "T",
      direction: "vertical_up",
      magnitude: "m*g",
      color: "#3b82f6",
      appliedAt: "attachment",
    },
  ],''',
        
        'pulley': '''
  forces: [
    {
      id: "tension1",
      label: { es: "Tensión 1", en: "Tension 1" },
      symbol: "T₁",
      direction: "custom",
      angle: -90,
      magnitude: "T",
      color: "#3b82f6",
      appliedAt: "attachment",
    },
    {
      id: "tension2",
      label: { es: "Tensión 2", en: "Tension 2" },
      symbol: "T₂",
      direction: "custom",
      angle: 90,
      magnitude: "T",
      color: "#22c55e",
      appliedAt: "attachment",
    },
  ],''',
        
        'collision': '''
  forces: [
    {
      id: "impulse",
      label: { es: "Impulso", en: "Impulse" },
      symbol: "J",
      direction: "normal_contact",
      magnitude: "Δp",
      color: "#ef4444",
      appliedAt: "contact",
      instantaneous: true,
    },
  ],''',
        
        'spring': '''
  forces: [
    {
      id: "spring_force",
      label: { es: "Fuerza elástica", en: "Spring force" },
      symbol: "Fₑ",
      direction: "restoring",
      magnitude: "k*x",
      color: "#a855f7",
      appliedAt: "attachment",
    },
    {
      id: "weight",
      label: { es: "Peso", en: "Weight" },
      symbol: "mg",
      direction: "vertical_down",
      magnitude: "m*g",
      color: "#ef4444",
      appliedAt: "center",
    },
  ],''',
        
        'floating': '''
  forces: [
    {
      id: "weight",
      label: { es: "Peso", en: "Weight" },
      symbol: "mg",
      direction: "vertical_down",
      magnitude: "m*g",
      color: "#ef4444",
      appliedAt: "center",
    },
    {
      id: "buoyancy",
      label: { es: "Empuje", en: "Buoyancy" },
      symbol: "E",
      direction: "vertical_up",
      magnitude: "ρ*V*g",
      color: "#3b82f6",
      appliedAt: "center",
    },
  ],''',
        
        'block_on_table': '''
  forces: [
    {
      id: "weight",
      label: { es: "Peso", en: "Weight" },
      symbol: "mg",
      direction: "vertical_down",
      magnitude: "m*g",
      color: "#ef4444",
      appliedAt: "center",
    },
    {
      id: "normal",
      label: { es: "Normal", en: "Normal" },
      symbol: "N",
      direction: "vertical_up",
      magnitude: "m*g",
      color: "#3b82f6",
      appliedAt: "contact",
    },
    {
      id: "applied",
      label: { es: "Fuerza aplicada", en: "Applied force" },
      symbol: "F",
      direction: "horizontal",
      magnitude: "F",
      color: "#22c55e",
      appliedAt: "center",
      optional: true,
    },
    {
      id: "friction",
      label: { es: "Fricción", en: "Friction" },
      symbol: "f",
      direction: "horizontal_opposite",
      magnitude: "mu*N",
      color: "#a855f7",
      appliedAt: "contact",
      optional: true,
    },
  ],''',
        
        'generic': '''
  forces: [
    {
      id: "force1",
      label: { es: "Fuerza 1", en: "Force 1" },
      symbol: "F₁",
      direction: "horizontal",
      magnitude: "F1",
      color: "#ef4444",
      appliedAt: "center",
    },
    {
      id: "force2",
      label: { es: "Fuerza 2", en: "Force 2" },
      symbol: "F₂",
      direction: "vertical_down",
      magnitude: "F2",
      color: "#3b82f6",
      appliedAt: "center",
    },
  ],''',
    }
    
    return forces_by_type.get(dcl_type, forces_by_type['generic'])


def generate_object_for_type(dcl_type):
    """Genera la definición del objeto físico según el tipo."""
    
    objects = {
        'inclined_plane': '''
  object: {
    type: "block",
    shape: "rectangle",
    width: 80,
    height: 60,
    mass: "m",
    label: { es: "m", en: "m" },
    position: { x: 0.5, y: 0.5 },
  },
  
  surface: {
    type: "inclined_plane",
    angle: "theta",
    length: 300,
  },''',
        
        'hanging_mass': '''
  object: {
    type: "point_mass",
    shape: "circle",
    radius: 40,
    mass: "m",
    label: { es: "m", en: "m" },
    position: { x: 0.5, y: 0.6 },
  },
  
  constraints: [
    {
      type: "string",
      from: { x: 0.5, y: 0.1 },
      to: "object.center",
    },
  ],''',
        
        'block_on_table': '''
  object: {
    type: "block",
    shape: "rectangle",
    width: 100,
    height: 80,
    mass: "m",
    label: { es: "m", en: "m" },
    position: { x: 0.5, y: 0.7 },
  },
  
  surface: {
    type: "horizontal",
    y: 0.8,
  },''',
        
        'floating': '''
  object: {
    type: "body",
    shape: "rectangle",
    width: 100,
    height: 80,
    mass: "m",
    label: { es: "m", en: "m" },
    position: { x: 0.5, y: 0.5 },
    submerged: 0.6,
  },
  
  fluid: {
    type: "liquid",
    level: 0.6,
    density: "rho_fluid",
  },''',
        
        'generic': '''
  object: {
    type: "point_mass",
    shape: "circle",
    radius: 50,
    mass: "m",
    label: { es: "m", en: "m" },
    position: { x: 0.5, y: 0.5 },
  },''',
    }
    
    return objects.get(dcl_type, objects['generic'])


def generate_dcl_profile_code(leaf_id, title_es, title_en, dcl_type=None):
    """Genera el código del perfil DCL completo."""
    
    if dcl_type is None:
        dcl_type = get_dcl_type_from_leaf_id(leaf_id)
    
    profile_name = f"{leaf_id}.dcl"
    
    forces_section = generate_forces_for_type(dcl_type)
    object_section = generate_object_for_type(dcl_type)
    
    return f'''// Perfil DCL auto-generado para: {leaf_id}
// Tipo: {dcl_type}

const profile = {{
  id: "{leaf_id}",
  key: "{leaf_id}",
  
  meta: {{
    title: {{
      es: "{title_es}",
      en: "{title_en}",
    }},
    description: {{
      es: "Diagrama de cuerpo libre para análisis de fuerzas.",
      en: "Free body diagram for force analysis.",
    }},
  }},

  graph_identity: {{
    pregunta_principal: {{
      es: "¿Qué fuerzas actúan sobre el cuerpo y cómo se relacionan?",
      en: "What forces act on the body and how are they related?",
    }},
    magnitud_estrella: "F",
  }},

{object_section}

{forces_section}

  axes: {{
    show: true,
    xLabel: { es: "x", en: "x" },
    yLabel: { es: "y", en: "y" },
    color: "rgba(148,163,184,0.5)",
  }},

  interpretation_binding: {{
    paramsIn: ["m", "g", "theta", "mu"],
    stateOut: ["a", "N", "f"],
    target: "a",
  }},

  controls: [
    {{
      id: "m",
      type: "slider",
      label: {{ es: "m (kg)", en: "m (kg)" }},
      min: 0.1,
      max: 100,
      step: 0.1,
      default: 10,
    }},
    {{
      id: "g",
      type: "slider",
      label: {{ es: "g (m/s²)", en: "g (m/s²)" }},
      min: 1.6,
      max: 20,
      step: 0.1,
      default: 9.8,
    }},
  ],

  equations: [
    "ΣF_x = m*a_x",
    "ΣF_y = m*a_y",
  ],
}};

export default profile;
'''


def generate_dcl_profile(leaf_id, title_es, title_en, output_dir, dcl_type=None):
    """Genera un perfil DCL completo para un leaf."""
    
    code = generate_dcl_profile_code(leaf_id, title_es, title_en, dcl_type)
    
    # Guardar archivo
    filename = f"{leaf_id}.dcl.profile.js"
    output_path = Path(output_dir) / filename
    
    os.makedirs(output_dir, exist_ok=True)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(code)
    
    return str(output_path)


def main():
    parser = argparse.ArgumentParser(
        description="Genera perfiles DCL automáticamente para leaves de Phyxio"
    )
    parser.add_argument(
        "--leaf-id", 
        required=True, 
        help="ID del leaf (ej: plano_inclinado, caida_libre)"
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
        default="frontend/src/v2/components/DCL/profiles",
        help="Directorio de salida para el perfil"
    )
    parser.add_argument(
        "--type",
        choices=['inclined_plane', 'hanging_mass', 'pulley', 'collision', 
                 'spring', 'floating', 'projectile', 'circular', 'block_on_table', 
                 'friction', 'generic'],
        help="Tipo de DCL (auto-detectado si no se especifica)"
    )
    
    args = parser.parse_args()
    
    output_path = generate_dcl_profile(
        args.leaf_id,
        args.title_es,
        args.title_en,
        args.output_dir,
        args.type
    )
    
    print(f"✅ Perfil DCL generado: {output_path}")


if __name__ == "__main__":
    main()
