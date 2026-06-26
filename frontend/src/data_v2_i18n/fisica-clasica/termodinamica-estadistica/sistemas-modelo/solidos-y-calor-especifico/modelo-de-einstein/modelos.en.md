## Ideal model

The ideal model represents a crystalline solid as a set of identical quantum harmonic oscillators. Each atom vibrates with the same [[frecuencia_angular_einstein]], and that frequency defines [[temperatura_einstein]]. The main question is not only how much [[energia_interna]] the solid contains, but how that energy changes when [[temperatura]] changes. Therefore the central output is [[calor_especifico_molar_volumen_constante]], expressed through [[parametro_reducido]]. The model is a conceptual laboratory: it reduces a complex solid to one thermal scale and shows why classical physics fails at low [[temperatura]].

## Hypotheses

- Identical oscillators: all atoms share the same [[frecuencia_angular_einstein]]. If violated, one [[temperatura_einstein]] cannot fit the whole curve.
- Independent oscillators: vibrations are not treated as a full collective spectrum. If violated, phonon modes matter and Debye is preferable.
- Harmonic regime: vibrational levels are approximated as evenly spaced. Strong anharmonicity changes [[calor_especifico_molar_volumen_constante]] through expansion and mode shifts.
- Thermal equilibrium: the solid has one well-defined [[temperatura]]. Large gradients break the single-state interpretation.
- Constant volume: the model reads [[capacidad_calorifica_volumen_constante]], not constant-pressure heat capacity.
- Correct counting: the total version uses [[numero_atomos]], while the molar version uses [[constante_gases]].

## Quantitative validity domain

The calculation is meaningful when [[temperatura]] > 0 K and [[temperatura_einstein]] > 0 K. For regime reading, [[parametro_reducido]] < 0.1 indicates an almost classical limit; 0.1 ≤ [[parametro_reducido]] ≤ 10 indicates a transition region; [[parametro_reducido]] > 10 indicates strong quantum freezing. In real solids, a single [[temperatura_einstein]] usually fits only a limited [[temperatura]] interval, not the entire curve from 1 K to several hundred kelvin. Operationally, [[calor_especifico_molar_volumen_constante]] should not clearly exceed 3R in the harmonic molar regime.

## Model failure signals

One signal is an experimental curve with a sustained cubic law at low [[temperatura]], typical of the Debye model. Another signal is a sharp peak in [[calor_especifico_molar_volumen_constante]], suggesting a phase transition, magnetic effect, or electronic contribution. The model also fails if different regions of the graph require incompatible [[temperatura_einstein]] values. In metals at low [[temperatura]], the electronic heat capacity can be comparable to the vibrational part, so identical oscillators alone are not enough.

## Extended or alternative model

The Debye model is the natural replacement when acoustic modes and a continuous frequency distribution matter. Complex crystals may use several Einstein temperatures, one for each family of optical modes. Metals require adding an electronic heat-capacity term. If anharmonicity or expansion is important, one must distinguish constant-volume and constant-pressure heat capacities. Switching model is appropriate when the curve shape, not just one data point, contradicts the Einstein saturation pattern.


When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.
## Operational comparison

| Situation | Einstein model | Alternative model |
| Insulating solid with a dominant mode | One [[temperatura_einstein]] may capture the main scale | Several scales if optical modes differ |
| Low [[temperatura]] with cubic law | Predicts too steep a fall | Debye describes acoustic phonons better |
| Metal | Missing electronic contribution | Debye plus electronic term |
| Educational fit | Excellent for quantization | Less simple, more realistic |