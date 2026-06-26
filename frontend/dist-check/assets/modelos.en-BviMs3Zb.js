const e=`# Physical models: Vertical Loop and Contact Condition\r
\r
## Ideal model\r
\r
This leaf uses an ideal circular-loop model where motion is constrained to a rigid track and losses are negligible at first pass. The model is intentionally simplified, not incorrect. Its purpose is to isolate contact-threshold logic and radial-load interpretation.\r
\r
Core simplifications:\r
\r
- negligible friction and damping in baseline analysis\r
- stable loop geometry with well-defined radius [[r]]\r
- particle-like body representation for first-order dynamics\r
- dominant planar motion without strong out-of-plane coupling\r
\r
Under these assumptions, the model captures contact feasibility and load trends with high instructional value and practical early-stage usefulness.\r
\r
## Hypotheses\r
\r
The model relies on explicit hypotheses:\r
\r
- radial equations are applied with a declared sign convention\r
- normal force [[Nn]] represents unilateral contact (push only)\r
- energy linkage for threshold speed is interpreted through ideal conservation of [[E]]\r
- measured inputs are close enough to nominal conditions to avoid hidden regime shifts\r
\r
If these hypotheses are violated, conclusions can remain algebraically consistent while becoming physically unreliable.\r
\r
## Quantitative validity domain\r
\r
The model is robust when:\r
\r
- [[r]] > 0 and geometric closure is preserved\r
- speeds remain within the operating range where ideal assumptions are still dominant\r
- top-contact criterion is evaluated through [[vT]] against threshold\r
- bottom-load interpretation through [[Nn]] is used as first-order estimate\r
\r
Outside this domain, omitted mechanisms become comparable to principal terms and can no longer be ignored.\r
\r
## Model failure signals\r
\r
Typical breakdown indicators include:\r
\r
- persistent mismatch between measured and predicted contact behavior\r
- high sensitivity to small parameter variation without physical explanation\r
- repeated near-threshold operation with unstable contact outcomes\r
- load signatures incompatible with ideal radial predictions\r
\r
These signals indicate that model scope, not arithmetic, is the limiting factor.\r
\r
## Extended or alternative model\r
\r
When the ideal model is insufficient, extensions may include:\r
\r
- dissipative terms for distributed losses\r
- structural flexibility and compliance effects\r
- coupled multibody dynamics\r
- transient control and disturbance modeling\r
\r
The extended model increases fidelity and decision confidence, but also cost and complexity.\r
\r
### Explicit transition to an alternative model\r
\r
Transition when ideal predictions stop being small-error approximations and start producing systematic operational mismatch, especially near contact-threshold decisions.\r
\r
### When to change model\r
\r
If safety, certification, or maintenance decisions depend on effects excluded by the ideal assumptions, switching to the extended model is mandatory.\r
\r
## Operational comparison\r
\r
| Aspect | Ideal model | Extended model |\r
|---|---|---|\r
| Main role | Fast diagnosis | High-confidence validation |\r
| Complexity | Low | Medium/high |\r
| Data demand | Limited | Expanded instrumentation |\r
| Typical use | Teaching and preliminary design | Final verification and incident analysis |\r
| Risk outside domain | High | Lower when calibrated |\r
\r
Best practice is sequential: start ideal for structure and thresholds, escalate to extended modeling when failure signals or decision stakes require it.\r
`;export{e as default};
