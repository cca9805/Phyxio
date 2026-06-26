const e=`# Common Mistakes

## Conceptual errors

### Error 1: thinking that the field pushes along its own direction

**Why it seems correct**

The analogy with a flow suggests that [[B]] drags the conductor like wind.

**Why it is incorrect**

Force depends on the joint orientation of [[I]] and [[B]], and does not simply point along the field.

**Detection signal**

The drawing places [[F_B]] parallel to the field lines.

**Conceptual correction**

Use the right-hand rule before deciding force direction.

**Mini contrast example**

A conductor perpendicular to the field can move sideways, not toward the source of the field.

## Model errors

### Error 2: using the entire circuit length

**Why it seems correct**

Overgeneralizing the length symbol makes the whole wire look relevant, as if all of it were inside the field.

**Why it is incorrect**

Only the effective length [[L]] crossing the magnetic region contributes to the segment force.

**Detection signal**

The result increases when wires outside the magnet are made longer.

**Conceptual correction**

Mark on the diagram which part of the conductor is inside the field and measure only that segment.

**Mini contrast example**

A long wire with only 5 cm inside the magnet does not use whole metres to calculate [[F_B]].

## Mathematical errors

### Error 3: confusing total force and force per length

**Why it seems correct**

Both magnitudes have similar names and grow with [[I]] and [[B]].

**Why it is incorrect**

[[f_L]] is a linear density; [[F_B]] includes the effective length [[L]].

**Detection signal**

The final unit is N*m^-1 when total force was requested.

**Conceptual correction**

Check whether the requested result is force on a segment or force distributed per metre.

**Mini contrast example**

Two wires with equal [[f_L]] but different exposed lengths have different total forces.

## Interpretation errors

### Error 4: forgetting that reversing current reverses force

**Why it seems correct**

If only magnitude is considered, changing the direction of [[I]] seems to alter nothing.

**Why it is incorrect**

The magnitude may match, but the mechanical direction of force changes.

**Detection signal**

The student predicts the same motion after reversing the supply terminals.

**Conceptual correction**

Separate magnitude calculation from vector direction reading.

**Mini contrast example**

A motor needs commutation because changing directions controls rotation.

## Quick self-control rule

Check four elements before substituting data: conventional current, effective length, field direction, and orientation between conductor and field. If one is missing, the calculation of [[F_B]] is not physically defined yet.

Then check units. If N*m^-1 appears, you are reading [[f_L]]; if N appears, you are reading total force on the segment.
`;export{e as default};
