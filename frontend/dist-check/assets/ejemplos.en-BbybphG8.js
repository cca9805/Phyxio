const e=`# Exam-type example

## Problem statement

A solid block of grade 5 titanium alloy (Ti-6Al-4V) is to be inspected by ultrasonics to detect possible internal inclusions. The technician needs to know the three wave velocities of the material before configuring the inspection system. Calculate the longitudinal wave velocity, the transverse wave velocity and the Rayleigh wave velocity for this material, and verify that the velocity hierarchy is satisfied.

## Data

- Young's modulus: 114 GPa
- Shear modulus: 44 GPa
- Density: 4430 kg/m³
- Poisson's ratio: 0.34

## System definition

The system is a Ti-6Al-4V titanium half-space, isotropic, homogeneous and in the linear elastic regime. Waves propagate in the interior volume (P and S waves) and at the free surface (Rayleigh wave). The system is modelled as a continuous medium without defects, allowing application of the wave velocity formulas of the isotropic elastic model.

## Physical model

The chosen model is **linear isotropic elasticity in a 3D medium**, which relates wave velocities to the elastic moduli [[E_young]], [[G_corte]], [[rho]] and [[nu]] through the three formulas of the leaf. For the longitudinal wave, the model uses the effective confined modulus, which includes the effect of the hindered lateral compression. For the transverse wave, the model uses only [[G_corte]] and [[rho]]. For the Rayleigh wave, Viktorov's approximation is applied.

## Model justification

The isotropic elastic model is adequate for Ti-6Al-4V titanium in the inspection ultrasonic frequency range (1 to 10 MHz): the resulting wavelength (on the order of millimetres) is much larger than the grain size of the material (below 100 µm), so grain scattering is negligible. The material in the undeformed state satisfies the macroscopic isotropy hypothesis when surface finish and manufacturing texture are not critical. The model would cease to be valid if ultrasonic frequencies high enough that the wavelength approached the grain size were used, or if the part had undergone prior plastic deformation inducing residual anisotropy.

## Symbolic solution

Longitudinal wave velocity applying the three-dimensional solid formula:

{{f:vel_longitudinal}}

Transverse wave velocity, which depends only on the shear modulus and density:

{{f:vel_transversal}}

Rayleigh wave velocity using Viktorov's approximation from the result of [[v_T]] and Poisson's ratio [[nu]]:

{{f:vel_rayleigh}}

The symbolic hierarchy to be verified is that [[v_L]] is greater than [[v_T]] and [[v_T]] is greater than [[v_R]].

## Numerical substitution

For the longitudinal wave, inserting the numerical values into the P-wave speed formula: the numerator uses the product of 114×10⁹ Pa by (1 minus 0.34), giving 75.24×10⁹ Pa. The denominator uses 4430 kg/m³ multiplied by (1 plus 0.34) multiplied by (1 minus 2 times 0.34), yielding 4430 times 1.34 times 0.32, approximately 1902. The quotient 75.24×10⁹ divided by 1902 gives approximately 39.56×10⁶ m²/s². The square root of that quantity is approximately 6290 m/s. Therefore [[v_L]] is approximately 6290 m/s.

For the transverse wave, inserting into the shear relation: the quotient of 44×10⁹ Pa divided by 4430 kg/m³ gives approximately 9.93×10⁶ m²/s². The square root is approximately 3152 m/s. Therefore [[v_T]] is approximately 3150 m/s.

For the Rayleigh wave, inserting into the surface-wave approximation: the numerator is 0.862 plus the product of 1.14 times 0.34, which is 0.862 plus 0.388, giving 1.250. The denominator is 1 plus 0.34, equal to 1.34. The quotient 1.250 divided by 1.34 is approximately 0.933. Multiplying by [[v_T]] of 3150 m/s gives [[v_R]] approximately 2939 m/s, rounded to 2940 m/s.

## Dimensional validation

All three formulas share the same dimensional structure: the square root of a pressure (Pa) divided by a density (kg/m³). Expressing Pa in fundamental units, Pa is kg/(m·s²), and kg/m³ is kg/m³. The ratio Pa/(kg/m³) yields m²/s². The square root of m²/s² is m/s. Dimensional verification for [[v_L]] and [[v_T]]: \`[M L⁻¹ T⁻²] / [M L⁻³] = [L² T⁻²]\` → square root \`[L T⁻¹]\` ✓. The [[v_R]] formula is a dimensionless ratio times [[v_T]], so it carries the same units as [[v_T]]: m/s ✓.

## Physical interpretation

The three values obtained — [[v_L]] of approximately 6290 m/s, [[v_T]] of approximately 3150 m/s and [[v_R]] of approximately 2940 m/s — satisfy the mandatory hierarchy and are consistent with values tabulated in the literature for Ti-6Al-4V (typically 6100 to 6300 m/s, 3100 to 3200 m/s and 2900 to 3000 m/s respectively). The small difference from some reference values is due to compositional and heat treatment variation between batches of the same material.

The longitudinal wave travels approximately twice as fast as the transverse wave, reflecting that the confined modulus of titanium is approximately four times larger than [[G_corte]]. This is typical of metals with moderate [[nu]]. For the inspection technician, this means that in a pulse-echo test, the first echo to arrive corresponds to the P-wave, and if an S-wave is also emitted simultaneously (with a shear transducer), the second echo will arrive approximately twice as late for the same defect depth.

The Rayleigh wave is only 6.7% below [[v_T]], which is typical of metals with [[nu]] around 0.30 to 0.35. This result has direct implications for surface inspection: the time window between S-wave and Rayleigh arrival is very short, so surface inspection systems must have sufficient temporal resolution to distinguish the two arrivals if used in transmission mode.

---

# Real-world example

## Context

In seismology, wave type classification is essential for seismogram reading. When an earthquake occurs, seismographs distributed around the planet receive first the P-waves (longitudinal), then the S-waves (transverse) and finally surface waves (Rayleigh and Love). The time between P-wave and S-wave arrival at a given station — the Wadati interval — allows calculating the distance to the epicentre without knowing the exact instant of the earthquake.

In the Earth's crust, typical values are [[v_L]] (P-wave) of approximately 6000 m/s and [[v_T]] (S-wave) of approximately 3500 m/s. For a station 700 km from the epicentre, the P-wave takes approximately 117 seconds to arrive and the S-wave approximately 200 seconds. The interval between the two arrivals is approximately 83 seconds.

## Physical estimation

The ratio [[v_T]]/[[v_L]] of 3500 divided by 6000 gives approximately 0.583. Using the relation between this ratio and [[nu]], the estimated Poisson's ratio of the crust is approximately 0.25, consistent with known geological values for granitic rock. This datum — obtained purely from arrival time measurements — is one of the most direct methods to estimate the elastic properties of the lithosphere without extracting samples from the deep crust.

The Rayleigh wave arrives approximately 233 seconds after the earthquake (700 km at [[v_R]] of 3000 m/s), that is, about 33 seconds after the S-wave. Although it arrives last, its amplitude at the surface is much greater than that of body waves, and its duration can extend for several minutes in large-magnitude earthquakes.

## Interpretation

Wave type classification is not merely an academic category: it is the operational tool that allows seismologists to locate epicentres, determine focal depth and estimate lithospheric elastic properties in real time. The fact that [[v_L]] is greater than [[v_T]] provides a few minutes of warning between P-wave and S-wave arrival in areas far from the epicentre, which is the physical basis of the early seismic warning concept. Rayleigh waves, due to their greater amplitude and surface confinement, are responsible for most of the damage in multi-storey structures, whose resonant frequencies coincide with the dominant frequency range of surface waves.
`;export{e as default};
