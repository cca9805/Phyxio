const e=`# Exam-type example

## Problem statement

A longitudinal wave strikes perpendicularly a flat interface between steel and aluminium. The density and longitudinal velocity of both materials are known. The task is to calculate the reflection and transmission coefficients both in amplitude and energy, and to verify energy conservation.

Problem data:

- Steel density: 7800 kg/m³
- Longitudinal velocity in steel: 5900 m/s
- Aluminium density: 2700 kg/m³
- Longitudinal velocity in aluminium: 6350 m/s

## Data

- Steel density (medium 1): 7800 kg/m³
- Longitudinal velocity in steel: 5900 m/s
- Aluminium density (medium 2): 2700 kg/m³
- Longitudinal velocity in aluminium: 6350 m/s

## System definition

The system is a flat interface between two semi-infinite half-spaces: medium 1 (steel) and medium 2 (aluminium). A longitudinal plane wave travels in the steel and arrives perpendicularly at the boundary. Both media are assumed homogeneous, isotropic, in the linear elastic regime. The interface is perfectly bonded (no gaps or intermediate layers). Transverse waves are not considered because incidence is normal.

## Physical model

The model uses boundary conditions of displacement and normal stress continuity at the interface for a plane wave at normal incidence. The core magnitudes are [[Z_1]], [[Z_2]], [[Z_medio]], [[R_amp]], [[T_amp]], [[R_E]] and [[T_E]]. Each medium impedance is calculated with the density-velocity product formula and coefficients are obtained from the acoustic Fresnel relations.

## Model justification

The normal-incidence flat-interface model is valid because the problem specifies perpendicular incidence and both media are isotropic. Under these conditions there is no mode conversion (no S waves are generated) and the equations simplify to the classical scalar formulae. The model ceases to be valid if incidence is oblique (mode conversion and critical angles appear), if the interface is rough (diffuse scattering) or if materials are anisotropic.

## Symbolic solution

First the acoustic impedances of each medium are calculated:

{{f:impedancia_acustica}}

The formula is applied to both media: [[Z_1]] is the product of steel density and its velocity, and [[Z_2]] is the product of aluminium density and its velocity. In general form, each result is a [[Z_medio]] associated with the material through which the wave travels.

Then the amplitude reflection coefficient is calculated:

{{f:coeficiente_reflexion_amplitud}}

And the amplitude transmission coefficient:

{{f:coeficiente_transmision_amplitud}}

Energy coefficients are obtained as:

{{f:coeficiente_reflexion_energia}}

{{f:coeficiente_transmision_energia}}

The final verification is checking that [[R_E]] plus [[T_E]] sums to exactly unity.

## Numerical substitution

Steel impedance: 7800 multiplied by 5900 gives 46.02 times ten to the sixth, i.e. 46.02 MRayl. Therefore [[Z_1]] ≈ 46.02 MRayl.

Aluminium impedance: 2700 multiplied by 6350 gives 17.15 times ten to the sixth, i.e. 17.15 MRayl. Therefore [[Z_2]] ≈ 17.15 MRayl.

Amplitude reflection coefficient: (17.15 minus 46.02) divided by (17.15 plus 46.02) gives minus 28.87 divided by 63.17, approximately minus 0.457. Therefore [[R_amp]] ≈ −0.457.

Amplitude transmission coefficient: twice 46.02 divided by 63.17 gives 92.04 divided by 63.17, approximately 1.457. Therefore [[T_amp]] ≈ 1.457.

Energy reflection coefficient: the square of 0.457 gives approximately 0.209. Therefore [[R_E]] ≈ 0.209.

Energy transmission coefficient: 1 minus 0.209 gives 0.791. Therefore [[T_E]] ≈ 0.791.

Verification: 0.209 plus 0.791 gives 1.000, confirming energy conservation.

## Dimensional validation

- Acoustic impedance: \`[M L⁻³]\` times \`[L T⁻¹]\` gives \`[M L⁻² T⁻¹]\` (Pa·s/m) ✓
- Reflection and transmission coefficients: impedance ratios (same units) give dimensionless \`[1]\` ✓
- Energy coefficients: dimensionless squared or products/quotients of dimensionless, give \`[1]\` ✓

## Physical interpretation

The negative sign of [[R_amp]] indicates the reflected wave inverts its phase: this occurs because the wave goes from a high-impedance medium (steel) to a low-impedance medium (aluminium). It is the case analogous to a string passing from a heavy segment to a light one: the "free" end reflects with inversion.

The transmitted amplitude of 1.457 (greater than 1) does not violate energy conservation. Aluminium has lower impedance so the wave amplitude grows to transport the same power. Transmitted energy is only 79.1% of the incident, which is physically coherent.

The 20.9% of reflected energy means an ultrasonic transducer positioned in the steel would detect a significant echo at the aluminium interface. This echo allows identifying the boundary between materials and is the basis of ultrasonic inspection.

# Real-world example

## Context

A non-destructive testing technician inspects a 20 mm thick steel plate with a contact ultrasonic transducer. The task is to estimate how much echo signal will be received from an internal delamination defect (trapped air layer inside the steel).

Steel impedance is approximately 46 MRayl and air impedance is approximately 0.000415 MRayl.

## Physical estimation

The amplitude reflection coefficient is the impedance difference divided by their sum. Since air impedance is negligible compared to steel, the ratio approaches minus one: reflection is practically total with phase inversion.

The energy reflection coefficient approaches unity: more than 99.99% of incident energy is reflected at the steel-air interface.

This means that even a very thin crack or delamination defect produces a strong and unambiguous echo. The reflected signal is practically equal in amplitude to the incident one. That is why pulse-echo ultrasonics is so sensitive for detecting delamination defects.

## Interpretation

The sensitivity of the method is based on the extreme impedance contrast between steel and air. Any discontinuity introducing an air layer, however thin, produces nearly total reflection that the transducer easily detects. In contrast, if the defect were filled with another metal of similar impedance to steel (such as an incomplete weld with compatible filler), reflection would be much weaker and detection more difficult. This example illustrates why defect type characterisation is important in industrial inspection.
`;export{e as default};
