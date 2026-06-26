const e=`# Harmonics

## Conceptual context

When a tense string fixed between two points is excited, it does not vibrate in just any manner: only certain precisely defined oscillation patterns are physically possible. These privileged modes, each with their characteristic frequency, constitute the **harmonics** of the string.

The physical constraint imposed by fixed ends generates a **spatial quantization**: the string length must contain an integer number of half-waves. From this condition arise discrete frequencies, integer multiples of a fundamental frequency, which the ear perceives as the characteristic timbre of each string instrument.

> [!NOTE]
> Harmonics are not a mathematical rarity: they are the physical basis of music. The same note played on piano, violin and guitar sounds different because each instrument generates a different proportion of upper harmonics.

## 🟢 Essential level

A string with both ends held can only vibrate in specific ways. Imagine jumping rope: to maintain a stable pattern, the rope must oscillate such that the grip points remain motionless.

The **first harmonic** corresponds to the simplest vibration: the string oscillates as a single arc, with maximum amplitude at the center. This mode has the lowest frequency and determines the **fundamental note** we perceive as melodic pitch.

**Upper harmonics** present more points of maximum oscillation. The second harmonic shows two arcs separated by a static point at the center; the third, three arcs with two intermediate static points. Each additional mode implies a higher frequency.

> [!TIP]
> Think of harmonics as the "natural modes" of the string, just as a room has acoustic resonance frequencies where sound reinforces.

The wave propagation velocity in the string, determined by its tension and density, together with its length, fixes which frequencies are possible. Higher tension or shorter length raise all harmonic frequencies proportionally.

## 🔵 Formal level

The boundary condition for a string with fixed ends requires nodes at both points of its vibrating length. The standing wave solution satisfying this restriction imposes that [[L]] must contain exactly [[n]] half-wavelengths:

{{f:longitud_onda_armonica}}

Where [[n]] is the harmonic number (positive integer) and [[lambda_n]] the corresponding wavelength. Solving for wavelength, we obtain the discrete set of allowed values.

The general relation between frequency, propagation velocity and wavelength indicates that [[v]] equals the product of [[f_n]] and [[lambda_n]], allowing derivation of harmonic frequencies. Substituting the previous expression:

{{f:frecuencia_armonica}}

This equation reveals that frequencies are integer multiples of a base frequency. The particular case where [[n]] is 1 defines the **fundamental frequency**:

{{f:frecuencia_fundamental}}

The complete series satisfies the linear harmonic relation:

{{f:relacion_frecuencias}}

> [!WARNING]
> The velocity [[v]] in these formulas is the propagation velocity of the disturbance along the string, not the transverse oscillation velocity of points on the string. These magnitudes are related but conceptually distinct.

## 🔴 Structural level

Harmonics arise from the **constructive interference** of traveling waves reflected at the fixed ends. Each reflection inverts the phase, and only when the complete return (round trip) equals an integer number of periods does the pattern stabilize coherently.

The round-trip travel time is obtained from traveled length and propagation speed. The resonance condition requires this time to coincide with [[n]] periods associated with [[f_n]]. Reorganizing that reading gives the harmonic frequency formula, demonstrating that normal modes are **stationary resonance states**.

The frequency spectrum is **equally spaced**: the difference between consecutive harmonics is constant and equal to the fundamental. This property distinguishes string harmonics from resonances in other physical systems (such as membranes or plates) where frequencies do not follow a linear progression.

> [!NOTE]
> The linear character of the harmonic spectrum, where [[f_n]] scales with [[n]] and [[f_1]], is a direct consequence of the system's one-dimensionality and the homogeneity of the string. Higher-dimensional systems exhibit more complex spectra.

The superposition of multiple harmonics with relative amplitudes determined by the point and mode of excitation generates the **complex waveform** of real sound. A strike at the center of the string favors odd harmonics; near the bridge, it preferentially excites upper high-order harmonics.

The **limits of the ideal model** appear when string stiffness is not negligible. In real strings, especially thick piano strings, upper harmonics do not exactly follow the ideal proportionality between [[f_n]], [[n]] and [[f_1]], but exhibit **inharmonicity**: frequencies are slightly higher than predicted, deviating more as [[n]] increases. This effect obliges piano tuners to "stretch" the tuning, compensating for deviations.

The **transition to nonlinear regime** occurs when oscillation amplitude is no longer small compared to string length. In this regime, **additional harmonics** (subharmonics and combinations) appear that the linear model does not predict. The sound of a guitar with very high strings or struck forcefully shows this complexity.

**Coupling between harmonics** through nonlinearity generates energy transfer between modes. In real instruments, this produces the "attack" phenomenon where the spectrum evolves temporally: high harmonics decay faster due to damping, eventually leaving the fundamental to predominate.

## Deep physical interpretation

The quantization of frequencies in harmonics is not a quantum property but **classical**, emerging from restrictive boundary conditions. However, the formal parallel with state quantization in quantum mechanics is profound: in both cases, spatial confinement implies spectral discretization.

The human ear performs an unconscious Fourier analysis: it decomposes complex sound into its harmonic components and interprets them as **pitch** (perceived fundamental frequency) and **timbre** (intensity distribution among harmonics). This perception works even when the physical fundamental is absent or attenuated (**difference tone** or virtual pitch phenomenon).

> [!TIP]
> Open-end wind instruments exhibit integer harmonics like strings; stopped-end instruments only odd harmonics. This difference explains the distinctive sonic quality of flutes versus clarinets.

## Order of magnitude

For a typical guitar string with L ≈ 0.65 m and v ≈ 300 m/s, the fundamental frequency is approximately 230 Hz, close to A3 (220 Hz). The human audible range (20 Hz – 20 kHz) can theoretically harbor hundreds of harmonics, although in practice the effective number is limited by damping and string stiffness.

Piano string frequencies range from 27.5 Hz (A0, lowest string) to 4186 Hz (C8, highest string). The violin range covers approximately 200 Hz to 3500 Hz in fundamental frequencies.

> [!WARNING]
> Detect absurd results: a calculated frequency above 100 kHz for a musical string likely indicates a unit conversion error (confusing cm with m or kHz with Hz).

## Personalized resolution method

To determine the harmonic properties of a string system, follow sequentially:

1. **Identify boundary conditions**: Confirm fixed ends (nodes) or if one is partially free.

2. **Calculate or measure propagation velocity**: v = √(T/μ), where T is tension and μ linear mass density.

3. **Apply spatial quantization**: λ_n = 2L/n to obtain allowed wavelengths.

4. **Derive frequencies**: obtain [[f_n]] by combining [[n]], [[v]], [[L]] and [[lambda_n]] through the formal-level formulas.

5. **Verify ordering**: The first harmonic must have the lowest frequency and longest wavelength.

## Special cases and extended example

**Limit case: infinitely long or tensionless string**

If L → ∞, harmonic frequencies tend to zero: no standing pattern can establish itself. If v → 0 (string without tension), the same effect occurs: no wave propagation.

**Limit case: not perfectly fixed ends**

In real instruments, the bridge and nut have finite mass and some elasticity. This slightly shifts harmonic frequencies from ideal values and can introduce small inharmonicities.

**Extended example: violin string**

An A string (second violin string) typically has a vibrating length of 0.33 m between nut and bridge, approximate tension of 70 N and linear density near 0.35 g/m. With those data, the propagation velocity is on the order of 447 m/s and [[f_1]] falls in the hundreds of hertz, comparable with real musical notes although the example is only illustrative.

## Real student questions

**Why are harmonics integer multiples and not arbitrary values?**

Fixed ends impose nodes. For the wave to return to itself after multiple reflections, the return time must be an integer number of periods. This mathematical condition selects only certain frequencies, precisely those that are multiples of the fundamental.

**If the ear hears the fundamental as the note, why do upper harmonics matter?**

The ear simultaneously perceives all present harmonics. The fundamental determines melodic pitch, but the relative proportion of harmonics defines **timbre**: the distinctive character that allows distinguishing a violin from a flute playing the same note.

**Can a string vibrate in several harmonics at once?**

Yes, and in fact it normally does. Real vibration is a **superposition** (sum) of multiple harmonics with amplitudes depending on how and where the string is excited. This amplitude spectrum constitutes the sonic "fingerprint" of the instrument.

**Why does touching a string at its center silence even harmonics?**

The center of the string is an **antinode** for odd harmonics (maximum amplitude allowed) but a **node** for even harmonics (forced zero amplitude). By touching there, we physically prevent even modes from being excited.

## Cross-cutting connections and study paths

String harmonics connect directly with [standing waves](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-cuerdas/ondas-estacionarias), where the physical formation of these patterns is studied. The propagation velocity links with [string dynamics](leaf:fisica-clasica/mecanica/sistemas-continuos/cuerdas-vibrantes).

Spectral analysis of harmonics anticipates concepts of [Fourier analysis](leaf:fisica-clasica/ondas/optica/fourier-transform), fundamental for signal processing. In architectural acoustics, the normal modes of three-dimensional enclosures are the spatial generalization of one-dimensional harmonics.

To deepen musical perception, explore [musical acoustics](leaf:fisica-clasica/ondas/acustica/percepcion-auditiva), where how the ear processes complex spectra is analyzed.

## Final synthesis

Harmonics represent the natural vibration modes of a string with fixed ends, emerging from the interaction between wave propagation and boundary conditions. Each harmonic is characterized by a frequency that is an integer multiple of the fundamental, a wavelength that fits an integer number of half-waves in the string, and a spatial pattern with fixed nodes at the ends and intermediate antinodes. This discrete set of frequencies constitutes the physical basis of musical sound, where the fundamental provides perceptible pitch and upper harmonics model the characteristic timbre of each instrument.
`;export{e as default};
