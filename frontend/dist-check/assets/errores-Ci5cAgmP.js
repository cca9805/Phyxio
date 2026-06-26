const e=`# Errores Frecuentes en Calculo del Torque\r
\r
## Errores conceptuales\r
\r
### Error 1: confundir distancia radial con brazo de palanca\r
**Por qué parece correcto:** El estudiante recuerda que hay que multiplicar fuerza por distancia, y r es la distancia visible entre el eje y el punto de aplicacion.\r
**Por qué es incorrecto:** El torque depende de b, la distancia perpendicular desde el eje a la linea de accion, no de r directamente. Si [[theta]] no es 90°, usar r en lugar de b sobreestima el torque.\r
**Señal de detección:** El resultado no coincide con la ruta de brazo de palanca, o el sentido de giro predicho no cuadra con la geometria.\r
**Corrección conceptual:** Trazar la linea de accion de F y medir la perpendicular desde el eje a esa linea. Esa es b. Alternativamente, calcular\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
**Mini-ejemplo de contraste:** Para\r
\r
{{f:torque_por_angulo}}\r
\r
,\r
\r
{{f:torque_por_angulo}}\r
\r
,\r
\r
{{f:torque_por_angulo}}\r
\r
: usar r da\r
\r
{{f:torque_por_angulo}}\r
\r
, pero el correcto es\r
\r
{{f:torque_por_angulo}}\r
\r
. El error duplica el resultado.\r
\r
### Error 2: olvidar declarar el eje de referencia\r
**Por qué parece correcto:** El estudiante calcula el torque sin especificar el eje y obtiene un numero con unidades correctas.\r
**Por qué es incorrecto:** El torque siempre depende del eje elegido. Dos calculos con ejes distintos dan valores distintos y ambos pueden ser correctos para su eje. Sin declarar el eje, el resultado es ambiguo.\r
**Señal de detección:** El numero obtenido no coincide con el esperado o el enunciado no especifica eje y el alumno no lo define.\r
**Corrección conceptual:** Siempre declarar eje de referencia, origen y sentido positivo antes de calcular [[tau]].\r
**Mini-ejemplo de contraste:** Un par de fuerzas sobre una barra da\r
\r
{{f:torque_por_angulo}}\r
\r
 respecto al extremo, pero\r
\r
{{f:torque_por_angulo}}\r
\r
respecto al centro de masas. Sin especificar eje, el resultado no transmite nada.\r
\r
El error conceptual mas comun es tratar torque como si fuera solo fuerza. El estudiante recuerda que hay que multiplicar por una distancia, pero no interioriza que esa distancia debe ser perpendicular a la linea de accion. Cuando este punto no se entiende, aparecen resultados aparentemente razonables que no explican el sentido real del giro.\r
\r
Otro error conceptual es olvidar que el torque depende del eje elegido. Dos personas pueden calcular valores distintos usando la misma fuerza y ambas pueden estar correctas si eligieron ejes diferentes. El problema no es el numero, sino no declarar el eje de referencia. En revision tecnica, un resultado sin eje declarado se considera incompleto.\r
\r
Tambien aparece la confusion entre torque y energia porque ambos comparten dimension\r
\r
{{f:torque_por_angulo}}\r
\r
. Fisicamente no son intercambiables. El torque necesita referencia rotacional; la energia no. Si se mezclan conceptos, se pierden criterios de signo y direccion.\r
\r
## Errores de modelo\r
\r
### Error 3: asumir ausencia de friccion sin declararla\r
**Por qué parece correcto:** En muchos ejercicios academicos la friccion se ignora implicitamente y el calculo cierra sin problema.\r
**Por qué es incorrecto:** En sistemas reales, la friccion en apoyos y rodamientos reduce el torque util. Suponer [[tau]] ideal en un sistema con perdidas lleva a predicciones optimistas que no se verifican en banco.\r
**Señal de detección:** El comportamiento medido difiere sistematicamente del predicho en varios ensayos.\r
**Corrección conceptual:** Declarar explicitamente si se asume friccion nula. En diseno, usar modelo extendido con factor de perdida.\r
**Mini-ejemplo de contraste:** Un mecanismo calcula\r
\r
{{f:torque_por_angulo}}\r
\r
 para arrancar. Con friccion real del 20%, se necesitan\r
\r
{{f:torque_por_angulo}}\r
\r
. Un motor seleccionado por el valor ideal fallara en la puesta en marcha.\r
\r
### Error 4: usar I de un eje distinto en segunda_ley_rotacional\r
**Por qué parece correcto:** El estudiante encuentra I en una tabla o formula y lo sustituye directamente en\r
\r
{{f:torque_por_angulo}}\r
\r
sin verificar el eje.\r
**Por qué es incorrecto:** I depende del eje de giro. Pensar que cualquier valor de I es intercambiable lleva a una aceleracion angular [[alpha]] incorrecta, aunque la aritmetica sea perfecta.\r
**Señal de detección:** El valor de [[alpha]] no es plausible para la escala del sistema o no coincide con estimacion cualitativa.\r
**Corrección conceptual:** Verificar que el eje para el que se calcula I coincide exactamente con el eje de giro declarado en el problema. La relacion correcta es\r
\r
{{f:segunda_ley_rotacional}}\r
\r
con I en el eje declarado.\r
**Mini-ejemplo de contraste:** Para una varilla, I respecto al extremo es 4 veces mayor que I respecto al centro. Confundir los dos cambia [[alpha]] por un factor de cuatro.\r
\r
En errores de modelo destaca el uso de hipotesis ideales sin declararlas. Por ejemplo, se asume ausencia total de friccion en un sistema con rodamientos desgastados. El calculo puede cerrar, pero la prediccion de comportamiento falla al compararla con medicion. El modelo no era falso por algebra, era insuficiente para el contexto.\r
\r
Otro error de modelo es simplificar un problema espacial complejo como si fuera estrictamente plano. Si existen componentes fuera del plano, [[tau_z]] ya no representa todo el estado rotacional. Este recorte no justificado puede ocultar cargas criticas en ejes secundarios.\r
\r
Tambien es frecuente usar un valor de inercia I que corresponde a otro eje o a otra configuracion geometrica. En ese caso la relacion\r
\r
{{f:segunda_ley_rotacional}}\r
\r
produce una aceleracion angular numericamente limpia pero fisicamente equivocada. La regla practica es asociar siempre cada parametro al eje y a la configuracion declarados.\r
\r
## Errores matemáticos\r
\r
### Error 5: mezclar grados y radianes en sin([[theta]])\r
**Por qué parece correcto:** El estudiante conoce que [[theta]] de 40° y escribe sin(40) en la calculadora sin verificar el modo angular.\r
**Por qué es incorrecto:**\r
\r
{{f:torque_por_angulo}}\r
\r
, pero\r
\r
{{f:torque_por_angulo}}\r
\r
. El error es del 16%, que puede cambiar el diagnostico en un diseño ajustado.\r
**Señal de detección:** El resultado difiere del obtenido por la ruta de brazo de palanca con mas del 5% sin justificacion.\r
**Corrección conceptual:** Verificar siempre que la calculadora este en modo grados cuando el angulo se da en grados. Alternativamente, convertir:\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
**Mini-ejemplo de contraste:**\r
\r
{{f:torque_por_angulo}}\r
\r
 con\r
\r
{{f:torque_por_angulo}}\r
\r
,\r
\r
{{f:torque_por_angulo}}\r
\r
,\r
\r
{{f:torque_por_angulo}}\r
\r
. En grados:\r
\r
{{f:torque_por_angulo}}\r
\r
. Si se usa\r
\r
{{f:torque_por_angulo}}\r
\r
, se obtiene\r
\r
{{f:torque_por_angulo}}\r
\r
. Error del 20%.\r
\r
### Error 6: invertir signos de [[F_x]] o [[F_y]] en descomposicion vectorial\r
**Por qué parece correcto:** El estudiante descompone la fuerza correctamente en magnitud pero no revisa el cuadrante o el convenio de ejes.\r
**Por qué es incorrecto:** Un signo erroneo en [[F_x]] o [[F_y]] invierte el sentido de giro de [[tau_z]]. El numero puede ser correcto en modulo pero equivocado en signo.\r
**Señal de detección:** El signo de [[tau_z]] no coincide con el sentido de giro fisicamente observable o esperado.\r
**Corrección conceptual:** Antes de calcular\r
\r
{{f:torque_plano}}\r
\r
, verificar signos de [[F_x]] y [[F_y]] con el diagrama y el eje z declarado.\r
**Mini-ejemplo de contraste:** Si\r
\r
{{f:torque_plano}}\r
\r
 (hacia arriba) y se confunde con\r
\r
{{f:torque_plano}}\r
\r
, [[tau_z]] cambia de signo completo aunque la magnitud sea la misma.\r
\r
Los errores matematicos mas repetidos aparecen en trigonometria y conversion de unidades. Mezclar grados y radianes al usar seno cambia el valor de [[tau]] de forma drastica. Otra fuente de error es convertir mal centimetros a metros, introduciendo factores de diez o cien que alteran el orden de magnitud.\r
\r
En descomposicion vectorial, se invierten signos de [[F_x]] o [[F_y]] por no revisar cuadrante. El resultado final puede conservar una magnitud plausible pero con sentido de giro invertido. Tambien ocurre sustitucion incompleta: se calcula b con una geometria y se usa F de otra configuracion, mezclando estados distintos.\r
\r
En sumatorias, algunos estudiantes suman valores absolutos de torques en lugar de suma algebraica. Eso elimina cancelaciones fisicas reales y sobredimensiona el efecto neto. La suma de momentos siempre exige convenio de signo y coherencia de eje.\r
\r
## Errores de interpretación\r
\r
### Error 7: aceptar resultado sin verificar plausibilidad fisica\r
**Por qué parece correcto:** El numero sale con unidades correctas y el algebra es limpia, asi que parece suficiente.\r
**Por qué es incorrecto:** Creer que un resultado correcto en algebra es automaticamente correcto en fisica lleva a ignorar limites de materiales, regimenes de operacion y ordenes de magnitud absurdos.\r
**Señal de detección:** El valor calculado supera la capacidad admisible del componente o el orden de magnitud es muy diferente del esperado para el sistema.\r
**Corrección conceptual:** Siempre contrastar el resultado con el limite del sistema y con la escala esperada. Un torque de\r
\r
{{f:torque_plano}}\r
\r
en una barra de banco es inmediatamente sospechoso.\r
**Mini-ejemplo de contraste:** Si un pasador soporta hasta\r
\r
{{f:torque_por_angulo}}\r
\r
 y el calculo da\r
\r
{{f:torque_por_angulo}}\r
\r
, la lectura correcta es riesgo de rotura, no "resultado obtenido con exito".\r
\r
Un error de interpretacion tipico es declarar exito porque la cuenta numerica coincide con un resultado esperado, sin verificar si ese resultado es viable para el sistema. Si un componente soporta hasta\r
\r
{{f:torque_por_angulo}}\r
\r
 y el calculo da\r
\r
{{f:torque_por_angulo}}\r
\r
, la lectura correcta es riesgo de fallo, no simplemente "resultado obtenido".\r
\r
Tambien se interpreta mal un torque cercano a cero. Puede ser equilibrio real o cancelacion entre contribuciones grandes opuestas. En el segundo caso, pequenas variaciones en fuerza o posicion pueden romper el balance. Por eso un valor neto pequeno no implica automaticamente baja criticidad.\r
\r
Otro error de interpretacion es ignorar incertidumbre de datos de entrada. Distancias medidas con precision pobre o angulos estimados visualmente pueden mover el resultado de forma significativa. El informe debe incluir una nota de sensibilidad cuando el diagnostico depende de diferencias pequenas.\r
\r
## Regla de autocontrol rápido\r
Regla operativa de cierre en menos de un minuto:\r
1. Eje declarado y sentido positivo declarado.\r
2. Formula elegida coherente con datos disponibles.\r
3. Distancia usada es perpendicular, no radial por defecto.\r
4. Unidades SI revisadas de inicio a fin.\r
5. Signo final compatible con sentido fisico observado.\r
6. Orden de magnitud plausible para la escala del sistema.\r
7. Si se usa\r
\r
{{f:segunda_ley_rotacional}}\r
\r
, confirmar que I corresponde al eje correcto.\r
\r
Si una de estas siete comprobaciones falla, no se debe dar el resultado por cerrado. Repetir el calculo con trazabilidad suele ahorrar tiempo frente a corregir consecuencias de una decision basada en torque mal interpretado.`;export{e as default};
