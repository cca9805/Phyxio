## Ideal model

The ideal model treats coherence as a scalar property comparing a phase-memory scale [[longitud_de_coherencia]] with a path difference [[diferencia_de_camino_optico]]. The source is considered stable during a time [[tau_c]], and the setup is interpreted through the observable contrast [[visibilidad_de_franjas]].

The central simplification is that one coherence length summarizes temporal stability of the source. Vibrations, mechanical noise, spatial source width, intensity imbalance, and detailed detector response are ignored.

## Hypotheses

- The source is modeled with a well-defined coherence time; if the spectrum changes during measurement, [[longitud_de_coherencia]] is no longer unique.
- The paths recombine stably; if they vibrate, [[diferencia_de_camino_optico]] changes during exposure.
- The detector measures comparable maxima and minima; if it saturates, [[visibilidad_de_franjas]] is biased.
- Beam intensities are sufficiently balanced; otherwise visibility may fall even with coherence.
- Background light is controlled; otherwise [[intensidad_minima]] increases artificially.

## Quantitative validity domain

The model is reasonable when path difference lies on the same scale as [[longitud_de_coherencia]] or below it. As an operational rule, contrast is usually useful if [[diferencia_de_camino_optico]] < 0.5 [[longitud_de_coherencia]], while differences much larger than [[longitud_de_coherencia]] wash out fringes in time-averaged measurements.

Experimental visibility should lie between 0 < [[visibilidad_de_franjas]] and [[visibilidad_de_franjas]] < 1 for a nonideal but physical reading. A typical order of magnitude separates broad lamps, with micrometre [[longitud_de_coherencia]], from narrow lasers, with metre scales or more.

## Model failure signals

The model fails if fringes move during measurement, if visibility changes when the table is touched, if maxima and minima depend on exposure time, or if the pattern improves after balancing intensities without changing the source. Those signals show that contrast is not controlled only by temporal coherence.

It also fails if a setup with [[diferencia_de_camino_optico]] far above [[longitud_de_coherencia]] keeps high contrast without an additional explanation, such as strong spectral filtering or a stabilized laser source.

## Extended or alternative model

When to switch to the extended model: when the source is extended, spectrum is broad, vibrations occur, background light is present, the detector is nonlinear, or a full correlation function must be reconstructed. The transition to the extended model occurs when [[coherencia_relativa]] and [[visibilidad_de_franjas]] alone do not explain the observed pattern.

The alternative model uses temporal and spatial coherence functions, spectral width, source angular distribution, noise, and instrumental response. It is more complex, but separates phase loss, alignment loss, and background loss.

## Operational comparison

Ideal model: fast, calculable, and sufficient for comparing [[diferencia_de_camino_optico]] with [[longitud_de_coherencia]] and estimating contrast. Its advantage is didactic; its limit is that it condenses many mechanisms into one scale.

Extended model: separates temporal, spatial, and instrumental coherence. It is necessary in precision interferometry, optical coherence tomography, and partially coherent sources, but requires more parameters and experimental data.