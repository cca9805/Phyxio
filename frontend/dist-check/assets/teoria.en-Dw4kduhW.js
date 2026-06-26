const e=`# Tides and Perturbations

## Conceptual context

A tide is not merely the attraction of one body by another. If every point of Earth experienced exactly the same acceleration toward the Moon, the planet would fall as a single particle and no internal deformation would appear. A tide exists because the external gravitational field is not uniform: the near side, the center, and the far side experience slightly different accelerations. That spatial difference is the central physical idea of this leaf.

Orbital perturbations extend the same reasoning. An ideal two-body orbit is a first approximation, but a real satellite also feels third bodies, planetary oblateness, radiation pressure, or irregular mass distributions. The important question is not whether those actions exist, but whether their scale is small compared with the central acceleration [[ac]] and whether they can accumulate over many revolutions.

## 🟢 Essential level

A tide measures how much gravitational attraction changes inside an extended body. The perturbing mass [[M]] pulls more strongly on the near side than on the far side, and that difference produces stretching, ocean bulges, satellite deformation, or internal stress. The magnitude [[am]] is not the total gravity of the perturber; it is the differential part left after comparing points separated by a scale comparable to [[R]].

The distance [[d]] is decisive. Ordinary gravitational force decreases with the square of distance, but a tide depends on how that force changes while moving across the body. Therefore tidal attenuation is even faster. A very massive body can produce a weaker tide than a closer lighter body if geometry favors the closer one. This is why the Moon dominates many terrestrial tides even though the Sun is vastly more massive.

An orbital perturbation is identified by comparing a secondary acceleration [[ap]] with the central acceleration [[ac]]. If the parameter [[eps]] is very small, the main trajectory remains recognizable and the perturbation can be treated as a correction. If [[eps]] is no longer small, the two-body model is no longer an adequate description and one must move to numerical integration or a multi-body model.

## 🔵 Formal level

The first-order tidal acceleration uses the constant [[G]], the perturbing mass [[M]], the affected body's radius [[R]], and the center-to-center distance [[d]]. Its expression as a differential scale is:

{{f:aceleracion_mareal}}

This relation contains the main didactic criterion: doubling [[M]] doubles the tide, doubling [[R]] also doubles it, but doubling [[d]] reduces it to one eighth. The cubic dependence separates strong gravitational force from strong tidal effect.

To decide whether a secondary action may be treated as a perturbation, one introduces the dimensionless ratio:

{{f:parametro_perturbativo}}

If [[eps]] is much smaller than one, the central acceleration [[ac]] sets the dominant dynamics and [[ap]] can be studied as a correction. If [[eps]] approaches one, there is no clear hierarchy between main motion and perturbation.

When two perturbers act on the same affected body, a relative relation is often the cleanest tool:

{{f:comparacion_perturbadores}}

Here [[M1]], [[M2]], [[d1]], [[d2]], [[am1]], and [[am2]] separate the mass effect from the distance effect. The comparison is especially useful for Sun-Moon analysis, Jupiter's satellites, planetary rings, and resonant nearby bodies.

When dissipative deformation is considered, a rotational scale appears:

{{f:torque_mareal_conceptual}}

This is not a closed direct-computation formula; it states that a tidal bulge with lever arm and phase lag can exert a torque [[tau]]. Quantification requires elasticity, internal viscosity, geometry, and the phase of the deformation.

The complete description of a perturbed orbit also requires vector superposition:

{{f:aceleracion_total_conceptual}}

This relation prevents a common error: one cannot simply add magnitudes. The direction of each perturbation changes with orbital position, so small actions can reinforce one another, partially cancel, or accumulate phase changes.

## 🔴 Structural level

The first-order tidal model assumes that the affected body is small compared with the distance to the perturber. Physically, [[R]] must be much smaller than [[d]]. If that condition fails, the gradient is no longer well represented by a single scale and the full field must be computed point by point. The model also assumes that the affected body does not significantly alter the perturber's trajectory during the analyzed interval.

The second structural condition is the distinction between instantaneous cause and accumulated effect. A tiny [[am]] may be irrelevant during a short fall and still dominate the rotational evolution of a moon over millions of years. In tidal problems one must not judge only the instantaneous value; one must ask whether the action repeats with similar phase, whether dissipation is present, and whether the system has resonances.

The third condition is vectorial. The parameter [[eps]] gives a scale, but by itself it does not provide the direction of [[ap]]. To predict precession, eccentricity, or orbital energy transfer, geometry is required. This is why the leaf combines scalar formulae for order-of-magnitude estimates with qualitative reading of directions and accumulation.

## Deep physical interpretation

Tides show that a gravitational field is not exhausted by its local value. Two nearby observers may accelerate almost equally and still experience a difference sufficient to stretch an ocean or heat a satellite's interior. That difference is small at each point, but when organized on planetary scale it creates macroscopic patterns.

Perturbation physics teaches hierarchical reasoning. First one identifies the dominant motion, then quantifies the correction, and finally decides whether that correction is negligible, cumulative, or destructive for the simple model. This reasoning appears in celestial mechanics, space navigation, planetary rings, artificial satellite stability, and the evolution of multiple-star systems.

## Order of magnitude

On Earth, typical lunar tidal accelerations are of the order of microaccelerations compared with surface gravity. This smallness explains why we do not feel tides as a direct everyday force. However, acting on whole oceans and repeating every day, they produce measurable heights, currents, and dissipation.

For satellites close to giant planets, the same reasoning changes scale. A large [[R]], a relatively small [[d]], and an enormous perturbing mass [[M]] can generate internal heating. Io is the classical example: it does not need an extraordinary radioactive source to show intense volcanism; tides and orbital resonances supply mechanical energy that is eventually dissipated.

## Personalized resolution method

The first step is to decide which body is affected and which body is the perturber. Then assign [[M]], [[R]], and [[d]] in SI units and compute a scale [[am]]. The result must be read as a difference in acceleration, not as total gravity. If the problem compares two perturbers, use [[M1]], [[M2]], [[d1]], and [[d2]] to avoid repeated calculations.

The second step is to compare the perturbation with the dominant dynamics. For an orbit, estimate [[ac]] and obtain [[eps]] from the secondary acceleration [[ap]]. If the ratio is small, the model of central orbit plus perturbation is meaningful. If it is not, the answer must state that the first-order approximation is insufficient.

The third step is to interpret direction, accumulation, and limits. A transverse perturbation changes orbital phase; a radial one modifies energy or eccentricity; a tide with phase lag can generate torque [[tau]]. In every case the solution should end with a physical statement, not only a number.

## Special cases and extended example

If two perturbers have very different masses, the dominant one cannot be chosen by looking only at [[M1]] and [[M2]]. The correct comparison must include [[d1]] and [[d2]] cubed. This is one of the best situations for detecting real understanding: a mass-only argument gives the wrong tidal prediction.

If the affected body is nearly point-like, [[R]] makes internal tides negligible even if the global acceleration is large. A small satellite can therefore move in a strong gravitational field without extreme deformation if the gradient over its own size is moderate.

If the system has dissipation, the effect is no longer purely geometric. The deformation does not point exactly toward the perturber, a phase lag appears, and angular momentum can be transferred. Then [[tau]] becomes the conceptual magnitude connecting tides with rotational synchronization, orbital recession, or internal heating.

## Real student questions

Why does the Sun not always dominate tides if it has so much more mass? Because the tide depends not only on mass, but on the variation of the field across the affected body. Distance enters with a very strong power and can compensate for an enormous mass difference.

Can a small perturbation change a real orbit? Yes, if it acts for a long time or appears in resonance with orbital motion. The smallness of [[eps]] permits approximation, but it does not automatically authorize ignoring accumulated effects.

Does tidal acceleration always point toward the perturber? Not in a simple way. A tide describes differences of acceleration inside a body; it produces stretching in one direction and relative compression in others. Advanced problems require a tensor or vector description.

## Cross-cutting connections and study paths

This leaf connects with gravitational field because a tide is a spatial reading of the field, not only its value at one point. It also connects with orbital energy because perturbations can transfer energy, modify eccentricity, or heat bodies through internal dissipation.

After mastering this topic, it is natural to study orbital resonances, satellite stability, Roche limits, and three-body dynamics. In all of those topics the same question appears: which part of the motion is central, which part is perturbation, and when does the perturbation stop being small?

## Final synthesis

Understanding tides and perturbations means moving from point-mass gravitation to gravitation with extension, gradient, scale, and temporal accumulation. The goal is not to memorize an isolated expression, but to decide when an external attraction deforms, corrects an orbit, or forces us to abandon the ideal model.
`;export{e as default};
