# Exam-type example


## Problem statement

A stainless steel bar with circular cross-section of diameter 25 mm is joined to an aluminium 6061 bar with square cross-section of side 30 mm. A longitudinal wave propagates through the steel and strikes the interface perpendicularly. Determine the mechanical impedance of each bar, the amplitude reflection coefficient and the fraction of power transmitted to the aluminium.

Stainless steel data: density 7900 kg/m³, longitudinal velocity 5790 m/s.
Aluminium 6061 data: density 2700 kg/m³, longitudinal velocity 6320 m/s.

## Data

- [[rho]] (steel) = 7900 kg/m³
- [[c_s]] (steel) = 5790 m/s
- Steel diameter: 25 mm (0.025 m)
- [[area_de_la_seccion_transversal]] (steel) = π·(0.025/2)² = 4.91 × 10⁻⁴ m²
- [[rho]] (aluminium) = 2700 kg/m³
- [[c_s]] (aluminium) = 6320 m/s
- Aluminium side: 30 mm (0.030 m)
- [[area_de_la_seccion_transversal]] (aluminium) = (0.030)² = 9.00 × 10⁻⁴ m²

## System definition

The system is a flat interface between two bars of different materials and cross-sections. The wave is incident from steel (medium 1) towards aluminium (medium 2). Normal incidence and plane waves are assumed (wavelength much larger than bar diameters).

## Physical model

The mechanical impedance model for plane waves is applied using the fundamental formula [[impedancia_mecanica]] = [[rho]] · [[c_s]] · [[area_de_la_seccion_transversal]], followed by the velocity amplitude reflection [[coeficiente_de_reflexion_en_amplitud]] and transmission [[coeficiente_de_transmision_en_amplitud]] coefficients. Transmitted power is calculated as a fraction of incident power.

## Model justification

The model is valid because transverse dimensions (25 mm and 30 mm) are much smaller than typical wavelength at engineering frequencies. At 100 kHz, the wavelength in steel is about 58 mm, well above the 25 mm diameter, so the plane wave hypothesis holds with margin. The model would fail if frequency exceeded approximately 50 kHz for the thicker bar, where guided modes would appear.

## Symbolic solution

Mechanical impedance of each medium:

{{f:impedancia_mecanica}}

For medium 1 (steel): [[impedancia_mecanica]]₁ = [[rho]]₁ · [[c_s]]₁ · [[area_de_la_seccion_transversal]]₁

For medium 2 (aluminium): [[impedancia_mecanica]]₂ = [[rho]]₂ · [[c_s]]₂ · [[area_de_la_seccion_transversal]]₂

Reflection coefficient:

{{f:coeficiente_reflexion_impedancia}}

Transmission coefficient:

{{f:coeficiente_transmision_impedancia}}

Power fraction transmitted: η = (Z₁/Z₂) · [[coeficiente_de_transmision_en_amplitud]]² = 1 - [[coeficiente_de_reflexion_en_amplitud]]²

## Numerical substitution

For [[impedancia_mecanica]]₁ (steel), multiply 7900 kg/m³ by 5790 m/s by 4.91 × 10⁻⁴ m². This gives approximately 22 460 kg/s. Therefore [[impedancia_mecanica]]₁ ≈ 22 460 kg/s.

For [[impedancia_mecanica]]₂ (aluminium), multiply 2700 kg/m³ by 6320 m/s by 9.00 × 10⁻⁴ m². This gives approximately 15 340 kg/s. Therefore [[impedancia_mecanica]]₂ ≈ 15 340 kg/s.

For [[coeficiente_de_reflexion_en_amplitud]], the difference (15340 - 22460) divided by the sum (15340 + 22460) gives approximately -0.188. Therefore [[coeficiente_de_reflexion_en_amplitud]] ≈ -0.188.

For [[coeficiente_de_transmision_en_amplitud]], twice Z₂ (30680) divided by the sum (37800) gives approximately 0.812. Consistency check: 1 + (-0.188) = 0.812 ✓. Therefore [[coeficiente_de_transmision_en_amplitud]] ≈ 0.812.

Power fraction transmitted: 1 - (-0.188)² = 1 - 0.035 ≈ 0.965. Therefore 96.5% of incident power is transmitted.

## Dimensional validation

Mechanical impedance results from the product of three magnitudes with independent dimensions. The dimensional breakdown confirms the coherence of the result:

- [[impedancia_mecanica]]: density times velocity times area gives `[M L⁻³] · [L T⁻¹] · [L²] = [M T⁻¹]` which corresponds to kg/s ✓
- [[coeficiente_de_reflexion_en_amplitud]]: ratio of two impedances gives `[M T⁻¹] / [M T⁻¹] = [1]` dimensionless, as expected for a reflection coefficient ✓
- [[coeficiente_de_transmision_en_amplitud]]: same dimensional structure as [[coeficiente_de_reflexion_en_amplitud]], also dimensionless `[M T⁻¹] / [M T⁻¹] = [1]` ✓

All numerical results have the expected units and values fall within physically reasonable ranges for engineering solids.

## Physical interpretation

The negative sign of [[coeficiente_de_reflexion_en_amplitud]] indicates that aluminium has lower mechanical impedance than steel, despite having larger cross-section and higher velocity. This occurs because aluminium's density is much lower and dominates the product. The reflected wave undergoes phase inversion: reflected particle velocity has opposite sign to incident at the moment of reflection.

The transmitted power fraction of 96.5% is very high for a joint between such different materials. This is because the aluminium's increased section partially compensates for its lower specific impedance (ρ·c). If both bars had the same section, reflection would be much greater: R ≈ (17064-45741)/(17064+45741) ≈ -0.46, and only 79% of power would be transmitted.

This result has practical design implications: by choosing the appropriate section for the second material, impedance can be matched to minimise reflection losses at the joint, without needing intermediate coupling layers.

# Real-world example


## Context

In the manufacture of piezoelectric ultrasonic sensors, the piezoelectric crystal (PZT-4) must transmit vibrations to the metal part being inspected (steel). The specific impedance of PZT-4 is approximately 34 MRayl and that of steel is 46 MRayl. A matching layer is designed to maximise transmission at a centre frequency of 5 MHz.

## Physical estimation

The ideal matching layer impedance must be the geometric mean of both media impedances. The square root of the product 34 × 46 gives approximately 39.5 MRayl (working with specific impedances). To convert to total mechanical impedance [[impedancia_mecanica]], multiply by the active transducer section. A piezoelectric disc of 10 mm diameter has [[area_de_la_seccion_transversal]] of about 78.5 mm², giving a crystal mechanical impedance of approximately 34 × 10⁶ × 78.5 × 10⁻⁶ ≈ 2670 kg/s.

Without matching layer, calculating [[coeficiente_de_reflexion_en_amplitud]] as the difference (46 minus 34) divided by the sum (46 plus 34) yields a reflection coefficient of approximately 0.15. The reflected power is the square of that value, amounting to 2.3% loss.

With the ideal quarter-wavelength layer at 5 MHz, reflection theoretically vanishes and transmission reaches 100%. The required thickness is one quarter of the wavelength in the layer. For a material with [[c_s]] of about 4000 m/s at 5 MHz, the wavelength is 0.8 mm and the necessary thickness is 0.2 mm.

In practice, aluminium-filled epoxy (resin mixed with aluminium powder) has impedance close to the ideal value of 39.5 MRayl and is frequently used as matching layer in NDT transducers. The sensitivity improvement when using this optimised layer is on the order of 6 dB compared to the transducer without matching.

## Interpretation

The matching layer design demonstrates that mechanical impedance is not merely a theoretical concept but a direct design tool. By controlling [[rho]], [[c_s]] and the thickness of an intermediate layer, nearly perfect transmission between very different materials can be achieved. Without this principle, ultrasonic transducers would lose a significant fraction of energy at the crystal-part interface, reducing the sensitivity of the inspection system.