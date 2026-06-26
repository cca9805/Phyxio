# Models for Kepler's Laws

## Ideal model

The ideal model is the Keplerian two-body problem with a dominant central mass. An orbiting body of mass [[m]] moves around a much more influential mass [[M]], so the trajectory is described as an ellipse with the central mass at one focus. Geometry is summarized by [[a]], [[b]], [[e]], [[r]], and [[theta]], while orbital time is summarized by [[T]] and [[dA_dt]].

In this model, the first law fixes shape, the second law fixes the sweep rhythm, and the third law fixes the time scale. The operational goal is not merely to draw an ellipse, but to know which variable answers which question: [[e]] modifies shape, [[a]] controls period, [[dA_dt]] explains variable speed, and [[mu]] condenses gravitational strength.

## Hypotheses

The central mass is assumed to dominate the motion, and the orbiting body is assumed not to displace the dynamical center appreciably. The effective force is central, atmospheric drag is negligible, there is no continuous thrust, and third-body perturbations remain small during the interval of study.

Units must be coherent. In the absolute third law, [[G]], [[M]], and [[a]] are used in SI to obtain [[T]] in seconds. In the comparative form, [[a1]] and [[a2]] may use any common length unit because only the ratio appears, but [[T1]] and [[T2]] must use the same time unit.

## Quantitative validity domain

As a practical criterion, the Keplerian model is suitable when the accumulated perturbing acceleration is less than about 1% of the central gravitational acceleration during the interval of interest. It is also reasonable if the relative change in [[a]] due to drag or thrust has absolute value below 0.01 per orbit.

For a bound ellipse, [[a]] > 0 and 0 <= [[e]] < 1 are required. If [[e]] approaches 1, the geometric formulas remain valid, but numerical interpretation becomes sensitive near periapsis. If the motion is analyzed over many orbits and [[a]] changes appreciably, the fixed Keplerian model should be replaced by a perturbed model.

## Model failure signals

A clear failure signal is that the observed period no longer keeps a stable relation with [[a]] under the same central mass. Another signal is that the orbital point does not preserve approximately constant areal velocity: if areas swept in equal times differ strongly and measurement error is not responsible, a non-central force or external torque is present.

The model also fails if the orbit decays, precesses rapidly, changes plane, or receives propulsive maneuvers. In such cases, Kepler's laws may remain an instantaneous reference, but they no longer describe the full evolution. The correct diagnosis is that the ideal relations are no longer the main model.

## Extended or alternative model

The extended model introduces perturbations: atmospheric drag for low satellites, lunar and solar influence in high Earth orbits, oblateness of the central body, engine thrust, or relativistic corrections in intense fields. Instead of a fixed ellipse, the model uses orbital elements that evolve with time.

It is appropriate to move to the extended model when the goal is to predict position over many revolutions, analyze reentry, explain measurable precession, or plan maneuvers. In that context, [[a]], [[e]], and [[T]] remain useful, but they are no longer treated as perfect constants.

## Operational comparison

The ideal model is used to estimate periods, compare orbits, and understand why the motion is faster near the focus. It is the first model to choose when the problem asks for physical criterion rather than fine orbital precision. Its advantage is that it separates shape, area, and period clearly.

The perturbed model is used when accumulated small effects matter. It loses simplicity but gains fidelity. The operational decision is straightforward: if the problem asks for the basic structure of the orbit, use Kepler; if it asks for accumulated changes, corrections, or observable deviations, use an extended model.
