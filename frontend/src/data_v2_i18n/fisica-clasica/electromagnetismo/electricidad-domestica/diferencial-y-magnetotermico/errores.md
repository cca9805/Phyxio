## Errores conceptuales


### Error 1: confundir las funciones del diferencial y el magnetotérmico

**Por qué parece correcto:** Ambos dispositivos interrumpen el suministro cuando actúan, por lo que parecen hacer lo mismo. La apariencia física de ambos en el cuadro refuerza la confusión.

**Por qué es incorrecto:** El diferencial vigila [[desequilibrio_diferencial]] entre [[corriente_de_fase]] e [[corriente_de_neutro]]. El magnetotérmico vigila la [[corriente_de_carga]] total respecto a [[corriente_nominal_del_magnetotermico]]. Son magnitudes distintas, umbrales distintos y amenazas distintas. Ninguno hace la función del otro.

**Señal de detección:** El alumno dice "cambié el diferencial porque se recalentaba el cable" o "subí el magnetotérmico porque saltaba mucho". Esas acciones no resuelven el problema físico subyacente.

**Corrección conceptual:** Identificar primero cuál dispositivo actuó. Si actuó el diferencial, buscar el origen de [[desequilibrio_diferencial]] elevado. Si actuó el magnetotérmico, verificar que [[corriente_de_carga]] no supera [[corriente_nominal_del_magnetotermico]].

**Mini-ejemplo de contraste:** Circuito con [[corriente_de_carga]] = 14 A y magnetotérmico de 16 A. El diferencial salta. Diagnóstico incorrecto: "el magnetotérmico es demasiado sensible". Diagnóstico correcto: hay [[desequilibrio_diferencial]] que supera [[umbral_diferencial_nominal]]; la [[corriente_de_carga]] total no supera [[corriente_nominal_del_magnetotermico]], por lo que el magnetotérmico no actúa.

**Por qué parece correcto**

Control 1: En Diferencial y magnetotermico, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 1.

**Por qué es incorrecto**

Control 2: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 2.

**Señal de detección**

Control 3: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 3.

**Corrección conceptual**

Control 4: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 4.

### Error 2: asumir que la ausencia de disparo significa seguridad eléctrica

**Por qué parece correcto:** Si ningún dispositivo ha saltado, parece que la instalación está dentro de todos sus límites de seguridad.

**Por qué es incorrecto:** Existe un tercer escenario no cubierto por ninguna protección: el defecto térmico local en un punto de conexión con resistencia de contacto elevada. Con [[corriente_de_carga]] < [[corriente_nominal_del_magnetotermico]] y [[desequilibrio_diferencial]] < [[umbral_diferencial_nominal]], ninguno dispara, pero el calor local puede ser peligroso.

**Señal de detección:** El alumno concluye que la instalación está bien porque "no saltó nada". No considera la posibilidad de defecto sin disparo.

**Corrección conceptual:** Los dispositivos de protección tienen dominios de actuación definidos. Fuera de esos dominios, el riesgo puede existir sin señal de disparo.

**Mini-ejemplo de contraste:** Conexión floja en regleta con [[corriente_de_carga]] = 12 A en circuito de 16 A. [[margen_termico]] = 0,75 (sin sobrecarga). [[desequilibrio_diferencial]] = 0 (sin fuga). Ninguno dispara, pero el punto de contacto disipa calor localmente y puede causar un incendio.

## Errores de modelo

**Por qué parece correcto**

Control 5: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 5.

**Por qué es incorrecto**

Control 6: En Diferencial y magnetotermico, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 6.

**Señal de detección**

Control 7: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 7.

**Corrección conceptual**

Control 8: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 8.

### Error 3: aumentar el umbral de protección para eliminar disparos recurrentes

**Por qué parece correcto:** Si el diferencial salta frecuentemente, subir [[umbral_diferencial_nominal]] de 30 mA a 300 mA parece la solución técnica.

**Por qué es incorrecto:** Un disparo recurrente del diferencial indica [[desequilibrio_diferencial]] sistemáticamente elevado: hay una fuga persistente que debe corregirse. Subir [[umbral_diferencial_nominal]] elimina la detección de esa fuga real, no la fuga en sí.

**Señal de detección:** El alumno propone aumentar el umbral como primera solución sin verificar la causa física del [[desequilibrio_diferencial]] elevado.

**Corrección conceptual:** La solución es identificar el circuito o aparato que genera [[desequilibrio_diferencial]] y corregir la fuga. El umbral [[umbral_diferencial_nominal]] está dimensionado para protección personal; modificarlo requiere análisis técnico específico.

**Mini-ejemplo de contraste:** Diferencial de 30 mA que salta cada vez que se usa el lavavajillas. Solución incorrecta: cambiar a diferencial de 300 mA. Solución correcta: verificar el aislamiento del lavavajillas y su toma de tierra; el aparato tiene una fuga interna que supera [[umbral_diferencial_nominal]].

## Errores matemáticos

**Por qué parece correcto**

Control 9: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 9.

**Por qué es incorrecto**

Control 10: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 10.

**Señal de detección**

Control 11: En Diferencial y magnetotermico, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 11.

**Corrección conceptual**

Control 12: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 12.

### Error 4: comparar [[desequilibrio_diferencial]] en mA con [[corriente_de_carga]] en A sin convertir unidades

**Por qué parece correcto:** Tanto [[desequilibrio_diferencial]] como [[corriente_de_carga]] son corrientes eléctricas, por lo que parece válido compararlas directamente en la misma escala.

**Por qué es incorrecto:** El umbral [[umbral_diferencial_nominal]] equivale a 30 mA, es decir, 0,030 A. La [[corriente_de_carga]] de carga habitual es de varios amperios. Son magnitudes de órdenes de magnitud muy distintos que no se pueden comparar sin conversión de unidades.

**Señal de detección:** El alumno afirma "la corriente es 8 A y el diferencial es 30, así que hay mucho margen". Confunde el valor 30 mA con 30 A.

**Corrección conceptual:** Convertir siempre [[desequilibrio_diferencial]] e [[umbral_diferencial_nominal]] al mismo sistema de unidades antes de calcular [[margen_dif]].

**Mini-ejemplo de contraste:** Con [[corriente_de_carga]] de 8 A e [[desequilibrio_diferencial]] de 40 mA, el [[margen_termico]] resulta 0,50 (sin sobrecarga magnetotérmica) y el [[margen_dif]] resulta 1,33 (disparo diferencial activo). Las dos evaluaciones son completamente independientes.

## Errores de interpretación

**Por qué parece correcto**

Control 13: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 13.

**Por qué es incorrecto**

Control 14: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 14.

**Señal de detección**

Control 15: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 15.

**Corrección conceptual**

Control 16: En Diferencial y magnetotermico, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 16.

### Error 5: diagnosticar solo con el síntoma sin medir la magnitud causante

**Por qué parece correcto:** Si el diferencial saltó, parece lógico que el problema sea el diferencial; si saltó el magnetotérmico, el problema es de corriente.

**Por qué es incorrecto:** El dispositivo que disparó solo identifica qué umbral se superó, no cuál fue la causa física. Actuar sobre el dispositivo sin medir la magnitud causante no resuelve el problema de fondo.

**Señal de detección:** El alumno cambia el dispositivo sin medir [[corriente_de_carga]], [[corriente_de_fase]], [[corriente_de_neutro]] ni [[desequilibrio_diferencial]] del circuito afectado.

**Corrección conceptual:** El diagnóstico correcto requiere estimar [[corriente_de_carga]] a partir de [[potencia_de_carga]] y [[tension_de_suministro]], comparar con [[corriente_nominal_del_magnetotermico]], y si es posible medir [[desequilibrio_diferencial]] y calcular [[margen_dif]].

**Mini-ejemplo de contraste:** Magnetotérmico que salta repetidamente. Solución incorrecta: cambiar el magnetotérmico por uno mayor sin verificar [[corriente_de_carga]]. Solución correcta: medir o estimar [[corriente_de_carga]] del circuito; si [[corriente_de_carga]] supera [[corriente_nominal_del_magnetotermico]], redistribuir carga o recalcular calibre con la sección de cable.

## Regla de autocontrol rápido

Antes de rearmar o modificar cualquier protección, verificar cinco puntos:
1. ¿Qué protección actuó: diferencial, magnetotérmico o ninguna?
2. ¿Cuál es la [[corriente_de_carga]] estimada del circuito afectado y cómo se compara con [[corriente_nominal_del_magnetotermico]]?
3. ¿Hay evidencia de [[desequilibrio_diferencial]] elevado?
4. ¿Hay evidencia térmica local: olor, decoloración, calor en punto de conexión?
5. ¿Se ha identificado y corregido la causa física antes de rearmar?

**Por qué parece correcto**

Control 17: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 17.

**Por qué es incorrecto**

Control 18: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 18.

**Señal de detección**

Control 19: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 19.

**Corrección conceptual**

Control 20: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 20.