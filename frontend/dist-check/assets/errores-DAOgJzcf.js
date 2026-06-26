const e=`# Errores comunes: centro de masas de sistemas discretos\r
\r
## Errores conceptuales\r
\r
### Error 1: Calcular el CM como promedio aritmético de posiciones sin ponderar por masa\r
\r
**Por qué parece correcto:**\r
Si hay dos partículas, dividir la distancia por 2 parece dar el punto medio correcto.\r
\r
**Por qué es incorrecto:**\r
El CM es un promedio ponderado por masa:\r
\r
{{f:xcm_sum}}\r
\r
Sin ponderar, las masas desiguales dan resultados erróneos.\r
\r
**Señal de detección:**\r
El alumno usa \\((x_1 + x_2)/2\\) cuando las masas son diferentes.\r
\r
**Corrección conceptual:**\r
Incluir siempre la masa de cada partícula como peso en el promedio.\r
\r
**Mini-ejemplo de contraste:**\r
Si las masas son diferentes, el promedio simple no da el centro de masas real. Usa siempre\r
\r
{{f:xcm_sum}}\r
\r
y verifica que el resultado esté más cerca de la masa mayor.\r
\r
### Error 2: Olvidar que el CM es vectorial y calcular solo una componente\r
\r
**Por qué parece correcto:**\r
Si el problema parece unidimensional, una sola coordenada parece suficiente.\r
\r
**Por qué es incorrecto:**\r
En el plano o el espacio, el CM tiene tantas componentes como dimensiones. Omitir una coordenada da una posición incompleta.\r
\r
**Señal de detección:**\r
El alumno escribe un solo número como respuesta cuando el sistema está en el plano.\r
\r
\r
**Corrección conceptual:**\r
\r
Calcular cada componente por separado y reportar el vector completo:\r
\r
{{f:xcm_sum}}\r
\r
{{f:ycm_sum}}\r
\r
\r
**Mini-ejemplo de contraste:**\r
Si el sistema está en el plano, reporta todas las componentes usando\r
\r
{{f:xcm_sum}}\r
\r
y\r
\r
{{f:ycm_sum}}\r
\r
El CM es un vector completo.\r
\r
## Errores de modelo\r
\r
### Error 3: Colocar el origen de coordenadas de forma que complica la suma innecesariamente\r
\r
**Por qué parece correcto:**\r
Cualquier origen da el mismo resultado porque el CM no depende del sistema de coordenadas.\r
\r
**Por qué es incorrecto:**\r
El resultado final es el mismo, pero un origen mal elegido genera posiciones con muchas cifras y resta legibilidad, aumentando la probabilidad de error numérico.\r
\r
**Señal de detección:**\r
El cálculo usa coordenadas con números grandes o negativos innecesarios, y el alumno se equivoca al sumar.\r
\r
**Corrección conceptual:**\r
Elegir el origen en una de las partículas o en un punto de simetría del sistema para simplificar la suma.\r
\r
**Mini-ejemplo de contraste:**\r
Elige el origen para simplificar los cálculos. Por ejemplo, poner el origen en una de las partículas permite usar\r
\r
{{f:xcm_sum}}\r
\r
con números más sencillos y menos errores.\r
\r
## Errores matemáticos\r
\r
### Error 4: Sumar masas en el numerador pero olvidar la masa total [[M]] en el denominador\r
\r
**Por qué parece correcto:**\r
El alumno recuerda que hay que multiplicar $m_i x_i$ pero cree que la suma ya incorpora la normalización.\r
\r
**Por qué es incorrecto:**\r
Sin dividir entre la masa total [[M]]:\r
\r
{{f:M_sum}}\r
\r
el resultado tiene unidades de kg·m y no es una posición.\r
\r
**Señal de detección:**\r
El resultado tiene unidades extrañas (kg·m) o un valor numéricamente enorme comparado con las posiciones.\r
\r
**Corrección conceptual:**\r
Verificar siempre que el resultado tiene unidades de longitud y cae entre las posiciones extremas del sistema.\r
\r
**Mini-ejemplo de contraste:**\r
Si olvidas dividir por la masa total\r
\r
{{f:M_sum}}\r
\r
el resultado no tiene sentido físico. Usa siempre\r
\r
{{f:xcm_sum}}\r
\r
para obtener una posición válida.\r
\r
## Errores de interpretación\r
\r
### Error 5: Interpretar que el centro de masas debe coincidir con la posición de alguna partícula del sistema\r
\r
**Por qué parece correcto:**\r
El alumno busca el CM entre los puntos materiales existentes, como si fuera uno de ellos.\r
\r
**Por qué es incorrecto:**\r
El CM es un promedio ponderado que puede caer en cualquier punto del espacio, incluso donde no hay masa.\r
\r
**Señal de detección:**\r
El alumno redondea el resultado de [[xcm]] a la posición de la partícula más cercana.\r
\r
**Corrección conceptual:**\r
Aceptar que el centro de masas es una coordenada calculada que no tiene por qué coincidir con ninguna partícula real.\r
\r
**Mini-ejemplo de contraste:**\r
Dos masas iguales de 1 kg en \\(x = 0\\) y \\(x = 4\\) m. El CM está en \\(x = 2\\) m, donde no hay ninguna partícula.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de dar por bueno un resultado, aplica esta lista de comprobación:\r
\r
1. **Unidades**: ¿el resultado tiene las dimensiones esperadas?\r
2. **Signo**: ¿el signo es coherente con la dirección elegida en el diagrama?\r
3. **Orden de magnitud**: ¿el valor es físicamente razonable para el escenario?\r
4. **Caso límite**: ¿la fórmula se reduce a un resultado conocido cuando un parámetro tiende a cero o a infinito?\r
`;export{e as default};
