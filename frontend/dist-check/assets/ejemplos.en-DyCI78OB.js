const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A spring network is built with two ideal springs in series, with [[k1]] = 300 N/m and [[k2]] = 600 N/m. The total imposed deformation is [[x]] = 0.09 m from the natural position. Determine:\r
\r
1. The equivalent stiffness [[keq]] of the series network.\r
2. The signed total elastic force [[Fel]] and its magnitude [[Fm]].\r
3. The internal deformation split [[x1]] and [[x2]].\r
4. Dimensional consistency and physical plausibility checks.\r
5. The qualitative change if the same springs are mounted in parallel.\r
\r
## Data\r
\r
- [[k1]] = 300 N/m\r
- [[k2]] = 600 N/m\r
- [[x]] = 0.09 m\r
- Linear ideal regime with negligible internal dissipation\r
- Positive axis aligned with imposed deformation\r
\r
For architecture comparison, the same values of [[k1]], [[k2]], and [[x]] are used in a parallel configuration.\r
\r
## System definition\r
\r
Primary system: two-spring series connection. In this topology, force transmission is common through both elements, while total deformation [[x]] is distributed into [[x1]] and [[x2]]. The exercise is quasi-static and constitutive; inertial effects are not modeled here.\r
\r
This definition prevents a common mistake: treating a spring network as if it were a single spring law problem. In this leaf, topology is a core driver of global behavior.\r
\r
## Physical model\r
\r
The complete core set of this leaf is used:\r
\r
{{f:serie_dos_muelles}}\r
\r
{{f:hooke_equivalente_1d}}\r
\r
{{f:hooke_equivalente_modulo}}\r
\r
{{f:reparto_serie}}\r
\r
{{f:paralelo_dos_muelles}}\r
\r
{{f:reparto_paralelo}}\r
\r
{{f:equilibrio_vertical}}\r
\r
The vertical-equilibrium relation is not required for the main numeric result, but it is included to keep theoretical continuity with load-supported systems where [[m]], [[g]], and [[x_eq]] appear.\r
\r
## Model justification\r
\r
This model choice is valid because the problem explicitly states ideal linear springs and moderate deformation. Under those assumptions, the equivalent stiffness representation is physically meaningful and computationally efficient.\r
\r
Including both series and parallel formulas is not redundant. It highlights the central idea of this leaf: changing architecture changes effective system response even when components are identical.\r
\r
## Symbolic solution\r
\r
For series equivalent stiffness:\r
\r
{{f:serie_dos_muelles}}\r
\r
For signed total force:\r
\r
{{f:hooke_equivalente_1d}}\r
\r
For force magnitude:\r
\r
{{f:hooke_equivalente_modulo}}\r
\r
For internal deformation distribution:\r
\r
{{f:reparto_serie}}\r
\r
For topology contrast in parallel:\r
\r
{{f:paralelo_dos_muelles}}\r
\r
and for branch-force bookkeeping:\r
\r
{{f:reparto_paralelo}}\r
\r
For vertical mounting reference displacement:\r
\r
{{f:equilibrio_vertical}}\r
\r
## Numerical substitution\r
\r
Using [[k1]] = 300 and [[k2]] = 600 in series gives [[keq]] = 200 N/m.\r
\r
With [[x]] = 0.09 m, the signed force is restoring and equals [[Fel]] = -18 N, while [[Fm]] = 18 N.\r
\r
Because force is common in series, deformation split is asymmetric: [[x1]] = 0.06 m and [[x2]] = 0.03 m, satisfying total [[x]] as the sum of both contributions.\r
\r
For comparison, parallel mounting gives [[keq]] = 900 N/m with the same pair of springs. At equal imposed [[x]], total magnitude [[Fm]] becomes much larger, and branch values [[F1]] and [[F2]] add up to the same total according to spring stiffness ratio.\r
\r
## Dimensional validation\r
\r
Equivalent stiffness keeps stiffness units, total force keeps force units, and deformation keeps length units. In addition, three qualitative checks confirm the solution:\r
\r
1. In series, [[keq]] is lower than both [[k1]] and [[k2]].\r
2. In parallel, [[keq]] is greater than each individual stiffness.\r
3. In series, the softer spring receives the larger deformation share.\r
\r
These checks are practical and sufficient to catch most setup or algebra mistakes.\r
\r
## Physical interpretation\r
\r
The key output is a design rule, not only a number. Series topology provides lower global stiffness and therefore larger compliance for the same load. Parallel topology provides higher global stiffness and stronger displacement limitation.\r
\r
Internal distribution is equally important. A safe total [[x]] can still hide overload risk in one branch if [[x1]], [[x2]], [[F1]], and [[F2]] are not tracked explicitly. This is why system-level interpretation must go beyond total-force reporting.\r
\r
Continuity with vertical loading is immediate: once [[keq]] is known from topology, the same parameter controls static sink [[x_eq]] when [[m]] and [[g]] are introduced. This keeps the leaf coherent and avoids formula memorization without model context.\r
\r
# Real-world example\r
\r
## Context\r
\r
A compact instrument suspension must carry variable payload while staying inside a strict travel limit. Engineers have two commercial springs with known [[k1]] and [[k2]], and must choose between series mounting for compliance or parallel mounting for stiffness.\r
\r
The test team reports total load as [[Fm]], but reliability analysis also requires branch tracking through [[F1]] and [[F2]]. In addition, static sink under gravity is checked with [[m]], [[g]], and [[x_eq]] to ensure the resting position leaves enough dynamic margin.\r
\r
## Physical estimation\r
\r
Step one is to compute [[keq]] for each architecture. That immediately predicts displacement sensitivity under operating loads.\r
\r
Step two is internal distribution analysis. In series, [[x1]] and [[x2]] are checked to ensure no individual spring exceeds strain limits. In parallel, [[F1]] and [[F2]] are checked so branch loads remain inside datasheet limits.\r
\r
Step three is static equilibrium screening: with expected [[m]], engineers estimate [[x_eq]] and reject architectures that consume too much available stroke before any dynamic excitation is applied.\r
\r
## Interpretation\r
\r
This application shows why spring systems cannot be reduced to a single Hooke equation. Topology selection changes sensitivity, transmitted load, and local safety margin.\r
\r
A robust workflow therefore combines equivalent response and branch-level checks. Using [[keq]], [[Fel]], [[Fm]], [[x1]], [[x2]], [[F1]], [[F2]], [[m]], [[g]], and [[x_eq]] in one consistent model improves traceability and reduces late-stage design surprises.\r
\r
The practical outcome is actionable: architecture choice should be justified with quantified criteria, not with intuition alone. That is the core engineering value of this leaf.\r
`;export{e as default};
