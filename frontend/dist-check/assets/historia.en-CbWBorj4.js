const e=`# History: Quadratic Drag\r
\r
## Historical problem\r
\r
The historical challenge was not to write an elegant formula, but to explain why resistance rises disproportionately at higher speeds. In navigation, ballistics, and early transport engineering, practitioners observed that doubling speed often demanded much more than double the resisting-force compensation.\r
\r
For a long time, local empirical rules existed without a unified interpretation. What was missing was a framework that connected body shape, fluid properties, and force scaling in one coherent model.\r
\r
## Prior conceptual difficulty\r
\r
Three confusions were especially persistent.\r
\r
First, linear and quadratic drag were often mixed as if they were the same law with different constants. Second, shape-related coefficients were treated as universal values independent of regime. Third, analysts frequently ignored that the relevant speed is fluid-relative, not only ground-referenced.\r
\r
These were not minor classroom mistakes. They directly affected prediction quality and design decisions.\r
\r
## What changed\r
\r
The decisive change was methodological: from generic "retarding force" language to scaling-based model selection with explicit validity limits. The quadratic-growth interpretation was established for ranges where inertial-flow effects dominate.\r
\r
A second step was to unpack [[c]] through [[rho]], [[C_d]], and [[A]], transforming an opaque coefficient into interpretable physical factors.\r
\r
With that structure, [[F_d]] prediction became transferable across scenarios instead of remaining a local recipe.\r
\r
## Impact on physics\r
\r
The impact was both scientific and applied. Scientifically, it strengthened regime-aware modeling in mechanics. In engineering, it enabled quantitative arguments for geometry optimization and posture effects in high-speed operation.\r
\r
It also reinforced evidence discipline: quadratic drag is validated through [[F_d]]-[[v]] trends, coefficient stability checks, and declared limits, not by habit.\r
\r
## Connection with modern physics\r
\r
Modern fluid mechanics adds richer tools such as boundary-layer analysis, wake modeling, CFD, and wind-tunnel calibration. These tools refine the picture but do not erase the value of the quadratic model.\r
\r
Today, quadratic drag remains a central pre-analysis instrument because it offers fast causal reading through [[F_d]], [[v]], [[c]], [[rho]], [[C_d]], and [[A]].\r
\r
The historical lesson is clear: the best model is not the most complex one, but the one that captures the dominant mechanism and states its limits explicitly.\r
`;export{e as default};
