# Exam-type example

## Problem statement

In a single-family home of traditional construction, the original heating system consists of electric radiators using the Joule effect. During a typical winter season of 150 days, the equipment records a [[consumo_electrico_estacional]] of 5000 kWh. Since these systems transform electricity into heat with a performance close to unity, we can assume that the home's [[demanda_termica_estacional]] is also 5000 kWh. The owner decides to perform a comprehensive improvement in two stages: installing triple-pane windows (reduces [[demanda_termica_estacional]] by 25%) and replacing radiators with a heat pump with an average [[rendimiento_estacional_scop]] of 3.5.

It is requested to calculate the new consumption [[consumo_electrico_estacional]], determine the overall [[ahorro_energetico_porcentual]] of the system, and calculate the new [[coste_economico_estacional]] if the [[average energy price|precio_medio]] is 0.22 EUR/kWh. We must analyze this comparing the [[base]] scenario with the [[nuevo]] scenario to fully understand the impact.

## Data

- [[consumo_escenario_base]]: 5000 kWh electric.
- [[demanda_termica_estacional]]: 5000 kWh thermal.
- Passive demand reduction: 25% (insulation).
- New seasonal performance ([[rendimiento_estacional_scop]]): 3.5.
- [[Average energy price|precio_medio]]: 0.22 EUR/kWh.

## System definition

The physical system is the home's thermal envelope and the coupled thermal generator. It is considered a closed system from a mass balance standpoint but open to thermal energy flow (losses to the outside) and electrical energy flow (input to the compressor). We will evaluate the transition from the [[base]] scenario to the [[nuevo]] setup to verify the energy improvements.

## Physical model

A steady-state seasonal balance model is used. The model anchors the core magnitudes of the module by assuming that the [[demanda_termica_estacional]] is directly proportional to the heat losses across the thermal envelope, and the [[consumo_electrico_estacional]] is inversely proportional to the [[rendimiento_estacional_scop]] of the chosen generation equipment. It is assumed that the home behaves as a thermal system with linear losses compensated by a heat source with constant performance throughout the season. This linear relationship is what allows us to confidently predict the [[ahorro_energetico_porcentual]] when moving to the [[nuevo]] state. By clearly defining these boundaries, we establish a robust framework for assessing the energy dynamics within a domestic setting over an extended period.

## Model justification

The use of this model is appropriate because the analysis covers a full season (150 days), allowing for the averaging of hourly temperature and radiation fluctuations, focusing on the accumulated net energy flow. This temporal aggregation smooths out the peaks and valleys of daily thermal behavior, validating the use of seasonal coefficients rather than instantaneous performance metrics.

## Symbolic solution

To solve this problem, we first determine the new projected thermal demand after the passive improvement. The new [[demanda_termica_estacional]] is three quarters of the original thermal load.

Subsequently, we apply the fundamental definition of efficiency to find the new electrical consumption:

{{f:consumo_estacional}}

Once the [[consumo_electrico_estacional]] for the [[nuevo]] system is known, we evaluate the relative savings comparing both energy states (the [[base]] state and the upgraded state):

{{f:ahorro_porcentual}}

Finally, we translate the energy consumption into actual financial expenditure by calculating the [[coste_economico_estacional]]:

{{f:facturacion_estacional}}

## Numerical substitution

First, we calculate the newly projected thermal demand by reducing the [[base]] value by twenty-five percent. This results in exactly 3750 thermal kWh.
Next, we divide this figure by the seasonal performance coefficient of 3.5 to obtain the electrical consumption, giving 1071.43 kWh.
Then, we determine the relative savings by comparing the new electrical load with the original 5000 kWh. The result is 78.57%.
Finally, we multiply the new consumption by the unitary energy price of 0.22 EUR/kWh to determine the total economic cost for the complete season, resulting in 235.71 EUR.

## Dimensional validation

The seasonal consumption formula divides energy (kWh) by a dimensionless coefficient, resulting in energy (kWh), which is consistent. The percentage saving is a ratio of energies, resulting in a dimensionless value. The economic cost multiplies energy (kWh) by price per energy unit (EUR/kWh), correctly yielding EUR.

## Physical interpretation

The analysis reveals that the savings achieved exceed 78%. This indicates that the total saving is not merely the sum of the improvements, but a synergistic effect. Therefore, by reducing the house's [[demanda_termica_estacional]], the heat pump has less total work to do, which physically decreases the electrical consumption. This implies that thermodynamic improvements scale non-linearly when combined with envelope enhancements. The structural implication is consistent with the principle that preventing heat loss and generating heat efficiently are coupled mechanisms.

# Real-world example


## Context

Profitability analysis and resilience in the face of a price crisis. A family invests 6000 EUR in the improvements from the previous example. The goal is to compare the payback period if the [[average energy price|precio_medio]] is stable versus a crisis scenario where it rises drastically. This showcases how efficiency serves as a financial shield.

## Physical estimation

- Initial estimated investment: 6000 EUR.
- [[consumo_escenario_base]]: 5000 kWh.
- [[consumo_escenario_nuevo]]: 1071.43 kWh.
- New [[coste_economico_estacional]]: 235.71 EUR at 0.22 EUR/kWh.
- In a crisis scenario with a price at 0.40 EUR/kWh, the old [[coste_economico_estacional]] would be 2000 EUR, but the new [[coste_economico_estacional]] would approximate 428 EUR.
- This gives a reasonable value for the annual savings (stable): 5000 * 0.22 - 235.71 = 864.29 EUR.
- Order of magnitude for annual savings (crisis): 5000 * 0.40 - 428.57 = 1571.43 EUR.

## Interpretation

Efficiency drastically reduces economic exposure to price volatility. In a crisis, the amortization of the initial investment accelerates because the avoided costs are much higher, making the system a critical financial shield for the domestic economy. Moreover, an efficient system ensures that the [[coste_economico_estacional]] remains manageable for the family even during extreme market volatility. The combination of reducing [[demanda_termica_estacional]] and increasing [[rendimiento_estacional_scop]] ensures that the [[nuevo]] system provides long-term resilience against external economic shocks, proving that thermodynamics and economics are intrinsically linked in domestic climate control.

This principle extends beyond the individual household. On a macroeconomic level, when millions of homes transition from a high [[consumo_escenario_base]] to an optimized [[consumo_escenario_nuevo]], the aggregate reduction in peak demand alleviates stress on the national electrical grid. It prevents blackouts during extreme weather events and reduces the need to activate expensive and highly polluting backup power plants. Thus, the [[ahorro_energetico_porcentual]] calculated for a single home scales up to represent a significant contribution to national energy independence and environmental sustainability. By anchoring our understanding in fundamental thermodynamics, we can appreciate how local actions, driven by a desire to lower the [[coste_economico_estacional]], ultimately support global efforts to mitigate climate change and foster a more stable, equitable energy future for all communities.