# Exam-type example


## Problem statement

A home has the following appliances connected simultaneously on the same 16 A circuit: an electric oven of 2200 W, a microwave of 1200 W, and a coffee maker of 800 W. The grid voltage is 230 V. Calculate:

(a) The total power consumed by the three appliances.

(b) The total current flowing through the circuit and indicate whether it exceeds the 16 A protection capacity.

(c) The equivalent resistance of the set of appliances connected in parallel.

(d) If an additional 1000 W toaster is added, what would be the new total current? What consequences would this situation have?

## Data

- Electric oven: [[potencia_electrica]]_oven = 2200 W
- Microwave: [[potencia_electrica]]_micro = 1200 W
- Coffee maker: [[potencia_electrica]]_coffee = 800 W
- Additional toaster (part d): [[potencia_electrica]]_toast = 1000 W
- Grid voltage: [[tension_electrica]] = 230 V
- Circuit protection: [[intensidad_de_corriente]]_max = 16 A
- Configuration: Parallel connection at same voltage

## System definition

The system consists of three purely resistive loads connected in parallel to an alternating voltage source of 230 V (nominal European domestic voltage). Each appliance is modeled as an equivalent resistance consuming active power according to its nominal specification.

The parallel connection implies that all appliances share the same potential difference [[tension_electrica]] = 230 V, while the total current [[intensidad_de_corriente]]_total is the algebraic sum of individual currents consumed by each load.

The circuit is protected by a 16 A circuit breaker, which acts as a thermal and short-circuit safety limit.

## Physical model

The model is based on fundamental relationships of electrical circuits in steady-state conditions:

{{f:potencia_base}}

This equation relates electrical power, voltage, and instantaneous current. For purely resistive loads, it can also be expressed as a function of resistance:

{{f:potencia_resistiva}}

For parallel connection of resistances, the equivalent resistance is the inverse of the sum of inverses of each individual resistance.

Where [[resistencia_electrica]]_eq is the equivalent resistance of the set, and [[resistencia_electrica]]₁, [[resistencia_electrica]]₂, [[resistencia_electrica]]₃ are the individual resistances of each appliance.

## Model justification

The purely resistive load model is valid for heating appliances such as ovens, toasters, coffee makers, and the microwave resistance (magnetron). These devices operate through direct conversion of electrical energy into heat via the Joule effect, with practically unity power factor (cos φ ≈ 1).

**Physical causality**: Power dissipated in a resistance depends quadratically on applied voltage. Since grid voltage remains constant (regulated by the distributor), each appliance consumes the specified nominal power independently of other connected devices. The only limitation is the conductor capacity and circuit protection.

**Domain of validity**: The model is valid when:
- Grid voltage remains at 230 V ± 10% (207-253 V per EN 50160)
- Appliances operate in steady-state (not during startup)
- Wiring resistance is negligible compared to loads
- No significant harmonics alter apparent power

The model ceases to be valid if voltage drop in wiring is significant (> 5%), which would occur if total current greatly exceeded conductor capacity, or during motor startup transients where currents can be 3-7 times higher than nominal.

## Symbolic solution

**(a) Total power**

For parallel loads, total consumed power is the algebraic sum of individual powers:

[[potencia_electrica]]_total = [[potencia_electrica]]_oven + [[potencia_electrica]]_micro + [[potencia_electrica]]_coffee

**(b) Total current**

Applying the power equation [[potencia_electrica]] = [[tension_electrica]]·[[intensidad_de_corriente]], we solve for current:

[[intensidad_de_corriente]]_total = [[potencia_electrica]]_total / [[tension_electrica]]

**(c) Equivalent resistance**

First we calculate individual resistances of each appliance using [[resistencia_electrica]] = [[tension_electrica]]² / [[potencia_electrica]]:

- [[resistencia_electrica]]_oven = [[tension_electrica]]² / [[potencia_electrica]]_oven
- [[resistencia_electrica]]_micro = [[tension_electrica]]² / [[potencia_electrica]]_micro
- [[resistencia_electrica]]_coffee = [[tension_electrica]]² / [[potencia_electrica]]_coffee

Then we apply the parallel resistance formula to obtain [[resistencia_electrica]]_eq.

**(d) With additional toaster**

The new total power includes the toaster:

[[potencia_electrica]]_new = [[potencia_electrica]]_total + [[potencia_electrica]]_toast

The new current is calculated by dividing [[potencia_electrica]]_new by [[tension_electrica]].

**(e) Energy consumed over 2 hours of normal use**

Accumulated energy [[energia_consumida]] over a time [[t_h]] is obtained with:

{{f:energia}}

## Numerical substitution

**(a) Total power calculation**

Adding each power: oven 2200 W plus microwave 1200 W plus coffee maker 800 W.

[[potencia_electrica]]_total ≈ 4200 W (4.2 kW)

**(b) Total current calculation**

Dividing [[potencia_electrica]]_total by [[tension_electrica]]: 4200 W divided by 230 V gives approximately 18.26 A.

[[intensidad_de_corriente]]_total ≈ 18.3 A

**Limit evaluation**: The calculated current of 18.3 A exceeds the 16 A circuit protection. This condition is unsafe.

**(c) Individual and equivalent resistance calculation**

{{f:potencia_resistiva}}

For the oven: squaring 230 V and dividing by 2200 W gives approximately 24.0 Ω. Therefore [[resistencia_electrica]]_oven ≈ 24.0 Ω.

For the microwave: squaring 230 V and dividing by 1200 W gives approximately 44.1 Ω. Therefore [[resistencia_electrica]]_micro ≈ 44.1 Ω.

For the coffee maker: squaring 230 V and dividing by 800 W gives approximately 66.1 Ω. Therefore [[resistencia_electrica]]_coffee ≈ 66.1 Ω.

Applying the parallel formula (inverse of the sum of inverses):

[[resistencia_electrica]]_eq ≈ 12.6 Ω

Verification: dividing [[tension_electrica]] (230 V) by [[intensidad_de_corriente]]_total (18.26 A) also gives approximately 12.6 Ω.

**(e) Energy consumed over 2 [[t_h]] with three appliances running**

First converting total power to [[potencia_en_kilovatios]] = 4.2 kW, we multiply by [[t_h]] (2 h):

[[energia_consumida]] ≈ 8.4 kWh (approximately €1.26 at average tariff of €0.15/kWh).

**(d) Scenario with additional toaster**

New total power:

Adding the toaster: 4200 W plus 1000 W.

[[potencia_electrica]]_new ≈ 5200 W (5.2 kW)

New total current:

Dividing new total power by [[tension_electrica]]: 5200 W divided by 230 V.

[[intensidad_de_corriente]]_new ≈ 22.6 A

## Dimensional validation

For the power equation ([[potencia_electrica]] equal to [[tension_electrica]] times [[intensidad_de_corriente]]):

- Power units: `[M L² T⁻³]` (watts)
- Voltage units: `[M L² T⁻³ I⁻¹]` (volts)
- Current units: `[I]` (amperes)
- Verification: `[M L² T⁻³ I⁻¹]` · `[I]` = `[M L² T⁻³]` ✓

For the resistance equation ([[resistencia_electrica]] equal to [[tension_electrica]] squared divided by [[potencia_electrica]]):

- Resistance units: `[M L² T⁻³ I⁻²]` (ohms)
- Voltage squared units: `[M² L⁴ T⁻⁶ I⁻²]`
- Power units: `[M L² T⁻³]`
- Verification: `[M² L⁴ T⁻⁶ I⁻²]` / `[M L² T⁻³]` = `[M L² T⁻³ I⁻²]` ✓

For equivalent resistance in parallel:

- Conductance units (1/[[resistencia_electrica]]): `[M⁻¹ L⁻² T³ I²]` (siemens)
- Sum of conductances: `[M⁻¹ L⁻² T³ I²]` + `[M⁻¹ L⁻² T³ I²]` = `[M⁻¹ L⁻² T³ I²]` ✓
- Inverse of total conductance: `[M L² T⁻³ I⁻²]` = resistance units ✓

## Physical interpretation

The analysis reveals an immediate electrical risk situation. With the three appliances operating simultaneously, the demanded current (18.3 A) exceeds by 14% the nominal protection capacity (16 A). Physically, this means the circuit breaker should trip to protect the wiring, interrupting the electrical supply.

If the protection failed or were improperly oversized, the circuit wiring (typically 1.5 mm² or 2.5 mm² cross-section) would carry current above its continuous thermal capacity. According to the Joule effect, power dissipated as heat in the cable is proportional to the square of [[intensidad_de_corriente]] times the cable resistance. A 14% increase in current produces a 30% increase in generated heat, accelerating thermal insulation degradation and increasing fire risk.

The calculated equivalent resistance (12.6 Ω) is lower than any individual resistance, which is characteristic of parallel connections. This low equivalent resistance value is precisely what enables the high total current: the grid "sees" a load almost like a short circuit compared to individual values.

Part (d) demonstrates the rapid escalation of risk when adding loads. The additional toaster raises current to 22.6 A, 41% above the protection limit. This condition is critical and requires immediate intervention: load redistribution between circuits, installation of a dedicated higher-capacity circuit for the kitchen, or active simultaneity management (not operating all appliances at the same time).

If wiring resistance were significant (for example, 0.5 Ω in an old installation), voltage drop in cables would be the product of [[intensidad_de_corriente]] (18.3 A) and that resistance (0.5 Ω), approximately 9.2 V. Appliances would receive only 220.8 V instead of 230 V, reducing their effective power and prolonging operating times, which would partially compensate but not eliminate the thermal risk of the wiring.

---

# Real-world example


## Context

María lives in an old apartment in central Madrid with electrical installation over 40 years old. Her electrical panel has 16 A protections per circuit, and the wiring is 1.5 mm² cross-section (nominal capacity ~16 A). María has noticed that lately the kitchen circuit breaker trips frequently, especially in the morning when preparing breakfast.

Her kitchen has connected: a coffee maker (800 W), a toaster (1000 W), a water kettle (2200 W), and the refrigerator (150 W). María usually turns on the coffee maker, toaster, and water kettle simultaneously in the morning for quick breakfast preparation. The refrigerator remains connected permanently.

María needs to understand why the protection trips and what solutions she has available without requiring complete installation renovation.

## Physical estimation

To diagnose María's problem, we apply the fundamental power and current relationships from this leaf. In addition to current, we calculate the energy [[energia_consumida]] consumed during breakfast (approximately 15 minutes, or 0.25 [[t_h]]) to quantify the economic impact.

First, we calculate the total simultaneous power when María operates her breakfast appliances plus the base refrigerator:

Adding: coffee maker 800 W, toaster 1000 W, kettle 2200 W and refrigerator 150 W.

[[potencia_electrica]]_total ≈ 4150 W (4.15 kW)

Applying the power equation to obtain current:

{{f:potencia_base}}

Dividing total power by domestic voltage of 230 V:

Dividing [[potencia_electrica]]_total by [[tension_electrica]]: 4150 W divided by 230 V.

[[intensidad_de_corriente]]_total ≈ 18.0 A

This current exceeds the 16 A protection by 12.5%, which explains the frequent circuit breaker trips. The protection is working correctly by detecting an overload.

The [[energia_consumida]] consumed during that 0.25 [[t_h]] breakfast is calculated with the energy formula:

{{f:energia}}

[[potencia_en_kilovatios]] × [[t_h]] = 4.15 kW × 0.25 h ≈ 1.04 kWh (approximately €0.16 at average tariff).

Let us analyze load management alternatives:

**Scenario 1**: If María uses only coffee maker + toaster + refrigerator (without kettle):

Coffee maker 800 W plus toaster 1000 W plus refrigerator 150 W: total 1950 W, divided by 230 V.

Current [[intensidad_de_corriente]] ≈ 8.5 A (within safe margin < 16 A)

**Scenario 2**: If María uses only kettle + coffee maker + refrigerator (without toaster):

Kettle 2200 W plus coffee maker 800 W plus refrigerator 150 W: total 3150 W, divided by 230 V.

Current [[intensidad_de_corriente]] ≈ 13.7 A (within acceptable margin, though high)

**Scenario 3**: If María staggers usage (kettle first, then coffee maker when kettle turns off):

Maximum instantaneous power: only the kettle active (2200 W) plus refrigerator (150 W).

Maximum current [[intensidad_de_corriente]] ≈ 10.2 A (comfortable and safe margin)

## Interpretation

María's problem is a classic case of evolving consumption habits without corresponding electrical infrastructure updates. When the home was wired 40 years ago, it was unlikely that a domestic kitchen would have so many high-power appliances available simultaneously. The culture of "express breakfast" with multiple appliances operating at the same time is a recent phenomenon.

Physically, the circuit breaker trips are necessary protection, not a nuisance. Without them, the 1.5 mm² wiring (designed for ~16 A maximum) would carry 18 A continuously, generating heat by Joule effect that would progressively degrade the cable's PVC insulation. Over time, this degradation could lead to short circuits or fires.

The solutions available to María, ordered by increasing complexity:

1. **Time management (no cost)**: Stagger appliance usage. Use the kettle first (2 minutes), then the coffee maker (3 minutes), finally the toaster (2 minutes). This sequence keeps maximum current around 10 A, well within the circuit capacity.

2. **Load redistribution (low cost)**: If another circuit is available (living room, bedroom), connect the kettle to that circuit via temporary extension during breakfast. The refrigerator should remain on the kitchen circuit for proximity.

3. **Appliance replacement (medium cost)**: Replace the 2200 W kettle with a lower power model (1000-1500 W) or switch to a more efficient induction kettle. Alternatively, use a thermomix or other multifunction appliance combining tasks.

4. **Circuit upgrade (high cost)**: Hire an electrician to install a dedicated kitchen circuit with 2.5 mm² cable and 20-25 A protection. This is the definitive solution but requires significant investment.

The most appropriate solution for María, considering she rents and cannot perform major works, is time management. By simply changing her breakfast preparation habits (staggering instead of simultaneous), she solves the problem at no cost.

The underlying physical lesson is that demanded electrical power results from human usage decisions, not just the presence of appliances. Simultaneity is a manageable variable that directly impacts electrical safety and usage comfort.
