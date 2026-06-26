const e=`# Universal gravitation law models\r
\r
## Ideal model\r
\r
The ideal model uses two point masses [[m1]] and [[m2]] separated by center-to-center distance [[r]]. Interaction strength is represented by [[F]], and global scale is set by [[G]]. This abstraction preserves core gravitational physics without requiring complex geometry.\r
\r
In this setting, attraction is central and radial. Direction follows the line connecting both mass centers. For foundational mechanics problems, this model is often both sufficient and pedagogically optimal.\r
\r
## Hypotheses\r
\r
Hypothesis 1: classical Newtonian regime, with negligible relativistic correction.\r
\r
Hypothesis 2: bodies are point-like or effectively spherical.\r
\r
Hypothesis 3: [[r]] is positive and measured between mass centers.\r
\r
Hypothesis 4: strict SI consistency for [[G]], masses, and distances.\r
\r
Hypothesis 5: no extreme scales that invalidate model assumptions.\r
\r
These assumptions define the operational contract of the model. Outside this contract, numerical outputs may exist but physical interpretation becomes unreliable.\r
\r
## Quantitative validity domain\r
\r
A minimum quantitative rule is [[r]] strictly greater than zero and geometric scales compatible with point-mass treatment. For field analysis, source mass [[M]] is used to compute [[g]] or [[a]] at radial positions where spherical symmetry remains a valid approximation.\r
\r
For force comparisons, scaling with [[F1]], [[F2]], [[r1]], and [[r2]] is valid only if masses are unchanged between both states. If masses change, the full force law should be reapplied.\r
\r
In surface conditions, [[R]] may replace [[r]]. For elevated points, absolute [[r]] must be used explicitly.\r
\r
## Model failure signals\r
\r
Failure appears when required precision is relativistic or when geometry cannot be reduced to one radial coordinate. Another clear signal is implausible values of [[F]], [[g]], or [[a]] caused by mixed units.\r
\r
A semantic failure occurs when roles are swapped: using test mass [[m]] where [[m1]] and [[m2]] are required, or assuming [[R]] always equals [[r]]. In those cases, equations may be formally correct but attached to the wrong physical system.\r
\r
## Extended or alternative model\r
\r
With multiple sources, field superposition is required to build total [[g]]. With higher precision demands, numerical methods and richer geometry become necessary. Under strong-field conditions, relativistic frameworks replace the Newtonian model.\r
\r
In teaching practice, separating two-body force problems from local-field response problems improves model selection and helps students decide whether [[F]], [[g]], [[P]], or [[a]] is the relevant output.\r
\r
## Operational comparison\r
\r
Ideal model: fast and highly interpretable for most foundational exercises.\r
\r
Local-field model: efficient bridge from source [[M]] to [[g]], [[P]], and [[a]].\r
\r
Extended superposition model: required for multi-source or symmetry-broken scenarios.\r
\r
Selection rule: if one dominant radial distance and clear source definition exist, use ideal or local-field model. Otherwise, escalate model complexity before substitution.`;export{e as default};
