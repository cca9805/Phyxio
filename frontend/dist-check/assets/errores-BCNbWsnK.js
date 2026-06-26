const e=`# Errores comunes: condición cinemática de rodadura\r
\r
## Errores conceptuales\r
\r
### Error 1: Creer que toda rueda cumple automáticamente la ligadura ideal\r
\r
**Por qué parece correcto:**  \r
En la vida diaria casi toda rueda avanza y gira a la vez, así que parece natural pensar que la compatibilidad entre ambas magnitudes es automática.\r
\r
**Por qué es incorrecto:**  \r
La ligadura ideal no es una propiedad garantizada por la forma circular. Es una condición de contacto. Si la rueda patina o derrapa, el residuo deja de ser cero y el modelo ideal ya no describe el régimen real.\r
\r
**Señal de detección:**  \r
El alumno escribe la igualdad principal antes de mirar los datos o antes de preguntarse si hay adherencia suficiente.\r
\r
**Corrección conceptual:**  \r
Primero diagnosticar el contacto con [[v_contacto]] o [[delta]], y solo después decidir si conviene imponer la ligadura.\r
\r
**Mini-ejemplo de contraste:**  \r
Una rueda de radio 0.25 m y velocidad angular 8 rad/s exigiría una velocidad lineal de 2.0 m/s en rodadura pura. Si se mide 2.6 m/s, ya no puede asumirse compatibilidad ideal.\r
\r
### Error 2: Pensar que sin deslizamiento no puede haber fricción\r
\r
**Por qué parece correcto:**  \r
Como el punto de apoyo está instantáneamente en reposo respecto al suelo, se confunde velocidad nula con fuerza nula.\r
\r
**Por qué es incorrecto:**  \r
Puede existir fricción estática distinta de cero aunque no haya deslizamiento relativo. Esa fuerza puede ser necesaria para ajustar el giro del cuerpo y sostener la ligadura.\r
\r
**Señal de detección:**  \r
El diagrama de fuerzas elimina el término de fricción en una rampa o en una rueda motriz solo porque “no patina”.\r
\r
**Corrección conceptual:**  \r
Separar “contacto sin arrastre” de “ausencia de interacción tangencial”.\r
\r
**Mini-ejemplo de contraste:**  \r
En una rampa, una rueda puede mantener el punto de contacto en reposo y aun así necesitar una fuerza de fricción estática para coordinar traslación y rotación.\r
\r
## Errores de modelo\r
\r
### Error 3: Mantener el modelo ideal cuando la adherencia ya ha fallado\r
\r
**Por qué parece correcto:**  \r
La ligadura simplifica mucho el problema y da ganas de mantenerla incluso cuando los datos empiezan a ser incompatibles.\r
\r
**Por qué es incorrecto:**  \r
Si el residuo de contacto deja de ser pequeño, si aparece fricción cinética o si las medidas ya no encajan con la predicción ideal, el problema ha cambiado de régimen y necesita otro modelo.\r
\r
**Señal de detección:**  \r
Se observa [[delta]] apreciable o distancia recorrida incompatible con el número de vueltas, pero se sigue usando la misma restricción como si nada hubiera pasado.\r
\r
**Corrección conceptual:**  \r
Cambiar a un modelo con deslizamiento en cuanto el diagnóstico del contacto lo exija.\r
\r
**Mini-ejemplo de contraste:**  \r
Durante una frenada, un sensor reporta\r
\r
{{f:velocidad_contacto}}\r
\r
de forma sostenida. Seguir usando el modelo ideal ocultará el inicio de bloqueo de la rueda.\r
\r
## Errores matemáticos\r
\r
### Error 4: Sustituir rpm como si fueran radianes por segundo\r
\r
**Por qué parece correcto:**  \r
El alumno toma el número del tacómetro y lo introduce directamente en la ecuación.\r
\r
**Por qué es incorrecto:**  \r
La fórmula requiere [[omega]] en rad/s. Si se usan rpm sin convertir, aparece un error de escala grande que distorsiona toda la lectura del movimiento.\r
\r
**Señal de detección:**  \r
La velocidad lineal resultante sale absurdamente alta o absurdamente baja para el radio de la rueda.\r
\r
**Corrección conceptual:**  \r
Convertir siempre rpm a velocidad angular antes de usar la ligadura.\r
\r
**Mini-ejemplo de contraste:**  \r
Una rueda a \`300 rpm\` no tiene\r
\r
{{f:velocidad_contacto}}\r
\r
, sino aproximadamente \`31.4 rad/s\`. Esa diferencia cambia por completo el valor de \`v\`.\r
\r
### Error 5: Ignorar el signo del residuo\r
\r
**Por qué parece correcto:**  \r
Se piensa que cualquier residuo no nulo significa solo “fallo de la condición” y que el signo no aporta nada.\r
\r
**Por qué es incorrecto:**  \r
El signo decide la naturaleza del fallo. Un residuo positivo indica derrape. Un residuo negativo indica patinamiento. Perder esa información destruye la lectura física.\r
\r
**Señal de detección:**  \r
El alumno detecta que la rueda no rueda idealmente, pero no sabe decir hacia qué lado arrastra el contacto.\r
\r
**Corrección conceptual:**  \r
Interpretar siempre el residuo con el convenio de signos declarado al principio.\r
\r
**Mini-ejemplo de contraste:**  \r
Si la velocidad lineal es 5 m/s y el avance asociado al giro es 4.5 m/s, el residuo es positivo y hay derrape. Si el avance asociado al giro es 5.5 m/s, el residuo es negativo y hay patinamiento.\r
\r
## Errores de interpretación\r
\r
### Error 6: Confundir la velocidad del centro con la velocidad del contacto\r
\r
**Por qué parece correcto:**  \r
Ambos puntos pertenecen a la misma rueda y eso induce a pensar que comparten la misma velocidad.\r
\r
**Por qué es incorrecto:**  \r
Cada punto de un sólido rígido puede tener velocidad diferente. En rodadura pura, el centro avanza con \`v\`, pero el punto inferior tiene velocidad nula respecto al suelo.\r
\r
**Señal de detección:**  \r
El alumno afirma que “toda la rueda va a velocidad \`v\`”.\r
\r
**Corrección conceptual:**  \r
Distinguir entre velocidad del centro, velocidad periférica y velocidad del punto de apoyo.\r
\r
**Mini-ejemplo de contraste:**  \r
En rodadura pura, el centro puede llevar \`4 m/s\`, el punto de contacto velocidad nula y el punto superior aproximadamente \`8 m/s\`.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de cerrar un problema, comprueba cuatro cosas: que [[omega]] está en rad/s, que el dato geométrico es el radio y no el diámetro, que has calculado explícitamente el residuo de contacto, y que sabes interpretar su signo. Si una de esas cuatro piezas falta, todavía no has validado la rodadura.`;export{e as default};
