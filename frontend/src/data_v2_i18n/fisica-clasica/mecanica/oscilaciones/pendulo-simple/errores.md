## Errores conceptuales

### Error 1: tratar la fórmula lineal como universal

**Por qué parece correcto**
La forma sinusoidal del movimiento recuerda a otros osciladores lineales, así que es fácil extender por analogía la misma regla a cualquier amplitud. Además, [[T]] tiene una expresión simple y eso da sensación de validez total.

**Por qué es incorrecto**
La expresión lineal depende de la aproximación de ángulo pequeño. Cuando [[theta0]] crece, el seno exacto ya no puede sustituirse por el ángulo sin pérdida apreciable, y el periodo real deja de coincidir con el valor lineal.

**Señal de detección**
El alumno da la fórmula correcta pero no menciona el rango de amplitudes, o aplica la misma relación a casos con [[theta0]] muy distinta.

**Corrección conceptual**
La ecuación lineal es una aproximación válida solo para oscilaciones pequeñas; si la amplitud crece, hay que cambiar de modelo.

**Mini-ejemplo de contraste**
Un péndulo soltado con amplitud muy pequeña y otro soltado con una amplitud grande no tienen por qué compartir exactamente el mismo periodo. Si se fuerza la misma fórmula, el resultado ignora la no linealidad.

## Errores de modelo

### Error 2: ignorar la hipótesis del sistema ideal

**Por qué parece correcto**
Se piensa que basta con conocer [[L]] y [[g]] para resolver todo. La masa puntual y el hilo ideal se vuelven invisibles en la práctica y el estudiante olvida que son hipótesis, no hechos automáticos.

**Por qué es incorrecto**
Si el hilo tiene masa apreciable, si el eje no es fijo o si la masa no puede tratarse como puntual, el modelo simple ya no representa el sistema con suficiente fidelidad.

**Señal de detección**
El enunciado menciona rozamiento fuerte, soporte móvil o geometría no ideal y, aun así, se usa la fórmula simple sin comentario.

**Corrección conceptual**
El modelo ideal sirve como primera lectura, pero debe justificarse explícitamente con las hipótesis del montaje.

**Mini-ejemplo de contraste**
Si el soporte vibra, el péndulo ya no oscila solo. El periodo medido incorpora la vibración del soporte y el modelo ideal queda incompleto.

## Errores matemáticos

### Error 3: mezclar magnitudes angulares y temporales

**Por qué parece correcto**
Como [[omega0]] y [[f]] describen rapidez de repetición, el alumno las trata como si fueran equivalentes sin conversión. El parecido físico induce una confusión de unidades.

**Por qué es incorrecto**
[[omega0]] se mide en rad/s y [[f]] en Hz. Ambas están relacionadas, pero no son la misma magnitud y no pueden intercambiarse sin el factor $2\pi$.

**Señal de detección**
La respuesta compara números de [[omega0]] y [[f]] como si fueran directamente intercambiables, o calcula un periodo sin pasar por las unidades correctas.

**Corrección conceptual**
La frecuencia cuenta ciclos por segundo y la pulsación mide radianes por segundo; ambas son coherentes, pero no idénticas.

**Mini-ejemplo de contraste**
Si [[omega0]] = 3.14 rad/s, no significa que [[f]] = 3.14 Hz. El valor correcto es aproximadamente 0.50 Hz.

## Errores de interpretación

### Error 4: confundir fase con cambio físico del sistema

**Por qué parece correcto**
Como el máximo aparece en otro instante, parece que la oscilación se modificó físicamente. El alumno interpreta un corrimiento temporal como una transformación del sistema.

**Por qué es incorrecto**
La fase [[phi]] solo desplaza la solución en el tiempo. No altera [[L]], [[g]] ni el periodo, así que no cambia la física básica del péndulo.

**Señal de detección**
El alumno atribuye a [[phi]] cambios en longitud, gravedad o rapidez de oscilación.

**Corrección conceptual**
La fase describe el arranque temporal, no la estructura del modelo.

**Mini-ejemplo de contraste**
Dos oscilaciones idénticas con distinta fase tienen la misma física pero no el mismo punto de partida temporal. El periodo sigue siendo el mismo.

## Regla de autocontrol rápido

### Error 5: aceptar un resultado sin cerrar el circuito físico

**Por qué parece correcto**
El alumno ve una cifra plausible y cree que ya resolvió el problema. Si el número parece razonable, la revisión se detiene demasiado pronto.

**Por qué es incorrecto**
Un resultado solo es válido si respeta unidades, hipótesis y lectura física. Si no se comprueba la coherencia entre [[T]], [[f]], [[omega0]] y el régimen de amplitudes, la respuesta sigue siendo frágil.

**Señal de detección**
El resultado final no se compara con ninguna tendencia física: no se pregunta si un [[L]] mayor debía producir un [[T]] mayor.

**Corrección conceptual**
Antes de cerrar, revisar siempre tres cosas: unidades, dominio de validez y sentido físico de la respuesta.

**Mini-ejemplo de contraste**
Si un péndulo largo produce un periodo más pequeño que uno corto, algo falló antes del resultado final. Esa inconsistencia obliga a rehacer el planteamiento.

El péndulo simple no falla por falta de fórmulas, sino por exceso de confianza. La corrección consiste en volver a las hipótesis, revisar las unidades y comprobar si el régimen sigue siendo lineal.