## Ideal model

The base model for reversible processes assumes that the **system** can be described by well-defined equilibrium states at every instant of the process (quasi-static) and that all interaction with the **surroundings** occurs through infinitesimal gradients of temperature, pressure, and chemical potential. There are no dissipation sources (friction, turbulence, free mixing) at any point.

The central simplification is that the process can be reversed at each step at no cost: by reversing external conditions, the system traces exactly the same path in reverse, returning system and surroundings to their initial states. The key conserved quantity is [[DeltaS_univ]] = 0.

For cyclic heat engines, the model takes the form of the Carnot cycle: two isotherms (heat exchange with reservoirs at [[T_caliente]] and [[T_frio]]) and two reversible adiabats (isentropic). The efficiency of this ideal cycle is [[eta_Carnot]] = 1 − [[T_frio]]/[[T_caliente]].

## Hypotheses

- **Quasi-static process**: the system is in internal equilibrium at every instant. The process speed is infinitely slow compared to the system's relaxation times.
  - Violation: fast processes (explosions, turbulent expansions) where the system does not reach internal equilibrium between successive steps.

- **No friction**: no mechanical dissipation in pistons, valves, bearings, or in the working fluid.
  - Violation: every real mechanism has friction. Even fluid viscosity generates dissipation.

- **Infinitesimal temperature gradients**: heat is transferred with infinitely small temperature differences between system and reservoir.
  - Violation: every real transfer requires a finite T gradient, which generates entropy.

- **Ideal reservoirs**: the hot and cold sources have infinite heat capacity; their temperature does not change when absorbing or releasing heat.
  - Violation: if sources are finite, their temperature changes during the process and Carnot efficiency varies during the cycle.

- **Closed system**: no mass transfer with the surroundings.
  - Violation: internal combustion engines are open systems with fuel intake and exhaust gas output.

## Quantitative validity domain

The Carnot model is quantitatively exact as an **upper bound**: no real engine can exceed [[eta_Carnot]]. Its usefulness as a direct performance prediction is limited to:

- Processes where irreversibility is negligible (gradients < 1 K, minimal friction): error from ideal < 5%.
- Maximum efficiency estimates to assess whether investing in process improvement is worthwhile.
- Benchmarking: second-law efficiency (eta_real / [[eta_Carnot]]) quantifies the quality of real design.

> [!NOTE]
> Carnot efficiency is not a prediction of real performance: it is a ceiling that reality never reaches. Modern thermal power plants reach 40-60% of [[eta_Carnot]], car engines 25-35%.

The isentropic (reversible adiabatic) model is valid as an approximation when:
- System walls are well insulated (heat losses < 2% of work).
- Internal fluid friction is negligible (moderate Reynolds number, laminar flow).

## Model failure signals

- **Real efficiency > [[eta_Carnot]]**: definite calculation error. The model does not fail; the calculation of real efficiency or reservoir temperatures is incorrect.
- **Significant [[DeltaS_univ]] > 0 for a process described as reversible**: indicates unaccounted irreversibility sources (hidden friction, non-negligible gradients).
- **Working fluid temperature oscillates instead of following a smooth curve**: indicates non-quasi-static process (turbulence, shocks).
- **Second-law efficiency < 0.5**: indicates significant irreversibilities; the reversible model greatly underestimates real losses.

## Extended or alternative model

To overcome the limitations of the ideal reversible model:

- **Endoreversible cycles** (Curzon-Ahlborn): maintain internal cycle reversibility but allow irreversible heat transfer with reservoirs (finite T gradient). The efficiency at maximum power is eta_CA = 1 − sqrt([[T_frio]]/[[T_caliente]]), which predicts real efficiencies much better than Carnot.

- **Exergy analysis with irreversibilities**: the exergy destroyed by each real component (turbine, compressor, heat exchanger) is calculated and subtracted from the reversible maximum.

- **Finite-time thermodynamics** (Andresen, Salamon): optimises cycles with finite time or power constraints, obtaining optimal designs that differ from the ideal Carnot.

The transition to the extended model is justified when:
- Quantitative prediction of real performance is required (not just the upper bound).
- The process has power or time constraints (power plants, engines).
- Thermal gradients are significant (ΔT > 50 K between fluid and reservoir).

## Operational comparison

| Criterion | Reversible model (Carnot) | Endoreversible model (Curzon-Ahlborn) |
|---|---|---|
| **Precision** | Exact upper bound; overestimates real performance | Realistic prediction of efficiency at maximum power |
| **Complexity** | Simple algebraic formula | Requires optimisation with heat flow constraint |
| **Application range** | Universal as reference | Systems with heat transfer at finite ΔT |
| **Main advantage** | Absolute theoretical limit | Achievable practical performance |
| **Main limitation** | Does not predict real performance | Does not include friction or other internal irreversibilities |
| **Typical use** | Teaching, benchmarking, second-law analysis | Preliminary plant design, industrial optimisation |
