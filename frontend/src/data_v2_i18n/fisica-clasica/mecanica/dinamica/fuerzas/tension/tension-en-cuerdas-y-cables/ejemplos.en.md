# Exam-type example

## Problem statement

An ideal Atwood system is formed by two masses, [[m1]] and [[m2]], connected by a light inextensible rope over an ideal pulley. Since [[m2]] is larger than [[m1]], the system accelerates. The task is to compute the common acceleration [[a]], the rope tension [[T]], and, for an auxiliary inclined segment in the same setup, the projected traction components [[Tx]] and [[Ty]] when the cable makes an angle [[theta]] with the horizontal.

## Data

- [[m1]] = 3.0 kg
- [[m2]] = 5.0 kg
- [[g]] = 9.8 m/s^2
- For the inclined segment: [[theta]] = 30 degrees

As an additional model-validity input for a long vertical section, we also use [[lambda]] = 0.80 kg/m to estimate [[dT_dy]] under quasi-static conditions.

## System definition

The main system is the pair of masses coupled by an ideal rope. Both bodies share the same acceleration magnitude, and the rope transmits a common tension [[T]]. For component analysis, one cable segment is projected into horizontal and vertical axes, yielding [[Tx]] and [[Ty]].

## Physical model

We adopt an ideal Atwood model: massless rope, frictionless pulley, and negligible rotational inertia of the pulley. Under these assumptions, motion equations use a single common tension [[T]]. For angular decomposition, standard trigonometric projection with [[theta]] is used.

## Model justification

The objective is to expose structural relations among mass contrast, acceleration, and transmitted traction, not to model dissipative effects such as pulley friction or rope elasticity. In controlled teaching setups, this model provides robust predictions as long as alignment and rope quality remain within nominal conditions.

## Symbolic solution

Acceleration in an ideal Atwood system:

{{f:atwood_aceleracion}}

Tension in an ideal Atwood system:

{{f:atwood_tension}}

Horizontal tension component:

{{f:componentes_tension_x}}

Vertical tension component:

{{f:componentes_tension_y}}

Tension gradient in a massive cable:

{{f:gradiente_tension_cable_masivo}}

As a model consistency contrast, a suspended vertical segment can also be checked with:

{{f:tension_equilibrio_vertical}}

All relations must be used with a consistent sign and axis convention.

## Numerical substitution

1. Acceleration [[a]]:

[[a]] = ((5.0 - 3.0)*9.8)/(5.0 + 3.0) = 2.45 m/s^2

2. Tension [[T]]:

[[T]] = (2*3.0*5.0*9.8)/(3.0 + 5.0) = 36.75 N

3. Components for [[theta]] = 30 degrees:

[[Tx]] = [[T]]*cos([[theta]]) = 36.75*0.866 = 31.82 N

[[Ty]] = [[T]]*sin([[theta]]) = 36.75*0.5 = 18.38 N

4. Internal check:

[[Tx]] and [[Ty]] should recombine into a magnitude compatible with [[T]] under orthogonal component consistency. The computed values are coherent within rounding tolerance.

## Dimensional validation

- In the Atwood acceleration relation, [[a]] has acceleration units.
- In the Atwood tension relation, [[T]] has force units.
- In the horizontal and vertical component relations, projected values preserve force dimension.
- In the massive-cable gradient model, [[dT_dy]] is in N/m and remains consistent with [[lambda]]*[[g]].

No unit inconsistency is detected, so the result is dimensionally valid.

## Physical interpretation

The core physical reading is that mass asymmetry controls dynamic demand: the larger the gap between [[m1]] and [[m2]], the larger [[a]] becomes, and the common tension [[T]] adjusts accordingly under ideal assumptions. The pair [[Tx]], [[Ty]] shows that the same total traction can produce very different mechanical effects depending on geometry. In engineering terms, this distinction separates lateral anchor loading from vertical support loading.

When distributed mass is relevant, interpretation becomes spatial rather than purely scalar. A single local tension reading is no longer enough to characterize the whole system. The upper region of the cable may carry a significantly higher traction level than lower sections because it supports both payload and cable self-weight. This has direct operational implications: inspection, anchoring criteria, and overload protection must be tied to the most demanding segment, not to an average value.

A complete physical interpretation should also include scenario sensitivity. If the operating profile shifts from near-steady motion to frequent start-stop cycles, average traction may remain similar while dynamic peaks rise and dominate fatigue behavior. Likewise, a modest variation in [[theta]] can materially increase lateral demand even with unchanged payload. Therefore, the numerical result is only decision-ready when it is paired with a causal statement: which variable controls the response, which component governs the risk, and which modeling assumption is most likely to fail first in real operation.

# Real-world example

## Context

In an industrial lifting line, a cable lifts payload through an upper pulley and then passes through an inclined guiding stage toward a transfer carriage. The maintenance team must verify two constraints: whether operating tension stays inside cable safety limits and whether horizontal anchor load remains below structural capacity.

## Physical estimation

Equivalent suspended payload is about 400 kg, so in quasi-stationary operation baseline tension is estimated from vertical balance. This gives a force scale of several kilonewtons. For a guiding segment with [[theta]] near 20 degrees, [[Tx]] is evaluated to estimate lateral demand on the anchor. Even when total [[T]] is acceptable for cable strength, [[Tx]] may still govern support design.

During start and braking phases, the team uses vertically accelerated tension relations to estimate peak loads and compare them against operational margin. If peaks approach allowable limits, control acceleration is reduced or cable section is upgraded.

For a long vertical segment in the same installation, the team also estimates the gradient:

{{f:gradiente_tension_cable_masivo}}

Using [[lambda]] = 0.80 kg/m and [[g]] = 9.8 m/s^2 gives [[dT_dy]] = 7.84 N/m. This estimate quantifies how traction grows along height and supports upper-anchor verification.

## Interpretation

This real case shows why the leaf cannot be reduced to one equilibrium formula. Safety depends on combining total tension, component geometry, and dynamic regime. A correct calculation of [[T]] without checking [[Tx]] may miss a lateral anchoring failure mode. Likewise, ignoring transients may underestimate cyclic peak loading. The physically meaningful conclusion is model-based: traction transfer must be interpreted jointly in magnitude, direction, and regime.

From a reliability perspective, the same framework also improves maintenance decisions. If measured trends show stable total tension but increasing start-stop peaks, the issue may lie in control profile rather than cable strength. If upper-anchor strain rises while payload remains unchanged, distributed-mass effects and routing geometry should be reviewed before replacing hardware. This is the practical value of model-aware interpretation: it turns raw force numbers into actionable engineering diagnosis.
