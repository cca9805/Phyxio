## Conceptual context

The human eye has a limited angular resolution and a minimum focusing distance that restrict the perception of very small or very distant objects. **Optical instruments** overcome these limitations by combining converging lenses to enlarge the angle under which the observer perceives the image. The magnifying glass, compound microscope and refracting telescope are the three fundamental instruments of paraxial geometrical optics.

This leaf focuses on how the **combination of thin lenses** determines the position of the final image and the angular magnification of the instrument. Understanding these principles allows the design of optical systems and the evaluation of their performance with physical judgement rather than memorised algebraic recipes.

## 🟢 Essential level

When an object is too small to be distinguished with the naked eye, a lens is needed that makes the light rays reach the eye at a larger angle. That larger angle causes the brain to interpret the object as bigger. The **angular magnification** [[aumento_angular]] quantifies how many times that angle is amplified.

The **magnifying glass** is the simplest optical instrument: a single converging lens of short focal length [[f_lupa]] placed so that the object lies between the lens and its focus. The resulting image is virtual, upright and magnified. To observe even smaller objects, the **compound microscope** chains two lenses: an objective with a very short focal length [[f_obj]] and an eyepiece [[f_oc]] that acts as a second magnifier. The result is a total magnification [[aumento_total_del_microscopio]] far larger than any single lens could provide.

## 🔵 Formal level

The thin-lens equation relates the object distance [[d_o]], the image distance [[d_i]] and the focal length [[distancia_focal]]:

{{f:ecuacion_lente_delgada}}

This expression is the starting point for analysing each stage of an optical instrument. If the object is placed between the lens and the focus of a converging lens, the image is virtual and magnified; this is the principle of the magnifying glass.

The angular magnification of the magnifying glass, with the relaxed eye focusing at infinity, is given by:

{{f:aumento_angular_lupa}}

where [[d_pp]] is the conventional near-point distance (0.25 m). The shorter [[f_lupa]], the greater [[aumento_angular]].

In the compound microscope, the objective forms a magnified real intermediate image at a distance determined by the tube length [[longitud_del_tubo]]. The eyepiece then angularly magnifies that intermediate image. The total magnification is:

{{f:aumento_microscopio}}

The product reflects that the total magnification is the multiplicative composition of the lateral magnification of the objective and the angular magnification of the eyepiece. An objective with [[f_obj]] of a few millimetres and an eyepiece with [[f_oc]] of two to three centimetres yields magnifications of several hundred.

> [!NOTE]
> In the refracting telescope the principle is analogous, but the objective has a long focal length to collect light from distant objects and the eyepiece has a short focal length to angularly magnify the image.

## 🔴 Structural level

The **deep structure** of optical instruments is revealed by analysing how optical conjugations are chained. Each lens establishes a relationship between an object plane and an image plane. In a two-lens instrument, the image formed by the first element becomes the object of the second. The relative position of the internal foci controls the optical separation and, with it, the total magnification.

The **tube length** [[longitud_del_tubo]] of the microscope is the distance between the image focus of the objective and the object focus of the eyepiece. Increasing [[longitud_del_tubo]] proportionally enlarges the intermediate image, raising the total magnification. However, increasing [[longitud_del_tubo]] indefinitely is not feasible because image brightness drops and aberrations are amplified.

The **validity regime** of the thin-lens model requires that ray angles with respect to the optical axis remain small, that each lens thickness be negligible compared to the focal lengths, and that chromatic aberration does not dominate. When the numerical aperture of the objective grows to capture more detail, higher-order aberrations invalidate the paraxial formulae and real ray-tracing models are needed.

The dependence of angular magnification on focal length is **hyperbolic**: halving the focal length doubles the magnification. This sensitivity means that small manufacturing errors in the objective lens translate into large deviations in the expected magnification. Furthermore, **diffraction** imposes a physical limit on useful magnification: exceeding the so-called empty magnification does not reveal more detail but merely enlarges the diffraction spot, degrading the image without adding new information.

Coherence among the objective focal length, the eyepiece focal length and the tube length must be maintained: changing one of these parameters without adjusting the others produces defocused images or useless magnifications. This coupling is why commercial microscopes use standardised distances (0.16 m tube, 0.25 m near point).

## Deep physical interpretation

Angular magnification is not simply a number indicating how much larger the object appears. Physically, it expresses the **redistribution of the ray cone** arriving at the retina. A magnifying glass with [[aumento_angular]] equal to 10 makes the subtended angle ten times larger; this means the retinal image occupies ten times more area, activating more photoreceptors and allowing the observer to distinguish previously invisible details.

In the microscope, the objective generates a first redistribution (lateral magnification) and the eyepiece a second (angular magnification). The net result is that the information contained in a microscopic region of the object is projected onto a macroscopic area of the retina. The **magnification chain** is multiplicative, not additive: doubling both the objective and the eyepiece magnification quadruples the total magnification rather than doubling it.

## Order of magnitude

A jeweller's loupe with [[f_lupa]] of 0.025 m provides an angular magnification of about 10. A school microscope with [[f_obj]] of 0.004 m, [[f_oc]] of 0.025 m and [[longitud_del_tubo]] of 0.16 m reaches a total magnification of roughly 400. If the calculated result is below 2 for a magnifier or below 40 for a compound microscope, the data should be checked. A magnification of 10 000 without an immersion objective is physically suspicious and probably exceeds the instrument's useful magnification.

## Personalized resolution method

1. **Identify the instrument**: magnifying glass (one lens), microscope (two lenses with tube), telescope (two lenses without finite tube).
2. **Select the appropriate formula**: the magnifier uses the relationship between [[d_pp]] and [[f_lupa]]; the microscope uses the formula involving [[longitud_del_tubo]], [[f_obj]] and [[f_oc]].
3. **Check signs**: focal lengths of converging lenses are positive; virtual image distances are negative.
4. **Calculate the magnification** and verify that the order of magnitude matches typical values for the instrument.
5. **Validate dimensionally**: angular magnification is dimensionless; distances must be in metres.

## Special cases and extended example

- **Object at the magnifier focus**: the image forms at infinity and the relaxed eye observes it with maximum visual comfort. The angular magnification equals exactly [[d_pp]] divided by [[f_lupa]].

- **Microscope with short tube**: if [[longitud_del_tubo]] is much less than the standard value (for example, half), the lateral magnification of the objective is proportionally reduced and the total magnification drops. A microscope with a tube length of 0.08 m instead of 0.16 m loses half its total magnification.

- **Magnifier with long focal length**: a lens with a focal length of 0.25 m gives [[aumento_angular]] of only 1, meaning no magnification; this corresponds to the lower useful limit of the instrument.

> [!TIP]
> To quickly estimate microscope magnification, multiply the number engraved on the objective by that on the eyepiece. A 40x objective with a 10x eyepiece gives 400 total magnification.

## Real student questions

- **Why can I not use a single very powerful lens instead of a microscope?**
  A single lens with a sub-millimetre focal length would suffer enormous aberrations and a tiny field of view. The microscope distributes the task between two lenses, each operating in a comfortable regime.

- **What happens if I magnify far beyond the useful magnification?**
  The image becomes larger but not sharper. The diffraction spot and optical noise are amplified, yielding what is called empty magnification.

- **Why is the microscope image inverted?**
  The objective forms a real, inverted image. The eyepiece magnifies it but does not re-invert it. To observe the correct orientation, additional prisms are needed, as in stereoscopic microscopes.

- **Does ambient light affect the magnification?**
  Not the magnification itself, but the contrast and visibility. A good illumination system (condenser) is essential to exploit the microscope's magnification.

## Cross-cutting connections and study paths

The study of optical instruments connects directly with the [Lenses](leaf:fisica-clasica/electromagnetismo/optica/optica-geometrica/lentes) leaf, which establishes the thin-lens equation, and with [Mirrors](leaf:fisica-clasica/electromagnetismo/optica/optica-geometrica/espejos), where image formation by reflection is developed. The concept of diffraction, treated in physical optics, imposes the ultimate resolution limit that no optical instrument can surpass with geometric magnification alone.

## Final synthesis

Optical instruments amplify the angle under which the eye perceives an object by combining lenses of suitable focal lengths. The magnifying glass uses a single converging lens and offers moderate magnification; the compound microscope chains an objective and an eyepiece to reach magnifications of hundreds. The total magnification is always a product, never a sum, and its physical limit is not the shortest available focal length but the diffraction of light.