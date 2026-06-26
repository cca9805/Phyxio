const e=`# Modelos Físicos de Rodadura\r
\r
## Modelo ideal\r
El modelo ideal de rodadura sin deslizamiento se basa en la suposición de que existe un único punto de contacto geométrico entre el cuerpo rígido y la superficie. En este modelo, el cuerpo es perfectamente indeformable y la superficie es perfectamente rígida. Se asume que el acoplamiento entre la traslación y la rotación es instantáneo y absoluto, lo que permite el uso de la condición cinemática\r
\r
{{f:vinculo-rodadura-acel}}\r
\r
. Esta idealización es fundamental para el análisis de sistemas mecánicos eficientes donde la disipación de energía por deslizamiento se considera despreciable.\r
\r
## Hipótesis\r
- **Cuerpo Indeformable**: El radio [[R]] se mantiene perfectamente constante, sin deformaciones elásticas en el área de contacto.\r
- **Contacto Puntual**: Ignoramos la superficie de contacto finita (parche de contacto) y los efectos de la histéresis del material.\r
- **Fricción Estática Suficiente**: Se asume que el entorno proporciona la fuerza necesaria para mantener el vínculo sin que se produzca un deslizamiento relativo.\r
- **Ausencia de rodadura de rodadura**: Se desprecia el torque de resistencia a la rodadura debido a la deformación del suelo.\r
\r
## Dominio de validez cuantitativo\r
Este modelo es válido siempre que se cumpla la desigualdad física **[[fs]] <= [[mu_s]] * N**. Específicamente, se requiere que el coeficiente de fricción estática cumpla **[[mu_s]] > 0.15** para la mayoría de los casos prácticos en pendientes moderadas (menores a 30 grados). Para pendientes superiores, el valor de la fricción estática [[fs]] requerida aumenta de forma no lineal siguiendo la tangente del ángulo. El orden de magnitud de la fuerza de fricción estática [[fs]] suele ser de **10^-1** a **10^1** Newtons en experimentos de laboratorio con masas de alrededor de 1 kg. Si el ángulo de inclinación supera los 45 grados, el modelo suele colapsar en casi cualquier superficie natural debido al límite de Coulomb, invalidando las predicciones de aceleración constante.\r
\r
## Señales de fallo del modelo\r
- **Respuesta cinemática incoherente**: La aceleración [[a]] medida es significativamente mayor al cálculo teórico (\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
).\r
- **Deslizamiento visible**: Se observa un desfase temporal entre el inicio del movimiento de traslación y el inicio de la rotación (la rueda "patina").\r
- **Evidencia térmica o acústica**: Presencia de ruidos de chirrido o marcas de desgaste en el punto de contacto, lo que indica que el trabajo de la fricción ya no es nulo.\r
\r
## Modelo extendido o alternativo\r
Cuando la tracción es insuficiente y se rompe el vínculo cinemático, el análisis debe transicionar a un modelo más complejo.\r
- **Qué cambia**: El vínculo\r
\r
{{f:vinculo-rodadura-acel}}\r
\r
 desaparece. La fricción deja de ser una incógnita de vínculo y pasa a ser un valor conocido determinado por la fricción cinética (\r
\r
{{f:vinculo-rodadura-acel}}\r
\r
).\r
- **Alternativa**: El **modelo de rodadura con deslizamiento**, donde las ecuaciones de traslación y rotación se resuelven de forma independiente, resultando en una pérdida continua de energía mecánica.\r
\r
## Comparación operativa\r
Mientras que el modelo ideal es perfecto para el dimensionamiento básico de ruedas y engranajes en condiciones normales, el modelo extendido es obligatorio para diseñar sistemas de seguridad activa (como el ABS) o para simular el comportamiento de vehículos en condiciones de baja adherencia (hielo o lluvia) donde la rodadura pura es la excepción y no la regla.\r
\r
## Transición de modelo\r
La transición de modelo es obligatoria cuando se supera el límite de fricción estática. Es fundamental entender cuándo conviene cambiar de modelo en el momento exacto en que la fuerza de fricción necesaria para la rodadura pura excede la capacidad del suelo ([[mu_s]] N). Ignorar esta transición lleva a errores de diseño catastróficos en ingeniería automotriz y robótica.`;export{e as default};
