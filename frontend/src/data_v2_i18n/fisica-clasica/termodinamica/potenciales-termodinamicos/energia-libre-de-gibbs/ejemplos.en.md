# Exam-type example

## Problem statement

A mixture of nitrogen and hydrogen is introduced into an industrial reactor to produce ammonia via the Haber process. The standard thermodynamic data for the synthesis reaction are:

- Standard enthalpy change: minus 92 000 J per mole of ammonia produced
- Standard entropy change: minus 198 J per kelvin and mole

Determine the change in Gibbs free energy at 298 K and at 700 K, compute the inversion temperature, and physically interpret which regime is more suitable for the industrial process based solely on the thermodynamic criterion.

## Data

- Enthalpy change: minus 92 000 J/mol
- Entropy change: minus 198 J/(mol·K)
- First evaluation temperature: 298 K
- Second evaluation temperature: 700 K

## System definition

The system is one mole of ammonia produced in the synthesis reaction at constant pressure. The Gibbs free energy [[G]] of the system is the thermodynamic potential whose change [[DeltaG]] is the spontaneity criterion at constant P and T. The analysis is carried out within the standard Gibbs model with constant [[DeltaH]] and [[DeltaS]]. The central quantities are [[DeltaG]], [[DeltaH]], [[DeltaS]], [[T]] and [[T_inv]].

## Physical model

The ammonia synthesis reaction operates at controlled pressure and temperature. The spontaneity criterion at constant P and T is the sign of [[DeltaG]], calculated using the Gibbs definition. Since [[DeltaH]] is negative and [[DeltaS]] is also negative, the process belongs to the quadrant where spontaneity holds only below the inversion temperature [[T_inv]]: at low temperatures the enthalpic drive (favorable) dominates; at high temperatures the [[T]]·[[DeltaS]] term (unfavorable because [[DeltaS]] is negative) dominates.

## Model justification

The standard Gibbs model is valid because the process is evaluated at constant pressure around 298 K and 700 K, a range over which the tabulated [[DeltaH]] and [[DeltaS]] data for ammonia synthesis are reasonably constant. The model would fail if the process were analyzed above 1500 K, where heat capacities change significantly, or if pressure varied during the process.

## Symbolic solution

Applying the definition of the change in Gibbs free energy:

{{f:definicion_gibbs}}

For the inversion temperature, setting [[DeltaG]] to zero:

{{f:temperatura_inversion}}

## Numerical substitution

**At 298 K:**

Multiplying 298 K by minus 198 J/(mol·K) gives the entropy term: minus 58 996 J/mol (approximately minus 59 000 J/mol). Subtracting that value from [[DeltaH]] (minus 92 000 J/mol): minus 92 000 minus (minus 59 000) gives minus 33 000 J/mol. Therefore [[DeltaG]] at 298 K is approximately minus 33 000 J/mol, i.e., [[DeltaG]] ≈ −33 kJ/mol.

**At 700 K:**

Multiplying 700 K by minus 198 J/(mol·K) gives minus 138 600 J/mol. Subtracting from [[DeltaH]]: minus 92 000 minus (minus 138 600) gives plus 46 600 J/mol. Therefore [[DeltaG]] at 700 K is approximately plus 47 kJ/mol, i.e., [[DeltaG]] ≈ +47 kJ/mol.

**Inversion temperature:**

Dividing [[DeltaH]] by [[DeltaS]]: minus 92 000 J/mol divided by minus 198 J/(mol·K) gives approximately 465 K. Therefore [[T_inv]] ≈ 465 K.

## Dimensional validation

The units of [[DeltaG]] are verified as follows: joules per mole for [[DeltaH]], and kelvin multiplied by joules per kelvin and mole for the [[T]]·[[DeltaS]] term, both yielding J/mol. The difference is dimensionally homogeneous `[M L² T⁻²]` per mole.

For [[T_inv]], the dimension is joules per mole divided by joules per mole and kelvin, yielding kelvin: dimension `[Θ]`, consistent with a temperature.

## Physical interpretation

At 298 K the Gibbs change is negative (approximately minus 33 kJ/mol), indicating that ammonia synthesis is **thermodynamically spontaneous** at room temperature. The enthalpic drive (the exothermicity of the reaction) dominates over the entropic cost of reducing the number of gaseous moles, and the net result is favorable.

At 700 K the situation reverses dramatically: [[DeltaG]] ≈ +47 kJ/mol, indicating the process is **non-spontaneous** at that temperature. The [[T]]·[[DeltaS]] term —which acts with negative sign because [[DeltaS]] is negative— has grown large enough to exceed the exothermicity of the reaction, making ammonia formation thermodynamically unfavorable.

The inversion temperature [[T_inv]] ≈ 465 K marks the exact threshold: below 465 K the process is spontaneous; above it is not. Industrially, the Haber process operates at 400–500 °C (673–773 K), which would be thermodynamically non-spontaneous according to this model. The reason is purely kinetic: at room temperature the reaction is so slow it is not industrially viable, and iron catalysts at elevated temperature are used to accelerate the kinetics at the expense of thermodynamic spontaneity. Equilibrium is shifted toward products by controlling pressure (several hundred atmospheres), which the standard Gibbs model does not account for but significantly modifies the real spontaneity criterion.

If [[DeltaH]] were half as negative (only minus 46 kJ/mol), with the same [[DeltaS]], [[T_inv]] would be only 232 K: the process would be non-spontaneous even at room temperature, and the industrial challenge would be far more severe. This shows that the exothermicity of the reaction is crucial for maintaining the spontaneity window at moderate temperatures.

---

# Real-world example

## Context

The formation of rust (hydrated iron oxide) on steel structures exposed to the outdoors is one of the most costly corrosion phenomena at the industrial scale. Thermodynamic analysis via [[DeltaG]] helps understand why this process occurs spontaneously under ambient conditions and how environmental conditions (temperature, humidity) affect its thermodynamic driving force.

For the simplified oxidation of iron, the data at 298 K are approximately: formation enthalpy change of about minus 265 kJ/mol and entropy change of about minus 70 J/(mol·K). These are magnitudes of the correct order for a qualitative analysis.

## Physical estimation

At 298 K (standard ambient temperature), multiplying 298 K by minus 70 J/(mol·K) gives the entropy term around minus 20 860 J/mol (approximately minus 21 kJ/mol). Subtracting that value from [[DeltaH]] (minus 265 000 J/mol) gives a Gibbs change of approximately minus 265 000 plus 21 000, i.e., [[DeltaG]] ≈ −244 kJ/mol. The value is **large and negative**: iron corrosion is thermodynamically very favorable at room temperature.

The inversion temperature is obtained by dividing minus 265 000 by minus 70, giving approximately 3786 K. This value is far above any practical operating temperature, meaning that at **any physically relevant temperature** (below the melting point of steel, around 1800 K), iron oxidation is always thermodynamically spontaneous: the process can never be reversed by temperature change under normal conditions.

## Interpretation

The [[DeltaG]] analysis reveals that iron corrosion is practically unavoidable from a thermodynamic standpoint: with [[T_inv]] around 3786 K, there is no realistic working temperature at which spontaneous reversal of iron oxide to metallic iron is possible. The only way to regenerate iron is by supplying external energy (electrochemical reduction, blast furnace with carbon), which precisely "pays" for the positive [[DeltaG]] of the reverse process.

From a materials design perspective, this analysis justifies steel protection strategies: coatings (paint, zinc galvanizing) or alloys (stainless steel with chromium) that radically change the values of [[DeltaH]] and [[DeltaS]] for the surface corrosion process, raising [[DeltaG]] toward less negative or even positive values. Zinc coating works precisely because the [[DeltaG]] for zinc oxidation in the presence of iron creates a passivating layer that does not progress; the thermodynamic analysis predicts that superficial protective oxidation is more favored than generalized corrosion of the underlying iron.
