const e=`# Errores comunes al aplicar la conservación

## Errores conceptuales

### Error 1: Ignorar el carácter vectorial del momento

**Por qué parece correcto**: La fórmula de [[momento_lineal_individual]] como producto de masa por [[velocidad_individual]] da siempre un resultado numérico positivo cuando se usan módulos, y los estudiantes suman las magnitudes como si fueran escalares.

**Por qué es incorrecto**: El [[momento_lineal_total]] es una cantidad vectorial; su suma requiere respetar la dirección y el sentido de cada [[velocidad_individual]]. Sumar módulos en lugar de vectores produce un [[Pinitial]] completamente erróneo.

**Señal de detección**: Si en un choque frontal el resultado del balance te da un [[momento_lineal_total]] mayor que cualquiera de los momentos individuales, probablemente sumaste módulos en vez de vectores.

**Corrección conceptual**: Asigna un eje positivo (→) antes de calcular. Cualquier [[velocidad_individual]] en sentido contrario lleva signo negativo, y su [[momento_lineal_individual]] también.

**Mini-ejemplo**: Dos cuerpos de [[masa_individual]] 2 kg se mueven a 5 m/s en sentidos opuestos. El [[momento_lineal_total]] es 2·5 + 2·(−5) = 0, no 20 kg·m/s.

### Error 2: Confundir fuerzas internas con externas

**Por qué parece correcto**: La fuerza de colisión es la causa visible del cambio de [[velocidad_individual]], por lo que parece natural incluirla como [[fuerza_externa_neta]].

**Por qué es incorrecto**: Las fuerzas entre los propios cuerpos del sistema son internas y actúan en pares iguales y opuestos (3ª ley de Newton). Su impulso neto sobre el sistema es siempre cero y no altera el [[momento_lineal_total]].

**Señal de detección**: Si incluyes la fuerza del choque en la [[fuerza_externa_neta]] y la [[variacion_momento_lineal]] no te resulta nula en un sistema que debería estar aislado, el error está en la clasificación de fuerzas.

**Corrección conceptual**: Define el sistema antes de clasificar las fuerzas. Una fuerza es externa solo si proviene de un objeto fuera de tu sistema definido.

**Mini-ejemplo**: En una explosión entre dos cuerpos sobre hielo sin fricción, la [[fuerza_externa_neta]] horizontal es cero; la fuerza de la explosión es interna al sistema {cuerpo 1 + cuerpo 2}.

## Errores de modelo

### Error 3: No verificar la condición de aislamiento

**Por qué parece correcto**: La ecuación de conservación del [[momento_lineal_total]] parece siempre aplicable como si fuera una ley universal sin condiciones.

**Por qué es incorrecto**: La conservación del [[momento_lineal_total]] solo es válida cuando la [[fuerza_externa_neta]] es nula. Si hay una [[fuerza_externa_neta]] actuando durante el [[tiempo]] del proceso, la [[variacion_momento_lineal]] no es nula y el balance no se cumple.

**Señal de detección**: Si el resultado viola el sentido físico del problema (por ejemplo, el sistema gana velocidad sin ninguna causa aparente), verifica si hay una [[fuerza_externa_neta]] que hayas ignorado.

**Corrección conceptual**: Antes de aplicar el balance, comprueba explícitamente que la [[fuerza_externa_neta]] es nula o que su impulso durante el [[tiempo]] del choque es despreciable frente al intercambio interno.

**Mini-ejemplo**: Una pelota que cae y rebota en el suelo: el sistema pelota no está aislado (actúa la [[fuerza_externa_neta]] del suelo). El sistema {pelota + Tierra} sí lo está.

### Error 4: Confundir colisión elástica con inelástica

**Por qué parece correcto**: Ambos tipos de choque conservan el [[momento_lineal_total]], por lo que a veces se usan ambas condiciones (momento y energía) indistintamente.

**Por qué es incorrecto**: En una colisión perfectamente inelástica se conserva el [[momento_lineal_total]] pero NO la energía cinética. Usar simultáneamente ambas conservaciones cuando el choque no es elástico produce ecuaciones incompatibles y valores físicamente imposibles de [[v1f]] y [[v2f]].

**Señal de detección**: Si los valores de [[v1f]] y [[v2f]] obtenidos al combinar los dos balances no satisfacen el balance de momento por separado, has aplicado una condición incorrecta.

**Corrección conceptual**: Si el enunciado dice que los cuerpos "se pegan" o "quedan unidos", aplica la fórmula de colisión perfectamente inelástica:

**Mini-ejemplo**: Un proyectil de [[m1]] = 0.1 kg a [[v1i]] = 200 m/s se incrusta en un bloque de [[m2]] = 2 kg en reposo. Aquí solo aplica la colisión perfectamente inelástica; la energía cinética no se conserva.

## Errores matemáticos

### Error 5: Mezclar estados iniciales y finales en la ecuación

**Por qué parece correcto**: Al copiar la fórmula del balance, un despiste hace que se tome un valor final y se lo coloque en el lado inicial de la ecuación.

**Por qué es incorrecto**: El [[Pinitial]] agrupa todos los [[momento_lineal_individual]] anteriores a la interacción y el [[Pfinal]] todos los posteriores. Mezclarlos invalida matemáticamente la ecuación y produce resultados sin sentido físico.

**Señal de detección**: Si al sustituir valores obtienes una identidad (ambos lados iguales) cuando no debería serlo, o un resultado absurdo, revisa que cada velocidad esté en el lado correcto del balance.

**Corrección conceptual**: Escribe primero el estado inicial completo (todas las masas con sus velocidades antes del evento) igualado al estado final completo (todas las masas con sus velocidades después).

**Mini-ejemplo**: Balance correcto: [[m1]] por [[v1i]] más [[m2]] por [[v2i]] igual a [[m1]] por [[v1f]] más [[m2]] por [[v2f]]. Error típico: intercambiar alguna velocidad inicial y final en uno de los lados del balance.

### Error 6: Errores de signo en las velocidades

**Por qué parece correcto**: La rapidez (módulo de la velocidad) siempre es positiva, y se tiende a usar este valor sin añadir el signo según el eje de referencia.

**Por qué es incorrecto**: No asignar el signo correcto de la [[velocidad_individual]] produce un [[Pinitial]] erróneo. En choques frontales, el cuerpo que se aproxima desde la derecha debe llevar signo negativo si el eje positivo apunta a la izquierda.

**Señal de detección**: Si el signo de la [[vf]] o [[v1f]] resultante es opuesto al que espera la física (por ejemplo, un cuerpo que debería rebotar hacia atrás sale con signo positivo), hay un error de asignación de signos.

**Corrección conceptual**: Dibuja el diagrama antes de resolver. Define explícitamente el sentido positivo y asigna el signo de cada [[velocidad_individual]] según ese criterio, antes de sustituir en el balance.

**Mini-ejemplo**: Si el eje positivo es →, un cuerpo que llega desde la derecha a 3 m/s tiene [[v2i]] = −3 m/s, no +3 m/s.

## Errores de interpretación

### Error 7: Interpretar momento total cero como ausencia de movimiento

**Por qué parece correcto**: En el lenguaje cotidiano, "sin movimiento" y "suma igual a cero" se asocian. Un [[momento_lineal_total]] nulo suena a sistema en reposo.

**Por qué es incorrecto**: Un [[momento_lineal_total]] nulo solo significa que los [[momento_lineal_individual]] se compensan vectorialmente. Cada cuerpo puede estar en movimiento con mucha energía cinética aunque el momento total sea cero.

**Señal de detección**: Si encuentras [[momento_lineal_total]] = 0 pero los cuerpos tienen claramente velocidades distintas de cero, no hay contradicción: es simplemente que sus momentos se cancelan.

**Corrección conceptual**: El momento total nulo no implica reposo; implica que la suma vectorial es cero. En explosiones desde el reposo, el [[Pinitial]] = 0 y tras la explosión los cuerpos se mueven con velocidades opuestas cuya suma vectorial sigue siendo cero.

**Mini-ejemplo**: En la ley de retroceso (separación desde el reposo), el [[momento_lineal_total]] es cero antes y después, pero ambos cuerpos se mueven en sentidos opuestos con velocidades distintas de cero.

### Error 8: Olvidar que la conservación es por componentes en 2D

**Por qué parece correcto**: En problemas 1D, una sola ecuación resuelve el problema, y se tiende a extender este hábito a problemas bidimensionales.

**Por qué es incorrecto**: En problemas bidimensionales, el [[momento_lineal_total]] puede conservarse en el eje x (donde la [[fuerza_externa_neta]] es nula) pero no en el eje y (donde actúa la gravedad o una normal). Hay que plantear dos ecuaciones de balance independientes.

**Señal de detección**: Si en un problema 2D solo planteas una ecuación escalar, el sistema está sobredeterminado o indeterminado. Revisa si hay dos incógnitas (componentes de velocidad) que requieren dos ecuaciones.

**Corrección conceptual**: Descompón todos los vectores de [[momento_lineal_individual]] en componentes x e y. Escribe el balance separado para cada componente, aplicando la conservación solo en los ejes donde la [[fuerza_externa_neta]] es efectivamente nula.

**Mini-ejemplo**: En una colisión 2D donde hay fricción en el eje y pero no en el x, el balance se aplica solo en el eje x, siendo la suma de los momentos en x antes del choque igual a la suma después.

## Regla de autocontrol rápido

Antes de dar por válido cualquier resultado, comprueba estos cinco puntos:

1. ¿Definí claramente qué objetos forman el sistema y cuál es su [[fuerza_externa_neta]] neta?
2. ¿La suma vectorial de todos los [[momento_lineal_individual]] antes del evento ([[Pinitial]]) es igual a la suma después ([[Pfinal]])?
3. ¿La [[variacion_momento_lineal]] obtenida es coherente con la condición de aislamiento?
4. ¿Asigné correctamente los signos de todas las velocidades ([[v1i]], [[v2i]], [[v1f]], [[v2f]]) según mi eje de referencia positivo?
5. ¿El resultado tiene las unidades correctas (kg·m/s para el momento, m/s para las velocidades) y el signo es físicamente razonable?
`;export{e as default};
