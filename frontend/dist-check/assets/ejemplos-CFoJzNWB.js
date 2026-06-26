const a=`# Ejemplo tipo examen

## Enunciado

Una carretilla se modela como una palanca ideal. La rueda actúa como apoyo, la carga [[R]] = 300 N está a [[d_R]] = 0.40 m del apoyo, y las manos aplican la potencia [[P]] a [[d_P]] = 1.20 m del apoyo. Identifica [[clase_palanca]], calcula [[P]] para equilibrio y obtiene la ventaja mecánica ideal [[VM]]. Explica por qué la clasificación no depende solo del valor de [[VM]].

## Datos

| Magnitud | Valor |
|---|---|
| [[R]] | 300 N |
| [[d_R]] | 0.40 m |
| [[d_P]] | 1.20 m |
| [[clase_palanca]] | segunda clase |

La resistencia está entre el apoyo y la potencia. Las fuerzas se tratan como perpendiculares a sus brazos y el modelo se considera ideal.

## Definición del sistema

El sistema es la carretilla como palanca rígida. El apoyo es la rueda, la resistencia es la carga y la potencia es la fuerza que aplican las manos. No se analiza el rozamiento de la rueda ni la deformación de la estructura. La clasificación se decide por el orden apoyo-resistencia-potencia.

## Modelo físico

La condición de equilibrio de momentos de la palanca ideal es:

{{f:lever_equilibrium}}

La lectura auxiliar de ventaja mecánica ideal es:

{{f:ideal_mechanical_advantage}}

Estas fórmulas cuantifican la geometría, pero la clase se identifica antes: como la resistencia queda en medio, [[clase_palanca]] corresponde a una palanca de segunda clase.

## Justificación del modelo

El modelo es válido porque las fuerzas se aplican respecto a un mismo apoyo y los brazos [[d_P]] y [[d_R]] se miden desde ese apoyo. La carretilla se aproxima como rígida y las fuerzas se representan por sus líneas de acción principales. La clase no se deduce de que la potencia sea menor, sino de la posición relativa de apoyo, carga y manos.

## Resolución simbólica

Para equilibrio, el momento de la potencia debe igualar el momento resistente. Se despeja [[P]] a partir de la igualdad entre [[P]] por [[d_P]] y [[R]] por [[d_R]]. Después se calcula [[VM]] como cociente entre brazo de potencia y brazo resistente.

La lectura cualitativa anticipa el resultado: como [[d_P]] es mayor que [[d_R]], la potencia necesaria debe ser menor que la resistencia. Eso encaja con la función habitual de una palanca de segunda clase.

## Sustitución numérica

La potencia necesaria resulta de equilibrar 300 N aplicados a 0.40 m con una fuerza aplicada a 1.20 m. El momento resistente es 120 N m. Al dividir por 1.20 m se obtiene [[P]] = 100 N.

La ventaja mecánica ideal es [[VM]] = 1.20 / 0.40 = 3. Esto significa que, en el modelo ideal, la geometría permite equilibrar una resistencia tres veces mayor que la potencia aplicada.

## Validación dimensional

En la igualdad de momentos, ambos lados tienen unidades de N m. La potencia [[P]] queda en N y [[VM]] no tiene unidad porque es una razón entre dos longitudes. La clasificación [[clase_palanca]] no tiene unidad: es una etiqueta geométrica.

La comprobación física es coherente: la carretilla reduce la fuerza necesaria porque la potencia actúa con un brazo mayor que la resistencia.

## Interpretación física

El resultado no significa que toda palanca de segunda clase tenga exactamente [[VM]] = 3. Significa que esta carretilla concreta, con esas distancias, ofrece una ventaja ideal de 3. La clase se mantiene mientras la carga quede entre rueda y manos; la ventaja cambia si se mueve la carga o se alargan los brazos.

La interpretación importante es separar dos niveles: [[clase_palanca]] describe el orden espacial, mientras que [[VM]] describe el efecto geométrico de las distancias. Confundirlos lleva a clasificar por número en lugar de por configuración.

# Ejemplo de aplicación real

## Contexto

Una persona compara una carretilla, unas tijeras y unas pinzas. Quiere identificar el tipo de palanca en cada caso antes de hablar de ventaja mecánica. El criterio será localizar apoyo, potencia y resistencia, y después decidir qué elemento queda en medio.

## Estimación física

En la carretilla, la rueda es apoyo, la carga queda en medio y las manos aplican potencia al extremo: segunda clase. En las tijeras, el tornillo está entre la mano y el material cortado: primera clase. En unas pinzas, la potencia de los dedos suele quedar entre el apoyo elástico y la resistencia en la punta: tercera clase.

Cuantitativamente, si una carretilla tiene [[d_P]] aproximadamente tres veces [[d_R]], se espera [[VM]] cercana a 3. En unas pinzas de tercera clase, normalmente [[d_P]] es menor que [[d_R]], por lo que se espera [[VM]] menor que 1, pero mayor recorrido en la punta.

## Interpretación

La clasificación permite entender la función del dispositivo antes de calcular. Una segunda clase suele ayudar a levantar cargas. Una tercera clase puede parecer desfavorable en fuerza, pero da control y recorrido. Una primera clase puede adaptarse a fuerza o a movimiento según la posición del apoyo.

## Lista de verificación

1. ¿Está localizado el apoyo?
2. ¿Dónde actúa la potencia [[P]]?
3. ¿Dónde actúa la resistencia [[R]]?
4. ¿Qué elemento queda en medio?
5. ¿[[VM]] se usa como interpretación y no como sustituto de [[clase_palanca]]?
`;export{a as default};
