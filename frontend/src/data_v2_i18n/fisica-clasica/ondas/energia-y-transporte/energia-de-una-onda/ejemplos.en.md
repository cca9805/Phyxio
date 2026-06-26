# Exam-type example


## Problem statement

A piano steel string has a length of 1.2 m, a linear density of 5.0 g/m, and is under a tension of 800 N. A harmonic transverse wave of frequency 440 Hz and amplitude 3.0 mm is generated on it. Calculate:

(a) The wave propagation velocity [[velocidad_de_propagacion]] and the corresponding wavelength.

(b) The total energy stored in one complete cycle of the wave.

(c) The average power transported by the wave.

(d) Verify that the linear regime condition is satisfied.

## Data

- String length: 1.2 m
- Linear density [[mu]]: 5.0 g/m = 5.0 × 10⁻³ kg/m
- Tension T: 800 N
- Frequency f: 440 Hz → angular frequency [[omega]]: 2π × 440 = 2765 rad/s
- [[amplitud]]: 3.0 mm = 3.0 × 10⁻³ m

## System definition

The system is a one-dimensional ideal string, uniform, with unspecified ends (assumed semi-infinite to avoid reflections). The wave is progressive, harmonic, transverse, in linear regime. A segment of length equal to one wavelength is considered for energy analysis.

## Physical model

The model is that of transverse wave on ideal string under the following hypotheses:

- Perfectly flexible and uniform string
- Small oscillations (small slopes, sin(θ) ≈ tan(θ))
- Constant tension along the string
- Absence of internal friction or damping
- Established stationary regime

The fundamental magnitudes are energy density [[u_energia]] which varies spatially and temporally, total energy per cycle [[energia_de_la_onda]], and transported power [[potencia_de_la_onda]]. The relationship between them is governed by wave energy transport formulas.

## Model justification

The linear model is applicable if the amplitude is small compared to wavelength (verification in part d). String uniformity guarantees constant [[mu]]. The tension of 800 N is typical of steel piano strings and keeps the string well below its elastic limit, ensuring linear behavior without permanent deformation.

The absence of dissipation is a reasonable idealization for short distances (meters) in metallic strings at audible frequencies. In real applications of musical instruments, this dissipation is what causes sound decay, but for the instantaneous transport analysis it is negligible.

## Symbolic solution

(a) The propagation velocity [[velocidad_de_propagacion]] on a string under tension is obtained from the tension divided by the linear density, in square root. [[lambda]] results from dividing [[velocidad_de_propagacion]] by the frequency, or equivalently multiplying [[velocidad_de_propagacion]] by the characteristic angular period.

(b) The instantaneous energy density at any point on the string is given by:

{{f:densidad_energia_cuerda}}

Total energy in one cycle is calculated using:

{{f:energia_total_ciclo}}

This formula integrates the energy density averaged over one complete wavelength.

(c) Transported power in the string requires the formula:

{{f:potencia_onda_cuerda}}

For waves in more general continuous media, power is expressed by:

{{f:potencia_onda_general}}

Alternatively, it can be obtained as [[energia_de_la_onda]]·v/[[lambda]], which is equivalent.

(d) The linear regime condition requires verifying that A/[[lambda]] is sufficiently small, typically less than 0.05 for good approximation.

## Numerical substitution

(a) Propagation velocity [[velocidad_de_propagacion]] calculated from tension and linear density: the square root of the quotient between 800 N and 5.0 thousandths of kg/m gives approximately 400 m/s. [[lambda]] results from the quotient between [[velocidad_de_propagacion]] and the frequency of 440 Hz, obtaining approximately 0.91 m.

(b) Total energy in one cycle:

To apply the formula, we first evaluate the individual factors. The square of the angular frequency results in approximately 7.645 × 10⁶ rad²/s². The square of the amplitude gives 9.0 × 10⁻⁶ m². Multiplying the linear density by these factors yields approximately 0.344 J/m. Finally, applying the total energy formula with the half factor and the wavelength, the result is approximately 0.156 J.

(c) Transported power:

{{f:potencia_onda_cuerda}}

{{f:potencia_onda_general}}

The factors are the same up to the square of the amplitude, but now we multiply by [[velocidad_de_propagacion]] instead of the wavelength. This gives approximately 138 W before the half factor. Applying the factor 1/2, the power is approximately 69 W. The alternative verification using total energy multiplied by velocity and divided by wavelength confirms this numerical result.

(d) Linear regime verification:

[[amplitud]] to wavelength ratio:

[[amplitud]]/[[lambda]] = (3.0 × 10⁻³ m) / (0.909 m) ≈ 3.3 × 10⁻³ = 0.0033

Since 0.0033 < 0.05, the linear regime is excellent. The maximum angle of the string with respect to the horizontal is approximately arctan(2πA/λ) ≈ 1.2°, confirming small slopes.

## Dimensional validation

- Velocity: `[M L T⁻²]¹/² / [M L⁻¹]¹/² = [L² T⁻²]¹/² = [L T⁻¹]` ✓ m/s correct
- [[lambda]]: `[L T⁻¹] / [T⁻¹] = [L]` ✓ m correct
- Energy: `[M L⁻¹]·[T⁻¹]²·[L]²·[L] = [M L² T⁻²]` ✓ J correct
- Power: `[M L⁻¹]·[T⁻¹]²·[L]²·[L T⁻¹] = [M L² T⁻³]` ✓ W correct

## Physical interpretation

The energy of 0.156 J in a single wave cycle is appreciable for a string, but not macroscopically enormous. This energy travels along the string at 400 m/s, passing a given point in approximately 2.3 ms (the oscillation period).

The power of 69 W is high for an ideal sustained wave on a musical string, but it is now in a physically reasonable order of magnitude for an intense, brief pulse. In practice, the string only maintains this [[amplitud]] for a short time after the initial excitation, and the time-averaged power in a musical performance is much lower because of natural decay.

If the amplitude were reduced to 1 mm (one third), the energy and power would fall to one ninth (factor 1/3² = 1/9), resulting in approximately 0.017 J and 7.7 W respectively. This quadratic dependence explains why playing "louder" (greater amplitude) dramatically increases perceived volume.

The linear regime verification confirms that the sinusoidal approximation is excellent; the real wave shape would be indistinguishable from a pure sinusoid even under detailed analysis. This justifies the use of Fourier methods for harmonic analysis in string instruments.

# Real-world example


## Context

Wave energy converters seek to capture the energy transported by ocean waves for electricity generation. A "point absorber" type device oscillates vertically with the water surface motion, extracting kinetic and potential energy from the wave movement.

## Physical estimation

Consider typical waves from the North Atlantic with the following average characteristics:

- Wave amplitude (average height from crest to trough divided by 2): A ≈ 1.5 m
- Characteristic period: T ≈ 8 s → frequency f ≈ 0.125 Hz
- Approximate wavelength for deep water: [[lambda]] ≈ g·T²/(2π) ≈ 100 m
- Group velocity of gravity waves: v_g ≈ g·T/(4π) ≈ 6.2 m/s

The surface energy density (energy per unit horizontal area) for gravity waves in deep water is approximated by the product of half the water density, gravity, and the square of the amplitude. With typical values for seawater density and gravity, and an amplitude of 1.5 m, this density results in approximately 11300 J/m².

The available power per unit width of wave front (specific power) is obtained by multiplying surface density by group velocity. Using the calculated values, approximately 11300 J/m² multiplied by 6.2 m/s gives a specific power close to 70 kW per meter of wave front.

A 10 m diameter absorber exposed to these waves would intercept a wave front of approximately 10 m, theoretically accessing 700 kW of incident wave power.

## Interpretation

The 70 kW per meter of wave front represents a considerable power density, comparable to solar radiation on a sunny day (approximately 1 kW/m², but over hours, not instantaneously). However, efficient capture is extremely challenging.

The Budal theoretical limit for point absorbers establishes that maximum capturable power is proportional to the product of water density, gravity, the square of amplitude, and device width, divided by four times the wavenumber. For our example values, this limits capture to approximately half of the incident power under optimal resonance conditions. For our values, this limits capture to approximately 50% of incident power under optimal resonance conditions.

In practice, real devices capture between 10% and 30% of available power due to:

- Frequency mismatches between device and wave spectrum
- Losses from mechanical friction and electromagnetic conversion
- Structural limitations that prevent optimal response in storms

For the 10 m absorber in our example, capturing 20% of the theoretical 700 kW would result in 140 kW of useful mechanical power. After conversion to electricity (with typical efficiencies of 80-90%), approximately 110-125 kW of electrical power would be obtained.

This power, although significant, must be compared with the capital cost of installing and maintaining marine structures capable of withstanding the extreme conditions of the ocean environment. Economic viability critically depends on capacity factor (percentage of time generating near nominal power) and system longevity in the aggressive marine environment.
