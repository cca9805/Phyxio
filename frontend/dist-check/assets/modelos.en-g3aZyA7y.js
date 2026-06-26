const e=`# Wave intensity model

## Ideal model

The ideal wave intensity model describes the spherical propagation of three-dimensional waves from an isotropic point source in a homogeneous non-absorbing medium. This model considers that the emitted power is uniformly distributed over the surface of a growing sphere, maintaining the total transported energy constant.

In this simplified model, intensity [[I_intensidad]] strictly follows the inverse square law of distance: it decreases proportionally to 1/r² from the source. Total power [[P_potencia]] is conserved throughout space, being redistributed over increasingly larger spherical areas without dissipation losses.

The central simplification consists of ignoring any atmospheric or terrestrial absorption mechanism, considering the source as point-like and perfectly isotropic, and assuming that the propagation medium is uniform and infinite, without reflections or refractions at interfaces.

## Hypotheses

- **Isotropic point source**: Emits power [[P_potencia]] uniformly in all directions, without angular preference.

- **Pure spherical propagation**: Wavefronts are perfect spheres centered at the source, expanding at the medium wave speed.

- **Homogeneous and infinite medium**: Constant physical properties, such as density [[rho]] and wave speed, throughout space, without discontinuities or interfaces.

- **Absence of absorption**: Strict conservation of mechanical energy; no conversion into heat or other forms of energy.

- **Far field**: Distances considered much greater than the characteristic dimension of the source.

**Consequence of violating each hypothesis**:

- If the source is not isotropic, intensity varies with direction according to the radiation pattern; the 1/r² law is maintained but with different angular amplitude.

- If propagation is not spherical (line or plane sources), the attenuation exponent changes: 1/r for cylindrical, constant for plane waves.

- If the medium is not homogeneous, propagation velocity and direction vary, curving wave rays through refraction.

- If absorption exists, intensity decays faster than 1/r², following an additional exponential factor exp(-αr).

- If operating in the near field, the specific geometry of the source distorts the pure spherical distribution.

## Quantitative validity domain

The model is valid when the following are simultaneously satisfied:

- Distance is at least 10 times the characteristic dimension of the source: r > 10L, guaranteeing far field regime.

- The propagation path is less than the attenuation length of the medium: r < 1/α, where α is the absorption coefficient. In air for audible frequencies, this typically means r < 1 km.

- Temperature and density variations of the medium are less than 10% along the propagation path, ensuring approximate homogeneity.

- The frequency is in the range where the wavelength is much smaller than the considered distance: λ << r, typically f > 20 Hz for distances > 10 m.

The relative error of the model with respect to real behavior is less than 10% when operating within these limits.

## Model failure signals

- **Decay faster than 1/r²**: If measured intensity decreases exponentially or with power greater than -2 on a log-log scale, medium absorption is significant and cannot be ignored.

- **Observable anisotropy**: If intensity varies noticeably according to direction at equal distance, the source is not isotropic and the model must include the directional radiation pattern.

- **Coherent reflections**: If interferences (spatial maxima and minima) are observed superimposed on geometric attenuation, there are reflections from nearby surfaces that invalidate the free space model.

- **Velocity variation with frequency**: If waves of different frequencies travel at appreciably different speeds (dispersion), the coherent spherical wave model breaks.

- **Residual intensity at great distance**: If significant intensity is detected beyond the expected attenuation distance, natural waveguides or medium channeling may exist.

## Extended or alternative model

The **extended model with atmospheric absorption** incorporates an exponential attenuation term that reduces intensity additionally to geometric divergence. The intensity results:

I(r) = (P / 4πr²) · exp(-αr)

Where α is the atmospheric absorption coefficient, which strongly depends on frequency, temperature, and humidity. In air, α ≈ 10⁻³ m⁻¹ for audible frequencies, becoming significant at distances greater than 100 m.

The **directional source model** considers that power is concentrated in a reduced solid angle Ω (steradians) instead of being distributed over the complete sphere (4π steradians). The intensity on the main axis is multiplied by the directivity factor D = 4π/Ω:

I_directional(r) = D · (P / 4πr²)

A typical loudspeaker may have D ≈ 10, while a well-designed parabolic antenna reaches D ≈ 10⁴ or more.

When to switch to the model with absorption: when distances exceed one kilometer in air or when systematically faster decay than 1/r² is observed in measurements.

When to use the directional model: when the source has obviously asymmetric geometry (horn, reflector) or when specific intensity in the axis of maximum emission needs to be calculated.

## Operational comparison

| Characteristic | Ideal model | Model with absorption | Directional model |
|---|---|---|---|
| **Intensity decay** | Proportional to 1/r² | Proportional to (1/r²)·exp(-αr) | Proportional to D/r² on axis |
| **Total power** | Conserved | Decreases by thermal conversion | Conserved but anisotropic |
| **Isotropy** | Complete | Complete | Directional |
| **Mathematical complexity** | Simple, closed analytical solution | Moderate, requires coefficient α | Moderate, requires radiation pattern |
| **Application range** | Short distances, transparent media | Long distances, absorbing media | Sources with directional geometry |
| **Energy conservation** | Total | Partial (absorption) | Total, but anisotropic |
| **Experimental accuracy** | ±10% in air for r < 100 m | ±5% if α is known | ±15% depending on measured pattern |

**Advantages and limits**:

The ideal model provides quick estimates and clear conceptual understanding, but fails systematically at large distances or in absorbing media. The model with absorption captures the real decay observable in all real atmospheric propagations, but requires knowing coefficients that depend on variable environmental conditions. The directional model adequately describes sound reinforcement and communication systems, but complicates calculations by requiring angular integration of the intensity distribution.

The transition between models is gradual: for moderately directional sources (D < 10), it is convenient to use the ideal model with directivity correction; for weak absorptions (αr < 0.1), the ideal model is usually sufficient.
`;export{e as default};
