const e=`## Conceptual errors

### Error 1: Believing the total microscope magnification is the sum of the individual magnifications

**Why it seems correct**

Students associate "combination" with "addition" by analogy with other additive quantities such as forces or resistances in series. It seems logical that a 40x objective plus a 10x eyepiece should give 50 total magnification.

**Why it is wrong**

The objective produces a laterally magnified intermediate image; the eyepiece angularly magnifies that intermediate image. Each lens multiplies the effect of the previous one rather than adding to it. The total magnification is the product of both factors.

**Detection signal**

The numerical result of the total magnification is far lower than the expected value. A 40x objective with a 10x eyepiece yielding 50 instead of 400 betrays this error.

**Conceptual correction**

The total magnification of a multi-stage instrument is always the **product** of the partial magnifications. For the microscope, [[M_micro]] results from multiplying the lateral magnification of the objective by the angular magnification of the eyepiece.

**Contrast mini-example**

With a 40x objective and a 10x eyepiece, adding gives 50; multiplying gives 400. If a cell measures 10 micrometres and is observed with magnification 50, its image would measure 0.5 mm, barely visible. With magnification 400 the image measures 4 mm, clearly distinguishable. Only the product reproduces what is actually seen through the microscope.

## Model errors

### Error 2: Applying the paraxial formula to a high numerical-aperture objective

**Why it seems correct**

The thin-lens equation works so well for magnifying glasses and school microscopes that the student generalises its validity to any situation, including research microscopes with immersion objectives.

**Why it is wrong**

When the numerical aperture exceeds roughly 0.65, the angles of marginal rays are no longer small and the paraxial approximation fails. Third-order aberrations (spherical, coma, astigmatism) distort the image and the predicted magnification does not match the observed one.

**Detection signal**

The image loses sharpness at the edges of the field of view while the centre remains focused, or chromatic halos appear that should not exist according to the ideal model.

**Conceptual correction**

For high numerical-aperture objectives (above 0.65), use models that include Seidel aberration coefficients and, if necessary, numerical ray tracing. The paraxial formula is only a first approximation valid for low-power instruments.

**Contrast mini-example**

An immersion objective with numerical aperture of 1.25 would, according to the paraxial model, produce a perfect image. In reality, aberrations reduce the actual resolution by 30 % relative to the diffraction limit unless corrected with achromatic lens elements.

## Mathematical errors

### Error 3: Swapping the objective and eyepiece focal lengths in the microscope formula

**Why it seems correct**

Both are positive focal lengths and their position in the formula is not immediately obvious. The student may swap them carelessly without noticing which quantity is in the numerator and which in the denominator of each factor.

**Why it is wrong**

The objective factor is [[L]] divided by [[f_obj]] and the eyepiece factor is [[d_pp]] divided by [[f_oc]]. Swapping the focal lengths drastically changes the result because the objective focal length is typically an order of magnitude shorter than the eyepiece focal length.

**Detection signal**

The calculated magnification is far smaller or far larger than expected. For example, with [[f_obj]] of 4 mm and [[f_oc]] of 25 mm, swapping them gives a factor of 6.25 instead of 40 for the objective part, reducing the total magnification to one-sixth of the correct value.

**Conceptual correction**

Remember that the **objective** divides the tube length [[L]] by its focal length [[f_obj]], and the **eyepiece** divides the near-point distance [[d_pp]] by its focal length [[f_oc]]. The objective produces lateral magnification; the eyepiece produces angular magnification.

**Contrast mini-example**

With [[f_obj]] of 0.004 m, [[f_oc]] of 0.025 m, [[L]] of 0.16 m and [[d_pp]] of 0.25 m, the correct result is (0.16/0.004) times (0.25/0.025), equal to 40 times 10, giving 400. Swapping the focal lengths gives (0.16/0.025) times (0.25/0.004), equal to 6.4 times 62.5, giving 400 as well by algebraic coincidence. But if the focal lengths were 0.004 m and 0.050 m, the swap would yield an incorrect result.

## Interpretation errors

### Error 4: Assuming higher magnification always means a better image

**Why it seems correct**

Everyday experience suggests that making something larger makes it easier to observe. The student extrapolates that a magnification of 2000 is better than 400 for any specimen.

**Why it is wrong**

Beyond the useful magnification, diffraction imposes a limit on angular resolution. Magnifying beyond that limit only enlarges the diffraction spot without revealing additional detail. The image grows but becomes blurry: this is called **empty magnification**.

**Detection signal**

When increasing the magnification the image appears larger but not sharper; structure edges become more diffuse instead of better defined.

**Conceptual correction**

The maximum useful magnification depends on the numerical aperture of the objective and the wavelength of light. For visible light and an immersion objective, the maximum useful magnification is approximately 1000. Exceeding this value only worsens image quality.

**Contrast mini-example**

A microscope with an objective of numerical aperture 0.25 has a maximum useful magnification of about 250. Forcing a magnification of 1000 (25x eyepiece with 40x objective) only shows a blurred patch four times larger than the sharp image at 250 magnification, without any additional detail.

## Quick self-control rule

Before accepting the magnification calculation for an optical instrument, check these three points:

- The total magnification was obtained by **multiplying** the partial factors, never by adding them.
- The objective and eyepiece focal lengths were correctly assigned: [[f_obj]] in the factor with [[L]] and [[f_oc]] in the factor with [[d_pp]].
- The numerical result falls within the expected range: between 2 and 25 for a magnifying glass, between 40 and 1000 for a school microscope. If the value falls outside these ranges, review the input data.
`;export{e as default};
