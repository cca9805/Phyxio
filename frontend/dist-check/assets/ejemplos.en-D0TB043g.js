const e=`# Exam-type example

## Problem statement

A laser beam emits linearly polarised light with an intensity of 500 W/m². The light passes through an analyser whose transmission axis makes an angle of 35 degrees with the polarisation direction of the beam. Determine the transmitted intensity after the analyser and the angle to which the analyser should be rotated so that the transmitted intensity falls to one quarter of the incident intensity.

## Data

- Incident intensity of the polarised light: 500 W/m²
- Angle between the beam's polarisation and the analyser axis: 35 degrees (equivalent to 0.611 rad)
- The source is already linearly polarised, so the one-half factor does not apply

## System definition

The system consists of a laser source emitting linearly polarised light and a single analyser polariser. The incident intensity [[I_0]] corresponds directly to the laser output, with no prior reduction. The control variable is the angle [[theta_p]] between the beam's polarisation direction and the analyser's transmission axis.

## Physical model

The phenomenon is described by **Malus's law**, which relates [[I]] to [[I_0]] and [[theta_p]]. This model is valid because the source is a coherent, monochromatic and completely polarised laser, and the polariser is considered ideal with a high extinction ratio.

## Model justification

Malus's law is applicable because its three fundamental hypotheses are satisfied: the light is monochromatic, it is completely linearly polarised and the polariser has a laboratory-grade extinction ratio (above 10 000). The model would cease to be valid if partially polarised light were used, such as direct sunlight, or if the polariser had significant absorption of the aligned component.

## Symbolic solution

For the first part, we apply Malus's law directly:

{{f:ley_malus}}

We substitute [[I_0]] and [[theta_p]] to obtain [[I]].

For the second part, we need the angle [[theta_p]] that makes [[I]] equal to one quarter of [[I_0]]. Rearranging Malus's law, the squared cosine of [[theta_p]] must equal one quarter, so the cosine of [[theta_p]] is one half, which corresponds to 60 degrees.

## Numerical substitution

For the transmitted intensity at 35 degrees: multiply 500 W/m² by the squared cosine of 35 degrees. The cosine of 35 degrees is approximately 0.8192; squaring it gives 0.6710. Multiplying by 500 yields approximately 335.5 W/m². Therefore [[I]] ≈ 335.5 W/m².

For the angle giving one quarter of the intensity: the squared cosine of [[theta_p]] must equal 0.25; the square root of 0.25 is 0.5; the arccosine of 0.5 is 60 degrees. Therefore [[theta_p]] ≈ 60 degrees (equivalent to 1.047 rad). Note that this angle is different from [[theta_B]], which depends on the refractive indices and not on the squared cosine of intensity.

## Dimensional validation

The transmitted intensity has the same units as the incident one, since the squared cosine is dimensionless. Verification: \`[M T⁻³]\` times dimensionless gives \`[M T⁻³]\` ✓. The obtained angle is in radians, which is consistent with the SI unit for angles.

## Physical interpretation

The result shows that at 35 degrees approximately 67 per cent of the incident intensity is transmitted. Physically, this means the drop is gentle at moderate angles because [[I]] depends on the squared cosine rather than on the cosine itself. As [[theta_p]] increases, [[I]] decreases more and more steeply, making the attenuation far less severe at small angles than one might expect from a linear relationship.

To reduce the intensity to one quarter the analyser must be rotated to 60 degrees. This intermediate value between 0 and 90 degrees illustrates that Malus's law distributes attenuation non-uniformly: the first 75 per cent of reduction requires the initial 60 degrees, while the remaining 25 per cent needs only the final 30 degrees up to 90 degrees.

If [[I_0]] were increased while keeping the same angle, [[I]] would grow proportionally, confirming linearity with respect to incident intensity. Conversely, if [[theta_p]] varied while [[I_0]] remained fixed, the response would be quadratic, which is key for designing precise optical attenuators.

# Real-world example

## Context

A photographer wishes to reduce reflections from a lake surface in order to photograph the bottom. The photographer knows that sunlight reflected off the water surface is partially polarised. To eliminate most of the glare, a polarising filter is placed on the lens and oriented to block the horizontally polarised component. The water has a refractive index of approximately 1.33 and the scene is outdoors ([[n_1]] close to 1.00).

## Physical estimation

First the Brewster angle for the air–water interface is calculated:

{{f:ley_brewster}}

Substituting [[n_1]] equal to 1.00 (air) and [[n_2]] equal to 1.33 (water) into Brewster's law, the arctangent of 1.33 divided by 1.00 gives approximately 53.1 degrees. Therefore [[theta_B]] ≈ 53.1 degrees.

At this angle the light reflected from the surface is completely horizontally polarised (component perpendicular to the incidence plane). If the photographer positions the line of sight at that angle to the water's normal, a polarising filter with a vertical axis will eliminate virtually all surface reflection.

For the residual intensity, applying Malus's law with the polariser oriented at 90 degrees to the horizontally polarised component, the transmission of that component drops to zero. Light coming from the lake bottom, which is unpolarised, loses only half its intensity when passing through the filter, remaining clearly visible.

## Interpretation

The Brewster angle of 53 degrees for air–water indicates that the photographer should aim at a moderate inclination relative to the horizontal. This angle is practical and explains why photographs taken with a polariser from a boat at moderate distance show the lake bed with great clarity. If the photographer shot vertically (normal to the surface) or at grazing incidence, the polarization of the reflection would be much weaker and the filter would lose effectiveness. The choice of shooting angle is therefore a physical decision, not merely an aesthetic one.

Physically, the result reveals the connection between the macroscopic optical phenomenon and the microscopic mechanism: at the Brewster angle the induced dipoles in the water surface oscillate exactly along the direction of the would-be reflected ray, so they cannot radiate in that direction and the parallel-polarised component vanishes from the reflection. This is why the reflected beam becomes fully polarised perpendicular to the incidence plane. The photographer exploits this directional selectivity: by aligning the filter axis to block the surviving perpendicular component, virtually all specular glare is suppressed while the unpolarised light scattered from the lake bed passes through with only a factor-of-two attenuation. Changing [[n_2]] — for instance photographing through glass ([[n_2]] close to 1.50) instead of water — would shift [[theta_B]] to about 56 degrees, requiring the photographer to adjust the shooting angle accordingly. This sensitivity of [[theta_B]] to the refractive-index ratio underscores that the technique is material-specific, not a universal fixed-angle trick.
`;export{e as default};
