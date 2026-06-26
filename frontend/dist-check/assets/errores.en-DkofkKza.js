const e=`# Errores frecuentes: Center of Mass in Extended Bodies\r
\r
## Conceptual errors\r
\r
### Error 1: Confusing cause and effect
\r
Why it seems correct: [[xcm]] is often presented as a compact ratio, so students may think position appears directly from arithmetic.\r
\r
Why it is wrong: [[xcm]] only makes sense after defining how [[dm]] is distributed over [[x]] or [[r]]. Distribution is the cause, center position is the effect.\r
\r
Detection signal: explanation contains numbers but never mentions [[dm]], [[lambda]], [[sigma]], or [[rho]].\r
\r
Conceptual correction: always state the causal chain explicitly: geometry plus density -> [[dm]] -> [[I_x]] and [[M]] -> [[xcm]] or [[R_cm]].\r
\r
Mini-example: two rods with the same [[M]] but different [[lambda]] do not share the same [[xcm]].\r
\r
### Error 2: Applying the formula mechanically without validating context
\r
Why it seems correct: reusing one memorized template is fast in routine exercises.\r
\r
Why it is wrong: each mass relation corresponds to a different geometry; using [[rho]][[V]] in a linear setup with [[lambda]] and [[L]] breaks the model.\r
\r
Detection signal: units drift across steps and no longer match [[M]] in kilograms.\r
\r
Conceptual correction: pick the geometric model first, then choose the constitutive relation.\r
\r
Mini-example: a thin sheet requires [[sigma]][[A]], not [[rho]][[V]].\r
\r
### Error 3: Confusing similar quantities
\r
\r
Why it seems correct: [[M]], [[I_x]], [[xcm]], and [[R_cm]] are always written together.\r
\r
Why it is wrong: they represent different physical layers: total amount, first moment, scalar coordinate, and vector position.\r
\r
Detection signal: [[I_x]] is interpreted as a position or [[R_cm]] is reported with mass units.\r
\r
Conceptual correction: verify units and physical meaning at each step, not only at the end.\r
\r
Mini-example: [[I_x]] in kg m divided by [[M]] in kg yields [[xcm]] in m.\r
\r
\r
\r
## Model errors\r
\r
### Error 4: Missing when the simplified model fails
\r
Why it seems correct: clean classroom cases make the simplified model look universally valid.\r
\r
Why it is wrong: real assemblies may include cavities, moving parts, or strong gradients that violate assumptions.\r
\r
Detection signal: measured [[R_cm]] shifts across repeated tests with nominally identical [[M]].\r
\r
Conceptual correction: switch to a composite model when systematic discrepancy appears.\r
\r
Mini-example: a drone with a loose battery changes [[xcm]] between tests.\r
\r
### Error 5: Ignoring known model limits
\r
Why it seems correct: one successful use encourages overconfidence.\r
\r
Why it is wrong: extrapolation outside validated conditions destroys causal reliability.\r
\r
Detection signal: ad hoc correction factors are added repeatedly just to force agreement.\r
\r
Conceptual correction: declare geometry and continuity assumptions before solving.\r
\r
Mini-example: using a sheet model for a thick body distorts [[R_cm]].\r
\r
## Mathematical errors\r
\r
### Error 6: Careless algebraic rearrangements
\r
Why it seems correct: repeated symbolic manipulation feels automatic.\r
\r
Why it is wrong: one sign or factor slip can move the predicted center outside the real body.\r
\r
Detection signal: computed [[xcm]] falls outside the geometric interval for [[x]].\r
\r
Conceptual correction: keep symbolic structure until the end, then run range checks.\r
\r
Mini-example: for a rod from 0 to [[L]], obtaining [[xcm]] > [[L]] flags algebraic or modeling error.\r
\r
### Error 7: Forgetting constants or units
\r
Why it seems correct: unit checks are often postponed in long derivations.\r
\r
Why it is wrong: wrong units in [[lambda]], [[sigma]], or [[rho]] contaminate [[M]] and [[R_cm]] globally.\r
\r
Detection signal: [[M]] is not in kg or [[xcm]] is not in meters.\r
\r
Conceptual correction: check units in each intermediate block: [[dm]], [[I_x]], [[M]], final ratio.\r
\r
Mini-example: feeding [[lambda]] in g/cm without conversion produces large bias in [[xcm]].\r
\r
## Interpretation errors\r
\r
### Error 8: Reading more precision than the model allows
\r
Why it seems correct: extra decimals look like scientific rigor.\r
\r
Why it is wrong: dominant uncertainty usually comes from model assumptions, not numerical rounding.\r
\r
Detection signal: [[xcm]] is reported with excessive decimals while input measurements are coarse.\r
\r
Conceptual correction: match significant figures to actual model and measurement uncertainty.\r
\r
Mini-example: reporting [[xcm]] = 1.11 m is more honest than 1.11137 m if [[L]] is measured to 1 cm.\r
\r
### Error 9: Skipping the physical interpretation of the result
\r
Why it seems correct: producing a final number feels like completion.\r
\r
Why it is wrong: without interpretation, the number cannot support design or diagnosis decisions.\r
\r
Detection signal: the report ends after substitution with no causal statement about [[R_cm]] shift.\r
\r
Conceptual correction: translate each result into an observable consequence and an actionable decision.\r
\r
Mini-example: "[[xcm]] shifts right, so move battery mass toward center".\r
\r
## Quick self-control rule\r
\r
Use this checklist after solving:\r
\r
1. Dimensional consistency: does the final unit match the expected physical quantity?\r
2. Range check: is [[xcm]] inside the geometric domain?\r
3. Sign and direction: does the shift agree with density bias?\r
4. Validity check: are assumptions about [[lambda]], [[sigma]], or [[rho]] justified?\r
5. Interpretation check: can you explain what the value implies physically?\r
\r
If any item fails, revise model assumptions before trusting the result.\r
`;export{e as default};
