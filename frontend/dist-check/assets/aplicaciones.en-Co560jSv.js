const e=`## 1. Plane mirrors in optical instruments

A plane mirror redirects light beams without changing their basic convergence. In periscopes, cameras, telescopes, and optical benches, the law of reflection allows the light path to be folded while maintaining precise angular control.

The dominant assumption is that the surface is smooth compared with visible wavelength. Direction is decided by [[theta_i]] and [[theta_r]], while useful brightness depends on [[R_reflectancia]]. A low-reflectance mirror can point the beam correctly but strongly reduce the signal.

In a real setup, this separation prevents wrong diagnosis. If the beam reaches the detector with little power, the problem may be [[R_reflectancia]], dirt, or absorption, not necessarily angular alignment. If the beam misses the detector, geometry becomes the first suspect.

Dominant variable: [[theta_r]] as the direction of the reflected beam that must align with the next optical element.
Validity limit: if the mirror is scratched, curved, or contaminated, scattering and losses appear that the plane model does not represent.

## 2. Echoes and early reflections in rooms

In architectural acoustics, a wall, ceiling, or panel can reflect sound toward the audience. Geometry predicts where the reflection travels, and intensity determines whether it is useful, annoying, or nearly imperceptible.

The simplification is to treat the wall as a flat boundary for the relevant frequency range. At low frequencies, a large surface often behaves specularly; at high frequencies, relief and porous materials can scatter or absorb more. Therefore [[R_reflectancia]] changes with frequency.

Acoustic design uses this reading to choose between reflective, absorptive, and diffusive panels. A moderate early lateral reflection can add spatial impression, but an intense delayed reflection can produce echo or loss of intelligibility. The same geometric law guides placement, while material controls returned energy.

Dominant variable: [[I_reflejada]] along the path toward the listener, because it controls whether the reflection affects clarity and reverberation.
Validity limit: in rooms with many nearby surfaces, isolated reflection must be replaced by a reverberant-field model.

## 3. Radar, sonar, and object detection

Radar and sonar emit waves and analyze the signal returning after reflection from an object. Return direction helps locate the target, while reflected intensity informs size, orientation, and material.

The real boundary is rarely a perfect mirror. An object may return much energy in one orientation and little in another. Effective reflectance includes shape, roughness, and impedance contrast. The basic reflection model is a first reading before scattering models are used.

In sonar, a rocky seabed returns strong directional echoes, while soft sediment may absorb and scatter more. In radar, a properly oriented metallic surface can produce a strong return, but a tilted profile may send the signal away from the receiver.

Dominant variable: [[I_reflejada]] detected by the receiver, because it determines whether the echo rises above background noise.
Validity limit: complex objects, multiple tilted surfaces, or wavelengths comparable with target size require three-dimensional scattering.

## 4. Optical fibres and guidance by internal reflection

In an optical fibre, light is guided because it repeatedly reflects at the boundary between core and cladding under suitable conditions. Although the full phenomenon includes refraction, the idea of local reflected direction remains essential.

Each reflection preserves an internal path if the angle is compatible with guidance. Accumulated loss depends on boundary quality and material absorption. A small loss per repeated reflection can become important after many kilometres.

Internal reflection shows that the local direction can repeat many times without the ray leaving the guide. However, final performance depends on small accumulated losses. This is why a fibre is evaluated both by guiding geometry and by optical attenuation.

Dominant variable: internal [[theta_i]] with respect to the core-cladding boundary normal, because it decides whether the ray remains guided.
Validity limit: for single-mode fibres or high-precision analysis, the ray model must be replaced by electromagnetic modes.

## 5. Surface reading through brightness and reflection

In machine vision, photography, and material diagnosis, reflection reveals roughness, orientation, and finish. An intense specular highlight indicates a surface smooth at the observed wave scale; diffuse reflection suggests texture or scattering.

The reading combines direction and energy. Highlight direction allows local normals to be inferred, while [[R_reflectancia]] helps distinguish materials. Polished metal, matte paint, and glass may obey similar geometries but return very different intensities.

In industrial inspection, a sudden change in reflection can reveal a dent, contamination, or a poorly applied coating. The camera is not measuring visual appeal, but a physical combination of local orientation, roughness, and reflected fraction.

This is why controlled lighting is essential: changing the lamp position changes [[theta_i]], and therefore moves the specular highlight even when the material itself has not changed.

Dominant variable: apparent [[R_reflectancia]], because it summarizes how much brightness returns to the sensor for a given illumination.
Validity limit: translucent, multilayer, or very rough surfaces require bidirectional reflectance models, not a single specular reflection.
`;export{e as default};
