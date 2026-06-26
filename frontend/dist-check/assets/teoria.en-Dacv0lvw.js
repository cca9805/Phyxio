const e=`# Net Torque Balance Condition

## Conceptual context

This leaf is not limited to defining the torque of one isolated force. Its purpose is to decide whether several forces produce rotational equilibrium about the same axis. The central quantity is [[tau_net]]: if it vanishes, no net tendency to rotate remains; if it does not vanish, one rotation sense still dominates.

For the sum to be meaningful, every contribution must refer to the same pivot and the same sign convention. The forces [[F1]] and [[F2]] may have different magnitudes, lever arms [[r1]] and [[r2]], and angles [[theta1]] and [[theta2]]. Equilibrium does not require equal forces; it requires equal and opposite rotational effects.

## 🟢 Essential level

A force can rotate a body if it acts at a distance from the axis and does not point directly through the axis. In rotational equilibrium, turning tendencies compensate. One contribution may tend to rotate clockwise and another counterclockwise; the important quantity is the algebraic sum of those tendencies.

The essential idea is to compare torques, not isolated forces. A small force applied far from the axis can balance a large force applied near it. A strong force may also produce no rotation if its line of action passes through the axis. Therefore the analysis must include force, arm, angle, and sign.

The physical result is read this way: if [[tau_net]] is zero, the system satisfies the rotational equilibrium condition. If it remains positive or negative, the sign indicates which residual rotation sense dominates.

At this level, it is not necessary to calculate every expression yet. It is enough to recognize that rotation depends on three qualitative factors: how strongly the force pushes, how far from the axis it acts, and how inclined it is. If one of those factors changes, the turning tendency changes even when the force seems the same.

## 🔵 Formal level

First, compute the rotational contribution of the first force:

{{f:torque_1_definition}}

Then compute the rotational contribution of the second force, using its own arm, force, and angle:

{{f:torque_2_definition}}

The condition of this leaf appears when contributions are combined with sign. In this convention, the net torque is written as the difference between the two tendencies:

{{f:net_torque_condition}}

For rotational equilibrium, [[tau_net]] must be zero. If the second force is used as the balancing force, the required magnitude [[Feq]] can be solved:

{{f:balancing_force_formula}}

This last relation has a design reading: if [[r2]] increases or if [[theta2]] approaches an effective perpendicular force, a smaller force may be enough to balance. If [[theta2]] removes the effective arm, no useful finite force exists in that geometry.

Units keep the calculation coherent. [[tau1]], [[tau2]], and [[tau_net]] are expressed in N m. The force [[Feq]] is expressed in N. Angles are dimensionless in radians and act through the sine, which measures the part of the force effective for rotation.

The formal level also requires preserving the sign convention. The formula sheet may contain positive magnitudes for force and arm, but net torque is algebraic. Therefore two contributions with the same magnitude are not always added: if they represent opposite rotation senses, they cancel. The equation for [[Feq]] is born precisely from imposing that cancellation.

## 🔴 Structural level

Rotational equilibrium has four structural steps. First, choose the axis. Second, choose the positive rotation sign. Third, compute each individual torque about that same axis. Fourth, add the contributions algebraically and check whether [[tau_net]] vanishes.

The choice of axis is not decorative. If [[tau1]] is computed about one pivot and [[tau2]] about another, the subtraction does not represent any physical balance. The same is true if the sign convention changes between forces. The torque-sum condition is valid only inside one rotational frame.

The main structural criterion is cancellation. The goal is not for [[F1]] and [[F2]] to be equal, but for their opposite rotational effects to have the same magnitude. If [[r1]] is smaller than [[r2]], a balancing force can be smaller than the applied force. If an angle reduces the effective arm, the required force increases.

This structure detects errors before substitution. Two torques written with the same sign cannot represent forces that visibly rotate in opposite senses. An arm measured from the end of the beam instead of the pivot changes the whole balance. An angle measured relative to the floor, when the formula requires the angle relative to the radius, changes the sine and therefore the rotational effectiveness.

## Deep physical interpretation

Rotational equilibrium does not mean absence of forces. It means absence of net torque. A body may have several forces acting on it and still not rotate if their contributions cancel about the chosen axis. This is why this leaf differs from the torque-of-one-force leaf: there one contribution is measured; here the whole set is tested for balance.

The quantity [[Feq]] turns analysis into design. If a load produces [[tau1]], one can compute which second force must be applied in a given geometry to cancel rotation. This explains levers, wrenches, balances, and supports: the larger force does not automatically win; the effective product of force, arm, and angle with the correct sign wins.

A nonzero [[tau_net]] is not just a numerical error. It describes a residual tendency to rotate. The sign indicates the dominant sense, and the magnitude indicates how far the system is from equilibrium.

## Order of magnitude

In a laboratory beam, lever arms of tenths of a meter and forces of tens of newtons produce torques of several N m. If [[r1]] is roughly half a meter and [[F1]] is a few tens of newtons with a nearly perpendicular force, [[tau1]] should be on the N m scale, not in N or meters.

A useful check is to compare magnitudes. If a force is applied at twice the arm with the same effective angle, it needs about half the force to balance. If the angle approaches zero, torque decreases even when the force is large. These checks prevent confusing force balance with torque balance.

## Personalized resolution method

1. Draw the axis or pivot about which torques are summed.
2. Fix the positive rotation sign.
3. Identify [[r1]], [[F1]], [[theta1]], [[r2]], [[F2]], and [[theta2]].
4. Compute [[tau1]] and [[tau2]] about the same axis.
5. Build [[tau_net]] while respecting signs.
6. If equilibrium is required, impose [[tau_net]] = 0 and compute [[Feq]] when appropriate.
7. Check units, signs, and physical sense.

## Special cases and extended example

If a force passes through the axis, its effective arm is zero and it contributes no torque. If a force is perpendicular to the radius, its contribution is maximal for that arm and force. If two torques have equal magnitude and opposite signs, the rotational equilibrium condition is satisfied.

If the system must also be in translational equilibrium, [[tau_net]] = 0 is not enough. The force sum must also be checked. This leaf covers the rotational condition; complete static equilibrium requires both conditions.

## Real student questions

Why is equalizing forces not enough?
Because a force applied farther from the axis produces more torque than the same force applied nearby.

Can I add torques computed from different points?
No. Every torque must be measured about the same axis for the sum to have physical meaning.

What does the sign of [[tau_net]] mean?
It indicates which rotation sense dominates after adding all contributions.

Why does the sine of the angle appear?
Because only the component perpendicular to the radius produces effective rotation.

## Cross-cutting connections and study paths

This leaf connects with torque of a force, levers, static equilibrium, center of mass, and free-body diagrams. The previous step is understanding one individual contribution; the step specific to this leaf is adding signed contributions to decide equilibrium.

Next, complete statics problems should be studied, where force sums and torque sums are combined. The same logic also appears in structural design, biomechanics, and simple-machine analysis.

## Final synthesis

The torque-sum condition states that rotational equilibrium requires zero net torque about one same axis. To apply it, compute [[tau1]] and [[tau2]], combine them with sign in [[tau_net]], and, when needed, obtain [[Feq]]. The central physics is not an isolated force, but the cancellation of turning tendencies produced by forces, arms, and angles.
`;export{e as default};
