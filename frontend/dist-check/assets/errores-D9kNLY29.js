const e=`# Errores comunes en el análisis de rodadura\r
\r
## Errores conceptuales\r
\r
### Error 1: Suponer fricción máxima\r
Es un error común pensar que la fuerza de fricción es siempre igual al valor límite\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
.\r
*   **Por qué parece correcto:** En problemas básicos de estática, a menudo calculamos el umbral de movimiento inminente usando esta igualdad.\r
*   **Por qué es incorrecto:** En rodadura pura, la fricción es una fuerza de vínculo ajustable que toma exactamente el valor necesario para mantener la condición\r
\r
{{f:vinculo-rodadura-acel}}\r
\r
. Solo alcanza el valor [[mu_s]] N en el límite del deslizamiento.\r
*   **Señal de detección:** Si al calcular la aceleración [[a]] el resultado no depende del coeficiente de fricción, pero has usado [[mu_s]] N en tus ecuaciones, has cometido este error.\r
*   **Corrección conceptual:** Trata a [[fs]] como una incógnita más en tu sistema de ecuaciones de Newton-Euler.\r
*   **Mini-ejemplo:** Si un cilindro baja por una rampa suave, [[fs]] puede ser de 2 N aunque el límite [[mu_s]] N sea de 10 N. Forzar 10 N daría una aceleración incorrecta.\r
\r
## Errores de modelo\r
\r
### Error 2: Ignorar el límite de agarre\r
No verificar si el valor calculado de [[fs]] es físicamente posible según el suelo disponible.\r
*   **Por qué parece correcto:** Una vez que tienes una fórmula elegante para la aceleración [[a]], es tentador aplicarla a cualquier ángulo o superficie.\r
*   **Por qué es incorrecto:** Todo suelo tiene un límite. Si la dinámica requiere una fricción de 50 N pero el suelo solo puede dar 30 N, el modelo de rodadura pura deja de existir.\r
*   **Señal de detección:** El objeto parece "acelerar demasiado" en la práctica o la rueda "gira en falso".\r
*   **Corrección conceptual:** Siempre realiza el chequeo post-cálculo: ¿Es\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
?\r
*   **Mini-ejemplo:** En una rampa de hielo, la aceleración teórica de rodadura no se cumple porque el neumático desliza casi inmediatamente.\r
\r
## Errores matemáticos\r
\r
### Error 3: Olvido del vínculo cinemático\r
Intentar resolver el sistema de traslación y rotación tratando [[a]] y [[alpha]] como variables independientes.\r
*   **Por qué parece correcto:** Son dos movimientos distintos (ir hacia adelante y girar), por lo que instintivamente se les asignan grados de libertad separados.\r
*   **Por qué es incorrecto:** La esencia de la rodadura sin deslizamiento es que el punto de contacto es un centro instantáneo de rotación, lo que vincula matemáticamente el avance con el giro.\r
*   **Señal de detección:** Te encuentras con un sistema de 2 ecuaciones y 3 incógnitas ([[a]], [[alpha]], [[fs]]) que parece imposible de resolver.\r
*   **Corrección conceptual:** Incluye siempre la ecuación de restricción\r
\r
{{f:vinculo-rodadura-acel}}\r
\r
(**vinculo-rodadura-acel**).\r
*   **Mini-ejemplo:** Sin el vínculo, no podrías predecir si una esfera bajará más rápido que un cilindro; ambos parecerían depender de fuerzas arbitrarias.\r
\r
## Errores de interpretación\r
\r
### Error 4: Trabajo de la fricción estática\r
Afirmar que la fricción estática [[fs]] disipa energía mecánica y frena al cuerpo por "rozamiento".\r
*   **Por qué parece correcto:** La palabra "fricción" suele asociarse con pérdida de energía, calor y frenado.\r
*   **Por qué es incorrecto:** En rodadura pura, el punto de aplicación de [[fs]] tiene velocidad cero respecto al suelo en el instante de contacto. Por definición de trabajo (\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
), si no hay desplazamiento del punto de aplicación en la dirección de la fuerza, el trabajo es nulo.\r
*   **Señal de detección:** Al hacer un balance de energía, intentas restar un término de "trabajo de fricción" del total de energía mecánica inicial.\r
*   **Corrección conceptual:** La energía potencial se reparte entre cinética de traslación y rotación, sin pérdidas por calor (en el modelo ideal).\r
*   **Mini-ejemplo:** Una bola de boliche en rodadura pura mantendría su velocidad indefinidamente si no fuera por la resistencia a la rodadura (que es un fenómeno distinto a la fricción estática).\r
\r
## Regla de autocontrol rápido\r
Antes de entregar un resultado, verifica que la aceleración [[a]] sea menor a \\(g\\sin([[theta]])\\) y que la fricción [[fs]] calculada sea menor al límite estático. Si estos dos chequeos fallan, tu modelo es físicamente inconsistente con la realidad del sistema.`;export{e as default};
