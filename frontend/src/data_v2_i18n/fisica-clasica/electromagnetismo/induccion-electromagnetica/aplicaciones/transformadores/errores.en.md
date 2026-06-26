## Conceptual errors


### Error 1: Confusing the current transformation ratio with the voltage ratio

**Why it seems correct**

The student applies the same turns ratio to currents as to voltages, calculating [[corriente_secundaria]] as [[corriente_primaria]] multiplied by [[numero_de_espiras_secundario]]/[[numero_de_espiras_primario]], following direct proportionality logic.

**Why it is incorrect**

Power conservation requires that the voltage-current product remains constant. If voltage increases by ratio [[numero_de_espiras_secundario]]/[[numero_de_espiras_primario]], current must decrease by that same proportion to conserve power. The correct current ratio follows [[numero_de_espiras_secundario]]/[[numero_de_espiras_primario]], that is, the inverse of the voltage ratio.

**Detection signal**

The student obtains a secondary current greater than the primary in a step-up voltage transformer, or a secondary current less than the primary in a step-down transformer, which violates energy conservation.

**Conceptual correction**

Remember that the current ratio is inverse to the voltage ratio. In a step-up transformer, voltage rises but current falls proportionally. Primary power approximately equals secondary power plus losses.

**Contrast mini-example**

A transformer with a 10:1 ratio raises voltage from 12 V to 120 V. If primary current is 10 A, applying the direct ratio would give 100 A in the secondary, which would imply 12000 W output with only 120 W input. The correct current is 1 A, maintaining power approximately constant at 1200 W considering losses.

## Model errors

**Mini-example of contrast**

Check 1: In Transformers, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Applying the ideal model to a transformer at no-load

**Why it seems correct**

With no load connected, the student reasons that there is no current in the secondary and therefore the primary current must be zero. The ideal model predicts exactly that: zero primary current when [[corriente_secundaria]] is zero.

**Why it is incorrect**

A real transformer needs a magnetisation current to establish the flux in the core, even without load. This no-load current typically between 2% and 10% of nominal produces iron losses that the ideal model completely ignores.

**Detection signal**

The student calculates zero input power at no-load, but observes that the transformer warms slightly and consumes energy measured by the electricity meter.

**Conceptual correction**

The ideal model does not include magnetisation losses. At no-load, the transformer consumes power to maintain the alternating magnetic flux, although it delivers no useful power. The no-load test measures precisely these losses.

**Contrast mini-example**

A 1 kVA transformer connected to the mains without load consumes approximately 20-30 W measured with a wattmeter. The ideal model predicts 0 W. This discrepancy evidences the need for the extended model with iron losses.

## Mathematical errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Entering efficiency as a percentage instead of a decimal

**Why it seems correct**

Manufacturer datasheets express efficiency as 98.5%, using percentage notation. The student copies this number directly into the efficiency formula.

**Why it is incorrect**

Efficiency [[eta]] in the formulas is a dimensionless number between 0 and 1. Using 98.5 instead of 0.985 makes the result one hundred times too large. The calculated power would be one hundred times the real value, flagrantly violating energy conservation.

**Detection signal**

The calculated output power exceeds the input power, or the calculated input power is barely 1% of the useful power.

**Conceptual correction**

An efficiency of 98.5% means that 98.5 out of every 100 input joules are usefully transferred. As a fraction it is 0.985. Always divide the percentage efficiency by 100 before using it in calculations.

**Contrast mini-example**

A transformer with 96% efficiency consumes 1000 W. The useful power is 0.96 times 1000 W equal to 960 W. If 96 is used instead of 0.96, the result is 96000 W: one hundred times the input power, physically impossible.

## Interpretation errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Using peak values instead of RMS values

**Why it seems correct**

The student measures alternating voltage with an oscilloscope and reads the peak value, or remembers that the domestic mains is 325 V peak. Enters this value in the power and efficiency formulas.

**Why it is incorrect**

Transformer formulas, like commercial specifications, use RMS values. The RMS value of a sine wave is the peak value divided by square root of 2. Using the peak value produces results deviated by a factor of approximately 1.414 in voltages and 2 in powers.

**Detection signal**

Calculated powers are approximately double the expected values, or currents seem excessively high for the connected load.

**Conceptual correction**

In electrical engineering, unless explicitly indicated, all alternating quantities are RMS values. A transformer marked 230 V/12 V provides RMS values. The transformation ratio applies to RMS values.

**Contrast mini-example**

A 230 V/12 V transformer fed with 325 V peak produces 17 V peak in the secondary. The student using peak values calculates an apparently different transformation ratio. Using RMS values: 230 V RMS produce 12 V RMS, maintaining the nominal ratio of 19.17.

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.


### Error 5: Ignoring internal voltage drop under load

**Why it seems correct**

The student measures 12 V in the secondary at no-load and assumes this voltage remains constant regardless of the connected load. Calculates load current by dividing 12 V by the load resistance.

**Why it is incorrect**

Internal resistances of windings cause a voltage drop proportional to current. Under load, the voltage measured at the secondary terminals is less than the no-load nominal voltage. This drop typically of 2% to 5% at full load can be greater in small or low-quality transformers.

**Detection signal**

The voltage measured in the secondary under load is noticeably less than the theoretically calculated value. The discrepancy increases as load increases.

**Conceptual correction**

Real transformers have voltage regulation that quantifies the drop from no-load to full load. For precise calculations, use the extended model with winding resistances or apply the regulation factor from the datasheets.

**Contrast mini-example**

A nominal 230/12 V transformer provides 12.5 V at no-load. Under a load that demands 2 A, the voltage drops to 11.8 V due to internal resistive drops. The student who ignores this effect calculates a load power of 24 W using 12 V, when the real one is 23.6 W using 11.8 V, an error of 1.7%.

## Quick self-control rule

Before accepting a result about a transformer, verify the following conditions. Output power must be strictly less than input power. Efficiency must be between 0 and 1 as a decimal, not as a percentage. Secondary current must be less than primary current in a step-up transformer, and greater in a step-down transformer. The voltage ratio must exactly match the turns ratio. Calculated losses must be positive and typically below 5% of nominal power.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.