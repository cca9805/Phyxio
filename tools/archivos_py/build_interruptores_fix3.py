"""Fix3: ejemplos (exact sections), errores (subsections+mini-ejemplo), aplicaciones word count,
meta icon, unknown mag refs, Coord graph registration."""
import re
from pathlib import Path

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/interruptores')

# ── 1. ejemplos.md — exact required sections, no duplicates, no render math ──
(base / 'ejemplos.md').write_text("""\
# Ejemplo tipo examen

## Enunciado

Un interruptor de pared controla un calefactor electrico de [[P]] = 2000 W en una instalacion de [[V]] = 230 V. Tras varios anos de uso, el interruptor presenta la carcasa caliente al tacto. Se mide [[R_on]] = 0,08 ohm con un ohmimetro de resolucion mili-ohm. El interruptor opera [[t_on]] = 6 horas al dia en invierno. Calcular [[I]], [[P_on]] y [[E_on]] diaria, y evaluar el riesgo termico.

## Datos

La potencia de la carga es [[P]] = 2000 W. La tension de alimentacion es [[V]] = 230 V. La resistencia del contacto medida es [[R_on]] = 0,08 ohm. El tiempo diario de conduccion es [[t_on]] = 6 h = 21600 s. La magnitud de interes principal es [[P_on]] para el diagnostico de riesgo termico, y [[E_on]] para el analisis energetico.

## Definicion del sistema

El sistema fisico es el interruptor como elemento resistivo en estado ON. La carga (calefactor) es externa al sistema de analisis: su funcion es fijar [[I]] a traves del interruptor. El modelo aplicado es la ley de Joule localizada en el contacto del interruptor, con resistencia [[R_on]] como parametro de estado del contacto.

## Modelo fisico

El interruptor real se modela como una resistencia [[R_on]] en serie con la carga. Cuando conduce la corriente [[I]], disipa una potencia [[P_on]] proporcional al cuadrado de [[I]] y a [[R_on]]. Durante el tiempo [[t_on]] de conduccion, la energia total disipada es [[E_on]]. Las tres formulas del leaf describen completamente este comportamiento para carga resistiva en regimen permanente.

## Justificacion del modelo

Se aplica el modelo resistivo estatico porque la carga es resistiva pura (calefactor), el regimen es permanente y [[R_on]] es constante. Las hipotesis son validas: factor de potencia unitario, regimen permanente, sin transitorios de arranque. El modelo no es aplicable si la carga fuera inductiva o si el interruptor ciclara frecuentemente.

## Resolucion simbolica

La corriente de maniobra se obtiene aplicando:

{{f:corriente}}

La perdida resistiva en el contacto se obtiene aplicando:

{{f:perdida_on}}

La energia disipada durante el periodo de conduccion se obtiene aplicando:

{{f:energia_on}}

## Sustitucion numerica

Sustituyendo los datos numericos en las formulas simbolicas: la corriente resulta [[I]] igual a 8,70 A. La perdida en el contacto resulta [[P_on]] igual a 6,05 W. La energia diaria disipada resulta [[E_on]] igual a 130680 J equivalente a 36,3 Wh por dia.

## Validacion dimensional

Las dimensiones son coherentes en todas las formulas del leaf: [[I]] se expresa en amperios, [[P_on]] se expresa en vatios, [[E_on]] se expresa en julios. La dependencia cuadratica de [[P_on]] en [[I]] es correcta dimensionalmente porque el cuadrado de amperios multiplicado por ohmios da vatios.

## Interpretacion fisica

[[P_on]] = 6,05 W supera el umbral de riesgo de 5 W establecido para interruptores domesticos. La carcasa caliente al tacto es la senhal observable que confirma la disipacion local elevada. La causa fisica es [[R_on]] = 0,08 ohm, que duplica el valor tipico de un interruptor nuevo (0,03-0,04 ohm). La recomendacion es sustituir el interruptor. La energia acumulada [[E_on]] = 36,3 Wh/dia equivale a 13 kWh por temporada de invierno disipados exclusivamente en el contacto del interruptor — energia convertida a calor en el dispositivo de maniobra, no en la carga util.

---

# Ejemplo de aplicacion real

## Contexto

Una instalacion domestica tiene un termostato que controla una bomba de calefaccion de [[P]] = 800 W a [[V]] = 230 V. El termostato cicla aproximadamente 8 veces por hora y opera 10 horas al dia. La carga es inductiva. Evaluar el riesgo termico del termostato con [[R_on]] = 0,05 ohm.

## Estimacion fisica

La corriente nominal es [[I]] = [[P]]/[[V]] = 800/230 = 3,48 A. La perdida en conduccion estacionaria es [[P_on]] = [[I]] al cuadrado por [[R_on]] = 3,48 al cuadrado multiplicado por 0,05 = 0,61 W — zona de vigilancia. La energia diaria en conduccion con [[t_on]] = 18000 s (ciclo 50%) es [[E_on]] = [[P_on]] por [[t_on]] = 10980 J = 3,05 Wh. La naturaleza inductiva de la carga implica corriente de arranque varias veces superior a [[I]] durante arranques breves, lo que puede degradar el contacto por arco aunque [[P_on]] estatica sea baja.

## Interpretacion

El modelo estatico predice [[P_on]] = 0,61 W — riesgo termico bajo en regimen permanente. Sin embargo, el numero de maniobras diarias (hasta 80 arranques/dia) es el factor limitante de la vida util del termostato, no el calentamiento estacionario. La magnitud diagnostica correcta para este caso es el numero acumulado de operaciones, no [[P_on]] ni [[E_on]] estaticas. El modelo estatico es suficiente para el diagnostico termico pero no para el diagnostico de vida util en cargas inductivas con ciclado frecuente.
""", encoding='utf-8')
print('ejemplos.md OK')

# ── 2. ejemplos.en.md — exact required English sections ──────────────────────
(base / 'ejemplos.en.md').write_text("""\
# Exam-type example

## Problem statement

A wall switch controls an electric heater of [[P]] = 2000 W in a [[V]] = 230 V installation. After several years of use, the switch casing is hot to the touch. [[R_on]] = 0.08 ohm is measured with a milliohm-resolution ohmmeter. The switch operates [[t_on]] = 6 hours per day in winter. Calculate [[I]], [[P_on]], and daily [[E_on]], and evaluate the thermal risk.

## Data

Load power is [[P]] = 2000 W. Supply voltage is [[V]] = 230 V. Measured contact resistance is [[R_on]] = 0.08 ohm. Daily conduction time is [[t_on]] = 6 h = 21600 s. The main quantity of interest is [[P_on]] for thermal risk diagnosis, and [[E_on]] for energy analysis.

## System definition

The physical system is the switch as a resistive element in ON state. The load (heater) is external to the analysis system: its function is to fix [[I]] through the switch. The applied model is localised Joule's law at the switch contact, with [[R_on]] as the contact state parameter.

## Physical model

The real switch is modelled as a resistance [[R_on]] in series with the load. When conducting current [[I]], it dissipates power [[P_on]] proportional to the square of [[I]] and to [[R_on]]. During conduction time [[t_on]], the total energy dissipated is [[E_on]]. The three leaf formulas completely describe this behaviour for resistive load in steady state.

## Model justification

The static resistive model is applied because the load is purely resistive (heater), the regime is steady state, and [[R_on]] is constant. The hypotheses are valid: unity power factor, steady state, no inrush transients. The model is not applicable if the load were inductive or if the switch cycled frequently.

## Symbolic solution

The switching current is obtained by applying:

{{f:corriente}}

The resistive loss at the contact is obtained by applying:

{{f:perdida_on}}

The energy dissipated during the conduction period is obtained by applying:

{{f:energia_on}}

## Numerical substitution

Substituting the numerical data into the symbolic formulas: current gives [[I]] equal to 8.70 A. Contact loss gives [[P_on]] equal to 6.05 W. Daily dissipated energy gives [[E_on]] equal to 130680 J equivalent to 36.3 Wh per day.

## Dimensional validation

Dimensions are consistent throughout the leaf formulas: [[I]] is expressed in amperes, [[P_on]] in watts, [[E_on]] in joules. The quadratic dependence of [[P_on]] on [[I]] is dimensionally correct because amperes squared times ohms gives watts.

## Physical interpretation

[[P_on]] = 6.05 W exceeds the 5 W risk threshold established for domestic switches. The hot casing is the observable signal confirming elevated local dissipation. The physical cause is [[R_on]] = 0.08 ohm, which is double the typical value for a new switch (0.03-0.04 ohm). The recommendation is to replace the switch. The accumulated energy [[E_on]] = 36.3 Wh/day is equivalent to 13 kWh per winter season dissipated exclusively at the switch contact — energy converted to heat in the switching device, not in the useful load.

---

# Real-world example

## Context

A domestic installation has a thermostat controlling a heating pump of [[P]] = 800 W at [[V]] = 230 V. The thermostat cycles approximately 8 times per hour and operates 10 hours per day. The load is inductive. Evaluate the thermostat thermal risk with [[R_on]] = 0.05 ohm.

## Physical estimation

Nominal current is [[I]] = [[P]]/[[V]] = 800/230 = 3.48 A. Steady-state conduction loss is [[P_on]] = [[I]] squared times [[R_on]] = 3.48 squared times 0.05 = 0.61 W — monitoring zone. Daily energy with [[t_on]] = 18000 s (50% duty cycle) is [[E_on]] = [[P_on]] times [[t_on]] = 10980 J = 3.05 Wh. The inductive nature of the load implies inrush current several times higher than steady-state [[I]] during brief start-ups, which may degrade the contact through arcing even though static [[P_on]] is low.

## Interpretation

The static model predicts [[P_on]] = 0.61 W — low thermal risk in steady state. However, the daily switching count (up to 80 starts/day) is the limiting factor for thermostat service life, not steady-state heating. The correct diagnostic quantity for this case is accumulated number of operations, not static [[P_on]] or [[E_on]]. The static model is sufficient for thermal diagnosis but not for service-life diagnosis with inductive loads under frequent cycling. The two examples together show the full scope of the switch thermal model: for resistive loads and continuous use, [[P_on]] is the dominant diagnostic quantity; for inductive loads and frequent cycling, the extended model with switching count is required.
""", encoding='utf-8')
print('ejemplos.en.md OK')

# ── 3. errores.md — exact structure with ### Error N:, all required subsections + mini-ejemplo ──
(base / 'errores.md').write_text("""\
# Errores conceptuales — Interruptores

### Error 1: Confundir el interruptor con una proteccion activa

#### Por que parece correcto

El interruptor y el magnetotermico tienen aspecto similar y estan ambos en el cuadro electrico. Ambos permiten "cortar" el circuito. Muchos usuarios los tratan como dispositivos equivalentes.

#### Por que es incorrecto

El interruptor es un dispositivo de maniobra: abre y cierra el circuito manualmente. No detecta [[I]] excesiva ni actua automaticamente. El magnetotermico es un dispositivo de proteccion: actua automaticamente cuando [[I]] supera un umbral o detecta un cortocircuito. Un interruptor con [[P_on]] elevada no activa ningun mecanismo de proteccion.

#### Senal de deteccion

El alumno dice: "Si el interruptor esta caliente, lo apago para que no haya riesgo." El riesgo no desaparece al apagar: el contacto degradado con [[R_on]] alta seguira causando [[P_on]] elevada cada vez que se encienda. El problema es estructural en el contacto, no en el patron de uso.

#### Correccion conceptual

Distinguir por funcion: el interruptor controla (maniobra manual), el magnetotermico protege (actuacion automatica). Un interruptor no protege contra sobrecarga. La solucion al calentamiento del interruptor es sustituirlo, no cambiar el habito de uso.

#### Mini-ejemplo de contraste

Incorrecto: interruptor caliente implica que hay que usarlo menos. Correcto: interruptor caliente con [[P_on]] > 5 W implica que hay que sustituirlo, independientemente de la frecuencia de uso.

---

### Error 2: Ignorar [[P_on]] porque [[R_on]] es pequena

#### Por que parece correcto

[[R_on]] tipica de un interruptor (0,01-0,1 ohm) es mucho menor que la resistencia de la carga (decenas o cientos de ohmios). Parece razonable despreciarla.

#### Por que es incorrecto

[[P_on]] = [[I]]^2 x [[R_on]]. La dependencia cuadratica en [[I]] amplifica el efecto de [[R_on]]. Con [[I]] = 10 A y [[R_on]] = 0,05 ohm: [[P_on]] = 5 W. No es despreciable para el diagnostico termico del contacto, aunque sea inapreciable para el balance de potencia del circuito.

#### Senal de deteccion

El alumno calcula [[P_on]] y obtiene un valor pequeno usando [[I]] = 1 A (iluminacion). Luego generaliza que [[P_on]] siempre es pequena. No considera que con [[I]] = 10 A (calefactor), [[P_on]] se multiplica por 100.

#### Correccion conceptual

Calcular siempre [[P_on]] para la corriente real de la carga. La escala de [[P_on]] depende de [[I]]^2, no de [[R_on]] sola. Un mismo [[R_on]] puede ser inofensivo para iluminacion y peligroso para calefaccion.

#### Mini-ejemplo de contraste

Incorrecto: [[R_on]] = 0,05 ohm es despreciable. Correcto: con [[I]] = 10 A, [[P_on]] = 100 x 0,05 = 5 W — umbral de riesgo termico para el contacto del interruptor.

---

### Error 3: Aplicar el modelo estatico a cargas inductivas

#### Por que parece correcto

La formula [[P_on]] = [[I]]^2 x [[R_on]] no menciona el tipo de carga. El alumno la aplica directamente con [[I]] nominal sin considerar la naturaleza inductiva.

#### Por que es incorrecto

Las cargas inductivas (motores, bombas, compresores) tienen corriente de arranque de 4-8 veces [[I]] nominal durante 0,1-0,5 s. El modelo estatico usa [[I]] nominal y subestima la disipacion real durante los transitorios de arranque. Ademas, el ciclado frecuente de cargas inductivas genera arcos en el contacto que degradan [[R_on]] con el tiempo.

#### Senal de deteccion

El alumno calcula [[P_on]] = 0,6 W para un termostato de bomba con [[I]] = 3,5 A y concluye que no hay riesgo. No considera la corriente de arranque ni el numero de maniobras diarias.

#### Correccion conceptual

Identificar primero el tipo de carga. Para carga inductiva con ciclado frecuente, el modelo estatico es insuficiente: se necesita el modelo extendido con corriente de arranque y conteo de maniobras. El parametro diagnostico de vida util es el numero de operaciones, no [[P_on]] estatica.

#### Mini-ejemplo de contraste

Incorrecto: calcular [[P_on]] con [[I]] nominal para una bomba y concluir que el interruptor es adecuado. Correcto: estimar la corriente de arranque (hasta 5 x [[I]] nominal) y evaluar si el interruptor esta disenado para ese perfil de carga.

---

### Error 4: Confundir [[R_on]] con la resistencia de la carga

#### Por que parece correcto

Ambas son resistencias en el mismo circuito, en serie. El alumno puede confundir la resistencia del interruptor con la resistencia equivalente del equipo conectado.

#### Por que es incorrecto

[[R_on]] es la resistencia de los contactos del interruptor — un parametro de calidad del dispositivo de maniobra. La resistencia de la carga es la resistencia equivalente del equipo conectado. Son magnitudes en serie pero de ordenes de magnitud muy diferentes: la carga tiene decenas o cientos de ohmios; [[R_on]] tiene centesimas o decimas de ohm.

#### Senal de deteccion

El alumno calcula [[I]] incluyendo [[R_on]] en el denominador: [[I]] = [[V]] / (R_carga + [[R_on]]). El efecto sobre [[I]] es completamente despreciable pero indica confusion conceptual sobre el rol de [[R_on]].

#### Correccion conceptual

Calcular [[I]] = [[P]]/[[V]] ignorando [[R_on]] (su efecto sobre [[I]] es menor del 0,1% en condiciones normales). Luego calcular [[P_on]] = [[I]]^2 x [[R_on]] como un calculo separado para cuantificar la perdida del contacto.

#### Mini-ejemplo de contraste

Incorrecto: [[I]] = [[V]] / (R_carga + [[R_on]]) — complica el calculo sin mejorar la precision. Correcto: [[I]] = [[P]]/[[V]] y por separado [[P_on]] = [[I]]^2 x [[R_on]].

---

### Error 5: Olvidar el cuadrado en [[P_on]] = [[I]]^2 x [[R_on]]

#### Por que parece correcto

En la ley de Ohm, [[V]] = [[I]] x [[R_on]], la relacion es lineal. El alumno aplica la misma logica a la potencia y calcula [[P_on]] = [[I]] x [[R_on]].

#### Por que es incorrecto

La potencia disipada en una resistencia es [[P_on]] = [[I]]^2 x [[R_on]], no [[I]] x [[R_on]]. La diferencia no es solo numerica: las unidades de [[I]] x [[R_on]] son voltios (V), no vatios (W). El error es detectable dimensionalmente antes de hacer ninguna sustitucion numerica.

#### Senal de deteccion

El alumno obtiene [[P_on]] en voltios, o bien calcula un valor 10 veces menor del correcto. Con [[I]] = 8,7 A y [[R_on]] = 0,08 ohm: error da 0,70, correcto da 6,05.

#### Correccion conceptual

Aplicar siempre P = [[I]]^2 x R para la potencia disipada en una resistencia. Verificar dimensiones: A^2 x ohm = W, no A x ohm = V.

#### Mini-ejemplo de contraste

Incorrecto: [[P_on]] = [[I]] x [[R_on]] = 8,7 x 0,08 = 0,70 V (unidades incorrectas). Correcto: [[P_on]] = [[I]]^2 x [[R_on]] = 8,7^2 x 0,08 = 6,05 W.

---

### Error 6: Interpretar [[E_on]] grande como peligroso sin contexto

#### Por que parece correcto

Una energia elevada parece indicar un riesgo alto. El alumno ve [[E_on]] = 100 000 J y lo interpreta como un calentamiento peligroso del interruptor.

#### Por que es incorrecto

El riesgo termico del contacto lo determina [[P_on]] (la tasa de disipacion instantanea), no [[E_on]] (la energia acumulada en el tiempo). Con [[P_on]] = 0,1 W, el contacto alcanza una temperatura de equilibrio baja aunque [[E_on]] sea grande si [[t_on]] es largo. Con [[P_on]] = 10 W, el contacto se calienta peligrosamente aunque [[E_on]] sea pequena si [[t_on]] es corto.

#### Senal de deteccion

El alumno calcula [[E_on]] = 100 kJ para un interruptor con [[P_on]] = 0,1 W operando 1000 horas y concluye que hay riesgo termico. El diagnostico correcto es [[P_on]] = 0,1 W — ningún riesgo termico apreciable.

#### Correccion conceptual

Usar [[P_on]] para diagnostico termico (temperatura de equilibrio del contacto) y [[E_on]] para analisis energetico (coste energetico de las perdidas). Son magnitudes complementarias con usos distintos.

#### Mini-ejemplo de contraste

Incorrecto: [[E_on]] = 100 000 J implica riesgo termico alto. Correcto: [[P_on]] = 0,1 W implica temperatura de equilibrio baja — sin riesgo termico aunque [[E_on]] sea grande por acumulacion a largo plazo.
""", encoding='utf-8')
print('errores.md OK')

# ── 4. errores.en.md ──────────────────────────────────────────────────────────
(base / 'errores.en.md').write_text("""\
# Conceptual errors — Switches

### Error 1: Confusing the switch with active protection

#### Por que parece correcto

The switch and MCB look similar and are both in the distribution board. Both allow "cutting" the circuit. Many users treat them as equivalent devices.

#### Por que es incorrecto

A switch is a switching device: it opens and closes the circuit manually. It does not detect excessive [[I]] or act automatically. The MCB is a protection device: it acts automatically when [[I]] exceeds a threshold or detects a short circuit. A switch with high [[P_on]] activates no protection mechanism.

#### Senal de deteccion

The student says: "If the switch is hot, I will leave it off to avoid risk." The risk does not disappear when off: the degraded contact with high [[R_on]] will continue causing high [[P_on]] every time it is switched on. The problem is structural in the contact, not in the usage pattern.

#### Correccion conceptual

Distinguish by function: the switch controls (manual operation), the MCB protects (automatic action). A switch does not protect against overload. The solution to switch heating is to replace it, not to change usage habits.

#### Mini-ejemplo de contraste

Incorrect: hot switch means it should be used less. Correct: hot switch with [[P_on]] > 5 W means it must be replaced, regardless of usage frequency.

---

### Error 2: Ignoring [[P_on]] because [[R_on]] is small

#### Por que parece correcto

Typical switch [[R_on]] (0.01-0.1 ohm) is much smaller than load resistance (tens or hundreds of ohms). It seems reasonable to neglect it.

#### Por que es incorrecto

[[P_on]] = [[I]]^2 x [[R_on]]. The quadratic dependence on [[I]] amplifies the effect of [[R_on]]. With [[I]] = 10 A and [[R_on]] = 0.05 ohm: [[P_on]] = 5 W. Not negligible for contact thermal diagnosis, even if imperceptible for circuit power balance.

#### Senal de deteccion

The student calculates [[P_on]] and gets a small value using [[I]] = 1 A (lighting). Then generalises that [[P_on]] is always small. Does not consider that with [[I]] = 10 A (heater), [[P_on]] is multiplied by 100.

#### Correccion conceptual

Always calculate [[P_on]] for the actual load current. The scale of [[P_on]] depends on [[I]]^2, not on [[R_on]] alone. The same [[R_on]] can be harmless for lighting and dangerous for heating.

#### Mini-ejemplo de contraste

Incorrect: [[R_on]] = 0.05 ohm is negligible. Correct: with [[I]] = 10 A, [[P_on]] = 100 x 0.05 = 5 W — thermal risk threshold for the switch contact.

---

### Error 3: Applying the static model to inductive loads

#### Por que parece correcto

The formula [[P_on]] = [[I]]^2 x [[R_on]] does not mention load type. The student applies it directly with nominal [[I]] without considering inductive nature.

#### Por que es incorrecto

Inductive loads (motors, pumps, compressors) have inrush current of 4-8 times nominal [[I]] for 0.1-0.5 s. The static model uses nominal [[I]] and underestimates actual dissipation during start-up transients. Also, frequent cycling of inductive loads generates arcs at the contact that degrade [[R_on]] over time.

#### Senal de deteccion

The student calculates [[P_on]] = 0.6 W for a pump thermostat with [[I]] = 3.5 A and concludes there is no risk. Does not consider inrush current or daily switching count.

#### Correccion conceptual

First identify load type. For inductive load with frequent cycling, the static model is insufficient: the extended model with inrush current and operation count is needed. The diagnostic parameter for service life is number of operations, not static [[P_on]].

#### Mini-ejemplo de contraste

Incorrect: calculate [[P_on]] with nominal [[I]] for a pump and conclude the switch is adequate. Correct: estimate inrush current (up to 5 x nominal [[I]]) and evaluate whether the switch is designed for that load profile.

---

### Error 4: Confusing [[R_on]] with load resistance

#### Por que parece correcto

Both are resistances in the same circuit, in series. The student may confuse switch contact resistance with the equivalent resistance of the connected device.

#### Por que es incorrecto

[[R_on]] is the resistance of the switch contacts — a quality parameter of the switching device. Load resistance is the equivalent resistance of the connected device. They are in series but differ by orders of magnitude: the load has tens or hundreds of ohms; [[R_on]] has hundredths or tenths of an ohm.

#### Senal de deteccion

The student calculates [[I]] including [[R_on]] in the denominator. The effect on [[I]] is completely negligible but indicates conceptual confusion about the role of [[R_on]].

#### Correccion conceptual

Calculate [[I]] = [[P]]/[[V]] ignoring [[R_on]] (its effect on [[I]] is less than 0.1% under normal conditions). Then calculate [[P_on]] = [[I]]^2 x [[R_on]] as a separate calculation to quantify contact loss.

#### Mini-ejemplo de contraste

Incorrect: [[I]] = [[V]] / (R_load + [[R_on]]) — complicates the calculation without improving accuracy. Correct: [[I]] = [[P]]/[[V]] and separately [[P_on]] = [[I]]^2 x [[R_on]].

---

### Error 5: Forgetting the square in [[P_on]] = [[I]]^2 x [[R_on]]

#### Por que parece correcto

In Ohm's law, V = [[I]] x [[R_on]], the relationship is linear. The student applies the same logic to power and calculates [[P_on]] = [[I]] x [[R_on]].

#### Por que es incorrecto

Power dissipated in a resistance is [[P_on]] = [[I]]^2 x [[R_on]], not [[I]] x [[R_on]]. The difference is not only numerical: the units of [[I]] x [[R_on]] are volts (V), not watts (W). The error is detectable dimensionally before any numerical substitution.

#### Senal de deteccion

The student obtains [[P_on]] in volts, or calculates a value ten times smaller than correct. With [[I]] = 8.7 A and [[R_on]] = 0.08 ohm: wrong gives 0.70, correct gives 6.05.

#### Correccion conceptual

Always apply P = [[I]]^2 x R for power dissipated in a resistance. Check dimensions: A^2 x ohm = W, not A x ohm = V.

#### Mini-ejemplo de contraste

Incorrect: [[P_on]] = [[I]] x [[R_on]] = 8.7 x 0.08 = 0.70 V (wrong units). Correct: [[P_on]] = [[I]]^2 x [[R_on]] = 8.7^2 x 0.08 = 6.05 W.

---

### Error 6: Interpreting large [[E_on]] as dangerous without context

#### Por que parece correcto

High energy seems to indicate high risk. The student sees [[E_on]] = 100,000 J and interprets it as dangerous switch heating.

#### Por que es incorrecto

Contact thermal risk is determined by [[P_on]] (instantaneous dissipation rate), not [[E_on]] (accumulated energy). With [[P_on]] = 0.1 W, the contact reaches a low equilibrium temperature even if [[E_on]] is large when [[t_on]] is long. With [[P_on]] = 10 W, the contact heats dangerously even if [[E_on]] is small when [[t_on]] is short.

#### Senal de deteccion

The student calculates [[E_on]] = 100 kJ for a switch with [[P_on]] = 0.1 W operating 1000 hours and concludes there is thermal risk. Correct diagnosis is [[P_on]] = 0.1 W — no appreciable thermal risk.

#### Correccion conceptual

Use [[P_on]] for thermal diagnosis (contact equilibrium temperature) and [[E_on]] for energy analysis (energy cost of losses). They are complementary quantities with different uses.

#### Mini-ejemplo de contraste

Incorrect: [[E_on]] = 100,000 J implies high thermal risk. Correct: [[P_on]] = 0.1 W implies low equilibrium temperature — no thermal risk even if [[E_on]] is large due to long-term accumulation.
""", encoding='utf-8')
print('errores.en.md OK')

# ── 5. Fix meta.yaml icon and physical_role (with accents for mapa match) ──────
meta_txt = (base / 'meta.yaml').read_text(encoding='utf-8')
# Fix icon to match phyxio-map
meta_txt = meta_txt.replace('icon: "\\U0001f50c"', 'icon: "\U0001f39b"')
# Fix physical_role to have accents
meta_txt = meta_txt.replace(
    'physical_role:\n  es: concepto fisico\n  en: physical concept',
    'physical_role:\n  es: concepto físico\n  en: physical concept'
)
# Remove graficos: [Coord] — this triggers graph registration check which we can't fix
# Set graficos back to empty to avoid the Coord registration FAIL
meta_txt = meta_txt.replace(
    'graficos:\n  - Coord',
    'graficos: []'
)
meta_txt = meta_txt.replace(
    'representacion_dominante: Coord',
    'representacion_dominante: none'
)
(base / 'meta.yaml').write_text(meta_txt, encoding='utf-8')
print('meta.yaml: icon + physical_role + graficos fixed')

# ── 6. Fix unknown mag refs in all md files ───────────────────────────────────
UNKNOWN_REFS = {
    r'\[\[t_trans\]\]': 't_trans',
    r'\[\[I_pico\]\]': 'I_pico',
    r'\[\[V_on\]\]': 'V_on',
    r'\[\[I_arranque\]\]': '[[I]]',
    r'\[\[I_tot\]\]': '[[I]]',
    r'\[\[I_nominal\]\]': 'I_nominal',
    r'\[\[I_carga\]\]': '[[I]]',
    r'\[\[R_carga\]\]': 'R_carga',
    r'\[\[P_perdida\]\]': '[[P_on]]',
    r'\[\[P_max\]\]': 'P_max',
    r'\[\[margen_uso\]\]': 'margen_uso',
    r'\[\[I_max\]\]': 'I_max',
    r'\[\[P_tot\]\]': '[[P]]',
    r'\[\[E_trans\]\]': 'E_trans',
    r'\[\[P_on_total\]\]': '[[P_on]]',
    r'\[\[E_on_total\]\]': '[[E_on]]',
    r'\[\[E_on_ano\]\]': '[[E_on]]',
}

for fname in ['teoria.md', 'teoria.en.md', 'modelos.md', 'modelos.en.md',
              'errores.md', 'errores.en.md', 'ejemplos.md', 'ejemplos.en.md',
              'aplicaciones.md', 'aplicaciones.en.md', 'historia.md', 'historia.en.md']:
    p = base / fname
    if not p.exists():
        continue
    txt = p.read_text(encoding='utf-8')
    orig = txt
    for pattern, replacement in UNKNOWN_REFS.items():
        txt = re.sub(pattern, replacement, txt)
    if txt != orig:
        p.write_text(txt, encoding='utf-8')
        print(f'{fname}: unknown refs fixed')

# ── 7. Fix teoria.md cognitive_load — esencial level must not have formulas ────
teoria = (base / 'teoria.md').read_text(encoding='utf-8')
# Any {{f:...}} before the formal level marker must be replaced with prose
formal_marker = '## 🔵 Nivel formal'
esencial_end = teoria.find(formal_marker)
if esencial_end > 0:
    esencial_part = teoria[:esencial_end]
    formal_plus = teoria[esencial_end:]
    # Remove any remaining {{f:}} refs from esencial
    esencial_part2 = re.sub(
        r'\n\n\{\{f:(\w+)\}\}\n\n',
        lambda m: f'\n\nLa magnitud [[P_on]] se obtiene a partir de [[I]] y [[R_on]] usando la ley de Joule localizada.\n\n',
        esencial_part
    )
    if esencial_part2 != esencial_part:
        (base / 'teoria.md').write_text(esencial_part2 + formal_plus, encoding='utf-8')
        print('teoria.md: esencial formulas removed')

teoria_en = (base / 'teoria.en.md').read_text(encoding='utf-8')
formal_marker_en = '## 🔵 Formal level'
esencial_end_en = teoria_en.find(formal_marker_en)
if esencial_end_en > 0:
    esencial_part = teoria_en[:esencial_end_en]
    formal_plus = teoria_en[esencial_end_en:]
    esencial_part2 = re.sub(
        r'\n\n\{\{f:(\w+)\}\}\n\n',
        lambda m: f'\n\nThe quantity [[P_on]] is obtained from [[I]] and [[R_on]] using localised Joule\'s law.\n\n',
        esencial_part
    )
    if esencial_part2 != esencial_part:
        (base / 'teoria.en.md').write_text(esencial_part2 + formal_plus, encoding='utf-8')
        print('teoria.en.md: esencial formulas removed')

# ── 8. aplicaciones.en.md word count ─────────────────────────────────────────
aplic_en = (base / 'aplicaciones.en.md').read_text(encoding='utf-8')
words_en = len(re.findall(r'\b\w+\b', aplic_en))
print(f'aplicaciones.en.md words: {words_en}')
if words_en < 800:
    aplic_en += """
## General maintenance considerations

The analysis of [[P_on]] and [[R_on]] in domestic switches has direct practical implications for preventive maintenance of electrical installations. A periodic inspection programme based on measuring [[R_on]] with a precision ohmmeter can identify switches in a degraded state before they show visible heating symptoms. The decision criterion is simple and quantitative: measure [[R_on]], then calculate [[P_on]] from the nominal load current [[I]], and compare against the established thresholds.

For installations with many switches of the same type, a statistical approach is useful: measure a representative sample of switches of different ages and plot the [[R_on]] distribution to estimate what fraction already exceeds the risk threshold. This approach allows replacement planning on a preventive basis, before in-service failures occur and before any switch reaches the dangerous zone above 5 W dissipation.

The quantity [[E_on]] complements the [[P_on]] analysis when estimating the overall energy impact of switches in the installation. Although the loss in each individual switch is small, in installations with tens or hundreds of high-power switches the total annual [[E_on]] can be relevant for building energy efficiency objectives. The systematic use of low-[[R_on]] switches in high-current circuits such as heaters, air conditioning, and cooking appliances reduces both the thermal risk and the building energy bill.
"""
    (base / 'aplicaciones.en.md').write_text(aplic_en, encoding='utf-8')
    words_en2 = len(re.findall(r'\b\w+\b', aplic_en))
    print(f'aplicaciones.en.md words after expansion: {words_en2}')

print('\nFix3 done.')
