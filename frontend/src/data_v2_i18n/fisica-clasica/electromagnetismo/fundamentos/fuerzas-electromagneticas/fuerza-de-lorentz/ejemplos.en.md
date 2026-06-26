# Exam-type example


## Problem statement

A proton (charge [[carga_electrica]] approximately 1.602×10⁻¹⁹ C, mass approximately 1.673×10⁻²⁷ kg) enters a region where there is an electric field of 2×10⁴ V/m and a magnetic field of 0.05 T, both perpendicular to each other and to the initial direction of motion. The initial proton velocity is 4×10⁵ m/s.

Calculate: (a) the magnetic force [[fuerza_magnetica]] on the proton, (b) the electric force [[fuerza_electrica]], (c) the total Lorentz force [[fuerza_de_lorentz]] when both forces act in the same direction, (d) the velocity at which [[fuerza_de_lorentz]] would be zero (Wien selection velocity).

## Data

- Charge: [[carga_electrica]] approximately 1.602×10⁻¹⁹ C
- Velocity: [[velocidad_de_la_particula]] approximately 4×10⁵ m/s
- Electric field: [[campo_electrico]] approximately 2×10⁴ V/m
- Magnetic field: [[campo_magnetico]] approximately 0.05 T
- [[sin_theta]] equal to 1 (velocity perpendicular to magnetic field)
- Electric and magnetic fields are perpendicular to each other

## System definition

The system is a proton moving in a crossed-field region. Working in the non-relativistic regime (check: 4×10⁵ m/s is approximately 0.13 % of c, well below the 10 % threshold, so the classical model is valid). In part (d), the same system is used but the velocity is the unknown that makes [[fuerza_de_lorentz]] zero.

## Physical model

The **non-relativistic point-charge model in uniform fields** is applied. The dominant quantity is [[fuerza_de_lorentz]], obtained by vectorially adding [[fuerza_electrica]] and [[fuerza_magnetica]]. The factor [[sin_theta]] equal to 1 indicates [[velocidad_de_la_particula]] is perpendicular to [[campo_magnetico]], which maximises [[fuerza_magnetica]].

## Model justification

The classical model is valid because [[velocidad_de_la_particula]] is only 0.13 % of c, well below the 10 % threshold where relativistic corrections exceed 1 %. Fields are assumed uniform in the problem region. The Lorentz force on a proton is thousands of times larger than gravity, so gravity is neglected.

## Symbolic solution

For the magnetic component, apply the magnitude formula:

{{f:fuerza_magnetica_modulo}}

For the total Lorentz force with both components in the same direction:

{{f:fuerza_lorentz_total}}

For the selection velocity (part d), [[fuerza_de_lorentz]] is set to zero: the electric and magnetic components cancel. This requires [[carga_electrica]]·[[campo_electrico]] to equal [[carga_electrica]]·[[velocidad_de_la_particula]]·[[campo_magnetico]]·[[sin_theta]], from which the selection [[velocidad_de_la_particula]] is the ratio of [[campo_electrico]] to [[campo_magnetico]] (the factor [[carga_electrica]] cancels out).

## Numerical substitution

Part (a) — Magnetic force: multiply 1.602×10⁻¹⁹ C by 4×10⁵ m/s by 0.05 T by 1. The result is approximately 3.20×10⁻¹⁵ N. Therefore [[fuerza_magnetica]] is approximately 3.20×10⁻¹⁵ N.

Part (b) — Electric force: multiply 1.602×10⁻¹⁹ C by 2×10⁴ V/m. The result is approximately 3.20×10⁻¹⁵ N. Therefore [[fuerza_electrica]] is approximately 3.20×10⁻¹⁵ N.

Part (c) — Total force with both in the same direction: add [[fuerza_electrica]] and [[fuerza_magnetica]]. The result is approximately 6.40×10⁻¹⁵ N. [[fuerza_de_lorentz]] is approximately 6.40×10⁻¹⁵ N.

Part (d) — Selection velocity: divide [[campo_electrico]] by [[campo_magnetico]]. The ratio of 2×10⁴ V/m to 0.05 T gives 4×10⁵ m/s. The selection velocity is exactly the proton's initial velocity: with these values, [[fuerza_de_lorentz]] is zero when [[fuerza_electrica]] and [[fuerza_magnetica]] are opposite.

## Dimensional validation

For [[fuerza_magnetica]]: C · (m/s) · T gives C · (m/s) · (kg/(A·s²)) which yields kg·m/s², i.e. N ✓.
For [[fuerza_electrica]]: C · (V/m) gives C · (J/(C·m)) which yields J/m, i.e. N ✓.

## Physical interpretation

The result of part (b) reveals that, with these values, [[fuerza_electrica]] and [[fuerza_magnetica]] are equal in magnitude: approximately 3.20×10⁻¹⁵ N each. This indicates that the problem was constructed so that the initial velocity is exactly Wien’s selection velocity (4×10⁵ m/s), which physically means the exact balance between the two components of [[fuerza_de_lorentz]]. When both forces act in the same direction (part c), the total force is double each component: 6.40×10⁻¹⁵ N. When they act in opposite directions (part d), they cancel exactly and [[fuerza_de_lorentz]] is zero.

This duality illustrates the velocity selector principle: the same particle at the same velocity can experience a large total force or zero depending on how the fields are oriented. Wien's selection velocity is 4×10⁵ m/s, corresponding exactly to the ratio of [[campo_electrico]] to [[campo_magnetico]]: 2×10⁴ V/m divided by 0.05 T. This relationship is independent of [[carga_electrica]]: any ion arriving at this velocity, whether a proton or a complex cation, passes through the selector in a straight line.

In terms of order of magnitude, the force of 3.20×10⁻¹⁵ N on the proton is enormous compared to its weight (approximately 1.64×10⁻²⁶ N): the ratio exceeds 10¹¹. This explains why gravity is completely ignored in particle physics and only electromagnetic forces are considered. Each time [[velocidad_de_la_particula]] doubles while keeping the fields constant, the difference between [[fuerza_magnetica]] and [[fuerza_electrica]] doubles, and the particle experiences a growing net force that deflects it from the selector's straight path.

---

# Real-world example


## Context

The magnetic-sector mass spectrometer uses the Lorentz force to separate ions of different masses. Ions are first accelerated by an electric field to a defined kinetic energy and then enter a magnetic sector where [[campo_magnetico]] is perpendicular to their velocity. The magnetic force acts as the centripetal force and each ion traces a semicircular arc whose radius depends on its mass-to-charge ratio.

In a laboratory magnetic-sector spectrometer, a field of 0.5 T is used. Carbon-12 ions (mass approximately 12 amu, i.e. approximately 2×10⁻²⁶ kg, charge [[carga_electrica]] equal to 1.602×10⁻¹⁹ C) are accelerated to a defined kinetic energy before entering the magnetic sector.

## Physical estimation

In the magnetic sector, [[fuerza_magnetica]] acts as the centripetal force. The equilibrium condition between the centripetal force and [[fuerza_magnetica]] allows the trajectory radius to be calculated. For a carbon-12 ion with [[carga_electrica]] equal to 1.602×10⁻¹⁹ C, mass 2×10⁻²⁶ kg, accelerated by a voltage of 1000 V, the entry velocity into the sector is approximately 1.26×10⁵ m/s. With [[campo_magnetico]] equal to 0.5 T and [[sin_theta]] equal to 1, the magnetic force acting as centripetal is approximately 1.01×10⁻¹⁴ N. The semicircular trajectory radius is approximately 3.2 mm.

For the carbon-13 isotope, the mass is approximately 2.16×10⁻²⁶ kg. After the same 1000 V acceleration, the entry velocity is slightly lower (approximately 1.21×10⁵ m/s) and the semicircle radius is approximately 3.3 mm. The radius difference between carbon-12 and carbon-13 is approximately 0.1 mm, a difference that modern detectors resolve easily and that is the basis for measuring isotopic masses with parts-per-million precision.

This estimation shows that [[fuerza_magnetica]] controls the radius precisely: for equal [[carga_electrica]] and [[campo_magnetico]], the radius is proportional to the ion's linear momentum, which depends on the square root of the mass for equal kinetic energies. This is why the spectrometer can distinguish isotopes differing by a single neutron: small mass differences produce measurable differences in the radius of curvature.

## Interpretation

The key of the spectrometer is that [[fuerza_magnetica]] acts as a centripetal force without doing work: the ion neither gains nor loses kinetic energy while tracing the arc. Its velocity [[velocidad_de_la_particula]] entering the magnetic sector equals its velocity exiting with exactly the same magnitude. The only change is direction: the ion has turned exactly 180° and arrives at the detector at a position determined by its radius of curvature.

The validity limit of the model in this context is the precision of the magnetic field. If [[campo_magnetico]] varies by 0.01 % along the trajectory, the radius varies by the same percentage, affecting the mass resolution of the instrument. In high-resolution spectrometers, the magnets are designed with correction coils to keep [[campo_magnetico]] uniform to the level of parts per million in the trajectory region.