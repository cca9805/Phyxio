const e=`# Exam-type example

## Problem statement

A thin converging lens with a focal length of 15 cm is placed in front of an object 4 cm tall located 25 cm from the lens. Determine the image position, the lateral magnification and the image height. State whether the image is real or virtual, upright or inverted, and magnified or reduced.

## Data

Focal length [[f]] of 15 cm (positive, converging lens). Object distance [[d_o]] of 25 cm. Object height of 4 cm.

## System definition

The system is a single thin converging lens in air. The optical axis is horizontal with light propagating left to right. The object is real and located beyond the focal point of the lens.

## Physical model

The thin lens model in the paraxial approximation is applied. Image formation is governed by the thin lens equation relating [[f]], [[d_o]] and [[d_i]]. The lateral magnification [[m]] is obtained as the signed ratio of distances.

## Model justification

The model is valid because the problem specifies a thin lens and the angles involved are small (the 4 cm object at 25 cm subtends roughly 9 degrees). The model would break down if the lens were thick or if rays with angles exceeding 15 degrees were involved.

## Symbolic solution

From the lens equation:

{{f:ecuacion_lente_delgada}}

[[d_i]] is obtained as the product of [[f]] and [[d_o]] divided by the difference between [[d_o]] and [[f]].

The lateral magnification:

{{f:aumento_lateral}}

The image height is the product of the magnitude of [[m]] and the object height, with the sign of [[m]] indicating orientation.

## Numerical substitution

For [[d_i]]: the product of 15 cm and 25 cm is 375 square centimetres; the difference 25 minus 15 is 10 cm. Dividing gives [[d_i]] of 37.5 cm.

For [[m]]: minus 37.5 divided by 25 gives minus 1.5.

Image height: magnitude 1.5 times 4 cm gives 6 cm. The negative sign of [[m]] indicates the image is inverted.

## Dimensional validation

The distance [[d_i]] is expressed in centimetres, consistent with the input units. The magnification [[m]] is dimensionless (ratio of two lengths). The image height is in centimetres, consistent with the object height.

## Physical interpretation

The image forms 37.5 cm on the far side of the lens. It is real because [[d_i]] is positive: it can be projected onto a screen placed at that distance. It is inverted because [[m]] is negative, meaning the rays cross as they pass through the lens and the image appears flipped relative to the object. It is magnified because the magnitude of [[m]] is 1.5, greater than one: each centimetre of the object maps to 1.5 cm in the image.

Physically, this result arises because the object lies between one and two focal lengths from the lens, the zone where real images are magnified. Moving the object closer to the focus would cause [[d_i]] to grow without bound and the image to enlarge enormously, a situation exploited in projectors. Moving it beyond two focal lengths would reduce the magnitude of [[m]] below one and shrink the image, as occurs in the human eye when viewing distant objects.

Sign coherence confirms the validity of the result: positive [[d_i]] with negative [[m]] corresponds to the real-inverted image pair, exactly what ray tracing predicts. Had we obtained positive [[d_i]] with positive [[m]], that combination would violate the sign convention and signal an algebraic error. This kind of self-check is essential in geometrical optics problems.

# Real-world example

## Context

A slide projector uses a converging lens with an 80 mm focal length to project a 24 mm tall slide onto a screen located 3 metres from the lens. The goal is to estimate the projected image size and verify whether the thin lens model is applicable.

## Physical estimation

The estimation proceeds by order of magnitude. If the screen is at 3 m and the focal length is 80 mm, the object (the slide) must be positioned slightly above the focal length. The approximate ratio between the screen distance (3000 mm) and the focal length (80 mm) gives a magnification magnitude of approximately 37. Therefore the image will have a scale of the order of 37 times 24 mm, that is approximately 900 mm tall, close to one metre. This order-of-magnitude estimation is reasonable for a room projector.

Refining: [[d_o]] works out to approximately 82 mm (slightly above [[f]]). The magnification [[m]] is of the order of minus 37 (inverted image, which the projector corrects by placing the slide upside down). The screen image measures roughly 89 cm, a reasonable value for classroom projection.

The thin lens model is applicable because the projector lens has an 80 mm focal length and its typical thickness is of the order of 8 mm (one tenth of the focal length), within the validity limit. The lens is manufactured from glass with refractive index [[n]] of approximately 1.5 and a front surface radius [[R1]] of the order of 60 mm, parameters that the lensmaker's equation connects to the resulting focal length.

## Interpretation

The result confirms that a short focal-length lens can produce highly magnified images when the object is barely above the focal distance. Sensitivity is high: moving the slide by 1 mm changes [[d_i]] significantly, which explains why projectors incorporate fine-focus mechanisms. The relationship between [[d_o]] and [[f]] operates in a regime of high sensitivity because [[d_o]] is only slightly larger than [[f]], placing the system near the divergence point of the thin lens equation.

The model correctly predicts the projection scale to within a few percent. In practice, projector objectives are multi-element systems designed to correct chromatic and spherical aberrations that the single thin lens model does not address. Nevertheless, the order-of-magnitude estimate and the sign analysis remain valid as a first approximation, and they provide the physical intuition necessary to understand why small adjustments to [[d_o]] produce large changes in image size and sharpness.
`;export{e as default};
