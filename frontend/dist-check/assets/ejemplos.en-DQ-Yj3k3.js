const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A household kitchen circuit is to be installed. The receptor inventory includes a 2400 W oven, a 2000 W hob, an 800 W microwave and a 150 W refrigerator. The panel offers commercial MCB ratings of 16 A, 20 A and 25 A. Estimate the reasonable maximum current, choose a protective rating and decide whether the load should be split into two independent circuits.\r
\r
## Data\r
\r
The numerical data are ordinary values of the example, not new Phyxio magnitudes. The network voltage is represented by [[V]], total connected power by [[P_tot]], total current by [[I_tot]], the MCB rating by [[I_max]] and the usage margin by [[margen_uso]].\r
\r
The complete inventory gives 5350 W for [[P_tot]] if all receptors operate together. For design, 80 % simultaneity is treated as a use condition of the example, not as a new magnitude.\r
\r
## System definition\r
\r
The system is a single-phase household circuit with receptors connected in parallel. All receptors share the same [[V]], while their individual demands contribute to [[I_tot]]. Protection acts by comparing that current with [[I_max]].\r
\r
The physical question is not only how much installed power exists, but how much current the circuit must carry in a realistic operating situation. Therefore the result must be interpreted with [[margen_uso]], not only with the raw installed-power value.\r
\r
## Physical model\r
\r
The resistive household-network model is applied at the standard European frequency [[f]]. An almost constant voltage source feeds receptors that, to first approximation, convert electrical power into useful or thermal consumption without relevant phase effects.\r
\r
\r
\r
{{f:corriente_total}}\r
\r
Overload risk is evaluated by comparing the estimated current with the protection limit.\r
\r
\r
\r
{{f:margen_capacidad}}\r
\r
When admissible power is checked from a maximum current, the inverse reading of the same model is also useful.\r
\r
\r
\r
{{f:potencia_total}}\r
\r
These references allow the problem to be read in both directions: from power to current or from rating to admissible power.\r
\r
## Model justification\r
\r
The model is reasonable for the oven, hob and microwave treated as mainly resistive loads. The refrigerator adds a warning: because it contains a motor, it can demand starting peaks. Therefore the result should not be read as an exact boundary, but as a design estimate.\r
\r
The model would stop being sufficient if the line were long, if several motors started at the same time, or if the real terminal voltage moved too far from the nominal value. In that case, an extended model would be needed, but without introducing external symbols in this leaf.\r
\r
## Symbolic solution\r
\r
The symbolic resolution starts by grouping all receptor powers into [[P_tot]]. Then [[V]] is interpreted as the common single-phase network voltage, and [[I_tot]] is obtained through the contractual total-current relation.\r
\r
{{f:corriente_total}}\r
\r
{{f:frecuencia_contexto}}\r
\r
The MCB choice is not made by looking only at [[P_tot]], but by comparing [[I_tot]] with [[I_max]]. That comparison is expressed through [[margen_uso]], which indicates what fraction of the protection limit is being used.\r
\r
{{f:margen_capacidad}}\r
\r
## Numerical substitution\r
\r
In the extreme case, the complete inventory gives 5350 W of connected power. With the domestic voltage used by the leaf, that power leads to a current close to 23.3 A. This scenario represents complete simultaneous use and acts as an upper reference.\r
\r
After applying 80 % simultaneity, the design current is about 18.6 A. A 16 A MCB is below that requirement. A 20 A MCB covers the expected case, although with little reserve. A 25 A MCB would be acceptable only if the wiring were prepared for that rating.\r
\r
## Dimensional validation\r
\r
The dimensional validation is coherent: the relation between power, voltage and current transforms power in watts and voltage in volts into current in amperes. The comparison between [[I_tot]] and [[I_max]] does not produce a new unit, but a dimensionless usage margin.\r
\r
It is also coherent that increasing [[P_tot]] increases [[I_tot]] if [[V]] remains constant. This confirms that the technical decision must focus on the current carried by the circuit, not on an isolated reading of installed watts.\r
\r
## Physical interpretation\r
\r
The physical reading reveals a direct causal relationship: each receptor connected in parallel establishes an independent path for current. Since all share the same potential difference [[V]], the current each one draws depends solely on its power demand. The sum of these individual currents is [[I_tot]], which the common cable must carry without exceeding its thermal capacity.\r
\r
The problem is not simply having many installed watts per se, but the physical consequence of those watts: a high [[I_tot]] that forces the conductor to dissipate more heat through Joule heating. When [[I_tot]] approaches [[I_max]], the safety margin disappears and any fluctuation can trigger the protection.\r
\r
The technical solution consists of dividing the installation into two independent circuits. This measure physically reduces [[I_tot]] in each branch because the oven current no longer adds with that of the hob. The result is a lower [[margen_uso]] in both circuits, improving thermal safety and preventing a single line from operating permanently near its structural limit.\r
\r
## Common mistakes avoided\r
\r
- No auxiliary magnitude has been created for each appliance.\r
- Installed power has not been confused with admissible current.\r
- The MCB has not been chosen just because its number is larger.\r
- The refrigerator starting peak has not been ignored.\r
- [[margen_uso]] has not been used as if it were a current.\r
\r
# Real-world example\r
\r
## Context\r
\r
María wants to install a 2500 W air conditioner in the living room of her dwelling. The existing circuit powers LED lighting, a television, a router and small devices. The new appliance adds a significant load and contains a compressor motor, so the physical question is whether it can share the existing circuit or should have an independent line.\r
\r
The context is a domestic electrical design decision where the aggregate receptor power is represented by [[P_tot]], network voltage by [[V]], total current by [[I_tot]], the available rating by [[I_max]] and the safety reading by [[margen_uso]]. No specific magnitude is created for each device; the list of devices only helps define the physical load scenario.\r
\r
## Physical estimation\r
\r
The estimation begins by grouping the power of existing receptors with that of the air conditioner into [[P_tot]]. From that magnitude and [[V]], [[I_tot]] is estimated through the contractual relation between power, voltage and current.\r
\r
{{f:corriente_total}}\r
\r
Then the usage margin is evaluated against the protection limit.\r
\r
{{f:margen_capacidad}}\r
\r
If the estimated steady current is clearly below the available 16 A MCB, the circuit may work under mild conditions. However, if the margin approaches the limit, compressor start-up can produce trips or thermally poor operation.\r
\r
In a real installation, that result favors an independent line for the air conditioner, especially if the living room already shares a circuit with other frequently used receptors. Dimensional coherence is preserved because the estimate produces current in amperes and the comparison with the rating gives a dimensionless margin.\r
\r
## Interpretation\r
\r
The recommendation for an independent circuit arises from the causal analysis of compressor start-up. Induction motors present a starting current that can be five to seven times higher than nominal during the first seconds. If the steady-state [[margen_uso]] is already high, this transient peak physically exceeds [[I_max]] and forces the thermal protection to trip.\r
\r
The steady-state calculation indicates whether the circuit "works" under normal conditions, but does not capture start-up dynamics. The safety margin exists precisely to absorb these transient fluctuations without interruption. When [[margen_uso]] approaches one hundred percent, the ability to absorb peaks is eliminated.\r
\r
The independent line solution physically separates the start-up peaks from the rest of the installation. The compressor can start without affecting lighting or other sensitive receptors. The correct design criterion is not simply to avoid trips in steady state, but to ensure that the complete system tolerates the dynamic variations inherent in real equipment.\r
`;export{e as default};
