const e=`# Exam-type example

## Problem statement

A compound microscope has an objective with a focal length of 4 mm and an eyepiece with a focal length of 25 mm. The optical tube length is 160 mm. A biological specimen is placed 4.2 mm from the objective. Determine the position of the intermediate image, the total magnification of the microscope and the position of the image relative to the eyepiece, assuming the observer has a conventional near point of 0.25 m.

## Data

- Objective focal length: 0.004 m
- Eyepiece focal length: 0.025 m
- Tube length: 0.16 m
- Object distance to the objective: 0.0042 m
- Near-point distance: 0.25 m

## System definition

The system consists of two thin converging lenses placed coaxially. The objective faces the specimen and forms a real intermediate image inside the tube. The eyepiece, at the far end of the tube, receives that intermediate image as its object and angularly magnifies it for the observer's eye.

## Physical model

The thin-lens equation is applied to each lens separately, using [[d_o]], [[d_i]] and [[f]] for the objective. The intermediate image becomes the object of the eyepiece. The total magnification [[M_micro]] is obtained as the product of the lateral magnification of the objective and the angular magnification of the eyepiece, using [[L]], [[f_obj]], [[f_oc]] and [[d_pp]].

## Model justification

The focal lengths are on the order of millimetres to centimetres and the specimen is small, so rays form small angles with the optical axis. The paraxial approximation is valid. The model would cease to hold if the numerical aperture of the objective exceeded 0.65, in which case third-order aberrations would become significant.

## Symbolic solution

First, the position of the intermediate image formed by the objective:

{{f:ecuacion_lente_delgada}}

Solving for [[d_i]] gives the image distance from the objective.

Next, the total microscope magnification:

{{f:aumento_microscopio}}

The angular magnification of the equivalent magnifier represented by the eyepiece:

{{f:aumento_angular_lupa}}

## Numerical substitution

For the intermediate image, with [[d_o]] of 0.0042 m and [[f]] of 0.004 m, compute the reciprocal of 0.004 minus the reciprocal of 0.0042 and take the reciprocal of the result. The reciprocal of 0.004 is 250, the reciprocal of 0.0042 is approximately 238.1, the difference is 11.9 and its reciprocal gives [[d_i]] approximately 0.084 m, that is, 84 mm. The intermediate image forms at 84 mm from the objective, inside the tube.

For the total microscope magnification, divide [[L]] by [[f_obj]]: 0.16 divided by 0.004 gives 40. Divide [[d_pp]] by [[f_oc]]: 0.25 divided by 0.025 gives 10. Multiply both factors: 40 times 10 gives [[M_micro]] equal to 400.

For the eyepiece angular magnification, divide 0.25 by 0.025 to obtain [[M_angular]] equal to 10.

## Dimensional validation

- Image distance: the operation with reciprocals of metres yields metres. Dimensional check: \`[L]\` ✓
- Microscope magnification: the ratio metre over metre in each factor gives dimensionless. Check: \`[1]\` ✓
- Eyepiece angular magnification: metre over metre gives dimensionless. Check: \`[1]\` ✓

## Physical interpretation

The result shows that the intermediate image forms at 84 mm from the objective, which is consistent with a tube length of 160 mm: the image falls inside the tube, as expected in a well-adjusted microscope. The total magnification of 400 means that a 1 micrometre detail in the specimen is projected onto the observer's retina as if it measured 0.4 mm, a size sufficient for perception by the human eye.

The magnification of 400 is the product of 40 (lateral magnification of the objective) and 10 (angular magnification of the eyepiece). If higher resolution were desired, it would be more effective to reduce the objective focal length than the eyepiece focal length, because the objective factor has greater sensitivity: reducing [[f_obj]] from 4 mm to 2 mm would double the total magnification to 800, while reducing [[f_oc]] from 25 mm to 12.5 mm would also double the eyepiece factor but would demand a higher-quality eyepiece to maintain the field of view.

Physically, a magnification of 400 is within the useful range for a microscope with moderate numerical aperture. Exceeding 600 magnifications with this configuration would start to produce empty magnification, that is, a larger image but no sharper.

# Real-world example

## Context

A field geologist needs to examine the crystalline texture of a rock with a pocket magnifying glass to determine whether it is a fine-grained granite or a basalt. The crystals of interest measure between 0.1 mm and 0.5 mm. The magnifier has a focal length of 50 mm and the geologist has a near point of 0.25 m.

## Physical estimation

The estimation of the magnifier angular magnification is straightforward: [[d_pp]] divided by [[f_lupa]], that is, 0.25 m divided by 0.050 m, gives [[M_angular]] approximately equal to 5. This order of magnitude is consistent with typical field magnifiers. With this magnification, a 0.2 mm crystal is perceived as if it measured 1 mm, a size sufficient to distinguish its shape and surface lustre. A 0.1 mm crystal will be perceived as 0.5 mm, at the limit of eye resolution but still identifiable under good illumination.

If the geologist needed higher magnification, switching to a 25 mm focal-length loupe would give [[M_angular]] of 10, so the 0.1 mm crystal would appear as 1 mm. However, the field of view narrows and it becomes harder to keep the sample in focus under field conditions. The scale of magnifications between 3 and 10 covers most field petrographic classification needs.

## Interpretation

A magnification of 5 is adequate for field petrographic classification because it allows distinguishing quartz, feldspar and mica crystals by their geometry and lustre without requiring laboratory equipment. The choice between a 5x or 10x magnifier depends on the minimum relevant crystal size and the comfort of the field of view. For more detailed analysis, the geologist would take the sample to the laboratory and use a petrographic microscope with polarised light and magnifications of 40 to 400.
`;export{e as default};
