## Conceptual errors


### Error 1: Thinking the coil opposes current

**Why it seems correct**

The wrong analogy comes from comparing the coil with a resistor. Since both elements may reduce current in a real circuit, [[inductancia_propia]] seems to act against [[corriente_de_la_bobina]].

**Why it is incorrect**

Self-induction opposes current changes, not steady current. In an ideal coil, [[fem_autoinducida]] disappears when [[corriente_de_la_bobina]] stops varying.

**Detection signal**

The student predicts self-induced emf even though current is constant and no time change exists.

**Conceptual correction**

Always ask whether there is [[cambio_de_corriente]] during [[intervalo_de_tiempo]]. Without current change there is no ideal self-induced emf.

**Contrast mini-example**

A coil connected to stable direct current keeps field and energy, but does not generate new self-induced emf. The transient occurred at connection or disconnection.

## Model errors

**Mini-example of contrast**

Check 1: In Self-Inductance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Using constant inductance in saturation

**Why it seems correct**

The student sees [[inductancia_propia]] as a fixed catalog value and applies it to any current. This is excessive generalization of a linear model.

**Why it is incorrect**

With a ferromagnetic core, flux linkage may stop growing proportionally with [[corriente_de_la_bobina]]. Then effective [[inductancia_propia]] changes and the prediction of [[fem_autoinducida]] is distorted.

**Detection signal**

The coil shows heating, hum, nonlinear curve, or much larger current than expected.

**Conceptual correction**

Use constant [[inductancia_propia]] only over the linear segment. If the problem mentions saturation, use an experimental curve or local inductance.

**Contrast mini-example**

A power inductor may behave well at low current and lose inductance when saturated. Using the initial value exaggerates its ability to limit change.

## Mathematical errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Forgetting to convert time

**Why it seems correct**

The time datum is often given in ms or microseconds, and the student copies it without conversion because the formula seems simple.

**Why it is incorrect**

Average rate of change uses seconds. A conversion error may change [[fem_autoinducida]] by factors of one thousand or one million.

**Detection signal**

The voltage result is absurdly small for a fast cut, or absurdly large for a slow change.

**Conceptual correction**

Before substituting, express [[intervalo_de_tiempo]] in seconds and keep the sign of [[cambio_de_corriente]].

**Contrast mini-example**

Changing 2 A in milliseconds is not the same as changing 2 A in seconds. The coil responds to rate, not only to change size.

## Interpretation errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Thinking energy disappears when the circuit opens

**Why it seems correct**

When the switch opens, visible current falls and the system seems to simply turn off.

**Why it is incorrect**

Energy [[energia_magnetica_almacenada]] stored in the field must be transferred or dissipated. If there is no safe path, voltage rises and a spark may appear.

**Detection signal**

The student does not mention diode, discharge resistor, arc, or overvoltage when analyzing a current-carrying coil.

**Conceptual correction**

Every opening analysis must include the destination of [[energia_magnetica_almacenada]].

**Contrast mini-example**

A small relay can produce a visible spike when disconnected. The spike does not come from a hidden battery, but from released magnetic energy.

## Quick self-control rule

Check three things before closing: whether [[corriente_de_la_bobina]] changes, how large [[cambio_de_corriente]] is, and how long [[intervalo_de_tiempo]] lasts. If one is missing, self-induced emf is not well defined.

Then ask where [[energia_magnetica_almacenada]] goes when the circuit changes. If there is no discharge path, expect overvoltage or an arc.

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.