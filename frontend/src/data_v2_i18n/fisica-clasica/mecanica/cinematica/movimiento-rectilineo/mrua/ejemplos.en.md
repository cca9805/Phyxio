# Exam-type example

## Problem statement

A car is travelling on a motorway at 25 m/s (90 km/h) when the driver spots an obstacle and brakes with constant acceleration [[a]] -5.0 m/s². Take 0 at the point where braking begins.

Calculate: **(a)** the time [[t]] it takes to stop; **(b)** the braking distance; **(c)** the position [[x]] and velocity [[v]] at 3 s after braking starts; **(d)** verify result (b) using average velocity.

## Data

| Symbol | Meaning | Value |
|---|---|---|
| $v_0$ | initial velocity [[v0]] | $25\;\text{m/s}$ |
| $v$ | final velocity (at rest) | $0\;\text{m/s}$ |
| $a$ | acceleration (braking) | $-5{.}0\;\text{m/s}^2$ |
| $x_0$ | initial position [[x0]] | $0\;\text{m}$ |
| $t_c$ | instant for part (c) | $3{.}0\;\text{s}$ |

Positive direction: direction of initial motion.

## System definition

The system is the car modelled as a point particle undergoing UARM along the motorway axis. The core magnitudes are a (constant acceleration, negative here), [[v0]] (initial velocity), v (instantaneous velocity), t (time), x (position), [[x0]] (initial position), and [[dx]] (displacement [[dx]] ). Acceleration remains constant throughout the braking manoeuvre.

## Physical model

UARM is valid because the ABS system maintains an approximately constant deceleration. The four core relations of this leaf are la relacion correspondiente, la relacion correspondiente, la relacion correspondiente, and la relacion correspondiente; the four parts of the problem allow each to be applied in a different context.

{{f:mrua_velocidad}}

{{f:mrua_posicion}}

{{f:mrua_torricelli}}

{{f:mrua_desplazamiento_medio}}


## Model justification

On a straight motorway with dry pavement and ABS, the braking force remains nearly constant throughout the manoeuvre, justifying constant `a`. If the road were uneven or braking were irregular, UARM would need to be replaced by a variable-acceleration model. The 1D geometry is appropriate because the trajectory is straight.

## Symbolic solution

**Part (a) — stopping time** (solving for $t$ from la relacion correspondiente):

{{f:mrua_velocidad}}



**Part (b) — braking distance** (la relacion correspondiente, eliminates time):

{{f:mrua_torricelli}}



**Part (c) — position and velocity at 3 s:**



**Part (d) — verification via average velocity** la relacion correspondiente:

{{f:mrua_desplazamiento_medio}}



## Numerical substitution


The initial speed is converted to 25 m/s and the acceleration is -5 m/s?. The stopping time is 5 s. The braking distance is 62.5 m and the position after 2 s is 40 m from the initial point. The average-velocity check confirms the same distance.
## Dimensional validation



The velocity equation combines m/s with m/s? multiplied by s, so it returns m/s. The position equation adds length terms: velocity times time and acceleration times squared time. Torricelli preserves squared-velocity dimension on both sides.
## Physical interpretation

Part (a) uses la relacion correspondiente inverted: velocity decreases linearly to zero in 5 s because `a` is constant and negative. Part (b) applies la relacion correspondiente to obtain total displacement without passing through time: 62.5 m is nearly two thirds of a football pitch. Part (c) shows that after 3 s the car has covered 52.5 m and still has 10 m/s — most of the displacement occurs in the first half of braking. Part (d) confirms the result with la relacion correspondiente: the average velocity during braking equals exactly the arithmetic mean of $v_0$ and $v$, and that value times the time reproduces the 62.5 m. Agreement between both methods validates the internal consistency of the model.

{{f:mrua_velocidad}}

{{f:mrua_torricelli}}

{{f:mrua_desplazamiento_medio}}


---

# Real-world example

## Context

In a traffic accident, forensic analysts reconstruct the vehicle's initial speed from the length of the skid mark. The mark measures Δ x → 45 m on dry asphalt; the kinetic friction coefficient between tyre and pavement gives an estimated a ≈ -7.5 m/s².

## Physical estimation

Using la relacion correspondiente solved for $v_0$ (knowing the car came to rest, $v = 0$):

{{f:mrua_torricelli}}



The legal speed limit on that road was 80 km/h, so the estimate suggests the vehicle was speeding before braking.

## Interpretation

The key of forensic analysis is that la relacion correspondiente allows [[v0]] to be obtained directly from scene-observable data (skid-mark length) and laboratory data (friction coefficient), with no need to measure any time interval [[dt]]. The main uncertainty comes from the value of a: wet pavement or a vehicle without ABS would produce a lower braking deceleration, yielding a higher [[v0]] estimate. That is why analysts typically report a velocity range rather than a single value. If the skid marks were not straight or the car had rotated while braking, the 1D model would no longer be valid and a two-dimensional analysis would be needed.

{{f:mrua_torricelli}}



## Verification checklist

Before closing the analysis, verify:

1. Has an axis been chosen with a clearly defined positive direction?
2. Does the acceleration [[a]] have the correct sign (negative for deceleration)?
3. Has the initial velocity [[v0]] been extracted correctly from the problem?
4. Is the equation la relacion correspondiente or la relacion correspondiente appropriate for the available data?

{{f:mrua_velocidad}}

{{f:mrua_posicion}}

5. Does the final result have the units required?
6. Is the numerical value consistent with the physical intuition of the problem?

These verifications are especially important in UACM because choosing the wrong starting equation leads to incorrect results even when the algebra is flawless.

## Common variations

Real forensic accident analysis often combines the Torricelli equation la relacion correspondiente with friction coefficients or skid-mark measurements to reconstruct collision speeds from skid distances. The physics of uniform deceleration appears in many real contexts: elevator braking, aircraft landing runs, train stopping distances, and sports biomechanics all rely on the same core equations la relacion correspondiente, la relacion correspondiente, and la relacion correspondiente. Recognizing which equation applies in each context is just as important as the algebra itself. In each case, the key is identifying the known and unknown quantities before selecting the equation.

{{f:mrua_torricelli}}

{{f:mrua_velocidad}}

{{f:mrua_posicion}}

