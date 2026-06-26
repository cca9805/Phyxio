## Conceptual errors

### Error 1: Believing efficiency can reach 1 with sufficient engineering

**Why it seems correct**

The student reasons that if all leaks are eliminated, friction is reduced to zero, and all materials are improved, it will eventually be possible to build a perfect engine that converts all heat into work. The analogy with electrical circuits reinforces this idea: in theory, a superconductor has no resistance, so a perfectly built engine should be able to capture all the energy.

**Why it is incorrect**

The efficiency limitation does not arise from constructive imperfection but from the second law of thermodynamics, which is a fundamental law of nature. For the cycle to close and the working fluid to return to its initial state, heat must be rejected to the cold reservoir. Completely eliminating [[Q_C]] would require a cold reservoir at 0 K, an unreachable temperature, or a completely reversible and infinitely slow process. No engineering improvement can circumvent this thermodynamic restriction.

**Detection signal**

The student obtains [[eta]] equal to or close to 1 without reservoir temperatures that justify such a Carnot limit. It also manifests when the student claims that "with better materials one could reach 100%" without mentioning the Carnot limit.

**Conceptual correction**

The maximum theoretical efficiency is [[eta_Carnot]], which depends only on the absolute temperatures of the reservoirs. No material or design improvement can exceed that limit. Real improvements only bring [[eta]] closer to [[eta_Carnot]] by reducing irreversibilities, but without crossing that ceiling.

**Contrast mini-example**

An engine operating between 500 K and 300 K has [[eta_Carnot]] of 0.40. No matter how perfect the design, its efficiency can never exceed that value. A well-designed real engine between those reservoirs might achieve 0.32. Claiming that with sufficient technology one could reach 0.95 between those same reservoirs directly contradicts the second law.

---

### Error 2: Confusing efficiency with power

**Why it seems correct**

Intuitively, a more powerful engine seems more efficient because it "does more". Everyday language uses "efficiency" and "power" as synonyms in phrases such as "this engine performs better". This linguistic ambiguity leads students to mix both concepts.

**Why it is incorrect**

[[eta]] measures what fraction of [[Q_H]] is converted to [[W_util]], regardless of process speed. Power measures how much work is produced per second. An engine can have [[eta]] of 0.40 but power of 10 kW if it works slowly, or [[eta]] of 0.30 and power of 500 kW if it works fast. They are independent quantities: a more efficient engine is not necessarily more powerful.

**Detection signal**

The student compares two engines claiming the more powerful one has greater efficiency, without computing the [[W_util]]/[[Q_H]] ratio for each. It also appears when the student uses efficiency formulae with power values (watts) instead of energy values (joules).

**Conceptual correction**

[[eta]] is a dimensionless ratio of energies (or of energy flows at the same cycle frequency). Power is energy per unit time. To compare efficiencies, always use energies per cycle or heats per cycle, not instantaneous power unless both engines operate at exactly the same frequency.

**Contrast mini-example**

Engine A: absorbs 1000 J per cycle, produces 350 J of work. Engine B: absorbs 10 000 J per cycle, produces 2000 J of work. Engine A has [[eta]] of 0.35; engine B has [[eta]] of 0.20. Engine B is ten times more powerful per cycle but less efficient. Claiming B performs better because it "produces more work" confuses absolute magnitude with conversion efficiency.

## Model errors

### Error 3: Applying the Carnot limit to irreversible cycles without correction

**Why it seems correct**

The Carnot formula using reservoir temperatures is simple and accessible. If the engine temperatures are known, it seems reasonable to use it directly as a predictor of real efficiency, especially if the engine appears well built and free of obvious defects.

**Why it is incorrect**

[[eta_Carnot]] is the maximum theoretical limit, not the real efficiency. Every cycle with irreversibilities—friction, temperature gradients, gas mixing—operates well below that limit. Using [[eta_Carnot]] as a prediction of real efficiency systematically overestimates the real value by 20% to 50% in industrial engines.

**Detection signal**

The student calculates [[eta_Carnot]] from the engine temperatures and presents it as the expected efficiency of the real cycle, without mentioning it is an inaccessible theoretical limit. It is also detected when the student obtains a real measured efficiency much lower than Carnot and considers it a measurement error.

**Conceptual correction**

[[eta_Carnot]] is a ceiling, not a prediction. Real efficiency is always lower, and the gap between them measures how much work is destroyed by irreversibilities. Predicting real efficiency requires the extended model with isentropic efficiencies of each component.

**Contrast mini-example**

A steam engine between 500 K and 300 K has [[eta_Carnot]] of 0.40. The efficiency measured on the test bench is 0.26. The 14-percentage-point gap is not a measurement error: it reflects entropy generated by piston friction, finite-gradient heat transfer, and irreversible valve opening. Presenting 0.40 as "the expected efficiency" introduces a design error.

### Error 4: Believing [[Q_C]] can be eliminated through thermal insulation

**Why it seems correct**

If [[Q_C]] is heat escaping to the environment, it seems sufficient to insulate the engine perfectly to prevent that loss. The student assimilates [[Q_C]] to an accidental leak that the design can eliminate with sufficient insulation.

**Why it is incorrect**

[[Q_C]] is not an accidental leak but a thermodynamic necessity: it is the heat the working fluid must reject to return to its initial state and complete the cycle. Without rejecting [[Q_C]], the fluid would accumulate entropy cycle after cycle and the engine would cease to operate in steady state. Insulation only reduces lateral heat losses from walls, not the intrinsic [[Q_C]] of the cycle.

**Detection signal**

The student proposes "better insulating the condenser" as a solution to increase efficiency by eliminating [[Q_C]]. It is also detected when the student confuses heat loss by conduction through walls with the heat rejected to the cold reservoir in the cycle rejection process.

**Conceptual correction**

Distinguish between cycle [[Q_C]] (thermodynamically necessary) and parasitic heat losses from the engine walls by conduction or convection. Only the latter can be reduced with insulation. The former is structural to the cycle and can only be reduced by bringing the cycle closer to the reversible ideal.

**Contrast mini-example**

Perfect insulation of the engine exterior eliminates, say, 50 J of lateral losses per cycle. If [[Q_H]] is 1000 J and intrinsic [[Q_C]] is 700 J, efficiency improves from (1000 − 700 − 50)/1000 to (1000 − 700)/1000, that is, from 0.25 to 0.30. But [[Q_C]] remains 700 J: insulation does not touch it. To push efficiency beyond 0.30, the cycle itself must be modified, not the insulation.

## Mathematical errors

### Error 5: Calculating the Carnot limit with temperatures in Celsius

**Why it seems correct**

Reservoir temperatures are usually given in degrees Celsius in problem statements. The student applies the formula directly with those values without converting, because the formula "seems to work" by producing a number between 0 and 1 for most ordinary temperature combinations.

**Why it is incorrect**

The Carnot formula is derived from the thermodynamic definition of temperature, which uses the kelvin scale. The temperature ratio only has physical meaning on the absolute scale. Using Celsius produces serious errors: for an engine between 400 °C and 100 °C, the correct kelvin value is approximately 0.44, but in Celsius it gives 0.75, overestimating the real limit by more than 70%.

**Detection signal**

The student presents a Carnot limit greater than the value corresponding to the kelvin temperatures of the reservoirs. It is also detected when the calculation uses the problem values directly (typically in Celsius) without explicit conversion to kelvin.

**Conceptual correction**

Always convert temperatures to kelvin by adding 273.15 before applying any formula involving temperature ratios. Verify that [[eta_Carnot]] calculated in kelvin is always less than 1 and greater than zero.

**Contrast mini-example**

Engine between 300 °C and 30 °C. In Celsius: ratio 30/300 gives 0.10, and apparent efficiency would be 0.90. In kelvin: reservoirs at 573 K and 303 K. The correct ratio is 303/573, approximately 0.529, and Carnot efficiency is approximately 0.471. The difference is huge: 0.90 versus 0.47. No real engine between those reservoirs can exceed 0.47.

## Interpretation errors

### Error 6: Always interpreting low [[eta]] as evidence of poor design

**Why it seems correct**

If efficiency is low, the engine converts little energy to work, which seems to indicate it is poorly designed or degraded. The student assimilates any low [[eta]] to a correctable engineering problem.

**Why it is incorrect**

Low [[eta]] may simply result from reservoirs at similar temperatures, which limits [[eta_Carnot]] to a small value even if the cycle is nearly perfect. For example, a geothermal power plant extracting heat from a 120 °C source and rejecting it to the 20 °C environment has [[eta_Carnot]] of only 0.25. A real efficiency of 0.15 relative to that ceiling represents a well-designed cycle, not poor design.

**Detection signal**

The student criticises an installation's efficiency without comparing it with [[eta_Carnot]] for the same reservoirs. Correct interpretation always requires comparing [[eta]] with [[eta_Carnot]], not with a universal absolute reference value.

**Conceptual correction**

The thermodynamic quality criterion for an engine is the ratio [[eta]]/[[eta_Carnot]], called relative efficiency or second-law efficiency. An installation with [[eta]] of 0.15 and [[eta_Carnot]] of 0.25 has relative efficiency of 0.60, which is reasonably good. An installation with [[eta]] of 0.30 and [[eta_Carnot]] of 0.70 has relative efficiency of 0.43, indicating greater irreversibility losses.

**Contrast mini-example**

Compare a geothermal plant ([[eta]] of 0.12, [[eta_Carnot]] of 0.20) with a combustion engine ([[eta]] of 0.35, [[eta_Carnot]] of 0.65). The geothermal plant has relative efficiency of 0.60; the combustion engine has relative efficiency of 0.54. Although the combustion engine has higher absolute [[eta]], the geothermal plant is making better use of its available thermodynamic potential.

## Quick self-control rule

Before accepting a thermal efficiency solution as correct, verify the following five points:

1. **Kelvin mandatory**: if the problem involves reservoir temperatures, confirm the conversion to kelvin was performed before any ratio calculation.
2. **Interval (0, 1)**: [[eta]] must be strictly greater than zero and strictly less than one. A value outside that interval indicates a sign error or swapped data.
3. **First-law balance**: the sum of [[W_util]] plus [[Q_C]] must equal [[Q_H]]. If it does not, there is an arithmetic error.
4. **Carnot limit respected**: calculated [[eta]] cannot exceed [[eta_Carnot]] for the given reservoirs. If it does, review the input data.
5. **Relative interpretation**: do not judge [[eta]] as high or low without comparing it with [[eta_Carnot]] for the same reservoirs. The ratio [[eta]]/[[eta_Carnot]] is the design quality indicator.
