const e=`\uFEFF## Ideal model\r
\r
The ideal model of this leaf treats pressure [[p]] as a local scalar quantity produced by a normal force [[F]] uniformly distributed over an area [[A]]. The central simplification is not to describe every microscopic interaction between molecules and the surface, but their averaged effect per unit area.\r
\r
In this model, the surface is well defined, the relevant force is perpendicular to it, and the spatial distribution does not vary appreciably within the chosen area. That is why the central relation is:\r
\r
{{f:presion_mec}}\r
\r
The model keeps [[p]], [[F]], and [[A]], but ignores fine roughness, point-contact variations, local material deformation, and microscopic fluctuations. It is the proper starting point for pistons, walls, plates, sensors, and vessels.\r
\r
## Hypotheses\r
\r
- **Positive known area**: [[A]] must be greater than zero. If this is violated, the division has no physical meaning and the result may become artificially large.\r
\r
- **Identified normal force**: [[F]] must be the perpendicular component. If the full oblique force is used, the actual pressure is overestimated.\r
\r
- **Approximately uniform distribution**: pressure must represent the analyzed region well. If pressure varies strongly over the surface, a profile or integration is required.\r
\r
- **Declared reference**: if [[p_abs]] or [[p_man]] appears, the reference must be stated. If references are mixed, the interpretation can be physically false even when the algebra looks correct.\r
\r
- **Continuum-compatible fluid**: pressure must be assignable locally. If the system is microscopic or rarefied, the averaged value may lose meaning.\r
\r
## Quantitative validity domain\r
\r
The mechanical definition is safe when the control area is much larger than the microscopic scale and small enough that pressure does not vary strongly. A useful operational condition is:\r
\r
\r
(Delta p dividido por p) < 0.05\r
\r
\r
In introductory problems, the model is acceptable if [[p]] can be treated as uniform over the contact region. In ordinary hydraulics, values between 10 elevado a 5 Pa and 10 elevado a 7 Pa are reasonable. In breathing or ventilation, differences of tens or hundreds of Pa may be relevant.\r
\r
For the basic hydrostatic link,\r
\r
the later hydrostatic relation\r
\r
the fluid must be at rest, density nearly constant, gravity uniform, and depth a vertical depth. If these conditions fail, the model is no longer a reliable first approximation.\r
\r
## Model failure signals\r
\r
A clear failure signal appears when a large surface is treated as if it had the same pressure everywhere, even though the statement indicates changing depth. On a vertical tank wall, pressure is not uniform; it increases with depth.\r
\r
Another signal is a result controlled by a poorly converted area. Using square centimeters as if they were square meters may multiply the pressure by 10 elevado a 4. The result often looks enormous, but the error is in the unit.\r
\r
The model also fails if absolute and gauge pressure are confused. A gauge reading can be negative without violating physics; a negative absolute pressure is not admissible in this context.\r
\r
## Extended or alternative model\r
\r
The first extended model replaces uniform pressure with a spatially varying distribution presión variable. Then the total force is not obtained by a single multiplication, but by adding contributions over the surface.\r
\r
For fluids at rest with constant density, the hydrostatic model appears, where [[p_man]] grows with density, gravity, and depth. For moving fluids, dynamic effects, losses, and gradients must be added, which belong to later leaves.\r
\r
The explicit transition occurs when it is appropriate to change model: when the area is large, depth changes, the surface is curved, or the sensor uses a reference different from the equation.\r
\r
## Operational comparison\r
\r
| Model | Main use | Advantage | Limit |\r
|---|---|---|---|\r
| Uniform pressure | pistons, small plates, sensors | direct calculation with [[F]] and [[A]] | does not describe spatial variation |\r
| Absolute/gauge pressure | gauges and vessels | avoids reference errors | requires stating [[p_atm]] |\r
| Basic hydrostatic pressure | fluid at rest | connects pressure with density, gravity, and depth | requires nearly constant density |\r
| Variable distribution | large walls or curved surfaces | computes realistic total force | requires integration or piecewise approximation |\r
`;export{e as default};
