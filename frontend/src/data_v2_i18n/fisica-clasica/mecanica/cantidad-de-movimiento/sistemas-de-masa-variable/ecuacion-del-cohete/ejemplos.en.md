# Exam-type example

## Problem statement

A small satellite orbital-correction maneuver is studied. The question is not only how large [[DeltaV]] is, but whether the requested maneuver fits within the available propellant and which quantity should be redesigned if the budget does not close. The problem must therefore be read with the ideal equation p, but also with its rearrangements p_solve_mf, m0_from_p, and p, because the real goal is not to repeat Tsiolkovsky's formula but to make a design decision.

## Data

The satellite has initial mass [[m0]] equal to 1200 kg before ignition. The effective exhaust speed [[ve]] of the engine is 2500 m/s. The operator wants to analyze two scenarios. In the first, the final mass [[mf]] after the burn would be 800 kg and the task is to compute the reachable [[DeltaV]]. In the second, a maneuver of 1500 m/s is required and one must determine which [[mf]] would actually remain. As an additional audit, the problem asks how much [[m0]] would be needed if [[mf]] equal to 800 kg had to be preserved, and which [[ve]] would be required if [[m0]] could not be increased.

## System definition

The system is defined as the instantaneous rocket or satellite whose remaining propellant still moves with the vehicle. The ejected mass lies outside the boundary once expelled, so the rocket equation is not interpreted as a force applied by the vacuum, but as the consequence of ejecting mass with relative speed [[ve]]. That definition matters because the leaf is not about the full plume dynamics or atmospheric losses, but about the relation between the propellant that stops belonging to the system and the velocity change gained by the mass that remains.

## Physical model

The minimum model uses the fundamental formula p, which connects [[DeltaV]], [[ve]], [[m0]], and [[mf]] through the logarithm of the mass ratio. In direct reading, p answers the most common question: how much maneuver capability follows from a given engine and a given propellant reserve. In inverse reading, [[mf]] and p_solve_mf reconstruct the admissible final mass; m0_from_p estimates the required initial mass; and p asks what propulsion quality would be needed for a given mission target. The model is reasonable because the burn is idealized as short and free from dominant gravitational loss.

## Model justification

The physical justification must explain why the ideal regime of the leaf is defensible. It is, because the maneuver is short and orbital, so thrust acts over a limited time window and gravity is not modeled as a loss comparable to the whole [[DeltaV]]. One also assumes that [[ve]] can be treated as constant during the burn and that the dry structure is already included in [[mf]]. If any of those assumptions stopped being valid, the equation would still provide a first estimate, but not a sufficient reading for approving a real maneuver.

## Symbolic solution

{{f:dv}}

The symbolic solution begins with the direct reading. Using p, the velocity change follows from the natural logarithm of the mass ratio multiplied by the exhaust speed. If the unknown is the admissible final mass, then p_solve_mf and the derived formula [[mf]] rewrite the problem as a decaying exponential. If the question is reversed again, namely which initial mass is needed to obtain a given velocity change while preserving a chosen final mass, then m0_from_p becomes the useful tool. And if the hard constraint is not mass but the available engine, p converts the mission requirement into a propulsion requirement. That variety of rearrangements is central to the leaf: the equation is not merely descriptive, it is a design instrument.

## Numerical substitution

In the direct scenario, with [[m0]] equal to 1200 kg, [[mf]] equal to 800 kg, and [[ve]] equal to 2500 m/s, the mass ratio is 1.5. Applying `p`, the natural logarithm of 1.5 is about 0.405, so the velocity change is roughly 1014 m/s. The maneuver is moderate and does not consume the whole propellant reserve.

In the inverse scenario, a velocity change of 1500 m/s is demanded with the same engine and the same initial mass. Using `p_solve_mf`, one gets a final mass close to 659 kg. That means the desired maneuver would require ending with substantially less remaining mass than in the base case.

If [[mf]] equal to 800 kg had to be preserved and a velocity change of 1500 m/s were still required, `m0_from_p` gives an initial mass of approximately 1458 kg. And if neither the initial nor the final mass could change, `p` would require an exhaust speed of about 3700 m/s. That figure already points to a more efficient propulsion system than the initially available one.

## Dimensional validation

Dimensional validation checks that [[DeltaV]] and [[ve]] remain in m/s, while [[m0]] and [[mf]] remain in kg. It also requires reviewing physical restrictions that are more than algebraic: one must have [[m0]] greater than [[mf]], [[mf]] greater than zero, and the logarithm must act on a dimensionless mass ratio. If a calculation returned [[mf]] larger than [[m0]], that would not be a small arithmetic slip; it would show that the physical meaning of the maneuver or the exponent sign has been mishandled.

## Physical interpretation

The physical reading does not end by saying that the satellite gains speed. The result of `p` means that the orbital-reconfiguration capability depends directly on how much initial mass is converted into expelled gas. The reading of `p_solve_mf` indicates how much structural or payload margin survives after paying for a chosen velocity change. `m0_from_p` reveals the initial cost of the target, and `p` turns a mission requirement into a propulsion requirement. Therefore, the core of the leaf is this: the logarithmic wall implies that every extra increment of speed depends nonlinearly on the consumed mass, and that forces design decisions involving tradeoffs between delivered performance, surviving mass, and propulsion quality.

# Real-world example

## Context

In a real mission review, no one asks only "what does the formula give". The useful question is whether the [[DeltaV]] budget closes with the dry mass, the propellant mass, and the available engine. For small satellites, an error of a few hundred m/s may mean losing an orbital insertion, shortening lifetime, or giving up a plane-change correction.

## Physical estimation

Before doing the math, an order-of-magnitude estimate already shows that going from 1000 to 1500 m/s does not cost 50 percent more propellant in a linear way, but quite a bit more. One also expects that increasing the exhaust speed is extremely valuable because it reduces the required mass ratio by an approximately exponential factor. That prior intuition, which can be verified with typical chemical-propulsion scales, is useful for detecting absurd reports: if a design claims to double the velocity-change budget while barely changing either the initial mass or the exhaust speed, the issue is not the mission review but the reading of the model.

## Interpretation

The final decision of the example is clear. With the current engine and [[m0]] equal to 1200 kg, the 1500 m/s maneuver leaves [[mf]] too low if the satellite must remain heavy because of payload or power requirements. There are three distinct physical exits: accept a lower final mass, increase [[m0]], or adopt an engine with larger [[ve]]. That is exactly what the leaf should teach: the rocket equation is not one number to memorize, but a map of tradeoffs between delivered performance, surviving mass, and propulsion quality.



