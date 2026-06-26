const e=`## Conceptual errors

### Error 1: Believing that a convex mirror can form real images

**Why it seems correct**
The student knows that concave mirrors form real images and generalises: if one curved mirror forms real images, another curved mirror should be able to do so as well.

**Why it is incorrect**
A convex mirror has a virtual focus behind the surface. Reflected rays always diverge and never converge at a real point. The image is always virtual, upright and reduced, regardless of where the object is placed.

**Detection signal**
The student obtains a positive value for [[d_i]] when solving a convex-mirror problem, or draws rays converging in front of the convex mirror.

**Conceptual correction**
In a convex mirror, [[f]] is negative. The mirror equation always yields negative [[d_i]] for positive [[d_o]] and negative [[f]]. The image forms behind the mirror.

**Contrast mini-example**
With [[f]] equal to minus 0.10 m and [[d_o]] equal to 0.20 m, the mirror equation gives [[d_i]] equal to minus 0.067 m. The negative sign confirms a virtual, not a real, image.

### Error 2: Thinking the image in a flat mirror is "at" the mirror surface

**Why it seems correct**
The student sees their reflection "in the mirror" and associates the image position with the physical surface.

**Why it is incorrect**
The image forms at the same distance behind the mirror as the object is in front of it. If the object is 1 m from the mirror, the image is 1 m behind the mirror, not at the surface.

**Detection signal**
The student claims that the image-to-mirror distance is zero, or draws the image on the reflecting surface.

**Conceptual correction**
A flat mirror is equivalent to [[R]] infinite, [[f]] infinite. The mirror equation gives [[d_i]] equal to minus [[d_o]]: the image is as far behind the mirror as the object is in front of it.

**Contrast mini-example**
If the object is 2 m from the mirror, the image is 2 m behind the mirror. The total distance between object and image is 4 m, not 2 m.

## Model errors

### Error 3: Applying the spherical mirror equation to a parabolic mirror

**Why it seems correct**
The student learns a general formula for mirrors and applies it to any curved surface without distinguishing between profiles.

**Why it is incorrect**
The mirror equation is derived under the paraxial approximation for spherical surfaces. A parabolic mirror has a different shape that eliminates spherical aberration but does not follow exactly the same relation for marginal rays.

**Detection signal**
The student calculates the image position in a parabolic mirror using the mirror equation and obtains results that do not match the actual ray convergence.

**Conceptual correction**
For parabolic mirrors, the focal length is exact for rays parallel to the axis, but the relationship between object and image distances requires ray tracing when the object is at finite distance.

**Contrast mini-example**
In a large-aperture spherical mirror, marginal rays converge at a different distance from paraxial ones (spherical aberration). In a parabolic mirror, all parallel rays converge at the exact focus, but a nearby object does not satisfy the simple equation.

## Mathematical errors

### Error 4: Confusing the radius of curvature with the focal length

**Why it seems correct**
Both magnitudes are expressed in metres and refer to distances along the optical axis, leading the student to interchange them.

**Why it is incorrect**
The focal length is exactly half the radius of curvature. Using [[R]] where [[f]] should go doubles the error in the image position.

**Detection signal**
The student obtains [[d_i]] values that systematically differ by a factor close to 2 from the expected values.

**Conceptual correction**
Always verify that [[f]] equals [[R]] divided by 2 before substituting into the mirror equation. Do not use [[R]] directly in the mirror equation.

**Contrast mini-example**
With [[R]] equal to 0.40 m: the correct focal length is 0.20 m. If 0.40 m is used as the focal length, the result for [[d_i]] deviates by a factor of 2 from the correct value.

## Interpretation errors

### Error 5: Assuming that negative magnification means a smaller image

**Why it seems correct**
The student associates "negative" with "less" or "reduction" and concludes that negative [[M]] implies a reduced image.

**Why it is incorrect**
The sign of [[M]] indicates orientation, not size. Negative [[M]] means an **inverted** image; the size is given by the absolute value. A magnification of minus 3 means an inverted image three times larger than the object.

**Detection signal**
The student calculates [[M]] equal to minus 2 and states that the image is "half the object" or "reduced".

**Conceptual correction**
The magnitude of [[M]] gives the scale factor: greater than one means an enlarged image, less than one means a reduced image. The sign only indicates orientation: negative is inverted, positive is upright.

**Contrast mini-example**
[[M]] equal to minus 3: the image is three times larger than the object and inverted. [[M]] equal to 0.5: the image is half the object and upright. The sign and magnitude convey different information.

## Quick self-control rule

Before accepting a mirror result, check three key points:

1. **Sign of [[f]]**: concave positive, convex negative. If the sign does not match the mirror type, there is an error.
2. **Sign of [[d_i]]**: positive for a real image, negative for virtual. Verify consistency with the object position relative to the focus.
3. **Sign and magnitude of [[M]]**: negative indicates inverted, positive indicates upright. The magnitude indicates relative size. Do not confuse orientation with size.
`;export{e as default};
