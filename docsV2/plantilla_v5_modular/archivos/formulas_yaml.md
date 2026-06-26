> **Función**: Corazón matemático y de cálculo del leaf. Define el modelo.
> **Relaciones**: Usa variables de `magnitudes.yaml`. Sus rearrangments son los inputs directos de `interpretacion.yaml`.

---

<!-- EXTRACT-STRUCTURE-YAML -->
```yaml
###ESTRUCTURA OBLIGATORIA FORMULAS###
version: ""
ui:
  default_formula: ""
formulas:
  - id: ""
    title:
      es: ""
      en: ""
    equation: ""
    latex: ""
    rearrangements:
      - target: ""
        equation: ""
        latex: ""
    category: ""
    relation_type: ""
    physical_meaning:
      es: ""
      en: ""
    constraints: []
    validity:
      es: ""
      en: ""
    dimension_check: ""
    calculable: false
    motivo_no_calculable: ""
    used_in: []
    interpretation_tags: []
    result_semantics:
      target: ""
      kind: ""
      sign_meaning:
        es: ""
        en: ""
      absolute_value_meaning:
        es: ""
        en: ""
    domain_checks: ""
    coherence_checks: ""
    graph_implications: ""
    pedagogical_triggers: ""
  
```

# 9. formulas.yaml

¡¡MUY IMPORTANTE!!

Este archivo es la base fundamental del leaf, desde el que se debe construir todo,
debe contener todas las fórmulas de cada leaf como base para el desarrollo de los demás archivos, especialmente magnitudes e interpretación, así que se debe tomar como el corazón del leaf, respetando cada campo y desarrollandolo con pulcritud extrema.

Cada fórmula debe incluir obligatoriamente:

- id

- title:
  - es
  - en

- equation
- latex

- rearrangements:
  - target
    equation
    latex

- category
- relation_type

- physical_meaning:
  - es
  - en

- constraints

- validity:
  - es
  - en

- dimension_check

- calculable
- motivo_no_calculable

- used_in

- interpretation_tags
- result_semantics
  - target
  - kind
  - sign_meaning
    - es
    - en
  - absolute_value_meaning
    - es
    - en
- domain_checks
- coherence_checks
- graph_implications
- pedagogical_triggers

### REGLA DE RECHAZO DURO — Caracteres especiales YAML en strings de texto libre

El parser YAML rompe con errores de posición de columna cuando un string de texto libre (sin comillas) contiene caracteres reservados. Esto afecta a todos los campos de texto bilingüe: `es:`, `en:`, `message:`, `description:`, `validity:`, `physical_meaning:`, etc.

**Los dos tokens peligrosos más comunes:**

| Carácter | Por qué falla | Solución |
|---|---|---|
| `: ` (dos puntos + espacio) dentro del valor | YAML lo interpreta como separador clave/valor | Envolver el string completo en comillas dobles |
| `~` suelto (tilde ASCII) | YAML lo interpreta como el valor `null` | Reemplazar por `aprox.`, `~=`, o usar comillas dobles |

**Ejemplos:**

```yaml
# ❌ Inválido — el ': ' interior rompe el parser en la columna indicada
message:
  es: Con epsilon_r igual a 1 el material es vacío o aire: no hay amplificación.

# ✅ Válido — string entre comillas dobles
message:
  es: "Con epsilon_r igual a 1 el material es vacío o aire: no hay amplificación."

# ❌ Inválido — ~ suelto se parsea como null
message:
  es: Valores muy altos (titanato de bario, ~ 10 000) permiten condensadores compactos.

# ✅ Válido — ~ sustituido por texto o entre comillas dobles
message:
  es: "Valores muy altos (titanato de bario, aprox. 10 000) permiten condensadores compactos."
```

**Regla práctica**: cuando el valor de un campo `es:` o `en:` contenga cualquiera de `: `, `~`, `#`, `[`, `]`, `{`, `}`, `*`, `&`, `|`, `>` o `!`, **obligatoriamente** envolver el string completo en comillas dobles. Si el propio string contiene comillas dobles internas, escaparlas con `\"`.

Esta regla aplica a **todos** los archivos YAML del leaf: `formulas.yaml`, `magnitudes.yaml`, `interpretacion.yaml` y `meta.yaml`.

### REGLA DE RECHAZO DURO — `\\text{palabra}` en subíndices LaTeX produce tokens sueltos

El validador de símbolos (`[symbols]`) extrae todos los tokens matemáticos del LaTeX de cada fórmula y los cruza con `magnitudes.yaml`. Cuando se usa `\\text{pol}` dentro de un subíndice (`P_{\\text{pol}}`), el tokenizador extrae `pol` como símbolo matemático independiente, que no existe en `magnitudes.yaml`, y el leaf falla `Todas las variables finitas usadas están definidas en magnitudes.yaml`.

**Causa:** `\\text{...}` convierte su contenido en texto literal dentro de math-mode, pero el tokenizador de Phyxio lo trata como un identificador de variable.

```yaml
# ❌ Inválido — 'pol' se extrae como símbolo suelto no definido
latex: "P_{\\text{pol}} = \\varepsilon_0 (\\varepsilon_r - 1) E_d"

# ✅ Válido — subíndice literal sin \\text{}
latex: "P_{pol} = \\varepsilon_0 (\\varepsilon_r - 1) E_d"
```

**Regla práctica:** en campos `latex` de `formulas.yaml`, **nunca usar `\\text{cadena}`** dentro de subíndices o superíndices si esa cadena no es un ID definido en `magnitudes.yaml`. Usar el subíndice directamente (`_{pol}`, `_{ext}`, `_{0}`) o una letra griega/latina sin envoltura `\\text{}`.

Esta regla aplica también a los campos `latex` de `rearrangements`.

### REGLA DE RECHAZO DURO — `abs()` en el campo `equation` produce token no declarado

El validador de símbolos (`[symbols]`) tokeniza el campo `equation` de cada fórmula y de sus `rearrangements`. La función `abs(...)` se tokeniza como el identificador `abs`, que no está en `magnitudes.yaml` ni en la whitelist del validador (`pi`, `sqrt`, `frac`). Resultado: fallo `Todas las variables finitas usadas están definidas en magnitudes.yaml` con detalle `['abs']`.

```yaml
# ❌ Inválido — 'abs' se extrae como símbolo no definido
equation: "F_C = k_e * abs(q1 * q2) / r12^2"

# ✅ Válido — sin abs(); q1 y q2 representan módulos en el contexto de cálculo
equation: "F_C = k_e * q1 * q2 / r12^2"
```

**Regla práctica:** en el campo `equation` (y en `rearrangements[*].equation`) **nunca usar `abs(...)`, `sign(...)`, `min(...)`, `max(...)` ni ninguna función de nombre que no esté en la whitelist `{pi, sqrt, frac}`**. Si la fórmula implica valor absoluto, expresarlo en el campo `latex` con `|...|` o `\lvert...\rvert`, y en `equation` usar las magnitudes directamente (que por convención representan módulos positivos cuando así se documenta en `physical_meaning`).

---

### Regla Crítica de Formato LaTeX (Blindaje v5)

Para garantizar la compatibilidad con el motor de renderizado v5 y evitar fallos de visualización en la UI:

- El campo `latex` (tanto en la raíz de la fórmula como en sus `rearrangements`) debe contener únicamente el **código LaTeX puro**.
- **ESTÁ TOTALMENTE PROHIBIDO** incluir delimitadores externos como `\(` y `\)` o `\[` y `\]` dentro del string en el archivo YAML.
- El motor de renderizado se encarga de envolver automáticamente el código en el bloque adecuado (`$$` para display o `$` para inline).
- **Consecuencia de incumplimiento**: La inclusión de delimitadores internos provoca que la fórmula se visualice como texto plano en lugar de matemáticas renderizadas, lo cual es motivo de **Rechazo Duro** en la validación.

**Ejemplo Incorrecto:**
`latex: "\\(p_f = p_i + J\\)"`

**Ejemplo Correcto:**
`latex: "p_f = p_i + J"`

- domain_checks
- coherence_checks
- graph_implications
- pedagogical_triggers

---

Categorías permitidas:

- fundamental
- derived
- structural
- conceptual
- auxiliary

relation_type permitidos:

- definition
- average_relation
- integral_relation
- differential_relation
- geometric_interpretation
- constitutive_relation

Reglas:

- Cada fórmula representa una sola relación física.
- No mezclar definiciones diferenciales con relaciones promedio.
- No duplicar la misma fórmula con títulos distintos.
- No usar rearrangements irrelevantes o meramente algebraicos si no aportan valor físico.
- Toda fórmula debe tener significado físico explícito.
- constraints debe incluir hipótesis mínimas de aplicación.
- validity debe expresar el dominio físico, no una frase genérica.
- dimension_check debe ser concreto y correcto.
- `interpretation_tags` debe resumir qué tipo de lectura física activa la fórmula.
- `result_semantics` debe indicar cómo debe leerse el resultado calculado.
- `domain_checks` debe contener condiciones evaluables, no frases decorativas.
- `coherence_checks` debe permitir detectar salidas físicamente sospechosas.
- `graph_implications` debe conectar el resultado con la representación visual.
- `pedagogical_triggers` debe detectar errores típicos ligados a esa fórmula.

**Regla de conexión de magnitudes núcleo (OBLIGATORIO):**

Todas las magnitudes catalogadas como centrales (`core_physical_quantity`) o relevantes en `magnitudes.yaml` deben estar conectadas con al menos una fórmula en `formulas.yaml` (ya sea como target de la ecuación, rearrangement, o como variable/parámetro de entrada en alguna de ellas). Si una magnitud clave no está conectada, el validador fallará en `coverage: magnitudes núcleo conectadas con formulas.yaml`.

**CASO ESPECIAL — Símbolo LaTeX distinto del ID de magnitud (RECHAZO DURO):**

El validador busca el `id` de la magnitud como token literal en el blob `id + target + latex` de todas las fórmulas. Si el campo `latex` de la fórmula usa una variante LaTeX diferente del ID, el token no se detecta y la magnitud aparece como huérfana.

- ❌ `id: epsilon` en `magnitudes.yaml`, `latex: C_0 = \frac{\varepsilon \cdot A}{d}` en `formulas.yaml` → el token `epsilon` no está en `\varepsilon`
- ✅ Solución: añadir `% epsilon` al final del campo `latex`, o incluir el ID como alias: `latex: C_0 = \frac{\varepsilon \cdot A}{d}  % epsilon`
- ✅ Alternativa: el campo `equation` ya contiene el token exacto — si el `latex` no lo recoge, basta con añadir el ID como comentario LaTeX al final del string.

Esta discrepancia es frecuente con magnitudes cuyo símbolo LaTeX es una variante (`\varepsilon` vs `epsilon`, `\rho` vs `rho`, `\omega` vs `omega`). Revisa siempre que el token `id` aparezca literalmente en `latex` o `equation`.

Para solucionar:
- Asegúrate de que no hay errores tipográficos en el ID de la magnitud.
- Si es un umbral o límite normativo, define una relación/fórmula relevante para conectar las variables.

Incorrecto:

v = dx/dt = \Delta x/\Delta t

Correcto:

- fórmula 1: \(v = dx/dt\)
- fórmula 2: \(v_{\mathrm{med}} = \Delta x/\Delta t\)

Regla crítica:

Si una fórmula usa tiempos iniciales o finales explícitos \((t_i, t_f)\),
esas variables deben estar declaradas si se usan de forma sistemática en el leaf
o evitarse en favor de lenguaje de intervalo si no son magnitudes centrales.

Regla crítica reforzada (rechazo duro):

Los siguientes campos deben ser operativos y evaluables:

- interpretation_tags
- result_semantics
- domain_checks
- coherence_checks
- graph_implications
- pedagogical_triggers

Condiciones obligatorias:

- deben poder ser utilizados por un motor de interpretación
- deben conectar con `interpretacion.yaml` mediante ids y targets reales
- deben permitir detectar estados coherentes o incoherentes del resultado
- no pueden ser frases vagas del tipo “revisar si tiene sentido”

Si estos campos no son utilizables para generar interpretación automática, el leaf no supera Nivel 4.7.

---------------------------------------------------------------------

# 9B. Contrato de integración calculadora ↔ interpretación (CRÍTICO)

La calculadora y el motor de interpretación están acoplados. Cualquier discrepancia
entre `formulas.yaml`, `magnitudes.yaml` y `interpretacion.yaml` produce fallos silenciosos.

## Regla 1 — `ui.default_formula` obligatorio

`ui.default_formula` debe apuntar a la primera fórmula con `calculable: true`.

Si `ui.default_formula` no existe, la calculadora carga la primera fórmula del array.
Si esa primera fórmula es `calculable: false`, la calculadora nunca producirá resultado
y el motor de interpretación nunca recibirá datos.

## Regla 2 — Rearrangement propio por cada target interpretado

Cada variable objetivo declarada en `targets` de `interpretacion.yaml` debe tener
su propio entry en `rearrangements` dentro de la fórmula correspondiente.

El motor recibe como target exactamente la clave `target:` del rearrangement activo.
Si no existe ese rearrangement, el target no llega al motor y sus reglas no se disparan.

Ejemplo correcto:

  rearrangements:
    - target: a_rel        # target principal
      equation: a_rel = a_A - a_B
    - target: a_A
      equation: a_A = a_rel + a_B
    - target: a_B
      equation: a_B = a_A - a_rel

## Regla 3 — `calculable: true` explícito

Toda fórmula de la cual se espera resultado numérico debe declarar `calculable: true`
de manera explícita. No se admite implícito.

---

---------------------------------------------------------------------