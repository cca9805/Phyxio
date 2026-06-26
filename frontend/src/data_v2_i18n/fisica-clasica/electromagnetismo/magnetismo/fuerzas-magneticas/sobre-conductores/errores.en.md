## Conceptual errors


### Error 1: thinking that the field pushes along its own direction

**Why it seems correct**

The analogy with a flow suggests that [[campo_magnetico]] drags the conductor like wind.

**Why it is incorrect**

Force depends on the joint orientation of [[intensidad_de_corriente]] and [[campo_magnetico]], and does not simply point along the field.

**Detection signal**

The drawing places [[fuerza_magnetica_sobre_el_conductor]] parallel to the field lines.

**Conceptual correction**

Use the right-hand rule before deciding force direction.

**Mini contrast example**

A conductor perpendicular to the field can move sideways, not toward the source of the field.

## Model errors

**Mini-example of contrast**

Check 1: In Magnetic Force on Conductors, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: using the entire circuit length

**Why it seems correct**

Overgeneralizing the length symbol makes the whole wire look relevant, as if all of it were inside the field.

**Why it is incorrect**

Only the effective length [[longitud_efectiva]] crossing the magnetic region contributes to the segment force.

**Detection signal**

The result increases when wires outside the magnet are made longer.

**Conceptual correction**

Mark on the diagram which part of the conductor is inside the field and measure only that segment.

**Mini contrast example**

A long wire with only 5 cm inside the magnet does not use whole metres to calculate [[fuerza_magnetica_sobre_el_conductor]].

## Mathematical errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: confusing total force and force per length

**Why it seems correct**

Both magnitudes have similar names and grow with [[intensidad_de_corriente]] and [[campo_magnetico]].

**Why it is incorrect**

[[fuerza_magnetica_por_unidad_de_longitud]] is a linear density; [[fuerza_magnetica_sobre_el_conductor]] includes the effective length [[longitud_efectiva]].

**Detection signal**

The final unit is N*m^-1 when total force was requested.

**Conceptual correction**

Check whether the requested result is force on a segment or force distributed per metre.

**Mini contrast example**

Two wires with equal [[fuerza_magnetica_por_unidad_de_longitud]] but different exposed lengths have different total forces.

## Interpretation errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: forgetting that reversing current reverses force

**Why it seems correct**

If only magnitude is considered, changing the direction of [[intensidad_de_corriente]] seems to alter nothing.

**Why it is incorrect**

The magnitude may match, but the mechanical direction of force changes.

**Detection signal**

The student predicts the same motion after reversing the supply terminals.

**Conceptual correction**

Separate magnitude calculation from vector direction reading.

**Mini contrast example**

A motor needs commutation because changing directions controls rotation.

## Quick self-control rule

Check four elements before substituting data: conventional current, effective length, field direction, and orientation between conductor and field. If one is missing, the calculation of [[fuerza_magnetica_sobre_el_conductor]] is not physically defined yet.

Then check units. If N*m^-1 appears, you are reading [[fuerza_magnetica_por_unidad_de_longitud]]; if N appears, you are reading total force on the segment.

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.