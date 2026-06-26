const n=`# Common mistakes: Flat and Banked Curves\r
\r
## Conceptual errors\r
\r
### Error 1: Reversing cause and effect\r
\r
Many learners say that path curvature creates centripetal force. The causal direction is the opposite: real interactions produce [[Frad]], and that resultant generates [[ac]] to bend the trajectory.\r
\r
### Error 2: Applying formulas without context checks\r
\r
Equation substitution feels straightforward, but without checking [[r]], [[mu]], and operating regime, the result may be numerically clean and physically invalid.\r
\r
### Error 3: Mixing related quantities\r
\r
[[Frad]], [[fs]], and [[Nn]] are often blended conceptually. [[Frad]] is the radial resultant; [[fs]] and [[Nn]] are specific contact forces that contribute depending on geometry and conditions.\r
\r
## Model errors\r
\r
### Error 4: Missing model-breakdown signals\r
\r
Because the ideal model works in many classroom exercises, users may overextend it into transient, high-uncertainty scenarios where it no longer captures dominant behavior.\r
\r
### Error 5: Ignoring explicit validity limits\r
\r
Publishing a precise value without assumptions about grip, speed regime, and uncertainty creates false confidence and weak engineering decisions.\r
\r
## Mathematical errors\r
\r
### Error 6: Careless algebraic rearrangement\r
\r
Small symbolic mistakes can invert trends and hide risk. Every rearrangement should be checked against physical monotonicity and dimensional consistency.\r
\r
### Error 7: Unit-conversion neglect\r
\r
Mixing km/h with SI equations or misusing geometric inputs can shift thresholds enough to invalidate safety conclusions.\r
\r
## Interpretation errors\r
\r
### Error 8: Reporting false precision\r
\r
Many decimal places do not compensate for model uncertainty. Significant figures should match data quality and scope assumptions.\r
\r
### Error 9: Stopping at the numeric output\r
\r
A number without causal interpretation is operationally incomplete. A proper conclusion must state which intervention changes margin: lower [[v]], larger effective [[r]], improved [[mu]], or geometric redesign via [[th]].\r
\r
## Quick self-control rule\r
\r
- Did I build [[Frad]] from real forces only?\r
- Did I distinguish [[ac]], [[fs]], and [[Nn]] clearly?\r
- Did I state assumptions and validity boundaries?\r
- Did I verify units and trend direction?\r
- Did I close with an actionable physical conclusion?\r
\r
If any answer is no, the solution is not physically complete.\r
`;export{n as default};
