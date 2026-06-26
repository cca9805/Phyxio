const e=`# Ejemplo tipo examen

## Enunciado

Un hilo recto muy largo transporta una corriente continua de 8 A. Se desea estimar el campo magnetico a 5.0 cm del conductor y compararlo con el campo en el centro de una espira circular de radio [[R]] igual a 5.0 cm por la que circula la misma corriente. Explica que papel tienen [[dl]], [[r]] y [[s_theta]] antes de usar las formulas integradas.

## Datos

- Corriente del conductor y de la espira: 8 A.
- Distancia perpendicular al hilo: 5.0 cm, equivalente a 0.050 m.
- Radio de la espira: 5.0 cm, equivalente a 0.050 m.
- Medio aproximado: aire, tratado como vacio.
- Se busca [[B]] en el hilo y en el centro de la espira.

Los datos tienen la misma escala de longitud, pero no la misma geometria. En el hilo largo, las contribuciones rodean una recta extendida. En la espira, las contribuciones se organizan alrededor de un centro comun.

## Definición del sistema

El primer sistema es un conductor recto ideal, muy largo comparado con la distancia de observacion. Cada elemento [[dl]] aporta una contribucion [[dB]], y la simetria hace que el campo final sea tangencial alrededor del hilo.

El segundo sistema es una espira circular ideal. En el centro, todos los elementos estan a distancia [[R]] y sus contribuciones utiles apuntan en la misma direccion axial. El factor angular [[s_theta]] es maximo para los elementos de la espira vistos desde el centro.

## Modelo físico

El modelo fisico es magnetostatico. La ley local describe [[dB]] a partir de [[mu0]], [[I]], [[dl]], [[s_theta]] y [[r]]. Las formulas de hilo largo y espira central se usan solo porque la simetria permite sumar esas contribuciones sin resolver una integral completa en cada paso.

## Justificación del modelo

El modelo vale porque la corriente es constante, el conductor se trata como delgado y el punto de observacion no esta dentro del material. Para el hilo, la longitud ideal elimina efectos de borde. Para la espira, el punto central conserva la simetria circular.

Dejaria de valer cerca de extremos, en conductores gruesos, con corriente alterna rapida o si el punto de la espira no estuviera en el centro. En esos casos, la direccion de [[dB]] y la distancia real cambian de forma no despreciable.

## Resolución simbólica

La contribucion elemental que organiza el razonamiento es:

{{f:biot_savart_diferencial}}

Para el hilo recto largo, la suma de contribuciones sobre toda la recta da:

{{f:campo_hilo_largo}}

Para la espira circular observada en su centro, la suma de contribuciones axiales da:

{{f:campo_espira_centro}}

La comparacion no depende solo de que las longitudes numericas coincidan. Depende de como los elementos de corriente se orientan y de que direcciones de [[dB]] se cancelan o se refuerzan.

## Sustitución numérica

Para el hilo, se toma la constante magnetica del vacio, se multiplica por 8 A y se divide por el perimetro asociado a 0.050 m. El resultado queda aproximadamente en 3.2e-5 T, por tanto [[B]] es del orden de 32 microteslas.

Para la espira central, se multiplica la constante magnetica por 8 A y se divide por el doble del radio de 0.050 m. El resultado queda aproximadamente en 1.0e-4 T, por tanto [[B]] es del orden de 100 microteslas en el centro.

## Validación dimensional

En ambos resultados integrados, la permeabilidad aporta la relacion magnetica entre corriente y campo, la corriente aporta la fuente y la division por longitud fija la escala espacial. La salida se expresa en teslas, que es la unidad de [[B]].

En la forma diferencial, [[dl]] aporta longitud y el denominador contiene distancia al cuadrado. Esa combinacion deja una longitud efectiva en el denominador, por lo que tambien produce teslas tras incluir [[mu0]] e [[I]].

## Interpretación física

Fisicamente, el resultado indica que la forma de la corriente domina tanto como la intensidad. La espira produce un campo central mayor que el hilo a la misma escala de longitud porque todas las contribuciones utiles se organizan alrededor del centro. En el hilo largo, la geometria reparte la contribucion alrededor de circunferencias centradas en el conductor.

Si se duplicara la corriente, ambos campos aumentarian en la misma proporcion. Si se duplicara [[r]] en el hilo, el campo disminuiria. Si se duplicara [[R]] en la espira con la misma corriente, el campo central tambien seria menor. La ley muestra que el resultado depende de corriente y escala geometrica a la vez.

La diferencia mas importante no es el numero final, sino el modo en que se alcanza. En la espira, cada elemento [[dl]] esta situado de forma que su contribucion util apunta hacia el mismo eje; por eso la suma vectorial se concentra en el centro. En el hilo, las contribuciones se distribuyen alrededor de una trayectoria circular y el campo queda asociado a rodear el conductor, no a concentrarse en un punto central.

Esto tambien explica por que no se debe elegir la formula integrada solo por parecido numerico. Aunque el radio de la espira y la distancia al hilo tengan el mismo valor, representan geometria distinta. La variable [[r]] mide separacion a una recta larga, mientras [[R]] define una curva cerrada. Cambiar una por otra borraria la informacion fisica que decide como se suman las contribuciones [[dB]].

En una situacion experimental, esta interpretacion orienta decisiones reales. Si se quiere un campo localizado para calibrar un sensor, la espira central es mas adecuada. Si se quiere estimar exposicion cerca de un cable, el modelo de hilo largo es el que conserva la simetria correcta. Biot Savart no solo calcula campos: obliga a leer la forma de la corriente antes de confiar en el resultado.

# Ejemplo de aplicación real

## Contexto

Un laboratorio quiere estimar el campo producido por una bobina circular simple usada para calibrar un sensor magnetico. La bobina tiene radio de 8 cm y puede conducir 1.5 A sin calentamiento apreciable. La pregunta practica es si el campo central sera comparable con el campo terrestre.

## Estimación física

El modelo de espira central usa [[R]], [[I]] y [[mu0]] para estimar [[B]]. Con una corriente de 1.5 A y un radio de 8 cm, el campo central queda del orden de diez microteslas. Es una escala comparable con el campo terrestre, suficiente para ensayos cualitativos con sensores sensibles.

La estimacion tambien muestra el limite de diseño: reducir [[R]] aumenta el campo, pero disminuye la region donde el campo es aproximadamente uniforme. Aumentar [[I]] ayuda, pero introduce calentamiento y exige una fuente estable.

## Interpretación

Biot Savart permite transformar una bobina real en una suma de contribuciones de corriente. En el centro, la simetria hace que la formula integrada sea fiable y rapida.

Si el sensor se separa del centro, la estimacion deja de ser exacta. En ese caso no falla la ley; falla la condicion geometrica que permitia sumar todas las contribuciones de forma tan compacta.
`;export{e as default};
