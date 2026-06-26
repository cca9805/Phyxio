## Ideal model

The ideal model treats two coherent, sinusoidal waves with common frequency reaching the same point with a stable relative phase. Superposition is applied to the physical disturbance, and the resultant intensity [[I_resultante]] is then interpreted as an energy average.

The central simplification is that the medium does not change during observation and that both waves share the same mode. Then [[Delta_r]] and [[delta_phi]] are enough to decide whether a minimum appears. The model preserves the scale of [[lambda]] and the individual intensities [[I1]] and [[I2]], but ignores noise, strong dispersion, thermal fluctuations, and variable losses.

## Hypotheses

- The sources are coherent: if this fails, minima move or average out.
- The frequency is common: if frequencies differ, [[delta_phi]] is no longer stable and temporal beating appears.
- The waves act on the same physical mode: if they do not share polarization, effective direction, or mechanical variable, contrast falls.
- The medium can be represented by a defined [[lambda]]: if the medium changes, accumulated phase requires a more detailed optical or acoustic model.
- The intensities [[I1]] and [[I2]] are measurable separately: otherwise the depth of the minimum cannot be evaluated reliably.

## Quantitative validity domain

The model is reasonable when phase stability is maintained during the measurement interval and spectral width is small relative to the central frequency. In laboratory optical interferometry, phase drift below 10 % of a cycle usually keeps minima distinguishable. In room acoustics, path differences with order of magnitude near 0.5 m matter for tones of several hundred hertz.

For spatial observations, the spacing between minima must exceed detector resolution. If a camera, microphone, or sensor integrates over an area larger than several fringes, the minimum is smoothed even when the local physics is correct.

## Model failure signals

A direct failure signal is that predicted minima do not remain at the same position. If the dark or quiet region shifts between repeated measurements without geometric change, coherence is probably not maintained.

Another signal is a minimum intensity much larger than expected despite adjusted phase. This may indicate unequal amplitudes, incompatible polarization, unmodeled reflections, or a detector averaging many phases. The model also fails if minima appear where [[Delta_r]] has no relation to [[lambda]] in the medium.

## Extended or alternative model

When to switch to the extended model: use it if the medium is dispersive, if several reflections exist, if spectral width is large, or if the sources do not keep stable phase. In that case the two-wave ideal reading is replaced by a sum of many contributions with their own phases, amplitudes, and delays.

Thin-film optics adds reflection phase and optical path. Real acoustics includes walls, absorption, and room modes. Electronic signals or antennas use phasor representation with losses and frequency response.

## Operational comparison

| Criterion | Ideal model | Extended model |
|---|---|---|
| Accuracy | High for two clean coherent waves | Better with real media, reflections, or broad spectrum |
| Complexity | Low; uses [[Delta_r]], [[lambda]], [[delta_phi]], [[I1]], and [[I2]] | Higher; requires multiple phases, losses, and detector response |
| Application range | Stable patterns and controlled sources | Real experiments with noise, dispersion, or complex geometry |
| Main limit | Does not describe coherence loss or mode mixing | Can hide the intuition if used before phase is understood |
