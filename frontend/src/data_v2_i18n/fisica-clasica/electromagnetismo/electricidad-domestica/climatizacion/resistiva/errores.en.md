The apparent simplicity of resistive heating creates a false sense of mastery of the topic. The consumption formula seems so straightforward that it is easy to apply it incorrectly or misinterpret its results. Below are the most frequent errors and how to detect and correct them.

## Conceptual errors


### Error 1: Confusing high conversion efficiency with low energy cost
**Why it seems correct**
The resistive emitter has a [[conversion efficiency|eta]] almost equal to 1 and a [[coeficiente_de_rendimiento]] = 1. If the conversion is virtually perfect and there are no losses, it seems logical that it is the most efficient and economical option.

**Why it is incorrect**
[[coeficiente_de_rendimiento]] = 1 does not mean outstanding efficiency; it means that 1 thermal kWh is obtained for every electrical kWh invested. A heat pump with [[coeficiente_de_rendimiento]] = 4 obtains 4 thermal kWh for the same electrical kWh, making it four times more efficient in energy terms. Resistive heating converts well, but it converts 100% of expensive energy (electricity) into heat, something other technologies achieve by multiplying performance by harnessing ambient heat.

**Detection signal**
The error manifests when the student argues that resistive heating "is the most efficient because it doesn't lose anything." The correct statement is: "resistive heating is the simplest and most predictable, but not the most efficient in electrical consumption."

**Conceptual correction**
Always distinguish between local conversion efficiency ([[eta]], measures internal losses in the emitter) and [[coeficiente_de_rendimiento]] (measures how much useful heat is obtained per unit of electricity, including possible use of the environment). In resistive heating, both coincide at ≈1; in heat pumps, [[eta]] ≈ 0.9 but [[coeficiente_de_rendimiento]] can be 3–5.

**Contrast mini-example**
A 2 kW electric radiator delivers ~1.96 kWh of [[calor_util]] with [[eta]] = 0.98. A heat pump with a 0.5 kW compressor and [[coeficiente_de_rendimiento]] = 4 delivers the same 2 thermal kWh consuming only 0.5 electrical kWh. The difference in the bill is 4:1.

## Model errors

**Mini-example of contrast**

Check 1: In Resistive Heating, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Using device-on hours instead of effective time
**Why it seems correct**
If the thermostat keeps the device on from 7:00 to 23:00, that is 16 hours. It seems natural to multiply [[potencia_del_emisor]] by those 16 hours to calculate [[consumo_electrico]].

**Why it is incorrect**
The thermostat disconnects the resistance when the target temperature is reached. In a well-insulated home, the resistance may only be active for 4–6 of those 16 hours. [[tiempo_efectivo_de_uso]] is the variable that enters the formula, not the hours with the device plugged in. Using 16 hours instead of 5 hours overestimates [[consumo_electrico]] by a factor of 3.2, generating completely incorrect cost budgets.

**Detection signal**
The calculation predicts consumption far higher than the actual bill. If the bill shows 180 kWh in a month and the calculation gives 480 kWh, [[tiempo_efectivo_de_uso]] is poorly estimated.

**Conceptual correction**
Use plug-in energy monitors (available from €15) to directly measure actual [[consumo_electrico]], or estimate [[tiempo_efectivo_de_uso]] by applying a thermostat duty cycle factor, which in well-insulated homes is typically between 25% and 50% of connection time.

**Contrast mini-example**
A 2 kW emitter connected for 10 hours with a thermostat active at 40% has [[tiempo_efectivo_de_uso]] = 4 h. The real [[consumo_electrico]] is 2 × 4 = 8 kWh, not 2 × 10 = 20 kWh. The difference is 12 kWh per day, or 360 kWh per month, which at 0.22 EUR/kWh amounts to €79.20 of error in the monthly estimate.

## Mathematical errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Mixing W/kW units without prior conversion
**Why it seems correct**
Equipment catalogues sometimes express [[potencia_del_emisor]] in watts (W), while the consumption formula operates in kW and hours. If 1500 W and 5 h are multiplied directly without converting, the result appears to be 7500 — whose correct unit would be 7500 Wh, i.e., 7.5 kWh.

**Why it is incorrect**
The formula operates in kW and hours to directly give kWh. Entering W instead of kW produces results 1000 times larger or smaller depending on how the error propagates. This dimensional inconsistency is the most common source of incorrect calculations in domestic heating problems.

**Detection signal**
If the result for [[consumo_electrico]] is in the thousands when it should be in the tens of kWh, there is a units error. The typical domestic resistive heating bill is between 50 and 500 kWh per month, not in the order of thousands.

**Conceptual correction**
Establish as a fixed rule: always convert [[potencia_del_emisor]] to kW before calculating (divide by 1000 if in W). Then verify that the final result is in kWh and is consistent with the expected order of magnitude.

**Contrast mini-example**
A 1500 W emitter running for 4 h: using 1.5 kW × 4 h gives 6 kWh. The common error is operating with 1500 (in W) and 4 h without converting, yielding 6000 Wh — a factor of 1000 larger than the correct result.

## Interpretation errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Extrapolating an atypical month to the entire season
**Why it seems correct**
If in October the heating cost was moderate, it seems reasonable to estimate that the entire winter will cost approximately 5 times that value.

**Why it is incorrect**
[[tiempo_efectivo_de_uso]] varies drastically with outdoor temperature. October may have a thermostat duty cycle of 20%, while January may have 70%. Extrapolating October's consumption to January overestimates savings in the colder months and underestimates the total seasonal [[consumo_electrico]] by a factor of 2–3 in cold climates. [[coeficiente_de_rendimiento]] does not vary, but the building's thermal demand does.

**Detection signal**
The annual budget calculated by extrapolating from a mild month comes in 40–60% below the actual cost at the end of winter.

**Conceptual correction**
Analyze at least the peak demand months (January–February) and the low demand months (October–November) to obtain a reasonable seasonal estimate. Use degree-day data for your location if greater precision is needed.

**Contrast mini-example**
October: [[tiempo_efectivo_de_uso]] = 2 h/day, [[consumo_electrico]] = 60 kWh/month. January: [[tiempo_efectivo_de_uso]] = 7 h/day, [[consumo_electrico]] = 210 kWh/month. Extrapolating October × 5 gives 300 kWh, when the actual total (Oct–Feb) may be 750 kWh. The difference directly affects the investment budget for improvements.

## Quick self-control rule

To verify whether your resistive heating analysis is sound, apply this checklist:
1. **Consistent units**: Have you converted [[potencia_del_emisor]] to kW before multiplying by [[tiempo_efectivo_de_uso]] in hours?
2. **Effective time**: Have you used hours with the resistance active, not just hours with the device on?
3. **Order of magnitude**: Is the calculated [[consumo_electrico]] between 10 and 500 kWh for a monthly domestic emitter?
4. **Correct [[coeficiente_de_rendimiento]]**: Have you assumed [[coeficiente_de_rendimiento]] = 1 and not a higher value that would violate physics?
5. **Honest comparison**: Have you compared [[calor_util]] delivered at equal service when comparing with other technologies?

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.