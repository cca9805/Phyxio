const e=`## Conceptual errors

### Error 1: believing Lenz opposes the field

**Why it seems correct**

The wrong analogy comes from imagining that the circuit "rejects" any magnetic field crossing it.

**Why it is incorrect**

Lenz's law opposes change of [[Phi_B]], not the value of [[Phi_B]] merely existing. Constant flux requires no average induced emf.

**Detection signal**

The student predicts induced current with magnet and loop stationary in the same configuration.

**Conceptual correction**

Always ask whether [[Phi_B]] increases, decreases, or remains constant. Only change activates the rule.

**Contrast mini-example**

A stationary magnet may maintain flux. When it approaches, flux changes and the loop responds with polarity opposed to the change.

## Model errors

### Error 2: applying signs without defining a normal

**Why it seems correct**

The drawing seems to indicate an obvious field direction, and the student assigns signs without declaring surface or normal.

**Why it is incorrect**

The sign of [[DeltaPhi_B]] depends on the normal. Without that convention, the sign of [[epsilon_ind]] is also ambiguous.

**Detection signal**

The solution changes sign between steps or does not explain what was taken as positive.

**Conceptual correction**

Choose a normal, keep it, and then translate induced sign into physical current or polarity.

**Contrast mini-example**

The same loop may be described with the opposite normal. Written signs change, but physical current does not if the convention is coherent.

## Mathematical errors

### Error 3: removing the sign too early

**Why it seems correct**

Many exercises ask only for numerical emf, and the student uses magnitudes from the beginning.

**Why it is incorrect**

Magnitude does not contain Lenz information. If the sign of [[r_Phi]] is removed, polarity of [[epsilon_ind]] cannot be decided.

**Detection signal**

The final result has volts, but does not say whether emf opposes a flux increase or decrease.

**Conceptual correction**

Preserve signs until interpretation is complete. If only magnitude is requested, take the positive value at the end.

**Contrast mini-example**

Flux increase and flux decrease with equal rate give the same magnitude, but opposite polarities.

## Interpretation errors

### Error 4: thinking opposition always cancels the change

**Why it seems correct**

The word "oppose" sounds like annulment. The student interprets Lenz as complete cancellation of the phenomenon.

**Why it is incorrect**

The induced response depends on resistance, coupling, and available energy. It may oppose weakly or strongly, but it does not guarantee total cancellation.

**Detection signal**

The explanation states that flux cannot change because induced current prevents it.

**Conceptual correction**

Lenz fixes tendency direction. The real magnitude of response requires the rest of the physical model.

**Contrast mini-example**

An open loop may have induced emf and almost no current. Mechanical opposition will be small even though Lenz direction is defined.

## Quick self-control rule

Before deciding induced direction, write three statements: which normal you chose, whether flux increases or decreases, and what response opposes that change. If you cannot write them, Lenz has not yet been applied.

Then separate magnitude and direction. [[N]] and [[Deltat]] affect the scale of [[epsilon_ind]], but polarity comes from the sign of [[DeltaPhi_B]] or [[r_Phi]].
`;export{e as default};
