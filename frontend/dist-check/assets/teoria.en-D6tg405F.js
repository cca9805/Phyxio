const e=`# Generalized coordinates\r
\r
## Conceptual context\r
\r
Generalized coordinates answer a practical need in analytical mechanics: describe system state with the smallest set of truly independent variables. In many problems, purely Cartesian descriptions are longer than needed because they mix free coordinates with coordinates linked by constraints. The concept does not replace classical geometry; it reorganizes it according to physical structure.\r
\r
This shift changes the modeling question itself. Instead of asking only where a system is in space, we ask which independent variables determine its configuration. Once a constraint binds magnitudes together, part of the written coordinate information stops being free. Generalized coordinates capture that reduction explicitly.\r
\r
In this leaf, planar representation changes between [[x]], [[y]] and [[r]], [[theta]] are coupled with structural degree counting through [[n]], [[C]], and [[f]]. This gives a unified framework joining geometric intuition and model architecture.\r
\r
## 🟢 Essential level\r
\r
The essential idea is that one physical state can be represented in several equivalent ways, but not every way is equally useful for a given task. For planar motion, [[x]] and [[y]] are natural. For radial structure, [[r]] and [[theta]] can be clearer. Neither is more true; usefulness depends on interpretive and computational efficiency.\r
\r
With constraints, the difference between available coordinates and independent coordinates becomes decisive. A particle constrained to a fixed circle does not need two free positional variables; one angular variable may be sufficient. This is not a notation preference, it is a property of system structure.\r
\r
Therefore, degree of freedom should be read as independent-state dimension, not as embedding-space dimension. Keeping this distinction prevents core misunderstandings and prepares cleaner dynamic formulations.\r
\r
## 🔵 Formal level\r
\r
In planar representation, polar-Cartesian conversion is expressed through projection and norm relations. These are representation transforms, not standalone dynamic laws.\r
\r
{{f:posicion_generalizada}}\r
\r
{{f:velocidad_generalizada}}\r
\r
{{f:energia_cinetica_generalizada}}

At the generalized core, [[q]] and [[qdot]] are not direct Cartesian coordinates: they produce the physical position [[r_vec]] and the physical velocity [[v]] through the configuration map. With positive [[m]], [[T]] measures the real kinetic cost of the motion; [[t]] allows moving charts or explicitly time-dependent parametrizations.

{{f:x_desde_polar}}
\r
{{f:y_desde_polar}}\r
\r
{{f:radio_cartesiano}}\r
\r
The first two relations map orientation and scale into horizontal and vertical projections. The third relation reconstructs radial distance from Cartesian components, closing consistency in reverse direction. Valid use requires coherent units and explicit angular convention for [[theta]].\r
\r
Structural independence counting is summarized by:\r
\r
{{f:grados_libertad}}\r
\r
Here [[n]] denotes discrete entities and [[C]] independent constraints. The output [[f]] is the effective configuration-space dimension under the chosen model assumptions. Formally, [[f]] must be non-negative and consistent with declared constraints. If it is not, the issue is usually model structure, not arithmetic execution.\r
\r
## 🔴 Structural level\r
\r
At structural level, the main task is not conversion itself but model architecture. The critical question is which variables preserve causal physical interpretation and which variables only repeat constrained information. This decision governs numerical stability, interpretability, and validation quality.\r
\r
A robust structural reading checks three layers: representation, independence, and validity. Representation means coordinate transforms are readable and reversible in the operating domain. Independence means constraint counting uses truly independent restrictions. Validity means assumptions stay inside intended ranges and are not extrapolated blindly.\r
\r
When one layer fails, recognizable symptoms appear: inconsistent projection signs, non-physical [[f]], or extreme sensitivity to tiny [[theta]] changes. These symptoms are not fixed by adding algebraic steps; they require revisiting model structure and, when needed, changing coordinate choice.\r
\r
## Deep physical interpretation\r
\r
Deep interpretation separates state magnitudes, structural parameters, and counting outcomes. [[r]], [[theta]], [[x]], and [[y]] represent geometric state. [[n]] and [[C]] represent system structure inputs. [[f]] is a structural result. Mixing these semantic levels causes confusion even when numerical calculations appear internally consistent.\r
\r
Causality should also be read in both directions. From polar to Cartesian, [[theta]] redistributes value between [[x]] and [[y]] at fixed [[r]]. From Cartesian to polar, relations between [[x]] and [[y]] recover scale and orientation. This bidirectional reading improves error detection and supports representation choice by physical question.\r
\r
A third semantic layer concerns meaning versus symbol. A value of [[r]] is instantaneous distance to origin, not traveled path length. A value of [[f]] is independent-state count, not spatial orientation count. Correct interpretation is disciplined meaning management.\r
\r
## Order of magnitude\r
\r
In typical teaching laboratories, plausible [[r]] scales can range from 0.05 m to 2 m. In industrial robotic workcells, relevant scales may range from about 0.2 m to 5 m. Comparing these orders helps reject absurd outcomes. If a tabletop mechanism model yields [[r]]=500 m, arithmetic may be correct while physics is clearly wrong.\r
\r
Angular scale comparisons are similarly useful. A change of 0.01 rad usually produces subtle projection changes at moderate radius, while a 1 rad change strongly redistributes [[x]] and [[y]]. If output sensitivity does not reflect this scale difference, angle convention or implementation is likely inconsistent.\r
\r
## Personalized resolution method\r
\r
A reliable workflow is sequential. First, classify magnitudes as state, structural parameter, or derived output. Second, declare angular convention and unit for [[theta]]. Third, identify constraints and test independence. Fourth, choose representation according to physical readability of the question. Fifth, perform conversion or structural counting. Sixth, validate signs, units, and plausible ranges.\r
\r
For mixed tasks, use dual closure: check consistency in the native representation and in the converted representation. If closures disagree, do not patch the final line only; revisit assumptions and variable definitions from the start.\r
\r
## Special cases and extended example\r
\r
Special case 1 is [[r]]=0. At the origin, angular orientation loses positional relevance, so forcing detailed angular interpretation can create artificial quadrant disputes. The correct treatment keeps distance consistency while acknowledging orientation singularity.\r
\r
Special case 2 is redundant constraints. Two different-looking equations may encode one physical restriction. Counting both in [[C]] over-reduces [[f]] and creates false mobility loss. The correction is independence analysis, not post-hoc numeric adjustment.\r
\r
Extended example: in a guided circular mechanism, using Cartesian dynamic states with repeated radial correction may work at low excitation but become unstable at higher frequencies. Switching to [[theta]] as dominant generalized coordinate and reconstructing Cartesian outputs can reduce drift and improve robustness. This illustrates coordinate choice as an engineering design decision, not a notation preference.\r
\r
## Real student questions\r
\r
- If I already have [[x]] and [[y]], why use [[r]] and [[theta]]?\r
Because radial structure can be clearer in polar form, reducing interpretation and control complexity.\r
\r
- Can I write more coordinates than true degrees of freedom?\r
Yes. That means redundancy exists and constraints must be used to recover independence.\r
\r
- Why does [[f]] not always match space dimension?\r
Because [[f]] measures independent configuration variables under constraints, not embedding axes.\r
\r
- What is the most dangerous mistake here?\r
Counting constraints without testing independence, since it corrupts the entire model architecture.\r
\r
## Cross-cutting connections and study paths\r
\r
This topic connects directly with constraints and degrees of freedom, Lagrangian formulation, and symmetry-based reasoning. Understanding generalized coordinates creates a bridge from basic geometry to energy-based dynamics and structured equation building. It also prepares work in control, multibody simulation, and biomechanical modeling.\r
\r
A useful learning path is: coordinate conversion intuition, then structural independence counting, then constrained-system modeling with explicit validity analysis. A recommended transition is from [constraints and degrees of freedom](leaf:fisica-clasica/mecanica/mecanica-analitica/ligaduras-y-grados-de-libertad) to [Lagrange equations](leaf:fisica-clasica/mecanica/mecanica-analitica/lagrangiano/ecuaciones-de-lagrange), where coordinate choice directly shapes dynamic equations.\r
\r
\r
\r
In the generalized core, [[q]] and [[qdot]] are not read as direct Cartesian position: they produce [[r_vec]] and [[v]] through the chart. With positive [[m]], [[T]] summarizes the kinetic cost of motion, and [[t]] detects moving or time-dependent charts.\r
\r
## Final synthesis\r
\r
Generalized coordinates are the language of physical independence in analytical mechanics. They allow equivalent state representations, enable problem-adapted variable choice, and separate visible geometry from effective dynamic structure. When assumptions, units, and constraints are handled coherently, they turn modeling into a robust decision framework rather than a purely algebraic translation process.
`;export{e as default};
