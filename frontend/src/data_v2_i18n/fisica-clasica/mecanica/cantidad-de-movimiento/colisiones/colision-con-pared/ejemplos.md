# Ejemplo tipo examen

## Enunciado

Se analiza el impacto de un balón de baloncesto de masa [[m]] igual a 0,60 kg que es lanzado contra una pared vertical de concreto. El balón impacta oblicuamente con una velocidad inicial [[vi]] de 15 m/s, formando un ángulo de incidencia [[theta_i]] de 30° con la normal de la pared. Se ha determinado experimentalmente que el coeficiente de restitución [[e]] para este par de materiales es de 0,80. Asumiendo que la pared es perfectamente lisa y que el tiempo de contacto [[Delta_t]] durante el impacto es de 0,02 segundos, se solicita:
1. Calcular las componentes normal y tangencial de la velocidad tras el rebote, [[vfn]] y [[vft]].
2. Determinar la magnitud de la velocidad final [[vf]] y el ángulo de rebote [[theta_f]].
3. Cuantificar el impulso lineal [[J]] ejercido por la pared y la fuerza media de impacto [[F_avg]].
4. Calcular la pérdida de energía cinética [[DeltaK]] producida por el choque.
5. Si este choque hubiese ocurrido tras una caída libre, ¿cómo se relacionaría con la altura de rebote [[hf]]?

## Datos

Para la resolución, organizamos los parámetros físicos:
- **Propiedades inerciales**: Masa [[m]] = 0,60 kg.
- **Estado cinemático inicial**: Velocidad [[vi]] = 15 m/s con ángulo [[theta_i]] = 30°.
- **Parámetros del contacto**: Coeficiente de restitución [[e]] = 0,80 y tiempo de contacto [[Delta_t]] = 0,02 s.

Se asume un sistema de referencia donde la normal a la pared apunta en el sentido positivo del eje X para el rebote.

## Definición del sistema

El sistema físico está compuesto por el balón en interacción con la pared. Debido a la enorme diferencia de masas, la pared se modela como un objeto fijo de masa infinita que no se desplaza ni absorbe momento lineal de forma macroscópica. Toda la transferencia de momento se traduce en el cambio de velocidad del balón. El sistema se considera aislado en cuanto a fuerzas impulsivas durante el brevísimo intervalo del choque.

## Modelo físico

Se aplica el modelo de colisión con pared lisa. En este marco, el coeficiente de restitución [[e]] solo afecta a la componente de la velocidad perpendicular a la superficie, mientras que la componente paralela (tangencial) se conserva íntegramente. Se utilizarán las leyes de Newton en su forma impulsiva y el balance de energía mecánica para cuantificar la disipación.

## Justificación del modelo

La elección se justifica por la naturaleza del contacto. Al ser una pared de concreto "lisa", las fuerzas de fricción tangenciales durante el impacto son despreciables comparadas con la enorme fuerza normal de restitución. Por tanto, la conservación de la componente tangencial [[vft]] es una aproximación excelente. El uso de [[e]] permite evitar el análisis de las deformaciones elásticas complejas de la pelota, resumiendo toda la física del contacto en un parámetro experimental robusto. Si estuviéramos ante una superficie rugosa, el modelo de conservación tangencial fallaría.

## Resolución simbólica

El procedimiento se desglosa en los siguientes pasos analíticos:

1. **Descomposición de la velocidad inicial**:
   Se obtienen las componentes normal [[vin]] y tangencial [[vit]] usando la proyección de la velocidad inicial [[vi]] sobre los ejes normal y paralelo a la superficie.

2. **Cálculo de componentes de rebote**:
   Aplicamos la ley de restitución para la componente normal [[vfn]]:

{{f:vfn}}

   Y la condición de pared lisa para la tangencial [[vft]]:

{{f:vft}}

3. **Composición de la velocidad final**:
   La magnitud de la velocidad final [[vf]] se obtiene mediante la suma vectorial de sus componentes y el ángulo [[theta_f]] mediante la ley de reflexión modificada:

{{f:rebound_angle}}

4. **Análisis impulsivo**:
   El impulso [[J]] se calcula a partir del cambio en la cantidad de movimiento experimentado por el cuerpo de masa [[m]]:

{{f:impulse_wall}}

   La fuerza media [[F_avg]] se deriva de la relación entre el impulso total [[J]] y la duración del contacto [[Delta_t]]:

{{f:average_force_wall}}

5. **Balance energético**:
   La disipación de energía [[DeltaK]] se obtiene evaluando el cambio neto en la energía cinética [[K]] del sistema:

{{f:energy_loss_wall}}

6. **Relación con alturas**:
   Como comprobación de consistencia del leaf, la relación entre altura de rebote [[hf]] y caída [[h0]] vendría dada por:

{{f:rebound_height}}

## Sustitución numérica

Realizamos los cálculos con los valores proporcionados:

1. **Componentes iniciales**:
   La componente normal inicial [[vin]] es de -12,99 m/s (hacia la pared) y la tangencial [[vit]] es de 7,50 m/s.

2. **Componentes de salida**:
   Usando el valor de 0,80 para [[e]], obtenemos una componente normal final [[vfn]] de 10,39 m/s, mientras que la tangencial [[vft]] se mantiene en 7,50 m/s.

3. **Velocidad y ángulo final**:
   La rapidez final [[vf]] resultante es de aproximadamente 12,81 m/s, con un ángulo de rebote [[theta_f]] de 35,8 grados respecto a la normal.

4. **Impulso y Fuerza**:
   El impulso [[J]] neto es de 14,03 N s. Al dividirlo por el tiempo de contacto [[Delta_t]], resulta una fuerza media [[F_avg]] de 701,5 N.

5. **Energía disipada**:
   La energía cinética [[K]] inicial es de 67,5 J y la final es de 49,2 J, lo que arroja una pérdida [[DeltaK]] de 18,3 J.

## Validación dimensional

Todas las magnitudes obtenidas respetan las unidades del Sistema Internacional. Se verifica que el valor calculado cumple con la restricción termodinámica del sistema para el coeficiente [[e]]:

{{f:rango_e}}

Esto asegura que no hay ganancia de energía cinética [[K]] neta en el choque pasivo.

## Interpretación física

Los resultados revelan un comportamiento típico de una colisión parcialmente inelástica, donde el intercambio de energía no es perfecto. El objeto sale del impacto habiendo perdido una fracción sustancial de su capacidad de movimiento original, lo que indica que el material ha absorbido parte de la intensidad del golpe mediante micro-deformaciones internas. Esta pérdida de velocidad se localiza exclusivamente en el eje perpendicular a la superficie, lo que rompe la simetría especular del rebote y provoca que el ángulo de salida sea mayor que el de entrada; es decir, el balón se "aleja" de la normal de la pared más de lo que se acercó.

Desde el punto de vista del modelo dinámico, el hecho de que el contacto dure un tiempo tan extremadamente reducido implica que las fuerzas de interacción deben ser colosales para lograr revertir el sentido de la marcha de un cuerpo con inercia. La pared, actuando como un espejo inercial infinito, devuelve el impulso sin inmutarse, obligando al proyectil a gestionar toda la disipación energética. Este proceso ilustra la transformación del movimiento macroscópico ordenado en desorden térmico y vibraciones acústicas, que percibimos como el sonido característico del impacto.

La interpretación causal de este resultado es fundamental para la ingeniería de seguridad: el objeto pierde una quinta parte de su rapidez normal en cada encuentro. Este comportamiento demuestra que la superficie, por muy rígida que parezca, no es un agente pasivo, sino un sumidero de energía que impone límites termodinámicos infranqueables a la recuperación del movimiento. En un entorno real, esta disipación es la que garantiza que los sistemas físicos tiendan al reposo tras una serie de rebotes sucesivos.

# Ejemplo de aplicación real

## Contexto

Consideremos un escenario de control de calidad en una fábrica de materiales deportivos. Se desea verificar el cumplimiento de la normativa para una pelota de tenis de alta competición. El procedimiento estándar consiste en un ensayo de caída libre vertical sobre una placa de granito perfectamente rígida. La pelota se libera desde una altura inicial [[h0]] de 2,00 metros. Tras el impacto, se mide la altura máxima del primer rebote [[hf]]. En nuestra prueba, se registra una altura de rebote [[hf]] de 1,28 metros. Se requiere determinar el coeficiente de restitución [[e]] del lote y predecir la altura máxima tras el tercer rebote.

## Estimación física

El análisis preliminar sugiere que la colisión es altamente eficiente, pero con una pérdida clara de energía potencial. Dado que el objeto logra recuperar más de la mitad de su elevación original tras el primer encuentro, podemos inferir que el material posee una memoria elástica excelente. Sin embargo, la diferencia entre las alturas delata que una fracción de la energía mecánica se ha transformado irreversiblemente. Esta estimación cualitativa nos prepara para encontrar un valor de restitución cercano a la unidad, propio de materiales diseñados para el alto rendimiento deportivo donde el retorno de energía es crítico.

## Interpretación

Para obtener el valor técnico preciso, aplicamos la fórmula de derivación experimental que vincula la cinemática de caída con la respuesta del material:

{{f:rebound_height}}

Sustituyendo los valores medidos, obtenemos un coeficiente de restitución exactamente igual a 0,80.

La interpretación física profunda de este dato revela que la estructura molecular de la pelota permite una recuperación rápida de la deformación sufrida durante el brevísimo instante del impacto. El hecho de que no recupere la altura total se debe a la histéresis del material y a la resistencia del aire, aunque el modelo simplificado atribuye toda la pérdida al contacto. En este escenario, la masa colosal del planeta absorbe el impulso sin experimentar cambios detectables, mientras que el proyectil manifiesta la fenomenología del rebote bajo las leyes de la termodinámica. Este proceso de calibración es vital para asegurar que todas las pelotas del lote se comporten de manera predecible durante un partido, donde la consistencia del rebote define la calidad del juego.

