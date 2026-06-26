const e=`## Errores conceptuales

### Error 1 : Tratar los campos eléctrico y magnético como independientes en una onda
#### Por qué parece correcto
Dado que [[E]] y [[B]] se definen por leyes diferentes (Gauss y Ampère), un estudiante puede creer que son variables libres que pueden tomar cualquier valor arbitrario en una onda.

#### Por qué es incorrecto
La interpretación física de Maxwell demuestra que en una onda plana en el vacío, ambos campos están rígidamente acoplados por la relación [[EB]]. No puede existir uno sin el otro en la proporción exacta dictada por [[c]].

#### Señal de detección
El cálculo de la intensidad media [[I]] arroja valores inconsistentes con la potencia de la fuente o el vector de Poynting [[S]] no apunta en la dirección de propagación esperada.

#### Corrección conceptual
Recuerda que en una onda plana, [[E]] y [[B]] son dos manifestaciones del mismo flujo de energía. No puedes tener un campo eléctrico radiado intenso sin un campo magnético asociado.

#### Mini-ejemplo
*Incorrecto*: Afirmar que una onda plana tiene una amplitud [[E0]] de 300 V/m y una amplitud [[B0]] de 0.0001 T.
*Correcto*: Si [[E0]] es 300 V/m, entonces [[B0]] debe ser exactamente el cociente [[E0]]/[[c]], lo que resulta en aproximadamente 1.0 microtesla.

## Errores de modelo

### Error 2 : Aplicar las constantes de vacío en medios materiales
#### Por qué parece correcto
Como la velocidad de la luz [[c]] es una constante universal muy conocida, se tiende a usar su valor de 300000000 m/s en cualquier contexto de electromagnetismo.

#### Por qué es incorrecto
El medio material altera la permitividad y permeabilidad efectivas. Aplicar [[epsilon0]] y [[mu0]] dentro de un cristal o agua ignorando el índice de refracción llevará a errores graves en la densidad de energía [[u]].

#### Señal de detección
La velocidad calculada para la señal es mayor que la medida experimentalmente o los resultados de intensidad media [[I]] no coinciden con las pérdidas del medio.

#### Corrección conceptual
El medio material "frena" la onda y altera el balance de energía. Debes usar la permitividad y permeabilidad relativas del medio para hallar la velocidad local.

#### Mini-ejemplo
*Incorrecto*: Calcular la intensidad en el agua usando [[c]] como si valiera 300000000 m/s.
*Correcto*: Calcular la velocidad local mediante el cociente [[c]]/n, donde n es el índice de refracción del agua (aprox. 1.33).

## Errores matematicos

### Error 3 : Confundir intensidad con energía total
#### Por qué parece correcto
Ambas magnitudes se refieren a la "potencia" de la onda, y en lenguaje coloquial se usan como sinónimos de fuerza o impacto.

#### Por qué es incorrecto
La intensidad [[I]] indica el flujo (vatios por metro cuadrado), mientras que la energía total se mide en julios. Confundirlas impide calcular correctamente el trabajo realizado por el campo.

#### Señal de detección
Las unidades finales del problema son vatios por metro cuadrado cuando se pedían Julios, o el resultado es independiente del área de recepción.

#### Corrección conceptual
La intensidad [[I]] indica el "ritmo" al que llega la energía. Para obtener la energía total, debes multiplicar la intensidad por el área del receptor y por el tiempo.

#### Mini-ejemplo
*Incorrecto*: Decir que la energía que llega a un panel de 2 metros cuadrados es de 1000 vatios por metro cuadrado.
*Correcto*: La intensidad es 1000 vatios por metro cuadrado; la potencia recogida es 2000 W.

## Errores de interpretacion

### Error 4 : Ignorar la naturaleza vectorial del vector de Poynting
#### Por qué parece correcto
En problemas de una sola dimensión, trabajar solo con la magnitud [[S]] parece suficiente y más sencillo.

#### Por qué es incorrecto
Ignorar la dirección puede llevar a interpretar que la energía fluye hacia dentro de una fuente (convergencia) cuando en realidad está saliendo (radiación).

#### Señal de detección
El balance de energía global en una superficie cerrada da un resultado negativo sin que existan fuentes internas.

#### Corrección conceptual
El vector [[S]] siempre apunta en la dirección del producto vectorial entre el campo eléctrico y el campo magnético. Esta dirección define físicamente hacia dónde se transfiere la potencia.

#### Mini-ejemplo
*Incorrecto*: Calcular el flujo de energía sin especificar si entra o sale de la superficie.
*Correcto*: Determinar la orientación de [[S]] respecto a la normal de la superficie para saber si hay emisión o absorción.

## Regla de autocontrol rápido
Antes de dar por bueno un resultado, aplica la regla de las tres C: **Consistencia de unidades** (¿es potencia o energía?), **Constante de acoplo** (¿se cumple la relación entre campos y velocidad de la luz?) y **Causalidad** (¿el flujo de energía sale de la fuente?).
`;export{e as default};
