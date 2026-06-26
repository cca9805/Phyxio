# Common Errors in the Legendre Transformation

## Conceptual Errors

### Error conceptual: Confusing transformation with symbolic replacement

The error is to write [[H]] by changing letters without checking that [[qdi]] can be expressed as a function of [[p]]. The transformation requires a real inversion of the velocity-momentum map.

Mini contrast example: if [[p]] depends linearly on [[qdi]], the inversion is direct. If [[p]] does not depend on [[qdi]], there is no ordinary transformation even if the formula seems written.

### Error conceptual: Always identifying Hamiltonian and energy

[[H]] equals mechanical energy in the regular conservative case, but not by universal definition. If the Lagrangian depends on time or contains velocity-dependent potential terms, the energy reading must be checked.

Mini contrast example: for a quadratic free particle, [[H]] is kinetic energy. In a system with velocity-dependent coupling, [[H]] may or may not be conserved depending on the full structure.

## Model errors

### Model error: Ignoring generalized coordinates

The conjugate momentum [[p]] does not always have units of kg m/s. If [[qi]] is an angle, the conjugate momentum has angular-momentum units. Copying the Cartesian interpretation produces physical errors.

Mini contrast example: a linear coordinate generates linear momentum; an angular coordinate generates angular conjugate momentum.

### Model error: Applying the quadratic case where it does not apply

Using [[p]] proportional to [[qdi]] requires constant effective mass and quadratic kinetic energy. If the effective mass depends on position, the inversion may still be possible, but it must not be treated as a global constant.

Mini contrast example: in a curvilinear coordinate, the effective mass can vary with [[qi]], so the reading of [[m]] depends on the point.

## Mathematical Errors

### Mathematical error: Differentiating with respect to the wrong variable

The conjugate momentum is obtained by differentiating [[L]] with respect to [[qdi]], not with respect to [[qi]]. Differentiating with respect to the coordinate gives generalized forces or potential slopes, not momenta.

Mini contrast example: the velocity slope measures [[DLv]]; the position slope measures how the potential changes with configuration.

### Mathematical error: Leaving hidden velocities in the Hamiltonian

After building [[H]], [[qdi]] must be replaced by a function of [[p]]. If the final result still contains unaccounted velocities, it is a mixed expression, not a closed Hamiltonian function.

Mini contrast example: writing [[H]] with [[p]] and [[qdi]] is an intermediate step; writing it with [[p]], [[qi]], and parameters completes the process.

## Interpretation Errors

### Interpretation error: Reading the sign of p without orienting the coordinate

The sign of [[p]] depends on the chosen orientation of [[qi]]. Negative momentum does not mean negative energy; in the quadratic model it means evolution in the negative coordinate direction.

Mini contrast example: two states with opposite momenta may have the same [[H]] and opposite directions of motion.

## Quick self-control rule

Before accepting a transformation, check four questions: did I differentiate with respect to [[qdi]], can I solve for [[qdi]] from [[p]], have I removed all velocities from [[H]], and do I know whether my model allows [[H]] to be read as energy. If one answer fails, the result is not ready.

A second useful rule is to say aloud which variable is being abandoned and which one is being adopted. If you cannot clearly say "I abandon generalized velocity and adopt conjugate momentum", you are probably doing algebra without interpreting the physical change.
