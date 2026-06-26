## Ideal model

The ideal phase change model treats the process as isothermal (temperature exactly constant and equal to [[T_trans]]) and at constant pressure, with constant specific latent heat [[L]] independent of temperature. Under these hypotheses, the total heat exchanged during a complete transition of mass [[m]] is exactly total latent heat is proportional to [[m]] and [[L]], and during the transition temperature does not vary at all.

## Hypotheses

- The process occurs at constant pressure. In laboratory conditions at atmospheric pressure, this hypothesis is always valid for melting of solids and boiling of liquids in open containers.
- Temperature remains constant and equal to [[T_trans]] throughout the entire transition. This is thermodynamically exact for pure substances in equilibrium; in mixtures or solutions, [[T_trans]] may vary during the transition (boiling at variable temperature of solutions).
- The specific latent heat [[L]] is constant during the transition and does not depend on temperature or pressure (within the standard range). For L_f, this hypothesis is excellent. For L_v, it is good at pressures close to standard but fails at very different pressures.
- The complete transition of the entire mass [[m]] takes place, without partial transition. If available energy is insufficient, the model applies to the mass that does complete the transition.
- Surface effects and internal temperature gradients within the transitioning material are neglected. Valid for small samples with good thermal conductivity.

## Quantitative validity domain

For water at standard pressure (101 325 Pa):

For fusion, the tabulated value for water varies by less than 0.5 percent over ordinary laboratory pressures.

For vaporization, the water value changes noticeably with pressure and approaches zero near the critical point; use a pressure-specific table in high-pressure applications.

For metals in melting: L_f varies by less than 2 % over the relevant industrial pressure ranges.

The hypothesis of constant temperature during the transition is exact for pure substances. In aqueous solutions, the boiling point rises with solute concentration (boiling-point elevation) and the transition may not occur at strictly constant temperature.

## Model failure signals

- **Temperature not constant during phase change in the experimental T vs. time graph**: in solutions or mixtures, [[T_trans]] varies during the transition. The model of constant [[L]] and fixed [[T_trans]] does not apply directly.
- **L_v very different from the tabulated value at standard pressure**: if the process occurs at a pressure very different from 1 atm (autoclaves, high-pressure systems), L_v must be taken at the operating pressure, not the standard one.
- **Significant temperature gradients inside the sample**: in large samples or those with low thermal conductivity, the transition is not simultaneous throughout the material. The model assumes uniformity; in practice some regions may have already completed the transition while others have not.
- **Process at variable pressure**: in closed systems under heating, pressure rises with temperature. In that case, both [[T_trans]] and [[L]] vary during the process and the constant-value model fails.

## Extended or alternative model

The first extension level incorporates the dependence of L_v on temperature and pressure using the Clausius-Clapeyron equation: the Clausius-Clapeyron relation for ideal gases. This level is necessary when the process occurs at pressures differing from standard by more than 20 %.

The second level includes the variation of the specific heat capacity c_i of each phase with temperature, relevant for processes with thermal ranges above 200 K.

The third level handles partial transitions: when available energy is insufficient to complete the transition of the entire mass, the resulting state equation is a two-phase equilibrium. The fraction of mass that completes the transition is the partial changed mass from available energy divided by [[L]] and the system remains at [[T_trans]] indefinitely (without external heat supply).

When to switch to the extended model: when working with mixtures rather than pure substances, when operating pressure differs by more than 20 % from standard, or when precision above 5 % is required in [[Q_lat]] for vaporization at high temperature.

## Operational comparison

| Aspect | Ideal model | Model with variable L(T,P) | Partial transition model |
|---|---|---|---|
| L | Constant tabulated | Function of T and P | Constant, applied to m_partial |
| [[T_trans]] | Constant | Constant for pure substance | Constant: [[T_trans]] of the two-phase equilibrium |
| When to use | Secondary, A-level, first estimate | Process engineering at high P | Calorimetry problems with limited energy |
| Typical error | Below 5 % for water at standard P | Below 1 % | Exact if Q_available is well known |




