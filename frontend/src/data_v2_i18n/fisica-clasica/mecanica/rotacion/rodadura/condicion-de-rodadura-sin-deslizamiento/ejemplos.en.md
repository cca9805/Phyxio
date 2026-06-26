# Exam-type example

## Problem statement
A rigid wheel of radius [[R]] 0.30 m rolls on a horizontal belt. At one instant the center-of-mass [[v]] is 3.60 m/s and the angular speed [[omega]] is 12 rad/s. Determine whether rolling without slipping holds, compute [[v_contacto]], evaluate the slip indicator [[delta]], and interpret the result physically. Later, during an accelerated stage, the angular acceleration [[alpha]] is measured as 5.0 rad/s^2; find the linear acceleration [[a]] compatible with pure rolling.

## Data
- Radius: 0.30 m
- Linear speed: 3.60 m/s
- Angular speed: 12 rad/s
- Angular acceleration: 5.0 rad/s^2

## System definition
We take the rigid wheel as the system. The environment is the horizontal surface together with the mechanism driving the belt. We choose the forward direction of the belt as positive and the compatible rotation sense as positive as well. With that convention, the sign of the residual becomes physically interpretable from the start.

## Physical model
The leaf model does not begin by imposing the constraint; it begins by testing it. We therefore use the pure-rolling condition to compare advance and rotation, the contact-point relation to read support motion directly, a residual [[delta]] to classify the regime, and the coupling between [[a]] and [[alpha]] when rolling remains pure.

The physical logic is simple: first diagnose the contact, then exploit the geometric simplification of the ideal model.

## Model justification
This model choice is appropriate because the problem explicitly asks us to validate the rolling condition. If we imposed the main equality from the first line, we would turn into a given what the statement is actually asking us to verify.

The wheel is rigid, the effective radius is well defined, and the motion occurs on a simple horizontal surface. That makes it reasonable to begin with the ideal model as a working hypothesis, but not as a finished conclusion. The essential physics here is to measure whether contact really sustains the constraint.

## Symbolic solution
The pure rolling relation is

{{f:velocidad_contacto}}

We explicitly apply the contact-velocity relation to verify it locally:

{{f:velocidad_contacto}}

We also write the regime indicator:

{{f:consistencia_rodadura}}

If the regime remains ideal during an accelerated stage, then

{{f:relacion_aceleracion}}

## Numerical substitution
First compute the advance compatible with rotation:

{{f:condicion_rodadura}}

Now evaluate contact velocity:

{{f:velocidad_contacto}}

The regime indicator is

{{f:consistencia_rodadura}}

Therefore the linear and angular data are fully compatible with pure rolling.

For the accelerated stage:

{{f:relacion_aceleracion}}

## Dimensional validation
In the rolling condition, angular speed multiplied by length produces linear speed. In the contact-velocity expression and in the regime residual, all terms have dimensions of speed. In the acceleration relation, angular acceleration multiplied by radius produces linear acceleration. The four expressions are dimensionally consistent.

The order of magnitude is also consistent. A radius of thirty centimeters and a speed of a few meters per second naturally lead to an angular speed of a few tens of radians per second, not hundreds or tiny fractions.

## Physical interpretation
The crucial point is not only that the arithmetic closes, but that the contact point is instantaneously at rest relative to the surface. Since both contact velocity and residual are zero, there is neither skidding nor spin-out. The wheel advances exactly as much as its rotation requires.

This has a very clear physical reading. If we painted a dot on the rim, that dot would reach the ground and, for one instant, would not scrape the belt. The system is therefore in the ideal regime described by the leaf.

The second part of the exercise adds a richer reading. The linear acceleration compatible with the angular acceleration is 1.5 m/s^2. That is not a new law, but the time-extension of the same geometric constraint. As long as contact remains adherent and the effective radius does not change, translation and rotation remain locked also at the level of rates of change.

If a later measurement produced a linear acceleration incompatible with the angular one, the correct physical message would not be “the equation is wrong”, but “ideal rolling has stopped being valid”. That distinction between algebraic error and regime change is exactly what this leaf trains.

# Real-world example

## Context
In ABS or traction-control systems, the controller continuously compares vehicle speed with the peripheral speed of each wheel. The practical question is the same as in the exam example: does real advance remain compatible with wheel rotation, or has the contact already started to slip?

In automotive engineering this reading is critical because a small deviation detected early allows intervention before full lock-up, strong adherence loss, or unnecessary wear appears. The leaf therefore transfers directly to a real technological use case.

## Physical estimation
Consider a car wheel with radius 0.32 m. During moderate braking the car moves at 22.0 m/s and the wheel sensor measures 68 rad/s.

The ideal peripheral speed would be

{{f:condicion_rodadura}}

Now compute contact velocity:

{{f:velocidad_contacto}}

And the regime residual:

{{f:consistencia_rodadura}}

This value is small compared with the vehicle speed itself. The order of magnitude suggests that the wheel is still close to pure rolling, but no longer in exact coincidence with the ideal motion.

## Interpretation
The positive sign of the residual means that the vehicle advances slightly more than wheel rotation can support. That corresponds to the onset of skidding during braking. There is still no full lock-up, but the contact is no longer perfect.

This quantitative reading is exactly what a control system needs. If the controller detects that the residual grows too quickly, it releases brake pressure and moves the wheel back toward a regime with better adherence. If the residual stays small, braking may continue strongly without sacrificing stability.

The real-world example shows something important: the value of the leaf is not only that it solves a classroom problem, but that it translates a small difference between advance and rotation into a control decision with direct safety consequences.