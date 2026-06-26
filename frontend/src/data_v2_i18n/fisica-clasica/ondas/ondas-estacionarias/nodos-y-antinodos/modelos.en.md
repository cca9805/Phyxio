# Models of nodes and antinodes

## Ideal model

The standard model of nodes and antinodes describes a pure standing wave in a homogeneous and infinite or semi-infinite medium with fixed boundary conditions. In this model, nodes represent points of exactly zero amplitude at every instant, while antinodes reach constant maximum amplitude equal to twice the amplitude of each component traveling wave.

The positions of nodes and antinodes follow regular spatial distributions determined solely by the wavelength. The distance between consecutive nodes is exactly half wavelength, and the distance between node and antinode is exactly one quarter wavelength. This regularity allows predicting with arbitrary precision the location of any characteristic point of the stationary pattern.

## Hypotheses

- The medium is perfectly elastic and homogeneous, without density or tension variations that disturb propagation.
- The interfering waves have identical frequency, amplitude, and wavelength.
- There are no losses due to dissipation, radiation, or internal damping.
- Boundary conditions establish perfect nodes at the system ends.
- The system operates in linear regime, without nonlinear effects that modify the wave shape.

## Quantitative validity domain

The ideal model provides results with error less than 1% when the following quantitative conditions are met:

- Operating frequency 0.1 kHz < f < 10 kHz for macroscopic mechanical systems.
- Oscillation amplitudes A < 1% of the wavelength for linear regime validity.
- Damping coefficient less than 0.5% per cycle ensures negligible energy loss.
- Reflection coefficient R > 0.95 maintains standing wave purity.

For ultrasonic frequencies above 10 kHz or microscale systems below 1 mm, viscous dissipation effects may require additional corrections to the basic model. The transition occurs when the Reynolds number falls below 1000, marking the onset of significant viscous dominance.

## Model failure signals

The model ceases to be reliable when the following deviations are observed:

- Nodes present observable residual amplitude, greater than five percent of maximum amplitude.
- The measured distance between consecutive nodes varies more than two percent between different pairs.
- Antinodes show significantly different amplitudes from each other in the same system.
- Points of zero amplitude appear outside the positions predicted by regular geometry.
- The system presents temporal dependence in nodal positions, indicating non-negligible traveling components.

## Extended or alternative model

For systems with significant damping, the extended model incorporates a decreasing spatial envelope that modulates the amplitude of the standing wave. In this case, nodes maintain zero amplitude but antinodes present decreasing amplitudes with distance from the source.

In systems with free ends instead of fixed ones, the pattern shifts by half a quarter wavelength, exchanging the relative positions of nodes and antinodes with respect to the standard model. This alternative boundary condition produces antinodes at the ends instead of nodes.

## Operational comparison

| Characteristic | Ideal model | Damped model | Free ends |
|---|---|---|---|
| Amplitude at nodes | Exactly zero | Near zero | Near zero |
| Amplitude at antinodes | Constant | Decreasing | Constant or decreasing |
| Node separation | lambda/2 exact | lambda/2 approximate | lambda/2 exact |
| Relative position node-end | Coincident | Coincident | Shifted lambda/4 |

The choice between models depends on the analysis of physical boundary conditions and the damping coefficient of the real system.
