const e=`# Common Errors

## Conceptual errors

### Error 1: Confusing high resistance with danger

**Why it seems correct**

Mechanical intuition associates "resistance" with "friction" or "obstacle," suggesting that high values create problems. This incorrect analogy stems from everyday experience with mechanical friction, where greater resistance implies greater effort and wear. Additionally, in low-power electronics, high resistance may indicate component failure, reinforcing the "high = bad" association.

**Why it is incorrect**

In domestic electrical installations, the physical relationship is inverted: resistance limits current according to Ohm's law [[I]] = [[V]]/[[R]]. At a fixed voltage of 230 V, a resistance of 1000 Ω limits current to 0.23 A (safe and insignificant), while a resistance of 5 Ω allows 46 A (extremely dangerous for standard 16 A circuits). Dissipated power also follows [[P]] = [[V]]²/[[R]], being inversely proportional to resistance.

**Detection signal**

- Use of terms like "very high resistance" to describe a dangerous condition
- Calculations producing currents > 20 A labeled as "safe" because resistance is "high"
- Confusion between cable resistance (which should be low) and load resistance (which should be high for safety)

**Conceptual correction**

In domestic electricity, "low resistance" is the danger, not "high resistance." Always calculate [[I]] = 230/[[R]] immediately when evaluating a resistance. Interpret the result: I < 0.5 A is safe, I > 10 A requires verification, I > 20 A is dangerous for standard installations.

**Mini-example of contrast**

Incorrect: "This heater has only 5 Ω of resistance, it must consume very little." (Result: 46 A, extreme danger). Correct: "5 Ω at 230 V implies 46 A, equivalent to 10.5 kW. This requires a dedicated 50 A circuit, not a standard 16 A outlet."

### Error 2: Treating power as an independent quantity

**Why it seems correct**

Appliance labels display "2000 W" as isolated data, without context of current or resistance. Power is the electrical billing magnitude, making it the most familiar for users. Excessive generalization leads to assuming that knowing the power is sufficient to evaluate safety.

**Why it is incorrect**

Electrical safety depends on current [[I]], not directly on power [[P]]. A power of 2000 W at 230 V implies 8.7 A (safe for a 16 A circuit), but the same power at 12 V implies 167 A (dangerous even for thick cables). Additionally, instantaneous power ignores duty cycles: a refrigerator labeled "150 W" has a 300 W compressor operating at 50% duty cycle.

**Detection signal**

- "Safety" comparisons based solely on power values
- Omission of current calculation when evaluating circuit compatibility
- Confusion between instantaneous power and consumed energy

**Conceptual correction**

Power is a consequence, not a direct cause of safety. Always calculate [[I]] by dividing [[P]] by [[V]] and compare with the circuit limit (10 A, 16 A, etc.). For energy, obtain [[E_kWh]] by multiplying [[P_kW]] by [[t_h]].

**Mini-example of contrast**

Incorrect: "My hair dryer is 2000 W and the circuit supports 3500 W, there's plenty of capacity." (Ignores that dividing 3500 W by 230 V gives 15.2 A, close to the 16 A limit when the dryer adds 8.7 A to other loads). Correct: "2000 W implies 8.7 A. If the circuit has another 6 A of base load, total 14.7 A is within 80% of 16 A (12.8 A)? No, it exceeds the safe margin."

## Model errors

### Error 3: Ignoring duty cycles and simultaneity

**Why it seems correct**

The ideal model —power equal to voltage times current— assumes continuous, stable operation, mathematically simple and elegantly precise. Incorrect extrapolation assumes that real appliances operate as constant ideal resistances. Omitting secondary complexities seems reasonable for "approximate calculations."

**Why it is incorrect**

Real appliances systematically violate ideal model hypotheses:
- Electric motors consume 3-7× nominal current during 0.5-2 seconds of startup
- Refrigerators, water heaters, and air conditioners operate in ON/OFF cycles with 30-50% duty cycles
- Heating resistances vary ±15% with temperature
- Real simultaneous operation never reaches the arithmetic sum of individual powers

These deviations produce circuit breakers that trip "for no apparent reason," cables that progressively overheat, and energy costs underestimated by factor 2-3.

**Detection signal**

- Protections that consistently trip when turning on specific appliances
- Energy calculations that differ > 50% from actual bills
- Circuit designs that work "in theory" but fail in real use

**Conceptual correction**

Always distinguish between nominal power (nameplate), maximum power (startup), and average power (actual consumption). Apply simultaneity factors of 0.7-0.9 when summing loads. Size protections for startup current, not just nominal. Use duty cycles for energy estimation.

**Mini-example of contrast**

Incorrect: Sizing 16 A protection for a refrigerator labeled "150 W" (0.65 A), without considering that the 300 W compressor starts with 1500-2000 W (6.5-8.7 A) for 2 seconds, causing continuous trips. Correct: Select type C (peak-tolerant) protection of 16 A or 20 A, verifying that the cable supports 20 A continuous.

### Error 4: Assuming unity power factor for all loads

**Why it seems correct**

The simplification cos φ = 1 eliminates the reactive component from equations, making calculations more direct. Many domestic loads (incandescence, resistive heating) are effectively pure resistive. Excessive generalization extends this validity to motors and transformers.

**Why it is incorrect**

Electric motors, transformers, switched-mode power supplies, and fluorescent/LED luminaires present typical power factors of 0.6-0.9. The real current is 11-67% greater than calculated with cos φ = 1, since it must compensate for the reactive component. This produces systematic underestimation of real load, overheating of "correctly" sized cables, and unexpected protection trips.

**Detection signal**

- Measured current significantly greater (> 20%) than theoretically calculated
- Cables heating more than expected for their "calculated" load
- Designs that work in short tests but fail in prolonged operation

**Conceptual correction**

For inductive loads (motors > 100 W, transformers, industrial luminaires), size by apparent current: divide [[P]] by the power factor cos φ. Check the power factor on the equipment nameplate (typically 0.7-0.9 for domestic motors). Apply correction when reactive power is significant (> 20% of active).

**Mini-example of contrast**

Incorrect: Washing machine motor labeled "2000 W, 230 V" → dividing 2000 W by 230 V gives 8.7 A (10 A protection apparently sufficient). Reality with cos φ = 0.75: actual current is 2000 W divided by (230 V × 0.75), giving 11.6 A (exceeds 10 A protection, trips during wash cycle). Correct: size for 11.6 A, select 16 A protection with 2.5 mm² cable.

## Mathematical errors

### Error 5: Mixing units without systematic conversion

**Why it seems correct**

Units seem "obvious" in context: kW for power, V for voltage, h for time. The mixing error is cognitively invisible because each individual value is correct. The dimensional failure only manifests in the final absurd result.

**Why it is incorrect**

The relationship between [[P]], [[V]] and [[I]] requires [[P]] in W, [[V]] in V, [[I]] in A for consistency. Mixing kW with V produces kA (1000× error). Using W with h for energy produces Wh (correct) but expressing it as kWh requires division by 1000. Omitted conversions generate catastrophic magnitude errors.

Common errors:
- P (kW) / V (V) = I (kA) → 1000× error lower than real
- P (W) × t (h) = E (Wh) → report as kWh without /1000 → 1000× error higher
- Confusing kW (power) with kWh (energy) → physically incompatible dimension

**Detection signal**

- Calculated currents in mA for domestic ovens, or in kA for mobile chargers
- Monthly energies of millions of kWh for small apartments
- Energy costs differing 100-1000× from reasonable estimates

**Conceptual correction**

Apply SI conversion before any operation. Use consistent prefixes: either all in base (W, V, A, s) or all with coherent prefixes (kW, kV, kA, h). Verify dimensionality of result: does it make physical sense? Is the order of magnitude expected?

**Mini-example of contrast**

Incorrect: Oven of 2.2 kW, 230 V → dividing 2.2 by 230 gives 0.0096 A (9.6 mA, similar to an LED, clearly absurd for an oven). Correct: first convert to watts: 2200 W; dividing by 230 V gives 9.57 A (consistent with domestic electric heater).

### Error 6: Confusing consumed energy with instantaneous power

**Why it seems correct**

Both quantities share related units (W and Wh) and appear together on electricity bills. Everyday terminology confuses "consumption" (power) with "consumption" (energy). The conceptual difference (instantaneous vs. accumulated) is subtle for non-technical users.

**Why it is incorrect**

Power [[P]] is an instantaneous rate (watts, equivalent to joules per second). Energy [[E_kWh]] is the temporal integral of power (Wh means watts multiplied by hours). Multiplying power by time gives energy, but comparing P directly with E is comparing speed with distance traveled. This produces cost estimates incorrect by factor 10-100.

**Detection signal**

- Statements like "this appliance consumes 2000 Wh" (correct) vs. "this appliance consumes 2000 W per hour" (dimensionally incorrect)
- Costs calculated using power as if it were monthly energy
- Confusion between "watts" (power) and "watt-hours" (energy) in technical conversations

**Conceptual correction**

Power is "consumption rate" (W). Energy is "accumulated consumption" (Wh or kWh). For costs, always use energy: obtain [[E_kWh]] by multiplying [[P_kW]] by [[t_h]]. Verify that resulting units are of energy, not power.

**Mini-example of contrast**

Incorrect: "The 2000 W oven consumes 2000 Wh in one hour, costs 0.15 €/kWh, multiplying 2000 by 0.15 gives 300 €/h" (error: must convert 2000 W to 2 kW before multiplying by the tariff). Correct: 2 kW multiplied by 1 h gives 2 kWh; multiplied by 0.15 €/kWh gives 0.30 €/h.

## Interpretation errors

### Error 7: Believing that absence of tripping implies safety

**Why it seems correct**

Circuit breakers and residual current devices are specifically designed protection devices to detect dangerous conditions. The absence of their activation suggests that no dangerous condition is detectable. The binary logic "no trip = safe" seems reasonable from the user perspective.

**Why it is incorrect**

Protections have fundamental physical limitations:
- Manufacturing tolerances of ±10-20% in trip thresholds
- Gradual overloads (< 1.13× nominal) allowed for hours according to IEC curves
- Localized heating at connections (contact resistance) not detectable by total-current protection
- Device aging that alters trip characteristics
- Protections sized for short circuits, not for prolonged moderate overloads

An installation can operate for years at 95% of breaker capacity without trips, progressively degrading thermal insulation until catastrophic failure.

**Detection signal**

- Outlets or switches warm to the touch without protection tripping
- Cable insulation discoloration without prior tripping
- Blind trust in the electrical panel without periodic visual inspection

**Conceptual correction**

Protections are last line of defense, not guarantee of operational safety. Maintain 20% margin below ratings. Regularly inspect connections (color, temperature, odor). Consider thermographic inspection for critical installations. Safety is system state, not absence of protection events.

**Mini-example of contrast**

Incorrect: "I've had this heater in the same outlet for 3 years and the breaker has never tripped, it must be safe." (The outlet is carbonized internally: a contact resistance of 0.5 Ω with 10 A flowing continuously dissipates 5 W, heating the outlet day after day). Correct: "Annual verification: outlet without discoloration, flexible cable without rigidity, connection temperature < 40°C after 30 min of operation."

### Error 8: Ignoring installation wiring resistance

**Why it seems correct**

Theoretical calculations typically use the appliance load resistance ([[R]]), ignoring the resistance of connection cables. This simplification seems valid because installation cables (1.5-2.5 mm² copper) have apparently insignificant resistance compared to loads of 10-100 Ω.

**Why it is incorrect**

Wiring resistance (typically 0.1-0.5 Ω for domestic runs of 10-30 m) is in series with the load. For low load resistances (< 10 Ω), wiring can represent 5-10% of total resistance, reducing actual current and dissipating I²R_cable power that heats conductors. In old installations with oxidized connections, contact resistance can add 1-5 Ω additional.

**Detection signal**

- Measured voltage drops > 3-5% at circuit endpoints under load
- Disproportionate cable heating relative to nominal load
- Incompatibility between theoretical calculation and actual current measurement

**Conceptual correction**

Include R_cable = ρ·L/A in precise calculations, where ρ = 0.0175 Ω·mm²/m for copper, L is round-trip length, A is cross-section. Verify that total voltage drop < 3% for lighting, < 5% for power. In old installations, measure loop resistance with multimeter before trusting calculations.

**Mini-example of contrast**

Incorrect: Calculate by dividing 230 V by 5 Ω giving 46 A for a heater, ignoring 0.3 Ω of wiring (round-trip 20 m of 2.5 mm²). Real: total resistance is 5.3 Ω, current drops to 43.4 A (6% difference), but the 0.3 Ω in the cable dissipates over 500 W heating the conductors, not the heater. Correct: verify cable cross-section for this current (would require minimum 10 mm²) or select heater with resistance above 15 Ω.

## Quick self-control rule

Before connecting any new load or modifying an existing installation, execute this 60-second verification protocol:

1. **SI Conversion:** Verify that [[P]] is in W (not kW), [[V]] in V, [[R]] in Ω. Convert if necessary.

2. **Current Calculation:** Divide [[P]] by [[V]] (if power is known), or divide [[V]] by [[R]] (if resistance is known). Result in amperes.

3. **Circuit Verification:** Identify the circuit protection rating (10 A, 16 A, 20 A, 25 A) and calculate 80% of that value (thermal safety margin).

4. **Safety Comparison:** Is calculated [[I]] < 80% of rating? If not, requires different circuit or simultaneity management.

5. **Resistance Check:** If starting from [[R]], is [[R]] > 10 Ω? If [[R]] < 10 Ω, explicitly verify it is not a short circuit or defective load.

6. **Dimensional Validation:** Does the result make physical sense? Current in A (not mA or kA)? Power in W (not MW)?

7. **Golden Rule:** If the result surprises or seems incorrect, re-verify units and assumptions before proceeding.

**Immediate Alert Signals (STOP):**
- ⚠️ Cannot state the calculated current in amperes → Incomplete analysis, DO NOT connect
- ⚠️ [[I]] > 100% of circuit rating → Immediate danger, connection prohibited
- ⚠️ [[I]] > 80% of rating → Caution, requires additional verification
- ⚠️ [[R]] < 10 Ω without explicit manufacturer certification → Potential short circuit
- ⚠️ Mixed units (kW with V, W with minutes) → Probable mathematical error

**Final Reminder:** In electrical safety, systematic skepticism is a virtue. If doubt exists, consult a qualified electrician before connecting.
`;export{e as default};
