const e=`## Ideal model

The ideal polarization model assumes that the incident light is **completely linearly polarised** and that the polariser is a perfect filter: it transmits 100 per cent of the electric-field component aligned with its axis and absorbs 100 per cent of the perpendicular component. Within this framework, **Malus's law** describes the transmitted intensity without additional losses. Similarly, the ideal reflection model assumes the interface is **flat**, infinite and separates two **transparent dielectric media** without absorption, allowing **Brewster's law** to be applied in its simple form.

The magnitudes that are preserved are [[I_0]] as the maximum-intensity reference, [[theta_p]] as the angular control variable and [[n_1]] together with [[n_2]] as the medium parameters. The transmitted intensity [[I]] and the Brewster angle [[theta_B]] are the principal model outputs.

## Hypotheses

- The incident light is **monochromatic** and **coherent**; different wavelengths or incoherent sources are not mixed. Violating this hypothesis causes the squared-cosine dependence to blur when averaging over random phases.

- The light is **linearly polarised** before entering the analyser. If the light is partially polarised or elliptical, Malus's law underestimates or overestimates the transmitted intensity because the projection onto the axis does not capture the circular component.

- The polariser is **ideal**: no residual absorption, no internal reflections and no scattering. A real polariser always absorbs a small fraction of the aligned component, reducing the maximum transmission below [[I_0]].

- The interface for Brewster's law is **flat** and separates **homogeneous, isotropic and non-absorbing** media. On rough surfaces, diffuse reflection breaks the perpendicularity condition between the reflected and refracted rays.

## Quantitative validity domain

Malus's law is valid when the polariser extinction ratio exceeds 1000 (unwanted-component transmission below 0.1 %) and the source has a degree of polarization above 95 %. For Polaroid-type polarisers in the visible range (400 to 700 nm), the typical extinction ratio is > 10 000.

Brewster's law is accurate when the imaginary part of the refractive index is less than 0.01. For common glass, absorption at 550 nm is of the order of 10⁻⁶, well below that threshold. For metals such as aluminium, the imaginary part exceeds 1 and the law fails completely.

## Model failure signals

- Measured intensity with crossed polarisers does not reach zero but maintains a detectable residual: this indicates that the polariser is non-ideal or that the light is not fully polarised.

- The parallel-component reflectance does not vanish at any angle when analysing reflection: this indicates significant absorption in the medium or a non-flat surface.

- Rotating the analyser produces an intensity that does not follow a clean squared-cosine curve but oscillates irregularly: this indicates wavelength mixing or partial coherence.

- The measured Brewster angle differs by more than 2 degrees from the prediction: this indicates surface roughness or interface contamination.

## Extended or alternative model

The **Jones formalism** extends the ideal model to light with arbitrary polarization (linear, circular or elliptical) and to cascaded trains of optical components. Each element is represented as a **two-by-two matrix** acting on the electric-field vector, enabling computation of the polarization and intensity after any combination of polarisers, wave plates and rotators.

For absorbing media the **Stokes parameters** and the **Mueller formalism** are used, which work with directly measurable intensities and admit partially polarised light, covering cases that the Jones formalism cannot handle because it is restricted to fully polarised light.

When to switch to the extended model: when the source emits partially polarised light, when the system includes birefringent plates, or when the interface shows appreciable absorption. Switch to these models when the polariser extinction ratio drops below 100 or the imaginary part of the index exceeds 0.01.

## Operational comparison

| Criterion | Ideal model (Malus and Brewster) | Extended model (Jones or Mueller) |
|---|---|---|
| Admitted polarization type | Linear only | Linear, circular, elliptical, partial |
| Precision for real polarisers | High if extinction ratio exceeds 1000 | High in any case |
| Computational complexity | Low, one scalar formula | Medium-high, matrix algebra |
| Interfaces with absorption | Not applicable | Covered by Mueller |
| Chain of multiple optics | Limited to repeating Malus stage by stage | Direct via matrix product |
| Typical application range | Teaching laboratory and field optics | Advanced optical-device design |
`;export{e as default};
