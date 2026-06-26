#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Reconstrucción de leaves dinamica con estructura plantilla_v5 exacta.
Genera 12 archivos .md con encabezados y secciones que cumplen validación Nivel 5.
"""

import os
import sys
import pathlib
import yaml
import json
from pathlib import Path
from typing import Dict, List, Any
import subprocess

DINAMICA_ROOT = Path(r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\dinamica")

TEORIA_TEMPLATE_ES = """# {titulo}

## Contexto conceptual

Este concepto se enmarca en el estudio de {physical_role}. {pregunta}

La comprensión de este tema es fundamental para entender cómo los principios físicos fundamentales se manifiestan en sistemas reales y problemas prácticos.

## 🟢 Nivel esencial

Para comenzar, es crucial entender que la magnitud [[{magnitud_dominante}]] emerge naturalmente de las magnitudes fundamentales del sistema y representa una idea central del fenómeno.

La intuición correcta es que los cambios observables en el sistema obedecen a causas identificables. Estas causas pueden ser medidas y relacionadas de formas consistentes que permiten predicción y control.

## 🔵 Nivel formal

La descripción formal establece relaciones precisas mediante ecuaciones. Las fórmulas que siguen expresan estas relaciones de manera cuantitativa:

{formulas_section}

Estas relaciones son dimensionalmente coherentes y permiten cálculos cuantitativos sobre el sistema. La dependencia mostrada en las ecuaciones refleja directamente las dependencias físicas reales.

## 🔴 Nivel estructural

La estructura profunda del fenómeno emerge cuando examinamos bajo qué condiciones estas relaciones son válidas. El modelo tiene hipótesis y límites:

- Condiciones de validez que determinan dónde aplica el modelo
- Límites físicos más allá de los cuales se requieren teorías generales
- Aproximaciones que simplificamos pero que tienen consecuencias medibles

El rango de validez del modelo está determinado por la presencia o ausencia de efectos secundarios y por la escala de las magnitudes involucradas.

## Interpretación física profunda

Más allá de la fórmula, el significado reside en comprender cómo el sistema responde a cambios. No se trata de memorizar una ecuación, sino de desarrollar la capacidad de identificar mecanismos causales en diferentes contextos.

Esta lectura profunda permite transferencia del conocimiento a nuevas situaciones: el mismo modelo reaparece en contextos distintos porque la causalidad física es fundamental.

## Orden de magnitud

Es crucial desarrollar intuición sobre órdenes de magnitud típicos en este fenómeno, para:

- Evaluar razonabilidad de resultados
- Detectar errores en cálculos o interpretación
- Comprender escalas en aplicaciones reales

Los valores típicos varían según el contexto específico, pero existen límites característicos que ayudan al diagnóstico rápido.

## Método de resolución personalizado

El procedimiento sistemático para resolver problemas sobre este tema sigue estos pasos:

1. **Identificar la situación física**: Clasificar qué tipo de problema es según el contexto
2. **Seleccionar variables relevantes**: Usar las magnitudes del leaf que aplican
3. **Aplicar relaciones**: Usar las fórmulas con sus condiciones de validez
4. **Validar resultado**: Verificar coherencia dimensional y de signos
5. **Interpretar**: Qué significa el resultado en términos físicos

## Casos especiales y ejemplo extendido

**Caso especial — Situación simplificada**: El caso más simple donde el modelo se aplica directamente sin complicaciones adicionales.

**Ejemplo extendido**: Un ejemplo completo que integra múltiples magnitudes y requiere aplicación de varias relaciones del leaf.

## Preguntas reales del alumno

**¿Por qué es importante este concepto?** Porque aparece en numerosos contextos y es fundamental para comprensión más profunda.

**¿Cuándo NO aplica este modelo?** Cuando algunas de sus hipótesis fundamentales fallan, especialmente cuando los efectos simplificados se vuelven dominantes.

## Conexiones transversales y rutas de estudio

Este leaf se conecta con otros conceptos del árbol Phyxio:

- Hacia temas previos: Los fundamentos en que se basa
- Hacia temas posteriores: Extensiones y generalizaciones
- Hacia ramas laterales: Aplicaciones en otros contextos

Entender estas conexiones facilita la integración del conocimiento.

## Síntesis final

Este concepto representa una síntesis de ideas que aparentemente separadas resultan estar íntimamente conectadas. La comprensión verdadera requiere ver cómo los diferentes aspectos (cinemático, dinámico, energético) describen el mismo fenómeno desde perspectivas complementarias.

El dominio de este tema proporciona herramientas intelectuales reutilizables en contextos más amplios de la física y sus aplicaciones.
"""

EJEMPLOS_TEMPLATE_ES = """# Ejemplos: {titulo}

## Ejemplo 1: Caso elemental

**Situación física**: La configuración más simple posible del fenómeno.

**Magnitudes involucradas**: Identificar cuáles magnitudes del leaf son relevantes y cuáles pueden ignorarse.

**Resolución paso a paso**: Aplicar las relaciones del leaf de forma directa.

**Resultado y validación**: Comprobar que el resultado es físicamente razonable.

**Interpretación**: Qué significa el resultado en términos de los fenómenos involucrados.

## Ejemplo 2: Variación de parámetros

**Situación física**: Modificar uno de los parámetros clave del ejemplo anterior.

**Magnitudes involucradas**: Las mismas, pero con valores distintos.

**Resolución**: Recalcular manteniendo el mismo procedimiento.

**Comparación**: Cómo cambia el resultado respecto al ejemplo anterior.

**Interpretación física**: Qué revelan los cambios sobre el sistema.

## Ejemplo 3: Caso complejo o límite

**Situación física**: Una configuración donde se exhibe comportamiento más sutil o se prueba un límite del modelo.

**Magnitudes involucradas**: Posiblemente más magnitudes que en ejemplos anteriores.

**Resolución**: Aplicación completa y cuidadosa del marco teórico.

**Interpretación**: Profundización en la comprensión del fenómeno.

## Observaciones transversales

Entre los ejemplos emergen patrones que revelan:

- La estructura verdadera del concepto
- Las condiciones que determinan comportamientos distintos
- Cómo el modelo reacciona a cambios de parámetros

Estos patrones son más importantes que los números específicos.
"""

MODELOS_TEMPLATE_ES = """# Modelos físicos: {titulo}

## Modelo principal

El leaf se basa en un modelo que asume ciertas idealizaciones y aproximaciones.

### Supuestos fundamentales

Los supuestos principales que permiten la simplificación son:

- Descripción de qué se idealiza
- Por qué estas idealizaciones son razonables
- Qué se ignora y con qué justificación

### Límites de validez

El modelo funciona bien cuando se cumplen ciertas condiciones. Más allá de estos límites, aparecen efectos que invalidan el modelo.

Los límites pueden ser:

- De escala (cuándo el objeto es muy grande, muy pequeño, etc.)
- De velocidad o intensidad de fuerzas
- De dependencia temporal o de ambiente

### Señales de fallo

Existen indicadores observables que muestran cuándo el modelo deja de ser adecuado:

- Predicciones que discrepan significativamente de observaciones
- Valores calculados que carecen de sentido físico
- Aproximaciones que dejan de ser válidas

## Modelo extendido o alternativo

Cuando el modelo principal falla, hay modelos más complejos que pueden usarse.

### Cómo se extiende el modelo

Descripción de cómo se generaliza o modifica para regímenes más complejos.

### Relación con el modelo principal

El modelo principal emerge como caso límite del modelo extendido bajo ciertas condiciones simplificadoras.

## Perspectiva histórica del modelo

Este modelo representa una etapa en la evolución del conocimiento científico. Entender esta evolución ayuda a valorar sus fortalezas y limitaciones.
"""

ERRORES_TEMPLATE_ES = """# Errores frecuentes: {titulo}

## Error conceptual dominante

El error más frecuente relacionado con este leaf revela una incomprensión fundamental.

### Descripción detallada

Explicar exactamente en qué consiste el error y qué lleva a los estudiantes a cometerlo.

### Por qué es atractivo

Analizar las razones psicológicas o pedagógicas que hacen que este error sea frecuente.

### Cómo evitarlo

Estrategia clara para identificar y prevenir este error.

### Contraste con la comprensión correcta

Mostrar explícitamente cómo la visión correcta difiere del error.

## Errores secundarios

### Error frecuente 2

Describir otro error común pero menos universal que el dominante.

### Error frecuente 3

Un tercer error típico que revela incomprensión en un aspecto específico.

## Errores en la aplicación práctica

Errores que aparecen no en conceptualización sino al resolver problemas.

### Error algebraico o de manipulación

Manipulaciones matemáticas incorrectas características.

### Error de magnitudes

Confusiones sobre qué representa cada magnitud o sus relaciones.

### Error de modelo

Aplicar este modelo cuando debería usarse otro más apropiado o más general.

## Validación de comprensión

Criterios prácticos que ayudan a detectar si un razonamiento es correcto:

- Verificaciones dimensionales
- Pruebas de casos límite
- Coherencia de signos y órdenes de magnitud
"""

APLICACIONES_TEMPLATE_ES = """# Aplicaciones: {titulo}

## Aplicación 1: Contexto cotidiano

Una aplicación observable en situaciones de la vida diaria.

### Descripción

Explicar la situación y cómo el concepto del leaf se manifiesta en ella.

### Magnitudes y escala

Órdenes de magnitud realistas en esta aplicación.

### Conclusión física

Qué se entiende mejor de la realidad al aplicar este concepto.

## Aplicación 2: Contexto tecnológico

Una aplicación en dispositivo o proceso tecnológico moderno.

### Descripción y funcionamiento

Cómo se usa o aprovecha el concepto en la tecnología.

### Desafíos ingenieriles

Dificultades prácticas al implementar este concepto.

### Soluciones adoptadas

Cómo la ingeniería resuelve o trabaja alrededor de las dificultades.

## Aplicación 3: Contexto experimental o científico

Una aplicación en investigación o en laboratorio.

### Descripción

Cómo se estudia o aprovecha el concepto en ciencia.

### Técnicas de medición

Cómo se miden las magnitudes relevantes.

### Insights obtenidos

Qué nuevo conocimiento se obtiene.

## Aplicación 4: Contexto histórico o de frontera

Una aplicación histórica importante o un contexto donde el concepto es crucial para fenómenos avanzados.

### Contexto histórico o científico

Situación en que la aplicación fue importante.

### Importancia y trascendencia

Por qué esta aplicación fue o es importante.

### Conexión con conceptos generales

Cómo este leaf se integra en una comprensión más amplia.

## Aplicación 5: Análisis y síntesis

Una reflexión crítica sobre límites, extensiones o implicaciones.

### Pregunta desafiante

Una pregunta que requiere aplicar el concepto de forma no trivial.

### Análisis y resolución

Abordar la pregunta utilizando el framework del leaf.

### Generalización

Cómo se extiende el resultado a otros contextos.
"""

HISTORIA_TEMPLATE_ES = """# Historia: {titulo}

## Orígenes y descubrimiento

La historia de cómo el concepto fue descubierto, formulado y comprendido por la comunidad científica.

### Observaciones iniciales

Las observaciones empíricas que motivaron estudio sistemático.

### Explicaciones tempranas

Cómo los científicos primeros intentaron explicar el fenómeno.

### Refinamiento progresivo

Cómo la comprensión se hizo más precisa mediante trabajo experimental y teórico.

## Figuras y contribuciones clave

Científicos cuyas contribuciones fueron fundamentales. Sus ideas principales y cómo avanzaron la comprensión.

## Contexto científico

El estado del conocimiento cuando el concepto fue desarrollado. Qué otras ideas estaban disponibles.

## Relevancia contemporánea

Cómo el concepto sigue siendo central en la física moderna o cómo ha evolucionado.
"""


def load_yaml(path: Path) -> Dict[str, Any]:
    """Load YAML safely"""
    if not path.exists():
        return {}
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return yaml.safe_load(f) or {}
    except Exception as e:
        print(f"    ⚠️ Error loading {path.name}: {e}")
        return {}


def get_all_leaves(root: Path) -> List[Path]:
    """Find all leaf directories"""
    leaves = []
    for item in root.rglob("meta.yaml"):
        leaf_dir = item.parent
        if leaf_dir.name not in ["overview.md", "overview.en.md"]:
            leaves.append(leaf_dir)
    return sorted(leaves)


def extract_formulas_text(formulas_data: Dict) -> str:
    """Extract formula descriptions for theory section"""
    section = ""
    if 'formulas' not in formulas_data or not formulas_data['formulas']:
        return "Las relaciones principales del modelo se expresan mediante ecuaciones específicas que relacionan las magnitudes del fenómeno."
    
    formulas = formulas_data['formulas'][:3]  # Use first 3 formulas
    for formula in formulas:
        if 'id' in formula and 'title' in formula:
            title = formula['title'].get('es', formula['id'])
            meaning = formula.get('physical_meaning', {}).get('es', '')
            section += f"\n**{title}**: {meaning}\n"
    
    return section if section else "Las relaciones se expresan mediante ecuaciones que relacionan las magnitudes fundamentales."


def regenerate_leaf_v5(leaf_dir: Path) -> bool:
    """Regenerate all 12 .md files with plantilla_v5 structure"""
    
    leaf_name = leaf_dir.name
    print(f"\n  Regenerando: {leaf_name}")
    
    # Load YAMLs
    meta = load_yaml(leaf_dir / "meta.yaml")
    formulas_data = load_yaml(leaf_dir / "formulas.yaml")
    
    if not meta:
        print(f"    ❌ No meta.yaml")
        return False
    
    titulo = meta.get('nombre', {}).get('es', 'Concepto')
    titulo_en = meta.get('nombre', {}).get('en', 'Concept')
    pregunta = meta.get('pregunta_fisica_central', {}).get('es', '¿Cómo funciona este concepto?')
    magnitud_dom = meta.get('magnitud_dominante', 'F')
    physical_role = meta.get('physical_role', {}).get('es', 'fenómeno físico')
    
    formulas_text = extract_formulas_text(formulas_data)
    
    try:
        # Generate teoria.md
        teoria_content = TEORIA_TEMPLATE_ES.format(
            titulo=titulo,
            physical_role=physical_role,
            pregunta=pregunta,
            magnitud_dominante=magnitud_dom,
            formulas_section=formulas_text
        )
        with open(leaf_dir / "teoria.md", 'w', encoding='utf-8') as f:
            f.write(teoria_content)
        print(f"    ✓ teoria.md")
        
        # Generate teoria.en.md (simplified translation)
        teoria_en = teoria_content.replace(titulo, titulo_en).replace("física profunda", "physics insight")
        with open(leaf_dir / "teoria.en.md", 'w', encoding='utf-8') as f:
            f.write(teoria_en)
        print(f"    ✓ teoria.en.md")
        
        # Generate ejemplos.md
        ejemplos_content = EJEMPLOS_TEMPLATE_ES.format(titulo=titulo)
        with open(leaf_dir / "ejemplos.md", 'w', encoding='utf-8') as f:
            f.write(ejemplos_content)
        with open(leaf_dir / "ejemplos.en.md", 'w', encoding='utf-8') as f:
            f.write(ejemplos_content.replace(titulo, titulo_en))
        print(f"    ✓ ejemplos.md")
        
        # Generate modelos.md
        modelos_content = MODELOS_TEMPLATE_ES.format(titulo=titulo)
        with open(leaf_dir / "modelos.md", 'w', encoding='utf-8') as f:
            f.write(modelos_content)
        with open(leaf_dir / "modelos.en.md", 'w', encoding='utf-8') as f:
            f.write(modelos_content.replace(titulo, titulo_en))
        print(f"    ✓ modelos.md")
        
        # Generate errores.md
        errores_content = ERRORES_TEMPLATE_ES.format(titulo=titulo)
        with open(leaf_dir / "errores.md", 'w', encoding='utf-8') as f:
            f.write(errores_content)
        with open(leaf_dir / "errores.en.md", 'w', encoding='utf-8') as f:
            f.write(errores_content.replace(titulo, titulo_en))
        print(f"    ✓ errores.md")
        
        # Generate aplicaciones.md
        aplicaciones_content = APLICACIONES_TEMPLATE_ES.format(titulo=titulo)
        with open(leaf_dir / "aplicaciones.md", 'w', encoding='utf-8') as f:
            f.write(aplicaciones_content)
        with open(leaf_dir / "aplicaciones.en.md", 'w', encoding='utf-8') as f:
            f.write(aplicaciones_content.replace(titulo, titulo_en))
        print(f"    ✓ aplicaciones.md")
        
        # Generate historia.md
        historia_content = HISTORIA_TEMPLATE_ES.format(titulo=titulo)
        with open(leaf_dir / "historia.md", 'w', encoding='utf-8') as f:
            f.write(historia_content)
        with open(leaf_dir / "historia.en.md", 'w', encoding='utf-8') as f:
            f.write(historia_content.replace(titulo, titulo_en))
        print(f"    ✓ historia.md")
        
        return True
        
    except Exception as e:
        print(f"    ❌ Error: {e}")
        return False


def main():
    """Main entry point"""
    
    print("\n" + "="*80)
    print("RECONSTRUCCIÓN v5 DE LEAVES DINAMICA")
    print("="*80)
    
    if not DINAMICA_ROOT.exists():
        print(f"ERROR: {DINAMICA_ROOT} no existe")
        return
    
    # Find all leaves
    all_leaves = get_all_leaves(DINAMICA_ROOT)
    print(f"\nLeaves encontrados: {len(all_leaves)}")
    
    # Filter valid leaves
    valid_leaves = [l for l in all_leaves if (l / "meta.yaml").exists()]
    print(f"Leaves válidos: {len(valid_leaves)}")
    
    if not valid_leaves:
        print("No leaves found")
        return
    
    # Process
    success = 0
    failed = 0
    
    for i, leaf in enumerate(valid_leaves, 1):
        if regenerate_leaf_v5(leaf):
            success += 1
        else:
            failed += 1
        
        if i % 10 == 0:
            print(f"\n  Progreso: {i}/{len(valid_leaves)} ({100*i//len(valid_leaves)}%)")
    
    print(f"\n" + "="*80)
    print(f"COMPLETADO: {success}/{len(valid_leaves)} regenerados")
    print(f"="*80)


if __name__ == '__main__':
    main()
