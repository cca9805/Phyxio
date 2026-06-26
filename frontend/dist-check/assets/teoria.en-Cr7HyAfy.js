const e=`## Conceptual context\r
\r
A physical pendulum is any rigid body oscillating about a fixed axis that generally does not pass through its center of mass. The core question of this leaf is practical: how do geometry and mass distribution modify oscillation time and natural angular rate. In this setting, the structural inputs are [[I]], [[m]], [[d]], and [[g]], while the observable outputs are [[T]], [[f]], and [[omega0]].\r
\r
This is not a minor variation of the simple pendulum. In the simple model, all mass is concentrated at one effective point. In the physical pendulum, full rotational inertia appears through [[I]], so two objects with the same [[m]] can show different periods if the support axis changes. That is why laboratory measurements are strongly axis-dependent even when total mass remains constant.\r
\r
Dynamically, [[theta]] is the state coordinate and [[theta_dd]] captures instantaneous angular curvature. Their sign relation reveals whether gravity is restoring the system toward equilibrium or whether the body is passing through a turning phase.\r
\r
## 🟢 Essential level\r
\r
At essential level, one idea is enough to orient decisions: gravity provides restoring torque, while rotational inertia resists rapid angular changes. Therefore [[g]] and [[d]] tend to accelerate oscillatory response, whereas larger [[I]] tends to slow it down. If [[d]] increases with all other parameters fixed, the gravitational lever arm increases and [[T]] usually decreases. If [[I]] increases, [[T]] usually increases.\r
\r
Minimum problem-solving literacy is to identify the requested variable before selecting equations. If the target is [[T]], use the period relation. If the target is [[f]], use reciprocal conversion from [[T]]. If the target is [[omega0]], use the natural-rate relation linking inertia and restoring torque.\r
\r
This level also prevents common intuition traps. A larger [[m]] does not automatically imply faster oscillation because [[I]] may change simultaneously. What matters is the structure of the model, not isolated parameter slogans.\r
\r
## 🔵 Formal level\r
\r
The formal layer organizes equations and admissible operations. The natural angular rate for small oscillations is:\r
\r
{{f:omega0_pf}}\r
\r
The linear period is then:\r
\r
{{f:periodo_pf}}\r
\r
Frequency in cycles per second follows from:\r
\r
{{f:frecuencia_pf}}\r
\r
For general amplitudes, angular dynamics is governed by:\r
\r
{{f:ecuacion_no_lineal_pf}}\r
\r
The first three relations are directly calculable in standard workflows. The nonlinear equation is structural and differential; it is not a direct algebraic solve in the same way. Mixing those categories creates procedural mistakes.\r
\r
A robust formal sequence is: define SI values for [[I]], [[m]], [[d]], and [[g]]; compute [[omega0]] or [[T]]; map to [[f]] when needed; and close with a physical interpretation. In experimental settings, add measured-theoretical comparison to test the small-angle assumption.\r
\r
## 🔴 Structural level\r
\r
Structural reasoning makes assumptions explicit. The linear expressions for [[omega0]] and [[T]] assume small angular excursions, fixed pivot, rigid body behavior, and secondary dissipation over the observation window. If one assumption breaks, a numerical result may still look plausible but may no longer be physically transferable.\r
\r
A practical quantitative applicability criterion is to keep initial amplitudes moderate, for instance below about 0.35 rad in instructional setups, and verify that measured [[T]] remains approximately amplitude-independent. If [[T]] increases with launch amplitude, linearization is no longer faithful and the nonlinear angular equation for [[theta]] and [[theta_dd]] must be considered.\r
\r
Another structural requirement concerns [[I]]. It must be defined about the actual support axis. Using an inertia value referenced to a different axis biases [[T]] even if all arithmetic steps are correct.\r
\r
## Deep physical interpretation\r
\r
Deep interpretation links equations to causal mechanisms. Near stable equilibrium, small displacements in [[theta]] induce restoring torque, so [[theta_dd]] typically takes opposite sign in the linear regime. This sign opposition explains oscillation around equilibrium rather than monotonic return.\r
\r
The role of [[m]] must be interpreted jointly with [[I]]. In the natural-rate relation, [[m]] multiplies [[g]] and [[d]], but [[I]] also depends on mass distribution. Therefore the claim "more mass means shorter period" can fail whenever inertia growth dominates.\r
\r
Distinguishing [[f]] from [[omega0]] is also critical. [[f]] is measured in Hz, while [[omega0]] is measured in rad/s. They are linked but not interchangeable without conversion.\r
\r
## Order of magnitude\r
\r
Order-of-magnitude checks prevent physically absurd outputs. In typical educational hardware, [[I]] may range from roughly 0.01 to 1 kg*m^2, [[d]] from 0.02 to 0.5 m, and [[m]] from 0.1 to 5 kg. With terrestrial [[g]], those scales usually produce [[T]] from fractions of a second to several seconds. Millisecond periods for large rigid bodies, or very long periods for compact rigs, usually indicate unit or axis mistakes.\r
\r
Sensitivity checks are equally useful. Because [[T]] scales with a square root, doubling [[I]] does not double [[T]]; it multiplies it by about 1.41. This kind of estimate is enough to detect unrealistic expectations before full recalculation.\r
\r
In reporting, presenting [[T]], [[f]], and [[omega0]] together strengthens internal consistency and makes cross-validation straightforward.\r
\r
## Personalized resolution method\r
\r
Recommended workflow for this leaf:\r
\r
1. Define system boundaries, pivot axis, and positive orientation for [[theta]].\r
2. List SI inputs: [[I]], [[m]], [[d]], [[g]].\r
3. State assumptions: small-angle or general-amplitude regime.\r
4. Select the governing relation for the requested target.\r
5. Execute algebra carefully, avoiding premature rounding.\r
6. Interpret trend directions with respect to [[I]] and [[d]].\r
7. Close with unit check and order-of-magnitude sanity test.\r
\r
If you have angular time-series data, estimate [[T]] from consecutive peaks in [[theta]] and compare with theoretical prediction. If mismatch exceeds expected uncertainty, review amplitude, support friction, and inertia-axis definition.\r
\r
This method is adaptable. In inverse problems, measured [[T]] can be used to infer [[I]] or [[d]], provided measurement quality and assumptions are stated explicitly.\r
\r
## Special cases and extended example\r
\r
Special case 1: very small [[d]]. When center of mass approaches the pivot axis, restoring torque weakens, [[omega0]] decreases, and [[T]] increases significantly. The setup can become more sensitive to friction and alignment errors.\r
\r
Special case 2: large [[I]] due to mass located far from the axis. Even if [[m]] increases, inertia growth may dominate, yielding slower oscillation and larger [[T]].\r
\r
Extended case: a perforated bar with adjustable pivot. Measure [[T]] at three pivot locations. As the pivot approaches center of mass, measured [[T]] increases. Compute [[omega0]] and [[f]] for each configuration and verify trend consistency with changing [[d]]. Then compare small and large launch amplitudes to identify onset of nonlinear behavior in [[theta_dd]].\r
\r
## Real student questions\r
\r
Question 1: why do two bodies with the same [[m]] oscillate differently.\r
Answer: because [[I]] depends on mass distribution relative to the pivot, not just total mass.\r
\r
Question 2: when should I use the nonlinear model.\r
Answer: when angular amplitude is not small and measured [[T]] becomes amplitude-dependent.\r
\r
Question 3: can measured [[T]] be used to estimate [[d]].\r
Answer: yes, if [[I]], [[m]], and [[g]] are known and uncertainty is treated consistently.\r
\r
Question 4: what is the most frequent lab mistake.\r
Answer: using [[I]] referenced to a theoretical axis instead of the actual support axis.\r
\r
Question 5: why report [[f]] in addition to [[T]].\r
Answer: [[f]] is directly comparable with external periodic excitations and resonance criteria.\r
\r
## Cross-cutting connections and study paths\r
\r
This leaf connects with rotational dynamics, oscillatory energy exchange, linearization methods, and experimental parameter identification. It also serves as a bridge to mechanical vibration analysis, where natural frequencies are compared against operational forcing frequencies.\r
\r
Suggested progression:\r
\r
1. Review torque and inertia fundamentals to strengthen interpretation of [[I]].\r
2. Contrast simple and physical pendulum cases under matched [[m]] with altered geometry.\r
3. Practice extracting [[T]] and [[f]] from measured [[theta]] time traces.\r
4. Introduce damping and forcing after mastering free oscillation.\r
\r
The central didactic gain is model-first thinking: decide assumptions before computation.\r
\r
## Final synthesis\r
\r
A physical pendulum is not just a formula lookup. It is a structured dynamical system where geometry and mass distribution determine time scale and angular response. In the linear regime, [[I]], [[m]], [[d]], and [[g]] determine [[omega0]], [[T]], and [[f]], while [[theta]] and [[theta_dd]] describe instantaneous motion and reveal when nonlinear effects matter.\r
\r
A robust solution path is: define the real axis, validate assumptions, select the right equation class, check units, and close with a causal physical reading. Doing so produces not only a numerically correct result but also a reliable explanation of why the system behaves as observed.`;export{e as default};
