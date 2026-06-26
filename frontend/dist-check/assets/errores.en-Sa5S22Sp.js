const e=`## Conceptual errors

### Error 1: assuming that overdamped means optimal

#### Why it seems correct
Because the system does not rebound, increasing [[gamma]] appears to improve behavior.
#### Why it is incorrect
Excess damping can move [[r1]] close to zero and produce a slow tail in [[x]].
#### Detection signal
The curve does not oscillate, but it takes too long to enter the required tolerance.
#### Conceptual correction
Separate absence of oscillation from speed. The physical objective decides whether the regime is useful.
#### Mini-example
A door closer avoids impact, but takes eight seconds to complete the final segment.

### Error 2: interpreting [[r1]] and [[r2]] as frequencies

#### Why it seems correct
The roots have inverse-time units, like an angular frequency.
#### Why it is incorrect
In this regime they are real and describe decay, not cycles.
#### Detection signal
The student tries to compute a period from [[r1]].
#### Conceptual correction
Read [[r1]] and [[r2]] as negative exponential rates.
#### Mini-example
If [[r1]] = -2 s^-1, there is no 0.5 s period; there is a decay scale.

## Model errors

### Error 3: applying the leaf without checking [[gamma]] > [[omega0]]

#### Why it seems correct
The solution looks like a general formula for any damping value.
#### Why it is incorrect
It only belongs to the case with two negative real roots.
#### Detection signal
A square root of a negative quantity appears, or the observed curve oscillates.
#### Conceptual correction
Always classify the regime before computing [[x]].
#### Mini-example
With [[gamma]] = 8 s^-1 and [[omega0]] = 10 s^-1, using this leaf would be a model change.

### Error 4: ignoring nonlinear friction

#### Why it seems correct
Many friction mechanisms reduce motion and look equivalent.
#### Why it is incorrect
Dry friction, stops, or variable dissipation do not necessarily produce two exponentials.
#### Detection signal
The curve sticks, has straight segments, or changes shape when the test is repeated.
#### Conceptual correction
Use the viscous model only within a window where parameters are constant.
#### Mini-example
A mechanism with static friction stops before following the exponential tail.

## Mathematical errors

### Error 5: changing the sign of the fast root

#### Why it seems correct
The two roots look similar and the sign before the square root is easy to swap.
#### Why it is incorrect
The sign decides which mode dies quickly and which mode controls the tail.
#### Detection signal
The condition [[r2]] < [[r1]] < 0 is not satisfied.
#### Conceptual correction
Check signs and order before substituting into the solution.
#### Mini-example
If [[r2]] is less negative than [[r1]], the modes have been exchanged.

### Error 6: forgetting that the exponent must be dimensionless

#### Why it seems correct
The calculator accepts any number inside the exponential.
#### Why it is incorrect
Physically, [[r1]][[t]] and [[r2]][[t]] cannot keep units.
#### Detection signal
The result changes by large factors when milliseconds are converted to seconds.
#### Conceptual correction
Unify units before evaluating exponentials.
#### Mini-example
Using 400 ms as 400 s artificially removes the whole response.

## Interpretation errors

### Error 7: reading only the start of the curve

#### Why it seems correct
The first segment often shows a clear drop and appears to solve the problem.
#### Why it is incorrect
The final segment may be dominated by [[r1]] and be much slower.
#### Detection signal
The value of [[x]] remains outside tolerance after the fast mode has disappeared.
#### Conceptual correction
Evaluate several times and read the tail, not only the initial slope.
#### Mini-example
A sensor drops quickly from 4 mm to 1 mm but takes too long to fall below 0.1 mm.

## Quick self-control rule

Before accepting an answer, check five points: [[gamma]] > [[omega0]], [[r1]] and [[r2]] are negative, [[r2]] is more negative than [[r1]], [[C1]] and [[C2]] have the unit of [[x]], and the curve shows no sustained oscillation.
`;export{e as default};
