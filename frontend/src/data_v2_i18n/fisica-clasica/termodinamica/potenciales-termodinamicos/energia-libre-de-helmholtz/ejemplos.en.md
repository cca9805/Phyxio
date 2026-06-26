# Exam-type example

## Problem statement

One mole of water vapor is introduced into a rigid stainless steel vessel thermostatted at constant temperature. It is desired to evaluate whether partial vapor condensation is thermodynamically favorable under two temperature conditions. Thermodynamic data for the vapor-liquid transition are:

- Internal energy change: minus 41 000 J per mole of condensed water
- Entropy change: minus 109 J per kelvin and mole

Determine the Helmholtz free energy change at 350 K and 400 K, calculate the inversion temperature, and physically interpret which regime favors condensation in the confined vessel.

## Data

- Internal energy change: minus 41 000 J/mol
- Entropy change: minus 109 J/(mol·K)
- First evaluation temperature: 350 K
- Second evaluation temperature: 400 K

## System definition

The system is one mole of water in vapor-liquid transition inside a fixed-volume thermostatted vessel. Work is done in the standard Helmholtz model with constant [[DeltaU]] and [[DeltaS]]. Central magnitudes are [[DeltaA]], [[DeltaU]], [[DeltaS]], [[T]], and [[T_inv]].

## Physical model

Vapor condensation in a rigid vessel operates at controlled volume and temperature. The spontaneity criterion at constant V and T is the sign of [[DeltaA]], calculated via the Helmholtz definition. Since [[DeltaU]] is negative and [[DeltaS]] is also negative, the process belongs to the quadrant where spontaneity is maintained only below the inversion temperature [[T_inv]]: at low temperatures the energetic drive dominates (favorable to condensation); at high temperatures the [[T]]·[[DeltaS]] term dominates (unfavorable because [[DeltaS]] is negative, favoring vapor).

## Model justification

The standard Helmholtz model is valid because the vessel is rigid (constant volume) and the process is evaluated around 350 K and 400 K, a range where tabulated [[DeltaU]] and [[DeltaS]] data are reasonably constant for water condensation. The model would cease to be valid if internal pressure varied enough to deform the vessel or if the process were analyzed above 500 K with molecular dissociation.

## Symbolic solution

Applying the definition of Helmholtz free energy change:

{{f:definicion_helmholtz}}

For the inversion temperature, imposing zero [[DeltaA]]:

{{f:temperatura_inversion}}

## Numerical substitution

**At 350 K:**

Multiplying 350 K by minus 109 J/(mol·K) gives the entropic term: minus 38 150 J/mol. Subtracting that from [[DeltaU]] (minus 41 000 J/mol): minus 41 000 minus (minus 38 150) gives minus 2 850 J/mol. Therefore [[DeltaA]] at 350 K is approximately minus 2.9 kJ/mol, i.e., [[DeltaA]] ≈ −2.9 kJ/mol.

**At 400 K:**

Multiplying 400 K by minus 109 J/(mol·K) gives minus 43 600 J/mol. Subtracting from [[DeltaU]]: minus 41 000 minus (minus 43 600) gives plus 2 600 J/mol. Therefore [[DeltaA]] at 400 K is approximately plus 2.6 kJ/mol, i.e., [[DeltaA]] ≈ +2.6 kJ/mol.

**Inversion temperature:**

Dividing [[DeltaU]] by [[DeltaS]]: minus 41 000 J/mol divided by minus 109 J/(mol·K) gives approximately 376 K. Therefore [[T_inv]] ≈ 376 K.

## Dimensional validation

[[DeltaA]] units are verified as follows: joules per mole for [[DeltaU]], and kelvin multiplied by joules per kelvin and mole for the [[T]]·[[DeltaS]] term, both yielding J/mol. The difference is dimensionally homogeneous `[M L² T⁻²]` per mole.

For [[T_inv]], the dimension is joules per mole divided by joules per mole and kelvin, yielding kelvin: dimension `[Θ]`, consistent with a temperature.

## Physical interpretation

At 350 K the Helmholtz change is negative (approximately minus 2.9 kJ/mol), indicating that **partial vapor condensation is thermodynamically spontaneous** in the rigid vessel at that temperature. The energetic drive of releasing internal energy when passing from vapor to liquid dominates over the entropic cost of reducing molecular disorder.

At 400 K the situation reverses: [[DeltaA]] ≈ +2.6 kJ/mol indicates condensation is **not spontaneous** at that temperature in the confined vessel. The [[T]]·[[DeltaS]] term —acting with negative sign because [[DeltaS]] is negative— has grown enough to exceed internal energy release, making condensation unfavorable. Vapor is the thermodynamically preferred phase.

The inversion temperature [[T_inv]] ≈ 376 K marks the exact threshold: below 376 K condensation is spontaneous; above it, it is not. This value is close to the atmospheric boiling point (373 K), which is physically coherent because in a partially filled vessel vapor pressure approximates saturation pressure.

If the internal energy change were only half as negative (minus 20 500 J/mol), keeping the same [[DeltaS]], [[T_inv]] would be only 188 K: condensation would be non-spontaneous already at 350 K. This shows that the magnitude of internal energy release is crucial for maintaining the spontaneity window at moderate temperatures in confined vessels.

---

# Real-world example

## Context

Porous materials such as activated carbon or zeolites are used to capture carbon dioxide from industrial gas streams in fixed-volume adsorption vessels. Thermodynamic analysis via [[DeltaA]] explains why adsorption occurs spontaneously at ambient temperature and how adsorbent regeneration temperature relates to [[T_inv]].

For CO₂ adsorption on zeolite 13X at 298 K, approximate data are: adsorption internal energy change of about minus 35 kJ/mol and entropy change of about minus 95 J/(mol·K). These magnitudes are of the correct order for qualitative analysis in a rigid adsorption vessel.

## Physical estimation

At 298 K (ambient temperature), multiplying 298 K by minus 95 J/(mol·K) gives the entropic term around minus 28 310 J/mol (approximately minus 28.3 kJ/mol). Subtracting that from [[DeltaU]] (minus 35 000 J/mol) gives a Helmholtz change of approximately minus 35 000 plus 28 300, i.e., [[DeltaA]] ≈ −6.7 kJ/mol. The value is **moderately negative**: CO₂ adsorption is thermodynamically favorable in the confined vessel at ambient temperature.

The inversion temperature is obtained by dividing minus 35 000 by minus 95, giving approximately 368 K. Above 368 K, adsorption ceases to be spontaneous and CO₂ desorbs: this is precisely the principle of **thermal regeneration** of the adsorbent, performed by heating the rigid vessel above [[T_inv]].

## Interpretation

[[DeltaA]] analysis reveals that CO₂ capture in zeolites is thermodynamically viable at ambient temperature thanks to internal energy release when gas bonds form with the porous framework, compensating for entropy loss as gas passes from free phase to adsorbed phase. Regeneration temperature must exceed [[T_inv]] ≈ 368 K to reverse spontaneity and release captured CO₂.

From equipment design perspective, this analysis justifies the adsorption-regeneration cycle: adsorb at ambient temperature (where [[DeltaA]] is negative) and regenerate at 100–150 °C (where [[DeltaA]] becomes positive and desorption is spontaneous). Regeneration energy cost is precisely the work needed to "pay" the positive [[DeltaA]] of desorption, which Helmholtz analysis quantifies directly.
