const e=`# Compressibility - Guided Examples and Resolution\r
\r
# Exam-type example\r
## Problem statement\r
A high-precision hydraulic cylinder contains 2.5 liters of a synthetic-based special oil whose compressibility [[beta]] has been measured at 6.5 × 10⁻¹⁰ Pa⁻¹. The cylinder's piston, driven by an electric motor, applies a controlled force that increases the oil pressure from standard atmospheric pressure until reaching 250 bar. In this mechanical engineering scenario, the following detailed calculations are requested:\r
1.  Determine the bulk modulus [[B]] of the synthetic oil.\r
2.  Calculate the absolute volume decrease [[dV]] experienced by the fluid, expressing the final result in cubic centimeters (cm³) to facilitate technical reading.\r
3.  Establish the exact final volume of the oil after the compression process.\r
\r
## Data\r
- Initial volume [[V]]: 2.5 liters equivalent to 0.0025 cubic meters\r
- Compressibility [[beta]]: 6.5 × 10⁻¹⁰ Pa⁻¹\r
- Pressure increment [[dp]]: 250 bar (equivalent to 250 × 10⁵ Pascals or 2.5 × 10⁷ Pascals)\r
- Initial pressure: approximately 1 atmosphere or 10⁵ Pascals (gauge pressure used for the increment)\r
\r
## System definition\r
The physical system under study is the confined mass of oil within the rigid cylinder walls. It is defined as a closed system where the mass remains constant but the volume reduces due to the external pressure load applied quasi-statically by the upper piston. The main target variables for stiffness analysis are the bulk modulus [[B]] and the net volumetric variation [[dV]].\r
\r
## Physical model\r
The **Linear Compressibility** model for homogeneous fluids is used. This mathematical model assumes that the oil behaves as a perfect elastic medium and that the bulk modulus remains constant within the specified pressure range. We will use the reciprocal definition of bulk modulus\r
\r
{{f:modulo_volumetrico_def}}\r
\r
 and the compressibility response law\r
\r
{{f:compresibilidad_def}}\r
\r
.\r
\r
## Model justification\r
This model is **valid** **because** the pressure increment of 250 bar is moderate for a hydraulic oil and does not cause phase transitions or chemical changes in the fluid structure. A linear behavior is **assumed** since the expected relative strain is very small, being well below the 5% limit where non-linear effects begin to dominate. It is also **considered** that the process occurs slowly enough to be treated as isothermal and that the piston seals are perfect, ensuring that the relationship between pressure [[dp]] and volume change [[dV]] is direct and proportional.\r
\r
## Symbolic solution\r
1.  **Bulk modulus calculation**:\r
    We use the elastic inversion relationship\r
\r
{{f:modulo_volumetrico_def}}\r
\r
    The bulk modulus is the reciprocal of compressibility.\r
\r
2.  **Volume variation calculation**:\r
    We solve for the volume change [[dV]] from the operational compressibility definition\r
\r
{{f:compresibilidad_def}}\r
\r
    The volume change is obtained by multiplying compressibility by the initial volume and by the pressure change, with a negative sign to ensure contraction.\r
\r
3.  **Final volume**:\r
    The final state is obtained by adding the variation to the initial state. If the variation is negative (contraction), the final volume will be less than the initial.\r
\r
## Numerical substitution\r
1.  **Modulus B**:\r
    The bulk modulus results in approximately 1.538 billion Pascals or 1.538 GPa (gigapascals).\r
2.  **Variation [[dV]]**:\r
    Applying the data in the formula, the volume variation results in approximately -4.06 × 10⁻⁵ cubic meters, or equivalently, approximately -40.6 cubic centimeters (the negative sign confirms the expected contraction).\r
3.  **Final volume**:\r
    The initial volume was 2500 cubic centimeters. After compression, the final volume is approximately 2459.4 cubic centimeters, representing a relative reduction of approximately 1.6%.\r
\r
## Dimensional validation\r
- Modulus: The resulting unit is a measure of pressure (Pascals), which correctly corresponds to a magnitude of mechanical stiffness.\r
- Volume: The dimensional analysis confirms that compressibility (unit Pa⁻¹) multiplied by volume (m³) and pressure change (Pa) produces volume units (m³), validating the consistency of the calculation with the expected geometric change in the fluid.\r
\r
## Physical interpretation\r
The result obtained **indicates** that the synthetic oil, despite its reputation for incompressibility at low pressure, has experienced a tangible volume reduction of approximately 1.6%. This behavior **means** that the fluid has stored elastic energy that will be returned to the system when the piston pressure ceases. The calculated value for the modulus (approximately 1.54 GPa) is fully **consistent** with the properties of high-viscosity oils and is **physically** reasonable for designing hydraulic circuits operating under demanding industrial conditions.\r
\r
# Real-world example\r
## Context\r
**Acoustic signal propagation in the marine environment**. The speed of communication and detection underwater fundamentally depends on the bulk modulus [[B]] of seawater. This parameter defines the speed with which pressure disturbances travel through oceanic layers, enabling the operation of critical technologies such as sonar and long-distance communication between marine species.\r
\r
## Physical estimation\r
To perform a precise **estimation** of the **order** of magnitude of propagation speed, we consider standard values for oceanic water: a bulk modulus of approximately 2.2 billion Pascals and a mean density of approximately 1025 kilograms per cubic meter. Applying the Newton-Laplace relationship that links the speed of sound with the stiffness and density of the medium, we obtain a propagation speed of approximately 1464 meters per second. This calculation provides an excellent **approximation** that justifies why acoustic signals travel almost 4.5 times faster in water than in the Earth's atmosphere.\r
\r
## Interpretation\r
In the field of modern oceanography, it is known that tiny variations in the modulus [[B]] caused by changes in local salinity or temperature can alter the sound path, creating so-called SOFAR channels. These channels act as natural waveguides where sound can travel thousands of kilometers. This example demonstrates that compressibility, even when minimal in magnitude, is the physical engine that allows the exploration of the "silent world" through the analysis of water's volumetric elasticity.`;export{e as default};
