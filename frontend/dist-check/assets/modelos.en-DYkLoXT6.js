const e=`# Physical models: frictionless incline\r
\r
## Ideal model\r
\r
The baseline model describes a block of mass [[m]] moving on a rigid incline of angle [[theta]] under uniform gravity [[g]], without friction and without additional driving forces. Dynamics follows directly from weight decomposition into [[P_par]] and [[P_perp]], with normal reaction [[N]].\r
\r
Operationally, this model answers three engineering-relevant questions at very low cost: what drives the along-plane acceleration [[a]], how long traversal takes over [[L]] ([[t]]), and what terminal speed [[v_f]] is expected. This is why the model remains central in both education and early-stage design screening.\r
\r
## Hypotheses\r
\r
- Continuous block-plane contact.\r
- Negligible friction and secondary dissipation.\r
- Fixed geometry and piecewise-constant [[theta]].\r
- One-dimensional motion along the plane axis.\r
\r
Additional implicit assumptions:\r
\r
- [[g]] is treated as constant within the experiment scale.\r
- No external vibration or actuator input is present.\r
- Rotational dynamics and shape changes are not first-order effects.\r
\r
## Quantitative validity domain\r
\r
Model reliability is strong when:\r
\r
- 0 <= [[theta]] <= 90 degrees.\r
- 0 <= [[a]] <= [[g]].\r
- [[N]] = [[P_perp]] and [[N]] >= 0.\r
- Relative prediction-measurement error <= 10 percent in repeated equivalent runs.\r
- Speed range where aerodynamic drag is not first-order.\r
\r
Domain reading: these inequalities are not decorative. They define the regime where [[P_par]] remains dominant. Once an ignored term becomes comparable, prediction quality drops sharply.\r
\r
## Model failure signals\r
\r
- Measured deceleration appears with unchanged geometry.\r
- Measured [[v_f]] is systematically below ideal prediction.\r
- Measured travel time [[t]] drifts upward under nominally identical conditions.\r
- Normal-axis balance suggests unmodeled forces.\r
\r
Extra methodological signal: if independent groups obtain similarly biased outcomes on equivalent setups, the issue is typically systematic model omission rather than arithmetic noise.\r
\r
## Extended or alternative model\r
\r
When those signals appear, the next model should include dissipation:\r
\r
- Transition to incline with static and kinetic friction.\r
- Add drag or deformation losses when relevant.\r
- Allow parameter drift with surface state or temperature.\r
\r
Explicit transition rule: if relative error remains above 10 percent for three consecutive equivalent measurements, or if measured [[v_f]] and [[t]] become inconsistent with ideal [[a]], switch from frictionless to frictional modeling.\r
\r
This transition rule turns vague intuition into a reproducible decision protocol. Pedagogically, it teaches that model switching is not failure, but disciplined evidence-based practice.\r
\r
## Operational comparison\r
\r
Ideal model:\r
\r
- Maximum causal clarity.\r
- Minimal computational cost.\r
- Best for learning and first-pass estimation.\r
\r
Extended model:\r
\r
- Higher experimental fidelity.\r
- More parameters and calibration effort.\r
- Required for detailed engineering validation.\r
\r
The right criterion is not "most complex model", but "simplest model that still explains data robustly."\r
\r
In short, the ideal model is excellent for causal clarity and fast estimates. The extended model is necessary when high-fidelity decisions are required. Professional-level reasoning requires knowing when and why to move between them.`;export{e as default};
