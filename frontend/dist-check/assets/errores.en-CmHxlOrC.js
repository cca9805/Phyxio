const e=`## Conceptual errors

### Error 1: Transverse waves exist in any material medium

**Por qué parece correcto**

The student generalises the experience with sound: "sound propagates in solids, liquids and gases, so all wave types do too". Moreover, in elementary mechanical wave problems, waves on strings are transverse, and the strings are in contact with air, which does not inhibit them. This incorrect analogy leads to the belief that transversality is a property of the vibrating solid, not of the propagation medium.

**Por qué es incorrecto**

A transverse wave requires the medium to support **shear stresses** at rest. Fluids (liquids and gases) have zero shear modulus [[G_corte]]: under any tangential stress they flow rather than deforming elastically. Therefore [[v_T]] is zero in a fluid and the S-wave simply cannot propagate. This is the physical reason why earthquakes produce no S-waves in the Earth's liquid outer core: seismology detects it as a shadow zone that confirms the liquid character of that core.

**Detection signal**

The student calculates [[v_T]] using data from a liquid (for example, water with [[G_corte]] of 0 Pa) and obtains a numerically finite result, or asserts that water transmits high-frequency transverse waves.

**Conceptual correction**

S-waves exist exclusively in solids because the solid is the only type of medium with [[G_corte]] different from zero. The necessary and sufficient condition for the existence of transverse waves is that the medium's shear modulus be strictly positive.

**Mini-example of contrast**

Applying the [[v_T]] formula to water: water's [[G_corte]] in the static regime is zero, so the square root of zero divided by density gives zero. There is no S-wave. By contrast, ice (solid water) has [[G_corte]] of approximately 3.5 GPa and [[v_T]] close to 1900 m/s. The liquid-to-solid phase transition activates the transverse wave.

---

### Error 2: P-wave velocity in a 3D solid is calculated directly with Young's modulus

**Por qué parece correcto**

When studying bar vibrations, the longitudinal velocity is calculated with [[E_young]] and [[rho]] without additional factors. The student extrapolates this formula to the general three-dimensional solid case, believing that Young's modulus is the universal parameter of longitudinal stiffness.

**Por qué es incorrecto**

The thin-bar formula assumes the material can contract laterally without constraint (bar diameter much smaller than wavelength). In a three-dimensional solid, the surrounding material prevents that lateral contraction, generating a **confinement** that effectively stiffens the material. The relevant modulus is the confined modulus, which combines [[E_young]] and [[nu]] and always exceeds [[E_young]] for any positive [[nu]]. Using [[E_young]] alone systematically underestimates [[v_L]].

**Detection signal**

The student calculates [[v_L]] for steel using only [[E_young]] of 200 GPa and [[rho]] of 7800 kg/m³, obtaining approximately 5060 m/s, instead of the correct 5800 to 5900 m/s given by the formula with the Poisson factor.

**Conceptual correction**

In a three-dimensional solid, always use the full longitudinal formula, which includes [[E_young]], [[nu]] and [[rho]]. The thin-bar formula (square root of [[E_young]] divided by [[rho]]) is only valid when the bar diameter is much smaller than the wavelength of the disturbance.

**Mini-example of contrast**

For steel with [[nu]] of 0.30, the effective confined modulus is approximately 269 GPa, a 35% increase over [[E_young]]. The correct longitudinal velocity is 16% larger than that calculated with [[E_young]] alone. This systematic discrepancy is revealed in any comparison with reference tables.

---

## Model errors

### Error 1: Applying the isotropic model to a material with oriented structure

**Por qué parece correcto**

The student has the values of [[E_young]], [[G_corte]] and [[nu]] from the material manufacturer's catalogue. Those values are valid for loading in a specific direction (the laminate fabrication direction, the fibre direction), but the student uses them to calculate wave velocity in an arbitrary direction, assuming the material is isotropic.

**Por qué es incorrecto**

Fibre composite materials (CFRP, GFRP), wood, bone and metal laminates are **anisotropic**: their elastic properties depend on orientation. In these materials there are up to three different longitudinal velocities (one per symmetry axis) and several shear velocities. The model of a single [[v_L]] and a single [[v_T]] is incorrect and can produce errors of more than 50% in the calculated velocity.

**Detection signal**

The experimentally measured velocity varies significantly when rotating the transducer on the material surface. In a truly isotropic material, velocity should not depend on the inspection angle.

**Conceptual correction**

For anisotropic materials, the correct theory is anisotropic elasticity with a fourth-order modulus tensor. In practice, for orthotropic materials (three symmetry planes), velocities are measured experimentally in the three principal directions and the five or nine independent elastic moduli are obtained.

**Mini-example of contrast**

In a unidirectional carbon fibre laminate, longitudinal velocity in the fibre direction can be 9000 m/s, while perpendicular to it is barely 2500 m/s. Using a single [[E_young]] value for both directions gives an error of 260% in one of the two directions.

---

## Mathematical errors

### Error 1: Confusing Poisson's ratio with the velocity ratio

**Por qué parece correcto**

The student knows that [[nu]] and the ratio [[v_T]]/[[v_L]] are related, and simplifies by thinking they are equal or simply proportional. This leads to the belief that [[nu]] of 0.30 implies [[v_T]]/[[v_L]] of 0.30.

**Por qué es incorrecto**

The relation between [[nu]] and the ratio [[v_T]]/[[v_L]] is nonlinear and non-trivial. For [[nu]] of 0.30, the ratio [[v_T]]/[[v_L]] is approximately 0.55, not 0.30. The correct formula involves a square root of a rational expression in [[nu]], producing a strictly increasing function from 0 to 0.71 as [[nu]] goes from 0 to 0.5.

**Detection signal**

The student directly writes that [[v_T]] equals [[nu]] multiplied by [[v_L]], producing a [[v_T]] value for steel ([[nu]] of 0.30, [[v_L]] of 5900 m/s) of barely 1770 m/s instead of the correct 3200 m/s.

**Conceptual correction**

The ratio [[v_T]]/[[v_L]] is obtained by dividing the [[v_T]] formula by the [[v_L]] formula and simplifying. The result is the square root of (1 minus 2 times [[nu]]) divided by (2 times (1 minus [[nu]])). This expression, evaluated at [[nu]] of 0.30, gives approximately 0.546, not 0.30.

**Mini-example of contrast**

For a hypothetical material with [[nu]] of 0.25, the ratio [[v_T]]/[[v_L]] is the square root of 0.5 divided by 1.5, yielding 0.577. A student using [[nu]] directly as the ratio obtains 0.25: an error of 130%.

---

## Interpretation errors

### Error 1: Interpreting the Rayleigh wave as faster than the S-wave because it "travels along the surface"

**Por qué parece correcto**

The intuitive idea is that the surface is a "shortcut" compared to the volume, and that a wave that does not have to cross the interior will arrive first. Moreover, in seismology it is said that surface waves "dominate" the seismogram at the end of the record, which the student interprets as higher speed.

**Por qué es incorrecto**

The Rayleigh wave arrives **after** the S-wave at the seismograph precisely because it is slower: [[v_R]] is between 87 and 96% of [[v_T]]. The reason it dominates the seismogram is not speed but **amplitude**: the Rayleigh wave carries more energy per unit wavefront length because its amplitude only decays as the square root of distance (2D on the surface), while body waves decay as 1/distance in 3D.

**Detection signal**

The student calculates a Rayleigh wave arrival time shorter than the S-wave arrival time for the same path, or asserts that the surface wave would be useful for early detection in seismic alerting.

**Conceptual correction**

The Rayleigh wave is always slower than the S-wave in the same material. The order of arrival in a seismogram is: first P-wave, then S-wave, finally surface waves (Rayleigh and Love). Surface waves cause greater damage not because of speed but because of larger amplitude and longer duration of shaking.

**Mini-example of contrast**

For steel with [[v_T]] of 3200 m/s and [[v_R]] of 2970 m/s, over a distance of 10 m the S-wave arrives at 3.1 ms and the Rayleigh wave at 3.4 ms. The difference is small (less than 10%) but the Rayleigh wave always arrives second. Inverting the order would lead to a physically incorrect conclusion about early warning.

---

## Quick self-control rule

To quickly verify that the wave velocity calculation is correct, apply the following three checks before accepting the result:

**Check 1 — Velocity hierarchy**: [[v_L]] must be greater than [[v_T]] and [[v_T]] must be greater than [[v_R]]. If the hierarchy is not satisfied, there is an error in the moduli or in the formula chosen.

**Check 2 — Velocity ratio**: The ratio [[v_T]]/[[v_L]] must be between 0.5 and 0.7 for the vast majority of engineering materials. Values outside that range indicate [[nu]] outside the physical limits or a unit error in the moduli.

**Check 3 — Order-of-magnitude by material**: For common metals (steel, aluminium, copper), [[v_L]] should be between 4000 and 7000 m/s. For technical polymers, between 1000 and 3000 m/s. For soft soils, between 100 and 500 m/s. A result outside that range for the given material is a clear signal of a unit error or model error.
`;export{e as default};
