import os

ejemplos_content = """# Exam-type example

## Problem statement
In a single-family home of traditional construction, the original heating system consists of electric radiators using the Joule effect. During a typical winter season of 150 days, the equipment records a [[E_est|seasonal electric consumption]] of 5000 kWh. Since these systems transform electricity into heat with a performance close to unity, we can assume that the home's [[Q_est|seasonal thermal demand]] is also 5000 kWh. The owner decides to perform a comprehensive improvement in two stages: installing triple-pane windows (reduces [[Q_est]] by 25%) and replacing radiators with a heat pump with an average [[SCOP]] of 3.5. 

It is requested to calculate the new consumption [[E_est]], determine the overall [[Ahorro_pct|percentage energy savings]] of the system, and calculate the new [[C_est|seasonal economic cost]] if the [[precio_medio|average energy price]] is 0.22 EUR/kWh. We must analyze this comparing the [[base]] scenario with the [[nuevo]] scenario to fully understand the impact.

## Data
- [[E_base|Base consumption]]: 5000 kWh electric.
- [[Q_est|Base thermal demand]]: 5000 kWh thermal.
- Passive demand reduction: 25% (insulation).
- New seasonal performance ([[SCOP]]): 3.5.
- [[precio_medio|Average energy price]]: 0.22 EUR/kWh.

## System definition
The physical system is the home's thermal envelope and the coupled thermal generator. It is considered a closed system from a mass balance standpoint but open to thermal energy flow (losses to the outside) and electrical energy flow (input to the compressor). We will evaluate the transition from the [[base]] scenario to the [[nuevo]] setup to verify the energy improvements.

## Physical model
A steady-state seasonal balance model is used. The model anchors the core magnitudes of the module by assuming that the [[Q_est|seasonal thermal demand]] is directly proportional to the heat losses across the thermal envelope, and the [[E_est|seasonal electric consumption]] is inversely proportional to the [[SCOP]] of the chosen generation equipment. It is assumed that the home behaves as a thermal system with linear losses compensated by a heat source with constant performance throughout the season. This linear relationship is what allows us to confidently predict the [[Ahorro_pct|percentage energy savings]] when moving to the [[nuevo]] state. By clearly defining these boundaries, we establish a robust framework for assessing the energy dynamics within a domestic setting over an extended period.

## Model justification
The use of this model is appropriate because the analysis covers a full season (150 days), allowing for the averaging of hourly temperature and radiation fluctuations, focusing on the accumulated net energy flow. This temporal aggregation smooths out the peaks and valleys of daily thermal behavior, validating the use of seasonal coefficients rather than instantaneous performance metrics.

## Symbolic solution
To solve this problem, we first determine the new projected thermal demand after the passive improvement. The new [[Q_est]] is three quarters of the original thermal load.

Subsequently, we apply the fundamental definition of efficiency to find the new electrical consumption:

{{f:consumo_estacional}}

Once the [[E_est]] for the [[nuevo]] system is known, we evaluate the relative savings comparing both energy states (the [[base]] state and the upgraded state):

{{f:ahorro_porcentual}}

Finally, we translate the energy consumption into actual financial expenditure by calculating the [[C_est]]:

{{f:facturacion_estacional}}

## Numerical substitution
1. New [[Q_est]]: 5000 * 0.75 = 3750 kWh thermal.
2. New [[E_est]]: 3750 / 3.5 = 1071.43 kWh electric.
3. [[Ahorro_pct]]: 100 * (1 - 1071.43 / 5000) = 78.57%.
4. [[C_est]]: 1071.43 * 0.22 = 235.71 EUR.

## Dimensional validation
The seasonal consumption formula divides energy (kWh) by a dimensionless coefficient, resulting in energy (kWh), which is consistent. The percentage saving is a ratio of energies, resulting in a dimensionless value. The economic cost multiplies energy (kWh) by price per energy unit (EUR/kWh), correctly yielding EUR.

## Physical interpretation
The analysis reveals that the savings achieved exceed 78%. It is fundamental to note that the total saving is not merely the sum of the improvements, but a synergistic, multiplicative effect. By reducing the house's [[Q_est]], the heat pump not only has less total work to do, but each unit of thermal energy it injects is done with much higher efficiency due to its [[SCOP]]. This synergy demonstrates that building rehabilitation is as critical as machine performance. The transition from the [[base]] scenario to the [[nuevo]] scenario illustrates that thermodynamic improvements scale non-linearly when combined with envelope enhancements. This demonstrates why the [[Ahorro_pct]] is so substantial and why the [[C_est]] drops to manageable levels. The structural implication here is that preventing heat loss and generating heat efficiently are coupled mechanisms in the overall energy transition strategy. The results confirm that prioritizing envelope insulation before upgrading active heating systems prevents the oversizing of new equipment, leading to compounding benefits throughout the operational lifespan of the installation.

# Real-world example

## Context
Profitability analysis and resilience in the face of a price crisis. A family invests 6000 EUR in the improvements from the previous example. The goal is to compare the payback period if the [[precio_medio|average energy price]] is stable versus a crisis scenario where it rises drastically. This showcases how efficiency serves as a financial shield.

## Physical estimation
- Initial investment: 6000 EUR.
- [[E_base]]: 5000 kWh.
- [[E_nuevo]]: 1071.43 kWh.
- New [[C_est]]: 235.71 EUR at 0.22 EUR/kWh.
- In a crisis scenario with price at 0.40 EUR/kWh, the old [[C_est]] would be 2000 EUR, but the new [[C_est]] would only be 428 EUR.
- Annual savings (stable): 5000 * 0.22 - 235.71 = 864.29 EUR.
- Annual savings (crisis): 5000 * 0.40 - 428.57 = 1571.43 EUR.

## Interpretation
Efficiency drastically reduces economic exposure to price volatility. In a crisis, the amortization of the initial investment accelerates because the avoided costs are much higher, making the system a critical financial shield for the domestic economy. Moreover, an efficient system ensures that the [[C_est|seasonal economic cost]] remains manageable for the family even during extreme market volatility. The combination of reducing [[Q_est]] and increasing [[SCOP]] ensures that the [[nuevo]] system provides long-term resilience against external economic shocks, proving that thermodynamics and economics are intrinsically linked in domestic climate control. 

This principle extends beyond the individual household. On a macroeconomic level, when millions of homes transition from a high [[E_base]] to an optimized [[E_nuevo]], the aggregate reduction in peak demand alleviates stress on the national electrical grid. It prevents blackouts during extreme weather events and reduces the need to activate expensive and highly polluting backup power plants. Thus, the [[Ahorro_pct]] calculated for a single home scales up to represent a significant contribution to national energy independence and environmental sustainability. By anchoring our understanding in fundamental thermodynamics, we can appreciate how local actions, driven by a desire to lower the [[C_est]], ultimately support global efforts to mitigate climate change and foster a more stable, equitable energy future for all communities.
"""

aplicaciones_content = """# Applications of Efficiency Analysis

The systematic analysis of seasonal efficiency has applications that transcend the domestic sphere, influencing urban planning, construction regulations, and decarbonization strategies on a grand scale. By rigorously applying thermodynamic principles to the built environment, we can enact changes that drastically reduce the overall energy footprint of modern societies.

## 1. Planning Comprehensive Home Improvements
The seasonal balance model allows for prioritizing interventions (thermal envelope, replacement of generation equipment, and smart control strategies) according to their real impact on consumption. Without this analysis, it is common to invest in high-tech equipment that does not perform as expected due to structural deficiencies in the building. A comprehensive approach ensures that investments are made where they yield the highest thermodynamic and financial returns.
- **Dominant variable:** [[Q_est]]
- **Validity limit:** Only applicable if the initial audit data is accurate and reflects the actual usage by the inhabitants under normal thermal conditions.

## 2. Evaluation of Energy Rehabilitation Projects
Before undertaking a major renovation, this analysis helps to estimate the [[Ahorro_pct|percentage energy savings]] realistically. This is fundamental for applying for public subsidies, "green" credits, or simply for calculating the payback period of private investment, ensuring that decisions are based on physical data and not on optimistic commercial estimates. It provides a mathematically sound foundation for financial planning in the construction sector.
- **Dominant variable:** [[Ahorro_pct]]
- **Validity limit:** Requires that energy prices remain stable or follow projected inflation rates for long-term financial calculations to hold true.

## 3. Post-Implementation Monitoring and Verification
Once the improvement has been made in the [[nuevo]] scenario, the seasonal analysis framework serves to check if the projected savings are met in real use compared to the [[base]] scenario. It allows for identifying deviations caused by inadequate usage habits or failures in the installation of the climate control system, facilitating continuous energy performance improvement and the correction of configuration errors over time.
- **Dominant variable:** [[E_est]]
- **Validity limit:** A measurement period of at least one full season is required to normalize annual climatic variations and avoid seasonal bias.

## 4. Technical Communication and Awareness
It facilitates the explanation of complex concepts to non-specialist users. By translating raw energy units into the [[C_est|seasonal economic cost]], efficiency analysis becomes a powerful awareness tool, demonstrating that environmental sustainability is perfectly aligned with the financial health of families. This economic translation is often the most persuasive argument for widespread adoption of energy-saving measures.
- **Dominant variable:** [[C_est]]
- **Validity limit:** The effectiveness of awareness depends on transparency in electricity billing and the user's understanding of contracted power versus consumed energy.

## 5. Grid Optimization and Demand Management
On a large scale, knowledge of seasonal efficiency patterns helps power companies and grid operators predict demand peaks during extreme weather. Improving the [[SCOP]] on a massive scale reduces the need for oversized generation and transport infrastructure, favoring the integration of intermittent renewable energy by reducing the base load of the national system.
- **Dominant variable:** [[SCOP]]
- **Validity limit:** Valid for macroeconomic planning provided that the sample of homes analyzed is statistically representative of the national and regional housing stock.

## 6. Certification of Efficiency in Tertiary Buildings
In offices and commercial centers, seasonal efficiency is critical because internal thermal loads are extremely high. The analysis allows for sizing cooling systems that operate with an optimized [[SCOP]] throughout most of the year, avoiding massive energy waste in modern buildings that would otherwise be thermally unsustainable and excessively costly to maintain.
- **Dominant variable:** [[SCOP]]
- **Validity limit:** Must be integrated with controlled mechanical ventilation systems so as not to compromise indoor air quality while seeking maximum energy savings.

## 7. Design of Public Housing Policies
Governments use efficiency analysis to design housing plans that combat energy poverty structurally. By ensuring that social housing has a very low [[Q_est]] and equipment with a high [[SCOP]], it guarantees that vulnerable families can maintain comfort with a minimal [[precio_medio|average energy price]] impact, reducing reliance on direct state aid for bill payments.
- **Dominant variable:** [[Q_est]]
- **Validity limit:** Political effectiveness depends on technical maintenance of the equipment being viable, economical, and simple for the residents in the long term.

## 8. Development of International Construction Standards
The physics of seasonal efficiency forms the basis of international passive construction standards. These standards demand that the [[Q_est]] for heating and cooling be so low that the active climate control system becomes almost secondary. Rigorous analysis permits architects to design buildings that harmonize with the local climate, minimizing the ecological footprint of the highly polluting construction sector.
- **Dominant variable:** [[Q_est]]
- **Validity limit:** Passive construction models must be adjusted to the specific latitude and microclimate of the building site to prevent overheating issues during summer.

By systematically applying these principles across all these diverse applications, we can ensure a more sustainable, economically viable, and thermodynamically sound future for urban development and residential living. The integration of high-[[SCOP]] technologies with low-[[Q_est]] envelopes is the cornerstone of modern architectural physics.
"""

path_ejemplos = "frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/climatizacion/eficiencia/ejemplos.en.md"
path_aplicaciones = "frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/climatizacion/eficiencia/aplicaciones.en.md"

with open(path_ejemplos, 'w', encoding='utf-8') as f:
    f.write(ejemplos_content)

with open(path_aplicaciones, 'w', encoding='utf-8') as f:
    f.write(aplicaciones_content)

print("Files rewritten successfully.")
