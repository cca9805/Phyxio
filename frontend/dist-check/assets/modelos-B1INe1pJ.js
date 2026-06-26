const e=`## Modelo ideal

El modelo base para calcular [[DeltaS]] asume que el proceso es **reversible** (cuasi-estático) y que las propiedades del material ([[c_p]], [[c_v]]) permanecen constantes en todo el rango de temperaturas. En el caso del gas ideal, se asume adicionalmente que las interacciones intermoleculares son nulas y que la ecuación de estado PV = [[n]][[R]][[T]] se cumple exactamente.

La simplificación central consiste en tratar la temperatura como variable de integración continua y las capacidades caloríficas como parámetros constantes del material. Esto permite obtener expresiones analíticas cerradas (logaritmos naturales) en lugar de requerir integración numérica. Las magnitudes conservadas son [[DeltaS]] como función de estado y la masa total del sistema; las magnitudes ignoradas son las fluctuaciones microscópicas, la dependencia de [[c_p]] con [[T]] y las interacciones moleculares reales.

## Hipótesis

- **Reversibilidad del proceso**: el cálculo de [[DeltaS]] se realiza sobre un camino reversible equivalente. Si el proceso real es irreversible, se usa igualmente el camino reversible ficticio porque [[DeltaS]] es función de estado.
  - Violación: si se confunde [[Q_rev]] con el calor real en un proceso irreversible, el resultado subestima el [[DeltaS]] real del universo.

- **Capacidades caloríficas constantes**: [[c_p]] y [[c_v]] no dependen de [[T]] en el intervalo de cálculo.
  - Violación: a temperaturas muy bajas (< 50 K) las capacidades caloríficas varían fuertemente con [[T]] (ley de Debye); a temperaturas muy altas, grados de libertad vibracionales se activan y [[c_v]] aumenta.

- **Gas ideal** (cuando se aplica la fórmula general): comportamiento descrito por la ecuación de estado ideal, sin fuerzas intermoleculares relevantes.
  - Violación: gases reales a alta presión o cerca de la condensación muestran desviaciones significativas. Se necesitan correcciones tipo Van der Waals.

- **Sistema cerrado**: no hay transferencia de masa con el entorno.
  - Violación: si hay flujo de materia, se necesita el balance entrópico generalizado que incluye términos de entropía de mezcla.

- **Ausencia de cambio de fase en el intervalo** (para la fórmula de calentamiento).
  - Violación: si se cruza un punto de fusión o ebullición, aparece una discontinuidad en la entalpía que requiere tratamiento separado.

## Dominio de validez cuantitativo

Las fórmulas con [[c_p]] constante son válidas típicamente para:
- **Sólidos y líquidos**: desde unos 100 K hasta temperaturas próximas a la descomposición o cambio de fase. Para agua líquida: 273–373 K con error < 1% en [[c_p]].
- **Gases ideales**: presiones bajas, por debajo de 10 atm, y temperaturas moderadas (200-2000 K). Para aire a 1 atm, la desviación de gas ideal es menor del 0.1% entre 250 y 1000 K.

> [!NOTE]
> Para gases diatómicos como N₂ o O₂, [[c_v]] ≈ (5/2)[[R]] es válido entre 250 K y 1000 K. Por encima de 1000 K, los modos vibracionales se activan y [[c_v]] → (7/2)[[R]].

La condición cuantitativa principal es que la variación relativa de [[c_p]] en el intervalo [[[T_i]], [[T_f]]] sea menor del 5%. Si esa variación permanece por debajo del 5%, la fórmula logarítmica es una excelente aproximación.

## Señales de fallo del modelo

- **[[DeltaS]] calculado difiere más de un 10% del valor tabulado** para la misma sustancia y proceso: indica que [[c_p]] no es constante en ese rango.
- **El resultado diverge o es excesivamente grande**: posible señal de que [[T_i]] o [[T_f]] está cerca de 0 K donde el modelo falla.
- **Aparece un cambio de signo inesperado en [[DeltaS]]** cuando se espera un proceso monótono: puede indicar que el intervalo cruza un cambio de fase no contabilizado.
- **Para gas a alta presión**, si el [[DeltaS]] calculado con la fórmula ideal difiere significativamente del medido experimentalmente: indica que las interacciones intermoleculares son relevantes.
- **Si al comparar con datos de tablas termodinámicas** el error supera 5–10%, hay que sospechar que alguna hipótesis (c constante, gas ideal, ausencia de fase) no se cumple.

## Modelo extendido o alternativo

Para superar las limitaciones del modelo con [[c_p]] constante:

- **Integración con [[c_p]] dependiente de [[T]]**: usar tablas o polinomios empíricos de [[c_p]] en función de [[T]] (tipo Shomate o NASA polynomials) y evaluar la contribución entrópica por integración numérica. Este enfoque es estándar en ingeniería química y proporciona precisión del orden del 0.1%.

- **Ecuaciones de estado de gas real**: para gases no ideales, usar modelos de gas real como Van der Waals, Redlich-Kwong o Peng-Robinson. La contribución entrópica adicional depende de las interacciones y se obtiene con tablas o funciones de corrección.

Cuando conviene cambiar de modelo: si el rango cruza un cambio de fase, si [[c_p]] cambia de forma apreciable, o si el gas trabaja a presiones altas, se abandona el modelo logarítmico simple y se calcula por tramos o con tablas.

La transición del modelo ideal al extendido se justifica cuando:
- La presión supera 5–10 atm para gases.
- La temperatura varía en un rango donde [[c_p]] cambia más del 5%.
- Se requiere precisión de ingeniería (< 1% de error en [[DeltaS]]).

## Comparación operativa

| Criterio | Modelo ideal (c constante, gas ideal) | Modelo extendido (c(T), gas real) |
|---|---|---|
| **Precisión** | ±5–10% para rangos moderados de T | < 1% con polinomios validados |
| **Complejidad** | Fórmulas analíticas cerradas (logaritmos) | Integración numérica o tablas |
| **Rango de aplicación** | 200–1000 K, P < 10 atm | Todo el rango termodinámico |
| **Ventaja principal** | Cálculo rápido, comprensión intuitiva | Alta fidelidad cuantitativa |
| **Limitación principal** | Falla en extremos de T y P altas | Requiere datos tabulados o software |
| **Uso típico** | Enseñanza, estimaciones rápidas, exámenes | Diseño industrial, investigación |
`;export{e as default};
