## Conceptual context

A mirror is a polished surface that reflects light specularly, following the law of reflection. Within geometrical optics, mirrors are the first device capable of forming **images** of objects: luminous copies whose position, size and orientation depend on the surface geometry and the object distance.

Mirror optics complements lens optics by using reflection instead of refraction. Understanding how a spherical mirror forms images is essential for interpreting reflecting telescopes, vehicle rear-view mirrors, dental mirrors and solar concentrators, all of which appear in everyday life and engineering.

## 🟢 Essential level

A **flat mirror** produces an image the same size as the object, at the same distance behind the mirror and laterally reversed (left-right inversion). The image is **virtual**: it cannot be captured on a screen because the reflected rays do not actually converge; rather, their extensions appear to cross behind the mirror.

A **concave mirror** has its reflecting surface on the inner side of a sphere. Rays parallel to the optical axis converge at a point called the **focus** (F), located halfway between the vertex and the centre of curvature. If the object is beyond the focus the image is real and inverted; if the object is between the focus and the mirror the image is virtual, upright and enlarged.

A **convex mirror** has its reflecting surface on the outer side of the sphere. Parallel rays diverge after reflection as though they came from a virtual focus behind the mirror. The image is always virtual, upright and reduced, providing a wide field of view useful in rear-view and security mirrors.

## 🔵 Formal level

The quantitative relationship between the object distance [[d_o]], the image distance [[d_i]] and the focal length [[distancia_focal_del_espejo]] is given by the mirror equation:

{{f:ecuacion_espejo}}

Here [[d_o]] is the distance from the object to the mirror vertex, [[d_i]] the distance from the vertex to the image and [[distancia_focal_del_espejo]] the focal length. In the standard sign convention, real distances (in front of the mirror) are positive and virtual distances (behind the mirror) are negative. For a concave mirror [[distancia_focal_del_espejo]] is positive; for a convex mirror [[distancia_focal_del_espejo]] is negative.

The relative size of the image is described by the lateral magnification:

{{f:aumento_lateral}}

The sign of [[aumento_lateral]] indicates orientation: negative means an inverted image and positive means an upright image. The absolute value gives the scale factor.

The focal length relates to the mirror geometry through:

{{f:distancia_focal_radio}}

Here [[radio_de_curvatura_del_espejo]] is the radius of curvature of the spherical surface. This relationship is exact within the paraxial approximation.

> [!NOTE]
> The sign convention is the most critical aspect when solving mirror problems. A sign error in [[distancia_focal_del_espejo]] or [[d_o]] completely changes the nature of the image (real versus virtual, inverted versus upright).

## 🔴 Structural level

The mirror equation is derived by tracing two principal rays from a point on the object: the ray parallel to the axis that reflects through the focus, and the ray through the centre of curvature that reflects back on itself. The intersection of both reflected rays defines the image position. Applying similar triangles yields the relationship between the distances.

The paraxial approximation assumes that rays form small angles with the optical axis, so the sine and tangent of the angle approximate the angle in radians. This simplification holds as long as the mirror aperture is much smaller than [[radio_de_curvatura_del_espejo]]. When the aperture is large, marginal rays do not converge at the same point as paraxial ones, producing **spherical aberration**. To correct it, parabolic mirrors are used, whose surface is a paraboloid of revolution that guarantees perfect convergence for rays parallel to the axis.

> [!WARNING]
> The mirror equation is valid only for spherical mirrors within the paraxial approximation. For large-aperture mirrors or off-axis sources, results may differ significantly from the paraxial prediction.

The duality between real and virtual images is encoded in the sign of [[d_i]]. In concave mirrors the transition occurs exactly when the object sits at the focus: for [[d_o]] greater than [[distancia_focal_del_espejo]] the image is real; for [[d_o]] less than [[distancia_focal_del_espejo]] it is virtual. In convex mirrors there is no such transition because the image is always virtual with negative [[d_i]].

## Deep physical interpretation

The negative sign in the definition of [[aumento_lateral]] encodes the geometric inversion of the image. When [[d_i]] and [[d_o]] share the same sign (both positive for a real object and a real image), [[aumento_lateral]] is negative, indicating inversion. This result is not arbitrary: inversion occurs because the reflected rays cross the optical axis before converging, flipping the vertical orientation of the image relative to the object.

In the limit where [[d_o]] tends to infinity, [[d_i]] tends to [[distancia_focal_del_espejo]]: rays from a very distant source converge exactly at the focus. This principle underlies reflecting telescopes and solar concentrators. At the other extreme, when [[d_o]] approaches [[distancia_focal_del_espejo]], [[d_i]] diverges to infinity, producing a nearly parallel beam of reflected rays, as in a flashlight with a parabolic reflector.

## Order of magnitude

For a typical laboratory concave mirror, [[radio_de_curvatura_del_espejo]] lies between 0.10 and 1.00 m, so [[distancia_focal_del_espejo]] ranges from 0.05 to 0.50 m. Vehicle rear-view mirrors have radii of 1 to 3 m (convex, negative [[distancia_focal_del_espejo]]). Astronomical telescopes use mirrors with [[radio_de_curvatura_del_espejo]] of several metres. A result where [[d_i]] exceeds [[d_o]] by a factor of 10 or more should be checked unless the object is very close to the focus. A magnification [[aumento_lateral]] with magnitude above 5 is uncommon outside specialised optical setups.

## Personalized resolution method

1. **Identify the mirror type**: concave ([[distancia_focal_del_espejo]] positive) or convex ([[distancia_focal_del_espejo]] negative).
2. **Obtain [[distancia_focal_del_espejo]]**: if [[radio_de_curvatura_del_espejo]] is given, apply the focal-length–radius relation.
3. **Substitute into the mirror equation**: with [[d_o]] and [[distancia_focal_del_espejo]], solve for [[d_i]].
4. **Calculate the magnification**: with [[d_i]] and [[d_o]], obtain [[aumento_lateral]].
5. **Interpret signs**: positive [[d_i]] indicates a real image; negative, virtual. Negative [[aumento_lateral]] indicates an inverted image; positive, upright.
6. **Check coherence**: verify that the image type (real or virtual, upright or inverted) is compatible with the object position and mirror type.

## Special cases and extended example

- **Object at the centre of curvature** ([[d_o]] equal to [[radio_de_curvatura_del_espejo]]): the image forms at the same point, [[d_i]] equal to [[radio_de_curvatura_del_espejo]], with [[aumento_lateral]] equal to minus one. The image is real, inverted and the same size as the object.

- **Object at the focus** ([[d_o]] equal to [[distancia_focal_del_espejo]]): the mirror equation yields infinite [[d_i]]. No finite image forms; reflected rays emerge parallel. This case underlies flashlight and headlight reflectors.

- **Convex mirror**: regardless of the object position, [[d_i]] is always negative and the magnitude of [[aumento_lateral]] is always less than one. The image is virtual, upright and reduced, which explains the warning "objects in mirror are closer than they appear" on vehicle mirrors.

## Real student questions

**Why are car rear-view mirrors convex rather than concave?**
A convex mirror always produces a reduced image, covering a wider field of view than a flat mirror of the same size. The drawback is that objects appear farther away than they actually are.

**Can a concave mirror really start a fire?**
Yes. When a large-diameter concave mirror faces the Sun, it concentrates sunlight at the focus. The energy density at that point can be sufficient to ignite flammable materials. This principle is used in solar furnaces.

**What happens if I place an object exactly at the focus of a concave mirror?**
No image forms at any finite position: the reflected rays emerge parallel and "meet at infinity". In practice, the image is projected as a collimated beam.

**Is a flat mirror a special case of a spherical mirror?**
Yes. A flat mirror is equivalent to a spherical mirror with infinite radius of curvature, giving infinite focal length. The mirror equation then reduces to [[d_i]] equal to minus [[d_o]], a virtual image at equal distance behind the mirror.

## Cross-cutting connections and study paths

Mirrors connect directly with [lenses](leaf:fisica-clasica/electromagnetismo/optica/optica-geometrica/lentes), whose equation has an identical structure but uses refraction instead of reflection. They also relate to [reflection](leaf:fisica-clasica/electromagnetismo/optica/optica-geometrica/reflexion), which provides the fundamental law upon which mirror optics is built.

Beyond geometrical optics, mirrors appear in laser cavities, interferometers and gravitational-wave telescopes, linking to physical optics and modern physics.

## Final synthesis

Spherical mirrors form images whose position and size are determined by the mirror equation and lateral magnification. The sign convention distinguishes real from virtual images and inverted from upright orientation. Mastering these relationships enables interpretation of everything from a simple rear-view mirror to a reflecting telescope, and forms the foundation for the subsequent study of lenses and compound optical systems.