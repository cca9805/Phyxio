const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A lab sphere descends from an initial height to a lower guide. The task is to estimate final kinetic energy and decide whether the conservative model is sufficient or whether non-conservative transfer must be included.\r
\r
## Data\r
\r
Initial and final heights are known, and initial speed is approximately zero. A measured final speed is also available for validation. Core magnitudes are [[Ki]], [[Ui]], [[Kf]], [[Uf]], [[Em]], [[K]], [[U]], and [[Wnc]].\r
\r
## System definition\r
\r
The system is defined as sphere plus relevant gravitational interaction over the studied segment. This boundary supports a clean state-to-state interpretation. If losses appear, they are recorded through [[Wnc]] instead of being hidden as numerical mismatch.\r
\r
## Physical model\r
\r
The first pass uses the conservative model because the setup minimizes losses. The central state balance is:\r
\r
{{f:conservacion_mecanica}}\r
\r
The definition of mechanical content at each state is:\r
\r
{{f:energia_mecanica_total}}\r
\r
When measurements show consistent deviation from ideal behavior, the model is extended with:\r
\r
{{f:balance_con_no_conservativas}}\r
\r
## Model justification\r
\r
The model is justified by evidence, not habit. Polished contact, short travel, and repeatable runs support a conservative first estimate. Still, measured final data are used to decide whether [[Wnc]] is negligible or physically relevant.\r
\r
This justification is explicit: if losses are small, [[Em]] is nearly constant between states; if losses are visible, the gap between ideal prediction and measurement is interpreted as non-conservative transfer.\r
\r
## Symbolic solution\r
\r
With near-rest initial condition, [[Ki]] is close to zero and [[Ui]] dominates initial mechanical content. At the final state, baseline choice keeps [[Uf]] consistent and most of the content is observed in [[Kf]].\r
\r
Under the ideal model, [[Kf]] follows from balancing [[Ki]], [[Ui]], and [[Uf]]. Under the extended model, mismatch is interpreted through [[Wnc]]. Keeping symbolic structure until late stages improves sensitivity reading: increasing initial height raises [[Ui]] and therefore ideal [[Kf]]; increasing dissipation increases the impact of [[Wnc]] and lowers observed kinetic output.\r
\r
To keep formal continuity inside the symbolic section, the state definition is also used explicitly:\r
\r
{{f:energia_mecanica_total}}\r
\r
## Numerical substitution\r
\r
For typical classroom values, ideal prediction returns a positive and plausible [[Kf]]. Real measurements are often slightly lower. This does not reject the principle; it indicates that the setup is not perfectly ideal.\r
\r
If the difference remains small, the conservative conclusion still holds as first approximation. If the difference is systematic and large, [[Wnc]] is quantified and interpreted as dominant transfer.\r
\r
## Dimensional validation\r
\r
All balance terms must be in joules. If incompatible units appear in one line, physical meaning is compromised even if arithmetic seems correct. It is also checked that [[K]] and [[Kf]] stay nonnegative and that the sign of [[Wnc]] matches dissipative or input behavior.\r
\r
This validation prevents silent errors: numerically plausible outputs with invalid physical interpretation.\r
\r
## Physical interpretation\r
\r
The example shows that conservation is a conditional model, not an unconditional slogan. Under near-ideal conditions, [[Em]] is almost constant and change is mainly redistribution between [[U]] and [[K]]. Under real losses, part of mechanical content is exchanged with the environment and [[Wnc]] becomes necessary.\r
\r
The final reading must be causal, not purely numeric: what changed between [[Ui]] and [[Uf]], how [[Kf]] evolved from [[Ki]], and why [[Wnc]] is small or large in this setup.\r
\r
A stronger interpretation compares limiting scenarios. With near-ideal contact, prediction and measurement converge and [[Wnc]] tends toward zero. With visible dissipation, the magnitude of [[Wnc]] grows and the observed kinetic output drops. This confirms that the principle is not failing; model depth is changing.\r
\r
Interpretation should also support design decisions. If the system objective is maximizing useful motion output, the design should reduce the magnitude of [[Wnc]]. If the objective is impact mitigation, larger transfer in absolute value may be desirable. The same balance therefore supports different engineering goals through different physical priorities.\r
\r
# Real-world example\r
\r
## Context\r
\r
A gravity-fed industrial line transports metallic parts through an inclined channel before classification. Engineers must keep arrival energy high enough for throughput but low enough to avoid damage and wear.\r
\r
## Physical estimation\r
\r
An ideal conservative estimate sets a first target window. Plant data are then compared against that window to identify systematic losses. The difference is mapped to [[Wnc]], supporting redesign decisions in surface treatment, slope, and contact materials.\r
\r
A minimal quantitative workflow has three stages: estimate initial [[Ui]], project ideal [[Kf]], and compare with measured output to infer [[Wnc]]. If the magnitude of [[Wnc]] grows, the system is losing too much useful mechanical content.\r
\r
## Interpretation\r
\r
This real case confirms theory-practice continuity. Ideal balance is efficient for first design. Transfer-aware balance is mandatory for reliable tuning. The correct approach is a sequence: define boundary, compare states, validate units, and interpret exchange.\r
\r
Transferable mastery is operational. A competent learner can explain how [[Em]] is distributed among [[Ki]], [[Ui]], [[Kf]], and [[Uf]], and when [[Wnc]] must be introduced as the dominant term. That is what turns the principle into a professional tool rather than memorized algebra.\r
\r
This final interpretive layer is what makes the example transferable. The learner is not only computing one result for one setup; they are learning to classify conditions, choose model depth, and justify why the chosen model remains physically credible when context changes.\r
`;export{e as default};
