## Modelo ideal

El modelo simplificado representa el cuadro eléctrico doméstico con dos funciones de protección estrictamente separadas: el magnetotérmico actúa como limitador de [[corriente_de_carga]] respecto a su calibre [[corriente_nominal_del_magnetotermico]], y el diferencial actúa como detector de desequilibrio [[desequilibrio_diferencial]] respecto a su sensibilidad [[umbral_diferencial_nominal]]. Ambas protecciones son independientes: la actuación de una no implica la actuación de la otra ni la sustituye en su función.

Este modelo permite clasificar rápidamente el tipo de incidencia según cuál de los dos dispositivos actuó, sin necesidad de medición instrumental avanzada. Es suficientemente preciso para el análisis diagnóstico residencial cotidiano cuando se conocen los calibres instalados y la carga aproximada del circuito.

## Hipótesis

El modelo ideal asume:
- Corriente alterna sinusoidal pura sin armónicos significativos.
- Temperatura ambiente en rango normal (10–40 °C).
- Calibres de magnetotérmico y diferencial estándar (10 A, 16 A, 25 A; 30 mA, 300 mA).
- Instalación monofásica residencial con conductor de tierra correctamente conectado.
- Los disparos son determinísticos: si [[margen_termico]] ≥ 1 o [[margen_dif]] ≥ 1, el dispositivo actúa.

## Dominio de validez cuantitativo

**Condición cuantitativa de actuación del magnetotérmico:** [[margen_termico]] = [[corriente_de_carga]] / [[corriente_nominal_del_magnetotermico]] ≥ 1 para disparo garantizado en régimen sostenido. La potencia límite aproximada es [[potencia_limite_magnetotermica]] = [[tension_de_suministro]] × [[corriente_nominal_del_magnetotermico]]. Para un magnetotérmico de 16 A a 230 V, [[potencia_limite_magnetotermica]] ≈ 3 680 W. Si [[margen_termico]] está entre 1 y 1,5, el disparo ocurre en minutos. Para cortocircuitos ([[margen_termico]] > 10), el disparo es instantáneo (< 10 ms).

**Condición cuantitativa de actuación del diferencial:** [[margen_dif]] = [[desequilibrio_diferencial]] / [[umbral_diferencial_nominal]] ≥ 1. Para [[umbral_diferencial_nominal]] = 30 mA, cualquier fuga que genere [[desequilibrio_diferencial]] ≥ 30 mA causa disparo en menos de 300 ms según norma UNE-EN 61008. Para [[umbral_diferencial_nominal]] = 300 mA (protección contra incendios), el umbral se eleva a 300 mA.

El modelo pierde precisión para [[margen_termico]] entre 1,0 y 1,2 (zona de disparo lento dependiente del historial térmico del bimetálico), y para [[margen_dif]] entre 0,7 y 1,0 en presencia de fugas intermitentes.

## Señales de fallo del modelo

Las señales de que el modelo ideal es insuficiente:
- Disparo recurrente sin causa aparente al cambiar condiciones ambientales (temperatura, humedad).
- Ausencia de disparo con síntomas térmicos claros en puntos de conexión (olor, decoloración, calor local).
- Diagnóstico circular: se rearman las protecciones sin identificar la variable física causante.
- Cambios de calibre como "solución" que ocultan el problema real sin corregirlo.
- Disparos selectivos que afectan solo a un aparato concreto y no al resto del circuito.
- [[margen_dif]] > 0,5 de forma persistente en instalación aparentemente en orden.

## Modelo extendido o alternativo

El modelo extendido incorpora tres variables adicionales que el ideal ignora: el tiempo de actuación, la temperatura del bimetálico y las condiciones ambientales. Un magnetotérmico que ha operado cerca del límite durante horas tiene el bimetálico más caliente y puede disparar con [[corriente_de_carga]] ligeramente inferiores a [[corriente_nominal_del_magnetotermico]]. Un diferencial en ambiente muy húmedo puede tener [[desequilibrio_diferencial]] distribuidas en la instalación que, sumadas, superan [[umbral_diferencial_nominal]] aunque ninguna individualmente sea significativa.

**Cuándo conviene cambiar al modelo extendido:** cuando el ideal no reproduce el patrón de disparo observado, cuando hay disparos repetidos con [[margen_termico]] < 0,9, o cuando los síntomas son estacionales o dependientes de temperatura y humedad. El análisis correcto en estos casos exige medir [[corriente_de_fase]] e [[corriente_de_neutro]] en tiempo real durante el uso del circuito afectado.

## Comparación operativa

**Modelo binario de disparo / no disparo:** útil para clasificar el incidente inicial pero no permite cuantificar [[margen_termico]] ni [[margen_dif]], ni predecir comportamientos futuros antes de que ocurra el disparo.

**Modelo con curvas de tiempo-corriente:** necesario para instalaciones donde la selectividad entre magnetotérmicos en serie es crítica. Permite predecir si el magnetotérmico del circuito actúa antes que el general, preservando el suministro al resto de la vivienda.

**Modelo instrumentado en cuadro:** necesario para diagnóstico avanzado con analizadores de red. Proporciona [[corriente_de_fase]], [[corriente_de_neutro]], armónicos, factor de potencia e [[desequilibrio_diferencial]] en tiempo real.

Regla práctica: siempre separar fallo por sobrecorriente ([[corriente_de_carga]] > [[corriente_nominal_del_magnetotermico]]), fuga diferencial ([[desequilibrio_diferencial]] > [[umbral_diferencial_nominal]]) y defecto térmico local (calor sin disparo). Cada tipo requiere un instrumento y una acción de corrección diferente.