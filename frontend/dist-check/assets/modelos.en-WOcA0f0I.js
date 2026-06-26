const e=`## Ideal model

The standard model of the isochoric process describes an ideal gas enclosed in a perfectly rigid container that exchanges heat with the surroundings while keeping volume constant. In this model mechanical work is exactly zero, the change in internal energy [[DeltaU]] equals the absorbed heat [[Q]], and the heat capacity [[Cv]] is treated as a constant determined by the type of gas (monatomic, diatomic, or triatomic).

The central simplification is that the container does not deform and the gas behaves as an ideal gas, meaning internal energy depends only on temperature. This allows computing [[DeltaU]] without knowing the path of the process, using only the initial and final states. The quantities conserved in the model are [[n]] (amount of substance) and [[V]] (volume); those that change are [[T]], [[p]], [[DeltaU]] and [[Q]].

## Hypotheses

- The container is perfectly rigid: it does not deform under any internal pressure, so [[V]] remains exactly constant throughout the process.
- The gas behaves as an ideal gas: intermolecular forces are negligible and internal energy depends only on [[T]].
- The molar heat capacity [[Cv]] is constant over the temperature range of the problem.
- There are no mass losses: the gas neither escapes nor reacts chemically with the walls.
- The process is quasi-static: intermediate states are equilibrium states, allowing state variables to be used at each instant.

Violating the first hypothesis introduces a non-zero work term and the isochoric model ceases to apply. Violating the second (non-ideal gas) means [[Cv]] depends on [[T]] and the linear relation [[DeltaU]] equal to [[n]] times [[Cv]] times [[DeltaT]] is only an approximation. Violating the fourth (gas leakage) changes [[n]] during the process, completely invalidating the calculation.

## Quantitative validity domain

The ideal isochoric model is valid when gas pressure is below 50 atm, since above that value real gases begin to deviate noticeably from ideal behaviour. For temperatures between 200 K and 1000 K, [[Cv]] remains practically constant for mono- and diatomic gases, with errors below 5 %. At temperatures above 1000 K the vibrational modes of diatomic gas activate and [[Cv]] increases, producing an error greater than 10 % if the constant value is used.

Regarding container rigidity, typical deformation of an industrial steel container at pressures up to 200 bar is less than 0.1 %, producing negligible mechanical work compared to [[DeltaU]]. However, for flexible containers or pressures above 500 bar, volume may change by more than 1 % and the model is no longer strictly applicable.

## Model failure signals

- If the ratio of final to initial pressure does not match the ratio of [[T2]] to [[T1]], there is a deviation from ideal gas behaviour or a mass leak during the process.
- If [[DeltaU]] computed with the linear formula does not match experimentally measured heat by more than 10 %, [[Cv]] has likely varied over the temperature range or the gas is real with significant intermolecular interactions.
- If the container volume is found to have changed slightly at the end of the process (through deformation or thermal expansion of the walls), the real work is not zero and the pure isochoric model overestimates [[DeltaU]].
- If during the process the gas approaches its condensation point or molecular dissociation temperature, the ideal gas model fails completely.

## Extended or alternative model

The extended isochoric model incorporates a temperature-dependent [[Cv]], computed via the statistical theory of active degrees of freedom. For diatomic gases above 800 K, vibrational modes progressively activate and [[Cv]] can reach seven-halves of R instead of five-halves, an increase of up to 40 % in heat capacity.

For real gases, equations of state such as Van der Waals can be used, adding corrections for molecular volume and attractive forces between molecules. In this extended model, [[DeltaU]] is computed by integrating the real heat capacity over the temperature range, and the pressure-temperature relationship is no longer exactly linear.

When to switch to the extended model: when the process involves gases at temperatures above 800 K, when working with heavy gases (CO2, water vapour) where vibrational modes are relevant even at moderate temperatures, or when pressure exceeds 100 atm. Switch to this model when the required precision in [[DeltaU]] is better than 5 %.

## Operational comparison

| Aspect | Ideal isochoric model | Extended model |
|---|---|---|
| [[Cv]] | Constant | Function of [[T]] |
| Precision in [[DeltaU]] | ±5-10 % at moderate range | ±1-2 % at any range |
| Calculation complexity | Simple algebraic product | Numerical integration or tables |
| Validity range | Moderate temperatures, low pressure | High temperatures or real gases |
| Failure signal | Discrepancy in pressure/temperature ratio | Measured variation of [[Cv]] |

The ideal model is sufficient for the vast majority of laboratory and formal education applications. The extended model is necessary in process engineering, high-temperature engine design, and combustion calculations.
`;export{e as default};
