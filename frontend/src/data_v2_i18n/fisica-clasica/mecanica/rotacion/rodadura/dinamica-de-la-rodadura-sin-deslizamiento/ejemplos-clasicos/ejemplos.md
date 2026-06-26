# Ejemplo tipo examen

## Enunciado
Un banco de ensayo registra el comportamiento de una rueda de entrenamiento durante un tramo corto. El sistema reporta velocidad lineal [[v]] del centro de masas, velocidad angular [[omega]] estimada y radio efectivo [[R]] de contacto. El objetivo es validar si el movimiento observado es compatible con rodadura casi pura y, en caso contrario, identificar si la desviacion exige correccion inmediata o solo seguimiento. Se pide resolver de forma trazable, con control de unidades, criterio de coherencia y conclusion operativa.

El docente exige que la respuesta no se limite a despejar una variable. Debe incluir lectura fisica del resultado y explicacion del umbral usado para clasificar el residual. Ademas, debe quedar claro que el modelo ideal describe una hipotesis y no una garantia universal. Por tanto, el estudiante debe justificar por que aplica la condicion

{{f:condicion_rodadura}}

y por que calcula [[delta]] como indicador de validacion.

## Datos
Datos del problema: v medida igual a 9.40 m/s, n igual a 265 rpm, R igual a 0.34 m, y umbral de coherencia fijado en 0.50 m/s para este montaje. El sensor lineal y el encoder angular se muestrean a la misma frecuencia [[n]] y estan sincronizados por marca temporal. El radio proviene de calibracion previa bajo carga nominal.

Se asume superficie de contacto estable, sin salto de rueda y sin cambio brusco de carga durante la ventana analizada. Las incertidumbres instrumentales existen, pero en este ejercicio se trabaja con los valores nominales para centrar el analisis en el flujo metodologico. El valor de umbral se adopta como criterio practico del laboratorio.

## Definicion del sistema
El sistema se modela como rueda rigida con contacto continuo sobre referencia fija. Se define sentido positivo de avance hacia delante y sentido positivo de giro compatible con ese avance. Las magnitudes relevantes son [[v]] para traslacion, [[omega]] para rotacion, [[R]] para geometria y [[delta]] para coherencia.

Esta definicion evita ambiguedad de signos. Si no se declara desde el inicio, es posible obtener resultados numericos correctos pero interpretaciones opuestas. Tambien se fija que [[R]] permanece constante en el tramo estudiado, por lo que la condicion de rodadura puede aplicarse como relacion instantanea entre [[v]] y [[omega]].

## Modelo fisico
El modelo usa tres relaciones: conversion de frecuencia angular

{{f:conversion_rpm_rad}}

, condicion ideal

{{f:conversion_rpm_rad}}

, y residual diagnostico

{{f:conversion_rpm_rad}}

. La primera normaliza unidad, la segunda predice acoplamiento ideal y la tercera cuantifica desviacion.

El modelo no busca describir todos los fenomenos de contacto. Su objetivo en este ejemplo es evaluar coherencia cinematica de primer nivel para decidir si el estado observado puede tratarse como rodadura casi pura. En caso de desviacion relevante, el modelo ofrece una alarma clara para revisar mediciones o hipotesis.

## Justificacion del modelo
Se justifica porque el problema entrega precisamente las magnitudes que alimentan estas ecuaciones y porque las hipotesis de contacto continuo y radio constante son razonables para la ventana analizada. No hay indicios de impactos, cambios geometricos rapidos ni variaciones de escala que obliguen a un modelo mas complejo.

Tambien se justifica por trazabilidad didactica. Cada paso puede auditarse: conversion de unidad, prediccion ideal, residual y clasificacion. Esta secuencia permite detectar donde aparece un error en caso de discrepancia y evita respuestas opacas que solo muestran un numero final.

## Resolucion simbolica
Paso uno, convertir [[n]] a [[omega]] para trabajar en SI. Paso dos, calcular la velocidad ideal v_ideal como [[omega]] multiplicado por [[R]]. Paso tres, calcular [[delta]] restando v_ideal a la velocidad medida con el convenio establecido. Paso cuatro, comparar el valor absoluto de [[delta]] contra el umbral definido.

En forma simbolica:

{{f:conversion_rpm_rad}}

. Luego

{{f:conversion_rpm_rad}}

. Por ultimo,

{{f:conversion_rpm_rad}}

. La clasificacion se define por la regla abs([[delta]]) <= umbral para regimen casi puro y abs([[delta]]) mayor que umbral para regimen no ideal.

## Sustitucion numerica
Aplicando la conversion: [[omega]] aproximada igual a 27.75 rad/s. Con ese valor, `v_ideal` resulta aproximadamente 9.44 m/s al multiplicar por [[R]] igual a 0.34 m. El residual queda [[delta]] igual a 9.40 menos 9.44, es decir cerca de -0.04 m/s.

El valor absoluto del residual es 0.04 m/s, claramente menor que el umbral de 0.50 m/s. Por tanto, el caso se clasifica como rodadura casi pura para este entorno experimental. La diferencia restante puede atribuirse a ruido de medicion o pequenas no idealidades sin impacto operativo inmediato.

## Validacion dimensional
La conversion de [[n]] a [[omega]] produce T^-1, consistente con velocidad angular. La condicion

{{f:condicion_rodadura}}

combina T^-1 con L y devuelve L/T, coherente con velocidad lineal. El residual [[delta]] resta dos terminos L/T y por tanto conserva la misma dimension.

No se detecta inconsistencia de unidades en la cadena de calculo. Esta validacion es relevante porque gran parte de los errores en ejercicios de rodadura nacen en conversiones incompletas o en mezclas de unidades no declaradas.

## Interpretacion fisica
El resultado indica que el avance medido es practicamente el esperado por la rotacion reportada y el radio calibrado. El signo negativo de [[delta]], pequeno en magnitud, sugiere un leve deficit de avance frente al ideal, compatible con microdeslizamiento no dominante o con dispersion instrumental.

Como conclusion fisica, el modelo ideal puede usarse en este tramo para estimaciones y control basico. No hay evidencia de ruptura severa del vinculo cinematico. La recomendacion es mantener seguimiento temporal de [[delta]] para detectar tendencias y no solo valores puntuales.

# Ejemplo de aplicacion real

## Contexto
Un equipo de mantenimiento de una linea de transporte detecta diferencias entre la velocidad de banda estimada por encoder y la velocidad observada por vision artificial. El sistema usa ruedas de arrastre y requiere confirmar si la discrepancia proviene de deslizamiento intermitente o de parametros mal calibrados.

Para evitar parada innecesaria, el equipo aplica la misma logica del ejemplo de examen. Recolecta [[v]], [[n]] y [[R]] en ventanas cortas, convierte unidades de forma sistematica y evalua [[delta]] por tramos de operacion. Esta metodologia permite separar fallo mecanico real de error de instrumentacion.

## Estimacion fisica
En una ventana critica se registra [[n]] igual a 520 rpm, [[R]] igual a 0.12 m y [[v]] medida igual a 6.1 m/s. La conversion entrega [[omega]] aproximada de 54.45 rad/s. La prediccion ideal [[omega]] * [[R]] resulta alrededor de 6.53 m/s. El residual [[delta]] se aproxima a -0.43 m/s.

Con umbral operativo de 0.30 m/s para esa linea, el valor absoluto de [[delta]] excede el limite aceptable. La clasificacion es regimen no ideal. El signo negativo repetido en varias ventanas sugiere deficit de avance sistematico, compatible con perdida de adherencia en el punto de arrastre.

## Interpretacion
La decision practica no es sustituir de inmediato el conjunto, sino ejecutar protocolo escalonado: revisar tension de banda, limpiar superficie de contacto, recalibrar radio efectivo y repetir medicion sincronizada. Si [[delta]] persiste alto tras estas acciones, se programa intervencion mecanica.

Este ejemplo muestra por que el residual es util: traduce una discrepancia difusa en un criterio numerico accionable. Tambien muestra que la interpretacion correcta une calculo, umbral contextual y plan de respuesta, en lugar de depender de intuicion aislada.