## Errores conceptuales


### Error 1: Creer que la presencia de más cargas reduce la fuerza de cada una

**Por qué parece correcto**

El alumno generaliza incorrectamente la idea de que "las influencias se reparten". En mecánica de fluidos, cuando hay varios sumideros, cada uno comparte el caudal disponible. Por analogía, el estudiante asume que varias cargas "comparten" la fuerza sobre la carga de prueba, de modo que la contribución de cada una es menor que si estuviera sola.

**Por qué es incorrecto**

El principio de superposición establece que cada carga actúa **independientemente** sobre la carga de prueba, con exactamente la misma intensidad que si las demás no existieran. La fuerza de [[q_i]] sobre la carga de prueba es siempre [[k_e]]·[[q_i]]/[[r_i]]² sin reducción alguna. La fuerza total [[fuerza_electrica_total]] puede ser mayor, menor o igual que cualquier contribución individual, dependiendo de las direcciones, pero nunca porque cada contribución individual se haya "debilitado".

**Señal de detección**

El alumno divide la fuerza de una carga individual por [[numero_de_cargas_fuente]] para obtener la contribución de cada una, o escribe la fuerza total como la de una sola carga dividida por el número de cargas presentes.

**Corrección conceptual**

La fuerza de cada carga fuente sobre la carga de prueba es independiente de las demás cargas. Cada contribución se calcula con la ley de Coulomb directamente, sin ningún factor de reparto. La interacción eléctrica entre dos cargas no se ve afectada por la presencia de terceras cargas.

**Mini-ejemplo de contraste**

Si una carga de 2 µC ejerce una fuerza de 0.1 N sobre una carga de prueba a cierta distancia, y se añade otra carga de 2 µC a la misma distancia en la misma dirección, la fuerza total no es 0.05 N (la mitad), sino 0.2 N (la suma). La segunda carga añade su propia fuerza completa de 0.1 N sin reducir la de la primera.


### Error 2: Sumar los módulos en lugar de los vectores

**Por qué parece correcto**

El álgebra escalar es más cómoda que el álgebra vectorial. El alumno ha resuelto muchos problemas de sumas escalares y tiende a aplicar la misma operación, interpretando "sumar fuerzas" como "sumar sus intensidades numéricas".

**Por qué es incorrecto**

La fuerza eléctrica es un vector. Dos fuerzas iguales en módulo pero opuestas en dirección producen [[fuerza_electrica_total]] nulo, no el doble. La suma escalar siempre sobreestima la magnitud de [[fuerza_electrica_total]] salvo cuando todas las contribuciones son estrictamente paralelas y del mismo sentido, que es el caso menos frecuente en geometrías reales.

**Señal de detección**

El alumno obtiene [[fuerza_electrica_total]] como la suma aritmética de los módulos individuales, sin descomponer en componentes ni usar el teorema de Pitágoras. El resultado es siempre mayor o igual que cualquier contribución individual.

**Corrección conceptual**

Para sumar vectores: descomponer cada vector en componentes x e y, sumar todas las componentes x entre sí y todas las y entre sí, y calcular el módulo del vector resultante con el teorema de Pitágoras. El ángulo se obtiene con la función arco tangente de la componente y entre la componente x.

**Mini-ejemplo de contraste**

Dos fuerzas de 3 N y 4 N que actúan en dirección perpendicular: la suma escalar daría 7 N, pero el módulo vectorial correcto es 5 N (raíz de 9 más 16). Si las dos fuerzas actúan en sentidos opuestos, la suma escalar daría 7 N, pero el módulo vectorial es 1 N.

## Errores de modelo


### Error 3: Usar el modelo de superposición en presencia de conductores sin tratar la inducción

**Por qué parece correcto**

El alumno aplica directamente la fórmula de la suma de superposición con las cargas tal como aparecen en el enunciado, sin considerar que la presencia de conductores próximos redistribuye las cargas en sus superficies y modifica el campo resultante.

**Por qué es incorrecto**

Cuando hay conductores en el sistema, las cargas libres de su superficie se redistribuyen en respuesta al campo externo. Las cargas inducidas crean su propio campo que se suma al de las cargas originales. La suma directa de los campos de las cargas originales sin incluir las cargas inducidas subestima o sobreestima el campo real.

**Señal de detección**

El problema menciona conductores metálicos o esferas conductoras próximas a las cargas fuente, pero el alumno usa solo los valores de carga del enunciado sin considerar las cargas imagen o inducidas.

**Corrección conceptual**

Para conductores próximos, hay que incluir las cargas inducidas (cargas imagen o solución por método de imágenes) en la suma de superposición. El modelo de carga puntual simple solo es válido cuando los conductores están suficientemente alejados para que la inducción sea despreciable.

**Mini-ejemplo de contraste**

Una carga positiva a 5 cm de una esfera conductora aterrizada atrae a la esfera más de lo que predice el campo de Coulomb simple, porque induce cargas negativas en el lado próximo de la esfera. El modelo de superposición sin cargas imagen predice una fuerza menor que la real.

## Errores matemáticos


### Error 4: Medir las distancias incorrectamente

**Por qué parece correcto**

Cuando hay varias cargas, el alumno a veces usa la distancia entre dos cargas fuente como [[r_i]], confundiendo la separación entre cargas con la distancia desde cada carga hasta el punto de observación.

**Por qué es incorrecto**

La suma de superposición requiere la distancia desde **cada carga fuente i** hasta el **punto de observación**, no la distancia entre cargas fuente. Si hay dos cargas separadas 10 cm y el punto de observación está 8 cm de la primera y 6 cm de la segunda, los valores correctos son 0.08 m y 0.06 m, no 0.10 m.

**Señal de detección**

El alumno usa un único valor de distancia para todas las contribuciones, o usa la distancia entre cargas fuente como si fuera la distancia de cada una al punto de observación.

**Corrección conceptual**

Para cada carga fuente i, trazar un segmento desde esa carga hasta el punto de observación y medir su longitud. Esa longitud es [[r_i]] para esa carga específica. Cada carga tiene su propio [[r_i]], que en general es diferente.

**Mini-ejemplo de contraste**

Con dos cargas en los puntos (0,0) y (0.1,0) y el punto de observación en (0.05,0.05), la distancia de la primera carga al punto es la raíz de (0.05² + 0.05²), y la distancia de la segunda es la misma por simetría. Usar 0.10 m para ambas da un resultado equivocado por un factor de raíz de dos.

## Errores de interpretación


### Error 5: Concluir que un campo nulo implica que no hay cargas o que el espacio está vacío

**Por qué parece correcto**

El alumno asocia campo eléctrico nulo con ausencia de causa. Si no hay campo, concluye que no hay cargas. Esta asociación funciona para una sola carga, pero falla para sistemas de múltiples cargas.

**Por qué es incorrecto**

[[campo_electrico_total]] nulo en un punto es compatible con la presencia de múltiples cargas fuente cuyas contribuciones se cancelan vectorialmente en ese punto. El campo nulo no indica ausencia de cargas sino equilibrio entre las contribuciones. Alejándose de ese punto, el campo deja de ser nulo porque las distancias [[r_i]] cambian de forma diferente para cada carga.

**Señal de detección**

El alumno escribe "en ese punto no hay campo porque las cargas se cancelan" o "el campo es cero porque las cargas se neutralizan", interpretando la cancelación de campo como aniquilación de cargas.

**Corrección conceptual**

Las cargas no se aniquilan: simplemente sus campos se cancelan en ese punto particular. Las cargas siguen existiendo, siguen creando sus campos individuales, y en cualquier otro punto del espacio el campo no será nulo. El punto de campo nulo es una consecuencia geométrica de la posición relativa de las cargas, no de su desaparición.

**Mini-ejemplo de contraste**

Dos cargas positivas iguales a 10 cm de distancia: en el punto medio entre ellas [[campo_electrico_total]] es nulo porque los dos campos son iguales y opuestos. Pero si colocamos una tercera carga en ese punto medio, experimenta fuerzas de repulsión de ambas cargas originales. Las cargas originales siguen presentes y activas; simplemente su efecto se cancela en ese único punto.

## Regla de autocontrol rápido

Después de calcular [[fuerza_electrica_total]] o [[campo_electrico_total]] por superposición, verificar los tres puntos siguientes:

1. **Suma vectorial**: el resultado se obtuvo sumando componentes x e y por separado, no sumando módulos. Si se usó solo aritmética escalar, recalcular.

2. **Distancias correctas**: cada distancia [[r_i]] mide desde la carga fuente i hasta el punto de observación, no entre cargas fuente. Si todas las distancias usadas son iguales pero las cargas están en posiciones distintas, hay un error.

3. **Signos incluidos**: el signo de cada [[q_i]] se incorporó en la dirección de su contribución vectorial. Si se usó el valor absoluto de todas las cargas, el signo de las contribuciones de las cargas negativas está invertido.