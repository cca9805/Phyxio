## Conceptual errors


### Error 1: Believing that c is a postulate of Maxwell

**Why it seems correct**

Special relativity postulates that the speed of light is the same for all observers, which leads students to think [[velocidad_de_la_luz_en_el_vacio]] is also an axiom of electromagnetism. Many textbooks introduce [[velocidad_de_la_luz_en_el_vacio]] as a constant that "appears" in the equations without showing how it emerges from the derivation. The incorrect generalisation is understandable: if relativity postulates [[velocidad_de_la_luz_en_el_vacio]], perhaps Maxwell did too.

**Why it is incorrect**

Maxwell did not postulate [[velocidad_de_la_luz_en_el_vacio]]. The value emerges algebraically when combining the four differential equations in vacuum: the Laplacian of [[campo_electrico]] equals a coefficient times the second temporal derivative of [[campo_electrico]], and that coefficient is exactly [[mu0]]·[[epsilon0]]. Comparing with the standard scalar wave equation identifies the propagation speed as the reciprocal of the square root of that product. It is a derivation, not a premise.

**Detection signal**

The student writes phrases such as "Maxwell postulated that light travels at 3×10⁸ m/s" or cannot explain where [[velocidad_de_la_luz_en_el_vacio]] comes from in the wave equation. Another symptom is conflating the constant [[velocidad_de_la_luz_en_el_vacio]] (result of the derivation) with the relativistic invariance of [[velocidad_de_la_luz_en_el_vacio]] (which is Einstein's postulate, a distinct and later result).

**Conceptual correction**

The correct logical sequence is: Maxwell's equations → cross-elimination of fields → wave equation → identification of the propagation speed as [[velocidad_de_la_luz_en_el_vacio]] = 1/√([[mu0]]·[[epsilon0]]). The fact that this value matches the experimentally measured [[velocidad_de_la_luz_en_el_vacio]] is what demonstrated that light is an electromagnetic wave, not a postulate.

**Mini-contrast example**

If [[velocidad_de_la_luz_en_el_vacio]] were a postulate, one could choose arbitrary values of [[mu0]] and [[epsilon0]] and the wave equation would still hold. But inserting [[mu0]] = 4π×10⁻⁷ H/m and [[epsilon0]] = 8.854×10⁻¹² F/m (determined from electric and magnetic forces), the product [[mu0]]·[[epsilon0]] gives exactly 1/(3×10⁸)² m⁻²s². The agreement is not coincidental: it is the proof that [[velocidad_de_la_luz_en_el_vacio]] is derived.

---

**Mini-example of contrast**

Check 1: In Electromagnetic Wave Equation, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Confusing angular frequency with ordinary frequency

**Why it seems correct**

Both quantities describe "oscillation rate" and are denoted by different letters ([[omega]] and f), but students often perceive them as the same because in everyday language "frequency" is used without distinction. Many introductory problems state only f, and the 2π factor seems a minor technical detail.

**Why it is incorrect**

[[omega]] and f differ by a factor of 2π: [[omega]] = 2πf. Using [[omega]] where f is required (or vice versa) introduces errors of a factor 2π ≈ 6.28 in [[numero_de_onda]], [[lambda]], and in the argument of the plane-wave solution. An error of that size completely changes the computed wave number and wavelength.

**Detection signal**

If [[numero_de_onda]] computed from the dispersion relation and from the definition [[numero_de_onda]] = 2π/[[lambda]] differ by a factor of (2π)², the student has mixed [[omega]] and f at some step. Another symptom is obtaining a [[lambda]] that is a factor 6.28 larger or smaller than expected.

**Conceptual correction**

The vacuum dispersion relation is [[omega]] = [[velocidad_de_la_luz_en_el_vacio]]·[[numero_de_onda]], where both quantities use SI units: [[omega]] in rad/s and [[numero_de_onda]] in rad/m. To work with ordinary frequency f (in Hz) and [[lambda]] (in m), the equivalent relation is f = [[velocidad_de_la_luz_en_el_vacio]]/[[lambda]], which has no visible 2π factors because they cancel: (2πf) = [[velocidad_de_la_luz_en_el_vacio]]·(2π/[[lambda]]).

**Mini-contrast example**

Green light has f = 5.45×10¹⁴ Hz. Using this value directly instead of [[omega]] = 2πf to compute [[numero_de_onda]] = [[omega]]/[[velocidad_de_la_luz_en_el_vacio]] gives approximately 1.82×10⁶ rad/m rather than 1.14×10⁷ rad/m. The resulting [[lambda]] would be 3.45 μm, in the mid-infrared, not 550 nm in the visible. A factor-2π error immediately identifies the confusion.

---

## Model errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Extending the vacuum wave equation to lossy media

**Why it seems correct**

The vacuum wave equation has a clean, simple mathematical form. Students tend to use it as a universal starting point because it works well in all classroom examples, which are generally set in vacuum or ideal dielectrics. Extending it to real media seems a "technical detail" that does not change the essential structure of the solution.

**Why it is incorrect**

The homogeneous equation ∇²E = [[mu0]]·[[epsilon0]]·∂²E/∂t² only holds when there are no free currents, i.e., in vacuum and lossless dielectrics. In a conductor with conductivity σ, Ampère–Maxwell's law includes an additional term with the conduction current density, adding a first-order temporal term to the wave equation. The solution is no longer a sinusoid of constant amplitude: it has a decreasing exponential that attenuates the field with depth.

**Detection signal**

The student calculates that a radio wave penetrates a metallic conductor by several metres, whereas the actual value is of the order of micrometres or nanometres. Or the student uses the vacuum formula to calculate [[velocidad_de_la_luz_en_el_vacio]] in a conductor and obtains a result that violates causality.

**Conceptual correction**

In lossy media, the wave number [[numero_de_onda]] becomes complex. The real part determines the [[lambda]] inside the medium; the imaginary part determines the attenuation length (skin depth). In a good conductor, the penetration depth is proportional to the reciprocal of the square root of frequency and conductivity, and is of the order of micrometres at radiofrequencies.

**Mini-contrast example**

Copper has a skin depth of approximately 2 μm at 1 GHz. Using the vacuum wave equation would predict that the wave penetrates without attenuation, implying that copper shields are transparent to microwaves. This contradicts every experience with microwave ovens and Faraday cages.

---

## Mathematical errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Confusing phase velocity with group velocity

**Why it seems correct**

In vacuum, phase velocity (the ratio [[omega]]/[[numero_de_onda]]) and group velocity (the derivative d[[omega]]/d[[numero_de_onda]]) are identical and equal to [[velocidad_de_la_luz_en_el_vacio]]. Students who only work in vacuum never observe a difference and conclude that the two are always the same. The distinction seems an unnecessary refinement.

**Why it is incorrect**

In dispersive media, the refractive index depends on frequency. That means d[[omega]]/d[[numero_de_onda]] ≠ [[omega]]/[[numero_de_onda]], and the speed at which the pulse envelope propagates (group velocity) differs from the speed at which the phase propagates (phase velocity). Information and energy travel at the group velocity, not the phase velocity. In some strongly dispersive materials the phase velocity can exceed [[velocidad_de_la_luz_en_el_vacio]], but the group velocity cannot.

**Detection signal**

The student calculates the arrival time of an optical pulse in a glass fibre using [[velocidad_de_la_luz_en_el_vacio]]/n rather than the actual group velocity. The predicted time is incorrect, especially for short broadband pulses where dispersion is significant.

**Conceptual correction**

To calculate the propagation time of information, always use the group velocity dω/dk evaluated at the central frequency of the pulse. In vacuum, the dispersion relation is linear and both velocities equal [[velocidad_de_la_luz_en_el_vacio]]. In dispersive media, compute the medium's n(ω) relation first and then differentiate.

**Mini-contrast example**

In a standard single-mode optical fibre at 1550 nm, the group velocity is approximately [[velocidad_de_la_luz_en_el_vacio]]/1.47, while the phase velocity is [[velocidad_de_la_luz_en_el_vacio]]/1.46. The 0.7% difference seems small but accumulates a nanosecond-per-kilometre delay that limits data transmission rates. Ignoring this distinction produces bandwidth estimates wrong by several orders of magnitude.

---

## Interpretation errors

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.


### Error 5: Believing that E and B are independent in the wave

**Why it seems correct**

Electrostatics is studied without mentioning the magnetic field, and magnetostatics without the electric field. Students conclude that each field has physical meaning on its own and could propagate separately in a wave. Some textbooks present the electric field as the "primary" field and the magnetic as "secondary" or "induced", reinforcing the idea of hierarchy or independence.

**Why it is incorrect**

In a plane wave in vacuum, [[campo_electrico]] and [[campo_magnetico]] are completely coupled: Faraday's law requires that a varying [[campo_electrico]] always generate a curl in [[campo_magnetico]], and Ampère–Maxwell's law requires that a varying [[campo_magnetico]] always generate a curl in [[campo_electrico]]. A wave with only [[campo_electrico]] and no [[campo_magnetico]] would violate Faraday's law. Wave propagation is precisely the mutual regeneration cycle of the two fields.

**Detection signal**

The student asks "which of the two fields carries the energy?", or tries to compute the energy of the wave using only the electric field energy density. Another symptom is drawing the wave with only one oscillating field and omitting the other.

**Conceptual correction**

In a plane wave in vacuum, the energy densities of the electric and magnetic fields are equal at every point in time. Total energy is transported by the Poynting vector, which is the cross product of [[campo_electrico]] and [[campo_magnetico]] divided by [[mu0]]. Both fields contribute equally and are inseparable.

**Mini-contrast example**

Computing the energy density of sunlight using only [[campo_electrico]] (700 V/m) gives half the actual solar irradiance (1361 W/m²). Including [[campo_magnetico]] (2.3 μT) recovers the correct value because its energy density equals that of [[campo_electrico]]. The "missing half" reveals that ignoring one field produces a systematic 50% error in energy.

---

## Quick self-control rule

Before reporting any result from an electromagnetic wave calculation, verify the following points.

First: if the calculation uses [[velocidad_de_la_luz_en_el_vacio]], verify that it was obtained from [[mu0]] and [[epsilon0]] or taken as a known constant. If [[velocidad_de_la_luz_en_el_vacio]] appears as a free datum with no physical justification, reconsider the setup.

Second: if [[numero_de_onda]] or [[lambda]] is calculated from a frequency, verify that f was correctly converted to [[omega]] by multiplying by 2π before applying the dispersion relation. A result for [[lambda]] off by a factor of 2π signals this error.

Third: if the calculation is performed in a material medium, verify that the wave equation used includes the relative permittivity and permeability. The phase velocity in a medium is [[velocidad_de_la_luz_en_el_vacio]]/n, not [[velocidad_de_la_luz_en_el_vacio]].

Fourth: if the calculation involves pulse propagation in a dispersive medium, verify whether the group velocity is needed rather than the phase velocity. For narrowband pulses in vacuum, both coincide; in dispersive media, they do not.

Fifth: if the energy or intensity of the wave is calculated, verify that both field contributions, [[campo_electrico]] and [[campo_magnetico]], have been included. An energy calculation with only one field gives half the correct value.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.