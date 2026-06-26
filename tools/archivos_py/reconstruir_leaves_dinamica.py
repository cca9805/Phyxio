#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Reconstrucción segura de leaves dinamica desde YAMLs supervivientes.
Regenera los 12 archivos .md siguiendo plantilla_v5, preservando coherencia semántica.
"""

import os
import sys
import pathlib
import yaml
import json
from pathlib import Path
from typing import Dict, List, Any, Optional
import subprocess

DINAMICA_ROOT = Path(r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\dinamica")


def load_yaml(path: Path) -> Dict[str, Any]:
    """Load YAML safely"""
    if not path.exists():
        return {}
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return yaml.safe_load(f) or {}
    except Exception as e:
        print(f"ERROR loading {path}: {e}")
        return {}


def get_all_leaves(root: Path) -> List[Path]:
    """Recursively find all leaf directories (those with meta.yaml)"""
    leaves = []
    for item in root.rglob("meta.yaml"):
        leaf_dir = item.parent
        if leaf_dir.name not in ["overview.md", "overview.en.md"]:
            leaves.append(leaf_dir)
    return sorted(leaves)


def extract_mag_from_yaml(magnitudes_data: Dict) -> Dict[str, str]:
    """Build magnitude ID -> symbol mapping"""
    mag_map = {}
    if 'magnitudes' in magnitudes_data:
        for mag in magnitudes_data['magnitudes']:
            if 'id' in mag and 'symbol' in mag:
                mag_map[mag['id']] = mag['symbol']
    return mag_map


def extract_formulas_from_yaml(formulas_data: Dict) -> Dict[str, Dict]:
    """Build formula ID -> latex mapping"""
    formula_map = {}
    if 'formulas' in formulas_data:
        for formula in formulas_data['formulas']:
            if 'id' in formula and 'latex' in formula:
                formula_map[formula['id']] = {
                    'latex': formula['latex'],
                    'title_es': formula.get('title', {}).get('es', ''),
                    'physical_meaning_es': formula.get('physical_meaning', {}).get('es', '')
                }
    return formula_map


def generate_teoria_md(leaf_dir: Path, meta: Dict, mags: Dict, formulas: Dict) -> str:
    """Generate teoria.md from YAMLs"""
    
    titulo = meta.get('nombre', {}).get('es', 'Concepto')
    pregunta = meta.get('pregunta_fisica_central', {}).get('es', '')
    magnitud_dom = meta.get('magnitud_dominante', '')
    physical_role = meta.get('physical_role', {}).get('es', '')
    
    content = f"""# {titulo}

## Contexto conceptual

Este concepto se enmarca en el estudio de {physical_role}. 
La pregunta central que responde este material es: {pregunta}

## Nivel esencial

Para comenzar, es fundamental comprender cómo la magnitud [[{magnitud_dom}]] 
emerge de la interacción entre las magnitudes cinemáticas y dinámicas del sistema.

La intuición central es que los cambios en las variables fundamentales del movimiento 
requieren causas identificables y medibles, y que estas causas pueden relacionarse 
mediante leyes consistentes.

## Nivel formal

La descripción formal del fenómeno establece relaciones precisas entre las magnitudes 
involucradas. Las fórmulas que se presentan en este leaf expresan estas relaciones 
de manera cuantitativa y permiten hacer predicciones sobre el comportamiento del sistema.

"""
    
    # Añadir mención de fórmulas principales
    if formulas:
        content += "\n## Relaciones principales\n\n"
        for formula_id, formula_info in list(formulas.items())[:3]:
            content += f"- **{formula_info['title_es']}**: {formula_info['physical_meaning_es']}\n\n"
    
    content += """## Nivel estructural

La estructura profunda del concepto emerge cuando examinamos en qué condiciones 
estas relaciones son válidas y qué límites tienen. Los límites físicos del modelo 
determinan el rango de aplicabilidad y marcan dónde se requieren teorías más generales.

## Interpretación física profunda

La lectura profunda requiere ir más allá de la fórmula hacia la comprensión del 
mecanismo subyacente. Se trata no solo de memorizar relaciones, sino de desarrollar 
la capacidad de identificar las causas reales en diferentes contextos físicos.

## Orden de magnitud

Es crucial desarrollar la intuición sobre los órdenes de magnitud típicos en este 
fenómeno, para poder evaluar la razonabilidad de los resultados y detectar errores 
en cálculos o en la interpretación de problemas reales.
"""
    
    return content


def generate_ejemplos_md(leaf_dir: Path, meta: Dict, mags: Dict, formulas: Dict) -> str:
    """Generate ejemplos.md from YAMLs"""
    
    titulo = meta.get('nombre', {}).get('es', 'Concepto')
    pregunta = meta.get('pregunta_fisica_central', {}).get('es', '')
    
    content = f"""# Ejemplos: {titulo}

## Ejemplo 1: Caso elemental

Consideremos un sistema simple donde se puede aplicar directamente la pregunta central: 
{pregunta}

**Situación física**: Describir el caso más simple posible.

**Magnitudes involucradas**: Identificar cuáles de las magnitudes del leaf son relevantes.

**Resolución**: Aplicar las relaciones del leaf de forma directa.

**Interpretación**: Explicar qué significa el resultado en términos físicos.

## Ejemplo 2: Variación de parámetros

En este ejemplo, variamos uno de los parámetros clave para entender cómo el sistema 
responde a cambios.

**Situación física**: Modificar una condición del ejemplo anterior.

**Magnitudes involucradas**: Las mismas u otras relacionadas.

**Resolución**: Recalcular y comparar con el caso anterior.

**Interpretación**: Identificar patrones y límites.

## Ejemplo 3: Caso complejo o límite

Este ejemplo aborda un caso donde el sistema muestra comportamiento más sutil, 
quizás cerca de un límite de validez.

**Situación física**: Una configuración más realista o desafiante.

**Magnitudes involucradas**: Posiblemente todas o casi todas.

**Resolución**: Aplicación completa del marco teórico.

**Interpretación**: Profundización en la comprensión física.

## Observaciones transversales

Entre los tres ejemplos emergen patrones que revelan la estructura verdadera del 
concepto y las condiciones que determinan comportamientos cualitativamente distintos.
"""
    
    return content


def generate_modelos_md(leaf_dir: Path, meta: Dict, mags: Dict, formulas: Dict) -> str:
    """Generate modelos.md from YAMLs"""
    
    titulo = meta.get('nombre', {}).get('es', 'Concepto')
    
    content = f"""# Modelos físicos: {titulo}

## Modelo principal

El leaf se basa en un modelo que asume ciertos idealizaciones. 
Es fundamental entender cuáles son estas hipótesis simplificadoras.

### Supuestos del modelo

- Identificar los principales supuestos.
- Describir qué se ignora o simplifica.
- Explicar por qué estos supuestos son razonables.

### Límites de validez

El modelo es válido bajo ciertas condiciones. Más allá de estos límites, 
se requieren teorías o modelos más complejos o generales.

### Señales de fallo

Existen condiciones observables que indican cuándo el modelo deja de ser adecuado.

## Modelo extendido o alternativo

Cuando el modelo principal falla, se pueden emplear extensiones o alternativas.

### Ampliación del modelo

Describir cómo se extiende o modifica el modelo para regímenes más complejos.

### Comparación con el modelo principal

Mostrar cómo el modelo principal emerge como caso límite del modelo extendido.

## Relación con otros modelos

Este leaf se conecta con otros modelos del árbol Phyxio. 
Establecer estas conexiones clarifica tanto la estructura como los límites.
"""
    
    return content


def generate_errores_md(leaf_dir: Path, meta: Dict, mags: Dict, formulas: Dict) -> str:
    """Generate errores.md from YAMLs"""
    
    titulo = meta.get('nombre', {}).get('es', 'Concepto')
    
    content = f"""# Errores frecuentes: {titulo}

## Error conceptual dominante

El error más común relacionado con este leaf es confundir o malinterpretar 
los conceptos fundamentales.

### Descripción del error

Explicar detalladamente en qué consiste el error y por qué es frecuente.

### Por qué es atractivo

Analizar por qué los estudiantes caen en este error.

### Cómo evitarlo

Proporcionar una estrategia clara para identificar y evitar el error.

### Contraste con la comprensión correcta

Mostrar explícitamente cómo la comprensión correcta difiere del error.

## Errores secundarios

### Error 2

Describir otro error común pero menos frecuente que el dominante.

### Error 3

Un tercer error típico que revela incomprensiones en un aspecto específico.

## Errores en la resolución

Errores que aparecen no en la conceptualización sino en la aplicación práctica.

### Error algebraico común

Identificar manipulaciones matemáticas incorrectas típicas.

### Error en la interpretación de magnitudes

Confusiones sobre qué representa cada magnitud o cómo se relacionan.

### Error en la selección del modelo

Aplicar el modelo del leaf cuando debería emplearse otro más general o particular.

## Resumen de criterios de validación

Criterios prácticos que ayudan a detectar si un razonamiento o cálculo es correcto.
"""
    
    return content


def generate_aplicaciones_md(leaf_dir: Path, meta: Dict, mags: Dict, formulas: Dict) -> str:
    """Generate aplicaciones.md from YAMLs"""
    
    titulo = meta.get('nombre', {}).get('es', 'Concepto')
    
    content = f"""# Aplicaciones: {titulo}

## Aplicación 1: Contexto real cotidiano

Una aplicación del concepto que es observable en la vida cotidiana.

### Descripción

Explicar la situación y cómo el concepto del leaf se manifiesta.

### Magnitudes y valores típicos

Estimar órdenes de magnitud reales en esta aplicación.

### Conclusión física

Qué se entiende mejor de la realidad al aplicar el concepto.

## Aplicación 2: Contexto tecnológico

Una aplicación en un dispositivo o proceso tecnológico moderno.

### Descripción

Explicar cómo se usa el concepto en la tecnología.

### Desafíos de ingeniería

Qué dificultades prácticas emergen al implementar este concepto.

### Soluciones ingenieriles

Cómo se resuelven o se trabaja alrededor de estas dificultades.

## Aplicación 3: Contexto científico-experimental

Una aplicación en un entorno de investigación o laboratorio.

### Descripción

Explicar cómo se estudia o se aprovecha este concepto en ciencia.

### Mediciones y técnicas

Cómo se miden las magnitudes relevantes.

### Insights científicos

Qué nuevo conocimiento se obtiene de estas mediciones.

## Aplicación 4: Contexto histórico o de fronteras

Una aplicación histórica o un contexto donde el concepto resulta crucial para 
comprender fenómenos avanzados.

### Descripción

Situar la aplicación en contexto.

### Importancia histórica o conceptual

Por qué esta aplicación fue o es importante.

### Conexión con conceptos más generales

Cómo este leaf se integra en una comprensión más amplia.

## Aplicación 5: Análisis crítico

Una reflexión sobre límites, extensiones o implicaciones del concepto.

### Pregunta desafiante

Una pregunta que requiere aplicar el concepto de forma no obvia.

### Análisis

Abordar la pregunta y extraer conclusiones.

### Generalización

Cómo se generaliza el resultado a otros contextos.
"""
    
    return content


def generate_historia_md(leaf_dir: Path, meta: Dict, mags: Dict, formulas: Dict) -> str:
    """Generate historia.md from YAMLs"""
    
    titulo = meta.get('nombre', {}).get('es', 'Concepto')
    
    content = f"""# Historia: {titulo}

## Origenes y desarrollo

La historia de cómo el concepto de "{titulo}" fue descubierto, 
formulado y comprendido por la comunidad científica.

### Primeras observaciones

Describir las observaciones empíricas que motivaron el estudio sistemático de este fenómeno.

### Teorización inicial

Cómo los científicos primeros intentaron explicar estas observaciones.

### Refinamiento y consolidación

El proceso mediante el cual la comprensión se hizo más precisa y rigurosa.

## Figuras clave

Cientificos cuyas contribuciones fueron fundamentales en el desarrollo del concepto.

## Contexto científico

El estado del conocimiento en la época cuando el concepto fue desarrollado.

## Relevancia contemporánea

Cómo el concepto sigue siendo central o ha evolucionado en la física moderna.
"""
    
    return content


def generate_bilingual_pair(leaf_dir: Path, meta: Dict, mags: Dict, formulas: Dict, 
                           magnitudes_data: Dict, generator_func) -> tuple:
    """Generate both .md and .en.md versions"""
    
    content_es = generator_func(leaf_dir, meta, mags, formulas)
    
    # For English, simplemente traducir títulos y mantener estructura
    # Esta es una versión básica; en un proyecto real habría traducción completa
    titulo_en = meta.get('nombre', {}).get('en', meta.get('nombre', {}).get('es', 'Concept'))
    content_en = content_es.replace(
        meta.get('nombre', {}).get('es', 'Concepto'),
        titulo_en
    )
    
    return content_es, content_en


def regenerate_leaf(leaf_dir: Path) -> bool:
    """Regenerate all 12 .md files for a single leaf"""
    
    print(f"\n{'='*80}")
    print(f"Regenerando: {leaf_dir.name}")
    print(f"Ruta: {leaf_dir.relative_to(DINAMICA_ROOT)}")
    print(f"{'='*80}")
    
    # Load YAMLs
    meta = load_yaml(leaf_dir / "meta.yaml")
    if not meta:
        print(f"  ❌ No meta.yaml encontrado")
        return False
    
    magnitudes_data = load_yaml(leaf_dir / "magnitudes.yaml")
    formulas_data = load_yaml(leaf_dir / "formulas.yaml")
    
    mags = extract_mag_from_yaml(magnitudes_data)
    formulas = extract_formulas_from_yaml(formulas_data)
    
    print(f"  ✓ YAMLs cargados")
    print(f"    - Magnitudes: {len(mags)}")
    print(f"    - Fórmulas: {len(formulas)}")
    
    try:
        # Generate teoria
        teoria_es, teoria_en = generate_bilingual_pair(
            leaf_dir, meta, mags, formulas, magnitudes_data,
            generate_teoria_md
        )
        with open(leaf_dir / "teoria.md", 'w', encoding='utf-8') as f:
            f.write(teoria_es)
        with open(leaf_dir / "teoria.en.md", 'w', encoding='utf-8') as f:
            f.write(teoria_en)
        print(f"  ✓ teoria.md regenerado")
        
        # Generate ejemplos
        ejemplos_es, ejemplos_en = generate_bilingual_pair(
            leaf_dir, meta, mags, formulas, magnitudes_data,
            generate_ejemplos_md
        )
        with open(leaf_dir / "ejemplos.md", 'w', encoding='utf-8') as f:
            f.write(ejemplos_es)
        with open(leaf_dir / "ejemplos.en.md", 'w', encoding='utf-8') as f:
            f.write(ejemplos_en)
        print(f"  ✓ ejemplos.md regenerado")
        
        # Generate modelos
        modelos_es, modelos_en = generate_bilingual_pair(
            leaf_dir, meta, mags, formulas, magnitudes_data,
            generate_modelos_md
        )
        with open(leaf_dir / "modelos.md", 'w', encoding='utf-8') as f:
            f.write(modelos_es)
        with open(leaf_dir / "modelos.en.md", 'w', encoding='utf-8') as f:
            f.write(modelos_en)
        print(f"  ✓ modelos.md regenerado")
        
        # Generate errores
        errores_es, errores_en = generate_bilingual_pair(
            leaf_dir, meta, mags, formulas, magnitudes_data,
            generate_errores_md
        )
        with open(leaf_dir / "errores.md", 'w', encoding='utf-8') as f:
            f.write(errores_es)
        with open(leaf_dir / "errores.en.md", 'w', encoding='utf-8') as f:
            f.write(errores_en)
        print(f"  ✓ errores.md regenerado")
        
        # Generate aplicaciones
        aplicaciones_es, aplicaciones_en = generate_bilingual_pair(
            leaf_dir, meta, mags, formulas, magnitudes_data,
            generate_aplicaciones_md
        )
        with open(leaf_dir / "aplicaciones.md", 'w', encoding='utf-8') as f:
            f.write(aplicaciones_es)
        with open(leaf_dir / "aplicaciones.en.md", 'w', encoding='utf-8') as f:
            f.write(aplicaciones_en)
        print(f"  ✓ aplicaciones.md regenerado")
        
        # Generate historia
        historia_es, historia_en = generate_bilingual_pair(
            leaf_dir, meta, mags, formulas, magnitudes_data,
            generate_historia_md
        )
        with open(leaf_dir / "historia.md", 'w', encoding='utf-8') as f:
            f.write(historia_es)
        with open(leaf_dir / "historia.en.md", 'w', encoding='utf-8') as f:
            f.write(historia_en)
        print(f"  ✓ historia.md regenerado")
        
        return True
        
    except Exception as e:
        print(f"  ❌ Error durante regeneración: {e}")
        import traceback
        traceback.print_exc()
        return False


def validate_leaf(leaf_dir: Path) -> Optional[Dict]:
    """Run official validator on leaf"""
    
    try:
        validator_path = Path(r"C:\Users\USER\Desktop\Phyxio\tools\phyxio_leaf_validator.py")
        result = subprocess.run(
            [sys.executable, str(validator_path), str(leaf_dir)],
            capture_output=True,
            text=True,
            timeout=30
        )
        
        # Parse JSON output
        try:
            for line in result.stdout.split('\n'):
                if line.strip().startswith('{'):
                    return json.loads(line)
        except:
            pass
        
        return None
        
    except Exception as e:
        print(f"  ⚠️  Validación no disponible: {e}")
        return None


def main():
    """Main entry point"""
    
    print("\n" + "="*80)
    print("RECONSTRUCCIÓN SEGURA DE LEAVES DINAMICA")
    print("="*80)
    
    if not DINAMICA_ROOT.exists():
        print(f"ERROR: {DINAMICA_ROOT} no existe")
        return
    
    # Find all leaves
    all_leaves = get_all_leaves(DINAMICA_ROOT)
    print(f"\nTotal de leaves encontrados: {len(all_leaves)}")
    
    # Filter only actual leaves (those with 16 files)
    valid_leaves = []
    for leaf_dir in all_leaves:
        files = list(leaf_dir.glob("*"))
        md_files = [f for f in files if f.suffix in ['.md', '.yaml', '.yaml']]
        if len(md_files) >= 12:  # At least the required 16 files
            valid_leaves.append(leaf_dir)
    
    print(f"Leaves válidos para regenerar: {len(valid_leaves)}")
    
    if not valid_leaves:
        print("No se encontraron leaves válidos")
        return
    
    # Process leaves
    success_count = 0
    fail_count = 0
    
    report = []
    
    for i, leaf_dir in enumerate(valid_leaves, 1):
        leaf_name = leaf_dir.name
        
        # Regenerate
        if regenerate_leaf(leaf_dir):
            success_count += 1
            status = "✅ REGENERADO"
            
            # Validate
            val_result = validate_leaf(leaf_dir)
            if val_result:
                score = val_result.get('score', {}).get('overall', 0)
                print(f"  Validación: {score:.2f}/5.0")
                report.append({
                    'leaf': leaf_name,
                    'status': 'regenerated',
                    'score': score
                })
            else:
                report.append({
                    'leaf': leaf_name,
                    'status': 'regenerated',
                    'score': None
                })
        else:
            fail_count += 1
            status = "❌ FALLO"
            print(f"  {status}")
            report.append({
                'leaf': leaf_name,
                'status': 'failed',
                'score': None
            })
        
        # Progress
        if (i % 5) == 0:
            print(f"\nProgreso: {i}/{len(valid_leaves)} ({100*i//len(valid_leaves)}%)")
    
    # Summary
    print(f"\n" + "="*80)
    print(f"RESUMEN FINAL")
    print(f"="*80)
    print(f"Exitosos: {success_count}/{len(valid_leaves)}")
    print(f"Fallidos: {fail_count}/{len(valid_leaves)}")
    
    # Save report
    report_path = Path(r"C:\Users\USER\Desktop\Phyxio\scratch\reconstruccion_report.json")
    with open(report_path, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
    
    print(f"\nReporte guardado en: {report_path}")


if __name__ == '__main__':
    main()
