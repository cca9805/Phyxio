# 18. ejemplos.en.md

- Párrafos ágiles: Ningún párrafo debe superar las 4 o 5 líneas de lectura.
Debe:
- títulos y subtítulos en ingles académico natural
- **replicar EXACTAMENTE la estructura de ejemplos.md con los títulos en inglés especificados abajo**
- estar completamente en inglés
- usar los mismos símbolos
- mantener el mismo grado de detalle
- mantener también la misma lógica física del ejemplo, no solo la estructura

<!-- EXTRACT-HEADINGS-EN: Exam-type example, Problem statement, Data, System definition, Physical model, Model justification, Symbolic solution, Numerical substitution, Dimensional validation, Physical interpretation, Real-world example, Context, Physical estimation, Interpretation -->

## Estructura obligatoria exacta (ejemplos.en.md)

Los títulos deben coincidir CARÁCTER POR CARÁCTER con los siguientes:

**Ejemplo tipo examen:**

```
# Exam-type example

## Problem statement
## Data
## System definition
## Physical model
## Model justification
## Symbolic solution
## Numerical substitution
## Dimensional validation
## Physical interpretation
```

**Ejemplo aplicado real:**

```
# Real-world example

## Context
## Physical estimation
## Interpretation
```

**REGLA DE RECHAZO DURO - Títulos H1:** Si los títulos H1 no coinciden EXACTAMENTE con:
- `# Exam-type example` (no "Exam-type Example", no "Exam Example", no "Problem")
- `# Real-world example` (no "Real Application Example", no "Real-world Example", no "Practical example")

El validador marcará fallo de estructura obligatoria y el leaf no pasará Nivel 4.7+.

**REGLA DE RECHAZO DURO - Títulos H2 (ejemplo tipo examen):** Los 9 encabezados H2 deben coincidir CARÁCTER POR CARÁCTER con:
- `## Problem statement` (no "Statement", no "Problem Statement", no "## Problem")
- `## Data` (no "## Given data", no "## Input data")
- `## System definition` (no "## System")
- `## Physical model` (no "## Model")
- `## Model justification` (no "## Justification", no "## Why this model")
- `## Symbolic solution` (no "## Analytical solution", no "## Symbolic")
- `## Numerical substitution` (no "## Numerical solution", no "## Calculation")
- `## Dimensional validation` (no "## Units", no "## Dimensional analysis")
- `## Physical interpretation` (no "## Interpretation", no "## Results")

**REGLA DE RECHAZO DURO - Títulos H2 (ejemplo real):** Los 3 encabezados H2 deben coincidir CARÁCTER POR CARÁCTER con:
- `## Context` (no "## Real context", no "## Application context")
- `## Physical estimation` (no "## Estimation", no "## Calculation")
- `## Interpretation` (no "## Physical interpretation" - este es solo para el ejemplo tipo examen)

**REGLA DE RECHAZO DURO - Secciones vacías:**
- Ninguna de las 9 secciones del ejemplo tipo examen puede tener < 50 palabras
- Ninguna de las 3 secciones del ejemplo real puede tener < 30 palabras
- El validador rechazará el archivo si detecta secciones vacías o sin desarrollo suficiente
- La sección `## Problem statement` debe contener el enunciado completo con todas las preguntas/planteamientos

## Mandatory semantic rules for examples

In `## Physical model` there must appear at least:

- one core magnitude
- one core formula or its dominant target

In `## Model justification` there must appear explicitly:

- why the model is valid
- when it would stop being valid

In `## Physical interpretation` there must appear explicitly:

- what the result means physically
- how the result changes if a dominant magnitude changes

**HARD REJECTION RULE — Dimensional validation: no bare `X = unit·unit` equations:**

The validator scans `## Dimensional validation` (and all other sections) for the pattern `short_variable = expression_with_letters` outside LaTeX delimiters. This triggers "formula textual invalida":

```
❌ H = kg·m²·A⁻²·s⁻²
❌ F = kg⁻¹·m⁻²·A²·s⁴
❌ c = 1/√(μ₀ε₀)  (bare, outside LaTeX)
```

**Standard correction** — describe dimensionally in prose:

```md
✅ Expressing the dimension of [[mu0]] (henries per metre) in fundamental SI units,
   the product (H/m)·(F/m) turns out to be s²/m², whose inverse square root is m/s ✓
```

The validator rule: any pattern `[A-Za-z]{1,3} = [expression with letters]` outside LaTeX delimiters is rejected. For dimensional validation, **always use descriptive prose, never equations with `=`**.

Hard rejection rule:

An example is not valid if it can be exchanged with the example from another leaf with only minimal changes.
An example is not valid if required sections are empty, if technical formula ids are written as visible prose, or if `Part (a):`, `Part (b):` style labels appear without developed work underneath.

---------------------------------------------------------------------