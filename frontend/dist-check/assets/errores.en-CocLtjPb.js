const e=`## Conceptual errors\r
\r
### Error 1: Confusing work with internal energy\r
\r
**Why it seems correct**\r
Work and internal energy both appear together in thermodynamics, and many problems link them. The student may believe any energy change in the gas is automatically mechanical work.\r
\r
**Why it is incorrect**\r
Mechanical work [[W]] is energy transferred by volume displacement. Internal energy depends on the thermodynamic state and can change even when volume does not.\r
\r
**Detection signal**\r
The error appears when temperature change is treated as if it were the gas work.\r
\r
**Conceptual correction**\r
Work describes mechanical energy exchange between gas and environment, while internal energy describes the gas energy content in a given state.\r
\r
**Mini contrast example**\r
In an isochoric process, volume does not change, so [[W]] is zero even though temperature and internal energy can increase.\r
\r
## Model errors\r
\r
\r
### Error 1: Applying ideal gas under high-density conditions\r
\r
**Why it seems correct**\r
The ideal gas law is the most familiar gas formula and is often the first choice for gas problems.\r
\r
**Why it is incorrect**\r
At high pressure and density, molecular interactions and finite particle volume significantly alter the P-V relation.\r
\r
**Detection signal**\r
You detect it when the measured P-V curve departs from ideal isotherms, especially for pressures above 1×10⁶ Pa.\r
\r
**Conceptual correction**\r
Use an extended model like van der Waals when the gas deviates from the ideal law due to excluded volume and intermolecular attraction.\r
\r
**Mini contrast example**\r
A high-pressure gas shows a pressure higher than the ideal gas law predicts. The ideal model underestimates the real compression.\r
\r
## Mathematical errors\r
\r
### Error 1: Treating [[DeltaV]] as absolute volume\r
\r
**Why it seems correct**\r
[[DeltaV]] looks similar to [[V]], and the student may think it is just another volume symbol.\r
\r
**Why it is incorrect**\r
[[DeltaV]] is the volume change between final and initial states, not the volume occupied at a single moment.\r
\r
**Detection signal**\r
The mistake is exposed when [[DeltaV]] is used instead of [[V]] to obtain pressure or work.\r
\r
**Conceptual correction**\r
Use [[V]] for the actual volume at a point and [[DeltaV]] for the change between two states.\r
\r
**Mini contrast example**\r
If initial [[V]] is 0.02 m³ and final [[V]] is 0.05 m³, then [[DeltaV]] is 0.03 m³. It is wrong to use 0.05 m³ as [[DeltaV]].\r
\r
## Interpretation errors\r
\r
### Error 1: Believing a larger area always means more useful energy\r
\r
**Why it seems correct**\r
Work is represented as area, so a larger area intuitively seems like more energy.\r
\r
**Why it is incorrect**\r
Sign and process direction matter. In compression, the area is integrated in the opposite direction and represents work received, not delivered.\r
\r
**Detection signal**\r
The student interprets a compression path as generating useful energy instead of consuming it.\r
\r
**Conceptual correction**\r
Identify the sign of [[DeltaV]]: positive expansion means work done by the gas; negative compression means work done on the gas.\r
\r
**Mini contrast example**\r
A horizontal path to the left in the P-V diagram has the same absolute area as an expansion, but corresponds to input work rather than output.\r
\r
## Quick self-control rule\r
\r
If a problem involves mechanical work, always check: whether pressure is constant, whether volume change is positive or negative, and whether the area under the curve matches the expected sign of [[W]].\r
`;export{e as default};
