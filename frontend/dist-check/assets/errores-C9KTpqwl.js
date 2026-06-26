const e=`\uFEFF## Errores conceptuales\r
\r
### Error 1: Confundir la capacidad calorífica total C con el calor específico c\r
\r
**Por qué parece correcto**\r
Ambas magnitudes expresan resistencia al calentamiento y suelen aparecer juntas en tablas o ejercicios.\r
\r
**Por qué es incorrecto**\r
[[C]] pertenece al cuerpo completo y se mide en J/K. El calor específico pertenece al material y debe combinarse con la masa para obtener la capacidad total.\r
\r
**Señal de detección**\r
El resultado no cambia al duplicar la masa del cuerpo, o se obtiene una unidad por kilogramo cuando se esperaba J/K.\r
\r
**Corrección conceptual**\r
Preguntar siempre si se habla del material o del objeto completo. Para el objeto completo, usar [[C]].\r
\r
**Mini-ejemplo de contraste**\r
Un litro de agua tiene mucha más [[C]] que una cucharada de agua, aunque el material y su calor específico sean iguales.\r
\r
## Errores de modelo\r
\r
### Error 2: Calcular [[DeltaT]] como temperatura inicial menos final\r
\r
**Por qué parece correcto**\r
Al estudiante le interesa la magnitud del cambio y usa una resta positiva sin pensar en el sentido físico.\r
\r
**Por qué es incorrecto**\r
[[DeltaT]] conserva signo: final menos inicial. Si el cuerpo se enfria, [[DeltaT]] y [[Q]] son negativos.\r
\r
**Señal de detección**\r
Un cuerpo que se enfria aparece como si hubiera absorbido calor, o uno que se calienta aparece con [[Q]] negativo.\r
\r
**Corrección conceptual**\r
Fijar el convenio antes de sustituir: temperatura final menos temperatura inicial. Luego comprobar que [[Q]] y [[DeltaT]] tienen el mismo signo.\r
\r
**Mini-ejemplo de contraste**\r
Agua que pasa de 80 C a 30 C se enfria. El cambio de temperatura es negativo y el calor intercambiado por el agua también debe ser negativo.\r
\r
## Errores matemáticos\r
\r
### Error 3: Obtener [[C]] negativa y no identificarla como error\r
\r
**Por qué parece correcto**\r
Al dividir dos cantidades con signos opuestos puede aparecer un número negativo y el alumno lo acepta como resultado algebraico.\r
\r
**Por qué es incorrecto**\r
[[C]] es positiva para cuerpos estables. Un valor negativo indica que se mezclaron signos de [[Q]] o [[DeltaT]].\r
\r
**Señal de detección**\r
La capacidad calorifica sale menor que cero o cambia de signo entre dos mediciones del mismo cuerpo.\r
\r
**Corrección conceptual**\r
Revisar la direccion del calor y el orden de las temperaturas. No interpretar [[C]] negativa como propiedad real.\r
\r
**Mini-ejemplo de contraste**\r
Si una resistencia calienta una muestra, [[Q]] es positivo y [[DeltaT]] debe ser positivo. Si uno de los dos aparece negativo, el signo esta mal asignado.\r
\r
## Errores de interpretación\r
\r
### Error 4: Creer que el material con mayor calor específico tiene siempre mayor [[C]]\r
\r
**Por qué parece correcto**\r
El calor específico alto hace que una masa dada cambie poco de temperatura, así que parece determinarlo todo.\r
\r
**Por qué es incorrecto**\r
La masa también cuenta. Una gran pieza de hierro puede tener más [[C]] que una pequeña cantidad de agua.\r
\r
**Señal de detección**\r
Se comparan materiales sin mencionar masa o tamaño del cuerpo.\r
\r
**Corrección conceptual**\r
Comparar cuerpos completos, no solo materiales. La pregunta de este leaf es siempre sobre [[C]] del objeto real.\r
\r
**Mini-ejemplo de contraste**\r
Un vaso de agua puede tener menor [[C]] que una viga metalica grande, aunque el agua tenga mayor calor específico que el metal.\r
\r
## Errores de validez\r
\r
### Error 5: Aplicar calor sensible cuando hay cambio de estado\r
\r
**Por qué parece correcto**\r
La formula de capacidad calorifica es sencilla y parece servir para cualquier calentamiento.\r
\r
**Por qué es incorrecto**\r
Durante un cambio de estado, parte del calor es latente y no produce [[DeltaT]]. La relación lineal con [[C]] deja de describir todo el proceso.\r
\r
**Señal de detección**\r
El intervalo de temperatura cruza fusion, ebullicion o una meseta experimental de temperatura.\r
\r
**Corrección conceptual**\r
Separar el proceso en tramos sensibles y tramos latentes. Usar [[C]] solo en los tramos donde la temperatura cambia.\r
\r
**Mini-ejemplo de contraste**\r
Calentar hielo desde bajo cero hasta agua liquida no es un único tramo con [[C]] constante: primero se calienta hielo, luego se funde a temperatura constante y después se calienta agua.\r
\r
## Regla de autocontrol rápido\r
\r
1. [[C]] describe un cuerpo completo, no solo el material.\r
2. [[Q]] y [[DeltaT]] deben tener el mismo signo.\r
3. [[C]] negativa significa error de signos o datos.\r
4. Si hay cambio de estado, separar calor sensible y latente.\r
`;export{e as default};
