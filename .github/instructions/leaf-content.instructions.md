---
description: "Use when creating or editing leaf content files: teoria.md, ejemplos.md, modelos.md, errores.md, aplicaciones.md, historia.md and their .en.md counterparts, as well as formulas.yaml, magnitudes.yaml, interpretacion.yaml and meta.yaml. Covers formula injection, magnitude tagging, LaTeX rules, YAML sync, and Nivel 5 requirements."
applyTo: ["**/data_v2_i18n/**/*.md", "**/data_v2_i18n/**/*.yaml"]
---

# Phyxio — Reglas para archivos de contenido de leaf

Referencia completa: [docsV2/plantilla_v5.md](../../docsV2/plantilla_v5.md) · [docsV2/protocolo_v5.md](../../docsV2/protocolo_v5.md) · [docsV2/checklist_v5.md](../../docsV2/checklist_v5.md)

---

## Inyección de fórmulas `{{f:id}}`

- **SIEMPRE** en línea propia, con línea en blanco antes y después:
  ```md
  El desplazamiento es el área bajo la curva:

  {{f:desplazamiento_area_v_t}}

  donde el intervalo...
  ```
- **NUNCA** inline dentro de un párrafo: `... el área {{f:desplazamiento_area_v_t}} se calcula...` → RECHAZADO.
- **NUNCA** usar `$$ ... $$` manual para fórmulas que ya existen en `formulas.yaml`.
- En `teoria.md` / `teoria.en.md` → cada `id` declarado en `formulas.yaml` debe aparecer como `{{f:id}}`.
- Fórmulas de otro leaf (transversales): escribir en texto plano con magnitudes etiquetadas, ej. `[[F]] = [[m]]·[[a]]`.

## Marcado de magnitudes `[[id_magnitud]]`

- Toda magnitud física en `.md` / `.en.md` se envuelve en `[[id_magnitud]]`.
- El ID debe coincidir exactamente con el definido en `magnitudes.yaml`.
- Variables auxiliares que **no** están en `magnitudes.yaml` → código inline `` `u_aux` `` (NUNCA `[[u_aux]]`).
- Sintaxis con etiqueta personalizada: `[[$\rho_1$|rho]]` o `[[Velocidad inicial|v]]`.
- Índice o variante: `[[rho1]]` solo si `rho1` existe en `magnitudes.yaml`.

## LaTeX inline

- Fragmentos matemáticos no completos: `$ ... $` o `\( ... \)`.
- Comandos LaTeX (`\alpha`, `\frac`, `\cdot`, `\omega`…) **deben** ir dentro de delimitadores math.
- Unidades compuestas: `\(\mathrm{kg\cdot m^2}\)` (notación robusta).
- Prohibido: símbolos Unicode sueltos (√, ∞, ∑, ≈, →) en contexto físico explicativo.

## Sincronización entre YAMLs

| Regla | Detalle |
|---|---|
| IDs idénticos en todos los archivos | `acm` ≠ `a_cm` bloquea el leaf en nivel < 4.7 |
| `formulas.yaml` → `result_semantics.target` | Debe existir en `magnitudes.yaml` |
| `interpretacion.yaml` → `dependencies.formulas` | IDs reales de `formulas.yaml` |
| `interpretacion.yaml` → `dependencies.magnitudes` | IDs reales de `magnitudes.yaml` |

## meta.yaml

- Extraer `id`, `titulo`, `titulo_en`, `ruta_relativa`, `orden`, `type`, `niveles`, `icon`, `graficos`, `physical_role` del mapa (`phyxio-map.yaml`). **Nunca redactar desde cero.**
- `representacion_dominante`: debe coincidir con el primer elemento de `graficos` (`Coord | Svg | Dcl | none`).
- `magnitud_dominante`: ID existente en `magnitudes.yaml`.
- `pregunta_fisica_central.es` y `.en`: con signos de interrogación (`¿…?` / `…?`), no un título reformulado.

## Bilingüismo

- Archivos `.md` → español con ortografía revisada.
- Archivos `.en.md` → inglés técnico de alto nivel. El contenido debe ser equivalente, no una traducción literal plana.
- Los mismos IDs de magnitudes y fórmulas se usan en ambas versiones.

## Validación

```bash
python tools/phyxio_leaf_validator.py <ruta-al-leaf>
```

Un leaf alcanza Nivel 5 solo cuando supera la validación completa (estructura + coherencia simbólica + densidad + bilingüismo + semántica operativa).
