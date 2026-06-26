## Conceptual errors

### Error 1: Thinking the analogy is a physical identity

**Why it seems correct**

The form of the equations encourages a simple symbol exchange: [[F]] for [[tau]], [[m]] for [[I]], and [[a]] for [[alpha]]. The formal analogy is powerful, so students may turn it into a physical identity.

The cognitive mechanism is **overgeneralization**: if two equations have the same structure, their quantities are assumed to play the same role in every sense.

**Why it is incorrect**

The analogy preserves the cause-resistance-response structure, but it does not make the quantities physically equivalent. Force [[F]] does not depend on an axis, whereas torque [[tau]] does. Mass [[m]] measures linear inertia, whereas moment of inertia [[I]] depends on mass distribution relative to the axis.

**Detection signal**

The error appears when a solution says that “[[I]] is mass in rotation” without mentioning axis, geometry, or mass distribution.

**Conceptual correction**

The analogy transfers methods; it does not identify magnitudes. The correct statement is that [[m]] and [[I]] play structurally similar roles, but [[I]] contains geometric information that [[m]] does not.

**Mini contrast example**

Two bodies can have the same [[m]] and different [[I]]. A long rod rotating about one end is harder to angularly accelerate than a compact mass close to the axis. If [[I]] were simply “rotational mass”, both cases would behave the same, but they do not.

---

## Model errors

### Error 1: Applying the analogy without defining the rotation axis

**Why it seems correct**

In translation, it is often enough to choose a linear axis and apply

{{f:correspondencia_lineal_angular}}

. Students may transfer that simplicity to rotation and apply

{{f:correspondencia_lineal_angular}}

.

The cognitive mechanism is an **incomplete model transfer**: the equation is copied, but not the conditions that make the rotational version meaningful.

**Why it is incorrect**

In rotation, the axis is not optional. Both [[tau]] and [[I]] are computed about a specific axis. Changing the axis can change the lever arm, the torque sign, and the value of the moment of inertia.

**Detection signal**

The error is detected when a solution computes torque or moment of inertia without saying “about which point” or “about which axis”.

**Conceptual correction**

Before using the analogy, the rotation axis must be fixed. Only then do [[tau]], [[I]], and [[alpha]] belong to the same physical equation.

**Mini contrast example**

A door has the same mass, but it does not behave the same when pushed near the hinge or far from it. The force may be identical, but the torque changes because the lever arm relative to the axis changes.

---

## Mathematical errors

### Error 1: Treating the correspondence as an algebraic equality

**Why it seems correct**

The correspondence table looks like a direct substitution: [[F]] ↔ [[tau]], [[m]] ↔ [[I]], [[a]] ↔ [[alpha]]. A student may try to manipulate these arrows as if they were equal signs.

The cognitive mechanism is a **confusion between a relational symbol and a mathematical operation**.

**Why it is incorrect**

The correspondence does not mean that [[F]] equals [[tau]], or that [[m]] equals [[I]]. Their physical dimensions are different. Force has dimension M L T^{-2}, while torque has dimension M L^2 T^{-2}.

**Detection signal**

The error appears when expressions such as “

{{f:correspondencia_lineal_angular}}

, or when force and torque values are compared numerically without considering units.

**Conceptual correction**

The analogy arrow means “plays a similar role in the structure of the equation”, not “has the same value” or “has the same unit”.

**Mini contrast example**

A force of 10 N applied 0.5 m from the axis produces a torque of

{{f:segunda_ley_newton}}

. It is meaningless to say that 10 N is equal to

{{f:segunda_ley_newton}}

: they are different quantities.

---

## Interpretation errors

### Error 1: Memorizing the table without understanding what changes

**Why it seems correct**

The linear-angular table is convenient and fast. It helps solve exercises by replacing symbols, so memorizing it may seem sufficient.

The cognitive mechanism is **premature automation**: the pattern is learned before its limits are understood.

**Why it is incorrect**

The analogy works only if one understands what is preserved and what changes. It preserves the dynamical structure, but rotation introduces geometric dependence. Ignoring that difference leads to poor interpretations in problems involving rods, disks, pulleys, or rolling motion.

**Detection signal**

The student applies

{{f:segunda_ley_rotacional}}

, but cannot explain why [[I]] changes when the axis or body shape changes.

**Conceptual correction**

The table must be read as a reasoning guide. First identify the physical role of each magnitude; then use the corresponding equation.

**Mini contrast example**

If a disk and a hoop have the same mass and radius, they do not have the same [[I]]. Memorizing that [[m]] corresponds to [[I]] is not enough: one must understand that [[I]] depends on how mass is distributed.

---

## Quick self-control rule

Before using the linear-angular analogy, check four questions:

1. Have I clearly separated the translational side and the rotational side?
2. Have I defined the rotation axis before using [[tau]] or [[I]]?
3. Am I using the analogy as a structure, not as a physical equality?
4. Have I checked whether geometry or mass distribution changes the result?

If any answer is “no”, the analogy is not ready to be used in that problem.