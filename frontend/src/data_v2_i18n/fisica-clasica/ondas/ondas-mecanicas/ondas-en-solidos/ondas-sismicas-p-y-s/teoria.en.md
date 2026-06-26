## Conceptual context

When an earthquake releases energy inside the Earth, that energy propagates as elastic waves through rocks. There are two fundamental types of body waves: **P waves** (primary, compression) and **S waves** (secondary, shear). Understanding their velocity differences and behavior in different media is essential for seismology, exploration geophysics, and earthquake-resistant engineering.

P and S waves form the basis of the seismological method: the arrival time difference allows locating the earthquake focus, and the presence or absence of S waves reveals whether internal layers are solid or liquid.

## 🟢 Essential level

**P waves** compress and dilate the material in the same direction as the wave advances, like a spring being pushed and released. Their velocity [[v_p]] is the highest of all seismic waves. **S waves** displace particles perpendicular to the propagation direction, like a vibrating string. Their velocity [[v_s]] is always less than that of P waves.

> [!NOTE]
> P waves always travel faster than S waves in the same medium. That is why they arrive first at a seismograph and are called "primary." The arrival time difference [[delta_t_ps]] is the key to locating the earthquake focus.

S waves do not propagate in fluids because liquids and gases lack shear rigidity. This property was key to discovering that Earth's outer core is liquid: S waves disappear when crossing it. The combination of both wave types allows both locating earthquakes and diagnosing the physical state of terrestrial materials.

## 🔵 Formal level

The P-wave velocity in an isotropic, homogeneous medium is given by:

{{f:velocidad_onda_p}}

Where [[modulo_de_compresibilidad]] is the bulk modulus, [[modulo_de_cizalla]] the shear modulus, and [[rho_medio]] the density. The presence of both moduli reflects that P waves involve both volume change and shape change.

The S-wave velocity depends only on shear rigidity:

{{f:velocidad_onda_s}}

The ratio between both velocities is directly related to the Poisson ratio of the medium:

{{f:relacion_vp_vs_poisson}}

For a solid with [[nu_poisson]] of 0.25, the [[ratio_vp_vs]] equals exactly the square root of 3 (approximately 1.73). Values above 2 indicate fluid saturation in the pores.

The arrival time difference between P and S at a seismological station allows estimating the distance to the focus:

{{f:diferencia_tiempos_sismo}}

Where [[d_foco]] is the distance to the hypocenter and [[delta_t_ps]] the measured interval between the two arrivals. This principle is the basis of seismic triangulation: by measuring [[delta_t_ps]] at a minimum of three stations and knowing the medium velocities, one can determine the three-dimensional position of the focus. The direct proportionality between [[delta_t_ps]] and [[d_foco]] is a consequence of propagation at constant velocity in a homogeneous medium.

## 🔴 Structural level

The fundamental difference between P and S lies in the type of deformation they mobilize. P waves produce **volumetric dilation** (compression-rarefaction), so their velocity depends on both [[modulo_de_compresibilidad]] and [[modulo_de_cizalla]]. S waves produce **shape distortion** without volume change, and depend only on [[modulo_de_cizalla]].

> [!WARNING]
> In a fluid, [[modulo_de_cizalla]] is exactly zero. This means [[v_s]] vanishes and S waves do not exist. P waves, however, still propagate because [[modulo_de_compresibilidad]] remains finite.

**Model validity conditions:**

- **Isotropy**: if the medium is anisotropic (layered rocks, crystals), velocities depend on propagation direction and quasi-P and quasi-S waves appear.
- **Homogeneity**: in stratified media, waves refract at each interface following Snell's law. Paths are no longer straight and travel-time curves bend.
- **Linear elasticity**: for large amplitudes (near-source region), nonlinear effects modify propagation.
- **Long wavelength**: if wavelength is comparable to grain size or fractures, dispersion and scattering attenuation appear.

The [[ratio_vp_vs]] is a **powerful lithological indicator**. Dry crystalline rocks show values near 1.7, while water- or gas-saturated rocks show higher values (2.0–2.5). This variation allows detecting the presence of fluids in deep geological formations from the surface.

> [!TIP]
> If [[ratio_vp_vs]] exceeds 2.0 in a formation expected to be dry rock, fluids are likely present in the pores. If it drops below 1.5, the data is suspect and should be checked.

The **seismic shadow zone** (between 104 and 140 degrees angular distance) is explained because P waves refract upon entering the liquid core (where [[v_s]] vanishes) and S waves are completely absorbed. This phenomenon was the first direct evidence that the outer core is liquid.

## Deep physical interpretation

The velocity [[v_p]] combines two elastic restoration mechanisms: resistance to compression ([[modulo_de_compresibilidad]]) and resistance to shape change ([[modulo_de_cizalla]]). This means that even in a material very soft in shear but incompressible (like water), P waves propagate effectively.

The velocity [[v_s]], depending only on [[modulo_de_cizalla]], is a pure indicator of structural rigidity. A medium that supports S waves is necessarily a solid. This dichotomy makes the P/S pair a diagnostic tool for the physical state of matter.

The [[delta_t_ps]] grows linearly with distance in a homogeneous medium. In the real Earth, the curvature of travel-time curves reflects velocity variation with depth (effect of pressure and temperature on elastic moduli).

## Order of magnitude

- **Continental crust**: [[v_p]] from 5500 to 6500 m/s, [[v_s]] from 3000 to 3700 m/s
- **Upper mantle**: [[v_p]] from 7800 to 8100 m/s, [[v_s]] from 4300 to 4600 m/s
- **Outer core (liquid)**: [[v_p]] from 8000 to 10300 m/s, [[v_s]] is zero
- **Water**: [[v_p]] of 1500 m/s, [[v_s]] is zero

A local earthquake at 50 km depth generates a [[delta_t_ps]] of about 7 seconds. A teleseism at 10000 km produces a [[delta_t_ps]] exceeding 10 minutes.

If [[v_p]] above 9000 m/s is obtained in continental crust, the result is physically absurd and the input moduli or density must be checked.

## Personalized resolution method

1. **Identify the medium**: determine [[modulo_de_compresibilidad]], [[modulo_de_cizalla]], and [[rho_medio]] of the material (geophysical tables or laboratory tests).
2. **Calculate [[v_p]]**: apply the square root formula with ([[modulo_de_compresibilidad]] plus 4/3 times [[modulo_de_cizalla]]) divided by [[rho_medio]].
3. **Calculate [[v_s]]**: apply the square root of [[modulo_de_cizalla]] divided by [[rho_medio]].
4. **Verify coherence**: check that [[v_p]] is greater than [[v_s]]. If not, there is an error in the moduli.
5. **Estimate distance**: if [[delta_t_ps]] is available, obtain [[d_foco]] by multiplying by the velocity factor.
6. **Classify lithology**: calculate [[ratio_vp_vs]] and compare with reference tables to identify rock type.

## Special cases and extended example

**Fluid case**: setting [[modulo_de_cizalla]] to zero, the [[v_p]] formula reduces to the speed of sound in the fluid (square root of [[modulo_de_compresibilidad]] over [[rho_medio]]). S waves disappear completely.

**Ideal Poisson material** ([[nu_poisson]] of 0.25): the [[ratio_vp_vs]] equals exactly the square root of 3. Many dry igneous rocks approximate this value, simplifying first-order calculations.

**Partially saturated medium**: partial saturation produces a sharp increase in [[ratio_vp_vs]] because [[modulo_de_compresibilidad]] increases with water while [[modulo_de_cizalla]] barely changes. This effect is the basis for hydrocarbon reservoir detection using seismic methods.

**Anisotropy**: in layered sedimentary rocks, [[v_p]] parallel to layering can be 10–20 percent higher than perpendicular to it. Isotropic models are no longer sufficient and a full elastic tensor is required.

## Real student questions

- **Why is P always faster than S?** Because the [[v_p]] formula includes [[modulo_de_compresibilidad]] added to [[modulo_de_cizalla]], while [[v_s]] only includes [[modulo_de_cizalla]]. Adding a positive term in the numerator makes [[v_p]] necessarily larger.

- **How do we know the outer core is liquid?** Because S waves do not traverse it: [[modulo_de_cizalla]] is zero in a liquid, which makes [[v_s]] zero. Only P waves continue (with finite [[modulo_de_compresibilidad]]).

- **Does the time difference only work for homogeneous media?** In theory yes, but in practice corrected travel-time curves are used based on Earth velocity models (such as PREM or IASP91) that account for property variations with depth.

- **Can [[ratio_vp_vs]] be less than the square root of 2?** In principle yes: it would imply negative [[nu_poisson]], corresponding to an auxetic material. They are rare in geology but exist in synthetic materials.

- **What about surface waves?** Surface waves (Rayleigh and Love) derive from P and S waves interacting with the free surface. They are slower but with larger amplitude at long distances, and cause most seismic damage.

## Cross-cutting connections and study paths

This leaf connects directly to [Longitudinal waves in bars](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-longitudinales-en-barras), where propagation in confined geometry is studied. The main difference is that in a slender bar only Young's modulus is involved (with free lateral deformation), while in an infinite medium [[modulo_de_compresibilidad]] and [[modulo_de_cizalla]] enter as independent parameters.

It also connects to [Mechanical impedance in solids](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/impedancia-mecanica-en-solidos), since reflection and transmission coefficients at geological interfaces depend on acoustic impedances (product of density and velocity).

For practical engineering applications, the leaf [Dispersion and attenuation in solids](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/dispersion-y-atenuacion-en-solidos) extends the ideal elastic model to viscoelastic media with losses.

## Final synthesis

P and S seismic waves are the two fundamental forms of elastic propagation inside the Earth. Their velocity depends on elastic moduli and medium density, and their ratio reveals the Poisson coefficient and possible fluid presence. The arrival time difference is the basic tool for seismic location, and the extinction of S waves in fluids is the fundamental geophysical evidence for the existence of Earth's liquid core.