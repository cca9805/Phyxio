# Ejemplo tipo examen

## Enunciado

Un tren de alta velocidad circula a 72 km/h (20 m/s) en via recta. Su bocina emite un tono de 800 Hz. La velocidad del sonido en el aire ese dia es de 340 m/s. Un observador esta de pie junto a la via.

a) Calcular la frecuencia que escucha el observador cuando el tren se aproxima.
b) Calcular la frecuencia que escucha cuando el tren se aleja.
c) Calcular el desplazamiento Doppler en cada caso.

## Datos

- Frecuencia de la bocina: [[f_fuente]] de 800 Hz
- Velocidad del tren: 20 m/s
- Velocidad del sonido: [[v_sonido]] de 340 m/s
- Observador fijo respecto al medio: [[v_receptor]] igual a 0

## Definición del sistema

El tren es la fuente sonora en movimiento; el observador junto a la via es el receptor fijo. El tren circula en linea recta, por lo que el movimiento es radial puro cuando el tren apunta directamente al observador (acercamiento) o directamente desde el observador (alejamiento). La velocidad del sonido en el aire a temperatura ambiente es el parametro del medio.

## Modelo físico

Se aplica el modelo de fuente movil con receptor fijo. Convenio: [[v_fuente]] positivo cuando la fuente se aleja del receptor, negativo cuando se acerca.

## Justificación del modelo

El movimiento es radial (el tren circula en linea recta y el observador esta a un lado de la via). La velocidad del tren de 20 m/s es bien subsonica respecto a [[v_sonido]] de 340 m/s (numero de Mach cercano a 0.06). El receptor esta fijo respecto al medio. El modelo de fuente movil con receptor fijo es el apropiado.

## Resolución simbólica

Para el caso de acercamiento, con [[v_fuente]] negativo (fuente acercandose) segun el convenio:

{{f:doppler_fuente_movil}}

Para el caso de alejamiento, con [[v_fuente]] positivo:

{{f:doppler_fuente_movil}}

El desplazamiento Doppler en cada caso:

{{f:desplazamiento_doppler}}

## Sustitución numérica

Acercamiento ([[v_fuente]] negativo, igual a menos 20 m/s): [[f_obs]] igual a 800 Hz multiplicado por 340 partido entre (340 menos 20), que es 340 partido entre 320, igual a 800 multiplicado por 1.0625, igual a 850 Hz.

Alejamiento ([[v_fuente]] positivo, igual a mas 20 m/s): [[f_obs]] igual a 800 Hz multiplicado por 340 partido entre (340 mas 20), que es 340 partido entre 360, igual a 800 multiplicado por 0.944, aproximadamente 756 Hz.

Desplazamiento Doppler al acercarse: [[delta_f]] igual a 850 menos 800, igual a mas 50 Hz.
Desplazamiento Doppler al alejarse: [[delta_f]] igual a 756 menos 800, igual a menos 44 Hz.

## Validación dimensional

La relacion de fuente movil tiene cociente de velocidades (m/s partido entre m/s) que resulta adimensional, multiplicado por [[f_fuente]] en Hz: el resultado es en Hz. Verificacion: `[T⁻¹] · [L T⁻¹] / [L T⁻¹] = [T⁻¹]`.

## Interpretación física

Esto implica que el oido no detecta solo un valor nuevo de frecuencia, sino el cambio causal de separacion entre frentes de onda: delante del tren los frentes llegan mas juntos y detras llegan mas separados. Fisicamente, la lectura de [[f_obs]] permite inferir si domina el acercamiento o el alejamiento.

El tren acercandose produce 850 Hz (sube 50 Hz respecto a los 800 emitidos) y al alejarse produce 756 Hz (baja 44 Hz). El cambio no es simetrico: el incremento de frecuencia al acercarse (50 Hz) es mayor en valor absoluto que la disminucion al alejarse (44 Hz). Esta asimetria es la firma del efecto Doppler clasico no simetrico: la compresion geometrica de frentes de onda al acercarse es mas intensa que el estiramiento al alejarse, porque el denominador de la formula varia de forma hiperbólica, no lineal.

El salto total de frecuencia que percibe el observador al pasar el tren es de 850 a 756 Hz, una diferencia de 94 Hz, perceptible como un descenso de tono notorio. Este cambio es proporcional a la velocidad del tren y podria usarse para estimar esa velocidad si se conoce [[f_fuente]].

---

# Ejemplo de aplicación real

## Contexto

El radar Doppler de velocidad de trafico es la aplicacion mas ubicua del efecto Doppler en la vida cotidiana. Un dispositivo en la carretera emite una señal de onda continua a frecuencia [[f_fuente]] conocida. La señal se refleja en el vehiculo en movimiento, que actua a la vez como receptor (recibe la señal del radar) y como nueva fuente (reemite la señal con desplazamiento Doppler). El radar recibe el eco y mide el desplazamiento de frecuencia total, que es la combinacion de los dos efectos Doppler: el del vehiculo como receptor y el del vehiculo como fuente.

Para un radar de trafico operando a [[f_fuente]] de 24.1 GHz (banda K, frecuencia tipica), la velocidad del sonido se reemplaza por la velocidad de la luz (3×10⁸ m/s). El desplazamiento Doppler total para un vehiculo acercandose a 100 km/h (27.8 m/s) es aproximadamente [[delta_f]] de 2 veces 24.1×10⁹ multiplicado por 27.8 partido entre 3×10⁸, igual a aproximadamente 4461 Hz, un valor facilmente medible con electronica de precision.

## Estimación física

Para el radar acustico (sonar Doppler), el mismo principio aplica. Un barco emite un pulso sonar a [[f_fuente]] de 12 kHz. La señal se refleja en un banco de peces que se aleja a [[v_fuente]] de 3 m/s (respecto al agua). La formula de dos aplicaciones Doppler da un [[delta_f]] de aproximadamente 2 veces [[f_fuente]] multiplicado por [[v_fuente]] partido entre [[v_sonido]], que para estos valores es 2 multiplicado por 12000 multiplicado por 3 partido entre 1500, igual a 48 Hz. El sonar mide 48 Hz de desplazamiento y deduce que el banco de peces se aleja a 3 m/s.

## Interpretación

La version de dos pasos del efecto Doppler (vehiculo como receptor y como fuente) es lo que produce el doble del desplazamiento Doppler en los radares de reflexion. Esta es la razon por la que la formula de velocidad del radar incluye el factor 2 en el numerador: el efecto Doppler se aplica dos veces, una vez al recibir la señal y una vez al reemitirla. El mismo principio de doble Doppler se usa en la ecografia Doppler de flujo sanguineo para medir la velocidad de los globulos rojos a partir del cambio de frecuencia del eco ultrasonico.
