const e=`## Conceptual errors

### Error 1: assuming that damped means non-oscillatory

#### Why it seems correct
The word damped suggests immediate disappearance of motion.
#### Why it is incorrect
In the underdamped regime, dissipation reduces amplitude but does not remove crossings.
#### Detection signal
The curve [[x]] changes sign several times while its peaks decrease.
#### Conceptual correction
Separate underdamped, critical, and overdamped regimes.
#### Mini-example
A string vibrates several times after being plucked, although each peak is smaller.

### Error 2: confusing [[gamma]] with [[omega_d]]

#### Why it seems correct
Both quantities have inverse-time dimension.
#### Why it is incorrect
[[gamma]] measures decay, while [[omega_d]] measures the visible oscillatory rhythm.
#### Detection signal
A period is computed from [[gamma]].
#### Conceptual correction
Use [[omega_d]] for cycles and [[gamma]] for the envelope.
#### Mini-example
Doubling [[gamma]] makes amplitude decay faster, but it does not mean doubling frequency.

## Model errors

### Error 3: applying the leaf without checking [[gamma]] < [[omega0]]

#### Why it seems correct
The cosine solution looks familiar and easy to use.
#### Why it is incorrect
It only belongs to complex roots, not to critical or overdamped regimes.
#### Detection signal
The square root of [[omega0]] squared minus [[gamma]] squared is not positive.
#### Conceptual correction
Classify before computing [[omega_d]] or [[x]].
#### Mini-example
If [[gamma]] exceeds [[omega0]], the cosine no longer describes free return.

### Error 4: ignoring external forcing

#### Why it seems correct
A forced signal can also oscillate.
#### Why it is incorrect
This leaf describes free response; an external force may maintain amplitude.
#### Detection signal
The maxima do not decrease even though dissipation exists.
#### Conceptual correction
Use the forced oscillator model if periodic energy input is present.
#### Mini-example
A loudspeaker vibrates while receiving a signal; it is not only free decay.

## Mathematical errors

### Error 5: using [[omega0]] as if it were [[omega_d]]

#### Why it seems correct
With weak damping, both quantities may be close.
#### Why it is incorrect
The visible frequency is reduced by dissipation.
#### Detection signal
The computed period does not match observed crossings.
#### Conceptual correction
Compute [[omega_d]] before using the time solution.
#### Mini-example
With [[omega0]] = 10 and [[gamma]] = 6, the difference is no longer negligible.

### Error 6: forgetting the negative sign in the envelope

#### Why it seems correct
The exponential is often copied from memory.
#### Why it is incorrect
Without the negative sign, amplitude grows in a free dissipative system.
#### Detection signal
[[x_env]] increases with [[t]].
#### Conceptual correction
Check that the factor represents decay.
#### Mini-example
An envelope growing from 1 cm to 3 cm without external force contradicts the model.

## Interpretation errors

### Error 7: treating [[x_env]] as the real position

#### Why it seems correct
The envelope has the same unit as [[x]].
#### Why it is incorrect
[[x_env]] is a bound; [[x]] oscillates inside it.
#### Detection signal
The sign change of the motion disappears.
#### Conceptual correction
Draw the main curve and both envelopes.
#### Mini-example
When the envelope is 2 mm, the position may be 0 mm or -1 mm.

## Quick self-control rule

Before closing a solution, verify that [[gamma]] < [[omega0]], [[omega_d]] is real and positive, [[x_env]] decreases, [[x]] remains inside the envelope, and time units are coherent.
`;export{e as default};
