const e=`## 1. Optical fibre for telecommunications

Long-distance data transmission through optical fibre relies on total internal reflection, which depends directly on the index contrast between the core and the cladding. The doped-silica core has an index [[n]] of approximately 1.468, while the cladding has a slightly lower index (for example, 1.462). This small index contrast defines the critical angle and, with it, the acceptance cone of the fibre: rays entering within that cone are confined and propagate by total reflection over kilometres without refraction loss.

The signal speed inside the core, determined by [[v_medio]], sets the communication latency. For a standard single-mode fibre, the speed is roughly two thirds of [[c]], producing a latency of about 4.9 microseconds per kilometre. In transoceanic submarine links spanning thousands of kilometres, this accumulated latency is decisive for high-frequency financial applications where milliseconds make a competitive difference.

Dominant variable: the refractive index of the core [[n]], which controls optical confinement and signal propagation speed.
Validity limit: the ray model ceases to be valid when the core diameter falls below roughly ten times the wavelength in the medium, entering the single-mode waveguide regime where diffraction governs propagation.

## 2. Design of ophthalmic lenses

Corrective-spectacle lenses are manufactured from materials whose refractive index [[n]] determines both the dioptric power and the thickness and weight of the lens. Glasses with [[n]] of 1.50 produce relatively thick lenses for high prescriptions; high-index materials (1.67 or 1.74) can reduce thickness by up to 40 % for the same prescription, improving aesthetics and comfort.

The refractive power of a curved surface depends on the contrast between the lens index and that of air. Increasing [[n]] reduces the curvature needed for a given power, yielding flatter lenses. However, high-index materials also exhibit greater chromatic dispersion (lower Abbe number), which can degrade peripheral image quality if appropriate corrections are not applied.

Dominant variable: the refractive index of the lens material [[n]], which controls lens thickness, weight and chromatic dispersion.
Validity limit: the model of ideal refractive surfaces fails when chromatic aberrations due to material dispersion dominate over geometrical correction, typically for high-index lenses without aspherical treatment.

## 3. Refractometry for food-quality control

In the food industry a refractometer is used to measure the sugar concentration (degrees Brix) in juices, honeys and syrups. The principle is direct: the solute concentration modifies the refractive index [[n]] of the liquid. An orange juice at 12 degrees Brix has an index close to 1.3510, while a concentrated syrup at 60 degrees Brix can reach 1.4418.

The refractometer measures the critical angle for total internal reflection at the interface between a glass prism of known index and the liquid sample. From that angle [[n]] of the liquid is calculated, and a calibration table converts the index into sugar concentration. The instrument's precision typically reaches the fourth decimal place of the index, enough to detect differences of half a degree Brix.

Dominant variable: the refractive index of the liquid [[n]], directly correlated with solute concentration.
Validity limit: the calibration fails when the liquid contains other solutes at significant concentration (salts, acids, alcohol) that alter the index without corresponding to sugar, producing overestimated Brix readings.

## 4. Gemmology and identification of precious stones

Measuring the refractive index is one of the fundamental tests for identifying gems and distinguishing natural stones from imitations. Each mineral has a characteristic index: diamond exhibits [[n]] of 2.42, ruby and sapphire close to 1.77, quartz around 1.54 and zircon between 1.93 and 1.98.

The gemmologist uses a contact refractometer with a high-index prism and a coupling liquid. The measurement is fast and non-destructive: placing a flat facet of the gem on the prism suffices to read the index. A difference of just 0.01 in [[n]] can distinguish a natural emerald from a green-glass imitation. Moreover, in birefringent crystals such as calcite the refractometer can measure both principal indices (ordinary and extraordinary), providing additional information about the mineral's identity.

Dominant variable: the refractive index of the gem [[n]], which acts as an optical fingerprint of the mineral.
Validity limit: the method fails when the gem surface is curved or rough (preventing adequate optical contact with the prism) or when the gem's index exceeds that of the contact liquid (typically limited to 1.81), preventing measurement of the critical angle.

## 5. Atmospheric mirages on roads and in deserts

The mirages observed on hot roads or in deserts are a direct consequence of the continuous variation of the air's refractive index [[n]] with temperature. Hot air near the ground has lower density and lower index (approximately 1.000 27 at 50 degrees Celsius) than the cooler air above (1.000 29 at 20 degrees Celsius). This vertical gradient of [[n]] progressively bends light rays upward.

When the gradient is strong enough, rays coming from the sky curve so much that they reach the observer from below, creating the illusion of a water puddle on the ground. The phenomenon is essentially continuous refraction in a medium of variable index, not reflection off a surface. The curvature of the ray depends on the vertical gradient of [[n]], which in turn depends on the thermal profile of the air layer near the ground.

Dominant variable: the vertical gradient of the air's refractive index, controlled by the temperature difference between the ground and the upper atmosphere.
Validity limit: the ray model ceases to apply when atmospheric turbulence produces random index fluctuations at scales comparable to the wavelength, generating scintillation instead of a stable mirage.
`;export{e as default};
