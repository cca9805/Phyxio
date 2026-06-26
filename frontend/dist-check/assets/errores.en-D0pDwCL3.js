const e=`# Common errors

## Conceptual errors

### Error 1 : Interpreting negative energy as impossible
**Why it seems correct**: In many everyday contexts energy is imagined as always positive.
**Why it is incorrect**: In gravitation [[E0]] = 0 is chosen at infinity; therefore [[U]] and a bound orbit have negative values.
**Detection signal**: The student rejects a bound orbit only because [[E]] < 0.
**Conceptual correction**: Read the sign as a binding criterion, not as existence or non-existence of energy.
**Contrast mini-example**: A satellite in low orbit has negative energy and remains bound precisely for that reason.

### Error 2 : Confusing total and specific energy
**Why it seems correct**: Both classify the orbital state and have equivalent signs.
**Why it is incorrect**: [[E]] depends on [[m]], whereas [[eps]] is energy per unit mass and does not change when satellite mass changes.
**Detection signal**: Two objects are compared using [[E]] without normalizing.
**Conceptual correction**: Use [[eps]] to compare orbital states and [[E]] for total work or energy.
**Contrast mini-example**: Two satellites of different mass in the same orbit have the same [[eps]] but different [[E]].

### Error 3 : Thinking high speed implies escape
**Why it seems correct**: Speed increases [[K]] and seems to always move the state toward escape.
**Why it is incorrect**: Escape depends on the balance with [[U]], which changes with [[r]].
**Detection signal**: The answer decides escape by looking only at [[v]].
**Conceptual correction**: Compute [[eps]] or compare [[K]] and [[U]] before classifying.
**Contrast mini-example**: A large speed near a planet may still be bound if the potential well is deep.

## Model errors

### Error 4 : Using the circular formula in an elliptical orbit
**Why it seems correct**: The circular relation is simple and uses [[r]], which is often available.
**Why it is incorrect**: In an ellipse, [[r]] changes and does not coincide with [[a]] except in special cases.
**Detection signal**: [[r]] is used as semi-major axis without justifying circular motion.
**Conceptual correction**: Use state energy if [[r]] and [[v]] are known, or the bound relation if [[a]] is known.
**Contrast mini-example**: At periapsis and apoapsis of the same ellipse, [[r]] changes but [[E]] does not.

### Error 5 : Conserving energy when drag or thrust exists
**Why it seems correct**: In classroom problems mechanical energy is often conserved.
**Why it is incorrect**: Atmospheric drag, thrust, or maneuvers change [[K]], [[U]], and [[E]] through external work.
**Detection signal**: Atmospheric re-entry is analyzed as a conservative orbit.
**Conceptual correction**: Declare conservation only over intervals without non-conservative forces.
**Contrast mini-example**: A satellite with drag loses energy and descends even if the shape changes gradually.

## Mathematical errors

### Error 6 : Losing the negative sign of potential energy
**Why it seems correct**: The expression contains positive magnitudes and the infinity reference is forgotten.
**Why it is incorrect**: Without the negative sign the bound-orbit criterion disappears.
**Detection signal**: [[U]] is positive and [[E]] becomes artificially greater than zero.
**Conceptual correction**: Keep [[U]] negative with zero reference at infinity.
**Contrast mini-example**: A stable circular orbit must give negative [[E]], not positive.

### Error 7 : Equating instantaneous radius and semi-major axis without condition
**Why it seems correct**: In a circle both lengths coincide.
**Why it is incorrect**: In ellipses, [[r]] depends on the point and [[a]] characterizes the entire orbit.
**Detection signal**: The result for [[E]] changes within the same conservative elliptical orbit.
**Conceptual correction**: Separate state formulas from global orbital formulas.
**Contrast mini-example**: At apoapsis and periapsis [[r]] changes, but semi-major axis [[a]] is the same.

## Interpretation errors

### Error 8 : Not ending with orbital classification
**Why it seems correct**: After computing a number, the exercise seems finished.
**Why it is incorrect**: The physical aim of [[E]] or [[eps]] is to decide bound, escape, or open trajectory.
**Detection signal**: The solution gives joules or J/kg without a final physical sentence.
**Conceptual correction**: Interpret the sign relative to [[E0]].
**Contrast mini-example**: Negative [[eps]] means bound orbit; positive [[eps]] means escape with excess energy.

## Quick self-control rule

Before accepting a solution, check three things: [[U]] must be negative with zero at infinity, [[K]] must be positive, and the sign of [[E]] or [[eps]] must be interpreted. If any of these readings is missing, the answer is incomplete.
`;export{e as default};
