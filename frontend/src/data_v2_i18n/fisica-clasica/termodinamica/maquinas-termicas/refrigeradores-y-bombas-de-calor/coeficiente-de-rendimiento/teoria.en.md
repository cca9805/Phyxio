# Theory — Coefficient of Performance

## Conceptual context

The coefficient of performance (COP) is the quantity that measures the efficiency of reversed thermodynamic cycles: refrigerators and heat pumps. Unlike the thermal efficiency of a heat engine, which is always less than one, the COP can be much greater than one because it measures heat transferred per unit of work, not heat converted to work. The central problem it solves is determining how much heat can be extracted from a cold space or delivered to a warm space per unit of energy consumed, and what thermodynamic limit the second law imposes on that capacity.

## 🟢 Essential level

A refrigerator is a machine that extracts heat [[Q_C]] from a cold reservoir (refrigerated space at temperature [[T_C]]) and delivers it to the hot reservoir (outdoor environment at temperature [[T_H]]), consuming compressor work [[W]]. A heat pump is the same machine but with the opposite objective: delivering heat to the space to be heated by extracting it from the cold outdoor environment.

The refrigeration coefficient of performance [[COP_ref]] measures how many units of heat are extracted from the cold reservoir per unit of work. The heat pump coefficient of performance [[COP_bc]] measures how many units of heat are delivered to the hot reservoir per unit of work.

Both COPs can be greater than one because they do not violate the second law: they do not convert heat into work but transfer heat from one reservoir to another by consuming work. The fundamental relationship between them is that [[COP_bc]] is always exactly [[COP_ref]] plus one, because the hot reservoir receives both the extracted heat and the consumed work.

## 🔵 Formal level

The definition of refrigeration COP is:

{{f:cop_refrigeracion}}

The definition of heat pump COP is:

{{f:cop_bomba_calor}}

The energy balance of the reversed cycle establishes:

{{f:balance_energetico_cop}}

The maximum theoretical Carnot COP for refrigeration is:

{{f:cop_carnot_ref}}

The maximum theoretical Carnot COP for heat pump is:

{{f:cop_carnot_bc}}

The relationship between both COPs follows directly from the energy balance:

{{f:relacion_cop}}

The Carnot [[COP_ref]] depends exclusively on the absolute temperatures of the two reservoirs. When [[T_C]] approaches [[T_H]], the difference in the denominator decreases and the COP diverges: extracting heat between two reservoirs at similar temperatures requires very little work. When [[T_C]] tends to zero, the COP tends to zero: extracting heat from a very cold reservoir is thermodynamically very costly. The Carnot [[COP_bc]] follows the same behavior but shifted one unit upward. The consumed [[W]] decreases when the difference [[T_H]] minus [[T_C]] is reduced, and increases when the difference grows.

The [[Q_H]] delivered to the hot reservoir is always greater than [[Q_C]] because it includes the compressor work [[W]]. This is the reason heat pumps are more efficient than direct electric heating: each kWh of electricity can deliver 3 to 5 kWh of thermal energy.

## 🔴 Structural level

The structure of the Carnot COP reveals a fundamental asymmetry: while the Carnot efficiency of an engine is bounded between zero and one, the COP of a reversed cycle can take any positive value. This reflects the conceptual difference between converting heat into work (limited by the second law) and transferring heat from one reservoir to another (facilitated by external work).

The most important validity condition of the Carnot COP model is cycle reversibility. Real vapor-compression refrigeration cycles have significant irreversibilities: pressure drops in piping, non-isentropic compression, finite temperature differences in heat exchangers, and losses from subcooling and superheating of the refrigerant. These irreversibilities reduce the real COP to 30 to 60 % of the Carnot COP.

The dependence of COP on the temperature difference has profound practical implications. For domestic refrigeration with [[T_C]] of 255 K and [[T_H]] of 308 K, the Carnot COP is 4.8 but the real COP is 2 to 3. For industrial freezing with [[T_C]] of 233 K and [[T_H]] of 308 K, the Carnot COP drops to 3.1 and the real COP to 1 to 2. For cryogenics at 77 K (liquid nitrogen) with [[T_H]] of 300 K, the Carnot COP is only 0.35, explaining the enormous energy cost of gas liquefaction.

The relationship [[COP_bc]] equal to [[COP_ref]] plus one has an elegant demonstration starting from the energy balance. Dividing the balance by [[W]] yields [[Q_H]] divided by [[W]] equals [[Q_C]] divided by [[W]] plus one, that is, [[COP_bc]] equals [[COP_ref]] plus one. This relationship is exact and universal, valid for any reversed cycle between two reservoirs.

## Deep physical interpretation

The Carnot COP for refrigeration has a geometric interpretation in the T-s diagram: the area below the lower isotherm (proportional to [[Q_C]]) divided by the area enclosed by the cycle (proportional to [[W]]). When the two isotherms approach each other, the enclosed area shrinks much faster than the area below the lower isotherm, and the COP diverges.

The sensitivity of COP to the temperature difference is the key design parameter of every refrigeration and heating system. A domestic refrigerator maintaining the interior at minus 18 degrees Celsius with the condenser at 35 degrees Celsius operates with a 53 K difference. If the condenser temperature rises to 45 degrees Celsius (hot day), the difference increases to 63 K and the Carnot COP drops from 4.8 to 4.0, a 17 % decrease that translates directly into higher electricity consumption.

For heat pumps, the COP has a direct economic implication: a [[COP_bc]] of 4 means that for each kWh of electricity consumed, 4 kWh of thermal energy are delivered to the heated space. If electricity costs four times more than natural gas per kWh, the heat pump equals the cost of a gas boiler. With [[COP_bc]] greater than 4, the heat pump is more economical, which occurs when the difference [[T_H]] minus [[T_C]] is small (temperate climates).

## Order of magnitude

For a typical domestic refrigerator with [[T_C]] of 255 K and [[T_H]] of 308 K, the Carnot refrigeration COP is 4.8 and the real COP is 2 to 3. For a geothermal heat pump with [[T_C]] of 283 K and [[T_H]] of 318 K, the Carnot heat pump COP is 9.1 and the real COP is 3.5 to 5. For air conditioning systems with [[T_C]] of 297 K and [[T_H]] of 313 K, the Carnot refrigeration COP is 18.6 and the real COP is 3 to 5.

## Personalized resolution method

To solve a COP problem the following steps are recommended. First, identify whether the system operates as a refrigerator or heat pump, according to which is the useful effect. Second, identify the reservoir temperatures in kelvin. Third, calculate the Carnot COP corresponding to the operating mode. Fourth, if [[W]] or [[Q_C]] or [[Q_H]] is known, apply the COP definition to obtain the unknown quantities. Fifth, verify coherence using the energy balance and the relationship [[COP_bc]] equals [[COP_ref]] plus one. Sixth, verify that the calculated COP does not exceed the Carnot COP.

## Special cases and extended example

Special case one: if [[T_C]] tends to [[T_H]], both Carnot COPs tend to infinity because the denominator difference tends to zero. Transferring heat between reservoirs at nearly equal temperatures requires negligible work. Special case two: if [[T_C]] tends to zero, the Carnot refrigeration COP tends to zero. Extracting heat from absolute zero would require infinite work, consistent with the third law. Special case three: the Carnot heat pump COP is never less than one because at least the consumed work is always delivered as heat.

Extended example: a refrigerator operates between [[T_C]] of 260 K and [[T_H]] of 310 K. The Carnot refrigeration COP is 260 divided by the difference 310 minus 260, that is, 260 divided by 50, giving 5.2. If the real COP is 50 % of the Carnot value, the real COP is 2.6. If the refrigerator consumes 200 [[W]] of electrical power, the refrigeration capacity is 2.6 times 200, that is, 520 watts of heat extracted from the interior. The heat rejected to the environment is 520 plus 200, that is, 720 watts.

## Real student questions

Question one: why can COP be greater than one if thermal efficiency cannot? Because they measure different things. Thermal efficiency measures heat converted to work (limited by the second law to less than one). COP measures heat transferred per unit of work. Transferring heat does not violate any law when work is consumed.

Question two: is a heat pump more efficient than a boiler? In terms of primary energy, yes, as long as the COP is sufficiently high. With a [[COP_bc]] of 4, each kWh of electricity delivers 4 kWh of thermal energy, while a gas boiler delivers at most 0.95 kWh of thermal energy per kWh of gas.

Question three: why do refrigerators consume more electricity in summer? Because the outdoor temperature [[T_H]] rises while [[T_C]] remains constant, increasing the temperature difference and reducing the COP, which requires more [[W]] to extract the same amount of [[Q_C]].

## Cross-cutting connections and study paths

The COP connects backward to the Carnot efficiency of heat engines (as a conceptual inverse) and to the second law of thermodynamics that establishes the limit. It connects forward to the design of vapor-compression refrigeration systems and to exergy analysis of thermal systems. Laterally, the relationship [[COP_bc]] equal to [[COP_ref]] plus one is analogous to energy conservation applied to the definition of efficiency.

## Final synthesis

The coefficient of performance quantifies the efficiency of refrigerators and heat pumps as heat transferred per unit of work. The Carnot COP establishes the maximum limit, depending exclusively on the absolute temperatures of the reservoirs. The fundamental relationship [[COP_bc]] equals [[COP_ref]] plus one connects both operating modes. The dependence of COP on the temperature difference explains why HVAC systems are more efficient in temperate climates and why cryogenics is energetically expensive.
