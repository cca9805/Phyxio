# Modelos — Ejemplos prácticos

## Modelo ideal

El modelo ideal para los ejemplos prácticos es el ciclo de Carnot invertido que opera entre dos focos térmicos a temperaturas absolutas [[T_H]] y [[T_C]]. Este modelo proporciona el [[COP_Carnot]] como límite superior absoluto de eficiencia. La simplificación central es la reversibilidad total: compresión y expansión isentrópicas, intercambio isotérmico de calor sin diferencias finitas de temperatura. Las magnitudes conservadas son la energía total (primera ley) y la entropía del universo (segunda ley en igualdad). El modelo permite calcular el techo de [[COP_real]] sin especificar refrigerante ni detalles de componentes.

## Hipótesis

- Los focos térmicos tienen capacidad calorífica infinita y mantienen temperaturas constantes [[T_H]] y [[T_C]] durante la operación.
- Todos los procesos del ciclo son internamente reversibles.
- No hay fricción mecánica ni pérdidas eléctricas en el compresor.
- El intercambio de calor es isotérmico con diferencia infinitesimal de temperatura.
- No hay caídas de presión en tuberías ni intercambiadores.

## Dominio de validez cuantitativo

Para refrigeradores domésticos con [[T_C]] de 255 K y [[T_H]] de 308 K, el [[COP_Carnot]] es 4.81 mientras que el [[COP_real]] típico oscila entre 2 y 3, representando una [[eta_Carnot]] del 40 a 62 %. Para bombas de calor geotérmicas con [[T_C]] de 283 K y [[T_H]] de 318 K, el [[COP_Carnot]] de refrigeración es 8.1 y el [[COP_real]] entre 3.5 y 5. Como criterio cuantitativo, si [[eta_Carnot]] supera el 65 %, los datos de entrada deben revisarse porque es poco probable que un sistema real supere esa fracción.

## Señales de fallo del modelo

El modelo falla como predicción cuantitativa cuando las irreversibilidades son grandes: compresores con rendimiento isentrópico inferior al 70 %, intercambiadores con diferencias de temperatura superiores a 15 K entre refrigerante y foco, o válvulas de expansión con pérdidas significativas. También falla cuando las temperaturas de los focos varían significativamente durante la operación, como en sistemas de descongelación cíclica o en bombas de calor aerotérmicas con variaciones climáticas rápidas.

## Modelo extendido o alternativo

El modelo extendido es el ciclo de compresión de vapor con refrigerante real, que incluye sobrecalentamiento en el evaporador, subenfriamiento en el condensador, compresión con rendimiento isentrópico del 70 al 85 %, y expansión isoentálpica a través de la válvula. Este modelo produce valores de COP entre el 30 y 60 % del COP de Carnot.

Cuando conviene cambiar de modelo: conviene pasar al ciclo de compresión de vapor cuando se necesita dimensionar componentes reales, cuando se evalúan refrigerantes específicos o cuando la fracción de Carnot medida es significativamente menor que el 30 %, indicando que factores adicionales (fugas, descongelación, pérdidas en ventiladores) deben modelarse explícitamente.

## Comparación operativa

| Aspecto | Modelo de Carnot | Ciclo de compresión de vapor real |
|---|---|---|
| Compresión | isentrópica | rendimiento isentrópico del 70 al 85 % |
| Intercambio de calor | isotérmico, sin diferencia | diferencia finita de 5 a 15 K |
| Expansión | isentrópica | isoentálpica, irreversible |
| Fluido | gas ideal | refrigerante real con cambio de fase |
| COP típico | cota superior teórica | 30 a 60 % del Carnot |
| Uso | referencia y comparación | diseño de sistemas reales |
