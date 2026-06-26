## Ideal model

The ideal model for Maxwell's physical interpretation is that of the **harmonic plane wave in vacuum**. In this framework, it is assumed that the electric [[campo_electrico]] and magnetic [[campo_magnetico]] fields are perpendicular to each other and also to the direction of propagation. Furthermore, the medium is considered a perfect vacuum, meaning there are no free charges or currents that can scatter or absorb energy. Under these conditions, the ratio between field amplitudes is constant and equal to the speed of light [[velocidad_de_la_luz_en_el_vacio]], and energy is transported without any loss of intensity as the wave advances. This model allows for the simplification of Maxwell's vector equations into direct scalar relationships between energy densities [[densidad_de_energia_electromagnetica]] and average intensities [[intensidad_media]], providing a clear basis for understanding electromagnetic power transport.

## Hypotheses

For this interpretation model to be valid, the following fundamental hypotheses must be met:
1.  **Far-field approximation**: It is assumed that the observation point is far enough from the sources for the wavefront to be locally flat.
2.  **Linearity of the medium**: The vacuum (or the medium analyzed) is considered linear, isotropic, and homogeneous, which guarantees that the speed [[velocidad_de_la_luz_en_el_vacio]] is constant and does not depend on frequency or direction.
3.  **Absence of dispersion**: Variation of electric [[epsilon0]] and magnetic [[mu0]] constants with frequency is ignored, treating vacuum as a non-dispersive medium.
4.  **Steady or harmonic regime**: It is assumed that the sources have been oscillating long enough for the fields to follow a regular sinusoidal pattern, facilitating the use of average intensity [[intensidad_media]] as a measure of power.
5.  **Disregard of quantum effects**: The model treats fields as continuous, ignoring the discrete (photonic) nature of light, which is valid for moderate energy densities.

## Quantitative validity domain

This model is extremely accurate in vacuum and air for an immense range of frequencies, from radio waves to ultraviolet light. Quantitatively, the model is applicable as long as the spatial scale L of the system meets the condition **L >> 10^-10 meters**, ensuring that we stay outside the regime where space-time quantization or atomic effects dominate. Likewise, the field magnitude ratio [[relacion_entre_campos]] is met with negligible error as long as the medium has near-zero conductivity. In terms of intensity, the average intensity [[intensidad_media]] formula is valid as long as the electric field amplitude [[amplitud_del_campo_electrico]] does not exceed the air ionization limit (approximately 3e6 V/m at atmospheric pressure).

## Model failure signals

An analyst can detect that Maxwell's ideal interpretation model is failing if they observe the following signals:
-   **Phase shift between fields**: If [[campo_electrico]] and [[campo_magnetico]] fields are not in phase (their peaks do not coincide in time), it means the medium has significant losses or is conductive.
-   **Inconsistency in the E/B ratio**: If the ratio between field magnitudes significantly deviates from the speed of light [[velocidad_de_la_luz_en_el_vacio]], it indicates the presence of reactive near fields or reflection effects.
-   **Non-geometric attenuation**: If the average intensity [[intensidad_media]] decreases faster than predicted by the inverse square law of distance, absorption exists in the medium.
-   **Appearance of longitudinal components**: If a field component in the direction of propagation is detected, the flat transverse wave model is no longer applicable (typical in waveguides or optical fibers).

## Extended or alternative model

When the ideal model fails due to the presence of dense matter or extreme frequencies, one must transition to more complex models:
-   **Dissipative media model**: Incorporates electrical conductivity and an imaginary part in the permittivity to account for energy absorption by heat.
-   **Quantum Electrodynamics (QED)**: It is the alternative model needed when working with extremely low light intensities (few photons) or gamma-ray energies.

## Operational comparison

The **transition to** the quantum model from the ideal Maxwell model should be made when the photon energy (hf) is comparable to the total energy of the system studied, or when it is necessary to explain phenomena such as the photoelectric effect or Compton scattering. Operationally, the ideal model is preferred for quick communications link and radiological protection calculations, as it allows for obtaining correct orders of magnitude with minimal computational effort. In contrast, extended models are mandatory in the design of high-frequency integrated circuits or in the engineering of materials with exotic properties (metamaterials), where the isotropy and lack of loss hypotheses are simply unrealistic. The success of physical interpretation lies in knowing when the simplicity of the plane wave model is sufficient and when the complexity of the medium demands a deeper structural description.