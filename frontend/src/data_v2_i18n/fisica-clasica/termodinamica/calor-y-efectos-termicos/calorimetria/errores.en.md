## Conceptual errors

### Error 1: Assigning positive heat to all bodies, including those that cool down

**Why it seems correct**

Heat is energy, and energy seems always positive. Moreover, the formula [[Q_i]] = [[m_i]] · [[c_i]] · [[DeltaT_i]] seems to produce a value with the sign of [[DeltaT_i]], but if the student computes [[DeltaT_i]] always as an absolute value, all heats come out positive.

**Why it is incorrect**

The calorimetry principle requires the algebraic sum of all heats to be zero. If all heats are positive, their sum is strictly positive and the energy conservation principle is not satisfied. The heat released by bodies that cool down is negative because those bodies lose thermal energy. Ignoring signs is equivalent to claiming all bodies absorb energy from the system, which violates energy conservation.

**Detection signal**

The student writes the calorimetry equation by equating the sum of heats of cold bodies to the sum of heats of hot bodies (all positive) rather than setting the algebraic sum equal to zero. The equation has the correct form only if heats released are interpreted as negative in the global sum.

**Conceptual correction**

The correct condition is the algebraic sum of all [[Q_i]] equal to zero. A body going from a higher temperature to [[T_eq]] has negative [[DeltaT_i]] and therefore negative [[Q_i]]: it releases energy. A body going from a lower temperature to [[T_eq]] has positive [[DeltaT_i]] and positive [[Q_i]]: it absorbs energy. The sum of all [[Q_i]] must be zero.

**Contrast mini-example**

A hot metal at 90 °C is mixed with water at 20 °C. Resulting equilibrium temperature: 30 °C. The metal's [[Q_i]] uses its [[m_i]], its [[c_i]], and a negative temperature change, so it is less than zero. The water's [[Q_i]] uses a positive temperature change, so it is greater than zero. The sum of both [[Q_i]] values must be zero. If the metal cooling is taken as positive, the sum is not zero and the result is incorrect.

## Model errors

### Error 2: Computing [[T_eq]] as the simple arithmetic mean of initial temperatures

**Why it seems correct**

The arithmetic mean is the usual average of two values. If two substances at different temperatures are mixed, it seems natural that the final temperature is the midpoint between them.

**Why it is incorrect**

The arithmetic mean is only correct when the total heat capacities of the two bodies are equal, that is, when the products `m_1 · c_1` and `m_2 · c_2` match. In the general case, the correct formula is the weighted average with weights [[m_i]] · [[c_i]]. A body with large total heat capacity "pulls" [[T_eq]] toward its initial temperature, so [[T_eq]] can be very far from the arithmetic mean.

**Detection signal**

The student computes [[T_eq]] by adding initial temperatures and dividing by the number of bodies. If masses or specific heat capacities are very different, the result differs significantly from the correct value.

**Conceptual correction**

The equilibrium temperature is the weighted average of initial temperatures with weights equal to total heat capacities. For two bodies: [[T_eq]] is the ratio of (sum of [[m_i]] · [[c_i]] · T_initial_i) to (sum of [[m_i]] · [[c_i]]). Only when both weights are equal does it coincide with the arithmetic mean.

**Contrast mini-example**

200 g of water at 80 °C mixed with 10 g of iron at 20 °C. Arithmetic mean: (80 + 20) / 2 = 50 °C. Correct calculation: [[T_eq]] = (0.200 × 4186 × 80 + 0.010 × 450 × 20) / (0.200 × 4186 + 0.010 × 450) ≈ (66 976 + 90) / (837.2 + 4.5) ≈ 67 066 / 841.7 ≈ 79.7 °C. Water completely dominates and [[T_eq]] is almost equal to the initial water temperature, not 50 °C.

## Mathematical errors

### Error 3: Inverting the subtraction order in [[DeltaT_i]], producing [[T_eq]] outside the physical interval

**Why it seems correct**

In many problems students compute temperature change as "higher temperature minus lower temperature" to ensure [[DeltaT_i]] is positive. This rule works when only the magnitude matters, but in calorimetry the sign of [[DeltaT_i]] determines the sign of [[Q_i]] and is essential for the sum to be zero.

**Why it is incorrect**

If the student computes [[DeltaT_i]] of the cooling body as initial temperature minus [[T_eq]] instead of [[T_eq]] minus initial temperature, they obtain a positive value for a body that should have negative heat. Substituting into the equilibrium condition gives a [[T_eq]] outside the physical interval, which is an unambiguous error signal.

**Detection signal**

The computed equilibrium temperature falls outside the interval between the initial temperatures of the bodies in the system. Or the sum of heats computed with that [[T_eq]] is not zero.

**Conceptual correction**

[[DeltaT_i]] is always computed as T_final − T_initial of body i, where T_final is [[T_eq]]. For the cooling body, [[T_eq]] < T_initial, so [[DeltaT_i]] is negative. For the warming body, [[T_eq]] > T_initial and [[DeltaT_i]] is positive. Respecting this convention ensures the algebraic sum of the [[Q_i]] is zero.

**Contrast mini-example**

Metal at 80 °C and water at 20 °C. Computed [[T_eq]]: 25 °C. The correct [[DeltaT_i]] for the metal is 25 − 80 = −55 K because it cools down. The correct [[DeltaT_i]] for the water is 25 − 20 = +5 K because it warms up. If the student uses a positive change for the metal, the sum of heats is not zero and the [[T_eq]] resulting from the system of equations falls outside the interval [20, 80] °C.

## Interpretation errors

### Error 4: Ignoring the heat absorbed by the calorimeter itself

**Why it seems correct**

The problem statement mentions "a calorimeter" without giving its heat capacity. If the water equivalent of the calorimeter is not provided, it seems it does not enter the calculation. Moreover, a container seems passive; it is assumed not to absorb heat.

**Why it is incorrect**

Every physical material has a nonzero total heat capacity. The calorimeter, being in thermal contact with the bodies of the system, also exchanges heat with them and therefore also modifies [[T_eq]]. If the water equivalent of the calorimeter is comparable to that of the experimental water (which occurs in uninsulated metallic calorimeters), ignoring it introduces errors of 5–20 % in [[T_eq]].

**Detection signal**

The calculated [[c_i]] of the unknown material differs by more than 10 % from the tabulated value and the calorimeter is metallic. When correcting with the water equivalent of the calorimeter, the result approaches the tabulated value.

**Conceptual correction**

The calorimeter is included in the energy balance as an additional body with initial temperature equal to that of the water it contains and total heat capacity equal to its water-equivalent mass multiplied by the [[c_i]] of water. The zero-sum condition is applied to the assembly water + calorimeter + unknown material.

**Contrast mini-example**

Experiment without correction: metal at 95 °C, 200 g of water at 22 °C, measured [[T_eq]] 28 °C. Without correcting for the calorimeter (aluminum, water equivalent 30 g), the computed [[c_i]] for the metal is about 480 J/(kg·K). With calorimeter correction, it is about 540 J/(kg·K), closer to some steel values.

## Validity errors

### Error 5: Applying the [[T_eq]] formula when one body crosses a phase transition

**Why it seems correct**

The weighted-average formula for [[T_eq]] can be applied directly and produces a numerical result even when initial temperatures straddle the material's melting or boiling point. Students apply the formula without checking whether any body undergoes a phase change.

**Why it is incorrect**

If any body crosses a phase transition on its way to [[T_eq]], part of the exchanged energy goes into the latent heat of the transition, not into temperature change. The weighted-average formula for [[T_eq]] only accounts for sensible heat and does not include latent heat. The result obtained can be physically impossible (for example, a [[T_eq]] that would require ice to remain at 5 °C without melting, which is impossible).

**Detection signal**

The [[T_eq]] computed with the simple formula falls within the range where one of the materials should have changed state (for example, between 0 °C and 100 °C for water that started below 0 °C). Always check whether the computed [[T_eq]] exceeds any phase transition temperature of the materials in the system.

**Conceptual correction**

When a phase change is possible, first check whether the heat available from the hot bodies is sufficient to complete the phase transition of the body undergoing it. If not sufficient, the system reaches equilibrium at the transition temperature with part of the material in each phase. If sufficient, calculate the remaining heat after the transition and apply the [[T_eq]] formula only to the final sensible heat segment.

**Contrast mini-example**

50 g of ice at 0 °C are mixed with 100 g of water at 30 °C. The sensible-heat weighted average would give a positive temperature, but that is incorrect because it ignores the latent heat of fusion of ice. The water can release only about 12.6 kJ while cooling to 0 °C, whereas melting all the ice requires about 16.7 kJ. Therefore, the system reaches equilibrium at 0 °C with some ice remaining unmelted.

## Quick self-control rule

Before accepting any calorimetry result, verify three conditions:

1. **[[T_eq]] interval**: the computed equilibrium temperature must lie strictly between the lowest and highest initial temperatures of the bodies in the system. If it falls outside that interval, there is a sign error or a missing body.

2. **Sum of heats**: compute all individual [[Q_i]] with the obtained [[T_eq]] and verify their algebraic sum is zero (or below 1 % of the total exchanged energy as experimental tolerance). A nonzero sum signals a sign error, a missing body, or an uncorrected calorimeter heat.

3. **Phase change check**: before applying the [[T_eq]] formula, verify that no body crosses a phase transition temperature on its way from its initial temperature to [[T_eq]]. If any body does, the problem must be solved in stages.
