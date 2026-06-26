## Conceptual errors


### Error 1: Confusing propagation speed with transverse velocity

**Why it seems correct**

In a simulation or real string, a point moves up and down while the pulse advances. It is natural to call the visible point motion "the speed of the string".

**Why it is incorrect**

[[velocidad_de_propagacion]] measures how fast the shape of the disturbance advances along the string. The transverse velocity of a point describes another motion: how fast that point moves up or down. They are distinct readings.

**Detection signal**

The student says that a larger amplitude automatically implies a larger [[velocidad_de_propagacion]], because points appear to move faster.

**Conceptual correction**

Propagation speed belongs to the medium and is controlled by [[tension_de_la_cuerda]] and [[mu]]. Amplitude affects local motion and may break the model if it is large, but it is not the primary cause of [[velocidad_de_propagacion]] in the linear regime.

**Mini-example**

Two small and large pulses on the same taut string may cross a table in similar times if amplitude remains small. The visible height changes, not the ideal propagation speed.

## Model errors

**Mini-example of contrast**

Check 1: In Wave Speed, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Thinking source [[frecuencia]] decides speed

**Why it seems correct**

In many wave relations, [[velocidad_de_propagacion]], [[frecuencia]], and [[lambda]] appear together. If [[frecuencia]] is increased, it may seem reasonable to expect the wave to travel faster.

**Why it is incorrect**

In an ideal uniform string, the medium decides speed. If [[tension_de_la_cuerda]] and [[mu]] do not change, varying [[frecuencia]] modifies the associated [[lambda]]. The source sets rhythm; the string sets speed.

**Detection signal**

The student claims that shaking the string at twice the [[frecuencia]] doubles [[velocidad_de_propagacion]] even though tension and string are unchanged.

**Conceptual correction**

First compute or measure [[velocidad_de_propagacion]] from the medium. Then relate [[frecuencia]] and [[lambda]] to that speed.

**Mini-example**

A string kept at the same tension is excited at 10 Hz and then at 20 Hz. The ideal speed is conserved; the spatial separation between crests is reduced in the second excitation.

## Mathematical errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Using grams per meter as kilograms per meter

**Why it seems correct**

Manufacturers and labs often give linear mass in g/m. The number looks small and is entered directly into a calculator.

**Why it is incorrect**

The mechanical formula uses SI units. [[mu]] must be expressed in kg/m so that [[tension_de_la_cuerda]] in newtons produces [[velocidad_de_propagacion]] in m/s. Not converting changes the result by a large factor.

**Detection signal**

The resulting [[velocidad_de_propagacion]] is far too small for a taut string or does not match observable travel times.

**Conceptual correction**

Before computing, convert grams per meter to kilograms per meter. The dimensional check must end in `[L T⁻¹]`.

**Mini-example**

A string with linear mass 2 g/m must be entered as 0.002 kg/m. Using 2 kg/m describes a string thousands of times more inertial.

## Interpretation errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Believing string length fixes local speed

**Why it seems correct**

In standing waves, length [[longitud_efectiva]] appears in the allowed frequencies. That makes it tempting to think [[longitud_efectiva]] also directly causes propagation speed.

**Why it is incorrect**

In an ideal uniform string, [[longitud_efectiva]] does not decide local speed. Length decides which patterns fit between endpoints; [[tension_de_la_cuerda]] and [[mu]] decide how fast the disturbance travels.

**Detection signal**

The student changes [[longitud_efectiva]] in a traveling-pulse problem and expects [[velocidad_de_propagacion]] to change although tension and linear density remain the same.

**Conceptual correction**

Separate local propagation from boundary condition. First interpret [[velocidad_de_propagacion]] as a mechanical property; then use [[longitud_efectiva]] if the problem asks for resonance or modes.

**Mini-example**

Two segments of the same string, with the same tension and linear density, transmit a pulse with the same ideal speed even if one is longer. The total travel time changes.

## Quick self-control rule

Before accepting a result, check three things: [[tension_de_la_cuerda]] in newtons, [[mu]] in kg/m, and positive [[velocidad_de_propagacion]]. If the problem mentions [[frecuencia]], ask whether it is being used to find [[lambda]] or whether it has been confused with the mechanical cause of speed.

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.