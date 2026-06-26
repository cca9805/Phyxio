## Conceptual errors


### Error 1: Confusing B with H

**Why it seems correct**

The wrong analogy appears because both fields are drawn with arrows and often have the same direction in simple problems. The student overgeneralizes that visual coincidence and treats [[campo_magnetico_total]] and [[intensidad_magnetica]] as equivalent names.

**Why it is incorrect**

[[intensidad_magnetica]] describes the excitation associated with free currents, while [[campo_magnetico_total]] includes the material response. In a magnetic core, ignoring [[magnetizacion]] removes exactly the phenomenon this leaf is meant to explain.

**Detection signal**

The student substitutes total-field data into a relation that needs applied excitation, or interprets a material slope as if it belonged only to the coil.

**Conceptual correction**

First separate source, material, and result. Use [[intensidad_magnetica]] for excitation, [[magnetizacion]] for internal response, and [[campo_magnetico_total]] for total field.

**Contrast mini-example**

Two identical coils may have the same [[intensidad_magnetica]] and different [[campo_magnetico_total]] if one contains air and the other ferrite. The difference comes from material response, not from free current.

## Model errors

**Mini-example of contrast**

Check 1: In Magnetic Materials, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Using constant [[mu_r]] in saturation

**Why it seems correct**

The cognitive mechanism is excessive extrapolation: if a table gives [[mu_r]], it feels natural to use it at any operating point without checking the real curve.

**Why it is incorrect**

In ferromagnets, [[mu_r]] is often an effective slope. Near saturation, increasing [[intensidad_magnetica]] no longer produces the same proportional increase in [[campo_magnetico_total]].

**Detection signal**

The result predicts very high fields in an ordinary core, or the expected graph remains straight while experimental data flatten.

**Conceptual correction**

Treat [[mu_r]] as a property of the stated linear segment. If the problem mentions saturation or hysteresis, switch to an experimental curve.

**Contrast mini-example**

A core may concentrate much field at first and gain almost no additional field later. Using the same slope in both segments exaggerates the design.

## Mathematical errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Treating [[chi_m]] as always positive

**Why it seems correct**

The intuitive association between magnetism and attraction makes the material response seem as if it must always follow the applied field.

**Why it is incorrect**

[[chi_m]] may be negative in diamagnetic materials. That means weak opposition of [[magnetizacion]] relative to [[intensidad_magnetica]], not absence of response.

**Detection signal**

The student rejects negative susceptibility values or changes their sign so that the material "looks magnetic".

**Conceptual correction**

Keep the sign of [[chi_m]] and read it as the orientation of the response. The magnitude gives the relative strength.

**Contrast mini-example**

A diamagnetic material may slightly alter the field even though it is not attracted like a ferromagnet. Forcing positive susceptibility changes the phenomenon.

## Interpretation errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Believing higher permeability always improves the device

**Why it seems correct**

The memorized rule "higher permeability concentrates more field" works in introductory cases and becomes an unconditional generalization.

**Why it is incorrect**

The real device also depends on geometry, air gaps, saturation, frequency, and losses. A material with large [[mu_r]] may be a poor choice if it heats or saturates early.

**Detection signal**

The material choice is justified only with [[mu_r]], without mentioning the [[intensidad_magnetica]] range, [[campo_magnetico_total]] limit, or operating conditions.

**Conceptual correction**

Compare permeability inside the operating range, not as an isolated value. Then check saturation and losses.

**Contrast mini-example**

A core with large initial response may fail in a power supply if it enters saturation early. A more moderate material may preserve linearity better.

## Quick self-control rule

Before closing a problem, ask three questions: what the source imposes, what the material contributes, and what total field is obtained. If the same quantity answers all three, you have probably confused [[intensidad_magnetica]], [[magnetizacion]], and [[campo_magnetico_total]].

Then check whether [[mu_r]] and [[chi_m]] are being used inside a linear segment. If saturation, remanence, a closed curve, or heating appears, the response should not be closed with a single constant.

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.