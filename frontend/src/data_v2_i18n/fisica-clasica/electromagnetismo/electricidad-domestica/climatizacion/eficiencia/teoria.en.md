## Conceptual context

## 🟢 Essential level

To understand efficiency, we must first separate physical need from technical expenditure. In any domestic climate control system, we handle concepts that are often confused but operate in different dimensions. It is vital not to treat the system as a "black box" that simply consumes money, but as a chain of energy transformations.

1.  **Demand**: This is the amount of heat that the house "asks for" to be comfortable. If the house has good windows and insulation, the [[demanda_termica_estacional]] will be low. It is like a bucket with holes: the smaller the holes (better insulation), the less water (heat) you have to pour in to keep it full.
2.  **Performance**: This is the machine's capacity to provide heat. A machine with a high [[rendimiento_estacional_scop]] is like a faucet that, for every drop you pay for, gives you three or four extra drops of water for free from the environment.
3.  **Consumption**: This is what finally marks the electricity meter in kWh. It depends on the two previous points. If the demand is low and the performance is high, the [[consumo_electrico_estacional]] will be minimal.

The central idea of this level is that efficiency is not something fixed, but can be improved by acting on the house (plugging holes) or on the machine (changing the faucet).

## 🔵 Formal level

The mathematical relationship governing this process is a law of inverse proportionality with respect to performance. The [[consumo_electrico_estacional]] is calculated by dividing the building's total thermal need by the multiplication capacity of the climate control system:

{{f:consumo_estacional}}

This formula reveals a fundamental truth: for the same [[demanda_termica_estacional]], if we double the [[rendimiento_estacional_scop]], we reduce consumption by exactly half. In pure resistive systems, such as oil radiators, the [[rendimiento_estacional_scop]] is approximately 1, which means that each joule of electricity becomes a joule of heat. In modern heat pumps, the [[rendimiento_estacional_scop]] can be between 3 and 5, which implies that the [[consumo_electrico_estacional]] is only a third or fifth part of the thermal energy delivered to the home.

Once the electrical consumption is known, the financial impact is determined by applying the current rate:

{{f:facturacion_estacional}}

To evaluate the success of an efficiency investment, we use the concept of **[[base scenario|base]]**. The [[base]] scenario represents the reference situation, while the **[[new scenario|nuevo]]** represents the proposed improvement. The key metric for technically and economically validating a proposal is the [[ahorro_energetico_porcentual]]:

{{f:ahorro_porcentual}}

Where [[consumo_escenario_base]] and [[consumo_escenario_nuevo]] must be calculated or measured under the same conditions of use and outdoor temperature for the comparison to be valid.

## 🔴 Structural level

At the structural level, efficiency analysis must consider the limits of validity of the model and the systemic variables that can invalidate simplified theoretical calculations:

1.  **Thermodynamic Limits and the Carnot Cycle**: No heat transport system can exceed the theoretical efficiency limit defined by the second law of thermodynamics. The real [[rendimiento_estacional_scop]] of commercial equipment will always be limited by internal irreversibilities.
2.  **Influence of Seasonal Thermal Jump**: Efficiency is a slave to the outdoor temperature. An [[rendimiento_estacional_scop]] calculated for a coastal area is not valid for a mountain area. At very low temperatures, equipment often enters defrost cycles that consume energy without providing heat.
3.  **Thermal Inertia and Modulation**: Real consumption is affected by the system's ability to adapt to the partial load. Equipment with *inverter* technology modulates its power to exactly balance the house's losses, avoiding starting peaks.

## Deep physical interpretation

Deep interpretation tells us that efficiency is, ultimately, a measure of the entropy generated in the climatization process. A perfect system would maintain temperature without energy expenditure if insulation were infinite. Since this is impossible, efficiency seeks to minimize the work necessary to compensate for the inevitable degradation of energy.

## Order of magnitude

In a typical 90 m² home in a Mediterranean climate, the [[demanda_termica_estacional]] is usually around 3000-4000 thermal kWh. If we use electric radiators ([[rendimiento_estacional_scop]] = 1), the [[consumo_electrico_estacional]] will be 4000 kWh. With an efficient heat pump ([[rendimiento_estacional_scop]] = 4), the [[consumo_electrico_estacional]] drops to 1000 kWh. This jump by a factor of 4 is the order of magnitude that defines the aerothermal revolution.

## Personalized resolution method

To solve a savings problem:
1. Identify the [[base]] scenario and its [[consumo_escenario_base]].
2. Calculate the new [[demanda_termica_estacional]] if there are insulation improvements.
3. Determine the new [[rendimiento_estacional_scop]] of the proposed equipment.
4. Calculate [[consumo_escenario_nuevo]] using the division formula.
5. Obtain the [[ahorro_energetico_porcentual]] and translate it into annual euros.

## Special cases and extended example

A special case is the "rebound effect": when a user installs a very efficient system, they sometimes raise the setpoint temperature (from 20 °C to 23 °C) because "now it's cheap." This can cancel out much of the theoretical energy savings, demonstrating that the human factor is a structural variable of the system.

Another special case involves the combination of high [[rendimiento_estacional_scop]] heat pumps with photovoltaic solar panels. In this scenario, the [[consumo_electrico_estacional]] (electrical consumption from the grid) can drop dramatically, not just because the heat pump is efficient, but because the solar panels supply a large portion of the required electricity during daylight hours. This creates an extended system where the overall efficiency must account for both the generation of renewable energy on-site and the thermal performance of the climate control equipment. The [[ahorro_energetico_porcentual]] in this extended example would be calculated against a [[base]] scenario where all electricity was purchased from the grid, highlighting how multi-technology integrations yield compound benefits.

Additionally, we must consider the special case of poorly insulated historical buildings, where installing a high-efficiency heat pump without prior envelope improvements might lead to the system running continuously at maximum capacity, reducing the actual [[rendimiento_estacional_scop]] and increasing wear and tear. Therefore, achieving optimal efficiency always requires a holistic approach that balances generation technology with building physics.

## Real student questions

- **Why doesn't my bill drop by half if the equipment is twice as efficient?** Probably because the price of light has risen or because you have increased usage hours.
- **Is it better to insulate or change the machine?** Physically, it is always better to reduce the [[demanda_termica_estacional]] first (insulate), as it is a passive improvement that doesn't depend on machines or maintenance.

## Cross-cutting connections and study paths

This topic directly connects with:
- **Heat pump**: Physical fundamentals of the refrigeration cycle.
- **Thermodynamics**: First and second principles applied to open systems.
- **Circular economy**: Reducing carbon footprint through efficiency.

## Final synthesis

Efficiency in climate control is optimized when the reduction of thermal demand ([[demanda_termica_estacional]]) and the increase of seasonal performance ([[rendimiento_estacional_scop]]) are balanced. The result is not just lower electrical consumption ([[consumo_electrico_estacional]]), but greater economic and environmental resilience of the home.

A robust efficiency diagnosis therefore never reads one number in isolation. The teacher can ask whether the same comfort condition, same season, and same useful thermal service are being compared; the student can then separate envelope demand, machine performance, and energy price before interpreting the saving. This separation prevents a common mistake: attributing every reduction in the bill to the equipment, when part of the result may come from lower demand, different habits, or a changed tariff.

The final judgment must connect the numerical saving with a stable physical cause.
