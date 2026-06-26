## Errores conceptuales

En el pendulo fisico, los errores conceptuales nacen cuando se usa una formula como plantilla sin reconstruir el mecanismo que la sostiene. El punto de partida correcto es identificar que el sistema oscila por un torque gravitatorio aplicado a un cuerpo con inercia rotacional definida por [[I]]. Si esta idea se pierde, el estudiante puede hacer algebra correcta y aun asi dar una conclusion fisicamente invalida.

### Error 1: asumir que masa total y respuesta temporal son equivalentes

- por qué parece correcto: en cursos introductorios se aprende que mayor [[m]] puede asociarse con mayor efecto gravitatorio, por lo que parece natural esperar oscilacion mas rapida siempre.
- por qué es incorrecto: en pendulo fisico, [[m]] no actua sola; la misma redistribucion de masa modifica [[I]], y ese cambio puede dominar el resultado en [[T]] y [[omega0]].
- señal de detección: al comparar dos cuerpos con igual [[m]] y distinto eje, el modelo mental del alumno no predice el cambio observado de [[T]].
- corrección conceptual: razonar siempre con el cociente entre torque restaurador y resistencia inercial, no con una variable aislada.
- mini-ejemplo: una barra y una placa con igual [[m]] montadas en ejes distintos muestran periodos diferentes aunque el peso total sea igual.

### Error 2: creer que el periodo lineal vale para cualquier amplitud

- por qué parece correcto: la formula de [[T]] es compacta y funciona muy bien en ejercicios estandar, lo que induce confianza excesiva.
- por qué es incorrecto: al crecer [[theta]] inicial, la linealizacion pierde precision y la ecuacion no lineal de [[theta_dd]] se vuelve relevante.
- señal de detección: el [[T]] medido cambia sistematicamente al repetir ensayos con amplitudes crecientes.
- corrección conceptual: explicitar dominio de validez antes de sustituir y declarar cuando se necesita modelo no lineal.
- mini-ejemplo: con 0.15 rad y 0.45 rad de lanzamiento, el segundo caso muestra periodo mayor de forma reproducible.

## Errores de modelo

En esta categoria, el problema no es aritmetico sino de representacion fisica. El estudiante puede dominar despejes, pero si define mal el sistema, todo el calculo hereda ese sesgo.

### Error 3: usar [[I]] respecto a un eje diferente del eje real

- por qué parece correcto: muchos formularios entregan [[I]] tabulado respecto a ejes geometricos canonicos, y parece legitimo reutilizarlo.
- por qué es incorrecto: la ecuacion del pendulo fisico requiere [[I]] exactamente respecto al eje de oscilacion efectivo.
- señal de detección: predicciones de [[T]] coherentes en un montaje y fallidas al mover el punto de apoyo.
- corrección conceptual: recalcular o transformar [[I]] al eje real antes de cualquier sustitucion.
- mini-ejemplo: una barra con eje en el extremo no comparte el mismo [[I]] que la barra con eje central; mezclar ambos invalida el resultado.

### Error 4: ignorar friccion de soporte cuando domina el ensayo

- por qué parece correcto: en muchos problemas teoricos se desprecia disipacion para simplificar.
- por qué es incorrecto: en banco real, la disipacion puede sesgar estimacion de [[T]] si se usan pocos ciclos o cronometraje pobre.
- señal de detección: amplitud cae rapidamente y el ajuste de periodo depende del tramo temporal elegido.
- corrección conceptual: distinguir problema ideal de problema experimental y documentar condiciones de medicion.
- mini-ejemplo: con buje desgastado, la serie de picos de [[theta]] muestra deriva temporal que no aparece en el modelo ideal.

## Errores matemáticos

Los errores matematicos de este leaf suelen venir de conversiones de unidades, redondeo prematuro y uso ambiguo de tasas angulares. Aun cuando la ecuacion seleccionada sea correcta, una unidad incompatible en [[d]] o [[I]] puede generar resultados fuera de escala.

### Error 5: mezclar unidades y cerrar sin verificacion dimensional

- por qué parece correcto: el numero final parece plausible a simple vista y el alumno confia en la calculadora.
- por qué es incorrecto: combinar cm con m o usar [[I]] en unidades no SI rompe la coherencia de [[T]], [[f]] y [[omega0]].
- señal de detección: conversion entre [[T]] y [[f]] no coincide o produce discrepancia sistematica.
- corrección conceptual: imponer una tabla de datos en SI antes de sustituir y comprobar dimension al final.
- mini-ejemplo: usar [[d]] en cm reduce artificialmente el denominador y altera el periodo en mas de un orden de magnitud.

### Error 6: confundir [[f]] con [[omega0]]

- por qué parece correcto: ambas magnitudes describen ritmo de oscilacion y comparten intuicion de rapidez.
- por qué es incorrecto: [[f]] se mide en Hz y [[omega0]] en rad/s; compararlas sin conversion cambia conclusiones de diseno.
- señal de detección: el informe afirma igualdad numerica entre ambas magnitudes sin factor de conversion.
- corrección conceptual: convertir siempre y reportar unidad explicita en cada resultado.
- mini-ejemplo: un sistema con [[f]] de 1.2 Hz tiene [[omega0]] significativamente mayor en rad/s.

## Errores de interpretación

La etapa final suele fallar cuando se presenta un numero sin narrativa fisica. En este leaf, interpretar significa explicar de que parametro depende el comportamiento y por que la prediccion es coherente con la configuracion real.

### Error 7: presentar resultado sin lectura causal

- por qué parece correcto: el examen tradicional premia llegar a un valor numerico y muchos estudiantes terminan ahi.
- por qué es incorrecto: sin lectura causal no se detectan inconsistencias de eje, unidades ni dominio de validez.
- señal de detección: al preguntar que pasaria si aumenta [[d]], el alumno no puede anticipar tendencia de [[T]].
- corrección conceptual: cerrar siempre con una frase sobre sensibilidad fisica y limite de aplicacion.
- mini-ejemplo: tras calcular [[T]], se discute que reducir [[d]] incrementa periodo para misma [[I]] y [[m]].

### Error 8: extrapolar fuera del regimen verificado

- por qué parece correcto: si una configuracion funciona, parece tentador generalizar a cualquier amplitud o geometria.
- por qué es incorrecto: el modelo lineal es local y puede fallar fuera de su rango experimental.
- señal de detección: predicciones para amplitudes altas difieren de mediciones mas alla de la incertidumbre instrumental.
- corrección conceptual: declarar explicitamente el rango de amplitud y condiciones del eje para las conclusiones.
- mini-ejemplo: un ajuste correcto a 0.2 rad no garantiza validez a 0.8 rad sin pasar a modelo no lineal.

## Regla de autocontrol rápido

Antes de entregar, aplica cinco chequeos: sistema bien definido, hipotesis explicitas, datos en SI, coherencia entre [[T]] y [[f]], y comentario fisico final sobre [[I]] y [[d]]. Si uno falla, no cierres la solucion. Este protocolo corto reduce errores de plantilla y obliga a que el resultado numeraico sea tambien una explicacion fisica util.
