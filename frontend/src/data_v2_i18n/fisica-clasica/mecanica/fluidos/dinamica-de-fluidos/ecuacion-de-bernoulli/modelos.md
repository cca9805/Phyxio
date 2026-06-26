# Ecuación de Bernoulli — Modelo y validez

El modelo de Bernoulli conecta presión [[p]], velocidad [[v]] y cota [[z]] en un balance de energía cerrado. La clave no es memorizar una fórmula sino saber qué hipótesis la hacen válida y cuándo conviene pasar a una versión más realista.

## Modelo ideal

El modelo base aplica 
{{f:head}} 
a un flujo estacionario, incompresible e inviscido. En este marco la altura de energía [[H]] se conserva entre dos puntos de la misma línea de corriente: toda la energía mecánica del fluido (presión, cinética y potencial) se redistribuye sin pérdidas.

Físicamente, el modelo interpreta el conducto como un convertidor reversible entre energía de presión y energía cinética. No niega la existencia de viscosidad o turbulencia; simplemente las descarta para aislar el mecanismo central de conservación energética.

## Hipótesis

El modelo ideal funciona bien si se cumplen estas hipótesis simultáneamente:

1. **Fluido incompresible**: la densidad [[rho]] se trata como constante. Excelente en líquidos y razonable en gases con Ma < 0{,}3.
2. **Flujo estacionario**: las magnitudes no cambian apreciablemente con el tiempo en ningún punto fijo.
3. **Fluido inviscido**: no hay fricción interna ni pérdidas de carga. Toda la energía mecánica se conserva.
4. **Aplicación sobre una línea de corriente**: los puntos comparados pertenecen a la misma trayectoria de partícula.

## Dominio de validez cuantitativo

Aunque el modelo es conceptual, conviene asociarlo a criterios observables:

- Ma < 0{,}3: velocidades menores de ~102 m/s en aire a 20 °C. Por encima, la variación de densidad supera el 5 % y la hipótesis de incompresibilidad falla.
- Número de Reynolds alto (Re > 10^4): fuera de la capa límite la viscosidad no domina y la ecuación es aplicable.
- Ángulo de expansión del difusor menor de ~15°: si se supera, la capa límite se separa e invalida la lectura de línea de corriente.
- Presión estática en todo punto por encima de la presión de vapor del fluido (para evitar cavitación).

## Señales de fallo del modelo

El modelo ideal ha fallado cuando se observan estas señales:

- La presión calculada resulta negativa en valor absoluto: cavitación inminente o error de datos.
- La velocidad calculada supera 100 m/s en aire (Ma > 0{,}3): la hipótesis de incompresibilidad se rompe.
- La energía total [[H]] calculada **aumenta** en la dirección del flujo sin que haya bomba: viola la segunda ley de la termodinámica.
- Presencia de codos, válvulas o expansiones bruscas que generan pérdidas locales no despreciables.
- El resultado es hipersensible a variaciones mínimas del dato de entrada.

## Modelo extendido o alternativo

Cuando el modelo ideal no es suficiente, el paso natural es ampliarlo:

- **Bernoulli con pérdidas (Darcy-Weisbach)**: se añade un término de pérdida de carga dependiente de la longitud, el diámetro y el cuadrado de la velocidad. Requiere un factor de fricción que depende del número de Reynolds y de la rugosidad relativa.
- **Bernoulli con máquinas**: cuando hay bomba se añade h_p > 0; cuando hay turbina se resta h_t > 0.
- **Bernoulli compresible**: para gases a velocidades superiores a Ma 0,3 se usa una forma isentrópica que incorpora la razón de calores específicos.

## Transición explícita entre modelos

La decisión práctica puede resumirse así:

- Si el objetivo es entender el mecanismo físico o hacer una estimación inicial, empezar por Bernoulli ideal.
- Si se necesita precisión en tuberías reales, pasar al modelo con pérdidas de carga (Darcy-Weisbach). El criterio de cambio es que las pérdidas de carga representen más de un 5 % de la diferencia de cota o de presión disponible.
- Si la velocidad del gas supera Ma 0,3 o aparecen efectos térmicos, migrar al modelo compresible.
- Si se requiere un análisis completo con perfiles de velocidad, recirculaciones o separación, usar las ecuaciones de Navier-Stokes o CFD.

## Comparación operativa

| Opción | Ventaja principal | Limitación principal | Cuándo conviene |
|---|---|---|---|
| Bernoulli ideal | Sencillo, analítico, rápido | Ignora viscosidad y pérdidas | Estudio conceptual y primera estimación |
| Bernoulli con pérdidas | Incluye fricción real | Requiere f y datos del conducto | Redes de tuberías industriales |
| Ecuaciones de Navier-Stokes | Completo, incluye viscosidad | Muy complejo, raramente analítico | Investigación, CFD, diseño preciso |
| Modelo potencial | Flujos externos alrededor de sólidos | No capta separación ni turbulencia | Aerodinámica de bajo ángulo de ataque |

