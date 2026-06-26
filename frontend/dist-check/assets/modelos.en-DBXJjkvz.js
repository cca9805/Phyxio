const e=`## Ideal model

The standard specific heat capacity model treats [[c]] as a material constant, independent of temperature, pressure, and state of aggregation. Under this hypothesis, the relationship between the heat transferred, the mass, and the temperature change is linear, allowing any of the four variables to be calculated directly from the other three.

The model assumes that thermal energy is uniformly distributed among all available modes of molecular motion in the material, which remain accessible and equally active at any temperature. This is the basis of the classical equipartition theorem, whose practical validity at room temperature for solids and liquids is well established.

## Hypotheses

- Specific heat capacity [[c]] is independent of temperature over the range of the process. If the temperature range exceeds about 150–200 K for most solids, this hypothesis may introduce errors above 5 %, especially in metals and polymers.
- Specific heat capacity [[c]] is independent of pressure. For solids and liquids at pressures near atmospheric, pressure dependence is negligible. For gases, the distinction between specific heat capacity at constant pressure and at constant volume is essential.
- No phase change occurs during the process. If temperature crosses the melting or boiling point, [[c]] changes abruptly and the latent heat of the transition also appears.
- The system is homogeneous. If the system contains several materials, the total heat capacity must be computed as the sum of the \`m_i · c_i\` products of each component.
- Mass [[m]] remains constant during the process. In systems with mass loss through evaporation or other causes, the model requires adjustment.

## Quantitative validity domain

For liquid water between 0 °C and 100 °C, the variation of [[c]] is less than 1 % relative to the value of 4186 J/(kg·K). The constant-[[c]] model is fully valid in this range.

For metals such as aluminium, the variation of [[c]] between 20 °C and 300 °C is approximately 15 %, which can be significant in precision engineering calculations. In that range it is recommended to use an average value or to integrate over the tabular dependence.

For ice, [[c]] is approximately 2090 J/(kg·K) between −40 °C and 0 °C, with a variation below 3 %. However, when crossing 0 °C there is a phase change and [[c]] jumps abruptly to the value for liquid water: the constant-[[c]] model cannot be applied across the phase transition.

For ideal monatomic gases such as helium, [[c]] at constant pressure is exactly 5R/2 per mole, equivalent to about 5193 J/(kg·K), and is strictly constant over all temperature ranges. For diatomic gases such as nitrogen, [[c]] depends on temperature because rotational modes are activated above room temperature and vibrational modes at higher temperatures.

The Dulong-Petit law states that for metallic solids at room temperature, [[c]] · M ≈ 25 J/(mol·K), where M is the molar mass. This law predicts the specific heat capacities of most simple metals at room temperature with less than 10 % error.

## Model failure signals

- **Calculated negative specific heat capacity**: indicates a sign error in [[DeltaT]] or [[Q]], not a model failure. [[c]] is always positive for stable materials.
- **Calculated specific heat capacity outside the range of known materials**: if the result falls outside the interval 100–5500 J/(kg·K) for common solids and liquids, a unit error is likely.
- **Large discrepancy between calculated and tabulated value for the material**: if the discrepancy exceeds 10 % under standard conditions, verify whether the process crossed a phase transition or whether the temperature range is too wide for assuming constant [[c]].
- **[[DeltaT]] that includes the melting or boiling point of the material**: in that case the constant-[[c]] model is incomplete and the latent heat of the transition must be added.

## Extended or alternative model

The extended model incorporates the temperature dependence of specific heat capacity: [[c]] is treated as a variable property and heat is accumulated between the thermal limits of the process. For solids, the Debye model describes that variation from absolute zero to room temperature with excellent accuracy, including the low-temperature region where [[c]] grows with the cube of temperature and the classical Dulong-Petit value at high temperature.

For real gases and for solids and liquids over wide temperature ranges, [[c]] values are tabulated as a function of T and interpolated. In this case, the total heat of the process is calculated as the integral of [[m]] · [[c]](T) between the temperature limits, which in practice is approximated as [[m]] multiplied by the average value of [[c]] over the range.

When to switch to the extended model: when the temperature variation exceeds 150 K for metals or 50 K for materials with marked dependence, when the process crosses a phase transition, or when the required precision is better than 5 %.

## Operational comparison

| Aspect | Simple model (constant c) | Extended model (temperature-dependent c) |
|---|---|---|
| Calculation complexity | Direct multiplication | Tabular or numerical integration |
| Typical error for water 0–100 °C | Less than 1 % | Exact reference |
| Typical error for aluminium 20–300 °C | 10–15 % | Less than 2 % |
| Applicability during phase transitions | Does not apply at the transition | Requires separate latent heat |
| Recommended use | Secondary school, estimation engineering | Precision engineering, advanced thermodynamics |
`;export{e as default};
