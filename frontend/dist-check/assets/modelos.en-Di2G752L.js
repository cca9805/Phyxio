const e=`## Ideal model

The ideal closed system model assumes that the boundary is perfectly impermeable to matter, that heat [[Q]] and work [[W]] are the only energy transfer mechanisms, and that the system states are completely defined by equilibrium thermodynamic variables. Under these conditions, the first law in its simplest form, [[DeltaU]] equals [[Q]] plus [[W]], applies without additional corrections.

This model conserves the total mass of the system (no molecule crosses the boundary). It ignores surface effects (surface tension, interface energy), field effects (stored magnetic or electrical energy), and any form of work other than the mechanical pressure-volume work and any electrical work explicitly declared. The system is treated as a homogeneous mass whose internal energy is a function of its state variables.

## Hypotheses

- The system boundary is impermeable to all forms of matter, including dissolved gases, ions, and submicroscopic particles. Violating this hypothesis requires including mass flow in the balance, converting the system to an open system.
- The process occurs slowly enough that the system is always in internal thermodynamic equilibrium (quasi-static hypothesis). Violating this hypothesis means state variables are not well defined during the process and the balance becomes an approximation.
- Mechanical work is exclusively pressure-volume work for gases unless electrical, magnetic, or surface work is explicitly included.
- Energy losses by electromagnetic radiation through the boundary are negligible on the timescale of the process, so that all energy exchange can be attributed to [[Q]] and [[W]].

## Quantitative validity domain

The closed system model is valid when the mass flow through the boundary is less than 0.1 % of the total system mass during the process. In practical terms, this means that gas leaks or absorption by wall permeability are negligible on the energy scale of the process.

For the quasi-static model, the quantitative guideline is that the rate of change of the system state must be less than the speed of sound divided by the characteristic dimension of the system, typically corresponding to timescales greater than 1 ms for centimeter-scale laboratory systems. For faster processes such as explosions or shocks, the quasi-static model does not apply and non-equilibrium thermodynamics is required.

For pressure-volume work, the exclusivity condition is that the contribution of other work forms is less than 1 % of the total work. When electrical or magnetic work exceeds this threshold, it must be explicitly included in the balance.

## Model failure signals

The first failure signal is an observable discrepancy between calculated [[DeltaU]] and measured heat plus measured work when both are known. If measured [[DeltaU]] differs from Q plus W by more than 2 %, there is at least one unaccounted energy transfer mechanism.

The second signal is a detectable change in system mass by direct weighing. If the system loses or gains mass during the process, the closed system model is not valid and the open system model must be used.

The third signal appears in systems with intense electromagnetic fields: if the stored magnetic or electric field energy changes significantly, field work must be included in the balance even if pressure-volume work is zero or small.

## Extended or alternative model

When there is mass flow through the boundary (pipes, valves, gas diffusion), the model extends to the open system. The energy balance includes the enthalpy flow of the mass streams, which incorporates both internal energy and the pressure-volume flow energy of the entering or leaving fluid.

When the process is so fast that the system is not in internal equilibrium at any instant (explosions, shock waves), the model extends to non-equilibrium thermodynamics, where state variables are defined locally (not globally for the whole system) and the fluid conservation equations are solved.

When to switch to the open system model: when there is net mass flow through the boundary exceeding 0.5 % of the initial mass per unit time, or when the enthalpy flow change represents more than 5 % of the total energy balance. Transition to the non-equilibrium model when process times are of the same order as the internal relaxation times of the system.

## Operational comparison

| Criterion | Ideal closed system | Open system | Non-equilibrium system |
|---|---|---|---|
| Mass flow | Zero by hypothesis | Possible, with enthalpy flow | Not applicable (continuous field) |
| Balance complexity | Moderate: Q + W | High: Q + W + enthalpy flows | Very high: field equations |
| Well-defined states | Yes, at all times | Yes, at inlets/outlets | Only locally |
| Preferred application | Pistons, batteries, calorimeters | Turbines, compressors, boilers | Explosions, shock waves |
| Typical precision | High for slow processes | High for steady flows | High for ultrafast processes |

The ideal closed model has the greatest didactic value and is the conceptual basis of thermodynamic cycles. Its main limitation is that it does not apply when there is mass exchange, which is the most common case in continuous industrial devices.
`;export{e as default};
