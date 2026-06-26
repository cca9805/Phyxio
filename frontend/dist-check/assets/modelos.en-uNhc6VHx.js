const e=`## Ideal model

The specular reflection model in geometrical optics treats light as rectilinear rays that change direction upon encountering a surface without considering wave effects. The central simplification is to assume that the interface is geometrically perfect: smooth, infinitely thin and with no transition region.

This model preserves the angular magnitudes ([[theta_i]], [[theta_r]]) and the geometry of the plane of incidence, but ignores polarisation, the fraction of reflected versus transmitted energy, and any interference or diffraction effects. The practical consequence is that it predicts exactly the **direction** of the reflected ray but not its **intensity**.

## Hypotheses

- The reflecting surface is **perfectly smooth** at the wavelength scale. If violated, reflection becomes diffuse and no unique reflected ray exists.
- Light propagates as **rectilinear rays** with wavelength negligible compared to the surface dimensions. If violated, diffraction effects appear.
- The interface is an **abrupt geometric boundary** with no thickness. If violated (thin film), interference effects arise that the model cannot capture.
- The media are **isotropic and homogeneous** on both sides. If violated (graded-index media), rays curve and the flat-boundary model ceases to apply.
- **Polarisation** of light is not considered. If violated (incidence near the Brewster angle), the reflected fraction depends strongly on polarisation.

## Quantitative validity domain

The model is valid when the surface roughness is < 50 nm for visible light (wavelength from 400 to 700 nm). This criterion corresponds to the Rayleigh limit: roughness below one tenth of the wavelength.

Laboratory mirrors have roughness < 20 nm and comply with ample margin. Telescope mirrors reach roughness < 10 nm. A sheet of paper has roughness of the order of magnitude of micrometres (> 1000 nm), a thousand times greater than the wavelength, which is why it reflects diffusely.

The lateral extent of the surface must be > 100 times the wavelength to avoid significant edge diffraction.

## Model failure signals

- The reflected image appears **blurred or diffuse** instead of sharp: indicates that surface roughness is comparable to the wavelength.
- The experimentally measured reflected ray angle **does not match [[theta_i]]**: suggests the local normal differs from the assumed one, typical of poorly modelled curved surfaces.
- The **reflected intensity varies with polarisation** of the incident beam: the geometric model does not distinguish polarisations, so this dependence signals the need to switch to the Fresnel model.
- **Coloured fringes** appear on thin films (soap bubbles, oil slicks): they indicate interference, a phenomenon outside the ray model.
- Light **gradually curves** instead of reflecting at a point: reveals a refractive index gradient incompatible with the abrupt boundary hypothesis.

## Extended or alternative model

The **Fresnel model** incorporates polarisation and calculates the fractions of reflected and transmitted energy as a function of [[theta_i]] and the indices [[n1]], [[n2]]. It predicts phenomena such as the Brewster angle (zero reflection for the parallel component) that the geometric model ignores.

The **full wave model** treats reflection as the superposition of electromagnetic waves satisfying boundary conditions. It includes the evanescent wave in total internal reflection and correctly describes thin films.

When to switch to the Fresnel model: whenever the reflected intensity, the polarisation dependence or the behaviour near the Brewster angle is needed. When to switch to the wave model: for thin films, waveguides or situations where diffraction is relevant.

## Operational comparison

| Criterion | Geometric specular model | Fresnel model | Wave model |
|---|---|---|---|
| Angular prediction | Exact | Exact | Exact |
| Energy fraction | Does not predict | Predicts by polarisation | Predicts with evanescent wave |
| Thin film | Does not apply | Does not apply | Applies |
| Computational cost | Minimal | Low | High |
| Range of validity | Specular surfaces | Specular surfaces | Universal |
`;export{e as default};
