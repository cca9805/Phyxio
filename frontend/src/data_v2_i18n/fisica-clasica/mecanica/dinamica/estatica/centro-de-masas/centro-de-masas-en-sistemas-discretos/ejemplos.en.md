# Exam-type example

## Problem statement

Three point masses are placed on a horizontal guide. The first mass [[m_1]] = 2 kg is at [[x_1]] = 0 m. The second mass [[m_2]] = 5 kg is at [[x_2]] = 3 m. A third mass [[m_i]] = 1 kg is at [[x_i]] = -1 m. Compute the total mass [[M]] and the position [[xcm]] of the center of mass of the discrete system. Then interpret which side pulls the result.

## Data

| Quantity | Value |
|---|---|
| [[m_1]] | 2 kg |
| [[x_1]] | 0 m |
| [[m_2]] | 5 kg |
| [[x_2]] | 3 m |
| [[m_i]] | 1 kg |
| [[x_i]] | -1 m |

The positive axis points to the right. All positions are measured from the same origin, located at the first mass.

## System definition

The system contains only the three declared point masses. The guide, support, and friction are not included. The global quantity sought is [[xcm]], and the total mass [[M]] is computed from all discrete contributions. This is a finite model: there is no continuous density and no integration.

## Physical model

The physical model is a one-dimensional discrete system. Each mass acts as a weight inside a weighted average. The calculation first uses the mass sum and then the general center-of-mass relation. The two-mass expression is useful as a comparison, but the third contribution requires the general sum.

{{f:masa_total_discreta}}

{{f:centro_masas_general}}

{{f:centro_masas_dos_masas}}

## Model justification

The model is valid because the masses are concentrated at well-defined positions, all on the same axis and with one common origin. The guide only fixes geometry; it is not part of the mass distribution. If the blocks had appreciable size or distributed mass, the extended-body model would be needed. Here each block is approximated as a point mass, and the discrete sum captures the dominant physics.

## Symbolic solution

First compute total mass:

[[M]] = [[m_1]] + [[m_2]] + [[m_i]].

Then build the numerator of the weighted average:

discrete first moment = [[m_1]][[x_1]] + [[m_2]][[x_2]] + [[m_i]][[x_i]].

The center-of-mass coordinate is that first moment divided by [[M]]. Physically, each position pulls the result with strength proportional to its mass.

## Numerical substitution

Adding the three masses gives [[M]] = 8 kg. Combining each mass with its position, the discrete first moment is dominated by the 5 kg mass on the right. The total numerator is 14 kg m.

Dividing 14 kg m by 8 kg gives [[xcm]] = 1.75 m. This value lies between -1 m and 3 m, as required for a system with positive masses. It is also closer to [[x_2]] = 3 m than to the origin because [[m_2]] is the dominant contribution.

## Dimensional validation

The total mass [[M]] is in kg because it adds masses. The numerator has units kg m because each term multiplies mass by position. Dividing kg m by kg leaves [[xcm]] in meters. The dimension is correct and the range check is also correct: -1 m <= 1.75 m <= 3 m.

## Physical interpretation

The result does not mean that a real particle exists at 1.75 m. It means that, for the global discrete distribution, the three masses behave translationally as if their total mass were concentrated at that position. The 5 kg mass at [[x_2]] pulls the average to the right, while the 1 kg mass at negative position corrects the result to the left.

If the 1 kg mass were removed, [[xcm]] would increase; if [[m_1]] at the origin were doubled, [[xcm]] would move closer to the origin. This reading is more important than the isolated number because it predicts how the system changes when masses are redistributed.

# Real-world example

## Context

A team designs a platform with three modules: a battery, a sensor, and a control unit. Each module can be approximated as a point mass because its dimensions are small compared with the spacing between mounting points. The goal is to check whether the center of mass lies near the support axis.

## Physical estimation

Before calculating, the battery is observed to be the heaviest module and it is mounted to the right of the axis, about 0.40 m from the chosen origin. The sensor is close to the axis and the control unit is slightly to the left, so the qualitative reading predicts a positive [[xcm]], but one smaller than the battery position. If the support axis admits a safe zone of about 0.10 m around the origin, an estimate near 0.20 m would already suggest moving the battery or adding a compensating mass. If the result appeared on the left, a sign error or a wrong mass-position pairing would be likely.

## Interpretation

The discrete calculation supports a design decision: move a module or add counterweight. The useful quantity is not only [[M]], but [[xcm]] relative to the support axis. If [[xcm]] lies outside the safe zone, the design may tip or require additional supports. In this context, the leaf turns a component list into an engineering decision.

## Checklist

1. Are all positions measured from the same origin?
2. Has each mass been paired with its own position?
3. Does total mass [[M]] include every mass in the system?
4. Does [[xcm]] lie inside the geometric range?
5. Does the dominant mass explain the bias of the result?
