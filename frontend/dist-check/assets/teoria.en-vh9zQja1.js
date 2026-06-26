const e=`## Conceptual context

An elastic bar confined by its boundary conditions can only vibrate stably at certain discrete frequencies. These are the natural frequencies or resonance frequencies. Each natural frequency corresponds to a spatial vibration pattern called a normal mode.

The fundamental phenomenon is that travelling waves propagating through the bar reflect at the ends and, upon constructive superposition, form standing waves. Only when the bar length is an appropriate multiple of the half-wavelength is the superposition constructively sustained: this defines the allowed frequencies.

This leaf covers longitudinal modes (compression-extension along the axis), torsional modes (rotation about the axis) and mentions the connection with flexural modes (treated in detail in the bending waves in beams leaf). The fundamental boundary conditions are: free end (zero stress, maximum displacement) and fixed end (zero displacement, maximum stress).

## 🟢 Essential level

When you strike a metal bar, it vibrates at certain specific frequencies: it emits a sound with a definite pitch. Those frequencies depend on the length, the material and how the ends are supported.

The lowest frequency is called the fundamental or first harmonic. The following ones are called higher harmonics. If the bar is free at both ends, the harmonics are integer multiples of the fundamental (2f, 3f, 4f...). If one end is fixed and the other free, only odd harmonics appear (f, 3f, 5f...).

The longer the bar, the lower the frequency: a long bar sounds lower than a short one of the same material. The stiffer the material, the higher the frequency: steel sounds higher-pitched than a soft polymer.

## 🔵 Formal level

### Longitudinal standing waves

A longitudinal wave travels through the bar at velocity [[v_L]]. Upon reaching an end it reflects. The superposition of incident and reflected waves creates a standing wave if the frequency is appropriate.

For a free-free bar, both ends are displacement antinodes (stress nodes). The resonance condition requires that the length contains an integer number of half-wavelengths:

{{f:freq_longitudinal_libre_libre}}

where [[n_modo]] is the mode number (1, 2, 3...), [[v_L]] is the longitudinal velocity and [[L_barra]] is the length.

The longitudinal velocity in a slender bar is calculated as:

{{f:velocidad_longitudinal_barra}}

where [[E_young]] is the Young modulus and [[rho]] is the material density.

For a fixed-free bar, the clamped end is a displacement node and the free end is an antinode. Only odd harmonics fit:

{{f:freq_longitudinal_fijo_libre}}

The fundamental of the fixed-free bar has half the frequency of the free-free fundamental of the same length: the effective wavelength is four times the bar length versus two times in the free-free case.

### Torsional modes

If the bar has circular cross-section and vibrates in torsion, propagation is analogous to longitudinal but with the shear velocity:

{{f:velocidad_corte_barra}}

The torsional frequency follows the same structure as longitudinal with free-free conditions:

{{f:freq_torsional_libre_libre}}

Since [[v_T]] is always less than [[v_L]] (because [[G_shear]] is less than [[E_young]] for materials with positive Poisson ratio), torsional frequencies are always lower than longitudinal ones for the same mode and length.

## 🔴 Structural level

### Derivation from the wave equation

The one-dimensional wave equation for longitudinal displacement u(x,t) in a homogeneous bar is:

d²u/dt² = [[v_L]]² d²u/dx²

Separation of variables u(x,t) = X(x) T(t) leads to:

T(t) = A cos(omega t) + B sin(omega t)

X(x) = C cos(kx) + D sin(kx)

with the dispersion relation between angular frequency, wave number and [[v_L]], which is linear (non-dispersive).

Boundary conditions determine the allowed values of k:

For free-free, both ends impose zero slope of the spatial mode. That condition selects integer wavenumbers and leads to the free-free frequency relation.

For fixed-free, the clamped end imposes zero displacement and the free end imposes zero slope. That combination selects odd harmonics only and leads to the fixed-free frequency relation.

In both cases, [[f_n]] is proportional to the allowed wave number and to [[v_L]].

### Mode orthogonality

Normal modes are orthogonal in the mass-weighted inner product:

The mass-weighted inner product vanishes between two different modes.

where A is the cross-sectional area. This property allows decomposing any arbitrary vibration as a linear combination of modes. The response to an initial impulsive excitation excites multiple modes simultaneously.

### Quality factor and damping

In a real bar, each mode has a finite bandwidth around [[f_n]] due to internal material dissipation, sound radiation losses and imperfect boundary conditions. The quality factor Q_n measures how many vibration cycles the mode undergoes before losing significant energy:

The quality factor is proportional to the product of modal frequency and decay time.

where tau_n is the exponential amplitude decay time of mode n. Metals like aluminium have Q of the order of 1000-10000; polymers may have Q of 10-100.

### Lateral inertia effect (Rayleigh-Love correction)

At high frequencies, when wavelength approaches the bar's transverse dimension, the slender bar hypothesis fails. Lateral contraction due to Poisson effect creates transverse inertia that reduces the effective phase velocity. The corrected velocity is:

The effective velocity falls below [[v_L]], and the correction grows when the bar radius becomes comparable with the wavelength.

where r is the bar radius, nu the Poisson ratio and lambda the wavelength. This produces dispersion: the omega-k relation becomes nonlinear and harmonics are no longer exactly equally spaced.

## Deep physical interpretation

Resonance in bars is the manifestation that a confined elastic system quantises its frequency spectrum. It is the mechanical analogue of stationary orbits in quantum mechanics: only certain configurations are self-coherent.

The essential difference between different boundary condition types is geometric: a free end acts as a mirror reflecting without phase change (antinode), while a fixed end acts as a phase-inverting mirror (node). This node-antinode duality is what selects even and odd harmonics.

The fact that torsional frequencies are always lower than longitudinal ones reflects that shear stiffness is always less than tensile stiffness in a material with positive Poisson ratio. The ratio [[v_L]]/[[v_T]] is sqrt(2(1+nu)), which allows measuring nu from resonance frequencies.

## Order of magnitude

- Steel bar 1 m, free-free: f_1 longitudinal ≈ 5100/(2 times 1) = 2550 Hz (audible, high-pitched).
- Same bar, torsional mode: f_1 ≈ 3200/(2 times 1) = 1600 Hz (audible, medium pitch).
- Aluminium bar 0.3 m, fixed-free: f_1 ≈ 5000/(4 times 0.3) = 4167 Hz.
- Glass bar 0.5 m, free-free: f_1 ≈ 5500/(2 times 0.5) = 5500 Hz.
- Nylon bar 1 m, free-free: f_1 ≈ 1700/(2 times 1) = 850 Hz (low-medium pitch).

The longitudinal fundamental is typically in the kHz range for decimetre-scale bars of stiff materials. Flexural modes of the same object are much lower in frequency (tens to hundreds of Hz) because the effective flexural stiffness is much smaller.

## Personalized resolution method

1. Identify the vibration type: longitudinal, torsional or flexural.
2. Establish boundary conditions: free-free, fixed-free, fixed-fixed.
3. Calculate the corresponding wave velocity: [[v_L]] for longitudinal, [[v_T]] for torsional.
4. Apply the appropriate natural frequency formula according to the boundary condition.
5. Verify the result is coherent: equally spaced harmonics in free-free, only odd in fixed-free.
6. If high-frequency accuracy is needed, apply lateral inertia correction.
7. Dimensional validation: frequency in Hz, velocity in m/s, length in m.

## Special cases and extended example

### Infinitely long bar limit

When [[L_barra]] tends to infinity, the spacing between adjacent frequencies tends to zero: the discrete spectrum becomes a continuum. There are no discrete resonances; the bar supports travelling waves of any frequency. This is the transition from finite system to infinite medium.

### Fixed-fixed bar

It produces the same kind of equally spaced spectrum as the free-free case, but with mode shapes shifted in phase: the ends are nodes instead of antinodes. Physically it is symmetric to free-free in the sense of node-antinode exchange.

### High-frequency limit

When wavelength approaches the bar diameter, dispersion appears. Harmonics cease to be equally spaced and group velocity decreases. In the extreme, when lambda is comparable to atomic spacing, the continuum model fails completely.

### Auxetic material (negative nu)

If Poisson ratio is negative, the ratio between [[v_L]] and [[v_T]] decreases. At the lower thermodynamic limit both velocities would tend to coincide; in practice, real auxetic materials still keep longitudinal frequencies higher than torsional ones.

## Real student questions

**Why does a fixed-free bar only have odd harmonics?**
Because the fixed end forces a displacement node and the free end an antinode. For both conditions to be satisfied simultaneously, only odd quarter-wavelengths fit within the length: one quarter-wavelength (1st mode), three quarters (2nd mode), five quarters (3rd mode), etc.

**Can I measure Young modulus by measuring the resonance frequency?**
Yes. The fundamental frequency of a bar of known length and density is measured, the free-free relation is used to obtain [[v_L]], and then the longitudinal velocity relation gives [[E_young]]. This is the basis of the impulse excitation method (ASTM E1876 standard).

**Why are torsional modes lower in frequency than longitudinal ones?**
Because torsional velocity depends on [[G_shear]] and longitudinal velocity on [[E_young]]. In common materials, shear stiffness is lower than longitudinal stiffness, so [[v_T]] is lower than [[v_L]]. Lower velocity with the same length gives lower frequency.

## Cross-cutting connections and study paths

- Longitudinal modes depend on [[v_L]], calculated from [[E_young]] and [[rho]] (see longitudinal waves in bars leaf).
- Torsional modes depend on [[v_T]], calculated from [[G_shear]] and [[rho]].
- The relationship between E and G depends on the Poisson ratio (see elastic moduli relationship leaf).
- Flexural modes (beams) have a dispersive, non-equally-spaced spectrum (see bending waves in beams leaf).
- Boundary conditions define reflections analogous to interfaces between media (see reflection and transmission in solids leaf).

## Final synthesis

Natural frequencies of a bar are proportional to wave velocity and inversely proportional to length. Boundary conditions select which subset of harmonics can exist. Longitudinal modes use [[v_L]], determined by [[E_young]] and [[rho]], and torsional modes use [[v_T]], determined by [[G_shear]] and [[rho]]. The spectrum structure (equally spaced or odd-only) is a direct consequence of the symmetry or asymmetry of boundary conditions. Knowing resonance frequencies allows determining the elastic moduli of the material without destroying the sample.
`;export{e as default};
