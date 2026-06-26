const e=`# Common mistakes: Vertical Loop and Contact Condition\r
\r
## Conceptual errors\r
\r
### Error 1: Reversing cause and effect\r
\r
Students often treat centripetal force as an extra force instead of interpreting it as the required radial resultant. In this leaf, curvature is the effect, while real interactions are the cause. If that order is reversed, force diagrams become inconsistent and contact conclusions fail.\r
\r
### Error 2: Using equations without scenario validation\r
\r
A correct equation can still be used in the wrong place. Top equations and bottom equations are not interchangeable. Failing to declare the analysis point before substitution is one of the most common loop mistakes.\r
\r
### Error 3: Mixing similar quantities\r
\r
[[v]], [[vT]], and [[vB]] are often merged as if they represented the same state. They do not. [[vT]] governs top contact, while [[vB]] controls entry conditions. Confusing them can produce numerically clean but physically wrong answers.\r
\r
## Model errors\r
\r
### Error 4: Missing model-breakdown conditions\r
\r
The ideal loop model performs well in clean cases, but it can fail under significant dissipation, deformation, or coupled vibrations. Ignoring these effects leads to systematic mismatch between prediction and measurement.\r
\r
### Error 5: Ignoring declared validity limits\r
\r
Even when formulas are correct, conclusions become weak if assumptions are not reported. Every operational result should include model scope and escalation criteria.\r
\r
## Mathematical errors\r
\r
### Error 6: Careless sign handling in rearrangements\r
\r
A sign mistake in radial projection can flip the contact verdict. This is especially critical near the top threshold where [[Nn]] is small.\r
\r
### Error 7: Unit inconsistency\r
\r
Mixing units for [[r]], [[g]], and speed values can shift thresholds enough to change safety decisions. Always normalize to SI before substitution.\r
\r
## Interpretation errors\r
\r
### Error 8: False precision\r
\r
Reporting many decimals does not improve model credibility. Precision must reflect data quality and assumption uncertainty.\r
\r
### Error 9: Stopping at the number\r
\r
A final value without causal interpretation is incomplete. A good loop result states what variable should be adjusted first and why that adjustment improves margin.\r
\r
## Quick self-control rule\r
\r
- Did I define the analysis point before selecting the equation?\r
- Did I keep [[vT]] and [[vB]] separated by physical state?\r
- Did I verify the sign and feasibility of [[Nn]]?\r
- Did I state model assumptions and validity limits?\r
- Did I end with an actionable physical conclusion?\r
\r
If any answer is no, the solution is not operationally reliable yet.\r
`;export{e as default};
