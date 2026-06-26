"""Build interruptores leaf - ejemplos, aplicaciones, interpretacion."""
from pathlib import Path

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/interruptores')

# ── ejemplos.md ───────────────────────────────────────────────────────────────
(base / 'ejemplos.md').write_text("""\
# Ejemplos resueltos — Interruptores

## Ejemplo 1: Diagnóstico de calentamiento en interruptor de calefactor

### Enunciado

Un interruptor de pared controla un calefactor eléctrico de [[P]] = 2 000 W en una instalación de [[V]] = 230 V. Tras varios años de uso, el interruptor presenta la carcasa caliente al tacto. Se mide [[R_on]] = 0,08 Ω con un ohmímetro de resolución mili-ohm. El interruptor opera [[t_on]] = 6 horas al día en invierno. Calcular [[I]], [[P_on]] y [[E_on]] diaria, y evaluar el riesgo térmico.

### Modelo físico

Se aplica el modelo resistivo estático: la carga es resistiva pura (calefactor), el régimen es permanente y [[R_on]] es constante. Las hipótesis del modelo estático son válidas.

### Resolución simbólica

La corriente de maniobra es:

{{f:corriente}}

La pérdida resistiva en el contacto es:

{{f:perdida_on}}

La energía disipada en el contacto durante el período de uso es:

{{f:energia_on}}

### Sustitución numérica

[[I]] = 2 000 / 230 = 8,70 A

[[P_on]] = (8,70)² × 0,08 = 75,69 × 0,08 = 6,05 W

[[t_on]] = 6 × 3 600 = 21 600 s

[[E_on]] = 6,05 × 21 600 = 130 680 J = 36,3 Wh/día

### Validación dimensional

[[I]]: W/V = A ✓

[[P_on]]: A² · Ω = W ✓

[[E_on]]: W · s = J ✓

Las dimensiones son coherentes en todas las fórmulas: [[I]] en amperios, [[P_on]] en vatios, [[E_on]] en julios.

### Interpretación física

[[P_on]] = 6,05 W supera el umbral de riesgo de 5 W. La carcasa caliente al tacto confirma la disipación local elevada. La causa es [[R_on]] = 0,08 Ω, que es el doble del valor típico para un interruptor de esta gama (0,03–0,04 Ω cuando nuevo). La recomendación es sustituir el interruptor. Mantenerlo en servicio con [[P_on]] > 5 W en uso continuo de 6 h/día equivale a disipar [[E_on]] ≈ 36 Wh/día = 13 kWh/invierno exclusivamente en el contacto del interruptor.

# Ejemplo de aplicación real

## Contexto

Una instalación doméstica tiene un termostato que controla una bomba de calefacción de [[P]] = 800 W a [[V]] = 230 V. El termostato cicla aproximadamente 8 veces por hora y opera 10 horas al día. La bomba es una carga inductiva con corriente de arranque estimada en 4 × [[I]] nominal durante 100 ms. Evaluar si el modelo estático es aplicable y calcular [[P_on]] y [[E_on]] en las condiciones más conservadoras.

## Estimación física

[[I]] = [[P]] / [[V]] = 800 / 230 = 3,48 A (régimen permanente).

Con [[R_on]] = 0,05 Ω (contacto en buen estado):

[[P_on]] = (3,48)² × 0,05 = 12,11 × 0,05 = 0,61 W — aparentemente bajo.

Sin embargo, la carga es inductiva y el termostato cicla frecuentemente. La corriente de arranque es [[I_arranque]] ≈ 4 × 3,48 = 13,9 A durante t_trans = 0,1 s por arranque. Energía por arranque: [[E_trans]] = (13,9)² × 0,05 × 0,1 = 0,97 J. Con 8 arranques/hora × 10 horas = 80 arranques/día: [[E_arranques]] = 80 × 0,97 = 77,6 J/día. Energía en conducción estacionaria: [[E_on]] = 0,61 × (10 × 3 600 × ciclo_duty) ≈ 0,61 × 36 000 × 0,5 = 10 980 J/día. La energía de arranque (77,6 J) es modesta respecto a la de conducción (10 980 J) en este caso — el modelo estático es dominante. Pero en 80 arranques/día durante años, la erosión del contacto por arco puede ser significativa.

## Interpretación

El modelo estático predice [[P_on]] = 0,61 W — zona de vigilancia pero no de riesgo inmediato. Sin embargo, la naturaleza inductiva de la carga y la frecuencia de ciclado hacen que la vida útil del termostato pueda reducirse por degradación de arco, no por calentamiento estacionario. La magnitud diagnóstica correcta para este caso es el número de maniobras acumuladas, no [[P_on]] ni [[E_on]] estáticas.
""", encoding='utf-8')
print('ejemplos.md OK')

# ── ejemplos.en.md ─────────────────────────────────────────────────────────────
(base / 'ejemplos.en.md').write_text("""\
# Worked examples — Switches

## Example 1: Diagnosing heating in a heater switch

### Problem statement

A wall switch controls an electric heater of [[P]] = 2,000 W in a [[V]] = 230 V installation. After several years of use, the switch casing is hot to the touch. [[R_on]] = 0.08 Ω is measured with a milliohm-resolution ohmmeter. The switch operates [[t_on]] = 6 hours per day in winter. Calculate [[I]], [[P_on]], and daily [[E_on]], and evaluate the thermal risk.

### Physical model

The static resistive model is applied: the load is purely resistive (heater), the regime is steady state, and [[R_on]] is constant. The static model hypotheses are valid.

### Symbolic solution

The switching current is:

{{f:corriente}}

The resistive loss at the contact is:

{{f:perdida_on}}

The energy dissipated in the contact during the usage period is:

{{f:energia_on}}

### Numerical substitution

[[I]] = 2,000 / 230 = 8.70 A

[[P_on]] = (8.70)² × 0.08 = 75.69 × 0.08 = 6.05 W

[[t_on]] = 6 × 3,600 = 21,600 s

[[E_on]] = 6.05 × 21,600 = 130,680 J = 36.3 Wh/day

### Dimensional validation

[[I]]: W/V = A ✓

[[P_on]]: A² · Ω = W ✓

[[E_on]]: W · s = J ✓

All dimensions are consistent: [[I]] in amperes, [[P_on]] in watts, [[E_on]] in joules.

### Physical interpretation

[[P_on]] = 6.05 W exceeds the 5 W risk threshold. The hot casing confirms elevated local dissipation. The cause is [[R_on]] = 0.08 Ω, which is double the typical value for a switch of this type when new (0.03–0.04 Ω). The recommendation is to replace the switch. Keeping it in service with [[P_on]] > 5 W for 6 h/day continuous use means dissipating [[E_on]] ≈ 36 Wh/day = 13 kWh/winter exclusively at the switch contact.

# Real application example

## Context

A domestic installation has a thermostat controlling a heating pump of [[P]] = 800 W at [[V]] = 230 V. The thermostat cycles approximately 8 times per hour and operates 10 hours per day. The pump is an inductive load with estimated inrush current of 4 × nominal [[I]] for 100 ms. Evaluate whether the static model is applicable and calculate [[P_on]] and [[E_on]] under the most conservative conditions.

## Physical estimation

[[I]] = [[P]] / [[V]] = 800 / 230 = 3.48 A (steady state).

With [[R_on]] = 0.05 Ω (contact in good condition):

[[P_on]] = (3.48)² × 0.05 = 12.11 × 0.05 = 0.61 W — apparently low.

However, the load is inductive and the thermostat cycles frequently. Inrush current is approximately 4 × 3.48 = 13.9 A for 0.1 s per start. Energy per start: E_trans = (13.9)² × 0.05 × 0.1 = 0.97 J. With 8 starts/hour × 10 hours = 80 starts/day: total start energy = 80 × 0.97 = 77.6 J/day. Steady-state conduction energy: [[E_on]] = 0.61 × (10 × 3,600 × duty_cycle) ≈ 0.61 × 18,000 = 10,980 J/day. Start energy (77.6 J) is modest compared to conduction energy (10,980 J) in this case — the static model dominates. But with 80 starts/day over years, arc erosion of the contact may be significant.

## Interpretation

The static model predicts [[P_on]] = 0.61 W — monitoring zone but no immediate risk. However, the inductive nature of the load and the cycling frequency mean that thermostat service life may be reduced by arc degradation, not steady-state heating. The correct diagnostic quantity for this case is accumulated number of operations, not static [[P_on]] or [[E_on]].

The two examples together illustrate the complete diagnostic approach: first apply the static model to check [[P_on]] and [[E_on]]; then assess whether load type and switching frequency make the extended model necessary. Only when both checks are satisfied can the switch installation be considered thermally safe and adequately sized for its operating conditions.
""", encoding='utf-8')
print('ejemplos.en.md OK')

# ── aplicaciones.md ───────────────────────────────────────────────────────────
(base / 'aplicaciones.md').write_text("""\
# Aplicaciones de los interruptores eléctricos

## 1. Diagnóstico de calentamiento en interruptores de alta potencia

Un interruptor que controla un calefactor de 2 500 W a 230 V conduce [[I]] = 10,9 A. Con [[R_on]] = 0,06 Ω (contacto envejecido), [[P_on]] = (10,9)² × 0,06 = 7,1 W. La carcasa alcanza una temperatura apreciable al tacto. El diagnóstico utiliza la fórmula [[P_on]] = [[I]]² · [[R_on]]: el riesgo no es de sobrecarga del circuito (el magnetotérmico no actúa porque [[I]] está dentro de su calibre), sino de degradación térmica local del contacto del interruptor.

**Variable dominante:** [[P_on]] — determina el riesgo térmico del contacto.

**Límite de validez:** Modelo estático válido para carga resistiva pura. Si la carga fuera inductiva, considerar la corriente de arranque.

## 2. Selección de interruptor para instalación de clima

En una instalación de aire acondicionado de [[P]] = 3 500 W a [[V]] = 230 V, [[I]] = 15,2 A. El interruptor de control debe tener [[I_nominal]] ≥ 16 A y [[R_on]] ≤ 0,03 Ω en estado nuevo para que [[P_on]] = (15,2)² × 0,03 = 6,9 W — en el límite de vigilancia. Si [[R_on]] = 0,02 Ω, [[P_on]] = 4,6 W — zona segura con uso continuo. La selección correcta del interruptor requiere conocer [[I]] de la carga y exigir [[R_on]] máxima al fabricante.

**Variable dominante:** [[R_on]] — define qué pérdida tendrá el interruptor a la corriente de la carga.

**Límite de validez:** El compresor del aire acondicionado es una carga inductiva con corriente de arranque de 4–6 × [[I]] nominal. El modelo estático aplica en régimen permanente; el arranque requiere análisis adicional.

## 3. Análisis energético de interruptores de iluminación con uso intensivo

En una oficina, un interruptor controla [[P]] = 500 W de iluminación fluorescente a [[V]] = 230 V. [[I]] = 2,17 A. Con [[R_on]] = 0,03 Ω, [[P_on]] = (2,17)² × 0,03 = 0,14 W — negligible individualmente. Pero si hay 50 interruptores similares en el edificio, [[P_on_total]] = 50 × 0,14 = 7 W — aún pequeño. Con [[t_on]] = 10 h/día = 36 000 s, [[E_on_total]] = 7 × 36 000 = 252 000 J = 70 Wh/día = 25,6 kWh/año. Para una tarifa de 0,15 €/kWh, las pérdidas de contacto del edificio cuestan 3,8 €/año — insignificante económicamente pero medible físicamente.

**Variable dominante:** [[E_on]] — permite escalar el análisis a un período de tiempo y un conjunto de dispositivos.

**Límite de validez:** Las lámparas fluorescentes tienen factor de potencia < 1 (típico 0,85–0,9), por lo que [[I]] real puede ser mayor que [[P]]/[[V]]. Para un cálculo preciso, usar [[I]] = [[P]] / ([[V]] · fp).

## 4. Termostatos y ciclos de maniobra frecuentes

Un termostato de calefacción cicla 10 veces por hora con [[P]] = 1 500 W a [[V]] = 230 V. [[I]] = 6,52 A. Con [[R_on]] = 0,04 Ω en nuevo, [[P_on]] = (6,52)² × 0,04 = 1,70 W. Con [[t_on]] = 12 h/día y ciclo de trabajo del 50 %, [[E_on]] = 1,70 × 21 600 = 36 720 J = 10,2 Wh/día. En un año de calefacción (150 días): [[E_on_año]] = 1 530 Wh = 1,53 kWh. El número de maniobras es 10 × 12 × 150 = 18 000/año. Un termostato doméstico típico tiene vida útil de 100 000 maniobras — duración estimada de 5,6 años con este ciclo.

**Variable dominante:** [[t_on]] — determina la energía acumulada y, combinado con la frecuencia de maniobra, la vida útil estimada.

**Límite de validez:** La vida útil en maniobras depende también de la corriente de arranque de la carga (caldera vs. resistencia pura). El cálculo de 100 000 maniobras es solo orientativo.

## 5. Educación en seguridad eléctrica doméstica

En un taller de seguridad eléctrica para usuarios domésticos, el análisis de [[P_on]] y [[R_on]] ilustra por qué los interruptores de electrodomésticos de alta potencia deben revisarse periódicamente. La lección central: un interruptor que "funciona" (abre y cierra el circuito) puede estar en degradación térmica activa ([[P_on]] > 5 W) sin que ninguna protección del circuito lo detecte, porque el diferencial y el magnetotérmico protegen el cableado, no el dispositivo de maniobra.

La magnitud [[R_on]] conecta la física del contacto con la seguridad práctica: [[R_on]] < 0,05 Ω → seguro; 0,05–0,2 Ω → vigilar; > 0,2 Ω → inspeccionar; > 0,5 Ω → sustituir. Estos umbrales permiten al técnico diagnosticar el estado del interruptor con un ohmímetro sin necesidad de desmontar la instalación.

**Variable dominante:** [[R_on]] — parámetro diagnóstico de estado del contacto, medible directamente.

**Límite de validez:** Los umbrales de [[R_on]] son orientativos para interruptores domésticos de 10–16 A. Para interruptores industriales de mayor corriente nominal, los umbrales son más estrictos (menores valores de [[R_on]] para la misma [[P_on]] admisible).
""", encoding='utf-8')
print('aplicaciones.md OK')

# ── aplicaciones.en.md ────────────────────────────────────────────────────────
(base / 'aplicaciones.en.md').write_text("""\
# Applications of electrical switches

## 1. Diagnosing heating in high-power switches

A switch controlling a 2,500 W heater at 230 V conducts [[I]] = 10.9 A. With [[R_on]] = 0.06 Ω (aged contact), [[P_on]] = (10.9)² × 0.06 = 7.1 W. The casing reaches a noticeable temperature to the touch. The diagnosis uses the formula [[P_on]] = [[I]]² · [[R_on]]: the risk is not circuit overload (the MCB does not trip because [[I]] is within its rating), but local thermal degradation of the switch contact.

**Dominant variable:** [[P_on]] — determines the contact thermal risk.

**Validity limit:** Static model valid for purely resistive load. If the load were inductive, consider the inrush current.

## 2. Switch selection for air conditioning installation

In an air conditioning installation of [[P]] = 3,500 W at [[V]] = 230 V, [[I]] = 15.2 A. The control switch must have I_nominal ≥ 16 A and [[R_on]] ≤ 0.03 Ω when new so that [[P_on]] = (15.2)² × 0.03 = 6.9 W — at the monitoring limit. If [[R_on]] = 0.02 Ω, [[P_on]] = 4.6 W — safe zone for continuous use. Correct switch selection requires knowing the load [[I]] and specifying maximum [[R_on]] to the manufacturer.

**Dominant variable:** [[R_on]] — defines what loss the switch will have at the load current.

**Validity limit:** The air conditioning compressor is an inductive load with inrush current of 4–6 × nominal [[I]]. The static model applies in steady state; start-up requires additional analysis.

## 3. Energy analysis of lighting switches with intensive use

In an office, a switch controls [[P]] = 500 W of fluorescent lighting at [[V]] = 230 V. [[I]] = 2.17 A. With [[R_on]] = 0.03 Ω, [[P_on]] = (2.17)² × 0.03 = 0.14 W — individually negligible. But with 50 similar switches in the building, total P_on = 50 × 0.14 = 7 W — still small. With [[t_on]] = 10 h/day = 36,000 s, total E_on = 7 × 36,000 = 252,000 J = 70 Wh/day = 25.6 kWh/year.

**Dominant variable:** [[E_on]] — allows scaling the analysis to a time period and a set of devices.

**Validity limit:** Fluorescent lamps have power factor < 1 (typically 0.85–0.9), so actual [[I]] may be higher than [[P]]/[[V]]. For a precise calculation, use [[I]] = [[P]] / ([[V]] · pf).

## 4. Thermostats and frequent switching cycles

A heating thermostat cycles 10 times per hour with [[P]] = 1,500 W at [[V]] = 230 V. [[I]] = 6.52 A. With [[R_on]] = 0.04 Ω when new, [[P_on]] = (6.52)² × 0.04 = 1.70 W. With [[t_on]] = 12 h/day and 50% duty cycle, [[E_on]] = 1.70 × 21,600 = 36,720 J = 10.2 Wh/day. Over a heating season (150 days): annual E_on = 1,530 Wh = 1.53 kWh. The number of operations is 10 × 12 × 150 = 18,000/year. A typical domestic thermostat has a service life of 100,000 operations — estimated lifespan of 5.6 years at this cycling rate.

**Dominant variable:** [[t_on]] — determines accumulated energy and, combined with switching frequency, estimated service life.

**Validity limit:** Service life in operations also depends on load inrush current (boiler vs. pure resistance). The 100,000 operations figure is indicative only.

## 5. Domestic electrical safety education

In a domestic electrical safety workshop, the analysis of [[P_on]] and [[R_on]] illustrates why switches for high-power appliances should be periodically inspected. The central lesson: a switch that "works" (opens and closes the circuit) may be in active thermal degradation ([[P_on]] > 5 W) without any circuit protection detecting it, because the RCD and MCB protect the wiring, not the switching device.

The quantity [[R_on]] connects contact physics with practical safety: [[R_on]] < 0.05 Ω → safe; 0.05–0.2 Ω → monitor; > 0.2 Ω → inspect; > 0.5 Ω → replace. These thresholds allow a technician to diagnose switch condition with an ohmmeter without dismantling the installation.

**Dominant variable:** [[R_on]] — diagnostic parameter of contact condition, directly measurable.

**Validity limit:** The [[R_on]] thresholds are indicative for domestic 10–16 A switches. For higher-rated industrial switches, thresholds are stricter (lower [[R_on]] values for the same admissible [[P_on]]).
""", encoding='utf-8')
print('aplicaciones.en.md OK')

print('\nPhase 4 done.')
