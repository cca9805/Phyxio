# PLANTILLA PHYXIO — GRÁFICOS STANDARD v5 (Blindaje Operativo)

version_estandar_graficos: v5_blindado_operativo

---------------------------------------------------------------------

# 1. Objetivo del estándar

Esta plantilla define el estándar obligatorio para crear, integrar y
validar gráficos Phyxio de tipo Coord, SVG y DCL dentro de un leaf.

No es una guía opcional ni una recomendación de estilo. Es un contrato
funcional de integración con frontend, cálculo e interpretación.

Todo gráfico creado bajo este estándar debe ser:

- físicamente coherente con el leaf
- semánticamente conectable con `magnitudes.yaml`, `formulas.yaml` e `interpretacion.yaml`
- compatible con calculadora y modo experimento
- visualmente consistente con los demás gráficos del proyecto
- bilingüe real ES/EN en toda la UI visible
- resistente a fallos de integración, props incompletas y estados parciales

Regla absoluta:

Si un gráfico no cumple esta plantilla, el leaf no puede considerarse
cerrado con gráficos a Nivel 5.

Regla de rechazo duro:

Si el gráfico puede eliminarse sin pérdida real en cálculo,
interpretación o lectura física, entonces ese gráfico es decorativo y no
cumple el estándar.

---------------------------------------------------------------------

# 2. Activación obligatoria dentro del leaf

Esta plantilla se activa automáticamente cuando el leaf declare gráficos
en `meta.yaml` o en `phyxio-map.yaml`.

Si el leaf declara uno o más gráficos:

- debe seguir esta plantilla completa
- debe existir implementación real en frontend
- debe existir integración cálculo → gráfico
- debe existir integración gráfico → interpretación cuando aplique

Reglas:

- No se admite declarar gráficos en el leaf y dejar placeholders.
- No se admite declarar un tipo de gráfico sin wrapper operativo.
- No se admite dejar un tipo de gráfico “para más adelante” con restos parciales.

Si el leaf no va a tener gráficos operativos, debe desactivarlos de forma
limpia en el mapa, en `meta.yaml` y en los YAML semánticos.

---------------------------------------------------------------------

# 3. Ubicación y artefactos obligatorios

Todo gráfico debe implementarse usando la infraestructura común del
frontend y dejar artefactos específicos del leaf.

## 3.1 Infraestructura común obligatoria

La creación de wrappers debe usar obligatoriamente:

- `frontend/src/v2/components/graphs/graphFactories.jsx`

Plantillas base disponibles:

- `frontend/src/v2/components/graphs/_templates/GraphsSvg.template.jsx`
- `frontend/src/v2/components/graphs/_templates/GraphsDcl.template.jsx`
- `frontend/src/v2/components/graphs/_templates/GraphsCoord.template.jsx`

Reglas:

- No crear wrappers nuevos copiando y pegando implementaciones antiguas si la fábrica común cubre el caso.
- No saltarse la fábrica común salvo que exista una restricción técnica real y documentada.
- Si se usa una excepción, debe mantenerse el mismo contrato de props y de interpretación.

## 3.2 Artefactos mínimos por tipo

### SVG

Debe existir:

- un wrapper propio del leaf
- un profile semánticamente propio del leaf

### DCL

Debe existir:

- un wrapper propio del leaf
- un profile DCL coherente con la escena física del leaf

### Coord

Debe existir:

- un wrapper propio del leaf
- un modelo o función de cálculo coherente con la magnitud o relación representada

Regla crítica:

Un mismo wrapper no puede servir a dos leafs distintos si eso elimina
identidad física o didáctica.

---------------------------------------------------------------------

# 4. Contrato común de creación de gráficos

Todo wrapper creado para Phyxio debe aceptar y propagar de forma
consistente el contrato común.

Props operativas obligatorias:

- `lang`
- `params`
- `sharedParams`
- `paramsIn`
- `interpretationDoc`
- `onGraphStateChange`
- `onInterpretationContextChange`
- `onSharedParamsChange` o equivalente de aplicación a calculadora
- `meta` o `leafRelPath` cuando el gráfico use contexto del leaf

Reglas:

- El wrapper no debe depender de una sola variante de props.
- Debe tolerar que lleguen `params`, `sharedParams` o `paramsIn`.
- Debe mantener estable la propagación de idioma y contexto.
- Debe fallar de forma contenida, no rompiendo toda la pestaña de gráficos.

Regla de implementación obligatoria:

Todo wrapper nuevo debe construirse usando una de estas funciones:

- `createSvgGraph(...)`
- `createDclGraph(...)`
- `createCoordGraph(...)`
- `createCoordGraphPage(...)`

No se admite un wrapper nuevo que ignore estas funciones si su caso está
cubierto por ellas.

---------------------------------------------------------------------

# 4B. Identidad física obligatoria del gráfico

Todo gráfico debe declarar su identidad física en el profile o en la
documentación del wrapper. La identidad no es un metadato decorativo:
define qué pregunta responde el gráfico y qué magnitud protagoniza la
lectura visual.

Estructura obligatoria (`graph_identity`):

```yaml
graph_identity:
  pregunta_principal:
    es: "¿...?"
    en: "...?"
  magnitud_estrella: "<id de magnitudes.yaml>"
  magnitud_secundaria: "<id de magnitudes.yaml>"
  variable_control: "<id de magnitudes.yaml>"
  tipo_lectura: cuantitativa | estructural | causal
```

Campos:

- `pregunta_principal` — la pregunta física concreta que el gráfico
  permite responder (bilingüe es/en). Debe ser una pregunta real, no un
  título reescrito.
- `magnitud_estrella` — la magnitud que el alumno debe leer/extraer del
  gráfico como resultado principal. Debe ser un `id` válido de
  `magnitudes.yaml`.
- `magnitud_secundaria` — magnitud de apoyo que aparece en el gráfico
  pero no es el foco principal.
- `variable_control` — magnitud que el alumno manipula o que actúa como
  eje independiente.
- `tipo_lectura` — naturaleza de la lectura que el gráfico exige:
  - `cuantitativa`: leer un valor numérico (pendiente, área, intersección).
  - `estructural`: identificar forma, simetría, régimen o transición.
  - `causal`: deducir causa-efecto (qué fuerza produce esa curva, etc.).

Reglas de validación:

- Si no existe `pregunta_principal` o está vacía → gráfico **inválido**.
- Si no hay `magnitud_estrella` → gráfico **inválido**.
- Si `tipo_lectura` no es exactamente uno de los tres valores permitidos
  → gráfico **débil** (no focaliza la atención del alumno).

---------------------------------------------------------------------

# 4C. Regla de no solapamiento entre gráficos

Cuando un leaf declara más de un tipo de gráfico, cada tipo debe cumplir
un rol exclusivo. No se admite redundancia visual ni funcional entre
tipos.

Rol asignado por tipo:

- **Coord** → evolución cuantitativa. Curvas, ejes numéricos, lectura
  de pendientes, áreas o intersecciones. Es el gráfico para "medir".
- **Svg** → representación física. Escena espacial del fenómeno (cuerpo
  en movimiento, resorte, plano inclinado…). Es el gráfico para "ver el
  fenómeno".
- **DCL** → causalidad / fuerzas. Diagrama de cuerpo libre que muestra
  las fuerzas que actúan y su relación causal con el movimiento. Es el
  gráfico para "explicar por qué".

Reglas de exclusividad:

- Coord **no puede** replicar la escena espacial de Svg (no dibujar el
  cuerpo ni la geometría del problema dentro de un Coord).
- Svg **no puede** replicar la curva cuantitativa de Coord (no trazar
  ejes con escalas numéricas ni curvas paramétricas dentro de un Svg).
- DCL **no puede** ser decorativo: debe mostrar fuerzas con magnitud y
  dirección vinculadas al cálculo, no flechas genéricas de adorno.

Regla de rechazo:

- Si dos tipos de gráfico muestran esencialmente la misma información
  con distinto envoltorio visual → **rechazo** (uno de los dos sobra).
- Si un DCL no está conectado con las magnitudes del cálculo →
  **rechazo** (es decorativo).

---------------------------------------------------------------------

# 4D. Regla anti-reutilización de wrappers

Los wrappers de gráficos deben ser específicos del leaf para garantizar
que la semántica, los ejes, las magnitudes y la interpretación estén
alineados con el contenido concreto.

Límites duros de reutilización:

- Un wrapper **Coord** no puede servir a más de **2 leafs**.
- Un wrapper **Svg** no puede servir a más de **1 leaf**.
- Un wrapper **DCL** no puede servir a más de **1 leaf**.

Excepción controlada:

Si un wrapper se reutiliza dentro de los límites permitidos, debe
declararse explícitamente en un comentario en el propio archivo del
wrapper con:

- **Justificación física**: por qué el mismo gráfico tiene sentido en
  ambos leafs (comparten las mismas magnitudes, la misma ecuación
  gobernante, etc.).
- **Diferencias semánticas**: qué cambia entre un leaf y otro (rango de
  parámetros, interpretación del resultado, contexto didáctico).

Si no existe este comentario, la reutilización se considera accidental y
el wrapper será marcado como **no conforme**.

---------------------------------------------------------------------

# 4E. Regla de impacto real

Todo gráfico debe justificar su existencia dentro del leaf. No basta con
que compile y se renderice; debe aportar valor didáctico medible.

Un gráfico será **rechazado** si cumple cualquiera de estas condiciones:

- No modifica la interpretación del alumno (el alumno entiende lo mismo
  sin verlo).
- No depende del cálculo (muestra siempre lo mismo independientemente de
  los parámetros).
- No permite modo experimento (no se puede manipular ningún parámetro
  para observar cambios).
- No produce magnitudes nuevas que el alumno no pudiera obtener solo con
  la calculadora.
- Puede eliminarse sin pérdida didáctica (el leaf funciona igual de bien
  sin él).

Regla de aplicación:

Si un gráfico falla en **3 o más** de los 5 criterios anteriores →
**rechazo obligatorio**. Si falla en 1 o 2, debe documentarse la
justificación de por qué se mantiene.

---------------------------------------------------------------------

# 4F. Reglas específicas por tipo

## Coord

Todo gráfico Coord debe declarar explícitamente:

- **Eje X** = variable independiente real (un `id` de
  `magnitudes.yaml`, típicamente `tiempo`, `posicion`, etc.).
- **Eje Y** = magnitud derivada o dependiente (un `id` de
  `magnitudes.yaml`).
- **Función explícita**: la relación matemática que produce la curva,
  vinculada a un `id` de `formulas.yaml`.

Si el Coord no declara estos tres elementos, no se puede verificar que
el gráfico muestra lo que dice mostrar → **rechazo**.

## Svg

Todo gráfico Svg debe declarar:

- **Tipo de animación temporal**:
  - `tiempo_fisico_real`: la animación reproduce la escala temporal del
    fenómeno (1 s de animación = 1 s de física).
  - `tiempo_pedagogico`: la animación está ralentizada, acelerada o
    pausada para facilitar la comprensión.
- **Mapa magnitud → elemento visual**: qué magnitud de `magnitudes.yaml`
  controla cada elemento gráfico (posición del cuerpo, longitud del
  resorte, ángulo de la rampa, etc.).

Si no se declara el tipo de animación, el alumno puede confundir la
velocidad visual con la velocidad física → **rechazo**.

## DCL

Todo gráfico DCL debe declarar:

- **Fuerza dependiente de cada parámetro**: para cada flecha del
  diagrama, indicar qué magnitud del cálculo determina su módulo y
  dirección.
- **Convención de signos explícita**: qué eje se toma como positivo y
  cómo se asigna el signo a cada fuerza.
- **Relación directa con ecuaciones**: cada fuerza del diagrama debe
  aparecer en al menos una fórmula de `formulas.yaml`.

Si una fuerza del DCL no corresponde a ninguna ecuación del leaf →
**rechazo** (la fuerza es decorativa).

---------------------------------------------------------------------

# 4G. Coherencia gráfico ↔ leaf (obligatoria)

El campo `pregunta_principal` de `graph_identity` debe responder
directamente a la pregunta central del leaf (campo `descripcion` /
`description_en` de `meta.yaml`).

No basta con que el gráfico sea válido internamente; debe ser
**necesario** para comprender o resolver lo que el leaf enseña.

Validación:

- La `pregunta_principal` del gráfico y la `descripcion` del leaf deben
  compartir al menos 2 palabras clave significativas (excluyendo
  artículos, preposiciones y conectores). Esto garantiza superposición
  temática sin exigir copia literal.

Reglas:

- Si el gráfico responde a una pregunta sin relación con la descripción
  del leaf → gráfico **inválido**.
- Si el leaf no puede responderse usando ninguno de sus gráficos →
  gráfico **débil** (al menos un gráfico debe tener superposición
  directa con la descripción del leaf).

---------------------------------------------------------------------

# 4H. Unicidad de magnitud estrella

Dentro de un mismo leaf, cada gráfico debe tener una
`magnitud_estrella` distinta. Esto fuerza que cada gráfico aporte una
lectura diferente y no sea una variante cosmética de otro.

Regla:

- No pueden existir dos gráficos con la misma `magnitud_estrella`
  dentro del mismo leaf → **rechazo** del gráfico duplicado.

La excepción solo aplica si los gráficos tienen `tipo_lectura`
diferentes (por ejemplo, uno `cuantitativa` y otro `causal`), y debe
justificarse con un comentario explícito en el profile indicando por
qué la misma magnitud necesita dos lecturas distintas.

---------------------------------------------------------------------

# 5. Contrato visual y funcional común

Todos los gráficos del leaf deben integrarse con la experiencia común de
la pestaña de gráficos.

Reglas obligatorias:

- deben mostrar la fórmula seleccionada en la calculadora cuando exista cálculo previo
- deben convivir con el workbench común de calculadora y experimento
- deben ser compatibles con la card común de interpretación gráfica
- deben responder a cálculos previos cuando existan
- deben poder entrar en modo experimento cuando no exista cálculo previo

Cada gráfico debe permitir o respetar:

1. conexión con la calculadora
2. lectura didáctica de lo que se ve
3. compatibilidad con modo calculadora
4. compatibilidad con modo experimento
5. coherencia con fórmulas y magnitudes del leaf

Regla crítica:

Un gráfico que solo “se vea bien” pero no responda a la calculadora ni a
la interpretación no cumple esta plantilla.

---------------------------------------------------------------------

# 6. Reglas obligatorias para SVG

Un SVG de Nivel 5 es una representación física reactiva, no una escena
bonita.

Debe cumplir obligatoriamente:

- usar `createSvgGraph(...)` para su wrapper
- usar un `profile` propio del leaf
- usar `toNum(...)` o blindaje equivalente al leer magnitudes
- aceptar `sharedParams.__calc`
- poder aplicar cambios hacia calculadora si el caso lo requiere
- emitir semántica útil vía `interpretation_binding`
- declarar `infoCards` con al menos 1 tarjeta para el panel lateral ANÁLISIS

Reglas operativas:

- `profile.meta.leafId` debe coincidir con el leaf real
- `schema`, `derivations` e `interpretation_binding` deben corresponder al núcleo del leaf
- no renderizar títulos de fórmula dentro del lienzo SVG si el renderer ya los delega al panel lateral
- no usar valores hardcodeados que ignoren magnitudes del cálculo

Reglas de rechazo:

- reutilizar un profile de otro leaf cambiando solo el título
- ignorar `sharedParams`
- producir `NaN` por no blindar objetos de magnitud
- animar algo que no cambia con el cálculo real

## 6A. Regla de profile dedicado por leaf — OBLIGATORIA

Cada leaf SVG debe tener su propio profile completo: `params`, `derivations`,
`motion` y `render` propios. No se admite el patrón de heredar un profile
base mediante spread (`...baseProfile`) si eso implica que `render`, `params`
o `motion` queden sin sobrescribir.

Patrón PROHIBIDO:

```js
// ❌ PROHIBIDO — el render, params y motion heredados son de otra física
const profile = {
  ...baseProfile,          // spread que hereda render/params/motion ajenos
  meta: { ...baseProfile.meta, id: "svg-mi-leaf", leafId: "mi-leaf" },
  graph_contract: createSvgProfileContract({ ... }),
};
```

Patrón OBLIGATORIO:

```js
// ✅ CORRECTO — profile completo, sin herencia de render ni params
import React from "react";
import { SVG_CONTROL_TYPES, SVG_MOTION_TYPES, SVG_SCENE_TYPES } from "../svgGrammar";
import { SvgArrow } from "../SvgProfileRenderer";
import { createSvgProfileContract } from "./svgProfileContracts.js";

const profile = {
  meta: { id: "svg-mi-leaf", leafId: "mi-leaf", title: { es: "...", en: "..." }, subtitle: { es: "...", en: "..." } },
  graph_contract: createSvgProfileContract({ leafId: "mi-leaf", graphId: "svg-mi-leaf", ... }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 640,
  params: {
    schema: [ /* sliders propios del leaf */ ],
    derivations: { /* magnitudes derivadas propias del leaf */ },
  },
  motion: { type: SVG_MOTION_TYPES.CUSTOM, tMax: 4, loop: true, state: (t, p) => ({ /* estado animado propio */ }) },
  render: ({ p, state, lang }) => ( /* JSX que representa la física real del leaf */ ),
  infoCards: [
    {
      key: "idea",
      label: { es: "Idea clave", en: "Key idea" },
      highlight: "ecuación principal",
      highlightColor: "#86efac",
      description: {
        es: "Explicación breve de la idea central del leaf.",
        en: "Short explanation of the leaf's central idea.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura actual", en: "Current reading" },
      lines: ({ p, state, lang }) => [ /* valores dinámicos */ ],
      result: ({ p, state, lang }) => `magnitud = valor unidad`,
      resultColor: "#34d399",
    },
  ],
  interpretation_binding: { paramsIn: [...], stateOut: [...], target: "..." },
};

export default profile;
```

**Regla sobre `infoCards`:** Todo profile SVG debe declarar `infoCards` con
al menos 1 tarjeta. Estas tarjetas pueblan la sección ANÁLISIS del panel
lateral (`AsidePanel`). Sin ellas, la columna derecha queda vacía y el alumno
pierde la lectura rápida contextual del gráfico. Cada tarjeta debe tener
`key` único y `label` bilingüe (es/en).

Criterio de rechazo duro:

Si un profile nuevo contiene `...baseProfile` sin sobrescribir `render`,
`params.schema` y `motion`, el profile NO cumple el estándar y debe rehacerse
desde cero con los artefactos propios del leaf.

---------------------------------------------------------------------

# 7. Reglas obligatorias para DCL

Un DCL de Nivel 5 es un diagrama explicativo con semántica física y no un
icono de fuerzas genérico.

Debe cumplir obligatoriamente:

- usar `createDclGraph(...)` para su wrapper
- usar un profile coherente con la escena física real
- declarar escena, cuerpos, vectores, opciones e interpretación de forma coherente
- emitir contexto de interpretación útil
- respetar la convención de signos y la lectura de calculadora

Reglas operativas:

- la escena debe justificar las fuerzas presentes
- la normal no puede aparecer sin superficie
- los vectores de contexto deben diferenciarse de fuerzas reales cuando proceda
- `symbol` debe usar notación compatible con subíndices cuando sea necesaria
- el bloque `interpretation` del profile no puede ser genérico

Reglas de rechazo:

- usar una escena físicamente incorrecta
- mostrar fuerzas incompatibles con la escena
- carecer de lectura interpretativa del diagrama
- ser intercambiable con otro leaf sin cambios sustanciales

---------------------------------------------------------------------

# 8. Reglas obligatorias para Coord

Un gráfico Coord de Nivel 5 no es solo una curva: es una lectura
cuantitativa conectada con la calculadora, la interpretación y el modo
experimento.

Debe cumplir obligatoriamente:

- usar `createCoordGraph(...)` o `createCoordGraphPage(...)`
- declarar un modelo o compute coherente con la relación física mostrada
- usar magnitudes compatibles con el leaf
- emitir contexto de interpretación cuando exista target legible
- permitir escalado y actualización coherentes con los datos

Reglas operativas:

- los ejes deben representar magnitudes reales
- las unidades deben ser correctas cuando proceda
- el target interpretado debe ser real y conectable con `interpretacion.yaml`
- los textos visibles deben ser bilingües reales
- el formato numérico debe respetar ES/EN

Reglas de rechazo:

- curvas sin significado físico claro
- etiquetas no sincronizadas con magnitudes.yaml
- dependencia exclusiva de hardcodes visuales
- modo experimento roto o aislado de la calculadora

---------------------------------------------------------------------

# 9. Bilingüismo y formato textual en gráficos

Todo texto visible en la UI del gráfico debe ser bilingüe real.

Obligatorio:

- usar helper bilingüe o capa equivalente
- no dejar textos puros solo en español dentro de JSX
- no dejar separador decimal fijo contrario al idioma activo

No se admite:

- botones solo en español
- títulos solo en inglés en leaf español
- `.replace(".", ",")` incondicional para todos los idiomas

Regla de rechazo duro:

Si la UI visible del gráfico no es publicable en ES y EN, el gráfico no
cumple el estándar.

---------------------------------------------------------------------

# 10. Integración obligatoria con cálculo e interpretación

Si el leaf tiene calculadora e interpretación habilitadas, el gráfico debe
mantener coherencia operativa completa.

Contrato obligatorio:

- cálculo → gráfico
- gráfico → interpretación
- ids consistentes entre frontend y YAML
- target interpretable real

El gráfico debe poder:

- recibir `__calc`
- reaccionar al target y al valor calculado
- producir contexto de interpretación cuando el gráfico aporte semántica propia

Regla crítica:

No se admite que el gráfico viva al margen de `interpretacion.yaml` si el
leaf declara lectura gráfica.

---------------------------------------------------------------------

# 11. Regla anti-reutilización ciega

Ningún gráfico de Nivel 5 puede resolverse por simple similitud formal con
otro leaf.

No se admite:

- copiar un wrapper y cambiar el nombre
- copiar un profile ajeno y retocar el título
- reutilizar un gráfico que no represente el núcleo físico del leaf
- mantener semántica heredada de otro leaf en ids, targets o textos
- usar `...baseProfile` spread sin sobrescribir `render`, `params.schema` y `motion`

Regla de rechazo duro:

Si el gráfico puede trasladarse a otro leaf cercano sin cambios sustanciales
en profile, modelo, semántica o interpretación, no cumple Nivel 5.

Nota de aplicación práctica:

Si un nuevo leaf de SVG parte de un profile existente como referencia de
estructura, debe copiar el archivo, renombrarlo con el leafId correcto y
reescribir íntegramente `params.schema`, `derivations`, `motion.state` y
`render`. El spread `...baseProfile` solo es aceptable si el leaf nuevo
precisamente modela la misma física (caso extremadamente raro y que debe
justificarse explícitamente en un comentario del archivo).

---------------------------------------------------------------------

# 12. Validación mínima obligatoria antes de cerrar un gráfico

Antes de considerar terminado cualquier gráfico, debe cumplirse todo lo
siguiente:

✓ wrapper creado con la fábrica común
✓ contrato común de props respetado
✓ sin errores de editor
✓ sin errores de build del frontend
✓ ids coherentes con YAML y calculadora
✓ textos visibles bilingües
✓ modo calculadora compatible
✓ modo experimento compatible
✓ contexto de interpretación operativo cuando aplique
✓ sin `NaN`, placeholders ni estado decorativo

Regla crítica:

No basta con que compile. Debe estar integrado funcionalmente en la
experiencia del leaf.

---------------------------------------------------------------------

# 13. Ejemplo canónico mínimo SVG + DCL + Coord

El siguiente ejemplo muestra la estructura mínima esperada para un leaf
que declara los tres tipos de gráfico. No es un ejemplo decorativo: está
pensado como patrón de implementación estable.

## 13.1 Wrapper SVG

```jsx
import { createSvgGraph } from "../../graphFactories.jsx";
import profile from "@/v2/components/SVG/profiles/miLeaf.svg.profile.jsx";

export default createSvgGraph({
    displayName: "MiLeafGraphsSvg",
    profile,
});
```

Condición obligatoria:

- el `profile.meta.leafId` debe coincidir con el leaf real
- el `profile` debe incluir `interpretation_binding`

## 13.2 Wrapper DCL

```jsx
import { createDclGraph } from "../../graphFactories.jsx";
import profile from "@/v2/components/DCL/profiles/particleFree.profile";

export default createDclGraph({
    displayName: "MiLeafGraphsDcl",
    profile,
    mapProfile: (baseProfile) => ({
        ...baseProfile,
        meta: {
            ...(baseProfile?.meta || {}),
            id: "dcl-mi-leaf",
            leafId: "mi-leaf",
        },
    }),
});
```

Condición obligatoria:

- la escena y los vectores deben corresponder al problema real del leaf
- el bloque `interpretation` del profile no puede quedarse genérico

## 13.3 Wrapper Coord

```jsx
import React from "react";
import { createCoordGraphPage } from "../graphFactories.jsx";

export default createCoordGraphPage({
    displayName: "MiLeafGraphsCoord",
    title: {
        es: "Magnitud frente a tiempo",
        en: "Quantity versus time",
    },
    defaultParams: {
        tMax: 10,
        slope: 2,
    },
    controls: [
        { id: "tMax", label: { es: "Tiempo máximo", en: "Maximum time" }, min: 1, max: 20 },
        { id: "slope", label: { es: "Pendiente", en: "Slope" }, min: -5, max: 5 },
    ],
    compute: (pNum) => {
        const tMax = Number.isFinite(pNum.tMax) ? pNum.tMax : 10;
        const slope = Number.isFinite(pNum.slope) ? pNum.slope : 2;
        const data = Array.from({ length: 25 }, (_, index) => {
            const t = (index / 24) * tMax;
            return { t, y: slope * t };
        });

        return {
            data,
            extra: {
                interpretationTarget: "pendiente",
                interpretationValue: slope,
                graphState: { tMax, slope },
            },
        };
    },
    render: ({ data }) => (
        <div className="v2-card" style={{ display: "grid", gap: 10 }}>
            <div className="v2-card-title">Preview</div>
            <div>Puntos generados: {data.length}</div>
        </div>
    ),
});
```

Condición obligatoria:

- `extra.interpretationTarget` y `extra.interpretationValue` deben ser
    físicamente interpretables
- la UI visible del gráfico debe salir publicada en ES y EN sin textos duros

## 13.4 Registro en index.js

```jsx
export const graphs = {
    "mi-leaf": {
        Coord: MiLeafGraphsCoord,
        Dcl: MiLeafGraphsDcl,
        Svg: MiLeafGraphsSvg,
    },
};
```

## 13.5 Qué debe verse en la pestaña de gráficos

- workbench común con modo calculadora y modo experimento
- card de lectura gráfica conectada con interpretación
- reacción a cálculo previo vía `sharedParams.__calc` cuando exista
- estado estable si faltan params o llegan parcialmente

---------------------------------------------------------------------

# 14. Regla de cierre

Un gráfico Phyxio no se considera cerrado por existir visualmente, sino por
superar simultáneamente coherencia física, integración con cálculo,
lectura interpretativa, consistencia visual y robustez técnica.

Criterio final reforzado:

- Si el leaf declara gráficos, esta plantilla es obligatoria.
- Si el gráfico incumple esta plantilla, el leaf sigue abierto.
- El objetivo no es “tener un gráfico”, sino tener un gráfico publicable,
  interpretable y operativamente blindado.