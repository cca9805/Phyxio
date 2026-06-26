const e=`# Common mistakes in Ampere's law

## Conceptual errors

### Error 1: counting nearby current as enclosed current

**Why it seems correct**

The intuitive analogy says that a nearby current should influence every nearby field, so the student counts it automatically.

**Why it is incorrect**

The law uses [[I_enc]], not nearby current. Only current crossing the surface bounded by the chosen curve matters.

**Detection signal**

The result changes when an external current is moved, even though the curve does not enclose it.

**Conceptual correction**

Draw the curve, choose the surface, and count only real current crossings.

**Contrast mini-example**

A parallel current outside a circle may modify local [[B]], but it does not add enclosed current. The net circulation associated with that curve still depends on internal crossings.

## Model errors

### Error 2: choosing a curve without symmetry

**Why it seems correct**

It seems that any closed curve works because the law is written for closed curves.

**Why it is incorrect**

Ampere always imposes a global condition, but it calculates [[B]] directly only if the curve makes the field constant, tangent, or zero by segments.

**Detection signal**

The student multiplies a length by a field that has not been justified as constant.

**Conceptual correction**

Choose circles for long wires and rectangles for long solenoids; if symmetry is absent, switch model.

**Contrast mini-example**

An irregular curve around a wire encloses the same current as a circle, but it does not let [[B]] leave the integral. The circle uses symmetry.

## Mathematical errors

### Error 3: losing orientation

**Why it seems correct**

The calculation looks scalar and sign feels like a later detail.

**Why it is incorrect**

[[C_B]] and [[I_enc]] are oriented quantities. Changing traversal direction changes the associated positive normal and the sign of current.

**Detection signal**

The final sign contradicts the right-hand rule.

**Conceptual correction**

Fix traversal direction first, then assign the sign of each current according to whether it crosses the positive or negative surface.

**Contrast mini-example**

If the curve traversal is reversed, the positive-current criterion must reverse too. Changing one without the other creates a false sign.

## Interpretation errors

### Error 4: thinking zero circulation means zero field

**Why it seems correct**

A zero net sum is confused with absence of field at every point.

**Why it is incorrect**

[[C_B]] may vanish by global cancellation even when local values of [[B]] exist on the curve.

**Detection signal**

The student concludes that there is no field only because net enclosed current is zero.

**Conceptual correction**

Zero circulation means zero closed balance, not zero local field.

**Contrast mini-example**

Two opposite currents enclosed by the same curve may give zero net current. Even so, near each conductor there may be appreciable field.

## Quick self-control rule

Before calculating, answer four questions: which curve is used, which traversal direction was chosen, which current crosses the surface, and which symmetry simplifies [[B]]. If any answer is unclear, do not substitute data.

This rule is deliberately operational. It forces the student to validate geometry, orientation, source, and model before doing arithmetic, which is exactly where most Ampere-law mistakes begin.
`;export{e as default};
