# Exam-type example


## Problem statement

An experimental emitting station generates a **plane harmonic electromagnetic wave** in absolute vacuum propagating transversely along the positive x-axis. Laboratory measurements show that the electric field oscillates along the y-axis with an amplitude [[amplitud_del_campo_electrico]] of 120 V/m and completes a full cycle every 3.33 ns (nanoseconds), which corresponds to a frequency [[frecuencia]] of 300 MHz. Determine both symbolically and numerically:
- The speed of propagation [[velocidad_de_la_luz_en_el_vacio]] and the associated vacuum constants [[mu0]] and [[epsilon0]].
- The wavelength [[lambda]] of this electromagnetic perturbation.
- The maximum amplitude of the associated magnetic field [[amplitud_del_campo_magnetico]] and its axis of oscillation.
- The mean intensity [[intensidad_media]] of net energy transport of the wave.

## Data

- Electric field amplitude: [[amplitud_del_campo_electrico]] = 120 V/m
- Oscillation frequency: [[frecuencia]] = 300 MHz (equivalent to 3 * 10^8 Hz)
- Vacuum electric permittivity: [[epsilon0]] = 8.854 * 10^-12 F/m
- Vacuum magnetic permeability: [[mu0]] = 4π * 10^-7 H/m

## System definition

The system consists of a free **plane harmonic wave** in vacuum. The wavefronts are parallel to each other and perpendicular to the x-axis of advance. The rigid orthogonal triedre places the electric field vectors along the y-axis, the magnetic field vectors along the z-axis, and the power advance vector along the positive x-axis.

## Physical model

We will use the **ideal transverse plane wave** model to describe the coupling of the electric amplitude [[amplitud_del_campo_electrico]] and magnetic amplitude [[amplitud_del_campo_magnetico]] in vacuum. Under this approximation, we consider that the plane wavefronts do not experience geometric decay or absorption by the surroundings, propagating at the speed of light [[velocidad_de_la_luz_en_el_vacio]] and maintaining the amplitudes constant both spatially and temporally in exact phase.

## Model justification

This model is perfectly valid because the frequency of 300 MHz lies in the very high frequency (VHF) radio band, where the absolute vacuum guarantees the absence of chromatic dispersion and dielectric losses. The plane approximation is highly accurate since we assume that the radial distance to the transmitting antenna easily satisfies the far-field condition, greatly exceeding ten wavelengths in distance.

## Symbolic solution

To calculate the fundamental variables of the electromagnetic triedre, we employ the relation of the constants of space for the speed of light:

{{f:velocidad_vacio}}

Next, we couple the wavelength [[lambda]] with the oscillation frequency using the fundamental kinematic wave relation:

{{f:relacion_onda}}

Subsequently, the magnetic field amplitude [[amplitud_del_campo_magnetico]] is solved from the transverse relation of field amplitudes of Faraday-Ampère:

{{f:relacion_amplitudes}}

Finally, the net power flux per unit area perpendicular to the advance is calculated by evaluating the mean intensity [[intensidad_media]] of Poynting integrated over a full cycle:

{{f:intensidad_media}}

## Numerical substitution

For the propagation speed, multiplying the vacuum permeability by the permittivity and extracting the square root inverse of their product yields approximately 2.998 * 10^8 m/s. Therefore, [[velocidad_de_la_luz_en_el_vacio]] ≈ 3 * 10^8 m/s.

For the wavelength, dividing the speed [[velocidad_de_la_luz_en_el_vacio]] by the frequency of 3 * 10^8 Hz yields exactly 1 meter. Therefore, [[lambda]] ≈ 1 m.

For the magnetic amplitude, dividing the electric field of 120 V/m by the speed [[velocidad_de_la_luz_en_el_vacio]] yields 4 * 10^-7 T. Therefore, [[amplitud_del_campo_magnetico]] ≈ 4 * 10^-7 T. The axis of oscillation is the positive and negative z-axis in phase.

For the mean intensity, squaring the electric field of 120 V/m, multiplying it by the permittivity [[epsilon0]], by the speed [[velocidad_de_la_luz_en_el_vacio]], and dividing by two yields approximately 19.12 W/m^2. Therefore, [[intensidad_media]] ≈ 19.12 W/m^2.

## Dimensional validation

We perform the dimensional validation of the calculated quantities by applying formal unit analysis:
- Speed of light [[velocidad_de_la_luz_en_el_vacio]]: The units of permittivity `[M⁻¹ L⁻³ T⁴ I²]` multiplied by those of permeability `[M L T⁻² I⁻²]` yield `[L⁻² T²]`. Extracting their square root inverse gives the speed dimensions `[L T⁻¹]` ✓.
- Magnetic amplitude [[amplitud_del_campo_magnetico]]: The dimension of the electric field `[M L T⁻³ I⁻¹]` divided by the speed dimension `[L T⁻¹]` simplifies exactly to `[M T⁻² I⁻¹]`, corresponding to teslas in the SI ✓.
- Mean intensity [[intensidad_media]]: The units of power and energy `[M L² T⁻³]` divided by area `[L²]` yield `[M T⁻³]`, corresponding to watts per square meter ✓.

## Physical interpretation

The obtained result demonstrates the unbreakable harmonic coupling of the electromagnetic perturbation. A wavelength of 1 meter classifies this radiation in the VHF radio wave range, commonly used in broadcasting and short-range telecommunications.

If the emitter frequency were doubled while maintaining the same output power, the wavelength [[lambda]] would drop to half (0.5 meters) while the speed of propagation [[velocidad_de_la_luz_en_el_vacio]] would remain strictly invariant. This demonstrates that the speed depends only on the properties of the permittivity and permeability of the vacuum and not on the excitation of the source.

# Real-world example


## Context

In outer Earth orbit, solar radiation constantly impinges on communication satellites and energy panels of the International Space Station. This radiation arrives in the form of electromagnetic waves with a power density or mean intensity [[intensidad_media]] of approximately 1361 W/m^2 (known in astrophysics as the solar constant).

## Physical estimation

From this real energy flux in absolute vacuum conditions, we can estimate the effective amplitudes of the electric field [[amplitud_del_campo_electrico]] and magnetic field [[amplitud_del_campo_magnetico]] hitting the satellite's solar cells.

Solving for the electric field from the intensity equation:
- Operation: Multiply two by the solar intensity of 1361 W/m^2, divide by the product of the speed [[velocidad_de_la_luz_en_el_vacio]] by the permittivity [[epsilon0]], and extract the square root.
- Result: Approximately 1012.8 V/m. Assignment: [[amplitud_del_campo_electrico]] ≈ 1012.8 V/m.

From this electric field, we find the amplitude of the associated magnetic field:
- Operation: Divide the calculated electric field of 1012.8 V/m by the speed of light [[velocidad_de_la_luz_en_el_vacio]].
- Result: Approximately 3.37 * 10^-6 T. Assignment: [[amplitud_del_campo_magnetico]] ≈ 3.37 microT.

## Interpretation

The physical estimation demonstrates that, for a very high solar intensity capable of heating and powering satellites, the resulting electric field amplitude is approximately 1 kV/m, a considerable but very safe value that does not ionize the surrounding dielectric materials of space instruments.

At the same time, the magnetic field amplitude is only 3.37 microT, which is equivalent to just a fraction of the ordinary terrestrial magnetic field. This shows that solar energy transport in the form of light relies numerically in a dominant manner on the electric component in the SI, despite the fact that energetically both fields contribute exactly the same average proportion of 50%.