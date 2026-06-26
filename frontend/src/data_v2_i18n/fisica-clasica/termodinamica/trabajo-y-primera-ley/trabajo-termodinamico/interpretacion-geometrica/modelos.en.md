## Ideal model

The standard model of geometric interpretation treats the p-V diagram as a continuous space where each point is a well-defined equilibrium state of the gas. Paths are smooth (differentiable) curves connecting equilibrium states through a continuous succession of intermediate states. Under this hypothesis, work is exactly the area under the curve, with no corrections.

The four standard process types have canonical representations: horizontal line (isobaric), vertical line (isochoric), hyperbola (isothermal) and polytropic curve with exponent γ (adiabatic).

## Hypotheses

The model rests on the following hypotheses:

- The process is quasi-static: the system remains in thermodynamic equilibrium at every instant.
- [[presion]] is a continuous and well-defined function of volume along the path.
- There is no internal dissipation (friction, turbulence, internal heat conduction).
- The system is closed and homogeneous.
- The diagram axes are linear and the scales allow the area to be read accurately.

## Quantitative validity domain

The model is valid for slow processes in homogeneous gaseous systems. "Slow" means the timescale of the process is much longer than the gas relaxation time towards equilibrium, which for gases at room temperature is on the order of microseconds. For virtually all laboratory processes and many industrial ones, this condition is satisfied.

The model fails quantitatively when the process involves internal pressure or temperature gradients (sonic flow, shock waves, rapid combustion). In those cases, pressure is not uniform and no single p value defines the system state at each instant.

## Model failure signals

The model fails when:

- The process occurs in a fraction of a second and the gas has no time to homogenise.
- The p-V diagram shows two points (initial and final states) but no continuous curve between them.
- Work computed from the area differs significantly from experimentally measured work.
- The process involves phase changes or rapid chemical reactions within the system.

## Extended or alternative model

For processes with moderate irreversibilities, a **generalised polytropic model** can be used with an adjustable exponent n such that p·Vⁿ remains constant throughout the process. A value of n equal to unity corresponds to the isothermal process and n equal to γ corresponds to the adiabatic. Real engine processes are approximated with n between 1.2 and 1.4.

For fully irreversible processes, work is estimated using the constant external surroundings pressure as a lower bound for the actual expansion work: [[trabajo_termodinamico]] = p_ext·ΔV.

When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.

## Operational comparison

| Criterion | Ideal quasi-static model | Polytropic model | Irreversible model (constant p_ext) |
|---|---|---|---|
| p-V representation | Smooth continuous curve | p·Vⁿ = const curve | Only initial and final states (no curve) |
| Computed work | Area under exact curve | Analytical area under p·Vⁿ = const | p_ext·ΔV |
| Validity | Quasi-static processes | Slow real processes with losses | Rapid irreversible expansions |
| Typical application | Analysis of theoretical cycles | Real engines, compressors | Chemical reactions at constant pressure |