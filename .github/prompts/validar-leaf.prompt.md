---
description: "Valida un leaf Phyxio con el validador oficial y resume los fallos de Nivel 5. Úsalo sobre cualquier leaf de data_v2_i18n para comprobar estructura, coherencia simbólica, fórmulas, magnitudes y sincronización de YAMLs."
name: "Validar leaf"
argument-hint: "Ruta relativa del leaf (opcional; si se omite, se infiere del archivo activo en el editor)"
agent: "agent"
---

Valida un leaf Phyxio. El resumen debe estar siempre **en español**.

## Determinar la ruta del leaf

- Si se proporcionó un argumento (`$args[0]`), úsalo directamente.
- Si no, infiere la ruta del leaf a partir del archivo activo en el editor: toma su ruta absoluta y sube directorios hasta encontrar la carpeta que contiene `meta.yaml`.

## Pasos

1. Ejecuta el validador oficial:
   ```
   python tools/phyxio_leaf_validator.py <ruta-del-leaf>
   ```
   
2. Comprobar que las fórmulas de ese leaf son correctas y están todas presentes y representadas en `formulas.yaml` con todos los campos rellenados, incluyendo su `result_semantics.target` correspondiente en `magnitudes.yaml`.   

3. Analiza la salida completa del validador y la comprobación de fórmulas y magnitudes y produce un resumen estructurado con las siguientes secciones:

### Resultado de validación

**Nivel actual estimado:** (ej. 4.2 / 4.7 / 5)

### ✅ Criterios superados
Lista breve de los checks que pasaron.

Formulas correctas y sincronizadas con `formulas.yaml` y `magnitudes.yaml`:
- Fórmula 1: `{{f:id_formula1}}` → target `[[id_magnitud1]]` existe en `magnitudes.yaml`
- Fórmula 2: `{{f:id_formula2}}` → target `[[id_magnitud2]]` existe en `magnitudes.yaml`
- ...

### ❌ Fallos bloqueantes
Por cada fallo, indica:
- **Archivo afectado**
- **Regla violada** (referencia a [plantilla_v5.md](../../docsV2/plantilla_v5.md) si aplica)
- **Corrección concreta** (qué cambiar exactamente)

### ⚠️ Advertencias no bloqueantes
Problemas que no impiden el Nivel 4 pero sí el Nivel 5.

### 🔧 Acciones prioritarias
Lista ordenada de los cambios con mayor impacto para subir de nivel, del más crítico al menos urgente.

## Reglas de interpretación

- Un fallo en sincronización de IDs entre YAMLs (`magnitudes.yaml` ↔ `formulas.yaml` ↔ `interpretacion.yaml`) es siempre bloqueante para Nivel 4.7+.
- Un `{{f:id}}` usado inline (dentro de párrafo) es fallo de Nivel 5.
- Un `[[id]]` que no existe en `magnitudes.yaml` es fallo bloqueante.
- `pregunta_fisica_central` sin signos de interrogación es fallo de `meta.yaml`.
- Si `graficos` está declarado, aplicar también [plantilla_graficos_v5.md](../../docsV2/plantilla_graficos_v5.md).
