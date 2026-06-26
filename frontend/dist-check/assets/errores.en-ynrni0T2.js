const e=`# Errors

## Conceptual errors

### Error 1: Confusing [[alpha]] (linear coefficient) with [[beta]] (volumetric coefficient)

**Why it seems correct**

The student learns that expansion depends on a "material coefficient" and, without distinguishing which one, uses the only numerical value found in the tables (sometimes [[alpha]], sometimes [[beta]]) for any calculation. Because both coefficients have the same units (K⁻¹) and numerical values of the same order of magnitude, the confusion goes unnoticed if the reasonableness of the result is not checked.

**Why it is incorrect**

The linear expansion law uses [[alpha]], which measures the relative change in a single dimension per kelvin. The volumetric expansion law uses [[beta]], which measures the relative change in the entire volume. For isotropic solids, [[beta]] is approximately three times [[alpha]]. Using [[beta]] in the linear formula would triple the calculated elongation; using [[alpha]] in the volumetric formula would give a volume change three times smaller than the real value.

**Detection signal**

The student obtains an elongation of several centimetres for a metal bar with temperature changes of only a few kelvins, or a volumetric expansion that is equivalent to changing only one dimension instead of the total volume. The ratio of calculated [[DeltaL]] to [[L0]] multiplied by [[DeltaT]] does not match the tabulated [[alpha]] value for the material.

**Conceptual correction**

[[alpha]] describes the sensitivity of a length; [[beta]] describes the sensitivity of a volume. In isotropic solids the relation is [[beta]] ≈ 3·[[alpha]] by geometry. Before substituting into the formula, identify what dimension is being calculated (linear or volumetric) and select the corresponding coefficient.

**Contrast mini-example**

For an aluminium bar of 1 m with [[DeltaT]] of 100 K: using [[alpha]] ≈ 23×10⁻⁶ K⁻¹, the elongation is approximately 2.3 mm. If [[beta]] ≈ 69×10⁻⁶ K⁻¹ is mistakenly used, the result is 6.9 mm, almost three times larger. On a 25 m rail, that error would mean 17 cm instead of 5.75 cm—a difference that would invalidate any expansion joint design.

---

### Error 2: Inverting the subtraction order when computing [[DeltaT]]

**Why it seems correct**

The student associates "how much the temperature rises" with initial temperature minus final temperature, because intuitively "heat" is associated with high temperature. The subtraction T_initial minus T_final gives a positive number when starting from a high temperature, reinforcing the confusion.

**Why it is incorrect**

By universal convention, [[DeltaT]] is defined as T_final minus T_initial. A positive [[DeltaT]] indicates the temperature rose (heating) and [[DeltaL]] will be positive (elongation). If the subtraction is inverted, a heating process produces a negative [[DeltaT]], erroneously leading to a calculated contraction where there is physically an elongation.

**Detection signal**

The student obtains negative [[DeltaL]] in a problem where the statement explicitly describes heating of the solid. Or they obtain positive [[DeltaL]] in a cooling problem. The sign of the result is opposite to the physical direction of the described process.

**Conceptual correction**

Always calculate [[DeltaT]] as final temperature minus initial temperature. Verify that the sign of [[DeltaL]] matches the type of process: positive for heating, negative for cooling. This sign check is the first coherence control before interpreting the result.

**Contrast mini-example**

A steel bar is heated from 20 °C to 70 °C. If [[DeltaT]] is correctly calculated as 70 minus 20, the result is 50 K and [[DeltaL]] is positive (0.6 mm elongation for a 1 m bar). If inverted, [[DeltaT]] is minus 50 K and [[DeltaL]] appears negative, indicating an absurd contraction in a heating process.

## Model errors

### Error 3: Applying the linear model to a process that crosses a phase change

**Why it seems correct**

The student mechanically applies the formula [[DeltaL]] proportional to [[alpha]], [[L0]] and [[DeltaT]] without checking whether the temperature range spans a phase transition. Because the formula always produces a number, the student accepts it without questioning whether the model is physically applicable.

**Why it is incorrect**

During a phase change (melting, solidification, vaporisation), the material does not change temperature while absorbing or releasing latent energy, but may change volume discontinuously. In that range, the assumption of constant [[alpha]] fails completely: [[alpha]] becomes undefined during the transition and the linear expansion law does not predict the real behaviour. Using the formula in that range produces a numerically incorrect result that may be several orders of magnitude from reality.

**Detection signal**

The problem statement mentions temperatures that include the melting or boiling point of the material, or specifies that the material transitions from solid to liquid during the process. The clearest signal is that the calculated temperature variation crosses a known transition point of the material.

**Conceptual correction**

Before applying the linear expansion law, verify that the entire [[DeltaT]] range of the problem lies within the same phase of the material. If there is a phase transition, the problem must be divided into segments: the solid heating segment, the phase transition (with latent heat and no temperature change), and the liquid heating segment, each with its own law and parameters.

**Contrast mini-example**

A tin bar is to be heated from 200 °C to 250 °C, without knowing that tin's melting point is 232 °C. Applying the formula with [[alpha]] for solid tin over the entire range gives a plausible but physically incorrect result: between 200 and 232 °C tin expands as a solid, at 232 °C it melts and changes volume discontinuously, and between 232 and 250 °C it expands as a liquid with a completely different [[beta]].

## Mathematical errors

### Error 4: Not converting length units before substituting

**Why it seems correct**

The student enters [[L0]] in centimetres or millimetres because the problem statement gives the data in those units, and applies [[alpha]] in K⁻¹ without noticing that tabulated values of [[alpha]] are implicitly referenced to metres (SI). The calculation produces a number with correct numerical value but incorrect length units, which goes unnoticed if the order of magnitude is not checked.

**Why it is incorrect**

[[alpha]] in SI K⁻¹ is the relative length change per kelvin, and the relative change is dimensionless: [[DeltaL]] divided by [[L0]]. Therefore [[DeltaL]] has the same units as [[L0]]. If [[L0]] is in metres, [[DeltaL]] will be in metres. If [[L0]] is entered in centimetres without conversion, [[DeltaL]] comes out in centimetres, which may be confused with metres if units are not labelled throughout.

**Detection signal**

The result for [[DeltaL]] appears one hundred times larger or smaller than expected. For example, for a 50 cm aluminium bar with [[DeltaT]] of 40 K, the result is 46 mm instead of 0.46 mm. The order of magnitude of the ratio [[DeltaL]]/[[L0]] does not match [[alpha]]·[[DeltaT]].

**Conceptual correction**

Always convert [[L0]] (and [[V0]] in volumetric expansion) to SI (metres and cubic metres) before substituting. The result [[DeltaL]] will be in metres and can be converted to the desired unit at the end. Always verify that [[DeltaL]]/[[L0]] is of the order of [[alpha]]·[[DeltaT]], a small dimensionless number.

**Contrast mini-example**

A copper rod of 30 cm. Using [[L0]] in metres: 0.30 m. With [[alpha]] ≈ 17×10⁻⁶ K⁻¹ and [[DeltaT]] of 60 K, [[DeltaL]] is approximately 0.000306 m, i.e. 0.306 mm. If [[L0]] is incorrectly used as 30 (in centimetres without conversion) with the same [[alpha]] in K⁻¹, the numerical result is 0.0306, which the student interprets as 0.0306 m or 3.06 cm, one hundred times larger than the real value.

## Interpretation errors

### Error 5: Confusing [[DeltaL]] with the final length of the solid

**Why it seems correct**

The student calculates [[DeltaL]] and, since the question asks for "the length of the solid after heating", responds with the value of [[DeltaL]] instead of adding [[L0]] plus [[DeltaL]]. The confusion arises because [[DeltaL]] is the quantity directly calculated by the formula and the student takes it as the final state of the system.

**Why it is incorrect**

[[DeltaL]] is the change in length, not the final length. The final length of the solid is [[L0]] plus [[DeltaL]]. For a 2 m steel bar heated by 50 K with [[alpha]] ≈ 12×10⁻⁶ K⁻¹, [[DeltaL]] is approximately 1.2 mm. The final length is 2000 mm plus 1.2 mm, that is 2001.2 mm, not 1.2 mm. Reporting 1.2 mm as the final length would be an absurd error, but it occurs when the student does not differentiate between change and final state.

**Detection signal**

The value reported as final length is much smaller than [[L0]] (for example, a few millimetres for a bar of several metres). Or, the problem asks for the final length but the answer coincides exactly with the calculated [[DeltaL]] value.

**Conceptual correction**

Always distinguish between the quantity calculated by the formula ([[DeltaL]], the change) and the final state of the solid (initial length plus change). In a problem asking for the final length, the last step is always to add [[L0]] plus [[DeltaL]]. Verify that the final length is always greater than [[L0]] for heating with a positive coefficient.

**Contrast mini-example**

A glass rod of 0.5 m is heated by 80 K with [[alpha]] ≈ 9×10⁻⁶ K⁻¹. [[DeltaL]] is approximately 0.36 mm. The final length is 500 mm plus 0.36 mm, giving 500.36 mm. Answering "the final length is 0.36 mm" is physically absurd: the rod has not shrunk from 50 cm to less than half a millimetre. The final length must always be close to [[L0]], with a small correction of [[DeltaL]].

## Quick self-control rule

Before accepting any expansion calculation as valid, check these four conditions:

1. **Sign of [[DeltaT]]**: final temperature minus initial temperature. If the process is heating, [[DeltaT]] must be positive; if cooling, negative. If the sign does not match the described process, correct the subtraction.

2. **Correct coefficient**: is [[alpha]] used for linear expansion or [[beta]] for volumetric? Never interchange them. For isotropic solids, [[beta]] is approximately three times [[alpha]].

3. **Order of magnitude of relative deformation**: the ratio [[DeltaL]] divided by [[L0]] must be of the order of [[alpha]] multiplied by [[DeltaT]], a dimensionless number between 10⁻⁴ and 10⁻². A result outside this range indicates a data or unit error.

4. **Final length or volume**: if the question asks for the final state, add [[L0]] to [[DeltaL]] (or [[V0]] to [[DeltaV]]). The final state is always greater than the initial state for heating with a positive coefficient.
`;export{e as default};
