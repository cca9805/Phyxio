const e=`# Exam-type example

## Problem statement

A Carnot heat engine operates between a hot reservoir at 527 °C and a cold reservoir at 27 °C. The hot reservoir supplies 2000 J per cycle. Calculate: (a) the Carnot efficiency, (b) the net work per cycle, (c) the heat released to the cold reservoir per cycle, (d) the entropy change of the universe per cycle. Verify that the process is reversible.

## Data

- Absolute hot-reservoir temperature: [[T_caliente]] is 800 K after conversion from 527 degrees C.
- Absolute cold-reservoir temperature: [[T_frio]] is 300 K after conversion from 27 degrees C.
- Heat absorbed from the hot reservoir per cycle: 2000 J.
- Process: Carnot cycle (reversible by definition)

## System definition

The system is the working fluid of the engine (ideal gas, for example). The surroundings consist of the two thermal reservoirs. The thermodynamic universe is fluid + hot reservoir + cold reservoir.

## Physical model

The Carnot efficiency formula is applied for a reversible cycle between two reservoirs:

{{f:eficiencia_carnot}}

The reversibility condition guarantees the cycle produces the maximum possible work for those temperatures:

{{f:condicion_reversibilidad}}

## Model justification

The model is valid because:
- The Carnot cycle is, by definition, reversible: it operates with infinitesimal gradients and no dissipation.
- The reservoirs are ideal at constant temperature.
- Carnot efficiency is exact as an upper bound and as the actual efficiency of the ideal cycle.

The model would stop being valid if:
- The engine had internal friction (turbine, piston): real efficiency would be lower.
- The reservoirs were finite (their temperature would change during the cycle).

## Symbolic solution

Step 1: Carnot efficiency:

[[eta_Carnot]] = 1 − [[T_frio]] / [[T_caliente]]

Step 2: Net work:

The net work is obtained by multiplying the reversible efficiency by the heat absorbed from the hot reservoir.

Step 3: Heat released to cold reservoir:

The heat released to the cold reservoir is obtained by subtracting net work from absorbed heat; equivalently, use the thermal ratio between [[T_frio]] and [[T_caliente]].

Step 4: Universe entropy change:

The universe entropy change is verified by adding the cyclic system contribution and both reservoir contributions.

In a cycle, [[DeltaS_sis]] is zero because the system returns to its initial state.

## Numerical substitution

**[[eta_Carnot]]**: substitute [[T_frio]] = 300 K, [[T_caliente]] = 800 K. The ratio is 300/800 = 0.375. Then [[eta_Carnot]] = 1 − 0.375 = 0.625 = 62.5%.

**W_net**: multiply 0.625 × 2000 = 1250 J.

**Q_C**: subtract 2000 − 1250 = 750 J. Verification: 2000 × 300/800 = 750 J. Consistent.

**[[DeltaS_univ]]**: [[DeltaS_sis]] = 0 (cycle). [[DeltaS_ent]] = −Q_H/[[T_caliente]] + Q_C/[[T_frio]] = −2000/800 + 750/300 = −2.500 + 2.500 = 0 J/K. Thus [[DeltaS_univ]] = 0 J/K.

## Dimensional validation

Each dimensional check confirms that temperature ratios, energies, and entropy changes are being combined with coherent units. The key point is that temperatures used in [[eta_Carnot]] are absolute, while the entropy balance keeps J/K units.

The temperature ratio compares kelvin with kelvin and gives a dimensionless [[eta_Carnot]].
Net work combines a dimensionless efficiency with absorbed energy, so it remains in joule.
The heat released to the cold reservoir is obtained as an energy difference, also in joule.
The entropy balance divides energy by absolute temperature, so [[DeltaS_univ]] is in J/K.

## Physical interpretation

Carnot efficiency is 62.5%, which means that of every 2000 J absorbed from the hot reservoir, the engine converts at most 1250 J into useful work and must necessarily release 750 J to the cold reservoir. This release indicates a requirement of the second law, not a design flaw.

Zero [[DeltaS_univ]] confirms the cycle is reversible: no net entropy is generated in the universe. All energy quality is conserved. The hot reservoir loses 2.500 J/K of entropy, while the cold reservoir gains exactly 2.500 J/K. The compensation is perfect, which is why the cycle is the maximum reference for any real engine between those reservoirs.

If the real engine achieved 45% efficiency instead of the ideal 62.5%, the 17.5-point gap would quantify losses from internal irreversibilities such as friction and finite temperature gradients. The second-law efficiency would be close to 72%, a useful reading because it separates the unavoidable Carnot limitation from design losses that can still be reduced.

# Real-world example

## Context

An engineer evaluates a geothermal power plant that extracts steam at 180 °C (453 K) from a geothermal well and rejects heat to the environment at 15 °C (288 K). The plant produces 5 MW of electricity. The engineer needs to calculate the Carnot efficiency as reference, the plant's real efficiency, and the second-law efficiency to determine whether there is significant room for improvement.

## Physical estimation

As an order-of-magnitude estimate, the Carnot reference between 453 K and 288 K gives [[eta_Carnot]] approximately 36.4%.

This value is read as a thermodynamic ceiling, not as an expected operating efficiency: the geothermal source is only 165 K above the environment, so the cold-to-hot temperature ratio is large and reduces the maximum recoverable work.

To produce 5 MW with that reversible reference, the minimum heat needed from the hot reservoir would be close to 13.7 MW thermal.

If the real plant consumes 18 MW thermal from the geothermal well to produce 5 MW electrical, its real efficiency is near 27.8%.

The second-law efficiency compares that real performance with [[eta_Carnot]] and is near 76.4%.

The quantitative reading is that out of every 100 units of reversible potential available, the plant uses about 76 and loses about 24 through real irreversibilities.

## Interpretation

The second-law efficiency of 76.4% indicates the plant utilises 76% of the maximum thermodynamic potential. This is reasonably good performance for a geothermal plant (where hot reservoir temperatures are relatively low, limiting [[eta_Carnot]]).

The main physical cause is not only turbine imperfection: the available thermal gap itself is modest. That is why [[eta_Carnot]] acts as a hard boundary, while second-law efficiency separates two effects: reversible temperature limitation and internal losses from the real design.

The theoretical improvement margin is 23.6%. The main irreversibility sources are: pressure losses in steam piping, finite T gradients in heat exchangers, and mechanical dissipation in the turbine. Component-level exergy analysis would identify which of these sources is dominant.

The fundamental limitation is that geothermal temperature (453 K) is low compared to fossil fuel plants (800-1500 K), which limits [[eta_Carnot]] to 36%. Even with a perfect machine, more than 63% of geothermal heat must be released to the environment. Investment in cycle improvement (binary cycle with organic working fluid, for example) could raise eta_II from 76% to 82-85%, but can never exceed the Carnot ceiling.
`;export{e as default};
