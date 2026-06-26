const e=`# Modelos de protección eléctrica diferencial y magnetotérmica\r
\r
## Modelo ideal\r
\r
El modelo simplificado representa el cuadro eléctrico doméstico con dos funciones de protección estrictamente separadas: el magnetotérmico actúa como limitador de [[I]] respecto a su calibre [[I_n]], y el diferencial actúa como detector de desequilibrio [[I_delta]] respecto a su sensibilidad [[I_dn]]. Ambas protecciones son independientes: la actuación de una no implica la actuación de la otra ni la sustituye en su función.\r
\r
Este modelo permite clasificar rápidamente el tipo de incidencia según cuál de los dos dispositivos actuó, sin necesidad de medición instrumental avanzada. Es suficientemente preciso para el análisis diagnóstico residencial cotidiano cuando se conocen los calibres instalados y la carga aproximada del circuito.\r
\r
## Hipótesis\r
\r
El modelo ideal asume:\r
- Corriente alterna sinusoidal pura sin armónicos significativos.\r
- Temperatura ambiente en rango normal (10–40 °C).\r
- Calibres de magnetotérmico y diferencial estándar (10 A, 16 A, 25 A; 30 mA, 300 mA).\r
- Instalación monofásica residencial con conductor de tierra correctamente conectado.\r
- Los disparos son determinísticos: si [[margen_termico]] ≥ 1 o [[margen_dif]] ≥ 1, el dispositivo actúa.\r
\r
## Dominio de validez cuantitativo\r
\r
**Condición cuantitativa de actuación del magnetotérmico:** [[margen_termico]] = [[I]] / [[I_n]] ≥ 1 para disparo garantizado en régimen sostenido. La potencia límite aproximada es [[P_lim]] = [[V]] × [[I_n]]. Para un magnetotérmico de 16 A a 230 V, [[P_lim]] ≈ 3 680 W. Si [[margen_termico]] está entre 1 y 1,5, el disparo ocurre en minutos. Para cortocircuitos ([[margen_termico]] > 10), el disparo es instantáneo (< 10 ms).\r
\r
**Condición cuantitativa de actuación del diferencial:** [[margen_dif]] = [[I_delta]] / [[I_dn]] ≥ 1. Para [[I_dn]] = 30 mA, cualquier fuga que genere [[I_delta]] ≥ 30 mA causa disparo en menos de 300 ms según norma UNE-EN 61008. Para [[I_dn]] = 300 mA (protección contra incendios), el umbral se eleva a 300 mA.\r
\r
El modelo pierde precisión para [[margen_termico]] entre 1,0 y 1,2 (zona de disparo lento dependiente del historial térmico del bimetálico), y para [[margen_dif]] entre 0,7 y 1,0 en presencia de fugas intermitentes.\r
\r
## Señales de fallo del modelo\r
\r
Las señales de que el modelo ideal es insuficiente:\r
- Disparo recurrente sin causa aparente al cambiar condiciones ambientales (temperatura, humedad).\r
- Ausencia de disparo con síntomas térmicos claros en puntos de conexión (olor, decoloración, calor local).\r
- Diagnóstico circular: se rearman las protecciones sin identificar la variable física causante.\r
- Cambios de calibre como "solución" que ocultan el problema real sin corregirlo.\r
- Disparos selectivos que afectan solo a un aparato concreto y no al resto del circuito.\r
- [[margen_dif]] > 0,5 de forma persistente en instalación aparentemente en orden.\r
\r
## Modelo extendido o alternativo\r
\r
El modelo extendido incorpora tres variables adicionales que el ideal ignora: el tiempo de actuación, la temperatura del bimetálico y las condiciones ambientales. Un magnetotérmico que ha operado cerca del límite durante horas tiene el bimetálico más caliente y puede disparar con [[I]] ligeramente inferiores a [[I_n]]. Un diferencial en ambiente muy húmedo puede tener [[I_delta]] distribuidas en la instalación que, sumadas, superan [[I_dn]] aunque ninguna individualmente sea significativa.\r
\r
**Cuándo conviene cambiar al modelo extendido:** cuando el ideal no reproduce el patrón de disparo observado, cuando hay disparos repetidos con [[margen_termico]] < 0,9, o cuando los síntomas son estacionales o dependientes de temperatura y humedad. El análisis correcto en estos casos exige medir [[I_fase]] e [[I_neutro]] en tiempo real durante el uso del circuito afectado.\r
\r
## Comparación operativa\r
\r
**Modelo binario de disparo / no disparo:** útil para clasificar el incidente inicial pero no permite cuantificar [[margen_termico]] ni [[margen_dif]], ni predecir comportamientos futuros antes de que ocurra el disparo.\r
\r
**Modelo con curvas de tiempo-corriente:** necesario para instalaciones donde la selectividad entre magnetotérmicos en serie es crítica. Permite predecir si el magnetotérmico del circuito actúa antes que el general, preservando el suministro al resto de la vivienda.\r
\r
**Modelo instrumentado en cuadro:** necesario para diagnóstico avanzado con analizadores de red. Proporciona [[I_fase]], [[I_neutro]], armónicos, factor de potencia e [[I_delta]] en tiempo real.\r
\r
Regla práctica: siempre separar fallo por sobrecorriente ([[I]] > [[I_n]]), fuga diferencial ([[I_delta]] > [[I_dn]]) y defecto térmico local (calor sin disparo). Cada tipo requiere un instrumento y una acción de corrección diferente.\r
`;export{e as default};
