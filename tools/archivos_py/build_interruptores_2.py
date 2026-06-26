"""Build interruptores leaf - markdown files."""
from pathlib import Path

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/interruptores')

# ── teoria.md ─────────────────────────────────────────────────────────────────
(base / 'teoria.md').write_text("""\
# Interruptores

## Contexto conceptual

Un interruptor es el dispositivo que abre o cierra un circuito eléctrico de forma mecánica o electrónica. En una instalación doméstica, los interruptores de pared controlan las luces; los interruptores de los electrodomésticos controlan motores y resistencias calefactoras; los termostatos son interruptores controlados por temperatura. En todos estos casos, la función física es la misma: permitir o cortar el paso de la corriente [[I]] entre la fuente de tensión [[V]] y la carga de potencia [[P]].

El interruptor ideal no existe en la práctica. Un interruptor real presenta en estado ON (cerrado) una resistencia no nula [[R_on]] que genera una pérdida [[P_on]] por efecto Joule. Ese calor se disipa en los contactos metálicos del interruptor. Si [[P_on]] es suficientemente grande o el tiempo de conducción [[t_on]] es suficientemente largo, la energía acumulada [[E_on]] puede degradar los contactos, reducir la vida útil del interruptor y, en casos extremos, generar un riesgo de incendio.

## 🟢 Nivel esencial

Un interruptor tiene dos estados: OFF (abierto, sin corriente) y ON (cerrado, con corriente [[I]]). Cuando está ON, la corriente que demanda la carga de potencia [[P]] conectada a una tensión [[V]] es:

{{f:corriente}}

Si el interruptor tiene resistencia de contacto [[R_on]], esa corriente produce una pérdida local:

{{f:perdida_on}}

Un interruptor doméstico de calidad tiene [[R_on]] muy pequeña — del orden de miliohmios — por lo que [[P_on]] suele ser despreciable. Un interruptor envejecido, oxidado o de mala calidad puede tener [[R_on]] de décimas de ohmio, haciendo que [[P_on]] sea apreciable incluso con corrientes moderadas.

## 🔵 Nivel formal

La cadena causal completa parte de los datos del circuito. La tensión [[V]] y la potencia [[P]] de la carga determinan la corriente de maniobra [[I]] del interruptor:

{{f:corriente}}

Con esa [[I]] y la [[R_on]] del contacto del interruptor, la pérdida resistiva es:

{{f:perdida_on}}

Si el interruptor opera durante un tiempo [[t_on]], la energía disipada en sus contactos es:

{{f:energia_on}}

La relación [[P_on]] = [[I]]² · [[R_on]] tiene implicaciones cuantitativas importantes. Si [[I]] = 4 A (un equipo de 920 W a 230 V) y [[R_on]] = 0,05 Ω (contacto moderadamente degradado), entonces [[P_on]] = 16 · 0,05 = 0,8 W. Ese interruptor encendido 8 horas diarias disipa [[E_on]] = 0,8 × 28 800 = 23 040 J = 6,4 Wh al día — un valor pequeño en términos energéticos pero significativo para el calentamiento del contacto.

La dependencia cuadrática de [[P_on]] en [[I]] implica que duplicar la corriente cuadruplica la pérdida. Un interruptor de luz (carga de 60 W, [[I]] ≈ 0,26 A) disipa 270 veces menos que un interruptor de calefactor (carga de 2 000 W, [[I]] ≈ 8,7 A) si ambos tienen la misma [[R_on]], aunque parezcan dispositivos similares.

Las tres magnitudes de salida del análisis — [[P_on]], [[E_on]] y [[I]] — forman una jerarquía diagnóstica: [[I]] indica si el interruptor está dimensionado para la carga; [[P_on]] indica el riesgo térmico instantáneo; [[E_on]] indica la carga térmica acumulada en el período de uso.

## 🔴 Nivel estructural

El modelo de interruptor resistivo en ON asume que [[R_on]] es constante durante toda la conducción. En la realidad, [[R_on]] depende de la temperatura del contacto, del estado de oxidación de la superficie metálica y de la geometría del par de contactos. A medida que el contacto envejece, [[R_on]] aumenta de forma no reversible.

El modelo no incluye los fenómenos de apertura y cierre: en el momento de la conmutación (switching), se produce un arco eléctrico breve que puede erosionar los contactos más que miles de horas de conducción estacionaria. Por eso, la vida útil de un interruptor se expresa en número de maniobras (típicamente 10 000 a 100 000 ciclos para interruptores domésticos) más que en horas de conducción.

El dominio de validez del modelo es el régimen permanente con carga resistiva. Para cargas inductivas (motores) o capacitivas (fuentes conmutadas), la corriente en el momento de cierre puede ser mucho mayor que [[I]] en régimen permanente: la corriente de arranque puede superar 5–10 veces [[I]] nominal durante milisegundos. Esos picos de corriente de arranque degradan el contacto de forma desproporcionada aunque no duren nada.

La transición al modelo extendido — cuando conviene cambiar de modelo y pasar del análisis estático al dinámico — se justifica cuando el interruptor opera con cargas inductivas importantes, cicla muy frecuentemente (más de 100 veces por hora), o muestra síntomas de calentamiento con cargas que están dentro del rango nominal.

## Interpretación física profunda

La diferencia conceptual clave es entre pérdida estacionaria y degradación por maniobra. La pérdida estacionaria [[P_on]] se puede calcular con el modelo resistivo y es proporcional a [[I]]² · [[R_on]]. La degradación por maniobra depende del arco al abrir y cerrar el contacto y no se modela con la resistencia estática.

En un interruptor de pared estándar de uso doméstico, la pérdida estacionaria es negligible en casi todos los casos prácticos: [[R_on]] ≈ 0,01–0,05 Ω y [[I]] típica ≈ 0,3–2 A, dando [[P_on]] ≈ 0,001–0,2 W. El foco del análisis de seguridad está en la degradación por maniobra y en la corriente máxima que el interruptor puede interrumpir de forma segura.

## Orden de magnitud

Interruptor de pared (luz, 60 W, [[V]] = 230 V): [[I]] = 0,26 A, [[P_on]] ≈ 0,0007 W con [[R_on]] = 0,01 Ω. Negligible.

Interruptor de calefactor (2 000 W, 230 V): [[I]] = 8,7 A, [[P_on]] ≈ 7,6 W con [[R_on]] = 0,1 Ω (contacto degradado). Apreciable — el interruptor se calienta notablemente.

Termostato de caldera (3 000 W, 230 V): [[I]] = 13 A, [[P_on]] ≈ 16,9 W con [[R_on]] = 0,1 Ω. Riesgo térmico real — requiere inspección o sustitución.

Con [[t_on]] = 8 h/día = 28 800 s, el calefactor del ejemplo disipa [[E_on]] = 7,6 × 28 800 ≈ 219 kJ ≈ 60,7 Wh/día. Anualmente son 22 kWh disipados solo en el interruptor — energía que se convierte en calor en el componente de maniobra.

## Método de resolución personalizado

1. Identificar [[V]] (contexto de instalación) y [[P]] de la carga (etiqueta del equipo).
2. Calcular [[I]] = [[P]] / [[V]].
3. Estimar o medir [[R_on]] (nuevo: 0,01–0,05 Ω; envejecido: 0,05–0,5 Ω; degradado: > 0,5 Ω).
4. Calcular [[P_on]] = [[I]]² · [[R_on]].
5. Si [[P_on]] > 1 W en uso continuo, calcular [[E_on]] = [[P_on]] · [[t_on]] para el período de análisis.
6. Evaluar el resultado: [[P_on]] < 0,1 W → negligible; 0,1–1 W → vigilar; > 1 W → inspeccionar; > 5 W → sustituir.

## Casos especiales y ejemplo extendido

**Termostato de caldera** — cicla frecuentemente (≈ 5–10 veces/hora) con carga inductiva (motor de bomba, 500 W). La corriente de arranque del motor puede ser 5 × [[I]] nominal durante 50–100 ms en cada arranque. Con 8 arranques/hora y 12 horas de operación diaria, el contacto experimenta 96 transitorios diarios. El modelo estático de [[P_on]] subestima significativamente la degradación real del contacto. El análisis correcto requiere el modelo extendido con consideración del arco y los transitorios inductivos.

**Interruptor MOSFET en electrónica de potencia** — [[R_on]] puede ser de miliohmios (0,001–0,01 Ω) pero [[I]] puede ser de decenas de amperios. La pérdida [[P_on]] sigue siendo significativa y es el parámetro de diseño central de los conversores conmutados.

## Preguntas reales del alumno

**¿Por qué se calienta el interruptor del calefactor pero no el de la luz?** Porque la corriente del calefactor es 30–50 veces mayor que la de la bombilla, y [[P_on]] ∝ [[I]]². La misma [[R_on]] produce 900–2 500 veces más calor con el calefactor.

**¿Un interruptor con [[R_on]] alta protege contra sobrecargas?** No. [[R_on]] alta genera calor en el propio interruptor pero no limita la corriente de la carga de forma significativa. Para limitación de corriente se necesita un fusible o magnetotérmico, no un interruptor degradado.

**¿Se puede medir [[R_on]] en casa?** Sí, con un multímetro de resolución mili-ohm (función de medida de resistencia de baja impedancia, típicamente marcada como "Low Ω" o "mΩ"). Con un multímetro básico es difícil porque la resolución es insuficiente para distinguir entre 0,01 y 0,1 Ω.

## Conexiones transversales y rutas de estudio

- Leaf hermano **enchufes-y-tomas**: allí el foco es [[margen_uso]] = [[I_tot]]/[[I_max]] en la regleta; aquí el foco es [[P_on]] = [[I]]² · [[R_on]] en el dispositivo de maniobra. Ambos aplican la ley de Joule localizada.
- Leaf hermano **diferencial-y-magnetotérmico**: el magnetotérmico protege el cableado detectando sobrecorriente; el interruptor simplemente permite o corta el paso de corriente sin función de protección activa.
- **Ley de Ohm** (electromagnetismo básico): [[R_on]] es la resistencia de los contactos. La caída de tensión en el interruptor es [[V_on]] = [[I]] · [[R_on]], que también puede calcularse para verificar la pérdida de tensión en la carga.
- **Efecto Joule** (termodinámica básica): [[P_on]] = [[I]]² · [[R_on]] es la forma local de la ley de Joule. La energía [[E_on]] se convierte íntegramente en calor en los contactos.

## Síntesis final

El interruptor ideal tiene [[R_on]] = 0 y no disipa energía. El interruptor real tiene [[R_on]] > 0 y genera [[P_on]] = [[I]]² · [[R_on]] al conducir. La pérdida crece con el cuadrado de [[I]]: los interruptores de alta potencia son los que tienen mayor riesgo térmico de contacto. La energía acumulada [[E_on]] = [[P_on]] · [[t_on]] determina si el calentamiento es significativo en el período de uso. Un interruptor con síntomas de calentamiento (temperatura superficial > 40 °C, olor, decoloración) debe inspeccionarse o sustituirse independientemente de que la corriente esté dentro del rango nominal, porque el problema es [[R_on]] elevada, no sobrecarga de circuito.
""", encoding='utf-8')
print('teoria.md OK')

# ── teoria.en.md ──────────────────────────────────────────────────────────────
(base / 'teoria.en.md').write_text("""\
# Switches

## Conceptual context

A switch is a device that opens or closes an electrical circuit mechanically or electronically. In a domestic installation, wall switches control lights; appliance switches control motors and heating elements; thermostats are temperature-controlled switches. In all these cases, the physical function is the same: to allow or cut the flow of current [[I]] between the supply voltage [[V]] and the load of power [[P]].

The ideal switch does not exist in practice. A real switch presents in ON state (closed) a non-zero resistance [[R_on]] that generates a loss [[P_on]] by the Joule effect. That heat is dissipated in the metallic contacts of the switch. If [[P_on]] is large enough or the conduction time [[t_on]] is long enough, the accumulated energy [[E_on]] can degrade the contacts, reduce the switch service life, and in extreme cases create a fire risk.

## 🟢 Essential level

A switch has two states: OFF (open, no current) and ON (closed, with current [[I]]). When ON, the current demanded by a load of power [[P]] connected to voltage [[V]] is:

{{f:corriente}}

If the switch has contact resistance [[R_on]], that current produces a local loss:

{{f:perdida_on}}

A quality domestic switch has very small [[R_on]] — in the order of milliohms — so [[P_on]] is usually negligible. An aged, oxidised or poor-quality switch can have [[R_on]] in tenths of an ohm, making [[P_on]] noticeable even with moderate currents.

## 🔵 Formal level

The complete causal chain starts from circuit data. The voltage [[V]] and load power [[P]] determine the switching current [[I]] of the switch:

{{f:corriente}}

With that [[I]] and the contact [[R_on]] of the switch, the resistive loss is:

{{f:perdida_on}}

If the switch operates for a time [[t_on]], the energy dissipated in its contacts is:

{{f:energia_on}}

The relationship [[P_on]] = [[I]]² · [[R_on]] has important quantitative implications. If [[I]] = 4 A (a 920 W device at 230 V) and [[R_on]] = 0.05 Ω (moderately degraded contact), then [[P_on]] = 16 × 0.05 = 0.8 W. That switch on for 8 hours per day dissipates [[E_on]] = 0.8 × 28,800 = 23,040 J = 6.4 Wh per day — a small amount in energy terms but significant for contact heating.

The quadratic dependence of [[P_on]] on [[I]] means doubling the current quadruples the loss. A light switch (60 W load, [[I]] ≈ 0.26 A) dissipates 270 times less than a heater switch (2,000 W load, [[I]] ≈ 8.7 A) if both have the same [[R_on]], even though they look like similar devices.

The three output quantities of the analysis — [[P_on]], [[E_on]], and [[I]] — form a diagnostic hierarchy: [[I]] indicates whether the switch is sized for the load; [[P_on]] indicates instantaneous thermal risk; [[E_on]] indicates accumulated thermal load over the usage period.

## 🔴 Structural level

The resistive ON switch model assumes [[R_on]] is constant throughout conduction. In reality, [[R_on]] depends on contact temperature, the oxidation state of the metal surface, and the geometry of the contact pair. As the contact ages, [[R_on]] increases irreversibly.

The model does not include switching phenomena: at the moment of opening and closing, a brief electric arc occurs that can erode the contacts more than thousands of hours of steady conduction. That is why switch service life is expressed in number of operations (typically 10,000 to 100,000 cycles for domestic switches) rather than in conduction hours.

The validity domain of the model is steady state with resistive load. For inductive (motors) or capacitive (switched-mode supplies) loads, the current at switch closure can be much larger than [[I]] in steady state: inrush current can exceed 5–10 times nominal [[I]] for milliseconds. Those inrush current peaks degrade the contact disproportionately even if they last no time at all.

The transition to the extended model — when to switch models from static to dynamic analysis — is justified when the switch operates with significant inductive loads, cycles very frequently (more than 100 times per hour), or shows heating symptoms with loads within the nominal range.

## Deep physical interpretation

The key conceptual distinction is between steady-state loss and switching degradation. The steady-state loss [[P_on]] can be calculated with the resistive model and is proportional to [[I]]² · [[R_on]]. Switching degradation depends on the arc when opening and closing the contact and is not modelled by the static resistance.

In a standard domestic wall switch, the steady-state loss is negligible in almost all practical cases: [[R_on]] ≈ 0.01–0.05 Ω and typical [[I]] ≈ 0.3–2 A, giving [[P_on]] ≈ 0.001–0.2 W. The safety analysis focus is on switching degradation and on the maximum current the switch can safely interrupt.

## Order of magnitude

Wall switch (light, 60 W, [[V]] = 230 V): [[I]] = 0.26 A, [[P_on]] ≈ 0.0007 W with [[R_on]] = 0.01 Ω. Negligible.

Heater switch (2,000 W, 230 V): [[I]] = 8.7 A, [[P_on]] ≈ 7.6 W with [[R_on]] = 0.1 Ω (degraded contact). Noticeable — the switch heats up significantly.

Boiler thermostat (3,000 W, 230 V): [[I]] = 13 A, [[P_on]] ≈ 16.9 W with [[R_on]] = 0.1 Ω. Real thermal risk — inspection or replacement required.

With [[t_on]] = 8 h/day = 28,800 s, the heater example dissipates [[E_on]] = 7.6 × 28,800 ≈ 219 kJ ≈ 60.7 Wh/day. Annually that is 22 kWh dissipated only in the switching contact — energy converted to heat in the switching component.

## Personalized resolution method

1. Identify [[V]] (installation context) and [[P]] of the load (device label).
2. Calculate [[I]] = [[P]] / [[V]].
3. Estimate or measure [[R_on]] (new: 0.01–0.05 Ω; aged: 0.05–0.5 Ω; degraded: > 0.5 Ω).
4. Calculate [[P_on]] = [[I]]² · [[R_on]].
5. If [[P_on]] > 1 W in continuous use, calculate [[E_on]] = [[P_on]] · [[t_on]] for the analysis period.
6. Evaluate: [[P_on]] < 0.1 W → negligible; 0.1–1 W → monitor; > 1 W → inspect; > 5 W → replace.

## Special cases and extended example

**Boiler thermostat** — cycles frequently (≈ 5–10 times/hour) with inductive load (pump motor, 500 W). Motor inrush current can be 5 × nominal [[I]] for 50–100 ms at each start. With 8 starts/hour and 12 hours daily operation, the contact experiences 96 transients per day. The static [[P_on]] model significantly underestimates actual contact degradation. Correct analysis requires the extended model with arc and inductive transient consideration.

**MOSFET switch in power electronics** — [[R_on]] can be milliohms (0.001–0.01 Ω) but [[I]] can be tens of amperes. The loss [[P_on]] remains significant and is the central design parameter of switched converters.

## Real student questions

**Why does the heater switch heat up but not the light switch?** Because the heater current is 30–50 times larger than the bulb current, and [[P_on]] ∝ [[I]]². The same [[R_on]] produces 900–2,500 times more heat with the heater.

**Does a switch with high [[R_on]] protect against overloads?** No. High [[R_on]] generates heat in the switch itself but does not significantly limit the load current. For current limitation, a fuse or MCB is needed, not a degraded switch.

**Can [[R_on]] be measured at home?** Yes, with a milliohm-resolution multimeter (low resistance measurement function, typically marked "Low Ω" or "mΩ"). With a basic multimeter it is difficult because the resolution is insufficient to distinguish between 0.01 and 0.1 Ω.

## Cross-cutting connections and study paths

- Sibling leaf **enchufes-y-tomas**: there the focus is on usage margin = total current / rated current in the power strip; here the focus is on [[P_on]] = [[I]]² · [[R_on]] in the switching device. Both apply localised Joule's law.
- Sibling leaf **diferencial-y-magnetotérmico**: the MCB protects the wiring by detecting overcurrent; the switch simply allows or cuts current flow without an active protection function.
- **Ohm's law** (basic electromagnetism): [[R_on]] is the contact resistance. The voltage drop across the switch is V_on = [[I]] · [[R_on]], also calculable to verify the voltage loss at the load.
- **Joule effect** (basic thermodynamics): [[P_on]] = [[I]]² · [[R_on]] is the local form of Joule's law. The energy [[E_on]] is entirely converted to heat in the contacts.

## Final synthesis

The ideal switch has [[R_on]] = 0 and dissipates no energy. The real switch has [[R_on]] > 0 and generates [[P_on]] = [[I]]² · [[R_on]] when conducting. The loss grows with the square of [[I]]: high-power switches have the greatest contact thermal risk. The accumulated energy [[E_on]] = [[P_on]] · [[t_on]] determines whether heating is significant over the usage period. A switch with heating symptoms (surface temperature > 40 °C, smell, discolouration) must be inspected or replaced regardless of whether the current is within the nominal range, because the problem is elevated [[R_on]], not circuit overload.
""", encoding='utf-8')
print('teoria.en.md OK')

# ── modelos.md ────────────────────────────────────────────────────────────────
(base / 'modelos.md').write_text("""\
# Modelos físicos de interruptores

## Modelo ideal

El modelo de interruptor ideal supone que en estado OFF la resistencia es infinita (circuito abierto, [[I]] = 0) y en estado ON la resistencia es nula ([[R_on]] = 0, [[P_on]] = 0, [[E_on]] = 0). El interruptor ideal no altera el circuito en ninguno de los dos estados: ni consume energía ni genera caída de tensión.

Este modelo es el punto de referencia conceptual. Cualquier desviación respecto a él — [[R_on]] > 0 en ON, corriente de fuga en OFF — representa una imperfección del dispositivo real.

## Hipótesis

- Régimen permanente: la corriente [[I]] es constante durante todo el período de conducción [[t_on]].
- Carga resistiva pura: [[P]] = [[V]] · [[I]], factor de potencia unitario.
- [[R_on]] es constante con la temperatura y con el tiempo de conducción (modelo estático).
- No se modelan los transitorios de apertura y cierre (arcos eléctricos).
- La corriente de fuga en estado OFF es despreciable.

## Dominio de validez cuantitativo

El modelo estático es válido cuando se cumplen simultáneamente:
- Régimen permanente: ciclo de trabajo estable, sin cambios de carga frecuentes.
- Factor de potencia ≥ 0,9 (cargas casi resistivas).
- [[I]] ≤ [[I_nominal]] del interruptor (sin sobrecorriente).
- [[R_on]] ≤ 0,5 Ω (para valores mayores, el calentamiento puede ser no lineal por expansión térmica del contacto).

**Condición cuantitativa de riesgo:** [[P_on]] ≥ 1 W indica calentamiento apreciable en uso continuo. [[P_on]] ≥ 5 W es condición de riesgo que requiere inspección. Con [[I]] = 10 A y [[R_on]] = 0,05 Ω, [[P_on]] = 5 W — umbral crítico. Con [[R_on]] = 0,1 Ω, [[P_on]] = 10 W — ya en zona de sustitución.

## Señales de fallo del modelo

El modelo estático de [[R_on]] falla o es insuficiente cuando:
- El interruptor se calienta con [[P_on]] calculado bajo: indica que [[R_on]] real es mayor que la estimada, o que hay arcos intermitentes no modelados.
- El calentamiento es intermitente y no correlacionado con el nivel de [[I]]: puede indicar contacto mecánicamente inestable.
- La temperatura del interruptor sube más rápido que lo predicho por [[P_on]] · tiempo: indica que la resistencia térmica del encapsulado es mayor de lo esperado (ventilación reducida).
- El interruptor falla en OFF (no corta correctamente): indica degradación de los contactos que no se captura con [[R_on]] estática en ON.

## Cuándo cambiar de modelo

La transicion al modelo extendido — cuando conviene cambiar de modelo — se justifica en los siguientes casos:
- Carga inductiva con arranque elevado (motor, transformador): los picos de corriente en el transitorio superan [[I]] nominal en un factor de 5–10, causando degradación por arco que domina sobre la pérdida estacionaria [[P_on]].
- Ciclo muy frecuente (> 100 maniobras/hora): la degradación acumulada por arco supera la pérdida por conducción estacionaria.
- [[R_on]] medida supera 0,5 Ω: el modelo lineal ya no predice bien la temperatura del contacto.
- Síntomas de calentamiento con [[P_on]] calculado < 1 W: el modelo estático subestima la realidad.

En esos casos, el análisis requiere considerar la energía disipada en cada arco de apertura/cierre, la corriente de arranque de la carga y la frecuencia de maniobra.

## Modelo extendido o alternativo

El modelo extendido incorpora:
1. **[[R_on]] dependiente de la temperatura**: [[R_on]](T) = [[R_on]](T₀) · (1 + α·ΔT), donde α es el coeficiente térmico de resistencia del contacto (cobre: α ≈ 0,004 K⁻¹).
2. **Energía de arco por maniobra**: cada ciclo apertura-cierre disipa una energía de arco E_arco que depende de [[I]] y de la tensión del circuito. Para interruptores domésticos, E_arco ≈ 1–10 mJ por maniobra.
3. **Corriente de arranque**: para cargas inductivas, [[I_pico]] = k · [[I_nominal]] durante un tiempo de transitorio [[t_trans]]. La energía del transitorio es E_transitoria = [[I_pico]]² · [[R_on]] · [[t_trans]].

## Comparación operativa

| Situación | Modelo adecuado | Variable crítica |
|-----------|----------------|-----------------|
| Carga resistiva, uso esporádico | Modelo ideal ([[R_on]] ≈ 0) | [[I]] nominal |
| Carga resistiva, uso continuo | Modelo estático [[P_on]] = [[I]]² · [[R_on]] | [[P_on]], [[E_on]] |
| Carga inductiva, arranque | Modelo extendido con [[I_pico]] | E_arco por maniobra |
| Ciclo frecuente (termostato) | Modelo extendido con degradación acumulada | N_maniobras, E_total |
""", encoding='utf-8')
print('modelos.md OK')

# ── modelos.en.md ─────────────────────────────────────────────────────────────
(base / 'modelos.en.md').write_text("""\
# Physical models of switches

## Ideal model

The ideal switch model assumes that in OFF state the resistance is infinite (open circuit, [[I]] = 0) and in ON state the resistance is zero ([[R_on]] = 0, [[P_on]] = 0, [[E_on]] = 0). The ideal switch does not alter the circuit in either state: it neither consumes energy nor generates a voltage drop.

This model is the conceptual reference point. Any deviation from it — [[R_on]] > 0 in ON, leakage current in OFF — represents an imperfection of the real device.

## Hypotheses

- Steady state: current [[I]] is constant throughout the conduction period [[t_on]].
- Purely resistive load: [[P]] = [[V]] · [[I]], unity power factor.
- [[R_on]] is constant with temperature and conduction time (static model).
- Opening and closing transients (electric arcs) are not modelled.
- Leakage current in OFF state is negligible.

## Quantitative validity domain

The static model is valid when the following conditions are simultaneously met:
- Steady state: stable duty cycle, no frequent load changes.
- Power factor ≥ 0.9 (nearly resistive loads).
- [[I]] ≤ [[I_nominal]] of the switch (no overcurrent).
- [[R_on]] ≤ 0.5 Ω (for higher values, heating may be non-linear due to thermal expansion of the contact).

**Quantitative risk condition:** [[P_on]] ≥ 1 W indicates noticeable heating in continuous use. [[P_on]] ≥ 5 W is a risk condition requiring inspection. With [[I]] = 10 A and [[R_on]] = 0.05 Ω, [[P_on]] = 5 W — critical threshold. With [[R_on]] = 0.1 Ω, [[P_on]] = 10 W — already in replacement zone.

## Model failure signals

The static [[R_on]] model fails or is insufficient when:
- The switch heats up with low calculated [[P_on]]: indicates actual [[R_on]] is higher than estimated, or intermittent arcs are present.
- Heating is intermittent and uncorrelated with [[I]] level: may indicate mechanically unstable contact.
- Switch temperature rises faster than predicted by [[P_on]] · time: indicates the enclosure thermal resistance is higher than expected (reduced ventilation).
- Switch fails in OFF (does not cut correctly): indicates contact degradation not captured by static [[R_on]] in ON.

## When to switch models

The transition to the extended model — when to change models — is justified in the following cases:
- Inductive load with high inrush (motor, transformer): current peaks during the transient exceed nominal [[I]] by a factor of 5–10, causing arc degradation that dominates over stationary loss [[P_on]].
- Very frequent cycling (> 100 operations/hour): accumulated arc degradation exceeds steady-state conduction loss.
- Measured [[R_on]] exceeds 0.5 Ω: the linear model no longer accurately predicts contact temperature.
- Heating symptoms with calculated [[P_on]] < 1 W: the static model underestimates reality.

In those cases, analysis must consider the energy dissipated in each open/close arc, the load inrush current, and the switching frequency.

## Extended or alternative model

The extended model incorporates:
1. **Temperature-dependent [[R_on]]**: R_on(T) = R_on(T₀) · (1 + α·ΔT), where α is the thermal resistance coefficient of the contact (copper: α ≈ 0.004 K⁻¹).
2. **Arc energy per operation**: each open-close cycle dissipates arc energy E_arc depending on [[I]] and circuit voltage. For domestic switches, E_arc ≈ 1–10 mJ per operation.
3. **Inrush current**: for inductive loads, I_peak = k · I_nominal for a transient time t_trans. Transient energy = I_peak² · [[R_on]] · t_trans.

## Operational comparison

| Situation | Appropriate model | Critical variable |
|-----------|------------------|-------------------|
| Resistive load, occasional use | Ideal model ([[R_on]] ≈ 0) | Nominal [[I]] |
| Resistive load, continuous use | Static model [[P_on]] = [[I]]² · [[R_on]] | [[P_on]], [[E_on]] |
| Inductive load, start-up | Extended model with I_peak | Arc energy per operation |
| Frequent cycling (thermostat) | Extended model with accumulated degradation | N_operations, E_total |
""", encoding='utf-8')
print('modelos.en.md OK')

print('\nPhase 2 done.')
