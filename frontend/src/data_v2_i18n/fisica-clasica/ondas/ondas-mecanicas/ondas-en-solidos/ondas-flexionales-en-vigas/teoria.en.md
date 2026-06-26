## Conceptual context

When a metal bar or a train rail is struck, the disturbance does not propagate as a simple wave at constant speed. Bending waves — also called transverse curvature waves — are inherently **dispersive**: their propagation speed depends on frequency. High-frequency components travel faster than low-frequency ones, causing an initially compact pulse to broaden progressively as it traverses the beam.

This phenomenon explains why a blow on a rail sounds different depending on distance from the impact point: the listener perceives the high-frequency (high-speed) components first, followed by the low-frequency (low-speed) ones. Understanding flexural dispersion is fundamental in structural acoustics, musical instrument design, machinery vibration analysis and building noise control.

This leaf presents classical Euler-Bernoulli theory, which describes the propagation of bending waves in slender beams, and establishes the relationships between frequency, wavenumber, phase and group velocities, and the geometric and material parameters of the cross-section.

## 🟢 Essential level

A **bending wave** is a transverse disturbance that travels along a beam, producing local curvature. Unlike longitudinal waves (compression-tension), here the displacement is perpendicular to the beam axis.

The most important property of flexural waves is their **dispersion**: the speed at which they propagate depends on frequency. High-frequency components travel faster. This contrasts with waves on an ideal string, which all travel at the same speed regardless of frequency.

The propagation speed of bending depends on three factors:

- The **bending stiffness** of the beam, combining the material's Young's modulus ([[modulo_de_young]]) with the cross-section shape (second moment of area [[momento_de_inercia_de_la_seccion_transversal]]). A stiffer beam propagates waves faster.
- The **mass per unit length** ([[rho_lin]]). A heavier beam propagates waves more slowly.
- The **frequency** of the wave ([[omega]]). Higher frequency means higher speed.

Two relevant velocities exist:
- **Phase velocity** ([[v_fase_flex]]): the speed at which a crest-and-trough pattern moves.
- **Group velocity** ([[v_grupo_flex]]): the speed at which energy travels. In beams, group velocity is exactly twice the phase velocity.

> [!NOTE]
> Bending waves are always slower than longitudinal waves in the same material. At 1 kHz in a 5 mm steel bar, flexural phase velocity is about 130 m/s, compared to 5100 m/s for the longitudinal wave.

## 🔵 Formal level

The Euler-Bernoulli dispersion relation establishes the connection between angular frequency [[omega]] and wavenumber [[k_flex]]:

{{f:relacion_dispersion_flex}}

This quadratic relation ([[omega]] proportional to the square of the wavenumber) is the source of all the dispersion. Phase velocity is defined as the ratio between angular frequency and wavenumber:

{{f:velocidad_fase_flexional}}

The square-root dependence on [[omega]] confirms that higher-frequency waves propagate faster. Group velocity, defined as the derivative of [[omega]] with respect to [[k_flex]], turns out to be exactly twice the phase velocity:

{{f:velocidad_grupo_flexional}}

The 2:1 ratio between group and phase velocity is a direct consequence of quadratic dispersion and constitutes a diagnostic signature of the Euler-Bernoulli model.

The flexural wavelength relates to [[k_flex]] in the standard way:

{{f:longitud_onda_flexional}}

As frequency increases, [[lambda_flex]] decreases as the inverse square root of [[omega]], not proportionally as in non-dispersive waves. This means wavelength shortening is slower than intuition suggests.

> [!TIP]
> For a quick estimate of flexural phase velocity: compute the section radius of gyration ([[r_giro]]) and multiply by the square root of [[omega]] times the longitudinal velocity of the material. The result will be of the correct order.

## 🔴 Structural level

The Euler-Bernoulli equation of motion for a uniform beam produces a fourth-order partial differential equation in the transverse displacement. Its general solution includes not only propagating waves but also **evanescent waves** that decay exponentially from sources or discontinuities.

The characteristic equation admits four roots for the wavenumber: two real (propagating waves in both directions) and two imaginary (evanescent waves). In an infinite beam, only the propagating ones matter; in a finite beam, evanescent waves are essential for satisfying boundary conditions and produce the near fields that dominate in the vicinity of supports and sources.

The **dispersion curve** of [[omega]] versus [[k_flex]] is a parabola passing through the origin. Its slope at any point gives the group velocity, while the slope of the line joining the point to the origin gives the phase velocity. The parabolic relation implies that **phase velocity tends to zero** as [[omega]] tends to zero (very long waves barely propagate) and **grows without bound** at high frequencies.

However, at high frequencies the Euler-Bernoulli model ceases to be valid because it ignores two effects:
- **Transverse shear deformation**, which limits the actual speed below the material's shear wave speed.
- **Rotational inertia** of the sections, which adds an additional inertial term.

The **Timoshenko** model incorporates both effects and predicts that phase velocity saturates at the shear wave speed (approximately 0.6 times the longitudinal speed). The transition between Euler-Bernoulli and Timoshenko occurs when [[lambda_flex]] approaches the section thickness.

**Dispersion** has important practical consequences:
- A short pulse (impact) broadens temporally as it propagates, because its frequency components travel at different speeds.
- The arrival shape of a pulse at a distant observer allows determination of material properties if measured with temporal precision (guided-wave ultrasonic technique).
- In finite structures, bending resonance modes are not equally spaced (unlike longitudinal waves), producing a dense modal spectrum at high frequencies.

The **radius of gyration** [[r_giro]] of the section plays a central role as an intrinsic length scale. Phase velocity can be written as the product of the radius of gyration, the material's longitudinal speed and the square root of k: when [[lambda_flex]] becomes comparable to [[r_giro]], Timoshenko corrections become necessary.

> [!WARNING]
> Flexural phase velocity can numerically exceed longitudinal speed if the Euler-Bernoulli model is extrapolated to excessively high frequencies. This signals that the model has ceased to be valid, not that physics allows exceeding that limit.

## Deep physical interpretation

Flexural dispersion reflects a fundamental geometric fact: the bending stiffness of a beam is not simply an elastic constant, but involves **fourth-order spatial derivatives** of displacement. Whereas a string (second derivative) produces non-dispersive waves, a beam (fourth derivative) produces quadratic dispersion. The order of the spatial derivative directly determines the dispersion law.

The physical reason is that beam bending involves both compression and tension in fibres away from the neutral axis, and this stress distribution depends on local curvature, which in turn depends on the second derivative of displacement. The restoring force per unit length is proportional to the fourth derivative, not the second.

The product [[modulo_de_young]]·[[momento_de_inercia_de_la_seccion_transversal]] (bending stiffness EI) plays a dual role: it controls both the magnitude of resonance frequencies and the speed of perturbation propagation. For vibration design, the ratio EI/[[rho_lin]] is the master parameter: materials with high E and low density (aluminium, titanium, composites) produce beams with higher phase velocities per kg of structure.

## Order of magnitude

For a rectangular steel bar with a 5 mm × 20 mm section:
- [[modulo_de_young]] is 210 GPa (in SI: 210 × 10⁹ Pa)
- [[momento_de_inercia_de_la_seccion_transversal]] is 20 × 5³ / 12 × 10⁻¹² m⁴, giving 2.08 × 10⁻¹⁰ m⁴
- [[rho_lin]] is 7850 × 0.005 × 0.020, giving 0.785 kg/m
- At [[omega]] of 6283 rad/s (1 kHz), [[v_fase_flex]] is approximately 130 m/s
- [[v_grupo_flex]] is approximately 260 m/s
- [[lambda_flex]] is approximately 0.13 m

For comparison, longitudinal velocity in the same steel is 5100 m/s: the flexural wave travels 40 times slower at 1 kHz. At 10 kHz, phase velocity rises to about 410 m/s and at 100 kHz to 1300 m/s, gradually approaching the model limit.

If [[v_fase_flex]] exceeds 5000 m/s for a steel beam at audible frequency, there is a unit error: most likely [[momento_de_inercia_de_la_seccion_transversal]] is in cm⁴ without conversion.

## Personalized resolution method

To calculate flexural phase velocity in a beam:

1. Obtain [[modulo_de_young]] of the material in Pa (if in GPa, multiply by 10⁹).
2. Calculate [[momento_de_inercia_de_la_seccion_transversal]] of the section in m⁴. For a rectangular section of width b and height h in the bending direction: b·h³/12.
3. Calculate [[rho_lin]] as [[rho_vol]] × [[area_de_la_seccion_transversal]], where [[area_de_la_seccion_transversal]] is b·h for rectangular section.
4. Define [[omega]] in rad/s (if starting from Hz, multiply by 2π).
5. Apply the [[v_fase_flex]] formula: fourth root of EI times [[omega]] squared divided by rho·A.
6. Calculate [[v_grupo_flex]] as twice [[v_fase_flex]].
7. Calculate [[lambda_flex]] as 2π divided by [[k_flex]], where [[k_flex]] is obtained by dividing [[omega]] by [[v_fase_flex]].
8. Verify that [[lambda_flex]] is at least 6 times the section thickness.

If step 8 is not satisfied, the Euler-Bernoulli model is unreliable and Timoshenko should be used.

## Special cases and extended example

**Circular beam:** for a circular section of radius r, [[momento_de_inercia_de_la_seccion_transversal]] is π·r⁴/4 and [[area_de_la_seccion_transversal]] is π·r². The radius of gyration is r/2. Circular bars are common in mechanical engineering and flexural dispersion determines the free vibration frequency of rotating shafts.

**I-beam:** open I-sections have much greater moment of inertia than solid sections of the same weight, because they concentrate material far from the neutral axis. This raises flexural phase velocity and resonance frequencies, which is the main reason engineering uses open profiles.

**Short vs. long beams:** when beam length is comparable to a few wavelengths, boundary conditions dominate the response and resonance modes are discrete. When the beam is much longer than [[lambda_flex]], free propagation dominates and the phase velocity concept is directly applicable.

**Low-frequency limit:** when [[omega]] tends to zero, [[v_fase_flex]] tends to zero. The beam then responds quasi-statically, linking wave dynamics with structural statics.

## Real student questions

**Why does flexural phase velocity depend on frequency while longitudinal does not?**
Because the restoring force in bending involves the fourth spatial derivative of displacement, not the second. The fourth-order derivative introduces a wavenumber dependence that produces dispersion. In longitudinal waves, the restoring force only depends on the second derivative and there is no dispersion.

**Can flexural phase velocity exceed longitudinal velocity?**
Not in physical reality. The Euler-Bernoulli model predicts a phase velocity that grows without bound with frequency, but this is an artifact of the simplified model. At high frequencies, shear deformation limits the actual velocity to the shear wave speed (about 3100 m/s in steel).

**Why is group velocity greater than phase velocity?**
Because the curve of [[omega]] versus wavenumber is convex. The tangent (group velocity) has a greater slope than the secant from the origin (phase velocity), typical of bending-wave dispersion.

**What is the practical use of knowing group velocity?**
To calculate how long a perturbation's energy takes to traverse the beam. If a blow occurs 10 metres away and group velocity at the dominant frequency is 500 m/s, the perturbation arrives in 20 milliseconds. Phase velocity does not provide this information because it does not transport energy.

## Cross-cutting connections and study paths

Flexural waves connect directly with the leaf on [longitudinal waves in bars](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-longitudinales-en-barras), which treats the non-dispersive case. The comparison between both types of propagation is essential for understanding why bending produces dispersion and compression does not.

The extension to two dimensions is treated in the leaf on [modes in plates and membranes](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/modos-en-placas-y-membranas), where plate bending stiffness is the two-dimensional analogue of EI.

For materials with damping, the relationship with the leaf on [dispersion and attenuation in solids](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/dispersion-y-atenuacion-en-solidos) is direct: flexural dispersion combines with attenuation to produce pulse envelopes that decay and broaden simultaneously.

## Final synthesis

Bending waves in beams are inherently dispersive: their propagation speed grows with the square root of frequency. Group velocity is exactly twice the phase velocity in the Euler-Bernoulli model, reflecting quadratic dispersion. The control parameters are bending stiffness EI and linear mass [[rho_lin]], and the model is valid as long as wavelength is much greater than the section thickness.