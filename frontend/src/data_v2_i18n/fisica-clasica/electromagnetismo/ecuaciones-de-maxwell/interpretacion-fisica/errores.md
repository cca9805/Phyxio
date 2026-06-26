## Errores conceptuales


### Error 1 : Tratar los campos eléctrico y magnético como independientes en una onda
#### Por qué parece correcto
Dado que [[campo_electrico]] y [[campo_magnetico]] se definen por leyes diferentes (Gauss y Ampère), un estudiante puede creer que son variables libres que pueden tomar cualquier valor arbitrario en una onda.

#### Por qué es incorrecto
La interpretación física de Maxwell demuestra que en una onda plana en el vacío, ambos campos están rígidamente acoplados por la relación [[relacion_entre_campos]]. No puede existir uno sin el otro en la proporción exacta dictada por [[velocidad_de_la_luz_en_el_vacio]].

#### Señal de detección
El cálculo de la intensidad media [[intensidad_media]] arroja valores inconsistentes con la potencia de la fuente o el vector de Poynting [[vector_de_poynting]] no apunta en la dirección de propagación esperada.

#### Corrección conceptual
Recuerda que en una onda plana, [[campo_electrico]] y [[campo_magnetico]] son dos manifestaciones del mismo flujo de energía. No puedes tener un campo eléctrico radiado intenso sin un campo magnético asociado.

#### Mini-ejemplo
*Incorrecto*: Afirmar que una onda plana tiene una amplitud [[amplitud_del_campo_electrico]] de 300 V/m y una amplitud [[amplitud_del_campo_magnetico]] de 0.0001 T.
*Correcto*: Si [[amplitud_del_campo_electrico]] es 300 V/m, entonces [[amplitud_del_campo_magnetico]] debe ser exactamente el cociente [[amplitud_del_campo_electrico]]/[[velocidad_de_la_luz_en_el_vacio]], lo que resulta en aproximadamente 1.0 microtesla.

## Errores de modelo

**Por qué parece correcto**

Control 1: En Interpretacion fisica, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 1.

**Por qué es incorrecto**

Control 2: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 2.

**Señal de detección**

Control 3: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 3.

**Corrección conceptual**

Control 4: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 4.

**Mini-ejemplo de contraste**

Control 5: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 5.


### Error 2 : Aplicar las constantes de vacío en medios materiales
#### Por qué parece correcto
Como la velocidad de la luz [[velocidad_de_la_luz_en_el_vacio]] es una constante universal muy conocida, se tiende a usar su valor de 300000000 m/s en cualquier contexto de electromagnetismo.

#### Por qué es incorrecto
El medio material altera la permitividad y permeabilidad efectivas. Aplicar [[epsilon0]] y [[mu0]] dentro de un cristal o agua ignorando el índice de refracción llevará a errores graves en la densidad de energía [[densidad_de_energia_electromagnetica]].

#### Señal de detección
La velocidad calculada para la señal es mayor que la medida experimentalmente o los resultados de intensidad media [[intensidad_media]] no coinciden con las pérdidas del medio.

#### Corrección conceptual
El medio material "frena" la onda y altera el balance de energía. Debes usar la permitividad y permeabilidad relativas del medio para hallar la velocidad local.

#### Mini-ejemplo
*Incorrecto*: Calcular la intensidad en el agua usando [[velocidad_de_la_luz_en_el_vacio]] como si valiera 300000000 m/s.
*Correcto*: Calcular la velocidad local mediante el cociente [[velocidad_de_la_luz_en_el_vacio]]/n, donde n es el índice de refracción del agua (aprox. 1.33).

## Errores matemáticos

**Por qué parece correcto**

Control 6: En Interpretacion fisica, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 6.

**Por qué es incorrecto**

Control 7: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 7.

**Señal de detección**

Control 8: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 8.

**Corrección conceptual**

Control 9: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 9.

**Mini-ejemplo de contraste**

Control 10: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 10.


### Error 3 : Confundir intensidad con energía total
#### Por qué parece correcto
Ambas magnitudes se refieren a la "potencia" de la onda, y en lenguaje coloquial se usan como sinónimos de fuerza o impacto.

#### Por qué es incorrecto
La intensidad [[intensidad_media]] indica el flujo (vatios por metro cuadrado), mientras que la energía total se mide en julios. Confundirlas impide calcular correctamente el trabajo realizado por el campo.

#### Señal de detección
Las unidades finales del problema son vatios por metro cuadrado cuando se pedían Julios, o el resultado es independiente del área de recepción.

#### Corrección conceptual
La intensidad [[intensidad_media]] indica el "ritmo" al que llega la energía. Para obtener la energía total, debes multiplicar la intensidad por el área del receptor y por el tiempo.

#### Mini-ejemplo
*Incorrecto*: Decir que la energía que llega a un panel de 2 metros cuadrados es de 1000 vatios por metro cuadrado.
*Correcto*: La intensidad es 1000 vatios por metro cuadrado; la potencia recogida es 2000 W.

## Errores de interpretación

**Por qué parece correcto**

Control 11: En Interpretacion fisica, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 11.

**Por qué es incorrecto**

Control 12: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 12.

**Señal de detección**

Control 13: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 13.

**Corrección conceptual**

Control 14: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 14.

**Mini-ejemplo de contraste**

Control 15: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 15.


### Error 4 : Ignorar la naturaleza vectorial del vector de Poynting
#### Por qué parece correcto
En problemas de una sola dimensión, trabajar solo con la magnitud [[vector_de_poynting]] parece suficiente y más sencillo.

#### Por qué es incorrecto
Ignorar la dirección puede llevar a interpretar que la energía fluye hacia dentro de una fuente (convergencia) cuando en realidad está saliendo (radiación).

#### Señal de detección
El balance de energía global en una superficie cerrada da un resultado negativo sin que existan fuentes internas.

#### Corrección conceptual
El vector [[vector_de_poynting]] siempre apunta en la dirección del producto vectorial entre el campo eléctrico y el campo magnético. Esta dirección define físicamente hacia dónde se transfiere la potencia.

#### Mini-ejemplo
*Incorrecto*: Calcular el flujo de energía sin especificar si entra o sale de la superficie.
*Correcto*: Determinar la orientación de [[vector_de_poynting]] respecto a la normal de la superficie para saber si hay emisión o absorción.

## Regla de autocontrol rápido

Antes de dar por bueno un resultado, aplica la regla de las tres C: **Consistencia de unidades** (¿es potencia o energía?), **Constante de acoplo** (¿se cumple la relación entre campos y velocidad de la luz?) y **Causalidad** (¿el flujo de energía sale de la fuente?).

**Por qué parece correcto**

Control 16: En Interpretacion fisica, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 16.

**Por qué es incorrecto**

Control 17: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 17.

**Señal de detección**

Control 18: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 18.

**Corrección conceptual**

Control 19: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 19.

**Mini-ejemplo de contraste**

Control 20: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 20.