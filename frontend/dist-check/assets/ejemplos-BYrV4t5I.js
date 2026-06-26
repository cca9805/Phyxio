const e=`\uFEFF# Ejemplo tipo examen

## Enunciado
Un proyectil de masa [[m1]] = 50 g se dispara horizontalmente contra un bloque de madera de masa [[m2]] = 4.95 kg que se encuentra inicialmente en reposo sobre una superficie sin fricción. El proyectil atraviesa el aire y se incrusta profundamente en el bloque, quedando ambos cuerpos firmemente unidos. Tras el impacto, el conjunto comienza a deslizar como un solo objeto. Sabiendo que la velocidad final medida del conjunto es [[vf]] = 2 m/s, determina la velocidad inicial del proyectil [[v1i]] justo antes del impacto. Adicionalmente, calcula la energía cinética disipada [[DeltaK]] y la fracción de energía mecánica que se ha transformado en otras formas de energía [[loss_fraction]].

## Datos
- Masa del proyectil: [[m1]] = 0.05 kg (convertido desde 50 g para mantener unidades SI).
- Masa del blanco (bloque): [[m2]] = 4.95 kg.
- Velocidad inicial del bloque: [[v2i]] = 0 m/s (en reposo).
- Velocidad final común del conjunto: [[vf]] = 2 m/s.

## Definición del sistema
El sistema bajo estudio está compuesto por dos partículas macroscópicas: el proyectil incidente y el bloque receptor. Durante el intervalo temporal extremadamente corto en el que ocurre el choque, las fuerzas externas netas (como el peso compensado por la normal en la superficie horizontal) no producen un impulso significativo en la dirección del movimiento. Por lo tanto, el sistema se considera aislado en el eje X, lo que garantiza la conservación de la cantidad de movimiento total [[p]]. El estado final se caracteriza por una masa única igual a la suma de las masas individuales moviéndose a una velocidad compartida.

## Modelo físico
Para resolver este problema, empleamos el **Modelo de Colisión Totalmente Inelástica en una dimensión (1D)**. Este modelo se basa en los siguientes pilares físicos:
1. **Conservación del Momento Lineal**: El momento total antes del impacto es igual al momento total después, puesto que no hay fuerzas externas horizontales.
2. **Acoplamiento de Masas**: Los cuerpos no rebotan; el coeficiente de restitución es estrictamente nulo.
3. **Disipación Máxima**: Se pierde la mayor cantidad de energía cinética posible para un sistema que debe conservar su momento total. La energía final es la mínima necesaria para que el centro de masas siga su trayectoria.
4. **Cinemática Compartida**: Las velocidades finales de ambos cuerpos son idénticas, simplificando el número de incógnitas del problema a una única [[vf]]. Este acoplamiento depende de las masas iniciales [[m1]] y [[m2]] y sus velocidades respectivas.

## Justificación del modelo
La elección de este modelo es obligatoria debido a la descripción explícita de que el proyectil "se incrusta" en el bloque. En física, esta frase es un código técnico para indicar que los cuerpos pasan de ser dos entidades independientes a formar un sistema rígido acoplado. Al no existir mención de rebote ni de fuerzas elásticas recuperadoras que separen los cuerpos, el modelo totalmente inelástico es el único capaz de describir la transferencia de momento sin violar las leyes de la termodinámica. Este modelo es especialmente útil porque nos permite ignorar la complejidad de las fuerzas de fricción interna y deformación plástica que ocurren durante el choque, ya que la conservación de [[p]] actúa como una restricción geométrica superior que dicta el resultado final independientemente del mecanismo de disipación.

## Resolución simbólica
El primer paso consiste en plantear el balance de cantidad de movimiento para el sistema:

{{f:p_balance}}

Despejamos la velocidad inicial del proyectil [[v1i]] a partir de la velocidad compartida, resultando en una expresión donde [[v1i]] es el producto de la masa total por la velocidad final, dividido por la masa del proyectil. La expresión para la velocidad compartida es:

{{f:vf}}

Una vez obtenida la velocidad de entrada, procedemos al análisis energético. Calculamos la energía cinética inicial del sistema [[Ki]] y la energía cinética que sobrevive tras el impacto [[Kf]]:

{{f:Ki}}
{{f:Kf}}

La variación de energía [[DeltaK]], que representa el trabajo de las fuerzas no conservativas durante el impacto, se obtiene por diferencia:

{{f:DeltaK}}

Finalmente, para cuantificar la eficiencia de la disipación, calculamos la fracción de energía perdida [[loss_fraction]]:

{{f:loss_fraction}}

## Sustitución numérica
Realizamos los cálculos utilizando las magnitudes registradas:

1. **Velocidad inicial del proyectil**:
   - Tras despejar y sustituir los valores conocidos, obtenemos [[v1i]] = 200 m/s.

2. **Balances de energía**:
   - Energía cinética inicial: [[Ki]] = 1000 J.
   - Energía cinética final: [[Kf]] = 10 J.
   - Variación de energía disipada: [[DeltaK]] = -990 J.

3. **Fracción de disipación**:
   - La proporción de pérdida resulta en [[loss_fraction]] = 0.99 (es decir, el 99%).

## Validación dimensional
La velocidad obtenida [[v1i]] tiene unidades de m/s, lo cual es coherente con el análisis de longitud partido por tiempo. La fracción de pérdida [[loss_fraction]] es un número adimensional comprendido entre 0 y 1, lo que valida su significado como proporción. Los valores energéticos en Julios (J) son consistentes con la escala de un proyectil de alta velocidad impactando un objeto masivo.

## Interpretación física
El resultado revela una asimetría extrema en la transferencia de energía. Aunque el momento lineal se conserva perfectamente (el sistema "hereda" toda la cantidad de movimiento de la bala), el 99% de la energía mecánica inicial se ha transformado en calor y deformación interna. Esta energía no ha desaparecido del universo, sino que se ha empleado íntegramente en romper las fibras de la madera, generar un intenso pulso sonoro y, sobre todo, aumentar la temperatura del bloque y de la bala debido al rozamiento interno masivo durante la penetración. La velocidad final de 2 m/s, comparada con los 200 m/s iniciales, ilustra cómo un blanco masivo es capaz de absorber el impacto de un proyectil ligero mediante una disipación casi total de su energía cinética relativa, reteniendo solo el mínimo necesario para el movimiento global del sistema.

# Ejemplo de aplicación real

## Contexto
En la ingeniería de seguridad automovilística, el diseño de las "zonas de deformación programada" busca aproximar las colisiones de alta energía al modelo totalmente inelástico. Cuando un vehículo impacta contra una barrera deformable, el objetivo es que el vehículo no "rebote" (lo que duplicaría el impulso sufrido por los ocupantes), sino que se detenga o avance unido a la barrera, maximizando la disipación de energía en la estructura metálica del coche.

## Estimación física
Consideremos un vehículo de prueba de [[m1]] = 1500 kg que impacta a 15 m/s (unos 54 km/h) contra una barrera de arena masiva de [[m2]] = 3000 kg. Al quedar el vehículo atrapado en la arena (choque totalmente inelástico), la velocidad final será de un **orden de magnitud** de 5 m/s. En este proceso, se disipan aproximadamente 112500 Julios de energía. Un **valor razonable** para la fuerza media de detención si el coche se detiene en 1 metro es de unos 100 kiloNewtons, energía que se emplea en deformar el chasis para proteger la cabina de pasajeros.

## Interpretación
Este ejemplo demuestra que forzar una colisión a ser totalmente inelástica (evitando el rebote) es una estrategia de seguridad vital. Al reducir [[vf]] mediante el acoplamiento con una masa mayor y disipar el máximo de energía cinética en deformación plástica controlada, se minimizan las aceleraciones bruscas. La conservación de [[p]] nos permite predecir con exactitud el estado de movimiento final, mientras que el análisis de [[DeltaK]] nos indica cuánta energía debe ser capaz de absorber la estructura del vehículo para que el impacto sea sobrevivible.
\r
`;export{e as default};
