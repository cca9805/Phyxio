# Exam-type example

## Problem statement

At 298 K, the standard chemical potential [[mu_std]] of water vapour is minus 228.6 kJ/mol and that of pure liquid water is also minus 228.6 kJ/mol (they are equal at liquid-vapour equilibrium at the vapour pressure of water, which at 298 K is 0.03169 bar). Calculate the chemical potential [[mu]] of water vapour when its partial pressure is 0.020 bar and determine whether the vapour will spontaneously condense or whether the liquid will evaporate.

## Data

- [[T]] = 298 K
- [[R]] = 8.314 J/(mol·K)
- [[mu_std]] of vapour = minus 228 600 J/mol (reference at 1 bar)
- Partial pressure of vapour: 0.020 bar, so [[a]] is 0.020 in the ideal gas model with a 1 bar reference
- Saturation vapour pressure at 298 K: 0.03169 bar, so the saturation activity is 0.03169

## System definition

The system is water vapour at partial pressure 0.020 bar in contact with liquid water. The central quantity is [[mu]] of the vapour under those conditions, compared with [[mu]] of liquid water at the same temperature to determine the direction of the spontaneous process. The equilibrium condition is equality of [[mu]] in both phases.

Formally, [[mu]] is the partial derivative of Gibbs free energy [[G]] with respect to the amount of component. In this example we do not compute total [[G]], but we use that idea: the phase with higher [[mu]] can reduce [[G]] by transferring matter toward the phase with lower [[mu]].

## Physical model

The ideal gas model is applied for the vapour and the pure liquid model for the liquid water (activity of pure liquid equals 1). The chemical potential of the vapour depends logarithmically on its activity, while that of the pure liquid equals [[mu_std]] of the liquid. The spontaneity criterion is the difference in [[mu]] between the two phases.

## Model justification

The ideal gas model is valid for water vapour at pressures below 0.1 bar, where intermolecular interactions are negligible. The pure liquid approximation with unit activity is valid because no solutes are dissolved. Both conditions are satisfied in this problem.

## Symbolic solution

For vapour at partial pressure p with reference to 1 bar, [[a]] equals p in bars. Then [[mu]] of vapour is [[mu_std]] of vapour plus R·[[T]]·ln([[a]]). At equilibrium, [[mu]] of saturation vapour equals [[mu]] of liquid, which is [[mu_std]] of liquid. Condensation is spontaneous if [[mu]] of vapour at the given pressure is greater than [[mu]] of saturation vapour, that is, if the partial pressure is greater than the saturation pressure.

The formal phase-equilibrium condition used to compare vapour and liquid is:

{{f:equilibrio_fases}}

In this case, [[mu_alfa]] can be read as the component potential in the vapour phase and [[mu_beta]] as the potential of the same component in the liquid phase. The comparison decides whether net transfer increases the amount of vapour or reduces it.

## Numerical substitution

The product of [[R]] and [[T]] is 8.314 times 298, namely 2477.6 J/mol.

Logarithmic term for vapour at 0.020 bar: R·[[T]]·ln(0.020) = 2477.6 times (minus 3.912) = minus 9693 J/mol, approximately minus 9.7 kJ/mol.

The chemical potential of the vapour comes from adding minus 228 600 J/mol and the logarithmic term of minus 9693 J/mol. The final value is approximately minus 238.3 kJ/mol.

For saturation vapour at 0.03169 bar: R·[[T]]·ln(0.03169) = 2477.6 times (minus 3.452) = minus 8554 J/mol.

The chemical potential of saturated vapour comes from adding minus 228 600 J/mol and the logarithmic term of minus 8554 J/mol. The final value is approximately minus 237.2 kJ/mol.

[[mu]] of the vapour at 0.020 bar is minus 238.3 kJ/mol, lower than the saturation value of minus 237.2 kJ/mol. Therefore the vapour does not condense: the spontaneous process is evaporation of the liquid to increase the partial pressure to equilibrium.

## Dimensional validation

R in J/(mol·K) times [[T]] in K times dimensionless logarithm gives J/mol. Added to [[mu_std]] in J/mol, the result is J/mol. Consistent.

## Physical interpretation

The vapour at 0.020 bar is below the saturation pressure (0.0317 bar), so its [[mu]] is more negative than that of vapour in equilibrium with the liquid. This implies that the liquid can lower the total Gibbs free energy [[G]] by transferring molecules to the vapour phase until the partial pressure rises. The [[mu]] difference is approximately 1.1 kJ/mol in favour of evaporation: the liquid will spontaneously evaporate until the partial pressure reaches the saturation value and equilibrium is restored. This [[mu]] difference is the driving force for evaporation under low relative humidity conditions.

---

# Real-world example

## Context

In the pharmaceutical industry, lyophilisation (freeze-drying) removes water from biological drugs while maintaining their activity. The process consists of freezing the product and then reducing the pressure until [[mu]] of the ice is higher than [[mu]] of the water vapour in the chamber, forcing direct sublimation from solid to gas without passing through the liquid phase. The dominant variable is [[mu]] of water in each phase under the operating conditions.

## Physical estimation

At the typical operating temperature of minus 40 °C (233 K), the vapour pressure of ice is approximately 0.013 mbar. For sublimation to occur, the partial pressure of vapour in the chamber must be below 0.013 mbar, so that [[mu]] of vapour in the chamber is lower than [[mu]] of ice, creating a [[mu]] difference that drives mass transfer. The [[mu]] difference between ice and vapour at 0.010 mbar at 233 K is approximately R times 233 times ln(0.013/0.010), which is on the order of 0.5 kJ/mol. This small but consistent difference maintains the process during the hours or days of lyophilisation.

## Interpretation

Control of the lyophilisation process consists of keeping [[mu]] of the vapour in the chamber below [[mu]] of the ice in the product, achieved by maintaining the chamber pressure below the vapour pressure of ice at the product temperature. If the chamber pressure exceeds this value, the [[mu]] difference reverses and the process stops or undesired condensation occurs. Quantitative understanding of [[mu]] allows optimising the chamber pressure and temperature to maximise the sublimation rate without melting the product.
