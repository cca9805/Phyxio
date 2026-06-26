# Errores Frecuentes en Definicion de Torque

## Errores conceptuales

### Error 1: confundir distancia radial con brazo de palanca
**Por qué parece correcto:** El estudiante recuerda que hay que multiplicar fuerza por distancia, y r es la distancia visible entre el eje y el punto de aplicacion.
**Por qué es incorrecto:** El torque depende de b, la distancia perpendicular desde el eje a la linea de accion, no de r directamente. Si [[theta]] no es 90°, usar r en lugar de b sobreestima el torque.
**Señal de detección:** El resultado no coincide con la ruta de brazo de palanca, o el sentido de giro predicho no cuadra con la geometria.
**Corrección conceptual:** Trazar la linea de accion de F y medir la perpendicular desde el eje a esa linea. Esa es b. Alternativamente, calcular

{{f:torque_por_angulo}}

.
**Mini-ejemplo de contraste:** Para

{{f:torque_por_angulo}}

,

{{f:torque_por_angulo}}

,

{{f:torque_por_angulo}}

: usar r da

{{f:torque_por_angulo}}

, pero el correcto es

{{f:torque_por_angulo}}

. El error duplica el resultado.

### Error 2: olvidar declarar el eje de referencia
**Por qué parece correcto:** El estudiante calcula el torque sin especificar el eje y obtiene un numero con unidades correctas.
**Por qué es incorrecto:** El torque siempre depende del eje elegido. Dos calculos con ejes distintos dan valores distintos y ambos pueden ser correctos para su eje. Sin declarar el eje, el resultado es ambiguo.
**Señal de detección:** El numero obtenido no coincide con el esperado o el enunciado no especifica eje y el alumno no lo define.
**Corrección conceptual:** Siempre declarar: eje de referencia, origen y sentido positivo antes de calcular [[tau]].
**Mini-ejemplo de contraste:** Un par de fuerzas sobre una barra da

{{f:torque_por_angulo}}

 respecto al extremo, pero

{{f:torque_por_angulo}}

respecto al centro de masas. Sin especificar eje, el resultado no transmite nada.

El error conceptual mas comun es tratar torque como si fuera solo fuerza. El estudiante recuerda que hay que multiplicar por una distancia, pero no interioriza que esa distancia debe ser perpendicular a la linea de accion. Cuando este punto no se entiende, aparecen resultados aparentemente razonables que no explican el sentido real del giro.

Otro error conceptual es olvidar que el torque depende del eje elegido. Dos personas pueden calcular valores distintos usando la misma fuerza y ambas pueden estar correctas si eligieron ejes diferentes. El problema no es el numero, sino no declarar el eje de referencia. En revision tecnica, un resultado sin eje declarado se considera incompleto.

Tambien aparece la confusion entre torque y energia porque ambos comparten dimension

{{f:torque_por_angulo}}

. Fisicamente no son intercambiables. El torque necesita referencia rotacional; la energia no. Si se mezclan conceptos, se pierden criterios de signo y direccion.

## Errores de modelo

### Error 3: asumir ausencia de friccion sin declararla
**Por qué parece correcto:** En muchos ejercicios academicos la friccion se ignora implicitamente y el calculo cierra sin problema.
**Por qué es incorrecto:** En sistemas reales, la friccion en apoyos y rodamientos reduce el torque util. Suponer [[tau]] ideal en un sistema con perdidas lleva a predicciones optimistas que no se verifican en banco.
**Señal de detección:** El comportamiento medido difiere sistematicamente del predicho en varios ensayos.
**Corrección conceptual:** Declarar explicitamente si se asume friccion nula. En diseno, usar modelo extendido con factor de perdida.
**Mini-ejemplo de contraste:** Un mecanismo calcula

{{f:torque_por_angulo}}

 para arrancar. Con friccion real del 20%, se necesitan

{{f:torque_por_angulo}}

. Un motor seleccionado por el valor ideal fallara en la puesta en marcha.

### Error 4: usar I de un eje distinto en segunda_ley_rotacional
**Por qué parece correcto:** El estudiante encuentra I en una tabla o formula y lo sustituye directamente en

{{f:torque_por_angulo}}

sin verificar el eje.
**Por qué es incorrecto:** I depende del eje de giro. Pensar que cualquier valor de I es intercambiable lleva a una aceleracion angular incorrecta, aunque la aritmetica sea perfecta.
**Señal de detección:** El valor de [[alpha]] no es plausible para la escala del sistema o no coincide con estimacion cualitativa.
**Corrección conceptual:** Verificar que el eje para el que se calcula I coincide exactamente con el eje de giro declarado en el problema. Usar Steiner si es necesario trasladar el eje. La relacion correcta es

{{f:segunda_ley_rotacional}}

con I en el eje declarado.
**Mini-ejemplo de contraste:** Para una varilla, I respecto al extremo es 4 veces mayor que I respecto al centro. Confundir los dos cambia [[alpha]] por un factor de cuatro.

En errores de modelo destaca el uso de hipotesis ideales sin declararlas. Por ejemplo, se asume ausencia total de friccion en un sistema con rodamientos desgastados. El calculo puede cerrar, pero la prediccion de comportamiento falla al compararla con medicion. El modelo no era falso por algebra, era insuficiente para el contexto.

Otro error de modelo es simplificar un problema espacial complejo como si fuera estrictamente plano. Si existen componentes fuera del plano, [[tau_z]] ya no representa todo el estado rotacional. Este recorte no justificado puede ocultar cargas criticas en ejes secundarios.

Tambien es frecuente usar un valor de inercia I que corresponde a otro eje o a otra configuracion geometrica. En ese caso la relacion

{{f:segunda_ley_rotacional}}

produce una aceleracion angular numericamente limpia pero fisicamente equivocada. La regla practica es asociar siempre cada parametro al eje y a la configuracion declarados.

## Errores matemáticos

### Error 5: mezclar grados y radianes en sin([[theta]])
**Por qué parece correcto:** El estudiante conoce que [[theta]] de 40° y escribe sin(40) en la calculadora sin verificar el modo angular.
**Por qué es incorrecto:** sin(40°) ≈ 0.643, pero sin(40 rad) ≈ 0.745. El error es del 16%, que puede cambiar el diagnostico en un diseño ajustado.
**Señal de detección:** El resultado difiere del obtenido por la ruta de brazo de palanca con mas del 5% sin justificacion.
**Corrección conceptual:** Verificar siempre que la calculadora este en modo grados cuando el angulo se da en grados. Alternativamente, convertir:

{{f:torque_por_angulo}}

.
**Mini-ejemplo de contraste:**

{{f:torque_por_angulo}}

 con

{{f:torque_por_angulo}}

,

{{f:torque_por_angulo}}

,

{{f:torque_por_angulo}}

. En grados:

{{f:torque_por_angulo}}

. Si se usa sin(45 rad) ≈ 0.851, se obtiene

{{f:torque_por_angulo}}

. Error del 20%.

### Error 6: invertir signos de [[F_x]] o [[F_y]] en descomposicion vectorial
**Por qué parece correcto:** El estudiante descompone la fuerza correctamente en magnitud pero no revisa el cuadrante o el convenio de ejes.
**Por qué es incorrecto:** Un signo erroneo en [[F_x]] o [[F_y]] invierte el sentido de giro de [[tau_z]]. El numero puede ser correcto en modulo pero equivocado en signo, lo que implica error de direccion de giro.
**Señal de detección:** El signo de [[tau_z]] no coincide con el sentido de giro fisicamente observable o esperado.
**Corrección conceptual:** Antes de calcular

{{f:torque_plano}}

, verificar signos de [[F_x]] y [[F_y]] con el diagrama y el eje z declarado.
**Mini-ejemplo de contraste:** Si

{{f:torque_plano}}

 (hacia arriba) y se confunde con

{{f:torque_plano}}

, [[tau_z]] cambia de signo completo aunque la magnitud sea la misma.

Los errores matematicos mas repetidos aparecen en trigonometria y conversion de unidades. Mezclar grados y radianes al usar seno cambia el valor de [[tau]] de forma drastica. Otra fuente de error es convertir mal centimetros a metros, introduciendo factores de diez o cien que alteran el orden de magnitud.

En descomposicion vectorial, se invierten signos de [[F_x]] o [[F_y]] por no revisar cuadrante. El resultado final puede conservar una magnitud plausible pero con sentido de giro invertido. Tambien ocurre sustitucion incompleta: se calcula b con una geometria y se usa F de otra configuracion, mezclando estados distintos.

En sumatorias, algunos estudiantes suman valores absolutos de torques en lugar de suma algebraica. Eso elimina cancelaciones fisicas reales y sobredimensiona el efecto neto. La suma de momentos siempre exige convenio de signo y coherencia de eje.

## Errores de interpretación

### Error 7: aceptar resultado sin verificar plausibilidad fisica
**Por qué parece correcto:** El numero sale con unidades correctas y el algebra es limpia, asi que parece suficiente.
**Por qué es incorrecto:** Creer que un resultado correcto en algebra es automaticamente correcto en fisica lleva a ignorar limites de materiales, regimenes de operacion y ordenes de magnitud absurdos.
**Señal de detección:** El valor calculado supera la capacidad admisible del componente o el orden de magnitud es muy diferente del esperado para el sistema.
**Corrección conceptual:** Siempre contrastar el resultado con el limite del sistema y con la escala esperada. Un torque de

{{f:torque_plano}}

en una barra de banco es inmediatamente sospechoso.
**Mini-ejemplo de contraste:** Si un pasador soporta hasta

{{f:torque_por_angulo}}

 y el calculo da

{{f:torque_por_angulo}}

, la lectura correcta es riesgo de rotura, no "resultado obtenido con exito".

Un error de interpretacion tipico es declarar exito porque la cuenta numerica coincide con un resultado esperado, sin verificar si ese resultado es viable para el sistema. Si un componente soporta hasta

{{f:torque_por_angulo}}

 y el calculo da

{{f:torque_por_angulo}}

, la lectura correcta es riesgo de fallo, no simplemente "resultado obtenido".

Tambien se interpreta mal un torque cercano a cero. Puede ser equilibrio real o cancelacion entre contribuciones grandes opuestas. En el segundo caso, pequenas variaciones en fuerza o posicion pueden romper el balance. Por eso un valor neto pequeno no implica automaticamente baja criticidad.

Otro error de interpretacion es ignorar incertidumbre de datos de entrada. Distancias medidas con precision pobre o angulos estimados visualmente pueden mover el resultado de forma significativa. El informe debe incluir una nota de sensibilidad cuando el diagnostico depende de diferencias pequenas.

## Regla de autocontrol rápido
Regla operativa de cierre en menos de un minuto:
1. Eje declarado y sentido positivo declarado.
2. Formula elegida coherente con datos disponibles.
3. Distancia usada es perpendicular, no radial por defecto.
4. Unidades SI revisadas de inicio a fin.
5. Signo final compatible con sentido fisico observado.
6. Orden de magnitud plausible para la escala del sistema.
7. Si se usa

{{f:segunda_ley_rotacional}}

, confirmar que I corresponde al eje correcto.

Si una de estas siete comprobaciones falla, no se debe dar el resultado por cerrado. Repetir el calculo con trazabilidad suele ahorrar tiempo frente a corregir consecuencias de una decision basada en torque mal interpretado.
