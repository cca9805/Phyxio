const e=`# Exam-type example

## Problem statement

A concave mirror has a radius of curvature of 0.40 m. An object 3.0 cm tall is placed 0.30 m from the vertex. Determine the image position, the lateral magnification and describe the image characteristics (real or virtual, upright or inverted, enlarged or reduced).

## Data

- Mirror radius of curvature: 0.40 m (concave, positive)
- Object distance from the vertex: 0.30 m
- Object height: 3.0 cm
- Mirror type: concave

## System definition

The system consists of a concave spherical mirror and an object placed on the optical axis at a distance [[d_o]] from the vertex. The focal length [[f]] is obtained from [[R]] via the focal-length–radius relation. The primary unknown is [[d_i]], from which [[M]] is derived.

## Physical model

The phenomenon is described by the **mirror equation**, which relates [[d_o]], [[d_i]] and [[f]]. The model is valid because the object lies in the paraxial region and the mirror aperture is small compared to [[R]].

## Model justification

The mirror equation is applicable because its fundamental hypotheses are satisfied: the rays are paraxial, the surface is spherical and the reflection is specular. The model would cease to be valid if the aperture were comparable to the radius of curvature, introducing significant spherical aberration.

## Symbolic solution

First we obtain the focal length from the radius of curvature:

{{f:distancia_focal_radio}}

With [[f]] known, we apply the mirror equation to find [[d_i]]:

{{f:ecuacion_espejo}}

Solving for [[d_i]], we get [[d_i]] equal to [[f]] times [[d_o]] divided by the difference [[d_o]] minus [[f]].

Finally we calculate the lateral magnification:

{{f:aumento_lateral}}

## Numerical substitution

Focal length: [[R]] equal to 0.40 m, therefore [[f]] equal to 0.20 m.

Image distance: with [[d_o]] equal to 0.30 m and [[f]] equal to 0.20 m, we calculate [[d_i]] equal to 0.20 times 0.30 divided by 0.30 minus 0.20. The numerator is 0.060 and the denominator 0.10, giving [[d_i]] equal to 0.60 m.

Lateral magnification: [[M]] equal to minus 0.60 divided by 0.30, giving minus 2.0.

Image height: 3.0 cm multiplied by the magnitude of [[M]] (2.0) gives 6.0 cm.

## Dimensional validation

The focal length has units of length: \`[L]\` ✓. The image distance is in metres: \`[L]\` ✓. The magnification is dimensionless: \`[L]/[L]\` equals \`1\` ✓.

## Physical interpretation

The result shows that [[d_i]] is positive (0.60 m), which means the image is real and forms in front of the mirror. Physically, this indicates that the reflected rays actually converge at a point and the image can be projected onto a screen.

The magnification [[M]] is minus 2.0. The negative sign indicates that the image is inverted with respect to the object: what was on top appears at the bottom. The magnitude 2.0 indicates that the image is twice as large as the object (6.0 cm versus 3.0 cm). This depends on the relationship between [[d_o]] and [[f]]: because the object is beyond the focus but not too far away, the image is enlarged. As [[d_o]] increases well beyond [[f]], the magnitude of [[M]] decreases and the image becomes smaller.

If the object moved closer to the focus ([[d_o]] approaching [[f]]), [[d_i]] would grow without limit and so would [[M]], producing an increasingly large and distant image. This sensitivity of the image to the object position near the focus is the basis for the operation of reflectors and projectors.

# Real-world example

## Context

A dentist uses a concave mirror with a radius of curvature of 4.0 cm to examine a tooth. The mirror is held 1.5 cm from the tooth surface. The professional needs to know whether the tooth image will be enlarged and upright in order to perform the visual inspection adequately.

## Physical estimation

First we estimate the focal length of the dental mirror:

{{f:distancia_focal_radio}}

With [[R]] equal to 0.040 m, the focal length is [[f]] equal to 0.020 m (2.0 cm). The object (tooth) is at [[d_o]] equal to 0.015 m (1.5 cm), which is less than [[f]] (2.0 cm). This places the object between the focus and the mirror vertex, a configuration that produces a virtual, upright and enlarged image.

Applying the mirror equation with [[d_o]] equal to 0.015 m and [[f]] equal to 0.020 m, the denominator ([[d_o]] minus [[f]]) is negative (0.015 minus 0.020 equals minus 0.005), giving negative [[d_i]]: approximately minus 0.060 m. The image is virtual, at 6.0 cm behind the mirror.

The magnification [[M]] equals minus (minus 0.060) divided by 0.015, which is 4.0. Positive and greater than one: the image is upright and four times larger than the actual tooth.

## Interpretation

The result confirms that the dental mirror acts as a reflection-based magnifier. By placing the tooth between the focus and the vertex, the dentist obtains an enlarged virtual image that reveals details invisible to the naked eye. The image is upright, which facilitates spatial orientation during examination. If the dentist moved the mirror beyond the focus, the image would invert and cease to be useful for direct inspection. The choice of working distance is dictated by the physics of the mirror, not merely by operator convenience.
`;export{e as default};
