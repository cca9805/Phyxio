const e=`# Exam-type example

## Problem statement

An elevator performs 24000 J of mechanical work to lift a load during 12 s. In another stage, the motor exerts a force of 800 N on the cable while the point of application moves at 1.5 m/s in the same direction. Compute the average power for the first stage and the instantaneous power for the second. Interpret whether the two results describe the same physical information.

## Data

- [[W]] = 24000 J.
- [[t]] = 12 s.
- [[F]] = 800 N.
- [[v]] = 1.5 m/s.
- [[theta]] = 0 rad for the second stage.
- The target magnitude is [[P]].

## System definition

The system is the motor-load set viewed through mechanical transfer. In the first stage, only the accumulated [[W]] over an interval [[t]] matters. In the second stage, one instant is observed, with known cable force and speed of the point of application.

## Physical model

The model is classical mechanical power. Average power is used for the first stage because the statement gives total work and time interval. Instantaneous power is used for the second stage because [[F]], [[v]], and [[theta]] are known at the same instant.

## Model justification

The model is valid because each data set belongs to one phase. The total work of the lift is not mixed with the instantaneous speed of the cable. In addition, in the second stage the force is aligned with the motion, so the angular factor does not reduce energy transfer.

## Symbolic solution

For average power:

{{f:potencia_media}}

For instantaneous mechanical power:

{{f:potencia_instantanea_mecanica}}

The differential definition justifies the local reading of power as rate of change of work:

{{f:potencia_definicion_diferencial}}

## Numerical substitution

In the first stage, dividing work by time gives an average [[P]] of 2000 W. In the second stage, since [[theta]] is zero, all of [[F]] contributes along [[v]] and the instantaneous [[P]] is 1200 W. The results differ because one summarizes a complete stage and the other describes an instant in another stage.

## Dimensional validation

Average power is expressed in J/s, equivalent to W. Instantaneous power is expressed in N m/s; since one newton-meter is one joule, this is also J/s. Both dimensional routes lead to the same unit, but not to the same time interpretation.

## Physical interpretation

The first power means that during the lift the elevator transferred mechanical energy at an average rate of 2000 W. The second means that, at the analyzed instant, mechanical transfer was 1200 W. There is no contradiction: an average may be larger or smaller than an instantaneous value depending on how the process varied.

The key physical point is that [[P]] is not total energy. If another motor did the same 24000 J in 6 s, it would have twice the average power even though the work was identical. If a force of 800 N acted perpendicular to the motion, instantaneous mechanical power would be zero even though the force was large.

# Real-world example

## Context

A teacher compares two drills that can do the same mechanical work on a piece, but one completes the operation in less time. The relevant production question is not only how much energy each process uses, but what power the tool can sustain without overheating.

## Physical estimation

If a tool performs 6000 J in 30 s, its average power is 200 W. If another performs the same work in 10 s, its average power is 600 W. The second has not done more work on the piece; it has done it faster. If during cutting the force and velocity are not aligned, useful power must be calculated with the parallel component.

The estimate also checks design limits. If the manufacturer declares a continuous useful power of 400 W, the second tool could not sustain 600 W for long without heating or efficiency loss. If the cut requires that value only during a two-second peak, the criterion changes: maximum admissible power matters, not only the average over the full cycle. This quantitative reading shows why [[P]] must be compared with duration, cooling, and type of demand.

## Interpretation

The real application shows why power sizes engines, batteries, brakes, and cooling systems. A system may have enough energy and still fail if it cannot deliver it at the required rate. It may also have high instantaneous power during short peaks and moderate average power over the whole cycle.

For the student, the practical criterion is clear: use average power for complete processes and instantaneous power for demand at one instant. The final reading must include unit, sign, scale, and coherence of the chosen interval.

A correct final statement would not only say "600 W". It would say that the tool transfers energy three times faster than the 200 W tool, that this difference does not imply more total work, and that the comparison is valid only if both tasks have the same cutting depth, material, and effective path.
`;export{e as default};
