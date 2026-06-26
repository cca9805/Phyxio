const e=`# Exam-type example\r
\r
## Problem statement\r
A homogeneous wooden block has an average density [[rho_obj]] of \\( 600\\text{ kg/m}^3 \\) and a total volume [[Vtot]] of \\( 0.001\\text{ m}^3 \\). It is placed in fresh water with a fluid density [[rho_f]] equal to \\( 1000\\text{ kg/m}^3 \\). The goal of this exercise is to find the submerged fraction [[frac_sum]] of the object, calculate the actual submerged volume [[Vsum]], and verify that the buoyancy force exactly balances the gravitational weight of the body in its equilibrium position. This allows us to understand the fundamental mechanics of how ships and other floating objects interact with the water's surface.\r
\r
## Data\r
-   Object density: [[rho_obj]] = \\( 600\\text{ kg/m}^3 \\)\r
-   Fluid density: [[rho_f]] = \\( 1000\\text{ kg/m}^3 \\)\r
-   Total volume: [[Vtot]] = \\( 0.001\\text{ m}^3 \\)\r
-   Reference gravitational acceleration: 9.8 m/s²\r
\r
## System definition\r
We define the study system as the wooden block once it has reached a state of stable rest on the liquid surface. The fluid is considered continuous, homogeneous, and at absolute rest, meaning there are no dynamic currents affecting the balance. The body is treated as a rigid solid with uniform mass distribution and density. The key physical magnitudes involved in this leaf are the submerged fraction [[frac_sum]], the submerged volume [[Vsum]], the object density [[rho_obj]], and the fluid density [[rho_f]].\r
\r
## Physical model\r
The problem directly applies the fundamental flotation equilibrium relations and Archimedes' Principle as defined in this learning leaf:\r
\r
{{f:fraccion_sumergida}}\r
\r
{{f:volumen_sumergido}}\r
\r
## Model justification\r
The physical justification for this model is that since the average density of the block (\\( 600\\text{ kg/m}^3 \\)) is strictly less than that of the water (\\( 1000\\text{ kg/m}^3 \\)), a stable partial flotation configuration must exist. According to the laws of hydrostatics, the body will continue to sink and displace fluid until the weight of the displaced volume (thrust) exactly equals the total weight of the body. Since there are no external accelerations, waves, or dynamic flow effects, the hydrostatic model provides an exact description of the system's final state.\r
\r
## Symbolic solution\r
First, we determine the proportion of the body that will remain below the waterline by calculating the density ratio:\r
\r
{{f:fraccion_sumergida}}\r
\r
Next, we calculate the actual volume of the submerged part (carena volume) by multiplying the calculated fraction by the total available volume of the object:\r
\r
{{f:volumen_sumergido}}\r
\r
To verify the total vertical force balance, we calculate both buoyancy and gravitational weight. In this case, both numerical results must match to maintain equilibrium.\r
\r
## Numerical substitution\r
We calculate the numerical value of the submerged fraction: the ratio 600 over 1000 gives 0.6.\r
\r
Using this fraction, we calculate the submerged volume: 0.6 times 0.001 gives 0.0006 m³.\r
\r
Finally, we perform the force-balance check to confirm equilibrium: buoyancy is 5.88 N and weight is also 5.88 N.\r
\r
## Dimensional validation\r
The submerged fraction [[frac_sum]] is correctly dimensionless, as it results from a ratio of two densities with identical units (\\( \\text{kg/m}^3 / \\text{kg/m}^3 \\)). The submerged volume is obtained in cubic meters (\\( \\text{m}^3 \\)), which is the standard unit for volume. Lastly, both the thrust and weight forces are calculated in Newtons (\\( \\text{N} \\)), which is the consistent unit for force in the International System of Units. This consistency ensures that the mathematical model reflects a physically valid state.\r
\r
## Physical interpretation\r
The block remains submerged for \\( 60\\% \\) of its total volume. This means it displaces enough water weight to balance its own gravitational pull long before it sinks completely. The waterline is located exactly at the level where the displaced volume reaches \\( 0.0006\\text{ m}^3 \\), at which point the net vertical force on the block becomes zero. This self-correcting process is what allows objects to float steadily.\r
\r
The most important takeaway is the causal link: the density ratio dictates the geometry of the equilibrium. If we were to replace the fresh water with a denser fluid, such as saltwater or mercury, the block would float much higher, meaning the submerged fraction would decrease. This fundamental phenomenon is the basis for the operation of hydrometers and the design of ship hulls, where the depth of immersion visually and physically translates the density properties of the surrounding medium.\r
\r
---\r
\r
# Real-world example\r
\r
## Context\r
A large spherical maritime signaling buoy has a total mass of \\( 200\\text{ kg} \\) and a total volume [[Vtot]] of \\( 0.523\\text{ m}^3 \\). It floats in seawater with a characteristic density [[rho_f]] of \\( 1025\\text{ kg/m}^3 \\). Engineers need to estimate what fraction of the volume remains submerged and what buoyancy reserve is available to absorb additional loads from wave impact or sensor equipment.\r
\r
## Physical estimation\r
First, we calculate the average density of the entire buoy assembly, including the internal air. The resulting value is about 382.4 kg/m³.\r
\r
Using this effective density, we apply the primary flotation relation\r
\r
{{f:fraccion_sumergida}}\r
\r
:\r
the result is approximately 0.373.\r
\r
The actual submerged volume below the sea surface is therefore about 0.195 m³.\r
\r
This quantitative reading allows us to confirm that the buoy is well within its safety limits, as it only uses about a third of its potential buoyancy to stay afloat.\r
\r
## Interpretation\r
The buoy submerges only about \\( 37\\% \\) of its total volume. This indicates it has a significant buoyancy reserve of approximately \\( 63\\% \\). This high reserve gives the buoy great stability and the ability to withstand external disturbances, such as high waves or the accumulation of biological material, without the risk of sinking.\r
\r
The deep physics behind this design choice is that buoyancy does not depend on the hull material's density alone, but on the large volume of enclosed air that reduces the overall average density [[rho_obj]] well below that of seawater. This safety margin is vital in naval engineering to ensure that the buoy remains a visible and functional signaling device even in severe weather conditions. Furthermore, this example highlights how flotation theory is used to make critical decisions about maintenance and operational safety in industrial maritime environments.`;export{e as default};
