## Ideal model

The standard enthalpy model assumes that [[DeltaH]] is independent of temperature over the range of interest. Under this hypothesis, [[DeltaH]] computed at 298 K from standard enthalpies of formation is valid at any problem temperature. This model is used in virtually all introductory thermodynamics courses and in quick chemical engineering calculations.

The model operates directly with Hess's law: the total [[DeltaH]] of a process is the algebraic sum of the [[DeltaH]] values of the steps, all at the same constant pressure. It requires no knowledge of the actual path or intermediate states, only the initial and final states.

## Hypotheses

The constant-[[DeltaH]] model rests on the following hypotheses:

- Pressure remains constant throughout the process (strict isobaric condition).
- Heat capacities of reactants and products are equal, so their difference is zero and [[DeltaH]] does not vary with [[T]].
- The system is in thermodynamic equilibrium at the initial and final states.
- No phase changes occur that are not accounted for in the Hess cycle.
- Tabulated enthalpies of formation correspond exactly to the species and states of aggregation in the problem.

## Quantitative validity domain

The model is accurate when the temperature range does not exceed 50–100 K from 298 K and when the heat capacities of reactants and products are similar. For reactions with net gas production or consumption, the expansion work correction can be significant, but the standard model neglects it as a first approximation.

When the [[T]] range exceeds 200 K or compounds with very different heat capacities are involved (for example, metals versus diatomic gases), the model error can exceed 5–10 % and the Kirchhoff correction is recommended.

## Model failure signals

The constant-[[DeltaH]] model fails or produces unreliable results when:

- The process spans a temperature range exceeding 200 K from the standard reference state.
- A species undergoes a phase change (melting, vaporisation) within the temperature range, introducing a discontinuity in [[DeltaH]] that the flat model does not capture.
- Heat capacities of reactants and products differ significantly (more than 20 % difference between product and reactant groups).
- The process occurs at pressures very different from 1 bar, where expansion work terms are no longer negligible for real gases.

## Extended or alternative model

Kirchhoff's law extends the model by including the dependence of [[DeltaH]] on [[T]] through the difference in constant-pressure heat capacities between products and reactants. The correction is obtained by integrating that difference between the reference temperature and the process temperature.

For real gases at high pressure, the model must incorporate non-ideality terms in compressibility factors, modifying the expansion work contribution. In multi-phase or heterogeneous systems, interfacial enthalpies and enthalpies of mixing must be added to the standard Hess cycle.

## Operational comparison

| Criterion | Standard model (constant T) | Extended model (Kirchhoff) |
|---|---|---|
| Valid T range | Up to 100 K variation | Any range with Cp data |
| Required data | Standard enthalpies of formation | Enthalpies of formation + heat capacities vs T |
| Calculation complexity | Direct algebraic sum | Numerical or analytical integration |
| Typical accuracy | Sufficient for introductory chemistry and engineering | Required for industrial design and high-temperature processes |
| Main application | Hess cycles, reaction heat computation | High-temperature reactors, industrial furnaces |
