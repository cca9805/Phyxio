# Contrato de campos para gráficos Phyxio

## 1. Campos para `Coord`

**Número total: 23 campos**

Un gráfico `Coord` representa una relación entre magnitudes físicas mediante ejes. Sirve para leer tendencia, pendiente, cortes, signo, curvatura, dominio y conexión con fórmulas.

```js
Coord: {
  id,
  graphId,
  title,

  xAxis,
  yAxis,
  xMagnitude,
  yMagnitude,

  relation,
  physicalReading,

  slopeMeaning,
  interceptMeaning,
  curvatureMeaning,
  signMeaning,
  areaMeaning,
  domainMeaning,

  modelConnection,
  formulaConnection,
  readingFocus,

  agentHints,
  commonMistakes,
  recommendedTab,

  component,
}
```

| Nº | Campo                | Descripción                                                                                |
| -: | -------------------- | ------------------------------------------------------------------------------------------ |
|  1 | `id`                 | Identificador único interno de la gráfica.                                                 |
|  2 | `graphId`            | Identificador operativo de la gráfica usado por el sistema. Normalmente coincide con `id`. |
|  3 | `title`              | Título visible y semántico de la gráfica.                                                  |
|  4 | `xAxis`              | Nombre completo del eje horizontal, incluyendo magnitud y unidad si procede.               |
|  5 | `yAxis`              | Nombre completo del eje vertical, incluyendo magnitud y unidad si procede.                 |
|  6 | `xMagnitude`         | Símbolo o identificador breve de la magnitud del eje horizontal.                           |
|  7 | `yMagnitude`         | Símbolo o identificador breve de la magnitud del eje vertical.                             |
|  8 | `relation`           | Relación física principal representada por la gráfica.                                     |
|  9 | `physicalReading`    | Lectura física conceptual de la gráfica antes de usar fórmulas.                            |
| 10 | `slopeMeaning`       | Significado físico de la pendiente cuando tenga interpretación útil.                       |
| 11 | `interceptMeaning`   | Significado de los cortes con los ejes, si existen o si no son físicamente válidos.        |
| 12 | `curvatureMeaning`   | Significado de la curvatura: lineal, cuadrática, inversa, exponencial, hiperbólica, etc.   |
| 13 | `signMeaning`        | Significado del signo de la magnitud, pendiente o relación representada.                   |
| 14 | `areaMeaning`        | Significado del área bajo la curva cuando tenga interpretación física.                     |
| 15 | `domainMeaning`      | Dominio físico de validez de la gráfica: valores permitidos, límites y restricciones.      |
| 16 | `modelConnection`    | Modelo físico bajo el cual debe interpretarse la gráfica.                                  |
| 17 | `formulaConnection`  | Fórmulas del leaf con las que conecta la lectura gráfica.                                  |
| 18 | `readingFocus`       | Qué debe mirar primero el alumno o Phyxi al leer la gráfica.                               |
| 19 | `agentHints`         | Pistas para orientar la respuesta de Phyxi.                                                |
| 20 | `commonMistakes`     | Errores típicos al interpretar esta gráfica.                                               |
| 21 | `recommendedTab`     | Tab recomendado para continuar, normalmente `"graficas"`.                                  |
| 22 | `component`          | Componente React que renderiza la gráfica.                                                 |
| 23 | `type` / `graphType` | Tipo normalizado de gráfica. Puede añadirse explícitamente o inferirse como `"Coord"`.     |

Ejemplo:

```js
Coord: {
  id: "isotermico-Coord",
  graphId: "isotermico-Coord",
  title: "Gráfica Coord · Isotérmico",

  xAxis: "volumen V (m³)",
  yAxis: "presión p (Pa)",
  xMagnitude: "V",
  yMagnitude: "p",

  relation:
    "A temperatura constante, presión y volumen son inversamente proporcionales: la hipérbola pV = cte muestra cómo sube la presión al comprimir el gas.",

  physicalReading:
    "La gráfica muestra que al comprimir el gas disminuye el volumen y aumenta la presión, manteniendo constante la temperatura.",

  slopeMeaning:
    "La pendiente es negativa y no constante: la presión cambia más bruscamente cuando el volumen es pequeño.",

  interceptMeaning:
    "La curva no corta físicamente los ejes dentro del modelo ideal, porque presión o volumen cero quedan fuera del dominio del modelo.",

  curvatureMeaning:
    "La curvatura hiperbólica indica proporcionalidad inversa entre presión y volumen.",

  signMeaning:
    "El signo negativo de la pendiente expresa que al aumentar el volumen disminuye la presión.",

  areaMeaning:
    "En un diagrama p-V, el área bajo la curva representa el trabajo asociado al proceso.",

  domainMeaning:
    "La lectura solo es válida para volumen positivo, presión positiva y temperatura constante.",

  modelConnection:
    "Se interpreta bajo el modelo de gas ideal en proceso isotérmico cuasiestático.",

  formulaConnection:
    "Conecta con pV = constante y con p₁V₁ = p₂V₂.",

  readingFocus:
    "leer la hipérbola, el área bajo la curva como trabajo, y el cociente p₁V₁ = p₂V₂ antes de aplicar fórmulas.",

  agentHints: [
    "Destacar que la relación no es lineal.",
    "Recordar que el área bajo la curva representa trabajo en un diagrama p-V.",
    "No aplicar proporcionalidad directa entre presión y volumen.",
  ],

  commonMistakes: [
    "Pensar que presión y volumen son directamente proporcionales.",
    "Leer la hipérbola como una recta decreciente.",
    "Olvidar que la temperatura se mantiene constante.",
  ],

  recommendedTab: "graficas",

  type: "Coord",
  graphType: "Coord",

  component: IsotermicoGraphsCoord,
}
```

---

# 2. Campos para `Dcl`

**Número total: 25 campos**

Un gráfico `Dcl` representa un diagrama de cuerpo libre. Sirve para identificar el cuerpo seleccionado, fuerzas reales, componentes, resultante, ejes y equilibrio.

```js
Dcl: {
  id,
  graphId,
  title,

  sceneId,
  sceneLabel,

  selectedObject,
  selectedObjectId,

  forces,
  visibleForces,
  hiddenForces,
  components,
  resultant,

  axisConvention,
  positiveDirection,
  forceBalanceReading,
  equilibriumHints,

  relation,
  physicalReading,
  modelConnection,
  formulaConnection,
  readingFocus,

  agentHints,
  commonMistakes,
  recommendedTab,

  component,
}
```

| Nº | Campo                 | Descripción                                                                |
| -: | --------------------- | -------------------------------------------------------------------------- |
|  1 | `id`                  | Identificador único interno de la gráfica.                                 |
|  2 | `graphId`             | Identificador operativo de la gráfica usado por el sistema.                |
|  3 | `title`               | Título visible y semántico del DCL.                                        |
|  4 | `sceneId`             | Identificador de la escena física representada.                            |
|  5 | `sceneLabel`          | Nombre legible de la escena física.                                        |
|  6 | `selectedObject`      | Cuerpo sobre el que se construye el DCL.                                   |
|  7 | `selectedObjectId`    | Identificador interno del cuerpo seleccionado.                             |
|  8 | `forces`              | Lista de fuerzas consideradas en el DCL.                                   |
|  9 | `visibleForces`       | Fuerzas visibles en la representación.                                     |
| 10 | `hiddenForces`        | Fuerzas relevantes que no se dibujan o que deben advertirse como ausentes. |
| 11 | `components`          | Componentes vectoriales representadas o relevantes.                        |
| 12 | `resultant`           | Resultante o fuerza neta asociada al sistema.                              |
| 13 | `axisConvention`      | Convención de ejes usada para descomponer fuerzas.                         |
| 14 | `positiveDirection`   | Sentido positivo elegido para los ejes o para el movimiento.               |
| 15 | `forceBalanceReading` | Lectura de equilibrio o dinámica por ejes.                                 |
| 16 | `equilibriumHints`    | Pistas sobre equilibrio, aceleración nula o suma de fuerzas.               |
| 17 | `relation`            | Relación física que organiza el DCL.                                       |
| 18 | `physicalReading`     | Lectura física del DCL: qué fuerzas actúan sobre qué cuerpo.               |
| 19 | `modelConnection`     | Modelo físico bajo el cual debe interpretarse el DCL.                      |
| 20 | `formulaConnection`   | Fórmulas o leyes conectadas con el DCL.                                    |
| 21 | `readingFocus`        | Qué debe mirar primero el alumno o Phyxi.                                  |
| 22 | `agentHints`          | Pistas para orientar la respuesta de Phyxi.                                |
| 23 | `commonMistakes`      | Errores típicos al interpretar el DCL.                                     |
| 24 | `recommendedTab`      | Tab recomendado para continuar, normalmente `"graficas"`.                  |
| 25 | `component`           | Componente React que renderiza el DCL.                                     |

Ejemplo:

```js
Dcl: {
  id: "plano-inclinado-Dcl",
  graphId: "plano-inclinado-Dcl",
  title: "DCL · Plano inclinado",

  sceneId: "block_on_incline",
  sceneLabel: "Bloque sobre plano inclinado",

  selectedObject: "bloque",
  selectedObjectId: "block",

  forces: ["peso", "normal", "rozamiento"],
  visibleForces: ["peso", "normal", "rozamiento"],
  hiddenForces: [],
  components: ["peso paralelo", "peso perpendicular"],
  resultant: "fuerza neta",

  axisConvention:
    "Eje x paralelo al plano y eje y perpendicular al plano.",

  positiveDirection:
    "El sentido positivo del eje x se elige según el planteamiento del problema.",

  forceBalanceReading:
    "La dinámica se lee separando la ecuación paralela al plano y la ecuación perpendicular al plano.",

  equilibriumHints: [
    "En el eje perpendicular al plano suele no haber aceleración.",
    "En el eje paralelo se decide si hay equilibrio o aceleración.",
  ],

  relation:
    "El DCL organiza las fuerzas que actúan sobre el bloque para aplicar la segunda ley de Newton por ejes.",

  physicalReading:
    "El diagrama muestra únicamente las fuerzas que actúan sobre el bloque seleccionado, no las fuerzas que el bloque ejerce sobre otros cuerpos.",

  modelConnection:
    "Se interpreta dentro del modelo de partícula o sólido rígido sobre plano inclinado.",

  formulaConnection:
    "Conecta con la segunda ley de Newton por ejes y con la descomposición del peso.",

  readingFocus:
    "identificar cuerpo seleccionado, fuerzas reales, componentes del peso, sentidos y resultante antes de escribir ecuaciones.",

  agentHints: [
    "Identificar primero el cuerpo seleccionado.",
    "Distinguir fuerzas reales de componentes.",
    "No tratar la fuerza neta como una fuerza adicional.",
  ],

  commonMistakes: [
    "Dibujar fuerzas que actúan sobre otro cuerpo.",
    "Confundir componentes del peso con fuerzas nuevas.",
    "Olvidar que la normal es perpendicular al plano.",
  ],

  recommendedTab: "graficas",

  component: PlanoInclinadoGraphsDcl,
}
```

---

# 3. Campos para `Svg`

**Número total: 22 campos**

Un gráfico `Svg` representa una escena, esquema visual, geometría o modelo conceptual. Sirve para leer objetos, relaciones, interacciones, geometría y claves visuales.

```js
Svg: {
  id,
  graphId,
  title,

  sceneId,
  sceneLabel,

  objects,
  mainObject,
  referenceFrame,

  geometry,
  interactions,
  modelElements,
  visualCues,
  scaleMeaning,

  relation,
  physicalReading,
  modelConnection,
  formulaConnection,
  readingFocus,

  agentHints,
  commonMistakes,
  recommendedTab,

  component,
}
```

| Nº | Campo               | Descripción                                                         |
| -: | ------------------- | ------------------------------------------------------------------- |
|  1 | `id`                | Identificador único interno de la gráfica.                          |
|  2 | `graphId`           | Identificador operativo de la gráfica usado por el sistema.         |
|  3 | `title`             | Título visible y semántico del SVG.                                 |
|  4 | `sceneId`           | Identificador de la escena o esquema visual.                        |
|  5 | `sceneLabel`        | Nombre legible de la escena.                                        |
|  6 | `objects`           | Lista de objetos visibles o relevantes en la escena.                |
|  7 | `mainObject`        | Objeto principal de lectura.                                        |
|  8 | `referenceFrame`    | Sistema de referencia o marco desde el que se interpreta la escena. |
|  9 | `geometry`          | Descripción de la geometría representada.                           |
| 10 | `interactions`      | Interacciones físicas o relaciones entre objetos.                   |
| 11 | `modelElements`     | Elementos del modelo físico visibles o deducibles.                  |
| 12 | `visualCues`        | Pistas visuales relevantes para interpretar la escena.              |
| 13 | `scaleMeaning`      | Significado de la escala: cualitativa, aproximada o cuantitativa.   |
| 14 | `relation`          | Relación física, geométrica o conceptual que representa el SVG.     |
| 15 | `physicalReading`   | Lectura física principal de la escena.                              |
| 16 | `modelConnection`   | Modelo físico bajo el cual debe interpretarse el SVG.               |
| 17 | `formulaConnection` | Fórmulas o leyes conectadas con la escena.                          |
| 18 | `readingFocus`      | Qué debe mirar primero el alumno o Phyxi.                           |
| 19 | `agentHints`        | Pistas para orientar la respuesta de Phyxi.                         |
| 20 | `commonMistakes`    | Errores típicos al interpretar la escena.                           |
| 21 | `recommendedTab`    | Tab recomendado para continuar, normalmente `"graficas"`.           |
| 22 | `component`         | Componente React que renderiza el SVG.                              |

Ejemplo:

```js
Svg: {
  id: "tiro-parabolico-Svg",
  graphId: "tiro-parabolico-Svg",
  title: "Escena SVG · Tiro parabólico",

  sceneId: "projectile_motion",
  sceneLabel: "Proyectil con trayectoria parabólica",

  objects: ["proyectil", "suelo", "trayectoria", "velocidad inicial"],
  mainObject: "proyectil",
  referenceFrame: "suelo",

  geometry:
    "La escena muestra una trayectoria parabólica con separación entre componente horizontal y componente vertical.",

  interactions:
    "Durante el vuelo ideal solo actúa la gravedad; se desprecia el rozamiento del aire.",

  modelElements: [
    "velocidad inicial",
    "componentes de velocidad",
    "altura máxima",
    "alcance",
    "aceleración gravitatoria",
  ],

  visualCues: [
    "La componente horizontal se mantiene constante.",
    "La componente vertical cambia por la gravedad.",
    "La aceleración apunta verticalmente hacia abajo.",
  ],

  scaleMeaning:
    "La escena es cualitativa: ayuda a leer relaciones, no distancias exactas salvo que el gráfico lo indique.",

  relation:
    "La escena conecta la geometría del movimiento con la descomposición vectorial de la velocidad inicial.",

  physicalReading:
    "La lectura física consiste en separar el movimiento horizontal uniforme del movimiento vertical acelerado.",

  modelConnection:
    "Se interpreta bajo el modelo de tiro parabólico sin rozamiento y con gravedad constante.",

  formulaConnection:
    "Conecta con las ecuaciones paramétricas del movimiento en x e y.",

  readingFocus:
    "identificar trayectoria, componentes de velocidad, altura máxima, alcance y sentido de la aceleración.",

  agentHints: [
    "Leer primero la escena y los objetos representados.",
    "Separar componente horizontal y vertical.",
    "No buscar pendiente si no hay una gráfica con ejes.",
  ],

  commonMistakes: [
    "Pensar que la velocidad horizontal cambia sin rozamiento.",
    "Confundir trayectoria con fuerza.",
    "Tomar la escena como una escala exacta.",
  ],

  recommendedTab: "graficas",

  component: TiroParabolicoGraphsSvg,
}
```

---

# Resumen de conteo

| Tipo    | Nº de campos | Uso                                               |
| ------- | -----------: | ------------------------------------------------- |
| `Coord` |           23 | Gráficas con ejes y relación entre magnitudes.    |
| `Dcl`   |           25 | Diagramas de cuerpo libre y lectura de fuerzas.   |
| `Svg`   |           22 | Escenas, esquemas geométricos o modelos visuales. |
