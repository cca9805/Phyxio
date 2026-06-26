# Ejemplo tipo examen

## Enunciado

Una esfera de diametro $0.10\,\mathrm{m}$ se mueve en aire quieto con velocidad relativa [[v]] de $12\,\mathrm{m/s}$. El problema pide diagnosticar el regimen de flujo para decidir si conviene iniciar el calculo de arrastre con un enfoque viscoso dominante, inercial dominante o transicional. El docente entrega los datos del medio a temperatura ambiente y solicita justificar la longitud caracteristica [[L]] y explicar por que [[Re]] no se interpreta como fuerza.

Ademas, se pide repetir el diagnostico para agua en la misma geometria y velocidad, con el objetivo de comparar como cambia la seleccion de modelo al cambiar el medio. La pregunta central no es "cuanto vale la fuerza", sino "que modelo de arrastre tiene mas sentido usar primero en cada caso".

## Datos

Para aire:

- [[rho]] = $1.2\,\mathrm{kg/m^3}$
- [[eta]] = $1.8\times 10^{-5}\,\mathrm{Pa\cdot s}$
- [[nu]] = $1.5\times 10^{-5}\,\mathrm{m^2/s}$
- [[v]] = $12\,\mathrm{m/s}$
- Diametro de esfera: $0.10\,\mathrm{m}$

Para agua:

- [[rho]] = $1000\,\mathrm{kg/m^3}$
- [[eta]] = $1.0\times 10^{-3}\,\mathrm{Pa\cdot s}$
- [[nu]] = $1.0\times 10^{-6}\,\mathrm{m^2/s}$
- [[v]] = $12\,\mathrm{m/s}$
- Misma geometria

Eleccion inicial de escala: [[L]] igual al diametro de la esfera.

## Definición del sistema

El sistema fisico es un cuerpo rigido en flujo externo. Se toma como referencia la velocidad relativa entre cuerpo y fluido. La longitud caracteristica [[L]] se define como el diametro porque controla separacion de flujo y tamaño de estela en esta geometria.

Se asume flujo uniforme de entrada y propiedades efectivas del medio constantes en el tramo de analisis. Esta simplificacion es razonable para un primer diagnostico de regimen y seleccion de modelo, siempre que luego se declare el limite de validez.

## Modelo físico

El modelo fisico del ejemplo sigue la secuencia del leaf:

1. Calcular [[Re]] con datos del medio.
2. Comparar intervalos de regimen para flujo externo.
3. Elegir bloque de arrastre coherente con el mecanismo dominante.

Se trabajara con las dos formulas del leaf para verificar consistencia entre via con [[eta]] y via con [[nu]].

## Justificación del modelo

Este enfoque es adecuado porque la decision de modelado depende de si domina la difusion viscosa o la persistencia inercial. [[Re]] condensa esa competencia con una magnitud adimensional interpretable. Si el valor cae en zona alta para flujo externo, una hipotesis de arrastre lineal puro suele perder capacidad descriptiva. Si cae en zona baja, el enfoque viscoso dominante gana peso.

La comparacion entre aire y agua con la misma geometria y [[v]] muestra ademas que el medio modifica el diagnostico aunque la escena geometrica no cambie. Esa es una razon fuerte para no copiar un modelo de un contexto a otro sin recalcular [[Re]].

## Resolución simbólica

Via 1, con [[eta]]:

{{f:reynolds_viscosidad_dinamica}}

Via 2, con [[nu]]:

{{f:reynolds_viscosidad_cinematica}}

Lectura simbolica:

- [[Re]] crece si aumenta [[v]].
- [[Re]] crece si aumenta [[L]].
- [[Re]] disminuye si el medio incrementa su difusion viscosa efectiva.

Por tanto, una misma pieza puede cambiar de lectura de regimen si cambia medio, temperatura o escala caracteristica.

## Sustitución numérica

Para aire, con via [[nu]], el resultado numerico de [[Re]] es aproximadamente 8.0e4.

Para aire, con via [[eta]], el resultado numerico de [[Re]] vuelve a dar aproximadamente 8.0e4.

La consistencia entre ambas vias es buena.

Para agua, con via [[nu]], el resultado numerico de [[Re]] es 1.2e6.

Para agua, con via [[eta]], el resultado numerico de [[Re]] tambien es 1.2e6.

La lectura es clara: en ambos medios, para esta escala y velocidad, el regimen cae en zona fuertemente inercial para flujo externo. El caso en agua arroja [[Re]] aun mayor por la combinacion de parametros del medio.

## Validación dimensional

Con via [[eta]], las unidades se simplifican a una magnitud adimensional porque el producto de densidad, velocidad y longitud queda compensado por la viscosidad dinamica.

Con via [[nu]], la razon entre velocidad por longitud y viscosidad cinematica tambien produce una cantidad adimensional.

En ambos casos [[Re]] es adimensional, como exige el modelo.

## Interpretación física

La interpretacion correcta no es "[[Re]] grande implica fuerza grande". La conclusion fisica valida es: [[Re]] alto sugiere que el flujo conserva impulso y que conviene iniciar con un bloque de arrastre inercial dominante. El valor de la fuerza dependera despues de la ley de arrastre concreta y de sus parametros, pero la puerta de entrada del modelo ya quedo definida.

Tambien se obtiene una lectura de robustez: aunque aire y agua den valores distintos, ambos quedan en zona alta para este problema. Eso hace estable la seleccion inicial de modelo frente a cambio de medio en este caso concreto.

# Ejemplo de aplicación real

## Contexto

Un equipo de ingenieria disena una carcasa para un sensor meteorologico montado en una torre. El dispositivo opera en viento variable entre $3$ y $20\,\mathrm{m/s}$. El objetivo es decidir si basta una correlacion unica de arrastre o si hace falta una estrategia por tramos.

El equipo define [[L]] como el ancho frontal efectivo de la carcasa, estima propiedades de aire para verano e invierno y calcula [[Re]] en los extremos de velocidad. La motivacion es operativa: reducir sesgo en estimacion de cargas y evitar sobredimensionamiento innecesario.

## Estimación física

Con [[L]] fija y [[nu]] de aire en rango tipico, la banda de [[v]] desplaza [[Re]] de forma aproximadamente lineal. Incluso en el extremo bajo, los valores siguen en zona inercial para esa escala geometrica. Sin embargo, el equipo detecta que angulos de incidencia altos alteran estela y pueden requerir ajuste de correlacion.

La estimacion no termina en un numero unico. El resultado util es un mapa de decision: para condiciones nominales, usar bloque inercial dominante; para incidencias extremas, validar experimentalmente un ajuste especifico.

## Interpretación

Este ejemplo real muestra por que [[Re]] es una herramienta de arquitectura de modelo y no una salida final de fuerza. Sirve para organizar decisiones: que bloque usar primero, cuando validar transicion y como documentar limites de validez.

La leccion transferible es clara: si la operacion recorre una banda de condiciones, diagnosticar [[Re]] en toda la banda mejora mas la calidad del modelo que refinar decimales en un unico punto nominal.
