# Exam-type example


## Problem statement

A very long straight cable carries a current of 8 A. Calculate the magnetic field at 4 cm from the cable, determine the force experienced by a proton passing through that point with speed 2×10⁵ m/s perpendicular to the field, and analyze what happens to the field if both the current and the distance are simultaneously doubled.

## Data

- Current in the cable: 8 A
- Distance to evaluation point: 4 cm
- Permeability of vacuum: 4π×10⁻⁷ T·m·A⁻¹
- Proton speed: 2×10⁵ m/s (perpendicular to B)
- Proton charge: 1.6×10⁻¹⁹ C

## System definition

The system consists of a very long straight cable carrying current [[intensidad_de_corriente]] and an evaluation point at perpendicular distance [[distancia_al_hilo_conductor]] from the cable. The field [[campo_magnetico]] is circular around the wire. The proton, treated as a point charge [[carga_electrica]], moves with velocity [[velocidad_de_la_carga]] perpendicular to the field at the evaluation point. Electrostatics does not intervene because the cable is electrically neutral overall.

## Physical model

The infinite straight-wire model is applied: the field [[campo_magnetico]] depends on [[mu_0]], [[intensidad_de_corriente]], and [[distancia_al_hilo_conductor]] via the straight-wire formula. The cable length is much greater than 4 cm, so the infinite-wire approximation is valid. The force [[fuerza_magnetica]] on the proton is computed using the magnetic Lorentz force.

## Model justification

The evaluation distance of 4 cm is much smaller than any domestic or industrial cable length (typically several meters), so the infinite-wire model is appropriate. The proton speed of 2×10⁵ m/s is less than 0.1% of the speed of light, well below the relativistic threshold. The angle between [[velocidad_de_la_carga]] and [[campo_magnetico]] is 90°, guaranteeing maximum force.

## Symbolic solution

The magnitude of the magnetic field at distance [[distancia_al_hilo_conductor]] from a wire carrying [[intensidad_de_corriente]] is obtained by applying:

{{f:campo_hilo_recto}}

Once [[campo_magnetico]] is computed, the force on the proton moving perpendicular to the field (θ = 90°, sin θ = 1) is obtained from:

{{f:fuerza_lorentz_magnetica}}

For the sensitivity analysis: if [[intensidad_de_corriente]] doubles, [[campo_magnetico]] doubles (direct proportionality with [[intensidad_de_corriente]]); if [[distancia_al_hilo_conductor]] doubles, [[campo_magnetico]] halves (1/r dependence). Both simultaneous effects cancel exactly, leaving [[campo_magnetico]] unchanged.

## Numerical substitution

For the field: the numerator is the product of 4π×10⁻⁷ T·m·A⁻¹ and 8 A, giving 32π×10⁻⁷ T·m, approximately 1.005×10⁻⁵ T·m. The denominator is 2π multiplied by 0.04 m, giving 0.2513 m. Dividing, [[campo_magnetico]] is approximately 4×10⁻⁵ T, i.e. 40 μT.

For the force on the proton: multiplying the charge magnitude 1.6×10⁻¹⁹ C by the speed 2×10⁵ m/s by the field 4×10⁻⁵ T (with sin 90° = 1), [[fuerza_magnetica]] is 1.6×10⁻¹⁹ × 2×10⁵ × 4×10⁻⁵, giving 1.28×10⁻¹⁸ N.

For the sensitivity analysis with [[intensidad_de_corriente]] doubled to 16 A and [[distancia_al_hilo_conductor]] doubled to 8 cm: the numerator doubles but the denominator also doubles, so [[campo_magnetico]] remains at 40 μT. The field does not change.

## Dimensional validation

- Field: [[mu_0]] in T·m·A⁻¹ multiplied by A and divided by m gives T. Correct.
- Force: C multiplied by m/s multiplied by T gives C·m/s·kg/(A·s²) which simplifies to N. Correct.
- Sensitivity analysis: both scaling factors cancel exactly. Correct.

## Physical interpretation

The result of 40 μT is of the same order as Earth's magnetic field, which physically means that at 4 cm from an ordinary 8 A domestic cable a field comparable to Earth's is generated. This is not negligible at local scale; magnetic field meters routinely detect such values near household appliances.

The force on the proton of 1.28×10⁻¹⁸ N is extremely small in macroscopic terms, but appreciable at atomic scale. The most important consequence of the sensitivity analysis is that simultaneously doubling the current and the distance leaves the field invariant. This means the straight-wire field cannot be "turned off" simply by moving away if the current also increases. A magnetic shielding engineer must account for the fact that halving [[distancia_al_hilo_conductor]] while doubling [[intensidad_de_corriente]] produces the same net field.

---

# Real-world example


## Context

The cyclotron, invented by Ernest O. Lawrence in 1930, is the first circular particle accelerator in history. It uses the magnetic field [[campo_magnetico]] to curve the ion trajectory into semicircles and an oscillating electric field to accelerate the ions each time they cross the gap between the two metallic "D"-shaped electrodes. The magnetic field does not accelerate the particles: it only guides them. Acceleration is done by the electric field.

The cyclotron's operating principle depends on the time an ion takes to complete a semicircle being independent of its speed, a direct consequence of the radius of curvature being proportional to speed. This property, called isochronism, is valid only in the non-relativistic regime.

## Physical estimation

Consider a cyclotron using a magnetic field [[campo_magnetico]] of 1 T to accelerate protons. The radius of curvature of a proton's trajectory at speed [[velocidad_de_la_carga]] in a perpendicular field [[campo_magnetico]] is inversely proportional to [[campo_magnetico]] and the charge [[carga_electrica]], and directly proportional to mass and [[velocidad_de_la_carga]].

For a proton with mass 1.67×10⁻²⁷ kg, charge 1.6×10⁻¹⁹ C, final speed 10⁷ m/s, and field [[campo_magnetico]] of 1 T, the maximum trajectory radius is obtained by dividing the product of mass and speed by the product of charge and field: the numerator is 1.67×10⁻²⁷ times 10⁷, giving 1.67×10⁻²⁰ kg·m/s; the denominator is 1.6×10⁻¹⁹ times 1, giving 1.6×10⁻¹⁹ C·T. The radius is approximately 0.104 m, about 10 cm. This sets the minimum size of the cyclotron "D"s to contain the trajectory.

## Interpretation

This result shows that [[campo_magnetico]] is the central design parameter of the cyclotron: the larger [[campo_magnetico]], the smaller the radius of curvature for the same speed, allowing more compact machines. Physically, the magnetic field acts as a "guide" that confines the particles within the accelerator volume without adding or consuming kinetic energy; all energy comes from the oscillating electric field.

The isochronism of the cyclotron — meaning the frequency of the alternating electric current need not change during acceleration — is a direct consequence of [[fuerza_magnetica]] being always perpendicular to [[velocidad_de_la_carga]] and the revolution time depending only on charge, mass, and [[campo_magnetico]], not on speed. When the proton speed exceeds 10% of the speed of light, the relativistic mass increases, isochronism breaks, and the conventional cyclotron fails. For relativistic speeds the synchrocyclotron is required, where the electric field frequency is adjusted as particle mass increases.