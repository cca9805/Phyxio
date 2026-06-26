# Models and Scope

## Ideal model

The ideal model treats contact as Coulomb dry friction. The surface exerts a normal force [[N]], and the material pair is summarized by a constant coefficient [[mu]]. Those two quantities determine [[fr]], which then allows [[Wr]] and [[Edis]] to be computed.

{{f:fuerza_rozamiento_cinetico}}

The model does not describe contact microphysics. Its purpose is to solve macroscopic energy balances when roughness, temperature, and wear can be absorbed into [[mu]].

## Hypotheses

- The body is actually sliding; static sticking without motion is not the case being modeled.
- [[mu]] remains approximately constant over the segment.
- [[N]] is positive and can be determined from geometry and vertical forces.
- [[d]] is accumulated sliding distance.
- The dissipated energy [[Edis]] does not return as useful mechanical energy during the interval.

On a horizontal surface, if there are no other vertical forces and no vertical acceleration, [[N]] = [[m]][[g]] and one may use:

{{f:trabajo_rozamiento_horizontal}}

## Quantitative validity domain

As a school and basic engineering criterion, the model is reasonable for moderate speeds, dry contact or light lubrication, small heating, and changes in [[mu]] smaller than an order of magnitude. If [[mu]] changes from 0.8 to 0.2 during the process, the constant-coefficient model no longer represents the system.

It must also satisfy [[N]] > 0, [[m]] > 0, [[g]] > 0, and [[t]] > 0 when [[Pdis]] is computed. If [[d]] = 0, friction work over that segment is zero even if contact exists.

## Model failure signals

The model begins to fail when hydrodynamic lubrication, dominant rolling, visible wear, intense heating, local melting, intermittent contact, or fluid resistance comparable to dry friction appears.

A practical failure signal is a very high sustained [[Pdis]] without any temperature rise or change in [[mu]]. Another signal is that [[Wr]] cannot explain the difference between [[Emi]] and [[Emf]] because motors, impacts, or additional drag are present.

## Extended or alternative model

When to switch to an alternative model is when the resisting force clearly depends on velocity, temperature, or lubricant-film thickness. Then one may need viscous friction, linear drag, quadratic drag, rolling resistance, or a coupled thermal model.

The energy balance still applies, but it is no longer enough to assign everything to [[fr]] = [[mu]][[N]]. Each non-conservative work contribution must be identified before interpreting [[dEm]].

## Operational comparison

The ideal model answers quickly when the problem asks for energy lost by contact. The extended model is better for real brakes, bearings, hot tires, and lubricated systems. The operational comparison is direct: if [[Edis]] and [[Pdis]] agree with observable behavior, Coulomb friction is useful; if the result contradicts temperature, wear, or speed, the model must change.
