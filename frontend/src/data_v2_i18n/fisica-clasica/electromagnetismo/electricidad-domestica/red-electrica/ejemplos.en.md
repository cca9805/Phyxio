# Exam-type example


## Problem statement

A household kitchen circuit is to be installed. The receptor inventory includes a 2400 W oven, a 2000 W hob, an 800 W microwave and a 150 W refrigerator. The panel offers commercial MCB ratings of 16 A, 20 A and 25 A. Estimate the reasonable maximum current, choose a protective rating and decide whether the load should be split into two independent circuits.

## Data

The numerical data are ordinary values of the example, not new Phyxio magnitudes. The network voltage is represented by [[tension_de_red]], total connected power by [[potencia_total_conectada]], total current by [[corriente_total_de_linea]], the MCB rating by [[corriente_maxima_del_circuito]] and the usage margin by [[margen_uso]].

The complete inventory gives 5350 W for [[potencia_total_conectada]] if all receptors operate together. For design, 80 % simultaneity is treated as a use condition of the example, not as a new magnitude.

## System definition

The system is a single-phase household circuit with receptors connected in parallel. All receptors share the same [[tension_de_red]], while their individual demands contribute to [[corriente_total_de_linea]]. Protection acts by comparing that current with [[corriente_maxima_del_circuito]].

The physical question is not only how much installed power exists, but how much current the circuit must carry in a realistic operating situation. Therefore the result must be interpreted with [[margen_uso]], not only with the raw installed-power value.

## Physical model

The resistive household-network model is applied at the standard European frequency [[frecuencia_de_red]]. An almost constant voltage source feeds receptors that, to first approximation, convert electrical power into useful or thermal consumption without relevant phase effects.

{{f:corriente_total}}

Overload risk is evaluated by comparing the estimated current with the protection limit.

{{f:margen_capacidad}}

When admissible power is checked from a maximum current, the inverse reading of the same model is also useful.

{{f:potencia_total}}

These references allow the problem to be read in both directions: from power to current or from rating to admissible power.

## Model justification

The model is reasonable for the oven, hob and microwave treated as mainly resistive loads. The refrigerator adds a warning: because it contains a motor, it can demand starting peaks. Therefore the result should not be read as an exact boundary, but as a design estimate.

The model would stop being sufficient if the line were long, if several motors started at the same time, or if the real terminal voltage moved too far from the nominal value. In that case, an extended model would be needed, but without introducing external symbols in this leaf.

## Symbolic solution

The symbolic resolution starts by grouping all receptor powers into [[potencia_total_conectada]]. Then [[tension_de_red]] is interpreted as the common single-phase network voltage, and [[corriente_total_de_linea]] is obtained through the contractual total-current relation.

{{f:corriente_total}}

{{f:frecuencia_contexto}}

The MCB choice is not made by looking only at [[potencia_total_conectada]], but by comparing [[corriente_total_de_linea]] with [[corriente_maxima_del_circuito]]. That comparison is expressed through [[margen_uso]], which indicates what fraction of the protection limit is being used.

{{f:margen_capacidad}}

## Numerical substitution

In the extreme case, the complete inventory gives 5350 W of connected power. With the domestic voltage used by the leaf, that power leads to a current close to 23.3 A. This scenario represents complete simultaneous use and acts as an upper reference.

After applying 80 % simultaneity, the design current is about 18.6 A. A 16 A MCB is below that requirement. A 20 A MCB covers the expected case, although with little reserve. A 25 A MCB would be acceptable only if the wiring were prepared for that rating.

## Dimensional validation

The dimensional validation is coherent: the relation between power, voltage and current transforms power in watts and voltage in volts into current in amperes. The comparison between [[corriente_total_de_linea]] and [[corriente_maxima_del_circuito]] does not produce a new unit, but a dimensionless usage margin.

It is also coherent that increasing [[potencia_total_conectada]] increases [[corriente_total_de_linea]] if [[tension_de_red]] remains constant. This confirms that the technical decision must focus on the current carried by the circuit, not on an isolated reading of installed watts.

## Physical interpretation

The physical reading reveals a direct causal relationship: each receptor connected in parallel establishes an independent path for current. Since all share the same potential difference [[tension_de_red]], the current each one draws depends solely on its power demand. The sum of these individual currents is [[corriente_total_de_linea]], which the common cable must carry without exceeding its thermal capacity.

The problem is not simply having many installed watts per se, but the physical consequence of those watts: a high [[corriente_total_de_linea]] that forces the conductor to dissipate more heat through Joule heating. When [[corriente_total_de_linea]] approaches [[corriente_maxima_del_circuito]], the safety margin disappears and any fluctuation can trigger the protection.

The technical solution consists of dividing the installation into two independent circuits. This measure physically reduces [[corriente_total_de_linea]] in each branch because the oven current no longer adds with that of the hob. The result is a lower [[margen_uso]] in both circuits, improving thermal safety and preventing a single line from operating permanently near its structural limit.

# Real-world example


## Context

María wants to install a 2500 W air conditioner in the living room of her dwelling. The existing circuit powers LED lighting, a television, a router and small devices. The new appliance adds a significant load and contains a compressor motor, so the physical question is whether it can share the existing circuit or should have an independent line.

The context is a domestic electrical design decision where the aggregate receptor power is represented by [[potencia_total_conectada]], network voltage by [[tension_de_red]], total current by [[corriente_total_de_linea]], the available rating by [[corriente_maxima_del_circuito]] and the safety reading by [[margen_uso]]. No specific magnitude is created for each device; the list of devices only helps define the physical load scenario.

## Physical estimation

The estimation begins by grouping the power of existing receptors with that of the air conditioner into [[potencia_total_conectada]]. From that magnitude and [[tension_de_red]], [[corriente_total_de_linea]] is estimated through the contractual relation between power, voltage and current.

{{f:corriente_total}}

Then the usage margin is evaluated against the protection limit.

{{f:margen_capacidad}}

If the estimated steady current is clearly below the available 16 A MCB, the circuit may work under mild conditions. However, if the margin approaches the limit, compressor start-up can produce trips or thermally poor operation.

In a real installation, that result favors an independent line for the air conditioner, especially if the living room already shares a circuit with other frequently used receptors. Dimensional coherence is preserved because the estimate produces current in amperes and the comparison with the rating gives a dimensionless margin.

## Interpretation

The recommendation for an independent circuit arises from the causal analysis of compressor start-up. Induction motors present a starting current that can be five to seven times higher than nominal during the first seconds. If the steady-state [[margen_uso]] is already high, this transient peak physically exceeds [[corriente_maxima_del_circuito]] and forces the thermal protection to trip.

The steady-state calculation indicates whether the circuit "works" under normal conditions, but does not capture start-up dynamics. The safety margin exists precisely to absorb these transient fluctuations without interruption. When [[margen_uso]] approaches one hundred percent, the ability to absorb peaks is eliminated.

The independent line solution physically separates the start-up peaks from the rest of the installation. The compressor can start without affecting lighting or other sensitive receptors. The correct design criterion is not simply to avoid trips in steady state, but to ensure that the complete system tolerates the dynamic variations inherent in real equipment.

## Common mistakes avoided

- No auxiliary magnitude has been created for each appliance.
- Installed power has not been confused with admissible current.
- The MCB has not been chosen just because its number is larger.
- The refrigerator starting peak has not been ignored.
- [[margen_uso]] has not been used as if it were a current.