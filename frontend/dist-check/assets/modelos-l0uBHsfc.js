const e=`# Poleas - Modelos y validez

## Modelo ideal

El modelo ideal de la polea asume que la cuerda es inextensible, la masa de todas las poleas es despreciable frente a la carga y no existe rozamiento en los ejes de giro. Bajo estas condiciones la tensión es la misma en toda la cuerda, y el equilibrio estático se reduce a una relación lineal entre el esfuerzo [[P]], la carga [[W]] y el número de tramos efectivos [[n]].

{{f:ley_polea_ideal}}

Este modelo captura la esencia geométrica de las poleas: el sistema no crea energía, sino que intercambia fuerza por recorrido. La ventaja mecánica [[VM]] es exactamente igual a [[n]], y la relación de desplazamientos es proporcional con el mismo factor.

## Hipótesis

- **Cuerda inextensible**: la longitud de la cuerda no varía con la tensión. Si se viola, el recorrido real del operador será mayor que [[n]] · [[sW]] durante los primeros instantes.
- **Poleas sin masa**: cada polea móvil añadida no aporta peso propio al sistema. Si se viola, el operador debe vencer también la gravedad de las propias poleas.
- **Rozamiento nulo**: la tensión es uniforme a lo largo de toda la cuerda. Si se viola, la tensión disminuye progresivamente entre el punto de aplicación y la carga, haciendo necesario el modelo con rendimiento.
- **Velocidad constante o estática**: la aceleración del sistema es nula. Si se viola, las fuerzas de inercia modifican el balance y el problema pasa a ser dinámico.
- **Poleas coplanares**: todos los tramos de cuerda son paralelos o el análisis geométrico es directo. Si se viola, los ángulos de desviación deben tratarse con trigonometría vectorial.

## Dominio de validez cuantitativo

El modelo ideal es aplicable cuando se cumplen simultáneamente:

- Velocidad de elevación menor que 0,5 m/s: el rozamiento dinámico en los ejes es despreciable.
- La carga [[W]] supera 20 veces la masa de cada polea móvil: el peso propio de las poleas representa menos del 5 % de la carga total.
- Número de tramos [[n]] ≤ 8: con más tramos la rigidez del cable y el peso acumulado de cuerdas y poleas ya no son despreciables.
- Rendimiento medido del sistema mayor que 0,95: el modelo ideal sobreestima la fuerza real en menos del 5 %.

Por debajo de estas condiciones el error sistemático supera el 5 % y conviene cambiar al modelo con rendimiento [[eta]].

## Señales de fallo del modelo

- El esfuerzo [[P]] medido en el extremo de la cuerda es notablemente mayor que [[W]] / [[n]]: indica pérdidas por rozamiento no contempladas.
- La carga no sube aunque el esfuerzo supere el valor teórico de equilibrio: síntoma de rozamiento estático elevado o de autobloqueo del sistema.
- El recorrido real de cuerda recogida es mayor que [[n]] · [[sW]]: apunta a una cuerda elástica o a holguras mecánicas en los ejes.
- La temperatura de los ejes de las poleas aumenta durante la operación: la fricción disipada en calor no está representada en el modelo ideal.
- En polispastos de muchos tramos, la carga medida en el gancho es inferior a [[W]]: el peso de los propios cables suma a la carga útil.

## Modelo extendido o alternativo

El modelo extendido introduce el rendimiento mecánico [[eta]] para representar las pérdidas reales. El esfuerzo necesario aumenta en un factor 1/[[eta]]:

{{f:ley_polea_real}}

El rendimiento [[eta]] agrupa en un único parámetro el rozamiento en los ejes, la rigidez de la cuerda al doblarse en cada polea y las holguras mecánicas. En aplicaciones industriales habituales de polispastos con grasa, [[eta]] oscila entre 0,80 y 0,95. El modelo extendido es válido para la mayoría de cálculos de ingeniería siempre que [[eta]] sea conocido o estimado.

Más allá del modelo con rendimiento existe el modelo dinámico completo, que añade las ecuaciones de movimiento rotacional de cada polea y la ecuación de Newton para la aceleración de la carga. Ese modelo es necesario cuando la aceleración del sistema supera 0,1 m/s².

## Comparación operativa

| Criterio | Modelo ideal | Modelo con rendimiento |
|---|---|---|
| Esfuerzo calculado | W dividido entre n | W dividido entre n·η |
| Precisión | Exacta solo si η ≈ 1 | Correcta para sistemas reales |
| Parámetros necesarios | W, n | W, n, η |
| Complejidad | Mínima | Baja |
| Rango de aplicación | Laboratorio, estimación rápida | Ingeniería operativa, diseño |
| Cuándo usarlo | η > 0,95 o cálculo preliminar | η < 0,95 o diseño de seguridad |

El modelo ideal es el punto de partida pedagógico obligatorio. El modelo con rendimiento es el estándar para cualquier dimensionamiento real de motores, actuadores o sistemas de elevación industrial.

`;export{e as default};
