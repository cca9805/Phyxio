# Exam-type example

## Problem statement

A laboratory cart moves along a nearly frictionless horizontal track. Its mass [[m]] is 4 kg. It starts with an initial speed of 3 m/s and, after a short push from a linear motor, leaves the active section with a final speed of 7 m/s. Compute [[Ki]], [[Kf]], [[dK]], and the net work [[Wnet]] done on the cart. Then explain why the kinetic-energy increase is much larger than many students first expect when they compare the two speeds informally.

## Data

The relevant data are a constant mass [[m]] of 4 kg, an initial speed of 3 m/s, and a final speed of 7 m/s. The statement also tells us that the track is almost horizontal and that friction losses are negligible during the push. That makes a translational state-to-state reading appropriate.

## System definition

The system is the cart alone. The motor and the track are treated as external agents. This choice is useful because the goal is to read how the cart's kinetic-energy budget changes, and then interpret the cause of that change through [[Wnet]].

## Physical model

The physical model uses the core magnitudes [[K]], [[m]], [[v]], [[Ki]], [[Kf]], [[dK]], and [[Wnet]]. The motion is classical, translational, and the mass is constant. The general kinetic-energy quantity [[K]] is evaluated from the speed [[v]] in two states, and the leaf therefore allows a clean comparison without reconstructing the whole acceleration history in detail.

## Model justification

This model is physically appropriate because the speed range is fully classical, [[m]] does not vary, and the statement does not suggest dominant rotation, deformation, or dissipation. The nearly frictionless horizontal track supports the interpretation that the change in kinetic energy is mainly due to the motor's net work on the cart. If strong friction or rotation were relevant, this leaf would no longer be sufficient on its own.

## Symbolic solution

First compute kinetic energy in each state with the basic relation:

{{f:energia_cinetica_basica}}

In that relation, the mass [[m]] appears explicitly and controls how much [[K]] changes for a given speed.

Then compare the final and initial states through the kinetic-energy change:

{{f:variacion_energia_cinetica}}

Finally interpret that change as the net work of the relevant external forces:

{{f:teorema_trabajo_energia}}

## Numerical substitution

With mass [[m]] equal to 4 kg and initial speed 3 m/s, the initial kinetic energy [[Ki]] is 18 J. With final speed 7 m/s, the final kinetic energy [[Kf]] is 98 J. The change [[dK]] is therefore 80 J. By the work-energy theorem, [[Wnet]] on the cart is also 80 J.

The crucial teaching point is not only the number but the scaling. The final speed is a bit more than twice the initial one, yet the final kinetic-energy budget is far more than twice the initial budget. This is the physical meaning of the square dependence on speed.

## Dimensional validation

Kinetic energy must be reported in joules. Combining kilograms with the square of meters per second produces the correct energetic dimension. The same applies to [[dK]] and [[Wnet]]. If one of the outputs looked like a force or a speed rather than an energy, the modeling or substitution step would have to be reviewed immediately.

## Physical interpretation

This example shows why kinetic-energy reasoning is stronger than naive speed comparison. Moving from 3 m/s to 7 m/s is not a small adjustment in motion budget. It is a large energetic upgrade, which means the cart can now do much more mechanical work or require much more braking effort.

It also clarifies the role of [[Wnet]]. The positive value does not merely complete an equation; it tells a causal story. The motor has transferred 80 J of mechanical energy to the cart. If the cart had ended slower instead of faster, both [[dK]] and [[Wnet]] would have become negative, and the physical reading would shift from driving input to braking or dissipation.

# Real-world example

## Context

Consider an urban electric car of 1400 kg approaching a traffic light. It moves at about 50 km/h and slows down to about 20 km/h before the final stopping phase. The aim is not to reconstruct the full dynamics of the braking maneuver, but to estimate how much kinetic-energy budget is already removed in that first reduction and why that matters for brakes, tires, and safety margins.

## Physical estimation

For an order-of-magnitude reading, the initial speed is about 13.9 m/s and the intermediate speed is about 5.6 m/s. With mass [[m]] equal to 1400 kg, the initial kinetic-energy budget is roughly 135 kJ. After the speed reduction, the remaining kinetic energy is roughly 22 kJ. This means [[dK]] over that first stage is about minus 113 kJ. By the work-energy theorem, [[Wnet]] over the same stage carries the same energetic reading and the same sign.

That estimate already reveals the scale of the process. Before the vehicle even reaches full stop, the braking system has already removed an energy amount large enough to matter thermally and mechanically. The physical story cannot be captured by saying only that the speed became smaller. The motion budget has dropped by a very large fraction.

## Interpretation

The real-world lesson is twofold. First, road safety is extremely sensitive to speed because moderate changes in speed produce very large changes in kinetic-energy budget. Second, braking hardware must be designed not merely to reduce speed, but to absorb or redirect substantial amounts of energy in short times.

This is exactly the kind of reasoning the leaf is designed to train. The driver does not only change a speed value; the system loses a large part of its motion-energy budget. Negative [[Wnet]] captures that loss causally, while the kinetic-energy change expresses it as a state-to-state balance. That is why small-looking speed differences can translate into major physical differences in stopping severity.