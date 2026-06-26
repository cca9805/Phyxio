## Conceptual context

This leaf translates abstract electrical magnitudes —voltage [[tension_electrica]], current [[intensidad_de_corriente]], resistance [[resistencia_electrica]], power [[potencia_electrica]]— into concrete technical decisions for domestic use. In the domestic grid, voltage is fixed at 230 V, but each connected appliance "decides" how much current it demands based on its internal resistance. This interaction determines the actual electrical flow and, with it, cable heating, energy consumption, and potential risks.

The objective of this leaf is operational: learning to calculate the current an appliance will demand, distinguishing when that current is low, medium, or high for a typical domestic installation, and interpreting what a very high or very low resistance implies in terms of real risk.

## 🟢 Essential level

In domestic electricity, four magnitudes govern practical decisions. **Voltage** [[tension_electrica]] is the electrical "push" provided by the grid —at home it is always 230 V— and constitutes the available potential to make appliances work. **Current** [[intensidad_de_corriente]], also called intensity, represents the electrical flow through cables; it is measured in amperes and is the magnitude that cables must transport without excessive heating.

**Resistance** [[resistencia_electrica]] is the opposition to current flow presented by each appliance. Here lies a critical safety point: if resistance is very low, current can grow enormously and exceed cable capacity. Finally, **power** [[potencia_electrica]] indicates the rate at which an appliance consumes energy; it is the magnitude on appliance labels that determines both the bill cost and current flow.

The practical rule is crucial: when two appliances operate at the same voltage, the one demanding more current —because it has lower internal resistance— heats conductors more and requires more robust cables and protections.

## 🔵 Formal level

The mathematical relationships governing domestic electrical behavior start from the fundamental power equation. The instantaneous electrical power consumed by an appliance is calculated as the product of applied voltage by flowing current:

{{f:potencia_base}}

This relationship allows calculating any of the three magnitudes knowing the other two: [[tension_electrica]], [[intensidad_de_corriente]] and [[potencia_electrica]]. When we know the nominal power of an appliance —the watts on its label— we can determine [[intensidad_de_corriente]] it will demand from the grid by dividing [[potencia_electrica]] by domestic [[tension_electrica]]:

{{f:corriente_por_resistencia}}

The resistive model offers an alternative perspective. The same [[potencia_electrica]] can be expressed as a function of [[resistencia_electrica]], which is especially useful when we don't directly know [[intensidad_de_corriente]] but know the appliance's construction characteristics:

{{f:potencia_resistiva}}

The electrical energy accumulated [[energia_consumida]] during a period of time [[t_h]] is obtained by multiplying power by operating time. To use kWh consistently, power must be expressed as [[potencia_en_kilovatios]] and time in hours. This magnitude —typically measured in kilowatt-hours (kWh)— is what really counts for the electricity bill:

{{f:energia}}

The [[energia_consumida]] accumulated over a period [[t_h]] connects directly to the electricity bill and is essential for comparing the economic impact of appliances with different [[potencia_electrica]].

When multiple appliances operate simultaneously on the same circuit, their individual powers add up, creating an aggregate demand that must respect cable and protection limits. The resulting total current determines whether the configuration is safe or requires load redistribution.

These equations constitute the mathematical core for sizing any domestic installation, from the simple calculation of how many appliances can be connected to a power strip to planning independent circuits for the kitchen.

## 🔴 Structural level

The analysis of domestic circuits presents a physical architecture where magnitudes do not exist in isolation but as parts of an interconnected system. The notion of "high" or "low" current is relative: a 15 A current can be safe in a 20 A circuit with 2.5 mm² cable, but dangerous in a 10 A circuit with thinner cable.

The structure of domestic electrical risk is understood through the inverse relationship between resistance and current. At fixed voltage —230 V— any decrease in appliance resistance causes a proportional increase in demanded current. This explains why a very low resistance —like that of a short circuit— can trigger huge currents that exceed installation capacity.

Local thermal risk is interpreted through power dissipated in parasitic resistances —dirty contacts, loose connections— that via Joule's law can generate localized heating even when total circuit current appears within normal limits.

The validity domain of this model is explicit: single-phase analysis in standard domestic installations with nominal voltage of 230 V. The model ceases to be valid in three-phase industrial installations, high-voltage circuits, or when there are electronic components with nonlinear behavior.

**Applicability limits**: When calculated current exceeds 80% of the circuit's nominal capacity, the system enters a caution zone. When approaching or exceeding 100%, protections should act. Extremely high resistances generate insignificant currents that, paradoxically, can also be problematic in signal or control circuits.

## Deep physical interpretation

Saying that an appliance has "8000 ohms" or "0.8 ohms" is not neutral information; it is a predictor of electrical behavior. A resistance of 8000 Ω at 230 V demands barely 0.029 A and 6.6 W —an insignificant load. A resistance of 0.8 Ω at the same voltage attempts to extract 287.5 A and dissipate 66 kW —physically impossible in standard domestic installations, resulting in protection tripping or fire.

This asymmetry contradicts mechanical intuition. In electricity, resistance functions as a control valve: high values restrict flow and reduce risk; low values increase it.

The nominal power on a label —"2000 W"— doesn't tell the whole story. That number indicates consumption rate, but not accumulated energy. A 2000 W oven operating 10 minutes consumes less [[energia_consumida]] than a 150 W refrigerator operating 24 [[t_h]].

## Order of magnitude

Typical values provide useful references for detecting anomalous situations. Voltage [[tension_electrica]] is standardized at 230 V in Europe, with typical tolerances of ±10% that equipment must withstand without damage. Currents below 0.1 A are common in standby equipment or very light loads; between 0.5 A and 5 A we find most normal domestic appliances; between 5 A and 16 A are higher consumption equipment like ovens, washing machines, and electric water heaters; values above 16 A require special circuits and appropriate protections.

Resistance [[resistencia_electrica]] of operating equipment varies enormously: from thousands of ohms in LED lamps to fractions of an ohm in heating elements. A load resistance less than 10 Ω should already attract attention and require verification of resulting current. Typical domestic powers range from a few watts for small loads to 3-4 kW for the most demanding equipment. Simultaneous configurations adding more than 5 kW on a single circuit generally require review of cable capacity.

## Personalized resolution method

The domestic electrical analysis protocol follows a systematic sequence. First, identify which data we know from the appliance: usually the nominal power [[potencia_electrica]] on its label, or in some cases the internal resistance [[resistencia_electrica]]. Second, apply the corresponding equation to obtain current: if we know [[potencia_electrica]], use [[intensidad_de_corriente]] = [[potencia_electrica]]/[[tension_electrica]]; if we know [[resistencia_electrica]], use [[intensidad_de_corriente]] = [[tension_electrica]]/[[resistencia_electrica]].

Third, compare the calculated current with the circuit limit: a standard socket supports 10-16 A; a power strip should not exceed 10-13 A; a 16 A protection circuit should stay below 12-13 A sustained.

Fourth, if multiple loads operate simultaneously, sum their individual powers to obtain total simultaneous power, recalculate aggregate current, and verify it does not exceed the weakest element capacity.

Fifth, decide corrective action: distribute loads across different circuits; upgrade to a larger section circuit if demand is legitimate; or reduce usage simultaneity through time planning.

## Special cases and extended example

A didactic comparison illustrates the drastic difference that resistance introduces. Consider two loads at 230 V: one with high resistance of 8000 Ω, another with low resistance of 0.8 Ω.

For the first load, the current is minimal —about 0.029 A— and power barely 6.6 W. This light load, equivalent to a small lamp, any installation tolerates without effort.

For the second load, the current rises to 287.5 A —out-of-scale for any domestic installation— and theoretical power would be 66 kW. This would represent a short circuit that protections should detect immediately.

**Technical reading**: The 8000 Ω resistance behaves as a controlled and safe load. The 0.8 Ω resistance behaves as an active electrical fault. The numerical value only acquires meaning when translated into operational implications.

## Real student questions

**Are current and intensity different magnitudes?**

In domestic use they are synonyms: both represent magnitude [[intensidad_de_corriente]] in amperes. "Intensity" is more formal, "current" more colloquial, but both designate the same phenomenon: flow of electrical charge per unit time.

**What constitutes "much" current in a house?**

It depends on the specific circuit. In a lighting circuit at 10 A, a 9 A load is concerning. In a 25 A kitchen circuit, a 15 A load is normal. Rule: exceeding 80% of circuit capacity deserves attention; approaching 100% requires caution.

**Why can low resistance be dangerous?**

Because it offers little opposition to flow. At 230 V, low resistance allows high current via Ohm's law. This current heats cables proportionally to intensity squared —Joule's law— and can exceed insulation thermal capacity, causing fire.

**If no protection trips, does it mean everything is fine?**

Not necessarily. Protections act upon significant overcurrents, but may not detect light prolonged overloads. Localized heating at defective connections can be dangerous even when total current is within normal limits.

**Are high power and high energy the same thing?**

No. Power [[potencia_electrica]] is a rate —watts— indicating consumption speed. Energy [[energia_consumida]] is accumulation —watt-hours— depending on power multiplied by time [[t_h]]. A high-power oven operating briefly may consume less energy than a low-power refrigerator operating continuously.

## Cross-cutting connections and study paths

From this leaf, study continues towards practical applications. In **[Plugs and Sockets](leaf:fisica-clasica/electromagnetismo/electricidad-domestica/enchufes-y-tomas)** calculated currents connect with real limits of sockets and cables.

In **[RCD and Circuit Breakers](leaf:fisica-clasica/electromagnetismo/electricidad-domestica/diferencial-y-magnetotermico)** protections that monitor magnitudes and act when limits are exceeded are explored.

In **[Cost of Electricity](leaf:fisica-clasica/electromagnetismo/electricidad-domestica/coste-de-la-electricidad)** powers and energies transform into economic impact.

Finally, in **[Physical Model and Validity Domain](leaf:fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez)** the limits of the simplified model are explored, avoiding extrapolation outside applicability context.

## Final synthesis

In domestic electricity it is not enough to "see the watts" on an appliance label. Safe and efficient management requires translating those watts into calculated currents, comparing those currents with real limits of wiring and protections, and understanding how each appliance's internal resistance interacts with the grid's fixed voltage to determine resulting electrical flow. Only by integrating these four magnitudes into a coherent calculation framework can informed domestic decisions about electrical safety, energy efficiency, and operating cost be made.
