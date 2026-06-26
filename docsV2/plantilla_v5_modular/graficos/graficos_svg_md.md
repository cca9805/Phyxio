# 23D. SVG Profile — Estándar de Sincronización Blindada v5

Un SVG profile (`*.svg.profile.jsx`) es una pieza de software físico-visual. Para alcanzar el Nivel 5, no solo debe animar, sino ser **reactivamente indistinguible** del motor de cálculo. Si el alumno cambia una masa en la calculadora, el gráfico debe mutar instantáneamente.

## 23D.1 Protocolo de "Triple Blindaje" (Magnitude Objects)

A diferencia de versiones anteriores, el motor Phyxio v2 emite magnitudes como objetos `{ value, unit }`. Un perfil que no use el blindaje fallará silenciosamente al recibir `NaN`.

**Regla obligatoria:** Usar la función `toNum` (provista por el renderer) en todas las extracciones de `p`.

```js
// CORRECTO — Extrae .value recursivamente si existe
const m = toNum(p.m, 2); 

// INCORRECTO — Se rompe si p.m es { value: 2, unit: "kg" }
const m = p.m ?? 2; 
```

## 23D.2 Detección Automática de Contexto (__calc)

El renderer v5 inyecta automáticamente metadatos de la calculadora en el campo `__calc`. El perfil debe estar preparado para usar esta información si el renderer no la procesa por defecto.

-   **Título de Fórmula**: El renderer v5 extrae `sharedParams.__calc.formulaTitle` y lo pasa como `formulaLabel` al panel lateral.
-   **Regla de UI**: No renderizar el título de la ecuación DENTRO del SVG. El estándar v5 delega los metadatos de texto al panel lateral (`Aside`) para mantener el lienzo SVG limpio para la física.

## 23D.3 Esquema de Parámetros — Registro de Sincronización

Para que una variable (ej: $I$) se muestre en la lista de datos sincronizados del gráfico, **DEBE** figurar en el `schema` del perfil, aunque no tenga slider.

**Regla:** Incluir todos los IDs de `magnitudes.yaml` que la calculadora emita y el gráfico use.
```js
{
  key: "I",
  aliases: ["I_izq", "I_der"],
  label: { es: "Momento de Inercia", en: "Moment of Inertia" },
  unit: "kg·m²",
  // Si no quieres slider, el renderer lo ocultará si no tiene min/max definidos
}
```

## 23D.4 Indicador de Salud (SYNC OK)

Todo gráfico conectado debe incluir un indicador visual de estado en la esquina superior derecha (Dashboard Mode).

**Regla de Implementación:**
1. Solo visible si existe `label` (fórmula activa).
2. Posición: Esquina superior derecha.
3. Color: `#22c55e` (Verde éxito).

```jsx
{label && (
  <g transform="translate(760, 25)">
    <circle cx="12" cy="0" r="3.5" fill="#22c55e" />
    <text x="22" y="1" fontSize="9" fill="#22c55e" fontWeight="900">SYNC OK</text>
  </g>
)}
```

## 23D.5 Conexión Bidireccional (Calculator Link)

El gráfico no es un vídeo, es un experimento. El usuario debe poder mover los sliders y "Empujar" esos valores a la calculadora.

**Regla de Wrapper:**
El archivo `NombreLeafSvg.jsx` debe inyectar `onSharedParamsChange` (desde los props del leaf) en el renderer:
```jsx
<SvgProfileRenderer
  profile={profile}
  sharedParams={sharedParams}
  onApplyToCalculator={onSharedParamsChange} // Crucial para el botón "Aplicar"
/>
```

## 23D.6 Lista de Verificación SVG v5

- [ ] Usa `toNum(p.variable, default)` para blindar contra objetos de magnitud.
- [ ] No renderiza el título de la ecuación dentro del SVG (está en el `Aside`).
- [ ] Muestra el badge **SYNC OK** arriba a la derecha cuando hay conexión.
- [ ] Los parámetros de la calculadora tienen `aliases` que coinciden con `formulas.yaml`.
- [ ] El botón "↑ Aplicar" funciona y actualiza la calculadora del leaf.
- [ ] Las variables derivadas (derivations) reportan resultados coherentes a `interpretation_binding`.
- [ ] Declara `infoCards` con al menos una tarjeta (ver 23D.8).

## 23D.8 `infoCards` obligatorias en el panel lateral (CRÍTICO)

Todo profile SVG debe declarar un array `infoCards` con al menos una tarjeta.
Estas tarjetas pueblan la sección ANÁLISIS del panel lateral (`AsidePanel`)
del `SvgProfileRenderer`. Sin `infoCards`, la columna derecha queda vacía y
el alumno pierde la lectura rápida del gráfico.

Estructura mínima de una tarjeta:

```js
{
  key: "reading",                                    // identificador único
  label: { es: "Lectura actual", en: "Current reading" },  // título bilingüe
  highlight: "p = m·v",                              // fórmula destacada (opcional)
  highlightColor: "#86efac",                          // color del highlight (opcional)
  description: {                                      // texto explicativo bilingüe (opcional)
    es: "El momento lineal es el producto de masa y velocidad.",
    en: "Linear momentum is the product of mass and velocity.",
  },
  lines: ({ p, state, lang }) => [                    // líneas dinámicas (opcional)
    `m = ${fmt(safeNum(p?.m, 4), 1, lang)} kg`,
  ],
  result: ({ p, state, lang }) => `p = ... kg·m/s`,  // resultado destacado (opcional)
  resultColor: "#34d399",                             // color del resultado (opcional)
}
```

Reglas:

- El profile debe tener al menos 1 card con `key` y `label` bilingüe.
- Se recomienda incluir una card de tipo "lectura actual" con `lines` y `result`
  que muestre los valores calculados en tiempo real.
- Los textos de `label` y `description` deben ser bilingües reales (es/en).

Regla de rechazo:

Si el profile no declara `infoCards` o el array está vacío, el gráfico SVG
no cumple el estándar Nivel 5 y la columna lateral quedará muda.

## 23D.7 Regla anti-reutilización ciega (CRÍTICO)

Un SVG de Nivel 5 no puede resolverse importando un profile ajeno solo porque “se parece”.

Reglas obligatorias:

- cada leaf con `Svg` debe tener un wrapper propio del leaf y un `profile` semánticamente propio
- `profile.meta.leafId` debe coincidir exactamente con el `id` del leaf
- el `title`, `subtitle`, `schema`, `derivations` e `interpretation_binding` del profile deben corresponder al núcleo físico del leaf, no al de otro leaf parecido
- el wrapper debe pasar `onApplyToCalculator={onSharedParamsChange}` al renderer
- un mismo componente `Svg` no puede registrarse para dos leafs distintos si eso elimina especificidad física o didáctica

No se admite:

- reutilizar un profile de otro leaf cambiando solo el título visible
- reutilizar un profile cuyo `leafId` no coincide con el leaf actual
- reutilizar una escena genérica que no represente magnitudes, relaciones o estados propios del leaf
- entregar un SVG correcto técnicamente pero intercambiable con el de otro leaf sin pérdida real de identidad física

Regla de rechazo duro:

Si un SVG puede reasignarse a otro leaf cercano sin cambios sustantivos en profile, semántica o lectura didáctica, no cumple Nivel 5.

Regla de rechazo:
Un gráfico que no reacciona a la calculadora o que muestra `NaN` por no estar blindado no puede superar el Nivel 4.7.
 profile

Antes de dar por integrado un profile SVG con la calculadora:

- [ ] El `key` o al menos un `alias` de cada param incluye el nombre exacto emitido por la calculadora (verificar en `formulas.yaml` los `target` de los rearrangements)
- [ ] `Math.abs()` aplicado en `computeState`, `derivations` y `render` donde la convención de la fórmula produce negativos
- [ ] El wrapper pasa `onApplyToCalculator={onSharedParamsChange}` (no una función interna)
- [ ] El botón "↑ Aplicar" está visible en ambos modos del panel
- [ ] El click del botón llama `resetToCalculator()` después de aplicar
- [ ] `interpretation_binding.paramsIn` usa los keys internos del profile, no los alias
- [ ] La animación cambia visiblemente al cambiar el resultado de la calculadora

Regla de rechazo:

Si los valores calculados no cambian la animación, la integración no está completa
y el gráfico SVG no cumple el estándar funcional de Nivel 5.

---------------------------------------------------------------------