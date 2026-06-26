const e=`# Physical Models for the Clausius Statement

## Ideal Model

The ideal model for the Clausius statement is the **two infinite thermal reservoirs** system in thermal contact through a conducting interface. In this model:

- The hot ([[T_A]]) and cold ([[T_B]]) reservoirs maintain constant and immutable temperatures, regardless of the amount of heat [[Q]] transferred.
- Heat flow is **purely conductive**, governed by Fourier's law with constant thermal conductivity.
- There is no **heat accumulation** at the interface: all heat entering one side exits the other instantaneously.
- The process is **quasi-static reversible**, with infinitesimal temperature differences that allow theoretical reversibility.

This model idealizes the real physical situation where reservoirs have infinite heat capacity and transfers are perfectly reversible. It is useful for establishing theoretical limits and understanding the fundamental direction of heat flow without the complications of real irreversible processes.

## Hypotheses

1. **Uniform and constant temperatures**: Each thermal reservoir has spatially homogeneous and temporally constant temperature. This requires infinite heat capacity or energetically inexhaustible reservoirs.

2. **Ideal thermal contact**: The interface between reservoirs allows perfect heat transfer without contact resistance or losses to the external environment.

3. **Steady-state process**: Heat flow rapidly reaches a steady-state regime where the transfer rate is constant.

4. **Absence of external work**: Spontaneous flow occurs without mechanical intervention; only the temperature difference [[DeltaT]] drives the transfer.

5. **Local thermal equilibrium**: Although there is net flow, every point within the reservoirs is in local thermal equilibrium with a well-defined temperature.

## Quantitative Validity Domain

The infinite reservoirs model is valid when:

[[Q]] / ([[C_A]] · [[T_A]]) << 0.01 and [[Q]] / ([[C_B]] · [[T_B]]) << 0.01

Where [[C_A]] and [[C_B]] are the heat capacities of the reservoirs. This means the transferred heat must be less than 1% of the thermal energy content of each reservoir for their temperatures to remain essentially constant.

For a concrete process with temperature difference [[DeltaT]] of 50 K and duration t of 100 s, the model is valid if:

- Thermal conductivity k > 0.1 W/(m·K) (non-insulating materials)
- Characteristic dimension L < 0.1 m (fast transfers)
- Biot number Bi < 0.1 (internal resistance << surface resistance)

## Model Failure Signals

The infinite reservoirs model ceases to be applicable when these signals are observed:

- **Appreciable temperature change**: If [[T_A]] decreases by more than 5% or [[T_B]] increases by more than 5% during the process, the reservoirs are not infinite.

- **Heat accumulation at the interface**: If the contact surface temperature differs significantly from the internal temperatures of the reservoirs, there is unconsidered contact thermal resistance.

- **Non-steady flow**: Temporal oscillations in the heat flow rate indicate transient processes that do not follow the assumed steady-state regime.

- **Dominant radiative transfer**: If the temperature is high (> 500 K) and bodies are separated, radiation may exceed conduction, invalidating the pure conductive model.

- **Non-equilibrium effects**: In extreme gradients (> 10^6 K/m), the concept of local temperature loses validity and non-equilibrium thermal descriptions are required.

## Extended or Alternative Model

The **finite reservoirs with finite heat capacity** model extends the ideal model toward more realistic situations:

- Reservoirs [[C_A]] and [[C_B]] have finite heat capacities, so their temperatures evolve according to [[T]](t) = [[T_0]] ± [[Q]](t) / [[C]].
- Heat flow is transient: [[Q]](t) = [[C_A]] · d[[T_A]]/dt = -[[C_B]] · d[[T_B]]/dt.
- The process continues until thermal equilibrium is reached: [[T_A]](∞) = [[T_B]](∞) = ([[C_A]]·[[T_A0]] + [[C_B]]·[[T_B0]]) / ([[C_A]] + [[C_B]]).

Concrete differences from the ideal model:
- The [[DeltaT]] gradient decreases temporally, reducing the transfer rate.
- The time to reach equilibrium is finite and calculable: τ ~ [[L]]^2 / α (thermal diffusivity).
- The analysis requires differential equations instead of algebraic ones.

Explicit transition: It is recommended to abandon the ideal model and adopt the extended one when [[Q]]_transferred > 0.05 · [[C]]_min · [[T]]_average.

## Operational comparison

| Aspect | Ideal Model (infinite reservoirs) | Extended Model (finite reservoirs) |
|--------|-------------------------------------|-------------------------------------|
| **Temperatures** | Constant [[T_A]], [[T_B]] | Evolving [[T_A]](t), [[T_B]](t) |
| **Equations** | Simple algebraic | Coupled differential |
| **Complexity** | Low | Medium |
| **Precision** | Theoretical limit | Realistic prediction |
| **Calculation time** | Instantaneous | Requires temporal integration |
| **Applications** | Theoretical limits, maximum efficiencies | Real designs, dynamic simulations |
| **Validity** | Small transfers, massive reservoirs | Significant transfers, small systems |

Advantages of the ideal model:
- Mathematical simplicity enabling rapid calculations
- Establishes absolute unimpeachable limits (Carnot, Clausius)
- Easy physical interpretation without transient complications

Limits of the ideal model:
- Does not predict real temporal evolution
- Does not capture thermal accumulation or saturation
- Inapplicable to systems with heat capacities comparable to transferred heat

Advantages of the extended model:
- Predicts quantitative temporal behavior
- Captures real final thermal equilibrium
- Applicable to systems of any scale

Limits of the extended model:
- Requires exact knowledge of heat capacities
- More computationally complex
- May need numerical methods for non-linear cases
`;export{e as default};
