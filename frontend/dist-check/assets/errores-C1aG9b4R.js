const e=`## Errores conceptuales\r
\r
### Error 1: tratar la fórmula lineal como universal\r
\r
**Por qué parece correcto**\r
La forma sinusoidal del movimiento recuerda a otros osciladores lineales, así que es fácil extender por analogía la misma regla a cualquier amplitud. Además, [[T]] tiene una expresión simple y eso da sensación de validez total.\r
\r
**Por qué es incorrecto**\r
La expresión lineal depende de la aproximación de ángulo pequeño. Cuando [[theta0]] crece, el seno exacto ya no puede sustituirse por el ángulo sin pérdida apreciable, y el periodo real deja de coincidir con el valor lineal.\r
\r
**Señal de detección**\r
El alumno da la fórmula correcta pero no menciona el rango de amplitudes, o aplica la misma relación a casos con [[theta0]] muy distinta.\r
\r
**Corrección conceptual**\r
La ecuación lineal es una aproximación válida solo para oscilaciones pequeñas; si la amplitud crece, hay que cambiar de modelo.\r
\r
**Mini-ejemplo de contraste**\r
Un péndulo soltado con amplitud muy pequeña y otro soltado con una amplitud grande no tienen por qué compartir exactamente el mismo periodo. Si se fuerza la misma fórmula, el resultado ignora la no linealidad.\r
\r
## Errores de modelo\r
\r
### Error 2: ignorar la hipótesis del sistema ideal\r
\r
**Por qué parece correcto**\r
Se piensa que basta con conocer [[L]] y [[g]] para resolver todo. La masa puntual y el hilo ideal se vuelven invisibles en la práctica y el estudiante olvida que son hipótesis, no hechos automáticos.\r
\r
**Por qué es incorrecto**\r
Si el hilo tiene masa apreciable, si el eje no es fijo o si la masa no puede tratarse como puntual, el modelo simple ya no representa el sistema con suficiente fidelidad.\r
\r
**Señal de detección**\r
El enunciado menciona rozamiento fuerte, soporte móvil o geometría no ideal y, aun así, se usa la fórmula simple sin comentario.\r
\r
**Corrección conceptual**\r
El modelo ideal sirve como primera lectura, pero debe justificarse explícitamente con las hipótesis del montaje.\r
\r
**Mini-ejemplo de contraste**\r
Si el soporte vibra, el péndulo ya no oscila solo. El periodo medido incorpora la vibración del soporte y el modelo ideal queda incompleto.\r
\r
## Errores matemáticos\r
\r
### Error 3: mezclar magnitudes angulares y temporales\r
\r
**Por qué parece correcto**\r
Como [[omega0]] y [[f]] describen rapidez de repetición, el alumno las trata como si fueran equivalentes sin conversión. El parecido físico induce una confusión de unidades.\r
\r
**Por qué es incorrecto**\r
[[omega0]] se mide en rad/s y [[f]] en Hz. Ambas están relacionadas, pero no son la misma magnitud y no pueden intercambiarse sin el factor $2\\pi$.\r
\r
**Señal de detección**\r
La respuesta compara números de [[omega0]] y [[f]] como si fueran directamente intercambiables, o calcula un periodo sin pasar por las unidades correctas.\r
\r
**Corrección conceptual**\r
La frecuencia cuenta ciclos por segundo y la pulsación mide radianes por segundo; ambas son coherentes, pero no idénticas.\r
\r
**Mini-ejemplo de contraste**\r
Si [[omega0]] = 3.14 rad/s, no significa que [[f]] = 3.14 Hz. El valor correcto es aproximadamente 0.50 Hz.\r
\r
## Errores de interpretación\r
\r
### Error 4: confundir fase con cambio físico del sistema\r
\r
**Por qué parece correcto**\r
Como el máximo aparece en otro instante, parece que la oscilación se modificó físicamente. El alumno interpreta un corrimiento temporal como una transformación del sistema.\r
\r
**Por qué es incorrecto**\r
La fase [[phi]] solo desplaza la solución en el tiempo. No altera [[L]], [[g]] ni el periodo, así que no cambia la física básica del péndulo.\r
\r
**Señal de detección**\r
El alumno atribuye a [[phi]] cambios en longitud, gravedad o rapidez de oscilación.\r
\r
**Corrección conceptual**\r
La fase describe el arranque temporal, no la estructura del modelo.\r
\r
**Mini-ejemplo de contraste**\r
Dos oscilaciones idénticas con distinta fase tienen la misma física pero no el mismo punto de partida temporal. El periodo sigue siendo el mismo.\r
\r
## Regla de autocontrol rápido\r
\r
### Error 5: aceptar un resultado sin cerrar el circuito físico\r
\r
**Por qué parece correcto**\r
El alumno ve una cifra plausible y cree que ya resolvió el problema. Si el número parece razonable, la revisión se detiene demasiado pronto.\r
\r
**Por qué es incorrecto**\r
Un resultado solo es válido si respeta unidades, hipótesis y lectura física. Si no se comprueba la coherencia entre [[T]], [[f]], [[omega0]] y el régimen de amplitudes, la respuesta sigue siendo frágil.\r
\r
**Señal de detección**\r
El resultado final no se compara con ninguna tendencia física: no se pregunta si un [[L]] mayor debía producir un [[T]] mayor.\r
\r
**Corrección conceptual**\r
Antes de cerrar, revisar siempre tres cosas: unidades, dominio de validez y sentido físico de la respuesta.\r
\r
**Mini-ejemplo de contraste**\r
Si un péndulo largo produce un periodo más pequeño que uno corto, algo falló antes del resultado final. Esa inconsistencia obliga a rehacer el planteamiento.\r
\r
El péndulo simple no falla por falta de fórmulas, sino por exceso de confianza. La corrección consiste en volver a las hipótesis, revisar las unidades y comprobar si el régimen sigue siendo lineal.`;export{e as default};
