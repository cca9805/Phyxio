# Exam-type example


## Problem statement

A green laboratory light travels through air and may be treated as an electromagnetic wave in vacuum for a first estimate. Its [[lambda]], measured with a spectrometer, is 500 nm, equivalent to 5.00×10⁻⁷ m. The task is to locate this radiation in the electromagnetic spectrum and estimate the energy of each associated photon.

The aim is not to calculate source power or perceived brightness. The task is only to translate the spatial scale of the wave into [[frecuencia]] and then read the energy per photon. That distinction matters because a weak visible source can contain the same kind of photons as an intense source of the same color, although fewer photons arrive each second.

## Data

- Measured [[lambda]]: 500 nm, equivalent to 5.00×10⁻⁷ m.
- Propagation speed used: 2.998×10⁸ m/s.
- Planck constant used: 6.626×10⁻³⁴ J s.
- Medium: air, treated as vacuum in a first approximation.

## System definition

The physical system is an idealized monochromatic electromagnetic wave. The spatial input is [[lambda]], the temporal quantity to be obtained is [[frecuencia]], and the constant connecting both in vacuum is [[velocidad_de_la_luz_en_el_vacio]]. Then, with [[constante_de_planck]], one estimates [[energia_de_un_foton]] for a single photon of that radiation.

The spectral region is determined by the order of magnitude of [[frecuencia]] and by the inverse reading between [[lambda]] and [[frecuencia]]. A visible [[lambda]], much shorter than radio wavelengths and much longer than X-ray wavelengths, should produce an intermediate [[frecuencia]] in the optical spectrum.

## Physical model

The model is a plane electromagnetic wave in vacuum or air. In that model, the same speed [[velocidad_de_la_luz_en_el_vacio]] connects the spatial scale [[lambda]] with the temporal rate [[frecuencia]]. To move from the wave reading to the elementary photon reading, photon energy is evaluated through [[constante_de_planck]].

The model contains the two core relations of the leaf. The first classifies the wave in the spectrum by its [[frecuencia]]; the second interprets what energy corresponds to one photon at that frequency. It does not describe absorption in a material, luminous intensity, photon number, or emitted power.

## Model justification

The vacuum approximation is appropriate because air changes the speed of light only slightly for an upper-secondary or first university estimate. The given [[lambda]] is already interpreted as [[lambda]] in air, and the goal is to order the radiation in the spectrum, not to study dispersion in a prism or propagation in a fiber.

The model would stop being a direct reading if the light crossed a medium with significant refractive index, if the source had a wide spectral bandwidth, or if the question asked for total beam energy. In those cases one would need the phase speed in the medium, a spectral distribution, or photon flux.

## Symbolic solution

First relate [[lambda]], [[frecuencia]], and [[velocidad_de_la_luz_en_el_vacio]]:

{{f:relacion_dispersion_espectral}}

To obtain [[frecuencia]], take the propagation speed and divide it by the wavelength. The relation shows that, in the same medium, a smaller [[lambda]] implies a larger [[frecuencia]].

Then convert that [[frecuencia]] into photon energy:

{{f:energia_foton}}

The second relation does not measure light intensity. It only assigns to each photon an energy proportional to [[frecuencia]], with [[constante_de_planck]] as the quantum scale constant.

## Numerical substitution

For the [[frecuencia]], dividing 2.998×10⁸ m/s by 5.00×10⁻⁷ m gives approximately 6.00×10¹⁴ Hz. Therefore [[frecuencia]] ≈ 6.00×10¹⁴ Hz.

For photon energy, multiplying 6.626×10⁻³⁴ J s by 6.00×10¹⁴ Hz gives approximately 3.98×10⁻¹⁹ J. Therefore [[energia_de_un_foton]] ≈ 3.98×10⁻¹⁹ J.

The result lies in the visible range: frequencies of order 10¹⁴ Hz and wavelengths of hundreds of nanometres. This agrees with the initial green-light data and rules out radio, microwave, extreme ultraviolet, and X-ray regions.

## Dimensional validation

In the wave relation, a speed in m/s divided by a length in m produces a rate per second. Dimensionally, the quotient corresponds to `[T⁻¹]`, which is the dimension of [[frecuencia]].

In photon energy, a constant with action dimension `J s` is multiplied by the [[frecuencia]].
The [[frecuencia]] has dimension `[T⁻¹]`, so the result has dimension `[M L² T⁻²]`, consistent with [[energia_de_un_foton]].

## Physical interpretation

The result means that green light is not distinguished by travelling faster than other spectral regions in vacuum, but by having a specific combination of [[lambda]] and [[frecuencia]]. The computed [[frecuencia]] indicates a very high oscillation rate compared with microwaves or radio, but lower than ultraviolet, X-ray, or gamma radiation.

If the [[lambda]] were reduced by half in the same medium, the [[frecuencia]] would double and [[energia_de_un_foton]] would also increase. Physically, this would shift the radiation toward bluer colors or even more energetic regions. If [[lambda]] increased, the opposite would happen: lower [[frecuencia]], lower photon energy, and less localized interaction with matter.

Photon energy does not state how much total energy the source delivers. An intense lamp and a weak signal can share the same [[energia_de_un_foton]] if they have the same [[frecuencia]]; what changes is the number of photons emitted or received per unit time. Thus the spectrum organizes the nature of radiation, not by itself its power.

# Real-world example


## Context

An optical sensor in an industrial camera must distinguish a green safety mark illuminated by a narrow LED. The manufacturer states that the emission maximum is around 530 nm. Before choosing filters and photodiodes, the engineering team wants to check whether the signal lies in the visible range and estimate the order of photon energy reaching the detector.

The practical decision depends on spectral region. If the radiation were in the near infrared, some silicon sensors could still respond well but the color would not be visible to an operator. If it were in the ultraviolet, protection rules and materials would change. Reading [[lambda]], [[frecuencia]], and [[energia_de_un_foton]] prevents mixing up color, power, and safety.

## Physical estimation

Taking 530 nm as 5.30×10⁻⁷ m and using [[velocidad_de_la_luz_en_el_vacio]] ≈ 3.00×10⁸ m/s, the estimated [[frecuencia]] is of order 5.7×10¹⁴ Hz. With [[constante_de_planck]] ≈ 6.63×10⁻³⁴ J s, photon energy is of order 3.8×10⁻¹⁹ J.

This quantitative estimate is enough to classify the emission as visible green. It also shows that each photon has much more energy than a microwave photon, but less than an ultraviolet photon capable of more aggressive photochemical effects. The dominant quantity for classifying the device is [[frecuencia]], while [[lambda]] helps compare with filters, gratings, and optical dimensions.

## Interpretation

In practice, the detector is not chosen only from the energy of a photon. Photon flux, sensor quantum efficiency, electronic noise, and LED bandwidth also matter. However, the electromagnetic spectrum gives the first conceptual filter: the radiation lies in a region where visible optics, green filters, and silicon sensors are reasonable.

If the LED maximum shifted toward much shorter wavelengths, the same optical power would be carried by more energetic photons and exposure risks would change. If it shifted toward much longer wavelengths, there would be less energy per photon and the visible signal could disappear. Therefore calculating [[frecuencia]] and [[energia_de_un_foton]] is not an isolated substitution, but a physical reading that guides design, safety, and instrument selection.