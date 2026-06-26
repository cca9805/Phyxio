## Conceptual errors


### Error 1: Transverse waves exist in any material medium

**Por qué parece correcto**

The student generalises the experience with sound: "sound propagates in solids, liquids and gases, so all wave types do too". Moreover, in elementary mechanical wave problems, waves on strings are transverse, and the strings are in contact with air, which does not inhibit them. This incorrect analogy leads to the belief that transversality is a property of the vibrating solid, not of the propagation medium.

**Por qué es incorrecto**

A transverse wave requires the medium to support **shear stresses** at rest. Fluids (liquids and gases) have zero shear modulus [[modulo_de_corte]]: under any tangential stress they flow rather than deforming elastically. Therefore [[velocidad_de_onda_transversal_s]] is zero in a fluid and the S-wave simply cannot propagate. This is the physical reason why earthquakes produce no S-waves in the Earth's liquid outer core: seismology detects it as a shadow zone that confirms the liquid character of that core.

**Detection signal**

The student calculates [[velocidad_de_onda_transversal_s]] using data from a liquid (for example, water with [[modulo_de_corte]] of 0 Pa) and obtains a numerically finite result, or asserts that water transmits high-frequency transverse waves.

**Conceptual correction**

S-waves exist exclusively in solids because the solid is the only type of medium with [[modulo_de_corte]] different from zero. The necessary and sufficient condition for the existence of transverse waves is that the medium's shear modulus be strictly positive.

**Mini-example of contrast**

Applying the [[velocidad_de_onda_transversal_s]] formula to water: water's [[modulo_de_corte]] in the static regime is zero, so the square root of zero divided by density gives zero. There is no S-wave. By contrast, ice (solid water) has [[modulo_de_corte]] of approximately 3.5 GPa and [[velocidad_de_onda_transversal_s]] close to 1900 m/s. The liquid-to-solid phase transition activates the transverse wave.

---

**Why it seems correct**

Check 1: In Types of Waves in Solids, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Why it is incorrect**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 2: P-wave velocity in a 3D solid is calculated directly with Young's modulus

**Por qué parece correcto**

When studying bar vibrations, the longitudinal velocity is calculated with [[modulo_de_young]] and [[rho]] without additional factors. The student extrapolates this formula to the general three-dimensional solid case, believing that Young's modulus is the universal parameter of longitudinal stiffness.

**Por qué es incorrecto**

The thin-bar formula assumes the material can contract laterally without constraint (bar diameter much smaller than wavelength). In a three-dimensional solid, the surrounding material prevents that lateral contraction, generating a **confinement** that effectively stiffens the material. The relevant modulus is the confined modulus, which combines [[modulo_de_young]] and [[nu]] and always exceeds [[modulo_de_young]] for any positive [[nu]]. Using [[modulo_de_young]] alone systematically underestimates [[velocidad_de_onda_longitudinal_p]].

**Detection signal**

The student calculates [[velocidad_de_onda_longitudinal_p]] for steel using only [[modulo_de_young]] of 200 GPa and [[rho]] of 7800 kg/m³, obtaining approximately 5060 m/s, instead of the correct 5800 to 5900 m/s given by the formula with the Poisson factor.

**Conceptual correction**

In a three-dimensional solid, always use the full longitudinal formula, which includes [[modulo_de_young]], [[nu]] and [[rho]]. The thin-bar formula (square root of [[modulo_de_young]] divided by [[rho]]) is only valid when the bar diameter is much smaller than the wavelength of the disturbance.

**Mini-example of contrast**

For steel with [[nu]] of 0.30, the effective confined modulus is approximately 269 GPa, a 35% increase over [[modulo_de_young]]. The correct longitudinal velocity is 16% larger than that calculated with [[modulo_de_young]] alone. This systematic discrepancy is revealed in any comparison with reference tables.

---

## Model errors

**Why it seems correct**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Why it is incorrect**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.


### Error 1: Applying the isotropic model to a material with oriented structure

**Por qué parece correcto**

The student has the values of [[modulo_de_young]], [[modulo_de_corte]] and [[nu]] from the material manufacturer's catalogue. Those values are valid for loading in a specific direction (the laminate fabrication direction, the fibre direction), but the student uses them to calculate wave velocity in an arbitrary direction, assuming the material is isotropic.

**Por qué es incorrecto**

Fibre composite materials (CFRP, GFRP), wood, bone and metal laminates are **anisotropic**: their elastic properties depend on orientation. In these materials there are up to three different longitudinal velocities (one per symmetry axis) and several shear velocities. The model of a single [[velocidad_de_onda_longitudinal_p]] and a single [[velocidad_de_onda_transversal_s]] is incorrect and can produce errors of more than 50% in the calculated velocity.

**Detection signal**

The experimentally measured velocity varies significantly when rotating the transducer on the material surface. In a truly isotropic material, velocity should not depend on the inspection angle.

**Conceptual correction**

For anisotropic materials, the correct theory is anisotropic elasticity with a fourth-order modulus tensor. In practice, for orthotropic materials (three symmetry planes), velocities are measured experimentally in the three principal directions and the five or nine independent elastic moduli are obtained.

**Mini-example of contrast**

In a unidirectional carbon fibre laminate, longitudinal velocity in the fibre direction can be 9000 m/s, while perpendicular to it is barely 2500 m/s. Using a single [[modulo_de_young]] value for both directions gives an error of 260% in one of the two directions.

---

## Mathematical errors

**Why it seems correct**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.

**Why it is incorrect**

Check 6: In Types of Waves in Solids, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.


### Error 1: Confusing Poisson's ratio with the velocity ratio

**Por qué parece correcto**

The student knows that [[nu]] and the ratio [[velocidad_de_onda_transversal_s]]/[[velocidad_de_onda_longitudinal_p]] are related, and simplifies by thinking they are equal or simply proportional. This leads to the belief that [[nu]] of 0.30 implies [[velocidad_de_onda_transversal_s]]/[[velocidad_de_onda_longitudinal_p]] of 0.30.

**Por qué es incorrecto**

The relation between [[nu]] and the ratio [[velocidad_de_onda_transversal_s]]/[[velocidad_de_onda_longitudinal_p]] is nonlinear and non-trivial. For [[nu]] of 0.30, the ratio [[velocidad_de_onda_transversal_s]]/[[velocidad_de_onda_longitudinal_p]] is approximately 0.55, not 0.30. The correct formula involves a square root of a rational expression in [[nu]], producing a strictly increasing function from 0 to 0.71 as [[nu]] goes from 0 to 0.5.

**Detection signal**

The student directly writes that [[velocidad_de_onda_transversal_s]] equals [[nu]] multiplied by [[velocidad_de_onda_longitudinal_p]], producing a [[velocidad_de_onda_transversal_s]] value for steel ([[nu]] of 0.30, [[velocidad_de_onda_longitudinal_p]] of 5900 m/s) of barely 1770 m/s instead of the correct 3200 m/s.

**Conceptual correction**

The ratio [[velocidad_de_onda_transversal_s]]/[[velocidad_de_onda_longitudinal_p]] is obtained by dividing the [[velocidad_de_onda_transversal_s]] formula by the [[velocidad_de_onda_longitudinal_p]] formula and simplifying. The result is the square root of (1 minus 2 times [[nu]]) divided by (2 times (1 minus [[nu]])). This expression, evaluated at [[nu]] of 0.30, gives approximately 0.546, not 0.30.

**Mini-example of contrast**

For a hypothetical material with [[nu]] of 0.25, the ratio [[velocidad_de_onda_transversal_s]]/[[velocidad_de_onda_longitudinal_p]] is the square root of 0.5 divided by 1.5, yielding 0.577. A student using [[nu]] directly as the ratio obtains 0.25: an error of 130%.

---

## Interpretation errors

**Why it seems correct**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Why it is incorrect**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.


### Error 1: Interpreting the Rayleigh wave as faster than the S-wave because it "travels along the surface"

**Por qué parece correcto**

The intuitive idea is that the surface is a "shortcut" compared to the volume, and that a wave that does not have to cross the interior will arrive first. Moreover, in seismology it is said that surface waves "dominate" the seismogram at the end of the record, which the student interprets as higher speed.

**Por qué es incorrecto**

The Rayleigh wave arrives **after** the S-wave at the seismograph precisely because it is slower: [[velocidad_de_onda_de_rayleigh]] is between 87 and 96% of [[velocidad_de_onda_transversal_s]]. The reason it dominates the seismogram is not speed but **amplitude**: the Rayleigh wave carries more energy per unit wavefront length because its amplitude only decays as the square root of distance (2D on the surface), while body waves decay as 1/distance in 3D.

**Detection signal**

The student calculates a Rayleigh wave arrival time shorter than the S-wave arrival time for the same path, or asserts that the surface wave would be useful for early detection in seismic alerting.

**Conceptual correction**

The Rayleigh wave is always slower than the S-wave in the same material. The order of arrival in a seismogram is: first P-wave, then S-wave, finally surface waves (Rayleigh and Love). Surface waves cause greater damage not because of speed but because of larger amplitude and longer duration of shaking.

**Mini-example of contrast**

For steel with [[velocidad_de_onda_transversal_s]] of 3200 m/s and [[velocidad_de_onda_de_rayleigh]] of 2970 m/s, over a distance of 10 m the S-wave arrives at 3.1 ms and the Rayleigh wave at 3.4 ms. The difference is small (less than 10%) but the Rayleigh wave always arrives second. Inverting the order would lead to a physically incorrect conclusion about early warning.

---

## Quick self-control rule

To quickly verify that the wave velocity calculation is correct, apply the following three checks before accepting the result:

**Check 1 — Velocity hierarchy**: [[velocidad_de_onda_longitudinal_p]] must be greater than [[velocidad_de_onda_transversal_s]] and [[velocidad_de_onda_transversal_s]] must be greater than [[velocidad_de_onda_de_rayleigh]]. If the hierarchy is not satisfied, there is an error in the moduli or in the formula chosen.

**Check 2 — Velocity ratio**: The ratio [[velocidad_de_onda_transversal_s]]/[[velocidad_de_onda_longitudinal_p]] must be between 0.5 and 0.7 for the vast majority of engineering materials. Values outside that range indicate [[nu]] outside the physical limits or a unit error in the moduli.

**Check 3 — Order-of-magnitude by material**: For common metals (steel, aluminium, copper), [[velocidad_de_onda_longitudinal_p]] should be between 4000 and 7000 m/s. For technical polymers, between 1000 and 3000 m/s. For soft soils, between 100 and 500 m/s. A result outside that range for the given material is a clear signal of a unit error or model error.

**Why it seems correct**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Why it is incorrect**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.