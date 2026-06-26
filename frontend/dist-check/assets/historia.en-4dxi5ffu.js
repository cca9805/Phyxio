const e=`# History: Net Torque Balance Condition

## Historical problem

The historical problem was not only to know how strongly one force could rotate a body. Builders, toolmakers, and mechanics needed to know when several rotational effects would cancel. A door, a lever, a balance, or a beam can remain still even when forces act on it, provided their torques about the chosen axis compensate.

## Prior conceptual difficulty

The main difficulty was distinguishing force balance from torque balance. Equal forces do not necessarily produce equal rotational effects, because the distance to the axis and the force direction matter. Before the torque-sum condition was formalized, it was easy to confuse a strong force with a strong rotational effect.

Another difficulty was the choice of pivot. A torque is always measured about an axis. If the axis changes, the numerical contribution changes. The condition therefore required a disciplined method: choose one axis, assign signs, compute contributions, and add them algebraically.

## What changed

The key change was treating rotational effects as signed quantities that can cancel. Individual torques such as [[tau1]] and [[tau2]] are not the final question. The final question is whether [[tau_net]] vanishes. This made levers, balances, beams, and supports calculable with one common rule.

The same idea also made design possible. Once a load torque is known, the required balancing force [[Feq]] can be estimated from the available arm and angle. Mechanics moved from qualitative balance intuition to quantitative prediction.

## Impact on physics

The torque-sum condition became one of the two pillars of static equilibrium, together with force balance. It explains why a body may have zero net force and still rotate, or have several forces acting and yet no net rotation. It also clarifies why the pivot and sign convention must be stated explicitly.

In teaching, the condition marks a transition from studying one torque to analyzing a whole rotational system. That transition is essential for beams, machines, cranes, human joints, and any system where rotational stability matters.

## Connection with modern physics

Modern engineering still uses the same condition in structural analysis, robotics, biomechanics, and mechanical design. Software may compute many torques, but the physical check remains the same: the algebraic sum about the chosen axis must satisfy the required condition.

When motion is present, the condition connects naturally to rotational dynamics. If [[tau_net]] is not zero, it becomes the cause of angular acceleration. Thus the static condition is also the boundary case of a broader rotational theory.
`;export{e as default};
