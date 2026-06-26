# Physical models

## Ideal model

The ideal model is the conservative Keplerian two-body problem: a central mass [[M]] dominates the field and a satellite of mass [[m]] moves without drag, thrust, or significant external perturbations. In that framework total mechanical energy [[E]] is conserved and classifies the trajectory through its sign.

The reading may be made with total energy or with specific energy [[eps]]. The specific form is especially clean because it removes [[m]] and describes the orbital state per unit mass. Thus two satellites of different mass in the same state around the same [[M]] share the same energetic classification.

## Hypotheses

The model assumes potential energy equal to zero at infinity. With that convention, [[U]] is negative for any finite distance [[r]], [[K]] is positive, and [[E]] results from adding both. It also assumes that [[r]] is positive, [[v]] is a non-negative magnitude, and the central mass dominates the orbital object.

When relations involving [[a]] are used, a bound Keplerian orbit is assumed. In a circular orbit [[a]] coincides with [[r]], but in an ellipse it does not. This hypothesis is essential: applying a circular formula to an arbitrary point of an elliptical orbit mixes instantaneous state with a global orbital parameter.

## Quantitative validity domain

As a practical criterion, the two-body model is adequate if perturbing accelerations are at least 100 times smaller than the central acceleration during the studied interval, or if the required accuracy tolerates that approximation. For energy classification, [[eps]] < 0 indicates a bound orbit, [[eps]] = 0 represents ideal escape threshold, and [[eps]] > 0 represents an open trajectory.

In bound orbits, [[a]] must be greater than zero and [[E]] must be negative. If positive [[E]] appears together with a bound-orbit relation, the model is contradictory. If the problem includes atmosphere, engines, or third-body encounters, conservation of [[E]] is valid only over intervals where those effects are negligible.

## Model failure signals

The model fails if the satellite maneuvers, crosses significant atmosphere, the central field does not dominate, or cumulative perturbations are relevant. It also fails if orientation, eccentricity, or orbital plane are described only with energy: energy fixes size and classification, but not the whole geometry.

An observable failure signal is a simulation or measurement showing continuous altitude loss without declared thrust. That usually indicates dissipation, not spontaneous change of conservative energy. Another signal is using the same [[r]] as if it were [[a]] in a clearly elliptical orbit.

## Extended or alternative model

The extended model includes perturbations, thrust, atmospheric drag, non-spherical geopotential, or numerical multi-body integration. In that case Keplerian mechanical energy may remain a diagnostic variable, but it is not necessarily constant.

When to switch to the extended model: if drag exists, if an engine changes [[v]], if third bodies significantly alter the trajectory, if mission precision is required, or if the energetic classification changes over the interval. Ideal orbital energy remains the first coherence check, not the final closure.

## Operational comparison

The ideal model answers questions such as whether a state is bound, which semi-major axis corresponds to a negative energy, or how much specific energy is missing to reach escape. The extended model answers real trajectory questions: how energy changes after a maneuver, how much an orbit decays in atmosphere, or how the Moon perturbs a spacecraft.

Operationally, the ideal model is used first to check sign, order of magnitude, and consistency between [[K]], [[U]], [[E]], and [[eps]]. If that reading contradicts the scenario or does not meet the required precision, the model is changed before interpreting the result as a real prediction.
