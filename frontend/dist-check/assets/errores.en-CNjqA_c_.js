const e=`# Common Errors in Resistive Heating

The apparent simplicity of resistive heating creates a false sense of mastery of the topic. The consumption formula seems so straightforward that it is easy to apply it incorrectly or misinterpret its results. Below are the most frequent errors and how to detect and correct them.

## Conceptual errors

### Error 1: Confusing high conversion efficiency with low energy cost
**Why it seems correct**
The resistive emitter has a [[conversion efficiency|eta]] almost equal to 1 and a [[coefficient of performance|COP]] = 1. If the conversion is virtually perfect and there are no losses, it seems logical that it is the most efficient and economical option.

**Why it is incorrect**
[[COP]] = 1 does not mean outstanding efficiency; it means that 1 thermal kWh is obtained for every electrical kWh invested. A heat pump with [[COP]] = 4 obtains 4 thermal kWh for the same electrical kWh, making it four times more efficient in energy terms. Resistive heating converts well, but it converts 100% of expensive energy (electricity) into heat, something other technologies achieve by multiplying performance by harnessing ambient heat.

**Detection signal**
The error manifests when the student argues that resistive heating "is the most efficient because it doesn't lose anything." The correct statement is: "resistive heating is the simplest and most predictable, but not the most efficient in electrical consumption."

**Conceptual correction**
Always distinguish between local conversion efficiency ([[eta]], measures internal losses in the emitter) and [[coefficient of performance|COP]] (measures how much useful heat is obtained per unit of electricity, including possible use of the environment). In resistive heating, both coincide at ≈1; in heat pumps, [[eta]] ≈ 0.9 but [[COP]] can be 3–5.

**Contrast mini-example**
A 2 kW electric radiator delivers ~1.96 kWh of [[useful heat|Q]] with [[eta]] = 0.98. A heat pump with a 0.5 kW compressor and [[COP]] = 4 delivers the same 2 thermal kWh consuming only 0.5 electrical kWh. The difference in the bill is 4:1.

## Model errors

### Error 2: Using device-on hours instead of effective time
**Why it seems correct**
If the thermostat keeps the device on from 7:00 to 23:00, that is 16 hours. It seems natural to multiply [[emitter power|P]] by those 16 hours to calculate [[electrical consumption|E]].

**Why it is incorrect**
The thermostat disconnects the resistance when the target temperature is reached. In a well-insulated home, the resistance may only be active for 4–6 of those 16 hours. [[effective usage time|t]] is the variable that enters the formula, not the hours with the device plugged in. Using 16 hours instead of 5 hours overestimates [[electrical consumption|E]] by a factor of 3.2, generating completely incorrect cost budgets.

**Detection signal**
The calculation predicts consumption far higher than the actual bill. If the bill shows 180 kWh in a month and the calculation gives 480 kWh, [[effective usage time|t]] is poorly estimated.

**Conceptual correction**
Use plug-in energy monitors (available from €15) to directly measure actual [[electrical consumption|E]], or estimate [[effective usage time|t]] by applying a thermostat duty cycle factor, which in well-insulated homes is typically between 25% and 50% of connection time.

**Contrast mini-example**
A 2 kW emitter connected for 10 hours with a thermostat active at 40% has [[effective usage time|t]] = 4 h. The real [[electrical consumption|E]] is 2 × 4 = 8 kWh, not 2 × 10 = 20 kWh. The difference is 12 kWh per day, or 360 kWh per month, which at 0.22 EUR/kWh amounts to €79.20 of error in the monthly estimate.

## Mathematical errors

### Error 3: Mixing W/kW units without prior conversion
**Why it seems correct**
Equipment catalogues sometimes express [[emitter power|P]] in watts (W), while the consumption formula operates in kW and hours. If 1500 W and 5 h are multiplied directly without converting, the result appears to be 7500 — whose correct unit would be 7500 Wh, i.e., 7.5 kWh.

**Why it is incorrect**
The formula operates in kW and hours to directly give kWh. Entering W instead of kW produces results 1000 times larger or smaller depending on how the error propagates. This dimensional inconsistency is the most common source of incorrect calculations in domestic heating problems.

**Detection signal**
If the result for [[electrical consumption|E]] is in the thousands when it should be in the tens of kWh, there is a units error. The typical domestic resistive heating bill is between 50 and 500 kWh per month, not in the order of thousands.

**Conceptual correction**
Establish as a fixed rule: always convert [[P]] to kW before calculating (divide by 1000 if in W). Then verify that the final result is in kWh and is consistent with the expected order of magnitude.

**Contrast mini-example**
A 1500 W emitter running for 4 h: using 1.5 kW × 4 h gives 6 kWh. The common error is operating with 1500 (in W) and 4 h without converting, yielding 6000 Wh — a factor of 1000 larger than the correct result.

## Interpretation errors

### Error 4: Extrapolating an atypical month to the entire season
**Why it seems correct**
If in October the heating cost was moderate, it seems reasonable to estimate that the entire winter will cost approximately 5 times that value.

**Why it is incorrect**
[[effective usage time|t]] varies drastically with outdoor temperature. October may have a thermostat duty cycle of 20%, while January may have 70%. Extrapolating October's consumption to January overestimates savings in the colder months and underestimates the total seasonal [[electrical consumption|E]] by a factor of 2–3 in cold climates. [[coefficient of performance|COP]] does not vary, but the building's thermal demand does.

**Detection signal**
The annual budget calculated by extrapolating from a mild month comes in 40–60% below the actual cost at the end of winter.

**Conceptual correction**
Analyze at least the peak demand months (January–February) and the low demand months (October–November) to obtain a reasonable seasonal estimate. Use degree-day data for your location if greater precision is needed.

**Contrast mini-example**
October: [[t]] = 2 h/day, [[electrical consumption|E]] = 60 kWh/month. January: [[t]] = 7 h/day, [[E]] = 210 kWh/month. Extrapolating October × 5 gives 300 kWh, when the actual total (Oct–Feb) may be 750 kWh. The difference directly affects the investment budget for improvements.

## Quick self-control rule

To verify whether your resistive heating analysis is sound, apply this checklist:
1. **Consistent units**: Have you converted [[P]] to kW before multiplying by [[t]] in hours?
2. **Effective time**: Have you used hours with the resistance active, not just hours with the device on?
3. **Order of magnitude**: Is the calculated [[electrical consumption|E]] between 10 and 500 kWh for a monthly domestic emitter?
4. **Correct [[COP]]**: Have you assumed [[COP]] = 1 and not a higher value that would violate physics?
5. **Honest comparison**: Have you compared [[useful heat|Q]] delivered at equal service when comparing with other technologies?
`;export{e as default};
