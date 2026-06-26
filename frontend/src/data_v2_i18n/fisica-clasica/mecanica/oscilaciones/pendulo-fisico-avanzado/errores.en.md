## Conceptual errors

### Error 1: using [[I_cm]] as if it were [[I_O]]

#### Why it seems correct
The center-of-mass moment of inertia often appears in tables and looks like the body's own property.

#### Why it is incorrect
The pendulum rotates about the actual pivot. The dynamic inertia is [[I_O]], including the axis shift through [[d]].

#### Detection signal
The computed period does not change when the pivot is moved, although the experiment changes.

#### Conceptual correction
Apply Steiner before computing [[omega0]] or [[T0]].

#### Mini-example
A ruler has the same [[I_cm]] for all holes, but its period changes when suspended from different points.

### Error 2: confusing [[leq]] with a direct physical length

#### Why it seems correct
Equivalent length is measured in meters and resembles the length of a simple pendulum.

#### Why it is incorrect
[[leq]] is a linear-period equivalence. It need not coincide with any visible body distance.

#### Detection signal
The solution draws [[leq]] as if it were necessarily the distance to the center of mass.

#### Conceptual correction
Use [[leq]] only to compare periods, not to replace the real geometry.

#### Mini-example
A wide body can have [[leq]] larger than the pivot-to-center-of-mass distance.

## Model errors

### Error 3: applying [[T0]] to large amplitudes

#### Why it seems correct
The linear period is simple and works very well in basic exercises.

#### Why it is incorrect
For large angles, sine is not proportional to angle. The nonlinear equation and energy show that the real period increases.

#### Detection signal
The statement mentions finite amplitude or large angles and the solution does not discuss [[theta]].

#### Conceptual correction
State the limit of the linear model and use energy or nonlinear integration if precision is required.

#### Mini-example
A pendulum released from 40 degrees does not have exactly the same period as one released from 3 degrees.

### Error 4: ignoring pivot friction

#### Why it seems correct
Friction may look small and the body still oscillates.

#### Why it is incorrect
If amplitude decays quickly, energy [[E]] is not conserved and the measured period may depend on the observed cycle.

#### Detection signal
Successive maxima decrease clearly during measurement.

#### Conceptual correction
Measure a few low-loss cycles or use a damped model.

#### Mini-example
A tight axis can lengthen or distort the observed period although the geometry is correct.

## Mathematical errors

### Error 5: forgetting inertia units

#### Why it seems correct
The expressions contain many lengths and masses, so preserving meters and kilograms may seem enough.

#### Why it is incorrect
[[I_O]] and [[I_cm]] must be in kg*m^2. If one length is entered in centimeters, the period is badly scaled.

#### Detection signal
The result gives absurdly small or large periods.

#### Conceptual correction
Convert all lengths to meters before using Steiner and the period.

#### Mini-example
Using 20 cm as 20 m makes the shifted-inertia term enormous.

## Interpretation errors

### Error 6: thinking greater mass always increases period

#### Why it seems correct
More mass suggests more inertia and slower motion.

#### Why it is incorrect
Mass also increases gravitational torque. Depending on geometry, part of the mass effect may cancel.

#### Detection signal
The solution reasons only with weight or only with inertia.

#### Conceptual correction
Always analyze the ratio between [[I_O]] and [[m]][[g]][[d]].

#### Mini-example
Two geometrically similar bodies do not change period only because one is heavier if mass distribution scales equally.

## Quick self-control rule

Before closing a problem, check: actual axis identified, [[I_O]] computed or measured, [[d]] taken from pivot to center of mass, SI units, angular amplitude compatible with the linear model, and energy consistency when working beyond small oscillations.
