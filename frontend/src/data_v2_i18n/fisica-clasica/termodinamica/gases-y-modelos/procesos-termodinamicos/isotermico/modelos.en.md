## Ideal model

The ideal isothermal model describes a perfectly ideal gas in contact with a thermal reservoir of infinite heat capacity, evolving **quasi-statically and reversibly** between two equilibrium states. In this model, temperature [[T]] is strictly constant, the gas obeys the ideal gas equation of state at all times, and the transformation can be represented exactly as a hyperbola in the pressure-volume diagram.

The model ignores internal gas viscosity, turbulence losses, temperature gradients between the gas core and the container walls, and any process irreversibility. The thermal reservoir is modeled as a heat source whose own temperature does not vary, capable of supplying or absorbing heat without altering its thermodynamic state.

## Hypotheses

- The gas obeys the ideal gas equation of state: no molecular volume and no intermolecular interactions.
- The process is **quasi-static**: slow enough for the gas to be in thermodynamic equilibrium at every instant.
- The process is **reversible**: no internal or external irreversibilities.
- The thermal reservoir has infinite heat capacity and an absolutely constant temperature equal to [[T]].
- The system is **closed**: [[n]] is constant throughout the process.
- The container walls are perfectly conducting; there is no thermal resistance to heat flow.

Violating the quasi-static hypothesis is the most frequent failure: if the process is fast, the gas does not follow the hyperbola and the actual work is less than calculated.

## Quantitative validity domain

The ideal isothermal model is a good approximation when gas pressure is less than 10 atm and temperature is more than 50 K above the condensation point. Under these conditions, deviations from Boyle's Law are below 1 % for most diatomic gases such as nitrogen and oxygen.

The characteristic process time must be greater than 10 times the thermal equilibration time of the container with its surroundings for the isothermal approximation to be valid within a 5 % error margin.

At pressures above 100 atm, deviations of the compressibility factor from unity can exceed 10 %, invalidating Boyle's Law. The model also fails at temperatures below 1.5 times the critical temperature of the gas, where intermolecular interactions are significant.

## Model failure signals

- The measured temperature at the end of the process differs from [[T]] by more than 2 %: the process was too fast or there were thermal losses.
- The product [[p2]] times [[V2]] differs from [[p1]] times [[V1]] by more than 5 %: deviations from ideal gas behaviour or real temperature variation.
- The experimentally measured work (for example, via force on the piston and integration) is systematically lower than calculated from the logarithmic formula: the process has irreversibilities.
- The measured pV curve does not match the theoretical hyperbola but has a more "bulging" or "flattened" shape: the gas was not ideal or temperature was not constant.

## Extended or alternative model

For real gases where molecular interactions are significant, the isothermal model can be extended using the **Van der Waals equation of state**. This equation incorporates the molecular volume through parameter b and attraction forces through parameter a. The isothermal work for a Van der Waals gas includes an additional term depending on the volume ratio and molecular density.

For processes with real thermal gradients, the extended model includes heat conduction as a coupled process. In this case the pV hyperbola becomes an intermediate curve between the perfect isotherm and the adiabatic curve, depending on the process speed relative to the thermal equilibration time.

When to switch to the extended model: when pressure exceeds 20 atm, when the gas is heavy polyatomic such as SF6 or CO2 at high pressure, or when process speed exceeds 10 % of the estimated thermal equilibration time.

## Operational comparison

| Aspect | Ideal model | Real or extended model |
|---|---|---|
| Equation of state | pV equals nRT | Van der Waals with parameters a and b |
| pV product | Exactly constant | Constant only approximately |
| Work | Exact logarithmic integral | More complex integral with corrections |
| pV representation | Perfect hyperbola | Distorted hyperbola at high pressures |
| Applicability | Diatomic gases below 10 atm | Real gases and fast processes |

The ideal model is sufficient for secondary school and first-year university problems. The extended model is used in chemical engineering, cryogenics, and high-pressure compressor design.
