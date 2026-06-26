const e=`# Constraints and degrees of freedom

## Conceptual context

A constraint is a physical condition that prevents a system from exploring every configuration that could be written algebraically. The goal is not to reduce notation, but to identify which motions are possible and which are blocked by contact, geometry, a guide, a string, a joint, or an imposed relation. This leaf therefore separates available coordinates from truly independent coordinates.

In analytical mechanics, that separation determines the model. If a restriction can be written as a condition on [[q]] and [[t]], it can be treated as holonomic. If the restrictions are also independent, the count [[f]] has physical meaning. When these assumptions fail, the problem needs better classification of constraints, not more algebra.

## 🟢 Essential level

The essential idea is that a constraint removes physical freedom. A system may be described with many variables, but some of them only maintain a required relation. A particle forced to remain on a rail cannot choose any spatial position; the rail has already fixed part of its possible state.

Thus the degree-of-freedom count is not obtained by looking at the drawing or by counting spatial axes. It is obtained by asking how many independent decisions remain after real restrictions have been applied. This prevents a common mistake: assuming that more written variables mean more motion.

It is also important to separate constraint and force. The constraint states which configurations are admissible; the reaction needed to maintain it may appear later. Confusing these layers leads to non-existent degrees of freedom.

At this first level, the useful image is qualitative: a constraint cuts down possibilities; it does not add motion. Formal mathematics comes later to make that intuition precise.

In elementary discrete models, [[n]] may be used as the number of entities before translating the system into effective coordinates. In this leaf, however, the operational count is expressed later with explicit initial coordinates, keeping the count close to the actual model being solved.

## 🔵 Formal level

A holonomic constraint is represented as a configuration condition:

{{f:ligadura_holonomica}}

Virtual-displacement compatibility requires the virtual displacement not to break the constraint condition:

{{f:desplazamiento_virtual_admisible}}

If coordinates are not eliminated, the constraint reaction may enter through multipliers:

{{f:multiplicadores_lagrange}}

Structural counting is summarized by:

{{f:conteo_grados_libertad}}

Here [[phi]] selects the admissible set, [[delta_q]] denotes compatible instantaneous variations, [[lambda]] measures the associated reaction intensity, and [[L]] organizes dynamics in terms of [[q]] and [[qdot]]. The count uses [[Nq]] as the number of coordinates before reduction and [[C]] as the number of independent constraints. Independence is essential: two different equations may impose the same physical condition.

The formal sequence should be read in order. First, [[phi]] states the configuration condition; without that condition, there is no restriction to impose. Then [[delta_q]] shows which variations respect the condition at the chosen instant. Only when the restriction enters dynamics does [[lambda]] appear, representing the reaction needed to keep motion in the admissible set. Finally, [[f]] summarizes the available dimension.

## 🔴 Structural level

At structural level, the focus shifts from calculation to diagnosis. Before applying [[f]]=[[Nq]]-[[C]], the modeler must know whether the constraints really remove distinct dimensions. The formal criterion is local rank. If the rank equals [[C]], the count is stable; if it drops, there is redundancy; if it changes during motion, the system changes regime.

This explains why some models work in one region and fail in another. A joint may behave as a regular restriction through most of the motion and become singular near a limiting configuration. At that point, the ideal model no longer describes the structure well and an active-constraint formulation, chart change, or contact treatment is needed.

The role of [[lambda]] is also structural. It does not create new coordinates, but it measures the reaction that enforces [[phi]]=0. In engineering, that quantity may be as important as the trajectory because it indicates tension, contact force, internal load, or design limits.

A complete structural reading also checks tolerances. If [[phi]]=0 is maintained within the accepted error, the model may remain operational. If the error grows persistently, the failure is no longer merely numerical; the constraint, coordinate chart, or physical regime has become inadequate.

This is why constrained mechanics is not merely bookkeeping. It is a way of auditing whether the equations still describe the same physical object throughout the motion.

## Deep physical interpretation

A correct interpretation separates three questions. First: what condition must hold? That is the reading of [[phi]]. Second: what variations are admissible without leaving the condition? That is the reading of [[delta_q]]. Third: what reaction appears when the condition is dynamically imposed? That is the reading of [[lambda]].

The value of [[f]] summarizes independence, not visual complexity. A mechanism with many visible parts may have few degrees of freedom if joints block most directions. Conversely, a simple-looking system may have more freedom if it has few effective restrictions.

## Order of magnitude

For a system with [[Nq]]=6 and [[C]]=2, the count gives [[f]]=4. If a student obtains [[f]]=5 under the same assumptions, one constraint was likely ignored. If the result is [[f]]=3, an extra non-independent restriction was probably counted.

In simulation, a closure tolerance may require [[phi]] to remain near zero, for example below \\(10^{-6}\\) in normalized units. If drift remains above that scale, the integrator or the constraint model is not respecting the admissible set.

## Personalized resolution method

A reliable method starts by classifying the restriction: holonomic, non-holonomic, unilateral, or time-dependent. Then choose coordinates [[q]], write [[phi]]=0 when appropriate, and test independence. Only then compute [[f]].

For motion problems, there are two routes. The reduced route eliminates coordinates and works directly with independent variables. The multiplier route keeps more coordinates and adds [[lambda]] to enforce the restriction in the dynamical equation. The first is usually cleaner; the second exposes reactions and handles hard-to-eliminate constraints.

## Special cases and extended example

Special case 1: redundant constraints. If two equations represent the same condition, counting both artificially reduces [[f]]. The symptom is calculated mobility below observed mobility.

Special case 2: time-dependent restriction. A moving guide may impose [[phi]]([[q]],[[t]])=0. Then the admissible set changes with time and must not be treated as fixed geometry.

Extended example: a robotic arm with six coordinates and two closure restrictions has [[f]]=4 if both restrictions are independent. If a joint reaches a singular configuration, the effective rank can change. The model must detect that change before interpreting loads or planning trajectories.

## Real student questions

- Is a constraint always a force?
No. The constraint is the condition; force or reaction appears when that condition is dynamically enforced.

- Why does [[lambda]] not increase [[f]]?
Because [[lambda]] does not choose configuration. It measures the reaction needed to maintain a restriction.

- Can I just count equations?
No. Only independent restrictions should be counted.

- What is the most serious error?
Using [[C]] without checking independence. That changes the whole model.

## Cross-cutting connections and study paths

This leaf prepares constrained Lagrange equations, Lagrange multipliers, and multibody modeling. It also connects with generalized coordinates: first decide which variables describe the system, then decide which constraints reduce their independence.

A reasonable route is to study generalized coordinates, then constraints and degrees of freedom, and then Lagrange equations. In that order, the student sees that dynamics begins with configuration architecture, not with the final equation.

## Final synthesis

Constraints and degrees of freedom teach how to read the real structure of a mechanical system. The final goal is to decide which configurations are admissible, how many independent variables remain, and which reactions appear when restrictions are imposed. Mastering this leaf helps build honest models, detect overcounting, and choose between direct reduction and multipliers with physical judgement.
`;export{e as default};
