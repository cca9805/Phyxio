const e=`# Errores frecuentes en ejemplos clásicos de rodadura\r
\r
## Errores conceptuales\r
\r
### Error 1: Creer que un ejemplo clásico solo exige sustituir números\r
\r
**Por qué parece correcto:**  \r
El enunciado suele traer [[v]], [[n]] y [[R]], así que parece que basta con meter datos en una fórmula.\r
\r
**Por qué es incorrecto:**  \r
En este leaf el objetivo es validar coherencia. Si no se entiende qué mide cada magnitud y en qué instante fue medida, el resultado puede ser numéricamente limpio pero físicamente inútil.\r
\r
**Señal de detección:**  \r
El alumno calcula una velocidad ideal sin preguntarse si [[n]] está en rpm, si el radio es efectivo o si los sensores están sincronizados.\r
\r
**Corrección conceptual:**  \r
Leer primero el ejemplo como flujo de medición y después como problema algebraico.\r
\r
**Mini-ejemplo de contraste:**  \r
Dos sensores pueden dar valores correctos por separado y, aun así, producir un residual falso si no corresponden al mismo intervalo temporal.\r
\r
## Errores de modelo\r
\r
### Error 2: Usar un único umbral para cualquier ejemplo\r
\r
**Por qué parece correcto:**  \r
Una vez que se aprende un valor de referencia para [[delta]], apetece reutilizarlo en todos los casos.\r
\r
**Por qué es incorrecto:**  \r
El umbral depende del montaje, de la velocidad, de la resolución instrumental y del objetivo del análisis. Un banco de baja velocidad no se evalúa igual que una rueda industrial rápida.\r
\r
**Señal de detección:**  \r
Se clasifican como equivalentes ejemplos con escalas y sensores muy distintos.\r
\r
**Corrección conceptual:**  \r
Declarar siempre el umbral y justificar por qué es razonable para ese ejemplo clásico.\r
\r
**Mini-ejemplo de contraste:**  \r
Un residual de 0.2 m/s puede ser despreciable en una línea rápida y muy grande en un experimento de laboratorio lento.\r
\r
## Errores matemáticos\r
\r
### Error 3: Confundir rpm con rad/s\r
\r
**Por qué parece correcto:**  \r
La lectura de [[n]] viene del instrumento y se trata como si ya fuera la variable angular del modelo.\r
\r
**Por qué es incorrecto:**  \r
La condición de rodadura usa [[omega]] en unidades SI. Si no se convierte [[n]], toda la comparación entre giro y avance queda mal escalada.\r
\r
**Señal de detección:**  \r
El alumno obtiene un residual alto y lo interpreta como deslizamiento cuando en realidad es un error de conversión.\r
\r
**Corrección conceptual:**  \r
Aplicar siempre primero la conversión desde rpm a rad/s.\r
\r
**Mini-ejemplo de contraste:**  \r
Una lectura de 300 rpm no significa 300 rad/s, sino aproximadamente 31.4 rad/s. Esa diferencia cambia por completo la velocidad ideal predicha.\r
\r
## Errores de interpretación\r
\r
### Error 4: Pensar que un único residual basta para concluir toda la historia física\r
\r
**Por qué parece correcto:**  \r
El residual resume muy bien la coherencia del ejemplo y parece tentador darle todo el peso.\r
\r
**Por qué es incorrecto:**  \r
[[delta]] es una lectura local de coherencia cinemática. Puede coexistir con errores de sincronización, radio efectivo mal estimado o deriva de sensor. Interpretarlo sin contexto empobrece el diagnóstico.\r
\r
**Señal de detección:**  \r
Se concluye “hay deslizamiento” sin revisar tendencia temporal, umbral o calidad instrumental.\r
\r
**Corrección conceptual:**  \r
Usar [[delta]] como indicador principal, pero no como prueba aislada independiente del contexto experimental.\r
\r
**Mini-ejemplo de contraste:**  \r
Un valor ligeramente fuera de umbral en una sola muestra puede ser ruido; el mismo valor repetido en diez ventanas consecutivas ya apunta a un fallo real de contacto o medición.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de cerrar un ejemplo clásico, responder cinco preguntas: qué mide [[n]], cómo se convierte a [[omega]], si [[R]] es realmente el radio efectivo, qué umbral se adopta para [[delta]] y qué acción práctica se deriva del diagnóstico. Si una de esas cinco respuestas falta, el ejemplo no está realmente validado.`;export{e as default};
