# Applications — Coefficient of Performance

## 1. Domestic refrigerator

The domestic refrigerator is the most common application of refrigeration COP. It typically operates with [[T_C]] of 255 K (minus 18 degrees Celsius for the freezer) and [[T_H]] of 305 to 315 K (condenser temperature at the back, slightly above room temperature). The Carnot refrigeration COP for these conditions is 4.3 to 5.1, while modern inverter-compressor refrigerators achieve real COPs of 2 to 3.5, representing 45 to 70 % of the theoretical value. Efficiency is classified by the European energy label (A+++ to G), where class A+++ corresponds to COPs above 3. COP varies seasonally: in summer, the increase in [[T_H]] reduces COP and increases electricity consumption by 10 to 20 %.

Dominant variable: [[T_H]], which rises in summer increasing the temperature difference and reducing COP.
Validity limit: when refrigerant charge is insufficient or the condenser is blocked, the COP model based on reservoir temperatures underestimates actual consumption.

## 2. Residential air conditioning

Residential air conditioning systems operate as refrigerators with [[T_C]] of 293 to 298 K (interior at 20 to 25 degrees Celsius) and [[T_H]] of 308 to 318 K (exterior at 35 to 45 degrees Celsius). The temperature difference is smaller than in refrigeration, giving Carnot COPs of 15 to 30, very high values reflecting the thermodynamic ease of the process. Real systems achieve COPs of 3 to 6 (expressed as EER in the industry), representing 15 to 25 % of the Carnot value. The discrepancy is due to large irreversibilities in heat exchangers, compression and air distribution. Multisplit systems with inverter compressors achieve the highest COP values by matching capacity to demand.

Dominant variable: the difference [[T_H]] minus [[T_C]], which on very hot days can exceed 25 K, significantly reducing COP.
Validity limit: when outdoor relative humidity is very high, the cooling load includes dehumidification and the COP based only on temperatures does not capture the real energy cost.

## 3. Geothermal heat pump

Geothermal heat pumps extract heat from the ground at [[T_C]] of 280 to 288 K (stable ground temperature at 2 to 3 meters depth) to heat a dwelling at [[T_H]] of 308 to 323 K (underfloor heating or radiator circuit). The Carnot heat pump COP is 8 to 12, and real systems achieve COPs of 3.5 to 5.5. The main advantage of the geothermal source is the stability of [[T_C]] throughout the year, unlike air-source heat pumps whose source [[T_C]] drops in winter when heating demand is highest. With a real COP of 4.5, each kWh of electricity delivers 4.5 kWh of thermal energy, making the geothermal heat pump 30 to 50 % more economical than a gas boiler in temperate climates.

Dominant variable: [[T_C]] of the ground, which remains stable between 280 and 288 K ensuring a consistently high COP.
Validity limit: if the geothermal heat exchanger is undersized, continuous heat extraction cools the surrounding ground and progressively reduces [[T_C]], degrading COP throughout the season.

## 4. Industrial freezing

Industrial freezing systems for the food cold chain operate with [[T_C]] of 233 to 248 K (minus 40 to minus 25 degrees Celsius) and [[T_H]] of 308 to 318 K (condenser). The temperature difference of 60 to 85 K is much larger than in domestic refrigeration, reducing the Carnot COP to 2.7 to 4.1. Real COPs are 1.0 to 2.0, representing 35 to 50 % of the Carnot value. The low COP explains the high energy cost of the cold chain: industrial refrigeration consumes approximately 8 % of global electricity. Two-stage compression systems with intercooling improve COP by 15 to 25 % compared to single-stage by reducing the compression ratio of each stage.

Dominant variable: [[T_C]], which being very low creates a large temperature difference and an intrinsically low COP.
Validity limit: at temperatures below 223 K the simple COP model does not capture compressor lubrication losses, the need for multiple compression stages and the limitations of conventional refrigerants.

## 5. Air-source heat pump for district heating

Air-source heat pumps for district heating networks extract heat from outdoor air ([[T_C]] variable from 268 to 288 K depending on the season) and deliver it to the network at [[T_H]] of 333 to 353 K (high temperatures needed for existing networks with radiators). The temperature difference of 45 to 85 K gives Carnot COPs of 3.9 to 14.2, with real COPs of 2.0 to 3.5. The main limitation is that on the coldest winter days, when heating demand is highest, [[T_C]] drops and COP decreases dramatically: at minus 5 degrees Celsius, the real COP can fall below 2.0, making the heat pump barely competitive with a gas boiler. Solutions include cascade heat pumps and combination with industrial waste heat sources.

Dominant variable: outdoor air [[T_C]], which fluctuates seasonally and reduces COP precisely when heating demand is highest.
Validity limit: when [[T_C]] drops below 263 K, frost formation on the evaporator requires defrost cycles that reduce the effective COP below steady-state model predictions.
