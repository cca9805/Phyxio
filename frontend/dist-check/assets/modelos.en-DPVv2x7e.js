const e=`# Models of the Legendre Transformation

## Ideal Model

The ideal model assumes a regular mechanical system with one generalized coordinate [[qi]], one generalized velocity [[qdi]], and a differentiable Lagrangian [[L]]. The transformation replaces [[qdi]] with [[p]] and builds [[H]] as a phase-space function.

In the quadratic case, [[p]] is proportional to [[qdi]], so the inversion is immediate. This is the best introductory model because it separates the three operations clearly: differentiate, invert, and substitute.

## Hypotheses

- [[L]] depends smoothly enough on [[qdi]].
- The slope [[DLv]] defines a single [[p]] for each velocity.
- The relation between [[qdi]] and [[p]] can be locally inverted.
- The effective mass [[m]] is nonzero in the quadratic case.
- The potential energy [[V]] is velocity-independent if [[H]] is to be interpreted as ordinary mechanical energy.

## Quantitative Validity Domain

Regularity is evaluated through the curvature of the Lagrangian with respect to velocity. In the quadratic model, that curvature is the effective mass [[m]]. If [[m]] is positive and physically reasonable in order of magnitude, different velocities produce different momenta and the transformation does not lose information.

The order of magnitude also controls numerical interpretation. If [[m]] is very small, a moderate variation in [[p]] may imply a large variation in [[qdi]]. If [[m]] is very large, the same momentum change alters the velocity only slightly.

## Model failure signals

A failure signal appears if [[L]] does not contain a given velocity: then [[p]] may be zero or imposed as a constraint, and [[qdi]] cannot be recovered. Another signal is that several different velocities generate the same momentum. In both cases the ordinary transformation must be replaced by a constrained treatment.

The simple energy interpretation also fails if the Lagrangian depends explicitly on time, if [[V]] depends on velocity, or if non-inertial coordinates are used without checking extra terms.

## Extended or Alternative Model

The extended model uses several generalized coordinates. Each coordinate then has its conjugate momentum, and regularity requires the matrix of second derivatives with respect to velocities to be invertible. The conceptual step is the same, but the inversion is no longer a simple division.

When the matrix is not invertible, the alternative approach is the Hamiltonian formalism with constraints. In that case, some momenta do not determine velocities but impose conditions that reduce the allowed phase space.

## Operational Comparison

The Lagrangian model is more convenient for building equations from coordinates and constraints. The Hamiltonian model is more convenient for analyzing phase space, conservation, stability, and canonical structures. The Legendre transformation tells when both models are equivalent descriptions of the same dynamics and when one must stop because that equivalence is not guaranteed.
`;export{e as default};
