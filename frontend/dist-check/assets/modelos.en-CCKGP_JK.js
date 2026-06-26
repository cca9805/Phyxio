const e=`# Physical models: real-world systems\r
\r
## Ideal model\r
\r
The baseline model describes a translational mechanical system with aggregated losses. The causal chain is explicit: applied force [[F_ap]], equivalent loss force [[F_loss]], real net force [[F_net]], and resulting acceleration [[a]] over effective mass [[m]].\r
\r
The same system is read energetically through [[P_in]], [[P_out]], [[P_loss]], and efficiency [[eta]]. This dual view prevents disconnected reasoning between dynamics and power behavior.\r
\r
## Hypotheses\r
\r
- Quasi-steady behavior within the analyzed time window.\r
- Moderate parameter variation inside each segment.\r
- Valid conversion from rotational friction to linear loss through [[tau_fr]] and [[r]].\r
- Effective mass [[m]] approximately constant unless variable-mass effects become relevant through [[m_dot]].\r
\r
These assumptions define the validity contract of the baseline model.\r
\r
## Quantitative validity domain\r
\r
Use the baseline model with confidence only when explicit criteria are satisfied:\r
\r
- [[F_loss]] < [[F_ap]] so that [[F_net]] remains positive at start.\r
- 0.5 < [[eta]] <= 0.98 as a realistic operating range.\r
- Relative acceleration mismatch lower than 10 percent for first-level validation.\r
- Mass variation lower than 5 percent of total mass unless [[m_dot]] is explicitly modeled.\r
- Typical net-force order of magnitude between 10^3 and 10^4 N in medium industrial drives.\r
\r
If these conditions fail, the baseline model is no longer predictively robust.\r
\r
## Model failure signals\r
\r
- Persistent acceleration mismatch under repeated operating points.\r
- Sustained growth of [[P_loss]] with no equivalent load increase.\r
- Drift in the [[P_in]] to [[P_out]] relation that cannot be explained by constant [[eta]].\r
- Inconsistency between loss force inferred from dynamics and loss force inferred from [[tau_fr]] and [[r]].\r
\r
These are operationally measurable signals, not subjective impressions.\r
\r
## Extended or alternative model\r
\r
Model transition must be explicit and test-driven.\r
\r
Explicit transition to an extended model when:\r
\r
- Acceleration discrepancy exceeds the technical tolerance in a persistent way.\r
- Load evolution requires variable-mass treatment through [[m_dot]].\r
- Thermal evolution makes [[F_loss]] or [[eta]] state-dependent over the analyzed window.\r
\r
In short: when the error trend is systematic rather than random, move from constant-parameter modeling to state-dependent modeling.\r
\r
## Operational comparison\r
\r
Baseline model:\r
- Low computational cost.\r
- High interpretability.\r
- Strong educational and first-diagnosis value.\r
\r
Extended model:\r
- Higher fidelity under nonlinear conditions.\r
- Better predictive behavior in degradation scenarios.\r
- Higher instrumentation and calibration requirements.\r
\r
The right choice depends on objective: didactic clarity, operational robustness, or high-precision validation.\r
\r
## 7. Final didactic point\r
\r
The key competence in real-system dynamics is not memorizing one formula set, but knowing when a model ceases to be sufficient and how to transition responsibly to a richer representation.`;export{e as default};
