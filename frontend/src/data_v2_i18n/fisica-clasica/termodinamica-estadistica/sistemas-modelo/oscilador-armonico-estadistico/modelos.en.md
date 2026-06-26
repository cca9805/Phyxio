## Ideal model

The ideal model treats one harmonic oscillator in thermal equilibrium with a bath at fixed [[temperatura]]. Its [[frecuencia_angular]] does not change with amplitude, so the spacing of energy levels is summarized by [[energia_cuantica]]. [[energia_media]] is an average over possible occupations, not an instantaneous value. The distribution is organized through [[beta]], [[funcion_particion]], and [[probabilidad_ocupacion]].

## Hypotheses

- Harmonic potential: if the potential is not quadratic, one fixed [[frecuencia_angular]] no longer describes the levels.
- Thermal equilibrium: if the oscillator is externally driven, [[probabilidad_ocupacion]] is not thermal.
- Stable positive [[temperatura]]: if the bath changes during measurement, [[beta]] loses operational meaning.
- Non-degenerate levels labeled by [[numero_cuantico]]: if degeneracy or coupling appears, [[funcion_particion]] must be modified.
- SI use of [[hbar]] and [[constante_boltzmann]]: mixed units can give a ridiculous scale for [[energia_media]].

## Quantitative validity domain

The isolated quantum oscillator is appropriate when coupling to the bath is weak and level broadening is much smaller than [[energia_cuantica]]. For a classical reading, use the limit when the thermal scale associated with [[constante_boltzmann]] and [[temperatura]] is at least 10 times larger than [[energia_cuantica]]. For a cold quantum regime, expect ground-state dominance when that thermal scale is below 0.1 times [[energia_cuantica]]. [[probabilidad_ocupacion]] must satisfy 0 ≤ [[probabilidad_ocupacion]] ≤ 1, and the sum over [[numero_cuantico]] must be close to 1 within numerical tolerance.

{{f:energia_media_cuantica}}

{{f:limite_clasico_equiparticion}}

## Model failure signals

The model is failing if [[energia_media]] decreases when [[temperatura]] increases at fixed [[frecuencia_angular]], if [[funcion_particion]] is given units, if [[probabilidad_ocupacion]] does not normalize, or if the graph lacks a smooth transition between a quantum plateau and a classical trend. Failure is also suggested by negative energy for a stable oscillator, using [[beta]] without [[temperatura]], or applying equipartition when only the ground state is occupied.

## Extended or alternative model

Switch to an anharmonic model when the observed frequency depends on amplitude. For molecules or solids, it may be necessary to sum many modes with different [[frecuencia_angular]], each contributing its own [[energia_media]] independently and weighted by its own [[probabilidad_ocupacion]]. If conduction, damping, or pumping dominates, a non-equilibrium dynamical model is needed instead of a single [[funcion_particion]].

## Operational comparison

| Situation | Recommended model | What to inspect |
| Isolated mode in equilibrium | Quantum harmonic | [[energia_media]], [[probabilidad_ocupacion]], [[funcion_particion]] |
| High [[temperatura]] | Classical limit | proportionality with [[temperatura]] |
| Low [[temperatura]] | Cold quantum regime | zero-point energy and weak excitation |
| Many coupled modes | Multimode model | sum over contributions by [[frecuencia_angular]] |
| Non-quadratic potential | Anharmonic model | frequency shifts and graph deviation |