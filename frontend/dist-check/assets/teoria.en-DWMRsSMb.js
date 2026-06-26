const e=`# Hooke's law\r
\r
## Conceptual context\r
\r
This leaf develops a local constitutive law, not a full dynamic model of spring systems. That distinction keeps this topic unique relative to sibling leaves about assemblies of springs. The core object here is the linear mapping between deformation [[x]] and elastic response [[Fel]], together with related quantities [[Fm]], [[x_eq]], and [[Uel]].\r
\r
The key question is not only "how much force does the spring apply", but also "under which assumptions is linear proportionality justified". Hooke's law is valid in a bounded regime: small deformation, elastic material behavior, and explicit axis convention.\r
\r
This framing matters in practice. It supports quick engineering estimates, clean interpretation of force-deformation data, and early detection of model breakdown when measured behavior departs from linearity.\r
\r
## 🟢 Essential level\r
\r
At the essential level, keep one strong intuition: deforming the spring produces a restoring response that tends to recover the reference configuration.\r
\r
Two practical points are fundamental.\r
\r
1. The sign of elastic response depends on axis convention. Different conventions can produce different algebraic signs for the same physical situation.\r
2. The modulus gives intensity only; it does not encode direction.\r
\r
A second conceptual boundary is equally important: a constitutive relation is not a full equation of motion. Hooke's law gives local spring response, while complete dynamics may require additional elements such as inertia, damping, forcing, and constraints.\r
\r
A useful self-check in this stage is to compare two limiting states mentally: zero deformation and small nonzero deformation. If the explanation does not clearly separate those states, conceptual understanding is still incomplete even before equations are written.\r
\r
## 🔵 Formal level\r
\r
The formal core of this leaf is built with five relations.\r
\r
**Hooke's law in 1D:**\r
\r
{{f:hooke_1d}}\r
\r
This links [[Fel]], [[k]], and [[x]] with restoring sign information.\r
\r
**Elastic force magnitude:**\r
\r
{{f:hooke_modulo}}\r
\r
This defines [[Fm]] as force intensity without direction.\r
\r
**Vertical mass-spring equilibrium:**\r
\r
{{f:equilibrio_vertical_muelle}}\r
\r
This gives [[x_eq]] in terms of [[m]], [[g]], and [[k]] under static equilibrium.\r
\r
**Elastic potential energy:**\r
\r
{{f:energia_potencial_elastica}}\r
\r
This defines stored elastic energy [[Uel]] as a state quantity associated with deformation.\r
\r
**Restoring criterion:**\r
\r
{{f:criterio_restaurador}}\r
\r
This criterion checks sign consistency for restoring behavior in a 1D convention.\r
\r
A robust workflow is: state convention, verify linear regime, compute target quantity, then perform physical checks.\r
\r
## 🔴 Structural level\r
\r
Structural reasoning asks when linear elasticity remains a defensible approximation.\r
\r
Three checks are useful in real work:\r
\r
1. **Linearity in data**: force-deformation points remain close to a straight trend.\r
2. **Energy consistency**: computed [[Uel]] behaves as expected for stable elastic storage.\r
3. **Parameter stability**: inferred [[k]] does not drift strongly in the same operating interval.\r
\r
When these checks fail, model transition is required: piecewise nonlinear relations, hysteretic formulations, or viscoelastic models.\r
\r
This section also enforces topic uniqueness. Here we characterize one constitutive law; we do not derive full multi-spring network dynamics.\r
\r
In engineering workflow this distinction prevents communication errors. Materials teams often report valid local stiffness in a tested interval, while system teams need boundary conditions and coupling details. If those levels are merged without explicit scope, numerical disagreement appears later and is misdiagnosed as a solver issue when it is actually a modeling-scope mismatch.\r
\r
## Deep physical interpretation\r
\r
Good interpretation separates direction, intensity, and energy.\r
\r
- [[Fel]] tells direction of restoring action.\r
- [[Fm]] tells intensity level.\r
- [[Uel]] tells storage capacity and release potential.\r
\r
Vertical equilibrium is best read as force balance between gravity terms involving [[m]] and [[g]], and spring reaction governed by [[k]]. If [[x_eq]] is geometrically impossible for a setup, the issue is often model validity, not algebra.\r
\r
Scaling insight is critical: if [[x]] doubles, force scales linearly but energy scales quadratically. This explains why moderate deformation increases can trigger large energy growth.\r
\r
There is also an experimental reading behind this scaling statement. When force sensors and displacement sensors are both available, plotting force against deformation may still look linear in a short interval, while energy integrated over displacement grows much faster. This gap between visual linearity and energetic growth is one reason why safety margins should not rely on force-only intuition.\r
\r
A second interpretive layer concerns calibration drift. If repeated cycles produce slight slope change in force-deformation data, the immediate question is not only "what is the new stiffness" but also "did the constitutive regime change". This is where combining directional force logic, scalar load reporting, and energy interpretation provides a stronger diagnosis than any single metric.\r
\r
## Order of magnitude\r
\r
Useful reference intervals for sanity checks:\r
\r
**[[Fel]]**: 0.1 - 10000 N\r
\r
**[[Fm]]**: 0.1 - 10000 N\r
\r
**[[k]]**: 1 - 100000 N/m\r
\r
**[[x]]**: 1e-4 - 0.5 m\r
\r
**[[x_eq]]**: 1e-4 - 0.3 m\r
\r
**[[m]]**: 0.01 - 500 kg\r
\r
**[[g]]**: 9.78 - 9.82 m/s^2\r
\r
**[[Uel]]**: 1e-3 - 500 J\r
\r
These are practical benchmarks, not universal constants. They help detect unit mistakes, sign mistakes, and implausible assumptions.\r
\r
In project documentation, these ranges are often turned into automatic checks. For example, if predicted deformation leaves the expected operating window, the solver can raise a warning before downstream calculations continue. Such guardrails are not a replacement for judgment, but they reduce silent propagation of modeling errors.\r
\r
Another practical use is communication across teams. A test engineer may report values in one set of units while a design engineer works in another. Keeping explicit range references tied to SI units makes cross-validation faster and reduces avoidable conversion mistakes.\r
\r
## Personalized resolution method\r
\r
1. Define setup and axis convention.\r
2. Select target quantity: [[Fel]], [[Fm]], [[x_eq]], or [[Uel]].\r
3. Apply the corresponding core relation.\r
4. Check assumptions: linear domain, restoring sign, and unit consistency.\r
5. Conclude with physical interpretation and validity statement.\r
\r
This sequence minimizes the risk of obtaining mathematically correct but physically unusable outputs.\r
\r
It also improves review quality. A reviewer can check each stage independently: convention statement, constitutive application, unit logic, and interpretation. If any stage is missing, confidence in the final result should be downgraded, regardless of how polished the numerical section looks.\r
\r
For educational use, this method creates a repeatable habit. Students stop seeing Hooke's law as one formula to memorize and start treating it as a compact modeling protocol with explicit assumptions and measurable consequences.\r
\r
## Special cases and extended example\r
\r
**Special case 1 - Near-zero deformation**: useful for sign diagnostics and sensitivity checks.\r
\r
**Special case 2 - Deformation doubling**: highlights linear force growth and quadratic energy growth.\r
\r
**Special case 3 - Heavy vertical load**: forces explicit validation that [[x_eq]] remains inside the linear regime.\r
\r
An extended integrated example should combine all five relations coherently: signed force, force magnitude, static equilibrium, elastic energy, and restoring consistency.\r
\r
## Real student questions\r
\r
**If [[k]] is known, can Hooke always be used directly?**\r
No. You still need evidence that the operating deformation interval is approximately linear.\r
\r
**Why keep [[Uel]] if [[Fel]] is already available?**\r
Force and energy answer different physical and engineering questions.\r
\r
**What if [[Fel]] and [[x]] have the same sign in a restoring convention?**\r
That usually indicates a sign-convention issue or operation outside the intended regime.\r
\r
**Does this leaf replace full spring-system analysis?**\r
No. This leaf gives local constitutive behavior; system-level leaves handle global assembly effects.\r
\r
## Cross-cutting connections and study paths\r
\r
This topic connects naturally to elastic-force fundamentals, energy methods, and experimental material characterization. It also prepares later dynamic leaves where local constitutive behavior is embedded into time evolution.\r
\r
A productive study route is: signed 1D relation, force magnitude, vertical equilibrium, elastic energy, then model-boundary diagnostics.\r
\r
Two cross-links are especially useful.\r
\r
First, with uncertainty analysis: once constitutive predictions are made, uncertainty in stiffness and displacement should be propagated to force and energy outputs. This prevents false confidence in precise-looking numbers.\r
\r
Second, with control and vibration topics: local spring behavior appears inside larger dynamic models where damping and external forcing are present. Understanding the local constitutive block makes those later models easier to interpret and debug.\r
\r
A strong learning progression therefore alternates between local and system perspectives. Start local to lock down signs, units, and constitutive logic. Then move to system-level dynamics while preserving that local discipline. Returning to local checks during advanced analysis is often what catches hidden modeling inconsistencies.\r
\r
## Final synthesis\r
\r
Hooke's law is powerful when used with model awareness. The essential discipline is to state assumptions explicitly, compute with correct sign logic, and interpret outputs in terms of physical validity.\r
\r
With that discipline, this leaf becomes a reliable basis for mechanical analysis, experiment design, and engineering decisions.\r
\r
The deeper takeaway is methodological. Hooke's law is not valuable because it is simple; it is valuable because it is simple under explicit assumptions. That distinction is the core of mature modeling practice in physics and engineering.\r
`;export{e as default};
