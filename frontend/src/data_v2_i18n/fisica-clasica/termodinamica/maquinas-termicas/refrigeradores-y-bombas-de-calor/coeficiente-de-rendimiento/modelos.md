# Modelos — Coeficiente de rendimiento

## Modelo ideal

El modelo ideal es el ciclo de Carnot invertido que opera entre dos focos térmicos a temperaturas absolutas [[T_H]] y [[T_C]]. Este modelo asume reversibilidad total: compresión y expansión isentrópicas, intercambio de calor isotérmico en evaporador y condensador, sin fricción, sin caídas de presión y sin diferencias finitas de temperatura entre el fluido y los focos. El COP de Carnot de refrigeración es [[T_C]] dividido entre la diferencia [[T_H]] menos [[T_C]], y el COP de Carnot de bomba de calor es [[T_H]] dividido entre la misma diferencia. Este modelo proporciona el límite superior absoluto de eficiencia para cualquier refrigerador o bomba de calor que opere entre los mismos focos.

## Hipótesis

Las hipótesis del modelo ideal son cinco. Primera, los focos térmicos tienen capacidad calorífica infinita y mantienen temperaturas constantes [[T_H]] y [[T_C]]. Segunda, todos los procesos del ciclo son internamente reversibles. Tercera, no hay fricción ni pérdidas mecánicas en el compresor. Cuarta, el intercambio de calor ocurre isotérmicamente sin diferencia de temperatura entre el fluido y el foco. Quinta, no hay caídas de presión en tuberías ni intercambiadores.

## Dominio de validez cuantitativo

El modelo de Carnot es una cota superior, no una predicción de rendimiento real. Para sistemas de refrigeración doméstica con [[T_C]] de 255 K y [[T_H]] de 308 K, el COP de Carnot es 4.8 mientras que el COP real oscila entre 2 y 3, representando un 40 a 60 % del valor teórico. Para bombas de calor geotérmicas con [[T_C]] de 283 K y [[T_H]] de 318 K, el COP de Carnot es 9.1 y el real entre 3.5 y 5. Como criterio cuantitativo, si el COP medido supera el 65 % del COP de Carnot entre las mismas temperaturas, los datos de entrada deben revisarse. El modelo es universalmente válido como referencia comparativa siempre que las temperaturas estén en kelvin y la diferencia sea positiva.

## Señales de fallo del modelo

El modelo falla cuando el COP real supera el de Carnot, lo que indicaría violación de la segunda ley o error en los datos. También falla como predicción cuantitativa cuando las irreversibilidades son grandes: ciclos con compresión húmeda, expansión a través de válvulas de estrangulamiento (no isentrópicas), o intercambiadores con diferencias de temperatura superiores a 10 K entre fluido y foco.

## Modelo extendido o alternativo

El modelo extendido más utilizado es el ciclo de compresión de vapor con refrigerante real, que sustituye las isotermas de Carnot por procesos con cambio de fase. Este modelo incluye sobrecalentamiento en el evaporador, subenfriamiento en el condensador, compresión no isentrópica con rendimiento isentrópico del compresor, y expansión isoentálpica a través de una válvula de estrangulamiento. El COP del ciclo de compresión de vapor real es típicamente un 30 a 60 % del COP de Carnot, dependiendo del refrigerante, las condiciones de operación y la calidad del equipo.

Cuando conviene cambiar de modelo: conviene pasar al ciclo de compresión de vapor cuando se necesitan estimaciones cuantitativas del COP real para dimensionar componentes, cuando las irreversibilidades del sistema son significativas, o cuando se requiere evaluar refrigerantes específicos.

## Comparación operativa

| Aspecto | Modelo de Carnot | Ciclo de compresión de vapor real |
|---|---|---|
| Compresión | isentrópica (reversible) | no isentrópica con rendimiento del 70 al 85 % |
| Intercambio de calor | isotérmico, sin diferencia de temperatura | con diferencia finita de 5 a 15 K |
| Expansión | isentrópica (reversible) | isoentálpica a través de válvula, irreversible |
| Fluido de trabajo | gas ideal | refrigerante real con cambio de fase |
| COP típico | cota superior teórica | 30 a 60 % del valor de Carnot |
| Utilidad | referencia y comparación | diseño e ingeniería de sistemas reales |
