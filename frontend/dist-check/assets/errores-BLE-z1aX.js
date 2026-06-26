const e=`# Errores frecuentes en el análisis de diferencial y magnetotérmico\r
\r
## Errores conceptuales\r
\r
### Error 1: confundir las funciones del diferencial y el magnetotérmico\r
\r
**Por qué parece correcto:** Ambos dispositivos interrumpen el suministro cuando actúan, por lo que parecen hacer lo mismo. La apariencia física de ambos en el cuadro refuerza la confusión.\r
\r
**Por qué es incorrecto:** El diferencial vigila [[I_delta]] entre [[I_fase]] e [[I_neutro]]. El magnetotérmico vigila la [[I]] total respecto a [[I_n]]. Son magnitudes distintas, umbrales distintos y amenazas distintas. Ninguno hace la función del otro.\r
\r
**Señal de detección:** El alumno dice "cambié el diferencial porque se recalentaba el cable" o "subí el magnetotérmico porque saltaba mucho". Esas acciones no resuelven el problema físico subyacente.\r
\r
**Corrección conceptual:** Identificar primero cuál dispositivo actuó. Si actuó el diferencial, buscar el origen de [[I_delta]] elevado. Si actuó el magnetotérmico, verificar que [[I]] no supera [[I_n]].\r
\r
**Mini-ejemplo de contraste:** Circuito con [[I]] = 14 A y magnetotérmico de 16 A. El diferencial salta. Diagnóstico incorrecto: "el magnetotérmico es demasiado sensible". Diagnóstico correcto: hay [[I_delta]] que supera [[I_dn]]; la [[I]] total no supera [[I_n]], por lo que el magnetotérmico no actúa.\r
\r
### Error 2: asumir que la ausencia de disparo significa seguridad eléctrica\r
\r
**Por qué parece correcto:** Si ningún dispositivo ha saltado, parece que la instalación está dentro de todos sus límites de seguridad.\r
\r
**Por qué es incorrecto:** Existe un tercer escenario no cubierto por ninguna protección: el defecto térmico local en un punto de conexión con resistencia de contacto elevada. Con [[I]] < [[I_n]] y [[I_delta]] < [[I_dn]], ninguno dispara, pero el calor local puede ser peligroso.\r
\r
**Señal de detección:** El alumno concluye que la instalación está bien porque "no saltó nada". No considera la posibilidad de defecto sin disparo.\r
\r
**Corrección conceptual:** Los dispositivos de protección tienen dominios de actuación definidos. Fuera de esos dominios, el riesgo puede existir sin señal de disparo.\r
\r
**Mini-ejemplo de contraste:** Conexión floja en regleta con [[I]] = 12 A en circuito de 16 A. [[margen_termico]] = 0,75 (sin sobrecarga). [[I_delta]] = 0 (sin fuga). Ninguno dispara, pero el punto de contacto disipa calor localmente y puede causar un incendio.\r
\r
## Errores de modelo\r
\r
### Error 3: aumentar el umbral de protección para eliminar disparos recurrentes\r
\r
**Por qué parece correcto:** Si el diferencial salta frecuentemente, subir [[I_dn]] de 30 mA a 300 mA parece la solución técnica.\r
\r
**Por qué es incorrecto:** Un disparo recurrente del diferencial indica [[I_delta]] sistemáticamente elevado: hay una fuga persistente que debe corregirse. Subir [[I_dn]] elimina la detección de esa fuga real, no la fuga en sí.\r
\r
**Señal de detección:** El alumno propone aumentar el umbral como primera solución sin verificar la causa física del [[I_delta]] elevado.\r
\r
**Corrección conceptual:** La solución es identificar el circuito o aparato que genera [[I_delta]] y corregir la fuga. El umbral [[I_dn]] está dimensionado para protección personal; modificarlo requiere análisis técnico específico.\r
\r
**Mini-ejemplo de contraste:** Diferencial de 30 mA que salta cada vez que se usa el lavavajillas. Solución incorrecta: cambiar a diferencial de 300 mA. Solución correcta: verificar el aislamiento del lavavajillas y su toma de tierra; el aparato tiene una fuga interna que supera [[I_dn]].\r
\r
## Errores matemáticos\r
\r
### Error 4: comparar [[I_delta]] en mA con [[I]] en A sin convertir unidades\r
\r
**Por qué parece correcto:** Tanto [[I_delta]] como [[I]] son corrientes eléctricas, por lo que parece válido compararlas directamente en la misma escala.\r
\r
**Por qué es incorrecto:** El umbral [[I_dn]] equivale a 30 mA, es decir, 0,030 A. La [[I]] de carga habitual es de varios amperios. Son magnitudes de órdenes de magnitud muy distintos que no se pueden comparar sin conversión de unidades.\r
\r
**Señal de detección:** El alumno afirma "la corriente es 8 A y el diferencial es 30, así que hay mucho margen". Confunde el valor 30 mA con 30 A.\r
\r
**Corrección conceptual:** Convertir siempre [[I_delta]] e [[I_dn]] al mismo sistema de unidades antes de calcular [[margen_dif]].\r
\r
**Mini-ejemplo de contraste:** Con [[I]] de 8 A e [[I_delta]] de 40 mA, el [[margen_termico]] resulta 0,50 (sin sobrecarga magnetotérmica) y el [[margen_dif]] resulta 1,33 (disparo diferencial activo). Las dos evaluaciones son completamente independientes.\r
\r
## Errores de interpretación\r
\r
### Error 5: diagnosticar solo con el síntoma sin medir la magnitud causante\r
\r
**Por qué parece correcto:** Si el diferencial saltó, parece lógico que el problema sea el diferencial; si saltó el magnetotérmico, el problema es de corriente.\r
\r
**Por qué es incorrecto:** El dispositivo que disparó solo identifica qué umbral se superó, no cuál fue la causa física. Actuar sobre el dispositivo sin medir la magnitud causante no resuelve el problema de fondo.\r
\r
**Señal de detección:** El alumno cambia el dispositivo sin medir [[I]], [[I_fase]], [[I_neutro]] ni [[I_delta]] del circuito afectado.\r
\r
**Corrección conceptual:** El diagnóstico correcto requiere estimar [[I]] a partir de [[P]] y [[V]], comparar con [[I_n]], y si es posible medir [[I_delta]] y calcular [[margen_dif]].\r
\r
**Mini-ejemplo de contraste:** Magnetotérmico que salta repetidamente. Solución incorrecta: cambiar el magnetotérmico por uno mayor sin verificar [[I]]. Solución correcta: medir o estimar [[I]] del circuito; si [[I]] supera [[I_n]], redistribuir carga o recalcular calibre con la sección de cable.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de rearmar o modificar cualquier protección, verificar cinco puntos:\r
1. ¿Qué protección actuó: diferencial, magnetotérmico o ninguna?\r
2. ¿Cuál es la [[I]] estimada del circuito afectado y cómo se compara con [[I_n]]?\r
3. ¿Hay evidencia de [[I_delta]] elevado?\r
4. ¿Hay evidencia térmica local: olor, decoloración, calor en punto de conexión?\r
5. ¿Se ha identificado y corregido la causa física antes de rearmar?\r
`;export{e as default};
