## Ideal model

The ideal model assumes **plane waves** propagating in a homogeneous, isotropic, perfectly elastic solid with constant cross-section. In this model, mechanical impedance [[impedancia_mecanica]] is real, constant and frequency-independent. The wave does not attenuate and the interface between two media is treated as an instantaneous discontinuity with no thickness or transition layers.

The central simplification is ignoring dispersion, attenuation and geometric diffraction effects. This allows reducing the transmission problem to a simple algebraic relation between [[coeficiente_de_reflexion_en_amplitud]], [[coeficiente_de_transmision_en_amplitud]] and the impedances on both sides.

## Hypotheses

- The solid is linearly elastic: the stress-strain relationship is proportional without hysteresis. If violated, dissipation appears and [[impedancia_mecanica]] becomes complex.
- The wave is planar: the wavefront is perpendicular to the propagation direction and uniform across the entire section. If the section is comparable to the wavelength, higher-order modes appear.
- Normal incidence: the wave arrives perpendicularly at the interface. If there is an angle, mode conversion occurs and coefficients change.
- Constant cross-section: [[area_de_la_seccion_transversal]] does not vary in the vicinity of the interface. If it changes, distributed partial reflections occur that the model does not capture.
- Infinite medium or known termination: no subsequent reflections returning to the interface are assumed. In finite systems, multiple reflections modify the effective impedance.

## Quantitative validity domain

The model is valid when wavelength λ is **much greater** than the transverse dimensions of the part: λ >> d (diameter or section side). In practice, this holds when frequency is below [[c_s]] divided by five times the diameter. For a steel bar of 20 mm diameter with [[c_s]] ≈ 5900 m/s, the model works well up to approximately 60 kHz.

For higher frequencies, Pochhammer-Chree modes appear in cylindrical bars and Lamb modes in plates, and simple impedance no longer represents the system response.

## Model failure signals

- The experimentally measured reflection coefficient varies with frequency when the model predicts a constant value: this indicates the plane wave hypothesis has failed.
- Measured transmitted plus reflected energy does not equal incident energy: there is dissipation (viscoelastic material) or lateral dispersion.
- Calculated [[coeficiente_de_reflexion_en_amplitud]] does not match measurement at real joints: oxide layers, surface roughness or trapped air layers act as additional unmodelled interfaces.
- Multiple periodic echoes with increasing amplitude appear in the time signal: there is geometric resonance not predicted by the infinite medium model.

## Extended or alternative model

The extended model introduces **complex impedance**, adding an imaginary part to [[impedancia_mecanica]] for viscoelastic materials. The real part governs energy transmission and the imaginary part represents internal material dissipation. Additionally, for multilayer systems the **transfer matrix formulation** is used: each layer is described by a 2×2 matrix relating force and velocity on both faces, and the matrix product gives the total system response.

The transition to the extended model is necessary when:
- Measured attenuation exceeds 5% per wavelength.
- The structure has more than one interface (matching layers, coatings, gaskets).
- Frequency exceeds the plane wave limit (f > [[c_s]] / 5d).

## Operational comparison

- **Ideal model**: a single algebraic equation per interface. Fast, useful for estimates and preliminary designs. Does not capture losses or multilayer effects.
- **Extended model (transfer matrices)**: handles multiple layers, attenuation and resonances. More computationally expensive. Necessary for vibration filter design, multilayer coatings and real structure analysis.
- **Accuracy**: the ideal model has errors < 5% if hypotheses hold; the extended model can achieve < 1% with correct material data.
- **Application range**: ideal for thin bars and low frequency; extended for any geometry and frequency range.