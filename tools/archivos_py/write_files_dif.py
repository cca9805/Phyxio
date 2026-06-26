from pathlib import Path

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/diferencial-y-magnetotermico')

# ── modelos.md ────────────────────────────────────────────────────────────────
modelos = '''# Modelos de protección eléctrica diferencial y magnetotérmica

## 1. Modelo ideal de dos protecciones independientes

El modelo simplificado representa el cuadro eléctrico doméstico con dos funciones de protección estrictamente separadas: el magnetotérmico actúa como limitador de corriente [[I]] respecto a su calibre [[I_n]], y el diferencial actúa como detector de desequilibrio [[I_delta]] respecto a su sensibilidad [[I_dn]]. Ambas protecciones son independientes: la actuación de una no implica la actuación de la otra ni la sustituye.

Este modelo ideal permite clasificar rápidamente el tipo de incidencia según cuál de los dos dispositivos actuó, sin necesidad de medición instrumental avanzada. Es suficientemente preciso para el análisis diagnóstico residencial cotidiano cuando se conocen los calibres instalados y la carga aproximada del circuito.

**Condición cuantitativa de actuación del magnetotérmico:** el [[margen_termico]] = [[I]] / [[I_n]] debe ser mayor o igual a 1 para disparo garantizado a largo plazo. Para cortocircuitos, la corriente puede superar [[I_n]] en un factor 10 o más y el disparo es instantáneo.

**Condición cuantitativa de actuación del diferencial:** el [[margen_dif]] = [[I_delta]] / [[I_dn]] debe ser mayor o igual a 1. Para un diferencial de 30 mA, cualquier fuga que genere [[I_delta]] ≥ 30 mA debería causar disparo en menos de 300 ms según norma.

## 2. Modelo extendido con tiempo y entorno

El modelo extendido incorpora tres variables adicionales que el modelo ideal ignora: el tiempo de actuación, la temperatura del bimetálico y las condiciones ambientales. Un magnetotérmico que ha estado funcionando cerca del límite durante horas tiene el bimetálico más caliente y puede disparar con corrientes ligeramente inferiores a [[I_n]]. Un diferencial en ambiente muy húmedo puede tener corrientes de fuga distribuidas en la instalación que, sumadas, superan [[I_dn]] aunque ninguna individualmente sea significativa.

Este modelo es más preciso para incidentes intermitentes: disparos que aparecen solo en verano, solo con lluvia o solo cuando se usa cierto aparato. El análisis correcto en estos casos exige medir [[I_fase]] e [[I_neutro]] en tiempo real, no solo comparar calibres nominales.

**Cuándo conviene cambiar al modelo extendido:** cuando el modelo ideal no reproduce el patrón de disparo observado, cuando hay disparos repetidos con cargas dentro del calibre, o cuando los síntomas son estacionales o dependientes de temperatura y humedad.

## 3. Dominio de validez cuantitativo

El modelo ideal es válido para análisis residencial monofásico estándar cuando:
- Se conoce la carga aproximada del circuito (dentro de ±20 %).
- Los calibres de magnetotérmico y diferencial son estándar (10 A, 16 A, 25 A; 30 mA, 300 mA).
- No hay presencia significativa de armónicos (instalaciones con gran densidad de equipos electrónicos pueden generar disparos fantasma).
- La temperatura ambiente está en rango normal (10–40 °C).

Pierde precisión en instalaciones con variadores de frecuencia, fuentes conmutadas de alta potencia o en entornos con vibraciones que deterioran las conexiones más rápidamente de lo habitual.

## 4. Señales de fallo del modelo

Las señales de que el modelo ideal es insuficiente incluyen:
- Disparo recurrente sin causa aparente al cambiar condiciones ambientales (temperatura, humedad).
- Ausencia de disparo con síntomas térmicos claros en puntos de conexión (olor, decoloración).
- Diagnóstico circular: se rearman las protecciones sin identificar la variable física causante.
- Cambios de calibre como "solución" que ocultan el problema real sin corregirlo.
- Disparos selectivos que afectan solo a un aparato concreto y no al resto del circuito.

Cuando aparecen estas señales, hay que pasar al modelo extendido y medir [[I_fase]], [[I_neutro]] e [[I_delta]] en tiempo real durante el uso del circuito afectado.

## 5. Comparación con modelos alternativos

**Modelo binario de disparo / no disparo:** útil para clasificar el incidente inicial pero no permite cuantificar márgenes ni predecir comportamientos futuros. No distingue entre "funcionando al límite" y "funcionando con margen amplio".

**Modelo con curvas de tiempo-corriente:** necesario para instalaciones donde la selectividad entre magnetotérmicos en serie es crítica. Permite predecir si el magnetotérmico del circuito actúa antes que el general.

**Modelo instrumentado en cuadro:** necesario para diagnóstico avanzado con analizadores de red. Proporciona [[I_fase]], [[I_neutro]], armónicos, factor de potencia y [[I_delta]] en tiempo real. Es el estándar para instalaciones complejas o problemáticas.

Regla práctica: siempre separar fallo por sobrecorriente, fuga diferencial y defecto térmico local. Cada uno requiere un instrumento y una acción de corrección diferente.
'''

# ── errores.md ────────────────────────────────────────────────────────────────
errores = '''# Errores frecuentes en el análisis de diferencial y magnetotérmico

## Errores conceptuales

### Error: confundir las funciones del diferencial y el magnetotérmico

**Descripción:** Creer que el diferencial protege contra sobrecarga o que el magnetotérmico detecta fugas a tierra. Esto lleva a cambiar el dispositivo equivocado cuando hay un incidente.

**Corrección:** El diferencial vigila únicamente [[I_delta]] = |[[I_fase]] − [[I_neutro]]|. El magnetotérmico vigila únicamente [[I]] respecto a [[I_n]]. Ninguno hace la función del otro.

**Indicador de este error:** El alumno dice "subí el diferencial porque se calentaba el cable". Ese problema requería revisar [[I]] respecto a [[I_n]], no actuar sobre el diferencial.

### Error: asumir que "no salta nada" significa que no hay riesgo

**Descripción:** Interpretar la ausencia de disparo como evidencia de seguridad eléctrica. Esto ignora el tercer escenario: defecto térmico local sin disparo.

**Corrección:** Puede haber riesgo de incendio por conexión degradada si [[I]] < [[I_n]] y [[I_delta]] < [[I_dn]] simultáneamente. La ausencia de disparo solo garantiza que esas dos condiciones no se superaron en ese instante.

## Errores de modelo

### Error: analizar con la potencia total de la vivienda en vez del circuito concreto

**Descripción:** Comparar la potencia total conectada en la vivienda con el magnetotérmico general, ignorando que cada circuito tiene su propio magnetotérmico con su propio [[I_n]].

**Corrección:** Localizar el circuito afectado, estimar su [[I]] usando la [[P]] de ese circuito específico y [[V]] = 230 V, y comparar con el [[I_n]] del magnetotérmico de ese circuito.

**Ejemplo numérico:** Vivienda con 6 kW totales conectados, pero el disparo es del circuito de cocina con magnetotérmico de 25 A. La [[I]] relevante es la del circuito de cocina, no la total.

### Error: comparar [[I_delta]] en mA con [[I]] en A sin convertir

**Descripción:** Mezclar unidades al comparar el desequilibrio diferencial con la corriente de carga. Por ejemplo, decir "la corriente es 8 A y el diferencial es 30, así que hay margen amplio".

**Corrección:** El umbral diferencial [[I_dn]] = 30 mA = 0,030 A. La [[I]] de carga puede ser 8 A. Son magnitudes físicamente distintas que no se comparan directamente. El [[I_delta]] que dispara el diferencial es típicamente el 0,3 % o menos de la [[I]] total del circuito.

## Errores de interpretación

### Error: subir [[I_dn]] o [[I_n]] como solución a disparos recurrentes

**Descripción:** Ante disparos repetidos, cambiar los dispositivos por versiones de mayor calibre sin identificar la causa física del disparo.

**Corrección:** Un disparo recurrente del diferencial indica [[I_delta]] sistemáticamente elevado: hay una fuga que no desaparece. Un disparo recurrente del magnetotérmico indica [[I]] sistemáticamente próxima o superior a [[I_n]]: hay sobrecarga real. La solución en ambos casos es corregir la causa, no aumentar el umbral.

**Indicador de este error:** El instalador dice "le puse un diferencial de 300 mA para que no salte tanto". Eso puede eliminar la protección personal ante una fuga peligrosa.

### Error: diagnosticar solo con el síntoma (qué saltó) sin medir la magnitud causante

**Descripción:** Actuar directamente sobre el dispositivo que disparó sin medir [[I]], [[I_fase]], [[I_neutro]] o [[I_delta]] para identificar la variable física desequilibrada.

**Corrección:** El diagnóstico correcto requiere al menos estimar [[I]] = [[P]] / [[V]] y comparar con [[I_n]], y si es posible medir [[I_delta]] y calcular [[margen_dif]].

## Regla de autocontrol

Antes de rearmar o modificar cualquier protección, verificar:
1. ¿Qué protección actuó: diferencial, magnetotérmico o ninguna?
2. ¿Cuál es la [[I]] estimada del circuito afectado y cómo se compara con [[I_n]]?
3. ¿Hay evidencia de [[I_delta]] elevado: aparato con carcasa bajo tensión, síntomas de fuga?
4. ¿Hay evidencia térmica local: olor, decoloración, calor en punto de conexión?
5. ¿Se ha identificado y corregido la causa física antes de rearmar?
'''

# ── ejemplos.md ───────────────────────────────────────────────────────────────
ejemplos = '''# Ejemplos de diferencial y magnetotérmico

# Ejemplo tipo examen

## Enunciado

Un circuito monofásico de [[V]] = 230 V tiene instalado un magnetotérmico de [[I_n]] = 16 A y un diferencial de [[I_dn]] = 30 mA. Se conectan simultáneamente equipos con [[P]] total de 4 400 W. Además, se detecta que [[I_fase]] = 9,62 A e [[I_neutro]] = 9,57 A en otro circuito del mismo cuadro.

Se pide: (a) calcular [[I]] del primer circuito y determinar si hay sobrecarga; (b) calcular [[I_delta]] del segundo circuito y determinar si hay disparo diferencial; (c) calcular [[margen_termico]] y [[margen_dif]] en ambos casos.

## Datos

- [[V]] = 230 V
- [[I_n]] = 16 A (magnetotérmico del circuito de sobrecarga)
- [[I_dn]] = 30 mA = 0,030 A (diferencial)
- [[P]] = 4 400 W (circuito de sobrecarga)
- [[I_fase]] = 9,62 A (circuito de fuga)
- [[I_neutro]] = 9,57 A (circuito de fuga)

## Definición del sistema

Sistema: cuadro eléctrico residencial monofásico con magnetotérmico estándar y diferencial de alta sensibilidad. Variables de estado: [[I]] en cada circuito, [[I_delta]] entre fase y neutro.

## Modelo físico

Se aplica el modelo ideal de dos protecciones independientes. El magnetotérmico actúa cuando [[margen_termico]] = [[I]] / [[I_n]] ≥ 1. El diferencial actúa cuando [[margen_dif]] = [[I_delta]] / [[I_dn]] ≥ 1. Ambas condiciones son independientes entre sí.

## Justificación del modelo

El modelo simplificado es válido porque los calibres son estándar, las cargas son resistivas aproximadas, y no se describen condiciones ambientales especiales. No se requiere el modelo con curvas de tiempo-corriente porque el objetivo es determinar si hay disparo o no, no predecir el tiempo exacto de actuación.

## Resolución simbólica

Corriente del circuito sobrecargado a partir de [[P]] y [[V]]:

{{f:corriente_carga}}

Ratio de carga térmica para evaluar sobrecarga en magnetotérmico:

{{f:ratio_termico}}

Desequilibrio diferencial entre [[I_fase]] e [[I_neutro]]:

{{f:desequilibrio}}

Ratio diferencial para evaluar disparo del diferencial:

{{f:ratio_diferencial}}

Potencia límite del magnetotérmico de referencia:

{{f:potencia_limite}}

## Sustitución numérica

Corriente del circuito de sobrecarga:

{{f:corriente_carga}}

Con [[P]] = 4 400 W y [[V]] = 230 V: [[I]] = 4400 / 230 = **19,1 A**.

[[margen_termico]] = 19,1 / 16 = **1,19** — sobrecarga del 19 %, esperable actuación del magnetotérmico.

Desequilibrio del segundo circuito:

{{f:desequilibrio}}

[[I_delta]] = |9,62 − 9,57| = **0,05 A = 50 mA**.

[[margen_dif]] = 50 mA / 30 mA = **1,67** — supera umbral, esperable actuación del diferencial.

[[P_lim]] = 230 × 16 = **3 680 W** — potencia máxima aproximada antes de sobrecarga.

## Validación dimensional

- [[I]]: W / V = A. Correcto.
- [[I_delta]]: A − A = A. Correcto.
- [[margen_termico]]: A / A = adimensional. Correcto.
- [[margen_dif]]: A / A = adimensional. Correcto.
- [[P_lim]]: V × A = W. Correcto.

## Interpretación física

El [[margen_termico]] de 1,19 indica que la [[I]] de 19,1 A supera el calibre de 16 A. El magnetotérmico actuará en minutos si la carga se mantiene. El diferencial de ese circuito no actúa porque no hay desequilibrio entre [[I_fase]] e [[I_neutro]].

En el segundo circuito, la [[I]] total (≈ 9,6 A) está muy por debajo de cualquier calibre magnetotérmico estándar. Sin embargo, los 50 mA de [[I_delta]] superan los 30 mA de [[I_dn]]. Esto significa que 50 mA están circulando por un camino no previsto: existe una fuga a tierra. El diferencial actuará. El magnetotérmico no actuará porque la [[I]] total es pequeña.

## Validación del orden de magnitud

Para un circuito de 230 V con [[P]] = 4 400 W, el orden de magnitud de [[I]] es claramente superior a 16 A (ya que 16 A × 230 V = 3 680 W < 4 400 W). El resultado de 19,1 A es coherente. Los 50 mA de [[I_delta]] representan solo el 0,52 % de la [[I]] total de 9,6 A del segundo circuito, lo que ilustra la alta sensibilidad del diferencial estándar.

---

# Ejemplo de aplicación real

## Contexto

Un usuario reporta que el diferencial de su vivienda salta de forma intermitente, principalmente en invierno, cuando usa el calefactor del baño. El magnetotérmico del circuito de baño (16 A) no ha saltado nunca. Se quiere diagnosticar la causa y calcular los márgenes de seguridad.

## Estimación física

El calefactor del baño tiene [[P]] = 1 500 W a [[V]] = 230 V. La [[I]] esperada es 1 500 / 230 ≈ 6,5 A, muy por debajo del [[I_n]] = 16 A: [[margen_termico]] ≈ 0,41. No hay sobrecarga magnetotérmica. El problema es diferencial: el diferencial salta porque [[I_delta]] supera los 30 mA cuando el calefactor está encendido.

## Resolución del diagnóstico

[[I]] = 1 500 / 230 = **6,52 A** — [[margen_termico]] = 6,52 / 16 = 0,41. Sin sobrecarga.

Para disparar el diferencial: [[I_delta]] ≥ 0,030 A. Como [[I_fase]] ≈ 6,52 A, la [[I_delta]] que causa el disparo es de al menos 0,030 A, lo que representa el 0,46 % de la [[I]] total. Esta pequeña fracción puede generarse por degradación de aislamiento en un calefactor húmedo.

[[margen_dif]] = [[I_delta]] / 0,030. Si [[I_delta]] = 35 mA → [[margen_dif]] = 1,17: disparo. Si [[I_delta]] = 25 mA → [[margen_dif]] = 0,83: no dispara.

## Interpretación

El patrón estacional (más disparos en invierno, con el calefactor encendido) apunta a degradación de aislamiento dependiente de temperatura o humedad. En frío, el calefactor tiene resistencias más frías al arrancar y puede haber condensación interior. La fuga crece hasta superar [[I_dn]].

La acción correcta es revisar el calefactor y su toma de corriente, no modificar [[I_dn]]. Subir [[I_dn]] a 300 mA eliminaría la protección personal ante una fuga que puede llegar a ser peligrosa.
'''

# ── historia.md ───────────────────────────────────────────────────────────────
historia = '''# Historia del diferencial y magnetotérmico

## 1. El problema histórico sin resolver

Durante décadas, la protección eléctrica doméstica se limitaba a fusibles que solo respondían a corrientes de cortocircuito extremas. Las sobrecargas moderadas y las fugas a tierra podían persistir durante mucho tiempo sin que nada actuara. Los incidentes por contacto eléctrico indirecto y los incendios por conexiones degradadas eran frecuentes y difíciles de prevenir con los instrumentos disponibles.

## 2. Lo que no se entendía antes

Antes de la normalización de las protecciones diferenciales, la distinción entre protección de personas y protección de instalación era conceptualmente confusa. Se trataba el cuadro eléctrico como una "caja negra" que o bien saltaba o bien no saltaba, sin identificar qué magnitud física estaba fuera de rango. La respuesta habitual era actuar por ensayo y error: rearmar, esperar, y cambiar el fusible si volvía a saltar.

## 3. El cambio conceptual

La introducción de los magnetotérmicos normalizados en la segunda mitad del siglo XX permitió asociar el disparo a una corriente física medible: si [[I]] superaba [[I_n]] durante suficiente tiempo, el bimetálico actuaba de forma reproducible. Esto transformó el diagnóstico: en lugar de preguntarse "¿por qué saltó la caja?", se podía preguntar "¿qué circuito tenía [[I]] elevada y por qué?".

La generalización del diferencial de alta sensibilidad (30 mA) en instalaciones residenciales, impulsada por normativas como el Reglamento Electrotécnico de Baja Tensión (REBT), añadió una capa de protección específica para personas. Esta protección requería entender [[I_delta]] como magnitud independiente de [[I]] total, un salto conceptual que aún hoy genera confusiones.

## 4. Evolución conceptual

El foco del análisis eléctrico residencial pasó de "¿qué saltó?" a "¿qué magnitud física superó qué umbral?". Este cambio permitió separar tres tipos de problemas: sobrecorriente ([[I]] > [[I_n]]), fuga diferencial ([[I_delta]] > [[I_dn]]), y defecto térmico local sin disparo. Cada tipo requiere un instrumento diferente y una corrección diferente.

## 5. Conexión con la tecnología actual

Los monitores de cuadro inteligentes actuales miden [[I_fase]], [[I_neutro]] e [[I_delta]] en tiempo real y registran eventos. Esto permite detectar patrones: una instalación que tiene [[margen_dif]] habitualmente en 0,7 y sube a 0,9 en épocas húmedas indica degradación progresiva antes de que llegue el primer disparo. La transición de protección reactiva a mantenimiento predictivo es el siguiente paso en la gestión eléctrica residencial.
'''

# ── aplicaciones.md ───────────────────────────────────────────────────────────
aplicaciones = '''# Aplicaciones del análisis de diferencial y magnetotérmico

## 1. Diagnóstico de cuadros con disparos recurrentes

Cuando un diferencial o magnetotérmico salta repetidamente, el análisis de [[I]], [[I_delta]], [[margen_termico]] y [[margen_dif]] permite distinguir entre tres causas fundamentalmente diferentes: exceso de carga en el circuito, fuga real de corriente a tierra, o disparo aparente por condiciones ambientales. Sin este análisis, la intervención habitual es cambiar el dispositivo que saltó, lo que soluciona el síntoma pero no la causa.

La aplicación práctica consiste en medir [[I]] con una pinza amperimétrica durante el uso normal, calcular [[margen_termico]] = [[I]] / [[I_n]], y comparar con 1. Si [[margen_termico]] < 0,85, el origen del disparo no es sobrecarga permanente: hay que buscar transitorio de arranque o causa diferencial.

## 2. Dimensionamiento en reformas de vivienda

Al añadir nuevas cargas o ampliar circuitos, el análisis de [[P_lim]] = [[V]] × [[I_n]] permite decidir si el circuito existente tiene capacidad suficiente o si requiere nuevo magnetotérmico con mayor [[I_n]]. La regla práctica es que la suma de [[I]] de las cargas previstas no debe superar el 80 % de [[I_n]] para tener margen de seguridad operativo: [[margen_termico]] ≤ 0,80 en condiciones de uso normal.

## 3. Incidencias en zonas húmedas

Los disparos diferenciales estacionales — más frecuentes en invierno o con lluvia — corresponden habitualmente a degradación de aislamiento que aumenta [[I_delta]] al crecer la humedad. El análisis de [[margen_dif]] en distintas condiciones ambientales permite confirmar este diagnóstico sin necesidad de desmontar toda la instalación.

## 4. Verificación de instalaciones antes de la puesta en servicio

En instalaciones nuevas o tras reformas, verificar que [[margen_termico]] y [[margen_dif]] están dentro de márgenes seguros antes de conectar la carga definitiva. Un [[margen_dif]] mayor de 0,5 con instalación en vacío indica fugas residuales en el cableado o aparatos conectados que deben corregirse antes de la primera puesta en uso.

## 5. Formación técnica y resolución de incidencias de seguridad

Este análisis es la base para cualquier protocolo de respuesta ante incidentes eléctricos en vivienda. Saber que [[I_delta]] < [[I_dn]] no garantiza ausencia de defecto térmico local, y que [[I]] < [[I_n]] no garantiza ausencia de fuga significativa, son dos principios que cambian radicalmente la forma en que se evalúa la seguridad de una instalación.
'''

files = {
    'modelos.md': modelos,
    'errores.md': errores,
    'ejemplos.md': ejemplos,
    'historia.md': historia,
    'aplicaciones.md': aplicaciones,
}

for name, content in files.items():
    p = base / name
    p.write_text(content, encoding='utf-8')
    words = len(content.split())
    print(f'{name}: {words} words')
