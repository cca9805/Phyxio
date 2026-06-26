# 12. teoria.en.md

Debe cumplir simultáneamente:

- replicar exactamente la estructura de teoria.md
- estar completamente en inglés académico natural
- títulos y subtítulos en ingles académico natural
- no contener frases en español
- no contener spanglish
- no ser una traducción literal torpe si rompe naturalidad física
- usar terminología estándar de libro de física
- mantener también todas las reglas semánticas, anti-repetición y reglas de rechazo duro definidas en `teoria.md`

**REGLA DE RECHAZO DURO - Títulos H2 exactos (teoria.en.md):**

Los 11 encabezados H2 deben coincidir CARÁCTER POR CARÁCTER con:

0. `# Título del subtema`
1. `## Conceptual context`
2. `## 🟢 Essential level`
3. `## 🔵 Formal level`
4. `## 🔴 Structural level`
5. `## Deep physical interpretation`
6. `## Order of magnitude`
7. `## Personalized resolution method` (NO "Custom resolution method")
8. `## Special cases and extended example`
9. `## Real student questions`
10. `## Cross-cutting connections and study paths` (NO "Cross-connections and study routes")
11. `## Final synthesis`

<!-- EXTRACT-HEADINGS-EN: Título del subtema (en inglés), Conceptual context, 🟢 Essential level, 🔵 Formal level, 🔴 Structural level, Deep physical interpretation, Order of magnitude, Personalized resolution method, Special cases and extended example, Real student questions, Cross-cutting connections and study paths, Final synthesis -->

**IMPORTANTE**: Los títulos 7 y 10 son específicos y deben coincidir exactamente con lo que espera el validador:
- `## Personalized resolution method` (con "Personalized", no "Custom")
- `## Cross-cutting connections and study paths` (con "Cross-cutting" y "paths", no "Cross-connections" ni "routes")

**REGLA DE RECHAZO DURO - Longitud máxima:**

- teoria.en.md debe tener **<= 2000 palabras**
- teoria.md debe tener **<= 2000 palabras**
- El validador rechazará archivos que excedan este límite
- Si el contenido excede 2000 palabras, se debe condensar eliminando redundancias y prosa innecesaria

**SECTION WORD BUDGET (to stay within 2000 words total):**

| Section | Max words (guideline) |
|---|---|
| Conceptual context | 120 |
| Essential level | 150 |
| Formal level | 300 |
| Structural level | 400 |
| Deep physical interpretation | 180 |
| Order of magnitude | 100 |
| Personalized resolution method | 150 |
| Special cases and extended example | 200 |
| Real student questions | 200 |
| Cross-cutting connections and study paths | 100 |
| Final synthesis | 80 |

Track a running word count mentally as each section is written. If the Structural level alone exceeds 1000 words, all remaining sections must be brief. **Do not pad content to reach 2000 words — the ceiling is a hard limit, not a target.**

Reglas de calidad:

- mismo número de secciones y subsecciones
- mismos símbolos
- mismo nivel de precisión conceptual
- misma profundidad didáctica
- longitud razonablemente equivalente a teoria.md (ambos <= 2000 palabras)

Hard rejection rule:

If the three levels restate essentially the same idea with different wording,
`teoria.en.md` does not satisfy the template even if it meets the required length.

**HARD REJECTION RULE — Essential level: no `=` or `^` characters:**

The validator scans the text extracted from `## 🟢 Essential level` for the literal characters `=` and `^`. If either is found, the check `learning_dynamics: nivel esencial es conceptual (sin abuso matemático)` fails.

- ❌ `The wave propagates at [[c]] = 3×10⁸ m/s` → contains `=` → REJECTED
- ✅ `The wave propagates at [[c]], roughly three hundred million metres per second`

**HARD REJECTION RULE — Inline LaTeX with mathematical operators is forbidden outside formal level:**

The validator scans ALL `\(...\)` and `$...$` delimiters in the full file. If the content of any LaTeX fragment contains any of these operators:

```
=    <    >    \le    \ge    \leq    \geq    \neq    \approx
```

the check `render_math: sin riesgos de render matemático` fails with "formula inline invalida". This applies to sections outside `## 🔵 Formal level`, especially:

- `## 🔴 Structural level`
- `## Special cases and extended example`
- `## Real student questions`
- `## Deep physical interpretation`

**Standard correction** — rewrite as prose:

| ❌ Invalid (LaTeX with operator) | ✅ Valid (prose) |
|---|---|
| `\(v = c/n\)` | `[[c]] divided by the refractive index` |
| `\(n \approx 1.5\)` | `the index is approximately 1.5` |
| `\(f = c/(2a)\)` | `[[c]] divided by twice the largest dimension` |
| `\(\nabla \cdot \mathbf{E} = 0\)` | `Gauss's law with no charges requires [[E]] to be perpendicular...` |

Only LaTeX inline fragments **without equality/comparison operators** are allowed outside the formal level. The symbol must be completely isolated — nothing else inside the delimiter.

**WARNING — Concrete patterns the validator REJECTS that appear frequently in generated content:**

| ❌ Invalid pattern (even if it looks like “just a symbol”) | ✅ Correct prose replacement |
|---|---|
| `\(\varepsilon_r \approx 80\)` | `relative permittivity of approximately 80` |
| `\(\varepsilon_r\)` **inside a descriptive phrase** | `the medium's relative permittivity` |
| `\(\sim 1/r_{12}\)` | `the inverse-distance dependence on [[r_12]]` |
| `\(N(N-1)/2\)` | `N·(N−1)/2 terms` (plain Unicode text) |
| `\(1/r\)` (in a comparative context) | `an inverse-distance law` |
| `\(n \approx 1.5\)` | `the index is approximately 1.5` |

Practical rule: if the inline LaTeX contains more than one token (symbol + operator + number, or symbol + fraction), rewrite it as prose. Only a completely isolated Greek or Latin symbol is valid: `\(\alpha\)`, `\(\mu_r\)`, `\(\varepsilon_r\)` — but only when not followed by `\approx`, `=`, `<`, `>`, or any number.

Regla crítica:

No basta con traducir títulos. Todo el cuerpo del texto debe estar realmente en inglés.

---------------------------------------------------------------------