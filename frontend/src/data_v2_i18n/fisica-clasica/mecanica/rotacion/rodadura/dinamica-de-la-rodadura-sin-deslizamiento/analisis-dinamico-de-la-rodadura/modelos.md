# Modelos Físicos de Rodadura

## Modelo ideal
El modelo ideal de rodadura sin deslizamiento se basa en la suposición de que existe un único punto de contacto geométrico entre el cuerpo rígido y la superficie. En este modelo, el cuerpo es perfectamente indeformable y la superficie es perfectamente rígida. Se asume que el acoplamiento entre la traslación y la rotación es instantáneo y absoluto, lo que permite el uso de la condición cinemática

{{f:vinculo-rodadura-acel}}

. Esta idealización es fundamental para el análisis de sistemas mecánicos eficientes donde la disipación de energía por deslizamiento se considera despreciable.

## Hipótesis
- **Cuerpo Indeformable**: El radio [[R]] se mantiene perfectamente constante, sin deformaciones elásticas en el área de contacto.
- **Contacto Puntual**: Ignoramos la superficie de contacto finita (parche de contacto) y los efectos de la histéresis del material.
- **Fricción Estática Suficiente**: Se asume que el entorno proporciona la fuerza necesaria para mantener el vínculo sin que se produzca un deslizamiento relativo.
- **Ausencia de rodadura de rodadura**: Se desprecia el torque de resistencia a la rodadura debido a la deformación del suelo.

## Dominio de validez cuantitativo
Este modelo es válido siempre que se cumpla la desigualdad física **[[fs]] <= [[mu_s]] * N**. Específicamente, se requiere que el coeficiente de fricción estática cumpla **[[mu_s]] > 0.15** para la mayoría de los casos prácticos en pendientes moderadas (menores a 30 grados). Para pendientes superiores, el valor de la fricción estática [[fs]] requerida aumenta de forma no lineal siguiendo la tangente del ángulo. El orden de magnitud de la fuerza de fricción estática [[fs]] suele ser de **10^-1** a **10^1** Newtons en experimentos de laboratorio con masas de alrededor de 1 kg. Si el ángulo de inclinación supera los 45 grados, el modelo suele colapsar en casi cualquier superficie natural debido al límite de Coulomb, invalidando las predicciones de aceleración constante.

## Señales de fallo del modelo
- **Respuesta cinemática incoherente**: La aceleración [[a]] medida es significativamente mayor al cálculo teórico (

{{f:ley-traslacion-rodadura}}

).
- **Deslizamiento visible**: Se observa un desfase temporal entre el inicio del movimiento de traslación y el inicio de la rotación (la rueda "patina").
- **Evidencia térmica o acústica**: Presencia de ruidos de chirrido o marcas de desgaste en el punto de contacto, lo que indica que el trabajo de la fricción ya no es nulo.

## Modelo extendido o alternativo
Cuando la tracción es insuficiente y se rompe el vínculo cinemático, el análisis debe transicionar a un modelo más complejo.
- **Qué cambia**: El vínculo

{{f:vinculo-rodadura-acel}}

 desaparece. La fricción deja de ser una incógnita de vínculo y pasa a ser un valor conocido determinado por la fricción cinética (

{{f:vinculo-rodadura-acel}}

).
- **Alternativa**: El **modelo de rodadura con deslizamiento**, donde las ecuaciones de traslación y rotación se resuelven de forma independiente, resultando en una pérdida continua de energía mecánica.

## Comparación operativa
Mientras que el modelo ideal es perfecto para el dimensionamiento básico de ruedas y engranajes en condiciones normales, el modelo extendido es obligatorio para diseñar sistemas de seguridad activa (como el ABS) o para simular el comportamiento de vehículos en condiciones de baja adherencia (hielo o lluvia) donde la rodadura pura es la excepción y no la regla.

## Transición de modelo
La transición de modelo es obligatoria cuando se supera el límite de fricción estática. Es fundamental entender cuándo conviene cambiar de modelo en el momento exacto en que la fuerza de fricción necesaria para la rodadura pura excede la capacidad del suelo ([[mu_s]] N). Ignorar esta transición lleva a errores de diseño catastróficos en ingeniería automotriz y robótica.