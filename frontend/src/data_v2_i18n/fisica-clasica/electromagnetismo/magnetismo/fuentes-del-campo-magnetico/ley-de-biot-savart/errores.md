## Errores conceptuales


### Error 1: sumar contribuciones como escalares

**Por qué parece correcto**

La analogia con sumar intensidades positivas hace pensar que cada [[contribucion_diferencial_de_campo]] solo aumenta el campo total. El alumno usa una generalizacion excesiva de problemas de una dimension.

**Por qué es incorrecto**

Las contribuciones son vectoriales. Dos elementos pueden producir campos en direcciones opuestas o parcialmente transversales, y entonces no se suman como modulos.

**Señal de detección**

El resultado crece siempre al agregar tramos, aunque la geometria tenga simetria de cancelacion.

**Corrección conceptual**

Antes de sumar, decide la direccion de cada contribucion con la regla de la mano derecha.

**Mini-ejemplo de contraste**

En el centro de una espira, las componentes laterales se cancelan y las axiales se refuerzan. Sumar todos los modulos sin direcciones exageraria el resultado.

## Errores de modelo


### Error 2: usar la formula de hilo largo en cualquier conductor

**Por qué parece correcto**

La formula integrada del hilo es familiar y parece representar toda corriente recta o cercana a un punto.

**Por qué es incorrecto**

Esa expresion supone un hilo recto muy largo y un punto lejos de los extremos. En una espira, un tramo corto o un punto fuera de simetria, la geometria cambia.

**Señal de detección**

El alumno usa solo [[distancia_al_punto_de_observacion]] y [[corriente_electrica]] aunque el enunciado describe radio de espira [[radio_de_espira]], arco o longitud finita.

**Corrección conceptual**

Elige la formula integrada solo despues de reconocer la geometria. Si no hay simetria suficiente, vuelve a [[contribucion_diferencial_de_campo]].

**Mini-ejemplo de contraste**

Un punto en el centro de una espira no ve un hilo infinito. La direccion de las contribuciones se organiza axialmente y depende de [[radio_de_espira]], no de una distancia perpendicular a un hilo largo.

## Errores matemáticos


### Error 3: olvidar el factor angular

**Por qué parece correcto**

La distancia parece dominar el problema, asi que el alumno cree que todos los elementos cercanos aportan igual.

**Por qué es incorrecto**

El factor [[s_theta]] mide la parte efectiva del elemento orientado. Un elemento alineado con el punto puede aportar muy poco aunque este cerca.

**Señal de detección**

El calculo no distingue entre elementos perpendiculares y elementos casi alineados.

**Corrección conceptual**

Cada contribucion exige distancia y orientacion. No basta medir lo lejos que esta el punto.

**Mini-ejemplo de contraste**

Dos elementos a la misma distancia pueden aportar campos distintos si uno mira casi hacia el punto y el otro es perpendicular a la direccion de observacion.

## Errores de interpretación


### Error 4: creer que un resultado integrado vale fuera de su punto

**Por qué parece correcto**

El resultado para el centro de una espira parece una propiedad de toda la bobina.

**Por qué es incorrecto**

La simetria exacta se usa para cancelar componentes y reforzar otras. Fuera del centro, esas cancelaciones cambian.

**Señal de detección**

El alumno aplica el campo central a puntos sobre el eje alejados o a puntos laterales.

**Corrección conceptual**

Lee cada resultado integrado como una solucion con dominio geometrico propio.

**Mini-ejemplo de contraste**

En el centro de la espira, todas las contribuciones utiles apuntan igual. Al moverse hacia un borde, algunas contribuciones pesan mas que otras y el campo ya no se deduce con la misma formula.

## Regla de autocontrol rápido

Antes de calcular, responde cinco preguntas: que geometria tiene la corriente, donde esta el punto, que representa [[distancia_al_punto_de_observacion]], que papel tiene [[s_theta]] y que componentes de [[contribucion_diferencial_de_campo]] se cancelan. Si una respuesta falta, no sustituyas datos.