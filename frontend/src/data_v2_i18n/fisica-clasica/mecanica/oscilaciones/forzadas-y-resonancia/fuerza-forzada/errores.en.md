## Conceptual errors

### Error 1: assuming steady response uses the natural frequency

#### Why it seems correct
The oscillator has its own frequency, known from free oscillations.
#### Why it is incorrect
In forced steady state, the time frequency of [[x]] is [[omega_f]].
#### Detection signal
The response is written with a frequency not present in the applied force.
#### Conceptual correction
Separate natural frequency, external excitation, and resulting amplitude.
#### Mini-example
An engine rotating at 8 rad/s imposes that frequency even if the support has another natural frequency.

### Error 2: ignoring phase lag

#### Why it seems correct
Amplitude [[X]] appears to describe the whole vibration.
#### Why it is incorrect
[[delta]] tells when the response occurs relative to the force.
#### Detection signal
[[X]] is computed but [[x]] cannot be drawn correctly in time.
#### Conceptual correction
Compute amplitude and phase before writing the time signal.
#### Mini-example
Two responses with the same [[X]] may be delayed differently.

## Model errors

### Error 3: using the model during the initial transient

#### Why it seems correct
The force is already applied from the beginning.
#### Why it is incorrect
The formula for [[X]] describes the permanent part, not the sum with initial free motion.
#### Detection signal
Initial data do not fit the steady signal.
#### Conceptual correction
Wait until the transient decays or solve the complete response.
#### Mini-example
A newly started system may have a free oscillation superposed.

### Error 4: applying linearity at large amplitudes

#### Why it seems correct
The formula still returns a number.
#### Why it is incorrect
If [[X]] activates stops or changes [[k]], the linear model fails.
#### Detection signal
The measured response contains harmonics or saturation.
#### Conceptual correction
Use a nonlinear model or limit excitation amplitude.
#### Mini-example
A mount hitting a stop no longer behaves as a linear mass-spring system.

## Mathematical errors

### Error 5: losing the inertial term

#### Why it seems correct
At low frequency, the term involving [[m]] may look small.
#### Why it is incorrect
At high frequency, inertia dominates dynamic opposition.
#### Detection signal
The computed amplitude does not fall when [[omega_f]] becomes very large.
#### Conceptual correction
Always keep the elastic-minus-inertial combination.
#### Mini-example
At high [[omega_f]], omitting [[m]] overestimates [[X]].

### Error 6: using the wrong phase quadrant

#### Why it seems correct
The calculator returns a principal arctangent.
#### Why it is incorrect
The sign of the denominator changes the physical quadrant of [[delta]].
#### Detection signal
The response appears advanced when it should lag.
#### Conceptual correction
Interpret [[delta]] with the signs of the dynamic terms.
#### Mini-example
Above the sensitive region, phase is not read as at low frequency.

## Interpretation errors

### Error 7: confusing forced response with resonance

#### Why it seems correct
Both topics use response versus frequency.
#### Why it is incorrect
This leaf computes response for a given frequency; resonance searches for the maximum.
#### Detection signal
"Resonance" is concluded without sweeping frequencies or comparing maxima.
#### Conceptual correction
First solve the general forced response, then study the maximum if requested.
#### Mini-example
A large response at 8 rad/s does not by itself prove the resonant maximum.

## Quick self-control rule

Check that [[omega_f]] is the imposed frequency, [[X]] has length units, [[delta]] is interpreted with the correct quadrant, [[x]] uses the steady response, and the initial transient does not dominate the data.
