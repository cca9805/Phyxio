## Conceptual context

A lens is a transparent medium bounded by two curved surfaces that redirect light by refraction. Unlike mirrors, which work by reflection, lenses transmit light and bend it towards a focal point or diverge it away from one. The study of lenses forms the backbone of **applied geometrical optics**: from corrective eyeglasses to projection systems, image formation depends on understanding how the geometry and material of the lens determine the ray paths.

This leaf focuses on the **thin lens** model, where the glass thickness is negligible compared to working distances. This model predicts the position, size and orientation of the image formed from experimentally measurable quantities.

## 🟢 Essential level

When a beam of parallel rays passes through a converging lens, the rays cross at a point called the **focus**. The distance between the lens centre and the focus is the **focal length** [[distancia_focal]]. If the lens is diverging, the rays spread out and their back-extensions meet at a virtual focus.

The image position [[d_i]] depends on where the object [[d_o]] is placed relative to the focus. If the object is beyond the focus of a converging lens, the image is **real** (projectable onto a screen) and **inverted**. If the object lies between the lens and the focus, the image is **virtual**, **upright** and **magnified**. The **lateral magnification** [[aumento_lateral]] quantifies how much larger or smaller the image is compared to the object and whether it is inverted.

## 🔵 Formal level

The fundamental relation governing image formation in a thin lens is:

{{f:ecuacion_lente_delgada}}

This equation connects the focal length [[distancia_focal]] with the object distance [[d_o]] and the image distance [[d_i]]. Signs follow the convention: positive distances in the direction of light propagation. For a converging lens [[distancia_focal]] is positive; for a diverging one, negative. If [[d_i]] is positive the image is real; if negative, virtual.

Image size and orientation are obtained through the lateral magnification:

{{f:aumento_lateral}}

The negative sign means that when [[d_i]] and [[d_o]] are both positive, [[aumento_lateral]] is negative: the real image is inverted. A magnitude of [[aumento_lateral]] greater than one means the image is enlarged; less than one, reduced.

The relationship between the focal length and the physical properties of the lens is given by the lensmaker's equation:

{{f:ecuacion_fabricante_lentes}}

Here [[indice_de_refraccion_de_la_lente]] is the refractive index of the material and [[radio_de_curvatura_de_la_primera_superficie]], [[radio_de_curvatura_de_la_segunda_superficie]] are the radii of curvature of the surfaces. This equation shows that the optical power of the lens depends on both the material and the geometry of its surfaces.

## 🔴 Structural level

The thin lens model rests on three pillars: the **paraxial approximation**, the **negligible thickness** assumption and the **homogeneity of the surrounding medium**. When any of these pillars fails, the model yields incorrect predictions.

The paraxial approximation requires that rays form small angles with the optical axis. In practice, this holds reasonably when the lens aperture is much smaller than its focal length. For wide-aperture lenses, **spherical aberrations** displace the real image from the paraxial prediction. Chromatic aberration additionally arises when the light is not monochromatic, because [[indice_de_refraccion_de_la_lente]] depends on wavelength.

The dependence of [[d_i]] on [[d_o]] is **hyperbolic**: as [[d_o]] approaches the focus, [[d_i]] tends to infinity (the image forms very far away). When [[d_o]] equals [[distancia_focal]] exactly, the equation predicts an image at infinity and the model loses local practical meaning. This asymptotic behaviour delimits the stable operating zone of any lens-based optical system.

The lensmaker's equation reveals that lenses of identical shape but different material produce different focal lengths. An increase in [[indice_de_refraccion_de_la_lente]] reduces the focal length, increasing optical power. This has direct design implications: high-index materials allow thinner, lighter lenses with the same power. However, high-index materials usually exhibit greater dispersion, introducing chromatic aberration.

The lateral magnification [[aumento_lateral]] connects directly to the conservation of size ratios. The image inversion (negative sign of [[aumento_lateral]]) is not a mathematical artefact but a geometric consequence of ray crossing at a point: every pair of rays converging to a real image point necessarily inverts the object orientation. Only when the image is virtual (rays do not actually converge) does the image maintain the original orientation.

> [!WARNING]
> The thin lens equation fails silently when the lens thickness is not negligible. In thick lenses, the principal planes do not coincide with the optical centre and distances must be measured from these planes, not from the physical lens.

## Deep physical interpretation

The sign of [[d_i]] encodes fundamental physical information: it is not merely a number but a **classifier of image type**. A real image means that luminous energy physically converges at a point in space and can be intercepted by a screen. A virtual image means that the convergence is only apparent, resulting from extending the refracted ray paths backwards.

The magnification [[aumento_lateral]] carries a dual reading: its **magnitude** indicates the spatial scale of the image and its **sign** indicates the orientation parity. This sign-magnitude duality is common in optical quantities and should be treated explicitly to avoid interpretation errors.

## Order of magnitude

Typical educational laboratory lenses have focal lengths between 5 cm and 50 cm. A normal human eye has an optical power equivalent to a focal length of roughly 17 mm. Camera lenses range from 10 mm (wide-angle) to 600 mm (telephoto). If a calculation yields a focal length of 0.001 m for an ordinary glass lens, the result is suspect. Similarly, a lateral magnification of 100 for a single thin lens indicates extreme proximity to the focus and likely invalidity of the paraxial model.

## Personalized resolution method

- **Step 1**: Identify the lens type (converging if [[distancia_focal]] positive, diverging if negative) and the available data.
- **Step 2**: Apply the thin lens equation to find the unknown quantity.
- **Step 3**: Check the sign of [[d_i]]. Positive means real image; negative, virtual.
- **Step 4**: Calculate [[aumento_lateral]] to determine size and orientation.
- **Step 5**: Verify sign coherence between [[d_i]] and [[aumento_lateral]].
- **Step 6**: Validate the result with a principal-ray trace (parallel ray, ray through the centre, ray through the focus).

## Special cases and extended example

**Object at infinity**: when [[d_o]] tends to infinity, the lens equation gives [[d_i]] equal to [[distancia_focal]]. The image forms exactly in the focal plane. This is the case of a camera focusing on a distant object.

**Object at the focus**: when [[d_o]] exactly equals [[distancia_focal]] in a converging lens, [[d_i]] tends to infinity. The rays emerge parallel and no image forms at a finite distance. This case is exploited in collimated projectors and headlamps.

**Diverging lens with a real object**: [[d_i]] is always negative regardless of the object position. The image is always virtual, upright and reduced. The magnitude of [[aumento_lateral]] is always less than one.

> [!TIP]
> To quickly check result coherence, mentally trace the ray passing through the optical centre (undeviated) and verify that the calculated image lies at its intersection with the parallel ray refracted through the focus.

## Real student questions

- **Why does the image invert when the object moves beyond the focus?**
Because the rays cross the optical axis as they converge. Geometrically, the upper ray from the object ends below at the image and vice versa.

- **Can a diverging lens form a real image?**
Not with a real object. Only with a virtual object (created by another lens) can a diverging lens produce a real image under certain conditions.

- **What happens if the object is placed at the centre of curvature?**
In a converging lens with [[d_o]] equal to twice [[distancia_focal]], the image forms at the same distance on the other side, with [[aumento_lateral]] equal to minus one: a real, inverted image of the same size.

- **Why are myopia-correcting lenses diverging?**
The myopic eye converges too strongly, forming the image in front of the retina. A diverging lens reduces total convergence, shifting the image back onto the retina.

## Cross-cutting connections and study paths

This leaf connects directly with [Refraction](leaf:fisica-clasica/electromagnetismo/optica/optica-geometrica/refraccion), which provides the physical basis for why the lens bends rays. Moving forward, [Optical instruments](leaf:fisica-clasica/electromagnetismo/optica/optica-geometrica/instrumentos-opticos) combines multiple lenses to achieve higher magnifications. The lensmaker's equation links to optical material properties studied in other electromagnetic blocks.

## Final synthesis

The thin lens transforms the position and size of an object through refraction controlled by its geometry and material. The lens equation, lateral magnification and lensmaker's equation form a closed system that fully predicts the image for any paraxial configuration. Mastering the signs of these quantities is equivalent to mastering the classification of real and virtual images.