const e=`# Hamilton's Equations

## Conceptual Context

Hamilton's equations describe the evolution of a system using canonical coordinates and conjugate momenta. After the Hamiltonian [[H]] has been built, the state is no longer read as position and velocity, but as a point in phase space formed by [[qi]] and [[p]]. The physical question changes: one does not only seek a trajectory, but the field that indicates where each phase point moves.

This leaf naturally follows the Legendre transformation. There, the passage from velocities to momenta was justified; here, the result is used to generate motion. The Hamiltonian is not only a quantity to compute: its slopes produce the rates of change of coordinate and momentum.

## 🟢 Essential Level

The essential idea is that the state moves in a phase plane. One component of motion says how the coordinate changes; the other says how momentum changes. These two components are not invented separately: they come from slopes of the Hamiltonian taken in different directions.

The slope in the momentum direction governs coordinate advance. The slope in the coordinate direction governs momentum change, but with opposite sign. This sign asymmetry is the mark of canonical structure: the equations are not two identical derivatives, but a rotation of the energy gradient that produces phase flow.

At the essential level, it is useful to imagine the Hamiltonian as a landscape and the state as a point that does not simply slide downhill. Canonical structure rotates that information and turns it into motion around level curves. This image explains why continuous evolution can occur even while the energy value remains fixed.

## 🔵 Formal Level

The first Hamilton equation defines the canonical velocity of the coordinate:

{{f:ecuacion_hamilton_q}}

The second equation defines the time evolution of the conjugate momentum:

{{f:ecuacion_hamilton_p}}

For several degrees of freedom, the indexed form is used. It does not change the physical criterion: it repeats the same structure for each compatible canonical pair:

{{f:ecuaciones_hamilton_indexadas}}

For a regular harmonic mode, the Hamiltonian can be written as a kinetic part in [[p]] plus a potential part in [[qi]]:

{{f:hamiltoniano_oscilador}}

Applying the first equation to that Hamiltonian gives the canonical velocity:

{{f:qdot_oscilador}}

Applying the second equation gives the restoring force written as momentum change:

{{f:pdot_oscilador}}

The evolution of [[H]] along motion is tied to its explicit time dependence:

{{f:conservacion_hamiltoniano}}

These expressions show the formal contract of the leaf. First write [[H]] in canonical variables; then compute its slopes; finally interpret the pair formed by [[qd]] and [[pd]] as the vector that moves the state in phase space.

In this reading, [[DHp]] and [[DHq]] are not symbolic decoration: they are the two local slopes used by the system to decide its instantaneous evolution. [[DHp]] becomes the horizontal coordinate flow, whereas [[DHq]] becomes the vertical momentum flow with opposite sign. The magnitude [[dHdt]] summarizes a different question: it does not ask where the point moves, but whether the value of the Hamiltonian function changes during that motion.

## 🔴 Structural Level

Structurally, Hamilton's equations turn a scalar function into a dynamical field. The gradient of [[H]] is not followed directly; it is reorganized by canonical structure. That is why motion can conserve [[H]] and still travel along level curves. In an oscillator, the system is not at rest even if energy is constant: it rotates around equilibrium in phase space.

Validity requires [[qi]] and [[p]] to be canonical variables. It is not enough to call any quantity momentum. If variables do not come from a regular transformation or do not preserve canonical structure, the equations may need corrections. This condition is crucial in nontrivial coordinates, constrained systems, and advanced formulations.

One must also distinguish energy conservation from absence of motion. If [[Ht]] is zero, [[H]] is conserved, but [[qd]] and [[pd]] may be nonzero. Conservation means remaining on a level surface, not stopping evolution.

This structure is why Hamiltonian methods are so effective in stability analysis. An equilibrium point is not identified only because energy has a certain value, but because the full flow vanishes: the coordinate does not change and momentum does not change either. Near that point, slopes of [[H]] indicate whether motion organizes into closed orbits, escapes, or separatrices. The information is not in an isolated formula, but in the complete phase field.

## Deep Physical Interpretation

The deep reading is geometric. The Hamiltonian assigns an energy height to each phase point, but the equations indicate how to move on that surface. The coordinate changes because the Hamiltonian has a slope with respect to momentum; momentum changes because the Hamiltonian has a slope with respect to coordinate with opposite sign.

This explains why the formalism is powerful. Instead of solving from isolated forces, one studies a function containing the whole dynamical information. From it one obtains velocities, generalized forces, conservation statements, and phase portraits.

## Order of Magnitude

In the quadratic oscillator, if [[p]] is of order one kg m/s and [[m]] is of order one kg, [[qd]] is of order one meter per second. If [[k]] is of order ten newtons per meter and [[qi]] is of order one tenth of a meter, [[pd]] is of order one newton. These scales help detect unit and sign errors.

A large value of [[H]] does not necessarily imply large velocity; it may be stored in the potential part. The reading must separate where energy is located inside the phase point.

## Personalized Resolution Method

First confirm that you are working with canonical variables [[qi]] and [[p]]. Second write [[H]] only with those variables and parameters. Third differentiate with respect to [[p]] while holding the coordinate fixed to obtain [[qd]]. Fourth differentiate with respect to [[qi]] while holding momentum fixed and change the sign to obtain [[pd]].

Fifth interpret the pair of results as a phase vector. Sixth check conservation: if [[H]] has no explicit time dependence, motion conserves the value of [[H]], although the state continues changing.

## Special Cases and Extended Example

The harmonic oscillator is the canonical example because its equations are linear. The coordinate generates a restoring acceleration through [[pd]], and the momentum generates coordinate advance through [[qd]]. If [[qi]] is positive, momentum tends to decrease; if [[p]] is positive, the coordinate tends to increase.

In a free system without potential, [[pd]] may be zero and momentum is conserved. In a nonlinear potential, the second equation keeps its structure, but the slope with respect to coordinate is no longer linear. The method does not change; the geometry of level curves changes.

## Real Student Questions

A common question is why the second equation has a minus sign. That sign is not decorative convention; it makes the flow canonical and, in conservative models, makes motion proceed along level curves of [[H]].

Another doubt is whether constant [[H]] means nothing changes. The answer is no. A point can move continuously along a level curve while keeping the same Hamiltonian value. This difference is essential for understanding oscillations, orbits, and stability.

## Cross-cutting connections and study paths

This leaf connects with Legendre transformation, harmonic oscillator, phase portraits, and energy conservation. Before it, one should master the Lagrangian and conjugate momentum. After it, the natural step is stability, canonical variables, and constrained systems.

It also prepares statistical mechanics and quantum mechanics, where phase space and conjugate variables are central. Hamilton's form teaches one to read dynamics as geometry, not only as second-order equations.

## Final Synthesis

Hamilton's equations turn the Hamiltonian into an evolution field for coordinate and momentum. The slope in [[p]] produces [[qd]], the slope in [[qi]] produces [[pd]] with opposite sign, and explicit time dependence decides whether [[H]] is conserved. The final goal is to read dynamics as flow in phase space.
`;export{e as default};
