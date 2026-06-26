const e=`## Conceptual errors\r
\r
### Error 1: Thinking the analogy is a physical identity\r
\r
**Why it seems correct**\r
\r
The form of the equations encourages a simple symbol exchange: [[F]] for [[tau]], [[m]] for [[I]], and [[a]] for [[alpha]]. The formal analogy is powerful, so students may turn it into a physical identity.\r
\r
The cognitive mechanism is **overgeneralization**: if two equations have the same structure, their quantities are assumed to play the same role in every sense.\r
\r
**Why it is incorrect**\r
\r
The analogy preserves the cause-resistance-response structure, but it does not make the quantities physically equivalent. Force [[F]] does not depend on an axis, whereas torque [[tau]] does. Mass [[m]] measures linear inertia, whereas moment of inertia [[I]] depends on mass distribution relative to the axis.\r
\r
**Detection signal**\r
\r
The error appears when a solution says that “[[I]] is mass in rotation” without mentioning axis, geometry, or mass distribution.\r
\r
**Conceptual correction**\r
\r
The analogy transfers methods; it does not identify magnitudes. The correct statement is that [[m]] and [[I]] play structurally similar roles, but [[I]] contains geometric information that [[m]] does not.\r
\r
**Mini contrast example**\r
\r
Two bodies can have the same [[m]] and different [[I]]. A long rod rotating about one end is harder to angularly accelerate than a compact mass close to the axis. If [[I]] were simply “rotational mass”, both cases would behave the same, but they do not.\r
\r
---\r
\r
## Model errors\r
\r
### Error 1: Applying the analogy without defining the rotation axis\r
\r
**Why it seems correct**\r
\r
In translation, it is often enough to choose a linear axis and apply\r
\r
{{f:correspondencia_lineal_angular}}\r
\r
. Students may transfer that simplicity to rotation and apply\r
\r
{{f:correspondencia_lineal_angular}}\r
\r
.\r
\r
The cognitive mechanism is an **incomplete model transfer**: the equation is copied, but not the conditions that make the rotational version meaningful.\r
\r
**Why it is incorrect**\r
\r
In rotation, the axis is not optional. Both [[tau]] and [[I]] are computed about a specific axis. Changing the axis can change the lever arm, the torque sign, and the value of the moment of inertia.\r
\r
**Detection signal**\r
\r
The error is detected when a solution computes torque or moment of inertia without saying “about which point” or “about which axis”.\r
\r
**Conceptual correction**\r
\r
Before using the analogy, the rotation axis must be fixed. Only then do [[tau]], [[I]], and [[alpha]] belong to the same physical equation.\r
\r
**Mini contrast example**\r
\r
A door has the same mass, but it does not behave the same when pushed near the hinge or far from it. The force may be identical, but the torque changes because the lever arm relative to the axis changes.\r
\r
---\r
\r
## Mathematical errors\r
\r
### Error 1: Treating the correspondence as an algebraic equality\r
\r
**Why it seems correct**\r
\r
The correspondence table looks like a direct substitution: [[F]] ↔ [[tau]], [[m]] ↔ [[I]], [[a]] ↔ [[alpha]]. A student may try to manipulate these arrows as if they were equal signs.\r
\r
The cognitive mechanism is a **confusion between a relational symbol and a mathematical operation**.\r
\r
**Why it is incorrect**\r
\r
The correspondence does not mean that [[F]] equals [[tau]], or that [[m]] equals [[I]]. Their physical dimensions are different. Force has dimension M L T^{-2}, while torque has dimension M L^2 T^{-2}.\r
\r
**Detection signal**\r
\r
The error appears when expressions such as “\r
\r
{{f:correspondencia_lineal_angular}}\r
\r
, or when force and torque values are compared numerically without considering units.\r
\r
**Conceptual correction**\r
\r
The analogy arrow means “plays a similar role in the structure of the equation”, not “has the same value” or “has the same unit”.\r
\r
**Mini contrast example**\r
\r
A force of 10 N applied 0.5 m from the axis produces a torque of\r
\r
{{f:segunda_ley_newton}}\r
\r
. It is meaningless to say that 10 N is equal to\r
\r
{{f:segunda_ley_newton}}\r
\r
: they are different quantities.\r
\r
---\r
\r
## Interpretation errors\r
\r
### Error 1: Memorizing the table without understanding what changes\r
\r
**Why it seems correct**\r
\r
The linear-angular table is convenient and fast. It helps solve exercises by replacing symbols, so memorizing it may seem sufficient.\r
\r
The cognitive mechanism is **premature automation**: the pattern is learned before its limits are understood.\r
\r
**Why it is incorrect**\r
\r
The analogy works only if one understands what is preserved and what changes. It preserves the dynamical structure, but rotation introduces geometric dependence. Ignoring that difference leads to poor interpretations in problems involving rods, disks, pulleys, or rolling motion.\r
\r
**Detection signal**\r
\r
The student applies\r
\r
{{f:segunda_ley_rotacional}}\r
\r
, but cannot explain why [[I]] changes when the axis or body shape changes.\r
\r
**Conceptual correction**\r
\r
The table must be read as a reasoning guide. First identify the physical role of each magnitude; then use the corresponding equation.\r
\r
**Mini contrast example**\r
\r
If a disk and a hoop have the same mass and radius, they do not have the same [[I]]. Memorizing that [[m]] corresponds to [[I]] is not enough: one must understand that [[I]] depends on how mass is distributed.\r
\r
---\r
\r
## Quick self-control rule\r
\r
Before using the linear-angular analogy, check four questions:\r
\r
1. Have I clearly separated the translational side and the rotational side?\r
2. Have I defined the rotation axis before using [[tau]] or [[I]]?\r
3. Am I using the analogy as a structure, not as a physical equality?\r
4. Have I checked whether geometry or mass distribution changes the result?\r
\r
If any answer is “no”, the analogy is not ready to be used in that problem.`;export{e as default};
