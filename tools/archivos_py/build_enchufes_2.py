"""Genera todos los .md y interpretacion.yaml para enchufes-y-tomas."""
from pathlib import Path
import yaml

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/enchufes-y-tomas')

# ── teoria.md ──────────────────────────────────────────────────────────────────
teoria = """\
# Enchufes y tomas

Una toma de corriente no es un punto de acceso ilimitado a la red eléctrica. Es un componente físico con un límite de corriente nominal [[I_max]] que, al superarse de forma sostenida, genera calor en los contactos metálicos y puede provocar degradación, cortocircuito o incendio. Entender qué magnitudes determinan ese límite y cómo calcularlas es la competencia central de este leaf.

El mecanismo de riesgo no es eléctrico en sentido estricto — no hay fuga, no hay desequilibrio fase-neutro — sino térmico: la resistencia de contacto [[R_contacto]] disipa calor según la ley de Joule localizada. Cuanto mayor es la corriente total [[I_tot]], mayor es el calentamiento, y ese calentamiento crece con el cuadrado de [[I_tot]].

## 🟢 Nivel esencial

Una toma de corriente tiene un límite de corriente [[I_max]] impreso en el dispositivo o declarado por el fabricante. En instalaciones domésticas europeas, el valor más habitual es 16 A. Una regleta de baja calidad puede tener 10 A.

Cuando se conectan varios equipos a la misma toma o regleta, sus corrientes individuales se suman. Si esa suma supera [[I_max]], la toma está en sobrecarga. Los contactos se calientan. Si la situación se mantiene, el plástico de la carcasa puede ablandarse, los contactos pueden oxidarse o deformarse, y el riesgo de incendio aumenta.

El hecho de que ningún diferencial ni magnetotérmico salte no garantiza que la toma esté segura. El diferencial detecta fugas a tierra; el magnetotérmico protege el cableado del circuito. Ninguno protege los contactos internos de la toma frente a la sobrecarga local.

## 🔵 Nivel formal

La corriente que demanda un equipo individual de potencia [[P]] conectado a una toma de tensión [[V]] es:

{{f:corriente_individual}}

La corriente total que circula por los contactos cuando se conectan simultáneamente varios equipos de potencia total [[P_tot]] es:

{{f:corriente_total}}

Esta [[I_tot]] se compara con [[I_max]]. Para cuantificar el margen de uso de la toma, se define el ratio:

{{f:ratio_uso}}

Cuando [[margen_uso]] alcanza 1, la toma está en su límite nominal. Valores superiores indican sobrecarga activa.

La potencia máxima que puede conectarse sin superar el límite nominal es:

{{f:potencia_max}}

Para evaluar el riesgo térmico local cuando la toma o el enchufe presentan contacto degradado, se aplica la ley de Joule localizada:

{{f:perdida_contacto}}

Esta [[P_perdida]] crece con el cuadrado de [[I_tot]]: duplicar la corriente cuadruplica el calor disipado en el contacto.

## 🔴 Nivel estructural

El modelo de toma ideal asume [[R_contacto]] = 0 y por tanto [[P_perdida]] = 0. En la práctica, incluso tomas nuevas tienen [[R_contacto]] del orden de centésimas de ohmio. Con el tiempo y el uso, [[R_contacto]] puede aumentar por oxidación del contacto metálico, suciedad acumulada en la interfaz, deformación mecánica del borne o degradación del material conductor.

El límite de validez del modelo resistivo es el régimen permanente con corriente alterna eficaz. Los transitorios de arranque de motores o la corriente de carga de condensadores pueden generar picos breves de corriente que superan [[I_max]] sin causar degradación inmediata, porque la energía disipada en cada transitorio es pequeña.

El modelo no incluye la distribución de temperatura en la carcasa ni la resistencia térmica del contacto al entorno. En condiciones de ventilación reducida (regleta bajo un mueble, enchufe tapado) la temperatura real puede ser mayor que la predicha por un modelo de disipación en estado estacionario.

El dominio de validez práctico del modelo: régimen permanente, carga resistiva o casi resistiva, factor de potencia próximo a la unidad. Para cargas con arranque elevado o con mucha electrónica de potencia, el análisis requiere considerar la forma de onda de la corriente.

## Orden de magnitud

En una instalación residencial española típica, [[V]] = 230 V. Una toma estándar tiene [[I_max]] = 16 A, por lo que su [[P_max]] es aproximadamente 3 680 W. Una regleta de baja calidad de 10 A tiene [[P_max]] de 2 300 W.

Conectar un calefactor de 2 000 W, un ordenador portátil de 90 W y un cargador de 18 W a la misma regleta supone una [[P_tot]] de 2 108 W, equivalente a [[I_tot]] de 9,2 A, con [[margen_uso]] de 0,57. Dentro del límite. Añadir una segunda estufa de 2 000 W eleva [[P_tot]] a 4 108 W, [[I_tot]] a 17,9 A y [[margen_uso]] a 1,12: sobrecarga activa.

Una [[R_contacto]] de 0,1 Ω con [[I_tot]] = 16 A disipa 25,6 W en el contacto. Con [[R_contacto]] = 0,5 Ω (contacto degradado), la disipación sube a 128 W, suficiente para dañar el plástico en minutos.

## Método de resolución personalizado

Para evaluar si una toma o regleta está sobrecargada:

1. Identificar todos los equipos conectados simultáneamente y sus potencias nominales [[P]].
2. Sumar potencias: calcular [[P_tot]].
3. Calcular [[I_tot]] usando la fórmula de corriente total con [[V]] = 230 V.
4. Identificar [[I_max]] de la toma o regleta (etiqueta del fabricante).
5. Calcular [[margen_uso]] y comparar con 1.
6. Si [[margen_uso]] > 0,8 en uso continuado, redistribuir carga o cambiar a regleta de mayor capacidad.
7. Si hay síntomas térmicos (calor en enchufe, olor a quemado, plástico decolorado), inspeccionar [[R_contacto]] y sustituir la toma.

## Casos especiales

**Caso A — Regleta con múltiples cargadores.** Cuatro cargadores de smartphone de 18 W, un portátil de 65 W y una lámpara LED de 10 W: [[P_tot]] = 147 W, [[I_tot]] = 0,64 A. [[margen_uso]] = 0,04. Sin riesgo térmico.

**Caso B — Calefactores en regleta.** Dos calefactores de 2 000 W en regleta de 10 A ([[P_max]] = 2 300 W): [[P_tot]] = 4 000 W, [[I_tot]] = 17,4 A. [[margen_uso]] = 1,74. Sobrecarga severa. Riesgo inmediato.

**Caso C — Contacto degradado sin sobrecarga.** [[I_tot]] = 8 A (dentro del límite de 16 A) con [[R_contacto]] = 0,3 Ω por oxidación: [[P_perdida]] = 19,2 W. Ningún magnetotérmico actúa, pero el calor local puede dañar el contacto progresivamente.

## Conexiones transversales

Este leaf conecta directamente con **diferencial y magnetotérmico** (las protecciones no detectan sobrecarga local de toma), con **tensión y potencia en casa** (P y V como datos de entrada) y con **seguridad eléctrica** (consecuencias del calentamiento de contacto). La ley de Joule localizada en [[R_contacto]] es el puente entre la magnitud eléctrica observable ([[I_tot]]) y el riesgo físico (temperatura del contacto).

## Síntesis final

La toma de corriente tiene un límite [[I_max]] que no debe superarse en régimen permanente. La corriente total [[I_tot]] = [[P_tot]] / [[V]] es la magnitud que circula por los contactos. El ratio [[margen_uso]] = [[I_tot]] / [[I_max]] cuantifica la proximidad a la sobrecarga. La ley de Joule localizada en [[R_contacto]] explica el riesgo térmico incluso con corrientes dentro del límite cuando el contacto está degradado. Ninguna protección del circuito detecta este riesgo: la única defensa es no superar [[margen_uso]] y mantener los contactos en buen estado.
"""

# ── teoria.en.md ───────────────────────────────────────────────────────────────
teoria_en = """\
# Plugs and Sockets

A socket is not an unlimited access point to the electrical network. It is a physical component with a nominal current limit [[I_max]] which, when exceeded continuously, generates heat in the metallic contacts and can cause degradation, short circuit, or fire. Understanding which quantities determine that limit and how to calculate them is the core competency of this leaf.

The risk mechanism is not strictly electrical — there is no leakage, no phase-neutral imbalance — but thermal: the contact resistance [[R_contacto]] dissipates heat following the localised Joule law. The greater the total current [[I_tot]], the greater the heating, and that heating grows with the square of [[I_tot]].

## 🟢 Essential level

A socket has a current limit [[I_max]] printed on the device or declared by the manufacturer. In European domestic installations, the most common value is 16 A. A low-quality power strip may have 10 A.

When several devices are connected to the same socket or strip, their individual currents add up. If that sum exceeds [[I_max]], the socket is in overload. The contacts heat up. If the situation persists, the casing plastic may soften, contacts may oxidise or deform, and fire risk increases.

The fact that no RCD or MCB trips does not guarantee the socket is safe. The RCD detects earth leakage; the MCB protects the circuit wiring. Neither protects the internal contacts of the socket against local overload.

## 🔵 Formal level

The current demanded by an individual device of power [[P]] connected to a socket at voltage [[V]] is:

{{f:corriente_individual}}

The total current flowing through the contacts when several devices of total power [[P_tot]] are simultaneously connected is:

{{f:corriente_total}}

This [[I_tot]] is compared with [[I_max]]. To quantify the socket usage margin, the ratio is defined as:

{{f:ratio_uso}}

When [[margen_uso]] reaches 1, the socket is at its nominal limit. Higher values indicate active overload.

The maximum power connectable without exceeding the nominal limit is:

{{f:potencia_max}}

To evaluate local thermal risk when the socket or plug shows degraded contact, the localised Joule law is applied:

{{f:perdida_contacto}}

This [[P_perdida]] grows with the square of [[I_tot]]: doubling the current quadruples the heat dissipated at the contact.

## 🔴 Structural level

The ideal socket model assumes [[R_contacto]] = 0 and therefore [[P_perdida]] = 0. In practice, even new sockets have [[R_contacto]] on the order of hundredths of an ohm. Over time and use, [[R_contacto]] can increase due to oxidation of the metallic contact, dirt accumulated at the interface, mechanical deformation of the terminal, or degradation of the conducting material.

The validity limit of the resistive model is steady state with RMS AC current. Motor startup transients or capacitor charging currents can generate brief current peaks exceeding [[I_max]] without causing immediate degradation, because the energy dissipated in each transient is small.

The model does not include the temperature distribution in the casing or the thermal resistance from the contact to the environment. Under reduced-ventilation conditions (strip under furniture, covered socket) the actual temperature may be higher than predicted by a steady-state dissipation model.

Practical validity domain: steady state, resistive or near-resistive load, power factor close to unity. For loads with high inrush or significant power electronics, analysis requires considering the current waveform.

## Order of magnitude

In a typical Spanish residential installation, [[V]] = 230 V. A standard socket has [[I_max]] = 16 A, so its [[P_max]] is approximately 3 680 W. A low-quality 10 A strip has [[P_max]] of 2 300 W.

Connecting a 2 000 W heater, a 90 W laptop, and an 18 W charger to the same strip gives [[P_tot]] of 2 108 W, equivalent to [[I_tot]] of 9.2 A, with [[margen_uso]] of 0.57. Within limits. Adding a second 2 000 W heater raises [[P_tot]] to 4 108 W, [[I_tot]] to 17.9 A, and [[margen_uso]] to 1.12: active overload.

A [[R_contacto]] of 0.1 Ω with [[I_tot]] = 16 A dissipates 25.6 W at the contact. With [[R_contacto]] = 0.5 Ω (degraded contact), dissipation rises to 128 W, enough to damage the plastic within minutes.

## Custom resolution method

To evaluate whether a socket or strip is overloaded:

1. Identify all simultaneously connected devices and their nominal powers [[P]].
2. Sum powers: calculate [[P_tot]].
3. Calculate [[I_tot]] using the total current formula with [[V]] = 230 V.
4. Identify [[I_max]] of the socket or strip (manufacturer label).
5. Calculate [[margen_uso]] and compare with 1.
6. If [[margen_uso]] > 0.8 in continuous use, redistribute load or switch to a higher-capacity strip.
7. If thermal symptoms appear (heat at plug, burning smell, discoloured plastic), inspect [[R_contacto]] and replace the socket.

## Special cases

**Case A — Strip with multiple chargers.** Four 18 W smartphone chargers, a 65 W laptop, and a 10 W LED lamp: [[P_tot]] = 147 W, [[I_tot]] = 0.64 A. [[margen_uso]] = 0.04. No thermal risk.

**Case B — Heaters on a strip.** Two 2 000 W heaters on a 10 A strip ([[P_max]] = 2 300 W): [[P_tot]] = 4 000 W, [[I_tot]] = 17.4 A. [[margen_uso]] = 1.74. Severe overload. Immediate risk.

**Case C — Degraded contact without overload.** [[I_tot]] = 8 A (within the 16 A limit) with [[R_contacto]] = 0.3 Ω due to oxidation: [[P_perdida]] = 19.2 W. No MCB trips, but local heat can progressively damage the contact.

## Cross-cutting connections

This leaf connects directly with **differential and thermal-magnetic breakers** (protections do not detect local socket overload), with **voltage and power at home** (P and V as input data), and with **electrical safety** (consequences of contact heating). The Joule law localised at [[R_contacto]] is the bridge between the observable electrical quantity ([[I_tot]]) and the physical risk (contact temperature).

## Final synthesis

The socket has a limit [[I_max]] that must not be exceeded in continuous operation. Total current [[I_tot]] = [[P_tot]] / [[V]] is the quantity flowing through the contacts. The ratio [[margen_uso]] = [[I_tot]] / [[I_max]] quantifies proximity to overload. The Joule law localised at [[R_contacto]] explains the thermal risk even with currents within the limit when the contact is degraded. No circuit protection detects this risk: the only defence is not to exceed [[margen_uso]] and to maintain contacts in good condition.
"""

# ── modelos.md ─────────────────────────────────────────────────────────────────
modelos = """\
# Modelos físicos de enchufes y tomas

## Modelo principal: toma como resistencia de contacto en serie

El modelo físico fundamental trata la toma de corriente como una combinación de conductores ideales y una resistencia de contacto [[R_contacto]] localizada en la interfaz mecánica entre el pin del enchufe y el borne de la toma. La corriente total [[I_tot]] que circula por el circuito produce una pérdida de potencia localizada según la ley de Joule:

{{f:perdida_contacto}}

Este modelo es suficiente para diagnosticar el riesgo térmico de la toma en régimen permanente con cargas resistivas. Su hipótesis principal es que toda la resistencia parásita del circuito está concentrada en [[R_contacto]], ignorando la resistencia del cableado y de los conectores intermedios.

**Condición cuantitativa:** El modelo predice riesgo térmico apreciable cuando [[P_perdida]] supera aproximadamente 1 W, lo que equivale a [[R_contacto]] > 0,006 Ω con [[I_tot]] = 16 A. Un contacto degradado con [[R_contacto]] = 0,5 Ω a corriente nominal genera 128 W: condición de emergencia.

**Dominio de validez:** Régimen permanente, corriente alterna con forma de onda sinusoidal, factor de potencia ≥ 0,85. Para cargas con transitorios de arranque elevados, el calentamiento pico puede ser mayor que el calculado con la corriente eficaz.

## Modelo de sobrecarga: circuito con límite de corriente nominal

Para evaluar si la toma está siendo utilizada dentro de sus límites, el modelo simplificado usa [[I_max]] como umbral único:

{{f:ratio_uso}}

Si [[margen_uso]] < 1, la toma opera dentro del límite. Si [[margen_uso]] ≥ 1, opera en sobrecarga. El modelo no distingue entre una sobrecarga del 1 % y una del 100 %; solo indica si se supera el umbral. Para situaciones en zona de vigilancia (0,8 ≤ [[margen_uso]] < 1), el modelo recomienda precaución pero no predice fallo.

**Condición cuantitativa:** El umbral de acción recomendado es [[margen_uso]] ≥ 0,8 en uso continuado (más de 2 horas). Por debajo de ese valor, el calentamiento del contacto es compatible con el diseño del dispositivo en condiciones normales de ventilación.

**Transición a modelo alternativo:** Cuando el análisis requiere predecir el tiempo hasta el fallo o la temperatura máxima del contacto, se debe pasar al modelo de disipación térmica con resistencia térmica de contacto y capacidad calorífica de la carcasa. Ese modelo es más complejo y requiere datos del fabricante que normalmente no están disponibles.

## Modelo de potencia como suma de cargas individuales

Para calcular [[P_tot]] y [[I_tot]] en una regleta con varios equipos, se aplica el modelo de superposición de cargas independientes:

{{f:corriente_total}}

El modelo asume que las cargas son puramente resistivas y que todas están encendidas simultáneamente. En la práctica, muchos equipos domésticos tienen ciclos de encendido, modos de espera y arranques variables que hacen que la corriente real sea menor que el peor caso calculado. El modelo del peor caso es, por tanto, conservador y es la aproximación correcta para dimensionamiento de seguridad.

**Condición cuantitativa:** La condición de peor caso es que todos los equipos declarados estén encendidos simultáneamente al 100 % de su potencia nominal. En uso doméstico real, el factor de simultaneidad típico es 0,6 a 0,8, lo que reduce [[I_tot]] real respecto al calculado. Sin embargo, para seguridad se usa el factor 1 (todos encendidos al máximo).
"""

modelos_en = """\
# Physical models of plugs and sockets

## Main model: socket as series contact resistance

The fundamental physical model treats the socket as a combination of ideal conductors and a contact resistance [[R_contacto]] localised at the mechanical interface between the plug pin and the socket terminal. The total current [[I_tot]] flowing through the circuit produces a localised power loss according to the Joule law:

{{f:perdida_contacto}}

This model is sufficient to diagnose the thermal risk of the socket in steady state with resistive loads. Its main hypothesis is that all parasitic resistance of the circuit is concentrated in [[R_contacto]], ignoring cable and intermediate connector resistance.

**Quantitative condition:** The model predicts appreciable thermal risk when [[P_perdida]] exceeds approximately 1 W, which corresponds to [[R_contacto]] > 0.006 Ω with [[I_tot]] = 16 A. A degraded contact with [[R_contacto]] = 0.5 Ω at nominal current generates 128 W: emergency condition.

**Validity domain:** Steady state, AC current with sinusoidal waveform, power factor ≥ 0.85. For loads with high startup transients, peak heating may be greater than calculated from the RMS current.

## Overload model: circuit with nominal current limit

To evaluate whether the socket is being used within its limits, the simplified model uses [[I_max]] as the single threshold:

{{f:ratio_uso}}

If [[margen_uso]] < 1, the socket operates within its limit. If [[margen_uso]] ≥ 1, it operates in overload. The model does not distinguish between a 1% and a 100% overload; it only indicates whether the threshold is exceeded. For situations in the monitoring zone (0.8 ≤ [[margen_uso]] < 1), the model recommends caution but does not predict failure.

**Quantitative condition:** The recommended action threshold is [[margen_uso]] ≥ 0.8 in continuous use (more than 2 hours). Below that value, contact heating is compatible with device design under normal ventilation conditions.

**Transition to alternative model:** When the analysis requires predicting time to failure or maximum contact temperature, a thermal dissipation model with thermal contact resistance and casing heat capacity must be used. That model is more complex and requires manufacturer data not normally available.

## Power as sum of individual loads

To calculate [[P_tot]] and [[I_tot]] in a strip with multiple devices, the model of superimposed independent loads is applied:

{{f:corriente_total}}

The model assumes loads are purely resistive and all are powered simultaneously. In practice, many domestic devices have on/off cycles, standby modes, and variable startups that make actual current lower than the worst-case calculation. The worst-case model is therefore conservative and is the correct approximation for safety sizing.

**Quantitative condition:** The worst case is all declared devices powered simultaneously at 100% of their nominal power. In real domestic use, the typical simultaneity factor is 0.6 to 0.8, reducing actual [[I_tot]] below the calculated value. However, for safety the factor 1 (all at maximum) is used.
"""

# ── errores.md ─────────────────────────────────────────────────────────────────
errores = """\
# Errores frecuentes en el análisis de enchufes y tomas

## Errores conceptuales

### Error 1: creer que el magnetotérmico o el diferencial protegen la toma frente a sobrecarga local

**Por qué parece correcto:** Hay protecciones en el cuadro eléctrico. Si hubiera un problema real, saltarían.

**Por qué es incorrecto:** El magnetotérmico protege el cableado del circuito frente a sobrecarga en el conductor, no la toma individual. El diferencial detecta fugas a tierra. Ninguno de los dos mide [[I_tot]] en la toma ni [[R_contacto]] del contacto. Una toma puede estar en sobrecarga con [[margen_uso]] > 1 sin que ninguna protección actúe.

**Señal de detección:** El alumno dice "si estuviera sobrecargada, habría saltado el magnetotérmico". No considera que el magnetotérmico tiene un calibre muy por encima del [[I_max]] de la toma.

**Corrección conceptual:** El magnetotérmico de un circuito de tomas suele ser de 16 A, igual que [[I_max]] de la toma. Sin embargo, si hay varias tomas en el mismo circuito, la suma de corrientes puede no superar el calibre del magnetotérmico aunque una toma individual esté muy sobrecargada.

**Mini-ejemplo de contraste:** Circuito con magnetotérmico de 16 A y tres tomas. Una toma tiene [[I_tot]] = 14 A ([[margen_uso]] = 0,88), las otras dos tienen 0,5 A cada una. Total del circuito: 15 A, por debajo del calibre. El magnetotérmico no actúa. La toma con 14 A opera al 88% de su límite de forma continuada.

### Error 2: ignorar la resistencia de contacto por ser pequeña

**Por qué parece correcto:** [[R_contacto]] de décimas de ohmio parece despreciable comparada con la resistencia de la carga.

**Por qué es incorrecto:** [[P_perdida]] crece con el cuadrado de [[I_tot]]. Con [[I_tot]] = 16 A y [[R_contacto]] = 0,1 Ω, la pérdida es 25,6 W localizada en un volumen muy pequeño. Esa densidad de potencia puede elevar la temperatura del contacto cientos de grados.

**Señal de detección:** El alumno calcula [[R_contacto]] en el contexto de la resistencia de la carga y concluye que es insignificante.

**Corrección conceptual:** La relevancia de [[R_contacto]] no se evalúa en relación con la carga sino en relación con la capacidad de disipación térmica del contacto y su geometría. Un contacto pequeño con mala disipación puede dañarse con potencias de unos pocos vatios.

**Mini-ejemplo de contraste:** Carga de 2 000 W a 230 V: resistencia de carga ≈ 26,5 Ω. [[R_contacto]] = 0,2 Ω parece el 0,75% de la resistencia total. Pero [[P_perdida]] = 16² × 0,2 = 51,2 W en el contacto, suficiente para fundir plástico en minutos.

## Errores de modelo

### Error 3: usar la potencia individual más alta como límite sin considerar simultaneidad

**Por qué parece correcto:** Si el equipo más potente no supera [[P_max]], la toma parece segura.

**Por qué es incorrecto:** La sobrecarga se produce cuando la suma de potencias simultáneas supera [[P_max]], no cuando un equipo individual lo supera. Varios equipos de potencia moderada pueden sumar más que [[P_max]].

**Señal de detección:** El alumno verifica solo el equipo más potente sin sumar todos los conectados simultáneamente.

**Corrección conceptual:** El criterio es [[P_tot]] = suma de [[P]] de todos los equipos encendidos al mismo tiempo. Si [[P_tot]] ≥ [[P_max]], hay riesgo de sobrecarga aunque ningún equipo individual supere el límite.

**Mini-ejemplo de contraste:** Regleta de 10 A ([[P_max]] = 2 300 W). Equipo más potente: ordenador de escritorio 400 W. También conectados: dos monitores de 80 W, impresora 150 W, altavoces 60 W, cargador 30 W. [[P_tot]] = 800 W, [[margen_uso]] = 0,35. Sin riesgo. Pero añadir un calefactor de 2 000 W eleva [[P_tot]] a 2 800 W y [[margen_uso]] a 1,22: sobrecarga.

## Errores matemáticos

### Error 4: calcular [[I_tot]] como la corriente del equipo más potente en lugar de sumar corrientes

**Por qué parece correcto:** El equipo más potente domina la corriente del circuito.

**Por qué es incorrecto:** [[I_tot]] es la suma de las corrientes individuales de todos los equipos encendidos simultáneamente. Ignorar los equipos de menor potencia puede subestimar [[I_tot]] significativamente en regletas con muchos dispositivos.

**Señal de detección:** El alumno calcula [[I_tot]] = [[P_max_equipo]] / [[V]] en lugar de [[I_tot]] = [[P_tot]] / [[V]].

**Corrección conceptual:** Para calcular [[I_tot]], primero sumar todas las potencias simultáneas y luego dividir por [[V]], o sumar directamente las corrientes individuales de cada equipo.

**Mini-ejemplo de contraste:** Cinco equipos de 300 W cada uno en una regleta: [[I_tot]] = 1500/230 = 6,5 A, no 300/230 = 1,3 A. La suma multiplica por cinco la corriente del equipo individual.

## Errores de interpretación

### Error 5: interpretar ausencia de síntomas visibles como ausencia de riesgo

**Por qué parece correcto:** Si no hay olor a quemado ni calor en el enchufe, la toma parece estar bien.

**Por qué es incorrecto:** La degradación de [[R_contacto]] es un proceso progresivo. El calentamiento puede ser lento pero continuo. Los síntomas visibles aparecen cuando el daño ya es avanzado.

**Señal de detección:** El alumno concluye que la toma está bien porque no hay síntomas externos evidentes.

**Corrección conceptual:** El criterio de seguridad es preventivo: evaluar [[margen_uso]] y compararlo con 0,8 como umbral de uso continuado. No esperar a síntomas visibles para actuar.

**Mini-ejemplo de contraste:** Regleta con [[margen_uso]] = 0,95 durante 8 horas al día. Sin síntomas visibles en semanas. Pero [[P_perdida]] es el 5% por encima del diseño continuo y los contactos se degradan gradualmente. La sustitución preventiva es la acción correcta.

## Regla de autocontrol rápido

Antes de conectar un nuevo equipo a una toma o regleta:
1. ¿Cuál es [[I_max]] de la toma o regleta?
2. ¿Cuántos equipos hay ya conectados y encendidos?
3. ¿Cuál es la suma de potencias [[P_tot]] incluyendo el nuevo equipo?
4. ¿Cuál es [[margen_uso]] resultante?
5. Si [[margen_uso]] > 0,8, redistribuir la carga antes de proceder.
"""

errores_en = """\
# Frequent errors in plug and socket analysis

## Conceptual errors

### Error 1: believing the MCB or RCD protects the socket against local overload

**Why it seems correct:** There are protections in the consumer unit. If there were a real problem, they would trip.

**Why it is incorrect:** The MCB protects the circuit wiring against overload in the conductor, not the individual socket. The RCD detects earth leakage. Neither measures [[I_tot]] at the socket or [[R_contacto]] of the contact. A socket can be in overload with [[margen_uso]] > 1 without any protection tripping.

**Detection signal:** The student says "if it were overloaded, the MCB would have tripped." They do not consider that the MCB rating is much higher than [[I_max]] of the socket.

**Conceptual correction:** A circuit MCB is typically 16 A, equal to [[I_max]] of the socket. However, if several sockets share the same circuit, the sum of currents may not exceed the MCB rating even if one individual socket is severely overloaded.

**Contrast mini-example:** Circuit with 16 A MCB and three sockets. One socket has [[I_tot]] = 14 A ([[margen_uso]] = 0.88), the other two have 0.5 A each. Circuit total: 15 A, below the rating. MCB does not trip. The socket with 14 A operates at 88% of its limit continuously.

### Error 2: ignoring contact resistance because it is small

**Why it seems correct:** [[R_contacto]] of tenths of an ohm seems negligible compared to the load resistance.

**Why it is incorrect:** [[P_perdida]] grows with the square of [[I_tot]]. With [[I_tot]] = 16 A and [[R_contacto]] = 0.1 Ω, the loss is 25.6 W localised in a very small volume. That power density can raise contact temperature by hundreds of degrees.

**Detection signal:** The student calculates [[R_contacto]] in the context of load resistance and concludes it is insignificant.

**Conceptual correction:** The relevance of [[R_contacto]] is not assessed relative to the load but relative to the thermal dissipation capacity and geometry of the contact. A small contact with poor dissipation can be damaged by powers of a few watts.

**Contrast mini-example:** 2 000 W load at 230 V: load resistance ≈ 26.5 Ω. [[R_contacto]] = 0.2 Ω seems 0.75% of total resistance. But [[P_perdida]] = 16² × 0.2 = 51.2 W at the contact, enough to melt plastic within minutes.

## Model errors

### Error 3: using the highest individual power as the limit without considering simultaneity

**Why it seems correct:** If the most powerful device does not exceed [[P_max]], the socket seems safe.

**Why it is incorrect:** Overload occurs when the sum of simultaneous powers exceeds [[P_max]], not when an individual device exceeds it. Several moderate-power devices can sum to more than [[P_max]].

**Detection signal:** The student only checks the most powerful device without summing all simultaneously connected ones.

**Conceptual correction:** The criterion is [[P_tot]] = sum of [[P]] of all devices powered at the same time. If [[P_tot]] ≥ [[P_max]], there is overload risk even if no individual device exceeds the limit.

**Contrast mini-example:** 10 A strip ([[P_max]] = 2 300 W). Most powerful device: 400 W desktop computer. Also connected: two 80 W monitors, 150 W printer, 60 W speakers, 30 W charger. [[P_tot]] = 800 W, [[margen_uso]] = 0.35. No risk. But adding a 2 000 W heater raises [[P_tot]] to 2 800 W and [[margen_uso]] to 1.22: overload.

## Mathematical errors

### Error 4: calculating [[I_tot]] as the most powerful device current instead of summing

**Why it seems correct:** The most powerful device dominates the circuit current.

**Why it is incorrect:** [[I_tot]] is the sum of individual currents of all simultaneously powered devices. Ignoring lower-power devices can significantly underestimate [[I_tot]] in strips with many devices.

**Detection signal:** The student calculates [[I_tot]] = [[P_max_device]] / [[V]] instead of [[I_tot]] = [[P_tot]] / [[V]].

**Conceptual correction:** To calculate [[I_tot]], first sum all simultaneous powers and then divide by [[V]], or directly sum individual device currents.

**Contrast mini-example:** Five 300 W devices in a strip: [[I_tot]] = 1500/230 = 6.5 A, not 300/230 = 1.3 A. The sum multiplies the individual device current by five.

## Interpretation errors

### Error 5: interpreting absence of visible symptoms as absence of risk

**Why it seems correct:** If there is no burning smell or heat at the plug, the socket seems fine.

**Why it is incorrect:** Degradation of [[R_contacto]] is a progressive process. Heating may be slow but continuous. Visible symptoms appear when damage is already advanced.

**Detection signal:** The student concludes the socket is fine because there are no obvious external symptoms.

**Conceptual correction:** The safety criterion is preventive: evaluate [[margen_uso]] and compare with 0.8 as a continuous-use threshold. Do not wait for visible symptoms before acting.

**Contrast mini-example:** Strip with [[margen_uso]] = 0.95 for 8 hours a day. No visible symptoms for weeks. But [[P_perdida]] is 5% above the continuous design point and contacts degrade gradually. Preventive replacement is the correct action.

## Quick self-control rule

Before connecting a new device to a socket or strip:
1. What is [[I_max]] of the socket or strip?
2. How many devices are already connected and powered?
3. What is the sum of powers [[P_tot]] including the new device?
4. What is the resulting [[margen_uso]]?
5. If [[margen_uso]] > 0.8, redistribute load before proceeding.
"""

# ── historia.md ────────────────────────────────────────────────────────────────
historia = """\
# Historia y evolución de los enchufes y tomas de corriente

## Origen: la distribución doméstica de electricidad (1880-1920)

Las primeras tomas de corriente domésticas aparecieron en la década de 1880, cuando la electrificación de viviendas comenzó con los sistemas de iluminación de Thomas Edison en Nueva York y Joseph Swan en el Reino Unido. El enchufe de dos clavijas sin toma de tierra, diseñado por Harvey Hubbell alrededor de 1904, estableció el patrón básico que se usaría durante décadas.

En esa época, [[V]] variaba enormemente entre ciudades y países, y [[I_max]] de las tomas era un concepto poco formalizado. Las cargas eran casi exclusivamente lámparas incandescentes de baja potencia, por lo que el riesgo de sobrecarga era mínimo.

## Estandarización y toma de tierra (1920-1960)

La proliferación de electrodomésticos en los años 1920-1930 — planchas, tostadoras, radiadores eléctricos — aumentó drásticamente la [[P]] típica de las cargas conectadas y puso de manifiesto la necesidad de límites formales de [[I_max]]. En Europa, la diversidad de estándares nacionales generó el caos de adaptadores que persiste hasta hoy.

La toma de tierra se introdujo de forma generalizada en Europa entre los años 1940 y 1960. El conector Schuko alemán (Schutzkontakt, contacto de protección) con dos clavijas redondas y contactos laterales de tierra se convirtió en el estándar de facto en gran parte de Europa central y del norte.

## Normativa moderna y límites de [[I_max]] (1970-presente)

La norma IEC 60884 estableció requisitos internacionales para tomas domésticas, incluyendo especificaciones de [[I_max]], [[R_contacto]] máxima en condiciones nuevas y pruebas de envejecimiento. En Europa, el estándar CEE 7 y sus variantes nacionales definen los calibres de 10 A y 16 A como los más habituales.

El crecimiento de la electrónica de consumo en los años 1980-1990 introdujo un nuevo problema: cargas con fuentes conmutadas que presentan un factor de potencia bajo y corrientes armónicas. Estas cargas pueden generar calentamientos locales en los contactos superiores a los predichos por el modelo resistivo simple con [[I_tot]] eficaz.

## La regleta como factor de riesgo moderno

La regleta de enchufes, inexistente como producto de consumo masivo antes de los años 1970, se convirtió en un vector de riesgo con la multiplicación de dispositivos eléctricos en el hogar. Los incidentes de incendio por sobrecarga en regletas de baja calidad impulsaron normativas más estrictas de [[I_max]] y [[R_contacto]] para estos productos, incluyendo la norma EN 61058 en Europa.

El análisis de [[margen_uso]] y [[P_perdida]] que realizamos hoy es, en esencia, la formalización cuantitativa del riesgo que los ingenieros y bomberos identificaban empíricamente desde los años 1950: demasiados equipos, demasiada potencia, en demasiado poco espacio mecánico.
"""

historia_en = """\
# History and evolution of plugs and sockets

## Origins: domestic electricity distribution (1880-1920)

The first domestic power sockets appeared in the 1880s, when residential electrification began with Thomas Edison's lighting systems in New York and Joseph Swan's in the United Kingdom. The two-pin plug without earth connection, designed by Harvey Hubbell around 1904, established the basic pattern that would be used for decades.

At that time, [[V]] varied enormously between cities and countries, and [[I_max]] of sockets was a poorly formalised concept. Loads were almost exclusively low-power incandescent lamps, so overload risk was minimal.

## Standardisation and earthing (1920-1960)

The proliferation of appliances in the 1920s-1930s — irons, toasters, electric heaters — dramatically increased the typical [[P]] of connected loads and revealed the need for formal [[I_max]] limits. In Europe, the diversity of national standards created the adapter chaos that persists today.

Earth connections were introduced broadly in Europe between the 1940s and 1960s. The German Schuko connector (Schutzkontakt, protective contact) with two round pins and lateral earth contacts became the de facto standard across much of central and northern Europe.

## Modern standards and [[I_max]] limits (1970-present)

The IEC 60884 standard established international requirements for domestic sockets, including specifications for [[I_max]], maximum [[R_contacto]] in new condition, and ageing tests. In Europe, the CEE 7 standard and its national variants define 10 A and 16 A ratings as the most common.

The growth of consumer electronics in the 1980s-1990s introduced a new problem: loads with switched-mode power supplies that present a low power factor and harmonic currents. These loads can generate local contact heating higher than predicted by the simple resistive model with RMS [[I_tot]].

## The power strip as a modern risk factor

The power strip, non-existent as a mass-market product before the 1970s, became a risk vector with the multiplication of electrical devices in the home. Fire incidents due to overload in low-quality strips drove stricter standards for [[I_max]] and [[R_contacto]] in these products, including EN 61058 in Europe.

The [[margen_uso]] and [[P_perdida]] analysis we perform today is essentially the quantitative formalisation of the risk that engineers and firefighters had been identifying empirically since the 1950s: too many devices, too much power, in too little mechanical space.
"""

# ── ejemplos.md ────────────────────────────────────────────────────────────────
ejemplos = """\
# Ejemplo tipo examen

## Enunciado

Una regleta doméstica con [[I_max]] = 10 A está conectada a una toma de [[V]] = 230 V. En este momento tiene conectados simultáneamente los siguientes equipos: un calefactor de sobremesa de [[P]] = 1 500 W, un ordenador portátil de [[P]] = 85 W, una lámpara de escritorio LED de [[P]] = 12 W y un cargador de teléfono de [[P]] = 18 W.

Se pide: (a) calcular [[I_tot]] de la regleta; (b) calcular [[P_tot]] y [[P_max]] de la regleta; (c) calcular [[margen_uso]] y determinar si hay sobrecarga; (d) estimar [[P_perdida]] si [[R_contacto]] = 0,15 Ω.

## Datos

- [[V]] = 230 V
- [[I_max]] = 10 A (regleta)
- [[P]] calefactor = 1 500 W
- [[P]] portátil = 85 W
- [[P]] lámpara = 12 W
- [[P]] cargador = 18 W

## Definición del sistema

Sistema: regleta doméstica de 10 A con cuatro equipos conectados simultáneamente. Variables de estado: [[I_tot]] en los contactos y [[P_perdida]] en la interfaz de contacto.

## Modelo físico

Se aplica el modelo de suma de cargas resistivas independientes para calcular [[P_tot]] e [[I_tot]]. Se usa el modelo de Joule localizado en [[R_contacto]] para estimar [[P_perdida]]. Se compara [[I_tot]] con [[I_max]] mediante el ratio [[margen_uso]].

## Justificación del modelo

El modelo resistivo es válido para estas cargas: el calefactor es puramente resistivo, el portátil y los cargadores tienen fuente conmutada pero a efectos de potencia promedio la aproximación resistiva es razonable. No se modelan transitorios de arranque porque el calefactor no tiene motor.

## Resolución simbólica

Corriente total de la regleta a partir de [[P_tot]] y [[V]]:

{{f:corriente_total}}

Potencia máxima nominal de la regleta:

{{f:potencia_max}}

Ratio de uso de la regleta:

{{f:ratio_uso}}

Potencia disipada en los contactos por efecto Joule:

{{f:perdida_contacto}}

## Sustitución numérica

La [[P_tot]] es la suma de las cuatro potencias: 1 500 W + 85 W + 12 W + 18 W, dando 1 615 W.

La [[I_tot]] resulta de dividir 1 615 W entre 230 V, dando 7,02 A.

La [[P_max]] de la regleta de 10 A a 230 V es de 2 300 W.

El [[margen_uso]] resulta de dividir 7,02 A entre 10 A, dando 0,70. Este valor es inferior a 1: no hay sobrecarga. Sin embargo, el margen es del 30%, lo que significa que añadir cualquier equipo adicional de más de 690 W superaría el límite.

La [[P_perdida]] resulta de elevar al cuadrado 7,02 A y multiplicar por 0,15 Ω, dando 7,4 W disipados en el contacto.

## Validación dimensional

La [[I_tot]] se obtiene de vatios dividido por voltios, que equivale a amperios. La [[P_max]] es el producto de voltios por amperios, que equivale a vatios. El [[margen_uso]] es el cociente de amperios entre amperios, resultando adimensional. La [[P_perdida]] es el producto de amperios al cuadrado por ohmios, que equivale a vatios. Todas las dimensiones son coherentes.

## Interpretación física

El [[margen_uso]] de 0,70 indica que la regleta opera al 70% de su capacidad nominal. Está dentro del límite pero en uso continuo sería prudente no añadir más carga. La [[P_perdida]] de 7,4 W en el contacto es significativa: si [[R_contacto]] aumenta por degradación a 0,5 Ω, [[P_perdida]] alcanzaría 24,6 W, suficiente para iniciar degradación del plástico de la regleta. El mayor riesgo no es la sobrecarga actual sino la degradación progresiva del contacto por el uso continuado.

---

# Ejemplo de aplicación real

## Contexto

Una familia usa una regleta de baja calidad ([[I_max]] = 10 A desconocido, sin etiqueta visible) en el salón con la televisión de [[P]] = 120 W, un decodificador de [[P]] = 25 W, una consola de [[P]] = 150 W, un sistema de sonido de [[P]] = 80 W y una lámpara de [[P]] = 60 W. Al cabo de meses, el enchufe de la regleta está caliente al tacto.

## Estimación física

La [[P_tot]] total es 120 + 25 + 150 + 80 + 60, dando 435 W. Con [[V]] = 230 V, la [[I_tot]] resultante es 1,9 A. Si [[I_max]] = 10 A, el [[margen_uso]] es solo 0,19: la carga es muy baja. La causa del calor no es sobrecarga sino una [[R_contacto]] elevada por ser una regleta de baja calidad con contactos de material degradado. Con [[I_tot]] = 1,9 A y un calor perceptible, [[R_contacto]] puede estimarse en varios ohmios, lo que implica una [[P_perdida]] de varios vatios en un contacto de pequeño tamaño.

## Interpretación

El riesgo térmico en este caso no proviene de la sobrecarga ([[margen_uso]] muy bajo) sino de la mala calidad del contacto metálico ([[R_contacto]] elevada). La solución es sustituir la regleta por una de calidad certificada con [[R_contacto]] garantizada, no redistribuir la carga. Este caso ilustra que el análisis de seguridad de una toma requiere evaluar tanto [[margen_uso]] como el estado del contacto: ambas vías pueden generar riesgo de forma independiente.
"""

ejemplos_en = """\
# Exam-type example

## Problem statement

A domestic power strip with [[I_max]] = 10 A is connected to a socket at [[V]] = 230 V. It currently has the following devices simultaneously connected: a desktop heater with [[P]] = 1 500 W, a laptop with [[P]] = 85 W, a LED desk lamp with [[P]] = 12 W, and a phone charger with [[P]] = 18 W.

Required: (a) calculate [[I_tot]] of the strip; (b) calculate [[P_tot]] and [[P_max]] of the strip; (c) calculate [[margen_uso]] and determine whether there is overload; (d) estimate [[P_perdida]] if [[R_contacto]] = 0.15 Ω.

## Data

- [[V]] = 230 V
- [[I_max]] = 10 A (strip)
- [[P]] heater = 1 500 W
- [[P]] laptop = 85 W
- [[P]] lamp = 12 W
- [[P]] charger = 18 W

## System definition

System: 10 A domestic power strip with four devices simultaneously connected. State variables: [[I_tot]] at the contacts and [[P_perdida]] at the contact interface.

## Physical model

The model of summed independent resistive loads is applied to calculate [[P_tot]] and [[I_tot]]. The Joule model localised at [[R_contacto]] is used to estimate [[P_perdida]]. [[I_tot]] is compared with [[I_max]] via the [[margen_uso]] ratio.

## Model justification

The resistive model is valid for these loads: the heater is purely resistive, the laptop and chargers have switched-mode supplies but for average power purposes the resistive approximation is reasonable. Startup transients are not modelled because the heater has no motor.

## Symbolic solution

Total strip current from [[P_tot]] and [[V]]:

{{f:corriente_total}}

Nominal maximum strip power:

{{f:potencia_max}}

Strip usage ratio:

{{f:ratio_uso}}

Power dissipated at contacts via Joule effect:

{{f:perdida_contacto}}

## Numerical substitution

The [[P_tot]] is the sum of the four powers: 1 500 W + 85 W + 12 W + 18 W, giving 1 615 W.

The [[I_tot]] results from dividing 1 615 W by 230 V, giving 7.02 A.

The [[P_max]] of the 10 A strip at 230 V is 2 300 W.

The [[margen_uso]] results from dividing 7.02 A by 10 A, giving 0.70. This value is below 1: no overload. However, the margin is 30%, meaning that adding any additional device above 690 W would exceed the limit.

The [[P_perdida]] results from squaring 7.02 A and multiplying by 0.15 Ω, giving 7.4 W dissipated at the contact.

## Dimensional validation

The [[I_tot]] is obtained from watts divided by volts, which equals amperes. The [[P_max]] is the product of volts and amperes, which equals watts. The [[margen_uso]] is the ratio of amperes to amperes, giving a dimensionless result. The [[P_perdida]] is the product of amperes squared and ohms, which equals watts. All dimensions are consistent.

## Physical interpretation

The [[margen_uso]] of 0.70 indicates the strip operates at 70% of its nominal capacity. It is within the limit but in continuous use it would be prudent not to add more load. The [[P_perdida]] of 7.4 W at the contact is significant: if [[R_contacto]] increases due to degradation to 0.5 Ω, [[P_perdida]] would reach 24.6 W, enough to initiate degradation of the strip plastic. The greatest risk is not the current overload but the progressive contact degradation from continuous use.

---

# Real-world example

## Context

A family uses a low-quality power strip (unknown [[I_max]] = 10 A, no visible label) in the living room with a television at [[P]] = 120 W, a set-top box at [[P]] = 25 W, a games console at [[P]] = 150 W, a sound system at [[P]] = 80 W, and a lamp at [[P]] = 60 W. After months, the strip's plug is warm to the touch.

## Physical estimation

The total [[P_tot]] is 120 + 25 + 150 + 80 + 60, giving 435 W. With [[V]] = 230 V, the resulting [[I_tot]] is 1.9 A. If [[I_max]] = 10 A, [[margen_uso]] is only 0.19: the load is very low. The cause of the heat is not overload but elevated [[R_contacto]] due to the low-quality strip having degraded material contacts. With [[I_tot]] = 1.9 A and perceptible heat, [[R_contacto]] can be estimated at several ohms, implying [[P_perdida]] of several watts in a small-sized contact.

## Interpretation

The thermal risk in this case does not come from overload ([[margen_uso]] very low) but from poor quality of the metallic contact (elevated [[R_contacto]]). The solution is to replace the strip with a certified-quality one with guaranteed [[R_contacto]], not to redistribute the load. This case illustrates that socket safety analysis requires evaluating both [[margen_uso]] and contact condition: both pathways can generate risk independently.
"""

# ── aplicaciones.md ────────────────────────────────────────────────────────────
aplicaciones = """\
# Aplicaciones de enchufes y tomas

## Aplicación 1: dimensionamiento de regletas en zonas de trabajo

En puestos de trabajo con múltiples equipos informáticos, la evaluación de [[P_tot]] y [[I_tot]] determina la capacidad mínima de la regleta necesaria. El protocolo estándar consiste en listar todos los equipos conectados, sumar sus potencias nominales para obtener [[P_tot]], calcular [[I_tot]] y verificar que el [[margen_uso]] no supera 0,8 en uso continuo.

Para un puesto típico con ordenador de 400 W, dos monitores de 80 W cada uno, impresora de 150 W y cargadores de 30 W: [[P_tot]] = 740 W, [[I_tot]] = 3,2 A, [[margen_uso]] = 0,20 con regleta de 16 A. Margen amplio. Si se añade un calefactor eléctrico de 2 000 W, [[P_tot]] sube a 2 740 W, [[I_tot]] a 11,9 A y [[margen_uso]] a 0,74 con regleta de 16 A: zona de vigilancia.

**Variable dominante:** [[margen_uso]] como indicador de uso de la capacidad nominal; [[I_max]] como parámetro de diseño de la regleta.

**Límite de validez:** Aplicable para cargas resistivas e inductivas con factor de potencia > 0,8. Para equipos con fuentes conmutadas de baja calidad, la corriente pico puede exceder la eficaz en factor 2 o más.

## Aplicación 2: diagnóstico de calentamiento en enchufes de instalaciones antiguas

En instalaciones de más de 30 años con cableado de aluminio o contactos de latón oxidados, [[R_contacto]] puede ser significativamente mayor que en instalaciones nuevas. El calentamiento visible u olfativo de un enchufe con carga moderada indica [[R_contacto]] elevada, no necesariamente sobrecarga de corriente.

El diagnóstico requiere medir [[I_tot]] con un amperímetro de pinza y estimar [[P_perdida]] = [[I_tot]]² × [[R_contacto]]. Si [[I_tot]] es baja pero hay calor perceptible, [[R_contacto]] es el factor dominante. La solución es la sustitución del mecanismo de toma, no la redistribución de carga.

**Variable dominante:** [[R_contacto]] como magnitud de diagnóstico; [[P_perdida]] como indicador de riesgo térmico local.

**Límite de validez:** El modelo de Joule localizado es válido para régimen permanente. En instalaciones con corrientes armónicas elevadas (muchos equipos electrónicos), la corriente eficaz puede no reflejar el calentamiento pico.

## Aplicación 3: verificación de regletas en cocinas y zonas húmedas

Las cocinas y cuartos de baño tienen restricciones especiales para tomas: deben ser estancas o instaladas fuera de zonas de salpicadura. En cocinas, la suma de potencias puede ser muy elevada (horno 2 000 W, microondas 1 200 W, cafetera 1 200 W, tostadora 900 W). La evaluación de [[P_tot]] y [[margen_uso]] es crítica para evitar sobrecargas en tomas individuales.

Un circuito dedicado para cocina de 20 A con [[P_max]] = 4 600 W puede parecer suficiente, pero si todos los equipos anteriores se conectan en la misma toma individual de 16 A ([[P_max]] = 3 680 W), el [[margen_uso]] de esa toma sería de 5 300 / 3 680 = 1,44: sobrecarga severa aunque el circuito global no dispare el magnetotérmico.

**Variable dominante:** [[P_max]] de la toma individual como límite de diseño; [[P_tot]] como variable de evaluación.

**Límite de validez:** En cocinas, se asume que no todos los equipos de alta potencia están encendidos simultáneamente. El peor caso (todos encendidos) es la estimación de seguridad; en uso real el factor de simultaneidad reduce [[P_tot]] efectivo.

## Aplicación 4: selección de alargadores y adaptadores de viaje

Los alargadores tienen [[I_max]] propio que puede ser menor que el de la toma de origen. Un alargador de 6 A en una toma de 16 A no hereda la capacidad de la toma: el límite operativo es el del elemento más restrictivo en la cadena. La evaluación de [[margen_uso]] debe hacerse con el [[I_max]] del alargador, no de la toma.

Los adaptadores de viaje introducen una [[R_contacto]] adicional que puede ser significativa en adaptadores de baja calidad. Con [[I_tot]] = 10 A y [[R_contacto]] = 0,5 Ω en el adaptador, [[P_perdida]] = 50 W: condición de riesgo aunque la carga esté dentro del [[I_max]] declarado.

**Variable dominante:** [[I_max]] del elemento más restrictivo en la cadena; [[R_contacto]] del adaptador como factor de riesgo adicional.

**Límite de validez:** El modelo asume que el único punto de resistencia parásita significativa es el adaptador o el contacto de la toma. En alargadores largos (> 10 m), la resistencia del cable también contribuye.

## Aplicación 5: educación en seguridad eléctrica doméstica

El análisis de [[margen_uso]] y [[P_perdida]] proporciona un marco cuantitativo para la educación en seguridad eléctrica doméstica. Permite reemplazar la regla empírica "no conectes muchas cosas en la misma regleta" por un criterio preciso: calcular [[P_tot]], obtener [[I_tot]] = [[P_tot]] / [[V]] y verificar que [[margen_uso]] = [[I_tot]] / [[I_max]] no supera 0,8 en uso continuo.

Este marco es aplicable por cualquier usuario sin instrumentación: solo requiere conocer las potencias nominales de los equipos (impresas en la etiqueta del fabricante), la tensión de red (230 V en Europa) y el [[I_max]] de la toma o regleta (etiqueta o norma nacional).

**Variable dominante:** [[margen_uso]] como indicador preventivo principal; [[P_tot]] como suma de entrada.

**Límite de validez:** Aplicable a instalaciones monofásicas residenciales con cargas de factor de potencia > 0,8. Para instalaciones industriales, trifásicas o con cargas muy no lineales, se requiere un análisis más detallado de la corriente real.
"""

aplicaciones_en = """\
# Applications of plugs and sockets

## Application 1: sizing power strips in workspaces

In workspaces with multiple computing devices, evaluating [[P_tot]] and [[I_tot]] determines the minimum required strip capacity. The standard protocol is to list all connected devices, sum their nominal powers to obtain [[P_tot]], calculate [[I_tot]], and verify that [[margen_uso]] does not exceed 0.8 in continuous use.

For a typical workstation with a 400 W computer, two 80 W monitors, a 150 W printer, and 30 W chargers: [[P_tot]] = 740 W, [[I_tot]] = 3.2 A, [[margen_uso]] = 0.20 with a 16 A strip. Wide margin. Adding a 2 000 W electric heater raises [[P_tot]] to 2 740 W, [[I_tot]] to 11.9 A, and [[margen_uso]] to 0.74 with a 16 A strip: monitoring zone.

**Dominant variable:** [[margen_uso]] as indicator of nominal capacity usage; [[I_max]] as strip design parameter.

**Validity limit:** Applicable for resistive and inductive loads with power factor > 0.8. For devices with low-quality switched-mode supplies, peak current may exceed RMS by a factor of 2 or more.

## Application 2: diagnosing heating in sockets of old installations

In installations over 30 years old with aluminium wiring or oxidised brass contacts, [[R_contacto]] can be significantly higher than in new installations. Visible or olfactory heating of a socket under moderate load indicates elevated [[R_contacto]], not necessarily current overload.

Diagnosis requires measuring [[I_tot]] with a clamp ammeter and estimating [[P_perdida]] = [[I_tot]]² × [[R_contacto]]. If [[I_tot]] is low but heat is perceptible, [[R_contacto]] is the dominant factor. The solution is to replace the socket mechanism, not to redistribute load.

**Dominant variable:** [[R_contacto]] as the diagnostic quantity; [[P_perdida]] as local thermal risk indicator.

**Validity limit:** The localised Joule model is valid for steady state. In installations with high harmonic currents (many electronic devices), RMS current may not reflect peak heating.

## Application 3: verifying strips in kitchens and wet areas

Kitchens and bathrooms have special socket restrictions: they must be waterproof or installed outside splash zones. In kitchens, the sum of powers can be very high (2 000 W oven, 1 200 W microwave, 1 200 W coffee machine, 900 W toaster). Evaluating [[P_tot]] and [[margen_uso]] is critical to avoid overloading individual sockets.

A dedicated kitchen circuit of 20 A with [[P_max]] = 4 600 W may seem sufficient, but if all the above devices are connected to the same individual 16 A socket ([[P_max]] = 3 680 W), [[margen_uso]] for that socket would be 5 300 / 3 680 = 1.44: severe overload even if the overall circuit does not trip the MCB.

**Dominant variable:** [[P_max]] of the individual socket as design limit; [[P_tot]] as evaluation variable.

**Validity limit:** In kitchens, it is assumed not all high-power devices are powered simultaneously. The worst case (all on) is the safety estimate; in actual use the simultaneity factor reduces effective [[P_tot]].

## Application 4: selecting extension leads and travel adapters

Extension leads have their own [[I_max]] which may be lower than the source socket. A 6 A extension lead in a 16 A socket does not inherit the socket capacity: the operating limit is that of the most restrictive element in the chain. The [[margen_uso]] evaluation must use the [[I_max]] of the extension lead, not the socket.

Travel adapters introduce additional [[R_contacto]] which can be significant in low-quality adapters. With [[I_tot]] = 10 A and [[R_contacto]] = 0.5 Ω in the adapter, [[P_perdida]] = 50 W: risk condition even if the load is within the declared [[I_max]].

**Dominant variable:** [[I_max]] of the most restrictive element in the chain; [[R_contacto]] of the adapter as additional risk factor.

**Validity limit:** The model assumes the only significant parasitic resistance point is the adapter or socket contact. In long extension leads (> 10 m), cable resistance also contributes.

## Application 5: domestic electrical safety education

The [[margen_uso]] and [[P_perdida]] analysis provides a quantitative framework for domestic electrical safety education. It allows replacing the empirical rule "don't plug too many things into the same strip" with a precise criterion: calculate [[P_tot]], obtain [[I_tot]] = [[P_tot]] / [[V]], and verify that [[margen_uso]] = [[I_tot]] / [[I_max]] does not exceed 0.8 in continuous use.

This framework is applicable by any user without instrumentation: it only requires knowing the nominal powers of devices (printed on the manufacturer label), the mains voltage (230 V in Europe), and [[I_max]] of the socket or strip (label or national standard).

**Dominant variable:** [[margen_uso]] as the primary preventive indicator; [[P_tot]] as input sum.

**Validity limit:** Applicable to single-phase residential installations with loads of power factor > 0.8. For industrial, three-phase, or highly non-linear loads, a more detailed analysis of the actual current is required.
"""

# Write all markdown files
files = {
    'teoria.md': teoria,
    'teoria.en.md': teoria_en,
    'modelos.md': modelos,
    'modelos.en.md': modelos_en,
    'errores.md': errores,
    'errores.en.md': errores_en,
    'historia.md': historia,
    'historia.en.md': historia_en,
    'ejemplos.md': ejemplos,
    'ejemplos.en.md': ejemplos_en,
    'aplicaciones.md': aplicaciones,
    'aplicaciones.en.md': aplicaciones_en,
}

for name, content in files.items():
    p = base / name
    p.write_text(content, encoding='utf-8')
    words = len(content.split())
    print(f'{name}: {words} words')

print('\nDone part 2 - markdown files.')
