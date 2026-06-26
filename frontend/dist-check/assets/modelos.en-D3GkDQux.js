const e=`# Physical models: Net Force Balance Condition\r
\r
## Ideal model\r
\r
This leaf uses a translational static model: a body is in equilibrium when the vector sum of all external forces is zero. The model does not assume force absence; it assumes force compensation.\r
\r
Main idealizations:\r
\r
- Cables are treated as massless with uniform [[T]].\r
- Contact reactions are represented as concentrated forces.\r
- The analysis is performed in a 2D inertial frame.\r
- The geometric angle [[theta]] is measured from an explicitly declared reference axis.\r
\r
## Hypotheses\r
\r
The model is valid only if these assumptions are respected:\r
\r
1. The free-body diagram includes all relevant external forces.\r
2. Sign conventions are fixed before equations are written.\r
3. If [[m]] is given, it is converted into weight force before force summation.\r
4. The body can be approximated as rigid for translational balance.\r
\r
Breaking one of these assumptions can produce mathematically neat but physically incorrect solutions.\r
\r
## Quantitative validity domain\r
\r
A practical quantitative validity set is:\r
\r
1. abs(sumFx) <= 0.02 * F_ref\r
2. abs(sumFy) <= 0.02 * F_ref\r
3. abs(delta[[theta]]) <= 2 degrees in introductory lab setups\r
4. Relative mismatch in predicted [[T]] <= 5% versus instrument readings\r
\r
With F_ref typically between 10 N and 1000 N, those thresholds separate acceptable static balance from measurable imbalance.\r
\r
## Model failure signals\r
\r
Typical breakdown indicators:\r
\r
- Persistent force residuals with the same sign across repeated trials.\r
- Negative cable tension after checked algebra.\r
- Geometrically impossible angle requirements.\r
- Observable body rotation while translational equations appear closed.\r
\r
The fourth indicator is essential: translational equilibrium is necessary but not sufficient for full static equilibrium.\r
\r
## Extended or alternative model\r
\r
When should you change model? You should change when translational balance alone cannot explain observed behavior or residual patterns.\r
\r
Common model transitions:\r
\r
1. Add torque balance if rotation matters.\r
2. Add friction laws if tangential contact forces are relevant.\r
3. Move to dynamic equations if acceleration is not negligible.\r
\r
Explicit transition statement: when it is convenient to change model, move to the friction model or to the moment-balance model depending on the mechanism that dominates the error.\r
\r
## Operational comparison\r
\r
| Aspect | Translational balance | Extended model |\r
|--------|------------------------|----------------|\r
| Core closure | sumFx = 0, sumFy = 0 | sumF plus extra mechanisms |\r
| Complexity | Low | Medium to high |\r
| Typical parameters | [[F]], [[T]], [[m]], [[theta]] | plus friction, torques, inertia |\r
| Best use case | Fast equilibrium diagnosis | Final design validation |\r
| Field robustness | Good under tolerance criteria | Better in complex scenarios |\r
\r
Mastering this baseline model is what enables informed escalation to richer physical descriptions.\r
`;export{e as default};
