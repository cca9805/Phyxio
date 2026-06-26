# Exam-type example

## Problem statement

Car A travels along a motorway at 20 m/s and passes the origin (0) at time $t = 0$. At that same instant, car B is $240\;\text{m}$ ahead (240 m) and travels in the same direction at 8 m/s.

Calculate: **(a)** the initial separation [[d_0]] and the relative velocity of A with respect to B; **(b)** the instant at which A catches B; **(c)** the position where the encounter occurs; **(d)** verify the position by computing it also from B's time equation.

## Data

| Symbol | Meaning | Value |
|---|---|---|
| $x_{A0}$ | initial position of A | $0\;\text{m}$ |
| $x_{B0}$ | initial position of B | $240\;\text{m}$ |
| $v_A$ | velocity of A | $20\;\text{m/s}$ |
| $v_B$ | velocity of B | $8\;\text{m/s}$ |

Positive direction: direction of motion of both vehicles. Both bodies move at constant velocity (MRU).

## System definition

Two moving bodies are described on the same straight axis within the same reference frame. The magnitude [[d_0]] represents the initial separation; the magnitude [[v_rel]] [[v_rel]] (relative approach velocity) summarises the rate at which A closes the gap relative to B; [[t_e]] [[t_e]] is the encounter time and [[x_e]] [[x_e]] is the encounter position. The la relacion correspondiente (x_A( [[t_e]] ) → x_B( [[t_e]] )) is the organising principle of the whole resolution.

{{f:condicion_encuentro}}


## Physical model

Both bodies maintain constant velocity, so the applicable structure is la relacion correspondiente. The la relacion correspondiente fixes the magnitude of B's initial lead; the la relacion correspondiente determines how fast A closes that lead. Once $ [[t_e]] $ is known, la relacion correspondiente gives the encounter coordinate.

{{f:tiempo_encuentro_mru_mru}}

{{f:separacion_inicial}}

{{f:velocidad_relativa_encuentro}}

{{f:posicion_encuentro_mru}}


## Model justification

On a straight motorway with cruise control active, the speed of each vehicle can be considered constant during the relevant time interval. The scale of the problem — stretches of a few kilometres and speeds of 20–30 m/s — is compatible with that regime: the mean acceleration measured by GPS would be below 0.1 m/s², producing a position error below 1 % over the 400 m travelled. The la relacion correspondiente model therefore describes the encounter with sufficient precision. If either vehicle were actively accelerating or braking, la relacion correspondiente would need to be replaced by la relacion correspondiente and a quadratic equation solved; in that case, the magnitude [[v_rel]] would no longer be constant and the notion of "closing time" would require integrating the relative velocity over time.

{{f:tiempo_encuentro_mru_mru}}

{{f:encuentro_mrua}}


## Symbolic solution

{{f:encuentro_retrasado}}


{{f:encuentro_mrua}}


**Part (a) — separation and relative velocity:**

{{f:separacion_inicial}}


{{f:velocidad_relativa_encuentro}}


**Part (b) — encounter time** la relacion correspondiente:

{{f:tiempo_encuentro_mru_mru}}


{{f:tiempo_encuentro_mru_mru}}


**Part (c) — encounter position** (A's time equation, la relacion correspondiente):

{{f:posicion_encuentro_mru}}



**Part (d) — verification** (B's time equation):


If both expressions yield the same value, the la relacion correspondiente is satisfied.

{{f:condicion_encuentro}}


## Numerical substitution

**Part (a):**


The relative velocity is positive: A approaches B at 12 m/s.

**Part (b):**


**Part (c):**


**Part (d):**


## Dimensional validation



Initial separation is a length and relative velocity has length-per-time units, so their quotient returns seconds. Encounter position keeps length units by adding initial position and velocity times time. Signs are coherent only if both bodies are described on the same axis.
## Physical interpretation

The structurally central quantity of this problem is [[v_rel]] — the relative approach velocity — not the absolute speeds of the individual vehicles. Although A travels at 20 m/s and B at 8 m/s, what governs whether an encounter exists, and when, is exclusively their difference [[v_rel]]. The la relacion correspondiente of 240 m sets the scale of the problem; [[v_rel]] sets the rate at which that gap closes. If [[v_rel]] were zero, the two vehicles would maintain the 240 m separation indefinitely and no encounter would occur — the la relacion correspondiente (x_A) would have no solution in positive time. If [[v_rel]] were negative (B faster than A), the separation would grow without bound and interception would be impossible.

{{f:separacion_inicial}}

{{f:condicion_encuentro}}


The formula `la relacion correspondiente encapsulates this logic in a single ratio: [[t_e]]. Reading it physically, it answers the question "how long does A need to close the lead at a constant approach rate?". The 20 s result is independent of the absolute velocity of either vehicle — it depends only on the 240 m lead and the 12 m/s closing rate. This independence is a signature of MRU encounter problems: reference-frame shifts that add the same constant to both velocities leave $v_{rel}$ unchanged, and therefore leave $ [[t_e]] $ unchanged.

{{f:tiempo_encuentro_mru_mru}}


Once $ [[t_e]] $ is known, la relacion correspondiente` locates the encounter at 400 m. The `la relacion correspondiente is confirmed by computing the same coordinate from B's time equation — both yield 400 m, which verifies that the meeting condition x_A is satisfied simultaneously by both bodies. Geometrically, this corresponds to the crossing of two straight lines on an $x$-$t$ graph: A's steeper line overtakes B's shallower one exactly at the point $(20\;\text{s},\;400\;\text{m})$. In the 20 s leading to the encounter, B has advanced 160 m from its starting position, while A has covered 400 m — a gain of exactly the 240 m initial lead that B held at the outset.

{{f:posicion_encuentro_mru}}

{{f:condicion_encuentro}}


---

# Real-world example

## Context

A police car is stationary at a checkpoint (0, 0) when a speeding vehicle passes at 30 m/s. The officer takes Δ t [[dt]] → 4 s to start moving and then reaches a steady cruising speed of 40 m/s (the acceleration phase is simplified by assuming the officer is already at full speed after 4 s).

## Physical estimation

Before computing, a quick estimate: the officer has a speed advantage of [[v_rel]] . The infringer's head start at the moment the officer sets off is [[d_0]] ' → 30 × 4 → 120 m. With 10 m/s, the effective pursuit time is of the order of 120/10 → 12 s, so the interception occurs within tens of seconds and under one kilometre. This prior estimate confirms the final numbers are in a reasonable range.

During the Δ t → 4 s delay, the speeding vehicle advances:


From that moment on, la relacion correspondiente` applies with x_I0' → 120 m (the infringer's head start when the officer sets off), 30 m/s, and 40 m/s:

{{f:encuentro_retrasado}}




The interception position is:


from the original checkpoint.

## Interpretation

The relative velocity [[v_rel]] of 10 m/s determines how fast the officer closes the 120 m head start that the infringer carries at departure. Note that head start equals v_I · Δ t → 30 × 4 → 120 m: the delay interval $\Delta t$ multiplies the infringer's speed to generate the effective initial separation. The la relacion correspondiente model reframes the delay $\Delta t$ as an initial spatial lead of the faster vehicle, mapping the problem onto the standard la relacion correspondiente structure. The 12 s of effective pursuit, added to the 4 s delay, give 16 s total from the infringer passing the checkpoint to interception at 640 m. If the officer needed to accelerate over a stretch before reaching 40 m/s, that phase would require la relacion correspondiente to correctly model the position during the start; the simplified scheme here slightly underestimates the actual interception distance but is adequate for a first-order estimate.

{{f:encuentro_retrasado}}

{{f:tiempo_encuentro_mru_mru}}

{{f:encuentro_mrua}}

