# Physical models involved in the linear–angular analogy

## Ideal model

The analogy between translational and rotational dynamics does not introduce a new physical model. Instead, it connects two existing models through a shared mathematical structure.

On one hand, the translational model describes how a force [[F]] produces acceleration in a system with mass [[m]]. On the other hand, the rotational model describes how a torque [[tau]] produces angular acceleration in a system with moment of inertia [[I]].

The analogy allows both to be understood as instances of the same dynamical framework.

---

## Hypotheses

The rotational model is not independent; it is built by reinterpreting the quantities of the translational model.

Force [[F]] is replaced by torque [[tau]], mass [[m]] by moment of inertia [[I]], and acceleration [[a]] by angular acceleration [[alpha]].

This is not a superficial symbolic substitution. Each replacement reflects a deeper physical reinterpretation: motion is no longer linear but rotational, and it depends on a chosen axis.

---

## Quantitative validity domain

What remains invariant is the structure of the dynamical law:

- There is a cause (force or torque)
- There is a response (linear or angular acceleration)
- There is resistance to change (mass or moment of inertia)

This shared structure allows the same problem-solving strategies to be applied in both contexts. As a minimum quantitative criterion, the ideal model is reasonable when the axis is defined, the relative deformation of the body is small, the mass is constant, and speeds are much lower than the speed of light. In that range, the

{{f:correspondencia_lineal_angular}}

is a reliable tool before resorting to complex elastic or detailed dissipative models.

---

## Model failure signals

The key difference is the introduction of geometric dependence.

The moment of inertia [[I]] is not a simple intrinsic property like mass [[m]]. It depends on how mass is distributed relative to the axis of rotation.

Similarly, torque [[tau]] depends on the point of application of the force, unlike force in the translational model. Observable failure signals appear when the axis moves during the process, the body deforms appreciably, friction dissipates a large fraction of the energy, or the mass distribution changes while the body rotates. In those cases, the same correspondence table no longer predicts the response correctly.

---

## Extended or alternative model

The analogy breaks down when these differences are ignored.

In problems where geometry, axis choice, or mass distribution are relevant, the rotational model cannot be treated as a direct extension of the translational one.

The alternative model is to leave the simple correspondence and write the full dynamics about the real axis: external torques, time-dependent moment of inertia when needed, friction losses, and possible kinematic constraints. It is better to switch to this model when the axis is not fixed, when [[I]] cannot be considered constant, or when the applied force does not have a well-defined lever arm.

---

## Operational comparison

The main value of the analogy is operational: it allows the reuse of solution strategies.

A problem solved using

{{f:segunda_ley_newton}}

 in translation can be solved using

{{f:segunda_ley_rotacional}}

 in rotation via the

{{f:correspondencia_lineal_angular}}

, provided the relevant quantities are correctly identified.

---

## Synthesis

The linear–angular analogy does not define a new model but establishes a structural correspondence between two different ones. Its correct use requires understanding both what is preserved and what fundamentally changes.