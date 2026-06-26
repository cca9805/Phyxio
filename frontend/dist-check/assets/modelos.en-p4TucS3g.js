const e=`## Ideal model

The ideal model considers a classical system described by generalized coordinates [[qi]], velocities [[qdi]], and a regular Lagrangian [[L]]. The action [[S]] is computed on an interval with fixed [[t1]] and [[t2]]. The compared paths share endpoints, respect admitted constraints, and are smooth enough for variation and integration by parts.

The central hypothesis is that the relevant dynamics is contained in [[L]]. In that case, stationarity of [[deltaS]] produces the residual [[Ri]] and identifies the physical path without writing every Cartesian force.

## Hypotheses

- The system is classical and admits a description through [[qi]].
- The time interval between [[t1]] and [[t2]] is fixed.
- Virtual variations do not move the endpoints.
- [[L]] is differentiable with respect to [[qi]], [[qdi]], and time.
- Relevant forces are conservative or incorporated into the Lagrangian model.
- Constraints, if present, are compatible with the variations used.

## Quantitative validity domain

The scale of [[S]] is estimated by multiplying an energy scale by a time scale. A laboratory system with energies of order 1 J during 1 s produces actions of order 1 J s. A macroscopic system with 100 J during 10 s produces actions of order 1000 J s.

These numbers do not decide whether the motion is correct. The important quantity is the first-order change [[deltaS]] under path variation. Absolute action may change under reference shifts, but the stationary condition preserves the dynamical content when the shift does not alter the equations.

## Model failure signals

One failure signal is varying paths that do not respect endpoints or constraints. Another is building [[L]] from energies belonging to different configurations. The model also fails if [[Ri]]=0 is imposed while external non-potential forces have not been represented.

For impacts, dry friction, or discontinuous actuators, the path may not be smooth. Then the simple variational principle is insufficient and jump conditions, generalized forces, or an extended formulation are required.

## Extended or alternative model

The model can be extended by adding generalized forces, Lagrange multipliers, approximate non-conservative terms, or variational principles with explicit restrictions. In field systems, [[S]] is no longer a simple time integral and instead integrates a Lagrangian density over space and time.

Another important extension appears in symmetries. If the action is invariant under a continuous transformation, Noether's theorem gives a conservation law. This is why the leaf bridges toward symmetries and conservation laws.

## Operational comparison

- Newtonian model: efficient when Cartesian forces are clear.
- Variational model: efficient when natural coordinates and constraints simplify the problem.
- Model with generalized forces: needed when non-potential inputs are present.
- Multiplier model: useful when constraints are not eliminated.
- Selection criterion: use stationary action when a coherent [[L]] can be built and admissible variations are clear.
`;export{e as default};
