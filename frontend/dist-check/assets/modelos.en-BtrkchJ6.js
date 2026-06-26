const e=`## Ideal model

The ideal calorimetry model treats the system as perfectly isolated from the surroundings and assumes that all specific heat capacities are constant over the temperature range of the process and that no phase changes occur in any of the bodies. Under these hypotheses, the zero-sum condition for heats is exact and the equilibrium temperature is calculated as the weighted average of initial temperatures with weights equal to the total heat capacities [[m_i]] · [[c_i]].

## Hypotheses

- The system is thermally isolated from the surroundings: there are no heat losses to the calorimeter, the experiment support, or the surrounding air. In practice, this is an approximation that depends on the quality of insulation and the equilibration time.
- The specific heat capacities [[c_i]] are constant over the temperature range of the process. For most common solids and liquids over temperature ranges below 100 K, this hypothesis introduces errors below 5 %.
- No phase changes occur in any body during the process. If any body reaches its melting or boiling point on its way to [[T_eq]], the ideal model fails and must be extended.
- The calorimeter vessel itself does not absorb significant heat. This hypothesis is reasonable only if the calorimeter has thick expanded polystyrene or vacuum walls, with a total heat capacity much smaller than that of the bodies being studied.
- The bodies of the system are homogeneous and reach a uniform temperature at the end of the process. Internal temperature gradients within each body are neglected.

## Quantitative validity domain

For laboratory experiments with water and metals at room temperature (15–95 °C), the ideal model is a good approximation with error below 5 % in the calculated [[T_eq]], provided that:

The equilibration time exceeds one minute for standard laboratory systems (100–500 g of material).

Calorimeter losses are estimated at less than 3 % of the total energy exchanged, which requires using polystyrene or vacuum calorimeters and completing the experiment in less than 5 minutes.

The specific heat capacities of the materials are taken from room-temperature tables, which is adequate for temperature ranges below 50 K for metals and 80 K for water.

The error introduced by ignoring the calorimeter is typically 2–8 % for standard aluminum laboratory calorimeters (water equivalent of about 20–50 g of water).

## Model failure signals

- **Measured [[T_eq]] outside the initial range (T_min, T_max)**: indicates losses to the surroundings or a systematic experimental error, not a violation of energy conservation.
- **The sum of the [[Q_i]] computed with the measured [[T_eq]] is not zero**: indicates the calorimeter's heat is not negligible or there are uncorrected losses to the surroundings.
- **Calculated [[c_i]] of a material differs by more than 10 % from the tabulated value**: indicates that one of the model's hypotheses fails (losses, partial phase change, unit error, or T-dependent [[c_i]] in the tested range).
- **The process involves a phase change**: if any body changes phase during the experiment, the equilibrium temperature may be fixed at the transition temperature while part of the material completes the phase change, and the simple weighted-average model for [[T_eq]] fails.

## Extended or alternative model

The first extension level incorporates the heat absorbed by the calorimeter vessel itself, characterized by its water equivalent. This equivalent is determined experimentally in a prior calibration and is added as an additional body to the energy balance. This adjustment reduces the systematic error of the experiment from 5–8 % to less than 1 % under careful laboratory conditions.

The second extension level incorporates temperature-dependent specific heat capacities, [[c_i]](T), and computes the heat of each body as the integral of [[m_i]] · [[c_i]](T) over the temperature range. This level is necessary when temperature ranges exceed 150 K for metals or when precision better than 2 % is required.

The third level includes phase changes. In that case the process is divided into stages: sensible heat segments with constant [[c_i]], separated by latent heat segments at fixed temperature. The zero-sum condition for heats is applied globally to the sum of all contributions from all stages.

When to switch to the extended model: when the required precision exceeds 5 %, when working with materials whose [[c_i]] varies significantly with T, when temperature ranges include phase transitions, or when the calorimeter has a non-negligible water equivalent (above 10 % of the total water mass in the experiment).

## Operational comparison

| Aspect | Ideal model | Model with calorimeter correction | Model with phase change |
|---|---|---|---|
| [[T_eq]] calculation | Simple weighted average | Weighted average with additional water equivalent | Division into stages |
| Typical error in standard lab | 5–10 % | Less than 2 % | Depends on the stage |
| When to use | Secondary school, quick estimates | Precision laboratory | Multi-phase processes |
| Required variables | [[m_i]], [[c_i]], initial temperature | + calorimeter water equivalent | + latent heats |
`;export{e as default};
