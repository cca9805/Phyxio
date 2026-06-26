# Models — Practical Examples

## Ideal model

The ideal model for practical examples is the reversed Carnot cycle operating between two thermal reservoirs at absolute temperatures [[T_H]] and [[T_C]]. This model provides the [[COP_Carnot]] as the absolute upper efficiency limit. The central simplification is total reversibility: isentropic compression and expansion, isothermal heat exchange with no finite temperature differences. The conserved quantities are total energy (first law) and entropy of the universe (second law as equality). The model allows calculating the ceiling of [[COP_real]] without specifying refrigerant or component details.

## Hypotheses

- Thermal reservoirs have infinite heat capacity and maintain constant temperatures [[T_H]] and [[T_C]] during operation.
- All cycle processes are internally reversible.
- There is no mechanical friction or electrical losses in the compressor.
- Heat exchange is isothermal with infinitesimal temperature difference.
- There are no pressure drops in piping or heat exchangers.

## Quantitative validity domain

For domestic refrigerators with [[T_C]] of 255 K and [[T_H]] of 308 K, the [[COP_Carnot]] is 4.81 while the typical [[COP_real]] ranges from 2 to 3, representing an [[eta_Carnot]] of 40 to 62 %. For geothermal heat pumps with [[T_C]] of 283 K and [[T_H]] of 318 K, the refrigeration [[COP_Carnot]] is 8.1 and the [[COP_real]] between 3.5 and 5. As a quantitative criterion, if [[eta_Carnot]] exceeds 65 %, the input data should be reviewed because it is unlikely that a real system exceeds that fraction.

## Model failure signals

The model fails as a quantitative prediction when irreversibilities are large: compressors with isentropic efficiency below 70 %, heat exchangers with temperature differences greater than 15 K between refrigerant and reservoir, or expansion valves with significant losses. It also fails when reservoir temperatures vary significantly during operation, such as in cyclic defrost systems or air-source heat pumps with rapid weather variations.

## Extended or alternative model

The extended model is the vapor-compression cycle with real refrigerant, which includes superheating in the evaporator, subcooling in the condenser, compression with isentropic efficiency of 70 to 85 %, and isenthalpic expansion through the valve. This model produces COP values between 30 and 60 % of the Carnot COP.

When to switch models: it is advisable to switch to the vapor-compression cycle when real components need to be sized, when specific refrigerants are being evaluated, or when the measured Carnot fraction is significantly below 30 %, indicating that additional factors (leaks, defrosting, fan losses) must be modeled explicitly.

## Operational comparison

| Aspect | Carnot model | Real vapor-compression cycle |
|---|---|---|
| Compression | isentropic | 70 to 85 % isentropic efficiency |
| Heat exchange | isothermal, no difference | finite difference of 5 to 15 K |
| Expansion | isentropic | isenthalpic, irreversible |
| Fluid | ideal gas | real refrigerant with phase change |
| Typical COP | theoretical upper bound | 30 to 60 % of Carnot |
| Use | reference and comparison | real system design |
