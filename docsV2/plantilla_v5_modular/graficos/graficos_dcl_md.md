# 23C. Estándar DCL de alto nivel — estructura y ejemplo de referencia

Un DCL de Nivel 5 no es un diagrama decorativo. Es una herramienta didáctica
que debe responder a una pregunta física concreta, ser coherente con la escena
física real del leaf y estar preparado para recibir el resultado de la calculadora.

## 23C.1 Estructura mínima obligatoria de un profile DCL

Un profile DCL de alto nivel debe declarar exactamente estos bloques:

```
scene          — escena física (determina geometría y fuerzas admisibles)
question       — qué pregunta responde el DCL
meta           — id, title (es/en), smartHeader (es/en), leafId, question (es/en)
environment    — inclineAngleDeg, showGrid, gravityDirection
params         — parámetros dinámicos si el DCL los consume
bodies         — al menos 1 cuerpo con id, kind, label (es/en), role, anchor,
                 labelYOffset (si el label colisiona con vectores), style
vectors        — fuerzas reales + vectores de contexto cinemático
labels         — anotaciones textuales de contexto en el SVG
options        — flags de comportamiento (showSurface, showAxes, showBodyNames,
                 followCalculator, experimentMode, showCompactLegend, etc.)
theory_link    — enlace al concepto teórico del leaf
interpretation — textos interpretativos para panel lateral y lectura gráfica
```

## 23C.2 Reglas de escena y coherencia física

La elección de `scene` es una decisión física, no técnica.
Cada escena habilita un conjunto específico de fuerzas admisibles:

| scene | Cuándo usarla | Fuerzas físicamente coherentes |
|---|---|---|
| `PARTICLE_FREE` | masa suspendida, sin contacto con superficie | Peso, Tensión, F_aplicada, F_ficticia |
| `BLOCK_ON_TABLE` | bloque sobre superficie horizontal | Peso, Normal, Rozamiento, F_aplicada, F_ficticia |
| `BLOCK_ON_INCLINE` | bloque en plano inclinado | Peso, Normal (⊥ plano), Rozamiento |
| `HANGING_MASS` | masa colgante de cuerda | Peso, Tensión |
| `TWO_MASSES_ROPE` | dos masas horizontales (colisiones, tensión) | Peso, Normal, Impulso, F_aplicada, Velocidad |
| `PULLEY_SIMPLE` | polea ideal con dos masas | Peso, Tensión |

> **CUSTOM no está en el Scene Registry.** Si el wrapper usa `createDclGraph`,
> la escena CUSTOM provoca crash (`Unsupported scene`). Solo es válida con
> renderers manuales que no consultan `DCL_SCENE_REGISTRY`.

Regla absoluta: la Normal solo aparece en escenas con superficie.
`PARTICLE_FREE` + Normal es físicamente incorrecto. No genera error de consola.

## 23C.3 Vectores de contexto cinemático

Cuando el leaf trata un fenómeno causal (una aceleración que produce una fuerza,
una velocidad que implica un cambio), ese vector causal debe aparecer en el DCL
como **vector de contexto**, diferenciado visualmente de las fuerzas reales.

Reglas para vectores de contexto:

- `type: ACCELERATION` o `type: VELOCITY` (se renderizan automáticamente punteados)
- `derived: true` — marca visual que lo diferencia de fuerzas reales
- `highlight: MUTED` — tono atenuado visual
- `semanticRole: "system_response"` — rol semántico correcto
- la etiqueta debe aclarar que es contexto: `"Aceleración del marco (contexto)"`
- visible por defecto para no ocultar la relación causal al alumno

Sin el vector de contexto, el alumno no comprende el origen de la fuerza ficticia
(o del efecto físico equivalente en otros leafs).

## 23C.4 Simbología en SVG — subscripts corrrectos

Los símbolos con subscript LaTeX (`F_{ficticia}`, `a_{marco}`) se escriben
en el campo `symbol` del vector usando notación LaTeX de subscript:

```js
symbol: "F_{ficticia}"   // correcto → renderiza F con subíndice
symbol: "F_ficticia"     // incorrecto → puede renderizar literalmente
```

El motor `renderSvgSymbol` del DclRenderer convierte `_{...}` en `<tspan>`
automáticamente. No usar notación plana ni notación LaTeX de bloque `\(...\)`.

## 23C.5 Bloque `interpretation` del profile

Todo DCL de Nivel 5 incluye un bloque `interpretation` con estos campos:

```
header_bridge   — fórmula o relación clave que justifica el DCL (es/en)
reading_focus   — qué debe observar el alumno en el diagrama (es/en)
graph_role      — objetivo pedagógico del gráfico (es/en)
calc_reading    — cómo leer el resultado de la calculadora con este DCL (es/en)
graph_reading   — qué error visual detecta el DCL (es/en)
physical_insight — comprensión profunda que aporta (es/en)
likely_errors   — lista de errores típicos del alumno (es/en, array)
```

Ninguno de estos campos puede ser genérico ni duplicar `teoria.md`.
Cada campo interpreta el resultado concreto o la lectura visual real del leaf.

## 23C.6 Ejemplo de referencia — sistemas-no-inerciales-intro

Este profile es la referencia canónica de un DCL de alto nivel en Phyxio:

```js
// Escena correcta: bloque sobre superficie → Normal físicamente justificada
scene: DCL_SCENE_IDS.BLOCK_ON_TABLE,

// Pregunta física concreta
question: DCL_QUESTION_TYPES.IDENTIFY_FORCES,

// Cuerpo con kind coherente con la escena
bodies: [{
    id: "body_particle",
    kind: DCL_BODY_KIND_IDS.BLOCK,    // MASS no es válido para BLOCK_ON_TABLE
    label: { es: "Masa m", en: "Mass m" },
    labelYOffset: 70,                  // evita colisión con el vector N
    style: { highlight: DCL_HIGHLIGHT_MODES.PRIMARY, opacity: 1 },
}],

vectors: [
    // Fuerzas reales (highlight PRIMARY o SECONDARY)
    { id: "weight_particle", type: WEIGHT,  symbol: "P",           highlight: PRIMARY  },
    { id: "normal_particle", type: NORMAL,  symbol: "N",           highlight: SECONDARY },
    // Fuerza ficticia (highlight MUTED — visualmente diferenciada)
    { id: "fictitious_force", type: CUSTOM, symbol: "F_{ficticia}", highlight: MUTED,
      directionMode: "left", semanticRole: "fictitious_cause" },
    // Vector de contexto (tipo ACCELERATION → punteado automático, derived:true)
    { id: "frame_accel", type: ACCELERATION, symbol: "a_{marco}",
      anchor: TOP, directionMode: "right",
      derived: true, highlight: MUTED,
      label: { es: "Aceleración del marco (contexto)" } },
],

// Labels contextuales en el SVG
labels: [{
    id: "note_marco",
    text: { es: "Marco acelerado → a_marco", en: "Accelerated frame → a_frame" },
}],

options: {
    showSurface: true,
    showAxes: true,
    showBodyNames: true,
    followCalculator: true,
    experimentMode: true,
    showCompactLegend: true,
    showTypicalErrors: true,
    showTheoryLink: true,
},
```

---------------------------------------------------------------------