const e=`# Physical models: Quadratic Drag\r
\r
## Ideal model\r
\r
This leaf uses a reduced drag model where resistance grows with the square of relative speed. The operational output is [[F_d]], and the reduced parameter [[c]] summarizes medium and geometry effects.\r
\r
The model is intentionally compact. It does not resolve full flow fields; it captures the dominant scaling needed for interpretation, graph reading, and force-balance use in translational dynamics.\r
\r
Active magnitudes are [[F_d]], [[c]], [[v]], [[rho]], [[C_d]], and [[A]]. The bridge form explains why [[c]] is physically grounded rather than arbitrary.\r
\r
## Hypotheses\r
\r
1. The analysis uses speed magnitude [[v]] and drag-force magnitude [[F_d]].\r
2. Body orientation is approximately stable over the analyzed interval.\r
3. Flow regime does not shift abruptly during the measurement window.\r
4. [[C_d]] can be treated as approximately constant on the selected range.\r
5. [[rho]] and [[A]] remain effectively constant for local comparison.\r
\r
If these assumptions break, the quadratic model may still work as a local approximation, but it loses global reliability.\r
\r
## Quantitative validity domain\r
\r
The model is operational when explicit quantitative checks are satisfied:\r
\r
1. Relative fit error lower than or equal to 0.1 in the selected working range.\r
2. Quadratic scaling consistency: when [[v]] doubles, the ratio $[[F_d]](2[[v]])/[[F_d]]([[v]])$ should remain near 4 within agreed tolerance.\r
3. Nonnegative parameters: [[c]] >= 0, [[rho]] >= 0, [[C_d]] >= 0, [[A]] > 0.\r
4. Regime stability: [[C_d]] variations remain below the accepted experimental threshold.\r
\r
Outside these checks, neglected terms become non-negligible and predictive quality drops.\r
\r
## Model failure signals\r
\r
- The [[F_d]] versus [[v]] curve loses consistent upward convexity.\r
- Repeated tests require incompatible values of [[c]] for nominally identical conditions.\r
- Large systematic residuals persist after measurement-quality controls.\r
- Free-body interpretation and graph-based interpretation disagree repeatedly.\r
\r
These signals indicate model mismatch, not just algebraic mistakes.\r
\r
## Extended or alternative model\r
\r
When the reduced quadratic fit is not robust, transition criteria must be explicit:\r
\r
1. If drag behaves approximately proportional to [[v]] in a range, switch to linear drag for that range.\r
2. If [[C_d]] changes strongly with regime, use piecewise or regime-dependent modeling.\r
3. If coupling with lift, rotation, or vibration becomes relevant, adopt an expanded aerodynamic model.\r
4. If design-level accuracy is needed, use body-specific empirical correlations.\r
\r
Explicit transition rule: switch model when systematic error exceeds accepted margin or when scaling tests contradict quadratic growth.\r
\r
## Operational comparison\r
\r
| Aspect | Reduced quadratic model | Extended model |\r
|---|---|---|\r
| Core variable | [[F_d]] with nearly constant [[c]] | [[F_d]] with regime-dependent parameters |\r
| Data demand | [[v]] and calibrated [[c]] | additional regime and geometry data |\r
| Strength | fast and interpretable | higher fidelity in complex scenarios |\r
| Risk | over-extrapolation | unnecessary complexity |\r
\r
Best practice is staged: start with the reduced model, validate quantitative checks, and increase complexity only when data require it.\r
`;export{e as default};
