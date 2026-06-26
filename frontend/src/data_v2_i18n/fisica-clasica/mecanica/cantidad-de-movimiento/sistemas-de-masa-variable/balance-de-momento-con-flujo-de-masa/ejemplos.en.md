# Exam-type example

## Problem statement

A horizontal conveyor belt receives sand from a vertical hopper and must keep moving at constant speed. The task is not only to obtain a number, but to decide whether the observed braking comes from a badly estimated external force or from the fact that mass [[m]] enters the system with horizontal momentum different from that of the belt. The leaf must therefore be read as an open-system problem, and one must justify why the p equation describes the setup better than the closed-system form of Newton's second law.

## Data

The belt and its supporting carriage have instantaneous mass [[m]] equal to 40 kg and move with speed [[v]] equal to 2.0 m/s to the right. Sand enters at a mass-flow rate [[mdot]] of 5.0 kg/s. Before contact, the horizontal speed of the sand is zero, so in the belt frame the relative [[u]] horizontal inflow speed is -2.0 m/s. The observed regime is steady: over the analyzed interval the belt speed does not change appreciably, so [[dPdt]] can be taken as zero.

## System definition

The chosen system is not "the belt plus all the sand in the laboratory", but the body formed by the belt plus the sand already attached to it inside a boundary moving with the belt itself. That boundary lets mass enter from the hopper and leaves the fixed support, motor, and ground structure outside. The choice is crucial because the leaf is precisely about what happens when mass crosses the system boundary. If a larger closed system were chosen, the dominant mechanism would be hidden; if only one grain were chosen, the global reading of [[P]] and of the force required from the motor would be lost.

## Physical model

The minimum physical model uses two ingredients. First, [[P]] = [[m]]·[[v]] summarizes the subsystem momentum and allows the velocity [[v]] to be recovered when the total [[P]] momentum is known. Second, the p equation states that the temporal change of the tracked body's momentum depends on two contributions: the net horizontal force exerted by the motor and support, and the momentum transport associated with incoming mass.

{{f:balance}}

The instantaneous acceleration [[dvdt]] of the system indicates how fast the velocity is changing: in the steady regime, [[dvdt]] = 0 and the motor force exactly ps the momentum deficit. The model is adequate because the sand arrives almost vertically, the reading is one-dimensional, and the full grain-by-grain contact dynamics are not needed.

## Model justification

The physical justification must explain why the open boundary is reasonable. It is, because mass enters continuously, the belt speed barely changes over the interval, and the central question is how much external action is required to avoid braking. One must also justify the sign of the relative velocity: because the sand enters with horizontal speed smaller than the belt speed, in the system frame the incoming mass arrives backward and decreases the horizontal momentum capacity of the assembly. If that point were ignored and one used only the closed-system form of the second law, the problem would seem to indicate that no force is needed because the acceleration is nearly zero, which contradicts the motor reading.

## Symbolic solution

The symbolic solution begins with the state magnitude [[P]] = [[m]]·[[v]]. The decisive datum is the rate of change [[dPdt]]: for a steady regime [[dPdt]] = 0, and then

{{f:balance}}

reduces to a compensation condition between [[Fext]] and the momentum-flow term [[u]]·[[mdot]]. The system acceleration [[dvdt]] is zero, confirming that the motor exactly ps the incoming momentum deficit.

The net p [[Ft]] exerted by the flow on the system is described by

{{f:balance}}

As a limiting case, without external forces, integrating the p equation over the mass variation gives the total velocity gain [[Delta_v]] with initial mass [[m0]], final mass [[mf]], and exhaust velocity [[ve]]:

{{f:tsiolkovsky}}

## Numerical substitution

First, the subsystem momentum is computed to fix the scale. With [[m]] equal to 40 kg and [[v]] equal to 2.0 m/s, the momentum [[P]] is 80 kg·m/s. If a sensor provided the momentum instead of the velocity, the quotient P/m would give the same value of [[v]], confirming that the adopted speed is coherent with the chosen instantaneous mass.

Next, the [[Fext]] expression is applied. With [[dPdt]] equal to zero, [[u]] equal to -2.0 m/s, and [[mdot]] equal to 5.0 kg/s, the direct calculation gives [[Fext]] equal to 10 N.

The belt needs a net external force [[Fext]] of 10 N forward to keep constant speed. If the motor delivered less, the term [[u]]·[[mdot]] would not be compensated and the p equation would give negative [[dPdt]]: the horizontal momentum of the subsystem would start decreasing. If the motor delivered exactly 10 N, the incoming momentum deficit would be neutralized and the speed would remain constant.

## Dimensional validation

Dimensional validation requires checking that [[P]] stays in kg·m/s, that [[dPdt]] and [[Fext]] stay in N, and that [[u]]·[[mdot]] also produces N because it combines m/s with kg/s. That agreement is not decorative: it shows that the flow term can compete directly with an external force in the p. One must also validate the sign. A negative [[u]] does not mean an absurd negative speed; it means that the incoming sand has less horizontal speed than the moving system boundary.

## Physical interpretation

The result [[Fext]] of 10 N means that the motor is not defeating a mysterious friction force. It indicates something more precise: every second, 5 kg of sand enter and must go from zero horizontal speed to 2 m/s. That momentum change per second is exactly 10 N. The belt does not slow down because its mass is variable in an abstract sense, but because the entering mass carries a horizontal momentum deficit relative to the subsystem. Therefore, if the flow entered with the same horizontal speed as the belt, the relative velocity would be zero and the required motor force decreases to nothing for that specific reason. This implies that the joint reading of the external force [[Fext]] and the flow term [[u]]·[[mdot]] is what makes the p physically consistent.

# Real-world example

## Context

In a real industrial line, a belt fed by a hopper works with flow sensors, tachometers, and motor-current readings. The engineer does not want only to "solve an equation", but to decide whether a rise in motor current is explained by larger [[mdot]], by a change in [[u]], or by an external mechanical fault. Momentum p with mass flow is useful because it separates those physical stories into terms that can be audited independently.

## Physical estimation

Before calculating, one can already predict that if more sand enters per second, the belt will need more effort even when its speed does not change. One also expects the effect to become small when the sand is deposited with horizontal speed close to that of the belt. That prior estimate is valuable for checking measurements: if the flow rate doubles and power demand does not change at all, the issue is probably not the mass flow itself but the chosen boundary or the sensor reading.

## Interpretation

The practical decision produced by the leaf is clear. If the available motor can supply only 6 N of extra force, the current configuration cannot sustain the steady regime and the belt will eventually slow down. To correct that, there are three distinct physical options: increase [[Fext]], reduce [[mdot]], or reduce the speed difference that defines [[u]]. That is the advantage of the p equation: it does not mix everything into a single vague "resistance", but shows which part of the demand comes from the mechanical surroundings and which part comes from the momentum that the incoming mass must acquire when it crosses the system boundary.



