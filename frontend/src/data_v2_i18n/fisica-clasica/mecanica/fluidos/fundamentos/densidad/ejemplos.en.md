# Density - Guided Examples and Resolution

# Exam-type example
## Problem statement
A metallurgical laboratory receives a cylindrical piece of an unknown alloy for purity certification. The piece has a diameter of 4.5 cm and a height of 12 cm. After weighing it on a precision electronic balance, a mass of 1.45 kg is recorded. The engineer in charge must determine if the piece is high-density stainless steel ([[rho]] aproximadamente 8000 kg/m al cubo) or if it contains inclusions of lighter materials. The following technical analysis is requested:
1.  Calculate the volume [[V]] of the piece in cubic meters (m al cubo).
2.  Determine the absolute density [[rho]] of the alloy in International System units.
3.  Calculate the specific gravity [[SG]] of the piece relative to standard water.
4.  Determine the specific weight [[gamma]] of the alloy in N/m al cubo considering standard Earth gravity.

## Data
- Mass [[m]]: 1.45 kg
- Diameter D: 4.5 cm, equivalent to 0.045 m
- Height h: 12 cm, equivalent to 0.12 m
- Gravity [[g]]: 9.81 m/s al cuadrado
- Reference density [[rho_0]]: 1000 kg/m al cubo (Water at 4^circC).

## System definition
The system under study is a rigid and non-deformable solid of cylindrical geometry. It is assumed that the alloy is perfectly homogeneous and that no porosities or air bubbles are trapped inside that could skew the geometric volume measurement. The analysis is performed under standard pressure and temperature conditions, so dimensional variations are negligible.

## Physical model
The **Uniform Density** model for homogeneous solid bodies is used. This mathematical model assumes that mass is distributed equally in each differential volume of the cylinder. We will use the density definition

{{f:densidad}}

, the specific gravity relationship

{{f:densidad_relativa}}

, and the specific weight definition

{{f:peso_especifico}}

. The volume will be obtained using the geometric formula for a right circular cylinder.

## Model justification
This approach is **valid** **because** the piece is a solid object with well-defined boundaries and its mass has been measured with high precision. Homogeneity is **assumed** since it is a certified industrial alloy. The effect of air buoyancy on the balance is **considered** negligible, given that the metal's density is several orders of magnitude higher than that of air. Using geometric volume is **correct** as long as the piece does not present significant surface irregularities affecting the radius and height calculation.

## Symbolic solution
1.  **Volume calculation**:
    
    The volume is obtained by multiplying the circular base area by the cylinder height.
    
2.  **Absolute density**:
    We use the definition

{{f:densidad}}

:
    
    Absolute density is obtained by dividing the measured mass by the calculated volume.
    
3.  **Specific gravity**:
    We apply the ratio

{{f:densidad_relativa}}

:
    
    Specific gravity is obtained by comparing the piece density with the standard water reference.
    
4.  **Specific weight**:
    We use the relationship

{{f:peso_especifico}}

:
    
    Specific weight is obtained by multiplying density by local gravity.
    

## Numerical substitution
1.  **Volume V**:
    - The volume is evaluated with radius 0.0225 m and height 0.12 m.
    - The resulting volume is approximately 0.00019085 m al cubo.
2.  **Density [[rho]]**:
    - The calculated absolute density is approximately [[rho]] = 7597.5 kg/m al cubo.
3.  **Specific gravity [[SG]]**:
    - The resulting specific gravity is approximately [[SG]] = 7.5975.
4.  **Specific weight [[gamma]]**:
    - The resulting specific weight is approximately [[gamma]] = 74531.5 N/m al cubo.

## Dimensional validation
- Density: [kg] / [m al cubo] = [kg/m al cubo]. Consistent with the definition of mass per unit volume.
- [[SG]] compares two densities expressed in the same units, so it is dimensionless.
- Specific weight: [kg/m al cubo]  multiplicado por  [m/s al cuadrado] = [kg  multiplicado por  m / (s al cuadrado  multiplicado por  m al cubo)] = [N/m al cubo]. Consistent with a volumetric force.

## Physical interpretation
The result obtained **indicates** that the alloy has a density of approximately 7600 kg/m al cubo. Comparing it with standard stainless steel (8000 kg/m al cubo), we observe that it is slightly less dense. This **means** that the piece could contain inclusions of lighter materials or be a different alloy variant. The value of [[SG]] aproximadamente 7.6 is fully **consistent** for a heavy metallic material. The calculated specific weight of 74.5 kN/m al cubo is the value that would be used to calculate the pressure on the base if the cylinder were supported vertically.

# Real-world example
## Context
**Stratification and currents in the Gulf of Mexico**. In oceanic systems, seawater density is not constant; it depends on temperature and the concentration of dissolved salts. When freshwater from a river (like the Mississippi) flows into the sea, a stratification phenomenon occurs where freshwater, being less dense, flows over denser saltwater.

## Physical estimation
To perform an **estimation** of the flow behavior, we consider freshwater with [[rho]] of freshwater aproximadamente 1000 kg/m al cubo and saltwater with [[rho]] of saltwater aproximadamente 1025 kg/m al cubo. Calculating the specific gravity of freshwater relative to saltwater:

The comparison between freshwater and saltwater gives an approximate specific gravity of [[SG]] = 0.975.

This value less than one provides a quantitative **approximation** of the buoyancy potential. The density difference, although small in absolute terms (2.5\%), is the physical **resultant** that generates the buoyancy forces necessary to keep freshwater on the surface for kilometers before completely mixing.

## Interpretation
This example demonstrates that density [[rho]] is the engine driving ocean dynamics. Small changes in mass concentration per volume decide the trajectory of marine currents and nutrient distribution. In environmental engineering, this analysis is critical for predicting pollutant dispersion: a spill less dense than seawater will remain on the surface, facilitating mechanical collection but increasing the risk to seabirds.
