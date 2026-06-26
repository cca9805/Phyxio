# Ejemplo tipo examen

## Enunciado
Un volante de inercia cilíndrico de acero de masa 1500 kg y radio 1.2 m gira inicialmente a una [[velocidad-angular]] constante de 300 rad/s. Repentinamente, se acopla un generador que aplica un [[torque]] resistente constante de 450 N·m. Calcula el tiempo necesario para que el sistema reduzca su velocidad a la mitad y determina la [[posicion-angular]] total recorrida por el volante durante este proceso de frenado. Además, evalúa la potencia instantánea inicial y la velocidad tangencial de un punto en la periferia del volante en el instante final del proceso.

## Datos
- Masa del volante (M): 1500 kg
- Radio del volante (R): 1.2 m
- Velocidad angular inicial (omega_0): 300 rad/s
- Velocidad angular final (omega_f): 150 rad/s (la mitad de la inicial)
- [[torque]] resistente constante (tau): -450 N·m (valor negativo indicando que el vector [[torque]] se opone al vector de velocidad angular inicial)

## Definición del sistema
El sistema se define como un sólido rígido con simetría cilíndrica que rota exclusivamente alrededor de un eje principal de inercia fijo. No existen movimientos de traslación del centro de masas, por lo que toda la energía del sistema es puramente rotacional. Las variables dinámicas están acopladas mediante la segunda ley de Newton para la rotación, tratando el sistema como un conjunto de partículas cuya distancia al eje permanece invariable durante todo el proceso de frenado.

## Modelo físico
Adoptamos el modelo de un cilindro sólido ideal de densidad uniforme, donde el [[momento-de-inercia]] depende cuadráticamente del radio. El comportamiento cinemático está definido por la [[posicion-angular]] y la [[velocidad-angular]], mientras que la respuesta dinámica depende de la [[aceleracion-angular]] producida por el [[torque]] neto aplicado. Se asume que el eje de rotación es perfectamente rígido y que no existen efectos de precesión, permitiendo un análisis en una sola dimensión angular.

## Justificación del modelo
La elección de un sólido rígido es adecuada dado que el acero de grado industrial posee un módulo de Young extremadamente alto, lo que garantiza que las deformaciones torsionales sean órdenes de magnitud menores que el desplazamiento angular total. La hipótesis de [[torque]] constante es válida para sistemas de frenado regenerativo controlados electrónicamente. Ignorar la fricción del aire es aceptable en una primera aproximación si el volante opera en una cámara protegida o si el [[torque]] aplicado es significativamente superior a las fuerzas de arrastre aerodinámico residuales.

## Resolución simbólica
La resolución comienza con la determinación de la constante inercial del sistema:
{{f:posicion-angular-definicion}}
Aplicando la segunda ley de la rotación, obtenemos la aceleración angular constante:
{{f:segunda-ley-rotacion}}
Utilizamos la ecuación de la cinemática rotacional para el tiempo de frenado:
{{f:posicion-angular-definicion}}
Para el desplazamiento angular total, recurrimos a la ecuación horaria angular con aceleración constante:
{{f:posicion-angular-definicion}}
La potencia instantánea se calcula como

{{f:posicion-angular-definicion}}

.
Finalmente, la velocidad tangencial se halla mediante la relación lineal-angular:
{{f:relacion-lineal-angular-v}}

## Sustitución numérica
1. **Momento de inercia (I):**
   {{f:posicion-angular-definicion}}
2. **Aceleración angular (alpha):**
   {{f:posicion-angular-definicion}}
3. **Tiempo de frenado parcial (t):**
   {{f:posicion-angular-definicion}}
4. **Desplazamiento angular total ([[posicion-angular]]):**
   {{f:posicion-angular-definicion}}
5. **Velocidad tangencial final (v_f):**
   {{f:posicion-angular-definicion}}

## Validación dimensional
- **Inercia (I):**

{{f:segunda-ley-rotacion}}

. Correcto.
- **Aceleración ([[aceleracion-angular]]):**

{{f:posicion-angular-definicion}}

(rad/s²). Correcto.
- **Ángulo ([[posicion-angular]]):**

{{f:posicion-angular-definicion}}

. Correcto.
- **Velocidad (v):**

{{f:relacion-lineal-angular-v}}

. Correcto.

## Interpretación física
El resultado de 81000 radianes **indica** que el volante recorre casi trece mil revoluciones completas antes de reducir su velocidad a la mitad. Esto **significa** que el sistema posee una inercia rotacional considerable que **se opone** eficazmente a los cambios bruscos de movimiento. La aceleración negativa **indica** que el [[torque]] aplicado **disminuye** la energía cinética del sistema de forma controlada. Físicamente, esto es **coherente** con el hecho de que el [[torque]] resistente extrae trabajo del sistema para convertirlo en electricidad. Además, el valor de la velocidad tangencial **depende** directamente del radio, lo que **implica** que los esfuerzos estructurales son mayores en la periferia, donde el material **domina** la respuesta dinámica frente a la fuerza centrípeta.

# Ejemplo de aplicación real

## Contexto
En las modernas microrredes de energía renovable, se utilizan volantes de inercia de alta velocidad (FESS) fabricados en fibra de carbono. Estos dispositivos operan en cámaras de vacío para eliminar el rozamiento del aire y utilizan rodamientos magnéticos de levitación. Un volante típico de este tipo puede girar a velocidades de hasta 50000 RPM. Su función principal es actuar como un amortiguador de frecuencia, inyectando o absorbiendo energía en milisegundos para estabilizar la red eléctrica ante la intermitencia de fuentes solares o eólicas.

## Estimación física
Para un volante de 100 kg con un radio de 0.4 m girando a 30000 RPM, la energía almacenada es del orden de decenas de megajulios. La velocidad en la periferia del disco alcanza valores supersónicos (

{{f:relacion-lineal-angular-v}}

), lo que genera tensiones internas inmensas. Una estimación razonable del tiempo de respuesta del sistema es de menos de 20 ms, lo que lo hace órdenes de magnitud más rápido que una planta térmica convencional. El costo por unidad de energía es alto, pero el costo por ciclo es extremadamente bajo, justificando su uso en infraestructuras críticas.

## Interpretación
La ventaja crítica del volante frente a las baterías químicas es su capacidad de realizar millones de ciclos de carga y descarga sin degradación. La interpretación física de su funcionamiento se basa en la manipulación precisa del momento angular. Cuando hay un exceso de energía en la red, el sistema acelera el disco aumentando su [[velocidad-angular]]; cuando hay déficit, el disco se frena para entregar energía. La precisión en el control de la [[posicion-angular]] es fundamental para que la frecuencia de la corriente alterna generada sea exactamente de 50 Hz o 60 Hz, evitando daños en equipos sensibles.