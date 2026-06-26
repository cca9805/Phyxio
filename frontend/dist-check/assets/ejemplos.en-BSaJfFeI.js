const e=`# Exam-type example

## Problem statement

A proton (charge [[q]] approximately 1.602×10⁻¹⁹ C, mass approximately 1.673×10⁻²⁷ kg) enters a region where there is an electric field of 2×10⁴ V/m and a magnetic field of 0.05 T, both perpendicular to each other and to the initial direction of motion. The initial proton velocity is 4×10⁵ m/s.

Calculate: (a) the magnetic force [[F_m]] on the proton, (b) the electric force [[F_E]], (c) the total Lorentz force [[F_L]] when both forces act in the same direction, (d) the velocity at which [[F_L]] would be zero (Wien selection velocity).

## Data

- Charge: [[q]] approximately 1.602×10⁻¹⁹ C
- Velocity: [[v]] approximately 4×10⁵ m/s
- Electric field: [[E]] approximately 2×10⁴ V/m
- Magnetic field: [[B]] approximately 0.05 T
- [[sin_theta]] equal to 1 (velocity perpendicular to magnetic field)
- Electric and magnetic fields are perpendicular to each other

## System definition

The system is a proton moving in a crossed-field region. Working in the non-relativistic regime (check: 4×10⁵ m/s is approximately 0.13 % of c, well below the 10 % threshold, so the classical model is valid). In part (d), the same system is used but the velocity is the unknown that makes [[F_L]] zero.

## Physical model

The **non-relativistic point-charge model in uniform fields** is applied. The dominant quantity is [[F_L]], obtained by vectorially adding [[F_E]] and [[F_m]]. The factor [[sin_theta]] equal to 1 indicates [[v]] is perpendicular to [[B]], which maximises [[F_m]].

## Model justification

The classical model is valid because [[v]] is only 0.13 % of c, well below the 10 % threshold where relativistic corrections exceed 1 %. Fields are assumed uniform in the problem region. The Lorentz force on a proton is thousands of times larger than gravity, so gravity is neglected.

## Symbolic solution

For the magnetic component, apply the magnitude formula:

{{f:fuerza_magnetica_modulo}}

For the total Lorentz force with both components in the same direction:

{{f:fuerza_lorentz_total}}

For the selection velocity (part d), [[F_L]] is set to zero: the electric and magnetic components cancel. This requires [[q]]·[[E]] to equal [[q]]·[[v]]·[[B]]·[[sin_theta]], from which the selection [[v]] is the ratio of [[E]] to [[B]] (the factor [[q]] cancels out).

## Numerical substitution

Part (a) — Magnetic force: multiply 1.602×10⁻¹⁹ C by 4×10⁵ m/s by 0.05 T by 1. The result is approximately 3.20×10⁻¹⁵ N. Therefore [[F_m]] is approximately 3.20×10⁻¹⁵ N.

Part (b) — Electric force: multiply 1.602×10⁻¹⁹ C by 2×10⁴ V/m. The result is approximately 3.20×10⁻¹⁵ N. Therefore [[F_E]] is approximately 3.20×10⁻¹⁵ N.

Part (c) — Total force with both in the same direction: add [[F_E]] and [[F_m]]. The result is approximately 6.40×10⁻¹⁵ N. [[F_L]] is approximately 6.40×10⁻¹⁵ N.

Part (d) — Selection velocity: divide [[E]] by [[B]]. The ratio of 2×10⁴ V/m to 0.05 T gives 4×10⁵ m/s. The selection velocity is exactly the proton's initial velocity: with these values, [[F_L]] is zero when [[F_E]] and [[F_m]] are opposite.

## Dimensional validation

For [[F_m]]: C · (m/s) · T gives C · (m/s) · (kg/(A·s²)) which yields kg·m/s², i.e. N ✓.
For [[F_E]]: C · (V/m) gives C · (J/(C·m)) which yields J/m, i.e. N ✓.

## Physical interpretation

The result of part (b) reveals that, with these values, [[F_E]] and [[F_m]] are equal in magnitude: approximately 3.20×10⁻¹⁵ N each. This indicates that the problem was constructed so that the initial velocity is exactly Wien’s selection velocity (4×10⁵ m/s), which physically means the exact balance between the two components of [[F_L]]. When both forces act in the same direction (part c), the total force is double each component: 6.40×10⁻¹⁵ N. When they act in opposite directions (part d), they cancel exactly and [[F_L]] is zero.

This duality illustrates the velocity selector principle: the same particle at the same velocity can experience a large total force or zero depending on how the fields are oriented. Wien's selection velocity is 4×10⁵ m/s, corresponding exactly to the ratio of [[E]] to [[B]]: 2×10⁴ V/m divided by 0.05 T. This relationship is independent of [[q]]: any ion arriving at this velocity, whether a proton or a complex cation, passes through the selector in a straight line.

In terms of order of magnitude, the force of 3.20×10⁻¹⁵ N on the proton is enormous compared to its weight (approximately 1.64×10⁻²⁶ N): the ratio exceeds 10¹¹. This explains why gravity is completely ignored in particle physics and only electromagnetic forces are considered. Each time [[v]] doubles while keeping the fields constant, the difference between [[F_m]] and [[F_E]] doubles, and the particle experiences a growing net force that deflects it from the selector's straight path.

---

# Real-world example

## Context

The magnetic-sector mass spectrometer uses the Lorentz force to separate ions of different masses. Ions are first accelerated by an electric field to a defined kinetic energy and then enter a magnetic sector where [[B]] is perpendicular to their velocity. The magnetic force acts as the centripetal force and each ion traces a semicircular arc whose radius depends on its mass-to-charge ratio.

In a laboratory magnetic-sector spectrometer, a field of 0.5 T is used. Carbon-12 ions (mass approximately 12 amu, i.e. approximately 2×10⁻²⁶ kg, charge [[q]] equal to 1.602×10⁻¹⁹ C) are accelerated to a defined kinetic energy before entering the magnetic sector.

## Physical estimation

In the magnetic sector, [[F_m]] acts as the centripetal force. The equilibrium condition between the centripetal force and [[F_m]] allows the trajectory radius to be calculated. For a carbon-12 ion with [[q]] equal to 1.602×10⁻¹⁹ C, mass 2×10⁻²⁶ kg, accelerated by a voltage of 1000 V, the entry velocity into the sector is approximately 1.26×10⁵ m/s. With [[B]] equal to 0.5 T and [[sin_theta]] equal to 1, the magnetic force acting as centripetal is approximately 1.01×10⁻¹⁴ N. The semicircular trajectory radius is approximately 3.2 mm.

For the carbon-13 isotope, the mass is approximately 2.16×10⁻²⁶ kg. After the same 1000 V acceleration, the entry velocity is slightly lower (approximately 1.21×10⁵ m/s) and the semicircle radius is approximately 3.3 mm. The radius difference between carbon-12 and carbon-13 is approximately 0.1 mm, a difference that modern detectors resolve easily and that is the basis for measuring isotopic masses with parts-per-million precision.

This estimation shows that [[F_m]] controls the radius precisely: for equal [[q]] and [[B]], the radius is proportional to the ion's linear momentum, which depends on the square root of the mass for equal kinetic energies. This is why the spectrometer can distinguish isotopes differing by a single neutron: small mass differences produce measurable differences in the radius of curvature.

## Interpretation

The key of the spectrometer is that [[F_m]] acts as a centripetal force without doing work: the ion neither gains nor loses kinetic energy while tracing the arc. Its velocity [[v]] entering the magnetic sector equals its velocity exiting with exactly the same magnitude. The only change is direction: the ion has turned exactly 180° and arrives at the detector at a position determined by its radius of curvature.

The validity limit of the model in this context is the precision of the magnetic field. If [[B]] varies by 0.01 % along the trajectory, the radius varies by the same percentage, affecting the mass resolution of the instrument. In high-resolution spectrometers, the magnets are designed with correction coils to keep [[B]] uniform to the level of parts per million in the trajectory region.
`;export{e as default};
