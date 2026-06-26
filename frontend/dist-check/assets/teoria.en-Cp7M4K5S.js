const e=`# Reflection

## Conceptual context

Reflection of light is the phenomenon by which a luminous ray changes direction upon encountering a surface without passing through it. It underpins all mirror optics and numerous everyday devices, from rear-view mirrors to reflecting telescopes. Understanding reflection allows one to predict exactly where light travels after striking a surface and explains phenomena as diverse as image formation in a mirror or signal transmission in optical fibre.

Within geometrical optics, reflection is treated as an instantaneous change in the ray's direction at the contact point with the surface, without considering wave effects. This idealisation holds whenever the surface is smooth at the scale of the wavelength.

## 🟢 Essential level

When a ray of light reaches a polished surface, it **bounces**. The direction of the bounce is not arbitrary: the reflected ray leaves at the same angle to the perpendicular of the surface as the angle at which it arrived. That perpendicular is called the **normal**, and angles are always measured from it, not from the surface itself.

This rule is universal: it works equally for a bathroom mirror, the surface of a calm lake or a metallic sheet. The incident ray, the normal and the reflected ray share the same plane, and the angles [[theta_i]] and [[theta_r]] are identical. If light arrives perpendicularly, it returns along the same path; if it arrives at an angle, it reflects with the same inclination on the other side of the normal.

## 🔵 Formal level

The law of reflection is stated as an exact equality between angles:

{{f:ley_reflexion}}

This relationship establishes that [[theta_r]] always replicates [[theta_i]], regardless of the nature of the reflecting material or the wavelength of the light. The angles are measured in the plane of incidence, defined by the incoming ray and the surface normal at the contact point. The law is complemented by the coplanarity condition: incident ray, normal and reflected ray belong to the same plane.

When light travels inside an optically dense medium and reaches an interface with a less dense medium, a limiting angle exists above which no light is transmitted:

{{f:angulo_critico}}

The critical angle [[theta_c]] depends exclusively on the ratio between the indices [[n2]] and [[n1]]. If [[theta_i]] exceeds [[theta_c]], reflection is total: all luminous energy is reflected without loss. This phenomenon forms the basis of optical fibre operation and total internal reflection prisms.

The law of reflection is a special case of Fermat's principle (light follows the path of minimum time) and also derives from the boundary conditions of Maxwell's equations at the interface between two media.

## 🔴 Structural level

The deep structure of reflection reveals that this phenomenon is a direct consequence of the **continuity of electromagnetic fields** at the boundary between two media. Maxwell's boundary conditions require the tangential components of the electric and magnetic fields to be continuous at the interface, which geometrically imposes the equality of angles.

From the perspective of Fermat's principle, reflection minimises the propagation time between two points subject to the constraint of touching the surface. This variational condition produces the equality between [[theta_i]] and [[theta_r]] without postulating it as an independent axiom.

Reflection exhibits different regimes depending on surface quality:

- **Specular reflection**: the surface is smooth at the wavelength scale. The law holds exactly for each individual ray.
- **Diffuse reflection**: the surface has roughness comparable to the wavelength. Each point has a different local normal and the rays scatter in multiple directions.
- **Mixed reflection**: surfaces with a dominant specular component but residual scattering from imperfections.

> [!WARNING]
> The law of reflection predicts a unique reflected ray only when the surface is specular. For real surfaces with roughness, a statistical model of the local normal distribution is required.

The critical angle marks an **abrupt transition** between two regimes: below [[theta_c]], the interface partially transmits; above it, reflection is total. This transition has enormous technological implications, as it allows light to be confined within waveguides without absorption losses.

The relationship between reflection and refraction is not independent: both are complementary manifestations of the electromagnetic boundary conditions. Snell's law and the law of reflection emerge simultaneously from the same boundary analysis. The Fresnel coefficients quantify what fraction of the energy is reflected and what fraction is transmitted as a function of [[theta_i]], the polarisation and the indices of the media.

## Deep physical interpretation

The physical meaning of the law of reflection expresses a **fundamental symmetry**: the interface introduces no asymmetry between the half-plane of entry and the half-plane of exit of the ray. The reflected ray is the mirror image of the incident ray with respect to the normal.

This symmetry has measurable consequences. In a plane mirror, the image of an object forms at the same distance behind the mirror as the object's distance from the mirror, preserving size and shape but inverting chirality (lateral inversion). The law operates locally: on a curved mirror, each surface point reflects according to its own local normal, and the overall image results from the collective convergence or divergence of all those individual rays.

## Order of magnitude

The law of reflection has no dimensional parameters of its own (it operates with pure angles), but the relevant scale is the **surface roughness compared to the wavelength**. For visible light (wavelength from 400 to 700 nanometres), a surface with roughness below 50 nanometres produces specular reflection. A telescope mirror has roughness below 20 nanometres. A sheet of paper has roughness of the order of micrometres, a thousand times greater than the wavelength, which is why it reflects diffusely.

If a student obtains a reflection angle different from the incidence angle on a specular surface, the result is physically absurd and indicates a measurement or calculation error.

## Personalized resolution method

To solve reflection problems, follow this sequence:

1. Identify the **reflecting surface** and draw the **normal** at the point of incidence.
2. Measure [[theta_i]] from the normal, not from the surface.
3. Apply the law of reflection: [[theta_r]] equals [[theta_i]].
4. If the critical angle is requested, verify that [[n1]] is greater than [[n2]] and calculate [[theta_c]].
5. Compare [[theta_i]] with [[theta_c]] to determine whether reflection is partial or total.

> [!TIP]
> If the problem gives the angle with respect to the surface (call it alpha), the angle with respect to the normal is 90 minus alpha.

## Special cases and extended example

**Normal incidence**: when [[theta_i]] is zero, the reflected ray returns exactly along the incoming path. This case is used in interferometers where exact beam superposition is needed.

**Grazing incidence**: when [[theta_i]] approaches 90 degrees, the ray barely touches the surface. Reflectance increases dramatically (an effect visible when looking at a wet road at a low angle). The Fresnel coefficients predict that any surface, even a dielectric, becomes nearly perfectly reflective at grazing incidence.

**Total internal reflection in optical fibre**: a glass fibre with [[n1]] of 1.5 surrounded by air ([[n2]] of 1.0) has a critical angle of approximately 42 degrees. Any ray entering with a greater inclination propagates indefinitely inside the fibre bouncing between the walls, allowing optical signals to be transmitted over hundreds of kilometres.

## Real student questions

**Why is the angle measured from the normal and not from the surface?**
Because the normal is unique and perpendicular to the surface at each point, defining an angle without ambiguity. On curved surfaces, the tangent changes continuously but the local normal is always well defined.

**Does the law of reflection work with any type of light?**
Yes. The law is independent of wavelength, intensity or polarisation. These factors affect how much light is reflected (Fresnel coefficients), but not the direction of the reflected ray.

**What happens if the surface is not perfectly smooth?**
Each point on the surface reflects according to its local normal. If the normals are disordered (rough surface), the reflected rays emerge in many directions: this is diffuse reflection. The law still holds locally, but the macroscopic effect is scattering.

**Is total internal reflection truly total?**
In classical geometrical optics, yes. In wave optics, an evanescent wave penetrates a distance of the order of the wavelength into the second medium, but it carries no net energy if the second medium is infinite.

## Cross-cutting connections and study paths

Reflection connects directly with [Mirrors](leaf:fisica-clasica/electromagnetismo/optica/optica-geometrica/espejos), where the law is applied to curved surfaces to form images. It also links to refraction: both phenomena are simultaneous manifestations of the electromagnetic boundary conditions and share the plane-of-incidence geometry.

At higher levels, total internal reflection connects with propagation in [optical fibre](leaf:fisica-clasica/electromagnetismo/optica/optica-fisica/interferencia-de-la-luz) and with polarisation (Brewster's angle). The Fresnel coefficients belong to a more advanced level but stem from this same fundamental law.

## Final synthesis

Reflection is the most elementary and most exact optical phenomenon: a single symmetry principle (equality of angles with respect to the normal) governs the behaviour of light bouncing off any specular surface. The critical angle extends this principle to the regime of total confinement, connecting geometrical optics with waveguide technology and optical communications.
`;export{e as default};
