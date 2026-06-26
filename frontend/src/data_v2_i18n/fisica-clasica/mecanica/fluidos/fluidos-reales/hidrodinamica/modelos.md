# Hidrodinámica - Modelo y Validez Física

## Modelo ideal
El modelo ideal en hidrodinámica se basa en el concepto de **fluido perfecto** o fluido de Bernoulli. En este esquema, el líquido se trata como un medio continuo que se desliza sin ninguna resistencia interna (viscosidad cero) y que no puede comprimirse bajo ninguna circunstancia. Este modelo permite utilizar la ecuación de Bernoulli de forma pura, relacionando la presión, la velocidad y la altura como un sistema cerrado de energía mecánica. Es extremadamente útil para una primera aproximación en ingeniería, para entender el efecto Venturi o para el cálculo de velocidades de salida en depósitos grandes (Teorema de Torricelli). Sin embargo, ignora que en la realidad cada partícula de fluido interactúa con sus vecinas generando fricción y calor.

## Hipótesis
Para que los resultados de este modelo sean físicamente aceptables, debemos asumir las siguientes hipótesis:
1.  **Fluido incompresible**: La densidad [[rho]] se mantiene constante en todo el dominio. Esto es válido para casi todos los líquidos en condiciones normales de presión.
2.  **Flujo estacionario**: Las propiedades del fluido (velocidad [[v]], presión [[p]]) en cualquier punto del espacio no cambian con el tiempo. El "cuadro" del flujo es siempre el mismo.
3.  **Flujo irrotacional**: No hay remolinos ni vórtices a pequeña escala; las partículas no rotan sobre su propio eje.
4.  **Desprecio de la viscosidad**: Se asume que no hay pérdidas de energía por fricción interna o contra las paredes de los conductos.
5.  **Flujo a lo largo de una línea de corriente**: Las ecuaciones se aplican siguiendo el camino de una partícula específica.

## Dominio de validez cuantitativo
El modelo hidrodinámico ideal tiene un dominio de validez bien definido por parámetros adimensionales:
-   **Número de Reynolds (numero de Reynolds)**: El modelo de Bernoulli es una excelente aproximación cuando numero de Reynolds es muy grande (flujo dominado por la inercia) y estamos lejos de las paredes sólidas. Sin embargo, para numero de Reynolds < 2300 (régimen laminar), los efectos viscosos son demasiado importantes para ser ignorados.
-   **Número de Mach (Ma)**: Para que la hipótesis de incompresibilidad sea válida, la velocidad del fluido [[v]] debe ser mucho menor que la velocidad del sonido en ese medio (Ma < 0.3). En agua, esto significa velocidades inferiores a 450text{ m/s}.
-   **Escala geométrica**: El modelo funciona mejor en conductos de gran diámetro donde la relación superficie/volumen es pequeña, minimizando el impacto de la capa límite viscosa.

## Señales de fallo del modelo
Sabemos que el modelo ideal ha dejado de ser válido cuando observamos lo siguiente:
-   **Caídas de presión inesperadas**: Si la presión medida al final de una tubería es mucho menor que la calculada por Bernoulli, la viscosidad está disipando energía.
-   **Aparición de turbulencia**: Si el flujo se vuelve caótico y ruidoso, el balance de energía simple ya no puede predecir el comportamiento local.
-   **Cavitación**: Si el modelo predice presiones negativas o muy cercanas a la presión de vapor, es probable que el fluido cambie de fase, invalidando la hipótesis de medio continuo líquido.
-   **Calentamiento del fluido**: La aparición de un gradiente de temperatura indica que la energía mecánica se está transformando en energía interna (calor), algo que el modelo ideal no contempla.

## Modelo extendido o alternativo
Cuando el modelo ideal falla, recurrimos al **Modelo de Bernoulli Extendido** o a la **Ecuación de Energía de Estado Estacionario**. Este modelo incorpora el término de **pérdidas de carga** (h_L) y el trabajo de eje (h_{bomba} o h_{turbina}).
{{f:head_hidro}}
Este enfoque permite diseñar sistemas de bombeo reales donde la fricción viscosa es el factor dominante. Si el flujo es extremadamente complejo o turbulento, se deben emplear las **Ecuaciones de Navier-Stokes** promediadas (RANS) mediante simulaciones por computadora (CFD), que permiten modelar la transferencia de cantidad de movimiento a nivel de remolino.

## Comparación operativa y transición
-   **¿Cuándo cambiar de modelo?**: Se debe abandonar el modelo ideal de Bernoulli y transicionar al modelo real (con pérdidas) en cuanto la longitud del conducto supere 50 veces su diámetro, o cuando existan accesorios como codos y válvulas que disipen más del 5% de la energía total. Para fluidos muy viscosos (aceites) o regímenes de bajo Reynolds (numero de Reynolds < 2000), el modelo ideal es totalmente inválido y se debe emplear la ley de Poiseuille o modelos empíricos de fricción.
-   **Modelo Bernoulli (Ideal)**: Útil para diseño conceptual rápido y boquillas cortas.
-   **Modelo con Pérdidas (Real)**: Imprescindible para redes de distribución y bombeo de largo alcance.
-   **Modelo Computacional (CFD)**: Necesario para geometrías de válvulas y flujos con cambio de fase.
