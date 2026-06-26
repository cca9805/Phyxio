Electricity cost analysis combines physics, economics, and statistics. Identifying typical errors is as important as mastering the formulas, because a model or comparison error can produce savings conclusions that are completely opposite to reality.

## Conceptual errors


### Error 1: confusing consumption with cost

#### Why it seems correct

In everyday language "using more electricity" equals "paying more". If consumption rises, the bill rises; if it falls, the bill falls. This relationship seems direct and proportional.

#### Why it is incorrect

[[coste_de_energia]] is only part of [[coste_total_de_la_factura]]. [[coste_de_potencia]] and [[costes_adicionales_y_peajes]] persist even if consumption is zero. If these fixed terms represent 35 % of the bill, a 30 % reduction in consumption only reduces [[coste_total_de_la_factura]] by 19.5 %, not 30 %.

#### Detection signal

Calculating the bill by multiplying total kWh by a single price and getting a result lower than the actual total on the printed bill.

#### Conceptual correction

Always decompose the bill into [[coste_de_energia]], [[coste_de_potencia]], and [[costes_adicionales_y_peajes]] before projecting savings. Apply the reduction only to the affected component.

#### Mini-example

Real bill: 70 EUR. [[coste_de_energia]] = 45 EUR, [[coste_de_potencia]] = 15 EUR, [[costes_adicionales_y_peajes]] = 10 EUR. A 20 % reduction in consumption saves 20 % of 45 = 9 EUR, i.e., 12.9 % of the total bill, not 20 %.

**Why it seems correct**

Check 1: In Cost of Electricity, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Why it is incorrect**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Conceptual correction**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.

### Error 2: concluding the bill depends only on monthly consumption

#### Why it seems correct

Each month a bill arrives with an amount and known consumption. It seems logical that higher consumption implies a proportionally higher bill.

#### Why it is incorrect

[[coste_de_potencia]] depends on [[billing period days|dias]] and [[potencia_contratada]], not on consumption. Two months with equal consumption but different numbers of days will have different [[coste_total_de_la_factura]] even if [[coste_de_energia]] is identical.

#### Detection signal

Two bills with equal kWh consumption but different total amounts without any tariff change.

#### Conceptual correction

Always check [[billing period days|dias]] before comparing bills. [[coste_de_potencia]] varies linearly with days: 31 days costs 3.3 % more than 30 days.

#### Mini-example

January (31 days): [[coste_de_potencia]] = 4.6 × 0.11 × 31 = 15.69 EUR. February (28 days): [[coste_de_potencia]] = 4.6 × 0.11 × 28 = 14.17 EUR. Difference of 1.52 EUR without any change in consumption or contract.

## Model errors

**Why it seems correct**

Check 6: In Cost of Electricity, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

**Why it is incorrect**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Detection signal**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.

**Conceptual correction**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.

### Error 3: comparing non-equivalent periods without normalizing

#### Why it seems correct

Month-to-month comparison seems natural; the bill arrives monthly and the user compares with the previous month or the same month last year.

#### Why it is incorrect

The simplified model is only valid for comparisons between equivalent periods. If [[billing period days|dias]] differ by more than 3 or the monthly mean temperature differs by more than 5 °C, the model error may exceed the saving being measured.

#### Detection signal

The calculated [[ahorro_porcentual]] varies significantly (more than 3 percentage points) across different pairs of compared months that should show the same saving if the measure were consistent.

#### Conceptual correction

Normalize per day before comparing (divide [[coste_total_de_la_factura]] by [[billing period days|dias]]). For year-on-year comparisons, use the same month of the previous year with equivalent occupancy conditions.

#### Mini-example

Base January: 85 EUR / 31 days = 2.74 EUR/day. New January: 78 EUR / 28 days = 2.79 EUR/day. [[coste_del_escenario_nuevo]] has a higher daily cost, not lower; the measure has produced no saving when normalized correctly.

**Why it seems correct**

Check 11: In Cost of Electricity, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

**Why it is incorrect**

Check 12: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 12.

**Detection signal**

Check 13: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 13.

**Conceptual correction**

Check 14: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 14.

**Mini-example of contrast**

Check 15: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 15.

### Error 4: ignoring the weight of the fixed term when projecting savings

#### Why it seems correct

Savings campaigns express the potential as a percentage of consumption ("save 20 % of energy"). It seems straightforward to transfer that percentage to the bill.

#### Why it is incorrect

[[coste_de_potencia]] and [[costes_adicionales_y_peajes]] are inelastic with respect to consumption. If they represent 35 % of the bill, the maximum possible [[ahorro_porcentual]] acting only on [[coste_de_energia]] is 65 % of what was projected.

#### Detection signal

The observed saving in euros on the bill is systematically lower than the projection obtained by multiplying the consumption reduction percentage by [[coste_del_escenario_de_referencia]].

#### Conceptual correction

Calculate [[ahorro_porcentual]] using the complete values of [[coste_del_escenario_de_referencia]] and [[coste_del_escenario_nuevo]] that include all three components.

#### Mini-example

A 25 % saving is projected on 70 EUR, which would be 17.5 EUR. But [[coste_de_potencia]] plus [[costes_adicionales_y_peajes]] sum to 25 EUR and are not reduced. The real maximum saving is 25 % of the 45 EUR of [[coste_de_energia]], that is 11.25 EUR, the 16 % of the total bill.

## Mathematical errors

**Why it seems correct**

Check 16: In Cost of Electricity, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 16.

**Why it is incorrect**

Check 17: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 17.

**Detection signal**

Check 18: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 18.

**Conceptual correction**

Check 19: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 19.

**Mini-example of contrast**

Check 20: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 20.

### Error 5: lowering contracted power without checking real peaks

#### Why it seems correct

[[coste_de_potencia]] does not depend on consumption; it seems an easy cost to reduce by simply changing the [[potencia_contratada]] value in the contract.

#### Why it is incorrect

[[potencia_contratada]] is also the ceiling for simultaneous available power. If it is lowered below the home's real demand peak, the power control breaker (ICP) trips and cuts supply at peak usage moments.

#### Detection signal

Supply outages when simultaneously turning on the electric cooker, dishwasher, and air conditioning.

#### Conceptual correction

Record simultaneous demand peaks for at least one full month during peak season. Set the new [[potencia_contratada]] at least 10–15 % above the observed maximum peak.

#### Mini-example

Home with cooker (3 kW) + dishwasher (1.8 kW) + air conditioner (1.5 kW) simultaneously = 6.3 kW peak. Lowering [[potencia_contratada]] from 6.9 kW to 5.75 kW would cause outages; only lowering to 3.45 kW would be safe if multiple appliances are never used simultaneously.

## Interpretation errors

**Why it seems correct**

Check 21: In Cost of Electricity, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 21.

**Why it is incorrect**

Check 22: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 22.

**Detection signal**

Check 23: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 23.

**Conceptual correction**

Check 24: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 24.

**Mini-example of contrast**

Check 25: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 25.

### Error 6: attributing savings to the wrong measure without breakdown

#### Why it seems correct

If a new system is installed and the bill drops the following month, the causal connection seems obvious: the new system is the cause of the savings.

#### Why it is incorrect

[[coste_total_de_la_factura]] can change due to multiple simultaneous causes: fewer [[billing period days|dias]], milder temperature, lower occupancy, or variation in [[energy price per tariff band|precio_i]]. Without controlling these variables, the change cannot be attributed to a specific measure.

#### Detection signal

[[ahorro_porcentual]] varies by more than 5 percentage points across different comparison periods that should show the same effect of the measure.

#### Conceptual correction

Compare [[coste_del_escenario_nuevo]] with [[coste_del_escenario_de_referencia]] in equivalent periods. If it is not possible to control all variables, repeat the comparison over several periods and look for statistical consistency.

#### Mini-example

March bill (post-measure): 55 EUR. February bill (pre-measure): 80 EUR. Apparent difference: −25 EUR (−31 %). But February has 28 days and March 31; March temperature is 8 °C higher; and there are 3 fewer days of occupancy. The saving attributable to the measure may be zero.

## Quick self-control rule

Before concluding that real savings exist and attributing them to a specific measure:

1. Verify equal [[billing period days|dias]] or normalize per day.
2. Check that [[coste_del_escenario_de_referencia]] and [[coste_del_escenario_nuevo]] are comparable in service, temperature, and occupancy.
3. Decompose into [[coste_de_energia]], [[coste_de_potencia]], and [[costes_adicionales_y_peajes]]; identify which component changes.
4. Calculate [[ahorro_porcentual]] on the complete [[coste_total_de_la_factura]].
5. Confirm the trend over at least two equivalent periods.

**Why it seems correct**

Check 26: In Cost of Electricity, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 26.

**Why it is incorrect**

Check 27: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 27.

**Detection signal**

Check 28: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 28.

**Conceptual correction**

Check 29: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 29.

**Mini-example of contrast**

Check 30: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 30.