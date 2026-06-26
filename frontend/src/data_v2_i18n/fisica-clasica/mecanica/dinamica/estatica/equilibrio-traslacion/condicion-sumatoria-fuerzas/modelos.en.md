# Physical models: Net Force Balance Condition

## Ideal model

This leaf uses a translational static model: a body is in equilibrium when the vector sum of all external forces is zero. The model does not assume force absence; it assumes force compensation.

Main idealizations:

- Cables are treated as massless with uniform [[T]].
- Contact reactions are represented as concentrated forces.
- The analysis is performed in a 2D inertial frame.
- The geometric angle [[theta]] is measured from an explicitly declared reference axis.

## Hypotheses

The model is valid only if these assumptions are respected:

1. The free-body diagram includes all relevant external forces.
2. Sign conventions are fixed before equations are written.
3. If [[m]] is given, it is converted into weight force before force summation.
4. The body can be approximated as rigid for translational balance.

Breaking one of these assumptions can produce mathematically neat but physically incorrect solutions.

## Quantitative validity domain

A practical quantitative validity set is:

1. abs(sumFx) <= 0.02 * F_ref
2. abs(sumFy) <= 0.02 * F_ref
3. abs(delta[[theta]]) <= 2 degrees in introductory lab setups
4. Relative mismatch in predicted [[T]] <= 5% versus instrument readings

With F_ref typically between 10 N and 1000 N, those thresholds separate acceptable static balance from measurable imbalance.

## Model failure signals

Typical breakdown indicators:

- Persistent force residuals with the same sign across repeated trials.
- Negative cable tension after checked algebra.
- Geometrically impossible angle requirements.
- Observable body rotation while translational equations appear closed.

The fourth indicator is essential: translational equilibrium is necessary but not sufficient for full static equilibrium.

## Extended or alternative model

When should you change model? You should change when translational balance alone cannot explain observed behavior or residual patterns.

Common model transitions:

1. Add torque balance if rotation matters.
2. Add friction laws if tangential contact forces are relevant.
3. Move to dynamic equations if acceleration is not negligible.

Explicit transition statement: when it is convenient to change model, move to the friction model or to the moment-balance model depending on the mechanism that dominates the error.

## Operational comparison

| Aspect | Translational balance | Extended model |
|--------|------------------------|----------------|
| Core closure | sumFx = 0, sumFy = 0 | sumF plus extra mechanisms |
| Complexity | Low | Medium to high |
| Typical parameters | [[F]], [[T]], [[m]], [[theta]] | plus friction, torques, inertia |
| Best use case | Fast equilibrium diagnosis | Final design validation |
| Field robustness | Good under tolerance criteria | Better in complex scenarios |

Mastering this baseline model is what enables informed escalation to richer physical descriptions.
