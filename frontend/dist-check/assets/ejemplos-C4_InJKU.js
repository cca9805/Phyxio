const e=`# Ejemplo tipo examen

## Enunciado

Una bobina generadora plana gira en un campo magnético uniforme. Tiene 200 espiras, área efectiva de 0.015 m² por espira, campo de 0.25 T y velocidad angular de 120 rad/s. En otra prueba, el flujo enlazado cambia 0.12 Wb durante 0.050 s. El eje recibe 85 W de potencia mecánica y el rendimiento medido es del 78 %. Estima el flujo máximo, la amplitud de fem, la fem media de la prueba y la potencia eléctrica útil.

## Datos

- Número de espiras: 200
- Área efectiva: 0.015 m²
- Campo magnético: 0.25 T
- Velocidad angular: 120 rad/s
- Cambio de flujo: 0.12 Wb
- Intervalo temporal: 0.050 s
- Potencia mecánica de entrada: 85 W
- Rendimiento: 0.78

## Definición del sistema

El sistema es la bobina giratoria y su eje mecánico. La interacción física relevante es la variación de [[Phi_B]] al rotar en el campo. La salida eléctrica se interpreta primero como [[epsilon_0]] ideal y después como [[P_elec]] útil cuando se incluyen pérdidas mediante [[eta]].

## Modelo físico

Usamos un generador sinusoidal ideal para la fem máxima y una lectura media de Faraday para la prueba de cambio de flujo. El modelo incluye [[N]], [[B]], [[A]], [[omega]], [[DeltaPhi_B]], [[Delta_t]], [[P_mec]] y [[eta]]. La potencia útil se calcula después de la inducción, porque tensión inducida y potencia entregada no son la misma magnitud.

## Justificación del modelo

El modelo vale porque el enunciado describe campo uniforme, bobina plana y velocidad angular dada. Dejaría de valer si la carga provocara una caída terminal grande, si el núcleo estuviera saturado o si la velocidad variara mucho durante la vuelta. Para potencia, no se supone conversión perfecta: el rendimiento ya corrige las pérdidas globales.

## Resolución simbólica

Primero se estima el flujo máximo enlazado:

{{f:flujo_maximo_generador}}

Después se obtiene la amplitud de la fem ideal:

{{f:amplitud_fem_generador}}

Para la prueba de cambio de flujo se usa la fem media:

{{f:fem_media_generador}}

El rendimiento compara salida útil con entrada mecánica:

{{f:eficiencia_generador}}

La potencia útil se obtiene aplicando ese rendimiento a la entrada:

{{f:potencia_util_generador}}

## Sustitución numérica

Multiplicar 200 espiras por 0.25 T y por 0.015 m² da 0.75 Wb. Por tanto [[Phi_B]] ≈ 0.75 Wb.

Multiplicar ese enlace geométrico por 120 rad/s da 90 V. Así [[epsilon_0]] ≈ 90 V para la señal ideal.

Dividir el cambio de flujo de 0.12 Wb entre 0.050 s da 2.4 V. Por tanto [[epsilon]] ≈ 2.4 V como valor medio de esa prueba concreta.

El rendimiento del 78 % se usa como fracción 0.78. Multiplicar 0.78 por 85 W da 66.3 W. Por tanto [[P_elec]] ≈ 66.3 W.

## Validación dimensional

El producto de espiras, tesla y metro cuadrado produce weber, con dimensión \`[M L² T⁻² I⁻¹]\`, coherente con [[Phi_B]].

Multiplicar weber por una velocidad angular expresada por segundo produce voltio, con dimensión \`[M L² T⁻³ I⁻¹]\`, coherente con [[epsilon_0]].

Dividir cambio de flujo entre tiempo también produce voltio. El rendimiento es adimensional y la potencia útil conserva la dimensión \`[M L² T⁻³]\`.

## Interpretación física

El resultado muestra que la bobina tiene un enlace de flujo considerable y que, al girar a 120 rad/s, puede inducir una amplitud de unos 90 V en condiciones ideales. Esa tensión no significa que el generador pueda entregar cualquier potencia: solo indica la escala de la fem interna asociada al giro.

La prueba de cambio de flujo da una fem media mucho menor porque describe otro proceso temporal, no necesariamente la amplitud de la señal sinusoidal. Si el mismo cambio de flujo ocurriera en menos tiempo, [[epsilon]] aumentaría; si el giro fuese más lento, [[epsilon_0]] disminuiría.

La potencia útil de 66.3 W indica que parte de los 85 W mecánicos se pierden. Físicamente, esas pérdidas pueden corresponder a rozamiento, calentamiento del bobinado y pérdidas magnéticas. Si [[eta]] bajara, [[P_elec]] caería aunque la fem ideal de la bobina no cambiara.

# Ejemplo de aplicación real

## Contexto

Una dinamo educativa se usa para alimentar una pequeña lámpara LED mediante una manivela. El profesor observa que al girar más deprisa aumenta el brillo, pero también aumenta el esfuerzo en la manivela cuando la lámpara está conectada.

## Estimación física

Una dinamo educativa típica tiene unos 500 espiras, un campo de 0.05 T y un área de 20 cm² (0.0020 m²). Si se gira a mano a unas 3 vueltas por segundo, la velocidad angular es aproximadamente 19 rad/s. El flujo máximo enlazado es [[Phi_B]] ≈ 500 × 0.05 × 0.0020 ≈ 0.05 Wb. La amplitud de la fem ideal resulta [[epsilon_0]] ≈ 0.05 × 19 ≈ 0.95 V, suficiente para iluminar un LED de baja potencia pero insuficiente para cargar un teléfono.

Si se duplica la velocidad a 6 vueltas por segundo (38 rad/s), [[epsilon_0]] se duplica a aproximadamente 1.9 V y, con un rendimiento del 60 %, [[P_elec]] pasa de unos 0.3 W a unos 1.1 W. Ese incremento cuadruplica la potencia disponible. Esto explica por qué el brillo aumenta mucho más que proporcionalmente al esfuerzo: la frecuencia de giro eleva tanto la tensión como la corriente inducida si la resistencia de la carga se mantiene fija.

## Interpretación

El esfuerzo extra al conectar la lámpara confirma la ley de Lenz y la conservación de la energía. La carga extrae energía eléctrica, y esa energía debe proceder del trabajo mecánico. La dinamo no “se endurece” por casualidad: el circuito conectado modifica la reacción electromagnética sobre el eje.

`;export{e as default};
