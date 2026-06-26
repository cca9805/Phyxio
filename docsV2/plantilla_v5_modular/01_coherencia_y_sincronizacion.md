> **Función**: Reglas transversales que aseguran que todos los archivos del leaf actúan como un solo ente.
> **Relaciones**: Afecta a todos los `.yaml` y `.md`. Rechazo duro si no se cumplen.

---

# 2D. Coherencia obligatoria con gráficos

Si el leaf declara gráficos:

- Al menos un gráfico debe responder directamente a la `pregunta_fisica_central`.

Reglas:

- Si ningún gráfico responde a la pregunta → gráficos inválidos.
- Si el leaf se entiende igual sin gráficos → leaf no supera nivel 4.7.
- La `pregunta_principal` (en graph_identity del profile) debe compartir
  ≥ 2 palabras significativas con `pregunta_fisica_central`.

Validación:

1. Si `graficos` existe en meta.yaml, al menos un profile debe tener
   `pregunta_principal` con ≥ 2 palabras significativas en común con
   `pregunta_fisica_central`.
2. Si ningún gráfico cumple → FAIL.

---------------------------------------------------------------------

---------------------------------------------------------------------

# 4. Consistencia simbólica

Los símbolos deben coincidir en:

- teoria.md
- teoria.en.md
- formulas.yaml
- magnitudes.yaml
- interpretacion.yaml
- ejemplos.md
- ejemplos.en.md
- gráficos

Reglas:

- 1 símbolo = 1 magnitud física
- 1 magnitud física = 1 símbolo dominante
- no se permiten magnitudes reales no definidas
- las magnitudes ficticias o variables auxiliares no declaradas deben escribirse como código inline
- no se permiten cambios de notación entre archivos
- no se permiten símbolos duplicados para magnitudes distintas
- no se permiten nombres distintos para la misma magnitud entre español e inglés

Regla adicional crítica:

Toda magnitud real que aparezca en fórmulas, teoría o ejemplos debe estar
definida en `magnitudes.yaml`. Las magnitudes ficticias, variables auxiliares,
nombres temporales o símbolos de apoyo que no correspondan a una magnitud real
del leaf no se declaran en `magnitudes.yaml` y deben escribirse como código
inline en Markdown, por ejemplo `` `u_aux` ``. Los diferenciales matemáticos
puros \(dx\), \(dt\), \(dv\) se consideran operadores diferenciales y no
magnitudes físicas independientes.

Variables de intervalo o estado que SÍ deben declararse si aparecen:

- \(\Delta x\)
- \(\Delta v\)
- \(\Delta t\)
- \(x_i\)
- \(x_f\)
- \(v_0\)
- \(v_f\)
- \(a_{\mathrm{med}}\)
- \(v_{\mathrm{med}}\)

Regla de consistencia reforzada:

- `interpretacion.yaml` debe usar exactamente los mismos ids técnicos que el leaf
- está prohibido mezclar convenciones como `rcm` y `r_cm` dentro del mismo leaf
- si existe cálculo y gráfico, los ids compartidos deben coincidir también en el frontend

---------------------------------------------------------------------

---------------------------------------------------------------------

---------------------------------------------------------------------

# 4B. Sincronización operativa obligatoria

Si el leaf tiene calculadora, interpretación o resultados numéricos, debe cumplirse una sincronización estricta entre:

- `magnitudes.yaml`
- `formulas.yaml`
- `interpretacion.yaml`
- `ejemplos.md`

La sincronización no es solo simbólica o editorial. Debe ser **operativa**, es decir, usable por el motor y por el frontend.
La coherencia entre archivos debe ser absoluta y será motivo de no pasar

## Reglas obligatorias

### 1. Sincronización de ids de magnitudes

Todo id de magnitud usado en:

- `formulas.yaml`
- `interpretacion.yaml`
- calculadora
- validaciones de coherencia

debe existir exactamente igual en `magnitudes.yaml`.

Prohibido:

- `acm` en un archivo y `a_cm` en otro
- `Fext` en un archivo y `F_ext` en otro
- `ptot` en un archivo y `p_tot` en otro

No se permiten aliases silenciosos.

### 2. Sincronización target ↔ magnitud

Todo `result_semantics.target` de `formulas.yaml` debe corresponder a un id real de `magnitudes.yaml`.

Todo target de `interpretacion.yaml` debe corresponder a:

- una magnitud real de `magnitudes.yaml`
- y, además, a un target calculable desde `formulas.yaml`

Si un target interpretado no puede ser producido por la calculadora, el leaf no supera Nivel 4.7.

### 3. Sincronización de dependencias de interpretación

`interpretacion.yaml` debe declarar en `dependencies.formulas` ids reales de `formulas.yaml`.

`interpretacion.yaml` debe declarar en `dependencies.magnitudes` ids reales de `magnitudes.yaml`.

No se admite:

- ids huérfanos
- ids antiguos
- ids renombrados solo en uno de los archivos

### 4. Sincronización semántica fórmula → interpretación

Cada fórmula calculable debe aportar semántica operativa que pueda ser consumida por `interpretacion.yaml`:

- `interpretation_tags`
- `result_semantics`
- `domain_checks`
- `coherence_checks`
- `pedagogical_triggers`

Cada target de `interpretacion.yaml` debe reaccionar a resultados reales usando esas magnitudes y relaciones.

No se admite interpretación cosmética o independiente del resultado calculado.

### 5. Sincronización funcional de relaciones físicas

Si `formulas.yaml` define:

- `a_cm = F_ext / M`

entonces `interpretacion.yaml` debe poder verificar coherencia usando exactamente:

- `a_cm`
- `F_ext`
- `M`

y no versiones alternativas ni nombres heredados.

Análogamente, si `formulas.yaml` define:

- `p_tot = M v_cm`

entonces `interpretacion.yaml` debe poder verificar coherencia usando exactamente:

- `p_tot`
- `M`
- `v_cm`

### 6. Sincronización con gráficos, si existen

Si el leaf usa gráficos y `graph_binding` está habilitado:

- los canales declarados en `magnitudes.yaml`
- los canales sugeridos en `formulas.yaml`
- los canales usados en `interpretacion.yaml`

deben coincidir exactamente.

No se admite:

- `velocity_arrow` en un archivo y `center_of_mass_velocity_arrow` en otro
- canales presentes en interpretación pero inexistentes en magnitudes o fórmulas
- canales decorativos no usados por el frontend

### 7. Regla de desactivación limpia

Si el leaf se entrega sin integración gráfica operativa:

- `graph_binding.channels` en `magnitudes.yaml` debe quedar vacío o coherentemente desactivado
- `graph_implications` en `formulas.yaml` debe quedar vacío o coherentemente desactivado
- `graph_reading` en `interpretacion.yaml` debe deshabilitarse
- `graph_binding` y `mini_graph` en `interpretacion.yaml` deben marcarse como desactivados

No se admite dejar restos gráficos activos sin implementación real.

## Regla de rechazo duro

Un leaf no puede declararse 4.7 ni 5 si ocurre cualquiera de estas situaciones:

- ids distintos para la misma magnitud entre YAML
- targets interpretados que la calculadora no puede producir
- dependencias de interpretación que apuntan a ids inexistentes
- checks de coherencia que usan nombres no definidos
- canales de gráfico no sincronizados
- interpretación que no reacciona al valor real calculado

-------------------------------------------------------

---------------------------------------------------------------------

# 8. Validación simbólica obligatoria

Antes de cerrar el leaf debe comprobarse:

1. Todas las magnitudes reales de formulas.yaml aparecen en magnitudes.yaml.
2. Todas las magnitudes reales de teoria.md aparecen en magnitudes.yaml y en Markdown usan `[[id_magnitud]]`.
3. Todas las magnitudes reales de ejemplos.md aparecen en magnitudes.yaml y en Markdown usan `[[id_magnitud]]`.
4. Todas las magnitudes reales de interpretacion.yaml aparecen en magnitudes.yaml o son funciones/flags válidos del motor.
5. teoria.en.md usa exactamente los mismos símbolos que teoria.md.
6. ejemplos.en.md usa exactamente los mismos símbolos que ejemplos.md.
7. los gráficos usan la misma notación.
8. Toda referencia `{{f:id_formula}}` usada en cualquier `.md` o `.en.md` existe en `formulas.yaml`.
9. Toda fórmula declarada en `formulas.yaml` aparece como `{{f:id_formula}}` en `teoria.md` y en `teoria.en.md`.
10. Toda referencia `[[id_magnitud]]` usada en cualquier `.md` o `.en.md` existe en `magnitudes.yaml`.
11. Toda magnitud declarada en `magnitudes.yaml` aparece al menos una vez como `[[id_magnitud]]` en algún `.md` o `.en.md`.

**Error frecuente en reglas 10 y 11 — usar nombre en lugar de ID**:

El `[[...]]` debe contener el **ID canónico** definido en `magnitudes.yaml`, no el nombre o símbolo. El validador hace una búsqueda literal de clave.

| ❌ Incorrecto (causa FAIL) | ✅ Correcto |
|---|---|
| `[[corriente]]` | `[[I]]` |
| `[[tension]]` / `[[tensión]]` | `[[V]]` |
| `[[resistencia]]` | `[[R]]` |
| `[[potencia]]` | `[[P]]` |
| `[[energia]]` / `[[energía]]` | `[[E_kWh]]` |
| `[[tiempo]]` | `[[t_h]]` |
| `[[E]]` | `[[E_kWh]]` |
| `[[t]]` | `[[t_h]]` |

Antes de escribir cualquier `[[...]]` comprobar el `id:` exacto en `magnitudes.yaml`.

12. Toda magnitud real visible en texto explicativo debe estar marcada con `[[id_magnitud]]`; las magnitudes ficticias o variables auxiliares no declaradas deben ir como código inline, por ejemplo `` `u_aux` ``.
13. **VALIDACIÓN RENDER MATEMÁTICO - FÓRMULAS TEXTUALES**: Ningún archivo `.md` o `.en.md` contiene ecuaciones con valores numéricos escritas como `[[magnitud]] = valor = resultado`. Todas las igualdades matemáticas con resultados numéricos deben usar el formato: `{{f:id_formula}}` en línea propia, seguido de la ecuación numérica en texto plano con magnitudes etiquetadas.
14. **VALIDACIÓN RENDER MATEMÁTICO - REFERENCIAS INLINE**: Ninguna referencia `{{f:id_formula}}` aparece dentro de un párrafo de texto. Todas las referencias deben estar aisladas en su propia línea con saltos de línea antes y después.
15. **VALIDACIÓN RENDER MATEMÁTICO - ECUACIONES LATEX**: Ningún archivo usa `\(...\)` o `$...$` para ecuaciones completas con cálculos numéricos. El LaTeX inline solo debe usarse para símbolos sueltos, nunca para igualdades con valores numéricos.
16. **VALIDACIÓN ESTRUCTURA EJEMPLOS**: Los archivos `ejemplos.md` y `ejemplos.en.md` contienen EXACTAMENTE los títulos H1 especificados en las secciones 17 y 18, carácter por carácter:
    - `ejemplos.md`: `# Ejemplo tipo examen` y `# Ejemplo de aplicación real`
    - `ejemplos.en.md`: `# Exam-type example` y `# Real-world example`

Regla de excepción:

- \(dx\), \(dt\), \(dv\) no exigen entrada propia en magnitudes.yaml por ser
  diferenciales matemáticos.
- \(\Delta x\), \(\Delta t\), \(\Delta v\) sí la exigen.

---------------------------------------------------------------------