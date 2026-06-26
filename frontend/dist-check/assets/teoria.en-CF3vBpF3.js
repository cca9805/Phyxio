const e=`# Free-Body Diagrams\r
\r
## Conceptual context\r
\r
A free-body diagram is a physical and mathematical representation of an isolated system. Its purpose is not artistic drawing quality but causal clarity: which external interactions are active, how they act, and how they are projected on chosen axes to explain equilibrium or acceleration.\r
\r
In this leaf, the dominant magnitude is [[Fext]], because it condenses the net external effect. However, robust interpretation also requires [[m]], [[a]], [[ax]], [[ay]], [[Fx]], [[Fy]], [[P]], [[N]], [[T]], [[fk]], [[fs]], [[mu_k]], [[mu_s]], [[theta]], [[g]], [[Ppar]], and [[Pperp]].\r
\r
Most student failures are modeling failures rather than algebra failures: mixing the real scene with the isolated system, omitting active forces, adding forces with no physical agent, or projecting on inconsistent axes. Once those errors enter the setup, later calculations can look neat while remaining physically wrong.\r
\r
This topic integrates visual reasoning, magnitude semantics, and Newtonian dynamics. First, identify forces. Second, project by axis. Third, interpret whether each axis is in balance or acceleration and whether the contact regime should change.\r
\r
## 🟢 Essential level\r
\r
At the essential level, the objective is causal discipline before equations. A useful rule is simple: if you cannot name the source body of an arrow, that arrow does not belong in the diagram.\r
\r
Minimal conceptual sequence:\r
\r
1. Define the isolated system boundary.\r
2. List only external interactions on that system.\r
3. Choose axes that simplify physical reading.\r
4. Assign directions based on support, pull, or opposition.\r
\r
At this stage, complete calculation is not the priority. Correct representation is. For example, on an incline it is common to swap [[Ppar]] and [[Pperp]], or to draw [[N]] vertically instead of normal to the surface. Another frequent issue is to use [[fk]] and [[fs]] as if both could apply at once, even though they represent different contact regimes.\r
\r
Students also tend to treat resultant force as a sum of magnitudes. In reality, [[Fext]] is a vector sum, so direction is mandatory before arithmetic.\r
\r
Essential plausibility checks:\r
\r
- If support is maintained, [[N]] should remain non-negative.\r
- If there is no relative sliding, the relevant friction is usually [[fs]], not [[fk]].\r
- Horizontal acceleration may coexist with near-zero vertical resultant.\r
\r
These insights do not replace formal analysis; they prevent formal analysis from starting on a broken model.\r
\r
## 🔵 Formal level\r
\r
At the formal level, the diagram is translated into quantitative relations consistent with classical mechanics. Core formulas are:\r
\r
{{f:newton_vectorial}}\r
\r
{{f:newton_x}}\r
\r
{{f:newton_y}}\r
\r
{{f:equilibrio_vertical}}\r
\r
{{f:rozamiento_cinetico}}\r
\r
{{f:rozamiento_estatico}}\r
\r
{{f:componentes_peso_plano}}\r
\r
These expressions form a modeling contract:\r
\r
- The vector equation links global external action to motion change through [[Fext]].\r
- Axis equations convert the problem into scalar balances for [[Fx]], [[Fy]], [[ax]], and [[ay]].\r
- Vertical equilibrium is contextual, not universal.\r
- Kinetic friction uses [[mu_k]] and contact load through [[N]].\r
- Static friction is an upper bound on [[fs]], not an always-on equality.\r
- Weight decomposition depends on [[theta]] and angle convention.\r
\r
Formal coherence checklist:\r
\r
1. Units: forces in N, acceleration in m/s^2, mass in kg.\r
2. Signs: consistent with declared axis orientation.\r
3. Regime declaration: static or kinetic contact before substitution.\r
4. Contact logic: if support is lost, assumptions on [[N]] must be updated.\r
\r
Compact formal reading example:\r
\r
- On an incline, split [[P]] into [[Ppar]] and [[Pperp]].\r
- On the normal axis, compare [[Pperp]] and [[N]] to confirm support state.\r
- On the tangential axis, combine [[Ppar]], [[T]], and friction to get [[Fx]] and therefore [[ax]].\r
\r
The point of formal level is traceability: every equation term must map back to an explicit force in the diagram.\r
\r
## 🔴 Structural level\r
\r
The structural level asks when the simplified model remains reliable and when extension is required. A correct diagram is necessary but not sufficient for robust prediction.\r
\r
Typical validity limits:\r
\r
1. Rapid contact transitions that break quasi-static assumptions.\r
2. Surface states where [[mu_s]] and [[mu_k]] are not stable effective parameters.\r
3. Geometries where poor axis choice hides relevant interactions.\r
4. Unmodeled couplings such as deformation, vibration, or impulsive excitation.\r
\r
Operational structural criteria:\r
\r
- If prediction and observation diverge repeatedly, audit the diagram before tuning parameters.\r
- If computed sign for [[Fy]] or [[Fx]] contradicts physical motion tendency, suspect missing forces or wrong axis orientation.\r
- If the system toggles between adhesion and sliding, explicitly declare regime transition instead of forcing one formula globally.\r
\r
Model escalation should be layered:\r
\r
1. Keep the free-body map as the traceability core.\r
2. Add contact/friction detail only when evidence demands it.\r
3. Move to transient modeling when partial-equilibrium assumptions fail persistently.\r
\r
This strategy prevents both under-modeling and unnecessary complexity.\r
\r
## Deep physical interpretation\r
\r
Deep interpretation is causal, not decorative. Every arrow represents a physical interaction. Every projection answers a specific question about change in motion.\r
\r
If [[Fx]] is non-zero while [[Fy]] is near zero, that is not a contradiction. It is a physically meaningful regime: acceleration on one axis with balance on the other.\r
\r
If [[fs]] remains below its bound and no slip occurs, the conclusion is not merely numerical. It means the contact interface still compensates tangential demand without adhesion breakdown.\r
\r
Free-body diagrams are also diagnostic tools. When measurements disagree with predictions, the first step is not forcing numbers into formulas; it is auditing agent, direction, regime, and projection logic.\r
\r
## Order of magnitude\r
\r
Useful order-of-magnitude references in educational and practical contexts:\r
\r
- [[m]]: from fractions of kg in lab setups to hundreds of kg in light machinery.\r
- [[g]]: around 9.8 m/s^2 near Earth surface.\r
- [[P]]: from N scale to thousands of N depending on [[m]].\r
- [[N]]: often same order as [[P]] in simple support.\r
- [[T]]: broad range based on load transfer.\r
- [[Fx]] and [[Fy]]: axis-dependent outcomes, not direct substitutes of total force.\r
- [[a]], [[ax]], [[ay]]: near zero in quasi-static states, larger in starts and stops.\r
- [[mu_s]] and [[mu_k]]: dimensionless contact parameters sensitive to material state.\r
- [[theta]]: controls redistribution between [[Ppar]] and [[Pperp]].\r
- [[fk]] and [[fs]]: regime-dependent contact responses.\r
- [[Ppar]] and [[Pperp]]: geometric components of weight in incline-aligned axes.\r
\r
These references support fast sanity checks before detailed recalculation.\r
\r
## Personalized resolution method\r
\r
1. Define system and boundary.\r
2. Draw only justified external forces.\r
3. Choose axes aligned with constraints or expected motion.\r
4. Project forces and write axis balances.\r
5. Declare contact and friction regime explicitly.\r
6. Solve target variables.\r
7. Check units, signs, and order of magnitude.\r
8. Close with causal interpretation and operational recommendation.\r
\r
## Special cases and extended example\r
\r
Special case A: incline without slip. Static-friction bound determines feasibility.\r
\r
Special case B: transition to slip. Friction model changes and tangential balance must be updated.\r
\r
Special case C: vertical equilibrium with horizontal acceleration. Demonstrates why [[Fy]] and [[Fx]] must be treated independently.\r
\r
Extended integrated case:\r
\r
- A system on an incline with variable [[theta]].\r
- Track impact of [[theta]] on [[Ppar]], [[Pperp]], [[N]], and friction demand.\r
- Identify transition from static to kinetic regime with clear physical trigger.\r
\r
## Real student questions\r
\r
Why cannot I draw a "force of motion"?\r
\r
Because motion is an effect, not an external agent.\r
\r
Why can two different diagrams represent one scene?\r
\r
Because axis choices and decomposition detail can vary while preserving physical equivalence.\r
\r
When should I use [[fs]] versus [[fk]]?\r
\r
Use [[fs]] before relative slip; use [[fk]] after slip starts.\r
\r
If [[Fext]] is zero, must the object be at rest?\r
\r
No. Zero resultant means zero acceleration, which allows constant velocity.\r
\r
## Cross-cutting connections and study paths\r
\r
This leaf connects with vector decomposition, axis-based Newton equations, friction analysis, incline dynamics, mechanism design, and contact diagnostics in engineering systems.\r
\r
Suggested path:\r
\r
1. Horizontal-support free-body diagrams.\r
2. Inclined-plane diagrams with and without friction.\r
3. Rope and pulley idealizations.\r
4. Cross-validation with work-energy methods.\r
\r
## Final synthesis\r
\r
Mastering free-body diagrams means translating physical scenes into causal, testable models. When the diagram is correct, equations gain meaning and interpretation becomes predictive rather than mechanical.\r
\r
The core competence is not template memorization; it is deciding which forces exist, how they project, and when the model must escalate in complexity.\r
`;export{e as default};
