# Plantilla Graph Coord v1

## Objetivo

Esta plantilla define la ficha minima para cualquier grafico Coord. Un grafico
Coord no es solo una curva: es una lectura cuantitativa conectada con la
calculadora, la interpretacion y el modo experimento.

## 1. Identidad

- leaf_id
- graph_type: Coord
- graph_id
- proposito didactico
- nivel educativo ES/EN

## 1B. Contrato obligatorio de `graficos.yaml`

Todo leaf que declare `Coord` debe incluir en `graficos.yaml` un bloque `coord`
enriquecido. No se admite el formato legacy reducido con solo `title`, `xAxis`,
`yAxis` y `agentHints`.

Campos obligatorios:

```yaml
coord:
  id: "<leaf-id>-Coord"
  graphId: "<leaf-id>-Coord"
  type: "Coord"
  graphType: "Coord"
  title:
    es: ""
    en: ""
  xAxis:
    es: ""
    en: ""
  yAxis:
    es: ""
    en: ""
  xMagnitude: ""
  yMagnitude: ""
  relation:
    es: ""
    en: ""
  physicalReading:
    es: ""
    en: ""
  slopeMeaning:
    es: ""
    en: ""
  interceptMeaning:
    es: ""
    en: ""
  curvatureMeaning:
    es: ""
    en: ""
  signMeaning:
    es: ""
    en: ""
  areaMeaning:
    es: ""
    en: ""
  domainMeaning:
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
  curveProfile:
    type: ""
    expectedShape:
      es: ""
      en: ""
    keyPoints: []
  dataRange:
    xMin: 0
    xMax: 0
    yMin: 0
    yMax: 0
    autoScale: true
  recommendedTab: "graficas"
```

Reglas:

- `agentHints` debe tener al menos 3 pistas por idioma.
- `commonMistakes` debe tener al menos 3 errores por idioma.
- `formulaConnection` debe ser string LaTeX, no JSX ni `<MathInline />`.
- Si pendiente, area, signo o corte no aplican, el campo correspondiente debe decirlo expresamente.
- `xMagnitude` e `yMagnitude` deben existir en `magnitudes.yaml`.

## 2. Contrato con calculadora

Debe dejar claro:

- entradas esperadas
- alias aceptados
- magnitudes derivadas por compute
- target interpretable
- politica de uso de sharedParams.__calc

Plantilla:

```yaml
calculator_contract:
  expected_inputs: []
  accepted_aliases: {}
  derived_magnitudes: []
  target_candidates: []
  calc_sync:
    source: sharedParams.__calc
    consumes: [target, result, known, formulaTitle]
    mode_policy: follow-calc-until-user-edit
```

## 3. Contrato con interpretacion

Debe especificar:

- como se genera interpretationTarget
- como se genera interpretationValue
- que graphState emite
- que magnitudes son seleccionables

Plantilla:

```yaml
interpretation_contract:
  interpretation_binding:
    paramsIn: []
    stateOut: []
    target: null
  selectable_magnitudes: []
  emitted_semantic_context: [target, value, paramsIn, stateOut]
  supports_focus_target: true
```

## 4. Modo experimento

Debe declarar:

- defaultParams
- controls con rangos reales
- presets si existen
- politica de desbloqueo respecto a calculadora
- estrategia de reset

## 5. Modelo fisico

Debe declarar:

- ecuaciones usadas por compute
- hipotesis del modelo
- dominio de validez
- simplificaciones del muestreo o de la curva

## 6. Animacion

Por defecto, un Coord puede no tener tiempo interno. Si lo tiene, debe quedar
explicado si representa tiempo fisico real o una exploracion pedagogica.

## 7. Salidas visuales

Debe declarar:

- ejes y unidades obligatorias
- curvas, puntos o envolventes visibles
- magnitudes legibles en la card lateral
- capas opcionales por nivel

## 8. Checklist de coherencia

- las variables del eje existen en magnitudes.yaml
- la curva se corresponde con formulas.yaml
- el target interpretado existe de verdad
- el grafico sirve tanto con calculadora como en experimento
- la lectura del grafico pertenece al leaf y no a otro parecido

## Regla dura

Si el grafico Coord no puede explicar que magnitud esta interpretando y por
que esa magnitud es la dominante del leaf, no esta cerrado.

---

## REGLAS DE RECHAZO DURO — Validador modular

El validador falla con FAIL si alguna de estas condiciones no se cumple:

### 1. Registro en index.js (OBLIGATORIO — FORMATO EXPANDIDO)

El componente Coord del leaf **debe estar registrado** en el `export const graphs = {...}` del `index.js` del namespace de gráficos que usa el validador. El namespace se deriva de `route_graph_namespace(ruta_relativa)`:

- Si la ruta contiene `mecanica`, el namespace es el subnodo siguiente (ej: `cinematica`, `dinamica`).
- Para cualquier otra ruta (incluyendo `termodinamica`, `electromagnetismo`, etc.), el namespace es el subnodo de gráficos correspondiente.

El registro **debe usar el formato expandido obligatorio** con los campos `id`, `graphId`, `title`, `xAxis`, `yAxis`, `relation`, `readingFocus` y `component`. El formato abreviado legacy `{ Coord: ComponentName }` está **prohibido** y el validador lo rechaza:

```js
import CondensadoresGraphsCoord from "./Coord/CondensadoresGraphsCoord.jsx";

export const graphs = {
  "condensadores": {
    Coord: {
      id: "condensadores-Coord",
      graphId: "condensadores-Coord",
      title: "Gráfica Coord · Condensadores",
      xAxis: "tensión V (V)",
      yAxis: "carga Q (C)",
      relation: "La carga almacenada crece linealmente con la tensión: Q = C·V.",
      readingFocus: "leer la pendiente como capacidad C, el área bajo la curva como energía, y el punto de trabajo antes de usar fórmulas.",
      component: CondensadoresGraphsCoord,
    },
  },
  // ... resto de entradas
};
```

Campos obligatorios del objeto expandido:

- `id` — identificador único: `"<leaf_id>-<graph_type>"`
- `graphId` — igual que `id`
- `title` — título legible: `"Gráfica <Type> · <Nombre del leaf>"`
- `xAxis` — descripción del eje X con unidades (magnitud física real del leaf)
- `yAxis` — descripción del eje Y con unidades (magnitud física real del leaf)
- `relation` — descripción en una frase de la relación física que muestra el gráfico
- `readingFocus` — instrucción de lectura didáctica: qué debe leer el alumno antes de usar fórmulas
- `component` — referencia al componente importado

Sin este registro con todos los campos, el validador genera:
- `FAIL: graficos[Coord] declarado en meta pero no registrado en index.js`
- `FAIL: graph_index_format: graficos[Coord] usa formato abreviado legacy`
- `FAIL: graph_index_format: graficos[Coord] faltan campos obligatorios`

### 2. Estructura bilingüe mínima (OBLIGATORIO)

El archivo `.jsx` del componente Coord debe contener:

- `const uiLang = ...` — detección del idioma UI
- `const tt = (es, en) => ...` o `const t = (es, en) => ...` — helper de traducción

Sin estas dos líneas, el validador genera: `FAIL: graficos[Coord] '...' estructura bilingüe mínima`.

### 3. Ejes declarados (XAxis/YAxis) (OBLIGATORIO)

El archivo `.jsx` debe contener al menos uno de estos tokens: `XAxis`, `YAxis`, o `createCoordGraphPage`.
Pueden estar en comentarios de extractor hints si el componente es un wrapper ligero:

```jsx
// Extractor hints: XAxis, YAxis, createCoordGraphPage
// axes: XAxis = tensión V (V) | YAxis = carga Q (C)
```

Sin esto, el validador genera: `FAIL: graph_type_rules: Coord '...' declara ejes y fórmula` con `has_axes: False`.

### 4. Coherencia con pregunta_fisica_central (OBLIGATORIO)

El `graphContract.graph_identity.pregunta_principal` debe compartir al menos 2 tokens clave con la `pregunta_fisica_central` del `meta.yaml`. Si la pregunta del contrato no guarda relación con la pregunta del leaf, el validador genera: `FAIL: graph_pfc_coherence: gráfico responde a pregunta_fisica_central`.

Regla práctica: copiar o parafrasar directamente la `pregunta_fisica_central` del `meta.yaml` en `pregunta_principal` del `graphContract`.
