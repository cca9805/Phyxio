# Applications — Practical Examples

## 1. Domestic refrigerator

The domestic refrigerator is the most universal application of vapor-compression refrigeration. A standard refrigerator maintains the main compartment at 4 degrees Celsius ([[T_C]] of 277 K) and the freezer at minus 18 degrees Celsius ([[T_C]] of 255 K), with the condenser rejecting heat to the environment at 25 to 35 degrees Celsius ([[T_H]] of 298 to 308 K). The compressor consumes between 80 and 200 W and the typical [[COP_real]] ranges from 2 to 4 depending on the model, load and ambient conditions. The European energy label classifies refrigerators by annual consumption in kWh, which depends directly on the average [[COP_real]] throughout the year. A class A refrigerator consumes approximately 100 kWh per year, while a class F may consume 400 kWh or more. The typical Carnot fraction [[eta_Carnot]] is 40 to 55 %, indicating room for improvement but that current designs are already reasonably efficient.

Dominant variable: [[COP_real]], which directly determines annual electricity consumption and energy classification.

Validity limit: the constant COP model becomes invalid when ambient temperature exceeds 43 degrees Celsius or when the door is opened frequently, since the compressor must operate in start-stop cycles that reduce average efficiency.

## 2. Residential split air conditioner

The split air conditioner is the most widespread solution for residential climate control. The indoor unit absorbs heat from the space at 22 to 25 degrees Celsius ([[T_C]] of 295 to 298 K) and the outdoor unit rejects it to the environment at 35 to 45 degrees Celsius ([[T_H]] of 308 to 318 K). Compressor powers [[W_comp]] range from 500 W in 2.5 kW cooling units to 3000 W in 10 kW units. The [[COP_real]] in cooling mode ranges from 3 to 5, and in heat pump mode from 2.5 to 4.5. European regulations require a minimum SEER (seasonal energy efficiency ratio) which is essentially the COP weighted average over annual climate conditions. Inverter systems with variable-speed compressors achieve [[eta_Carnot]] of 45 to 60 % because they adapt power to actual demand, avoiding on-off cycles that degrade efficiency.

Dominant variable: outdoor condenser [[T_H]], which in hot climates can reach 50 degrees Celsius and drastically reduces [[COP_real]].

Validity limit: the model fails when relative humidity is very high and the evaporator dedicates a significant fraction of its capacity to dehumidification rather than cooling, reducing the effective sensible COP.

## 3. Geothermal heat pump

The geothermal heat pump extracts heat from the subsurface at a stable temperature of 10 to 15 degrees Celsius ([[T_C]] of 283 to 288 K) and delivers it to the heating system at 35 to 55 degrees Celsius ([[T_H]] of 308 to 328 K). The fundamental advantage over air-source pumps is that [[T_C]] is constant year-round, providing a stable [[COP_real]] between 3.5 and 5.0 regardless of outdoor weather. The refrigeration [[COP_Carnot]] ranges from 7 to 14 depending on delivery temperature, and the typical [[eta_Carnot]] is 35 to 50 %. The initial investment is higher than air-source systems (well drilling, probe installation), but the energy savings over 20 years offset the additional cost in most European climates. For a home with a 10 kW heating demand, the compressor power [[W_comp]] is 2000 to 2850 W, and the heat extracted from the ground [[Q_C]] is 7150 to 8000 W.

Dominant variable: delivery [[T_H]] to the heating system. Underfloor heating systems (35 degrees Celsius) allow much higher COP than conventional radiators (55 degrees Celsius).

Validity limit: the model fails when the ground is thermally depleted after years of extraction without summer recovery, progressively reducing [[T_C]] and degrading COP.

## 4. Industrial food freezing

Industrial freezing operates at evaporation temperatures of minus 25 to minus 40 degrees Celsius ([[T_C]] of 233 to 248 K) with condensation at 35 to 40 degrees Celsius ([[T_H]] of 308 to 313 K). The thermal gap of 60 to 80 K is much larger than in domestic refrigeration, reducing the [[COP_Carnot]] to values of 3 to 4 and the [[COP_real]] to 1.2 to 2.0. The [[eta_Carnot]] drops to 30 to 50 % due to large irreversibilities associated with multi-stage compressors and temperature differences in heat exchangers. Compressor powers [[W_comp]] reach 50 to 500 kW for blast freezing tunnels. Energy consumption is a significant component of operating cost, making 5 % improvements in [[COP_real]] worth thousands of euros annually. The use of two-stage systems with intercooling improves COP by 15 to 25 % compared to single-stage compression.

Dominant variable: evaporator [[T_C]]. Each degree of reduction in [[T_C]] decreases [[COP_real]] by approximately 3 to 4 %.

Validity limit: the constant COP model fails during transient freezing phases where the thermal load varies rapidly as the product changes phase.

## 5. Air-source heat pump for domestic hot water

The air-source heat pump for domestic hot water (DHW) extracts heat from ambient air or building ventilation air at 15 to 25 degrees Celsius ([[T_C]] of 288 to 298 K) and heats water to 55 to 65 degrees Celsius ([[T_H]] of 328 to 338 K) for domestic use. The typical [[COP_real]] is 2.5 to 3.5, with [[COP_Carnot]] of 7 to 8 and [[eta_Carnot]] of 30 to 45 %. The compressor power [[W_comp]] is 400 to 700 W for 200 to 300 liter tanks. The savings compared to an electric resistance heater (COP of 1) are 60 to 70 % on the electricity bill. The European ErP (Energy-related Products) regulation requires a minimum COP for certification of these units. The system is particularly efficient when fed from extracted ventilation air at 20 degrees Celsius, which keeps [[T_C]] high and stable year-round, raising [[COP_real]] to 3.5.

Dominant variable: the difference [[T_H]] minus [[T_C]], which directly determines [[COP_Carnot]] and therefore the ceiling of [[COP_real]].

Validity limit: the model fails when the source air temperature drops below 7 degrees Celsius and frequent evaporator defrosting is required, reducing effective COP by 15 to 25 %.
