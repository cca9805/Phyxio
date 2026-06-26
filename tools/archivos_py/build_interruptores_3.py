"""Build interruptores leaf - errores, ejemplos, historia, aplicaciones."""
from pathlib import Path

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/interruptores')

# ── errores.md ────────────────────────────────────────────────────────────────
(base / 'errores.md').write_text("""\
# Errores frecuentes en interruptores

## Errores conceptuales

### Error 1: Confundir el interruptor con una protección activa

**Descripción del error:** Creer que un interruptor puede proteger el circuito frente a sobrecargas o cortocircuitos, como si fuera un fusible o un magnetotérmico.

**Por qué ocurre:** El interruptor y el fusible tienen aspecto similar y ambos están en el circuito. El alumno generaliza que cualquier elemento que "corta" el circuito tiene función de protección.

**Por qué es incorrecto:** El interruptor abre o cierra el circuito por acción manual o por señal de control, pero no responde automáticamente a un exceso de corriente. Si la corriente supera [[I]] nominal, el interruptor no actúa — simplemente conduce con mayor [[P_on]] y se degrada más rápido. La protección activa la realiza el magnetotérmico (sobrecorriente) o el diferencial (fuga).

**Cómo corregirlo:** Distinguir claramente entre dispositivos de maniobra (interruptor: apertura/cierre controlada) y dispositivos de protección (fusible, magnetotérmico: apertura automática por condición anormal). El interruptor no tiene umbral de actuación propio.

**Indicador de superación:** El alumno puede explicar qué ocurre si la [[I]] supera el nominal de la carga mientras el interruptor está en ON: la corriente sigue fluyendo, el interruptor se calienta más, y el magnetotérmico del circuito debería actuar.

### Error 2: Ignorar [[P_on]] porque [[R_on]] es pequeña

**Descripción del error:** Asumir que porque [[R_on]] es del orden de miliohmios o centésimas de ohmio, la pérdida [[P_on]] es siempre negligible.

**Por qué ocurre:** La intuición indica que una resistencia pequeña no puede causar problemas. El alumno no aplica la dependencia cuadrática de [[P_on]] con [[I]].

**Por qué es incorrecto:** Con [[I]] = 10 A (carga de 2 300 W a 230 V) y [[R_on]] = 0,05 Ω (razonable para un interruptor moderadamente envejecido), [[P_on]] = 100 × 0,05 = 5 W. Eso es suficiente para un calentamiento apreciable en uso continuo. La clave es que [[P_on]] escala con [[I]]², no con [[I]].

**Cómo corregirlo:** Calcular siempre el producto [[I]]² · [[R_on]] antes de descartar la pérdida. Para circuitos de alta corriente, incluso [[R_on]] pequeñas generan [[P_on]] significativas.

**Indicador de superación:** El alumno puede determinar el valor de [[R_on]] por encima del cual [[P_on]] se convierte en un problema para una corriente dada.

## Errores de modelo

### Error 3: Aplicar el modelo estático a cargas inductivas

**Descripción del error:** Calcular [[P_on]] = [[I_nominal]]² · [[R_on]] para un interruptor que conmuta un motor, sin considerar la corriente de arranque.

**Por qué ocurre:** El modelo estático es más simple y el alumno lo aplica sin verificar las hipótesis de validez.

**Por qué es incorrecto:** Al cerrar el interruptor, la corriente de arranque del motor puede ser 5–10 veces [[I_nominal]] durante 50–200 ms. La energía disipada en ese transitorio es E_trans = [[I_arranque]]² · [[R_on]] · [[t_trans]], que puede ser mayor que la energía disipada en horas de conducción estacionaria.

**Cómo corregirlo:** Verificar primero si la carga es resistiva (R_on estático aplica) o inductiva/capacitiva (modelo extendido con transitorio). Si hay arranque de motor, estimar la corriente de arranque y la duración del transitorio.

**Indicador de superación:** El alumno identifica correctamente cuándo el modelo estático subestima la degradación y propone el modelo correcto.

### Error 4: Confundir [[R_on]] con la resistencia de la carga

**Descripción del error:** Incluir [[R_on]] del interruptor en el cálculo de [[I]] = [[V]] / ([[R_carga]] + [[R_on]]) como si fuera una resistencia en serie relevante.

**Por qué ocurre:** El alumno recuerda la ley de Ohm para circuitos con resistencias en serie y la aplica mecánicamente.

**Por qué es incorrecto:** [[R_on]] es típicamente 0,01–0,1 Ω, mientras que [[R_carga]] para una bombilla de 100 W a 230 V es [[V]]²/[[P]] = 529 Ω. La corrección relativa de [[R_on]] sobre [[I]] es menor del 0,02 % — despreciable a todos los efectos prácticos. [[R_on]] solo importa para calcular la pérdida local [[P_on]] en el propio interruptor, no para modificar [[I]].

**Cómo corregirlo:** [[R_on]] se usa exclusivamente para [[P_on]] = [[I]]² · [[R_on]]. Para el cálculo de [[I]] del circuito, [[R_on]] es despreciable frente a [[R_carga]].

**Indicador de superación:** El alumno calcula [[I]] sin incluir [[R_on]] y luego usa esa [[I]] para calcular [[P_on]] por separado.

## Errores matemáticos

### Error 5: Olvidar el cuadrado en [[P_on]] = [[I]]² · [[R_on]]

**Descripción del error:** Calcular [[P_on]] = [[I]] · [[R_on]] (sin cuadrar [[I]]).

**Por qué ocurre:** El alumno confunde la ley de Joule ([[P]] = [[I]]² · R) con la ley de Ohm ([[V]] = [[I]] · R) y usa la forma lineal en lugar de la cuadrática.

**Por qué es incorrecto:** La potencia disipada en una resistencia es siempre [[P]] = [[I]]² · R = [[V]]²/R = [[I]] · [[V]]. Omitir el cuadrado en la primera expresión da un resultado con dimensiones incorrectas: A · Ω = V, no W.

**Cómo corregirlo:** Verificar siempre dimensionalmente: A² · Ω = W. Si el resultado tiene unidades de voltios, hay un error de formulación.

**Indicador de superación:** El alumno detecta el error dimensional antes de calcular numéricamente.

## Errores de interpretación

### Error 6: Interpretar [[E_on]] grande como peligroso sin contexto

**Descripción del error:** Calcular [[E_on]] en joules para un período largo y concluir que hay un riesgo importante sin comparar con la potencia instantánea [[P_on]].

**Por qué ocurre:** Los joules parecen una cantidad grande (miles de julios para un día de uso) y el alumno los interpreta como energía peligrosa.

**Por qué es incorrecto:** La peligrosidad térmica depende de la potencia instantánea [[P_on]] y de la disipación térmica del encapsulado, no de la energía acumulada. Un interruptor con [[P_on]] = 0,1 W acumula [[E_on]] = 8 640 J en un día — una cantidad de energía que parece grande pero equivale a calentar 20 cm³ de agua unos 100 K sin flujo de calor al exterior. Si el interruptor tiene buena disipación, esa energía se disipa continuamente y la temperatura de equilibrio es baja.

**Cómo corregirlo:** El criterio de riesgo es [[P_on]] (potencia instantánea), no [[E_on]] (energía acumulada). [[E_on]] es útil para el análisis de costes energéticos, no para el diagnóstico de riesgo térmico.

**Indicador de superación:** El alumno puede distinguir entre los dos usos de [[E_on]]: diagnóstico de riesgo (usar [[P_on]]) y análisis energético (usar [[E_on]]).

## Regla de autocontrol rápido

Antes de dar por válido un cálculo de interruptores, verificar:
1. ¿[[I]] = [[P]] / [[V]] o [[I]] = [[V]] / [[R_carga]]? (ambas formas son equivalentes; usar la que tiene datos disponibles)
2. ¿[[P_on]] = [[I]]² · [[R_on]] con [[I]] elevado al cuadrado?
3. ¿[[E_on]] = [[P_on]] · [[t_on]] con [[t_on]] en segundos para obtener joules?
4. ¿El valor de [[P_on]] tiene sentido físico? < 0,01 W → negligible; 1–5 W → vigilar; > 5 W → riesgo.
5. ¿Se ha verificado que la carga es resistiva? Si no, el modelo estático puede subestimar la degradación.
""", encoding='utf-8')
print('errores.md OK')

# ── errores.en.md ─────────────────────────────────────────────────────────────
(base / 'errores.en.md').write_text("""\
# Frequent errors in switches

## Conceptual errors

### Error 1: Confusing the switch with active protection

**Error description:** Believing a switch can protect the circuit against overloads or short circuits, as if it were a fuse or MCB.

**Why it occurs:** The switch and fuse look similar and both are in the circuit. The student generalises that any element that "breaks" the circuit has a protective function.

**Why it is incorrect:** The switch opens or closes the circuit by manual action or control signal, but does not automatically respond to excess current. If the current exceeds nominal [[I]], the switch does not act — it simply conducts with higher [[P_on]] and degrades faster. Active protection is provided by the MCB (overcurrent) or RCD (leakage).

**How to correct it:** Clearly distinguish between switching devices (switch: controlled opening/closing) and protection devices (fuse, MCB: automatic opening under abnormal condition). The switch has no own actuation threshold.

**Mastery indicator:** The student can explain what happens if [[I]] exceeds the load nominal while the switch is ON: current keeps flowing, the switch heats up more, and the circuit MCB should trip.

### Error 2: Ignoring [[P_on]] because [[R_on]] is small

**Error description:** Assuming that because [[R_on]] is in the order of milliohms or hundredths of an ohm, the loss [[P_on]] is always negligible.

**Why it occurs:** Intuition suggests a small resistance cannot cause problems. The student does not apply the quadratic dependence of [[P_on]] on [[I]].

**Why it is incorrect:** With [[I]] = 10 A (2,300 W load at 230 V) and [[R_on]] = 0.05 Ω (reasonable for a moderately aged switch), [[P_on]] = 100 × 0.05 = 5 W. That is enough for noticeable heating in continuous use. The key is that [[P_on]] scales with [[I]]², not with [[I]].

**How to correct it:** Always calculate the product [[I]]² · [[R_on]] before dismissing the loss. For high-current circuits, even small [[R_on]] values generate significant [[P_on]].

**Mastery indicator:** The student can determine the [[R_on]] value above which [[P_on]] becomes a problem for a given current.

## Model errors

### Error 3: Applying the static model to inductive loads

**Error description:** Calculating [[P_on]] = I_nominal² · [[R_on]] for a switch commuting a motor, without considering inrush current.

**Why it occurs:** The static model is simpler and the student applies it without checking validity hypotheses.

**Why it is incorrect:** When the switch closes, the motor inrush current can be 5–10 times I_nominal for 50–200 ms. The energy dissipated in that transient can exceed the energy dissipated in hours of steady-state conduction.

**How to correct it:** First check whether the load is resistive (static model applies) or inductive/capacitive (extended model with transient). If there is motor start-up, estimate the inrush current and transient duration.

**Mastery indicator:** The student correctly identifies when the static model underestimates degradation and proposes the correct model.

### Error 4: Confusing [[R_on]] with the load resistance

**Error description:** Including [[R_on]] of the switch in the calculation [[I]] = [[V]] / (R_load + [[R_on]]) as if it were a relevant series resistance.

**Why it occurs:** The student recalls Ohm's law for series circuits and applies it mechanically.

**Why it is incorrect:** [[R_on]] is typically 0.01–0.1 Ω, while R_load for a 100 W bulb at 230 V is [[V]]²/[[P]] = 529 Ω. The relative correction of [[R_on]] on [[I]] is less than 0.02% — negligible in all practical terms. [[R_on]] only matters for calculating local loss [[P_on]] in the switch itself, not for modifying [[I]].

**How to correct it:** [[R_on]] is used exclusively for [[P_on]] = [[I]]² · [[R_on]]. For circuit [[I]] calculation, [[R_on]] is negligible compared to the load resistance.

**Mastery indicator:** The student calculates [[I]] without including [[R_on]] and then uses that [[I]] to calculate [[P_on]] separately.

## Mathematical errors

### Error 5: Forgetting the square in [[P_on]] = [[I]]² · [[R_on]]

**Error description:** Calculating [[P_on]] = [[I]] · [[R_on]] (without squaring [[I]]).

**Why it occurs:** The student confuses Joule's law ([[P]] = [[I]]² · R) with Ohm's law ([[V]] = [[I]] · R) and uses the linear form instead of the quadratic.

**Why it is incorrect:** Power dissipated in a resistance is always [[P]] = [[I]]² · R = [[V]]²/R = [[I]] · [[V]]. Omitting the square in the first expression gives a result with incorrect dimensions: A · Ω = V, not W.

**How to correct it:** Always verify dimensionally: A² · Ω = W. If the result has units of volts, there is a formulation error.

**Mastery indicator:** The student detects the dimensional error before numerical calculation.

## Interpretation errors

### Error 6: Interpreting large [[E_on]] as dangerous without context

**Error description:** Calculating [[E_on]] in joules over a long period and concluding there is a significant risk without comparing with instantaneous power [[P_on]].

**Why it occurs:** Joules seem like a large quantity (thousands of joules for a day of use) and the student interprets them as dangerous energy.

**Why it is incorrect:** Thermal hazard depends on instantaneous power [[P_on]] and enclosure thermal dissipation, not on accumulated energy. A switch with [[P_on]] = 0.1 W accumulates [[E_on]] = 8,640 J in a day — a quantity that seems large but is equivalent to heating 20 cm³ of water by about 100 K without heat flow to the outside. If the switch has good dissipation, that energy is continuously dissipated and the equilibrium temperature is low.

**How to correct it:** The risk criterion is [[P_on]] (instantaneous power), not [[E_on]] (accumulated energy). [[E_on]] is useful for energy cost analysis, not for thermal risk diagnosis.

**Mastery indicator:** The student can distinguish between the two uses of [[E_on]]: risk diagnosis (use [[P_on]]) and energy analysis (use [[E_on]]).

## Quick self-control rule

Before accepting a switch calculation as valid, check:
1. Is [[I]] = [[P]] / [[V]] or [[I]] = [[V]] / R_load? (both forms are equivalent; use the one with available data)
2. Is [[P_on]] = [[I]]² · [[R_on]] with [[I]] squared?
3. Is [[E_on]] = [[P_on]] · [[t_on]] with [[t_on]] in seconds to get joules?
4. Does the [[P_on]] value make physical sense? < 0.01 W → negligible; 1–5 W → monitor; > 5 W → risk.
5. Has the load been verified as resistive? If not, the static model may underestimate degradation.
""", encoding='utf-8')
print('errores.en.md OK')

# ── historia.md ───────────────────────────────────────────────────────────────
(base / 'historia.md').write_text("""\
# Historia de los interruptores eléctricos

## Orígenes del interruptor eléctrico

Los primeros interruptores eléctricos domésticos aparecieron en la década de 1880, coincidiendo con la electrificación de las ciudades impulsada por Thomas Edison y sus contemporáneos. Los primeros modelos eran simples láminas metálicas que se presionaban para hacer contacto — el interruptor de cuchilla. La resistencia de contacto [[R_on]] era alta y variable porque el problema de los contactos de baja resistencia no estaba resuelto. El calentamiento de los contactos ([[P_on]] elevada) era una queja habitual de los usuarios.

## El problema de la resistencia de contacto

A lo largo del siglo XX, la ingeniería de contactos eléctricos se convirtió en una disciplina independiente. El problema central era reducir [[R_on]] y mantenerla baja durante toda la vida útil del interruptor. Se desarrollaron aleaciones específicas para contactos (plata-cadmio, plata-óxido de estaño) que combinaban buena conductividad eléctrica con resistencia al arco y a la oxidación.

El concepto de [[P_on]] = [[I]]² · [[R_on]] orientó el diseño: para las mismas corrientes, un contacto con [[R_on]] diez veces menor generaba cien veces menos calor. Esto impulsó la investigación de materiales y geometrías de contacto que minimizaran [[R_on]] sin comprometer la robustez mecánica.

## Normalización y seguridad doméstica

La normalización eléctrica doméstica del siglo XX estableció los valores nominales de corriente para los interruptores de alumbrado (generalmente 10 A en Europa) y de los interruptores de fuerza (16 A o más). Estas normas fijaron implícitamente el margen entre [[I]] real y el límite que define cuándo [[P_on]] se vuelve peligrosa. La norma IEC 60669 regula actualmente los interruptores de instalación doméstica en Europa, especificando ensayos de resistencia de contacto y durabilidad (número de maniobras).

## El interruptor electrónico y el MOSFET

En la segunda mitad del siglo XX, los interruptores electrónicos de estado sólido (tiristores, transistores de potencia, MOSFETs) comenzaron a desplazar a los contactos mecánicos en aplicaciones de alta frecuencia de maniobra. El parámetro [[R_on]] cobró nuevo significado: en un MOSFET de potencia, [[R_on]] (denominado R_DS(on)) puede ser de miliohmios, pero las corrientes son de decenas o centenares de amperios, haciendo que [[P_on]] sea el parámetro de diseño dominante del convertidor.

## Relevancia actual

Hoy, el interruptor mecánico doméstico es un componente maduro y altamente normalizado. Sin embargo, la proliferación de cargas electrónicas (LED, fuentes conmutadas, motores de velocidad variable) ha aumentado el contenido armónico de las corrientes, lo que puede incrementar la corriente eficaz [[I]] más allá de lo que sugiere la potencia activa [[P]], afectando a [[P_on]] de forma no intuitiva. La comprensión de [[R_on]] y [[P_on]] sigue siendo relevante para el diagnóstico y el mantenimiento de instalaciones eléctricas domésticas.
""", encoding='utf-8')
print('historia.md OK')

# ── historia.en.md ─────────────────────────────────────────────────────────────
(base / 'historia.en.md').write_text("""\
# History of electrical switches

## Origins of the electrical switch

The first domestic electrical switches appeared in the 1880s, coinciding with the electrification of cities driven by Thomas Edison and his contemporaries. Early models were simple metal blades pressed to make contact — the knife switch. Contact resistance [[R_on]] was high and variable because the problem of low-resistance contacts was unsolved. Contact heating (high [[P_on]]) was a common user complaint.

## The contact resistance problem

Throughout the 20th century, electrical contact engineering became an independent discipline. The central problem was reducing [[R_on]] and keeping it low throughout the switch service life. Specific contact alloys were developed (silver-cadmium, silver-tin oxide) that combined good electrical conductivity with resistance to arc and oxidation.

The concept of [[P_on]] = [[I]]² · [[R_on]] guided design: for the same currents, a contact with ten times lower [[R_on]] generated one hundred times less heat. This drove research into materials and contact geometries that minimised [[R_on]] without compromising mechanical robustness.

## Standardisation and domestic safety

Twentieth-century domestic electrical standardisation established nominal current values for lighting switches (generally 10 A in Europe) and power switches (16 A or more). These standards implicitly set the margin between actual [[I]] and the limit that defines when [[P_on]] becomes dangerous. Standard IEC 60669 currently regulates domestic installation switches in Europe, specifying contact resistance tests and durability (number of operations).

## The electronic switch and the MOSFET

In the second half of the 20th century, solid-state electronic switches (thyristors, power transistors, MOSFETs) began to replace mechanical contacts in high-frequency switching applications. The parameter [[R_on]] took on new significance: in a power MOSFET, [[R_on]] (called R_DS(on)) can be milliohms, but currents are tens or hundreds of amperes, making [[P_on]] the dominant design parameter of the converter.

## Current relevance

Today, the domestic mechanical switch is a mature and highly standardised component. However, the proliferation of electronic loads (LEDs, switched-mode supplies, variable-speed motors) has increased the harmonic content of currents, which can increase the effective current [[I]] beyond what active power [[P]] suggests, affecting [[P_on]] in a non-intuitive way. Understanding [[R_on]] and [[P_on]] remains relevant for diagnosis and maintenance of domestic electrical installations.
""", encoding='utf-8')
print('historia.en.md OK')

print('\nPhase 3 done.')
