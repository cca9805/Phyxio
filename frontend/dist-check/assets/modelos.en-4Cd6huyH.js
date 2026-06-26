const e=`# Models — Surface Waves

## Ideal model

The ideal model of surface waves in deep water describes small-amplitude linear disturbances on a flat interface between an incompressible, irrotational liquid and a gas of negligible density. In this model, the fluid satisfies Laplace's equation for the velocity potential and the interface dynamics are obtained by applying linearised boundary conditions (kinematic and dynamic) at the equilibrium position of the free surface.

The central result is the dispersion relation linking [[v]], [[g]], [[sigma]], [[rho]] and [[k]]: the phase speed of each harmonic component depends only on [[k]], and the superposition of components with different [[k]] produces dispersion. The total energy of the wave is distributed equally between kinetic energy of the fluid and potential energy (gravitational plus surface).

## Hypotheses

The hypotheses of the ideal model are as follows:

- **Incompressible fluid**: density [[rho]] is constant throughout the fluid. This hypothesis is excellent for liquids and fails for pressure waves in gases.
- **Irrotational fluid**: there is no vorticity within the fluid body; the velocity field derives from a scalar potential. This excludes boundary layer effects and turbulence.
- **Small amplitude**: the vertical displacement of the free surface is much smaller than [[lambda]]. This allows linearisation of the boundary conditions and justifies the superposition principle.
- **Deep water**: the depth is much greater than [[lambda]]. The bottom does not affect fluid motion and the dispersion relation has the form presented.
- **Flat equilibrium interface**: the equilibrium surface is horizontal and atmospheric pressure acts uniformly on it.
- **Negligible gas density**: air density is much smaller than liquid [[rho]]. This hypothesis fails only for very light fluids such as liquid helium.

## Quantitative validity domain

The linear deep-water model is valid under the following conditions, expressed as inequalities between physical magnitudes of the system:

The deep-water condition requires the depth to exceed half of [[lambda]] approximately. For ocean waves with [[lambda]] of 10 m, the minimum depth for model validity is of the order of 5 m. For capillaries with [[lambda]] of 1 mm, any depth greater than 0.5 mm guarantees deep water.

The small-amplitude condition requires the amplitude to be less than one tenth of [[lambda]]. For waves with [[lambda]] of 10 m, this limits the maximum amplitude to about 0.3–1 m before nonlinear effects become significant. For capillaries with [[lambda]] of 1 mm, amplitudes greater than 0.1 mm enter the nonlinear regime.

The critical capillary length separates the two regimes: above approximately 1.7 cm in pure water, the regime is gravitational; below it, the regime is capillary. The combined model is valid throughout the transition, but the irrotational fluid hypothesis may deteriorate near the crest at large amplitudes.

## Model failure signals

The following observations indicate that the linear deep-water model has left its validity domain:

- Wave crests are markedly asymmetric: narrower than the troughs. This indicates nonlinearity (Stokes waves) that the linear model does not capture.
- The wave curves forward and breaks. The breaking point requires the particle velocity at the crest to equal [[v]], a condition far exceeding the small-amplitude hypothesis.
- Waves near the shore visibly slow down as they approach. This indicates shallow water: depth is comparable to [[lambda]] and the bottom exerts effective friction.
- Interference patterns show growing amplitude modulation over time. This may indicate Benjamin-Feir instability, a purely nonlinear effect.
- Capillaries damp out within distances comparable to their wavelength. The viscosity of the liquid produces damping that the inviscid model does not account for.

## Extended or alternative model

When the ideal model fails, hierarchical extensions recover greater accuracy:

**Stokes waves (second order and above)**: include nonlinear corrections to the dispersion relation and to the wave shape. The crest becomes sharper and the trough flatter. The celerity acquires a correction proportional to the square of the amplitude. Applies when the amplitude exceeds one tenth of [[lambda]] but the wave has not yet broken.

**Shallow-water theory**: when the depth is less than one fifth of [[lambda]], the dispersion relation is modified by a hyperbolic tangent function of the product of [[k]] and the depth. In the very shallow water limit, [[v]] depends only on depth and [[g]], not on [[k]]; the wave is non-dispersive in that extreme limit. This model explains the slowing and deformation of tsunamis as they approach the coast.

**Viscous waves**: include dissipation by viscosity, important for capillaries in high-viscosity liquids (oils, polymers). The amplitude decays exponentially with time; the decay rate is proportional to the kinematic viscosity multiplied by the square of [[k]].

**Nonlinear solitary waves (KdV)**: in shallow water, nonlinearity can exactly compensate dispersion, producing stably shaped pulses that propagate without broadening. These solitons are relevant to tsunami physics and to laboratory channel experiments.

## Operational comparison

The following conceptual summary indicates when to switch models:

The linear deep-water model applies when the ratio of amplitude to [[lambda]] is less than 0.1 and the depth exceeds [[lambda]] divided by two. Outside this domain, the first extension to consider is Stokes wave theory if the amplitude is large but the depth is still sufficient; or shallow-water theory if the depth decreases.

Viscosity is irrelevant for [[lambda]] greater than 1 cm in water at room temperature, but becomes the dominant damping factor for capillaries of tenths of a millimetre. In that limit, the ratio between the damping length and [[lambda]] decreases with [[k]] squared.

The transition between gravity and capillary regimes does not require changing the model, but simply recognising which term of the dispersion relation dominates for the [[k]] in question. Using the combined formula whenever the regime is uncertain eliminates this ambiguity.
`;export{e as default};
