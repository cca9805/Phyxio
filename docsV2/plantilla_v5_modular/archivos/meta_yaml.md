> **Función**: Define los metadatos y la configuración del motor para el leaf.
> **Relaciones**: Determina si se carga `interpretacion.yaml`. Sincronizado estrictamente con `phyxio-map.yaml`.

---

<!-- EXTRACT-STRUCTURE-YAML -->
```yaml
###ESTRUCTURA OBLIGATORIA META###
id: ""
nombre:
  es: ""
  en: ""
area: ""
bloque: ""
subbloque: ""
parent_id: ""
ruta_relativa: ""
orden: 0
type: ""
niveles:
  es: []
  en: []
icon: ""
descripcion: ""
description_en: ""
tags:
  es: []
  en: []
prerequisitos: []
graficos: []
physical_role:
  es: ""
  en: ""
dificultad: 0
tiempo_estimado_min: 0
interpretacion:
  enabled: true
  archivo: "interpretacion.yaml"
  ui:
    inline_calculator: false
    inline_graph: false
    dedicated_tab: true
    tab_label:
      es: ""
      en: ""
  mini_graph:
    enabled: false
    preferred_type: ""
  output_policy:
    show_summary_first: false
    max_inline_messages: 0
    show_warnings: false
    show_likely_errors: false
  dependencies:
    requires_formulas: false
    requires_magnitudes: false
    supports_graph_binding: false
```

# 6. meta.yaml

Campos obligatorios:

- id (tomar de phyxio-map.yaml)
- nombre
  - en: (tomar de titulo_en: de phyxio-map.yaml)
  - es: (tomar de titulo: de phyxio-map.yaml)
- area
- bloque
- subbloque
- parent_id (tomar de phyxio-map.yaml)
- ruta_relativa (tomar de phyxio-map.yaml)
- orden (tomar de phyxio-map.yaml)
- type (tomar de phyxio-map.yaml)
- niveles (tomar de phyxio-map.yaml)
  - en:
  - es:
- icon (tomar de phyxio-map.yaml)
- descripcion
- description_en
- tags
  - en:
  - es:
- prerequisitos (ruta relativa de otro leaf)
- graficos (tomar de phyxio-map.yaml)
- physical_role (tomar de phyxio-map.yaml)
  - en:
  - es:
- dificultad (entre 1 - 5)
- tiempo_estimado_min

- interpretacion
  - enabled
  - archivo
  - ui
    - inline_calculator
    - inline_graph
    - dedicated_tab
    - tab_label
      - es
      - en
  - mini_graph
    - enabled
    - preferred_type
  - output_policy
    - show_summary_first
    - max_inline_messages
    - show_warnings
    - show_likely_errors
  - dependencies
    - requires_formulas
    - requires_magnitudes
    - supports_graph_binding

**REGLA DE OBLIGATORIEDAD ABSOLUTA — Todos los campos de `interpretacion` son MANDATORIOS:**

Cuando `interpretacion.enabled: true`, **TODOS** los campos listados arriba deben existir
con valores válidos (nunca `null`, `None`, ni ausentes). Esto incluye:

- `mini_graph.enabled` (booleano)
- `mini_graph.preferred_type` (string: Coord | Svg | Dcl | none)
- `output_policy.show_summary_first` (booleano)
- `output_policy.max_inline_messages` (entero ≥ 1)
- `output_policy.show_warnings` (booleano)
- `output_policy.show_likely_errors` (booleano)
- `dependencies.requires_formulas` (booleano)
- `dependencies.requires_magnitudes` (booleano)
- `dependencies.supports_graph_binding` (booleano)

**NO es válido** omitir campos declarando solo los que "parecen relevantes".
El validador rechazará cualquier `meta.yaml` con campos faltantes en esta sección.

Reglas:

- UTF-8 obligatorio
- descripcion: máximo 20 palabras
- description_en: máximo 20 palabras
- `descripcion` y `description_en` pueden mejorarse editorialmente respecto al mapa, pero no pueden contradecir el tipo conceptual, la ruta ni el rol físico declarados en el mapa
- máximo 6 tags
- type debe ser leaf
- niveles debe contener únicamente etiquetas válidas del proyecto
- physical_role, tags, niveles, nombre debe ir en bloque es/en
- descripcion y description_en deben ser equivalentes semánticamente
- tags deben ser útiles para navegación, no genéricos vacíos
- `interpretacion.archivo` debe ser exactamente `interpretacion.yaml`
- `interpretacion.enabled` debe ser `true` en el estándar completo
- la configuración UI de interpretación debe ser coherente con la experiencia del leaf

## Regla de sincronización con phyxio-map.yaml (OBLIGATORIA)

Los siguientes campos de `meta.yaml` no se redactan libremente. Deben tomarse
del nodo leaf correspondiente en `phyxio-map.yaml` en frontend\src\v2\map\phyxio-map.yaml y mantenerse sincronizados:

- id
- nombre.es  ← titulo
- nombre.en  ← titulo_en
- ruta_relativa
- orden
- type
- niveles.es
- niveles.en
- icon
- graficos
- physical_role.es
- physical_role.en

Reglas:

**PROTOCOLO OBLIGATORIO antes de crear/editar meta.yaml:**

1. **ABRIR y LEER** el nodo del leaf en `phyxio-map.yaml` ANTES de escribir código
2. **COPIAR EXACTAMENTE** los valores de los campos sincronizados (arriba)
3. **NO MODIFICAR** ortografía, mayúsculas/minúsculas, ni valores de estos campos:
   - `nombre.es/en`: usar el `titulo/titulo_en` exacto del mapa (respetar tildes/sin tildes)
   - `niveles.es`: ESO, BACHILLERATO, UNIVERSIDAD, EXTRACURRICULAR (mayúsculas exactas)
   - `niveles.en`: Secondary, Upper Secondary, University, Extracurricular
   - `icon`: copiar el emoji exacto del mapa (ej: 🔦, no ⚡)
   - `physical_role`: copiar exactamente "magnitud física" o "concepto físico"
4. **VERIFICAR** que `meta.yaml` pase la validación contra el mapa antes de finalizar

- Si el mapa y el meta discrepan en cualquiera de esos campos, el meta es inválido.
- `descripcion` y `description_en` sí pueden ser editoriales, pero deben seguir siendo
  semánticamente coherentes con el mapa.
- `descripcion` y `description_en` no pueden contradecir el tipo conceptual del leaf,
  su ruta en el árbol ni el `physical_role` declarado en el mapa.
- `area`, `bloque`, `subbloque` y `parent_id` deben derivarse de la ruta y de la posición
  del leaf dentro del árbol del mapa, no inventarse manualmente.
- Si el mapa cambia, el `meta.yaml` debe regenerarse o sincronizarse antes de seguir
  editando el leaf.

Regla reforzada:

Si `interpretacion.enabled` es `true`, los demás archivos del leaf deben estar preparados para soportar:
- lectura inline en calculadora
- tab dedicada
- integración con gráfico cuando exista gráfico

No se admite un `meta.yaml` que declare interpretación sin que el leaf pueda sostenerla.

## Regla de Representación Dominante para Leafs sin Gráficos:
- Si el leaf no contiene gráficos (`graficos: []`), el campo `representacion_dominante` en `meta.yaml` no producirá ningún fallo en la validación, independientemente de si tiene el valor `"none"` o cualquier otro valor heredado de la plantilla (como `"Coord"`). No obstante, por buenas prácticas se recomienda establecerlo en `"none"`.

---------------------------------------------------------------------