# Plantilla Graph SVG v1

## Objetivo

Esta plantilla define la ficha minima obligatoria para cualquier grafico SVG de
Phyxio. Un SVG no se considera valido solo porque renderiza: debe nacer con
identidad, contrato con calculadora, contrato con interpretacion, modo
experimento, modelo fisico, politica de animacion y salidas visuales claras.

## 1. Identidad

- leaf_id
- graph_type: Svg
- graph_id
- proposito didactico
- nivel educativo ES/EN

## 1B. Contrato obligatorio de `graficos.yaml`

Todo leaf que declare `Svg` debe incluir en `graficos.yaml` un bloque `svg`
enriquecido. No se admite el formato reducido con solo `title`, `sceneId`,
`objects` y `agentHints`.

Campos obligatorios:

```yaml
svg:
  id: "<leaf-id>-Svg"
  graphId: "<leaf-id>-Svg"
  type: "Svg"
  graphType: "Svg"
  title:
    es: ""
    en: ""
  sceneId: ""
  sceneLabel:
    es: ""
    en: ""
  objects:
    es: []
    en: []
  mainObject:
    es: ""
    en: ""
  referenceFrame:
    es: ""
    en: ""
  geometry:
    es: ""
    en: ""
  interactions:
    es: ""
    en: ""
  modelElements:
    es: []
    en: []
  visualCues:
    es: []
    en: []
  scaleMeaning:
    es: ""
    en: ""
  relation:
    es: ""
    en: ""
  physicalReading:
    es: ""
    en: ""
  modelConnection:
    es: ""
    en: ""
  formulaConnection:
    es: ""
    en: ""
  readingFocus:
    es: ""
    en: ""
  agentHints:
    es: []
    en: []
  commonMistakes:
    es: []
    en: []
  animationTriggers: []
  interactiveElements: []
  recommendedTab: "graficas"
```

Reglas:

- `visualCues`, `agentHints` y `commonMistakes` deben tener al menos 3 entradas por idioma.
- `formulaConnection` debe ser string LaTeX o texto de formula, no JSX ni `<MathInline />`.
- `animationTriggers` e `interactiveElements` son obligatorios; usar `[]` si no aplican.
- Si la escena es cualitativa, `scaleMeaning` debe decirlo explicitamente.
- El SVG debe representar el fenomeno espacial del leaf; si puede eliminarse sin perdida interpretativa, es decorativo.

Plantilla:

```yaml
identity:
  leaf_id: nombre-del-leaf
  graph_type: Svg
  graph_id: svg-nombre-del-leaf
  proposito_didactico:
    es: Que lectura fisica aporta el SVG.
    en: What physical reading the SVG adds.
  nivel_educativo:
    es: bachillerato | universidad inicial
    en: high school | early undergraduate
```

## 2. Contrato con calculadora

Debe declarar:

- magnitudes de entrada esperadas
- alias aceptados
- magnitudes derivadas
- target interpretable o lista de targets
- como consume sharedParams.__calc
- politica de sincronizacion calculadora -> grafico

Plantilla:

```yaml
calculator_contract:
  expected_inputs: [m1, m2, v1, v2]
  accepted_aliases:
    v_cm: [vcm, Vcm]
  derived_magnitudes: [p1, p2, pTot, xcm]
  target_candidates: [pTot, xcm]
  calc_sync:
    source: sharedParams.__calc
    consumes: [target, result, known, formulaTitle]
    mode_policy: follow-calc-until-user-edit
```

## 3. Contrato con interpretacion

Debe declarar:

- interpretation_binding
- stateOut real del SVG
- magnitudes seleccionables
- contexto semantico emitido
- si puede abrir foco sobre una magnitud concreta

Plantilla:

```yaml
interpretation_contract:
  interpretation_binding:
    paramsIn: [m1, m2, v1, v2]
    stateOut: [p1, p2, pTot, xcm]
    target: pTot
  selectable_magnitudes: [p1, p2, pTot, xcm]
  emitted_semantic_context:
    - profileId
    - leafId
    - target
    - value
    - paramsIn
    - stateOut
  supports_focus_target: true
```

## 4. Modo experimento

Debe declarar:

- parametros manipulables
- rangos y presets
- cuando se desbloquea de la calculadora
- como se resetea

## 5. Modelo fisico

Debe declarar:

- ecuaciones usadas
- hipotesis
- dominio de validez
- simplificaciones visuales

## 6. Animacion

Todo SVG debe responder explicitamente a estas preguntas:

- Tiene tiempo interno: si | no
- Tiene play/pause: si | no
- La animacion representa tiempo fisico real o tiempo pedagogico

Si la respuesta es no, debe quedar documentado. No se admite silencio.

## 7. Salidas visuales

Debe declarar:

- que se dibuja
- que magnitudes se leen
- que debe quedar visible siempre
- que puede ocultarse por nivel

## 8. Checklist de coherencia

- todas las magnitudes usadas existen en magnitudes.yaml
- todas las formulas usadas existen en formulas.yaml
- hay al menos un target interpretable
- el SVG representa el leaf real y no un primo cercano
- funciona en modo calculadora y modo experimento

## Regla dura

Un SVG que no emite contexto interpretable o que no distingue entre tiempo
fisico y tiempo pedagogico no esta cerrado a nivel premium.

---

## Reglas duras adicionales para SVG profiles (`.svg.profile.jsx`)

### REGLA 1 — `variable_control` debe ser un ID de magnitud

El validador lee `graph_identity.variable_control` del profile y verifica que ese valor sea un ID existente en `magnitudes.yaml` del leaf. Si el valor no existe en las magnitudes, falla `graph_mag_coherence: variable_control '...' existe en magnitudes.yaml`.

```js
// ❌ Inválido: E0 no está en magnitudes.yaml
graph_identity: {
  variable_control: "E0",   // E0 no es ID de magnitud → FAIL
}

// ✅ Válido: E sí está en magnitudes.yaml
graph_identity: {
  variable_control: "E",   // E es ID de magnitud → OK
}
```

**Regla**: `variable_control` debe coincidir exactamente con un `id` definido en `magnitudes.yaml`. Si la magnitud a controlar tiene nombre largo (ej. `E_0`), usar ese ID exacto. No inventar IDs nuevos.

### REGLA 2 — Nombres de campos: nunca terminar en `id:` para valores que no son magnitudes

El validador escanea el archivo del profile con el patrón `id\s*:\s*"valor"` para extraer posibles IDs de magnitud. Cualquier campo cuyo nombre termine en `id` (como `formula_id`, `binding_id`) y cuyo valor sea un ID de fórmula o string arbitrario **será capturado erróneamente** como un ID de magnitud y causará FAIL.

```js
// ❌ Inválido: formula_id termina en 'id' y su valor no es magnitud
interpretation_binding: {
  target: "E",
  formula_id: "solucion_onda_plana_E",   // capturado como ID de magnitud → FAIL
}

// ✅ Válido: usar nombre que no termine en 'id'
interpretation_binding: {
  target: "E",
  formula_ref: "solucion_onda_plana_E",  // no capturado → OK
}
```

**Regla**: Dentro de `graph_identity`, `interpretation_binding` y bloques similares del profile, usar `formula_ref`, `formula_key`, `linked_formula` — nunca `formula_id` ni ningún campo cuyo nombre sea `*id`.

### REGLA 3 — Una sola entrada en `index.js` por leaf

El fichero `frontend/src/v2/components/graphs/dinamica/index.js` (u otro namespace) registra cada leaf por su ID. Si un mismo leaf aparece registrado bajo dos claves diferentes (ID corto + ruta relativa larga), el validador detecta que el mismo componente SVG está usado por 2 leafs distintos y falla `graph_reuse: Svg '...' usado por <= 1 leafs`.

```js
// ❌ Inválido: dos entradas para el mismo leaf
"ecuacion-de-onda-electromagnetica": {
  Svg: EcuacionDeOndaElectromagneticaGraphsSvgContract,
},
"fisica-clasica/electromagnetismo/.../ecuacion-de-onda-electromagnetica": {
  Svg: EcuacionDeOndaElectromagneticaGraphsSvgContract,  // mismo componente → FAIL
},

// ✅ Válido: solo la entrada con el ID corto (que coincide con meta.yaml id)
"ecuacion-de-onda-electromagnetica": {
  Svg: EcuacionDeOndaElectromagneticaGraphsSvgContract,
},
```

**Regla**: Al registrar un nuevo leaf en `index.js`, usar **únicamente** el `id` declarado en `meta.yaml` del leaf (normalmente el slug corto). No añadir entradas adicionales con la ruta relativa completa para el mismo componente SVG o DCL (el límite es 1 para SVG y DCL, 2 para Coord).
