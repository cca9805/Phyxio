## Conceptual errors


### Error 1: Confusing the elastic modulus for the wave type

**Why it seems correct**

The student knows that velocity depends on an elastic modulus and density, and applies the first formula remembered without verifying whether it is appropriate for the wave mode.

**Why it is incorrect**

Longitudinal waves in thin bars use [[modulo_de_young]]; transverse waves use [[modulo_de_cizalladura]]. If the wrong modulus is used, the calculated velocity has a 40% to 70% error compared to the correct value. In extended solids, the plane wave modulus (combination of E and ν) is also used, giving an even higher velocity than the bar formula.

**Detection signal**

The calculated transverse velocity is greater than the longitudinal one, which is physically impossible in an isotropic solid.

**Conceptual correction**

Before substituting values, identify the wave type. Longitudinal in bar: [[modulo_de_young]]. Transverse: [[modulo_de_cizalladura]]. Longitudinal in extended medium: plane wave modulus. Always verify that transverse velocity is less than longitudinal.

**Mini contrast example**

Steel with [[modulo_de_young]] of 200 GPa, [[modulo_de_cizalladura]] of 80 GPa, [[rho]] of 7800 kg/m³. Longitudinal velocity (bar): approximately 5064 m/s. Transverse velocity: approximately 3202 m/s. If [[modulo_de_young]] is erroneously used for transverse, 5064 m/s is obtained (58% higher than the correct value).

**Mini-example of contrast**

Check 1: In Introduction, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Forgetting the square root

**Why it seems correct**

The student remembers that velocity is proportional to the modulus/density ratio and calculates that ratio directly without extracting the root.

**Why it is incorrect**

The result without square root has units of m²/s² (not m/s) and gives absurdly high values (millions of m/s, exceeding the speed of light).

**Detection signal**

The result for [[v_fase]] has orders of magnitude of 10⁶ or higher, or units do not balance dimensionally.

**Conceptual correction**

The formula always includes the square root. Check dimensionally: √(Pa / (kg/m³)) gives m/s. Without the root, Pa/(kg/m³) gives m²/s², which are not velocity units.

**Mini contrast example**

With [[modulo_de_young]] of 200 GPa and [[rho]] of 7800 kg/m³: without root one obtains 25.6 × 10⁶ m²/s² (meaningless). With root: 5064 m/s (correct value with proper units).

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Using inconsistent units

**Why it seems correct**

The student obtains data from different sources: modulus in GPa and density in g/cm³, and substitutes directly without converting to SI.

**Why it is incorrect**

If [[modulo_de_young]] is left in GPa (10⁹ Pa) but [[rho]] is left in g/cm³ (10³ kg/m³) without coherent conversion, the 10⁹ and 10³ factors may partially cancel giving results that seem reasonable but are incorrect.

**Detection signal**

The result differs by a factor of √10, √100 or √1000 from the tabulated value.

**Conceptual correction**

Convert everything to SI before substituting: [[modulo_de_young]] in Pa, [[rho]] in kg/m³. The result will come out directly in m/s.

**Mini contrast example**

Aluminium: if [[modulo_de_young]] is substituted as 69 (without 10⁹) and [[rho]] as 2.7 (without 10³), one obtains √(69/2.7) ≈ 5.05 m/s, which is absurdly low. With correct units: √(69×10⁹/2700) ≈ 5055 m/s.

## Model errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Applying the thin bar formula to an extended medium

**Why it seems correct**

The thin bar formula is simpler and appears first in textbooks. The student applies it to any solid without considering geometry.

**Why it is incorrect**

In an extended medium (transverse dimensions comparable to or larger than wavelength), longitudinal velocity is higher than in a thin bar because surrounding material prevents lateral expansion. Velocity in extended media incorporates Poisson's ratio and can be 10% to 20% higher.

**Detection signal**

The velocity calculated for a solid block is below the experimentally measured or tabulated value for that material in extended geometry.

**Conceptual correction**

Identify the geometry: if the wavefront covers a section much larger than the wavelength, use the plane wave modulus instead of [[modulo_de_young]] alone. For steel, velocity in extended medium is about 5900 m/s versus 5064 m/s in bar.

**Mini contrast example**

Steel: velocity in thin bar ([[modulo_de_young]] alone) about 5064 m/s. Velocity in extended medium (plane wave modulus) about 5900 m/s. The 16% difference can be significant in precision testing.

## Mathematical errors

### Error: Forgetting the square root in the velocity formula

The phase velocity formula always includes a square root of the ratio between elastic modulus and density. A common algebraic error is to directly calculate [[modulo_de_young]] divided by [[rho]] without extracting the root. The result has units of m²/s² instead of m/s and gives absurdly high values (on the order of millions). If [[v_fase]] exceeds 50000 m/s for a solid, the square root is almost certainly missing.

### Error: Unit conversion errors

When using table data, [[modulo_de_young]] is often given in GPa and [[rho]] in g/cm³. If substituted directly without converting to Pa and kg/m³, the 10⁹ and 10³ factors partially cancel and the result may seem reasonable but is wrong. Always convert to SI before substituting.

## Interpretation errors

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.


### Error 5: Believing frequency changes when changing medium

**Why it seems correct**

The student observes that wavelength changes when the wave passes to another medium and concludes that frequency must also change.

**Why it is incorrect**

[[frecuencia]] is set by the source and is conserved across all interfaces. What changes is [[lambda]] because [[v_fase]] is different in each medium. The temporal continuity condition at the interface requires frequency to be the same on both sides.

**Detection signal**

The student calculates different frequencies on both sides of an interface, or modifies [[frecuencia]] when changing material.

**Conceptual correction**

[[frecuencia]] is always conserved. When changing medium: new [[lambda]] equals new [[v_fase]] divided by the same [[frecuencia]]. Only wavelength changes, never frequency.

**Mini contrast example**

A 1 MHz wave passing from aluminium (velocity 5055 m/s, wavelength 5.06 mm) to steel (velocity 5900 m/s, wavelength 5.90 mm). [[frecuencia]] remains 1 MHz in both media; only wavelength adapts.

## Quick self-control rule

Before accepting a wave velocity calculation in solids, verify:
1. [[v_fase]] is between 50 and 12000 m/s for real solids.
2. Transverse velocity is always less than longitudinal in the same material.
3. Result units are m/s and dimensional analysis balances.
4. If the material is a fluid, only longitudinal wave exists (transverse does not exist).
5. If frequency remains equal on both sides of an interface, the calculation is coherent.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.