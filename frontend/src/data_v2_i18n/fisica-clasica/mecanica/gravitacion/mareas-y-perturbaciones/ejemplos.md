# Ejemplo tipo examen

## Enunciado

Se quiere estimar la aceleración mareal que produce la Luna sobre la Tierra y compararla con una aceleración central simplificada. Toma como masa perturbadora lunar [[M]] = 7,35e22 kg, radio terrestre [[R]] = 6,37e6 m y distancia media entre centros [[d]] = 3,84e8 m. Después, si una perturbación orbital secundaria tiene [[ap]] = 1,1e-6 m/s2 y la aceleración central del sistema es [[ac]] = 2,7e-3 m/s2, decide si la perturbación puede tratarse como pequeña.

## Datos

Los datos relevantes son [[G]] = 6,674e-11 N*m2/kg2, [[M]] = 7,35e22 kg, [[R]] = 6,37e6 m y [[d]] = 3,84e8 m para la estimación mareal. Para el criterio perturbativo se usan [[ap]] = 1,1e-6 m/s2 y [[ac]] = 2,7e-3 m/s2. La incógnita principal del primer apartado es [[am]]. La segunda lectura pide [[eps]], no una nueva fuerza.

## Definición del sistema

El cuerpo afectado es la Tierra y el perturbador es la Luna. La Tierra no se trata como una partícula, porque se quiere comparar el campo lunar entre puntos separados por una escala del orden de su radio [[R]]. En cambio, la Luna se aproxima como masa externa concentrada [[M]], situada a una distancia [[d]] mucho mayor que el radio terrestre. Esa separación permite usar una aproximación de primer orden.

## Modelo físico

El modelo físico es una estimación mareal newtoniana de primer orden. La fórmula núcleo que calcula la escala diferencial de aceleración es:

{{f:aceleracion_mareal}}

Para decidir si una aceleración secundaria puede estudiarse como perturbación de una órbita central se usa:

{{f:parametro_perturbativo}}

También se mencionan las dos relaciones conceptuales del leaf para declarar límites del modelo:

{{f:torque_mareal_conceptual}}

{{f:aceleracion_total_conceptual}}

No se usa todavía un cálculo de torque mareal [[tau]], porque el problema no da deformación, desfase ni disipación interna.

## Justificación del modelo

La condición geométrica es razonable porque [[d]] es mucho mayor que [[R]]. Por tanto, el campo lunar varía poco a lo largo de la Tierra y puede aproximarse con un gradiente de primer orden. Además, el segundo apartado no pide la trayectoria completa, sino una decisión de escala: si [[ap]] es pequeña frente a [[ac]]. Para esa decisión basta el parámetro [[eps]], siempre que se recuerde que no da dirección orbital.

## Resolución simbólica

Primero se identifica la escala mareal [[am]] con la relación de aceleración diferencial. La lectura física esperada es que [[am]] aumenta linealmente con [[M]] y [[R]], pero disminuye de forma muy fuerte al aumentar [[d]]. Después se calcula el cociente [[eps]] como razón entre [[ap]] y [[ac]]. Si ese cociente es mucho menor que uno, la perturbación no destruye el movimiento central como primera aproximación.

También se puede plantear una comparación cualitativa: si la Luna estuviera al doble de distancia, la marea no sería la mitad, sino una fracción mucho menor. Esta conclusión se obtiene antes de sustituir números y ayuda a detectar errores de dependencia con la distancia.

Para dejar constancia de las relaciones conceptuales completas, la resolución simbólica también declara que una descripción orbital precisa exigiría suma vectorial de aceleraciones:

{{f:aceleracion_total_conceptual}}

Y que cualquier evolución rotacional por marea requeriría un modelo adicional de torque:

{{f:torque_mareal_conceptual}}

## Sustitución numérica

Para la marea lunar se obtiene aproximadamente [[am]] = 1,10e-6 m/s2. El orden de magnitud es de microaceleración, muy pequeño frente a la gravedad superficial cotidiana. Para la perturbación orbital, [[eps]] = 1,1e-6 / 2,7e-3 = 4,1e-4. El valor es claramente menor que uno y también menor que una centésima.

Si se quisiera comparar con otro perturbador, se introducirían [[M1]], [[M2]], [[d1]], [[d2]], [[am1]] y [[am2]] mediante:

{{f:comparacion_perturbadores}}

En este ejemplo no hace falta porque solo se calcula una marea absoluta y un criterio perturbativo simple.

## Validación dimensional

La expresión de [[am]] combina [[G]], [[M]], [[R]] y [[d]] para producir unidades de aceleración. La constante [[G]] aporta longitud cúbica dividida por masa y tiempo al cuadrado; al multiplicar por masa y radio queda longitud cuarta sobre tiempo al cuadrado; al dividir por distancia cúbica queda longitud sobre tiempo al cuadrado. El cociente [[eps]] no tiene unidades, porque divide dos aceleraciones.

## Interpretación física

El resultado muestra por qué la marea lunar puede ser importante aunque su aceleración diferencial sea diminuta. No compite con el peso de una persona, pero actúa sobre océanos enteros y de forma periódica. El parámetro [[eps]] indica que la perturbación secundaria propuesta es pequeña frente a la aceleración central, así que un tratamiento perturbativo inicial es razonable. Aun así, si esa perturbación se repite durante muchas órbitas, habría que estudiar acumulación y dirección.

# Ejemplo de aplicación real

## Contexto

Un equipo que diseña la órbita de un satélite alrededor de la Tierra quiere decidir si puede ignorar la perturbación de la Luna durante una estimación preliminar. El satélite sigue una dinámica central dominada por la Tierra, pero la Luna produce una aceleración secundaria que modifica lentamente la geometría orbital. No se busca una efeméride precisa, sino un criterio inicial de modelización.

## Estimación física

El equipo estima una aceleración central [[ac]] de 8,7 m/s2 para una órbita baja y una aceleración perturbativa lunar [[ap]] del orden de 3,0e-5 m/s2. Con el criterio perturbativo, [[eps]] queda en torno a 3,4e-6. Como escala instantánea es extremadamente pequeña. Sin embargo, la misión dura años y exige precisión en la posición, por lo que el efecto no se elimina del simulador final: se conserva como perturbación acumulativa.

Para un satélite geoestacionario, [[ac]] sería menor y la perturbación relativa de la Luna sería más significativa. Esta comparación enseña que el mismo perturbador no tiene siempre la misma importancia: depende de la escala central del movimiento y de la distancia orbital.

## Interpretación

La lectura correcta no es "la Luna no importa" ni "la Luna domina". La lectura correcta es que la Luna actúa como perturbación pequeña frente a la dinámica central en órbita baja, pero puede acumular cambios de fase, nodo o inclinación en escalas largas. El criterio [[eps]] permite decidir el nivel de modelo: suficiente para una estimación rápida, insuficiente para navegación precisa. Esta distinción es exactamente la utilidad física del leaf.
