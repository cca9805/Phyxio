# Applications


## 1. Single-mode optical fibre for long-distance telecommunications

In a single-mode optical fibre, the infrared signal at 1550 nm is confined in a germanium-doped glass core whose refractive index is slightly higher than that of the pure silica cladding. The index difference is typically 0.003 to 0.005, producing an extremely high critical angle, of the order of 88 to 89 degrees measured from the normal to the core–cladding interface.

This configuration imposes that only rays almost perfectly aligned with the fibre axis satisfy the total internal reflection condition. The result is the elimination of all propagation modes except the fundamental one, which suppresses modal dispersion and allows bandwidths exceeding 10 Gbps over spans of hundreds of kilometres without regeneration. The designer calculates the core index profile using Snell's law to ensure that the resulting numerical aperture (of the order of 0.12) is compatible with direct-coupling laser emitters.

Dominant variable: the index difference between core and cladding, which fixes the critical angle and determines the number of propagating modes.
Validity limit: the ray model ceases to be sufficient when the core diameter is less than a few wavelengths; in that regime the full electromagnetic waveguide theory is needed.

## 2. Total-reflection prism in military binoculars

High-quality binoculars use BaK-4 glass prisms (index 1.57) where rays strike the internal faces at 45 degrees, a value significantly above the critical angle of the glass–air interface (approximately 39.6 degrees for that glass). Total internal reflection redirects the beam without the need for metallic coatings, avoiding the absorption losses and oxidation degradation suffered by aluminium mirrors.

Snell's law predicts that for any ray incident at 45 degrees inside the prism, the sine required in air would exceed unity, confirming that refraction is impossible and that one hundred per cent of the energy is reflected. The designer selects the glass type by verifying that its critical angle is at least 5 degrees below the design angle to guarantee tolerance margins against small alignment deviations.

Dominant variable: the refractive index of the prism glass, which determines the margin between the nominal angle of incidence and the critical angle.
Validity limit: if the prism surface becomes contaminated with oils or condensed moisture, the effective index of the external medium rises above 1.00 and the critical angle increases, potentially reducing total reflectance and generating unexpected losses.

## 3. Abbe refractometer for quality control in the food industry

The Abbe refractometer measures the refractive index of liquids by exploiting the critical angle of the interface between a heavy-glass prism (index known with high precision, typically 1.75) and the liquid sample. The instrument illuminates the sample with grazing light and observes the boundary between the illuminated and dark zones in the eyepiece field; the angular position of that boundary is directly governed by Snell's law under critical-angle conditions.

In the food industry, the sugar concentration in a juice or syrup correlates linearly with the refractive index in a narrow range (1.333 for pure water up to 1.504 for saturated syrup). The quality technician places a drop on the prism, observes the scale, and directly reads the percentage of soluble solids (degrees Brix). The achievable precision is 0.0001 in index, equivalent to 0.1 degrees Brix.

Dominant variable: the critical angle of the prism–sample interface, which changes with the solute concentration and enables direct quantitative reading.
Validity limit: the method fails when the sample is turbid, intensely coloured, or contains bubbles, because the light–shadow boundary becomes blurred and reading precision is lost. It also fails for highly viscous samples that do not form uniform optical contact with the prism.

## 4. Aspherical lens design for photographic objectives

In a multilayer photographic objective, each lens surface produces refraction described by Snell's law applied locally. The optical designer traces thousands of rays through the surfaces, calculating at each point the refraction angle according to the indices of the entering and exiting glass and the local surface normal. The sum of all these refractions produces the image on the sensor.

Aspherical lenses are designed by modifying the local curvature to correct aberrations: Snell's law indicates that, by changing the surface slope at a point, the refraction angle is modified in a predictable manner. The design software optimises the aspherical profile by minimising ray dispersion in the focal plane, using Snell's law as the fundamental equation at each iteration of the ray-tracing process.

For high-index glasses (1.80 to 2.00), refraction at each surface is more intense, allowing thinner and more compact lenses but demanding greater manufacturing precision: a 0.1-degree error in the local normal produces a proportionally larger ray deviation than in low-index glasses.

Dominant variable: the local curvature of the aspherical surface and the refractive index of the selected glass, which together determine the point-by-point optical power.
Validity limit: Snell's law in ray form fails when the pupil dimensions approach the wavelength (diffractive optics) or when the surface has deliberate microstructures (diffractive lenses, metalenses).

## 5. Inferior mirage on hot roads

On a hot day, the air layer immediately above the asphalt heats up and its density decreases, reducing its refractive index gradually. A light ray travelling obliquely downward experiences continuous refraction that progressively curves it upward. When the local angle exceeds the critical angle of the adjacent layers, total reflection occurs and the ray never reaches the surface: the observer sees an inverted image of the sky on the ground, creating the illusion of a water pool.

Snell's law applies here in differential form: each infinitesimal air layer has a slightly different index, and the horizontal component of the wave vector is conserved along the entire curved trajectory. The result is that the product of the local index and the sine of the local angle is constant throughout the entire ray path. When this product reaches the value of the index in the hottest layer, the ray is totally reflected.

The mirage intensity depends on the vertical temperature gradient: gradients exceeding 2 degrees per centimetre of height (typical over asphalt above 60 degrees Celsius) produce visible mirages at distances of tens of metres. With smaller gradients, the ray curvature is insufficient to produce total reflection and the mirage does not form.

Dominant variable: the vertical gradient of the air refractive index, controlled by the thermal gradient between the hot surface and the ambient air.
Validity limit: the ray model fails when atmospheric turbulence produces rapid index fluctuations that destroy ray coherence; in that case, scintillation and distortion are observed instead of a sharp specular image.