const e=`## Conceptual errors

### Error 1: confusing the mode index with the number of nodes

**Why it seems correct**

Students learn that, in a string, mode n has a simple relation with the number of spatial regions. They then generalize that mode (m,n) in a plate must have m nodal lines in x and n nodal lines in y. The analogy is tempting because both systems are standing-wave problems.

**Why it is incorrect**

In a rectangular plate or membrane with fixed boundaries, m counts the number of half-periods along the direction associated with [[a_dim]], not the number of interior nodal lines. Mode (1,1) has no interior nodal line; only the boundary is nodal. Mode (2,1) has one interior nodal line, not two. The number of interior nodal lines in a direction is one less than the corresponding index.

**Detection signal**

The student draws mode (1,1) with an interior cross, or describes it as a mode with one nodal line in x and one in y. Another common sign is a drawing of mode (3,2) with three lines in one direction and two in the other, instead of two and one.

**Conceptual correction**

For fixed edges, read each index as the number of lobes or half-waves in that direction. Interior nodal lines are separators between lobes. The fundamental mode is the smoothest possible pattern compatible with the boundary, not the first pattern with an interior node.

**Contrast mini-example**

Mode (3,2) has three vibrating lobes along x and two along y. That produces two interior nodal lines perpendicular to x and one interior nodal line perpendicular to y. Counting regions and counting lines are different operations.

---

### Error 2: treating a plate and a membrane as the same model with different material

**Why it seems correct**

Both systems are thin, two-dimensional and vibrate with indices (m,n). Both formulas contain geometry and surface inertia. It is therefore easy to think that the difference is just whether the material is metal, polymer or fabric.

**Why it is incorrect**

The restoring mechanisms are different. A plate is restored by bending stiffness [[D_placa]], which depends strongly on [[h_placa]] and on elastic constants such as [[E_young]] and [[nu_p]]. A membrane is restored mainly by surface tension [[T_mem]]. An ideal membrane has negligible bending stiffness; an unstressed membrane cannot behave like a plate simply because its material has a Young modulus.

**Detection signal**

The student applies the plate formula to a drum head, or tries to tune a membrane by changing [[E_young]] instead of [[T_mem]]. Another sign is using [[D_placa]] and [[T_mem]] in the same calculation without declaring which regime dominates.

**Conceptual correction**

First decide the physical regime. If bending stiffness dominates, use the plate model. If uniform tension dominates and bending stiffness is negligible, use the membrane model. The distinction changes how [[f_mn]] responds to thickness, tension and density.

**Contrast mini-example**

Increasing [[h_placa]] in a plate raises [[D_placa]] strongly and shifts the spectrum upward. Tightening a drum head raises [[T_mem]] and shifts the membrane spectrum upward. These are not interchangeable controls.

---

### Error 3: ignoring modal degeneracy in square geometries

**Why it seems correct**

For a square plate or membrane, the formulas give the same frequency for modes (1,2) and (2,1). The student may conclude that they are the same mode and list the frequency only once.

**Why it is incorrect**

Equal frequency does not mean equal shape. The mode (1,2) has a nodal pattern rotated relative to (2,1). In a symmetric geometry, both can exist independently and any linear combination is also a valid motion. Degeneracy means several independent shapes share the same [[f_mn]].

**Detection signal**

The modal spectrum of a square plate lists each degenerate frequency only once and underestimates modal density. Experimental nodal maps show diagonal or mixed patterns that do not match a single pure drawing.

**Conceptual correction**

Count modes by independent shapes, not only by distinct frequency values. For square geometry, pairs with m different from n usually appear as degenerate partners.

**Contrast mini-example**

A square plate can show a vertical nodal line, a horizontal nodal line, or a diagonal-looking combination at the same frequency. These are different spatial states of the same degenerate frequency.

## Model errors

### Error 4: using the Kirchhoff thin-plate model for thick plates

**Why it seems correct**

The Kirchhoff formula is compact and produces a number for any positive inputs. Without an explicit warning, it looks like a universal plate formula.

**Why it is incorrect**

Kirchhoff theory neglects transverse shear deformation and rotary inertia. When [[h_placa]] is not small compared with the smaller in-plane dimension, real frequencies can be significantly lower than the Kirchhoff prediction, especially for higher modes.

**Detection signal**

Measured frequencies are systematically below the prediction, and the discrepancy grows with mode index. If the ratio between [[h_placa]] and the smaller of [[a_dim]] and [[b_dim]] is not small, the thin-plate assumption is suspect.

**Conceptual correction**

Use the thin-plate formula only when thickness is much smaller than in-plane dimensions. For moderately thick plates, use Mindlin plate theory or a numerical model that includes shear deformation.

**Contrast mini-example**

A small steel plate with thickness comparable to one tenth of its width may look like a plate, but its dynamic response is no longer well described by the thin-plate approximation.

---

### Error 5: assuming boundary conditions are a minor detail

**Why it seems correct**

The formulas for different boundaries all involve modal indices and dimensions, so the student may think that boundary conditions only change a small coefficient.

**Why it is incorrect**

Boundary conditions control admissible shapes and frequency scale. A simply supported edge, a clamped edge and a free edge impose different displacement and slope constraints. The resulting [[f_mn]] values and nodal patterns can differ substantially.

**Detection signal**

A calculation for a clamped panel uses a simply supported formula and consistently predicts frequencies too low. The nodal pattern also fails near the boundary because the slope condition is wrong.

**Conceptual correction**

State the boundary condition before selecting the formula. If the edge is bolted, welded, floating or elastically supported, the simple boundary idealization must be checked against the real support.

**Contrast mini-example**

A panel clamped on all sides can have a much higher fundamental frequency than the same panel simply supported on all sides, even with identical [[D_placa]], [[rho_s]], [[a_dim]] and [[b_dim]].

## Mathematical errors

### Error 6: omitting the Poisson correction in bending stiffness

**Why it seems correct**

Students remember beam bending stiffness as a product of Young's modulus and a geometric inertia. They then write the plate stiffness as if it were only [[E_young]] times a cubic thickness factor.

**Why it is incorrect**

A plate bends in a two-dimensional stress state. The lateral coupling described by [[nu_p]] changes the effective bending stiffness. Omitting the factor involving [[nu_p]] gives a systematic error in [[D_placa]] and therefore in all plate frequencies.

**Detection signal**

All predicted frequencies are slightly shifted by nearly the same factor compared with a reference solution. The error does not depend strongly on the mode but follows the material value of [[nu_p]].

**Conceptual correction**

Use the full bending-stiffness formula:

{{f:rigidez_flexion_placa}}

The Poisson correction belongs to the stiffness definition, not to a later adjustment of [[f_mn]].

**Contrast mini-example**

For a material with [[nu_p]] around 0.3, ignoring the correction produces a noticeable but not enormous frequency error. For materials closer to the incompressible limit, the error becomes larger.

---

### Error 7: confusing volumetric density with surface mass density

**Why it seems correct**

Material tables usually give [[rho_vol]], while the modal plate formula uses [[rho_s]]. Both are called density in ordinary language, so the student may substitute the table value directly.

**Why it is incorrect**

[[rho_vol]] and [[rho_s]] have different dimensions. A plate calculation requires inertia per unit area, not inertia per unit volume. The conversion is not optional; it is part of the model reduction from a three-dimensional solid to a vibrating surface.

**Detection signal**

Dimensional analysis of the modal formula does not end in hertz, or the resulting frequency is implausibly low or high for the plate size. Another sign is that [[h_placa]] never appears in the inertia part of the calculation.

**Conceptual correction**

Compute [[rho_s]] first:

{{f:densidad_superficial_placa}}

Only then use [[rho_s]] in the plate modal frequency formula.

**Contrast mini-example**

A steel sheet of a few millimetres thickness does not have thousands of kilograms per square metre. Its surface mass is the volumetric density multiplied by thickness, so it is typically in the range of kilograms to tens of kilograms per square metre.

## Interpretation errors

### Error 8: treating the fundamental mode as the only relevant mode

**Why it seems correct**

The fundamental mode has the lowest frequency and often the largest response under broad excitation. Many introductory problems stop after computing mode (1,1).

**Why it is incorrect**

Real excitations may contain many frequencies. Impacts, rotating machinery and acoustic noise can excite several modes at once. A complete vibration reading must consider all modes in the frequency band of interest, not only the first one.

**Detection signal**

The calculation predicts a single sinusoidal response, but measured data show several spectral peaks. The ignored peaks are still associated with legitimate [[f_mn]] values and nodal patterns.

**Conceptual correction**

Use the fundamental mode as the starting point, not as the whole spectrum. Compare each relevant [[f_mn]] with the excitation band and with the spatial position of the forcing.

**Contrast mini-example**

A plate hit at one point may excite mode (1,1) strongly, but the same impact can also excite higher modes whose nodal patterns have nonzero motion at the impact location.

---

### Error 9: assuming higher modal frequency means larger vibration amplitude

**Why it seems correct**

Higher frequency is sometimes associated with higher energy, so students may expect high-index modes to vibrate more intensely.

**Why it is incorrect**

Amplitude depends on resonance proximity, damping and spatial coupling to the excitation. A high-frequency mode may have almost zero response if the forcing frequency is far from its [[f_mn]] or if the force is applied at one of its nodal lines.

**Detection signal**

The student ranks expected amplitudes only by mode index or frequency, without checking forcing frequency or forcing location.

**Conceptual correction**

Read each mode through a frequency condition and a spatial condition. A mode responds strongly when the excitation frequency is close to [[f_mn]] and the force overlaps with the mode shape.

**Contrast mini-example**

A shaker operating near the fundamental frequency mainly excites the fundamental pattern. A mode at a much higher frequency remains weak unless the shaker frequency is also moved near that mode and placed where the mode has motion.

## Quick self-control rule

Before accepting a calculation of modes in plates or membranes, verify five points: the system is classified as plate or membrane; boundary conditions match the formula; [[rho_s]] or [[rho_mem]] has the correct surface-density meaning; the indices m and n are read as spatial half-periods; and the computed [[f_mn]] is interpreted together with its nodal pattern, not as an isolated number.

`;export{e as default};
