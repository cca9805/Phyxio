## 1. Exergy audit in thermal power plants

In a combined cycle plant (gas + steam), each component generates entropy from different sources: the combustion chamber from thermal gradients and irreversible chemical reaction, the turbine from aerodynamic friction, the condenser from heat transfer at finite ΔT. The efficiency engineer calculates [[S_gen]] for each component to create an "exergy destruction map" that identifies where most potential work is lost.

The entropy balance is applied to each component as a steady-state control volume. The entropy generation rate is [[S_gen]] = Σ(ṁ·s)_outlet − Σ(ṁ·s)_inlet − ΣQ̇/T_boundary. The exergy destroyed per second in each component is T_0 · [[S_gen]], expressed in kW.

In a typical 500 MW plant, the combustion chamber destroys 200–300 MW of exergy (the largest source), the turbine 20–40 MW, and the condenser 30–50 MW. The entropic analysis allows prioritising investments: improving combustion (air preheating, optimal stoichiometric ratio) produces greater savings than refining the turbine.

Dominant variable: [[S_gen]] per component in W/K (or equivalently, destroyed exergy in kW)
Validity limit: the steady-state model fails during start-up or shutdown transients. The isolated component model fails if there is significant thermal coupling between adjacent components.

## 2. Cold chain optimisation in food distribution

In refrigerated food distribution, each link (production, transport, warehouse, point of sale) introduces irreversibility through heat transfer at finite ΔT between the food and the refrigerant medium. The logistics engineer calculates accumulated [[DeltaS_univ]] along the chain to identify links with the greatest thermal degradation.

Entropy generation at each link is estimated as [[S_gen]] ≈ Q_leak · (1/T_food − 1/T_ambient), where Q_leak is the heat penetrating through container walls. Minimising [[S_gen]] implies minimising ΔT (better insulation) or minimising Q_leak (less exposed surface area, superior insulating material).

The product rejection criterion is indirectly based on accumulated entropy: if the food temperature has risen too long (excess absorbed Q), the biochemical degradation (proportional to accumulated [[S_gen]]) exceeds the safety threshold.

Dominant variable: accumulated [[S_gen]] per chain link (J/K per transport cycle)
Validity limit: the model fails when food temperature is not uniform (internal gradients in large pieces of meat or fish). In that case, the differential entropy balance with heat diffusion is required.

## 3. Heat sink design in microprocessors

Modern microprocessors dissipate 50–200 W in areas of a few cm². Heat flows from the chip surface (≈ 370 K) through the heat sink to ambient air (≈ 310 K). Each thermal resistance in the chain (chip-sink interface, fins, air convection) generates entropy proportional to heat flow and local ΔT.

The electronic engineer calculates [[S_gen]] at each interface:

- Thermal interface material (TIM): [[S_gen]] ≈ Q · ΔT_TIM / (T_chip · T_base) ≈ 150 × 5 / (370 × 365) ≈ 0.0056 W/K
- Heat sink to air: [[S_gen]] ≈ Q · ΔT_conv / (T_base · T_air) ≈ 150 × 50 / (365 × 310) ≈ 0.066 W/K

Air convection is the dominant source of irreversibility. Improving convection (higher airflow, better fin design) reduces [[S_gen]] and allows the chip to operate at lower temperature, increasing its lifespan and performance.

Dominant variable: total [[S_gen]] of the chip cooling system (W/K)
Validity limit: the model fails in boiling regimes (phase change of coolant in liquid cooling) where the isothermal contribution of phase change alters the [[S_gen]] profile.

## 4. Irreversibility analysis in industrial mixing processes

In polymer production, two monomer streams at different temperatures and compositions are mixed in a reactor. Mixing generates entropy from two sources: (1) temperature equalisation (thermal irreversibility) and (2) composition equalisation (mixing irreversibility).

The thermal contribution is calculated as for mixing two bodies at different temperatures. The mixing contribution is expressed as a part of [[S_gen]] associated with the mole fractions of each component in the final mixture.

The chemical engineer evaluates whether mixing irreversibility is acceptable or whether a gradual mixing process (multiple stages) should be used that reduces [[S_gen]] at the cost of greater equipment complexity.

Dominant variable: total [[S_gen]] of the mixing process (J/(K·mol)) broken down into thermal and composition contributions
Validity limit: for polymers with non-ideal, nonzero mixing enthalpy, the entropic mixing contribution differs from the ideal case and requires activity models (Flory-Huggins, NRTL).

## 5. Irreversibility evaluation in electric vehicle regenerative braking

In an electric vehicle, regenerative braking converts kinetic energy into electrical energy stored in the battery. However, the process is not perfectly reversible: there are losses from electrical resistance in the motor/generator, residual mechanical friction, and internal battery resistance.

The entropy generated in each source is:
- Motor/generator: [[S_gen]] contribution from Joule dissipation.
- Battery: [[S_gen]] contribution from internal resistance.
- Mechanical friction: [[S_gen]] contribution from brake dissipation.

The second-law efficiency of regenerative braking compares recovered exergy with the initial kinetic energy after subtracting the destruction associated with total [[S_gen]]. A modern electric vehicle reaches values near 60-75%, meaning 25-40% of kinetic energy is irreversibly degraded in each braking event.

Calculating [[S_gen]] per component allows the engineer to identify which improvement (lower electrical resistance, better lubrication, battery with lower R_internal) yields the greatest gain in regenerative efficiency.

Dominant variable: [[S_gen]] per braking event broken down by component (J/K per braking event)
Validity limit: the linear model, where losses scale with current squared, fails at very high currents where non-linear effects (magnetic saturation, adiabatic heating) modify resistances. It also fails during emergency braking where dissipation is so rapid that heat does not have time to distribute uniformly.
