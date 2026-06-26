## Ideal model

The ideal model treats a constraint as an explicit condition on configuration: [[phi]]=0. The main question is not which coordinates are algebraically convenient, but which states are physically admissible and how many independent directions remain after the restrictions are imposed. The model separates constraint equation, degree-of-freedom count, and associated reaction.

In this description, [[q]] denotes the coordinates used before or after reduction, [[Nq]] is the number of available coordinates before constraints, [[C]] counts only independent restrictions, and [[f]] is the resulting effective dimension. If the formulation is not reduced, [[lambda]] introduces constraint reactions in the dynamics built from [[L]] and [[qdot]].

## Hypotheses

- Constraints are holonomic and can be written as [[phi]]([[q]],[[t]])=0. Otherwise, a non-holonomic or differential model is required.
- The restrictions counted in [[C]] are independent in the studied region. Redundant equations overreduce [[f]].
- The rank of the constraint matrix remains constant during the analysed interval. Rank changes require active-constraint updates.
- The multiplier [[lambda]] represents ideal reactions compatible with the chosen variational principle. Friction, impact, or unilateral contact need an extended model.

## Quantitative validity domain

The minimum condition is [[C]] <= [[Nq]] and [[f]] >= 0. Also, [[Nq]], [[C]], and [[f]] must be non-negative integers. A value such as [[f]]=-1 is not an unusual result; it is a modeling inconsistency caused by too many counted constraints or by dependent restrictions.

A second quantitative control is local rank. If the Jacobian of [[phi]] with respect to [[q]] keeps rank [[C]], the reduction is stable in that region. If rank drops, one constraint stops adding new information; if it increases through contact activation, the system changes effective dimension.

## Model failure signals

A clear failure signal is that [[phi]] does not remain close to zero during evolution. Then the computed path leaves the admissible set and any interpretation of [[f]] or [[lambda]] becomes unreliable. Another signal is unbounded growth of [[lambda]] under small data changes, usually caused by poor scaling, near-redundant restrictions, or singular configuration.

The model also fails when [[delta_q]] is interpreted as an accumulated real displacement. A virtual displacement is an instantaneous compatible variation, not necessarily the time evolution of the system.

## Extended or alternative model

The extended model replaces direct reduction with multipliers, penalty methods, constraint projection, or active-contact detection. It is useful when coordinates should not be eliminated, when constraints change by regimes, or when redundant variables are needed to measure reaction forces.

The transition rule is explicit: if [[phi]]=0 remains stable and rank is constant, the ideal model is sufficient. If contact, rank loss, impact, clearance, or unilateral restrictions appear, the model must use active constraints and regime-switching conditions.

## Operational comparison

- Reduced model: fewer variables, clean interpretation of [[f]], efficient for simple constraints.
- Multiplier model: extra algebraic variables, direct access to reactions, better for contact and structural design.
- Penalty model: easy to implement, but introduces numerical stiffness and tolerance error in [[phi]].
- Projection model: keeps trajectories close to the admissible set, but can hide modeling errors.
- Active-constraint model: necessary when [[C]] changes during motion, with higher logical and computational cost.

The physical decision is ordered: validate constraint independence, count [[f]], then decide whether to eliminate coordinates or keep them with [[lambda]].
