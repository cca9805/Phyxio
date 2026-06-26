const e=`\uFEFF# Exam-type example

## Problem statement

A concrete block weighing [[W]] with value 2000 N is to be lifted using a factorial tackle with [[Np]] equal to 2 moving pulleys and 2 fixed pulleys. The system is considered ideal (frictionless). Determine the effort [[P]] required to keep the load in equilibrium and the rope length [[sP]] the operator must pull to raise the block a height [[sW]] of 1.5 m.

## Data

- Load weight ([[W]]): 2000 N
- Number of moving pulleys ([[Np]]): 2
- Load displacement ([[sW]]): 1.5 m
- System efficiency ([[eta]]): 1.0 (ideal)

## System definition

The system is a factorial tackle (parallel block-and-tackle) operating in a standard terrestrial gravitational environment. The rope is inextensible and of negligible mass. The process is quasistatic: lifting speed is low, with no appreciable acceleration.

## Physical model

The factorial tackle distributes load [[W]] across [[n]] parallel rope segments. Each segment bears a tension equal to [[P]], which results from dividing [[W]] by [[n]]. The number of active segments depends on the number of moving pulleys [[Np]] according to the factorial tackle formula. The kinematic constraint requires that the free-end displacement [[sP]] equal [[n]] times the load displacement [[sW]].

## Model justification

A factorial tackle has mechanical advantage [[VM]] equal to [[n]], which is twice [[Np]], because each moving pulley adds two rope segments supporting the load. With two moving pulleys, four segments share the 2000 N weight: each bears 500 N. The ideal model applies because the problem specifies no friction and a low lifting speed. Efficiency [[eta]] of value 1.0 confirms this choice.

## Symbolic solution

**Step 1 — Number of effective segments:**

{{f:aparejo_factorial}}

**Step 2 — Operator effort:**

{{f:ley_polea_ideal}}

**Step 3 — Rope displacement:**

{{f:relacion_desplazamientos}}

## Numerical substitution

With [[Np]] equal to 2 moving pulleys, the number of active segments n equals 4.

Operator effort: P equals W divided by n, that is, 2000 divided by 4, giving 500 N.

Rope length to pull: [[sP]] equals n times [[sW]], that is, 4 times 1.5 m, giving 6 m.

## Dimensional validation

Force [[P]] has units of N and the quotient [[W]]/[[n]] is [N]/[1] = [N]. Correct.

Length [[sP]] has units of m and the product [[n]] times [[sW]] is [1]·[m] = [m]. Correct.

Energy check: input work is 500 N times 6 m, equal to 3000 J; useful work is 2000 N times 1.5 m, equal to 3000 J. They match exactly: the solution is energetically consistent.

## Physical interpretation

The tackle reduces effort by the factor [[n]] of value 4, which is exactly the ideal mechanical advantage [[VM]] of the system. The operator applies only 500 N — one quarter of the weight — but must pull 6 m of rope to raise the load just 1.5 m. This force-displacement trade-off is the defining signature of every simple machine: total work is conserved and mechanical advantage merely redistributes effort over space.

Efficiency [[eta]] of value 1.0 indicates no energy dissipation. In real systems, [[eta]] is less than 1 and actual effort exceeds [[W]] divided by [[n]].

# Real-world example

## Context

In a mechanical workshop, a single moving pulley is used to extract a vehicle engine. The technician has a block-and-tackle with [[Np]] equal to 1 moving pulley. Due to worn bearings and accumulated dirt, the system has efficiency [[eta]] of 0.75. The engine weighs [[W]] of 1500 N. The workshop needs to know the maximum effort required and whether a standard-build operator (sustained maximum force ~800 N) can perform the operation safely.

## Physical estimation

With one moving pulley, the number of active segments [[n]] is 2. A rough order-of-magnitude estimate using the ideal model gives an effort P of 1500 divided by 2, equal to 750 N, within the operator's range.

However, with [[eta]] of 0.75, the actual effort increases according to the efficiency model:

{{f:ley_polea_real}}

Substituting: P real equals 1500 divided by (2 times 0.75), that is, 1500 divided by 1.5, giving 1000 N.

The real mechanical advantage [[VM]] combines [[n]] with [[eta]]: with n of value 2 and [[eta]] of 0.75, [[VM]] results in 1.5. The technician must apply 1000 N, exceeding the ~800 N sustained force of a standard operator.

Quantitative recommendation: clean and re-lubricate the bearings to raise [[eta]] to at least 0.87, reducing effort to at most 862 N within the safe range. Alternatively, use a tackle with [[n]] of value 4, which even at [[eta]] of 0.75 would require only 500 N.

## Interpretation

Friction raises actual effort to 1000 N, 33 % above the ideal value of 750 N. This excess represents energy dissipated as heat in the axles and cable bending. The gap between ideal and real effort is not merely numerical: it has ergonomic consequences (injury risk) and safety implications (load may slip if the technician fatigues).

The central concept is real mechanical advantage [[VM]], which combines [[n]] with [[eta]] and integrates both the geometry of the tackle and its internal losses. A 12 % improvement in efficiency (from 0.75 to 0.87) reduces effort by 13.8 %, illustrating the system's sensitivity to maintenance conditions.
`;export{e as default};
