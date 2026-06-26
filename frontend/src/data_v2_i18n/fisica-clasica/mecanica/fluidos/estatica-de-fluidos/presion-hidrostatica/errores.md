# Errores comunes en Presión Hidrostática

## Errores conceptuales

### Error 1: Creer que la presión depende de la forma del recipiente
#### Por qué parece correcto
Es intuitivo pensar que un volumen masivo de agua en un depósito ancho debe "pesar más" sobre el fondo que la misma altura de agua en un tubo estrecho. Visualmente, el volumen total del lago es abrumadoramente superior al del tubo, lo que induce al error de que la presión debe ser proporcional a esa masa total acumulada.

#### Por qué es incorrecto
La presión hidrostática, por definición, es una magnitud que depende del peso de la columna de fluido por cada unidad de área. La geometría horizontal del recipiente no añade peso adicional a la vertical de un punto específico del lecho. Según el Principio de Pascal y la ecuación fundamental de la hidrostática, solo la profundidad vertical [[h]] es operativa.

#### Señal de detección
Ocurre frecuentemente al intentar dimensionar compuertas de presas o válvulas de fondo comparando el diámetro del embalse con el de una tubería de prueba. Si el alumno pregunta "¿Pero no pesa más todo el lago?", ha caído en este error fundamental.

#### Corrección conceptual
Debes separar el concepto de fuerza total (que sí depende del área) del de presión (fuerza por unidad de área). La presión es una propiedad local del fluido a una cota determinada, independiente de cuánta masa haya a los lados.

#### Mini-ejemplo
En una torre de agua, la presión en la base es la misma si el tanque tiene 1 m de ancho o 10 m de ancho, siempre que el nivel del agua esté a la misma altura.

## Errores de modelo

### Error 2: Usar el modelo lineal en gases atmosféricos
#### Por qué parece correcto
Puesto que el aire es un fluido y tiene densidad, parece lógico aplicar la misma fórmula simplificada incremento de presion = [[rho]] g h que usamos en el agua. En distancias verticales pequeñas (pocos metros), este error pasa desapercibido porque la variación de densidad es casi imperceptible.

#### Por qué es incorrecto
A diferencia de los líquidos, los gases son fluidos altamente compresibles. La densidad del aire no es constante; disminuye a medida que subimos porque hay menos presión para compactarlo. Usar una [[rho]] constante para grandes desniveles genera errores exponenciales y resultados físicamente imposibles.

#### Señal de detección
Se detecta cuando se obtienen presiones negativas al calcular la presión en la cima de una gran montaña, o cuando el valor calculado ignora que la densidad del aire en la cumbre es mucho menor que a nivel del mar.

#### Corrección conceptual
Para fluidos compresibles como el aire, se debe utilizar el modelo exponencial barométrico, que tiene en cuenta que la densidad es una función de la propia presión.

#### Mini-ejemplo
A 8000 m de altitud, el aire es tan poco denso que el modelo lineal predeciría una presión de casi cero o negativa si usáramos la densidad del nivel del mar.

## Errores matemáticos

### Error 3: Omisión sistemática de la presión superficial
#### Por qué parece correcto
Al estudiar el incremento [[rho]] g h, el cerebro tiende a simplificar y tomar ese resultado como la "presión total". En muchos problemas de laboratorio se trabaja con presiones manométricas, lo que refuerza el hábito de ignorar la presión externa de referencia.

#### Por qué es incorrecto
La presión absoluta en un punto es la suma de todas las cargas que tiene encima. Si el fluido está expuesto a la atmósfera, el aire ya está ejerciendo presión antes de añadir la profundidad. Ignorar [[p0]] subestima la realidad física.

#### Señal de detección
Detectado cuando un buceador a 10 m de profundidad parece estar bajo "1 atmósfera" de presión, olvidando que ya estaba a 1 atm antes de entrar al agua.

#### Corrección conceptual
Diferencia siempre entre presión absoluta (p) y presión manométrica (incremento de presion). La absoluta siempre incluye la condición de contorno de la superficie (p_0).

#### Mini-ejemplo
Si la presión manométrica en una caldera es de 2 atm, la presión absoluta real que soportan las paredes desde el interior es de 3 atm (sumando la exterior).

## Errores de interpretación

### Error 4: Suponer que la presión empuja solo en dirección de la gravedad
#### Por qué parece correcto
Como la gravedad es vertical descendente, se asocia erróneamente que la presión "cae" sobre los objetos como si fuera una carga sólida, ejerciendo fuerza únicamente en las superficies horizontales superiores.

#### Por qué es incorrecto
En un fluido en reposo, la presión es una magnitud escalar que transmite fuerzas de manera isótropa (en todas direcciones) sobre cualquier superficie sumergida. El agua empuja las paredes laterales con la misma intensidad que empuja el suelo a esa misma profundidad.

#### Señal de detección
Dimensionar submarinos reforzando solo el techo o pensar que el cristal lateral de un acuario sufre menos carga que un cristal en el fondo a la misma cota vertical.

#### Corrección conceptual
La presión en un fluido es una propiedad del punto, no un vector. Al entrar en contacto con una superficie, genera una fuerza que es siempre perpendicular a dicha superficie en ese punto.

#### Mini-ejemplo
Un globo inflado bajo el agua no se aplasta solo por arriba, sino que se reduce su volumen de forma uniforme desde todos los ángulos.

## Regla de autocontrol rápido
Antes de entregar un ejercicio de hidrostática de fluidos, verifica estricta y visualmente estos tres indicadores en segundos:
1. **Verificación de Unidad Densidad:** ¿Está mi fluido parametrizado en kg/m^3? Densidades inusuales (g/cm^3) arruinarán fatalmente la operación de los formidables e imperdonables Pascales.
2. **Chequeo Barométrico:** ¿Te preguntan presión absoluta o manométrica? Si el recipiente no está cerrado y pide absoluta, asegúrate implacablemente de haber sumado la presión atmosférica [[p0]].
3. **Control Espacial:** ¿He medido mi profundidad [[h]] positivamente desde la superficie hacia abajo? La profundidad en fluidos siempre desciende y crece.

