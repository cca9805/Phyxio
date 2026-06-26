const e=`# Physical models

## Ideal model

The ideal model treats coherence as a scalar property comparing a phase-memory scale [[L_c]] with a path difference [[Delta_L]]. The source is considered stable during a time [[tau_c]], and the setup is interpreted through the observable contrast [[V]].

The central simplification is that one coherence length summarizes temporal stability of the source. Vibrations, mechanical noise, spatial source width, intensity imbalance, and detailed detector response are ignored.

## Hypotheses

- The source is modeled with a well-defined coherence time; if the spectrum changes during measurement, [[L_c]] is no longer unique.
- The paths recombine stably; if they vibrate, [[Delta_L]] changes during exposure.
- The detector measures comparable maxima and minima; if it saturates, [[V]] is biased.
- Beam intensities are sufficiently balanced; otherwise visibility may fall even with coherence.
- Background light is controlled; otherwise [[I_min]] increases artificially.

## Quantitative validity domain

The model is reasonable when path difference lies on the same scale as [[L_c]] or below it. As an operational rule, contrast is usually useful if [[Delta_L]] < 0.5 [[L_c]], while differences much larger than [[L_c]] wash out fringes in time-averaged measurements.

Experimental visibility should lie between 0 < [[V]] and [[V]] < 1 for a nonideal but physical reading. A typical order of magnitude separates broad lamps, with micrometre [[L_c]], from narrow lasers, with metre scales or more.

## Model failure signals

The model fails if fringes move during measurement, if visibility changes when the table is touched, if maxima and minima depend on exposure time, or if the pattern improves after balancing intensities without changing the source. Those signals show that contrast is not controlled only by temporal coherence.

It also fails if a setup with [[Delta_L]] far above [[L_c]] keeps high contrast without an additional explanation, such as strong spectral filtering or a stabilized laser source.

## Extended or alternative model

When to switch to the extended model: when the source is extended, spectrum is broad, vibrations occur, background light is present, the detector is nonlinear, or a full correlation function must be reconstructed. The transition to the extended model occurs when [[C_rel]] and [[V]] alone do not explain the observed pattern.

The alternative model uses temporal and spatial coherence functions, spectral width, source angular distribution, noise, and instrumental response. It is more complex, but separates phase loss, alignment loss, and background loss.

## Operational comparison

Ideal model: fast, calculable, and sufficient for comparing [[Delta_L]] with [[L_c]] and estimating contrast. Its advantage is didactic; its limit is that it condenses many mechanisms into one scale.

Extended model: separates temporal, spatial, and instrumental coherence. It is necessary in precision interferometry, optical coherence tomography, and partially coherent sources, but requires more parameters and experimental data.
`;export{e as default};
