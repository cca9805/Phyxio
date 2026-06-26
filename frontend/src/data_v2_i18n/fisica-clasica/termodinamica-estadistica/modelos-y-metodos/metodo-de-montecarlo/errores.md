## Errores conceptuales


### Error 1: creer que una muestra representa el promedio
**Por qué parece correcto**
Un [[valor_muestra]] puede tener unidades correctas y parecer físicamente razonable.
**Por qué es incorrecto**
Monte Carlo estima un promedio mediante muchos valores; un dato aislado no define el [[estimador_montecarlo]].
**Señal de detección**
El alumno no menciona [[numero_muestras]], [[varianza_muestral]] ni [[error_estandar]].
**Corrección conceptual**
Interpretar cada muestra como una pieza parcial y el promedio como la predicción física.
**Mini-ejemplo de contraste**
Una energía muestreada puede ser alta, pero el promedio de 10⁵ muestras puede estar cerca de un valor moderado.


### Error 2: confundir azar con ausencia de modelo
**Por qué parece correcto**
El método usa números aleatorios, así que parece una receta puramente matemática.
**Por qué es incorrecto**
Las muestras deben respetar [[peso_muestra]], [[temperatura]], [[energia_estado]] y restricciones físicas.
**Señal de detección**
Se acepta cualquier muestra sin revisar distribución objetivo.
**Corrección conceptual**
El azar explora, pero el modelo físico decide qué estados son representativos.
**Mini-ejemplo de contraste**
En Metropolis, [[probabilidad_aceptacion]] evita tratar por igual cambios energéticos físicamente distintos.

## Errores de modelo


### Error 3: suponer independencia automática
**Por qué parece correcto**
Cada paso de una simulación parece una nueva muestra.
**Por qué es incorrecto**
En una cadena, valores sucesivos de [[valor_muestra]] pueden estar correlacionados.
**Señal de detección**
El [[error_estandar]] se calcula como si todos los pasos fueran independientes.
**Corrección conceptual**
Revisar mezcla, autocorrelación y tamaño efectivo de [[numero_muestras]].
**Mini-ejemplo de contraste**
Un paseo que se mueve muy poco produce muchos datos casi repetidos.


### Error 4: ignorar la aceptación extrema
**Por qué parece correcto**
Una [[probabilidad_aceptacion]] muy alta parece buena porque acepta muchas propuestas.
**Por qué es incorrecto**
Si los pasos son minúsculos, aceptar mucho no implica explorar bien.
**Señal de detección**
El [[estimador_montecarlo]] tarda en cambiar aunque se acumulen muestras.
**Corrección conceptual**
Ajustar propuesta para equilibrar aceptación y recorrido.
**Mini-ejemplo de contraste**
Aceptar todo con pasos diminutos puede explorar menos que aceptar la mitad con pasos útiles.

## Errores matemáticos


### Error 5: confundir varianza y error estándar
**Por qué parece correcto**
Ambas magnitudes describen dispersión estadística.
**Por qué es incorrecto**
[[varianza_muestral]] mide dispersión de muestras; [[error_estandar]] mide incertidumbre del promedio.
**Señal de detección**
Se reporta [[varianza_muestral]] como error final del [[estimador_montecarlo]].
**Corrección conceptual**
Usar la varianza para calcular la incertidumbre del promedio.
**Mini-ejemplo de contraste**
Muestras muy dispersas pueden dar un promedio preciso si [[numero_muestras]] es enorme.


### Error 6: olvidar los pesos
**Por qué parece correcto**
La media simple es fácil y suele enseñarse primero.
**Por qué es incorrecto**
Si cada muestra tiene [[peso_muestra]] distinto, el promedio simple deforma el valor físico.
**Señal de detección**
Se usa media aritmética pese a pesos estadísticos explícitos.
**Corrección conceptual**
Aplicar el promedio ponderado con pesos normalizados.
**Mini-ejemplo de contraste**
Una muestra rara con peso grande puede importar más que muchas muestras de peso pequeño.

## Errores de interpretación


### Error 7: presentar el resultado sin incertidumbre
**Por qué parece correcto**
El [[estimador_montecarlo]] aparece como un número final.
**Por qué es incorrecto**
Sin [[error_estandar]], no se sabe cuánto ruido estadístico queda.
**Señal de detección**
El resultado no incluye margen ni criterio de convergencia.
**Corrección conceptual**
Reportar promedio e incertidumbre juntos.
**Mini-ejemplo de contraste**
[[estimador_montecarlo]] = 3,0 con error 0,5 no significa lo mismo que [[estimador_montecarlo]] = 3,0 con error 0,01.


### Error 8: creer que más muestras eliminan sesgo
**Por qué parece correcto**
El error aleatorio disminuye al aumentar [[numero_muestras]].
**Por qué es incorrecto**
Un sesgo de muestreo no desaparece si la distribución objetivo está mal representada.
**Señal de detección**
Distintas estrategias convergen a valores distintos.
**Corrección conceptual**
Distinguir ruido estadístico de sesgo del modelo o del muestreo.
**Mini-ejemplo de contraste**
Multiplicar muestras no arregla una [[probabilidad_aceptacion]] que nunca explora estados relevantes.

## Regla de autocontrol rápido

Antes de aceptar un resultado Monte Carlo, pregunta: ¿tengo [[estimador_montecarlo]], [[error_estandar]], criterio de convergencia y muestreo físicamente representativo?