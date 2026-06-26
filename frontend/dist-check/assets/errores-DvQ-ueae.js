const e=`# Errores comunes: ecuacion fundamental de la dinamica rotacional\r
\r
## Errores conceptuales\r
\r
### Error 1: confundir torque con fuerza\r
**Por qué parece correcto:** El alumno reconoce que hay una causa mecanica y la nombra como si cualquier causa del movimiento fuera una fuerza.\r
**Por qué es incorrecto:** En este leaf la causa relevante es rotacional. Si se sustituye el torque por una fuerza sin construir brazo y eje, el modelo deja de describir el fenomeno correcto.\r
**Señal de detección:** El razonamiento no declara eje de giro o compara directamente una fuerza lineal con la respuesta angular.\r
**Corrección conceptual:** Preguntar siempre cual es la causa neta respecto al eje elegido antes de escribir la ley.\r
**Mini-ejemplo de contraste:** Una misma fuerza aplicada cerca del eje y lejos del eje no produce la misma respuesta rotacional.\r
\r
### Error 2: tratar la ecuacion como universal sin revisar el sistema\r
**Por qué parece correcto:** La formula principal parece muy compacta y da la impresion de servir sin condiciones adicionales.\r
**Por qué es incorrecto:** El modelo simple necesita un cuerpo rigido o una inercia tratable como constante respecto al eje. Si eso falla, la lectura fisica cambia.\r
**Señal de detección:** El resultado no coincide con la escena experimental aunque el despeje este bien hecho.\r
**Corrección conceptual:** Declarar primero si el sistema puede modelarse como rigido y si el eje es estable durante el proceso.\r
**Mini-ejemplo de contraste:** Un patinador que reconfigura su postura no mantiene la misma inercia durante todo el giro.\r
\r
## Errores de modelo\r
\r
### Error 3: ignorar un torque resistente sin justificarlo\r
**Por qué parece correcto:** Muchos ejercicios escolares omiten friccion y el estudiante arrastra esa costumbre a cualquier caso.\r
**Por qué es incorrecto:** En sistemas reales, un torque resistente puede reducir de forma apreciable la respuesta angular y cambiar tiempos de arranque o frenado.\r
**Señal de detección:** La aceleracion angular medida es siempre menor que la predicha por el modelo ideal.\r
**Corrección conceptual:** Decidir de forma explicita si el torque resistente es despreciable o si debe entrar en el balance neto.\r
**Mini-ejemplo de contraste:** Un motor puede parecer insuficiente no porque entregue poco torque, sino porque parte del torque disponible se pierde en rozamiento del eje.\r
\r
### Error 4: usar una inercia calculada para otro eje\r
**Por qué parece correcto:** El alumno encuentra un valor de inercia en una tabla y lo inserta sin comprobar de que eje procede.\r
**Por qué es incorrecto:** La inercia rotacional depende del eje elegido. Cambiar el eje cambia la resistencia del sistema al cambio de giro.\r
**Señal de detección:** La respuesta calculada parece desproporcionada para la geometria real del problema.\r
**Corrección conceptual:** Verificar siempre que el valor de inercia corresponde exactamente al eje declarado en el esquema.\r
**Mini-ejemplo de contraste:** Una barra gira de manera muy distinta si lo hace por el centro o por un extremo.\r
\r
## Errores matemáticos\r
\r
### Error 5: mezclar unidades angulares sin control\r
**Por qué parece correcto:** El enunciado puede hablar en grados y el alumno conserva esa escala durante toda la cuenta.\r
**Por qué es incorrecto:** La respuesta angular debe ser coherente con el sistema de unidades empleado y con las demas magnitudes del modelo.\r
**Señal de detección:** El valor final sale varias decenas de veces por encima o por debajo de la escala esperada.\r
**Corrección conceptual:** Fijar una convención de unidades antes de calcular y mantenerla hasta el final.\r
**Mini-ejemplo de contraste:** Una respuesta aparentemente enorme suele venir de no convertir la descripcion angular al sistema consistente del problema.\r
\r
### Error 6: sumar torques sin respetar signos\r
**Por qué parece correcto:** El alumno ve varias interacciones y suma sus modulos porque todas parecen participar del mismo fenomeno.\r
**Por qué es incorrecto:** Algunos torques favorecen el giro positivo y otros lo frenan. La suma correcta es algebraica, no solo por magnitudes.\r
**Señal de detección:** El sentido de giro predicho no coincide con la intuicion fisica de la escena.\r
**Corrección conceptual:** Declarar un sentido positivo y asignar signo a cada contribucion antes de sumar.\r
**Mini-ejemplo de contraste:** Dos acciones opuestas pueden dejar un torque neto pequeño aunque cada una por separado sea grande.\r
\r
## Errores de interpretación\r
\r
### Error 7: aceptar la respuesta sin compararla con la escala fisica\r
**Por qué parece correcto:** El algebra cierra y las unidades parecen correctas.\r
**Por qué es incorrecto:** Un numero puede ser formalmente correcto y, aun asi, no tener sentido para el tamaño, material o velocidad del sistema real.\r
**Señal de detección:** La respuesta implica giros, tiempos o velocidades que contradicen la experiencia razonable del dispositivo.\r
**Corrección conceptual:** Comparar siempre el resultado con una estimacion previa de orden de magnitud.\r
**Mini-ejemplo de contraste:** Si un volante pequeño aparece acelerando como si fuera un proyectil, el problema no esta cerrado sino mal modelado.\r
\r
## Regla de autocontrol rápido\r
\r
Lista de cierre:\r
1. Eje de rotacion y sentido positivo declarados.\r
2. Inercia calculada para ese mismo eje.\r
3. Torque neto construido con signos coherentes.\r
4. Modelo ideal o no ideal declarado con claridad.\r
5. Respuesta final comparada con una escala fisica razonable.\r
\r
Si uno de estos puntos falla, no conviene cerrar la solucion. Hay que volver al modelo antes de volver a despejar.`;export{e as default};
