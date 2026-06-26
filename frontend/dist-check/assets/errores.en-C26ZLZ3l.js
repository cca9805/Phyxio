const e=`## Conceptual errors

### Error 1: Believing that the generator creates electrical energy

**Why it seems correct**

The everyday analogy with a battery makes the generator look like an autonomous source. The student sees terminal voltage and overgeneralizes the idea of “producing electricity”.

**Why it is incorrect**

Energy comes from [[P_mec]]. Induction converts mechanical work into charge separation and then into [[P_elec]] if a load is connected.

**Detection signal**

The reasoning ignores the resisting torque that appears when a load is connected.

**Conceptual correction**

A generator is an energy converter: without sustained mechanical input, there is no sustained electrical output.

**Mini contrast example**

A bicycle dynamo shines brighter when the rider supplies extra effort. If no mechanical conversion were involved, the lamp would not require harder pedalling.

## Model errors

### Error 2: Using the ideal model for any load

**Why it seems correct**

The expression for [[epsilon_0]] appears to give the directly available voltage. This is a quantity confusion between internal emf and useful output.

**Why it is incorrect**

The load modifies current, internal losses, and terminal voltage. The ideal model does not include heating or internal drop.

**Detection signal**

The calculation predicts high voltage, but the real setup collapses when a low resistance is connected.

**Conceptual correction**

Use the ideal model to estimate emf; switch to the extended model for loaded power.

**Mini contrast example**

A small hand generator may show tens of volts with no load and still fail to feed a demanding load for long.

## Mathematical errors

### Error 3: Confusing flux change with maximum flux

**Why it seems correct**

The student remembers that flux appears in Faraday's law and substitutes any [[Phi_B]] value without checking the interval. This is mechanical symbol substitution.

**Why it is incorrect**

Mean emf depends on [[DeltaPhi_B]] during [[Delta_t]], not on an isolated maximum value. Without flux change, mean emf vanishes.

**Detection signal**

The result does not change when the duration of the process becomes shorter or longer.

**Conceptual correction**

Always identify initial state, final state, and interval before computing [[epsilon]].

**Mini contrast example**

Keeping a coil still in a strong field can give large flux, but not sustained emf from changing flux.

## Interpretation errors

### Error 4: Treating sign as decoration

**Why it seems correct**

Many exercises ask only for magnitudes, creating the habit of discarding polarity. This is a valid simplification extended too far.

**Why it is incorrect**

The sign indicates induced polarity and Lenz opposition. Without sign, current direction and mechanical reaction cannot be interpreted.

**Detection signal**

The student obtains a value for [[epsilon]] but cannot state which terminal is at higher potential.

**Conceptual correction**

Compute magnitude when peak voltage is requested, but use Lenz's law for polarity and direction when the circuit requires it.

**Mini contrast example**

Reversing the direction of rotation changes instantaneous polarity even when amplitude is unchanged.

## Unit errors

### Error 5: Confusing rms value with emf amplitude

**Why it seems correct**

In the power-grid context, rms values are routinely used. A student arriving at the generators leaf from AC circuits tends to identify [[epsilon_0]] with the rms grid voltage, applying an incorrect scale factor or none at all.

**Why it is incorrect**

[[epsilon_0]] is the **amplitude** of the sinusoidal signal, not the rms value. The rms voltage equals the amplitude divided by the square root of two. Using [[epsilon_0]] directly as if it were the rms voltage overestimates the power delivered to a resistive load by a factor of two.

**Detection signal**

The student computes [[P_elec]] by squaring the amplitude and multiplying by the load conductance without the one-half factor, obtaining twice the correct power.

**Conceptual correction**

Always distinguish amplitude from rms value. If the problem asks for the mean power delivered to a resistive load, use the rms value of [[epsilon]], which is [[epsilon_0]] divided by the square root of two. If only the generated emf amplitude is requested, [[epsilon_0]] is the direct result.

**Mini contrast example**

A generator with [[epsilon_0]] equal to 311 V has an rms value of approximately 220 V. Plugging 311 V directly into the mean-power formula gives twice the correct power. The domestic 220 V grid does not have an amplitude of 220 V but approximately 311 V.

## Quick self-control rule

Before closing a generator problem, check four questions: what changes in [[Phi_B]], over what time it changes, which electrical quantity is requested, and whether the answer is emf or power. Then verify that [[eta]] does not exceed unity and that [[P_elec]] is not greater than [[P_mec]].

`;export{e as default};
