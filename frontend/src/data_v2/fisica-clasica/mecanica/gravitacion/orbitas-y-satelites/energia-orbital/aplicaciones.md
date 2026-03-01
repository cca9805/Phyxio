# Aplicaciones

## Dónde se aplica energía orbital
- Evaluación de estabilidad de satélites en diferentes altitudes.
- Cálculo preliminar de transferencias entre órbitas (coste energético).
- Clasificación rápida de trayectorias ligadas y de escape.
- Estimación de márgenes de misión ante variaciones de velocidad.
- Diseño de maniobras de inserción y elevación orbital.

## Qué decisiones habilita
- Determinar si una condición \((r,v)\) corresponde a órbita ligada o no.
- Estimar semieje mayor \(a\) desde energía específica.
- Cuantificar energía total real para dimensionar maniobras.

## Flujo técnico típico
1- Calcular energía específica:

$$
\varepsilon=\frac{v^2}{2}-\frac{GM}{r}
$$

2- Clasificar por signo de \(\varepsilon\).
3- Si es ligada, obtener \(a=-GM/(2\varepsilon)\).
4- Traducir resultado a criterio operativo (estabilidad, coste de maniobra, riesgo de escape).

## Valor didáctico
Este enfoque evita resolver toda la órbita punto a punto y permite interpretar el estado orbital con una sola magnitud física clave: la energía específica.
