# Common Errors in the Harmonic Oscillator

## Conceptual errors

### Error 1 : believing larger amplitude always changes the period

**Why it seems correct**: a larger oscillation travels farther, so it seems it should take longer.

**Why it is incorrect**: in the linear harmonic model, [[Tper]] depends on [[omega]], and [[omega]] depends on [[k]] and [[m]], not on [[A]].

**Detection signal**: the period is changed when amplitude is doubled while mass and stiffness remain fixed.

**Conceptual correction**: separate natural rhythm from amplitude energy.

**Contrast mini-example**: two oscillations with different [[A]] may share [[Tper]] if they have the same [[m]] and [[k]].

### Error 2 : confusing angular frequency with frequency in hertz

**Why it seems correct**: both describe rhythm and are used in oscillations.

**Why it is incorrect**: [[omega]] is measured in radians per second; cycles per second require conversion.

**Detection signal**: [[omega]] is interpreted as the number of oscillations per second.

**Conceptual correction**: always state whether you mean angular or ordinary frequency.

**Contrast mini-example**: a high [[omega]] is not the same numerical number of cycles per second.

## Model errors

### Error 3 : applying the ideal model under strong damping

**Why it seems correct**: the system still oscillates for some time and looks harmonic.

**Why it is incorrect**: with appreciable dissipation, [[E]] is not constant and amplitude changes over time.

**Detection signal**: successive maxima decrease clearly.

**Conceptual correction**: use a damped model if energy loss per cycle matters.

**Contrast mini-example**: a low-friction mass may be approximated as ideal; a viscous damper may not.

### Error 4 : using constant stiffness outside the linear range

**Why it seems correct**: many springs are labeled with a stiffness constant.

**Why it is incorrect**: near elastic limits or with nonlinear geometry, effective [[k]] changes with displacement.

**Detection signal**: measured period depends on amplitude.

**Conceptual correction**: restrict the model to small oscillations or use a non-quadratic potential.

**Contrast mini-example**: a small vibration may be harmonic; a large deformation may not.

## Mathematical errors

### Error 5 : inverting mass and stiffness

**Why it seems correct**: both appear together in the frequency relation.

**Why it is incorrect**: larger [[k]] increases [[omega]], while larger [[m]] reduces it.

**Detection signal**: the result predicts that a heavier mass oscillates faster on the same spring.

**Conceptual correction**: check the trend before substitution.

**Contrast mini-example**: doubling [[m]] slows the oscillator; doubling [[k]] speeds it up.

### Error 6 : forgetting the square of amplitude in energy

**Why it seems correct**: energy is sometimes expected to grow proportionally with displacement.

**Why it is incorrect**: maximum elastic energy is quadratic in [[A]].

**Detection signal**: doubling [[A]] doubles [[E]] instead of quadrupling it.

**Conceptual correction**: read energy as area under a linear restoring force.

**Contrast mini-example**: twice the amplitude stores four times the energy for the same [[k]].

## Interpretation errors

### Error 7 : reporting only a number without physical diagnosis

**Why it seems correct**: the exercise often asks for a frequency or period value.

**Why it is incorrect**: the value should say whether the system is fast, slow, stiff, massive, or energetic.

**Detection signal**: no parameter is identified as controlling the result.

**Conceptual correction**: close each calculation with a causal reading.

**Contrast mini-example**: a large period may come from high mass or low stiffness.

## Quick self-control rule

Before closing, check four things: [[m]] and [[k]] are positive, [[omega]] increases with stiffness and decreases with mass, [[Tper]] is positive, and [[E]] grows with the square of [[A]]. If any trend fails, the result does not represent an ideal harmonic oscillator.
