const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A sphere with diameter $0.10\\,\\mathrm{m}$ moves through still air at relative speed [[v]] = $12\\,\\mathrm{m/s}$. The task is to diagnose the flow regime and decide whether a viscosity-dominant, inertia-dominant, or transitional drag-model block should be selected first. The instructor explicitly asks for a justified choice of characteristic length [[L]] and a clear explanation of why [[Re]] is not a force.\r
\r
The exercise also requests a second diagnosis in water with the same geometry and speed to highlight how medium properties modify model choice. The key question is not "what is the drag force now" but "which drag-model family is physically coherent in each medium".\r
\r
## Data\r
\r
For air:\r
\r
- [[rho]] = $1.2\\,\\mathrm{kg/m^3}$\r
- [[eta]] = $1.8\\times 10^{-5}\\,\\mathrm{Pa\\cdot s}$\r
- [[nu]] = $1.5\\times 10^{-5}\\,\\mathrm{m^2/s}$\r
- [[v]] = $12\\,\\mathrm{m/s}$\r
- Sphere diameter: $0.10\\,\\mathrm{m}$\r
\r
For water:\r
\r
- [[rho]] = $1000\\,\\mathrm{kg/m^3}$\r
- [[eta]] = $1.0\\times 10^{-3}\\,\\mathrm{Pa\\cdot s}$\r
- [[nu]] = $1.0\\times 10^{-6}\\,\\mathrm{m^2/s}$\r
- [[v]] = $12\\,\\mathrm{m/s}$\r
- Same geometry\r
\r
Initial scale choice: [[L]] equals the sphere diameter.\r
\r
## System definition\r
\r
The physical system is a rigid body in external flow. The reference speed is the body-fluid relative speed. Characteristic length [[L]] is taken as diameter because it controls wake size and separation behavior for this geometry.\r
\r
Medium properties are assumed effectively constant over the analyzed interval. This is acceptable for first-pass regime diagnosis and model selection, provided that validity limits are explicitly stated.\r
\r
## Physical model\r
\r
The model sequence follows the leaf logic:\r
\r
1. Compute [[Re]] from medium and kinematic inputs.\r
2. Read regime interval for external flow.\r
3. Select the drag-model block consistent with the dominant mechanism.\r
\r
Both core formulas are used to cross-check consistency.\r
\r
## Model justification\r
\r
This approach is justified because model choice depends on whether viscous diffusion or inertial persistence dominates. [[Re]] condenses that competition into an interpretable adimensional criterion. A high-regime reading usually makes a purely linear drag hypothesis weak; a low-regime reading often supports viscosity-dominant assumptions.\r
\r
Repeating the diagnosis in air and water with fixed geometry and speed demonstrates that medium properties can shift model confidence even when the body itself is unchanged. This is exactly why model reuse without regime recalculation is unsafe.\r
\r
## Symbolic solution\r
\r
Path 1, with [[eta]]:\r
\r
{{f:reynolds_viscosidad_dinamica}}\r
\r
Path 2, with [[nu]]:\r
\r
{{f:reynolds_viscosidad_cinematica}}\r
\r
Qualitative dependence:\r
\r
- [[Re]] increases with [[v]].\r
- [[Re]] increases with [[L]].\r
- [[Re]] decreases when viscous diffusion strength of the medium increases.\r
\r
Therefore, the same object can move across regime interpretation when medium or temperature changes.\r
\r
## Numerical substitution\r
\r
For air, using [[nu]], the numerical result is approximately [[Re]] = 8.0e4.\r
\r
For air, using [[eta]], the numerical result is again approximately [[Re]] = 8.0e4.\r
\r
The two paths are consistent.\r
\r
For water, using [[nu]], the numerical result is [[Re]] = 1.2e6.\r
\r
For water, using [[eta]], the numerical result is also [[Re]] = 1.2e6.\r
\r
Interpretation: both media produce high-regime external-flow readings for this geometry and speed. Water yields an even higher value under the given inputs.\r
\r
## Dimensional validation\r
\r
Using the [[eta]] path, unit cancellation yields an adimensional quantity because density, speed, and length are balanced by dynamic viscosity.\r
\r
Using the [[nu]] path, the ratio between speed-length scaling and kinematic viscosity is also adimensional.\r
\r
In both paths, [[Re]] is adimensional as required.\r
\r
## Physical interpretation\r
\r
The physically correct conclusion is not "high [[Re]] means high force by definition". The correct conclusion is: high [[Re]] indicates inertial dominance and suggests starting from an inertia-dominant drag block. Force magnitude still depends on the selected drag law and its parameters.\r
\r
The case also provides a robustness insight: despite medium change, both scenarios remain in high-regime reading for the selected scale and speed. That stabilizes initial model choice in this specific setup.\r
\r
# Real-world example\r
\r
## Context\r
\r
An engineering team designs a protective housing for a meteorological sensor on a mast exposed to winds from $3$ to $20\\,\\mathrm{m/s}$. The team must decide whether one drag correlation is enough or a piecewise strategy is required.\r
\r
They define [[L]] as effective frontal width, estimate seasonal air properties, and compute [[Re]] at speed-band limits. The objective is operational: reduce load-estimation bias without overdesigning support structure.\r
\r
## Physical estimation\r
\r
With fixed [[L]] and typical air [[nu]], [[Re]] moves approximately linearly with [[v]]. Even at low speed, the values remain in inertia-dominant range for this geometry. However, large incidence angles are expected to alter wake structure, so the team plans targeted validation for extreme orientations.\r
\r
The useful output is not one number but a decision map: use inertia-dominant block in nominal operation, and apply additional validation under severe incidence conditions.\r
\r
## Interpretation\r
\r
This real case shows why [[Re]] is a model-architecture tool rather than a final force output. It organizes decisions: which block to start from, where transition risk appears, and how to document validity limits.\r
\r
The transferable lesson is that evaluating [[Re]] across the full operating band usually improves model quality more than refining decimal precision at one nominal point.\r
`;export{e as default};
