## Conceptual errors

### Error 1: treating any large amplitude as resonance

#### Why it seems correct
A large amplitude [[X]] is striking and is often immediately associated with resonance.

#### Why it is incorrect
[[X]] can be large because [[F0]] is large, [[k]] is small, or the measurement was taken during a transient. Resonance requires comparing the curve of [[X]] as [[omega_f]] is varied.

#### Detection signal
The reasoning uses one amplitude datum and does not mention a frequency sweep or [[omega_r]].

#### Conceptual correction
Find the maximum of the curve and compare operating frequency with the peak region.

#### Mini-example
Doubling [[F0]] raises [[X]] across the sweep, but does not by itself move the resonance peak.

### Error 2: always equating [[omega_r]] with [[omega0]]

#### Why it seems correct
In many introductory exercises damping is small and both frequencies are almost equal.

#### Why it is incorrect
With appreciable damping [[b]], the displacement maximum shifts relative to [[omega0]]. Ignoring that difference can lead to operating near a dangerous zone.

#### Detection signal
The peak calculation does not use [[b]].

#### Conceptual correction
Distinguish the natural scale [[omega0]] from the actual maximum-response frequency [[omega_r]].

#### Mini-example
A heavily damped support may have a clear natural frequency and still show no narrow peak.

## Model errors

### Error 3: measuring during the transient

#### Why it seems correct
Large and rapidly changing amplitudes often appear when the system starts.

#### Why it is incorrect
Resonance is defined in steady state. If the free response has not decayed, the measurement mixes start-up behavior with forced response.

#### Detection signal
Amplitude changes from cycle to cycle while [[F0]] and [[omega_f]] remain constant.

#### Conceptual correction
Wait several cycles before measuring [[X]] and repeat the sweep under controlled conditions.

#### Mini-example
An engine can vibrate strongly during start-up and later stabilize far from the resonance peak.

### Error 4: using the linear model outside its range

#### Why it seems correct
Linear formulas are convenient and predict a smooth curve.

#### Why it is incorrect
If [[X]] activates looseness, stops, or stiffness changes, peak position may depend on amplitude. Then [[omega_r]] is no longer constant.

#### Detection signal
The peak shifts when [[F0]] changes or hysteresis appears between upward and downward sweeps.

#### Conceptual correction
Use a nonlinear model or restrict the analysis to the range where [[m]], [[k]], and [[b]] are constant.

#### Mini-example
A suspension with stops may look safe at low force and show another peak at high force.

## Mathematical errors

### Error 5: omitting damping in amplitude

#### Why it seems correct
Near [[omega0]], the difference between inertia and elasticity visually dominates the expression.

#### Why it is incorrect
The term containing [[b]] prevents divergence and determines the actual peak height. Without it, the response is exaggerated.

#### Detection signal
The result predicts enormous amplitudes although the system has appreciable dissipation.

#### Conceptual correction
Keep the dissipative term when computing [[X]] and interpreting [[Q]].

#### Mini-example
Two systems with the same [[m]] and [[k]] can have very different peaks if [[b]] changes.

## Interpretation errors

### Error 6: assuming high [[Q]] is always good

#### Why it seems correct
A selective peak can look precise and useful.

#### Why it is incorrect
In sensors or instruments it may be useful, but in structures a high [[Q]] can increase risk by concentrating response in a narrow band.

#### Detection signal
The solution praises a high peak without discussing tolerance or safety.

#### Conceptual correction
Interpret [[Q]] according to the objective: amplification, filtering, measurement, or vibration avoidance.

#### Mini-example
A bridge does not seek high [[Q]] under periodic excitation; an acoustic resonator may.

## Quick self-control rule

Before closing a resonance exercise, check four points: the response is steady, all frequencies are angular frequencies, [[omega_f]] has been compared with [[omega_r]], and the role of [[b]] appears in peak height or width. If one point is missing, the physical conclusion is incomplete.
