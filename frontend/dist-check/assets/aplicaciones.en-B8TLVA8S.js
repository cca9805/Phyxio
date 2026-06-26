const e=`# Applications

## 1. Time-of-use load scheduling

**Real physical context:**

Residential electricity tariff structures in liberalized markets penalize high simultaneous power demands through contracted power terms and time-of-use discrimination. A typical European household with contracted power of 5.75 kW (25 A at 230 V) faces penalties if exceeding this threshold, while tariffs like PVPC in Spain may vary electricity price per kWh by factor 3× between off-peak and peak hours.

**Dominant hypothesis or simplification:**

It is assumed that appliances have constant power during their operating cycle and that real simultaneity is avoidable through conscious scheduling. Motor startup power (3-7× nominal) is ignored, assuming type C circuit breakers tolerate these transient peaks. Grid voltage is considered stable at 230 V without significant drops under load.

The analysis is based on the fundamental relationship between [[P]], [[V]] and [[I]], where total simultaneous power determines whether the contracted limit is exceeded. For a home with multiple high-power appliances (oven 2000 W, washing machine 1500 W, water heater 1200 W), the arithmetic sum 4700 W would typically exceed contracted power of 3450 W (15 A).

**Dominant variable:** Total simultaneous power calculated as sum of individual appliance powers operating concurrently.

**Physical interpretation:**

Time scheduling exploits the fact that domestic power required at each instant results from temporal superposition of individual cycles. Shifting non-urgent appliances (dishwasher, washing machine) to low-demand periods reduces the maximum of function P(t) without reducing total consumed energy E = ∫P(t)dt.

Benefits include: (a) avoiding penalties for exceeding contracted power, (b) reducing peak demand charges on time-of-use tariffs, (c) preventing nuisance tripping of circuit breakers, and (d) extending appliance lifespan by reducing thermal stress from temperature cycles.

**Concrete practical implementation:**

- Run washing machine at night (22h-06h) when oven and microwave are off, taking advantage of off-peak tariffs.
- Program dishwasher to start after water heater cycle completes, avoiding the simultaneous overlap of the dishwasher's 1200 W and washing machine's 1500 W (2700 W combined).
- Use timers on high-power appliances to stagger startup with differences > 30 minutes.
- Monitor home power meter to identify peak usage periods and adjust habits.

**Validity limit:** Valid when usage timing is flexible (does not apply to immediate needs like cooking). Requires appliances with time programming or smart plugs. Does not consider reactive power of motors or power factor. Economic savings depends on specific tariff; in flat-rate tariffs without power terms, benefit is limited to preventing trips.

**Expected results:** Typical households can reduce peak demand by 20-30% through intelligent scheduling without any equipment changes, translating into annual savings of €100-300 depending on tariff and region.

---

## 2. Economic appliance comparison by TCO

**Real physical context:**

Appliance selection at retail points traditionally focuses on purchase price, nominal capacities, and functional features. However, the physics of energy consumption determines that total cost of ownership (TCO) includes an operational component that can widely exceed the initial investment during the appliance's service life (typically 10-15 years).

**Dominant hypothesis or simplification:**

Operation at constant nominal power is assumed without considering real duty cycles or aging degradation. Average electricity price is used without inflation or future tariff variation. Appliance energy efficiency is considered invariant over time (insulation degradation and seal wear are not modeled).

The calculation is based on the relationship between [[E_kWh]], [[P_kW]] and [[t_h]], where annual energy depends linearly on nominal power for determined usage. A common error is comparing powers without considering usage time: a 2000 W oven used 30 minutes daily consumes 365 kWh/year, while a 150 W refrigerator running continuously consumes 1314 kWh/year.

**Dominant variable:** Total cost of ownership calculated by adding purchase price to the product of nominal power, annual hours of use, service years, and tariff per kWh.

**Physical interpretation:**

The energy efficiency of an appliance is quantified by the ratio between useful service delivered and electrical energy consumed. An efficient refrigerator (A+++) extracts the same amount of heat from the interior using 700 kWh/year versus 2190 kWh/year of an old inefficient model, maintaining target temperature with lower I²R dissipation in the compressor and coils.

Economic comparison requires: (a) estimate annual operating hours, (b) convert power to energy using E(kWh) = P(kW) × t(h), (c) calculate annual cost by multiplying by tariff, and (d) sum over service life. The efficient model with higher purchase price can recover the difference through operational savings.

**Detailed comparison example:**

| Appliance | Power | Annual use | Energy/year | Cost/year @ €0.15/kWh | 10-year TCO |
|-----------|-------|------------|-------------|----------------------|-------------|
| A+++ efficient fridge | 80 W | 8760 h | 700 kWh | €105 | €1050 + price |
| Standard fridge | 150 W | 8760 h | 1314 kWh | €197 | €1970 + price |
| Old inefficient fridge | 250 W | 8760 h | 2190 kWh | €328 | €3280 + price |

**Validity limit:** Applicable for appliances with predictable and continuous usage (refrigerators, freezers). Does not apply to intermittent uses where user behavior dominates over appliance efficiency (ovens, vacuum cleaners). Assumes constant tariff; in reality, time-of-use tariffs may alter the calculation. Requires verification of actual versus nominal energy label, with cases of deviation due to real usage different from laboratory standard.

**Savings potential:** The efficient appliance saves €223/year compared to the old model, typically recovering a price premium of €300-500 within 2-3 years and generating net savings of €1500-2000 during service life.

---

## 3. Residential photovoltaic self-consumption optimization

**Real physical context:**

Residential photovoltaic systems generate variable power according to solar irradiance, with peaks at solar midday (typically 10h-14h in summer, 11h-13h in winter) and zero at dawn/dusk/night. The physical challenge lies in the fact that solar generation profile P_solar(t) rarely coincides with domestic demand profile P_demand(t), which typically shows morning peaks (breakfast, shower) and evening peaks (dinner, lighting).

**Dominant hypothesis or simplification:**

Ideal solar generation is assumed without shading or dust/temperature degradation. Appliance power is considered adjustable in time (deferrable load) but not divisible (cannot wash half a load). Inverter efficiency is ignored (assumed 100%) and battery self-discharge losses are neglected. Grid voltage is maintained stable allowing injection without technical limitations.

The analysis focuses on maximizing temporal coincidence between generation and consumption, minimizing energy surplus exported to grid (typically with economic compensation lower than consumed kWh value) and energy imported from grid during deficits.

**Dominant variable:** Self-consumption rate calculated as energy_consumed_locally / energy_generated_total, target > 70% for optimal profitability.

**Physical interpretation:**

Optimization requires temporally shifting flexible electrical loads towards solar peak periods. Instantaneous available power from the photovoltaic system follows an approximately Gaussian curve centered at solar midday. Superimposing high-power appliance consumption (washing machines 1500 W, dishwashers 1200 W) on this peak maximizes direct use of local generation.

Strategies include: (a) schedule washing machine/dishwasher during solar window 10h-14h, (b) pre-heat water heater using daytime surplus for nighttime use, (c) charge electric vehicles preferably during solar hours. When temporal mismatch is not eliminable by load shifting, battery storage allows temporal transfer of surplus energy.

**Detailed analysis process:**

1. Measure or estimate hourly consumption profile P_demand(t) in kWh per hour throughout the typical day.
2. Model solar generation profile P_solar(t) according to latitude, panel tilt, and season.
3. Identify mismatch periods (high consumption when P_solar ≈ 0, or P_solar > P_demand without usable load).
4. Size batteries to accumulate surplus P_solar - P_demand and discharge during deficits.
5. Adjust deferrable consumption timing to maximize overlap P_solar(t) × P_demand(t).

**Validity limit:** Applicable only to grid-connected photovoltaic systems (on-grid) with bidirectional metering. Does not consider isolated systems (off-grid) where energy balance must be strict. Requires programmable appliances or household presence during solar hours for manual load shifting. Profitability depends on surplus compensation tariff (typically 50-70% of purchase price). In regions with low irradiance or severe shading, maximum theoretical self-consumption may be unattainable.

**Economic impact:** Optimized self-consumption can increase solar investment value by 30-50% compared to unoptimized systems, reducing payback period from 10-12 years to 6-8 years under favorable conditions.

---

## 4. Domestic energy education programs

**Real physical context:**

Energy literacy in the general population is low, with systematic confusion between concepts of power (kW), energy (kWh), and economic cost. When household members understand the physical relationship between power, usage time, and derived cost, behavioral changes emerge that reduce consumption without service degradation.

**Dominant hypothesis or simplification:**

It is assumed that immediate feedback of energy information modifies behavior of economically rational users. Appliance power is considered known (label reading) and stable. Interpersonal variability in response to economic versus environmental incentives is ignored. Tariff is assumed constant to simplify mental calculations.

The educational framework is based on making the invisible visible: electricity flows without direct sensory indicators of magnitude or cost. Transforming physical abstraction into immediate numerical feedback (quantifying each act in kWh and euros) creates previously absent cause-effect association.

**Dominant variable:** Household energy intensity measured in kWh/m²/year or kWh/person/year, target reduction 10-15% through behavioral changes.

**Physical interpretation:**

Energy education exploits human optimization capacity when complete information is provided. Instantaneous power [[P]] is the temporal derivative of energy; integrated over usage time [[t_h]] it produces the consumed energy [[E_kWh]]. Multiplying by unit tariff yields the direct monetary cost of the consumption act.

When users internalize that a 10-minute shower with 4000 W electric heater consumes 0.67 kWh (4000 W × 10/60 h), equivalent to €0.10 at €0.15/kWh tariff, the choice to reduce to 5 minutes becomes a rational economic decision. Similarly, understanding that each kWh saved avoids approximately 0.5 kg CO₂ (typical European emission factor) enables decisions aligned with environmental values.

**Effective educational tools:**

- Real-time energy monitors showing instantaneous [[P]] and accumulated daily [[E_kWh]].
- Translation of acts to immediate cost: "this shower cost €0.35" versus "the 1-hour oven cost €0.80".
- Gamification with weekly family challenges for kWh reduction.
- Carbon footprint visualization: "this month we avoided 150 kg CO₂".

**Observed behavioral changes:**

- Standby power reduction by physically unplugging unused devices (each standby transformer consumes 2-5 W, totaling 50-100 W per household).
- Shorter showers when cost is transparent and comparable to alternatives (coffee, snack).
- Preference for efficient cooking methods: microwave (1000 W for 5 min consumes only 0.08 kWh) versus oven (2000 W for 30 min consumes 1 kWh) for small tasks.
- Acceptance of ±1°C thermostat adjustments with quantified impact (heating/cooling represents 40-60% of domestic consumption).

**Validity limit:** Effective in households with sufficient economic availability for savings to be relevant but not critical. Less effective in energy poverty contexts where basic needs satisfaction dominates over optimization. Requires certain level of basic numerical literacy to interpret kWh and costs. Does not substitute structural measures (thermal insulation, equipment efficiency). Effect may decay over time through habituation (requires periodic reminders).

**Measured results:** Households with well-designed energy education programs typically achieve 10-15% consumption reduction through behavioral changes alone, without equipment investment, translating into annual savings of €150-300 for average households.

---

## 5. Preventive electrical safety audit

**Real physical context:**

Domestic electrical installations, particularly in older homes (> 30 years) or with non-professional modifications, frequently operate near or above their original design limits. Temporal superposition of modern high-power appliances on circuits sized for historically lower loads creates risks of overheating, insulation failures, and fires.

**Dominant hypothesis or simplification:**

Appliance nameplate nominal power is assumed representative of real consumption. Realistic simultaneity is considered based on usage habits (not all loads operate simultaneously at 100%). Motor startup power is ignored assuming transients are brief compared to cable thermal constants. Wiring resistance is assumed within specifications without significant aging deterioration.

The analysis is based on Ohm's law —dividing [[P]] by [[V]] to obtain [[I]]— and on the sum of individual currents to obtain the total current for parallel loads. The capacity of a circuit with 16 A protection is exhausted when total demanded current exceeds 16 A, equivalent to 3680 W at 230 V. Wiring must support this current continuously without exceeding 60-70°C (typical PVC insulation limit).

**Dominant variable:** Safety margin calculated as (I_max_protection - I_calculated_simultaneous) / I_max_protection, target > 20% (I_operation < 80% I_nominal).

**Physical interpretation:**

The audit systematizes wiring thermal risk evaluation. Power dissipated in a conductor by Joule effect is proportional to the square of the current times the cable resistance, quadratic with [[I]]. A 20% increase in current (from 13 A to 16 A) produces a 44% increase in heat generated in the same cable. Progressive heating degrades insulation, reducing its dielectric resistance until eventual short-circuit or arc fault.

The audit procedure identifies: (a) circuits where I_calculated > I_protection (immediate risk), (b) circuits where I_calculated > 0.8·I_protection (accelerated degradation risk), (c) circuits with comfortable margins for future expansions.

**Detailed audit procedure:**

1. Inventory all appliances by circuit with their nameplate nominal powers.
2. Calculate individual current for each appliance by dividing its [[P]] by 230 V. Result in amperes.
3. Estimate realistic simultaneity (e.g., kitchen: oven + ceramic hob + microwave never 100% simultaneous).
4. Calculate maximum simultaneous [[I]] per circuit.
5. Compare against [[I]] nominal of circuit breaker and cable cross-section (1.5 mm² → ~16 A, 2.5 mm² → ~25 A).
6. Classify risks according to safety margin.

**Risk prioritization:**

- **Critical:** Circuits where I_calculated > I_protection (operation above 100%). Immediate risk of continuous tripping, accelerated thermal degradation, potential fire. Requires urgent intervention: load redistribution or circuit upgrade.

- **High:** Circuits with 0.8·I_protection < I_calculated < I_protection. Risk of progressive insulation degradation from sustained operation near thermal limit. Recommended redistribution or capacity expansion.

- **Medium:** Circuits operating within standard but with marginal capacity for planned new loads. Requires caution when adding appliances.

- **Low:** Circuits with I_calculated < 0.6·I_protection, comfortable safety margins for future expansion.

**Validity limit:** Theoretical audit complements but does not substitute physical inspection by qualified electrician. Does not detect installation defects (loose connections, deteriorated wiring, counterfeit protections). Requires appliance nameplate values to be legible and representative. Estimated simultaneity may vary with habit changes. Does not consider reactive power or power factor, slightly underestimating real current in inductive loads.

**Illustrative practical example:**

A kitchen circuit with 16 A protection has theoretical capacity of 3680 W at 230 V. Audit reveals: oven 2000 W, ceramic hob 1500 W, microwave 800 W, refrigerator 150 W. With realistic simultaneity (oven + ceramic at 80% never simultaneous, microwave occasional use), estimated maximum load is 2000 + 150 + 800 = 2950 W → 12.8 A, within safe margin (< 12.8 A). However, if the household adds a 1500 W air fryer using the same circuit, new maximum load 4450 W → 19.3 A exceeds 16 A protection, requiring redistribution or dedicated circuit before installation.
`;export{e as default};
