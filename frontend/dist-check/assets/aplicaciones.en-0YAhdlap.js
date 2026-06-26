const e=`# Applications of Transverse Shear Waves\r
\r
## 1. Seismic geotechnics and soil classification\r
\r
Dominant variable: [[v_s]]\r
\r
Validity limit: [[lambda_s]] must be larger than the layer heterogeneity scale.\r
\r
In geotechnics, near-surface S-wave velocity helps classify soil and estimate its ability to amplify seismic motion. Low values indicate soft material, low dynamic stiffness and larger expected deformation during an earthquake. The reading is not just a number: engineers compare the trend with depth, look for velocity inversions and check whether each layer can be treated as roughly homogeneous.\r
\r
The estimate becomes reliable when arrival times are clear and sensor spacing is well measured. If the pulse crosses fills, soft lenses or saturated zones, the interpretation must include stratigraphic uncertainty.

A common use is comparing profiles before and after compaction or ground improvement. If [[v_s]] increases consistently, higher dynamic stiffness is inferred. If the change is restricted to one thin layer, the engineer avoids extrapolating that result to the whole site.
\r
## 2. Seismic exploration and lithology\r
\r
Dominant variable: [[ratio_vp_vs]]\r
\r
Validity limit: Anisotropy and saturation must be modelled if they alter the P/S reading.\r
\r
In exploration, comparison between P and S velocities helps distinguish lithology and fluid content. The P/S ratio changes when rock is more compressible, when gas is present or when the solid frame contains cracks. The S wave adds information that a P wave alone cannot separate because it responds directly to the shear stiffness of the skeleton.\r
\r
The application requires caution: a ratio variation may come from saturation, mineralogy, effective pressure or anisotropy. It is therefore combined with impedances, well logs and rock-physics models.

In modern inversion, shear waves also help estimate elastic properties that control reservoir stability and response to fracturing. Their value appears when the S-wave data remove an ambiguity that P-wave data alone would leave unresolved.
\r
## 3. Industrial shear ultrasonics\r
\r
Dominant variable: [[lambda_s]]\r
\r
Validity limit: The part must behave as a continuum and attenuation must not hide the echo.\r
\r
Shear transducers are used to inspect welds, laminates and metallic parts when a longitudinal wave does not illuminate certain defects well. Wavelength controls resolution: higher frequencies detect smaller details, but also increase attenuation and may disperse if the microstructure is no longer small.\r
\r
The operator compares echoes, time of flight and relative amplitudes. Velocity is calibrated on a known block; discontinuities are then located from S-wave paths.

In weld inspection, shear polarization can make cracks visible when their orientation is unfavourable for a longitudinal wave. Transducer choice combines frequency, angle and mode to maximize contrast while staying inside the continuum domain.
\r
## 4. Global seismology\r
\r
Dominant variable: [[Z_s]]\r
\r
Validity limit: Interfaces require mode conversion when incidence is not normal.\r
\r
In seismology, S waves reveal where the planet retains shear rigidity. Their absence through the outer core is physical evidence for a liquid state. At internal discontinuities, contrasts in transverse impedance control reflections, conversions and amplitude changes observed at distant stations.\r
\r
Global interpretation does not use a single homogeneous material. Radial or three-dimensional models are built and adjusted to arrival times. The elementary idea of positive [[G_shear]] remains the key separating solid regions from regions unable to carry shear.

Comparing stations reveals mantle anisotropy, low-velocity zones and discontinuities. Each departure from a simple model becomes information about temperature, composition, partial melting or mineral texture.
\r
## 5. Materials engineering and curing control\r
\r
Dominant variable: [[G_shear]]\r
\r
Validity limit: The response must remain in the linear elastic regime.\r
\r
During curing of concretes, polymers or adhesives, S-wave velocity tracks increasing stiffness without destroying the sample. As the internal network consolidates, [[G_shear]] grows and the shear wave travels faster. The technique is sensitive to early changes that are not always visible in static tests.\r
\r
The limit appears when the material is strongly viscoelastic, when temperature changes during measurement or when amplitude induces damage. Then frequency-dependent moduli and stricter experimental control are needed.

It is also used in repeated quality control: two batches with similar density but different [[v_s]] do not have the same shear stiffness. This reading can detect ageing, porosity or incomplete curing before destructive tests are performed.

In composite materials, the reading must be separated by direction. A high velocity in one orientation and a low velocity in another is not necessarily an error; it may be the mechanical signature of fibres, layers or internal texture. The application therefore combines [[v_s]] with manufacturing history, thermal treatment and the expected direction of loading.

The same principle is useful in service monitoring. If periodic measurements show a gradual reduction in shear velocity while density is unchanged, the likely interpretation is damage accumulation, loss of bonding or microcrack growth. The result is not a final diagnosis by itself, but it tells the engineer where to inspect more carefully.

That makes shear waves a practical bridge between laboratory elasticity and field maintenance decisions.
`;export{e as default};
