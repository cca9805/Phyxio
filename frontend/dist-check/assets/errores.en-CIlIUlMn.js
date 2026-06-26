const e=`# Common Mistakes

## Conceptual errors

### Error 1: imagining the field as a forward push

**Why it seems correct**

The incorrect analogy with wind or flow suggests that [[B]] drags the particle along its own direction.

**Why it is incorrect**

For a moving charge, [[F_B]] is perpendicular to [[v]] and [[B]]. The field is not a forward push.

**Detection signal**

The student draws the force parallel to the field or parallel to the path.

**Conceptual correction**

Read the geometry first: motion, field, and force form perpendicular directions in the ideal case.

**Mini contrast example**

A charge entering perpendicularly into a uniform field does not move toward the field lines; it bends sideways.

## Model errors

### Error 2: always applying circular trajectory

**Why it seems correct**

Overgeneralizing the perpendicular case makes the student forget that [[s_theta]] can vary.

**Why it is incorrect**

Only the perpendicular component produces the simple circular curvature. With a parallel component, ideal motion becomes helical.

**Detection signal**

The student uses [[r]] without checking whether entry is perpendicular to [[B]].

**Conceptual correction**

Before computing radius, decide whether motion is perpendicular, parallel, or mixed relative to the field.

**Mini contrast example**

A particle parallel to the field may have appreciable [[q]], [[v]], and [[B]], yet show no magnetic curvature.

## Mathematical errors

### Error 3: turning charge sign into negative radius

**Why it seems correct**

Confusing magnitudes with orientation leads to inserting the sign of [[q]] into every result.

**Why it is incorrect**

[[r]] is a positive length. The sign of [[q]] decides rotation sense, not a negative distance.

**Detection signal**

A negative radius appears, or an answer is rejected because of its sign.

**Conceptual correction**

Compute magnitudes for [[F_B]] and [[r]], then analyze vector direction in a separate step.

**Mini contrast example**

A proton and an electron with equal charge magnitude can have equal radius and curve toward opposite sides.

## Interpretation errors

### Error 4: reading acceleration as speed increase

**Why it seems correct**

In basic mechanics, acceleration is often associated with going faster, without distinguishing direction.

**Why it is incorrect**

In the perpendicular magnetic case, [[a_c]] changes the direction of [[v]] and does not represent ideal tangential acceleration.

**Detection signal**

The student says that the magnetic field gives kinetic energy by itself.

**Conceptual correction**

Relate [[a_c]] to curvature and reserve speed change for forces with a tangential component.

**Mini contrast example**

A particle describing a circle can keep constant speed while continuously changing direction.

## Quick self-control rule

Before closing an exercise, check four questions. First, whether the particle has [[q]] and [[v]]. Second, whether motion has a perpendicular component measured by [[s_theta]]. Third, whether the question asks for magnitude or direction. Fourth, whether using [[r]] requires uniform field and perpendicular entry.

If any answer is unclear, do not substitute numbers yet. Most mistakes in this leaf come from jumping directly to [[F_B]] without deciding the geometry.

A reliable final check is to describe the result in one sentence before trusting it. If the sentence cannot explain direction, curvature, and the role of [[B]], the calculation is probably incomplete.
`;export{e as default};
