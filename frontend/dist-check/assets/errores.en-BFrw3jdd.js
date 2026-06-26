const e=`## Conceptual errors\r
\r
### Error 1: Treating spatial dimension as degree-of-freedom count\r
\r
**Why it seems correct**\r
A common overgeneralization assumes that a 3D setting always implies three independent coordinates.\r
\r
**Why it is incorrect**\r
Constraints reduce independence, so [[f]] does not necessarily match spatial dimension.\r
\r
**Detection signal**\r
[[f]] is reported without explicit use of [[C]] and without checking independence.\r
\r
**Conceptual correction**\r
Separate geometric embedding from configuration-space structure before counting.\r
\r
**Mini contrast example**\r
Two particles in 3D with fixed separation are not six-free-coordinate systems.\r
\r
## Model errors\r
\r
### Error 2: Choosing coordinates only for algebraic convenience\r
\r
**Why it seems correct**\r
Shorter algebra often looks efficient and can mask loss of physical clarity.\r
\r
**Why it is incorrect**\r
Without explicit meaning, variables cannot be physically validated.\r
\r
**Detection signal**\r
The modeler cannot state observable meaning for each chosen coordinate.\r
\r
**Conceptual correction**\r
Choose coordinates by independence and physical interpretability first.\r
\r
**Mini contrast example**\r
A numerically stable fit may still violate geometric constraints if variables are physically opaque.\r
\r
## Mathematical errors\r
\r
### Error 3: Mixing degree and radian conventions in [[theta]]\r
\r
**Why it seems correct**\r
Different tools default to different angular conventions.\r
\r
**Why it is incorrect**\r
Trigonometric projections become inconsistent across [[x]], [[y]], and [[r]].\r
\r
**Detection signal**\r
Quadrant sign expectations do not match computed components.\r
\r
**Conceptual correction**\r
Declare angular units and preserve them throughout the workflow.\r
\r
**Mini contrast example**\r
Using 90 as radians yields absurd projections; converting 90 degrees to radians restores coherence.\r
\r
## Interpretation errors\r
\r
### Error 4: Reading [[r]] as traveled path length\r
\r
**Why it seems correct**\r
Learners often transfer intuition from path length to radial distance.\r
\r
**Why it is incorrect**\r
[[r]] is instantaneous state distance to origin, not cumulative trajectory length.\r
\r
**Detection signal**\r
[[r]] is compared directly with odometry without geometric justification.\r
\r
**Conceptual correction**\r
Separate state variables from accumulated quantities before interpretation.\r
\r
**Mini contrast example**\r
In circular motion, [[r]] stays constant while traveled distance continuously grows.\r
\r
## Quick self-control rule\r
\r
Use this sequence before finalizing results: 1) does each variable have explicit physical meaning? 2) are constraints counted without redundancy? 3) are units coherent, especially for [[theta]]? 4) does interpretation separate state from accumulation?\r
\r
If any answer is no, stop and rebuild the model layer. This rule catches hidden inconsistencies early and protects causal interpretation quality.`;export{e as default};
