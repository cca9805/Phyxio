const e=`## Conceptual errors

### Error 1: Thinking the coil opposes current

**Why it seems correct**

The wrong analogy comes from comparing the coil with a resistor. Since both elements may reduce current in a real circuit, [[L]] seems to act against [[I]].

**Why it is incorrect**

Self-induction opposes current changes, not steady current. In an ideal coil, [[epsilon_L]] disappears when [[I]] stops varying.

**Detection signal**

The student predicts self-induced emf even though current is constant and no time change exists.

**Conceptual correction**

Always ask whether there is [[DeltaI]] during [[Deltat]]. Without current change there is no ideal self-induced emf.

**Contrast mini-example**

A coil connected to stable direct current keeps field and energy, but does not generate new self-induced emf. The transient occurred at connection or disconnection.

## Model errors

### Error 2: Using constant inductance in saturation

**Why it seems correct**

The student sees [[L]] as a fixed catalog value and applies it to any current. This is excessive generalization of a linear model.

**Why it is incorrect**

With a ferromagnetic core, flux linkage may stop growing proportionally with [[I]]. Then effective [[L]] changes and the prediction of [[epsilon_L]] is distorted.

**Detection signal**

The coil shows heating, hum, nonlinear curve, or much larger current than expected.

**Conceptual correction**

Use constant [[L]] only over the linear segment. If the problem mentions saturation, use an experimental curve or local inductance.

**Contrast mini-example**

A power inductor may behave well at low current and lose inductance when saturated. Using the initial value exaggerates its ability to limit change.

## Mathematical errors

### Error 3: Forgetting to convert time

**Why it seems correct**

The time datum is often given in ms or microseconds, and the student copies it without conversion because the formula seems simple.

**Why it is incorrect**

Average rate of change uses seconds. A conversion error may change [[epsilon_L]] by factors of one thousand or one million.

**Detection signal**

The voltage result is absurdly small for a fast cut, or absurdly large for a slow change.

**Conceptual correction**

Before substituting, express [[Deltat]] in seconds and keep the sign of [[DeltaI]].

**Contrast mini-example**

Changing 2 A in milliseconds is not the same as changing 2 A in seconds. The coil responds to rate, not only to change size.

## Interpretation errors

### Error 4: Thinking energy disappears when the circuit opens

**Why it seems correct**

When the switch opens, visible current falls and the system seems to simply turn off.

**Why it is incorrect**

Energy [[U_B]] stored in the field must be transferred or dissipated. If there is no safe path, voltage rises and a spark may appear.

**Detection signal**

The student does not mention diode, discharge resistor, arc, or overvoltage when analyzing a current-carrying coil.

**Conceptual correction**

Every opening analysis must include the destination of [[U_B]].

**Contrast mini-example**

A small relay can produce a visible spike when disconnected. The spike does not come from a hidden battery, but from released magnetic energy.

## Quick self-control rule

Check three things before closing: whether [[I]] changes, how large [[DeltaI]] is, and how long [[Deltat]] lasts. If one is missing, self-induced emf is not well defined.

Then ask where [[U_B]] goes when the circuit changes. If there is no discharge path, expect overvoltage or an arc.
`;export{e as default};
