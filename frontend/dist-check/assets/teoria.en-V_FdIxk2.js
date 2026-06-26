const e=`# Electromagnetic Wave Equation

## Conceptual context

Maxwell's equations are four laws governing the fields [[E]] and [[B]] at every point in space and time. Taken individually, each equation describes a local relationship: how much divergence or curl the field has at each point. But when combined — applying the curl operator to Faraday's law and substituting Ampère–Maxwell's law — something unexpected emerges: a wave equation.

This derivation was the greatest theoretical achievement of the nineteenth century. Maxwell measured nothing new: he simply manipulated the equations already known and found that the electric and magnetic fields could propagate independently, without material support, at a speed that turned out to match exactly the measured speed of light. Electromagnetism and optics, two apparently separate branches of physics, were unified within a single framework.

The concrete result is the **electromagnetic wave equation**, which states that [[E]] and [[B]] propagate as waves at speed [[c]], and that [[c]] is a direct consequence of the vacuum constants [[epsilon0]] and [[mu0]].

## 🟢 Essential level

A light wave is an electric field [[E]] and a magnetic field [[B]] that oscillate simultaneously and sustain each other. A varying [[E]] generates [[B]], and a varying [[B]] generates [[E]]: the two fields feed each other and propagate through vacuum without any material medium.

The key is speed: the wave propagates at [[c]] = 3×10⁸ m/s. This speed is not measured directly; **it is derived from the values of [[epsilon0]] and [[mu0]]**, the constants that describe how vacuum responds to electric and magnetic fields. The fact that this number agreed with the speed of light measured by Fizeau in 1849 was the signal that light is an electromagnetic wave.

An electromagnetic wave in vacuum is always **transverse**: [[E]] and [[B]] oscillate perpendicularly to the direction of propagation and perpendicularly to each other. There is no oscillation along the direction of travel; all energy moves forward.

## 🔵 Formal level

The derivation starts from Maxwell's differential equations in vacuum (no charges or currents). The curl operator is applied to Faraday's law:

{{f:onda_E}}

The right-hand side contains the second temporal derivative of [[E]]. The coefficient multiplying this derivative is the product [[mu0]]·[[epsilon0]]. Comparing with the standard scalar wave equation ∇²f = (1/v²)∂²f/∂t², the propagation speed is immediately identified:

{{f:velocidad_luz}}

The numerical value [[c]] = 1/√(μ₀ε₀) ≈ 2.998×10⁸ m/s matches the experimentally measured speed of light. The same procedure applied to Ampère–Maxwell's law yields the symmetric equation for [[B]]:

{{f:onda_B}}

Both fields satisfy the same equation, confirming they propagate at [[c]] with identical structure. For a plane wave travelling in the +x direction, the relation between [[omega]] and [[k]] is obtained by substituting the exponential form into the wave equation:

{{f:relacion_dispersion}}

This **linear dispersion relation** means that in vacuum there is no dispersion: all frequencies propagate at the same speed [[c]]. The simplest explicit solution is the monochromatic plane wave:

{{f:solucion_onda_plana_E}}

where [[E]] oscillates in the yz plane (transverse to x), with angular frequency [[omega]] and wave number [[k]] linked by [[omega]] = [[c]]·[[k]]. The wavelength [[lambda]] = 2π/[[k]] and the frequency f = [[omega]]/(2π) determine the position in the electromagnetic spectrum.

## 🔴 Structural level

The electromagnetic wave equation is not merely a formula: it reveals that vacuum has dynamic properties. The constants [[epsilon0]] and [[mu0]] are not arbitrary parameters; they are fixed by the fundamental electric and magnetic interactions. Their product determines [[c]], and the fact that [[c]] is finite and universal is a direct consequence of the structure of the electromagnetic field.

**Vector character and polarization.** The wave equation is vectorial: each component of [[E]] satisfies an independent scalar wave equation. This gives rise to the phenomenon of **polarization**: the direction of oscillation of [[E]] in the transverse plane can be linear, circular, or elliptical, depending on the phase and amplitude relationship between the components. Polarization is a purely electromagnetic property with no equivalent in scalar mechanical waves.

**Relation between E and B in the wave.** In a plane wave, the amplitudes of [[E]] and [[B]] are related by |E| = [[c]]·|B|. This relation is not coincidental: it follows directly from the local Faraday law. Since [[c]] = 3×10⁸ m/s, the field [[B]] is 3×10⁸ times weaker in SI units than [[E]], although in natural units both contribute equally to the energy.

**Invariance under changes of reference frame.** The speed [[c]] is the same for all inertial observers. This property — which Maxwell's equations satisfy and Newtonian mechanics does not — was Einstein's starting point for special relativity. Maxwell inadvertently predicted that spacetime has a non-Newtonian structure.

**Limits of validity.** The wave equation as written is valid in vacuum. In a material medium with relative permittivity εᵣ and relative permeability μᵣ, the phase velocity becomes v = [[c]]/n, where n = √(εᵣμᵣ) is the refractive index. In dispersive media, n depends on frequency and different spectral components travel at different speeds, causing pulse dispersion. The wave equation in real media can also include absorption terms (imaginary part of the refractive index).

**Standing waves and resonators.** The solutions of the wave equation are not only travelling waves: combining two counter-propagating plane waves yields a standing wave. Fields in resonant cavities (such as those used in particle accelerators or microwave ovens) are standing solutions with boundary conditions that select discrete frequencies ([[omega]] = n·π·[[c]]/L). The wave equation determines the eigenmodes of the resonator.

## Deep physical interpretation

The energy of an electromagnetic wave does not reside in conductors or in any medium; it resides **in the fields themselves**. The electromagnetic energy density is proportional to ε₀|E|² + |B|²/μ₀, and this energy propagates at [[c]] in the direction of the Poynting vector **S** = (1/μ₀)·**E** × **B**. The wave requires no "luminiferous aether": the field is the physical reality, and its energy is transported through vacuum with perfect efficiency.

The symmetry between [[E]] and [[B]] in the wave equation reflects the electromagnetic duality symmetry. If one swaps [[E]] → [[c]]·[[B]] and [[c]]·[[B]] → −[[E]], Maxwell's equations in vacuum are invariant. This dual symmetry has no direct observable consequences in classical physics but forms the basis of useful transformations in electrodynamics and in quantum extensions of the field.

## Order of magnitude

In vacuum, [[c]] = 2.998×10⁸ m/s. A visible light photon (λ ≈ 500 nm) has [[k]] ≈ 1.26×10⁷ rad/m and [[omega]] ≈ 3.77×10¹⁵ rad/s. A domestic microwave operates at 2.45 GHz ([[omega]] ≈ 1.54×10¹⁰ rad/s, λ ≈ 12 cm). A 1 MeV gamma ray has λ ≈ 1.24×10⁻¹² m.

The amplitude of [[E]] in direct sunlight is about 700 V/m, while the associated [[B]] is only 700/3×10⁸ ≈ 2.3×10⁻⁶ T. A result for [[c]] outside the range (2.9–3.1)×10⁸ m/s is physically absurd and signals an error in the constants entered.

## Personalized resolution method

For propagation problems in vacuum, the standard procedure is:

1. Identify whether [[c]], [[omega]], [[k]], or [[lambda]] is requested.
2. Use [[c]] = 1/√(μ₀ε₀) only when [[c]] is to be derived from fundamental constants.
3. To convert between [[omega]], [[k]], and [[lambda]]: apply [[omega]] = [[c]]·[[k]] and [[lambda]] = 2π/[[k]].
4. Verify dimensional consistency: [[omega]] in rad/s, [[k]] in rad/m, [[lambda]] in m.
5. If the medium is not vacuum, replace [[c]] by v = [[c]]/n with n = √(εᵣμᵣ).

The most common pitfall is confusing angular frequency [[omega]] with ordinary frequency f. The relation is [[omega]] = 2πf. Converting [[k]] to [[lambda]] also causes errors: [[lambda]] = 2π/[[k]], not 1/[[k]].

## Special cases and extended example

**Wave in a dispersive medium.** In optical glass, the refractive index for visible light is about 1.5. The phase velocity is [[c]] divided by that index, roughly two-thirds of [[c]]. The wavelength in the glass is proportionally shorter than in vacuum for the same frequency. This difference is the cause of Snell's refraction.

**Rectangular resonant cavity.** A cavity of dimensions a × b × d selects discrete wave-number modes. The frequency of the lowest mode is [[c]] divided by twice the largest dimension. For a 10 cm side cavity this gives about 1.5 GHz, in the microwave band: the operating principle of domestic ovens.

**Gaussian pulse and dispersion.** A light pulse is not monochromatic but a superposition of frequencies. In vacuum, all travel at [[c]] and the pulse does not disperse. In a dispersive medium where n depends on frequency, different components travel at different speeds: the pulse broadens with distance. This effect limits transmission rates in optical fibres.

## Real student questions

**Is the speed of light a postulate or is it derived?** It is derived. Maxwell did not postulate [[c]]; he simply combined Gauss's, Faraday's, and Ampère's equations and obtained the wave equation. The speed [[c]] = 1/√(μ₀ε₀) is a mathematical consequence of those laws. What surprised Maxwell was that this value matched the experimentally measured [[c]].

**Why are E and B perpendicular to each other?** In a plane wave in vacuum, Gauss's law with no charges requires [[E]] to be perpendicular to the propagation direction. Faraday's law then forces [[B]] to be perpendicular to both [[E]] and that direction. The transversality of both fields is a direct consequence of Maxwell's equations, not an additional assumption.

**Can there be a wave with only E or only B?** No, not in vacuum. The two fields are coupled: varying [[E]] generates [[B]] (Faraday) and varying [[B]] generates [[E]] (Ampère–Maxwell). A wave with only [[E]] would violate Faraday's law. The two fields always coexist in the wave and are inseparable.

**What happens to the wave equation in vacuum if there are charges?** If charges or currents are present, source terms appear in Maxwell's equations and the homogeneous wave equation no longer holds directly. An inhomogeneous equation with sources is obtained, whose solution includes the waves emitted by accelerated charges (radiation).

## Cross-cutting connections and study paths

The electromagnetic wave equation connects directly to the [differential formulation of Maxwell](leaf:fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/formulacion-diferencial), from which it is derived, and to the [integral formulation](leaf:fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/formulacion-integral), which provides the global framework. The natural next step is the study of [electromagnetic waves in media](leaf:fisica-clasica/electromagnetismo/ondas-electromagneticas/propagacion-en-medios), where the refractive index and dispersion appear.

On the mathematical side, the wave equation is also the entry point to advanced vector calculus: the vector Laplacian ∇², the method of separation of variables in spherical and cylindrical geometries, and the Fourier transform as a spectral analysis tool. On the physical side, the invariance of [[c]] is the starting point of special relativity.

## Final synthesis

The electromagnetic wave equation is the deepest consequence of Maxwell's equations: it demonstrates that the fields [[E]] and [[B]] can exist and propagate alone in vacuum at the universal speed [[c]] = 1/√(μ₀ε₀), without material support. This prediction unified optics and electromagnetism, and was the first indication that Newtonian mechanics needed to be reformulated.
`;export{e as default};
