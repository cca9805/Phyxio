# Exam-type example

## Problem statement

A stone is dropped from rest from the edge of a cliff 45 m above the sea. Take positive direction upward, 45 m, 0, and 9.8 m/s².

Calculate: **(a)** the time [[t]] it takes to reach the water; **(b)** the impact velocity; **(c)** the height [[h]] at 2 s after release; **(d)** verify the impact velocity using `la relacion correspondiente.

{{f:caida_libre_torricelli}}


## Data

| Symbol | Meaning | Value |
|---|---|---|
| $h$ | cliff height | $45\;\text{m}$ |
| $y_0$ | initial vertical [[v]] position [[y]] [[y0]] | $45\;\text{m}$ |
| $v_0$ | initial velocity [[v0]] | $0\;\text{m/s}$ (dropped from rest) |
| $g$ | gravitational acceleration | $9{.}8\;\text{m/s}^2$ |
| $y_\text{ground}$ | water level (reference) | $0\;\text{m}$ |
| $t_c$ | instant for part (c) | $2{.}0\;\text{s}$ |

Positive direction: upward.

## System definition

The system is the stone modelled as a point particle in vertical motion under gravity [[g]] . The core magnitudes are h (cliff height), [[y0]] (initial vertical position), [[v0]] (zero initial velocity), v (instantaneous velocity), g (gravitational acceleration), t (time), y` (vertical position), and [[dy]] (net vertical displacement [[dy]] ). Acceleration equals $-g$ (downward) throughout.

## Physical model

 [[h_max]] [[t_sub]] 


The model is free fall with 0. The four leaf relations used are la relacion correspondiente (part a), la relacion correspondiente (part b), la relacion correspondiente (part c), and la relacion correspondiente (part d). The model is valid because aerodynamic drag is negligible for a dense stone over this height and velocity range, and $g$ remains constant.

{{f:caida_libre_tiempo_vuelo}}

{{f:caida_libre_velocidad}}

{{f:caida_libre_posicion}}

{{f:caida_libre_torricelli}}


## Model justification

The stone is compact and dense, so the aerodynamic drag term is much smaller than the weight at the velocities reached (≤ 30 m/s). The height of 45 m is well below the range where $g$ varies appreciably. If the object were light (a leaf, a feather) or if the height were on the order of kilometres, air resistance or variation of $g$ would need to be included.

## Symbolic solution

{{f:caida_libre_tiempo_subida}}


{{f:caida_libre_altura_maxima}}


**Part (a) — fall time** (la relacion correspondiente, valid for 0):

{{f:caida_libre_tiempo_vuelo}}


{{f:caida_libre_tiempo_vuelo}}


**Part (b) — impact velocity** la relacion correspondiente:

{{f:caida_libre_velocidad}}



(The negative sign indicates downward direction, consistent with the chosen positive direction.)

**Part (c) — height at $t_c$** la relacion correspondiente:

{{f:caida_libre_posicion}}



**Part (d) — verification** la relacion correspondiente:

{{f:caida_libre_torricelli}}



## Numerical substitution

**Part (a):**


**Part (b):**


The impact speed is $29{.}7\;\text{m/s}$ downward (≈ 107 km/h).

**Part (c):**


After 2 s the stone has fallen 19.6 m and is 25.4 m above the water.

**Part (d):**


## Dimensional validation



Fall time keeps time dimension because it comes from a square root of length divided by acceleration. Impact velocity remains in m/s when g is multiplied by t, position keeps length units, and the Torricelli check compares two terms with squared-velocity dimension.
## Physical interpretation

Part (a) applies la relacion correspondiente, which is only valid when 0: under this condition, fall time grows as the square root of height, explaining why doubling the height does not double the time (it multiplies by √(2) ≈ 1.41). Part (b) shows that la relacion correspondiente is linear in $t$: velocity increases at 9.8 m/s per second, and after 3 s the stone reaches nearly 30 m/s. Part (c) reveals the quadratic dependence of position on time: in the first 2 s (66 % of flight time) the stone falls only 19.6 m (44 % of the height), illustrating that the fall accelerates progressively. Part (d) confirms the result with la relacion correspondiente, which eliminates time and directly connects velocity and position; agreement between both methods validates the internal consistency of the model.

{{f:caida_libre_tiempo_vuelo}}

{{f:caida_libre_velocidad}}

{{f:caida_libre_torricelli}}


---

# Real-world example

## Context

To estimate the depth of a well without a measuring device, a stone is dropped from the edge and the time until the splash is heard is measured. The stopwatch records 2.6 s (ignoring sound travel time, a valid approximation for wells shallower than about 50 m).

## Physical estimation

Using la relacion correspondiente solved for $h$:

{{f:caida_libre_tiempo_vuelo}}



If the sound takes approximately t_sound → 33 m/340 m/s ≈ 0.10 s to travel back up, the actual fall time is t ≈ 2.5 s, reducing $h$ to about 31 m: the sound correction is small but not negligible in deep wells.

## Interpretation

The key of this method is that la relacion correspondiente converts a time measurement (easy to make with a stopwatch) into a length estimate (hard to measure directly in a well). The main uncertainty comes from the timer's reaction time (typically ±0.2 s) and the neglected sound travel time. For wells deeper than 80 m, the sound delay exceeds 0.24 s and the depth overestimate becomes significant; in that case one must solve the system of equations that includes both the fall time and the sound travel time.

{{f:caida_libre_tiempo_vuelo}}



## Verification checklist

Before finalizing, confirm:

1. Has the positive direction been defined clearly (usually downward for free fall)?
2. Is initial velocity [[v0]] zero for a dropped object and nonzero for a thrown one?
3. Is la relacion correspondiente being applied with the correct measured time?

{{f:caida_libre_tiempo_vuelo}}

4. Does the calculated height or distance have a physically plausible magnitude?
5. Are units consistent throughout (seconds for time, meters for distance)?

Free-fall problems often involve round-trip scenarios where the time of sound travel is included in the measured interval; always isolate the fall time before applying the free-fall equations.
