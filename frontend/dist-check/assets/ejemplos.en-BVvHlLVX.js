const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A stone is dropped from rest from the edge of a cliff 45 m above the sea. Take positive direction upward, 45 m, 0, and 9.8 m/s².\r
\r
Calculate: **(a)** the time [[t]] it takes to reach the water; **(b)** the impact velocity; **(c)** the height [[h]] at 2 s after release; **(d)** verify the impact velocity using \`la relacion correspondiente.\r
\r
{{f:caida_libre_torricelli}}\r
\r
\r
## Data\r
\r
| Symbol | Meaning | Value |\r
|---|---|---|\r
| $h$ | cliff height | $45\\;\\text{m}$ |\r
| $y_0$ | initial vertical [[v]] position [[y]] [[y0]] | $45\\;\\text{m}$ |\r
| $v_0$ | initial velocity [[v0]] | $0\\;\\text{m/s}$ (dropped from rest) |\r
| $g$ | gravitational acceleration | $9{.}8\\;\\text{m/s}^2$ |\r
| $y_\\text{ground}$ | water level (reference) | $0\\;\\text{m}$ |\r
| $t_c$ | instant for part (c) | $2{.}0\\;\\text{s}$ |\r
\r
Positive direction: upward.\r
\r
## System definition\r
\r
The system is the stone modelled as a point particle in vertical motion under gravity [[g]] . The core magnitudes are h (cliff height), [[y0]] (initial vertical position), [[v0]] (zero initial velocity), v (instantaneous velocity), g (gravitational acceleration), t (time), y\` (vertical position), and [[dy]] (net vertical displacement [[dy]] ). Acceleration equals $-g$ (downward) throughout.\r
\r
## Physical model\r
\r
 [[h_max]] [[t_sub]] \r
\r
\r
The model is free fall with 0. The four leaf relations used are la relacion correspondiente (part a), la relacion correspondiente (part b), la relacion correspondiente (part c), and la relacion correspondiente (part d). The model is valid because aerodynamic drag is negligible for a dense stone over this height and velocity range, and $g$ remains constant.\r
\r
{{f:caida_libre_tiempo_vuelo}}\r
\r
{{f:caida_libre_velocidad}}\r
\r
{{f:caida_libre_posicion}}\r
\r
{{f:caida_libre_torricelli}}\r
\r
\r
## Model justification\r
\r
The stone is compact and dense, so the aerodynamic drag term is much smaller than the weight at the velocities reached (≤ 30 m/s). The height of 45 m is well below the range where $g$ varies appreciably. If the object were light (a leaf, a feather) or if the height were on the order of kilometres, air resistance or variation of $g$ would need to be included.\r
\r
## Symbolic solution\r
\r
{{f:caida_libre_tiempo_subida}}\r
\r
\r
{{f:caida_libre_altura_maxima}}\r
\r
\r
**Part (a) — fall time** (la relacion correspondiente, valid for 0):\r
\r
{{f:caida_libre_tiempo_vuelo}}\r
\r
\r
{{f:caida_libre_tiempo_vuelo}}\r
\r
\r
**Part (b) — impact velocity** la relacion correspondiente:\r
\r
{{f:caida_libre_velocidad}}\r
\r
\r
\r
(The negative sign indicates downward direction, consistent with the chosen positive direction.)\r
\r
**Part (c) — height at $t_c$** la relacion correspondiente:\r
\r
{{f:caida_libre_posicion}}\r
\r
\r
\r
**Part (d) — verification** la relacion correspondiente:\r
\r
{{f:caida_libre_torricelli}}\r
\r
\r
\r
## Numerical substitution\r
\r
**Part (a):**\r
\r
\r
**Part (b):**\r
\r
\r
The impact speed is $29{.}7\\;\\text{m/s}$ downward (≈ 107 km/h).\r
\r
**Part (c):**\r
\r
\r
After 2 s the stone has fallen 19.6 m and is 25.4 m above the water.\r
\r
**Part (d):**\r
\r
\r
## Dimensional validation\r
\r
\r
\r
Fall time keeps time dimension because it comes from a square root of length divided by acceleration. Impact velocity remains in m/s when g is multiplied by t, position keeps length units, and the Torricelli check compares two terms with squared-velocity dimension.\r
## Physical interpretation\r
\r
Part (a) applies la relacion correspondiente, which is only valid when 0: under this condition, fall time grows as the square root of height, explaining why doubling the height does not double the time (it multiplies by √(2) ≈ 1.41). Part (b) shows that la relacion correspondiente is linear in $t$: velocity increases at 9.8 m/s per second, and after 3 s the stone reaches nearly 30 m/s. Part (c) reveals the quadratic dependence of position on time: in the first 2 s (66 % of flight time) the stone falls only 19.6 m (44 % of the height), illustrating that the fall accelerates progressively. Part (d) confirms the result with la relacion correspondiente, which eliminates time and directly connects velocity and position; agreement between both methods validates the internal consistency of the model.\r
\r
{{f:caida_libre_tiempo_vuelo}}\r
\r
{{f:caida_libre_velocidad}}\r
\r
{{f:caida_libre_torricelli}}\r
\r
\r
---\r
\r
# Real-world example\r
\r
## Context\r
\r
To estimate the depth of a well without a measuring device, a stone is dropped from the edge and the time until the splash is heard is measured. The stopwatch records 2.6 s (ignoring sound travel time, a valid approximation for wells shallower than about 50 m).\r
\r
## Physical estimation\r
\r
Using la relacion correspondiente solved for $h$:\r
\r
{{f:caida_libre_tiempo_vuelo}}\r
\r
\r
\r
If the sound takes approximately t_sound → 33 m/340 m/s ≈ 0.10 s to travel back up, the actual fall time is t ≈ 2.5 s, reducing $h$ to about 31 m: the sound correction is small but not negligible in deep wells.\r
\r
## Interpretation\r
\r
The key of this method is that la relacion correspondiente converts a time measurement (easy to make with a stopwatch) into a length estimate (hard to measure directly in a well). The main uncertainty comes from the timer's reaction time (typically ±0.2 s) and the neglected sound travel time. For wells deeper than 80 m, the sound delay exceeds 0.24 s and the depth overestimate becomes significant; in that case one must solve the system of equations that includes both the fall time and the sound travel time.\r
\r
{{f:caida_libre_tiempo_vuelo}}\r
\r
\r
\r
## Verification checklist\r
\r
Before finalizing, confirm:\r
\r
1. Has the positive direction been defined clearly (usually downward for free fall)?\r
2. Is initial velocity [[v0]] zero for a dropped object and nonzero for a thrown one?\r
3. Is la relacion correspondiente being applied with the correct measured time?\r
\r
{{f:caida_libre_tiempo_vuelo}}\r
\r
4. Does the calculated height or distance have a physically plausible magnitude?\r
5. Are units consistent throughout (seconds for time, meters for distance)?\r
\r
Free-fall problems often involve round-trip scenarios where the time of sound travel is included in the measured interval; always isolate the fall time before applying the free-fall equations.\r
`;export{e as default};
