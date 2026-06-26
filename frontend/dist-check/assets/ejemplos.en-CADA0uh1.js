const e=`\uFEFF# Density - Guided Examples and Resolution\r
\r
# Exam-type example\r
## Problem statement\r
A metallurgical laboratory receives a cylindrical piece of an unknown alloy for purity certification. The piece has a diameter of 4.5 cm and a height of 12 cm. After weighing it on a precision electronic balance, a mass of 1.45 kg is recorded. The engineer in charge must determine if the piece is high-density stainless steel ([[rho]] aproximadamente 8000 kg/m al cubo) or if it contains inclusions of lighter materials. The following technical analysis is requested:\r
1.  Calculate the volume [[V]] of the piece in cubic meters (m al cubo).\r
2.  Determine the absolute density [[rho]] of the alloy in International System units.\r
3.  Calculate the specific gravity [[SG]] of the piece relative to standard water.\r
4.  Determine the specific weight [[gamma]] of the alloy in N/m al cubo considering standard Earth gravity.\r
\r
## Data\r
- Mass [[m]]: 1.45 kg\r
- Diameter D: 4.5 cm, equivalent to 0.045 m\r
- Height h: 12 cm, equivalent to 0.12 m\r
- Gravity [[g]]: 9.81 m/s al cuadrado\r
- Reference density [[rho_0]]: 1000 kg/m al cubo (Water at 4^circC).\r
\r
## System definition\r
The system under study is a rigid and non-deformable solid of cylindrical geometry. It is assumed that the alloy is perfectly homogeneous and that no porosities or air bubbles are trapped inside that could skew the geometric volume measurement. The analysis is performed under standard pressure and temperature conditions, so dimensional variations are negligible.\r
\r
## Physical model\r
The **Uniform Density** model for homogeneous solid bodies is used. This mathematical model assumes that mass is distributed equally in each differential volume of the cylinder. We will use the density definition\r
\r
{{f:densidad}}\r
\r
, the specific gravity relationship\r
\r
{{f:densidad_relativa}}\r
\r
, and the specific weight definition\r
\r
{{f:peso_especifico}}\r
\r
. The volume will be obtained using the geometric formula for a right circular cylinder.\r
\r
## Model justification\r
This approach is **valid** **because** the piece is a solid object with well-defined boundaries and its mass has been measured with high precision. Homogeneity is **assumed** since it is a certified industrial alloy. The effect of air buoyancy on the balance is **considered** negligible, given that the metal's density is several orders of magnitude higher than that of air. Using geometric volume is **correct** as long as the piece does not present significant surface irregularities affecting the radius and height calculation.\r
\r
## Symbolic solution\r
1.  **Volume calculation**:\r
    \r
    The volume is obtained by multiplying the circular base area by the cylinder height.\r
    \r
2.  **Absolute density**:\r
    We use the definition\r
\r
{{f:densidad}}\r
\r
:\r
    \r
    Absolute density is obtained by dividing the measured mass by the calculated volume.\r
    \r
3.  **Specific gravity**:\r
    We apply the ratio\r
\r
{{f:densidad_relativa}}\r
\r
:\r
    \r
    Specific gravity is obtained by comparing the piece density with the standard water reference.\r
    \r
4.  **Specific weight**:\r
    We use the relationship\r
\r
{{f:peso_especifico}}\r
\r
:\r
    \r
    Specific weight is obtained by multiplying density by local gravity.\r
    \r
\r
## Numerical substitution\r
1.  **Volume V**:\r
    - The volume is evaluated with radius 0.0225 m and height 0.12 m.\r
    - The resulting volume is approximately 0.00019085 m al cubo.\r
2.  **Density [[rho]]**:\r
    - The calculated absolute density is approximately [[rho]] = 7597.5 kg/m al cubo.\r
3.  **Specific gravity [[SG]]**:\r
    - The resulting specific gravity is approximately [[SG]] = 7.5975.\r
4.  **Specific weight [[gamma]]**:\r
    - The resulting specific weight is approximately [[gamma]] = 74531.5 N/m al cubo.\r
\r
## Dimensional validation\r
- Density: [kg] / [m al cubo] = [kg/m al cubo]. Consistent with the definition of mass per unit volume.\r
- [[SG]] compares two densities expressed in the same units, so it is dimensionless.\r
- Specific weight: [kg/m al cubo]  multiplicado por  [m/s al cuadrado] = [kg  multiplicado por  m / (s al cuadrado  multiplicado por  m al cubo)] = [N/m al cubo]. Consistent with a volumetric force.\r
\r
## Physical interpretation\r
The result obtained **indicates** that the alloy has a density of approximately 7600 kg/m al cubo. Comparing it with standard stainless steel (8000 kg/m al cubo), we observe that it is slightly less dense. This **means** that the piece could contain inclusions of lighter materials or be a different alloy variant. The value of [[SG]] aproximadamente 7.6 is fully **consistent** for a heavy metallic material. The calculated specific weight of 74.5 kN/m al cubo is the value that would be used to calculate the pressure on the base if the cylinder were supported vertically.\r
\r
# Real-world example\r
## Context\r
**Stratification and currents in the Gulf of Mexico**. In oceanic systems, seawater density is not constant; it depends on temperature and the concentration of dissolved salts. When freshwater from a river (like the Mississippi) flows into the sea, a stratification phenomenon occurs where freshwater, being less dense, flows over denser saltwater.\r
\r
## Physical estimation\r
To perform an **estimation** of the flow behavior, we consider freshwater with [[rho]] of freshwater aproximadamente 1000 kg/m al cubo and saltwater with [[rho]] of saltwater aproximadamente 1025 kg/m al cubo. Calculating the specific gravity of freshwater relative to saltwater:\r
\r
The comparison between freshwater and saltwater gives an approximate specific gravity of [[SG]] = 0.975.\r
\r
This value less than one provides a quantitative **approximation** of the buoyancy potential. The density difference, although small in absolute terms (2.5\\%), is the physical **resultant** that generates the buoyancy forces necessary to keep freshwater on the surface for kilometers before completely mixing.\r
\r
## Interpretation\r
This example demonstrates that density [[rho]] is the engine driving ocean dynamics. Small changes in mass concentration per volume decide the trajectory of marine currents and nutrient distribution. In environmental engineering, this analysis is critical for predicting pollutant dispersion: a spill less dense than seawater will remain on the surface, facilitating mechanical collection but increasing the risk to seabirds.\r
`;export{e as default};
