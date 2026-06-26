from pathlib import Path

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/diferencial-y-magnetotermico')

# ── modelos.md ────────────────────────────────────────────────────────────────
modelos = '''# Modelos de protección eléctrica diferencial y magnetotérmica

## Modelo ideal

El modelo simplificado representa el cuadro eléctrico doméstico con dos funciones de protección estrictamente separadas: el magnetotérmico actúa como limitador de [[I]] respecto a su calibre [[I_n]], y el diferencial actúa como detector de desequilibrio [[I_delta]] respecto a su sensibilidad [[I_dn]]. Ambas protecciones son independientes: la actuación de una no implica la actuación de la otra ni la sustituye en su función.

Este modelo permite clasificar rápidamente el tipo de incidencia según cuál de los dos dispositivos actuó, sin necesidad de medición instrumental avanzada. Es suficientemente preciso para el análisis diagnóstico residencial cotidiano cuando se conocen los calibres instalados y la carga aproximada del circuito.

## Hipótesis

El modelo ideal asume:
- Corriente alterna sinusoidal pura sin armónicos significativos.
- Temperatura ambiente en rango normal (10–40 °C).
- Calibres de magnetotérmico y diferencial estándar (10 A, 16 A, 25 A; 30 mA, 300 mA).
- Instalación monofásica residencial con conductor de tierra correctamente conectado.
- Los disparos son determinísticos: si [[margen_termico]] ≥ 1 o [[margen_dif]] ≥ 1, el dispositivo actúa.

## Dominio de validez cuantitativo

**Condición cuantitativa de actuación del magnetotérmico:** [[margen_termico]] = [[I]] / [[I_n]] ≥ 1 para disparo garantizado en régimen sostenido. La potencia límite aproximada es [[P_lim]] = [[V]] × [[I_n]]. Para un magnetotérmico de 16 A a 230 V, [[P_lim]] ≈ 3 680 W. Si [[margen_termico]] está entre 1 y 1,5, el disparo ocurre en minutos. Para cortocircuitos ([[margen_termico]] > 10), el disparo es instantáneo (< 10 ms).

**Condición cuantitativa de actuación del diferencial:** [[margen_dif]] = [[I_delta]] / [[I_dn]] ≥ 1. Para [[I_dn]] = 30 mA, cualquier fuga que genere [[I_delta]] ≥ 30 mA causa disparo en menos de 300 ms según norma UNE-EN 61008. Para [[I_dn]] = 300 mA (protección contra incendios), el umbral se eleva a 300 mA.

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

El modelo extendido incorpora tres variables adicionales que el ideal ignora: el tiempo de actuación, la temperatura del bimetálico y las condiciones ambientales. Un magnetotérmico que ha operado cerca del límite durante horas tiene el bimetálico más caliente y puede disparar con [[I]] ligeramente inferiores a [[I_n]]. Un diferencial en ambiente muy húmedo puede tener [[I_delta]] distribuidas en la instalación que, sumadas, superan [[I_dn]] aunque ninguna individualmente sea significativa.

**Cuándo conviene cambiar al modelo extendido:** cuando el ideal no reproduce el patrón de disparo observado, cuando hay disparos repetidos con [[margen_termico]] < 0,9, o cuando los síntomas son estacionales o dependientes de temperatura y humedad. El análisis correcto en estos casos exige medir [[I_fase]] e [[I_neutro]] en tiempo real durante el uso del circuito afectado.

## Comparación operativa

**Modelo binario de disparo / no disparo:** útil para clasificar el incidente inicial pero no permite cuantificar [[margen_termico]] ni [[margen_dif]], ni predecir comportamientos futuros antes de que ocurra el disparo.

**Modelo con curvas de tiempo-corriente:** necesario para instalaciones donde la selectividad entre magnetotérmicos en serie es crítica. Permite predecir si el magnetotérmico del circuito actúa antes que el general, preservando el suministro al resto de la vivienda.

**Modelo instrumentado en cuadro:** necesario para diagnóstico avanzado con analizadores de red. Proporciona [[I_fase]], [[I_neutro]], armónicos, factor de potencia e [[I_delta]] en tiempo real.

Regla práctica: siempre separar fallo por sobrecorriente ([[I]] > [[I_n]]), fuga diferencial ([[I_delta]] > [[I_dn]]) y defecto térmico local (calor sin disparo). Cada tipo requiere un instrumento y una acción de corrección diferente.
'''

# ── modelos.en.md ─────────────────────────────────────────────────────────────
modelos_en = '''# Models of Differential and Thermal-Magnetic Protection

## Ideal model

The simplified model represents the domestic consumer unit with two strictly separate protection functions: the MCB acts as a current [[I]] limiter relative to its rating [[I_n]], and the RCD acts as a detector of imbalance [[I_delta]] relative to its sensitivity [[I_dn]]. Both protections are independent: the actuation of one does not imply or replace the other's function.

This model allows quick classification of the incident type based on which device tripped, without advanced instrumental measurement. It is accurate enough for routine residential diagnostic analysis when installed ratings and approximate circuit load are known.

## Hypotheses

The ideal model assumes:
- Pure sinusoidal AC without significant harmonics.
- Ambient temperature in normal range (10–40 °C).
- Standard MCB and RCD ratings (10 A, 16 A, 25 A; 30 mA, 300 mA).
- Single-phase residential installation with correctly connected earth conductor.
- Tripping is deterministic: if [[margen_termico]] ≥ 1 or [[margen_dif]] ≥ 1, the device trips.

## Quantitative validity domain

**Quantitative MCB trip condition:** [[margen_termico]] = [[I]] / [[I_n]] ≥ 1 for guaranteed tripping in sustained operation. The approximate power limit is [[P_lim]] = [[V]] × [[I_n]]. For a 16 A MCB at 230 V, [[P_lim]] ≈ 3 680 W. If [[margen_termico]] is between 1 and 1.5, tripping occurs within minutes. For short circuits ([[margen_termico]] > 10), tripping is instantaneous (< 10 ms).

**Quantitative RCD trip condition:** [[margen_dif]] = [[I_delta]] / [[I_dn]] ≥ 1. For [[I_dn]] = 30 mA, any leakage generating [[I_delta]] ≥ 30 mA causes tripping in under 300 ms per UNE-EN 61008. For [[I_dn]] = 300 mA (fire protection), the threshold rises to 300 mA.

The model loses accuracy for [[margen_termico]] between 1.0 and 1.2 (slow-trip zone depending on bimetallic thermal history), and for [[margen_dif]] between 0.7 and 1.0 with intermittent leakage.

## Model failure signals

Signs that the ideal model is insufficient:
- Repeated tripping with no apparent cause when environmental conditions change.
- Absence of tripping with clear thermal symptoms at connection points.
- Circular diagnosis: protection devices are reset without identifying the causative physical variable.
- Rating increases as a "solution" that hides the real problem without correcting it.
- Selective trips affecting only one specific appliance and not the rest of the circuit.
- Persistently elevated [[margen_dif]] > 0.5 in an apparently normal installation.

## Extended or alternative model

The extended model incorporates three additional variables that the ideal model ignores: trip time, bimetallic temperature, and environmental conditions. An MCB that has been operating near its limit for hours has a warmer bimetallic element and may trip at [[I]] slightly below [[I_n]]. An RCD in a very humid environment may have distributed [[I_delta]] throughout the installation that, summed, exceed [[I_dn]] even though none is individually significant.

**When to switch to the extended model:** when the ideal model does not reproduce the observed trip pattern, when there are repeated trips with [[margen_termico]] < 0.9, or when symptoms are seasonal or temperature/humidity dependent.

## Operational comparison

**Binary trip / no-trip model:** useful for initial incident classification but does not allow [[margen_termico]] or [[margen_dif]] quantification, or prediction of future behaviour before a trip occurs.

**Time-current curve model:** necessary for installations where selectivity between series MCBs is critical. Allows prediction of whether the circuit MCB trips before the main MCB.

**Instrumented consumer unit model:** necessary for advanced diagnosis with network analysers. Provides [[I_fase]], [[I_neutro]], harmonics, power factor, and [[I_delta]] in real time.

Practical rule: always separate fault by overcurrent ([[I]] > [[I_n]]), differential leakage ([[I_delta]] > [[I_dn]]), and local thermal defect (heat without tripping). Each requires a different instrument and a different corrective action.
'''

# ── errores.md ────────────────────────────────────────────────────────────────
errores = '''# Errores frecuentes en el análisis de diferencial y magnetotérmico

## Errores conceptuales

### Error: confundir las funciones del diferencial y el magnetotérmico

**Descripción:** Creer que el diferencial protege contra sobrecarga o que el magnetotérmico detecta fugas a tierra. Este error conceptual lleva a cambiar el dispositivo equivocado cuando hay un incidente.

**Corrección:** El diferencial vigila únicamente [[I_delta]] = |[[I_fase]] − [[I_neutro]]|. El magnetotérmico vigila únicamente [[I]] respecto a [[I_n]]. Ninguno hace la función del otro.

**Indicador de este error:** El alumno dice "subí el diferencial porque se calentaba el cable". Ese problema requería revisar [[I]] respecto a [[I_n]], no actuar sobre el diferencial.

### Error: asumir que "no salta nada" significa que no hay riesgo

**Descripción:** Interpretar la ausencia de disparo como evidencia de seguridad eléctrica completa. Este error ignora el tercer escenario: defecto térmico local sin disparo.

**Corrección:** Puede existir riesgo de incendio por conexión degradada cuando [[I]] < [[I_n]] y [[I_delta]] < [[I_dn]] simultáneamente. La ausencia de disparo solo garantiza que esas dos condiciones no se superaron en ese instante.

## Errores de modelo

### Error: analizar con la potencia total de la vivienda en vez del circuito concreto

**Descripción:** Comparar la potencia total conectada en la vivienda con el magnetotérmico general, ignorando que cada circuito tiene su propio magnetotérmico con su propio [[I_n]].

**Corrección:** Localizar el circuito afectado, estimar su [[I]] usando la [[P]] de ese circuito específico y [[V]] = 230 V, y comparar con el [[I_n]] del magnetotérmico de ese circuito.

### Error: subir [[I_dn]] o [[I_n]] como solución a disparos recurrentes

**Descripción:** Ante disparos repetidos, cambiar los dispositivos por versiones de mayor calibre sin identificar la causa física del disparo.

**Corrección:** Un disparo recurrente del diferencial indica [[I_delta]] sistemáticamente elevado: hay una fuga persistente. Un disparo recurrente del magnetotérmico indica [[I]] sistemáticamente próxima o superior a [[I_n]]: hay sobrecarga real. La solución en ambos casos es corregir la causa, no aumentar el umbral.

## Errores matemáticos

### Error: comparar [[I_delta]] en mA con [[I]] en A sin convertir unidades

**Descripción:** Mezclar unidades al comparar el desequilibrio diferencial con la corriente de carga. Por ejemplo, afirmar "la corriente es 8 A y el diferencial es 30, así que hay margen amplio".

**Corrección:** El umbral diferencial [[I_dn]] = 30 mA = 0,030 A. La [[I]] de carga puede ser 8 A. Son magnitudes físicamente distintas que no se comparan directamente. El [[I_delta]] que dispara el diferencial es típicamente el 0,3 % o menos de la [[I]] total del circuito.

**Ejemplo numérico:** Con [[I]] = 8 A e [[I_delta]] = 40 mA: [[margen_termico]] = 8/16 = 0,50 (sin sobrecarga); [[margen_dif]] = 40/30 = 1,33 (disparo diferencial activo). Las dos evaluaciones son completamente independientes.

## Errores de interpretación

### Error: diagnosticar solo con el síntoma sin medir la magnitud causante

**Descripción:** Actuar directamente sobre el dispositivo que disparó sin medir [[I]], [[I_fase]], [[I_neutro]] o [[I_delta]] para identificar la variable física desequilibrada.

**Corrección:** El diagnóstico correcto requiere al menos estimar [[I]] = [[P]] / [[V]] y comparar con [[I_n]], y si es posible medir [[I_delta]] y calcular [[margen_dif]].

## Regla de autocontrol rápido

Antes de rearmar o modificar cualquier protección, verificar cinco puntos:
1. ¿Qué protección actuó: diferencial, magnetotérmico o ninguna?
2. ¿Cuál es la [[I]] estimada del circuito afectado y cómo se compara con [[I_n]]?
3. ¿Hay evidencia de [[I_delta]] elevado?
4. ¿Hay evidencia térmica local: olor, decoloración, calor en punto de conexión?
5. ¿Se ha identificado y corregido la causa física antes de rearmar?
'''

# ── errores.en.md ─────────────────────────────────────────────────────────────
errores_en = '''# Common Errors in Differential and MCB Analysis

## Conceptual errors

### Error: confusing the functions of RCD and MCB

**Description:** Believing the RCD protects against overload, or that the MCB detects earth leakage. This conceptual error leads to changing the wrong device when an incident occurs.

**Correction:** The RCD only monitors [[I_delta]] = |[[I_fase]] − [[I_neutro]]|. The MCB only monitors [[I]] relative to [[I_n]]. Neither performs the other's function.

**Indicator:** The student says "I raised the RCD because the cable was getting hot." That problem required checking [[I]] against [[I_n]], not acting on the RCD.

### Error: assuming "nothing tripped" means there is no risk

**Description:** Interpreting the absence of tripping as complete evidence of electrical safety. This error ignores the third scenario: local thermal defect without tripping.

**Correction:** Fire risk can exist from a degraded connection when [[I]] < [[I_n]] and [[I_delta]] < [[I_dn]] simultaneously. The absence of tripping only guarantees those two conditions were not exceeded at that moment.

## Model errors

### Error: analysing with total household power instead of the specific circuit

**Description:** Comparing total connected household power with the main MCB, ignoring that each circuit has its own MCB with its own [[I_n]].

**Correction:** Locate the affected circuit, estimate its [[I]] using that circuit's specific [[P]] and [[V]] = 230 V, and compare with that circuit's [[I_n]].

### Error: raising [[I_dn]] or [[I_n]] as a solution to repeated tripping

**Description:** When faced with repeated trips, replacing the devices with higher-rated versions without identifying the physical cause.

**Correction:** Repeated RCD tripping indicates systematically elevated [[I_delta]]: there is a persistent leakage. Repeated MCB tripping indicates [[I]] consistently near or above [[I_n]]: there is a real overload. The solution in both cases is to correct the cause, not increase the threshold.

## Mathematical errors

### Error: comparing [[I_delta]] in mA with [[I]] in A without converting

**Description:** Mixing units when comparing the differential imbalance with the load current. For example, stating "the current is 8 A and the RCD is 30, so there is plenty of margin."

**Correction:** The differential threshold [[I_dn]] = 30 mA = 0.030 A. Load [[I]] may be 8 A. These are physically distinct quantities not compared directly. The [[I_delta]] that trips the RCD is typically 0.3% or less of the total circuit [[I]].

**Numerical example:** With [[I]] = 8 A and [[I_delta]] = 40 mA: [[margen_termico]] = 8/16 = 0.50 (no overload); [[margen_dif]] = 40/30 = 1.33 (active differential trip). The two evaluations are completely independent.

## Interpretation errors

### Error: diagnosing only from the symptom without measuring the causative quantity

**Description:** Acting directly on the device that tripped without measuring [[I]], [[I_fase]], [[I_neutro]], or [[I_delta]] to identify the unbalanced physical variable.

**Correction:** Correct diagnosis requires at least estimating [[I]] = [[P]] / [[V]] and comparing with [[I_n]], and if possible measuring [[I_delta]] and calculating [[margen_dif]].

## Quick self-control rule

Before resetting or modifying any protection device, verify five points:
1. Which protection tripped: RCD, MCB, or neither?
2. What is the estimated [[I]] of the affected circuit and how does it compare with [[I_n]]?
3. Is there evidence of elevated [[I_delta]]?
4. Is there local thermal evidence: smell, discolouration, heat at connection point?
5. Has the physical cause been identified and corrected before resetting?
'''

# ── historia.md ───────────────────────────────────────────────────────────────
historia = '''# Historia del diferencial y magnetotérmico

## Problema histórico

Durante décadas, la protección eléctrica doméstica se limitaba a fusibles que solo respondían a corrientes de cortocircuito extremas. Las sobrecargas moderadas y las fugas a tierra podían persistir durante mucho tiempo sin que nada actuara. Los incidentes por contacto eléctrico indirecto y los incendios por conexiones degradadas eran frecuentes y difíciles de prevenir con los instrumentos disponibles en la época. El cuadro eléctrico era tratado como una "caja negra": o saltaba o no saltaba, sin identificar qué magnitud física estaba fuera de rango.

## Dificultad conceptual previa

Antes de la normalización de las protecciones diferenciales, la distinción entre protección de personas y protección de instalación era conceptualmente confusa. Se confundía la protección del cableado (función del magnetotérmico) con la protección personal frente a contacto eléctrico (función del diferencial). Esta confusión generaba decisiones incorrectas: cambiar el magnetotérmico ante una fuga, o aumentar el diferencial ante una sobrecarga. La ausencia de una magnitud física claramente identificada como causa de cada disparo impedía el diagnóstico correcto.

## Qué cambió

La introducción de los magnetotérmicos normalizados en la segunda mitad del siglo XX permitió asociar el disparo a [[I]] medible: si [[I]] superaba [[I_n]] durante suficiente tiempo, el bimetálico actuaba de forma reproducible. Esto transformó el diagnóstico: en lugar de preguntarse "¿por qué saltó la caja?", se podía preguntar "¿qué circuito tenía [[I]] elevada y por qué?". La generalización del diferencial de alta sensibilidad (30 mA) añadió una capa de protección específica para personas anclada en [[I_delta]] como magnitud física independiente de [[I]] total. Este salto conceptual es el que permite diagnosticar correctamente los tres tipos de incidente: sobrecorriente, fuga diferencial y defecto térmico local.

## Impacto en la física

El análisis de la protección eléctrica residencial ilustra un principio físico fundamental: sistemas físicamente distintos requieren magnitudes de control distintas. [[I]] total y [[I_delta]] son magnitudes independientes que pueden comportarse de forma completamente diferente en el mismo circuito en el mismo instante. Esta dualidad de magnitudes de control es un ejemplo del principio general de que la seguridad de un sistema complejo no puede garantizarse con una sola variable de supervisión.

## Conexión con física moderna

Los monitores de cuadro inteligentes actuales miden [[I_fase]], [[I_neutro]] e [[I_delta]] en tiempo real y registran eventos con resolución temporal alta. Esto permite detectar patrones de degradación progresiva: una instalación que tiene [[margen_dif]] habitualmente en 0,7 y sube a 0,9 en épocas húmedas indica deterioro del aislamiento antes de que ocurra el primer disparo. La transición de protección reactiva a mantenimiento predictivo basado en [[margen_dif]] y [[margen_termico]] continuos es la dirección actual del desarrollo tecnológico en gestión eléctrica residencial.
'''

# ── historia.en.md ────────────────────────────────────────────────────────────
historia_en = '''# History of Differential and Thermal-Magnetic Protection

## Historical problem

For decades, domestic electrical protection was limited to fuses that only responded to extreme short-circuit currents. Moderate overloads and earth leakage could persist for long periods without anything acting. Incidents from indirect electrical contact and fires from degraded connections were frequent and difficult to prevent with available instruments. The consumer unit was treated as a "black box": it either tripped or did not, without identifying which physical quantity was out of range.

## Prior conceptual difficulty

Before the standardisation of differential protection, the distinction between protection of people and protection of installations was conceptually confused. Protection of wiring (MCB function) was mixed up with personal protection against electrical contact (RCD function). This confusion generated incorrect decisions: changing the MCB for a leakage problem, or raising the RCD for an overload problem. The absence of a clearly identified physical quantity as the cause of each trip prevented correct diagnosis.

## What changed

The introduction of standardised MCBs in the second half of the twentieth century made it possible to associate the trip with measurable [[I]]: if [[I]] exceeded [[I_n]] for long enough, the bimetallic element acted reproducibly. This transformed diagnosis: instead of "why did the box trip?", one could ask "which circuit had elevated [[I]] and why?". The generalisation of the high-sensitivity RCD (30 mA) added a protection layer specific to people, anchored in [[I_delta]] as a physical quantity independent of total [[I]]. This conceptual leap is what allows correctly diagnosing the three incident types: overcurrent, differential leakage, and local thermal defect.

## Impact on physics

The analysis of residential electrical protection illustrates a fundamental physical principle: physically distinct systems require distinct control quantities. Total [[I]] and [[I_delta]] are independent quantities that can behave completely differently in the same circuit at the same instant. This duality of control quantities is an example of the general principle that the safety of a complex system cannot be guaranteed by a single supervisory variable.

## Connection with modern physics

Modern smart consumer unit monitors measure [[I_fase]], [[I_neutro]], and [[I_delta]] in real time and log events with high time resolution. This allows detection of progressive degradation patterns: an installation habitually at [[margen_dif]] of 0.7 that rises to 0.9 in humid seasons indicates insulation deterioration before the first trip occurs. The transition from reactive protection to predictive maintenance based on continuous [[margen_dif]] and [[margen_termico]] monitoring is the current direction of technological development in residential electrical management.
'''

# ── aplicaciones.md ───────────────────────────────────────────────────────────
aplicaciones = '''# Aplicaciones del análisis de diferencial y magnetotérmico

## 1. Diagnóstico de cuadros con disparos recurrentes

Cuando un diferencial o magnetotérmico salta repetidamente, el análisis de [[I]], [[I_delta]], [[margen_termico]] y [[margen_dif]] permite distinguir entre tres causas fundamentalmente diferentes: exceso de carga en el circuito, fuga real de corriente a tierra, o disparo aparente por condiciones ambientales. Sin este análisis, la intervención habitual es cambiar el dispositivo que saltó, lo que soluciona el síntoma pero no la causa y puede dejar la instalación en una situación más peligrosa que antes.

La aplicación práctica consiste en medir [[I]] con una pinza amperimétrica durante el uso normal del circuito, calcular [[margen_termico]] = [[I]] / [[I_n]], y comparar con 1. Si [[margen_termico]] < 0,85, el origen del disparo no es sobrecarga permanente: hay que buscar transitorio de arranque o causa diferencial. Paralelamente, si se puede medir [[I_fase]] e [[I_neutro]] por separado, [[I_delta]] = |[[I_fase]] − [[I_neutro]]| permite evaluar [[margen_dif]] y cuantificar la fuga.

**Variable dominante:** [[I_delta]] para el diagnóstico diferencial; [[I]] para el diagnóstico magnetotérmico.

**Límite de validez:** El análisis es válido para instalaciones monofásicas residenciales con calibres estándar. No es directamente aplicable a instalaciones con variadores de frecuencia o alta densidad de cargas electrónicas, donde los armónicos pueden generar disparos fantasma.

## 2. Dimensionamiento en reformas de vivienda

Al añadir nuevas cargas o ampliar circuitos, el análisis de [[P_lim]] = [[V]] × [[I_n]] permite decidir si el circuito existente tiene capacidad suficiente o si requiere un nuevo magnetotérmico con mayor [[I_n]]. La regla de diseño es que la suma de [[I]] de las cargas previstas no supere el 80 % de [[I_n]] para disponer de margen de seguridad operativo: [[margen_termico]] ≤ 0,80 en condiciones de uso normal. Superar el 80 % aumenta el riesgo de disparos frecuentes ante transitorios de arranque de motores o cargas con factor de cresta elevado.

Antes de cambiar el calibre [[I_n]] del magnetotérmico, hay que verificar que el conductor del circuito tiene la sección adecuada para la nueva corriente. Un magnetotérmico de 25 A en un circuito cableado con sección para 16 A puede no actuar a tiempo ante una sobrecarga que dañe el aislamiento del cable.

**Variable dominante:** [[P_lim]] para la evaluación de capacidad del circuito; [[I_n]] como parámetro de diseño.

**Límite de validez:** El criterio del 80 % de [[margen_termico]] es una regla práctica conservadora. Para cargas puramente resistivas (resistencias eléctricas, calefactores), se puede llegar al 90 %. Para motores, compresor, y cargas con alta corriente de arranque, hay que aplicar factores de corrección adicionales.

## 3. Incidencias en zonas húmedas

Los disparos diferenciales estacionales —más frecuentes en invierno o con lluvia— corresponden habitualmente a degradación de aislamiento que aumenta [[I_delta]] al crecer la humedad. El análisis de [[margen_dif]] en distintas condiciones ambientales permite confirmar este diagnóstico sin necesidad de desmontar toda la instalación. Un [[margen_dif]] de 0,7 en época seca que sube a 0,95 en época húmeda indica degradación progresiva del aislamiento que merece intervención preventiva antes del primer disparo.

Los aparatos más susceptibles en zonas húmedas son los calefactores de baño, los secadores de pelo, las bombas de sump y los electrodomésticos próximos a puntos de agua. En cada caso, el cálculo de [[I_delta]] y [[margen_dif]] en condiciones de uso normal permite cuantificar el riesgo y priorizar la revisión.

**Variable dominante:** [[I_delta]] y [[margen_dif]] como indicadores de degradación de aislamiento.

**Límite de validez:** Válido para diferenciales tipo AC en presencia de corriente alterna pura. Si el circuito incluye aparatos con fuentes conmutadas (ordenadores, cargadores, televisores), la componente de CC puede requerir diferencial tipo A para detección fiable.

## 4. Verificación de instalaciones antes de la puesta en servicio

En instalaciones nuevas o tras reformas, verificar que [[margen_termico]] y [[margen_dif]] están dentro de márgenes seguros antes de conectar la carga definitiva. Un [[margen_dif]] mayor de 0,5 con instalación en vacío (sin cargas conectadas) indica fugas residuales en el cableado o en los aparatos ya conectados que deben corregirse antes de la primera puesta en uso. Un [[margen_termico]] mayor de 0,8 con la carga de diseño indica que el circuito opera cerca del límite y puede necesitar redistribución.

El procedimiento correcto es conectar las cargas en grupos sucesivos y medir [[I_delta]] después de cada adición. Si [[margen_dif]] sube significativamente al añadir un aparato concreto, ese aparato tiene fuga de aislamiento y debe revisarse o sustituirse antes de su uso continuado.

**Variable dominante:** [[margen_dif]] para verificación de aislamiento; [[margen_termico]] para verificación de capacidad de carga.

**Límite de validez:** Las mediciones en vacío representan condiciones de baja temperatura del aislamiento. Las fugas de aislamiento aumentan con la temperatura de operación, por lo que las mediciones en condiciones de uso prolongado son más representativas del comportamiento en servicio real.

## 5. Formación técnica y resolución de incidencias de seguridad

Este análisis es la base para cualquier protocolo de respuesta ante incidentes eléctricos en vivienda. Saber que [[I_delta]] < [[I_dn]] no garantiza ausencia de defecto térmico local, y que [[I]] < [[I_n]] no garantiza ausencia de fuga significativa, son dos principios que cambian radicalmente la forma en que se evalúa la seguridad de una instalación. La formación en el uso de [[margen_termico]] y [[margen_dif]] como herramientas de diagnóstico continuo, en lugar de tratar los disparos como eventos binarios, es el núcleo del análisis técnico moderno de instalaciones residenciales.

**Variable dominante:** [[margen_dif]] y [[margen_termico]] como indicadores de estado de la instalación.

**Límite de validez:** Aplicable a instalaciones monofásicas residenciales con configuración estándar de cuadro. Para instalaciones industriales, trifásicas o con protecciones especiales, se requieren criterios adicionales específicos de cada tipo de instalación.
'''

# ── aplicaciones.en.md ────────────────────────────────────────────────────────
aplicaciones_en = '''# Applications of Differential and MCB Analysis

## 1. Diagnosing consumer units with repeated trips

When an RCD or MCB trips repeatedly, the analysis of [[I]], [[I_delta]], [[margen_termico]], and [[margen_dif]] allows distinction between three fundamentally different causes: circuit overload, real earth leakage, or apparent tripping due to environmental conditions. Without this analysis, the usual response is to change the device that tripped, which resolves the symptom but not the cause and may leave the installation in a more dangerous state than before.

The practical application consists of measuring [[I]] with a clamp meter during normal circuit use, calculating [[margen_termico]] = [[I]] / [[I_n]], and comparing with 1. If [[margen_termico]] < 0.85, the cause of the trip is not sustained overload: look for startup transients or a differential cause. In parallel, if [[I_fase]] and [[I_neutro]] can be measured separately, [[I_delta]] = |[[I_fase]] − [[I_neutro]]| allows evaluating [[margen_dif]] and quantifying the leakage.

**Dominant variable:** [[I_delta]] for differential diagnosis; [[I]] for MCB diagnosis.

**Validity limit:** The analysis is valid for single-phase residential installations with standard ratings. It is not directly applicable to installations with variable-frequency drives or high-density electronic loads, where harmonics may generate phantom trips.

## 2. Sizing in home renovations

When adding new loads or extending circuits, the analysis of [[P_lim]] = [[V]] × [[I_n]] allows deciding whether the existing circuit has sufficient capacity or requires a new MCB with higher [[I_n]]. The design rule is that the sum of [[I]] of the planned loads should not exceed 80% of [[I_n]] for a safe operating margin: [[margen_termico]] ≤ 0.80 under normal use conditions.

Before changing the [[I_n]] of the MCB, verify that the circuit conductor has the appropriate cross-section for the new current. A 25 A MCB on a circuit wired for 16 A may not act in time against an overload that damages the cable insulation.

**Dominant variable:** [[P_lim]] for circuit capacity evaluation; [[I_n]] as design parameter.

**Validity limit:** The 80% [[margen_termico]] criterion is a conservative practical rule. For purely resistive loads, it can reach 90%. For motors and high-inrush loads, additional correction factors apply.

## 3. Incidents in damp areas

Seasonal differential trips — more frequent in winter or with rain — typically correspond to insulation degradation that increases [[I_delta]] as humidity rises. Analysis of [[margen_dif]] under different environmental conditions confirms this diagnosis without dismantling the entire installation. A [[margen_dif]] of 0.7 in dry conditions rising to 0.95 in humid conditions indicates progressive insulation degradation warranting preventive intervention before the first trip.

**Dominant variable:** [[I_delta]] and [[margen_dif]] as insulation degradation indicators.

**Validity limit:** Valid for type-AC RCDs with pure AC. If the circuit includes appliances with switching power supplies, type-A RCDs may be required for reliable detection.

## 4. Verification before commissioning

In new installations or after renovations, verify that [[margen_termico]] and [[margen_dif]] are within safe margins before connecting the definitive load. A [[margen_dif]] greater than 0.5 with the installation on no-load indicates residual leakage in wiring or connected appliances that must be corrected before first use. A [[margen_termico]] greater than 0.8 with the design load indicates the circuit is operating near its limit and may require redistribution.

**Dominant variable:** [[margen_dif]] for insulation verification; [[margen_termico]] for load capacity verification.

**Validity limit:** No-load measurements represent low insulation temperature conditions. Leakage increases with operating temperature, so measurements under prolonged-use conditions are more representative.

## 5. Technical training and safety incident resolution

This analysis is the basis for any electrical incident response protocol in the home. Knowing that [[I_delta]] < [[I_dn]] does not guarantee absence of local thermal defect, and that [[I]] < [[I_n]] does not guarantee absence of significant leakage, are two principles that radically change how installation safety is evaluated.

**Dominant variable:** [[margen_dif]] and [[margen_termico]] as installation state indicators.

**Validity limit:** Applicable to single-phase residential installations with standard consumer unit configuration. For industrial, three-phase, or specialised installations, additional type-specific criteria are required.
'''

files = {
    'modelos.md': modelos,
    'modelos.en.md': modelos_en,
    'errores.md': errores,
    'errores.en.md': errores_en,
    'historia.md': historia,
    'historia.en.md': historia_en,
    'aplicaciones.md': aplicaciones,
    'aplicaciones.en.md': aplicaciones_en,
}

for name, content in files.items():
    p = base / name
    p.write_text(content, encoding='utf-8')
    print(f'{name}: {len(content.split())} words')
