const e=`# Models

## Ideal model

The standard model of thermal expansion of solids treats the coefficient [[alpha]] (and [[beta]] for volumetric expansion) as **material constants** independent of temperature. Under this assumption, the length change [[DeltaL]] and the volume change [[DeltaV]] are strictly linear with [[DeltaT]]: the graphs of [[DeltaL]] vs [[DeltaT]] and [[DeltaV]] vs [[DeltaT]] are straight lines passing through the origin.

The model further assumes that the solid is **free to expand** in all directions without external mechanical constraint, that the material is **isotropic** at the macroscopic scale (same properties in all spatial directions), and that no phase changes occur during the process. Within this framework, the only thermomechanical parameter needed to describe the dimensional behaviour is [[alpha]] of the material.

## Hypotheses

- **[[alpha]] constant with T**: the linear expansion coefficient does not vary over the temperature range considered. This assumption is reasonable for changes of up to 200–300 K in most metals.

- **Small deformations**: the product [[alpha]]·[[DeltaT]] is much smaller than 1, allowing higher-order terms in the volume expansion to be neglected. If this assumption is violated, the quadratic and cubic terms in [[alpha]]·[[DeltaT]] can no longer be ignored.

- **Material isotropy**: the solid has the same [[alpha]] in all spatial directions, allowing a single linear coefficient to be used and [[beta]] ≈ 3·[[alpha]] to be derived geometrically. If this assumption is violated (materials with reduced symmetry), each direction has its own coefficient and [[beta]] is not three times [[alpha]].

- **Free expansion (no mechanical constraint)**: the solid is not bonded or bolted to another structure that prevents its expansion. If this assumption is violated, internal thermal stresses arise and the actual deformation differs from that predicted by the free-expansion model.

- **Absence of phase change**: the heating or cooling process does not cross a phase transition. If a transition is crossed, the expansion ceases to be linear and the formula is no longer valid.

## Quantitative validity domain

The linear model with constant [[alpha]] provides errors below 2% for most metals when [[DeltaT]] < 200 K from ambient temperature. For [[DeltaT]] > 300 K or temperatures exceeding 60% of the material's melting temperature, the error can exceed 5% and it is advisable to use [[alpha]] values averaged over the interval.

The small-deformation assumption requires [[alpha]]·[[DeltaT]] < 0.01 (relative deformation below 1%). For [[alpha]] ≈ 12×10⁻⁶ K⁻¹ (steel), this is satisfied for [[DeltaT]] < 833 K, well within the usual operating range. For materials with larger [[alpha]], such as polymers (100×10⁻⁶ K⁻¹), the assumption fails for [[DeltaT]] > 100 K.

The relation [[beta]] ≈ 3·[[alpha]] is exact to linear order for isotropic solids and has a deviation below 0.1% for metals with [[alpha]]·[[DeltaT]] < 0.001. For anisotropic materials or liquids, [[beta]] must be determined experimentally and independently.

## Model failure signals

- **Calculated [[DeltaL]] negative with positive [[DeltaT]] (without forcing the bar)**: indicates the model does not apply due to a sign inversion of [[DeltaT]] or a data error; physically [[DeltaL]] must have the same sign as [[DeltaT]] for positive [[alpha]].

- **[[alpha]] result outside the range 10⁻⁷ to 10⁻⁴ K⁻¹**: for real solids this range covers materials from fused quartz to some plastics. A value outside this range almost always indicates a unit or data error.

- **Observable curvature in the [[DeltaL]] vs [[DeltaT]] graph**: in the ideal model the relation is strictly linear. If experimental data show curvature, [[alpha]] varies with T in that range and the model must be replaced by an integral of [[alpha]](T)·[[L0]] over [[DeltaT]].

- **Observed [[DeltaV]] significantly different from 3·[[alpha]]·[[V0]]·[[DeltaT]]**: may indicate the material is not isotropic in that range, that a partial phase change is occurring, or that the container used to measure volume also expands significantly.

## Extended or alternative model

When the temperature change is large or high precision is required, [[alpha]] is treated as a function of T (variable-coefficient model). The elongation is then computed via integration of [[alpha]](T) over the temperature interval from initial to final temperature, multiplied by [[L0]]. The function [[alpha]](T) can be represented by a polynomial expression fitted to tabulated data for the material.

When to switch to the extended model: when [[DeltaT]] exceeds 300 K, when the required precision is below 1%, or when working with materials whose [[alpha]] varies markedly with T (such as copper between 100 K and 1000 K, where [[alpha]] varies by more than 30%). Transitioning to this model is also necessary when analysing thermal stresses in materials whose mechanical response is non-linear.

For anisotropic materials, the extended model introduces a **thermal expansion tensor** with distinct coefficients for each crystallographic direction. In composite engineering and functional crystals, this tensor is the standard tool.

## Operational comparison

| Criterion | Ideal model (constant [[alpha]]) | Extended model ([[alpha]](T)) |
|---|---|---|
| Typical precision | < 2% for [[DeltaT]] < 200 K | < 0.5% for any range |
| Calculation complexity | Single multiplication | Numerical integration or tables |
| Required data | One [[alpha]] value | [[alpha]](T) table for the material |
| Main application | Basic design and education | Metrology, precision engineering |
| Validity for anisotropics | Isotropic materials only | Yes, with expansion tensor |
`;export{e as default};
