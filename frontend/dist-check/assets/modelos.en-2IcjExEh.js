const e=`## Ideal model

The ideal model treats the string as a continuous, flexible, uniform medium under constant tension. The transverse disturbance is small, so tension does not change appreciably during oscillation. In this framework, speed [[v]] is determined by the balance between [[T]] and [[mu]].

The string is not considered bending-stiff, it does not stretch appreciably during the passage of the wave, and it does not lose energy by friction. The result is a local model: it predicts propagation speed before boundary conditions or standing modes are imposed.

## Hypotheses

- **Uniform string:** [[mu]] is constant along the analyzed segment.
- **Constant tension:** [[T]] does not change during small oscillations.
- **Small amplitude:** the transverse slope is reduced and the linear model is enough.
- **Ideal flexibility:** the string contributes no appreciable bending stiffness.
- **Nondispersive medium:** within the used range, [[v]] does not depend on [[f]].

These hypotheses turn the problem into a clean mechanical reading. The source may change [[f]], but the medium keeps its speed if [[T]] and [[mu]] stay the same.

## Quantitative validity domain

The model is a good approximation if the transverse amplitude is below 5 % of [[L]], if the relative change in tension during oscillation is below 10 %, and if the string can be considered uniform over the measured segment. For musical or laboratory strings, bending stiffness should also be small compared with applied tension.

As an operational criterion, if a repeated measurement of [[v]] at two different frequencies changes by less than 5 % while the same string and tension are kept, the nondispersive model is reasonable. If the difference exceeds that margin, stiffness, damping, setup error, or tension variation should be suspected.

## Model failure signals

A clear failure signal appears when pulses of different width travel at different speeds. That indicates dispersion or nonideal behavior. Another signal is that after moderately increasing [[T]], the measured speed does not follow the expected trend: supports may slip, [[mu]] may be measured incorrectly, or the real tension may differ from the nominal value.

The model also fails if the string vibrates with large amplitude and its pitch changes perceptibly during oscillation. In that case, effective tension is no longer constant. In thick metal strings, stiffness can raise high frequencies above the simple prediction.

## Extended or alternative model

An extended model may include bending stiffness, damping, and tension depending on deformation. In real instruments, these corrections explain inharmonicity, energy loss, and differences between strings with the same nominal [[T]] and [[mu]].

For nonuniform strings, a piecewise model is used: each region has its own linear density and therefore a different local speed. At material-change points, partial reflections and transmissions appear. This extension is needed for composite cables, irregularly wound strings, or setups with knots.

## Operational comparison

| Situation | Ideal model | Extended model |
|---|---|---|
| Thin uniform string | Adequate | Not needed |
| Small amplitude | Adequate | Not needed |
| Thick or stiff string | Approximate | Recommended |
| Variable density | Insufficient | Needed |
| High-precision measurements | Starting point | Recommended |

The ideal model is preferable for learning the physical cause of [[v]] and solving basic problems. It is recommended to switch to an extended model when measurements reveal dispersion, strong losses, or systematic deviations, prompting the transition to advanced analysis.
`;export{e as default};
