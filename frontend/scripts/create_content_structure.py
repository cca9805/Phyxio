#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Crea la estructura canónica de contenidos de Phyxio (carpetas + archivos vacíos)
en una carpeta nueva (por defecto: data_v2/) sin tocar la carpeta data/ actual.

Uso:
  python scripts/create_content_structure.py

Opcional:
  Cambia TARGET_ROOT para usar otro nombre (ej: "data_next", "content_v2", etc.)
"""

from __future__ import annotations
from pathlib import Path
from typing import Dict, List, Union

# =========================
# CONFIGURACIÓN PRINCIPAL
# =========================
TARGET_ROOT = "data_v2"  # <- cambia aquí si quieres otro nombre

# Archivos estándar por subtema (unidad mínima)
SUBTOPIC_FILES = [
    "meta.yaml",
    "teoria.md",
    "modelos.md",
    "magnitudes.yaml",
    "formulas.yaml",
    "ejemplos.md",
    "errores.md",
    # Futuro (descomenta cuando quieras):
    # "graficos.yaml",
    # "ejercicios.yaml",
    # "examenes.yaml",
]

# Archivos a nivel de bloque (carpeta contenedora de varios subtemas)
BLOCK_FILES = [
    "index.yaml",
    "overview.md",
]

# =========================
# MAPA CANÓNICO (carpetas)
# =========================
# Estructura:
# docs/contenido/{area}/... -> aquí creamos directamente bajo TARGET_ROOT/contenido/...
CONTENT_TREE: Dict[str, Union[dict, list]] = {
    "contenido": {
        "fisica-clasica": {
            "mecanica": {
                "fundamentos": [
                    "sistemas-referencia",
                    "vectores",
                    "magnitudes-fisicas",
                ],
                "cinematica": [
                    "mru",
                    "mrua",
                    "caida-libre",
                    "tiro-horizontal",
                    "tiro-parabolico",
                    "movimiento-circular-uniforme",
                    "movimiento-circular-uniformemente-acelerado",
                    "movimiento-relativo",
                ],
                "dinamica": {
                    "leyes-newton": [],
                    "fuerzas": [
                        "peso",
                        "normal",
                        "rozamiento",
                        "tension",
                        "fuerza-elastica",
                    ],
                    "diagramas-fuerzas": [],
                    "aplicaciones": [],
                },
                "trabajo-energia": [
                    "trabajo",
                    "energia-cinetica",
                    "energia-potencial",
                    "conservacion-energia",
                    "potencia",
                ],
                "cantidad-movimiento": [
                    "momento-lineal",
                    "impulso",
                    "colisiones",
                ],
                "rotacion": [
                    "cinematica-rotacional",
                    "dinamica-rotacional",
                    "momento-inercia",
                    "momento-angular",
                    "rodadura",
                ],
                "gravitacion": [
                    "ley-gravitacion-universal",
                    "campo-gravitatorio",
                    "energia-gravitatoria",
                    "orbitas",
                    "leyes-kepler",
                ],
            },
            "fluidos": {
                "estatica": [
                    "densidad",
                    "presion",
                    "pascal",
                    "arquimedes",
                ],
                "dinamica": [
                    "caudal",
                    "continuidad",
                    "bernoulli",
                    "viscosidad",
                ],
            },
            "termodinamica": {
                "conceptos-basicos": [],
                "primer-principio": [
                    "energia-interna",
                    "trabajo",
                    "procesos",
                ],
                "segundo-principio": [
                    "maquinas-termicas",
                    "rendimiento",
                    "entropia",
                    "irreversibilidad",
                ],
            },
            "ondas": {
                "ondas-mecanicas": [
                    "conceptos",
                    "ecuacion-onda",
                    "superposicion",
                    "interferencias",
                    "ondas-estacionarias",
                ],
                "acustica": [
                    "sonido",
                    "intensidad",
                    "efecto-doppler",
                ],
            },
            "optica": {
                "geometrica": [
                    "reflexion",
                    "refraccion",
                    "lentes",
                    "espejos",
                ],
                "fisica": [
                    "interferencia",
                    "difraccion",
                    "polarizacion",
                ],
            },
            "electromagnetismo": {
                "electricidad": [
                    "carga",
                    "campo-electrico",
                    "potencial",
                    "condensadores",
                ],
                "corriente": [
                    "ley-ohm",
                    "resistencias",
                    "potencia-electrica",
                ],
                "magnetismo": [
                    "campo-magnetico",
                    "fuerza-magnetica",
                ],
                "induccion": [
                    "faraday",
                    "lenz",
                    "ondas-electromagneticas",
                ],
            },
        },
        "fisica-moderna": {
            "relatividad": [
                "relatividad-especial",
                "relatividad-general-intro",
            ],
            "cuantica": [
                "fundamentos",
                "schrodinger",
                "aplicaciones-basicas",
            ],
            "fisica-atomica": [
                "modelos-atomicos",
                "espectros",
            ],
            "fisica-nuclear": [
                "radiactividad",
                "fision",
                "fusion",
            ],
            "particulas": [
                "particulas-elementales",
                "modelo-estandar",
            ],
        },
        "matematicas": [
            "algebra",
            "trigonometria",
            "vectores",
            "derivadas",
            "integrales",
            "ecuaciones-diferenciales",
        ],
        "herramientas": [
            "unidades",
            "conversiones",
            "constantes",
            "analisis-dimensional",
            "cifras-significativas",
            "errores-experimentales",
        ],
    }
}

# =========================
# IMPLEMENTACIÓN
# =========================

def ensure_file(path: Path, content: str = "") -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    if not path.exists():
        path.write_text(content, encoding="utf-8")

def create_block_scaffold(dir_path: Path) -> None:
    """Crea archivos de bloque (index.yaml, overview.md) en el directorio."""
    for f in BLOCK_FILES:
        ensure_file(dir_path / f, "")

def create_subtopic_scaffold(subtopic_dir: Path) -> None:
    """Crea los archivos estándar de un subtema."""
    for f in SUBTOPIC_FILES:
        ensure_file(subtopic_dir / f, "")

def walk_tree(base: Path, tree: Union[Dict[str, Union[dict, list]], dict, list], depth: int = 0) -> None:
    """
    Recorre el árbol y crea directorios.
    - dict: claves son carpetas; valores pueden ser dict/list
    - list: lista de subtemas (cada uno crea su carpeta con SUBTOPIC_FILES)
    """
    if isinstance(tree, dict):
        for folder_name, subtree in tree.items():
            current_dir = base / folder_name
            current_dir.mkdir(parents=True, exist_ok=True)

            # Si este nivel contiene subtemas (list) o sub-bloques (dict), creamos scaffold de bloque
            # para ayudar a navegación/documentación del bloque
            create_block_scaffold(current_dir)

            walk_tree(current_dir, subtree, depth + 1)

    elif isinstance(tree, list):
        # Lista de subtemas
        for subtopic in tree:
            sub_dir = base / subtopic
            sub_dir.mkdir(parents=True, exist_ok=True)
            create_subtopic_scaffold(sub_dir)

    else:
        raise TypeError(f"Tipo de árbol no soportado: {type(tree)}")

def main() -> None:
    project_root = Path.cwd()
    target = project_root / TARGET_ROOT

    # Seguridad: no machacamos una carpeta existente
    if target.exists():
        print(f"[ABORT] La carpeta destino ya existe: {target}")
        print("        Cambia TARGET_ROOT o borra/renombra la carpeta existente.")
        return

    target.mkdir(parents=True, exist_ok=True)

    # Crear todo
    walk_tree(target, CONTENT_TREE)

    print(f"[OK] Estructura creada en: {target}")
    print("     Puedes mantener tu carpeta data/ intacta y migrar poco a poco.")
    print("     Siguiente paso recomendado: completar mru/ como plantilla oficial.")

if __name__ == "__main__":
    main()
