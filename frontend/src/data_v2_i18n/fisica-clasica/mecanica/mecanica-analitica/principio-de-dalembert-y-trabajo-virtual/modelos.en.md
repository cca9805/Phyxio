## Ideal model

The ideal model considers particles or bodies with masses [[m]], active forces [[F]], and accelerations [[a]], subject to ideal constraints. Virtual displacements [[dr]] are instantaneous, compatible, and do not move the system outside its allowed geometry.

The central simplification is that ideal reactions contribute no net virtual work. Therefore the balance of [[Wv]] can be written without computing every reaction, and dynamics is expressed through generalized forces [[Qj]].

## Hypotheses

- Masses [[m]] are positive and constant.
- Constraints are ideal.
- Virtual displacements [[dr]] respect the restrictions.
- Active forces [[F]] can be projected onto generalized coordinates.
- Acceleration [[a]] corresponds to the same element as the applied force.
- There are no impacts or impulsive discontinuities in the analyzed interval.

## Quantitative validity domain

If [[F]] is in newtons and [[dr]] in meters, [[Wv]] is estimated in joules. For millimetric virtual displacements and forces of tens of newtons, elementary virtual work is of order hundredths of a joule. That scale helps detect unit errors.

In angular coordinates, [[Qj]] usually has torque units. A moderate force applied with a short arm may produce a generalized contribution numerically smaller than the force, while remaining decisive for the equation.

As a quantitative criterion, if the magnitude of [[Wv]] exceeds 10^-3 J for a 1 mm virtual variation in a small apparatus, the projected effective force should be checked against the system scale. The expected order of magnitude is O(force times virtual displacement), not accumulated real energy.

## Model failure signals

One failure signal is eliminating a constraint reaction that actually performs virtual work. Another is using virtual displacements that cross a wall, stretch an inextensible string, or break a guide. The model also fails if [[dr]] is confused with real displacement over a time interval.

The model may fail with friction, non-ideal contacts, velocity-dependent constraints, or impacts. In those cases, eliminating reactions without analyzing energy or impulse produces incomplete equations.

## Extended or alternative model

The extended model incorporates friction forces, Lagrange multipliers, non-potential generalized forces, or non-holonomic restrictions treated carefully. It can also be combined with the variational principle to obtain the Lagrange-D'Alembert form.

If reactions are desired, one may first solve the reduced motion and then return to the full equations. The principle does not forbid computing reactions; it shows when they are unnecessary for obtaining evolution.

One should switch to the extended model when the eliminated reaction has a component along [[dr]], when measurable dissipation appears, or when the constraint imposes a velocity condition that cannot be integrated as simple geometry. In those cases, cancelling reactions by routine breaks the physics of the problem.

## Operational comparison

- Direct Newton: computes forces and reactions component by component.
- Static virtual work: eliminates ideal reactions without inertial terms.
- D'Alembert: adds the inertial term to handle dynamics.
- Lagrange-D'Alembert: expresses the result in generalized coordinates.
- Selection criterion: use this model when constraints are ideal and compatible coordinates simplify the problem.
