> **Funcion**: contrato semantico y metadatos de visualizacion de graficos del leaf.
> **Relaciones**: se sincroniza con `meta.yaml` (`graficos`), `magnitudes.yaml`, `formulas.yaml` e `interpretacion.yaml`.

---

<!-- EXTRACT-STRUCTURE-YAML -->
```yaml
###ESTRUCTURA OBLIGATORIA GRAFICOS###
version: ""
leaf: ""

coord:
  id: ""
  graphId: ""
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

dcl:
  id: ""
  graphId: ""
  type: "Dcl"
  graphType: "Dcl"
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
  forceVectors:
    - id: ""
      label: ""
      targetObject: ""
      direction: ""
      magnitudeRef: ""
      signConvention: ""
      formulaRefs: []
  equilibriumState:
    isInEquilibrium: false
    conditionDescription:
      es: ""
      en: ""
  recommendedTab: "graficas"

svg:
  id: ""
  graphId: ""
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

# 10. graficos.yaml

Este archivo es obligatorio cuando `meta.yaml` declara cualquier grafico. No contiene implementacion visual; contiene el contrato semantico que permite validar, renderizar, buscar e interpretar los graficos.

Regla central: cada seccion declarada en `meta.yaml.graficos` debe existir en `graficos.yaml` con su contrato completo. Ninguna seccion puede quedar vacia, reducida o decorativa.

## 10.1 Raiz

```yaml
version: "1.0"
leaf: "<leaf-id>"
```

Reglas:

- `version` debe ser exactamente `"1.0"`.
- `leaf` debe coincidir exactamente con `id` en `meta.yaml`.
- Solo deben existir las secciones de grafico declaradas en `meta.yaml.graficos`.

## 10.2 Contrato Coord

`coord` representa relaciones cuantitativas: curvas, ejes numericos, pendientes, areas, cortes, signos, dominios y puntos activos.

Campos obligatorios:

| Campo | Regla |
|---|---|
| `id` | `<leaf-id>-Coord` |
| `graphId` | Igual que `id` |
| `type` / `graphType` | Exactamente `Coord` |
| `title.es/en` | Titulo bilingue publicable |
| `xAxis.es/en` | Eje X con magnitud y unidad |
| `yAxis.es/en` | Eje Y con magnitud y unidad |
| `xMagnitude` | ID existente en `magnitudes.yaml` |
| `yMagnitude` | ID existente en `magnitudes.yaml` |
| `relation.es/en` | Relacion fisica en lenguaje natural |
| `physicalReading.es/en` | Como leer fisicamente la grafica |
| `slopeMeaning.es/en` | Significado de la pendiente; si no aplica, debe decirlo |
| `interceptMeaning.es/en` | Significado del corte/origen; si no aplica, debe decirlo |
| `curvatureMeaning.es/en` | Significado de la forma o curvatura |
| `signMeaning.es/en` | Significado del signo, sentido o cuadrante |
| `areaMeaning.es/en` | Significado del area; si no aplica, debe decirlo |
| `domainMeaning.es/en` | Dominio de validez fisico |
| `modelConnection.es/en` | Modelo fisico de interpretacion |
| `formulaConnection.es/en` | Formula vinculada a `formulas.yaml`, como string LaTeX |
| `readingFocus.es/en` | Que debe observar primero el alumno |
| `agentHints.es/en` | Minimo 3 pistas por idioma |
| `commonMistakes.es/en` | Minimo 3 errores por idioma |
| `curveProfile.type` | `linear`, `quadratic`, `inverse`, `exponential` o `custom` |
| `curveProfile.expectedShape.es/en` | Forma esperada bilingue |
| `curveProfile.keyPoints` | Puntos caracteristicos, minimo 2 si existen puntos relevantes |
| `dataRange` | `xMin`, `xMax`, `yMin`, `yMax`, `autoScale` |
| `recommendedTab` | `"graficas"` |

Ejemplo canonico:

```yaml
coord:
  id: "conduccion-Coord"
  graphId: "conduccion-Coord"
  type: "Coord"
  graphType: "Coord"
  title:
    es: "Grafica Coord · Conduccion termica"
    en: "Coord Graph · Thermal conduction"
  xAxis:
    es: "diferencia de temperatura DeltaT (K)"
    en: "temperature difference DeltaT (K)"
  yAxis:
    es: "tasa de transferencia de calor Qdot (W)"
    en: "heat transfer rate Qdot (W)"
  xMagnitude: "DeltaT"
  yMagnitude: "Qdot"
  relation:
    es: "Para un material homogeneo, area fija y espesor fijo, la tasa de transferencia de calor es proporcional a la diferencia de temperatura."
    en: "For a homogeneous material, fixed area and fixed thickness, the heat transfer rate is proportional to the temperature difference."
  physicalReading:
    es: "La grafica muestra cuanto calor por unidad de tiempo atraviesa el material al aumentar DeltaT."
    en: "The graph shows how much heat per unit time crosses the material as DeltaT increases."
  slopeMeaning:
    es: "La pendiente es kA/L; una pendiente mayor indica mayor conductividad, mayor area o menor espesor."
    en: "The slope is kA/L; a steeper slope indicates higher conductivity, larger area or smaller thickness."
  interceptMeaning:
    es: "Si DeltaT = 0, entonces Qdot = 0: sin diferencia de temperatura no hay conduccion neta."
    en: "If DeltaT = 0, then Qdot = 0: without temperature difference there is no net conduction."
  curvatureMeaning:
    es: "La relacion es lineal mientras k, A y L permanezcan constantes."
    en: "The relation is linear while k, A and L remain constant."
  signMeaning:
    es: "El signo de Qdot depende del convenio elegido para el sentido positivo del flujo."
    en: "The sign of Qdot depends on the chosen convention for positive heat-flow direction."
  areaMeaning:
    es: "El area bajo una grafica Qdot-DeltaT no tiene interpretacion energetica directa; la energia se obtiene integrando Qdot respecto al tiempo."
    en: "The area under a Qdot-DeltaT graph has no direct energy meaning; energy is obtained by integrating Qdot over time."
  domainMeaning:
    es: "Valido para conduccion estacionaria unidimensional, material homogeneo, area constante y sin generacion interna de calor."
    en: "Valid for one-dimensional steady conduction, homogeneous material, constant area and no internal heat generation."
  modelConnection:
    es: "Se interpreta bajo la ley de Fourier en regimen estacionario."
    en: "Interpreted under Fourier's law in steady state."
  formulaConnection:
    es: '\dot{Q} = \frac{k A \Delta T}{L}'
    en: '\dot{Q} = \frac{k A \Delta T}{L}'
  readingFocus:
    es: "Leer primero la pendiente como facilidad de conduccion termica y luego el punto activo como valor de Qdot para una DeltaT concreta."
    en: "First read the slope as ease of thermal conduction, then the active point as Qdot for a specific DeltaT."
  agentHints:
    es:
      - "No leer esta grafica como evolucion temporal: el eje horizontal es DeltaT, no tiempo."
      - "La pendiente resume kA/L."
      - "La conduccion neta se anula cuando ambos extremos estan a la misma temperatura."
    en:
      - "Do not read this graph as time evolution: the horizontal axis is DeltaT, not time."
      - "The slope summarizes kA/L."
      - "Net conduction vanishes when both ends are at the same temperature."
  commonMistakes:
    es:
      - "Confundir tasa de transferencia de calor con energia transferida."
      - "Pensar que el area bajo Qdot frente a DeltaT es calor transferido."
      - "Olvidar que aumentar L reduce la pendiente."
    en:
      - "Confusing heat transfer rate with transferred energy."
      - "Thinking that the area under Qdot versus DeltaT is transferred heat."
      - "Forgetting that increasing L reduces the slope."
  curveProfile:
    type: "linear"
    expectedShape:
      es: "recta creciente que pasa por el origen si el sentido positivo del flujo coincide con DeltaT positivo"
      en: "increasing straight line through the origin if positive heat-flow direction matches positive DeltaT"
    keyPoints:
      - x: 0
        y: 0
        label:
          es: "sin diferencia de temperatura no hay conduccion neta"
          en: "without temperature difference there is no net conduction"
      - x: 50
        label:
          es: "mayor DeltaT produce mayor tasa de calor"
          en: "larger DeltaT produces larger heat transfer rate"
  dataRange:
    xMin: 0
    xMax: 100
    yMin: 0
    yMax: 100
    autoScale: true
  recommendedTab: "graficas"
```

## 10.3 Contrato Svg

`svg` representa la escena fisica espacial del fenomeno. No puede ser una ilustracion generica: debe explicar que se ve, que magnitudes/modelo soporta y que lectura evita errores.

Campos obligatorios:

| Campo | Regla |
|---|---|
| `id` | `<leaf-id>-Svg` |
| `graphId` | Igual que `id` |
| `type` / `graphType` | Exactamente `Svg` |
| `title.es/en` | Titulo bilingue publicable |
| `sceneId` | ID estable y unico |
| `sceneLabel.es/en` | Descripcion corta de la escena |
| `objects.es/en` | Objetos visibles |
| `mainObject.es/en` | Sistema, cuerpo o fenomeno principal |
| `referenceFrame.es/en` | Marco de referencia |
| `geometry.es/en` | Geometria mostrada |
| `interactions.es/en` | Interacciones presentes |
| `modelElements.es/en` | Elementos del modelo fisico |
| `visualCues.es/en` | Minimo 3 claves visuales por idioma |
| `scaleMeaning.es/en` | Que significa la escala visual |
| `relation.es/en` | Relacion fisica ilustrada |
| `physicalReading.es/en` | Como leer la escena |
| `modelConnection.es/en` | Modelo fisico |
| `formulaConnection.es/en` | Formula vinculada a `formulas.yaml`, como string LaTeX o texto de formula |
| `readingFocus.es/en` | Que verificar primero |
| `agentHints.es/en` | Minimo 3 pistas por idioma |
| `commonMistakes.es/en` | Minimo 3 errores por idioma |
| `animationTriggers` | Obligatorio; usar `[]` si no hay animacion |
| `interactiveElements` | Obligatorio; usar `[]` si no hay interaccion directa |
| `recommendedTab` | `"graficas"` |

Ejemplo canonico:

```yaml
svg:
  id: "sistemas-aislados-Svg"
  graphId: "sistemas-aislados-Svg"
  type: "Svg"
  graphType: "Svg"
  title:
    es: "Escena SVG · Sistemas Aislados"
    en: "SVG Scene · Isolated Systems"
  sceneId: "sistemas_aislados_scene"
  sceneLabel:
    es: "Sistema de particulas sin fuerzas externas netas"
    en: "Particle system with no net external forces"
  objects:
    es:
      - "particula 1"
      - "particula 2"
      - "vectores de momento individuales"
      - "vector momento total del sistema"
    en:
      - "particle 1"
      - "particle 2"
      - "individual momentum vectors"
      - "total system momentum vector"
  mainObject:
    es: "sistema de dos o mas particulas"
    en: "system of two or more particles"
  referenceFrame:
    es: "laboratorio inercial"
    en: "inertial laboratory frame"
  geometry:
    es: "La escena muestra varias particulas con sus vectores de momento, cuya suma vectorial permanece constante al no haber fuerza externa neta."
    en: "The scene shows several particles with their momentum vectors, whose vector sum remains constant in the absence of net external force."
  interactions:
    es: "Las fuerzas internas entre particulas son iguales y opuestas por la tercera ley; no alteran el momento total del sistema."
    en: "Internal forces between particles are equal and opposite by Newton's third law; they do not alter the system's total momentum."
  modelElements:
    es:
      - "momento de cada particula"
      - "suma vectorial total p_total"
      - "ausencia de fuerzas externas"
    en:
      - "individual particle momenta"
      - "total vector sum p_total"
      - "absence of external forces"
  visualCues:
    es:
      - "Los vectores individuales pueden cambiar, pero su suma se mantiene constante."
      - "Las fuerzas internas se cancelan en la suma total."
      - "Si el sistema parte en reposo, la suma de momentos vale cero."
    en:
      - "Individual vectors may change, but their sum remains constant."
      - "Internal forces cancel in the total sum."
      - "If the system starts at rest, total momentum equals zero."
  scaleMeaning:
    es: "La escena es cualitativa: muestra relaciones vectoriales, no magnitudes exactas."
    en: "The scene is qualitative: it shows vector relationships, not exact magnitudes."
  relation:
    es: "La escena ilustra el principio de conservacion del momento: p_total = constante cuando la fuerza externa neta es nula."
    en: "The scene illustrates conservation of momentum: p_total is constant when net external force is zero."
  physicalReading:
    es: "Leer la constancia del vector momento total aunque cambien los momentos individuales."
    en: "Read the constancy of total momentum even when individual momenta change."
  modelConnection:
    es: "Se interpreta bajo el principio de conservacion del momento lineal para sistemas aislados."
    en: "Interpreted under conservation of linear momentum for isolated systems."
  formulaConnection:
    es: '\sum \vec{p}_i = constante'
    en: '\sum \vec{p}_i = constant'
  readingFocus:
    es: "Verificar que la suma vectorial de todos los momentos se conserva antes y despues de interacciones internas."
    en: "Verify that the vector sum of all momenta is conserved before and after internal interactions."
  agentHints:
    es:
      - "La conservacion del momento total aplica aunque cambien los momentos individuales."
      - "Las fuerzas internas no alteran el momento total del sistema."
      - "No hay sistema aislado si actuan fuerzas externas significativas."
    en:
      - "Total momentum conservation applies even when individual momenta change."
      - "Internal forces do not alter total system momentum."
      - "The system is not isolated if significant external forces act."
  commonMistakes:
    es:
      - "Aplicar conservacion del momento cuando hay fuerzas externas significativas."
      - "Sumar escalares en lugar de vectores."
      - "Confundir sistema aislado con sistema en reposo."
    en:
      - "Applying momentum conservation when significant external forces act."
      - "Adding scalars instead of vectors."
      - "Confusing an isolated system with a system at rest."
  animationTriggers: []
  interactiveElements: []
  recommendedTab: "graficas"
```

## 10.4 Contrato Dcl

`dcl` representa causalidad por fuerzas. No puede contener flechas decorativas: cada vector debe estar ligado a una magnitud, una convencion de signos y una o mas formulas.

Campos obligatorios:

| Campo | Regla |
|---|---|
| `id` | `<leaf-id>-Dcl` |
| `graphId` | Igual que `id` |
| `type` / `graphType` | Exactamente `Dcl` |
| `title.es/en` | Titulo bilingue publicable |
| `sceneId` | ID estable y unico |
| `sceneLabel.es/en` | Descripcion corta |
| `objects.es/en` | Cuerpos, superficies, ejes o agentes |
| `mainObject.es/en` | Cuerpo o sistema sobre el que se dibujan fuerzas |
| `referenceFrame.es/en` | Sistema de referencia y ejes |
| `geometry.es/en` | Geometria fisica |
| `interactions.es/en` | Interacciones que originan fuerzas |
| `modelElements.es/en` | Elementos del modelo |
| `visualCues.es/en` | Minimo 3 claves visuales por idioma |
| `scaleMeaning.es/en` | Que significa la escala de flechas |
| `relation.es/en` | Relacion causal ilustrada |
| `physicalReading.es/en` | Como leer el DCL |
| `modelConnection.es/en` | Modelo fisico |
| `formulaConnection.es/en` | Formula vinculada a `formulas.yaml`, como string LaTeX o texto de formula |
| `readingFocus.es/en` | Que comprobar primero |
| `agentHints.es/en` | Minimo 3 pistas por idioma |
| `commonMistakes.es/en` | Minimo 3 errores por idioma |
| `forceVectors` | Minimo 1 fuerza real |
| `forceVectors[].magnitudeRef` | ID existente en `magnitudes.yaml` |
| `forceVectors[].formulaRefs` | IDs existentes en `formulas.yaml` |
| `forceVectors[].signConvention` | Convencion de signo explicita |
| `equilibriumState` | Estado y descripcion de equilibrio/no equilibrio |
| `recommendedTab` | `"graficas"` |

## 10.5 Reglas de rechazo duro

1. Si `meta.yaml` declara un tipo de grafico y falta su seccion -> FAIL.
2. Si `graficos.yaml` contiene una seccion no declarada en `meta.yaml` -> FAIL.
3. Si cualquier campo bilingue carece de `es` o `en` -> FAIL.
4. Si `sceneId`, `id` o `graphId` estan vacios o duplicados dentro del leaf -> FAIL.
5. Si `xMagnitude`, `yMagnitude`, `magnitudeRef` o elementos interactivos referencian magnitudes inexistentes -> FAIL.
6. Si `formulaConnection` contiene JSX, `<MathInline />` o componentes React -> FAIL.
7. Si un campo semantico no aplica y se deja vacio en lugar de explicarlo -> FAIL.
8. Si `coord` omite cualquiera de sus campos obligatorios -> FAIL.
9. Si `svg` omite cualquiera de sus campos obligatorios o solo ilustra objetos sin lectura fisica -> FAIL.
10. Si `dcl` omite campos obligatorios o contiene fuerzas sin `magnitudeRef`, `formulaRefs` y `signConvention` -> FAIL.

## 10.6 Checklist

- [ ] `version` es exactamente `"1.0"`.
- [ ] `leaf` coincide con `meta.yaml`.
- [ ] Solo existen las secciones declaradas en `meta.yaml`.
- [ ] Todas las secciones declaradas en `meta.yaml` existen.
- [ ] Todos los campos bilingues estan completos.
- [ ] Todas las magnitudes referenciadas existen en `magnitudes.yaml`.
- [ ] Todas las formulas referenciadas existen en `formulas.yaml`.
- [ ] `formulaConnection` es LaTeX/texto, nunca JSX.
- [ ] `Coord.agentHints`, `Svg.agentHints` y `Dcl.agentHints` tienen al menos 3 pistas por idioma.
- [ ] `Coord.commonMistakes`, `Svg.commonMistakes` y `Dcl.commonMistakes` tienen al menos 3 errores por idioma.
- [ ] `Svg.animationTriggers` e `Svg.interactiveElements` existen aunque sean `[]`.
- [ ] Cada `Dcl.forceVectors[]` tiene `magnitudeRef`, `formulaRefs` y `signConvention`.
- [ ] La estructura YAML es sintacticamente valida.
