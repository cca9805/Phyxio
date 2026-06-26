## Errores conceptuales

### Error 1: confundir frecuencia con velocidad de propagación

**Por qué parece correcto:** ambas parecen hablar de rapidez.

**Por qué es incorrecto:** [[f]] cuenta ciclos por segundo en un punto; la velocidad de propagación describe avance espacial.

**Señal de detección:** se dice que una onda de mayor frecuencia viaja necesariamente más rápido.

**Corrección conceptual:** separar ritmo temporal y movimiento por el medio.

**Mini-ejemplo de contraste:** dos sonidos de distinta frecuencia viajan casi con la misma rapidez en aire.

En una cuerda, aumentar la frecuencia de excitación cambia cuántas oscilaciones realiza un punto por segundo. La rapidez con la que una cresta avanza depende de las propiedades del medio, no solo del ritmo impuesto.

### Error 2: creer que periodo y frecuencia crecen juntos

**Por qué parece correcto:** ambas describen repetición.

**Por qué es incorrecto:** si un ciclo tarda más, caben menos ciclos en un segundo.

**Señal de detección:** se interpreta un periodo largo como frecuencia alta.

**Corrección conceptual:** recordar que [[T]] y [[f]] son lecturas inversas.

**Mini-ejemplo de contraste:** un péndulo lento tiene periodo grande y frecuencia pequeña.

La forma rápida de detectarlo es imaginar un segundo de observación. Si cada ciclo dura mucho, caben pocos ciclos; si caben muchos ciclos, cada uno debe durar poco.

## Errores de modelo

### Error 3: usar una frecuencia única en una señal irregular

**Por qué parece correcto:** siempre se puede contar algo parecido a ciclos.

**Por qué es incorrecto:** si el ritmo cambia mucho, una sola [[f]] oculta la variación.

**Señal de detección:** ventanas distintas dan resultados incompatibles.

**Corrección conceptual:** usar frecuencia media por tramos o análisis espectral.

**Mini-ejemplo de contraste:** una nota sostenida admite frecuencia clara; una sirena que sube de tono no.

En señales reales, una frecuencia media puede seguir siendo útil, pero debe presentarse junto con la ventana de medida. Sin esa ventana, el número puede ocultar aceleraciones, vibrato o cambios de régimen.

## Errores matemáticos

### Error 4: mezclar Hz y rad/s

**Por qué parece correcto:** ambas unidades tienen dimensión temporal inversa.

**Por qué es incorrecto:** Hz cuenta ciclos por segundo y rad/s mide fase angular por segundo.

**Señal de detección:** se sustituye [[omega]] con un valor en Hz sin conversión.

**Corrección conceptual:** distinguir [[f]] de [[omega]] antes de calcular.

**Mini-ejemplo de contraste:** 1 Hz corresponde a una vuelta completa de fase por segundo.

La confusión suele aparecer porque ambas unidades contienen segundos en el denominador. La diferencia está en qué se cuenta: ciclos completos para [[f]] y avance angular para [[omega]].

## Errores de interpretación

### Error 5: contar mal los ciclos

**Por qué parece correcto:** una cresta aislada parece un ciclo completo.

**Por qué es incorrecto:** un ciclo completo requiere volver al mismo estado de oscilación.

**Señal de detección:** [[N]] no coincide con las repeticiones completas visibles.

**Corrección conceptual:** fijar un criterio de inicio y fin del ciclo.

**Mini-ejemplo de contraste:** de cresta a cresta hay un ciclo; de cresta a valle hay medio ciclo.

Este error afecta mucho cuando [[N]] es pequeño. Si solo se cuentan dos o tres ciclos, añadir o quitar medio ciclo cambia de forma apreciable la frecuencia estimada.

## Regla de autocontrol rápido

Antes de resolver, pregunta si estás midiendo ciclos por segundo, duración de un ciclo o avance angular de fase. Luego comprueba que [[N]] y [[Delta_t]] describen la misma ventana y que el ritmo es estable.
