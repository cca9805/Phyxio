const e=`## Ideal model

The ideal phase model describes a harmonic wave with constant [[k]], [[omega]], and [[phi0]]. In that context, [[phi]] labels the internal state of the cycle and [[Delta_phi]] compares two readings without depending on amplitude.

The wave is considered stable enough for a crest, a trough, or an equilibrium crossing to be followed as equivalent states.

## Hypotheses

The first hypothesis is clear periodicity: the pattern must repeat in a recognizable way. The second is approximate homogeneity of the medium, so that [[k]] does not change from one region to another during the reading. The third is temporal stability, so that [[omega]] is a useful measure of phase rate.

A sign convention is also fixed. Without that convention, saying that one signal leads or lags another is incomplete.

## Quantitative validity domain

The model works well when several consecutive oscillations keep their separation and period with small variations, for example below 5 % in a laboratory observation. In stationary sound, a window of several tens of cycles is usually enough to estimate phase with physical meaning.

If the pulse lasts fewer than a few oscillations, speaking of one global phase becomes weak. In that case, a component description or local phase description is preferable.

## Model failure signals

The model fails if the pattern deforms, if several comparable frequencies appear, or if amplitude attenuates so much that phase can no longer be read. It also fails if signals from different sources are compared without a common synchronization.

A clear failure signal is that two reasonable methods of estimating [[Delta_phi]] give incompatible readings. That indicates that there is no single stable phase for the observed phenomenon.

## Extended or alternative model

When to switch to the extended model: if there is dispersion, noise, short pulses, or frequency mixing, use a spectral decomposition or an instantaneous phase defined by a dominant component. In real interference, relative amplitudes and coherence are also added.

The extended model does not remove phase; it makes it dependent on frequency, time, or position.

## Operational comparison

The ideal model is suitable for clean sinusoidal waves and for exercises where [[k]] and [[omega]] are well defined. The extended model is needed when the pattern changes during observation or when the question depends on the envelope, noise, or several simultaneous components.

Operationally, start with the ideal model when the graph shows a repeated pattern and the data provide one frequency. Move to the extended model when the same measurement cannot be described by one stable [[Delta_phi]].
`;export{e as default};
