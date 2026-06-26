const e=`# Transverse Shear Waves\r
\r
## Conceptual context\r
\r
A transverse shear wave is a mechanical disturbance in which particles move perpendicular to the direction in which the pattern travels. The medium must do more than contain mass; it must exert restoring forces when neighbouring layers slide sideways. This is why the leaf is about elastic solids. A gas or ideal liquid can carry pressure disturbances, but it cannot sustain an elastic shear stress in the bulk for the model used here.\r
\r
The central question is therefore physical before it is algebraic: why does this wave exist in a solid, and why does it disappear when shear rigidity is lost? In a solid, a laterally displaced layer pulls elastically on adjacent layers. That local coupling advances the disturbance without transporting the material as a whole.\r
\r
## 🟢 Essential level\r
\r
The propagation speed is [[v_s]]. It becomes larger when the solid is more resistant to shear and smaller when the same restoring action has to accelerate more mass per unit volume. This gives a qualitative prediction before any calculation is made.\r
\r
The role of [[G_shear]] is to describe the ability of the material to recover its shape after a sideways distortion. The role of [[rho_medio]] is to describe inertia. A shear wave is the dynamic balance between these two effects: elastic recovery and delayed motion.\r
\r
This wave is different from a longitudinal wave. In a longitudinal wave, particles compress and expand along the propagation direction. In a shear wave, the local volume is almost unchanged while the shape changes. A medium may carry a P wave without carrying an S wave, but the reverse is not expected in the ordinary elastic model.\r
\r
## 🔵 Formal level\r
\r
The shear velocity is obtained from the fundamental relation for an isotropic elastic solid:\r
\r
{{f:velocidad_onda_s}}\r
\r
The spatial scale of the disturbance is fixed by the source frequency:\r
\r
{{f:longitud_onda_transversal}}\r
\r
The transverse impedance summarizes how the medium exchanges shear energy across a boundary:\r
\r
{{f:impedancia_transversal}}\r
\r
Comparison with longitudinal waves connects the velocity ratio with Poisson's ratio:\r
\r
{{f:relacion_vp_vs_poisson}}\r
\r
When amplitude and angular rate are known, the transverse energy density can be estimated:\r
\r
{{f:energia_onda_transversal}}\r
\r
The formal layer adds variables that are not needed for the first intuition. [[lambda_s]] controls resolution, [[Z_s]] controls interface response, [[nu_poisson]] connects P and S measurements, and [[u_s]] requires [[A_s]] and [[omega_angular]]. The equations form a workflow rather than an isolated list.

This is also the point where experimental data become sorted by purpose. A time-of-flight measurement mainly determines [[v_s]]. A frequency choice determines [[lambda_s]] and resolution. A boundary problem needs [[Z_s]]. An energy question is incomplete until amplitude and angular frequency are supplied. The formal model is therefore a map of what must be known, not just a set of algebraic shortcuts.

That map prevents a common mistake: treating every measured number as equally central. Some quantities define the medium, others define the source, and others describe what is observed after propagation.
\r
## 🔴 Structural level\r
\r
An S wave is a transverse solution of the linear elastic equations. The local displacement is not long-range transport of matter; it is oscillation around equilibrium. Information and energy advance because each small region of the solid is elastically coupled to its neighbours.\r
\r
In an isotropic medium, the polarization direction may be chosen in any plane perpendicular to propagation. In seismology, SH and SV components distinguish horizontal and vertical particle motion. That distinction changes geometry, not the need for shear restoring force.\r
\r
The wavelength must be much larger than grains, pores, fibres or defects that are being averaged into a continuum. If the wave starts to resolve microstructure, dispersion, scattering, mode conversion and extra attenuation appear. Then the measured velocity is no longer a simple material constant, and the ideal model must be replaced.\r
\r
## Deep physical interpretation\r
\r
The important result is not the square root itself. It is the statement that propagation depends on two complementary properties. [[G_shear]] supplies recovery of shape; [[rho_medio]] supplies inertia. Doubling stiffness does not double speed, and doubling density does not halve speed.\r
\r
The absence of shear waves in fluids follows from the limiting case of zero shear rigidity. Without a lateral restoring force, a displaced layer does not elastically pull the next one. Viscosity or surface effects may create other phenomena, but not the bulk elastic shear wave described in this leaf.\r
\r
## Order of magnitude\r
\r
In soft soils, [[v_s]] may be a few hundred metres per second. In competent rock and metals, it is often several kilometres per second. In soft polymers or gels it can be much lower. These ranges quickly reveal unit errors, especially when gigapascals are entered as pascals.\r
\r
In industrial ultrasonics, megahertz frequencies combined with kilometre-per-second velocities give wavelengths of millimetres or less. In seismology, hertz or sub-hertz frequencies give wavelengths from metres to kilometres. The same physics covers both cases, but the experimental reading changes.\r
\r
## Personalized resolution method\r
\r
First decide whether the medium can be treated as an elastic solid. If the statement describes a liquid, gas or material that flows over the time scale of the experiment, do not apply the bulk S-wave model directly. Second, check that the stiffness is shear stiffness rather than Young's modulus or bulk modulus.\r
\r
Third, compute [[v_s]] and compare it with [[v_p]] when a P-wave speed is given. Fourth, use frequency to obtain [[lambda_s]] and judge whether the continuum model is plausible. Fifth, if there is an interface, interpret [[Z_s]] before discussing reflection or transmission. Sixth, use [[A_s]] and [[omega_angular]] only when the problem defines a harmonic oscillation.\r
\r
## Special cases and extended example\r
\r
Steel has high shear stiffness and high density, so its S-wave speed is still several kilometres per second. A saturated soft soil can have substantial density but low effective shear stiffness, making its S-wave speed small. Rubber may be nearly incompressible while carrying slow shear waves because its shear modulus is small.\r
\r
If a test measures both P and S arrivals, the velocity ratio gives information about [[nu_poisson]]. Nearly incompressible materials separate P and S speeds strongly. More compressible materials reduce that separation. The reading must remain cautious because anisotropy, cracking and saturation can shift apparent velocities.\r
\r
## Real student questions\r
\r
If the wave is transverse, why does it travel forward? Because propagation direction is the direction in which the phase pattern moves, not the instantaneous direction of particle motion. A particle moves sideways while the pattern advances along the solid.\r
\r
Why is a string not a complete analogy? A string makes transverse motion visible, but a three-dimensional S wave depends on distributed shear strain. The string is held by tension; the solid has internal shear rigidity.\r
\r
## Cross-cutting connections and study paths\r
\r
This topic links elasticity, seismology, ultrasonics, geotechnics and materials science. In elasticity it prepares the reading of stress and strain tensors. In seismology it explains why S waves do not pass through the liquid outer core. In engineering it helps estimate soil stiffness and detect damage without destroying the part.\r
\r
## Final synthesis\r
\r
A transverse shear wave is the dynamic signature of a solid able to resist lateral deformation. Its speed measures the competition between shear stiffness and inertia. Its wavelength, impedance, energy and P-wave comparison turn a simple idea into a quantitative tool for reading real materials.\r
`;export{e as default};
