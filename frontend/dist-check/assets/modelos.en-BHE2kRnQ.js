const e=`## Ideal model

The ideal overdamped model is a linear second-order oscillator in free response, with equivalent viscous damping and constant parameters. The comparison [[gamma]] > [[omega0]] classifies the regime, and the evolution of [[x]] is obtained as the sum of two real exponentials governed by [[r1]] and [[r2]]. The system reaches equilibrium without ideal sustained oscillation. This model is not intended to describe every microscopic detail of dissipation; its value is that it reduces the problem to two negative real rates and an output approaching equilibrium without sine or cosine terms.

## Hypotheses

The effective mass, stiffness, and dissipative coefficient remain constant during the transient. The amplitude stays within the linear domain, so [[C1]] and [[C2]] only encode initial conditions and do not change the system structure. Friction is approximated by a velocity-proportional law. There is no dominant periodic external force, and the studied interval begins at [[t]] >= 0.

## Quantitative validity domain

The minimum criterion is [[gamma]]/[[omega0]] > 1. For clearly overdamped behavior, a ratio between 1.1 and 5 often separates the case from the critical boundary without producing an excessively slow tail. If [[gamma]]/[[omega0]] is 1.01, the difference from critical damping may lie within experimental uncertainty. If it exceeds 10, the slow root may dominate so strongly that the system is non-oscillatory but operationally slow.

The exponential arguments must be dimensionless: [[r1]][[t]] and [[r2]][[t]] cannot carry units. Also, [[r1]] and [[r2]] must be negative; if either becomes positive, the system no longer describes stable return.

## Model failure signals

The model fails if the measured [[x]] curve shows sustained cycles, impacts against stops, abrupt velocity-dependent friction changes, or temperature-driven changes in damping during the experiment. It also fails when continuous external excitation is present, because the observed response is no longer purely free.

## Extended or alternative model

If dissipation is not viscous, a dry-friction model, a velocity-dependent damping model, or numerical integration may be needed. If forcing is present, the forced oscillator model is more appropriate. Near [[gamma]] = [[omega0]], the critical model may be a practical approximation when uncertainty prevents reliable separation of roots.

## Operational comparison

The ideal model is useful for classification and settling-time estimates. The extended model is needed when real data can no longer be explained by two exponentials. The correct decision is to use the simple model while its signs, scales, and graph shape remain coherent. If the practical objective is safety against overshoot, the overdamped model may be sufficient. If the objective is speed, it should be compared with the critical case before accepting the design.
`;export{e as default};
