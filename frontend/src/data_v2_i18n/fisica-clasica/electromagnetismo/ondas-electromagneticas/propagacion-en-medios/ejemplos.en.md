# Exam-type example


## Problem statement

Visible radiation has a vacuum wavelength of 600 nm, equivalent to 6.00×10⁻⁷ m. It enters a transparent glass normally, with effective index 1.50 for that frequency. The task is to estimate the phase speed inside the glass and the actual wavelength in the material.

The laboratory also states that in this spectral region the material may be treated with [[mu_r]] close to one and an effective relative permittivity compatible with the observed index. The goal is to interpret what changes when entering the medium and what remains fixed by the source.

## Data

- Vacuum wavelength: 600 nm, equivalent to 6.00×10⁻⁷ m.
- Effective index of glass: 1.50.
- Vacuum reference speed: 2.998×10⁸ m/s.
- Effective relative permeability: close to 1.
- Medium: transparent glass, linear model with negligible losses.

## System definition

The system is a monochromatic electromagnetic wave passing from vacuum into glass. The reference quantities are [[velocidad_de_la_luz_en_el_vacio]] and [[lambda0]]. The material quantities are [[indice_de_refraccion_efectivo]], [[epsilon_r]], and [[mu_r]]. The quantities to be read inside the glass are [[v_m]] and [[lambda_m]].

The source fixes frequency, even though frequency is not explicitly calculated in this example. Therefore the change of medium is not interpreted as a change of color, but as a change of phase speed and spatial scale inside the material.

## Physical model

The model is propagation in a linear, homogeneous, isotropic medium. In this model [[indice_de_refraccion_efectivo]] summarizes the effective electromagnetic response and allows [[v_m]] to be calculated from [[velocidad_de_la_luz_en_el_vacio]]. It also converts [[lambda0]] into [[lambda_m]].

The model includes a material reading: if [[mu_r]] is close to one, the observed index is mainly attributed to the electric response [[epsilon_r]]. Even so, both quantities belong to the model because effective index is not a number without physical cause.

## Model justification

The approximation is reasonable because the radiation is visible and monochromatic in transparent glass, without dominant absorption or stated anisotropy. Under those conditions, an effective index describes phase speed and wavelength shortening well.

The model would stop being sufficient if the radiation were an ultrashort pulse, if the glass had strong dispersion in the used interval, if absorption were appreciable, or if the question asked about information transport. In those cases one would move to group speed, frequency-dependent index, or complex index.

## Symbolic solution

For the phase speed inside the medium, use the relation between [[velocidad_de_la_luz_en_el_vacio]], [[indice_de_refraccion_efectivo]], and [[v_m]]:

{{f:velocidad_en_medio}}

To interpret where the effective index comes from, use the material response:

{{f:indice_medio_em}}

For the wavelength inside glass, relate [[lambda0]], [[indice_de_refraccion_efectivo]], and [[lambda_m]]:

{{f:longitud_onda_en_medio}}

The expected physical order is clear before substitution: with an index above one, [[v_m]] must be smaller than [[velocidad_de_la_luz_en_el_vacio]] and [[lambda_m]] must be smaller than [[lambda0]].

## Numerical substitution

For speed, dividing 2.998×10⁸ m/s by 1.50 gives approximately 2.00×10⁸ m/s. Therefore [[v_m]] ≈ 2.00×10⁸ m/s.

For wavelength in glass, dividing 6.00×10⁻⁷ m by 1.50 gives approximately 4.00×10⁻⁷ m. Therefore [[lambda_m]] ≈ 4.00×10⁻⁷ m, equivalent to 400 nm inside the medium.

If [[mu_r]] is taken close to one, index 1.50 corresponds to an effective relative permittivity of order 2.25. Therefore [[epsilon_r]] is above one, consistent with an electric response delaying propagation.

## Dimensional validation

In medium speed, a speed divided by a dimensionless number keeps dimension `[L T⁻¹]`, which corresponds to [[v_m]].

In medium wavelength, a length divided by a dimensionless number keeps dimension `[L]`, which corresponds to [[lambda_m]].

In the material reading, [[epsilon_r]], [[mu_r]], and [[indice_de_refraccion_efectivo]] are dimensionless. The operation combines relative medium responses and produces another unitless number.

## Physical interpretation

The result shows that the wave does not stop being the same visible radiation when it enters glass. What changes is how its phase advances in the material. Phase speed falls to about two thirds of the vacuum reference, and therefore wavefronts become closer together inside the glass.

If the index were larger, phase speed and material wavelength would decrease further. If the index approached one, the result would approach behavior in air or vacuum. This dependence explains why lenses, prisms, and fibers use materials with controlled indices.

The 400 nm wavelength inside glass should not be interpreted as an automatic color change. Color is tied to frequency in the source and detector. Material wavelength matters for phase, interference, optical paths, and device design, not for saying that the source changed identity.

# Real-world example


## Context

An optical fiber uses a core with an index slightly larger than the cladding to guide infrared telecommunication light. Even when the index difference is small, it modifies phase speed and wavelength inside the core. These modifications matter for accumulated phase, delay, and signal synchronization.

The engineer cannot directly use the vacuum wavelength as the internal scale of the fiber. It must be converted through the material index, and real pulses may require a more complete model if dispersion is important.

## Physical estimation

For a vacuum wavelength of 1550 nm and a core index near 1.45, the wavelength inside the core is of order 1070 nm. The phase speed is of order 2.1×10⁸ m/s, clearly smaller than [[velocidad_de_la_luz_en_el_vacio]] but still enormous on a human scale.

The quantitative reading shows two things: the fiber does not change the source frequency, but it does change the spatial scale with which phase accumulates. Over one kilometre of fiber, small index changes can accumulate measurable delays.

## Interpretation

Propagation in media explains why optical fibers require precise material control. It is not enough for the material to be transparent: its index determines guiding, phase speed, and internal wavelength. If the index also depends on frequency, different pulse components can separate in time.

The simple model of the leaf gives the first estimate. A real link design then adds dispersion, losses, guided modes, and group speed. Even so, the base idea remains the same: the medium does not change the temporal identity of the source, but it changes how the wave occupies space and advances through the material.