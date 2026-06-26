const e=`# Snell's Law

## Conceptual context

When a ray of light crosses the boundary between two transparent media with different optical properties, it changes direction. This phenomenon, **refraction**, is one of the oldest observations in optics and the foundation for the design of lenses, prisms and optical fibres. Snell's law quantifies this deviation by establishing an exact proportion between the sines of the angles of incidence and refraction, weighted by the refractive indices of each medium.

The law not only predicts where the ray bends, but imposes an **absolute limit**: when light attempts to pass from a denser medium to a less dense one at a sufficiently large angle, refraction becomes impossible and all the energy is reflected. Understanding this threshold —the critical angle— is essential for technologies such as fibre-optic communications and total-reflection prisms.

## 🟢 Essential level

Snell's law states how a ray changes **direction** when it crosses an interface. The index [[n1]] of the incident medium and the index [[n2]] of the refracted medium, together with the incidence angle [[theta_1]], determine the refraction angle [[theta_2]]. If light enters an optically denser medium, the ray bends toward the normal; if it enters a less dense one, it bends away.

When light travels from a medium of higher [[n1]] toward another of lower [[n2]], there exists a special angle of incidence called the critical angle [[theta_c]], above which no light is transmitted into the second medium. At that point the refracted ray would travel parallel to the surface, and for larger angles all the light is internally reflected. This phenomenon, total internal reflection, is the basis of how optical fibres and total-reflection prisms work. It occurs only when light attempts to pass from a denser to a less dense medium, never in the opposite direction.

## 🔵 Formal level

Snell's law in its general form relates the angles and the indices of both media through the conservation of the tangential component of the wave vector at the interface:

{{f:ley_snell}}

This expression allows the calculation of [[theta_2]] given [[theta_1]], [[n1]] and [[n2]], or the determination of any of the four quantities when the other three are known. The existence condition for the refracted ray requires that the ratio [[n1]] times the sine of [[theta_1]] divided by [[n2]] does not exceed unity; if it does, the arcsine has no real solution and no refracted ray exists.

The **critical angle** is obtained by imposing that [[theta_2]] reaches ninety degrees, that is, the sine of the refracted angle equals one:

{{f:angulo_critico}}

For [[theta_1]] greater than [[theta_c]], Snell's law has no real solution for [[theta_2]], which physically corresponds to total internal reflection. This phenomenon is not a failure of the model but a direct prediction of the same equation. The critical angle exists only when [[n1]] is greater than [[n2]]; in the opposite direction, every angle of incidence produces a valid refracted ray.

Snell's law can be derived from the boundary conditions of Maxwell's equations at a flat interface: the tangential component of the electric field must be continuous, forcing the equality of the horizontal projections of the wave vectors in both media. It can also be derived from **Fermat's principle**: the optical path between two points separated by an interface is stationary, leading to the same sinusoidal relation. Both derivations confirm that the law is not an empirical fit but a consequence of fundamental physical principles.

## 🔴 Structural level

Snell's law is a geometric consequence of the translational invariance of the interface. Since the flat surface does not distinguish positions along itself, the component of the photon momentum parallel to the interface is conserved. This is formally identical to conservation of linear momentum in the direction without a potential. The relation between the sines of the angles is not an isolated empirical finding but a particular case of a deep symmetry principle.

The **domain of validity** of the law requires several simultaneous conditions. First, the interface must be flat on the scale of the wavelength; if roughness is comparable to the wavelength, diffraction dominates. Second, the media must be **homogeneous and isotropic**: in birefringent crystals the law splits into two, one per polarisation. Third, the light must be monochromatic; otherwise each spectral component refracts at a different angle (chromatic dispersion).

When the interface is not flat, Snell's law still applies **locally** using the local normal, enabling ray tracing through curved lenses. This local reading is essential: each point of a lens has a different normal, so one surface can make a beam converge, diverge, or develop aberration. The angular calculation belongs to the exact impact point, not to the whole surface at once.

The natural graph for this leaf shows [[theta_2]] against [[theta_1]] for fixed values of [[n1]] and [[n2]]. If the second medium has the larger index, the curve lies below the conceptual diagonal because the ray bends toward the normal. If the first medium has the larger index, the curve grows up to a threshold marked by [[theta_c]]; beyond it an ordinary transmitted ray should not be drawn. This graphical reading prevents a common mistake: extending the curve as if the arcsine always had a physical solution.

The law also separates two questions that students often mix. Snell predicts **direction**, not transmitted intensity. At grazing incidence, reflectivity may increase strongly according to the Fresnel equations, but the direction of the refracted ray is still fixed by phase geometry. To decide how much energy enters the second medium one needs another model; to decide where the ray points, Snell is enough while its assumptions hold.

## Deep physical interpretation

The behaviour of the ray when crossing the interface can be understood as a phase-speed adjustment. Light, upon entering a denser medium, slows down; to maintain the coherence of the wavefronts at the interface, the ray must change direction. It is a direct analogy with a plane wave on water crossing a boundary where depth changes abruptly: the part of the wavefront that enters the slower zone first is delayed, causing the front to rotate.

The critical angle marks the transition between two qualitatively different regimes. Below it, a refracted ray exists that carries energy into the second medium. Above it, all energy returns to the first medium and in the second only an **evanescent wave** penetrates, whose amplitude decays exponentially. This evanescent wave carries no net energy in the direction perpendicular to the interface, but it can couple to another nearby medium (optical tunnelling or frustrated total reflection).

## Order of magnitude

For the glass–air interface (crown glass with [[n1]] of approximately 1.52 and air with [[n2]] of approximately 1.00), the critical angle is close to 41 degrees. This means any ray with incidence above 41 degrees inside the glass is totally reflected. At the water–air interface ([[n1]] of 1.33 and [[n2]] of 1.00) the critical angle is about 49 degrees. For diamond ([[n1]] of 2.42 and [[n2]] of 1.00) the critical angle drops to only 24 degrees, explaining the intense brilliance and internal flashes of cut gemstones.

If a student obtains a refracted angle greater than ninety degrees, the result is physically absurd: it indicates that the input data fall in the total reflection zone. If a negative refracted angle is obtained, the media have probably been inverted or the angle measured from the surface rather than the normal.

## Personalized resolution method

> [!TIP]
> Operational sequence for refraction problems using Snell's law.

1. **Identify the media**: determine which is medium 1 (where the incident ray travels) and which is medium 2 (where the refracted ray travels). Assign [[n1]] and [[n2]] correctly.
2. **Verify the angular reference**: confirm that the given angle is measured from the normal, not from the surface. If it is measured from the surface, subtract from ninety degrees.
3. **Check existence of refraction**: calculate the product [[n1]] times the sine of [[theta_1]] divided by [[n2]]. If the result exceeds unity, refraction does not exist and total reflection occurs.
4. **Apply Snell's law**: calculate the arcsine to obtain [[theta_2]].
5. **Validate**: the refracted angle must lie between zero and ninety degrees and must be smaller than the incident angle if passing to a denser medium, or larger if passing to a less dense one.

## Special cases and extended example

> [!NOTE]
> Normal incidence: when [[theta_1]] is zero, the sine is zero and [[theta_2]] is also zero. The ray crosses the interface without deviation, regardless of the indices. Only the speed and wavelength change, not the direction.

> [!WARNING]
> Grazing incidence: when [[theta_1]] approaches ninety degrees, the sine tends to one and [[theta_2]] also tends to its maximum value. In this limit, the reflectivity of the interface (given by the Fresnel equations) approaches one hundred per cent even without exceeding the critical angle; in practice almost all light is reflected at very grazing incidences.

Total-reflection prism case: a glass prism with faces at forty-five degrees exploits the fact that the critical angle of glass–air is about 41 degrees. Rays enter perpendicularly to the first face, cross the prism, strike the hypotenuse at 45 degrees —above the critical angle— and are totally reflected, redirecting the beam by ninety degrees. This design is more efficient than a metallic mirror because there is no absorption.

## Real student questions

**Why is the angle measured from the normal and not from the surface?**
Because the normal is the symmetry direction of the problem: the optical properties do not change along the surface, they only change when crossing perpendicularly. Measuring from the normal simplifies the law to an equality of sine products.

**Why can total reflection not exist when light goes from the less dense medium to the denser one?**
Because in that direction, [[n1]] is less than [[n2]], and the ratio [[n1]] times the sine of the angle divided by [[n2]] is always less than one for any angle of incidence. The argument of the arcsine never exceeds unity.

**What happens to the luminous energy when there is total reflection?**
All reflected energy returns to medium 1. In medium 2 an evanescent wave appears that decays exponentially; it does not transport net energy away from the interface. If another medium approaches to within distances of the order of the wavelength, some energy can couple through (frustrated total reflection).

**Does Snell's law work for sound waves or water waves?**
Yes. The law is a general consequence of the conservation of the tangential component of the wave vector and applies to any wave crossing an interface between two media where the propagation speed differs. In underwater acoustics it is used constantly.

## Cross-cutting connections and study paths

Snell's law connects directly to [speed change](leaf:fisica-clasica/ondas/fenomenos-ondulatorios/refraccion/cambio-de-velocidad), which explains why the indices [[n1]] and [[n2]] represent different propagation speeds in each medium. Conceptually it links to **Fermat's principle** (stationary optical path), which unifies reflection and refraction under a single variational principle.

Further along the didactic route, Snell's law is a prerequisite for understanding **lenses** (successive application to curved surfaces) and **optical instruments** (microscopes, telescopes). Laterally, it connects to **diffraction** when the interface dimensions shrink, and to **chromatic dispersion** when the wavelength dependence of the index is considered.

## Final synthesis

Snell's law translates a symmetry principle —conservation of the tangential component of the wave vector— into a direct calculation tool that predicts the direction of the refracted ray and establishes an absolute threshold of total reflection. Mastering it requires discipline in assigning media, measuring from the normal, and verifying the existence of the refracted ray before applying the arcsine.
`;export{e as default};
