const e=`\uFEFF# Common errors in rotation with friction\r
\r
## Conceptual errors\r
A frequent conceptual error is assuming that all angular braking follows the same friction mechanism. Real systems may shift from viscous-dominant behavior at high speed to dry-dominant behavior near stop. Using one model everywhere creates unstable parameter interpretation.\r
\r
Another conceptual mistake is equating numerical fit with physical explanation. A curve may fit a short segment while producing implausible parameters outside that segment. Model credibility requires both low error and physically meaningful coefficients.\r
\r
A third issue is missing sign convention. Without explicit convention for [[omega]] and [[tau_roz]], the same number can be interpreted as dissipation or energy injection.\r
\r
## Model errors\r
A common model error is forcing dry-friction formulation in lubrication-dominant systems. This often produces unrealistic [[mu_k]] values. The opposite error also occurs: forcing viscous linear torque where dry contact dominates.\r
\r
Another model error is keeping inertia constant when mechanical configuration changes during the test. Effective inertia drift can corrupt inferred [[alpha]] values and degrade diagnosis quality.\r
\r
Ignoring residual external torque is also problematic. Small motor input can mask dissipation and create apparently contradictory trends.\r
\r
## Mathematical errors\r
The most common mathematical error is unit mixing, such as using rpm in equations requiring rad/s or using radius in millimeters without conversion. These mistakes may look numerically plausible and therefore require explicit dimensional checks.\r
\r
Another mathematical failure is early rounding in sensitive identification tasks, especially when estimating [[b_rot]] from decay data. Premature rounding alters inferred time constants.\r
\r
A third issue is evaluating formulas near singular conditions without limit handling, such as dividing by [[omega]] close to zero.\r
\r
## Interpretation errors\r
A frequent interpretation error is inferring mechanism from one indicator only. For example, observing decreasing [[omega]] does not automatically prove dry friction dominance.\r
\r
Another error is ignoring energy trend. In passive braking, [[K_rot]] should decrease. Accepting sustained growth without explanation is physically inconsistent.\r
\r
A final interpretation mistake is applying fixed tolerance outside context. Acceptable error depends on final use and risk level.\r
\r
## Quick self-control rule\r
Use this six-point check: declare sign convention, verify SI units, validate parameter domain, select friction model consistent with context, cross-check with energy trend, and publish action-oriented conclusion. If any point fails, mark output as provisional.\r
\r
Consistent use of this checklist improves technical reporting quality and reduces false confidence in superficially correct calculations.\r
`;export{e as default};
