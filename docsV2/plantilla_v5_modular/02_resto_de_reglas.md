# 25. Control anti-mojibake y control textual

Antes de cerrar el leaf:

- revisar codificación UTF-8
- revisar caracteres corruptos
- revisar tildes, comillas y signos
- revisar consistencia de títulos
- revisar que no haya fragmentos en idioma incorrecto
- revisar cada archivo del leaf (todos los `.md` y `.yaml`) para eliminar
  mojibake antes de validar

Regla de puntuación:

- si un archivo contiene mojibake, ese archivo resta puntuación en el validador
  (no se admite “aprobado parcial” por promedio textual)

Secuencias a eliminar:

- Ã¡
- Ã©
- Ã­
- Ã³
- Ãº
- â€“
- â€”
- ðŸ

---------------------------------------------------------------------

---------------------------------------------------------------------

# 26. Validación final obligatoria

Antes de considerar el leaf finalizado, debe cumplirse TODO lo siguiente:

✓ 16 archivos exactos
✓ meta.yaml completo y coherente
✓ interpretacion.yaml completo y coherente
✓ meta.yaml alineado con `phyxio-map.yaml`
✓ todas las magnitudes reales definidas en `magnitudes.yaml`; variables auxiliares o ficticias en Markdown como código inline
✓ magnitudes.yaml con campos de interpretación física completos
✓ formulas.yaml sin mezclar relaciones incompatibles
✓ formulas.yaml con semántica interpretativa evaluable
✓ teoria.md entre 1200 y 2000 palabras
✓ teoria.en.md completa y en inglés real
✓ teoria.md con encabezados exactos y prefijos emoji obligatorios
✓ teoria.md con `## Orden de magnitud` al nivel correcto
✓ modelos.md ≥ 400 palabras
✓ modelos.en.md completo y en inglés real
✓ modelos.md con `Dominio de validez cuantitativo` realmente cuantitativo
✓ errores.md ≥ 500 palabras y con 5 bloques realmente desarrollados
✓ errores.en.md completo y en inglés real
✓ errores/modelos/historia sin numeración en encabezados
✓ ejemplos.md ≥ 800 palabras, con 2 ejemplos completos y personalizados
✓ ejemplos.en.md completo y en inglés real
✓ ejemplos conectados con la teoría del leaf
✓ aplicaciones.md ≥ 800 palabras y con 5 aplicaciones desarrolladas
✓ aplicaciones.en.md completo y en inglés real
✓ historia.md ≥ 300 palabras
✓ historia.en.md completo y en inglés real
✓ historia.en.md ≥ 250 palabras
✓ coherencia simbólica total
✓ dimensiones correctas
✓ ausencia de comandos LaTeX fuera de delimitadores matemáticos en todos los `.md`
✓ ausencia de patrones de unidad no robustos (ejemplo a evitar: `\text{kg \cdot m}^2`)
✓ ausencia de placeholders, TODOs o texto vacío
✓ ausencia de párrafos largos duplicados y frases repetidas mecánicamente
✓ ausencia de mojibake en cada archivo del leaf
✓ ausencia de listas desnudas donde deba haber desarrollo
✓ títulos y subtítulos de cada archivo deben coincidir exactamente con la estructura obligatoria propuesta en cada sección de archivo
✓ coverage: magnitudes y fórmulas núcleo presentes en teoría, ejemplos e interpretación
✓ markdown_entities: fórmulas y magnitudes sincronizadas bidireccionalmente entre `.md`/`.en.md`, `formulas.yaml` y `magnitudes.yaml`
✓ didactic_contract: teoría, ejemplos, interpretación y gráficos explican el mismo núcleo físico
✓ learning_dynamics: progresión real esencial → formal → estructural
✓ cognitive_load: sin saturación prematura en nivel esencial ni salto brusco de densidad

Validación funcional reforzada:

✓ cálculo funcional
✓ interpretación inline funcional
✓ tab de interpretación funcional
✓ lectura gráfica coherente cuando exista soporte gráfico
✓ coherencia cálculo → interpretación → gráfico
✓ ids consistentes entre meta, magnitudes, fórmulas, interpretación y frontend
✓ `interpretacion.yaml` con los 7 bloques operativos por target
✓ `dependencies.formulas` y `dependencies.magnitudes` apuntan solo a ids reales

Regla de rechazo duro:

Si la interpretación puede eliminarse sin afectar al funcionamiento del leaf, el leaf no está a Nivel 5.

---------------------------------------------------------------------

---------------------------------------------------------------------

# 27. Regla de cierre

Un leaf no está a nivel 5 por “parecer completo”, sino por superar todas las
reglas estructurales, simbólicas, bilingües, históricas, didácticas, de
densidad y de integración definidas en esta plantilla.

Criterio final reforzado:

- El objetivo de cierre es siempre Nivel 5 real, no una versión intermedia del leaf.
- Sin checklist final completo no existe cierre válido del leaf.
- Si el leaf no declara gráficos, debe cerrar igualmente con cálculo, interpretación y semántica YAML plenamente operativos.
- Si el leaf declara gráficos, el Nivel 5 exige además integración real y coherente entre cálculo, interpretación y lectura gráfica.