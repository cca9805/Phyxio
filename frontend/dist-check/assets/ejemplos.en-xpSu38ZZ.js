const e=`# Exam-type example

## Problem statement

A 2 kg copper block, initially at 600 K, is immersed in a large water reservoir at 300 K until thermal equilibrium is reached. The specific heat capacity of copper is 385 J/(kg·K). Calculate the entropy change of the copper block, the entropy change of the water reservoir, and the total entropy change of the universe. Determine whether the process is reversible, irreversible, or impossible.

## Data

- Copper mass: [[m]] = 2 kg
- Initial copper temperature: [[T_i]] = 600 K
- Final copper temperature (equilibrium with reservoir): [[T_f]] = 300 K
- Specific heat capacity of copper: [[c_p]] = 385 J/(kg·K)
- Reservoir temperature (constant, large reservoir): [[T]] = 300 K

## System definition

The main system is the copper block that cools down. The water reservoir acts as a thermal reservoir at constant temperature (its heat capacity is so large that its temperature does not change appreciably). The thermodynamic universe is the sum of both.

## Physical model

The entropy change formula for heating/cooling with constant [[c_p]] is applied to the copper, and the isothermal formula to the reservoir. The core magnitudes are [[DeltaS]], [[m]], [[c_p]], [[T_i]], [[T_f]], and [[T]]. The central hypothesis is that copper's [[c_p]] is constant between 300 K and 600 K (actual deviation < 3%).

## Model justification

The model is valid because:
- The heat capacity of copper varies less than 3% between 300 K and 600 K, fulfilling the constant [[c_p]] hypothesis.
- The water reservoir is large enough that its temperature remains constant (ideal reservoir).

The model would stop being valid if:
- The reservoir mass were comparable to the copper's (water temperature would change appreciably).
- The temperature range were much larger (above 1000 K, copper's [[c_p]] increases significantly).

## Symbolic solution

For the copper block (cooling from [[T_i]] to [[T_f]]):

{{f:variacion_entropia_calentamiento}}

For the water reservoir (isothermal process, absorbs heat released by copper):

Heat absorbed by reservoir equals heat released by copper: Q_reservoir = [[m]]·[[c_p]]·([[T_i]] − [[T_f]])

Entropy change of the reservoir: [[DeltaS]]_reservoir = Q_reservoir / [[T]]_reservoir

Total universe change: [[DeltaS]]_universe = [[DeltaS]]_copper + [[DeltaS]]_reservoir

## Numerical substitution

{{f:variacion_entropia_calentamiento}}

For copper, substitute [[m]] = 2 kg, [[c_p]] = 385 J/(kg·K), [[T_f]] = 300 K, [[T_i]] = 600 K. The temperature ratio is 300/600 = 0.5 and ln(0.5) ≈ −0.693. Therefore, multiplying 2 × 385 × (−0.693) gives approximately −533.6 J/K. Thus [[DeltaS]]_copper ≈ −533.6 J/K.

{{f:variacion_entropia_isotermica}}

Heat released by copper to reservoir: multiplying 2 kg × 385 J/(kg·K) × (600 − 300) K gives 231000 J. For the reservoir, dividing 231000 J by 300 K gives 770 J/K. Thus [[DeltaS]]_reservoir ≈ +770 J/K.

Total universe entropy change: adding −533.6 J/K and +770 J/K gives approximately +236.4 J/K. Therefore [[DeltaS]]_universe ≈ +236.4 J/K.

## Dimensional validation

- [[DeltaS]]_copper: \`[M] · [L² T⁻² Θ⁻¹] · [dimensionless] = [M L² T⁻² Θ⁻¹]\` → J/K ✓
- [[DeltaS]]_reservoir: \`[M L² T⁻²] / [Θ] = [M L² T⁻² Θ⁻¹]\` → J/K ✓
- Full breakdown: \`[kg] · [J/(kg·K)] · [1] = [J/K]\` ✓

## Physical interpretation

The copper block loses entropy ([[DeltaS]]_copper < 0) because it cools: its thermal energy becomes less dispersed as it drops from 600 K to 300 K. However, the water reservoir gains more entropy ([[DeltaS]]_reservoir > 0) than the copper loses. This is due to the fundamental asymmetry of entropy: the same amount of heat produces greater entropy when absorbed at low temperature (300 K) than when released from high temperature (600 K).

The [[DeltaS]]_universe ≈ +236 J/K is strictly positive, confirming that the process is **irreversible**. Thermal contact between two bodies at different temperatures is the paradigmatic example of an irreversible process: it generates entropy because the spontaneous transfer of heat from hot to cold destroys potential work.

The physical cause of the total increase is not the arithmetic sum itself, but the temperature gap: heat leaves a hot body, where each joule represents less entropy, and enters a cold reservoir, where that same joule represents more entropy. That is why irreversibility appears even though energy is exactly conserved.

Physically, this means the combined system increases its energy dispersal: the block decreases its entropy, but the reservoir increases more because it receives heat at a lower temperature. The final positive sign indicates a spontaneous direction consistent with the second law.

If the reservoir were at the same temperature as the copper (600 K), there would be no heat transfer and [[DeltaS]]_universe = 0. If the temperature difference were smaller (e.g., reservoir at 500 K), irreversibility would be lower and [[DeltaS]]_universe would be smaller. The magnitude of [[DeltaS]]_universe quantifies exactly how much potential work has been irretrievably degraded in the process.

# Real-world example

## Context

In a combined cycle power plant, steam at 823 K (550 °C) expands in the high-pressure turbine and exits at 473 K (200 °C). The mass flow rate is 50 kg/s and the average heat capacity of steam in that range is approximately 2100 J/(kg·K). The engineer needs to evaluate the steam's entropy change to determine turbine efficiency relative to the ideal isentropic case.

## Physical estimation

Applying the heating formula (which serves equally for cooling when [[T_f]] < [[T_i]]):

{{f:variacion_entropia_calentamiento}}

With [[m]] = 50 kg (per second of operation), [[c_p]] = 2100 J/(kg·K), [[T_f]] = 473 K, and [[T_i]] = 823 K. The ratio is 473/823 ≈ 0.575 and ln(0.575) ≈ −0.553. Multiplying 50 × 2100 × (−0.553) gives approximately −58065 J/K per second of operation. Therefore [[DeltaS]]_steam ≈ −58.1 kJ/(K·s).

This negative value indicates the steam loses entropy as it cools in the turbine. In an ideal isentropic turbine, all this entropy loss from the steam would be converted to work. In the real turbine, part of that work capacity is lost as internal irreversibility (friction, turbulence), and the total [[DeltaS]] of the steam would be less negative (or the universe would gain extra entropy).

As an ideal-gas contrast, if one stage is modelled with volume states, [[R]] and the final volume [[V_f]] are used together with [[V_i]]. In an expansion, increasing [[V_f]] adds a positive contribution to [[DeltaS]] even if temperature does not change:

{{f:variacion_entropia_gas_ideal}}

## Interpretation

The magnitude of [[DeltaS]]_steam allows calculating the **isentropic efficiency** of the turbine: if the actual outlet has higher entropy than the ideal isentropic outlet, the difference quantifies internal losses. A less negative actual [[DeltaS]] of the steam than expected indicates the turbine is generating internal irreversibility. Typical isentropic efficiency of modern steam turbines is 85–92%; entropic analysis is the fundamental tool for evaluating and improving this performance.

The causal reading is that [[DeltaS]] is not just an output number: it identifies where useful work is degraded. When friction and turbulence increase, the final state shifts toward higher entropy, and that difference forces the plant to burn more fuel for the same power. Entropic diagnosis therefore connects measurement, physical cause, and maintenance action.

The entropy change per second (kJ/(K·s) = kW/K) is a key operational quantity in thermal engineering that allows direct comparison of different turbine designs and optimisation of operating conditions to minimise irreversibility generation.
`;export{e as default};
