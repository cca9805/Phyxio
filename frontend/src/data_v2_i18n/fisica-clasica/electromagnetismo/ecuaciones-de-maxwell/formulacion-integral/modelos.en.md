## Ideal model

The Maxwell integral formulation model is situated within the framework of **macroscopic classical electrodynamics**. Its goal is to describe the global behavior of the electric [[flujo_electrico]] and magnetic [[flujo_magnetico]] fields in the presence of charge [[q_enc]] and current [[corriente_encerrada]] distributions. It is the standard model for the design of circuits, motors, and telecommunications systems where the dimensions L are much larger than atomic scales, fulfilling the quantitative condition L > 10^{-10} meters. This model allows ignoring individual quantum fluctuations of electrons and treating matter as a continuous medium with averaged properties.

## Hypotheses

1. **Continuity of fields**: It is assumed that the fields are integrable functions over the surfaces and contours chosen for physical analysis.
2. **Linearity of vacuum**: The model uses [[epsilon0]] and [[mu0]] assuming linear relationships between sources and fluxes, which is valid in most engineering applications.
3. **Closed boundaries**: It is assumed that the integration surfaces are closed and topologically simple to apply the fundamental theorems of Gauss and Stokes.
4. **Quasi-stationary state**: In many applications, it is assumed that time variations are slow enough for the field to propagate instantaneously through the system.

## Quantitative validity domain

The integral model is extremely robust for technological design, but it meets its limits at the following quantitative boundaries:
- **Atomic limit**: The model stops being accurate for distances smaller than 10^{-10} meters, where the discrete nature of matter invalidates the concept of continuous flux.
- **High-energy regime**: For energy densities above a value of 10^{18} joules per cubic meter, the linearity of vacuum breaks down due to the Schwinger effect.
- **Order of magnitude**: The model is optimal for frequencies below the order of magnitude of 10^{14} hertz. Above this range, interaction with individual electrons requires a photon approach and quantum electrodynamics.

## Model failure signals

- **Charge inconsistency**: If the net flux [[flujo_electrico]] does not correspond to the internal charge variation, the model is omitting the displacement current necessary in dynamic regimes.
- **Non-zero magnetic flux**: A [[flujo_magnetico]] result other than zero indicates a structural failure in the Gauss surface definition or the presence of unobserved magnetic monopoles.
- **Local divergences**: If the field varies abruptly over distances comparable to physical component size, the global model may hide critical local behaviors.
- **Excessive losses**: If the integral energy balance does not close, it is likely that the model is ignoring the electromagnetic radiation emitted by the system.

## Extended or alternative model

When behavior needs to be analyzed at a specific point or when sources have extremely complex geometries without symmetry, it is necessary to make a transition to the differential alternative model of Maxwell's equations. The differential model allows solving fields point by point using numerical methods. Likewise, for nanometric scale effects or in the presence of extreme gravitational fields, one must transition to the extended model of quantum electrodynamics (QED) or general relativity. When to switch to these models depends on whether the scale of interest is comparable to atomic size or the de Broglie wavelength.

## Operational comparison

| Model | Advantage | Limitation |
| :--- | :--- | :--- |
| **Integral (this one)** | Provides fast and measurable global balances. | Requires high symmetry for analytical solutions. |
| **Differential** | Analyzes behavior at every point in space. | High mathematical complexity (PDE). |
| **Numerical (FEM)** | Solves complex real geometries. | Requires high computational capacity. |
| **Relativistic** | Valid for speeds near the speed of light. | Tensorial calculations outside the classical range. |