const e=`# Frequent mistakes: Coefficient of Friction

## Conceptual errors

### Error 1: Treating [[fs]] as a fixed value before slip

#### Why it is incorrect

[[fs]] is not a fixed property of the contact but an adaptive response. A static contact delivers exactly the tangential force demanded, up to a limit. Assigning [[fs_max]] when the demand is lower assumes a physical state that does not exist.

#### Detection signal

The student writes [[fs]] = [[mu_s]]·[[N]] in every case without checking whether slip is occurring. The numerical result may look reasonable but corresponds to the wrong regime.

#### Conceptual correction

First determine whether slip occurs by comparing the tangential demand with [[fs_max]]. If the demand is lower, [[fs]] equals that demand; only at the exact threshold does [[fs]] equal [[fs_max]].

#### Contrast mini-example

**Incorrect:** Block at rest with a 30 N tangential demand. The student computes [[fs]] = [[mu_s]]·[[N]] = 0.5 × 100 = 50 N and uses that as the friction force.

**Correct:** Because 30 N < [[fs_max]] = 50 N, the contact remains static and [[fs]] = 30 N. Only when the demand exceeds 50 N should [[fs_max]] be used and the system treated as being at the slip threshold.

---

### Error 2: Mixing up [[mu_s]] and [[mu_k]]

#### Why it is incorrect

[[mu_s]] and [[mu_k]] describe different phenomena: pre-slip adhesion capacity versus resistance during sliding. Using them interchangeably merges two physically distinct regimes and produces forces without meaning.

#### Detection signal

The student writes [[fk]] = [[mu_s]]·[[N]] in a problem where relative motion already exists, or computes [[fs_max]] with [[mu_k]] to assess whether the block moves.

#### Conceptual correction

Apply an operational rule: no relative motion between surfaces → reason with [[mu_s]] and [[fs_max]]; relative motion already present → use [[mu_k]] and [[fk]].

#### Contrast mini-example

**Incorrect:** Block already sliding. The student computes the resisting force as [[mu_s]]·[[N]] = 0.55 × 100 = 55 N.

**Correct:** Because sliding is occurring, the force is [[fk]] = [[mu_k]]·[[N]] = 0.40 × 100 = 40 N. Using [[mu_s]] would have overestimated resistance by 37 %.

---

### Error 3: Ignoring the role of [[N]]

#### Why it is incorrect

[[mu_s]] and [[mu_k]] are dimensionless and carry no force units. Friction force always arises from the product coefficient × [[N]]. Without the correct [[N]], any friction estimate is invalid.

#### Detection signal

The student treats [[mu_s]] as if it were directly a force, or computes [[N]] from the vertical weight alone without accounting for an inclined plane or an accelerating system.

#### Conceptual correction

Before computing any friction force, determine [[N]] from the actual equilibrium or dynamics of the configuration. On a horizontal surface [[N]] = mg; on an inclined plane or in an accelerating system [[N]] differs.

#### Contrast mini-example

**Incorrect:** A 10 kg block on a 30° incline. The student assumes [[N]] = 98 N (full weight) and computes [[fs_max]] = 0.5 × 98 = 49 N.

**Correct:** [[N]] = mg·cos(30°) = 98 × 0.866 = 84.9 N, giving [[fs_max]] = 0.5 × 84.9 = 42.4 N. The incorrect approach overestimates adhesion capacity by 15 %.

---

## Model errors

### Error 4: Using constant coefficients outside their validity domain

#### Why it is incorrect

The model with constant [[mu_s]] and [[mu_k]] is an idealization valid under controlled conditions. Changes in humidity, temperature, speed, or surface contamination shift effective values outside the calibrated range.

#### Detection signal

The student applies tabulated values to situations involving rain, high temperature, or different materials without declaring any validity limit.

#### Conceptual correction

State the validity conditions of the coefficient explicitly. If the problem departs from those conditions, flag the result as a first-order estimate that may require recalibration.

#### Contrast mini-example

**Incorrect:** [[mu_s]] = 0.6 (dry rubber on asphalt) is used to compute braking distance in heavy rain.

**Correct:** On wet pavement the effective coefficient can drop to 0.3–0.4. Using the dry value without qualification leads to braking-distance underestimates by a factor of 2, with critical safety implications.

---

### Error 5: Skipping cross-checks with [[theta_c]]

#### Why it is incorrect

The critical angle [[theta_c]] provides an independent estimate of [[mu_s]] without requiring a force sensor. Omitting it removes a valuable consistency check that can expose errors in the direct force measurement.

#### Detection signal

The student obtains [[mu_s]] by force ratio but does not verify whether the experimental angle is consistent. Or the data for [[theta_c]] are available and the student ignores them.

#### Conceptual correction

When angular data are available, compute [[mu_s]] = tan([[theta_c]]) and compare with the force-based value. A discrepancy greater than 10 % is a warning of experimental or model error.

#### Contrast mini-example

**Incorrect:** The student obtains [[mu_s]] = 0.58 by force ratio. The inclined-plane test gives [[theta_c]] = 25°, implying tan(25°) ≈ 0.47. The student ignores the discrepancy.

**Correct:** The 19 % gap (0.58 vs 0.47) triggers a review. A calibration offset in the force sensor is identified and corrected.

---

## Mathematical errors

### Error 6: Replacing the static inequality with equality too early

#### Why it is incorrect

The no-slip condition is an inequality: [[fs]] ≤ [[mu_s]]·[[N]]. Replacing it with equality without criterion turns a regime condition into an identity, producing false thresholds and wrong interpretations.

#### Detection signal

The student writes [[fs]] = [[mu_s]]·[[N]] to diagnose whether the block moves, instead of comparing the demand with [[fs_max]] using an inequality.

#### Conceptual correction

Keep the inequality for regime diagnosis. Use equality only when the problem explicitly asks for the threshold condition or states that the system is at the slip boundary.

#### Contrast mini-example

**Incorrect:** The student imposes maximum static friction as if it were mandatory and concludes the block is at threshold, even though actual tangential demand is clearly lower.

**Correct:** After comparing demand with available threshold, the contact is confirmed to remain in static regime. Therefore [[fs]] adapts to demand and does not need to reach the maximum.

---

### Error 7: Skipping dimensional checks

#### Why it is incorrect

Without unit control a result can be numerically plausible but physically inconsistent. In this leaf the coefficients are dimensionless and forces are in newtons; mixing units produces errors that pass undetected by numerical intuition alone.

#### Detection signal

The student reports [[fk]] in kilogram-force while the problem works in SI, or writes [[mu_s]] with units N/N² instead of dimensionless.

#### Conceptual correction

Confirm that [[fs]], [[fs_max]], and [[fk]] are in newtons, that [[mu_s]] and [[mu_k]] are dimensionless, and that [[theta_c]] is in radians or degrees consistent with the trigonometric function used.

#### Contrast mini-example

**Incorrect:** The student mixes mass and force in the same computation and reports a value in units inconsistent with the working system.

**Correct:** [[N]] is a force in newtons, not a mass. If the given datum is mass, first convert it to normal force under explicit dynamic assumptions, then apply the coefficient to obtain [[fk]] in newtons.

---

## Interpretation errors

### Error 8: Assuming that higher friction is always better

#### Why it is incorrect

Friction has opposing effects depending on context. High [[mu_s]] is desirable for startup and grip. High [[mu_k]] in continuous transport increases dissipation, energy demand, and wear. Maximizing friction without criterion penalizes efficiency.

#### Detection signal

The student recommends the material with the highest [[mu_k]] without analyzing the operating regime or the balance between safety and energy cost.

#### Conceptual correction

Interpret results against the technical objective: startup safety requires sufficient [[mu_s]]; efficiency in steady motion requires a controlled [[mu_k]]. These are distinct requirements that may point to different materials.

#### Contrast mini-example

**Incorrect:** For a conveyor belt, the student selects a very high dynamic-friction coating because they assume more friction always improves the system.

**Correct:** With excessively high dynamic friction, power dissipation in continuous operation rises sharply. The correct coating satisfies minimum static threshold while avoiding unnecessary dynamic resistance.

---

### Error 9: Ending with a number instead of a causal statement

#### Why it is incorrect

Obtaining [[fs_max]] = 66 N or [[fk]] = 48 N without interpreting what it means for the system does not solve the problem. The useful physics lies in the decision implied by the result: the system sticks, slips, or requires redesign.

#### Detection signal

The student ends the exercise with a numerical value and no physical-state sentence. No indication of whether slip occurs, which regime is active, or what the result implies.

#### Conceptual correction

Always close with a causal sentence: which regime is active, which magnitude dominates the response, and what technical or physical decision follows. A number without causal reading does not resolve the problem.

#### Contrast mini-example

**Incorrect:** "A numerical value was obtained" (end of solution)

**Correct:** "Since tangential demand stays below static threshold, contact remains adhered. If demand exceeded threshold, the system would enter sliding regime and resistance would move to the dynamic level, facilitating relative acceleration."

---

## Quick self-control rule

After solving, verify:

- Did I choose the regime before choosing the equation?
- Did I use [[mu_s]] or [[mu_k]] according to the actual state?
- Did I compute [[N]] from this configuration?
- Are units of [[fs]], [[fs_max]], and [[fk]] coherent?
- Does my conclusion explain behavior, not just arithmetic?

If any answer is no, revise the reasoning chain before trusting the result.
`;export{e as default};
