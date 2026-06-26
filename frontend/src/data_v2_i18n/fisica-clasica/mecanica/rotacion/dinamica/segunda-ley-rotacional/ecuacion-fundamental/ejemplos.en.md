# Exam-type example

## Problem statement
A solid homogeneous disk of mass 4 kg and radius 0.30 m is mounted on a frictionless horizontal axis. A motor applies a constant torque of 1.8 N m about the axis. The task is to compute angular acceleration [[alpha]], the linear acceleration [[a]] of a point on the rim, and the time needed for the disk to reach angular speed [[omega]] of 25 rad/s from rest. The solution must be justified with the rotational second law, must keep the translational reference with [[F_net]] and the translational second law visible as a structural check, and must close with the angular momentum definition [[L]] and the linear momentum definition [[p]].

## Data
Declared data:
- disk mass: 4 kg
- disk radius: 0.30 m
- applied torque: 1.8 N m
- target angular speed: 25 rad/s
- initial state: rest
- sign convention: positive rotation in the direction of the applied torque

Derived quantity:
- moment of inertia [[I]] of the disk about the central axis

Assumptions:
- negligible axle friction
- rigid disk
- constant torque during the whole interval

## System definition
The mechanical system is the rigid disk with a single rotational degree of freedom about the central axis. The axis blocks translation of the center of mass but allows free rotation. For that reason the external torque is the direct cause of rotational state change and [[alpha]] is the response that organizes time evolution.

It is also important to declare from the start that the disk rotates about its central axis and not about some parallel axis. When inertia for the wrong axis is used, the response is mis-scaled even when the algebra still looks neat.

## Physical model
Use the rotational second law for the main dynamics:

{{f:segunda_ley_traslacional}}

Keep the translational reference visible with the translational second law:

{{f:segunda_ley_traslacional}}

Use the angular and linear momentum definitions to describe accumulated state:

{{f:momento_lineal}}

{{f:momento_lineal}}

## Model justification
The available data allow direct computation of rotational inertia and then link torque with angular response. Because the axis is fixed and friction is negligible, the applied torque can be treated as net torque [[tau]]. The reference to [[F_net]] does not drive the solution, but it does show that the problem keeps the same causal structure as a linear law.

Using the linear momentum definition also has value here. Even though the disk rotates, its center of mass does not translate. That observation helps separate linear state of the center from rotational state of the body.

## Symbolic solution
Step 1. Compute disk inertia:

{{f:segunda_ley_rotacional}}

Step 2. Apply the rotational second law:

{{f:segunda_ley_rotacional}}

Step 3. Obtain tangential acceleration at the rim:

{{f:momento_angular}}

Step 4. Find the time required to reach the target angular speed:

{{f:momento_angular}}

{{f:segunda_ley_rotacional}}

Step 5. Compute the rotational state reached:

{{f:momento_lineal}}

Step 6. Close with the linear reading of the center of mass using the linear momentum definition. Because the axis is fixed, center-of-mass speed is zero, so:

{{f:momento_lineal}}

That last line shows that the rotational branch evolves while the translational branch of the center of mass remains blocked. The comparison with [[F_net]] is therefore a structure check rather than the governing equation of the system.

## Numerical substitution
Moment of inertia:

{{f:momento_angular}}

Angular acceleration:

{{f:momento_angular}}

Tangential acceleration at the rim:

{{f:segunda_ley_traslacional}}

Time to reach 25 rad/s:

{{f:momento_angular}}

Final angular momentum [[L]]:

{{f:momento_angular}}

Linear momentum [[p]] of the center of mass:

{{f:momento_lineal}}

## Dimensional validation
The ratio between torque and inertia gives angular acceleration units. The product of inertia and angular speed gives angular momentum. In the linear branch, the reminder through [[F_net]] keeps the same causal reading visible, while the calculation of [[p]] makes clear that the center of mass does not translate in this setup. All magnitudes stay coherent with the chosen system.

## Physical interpretation
The result says that a moderate torque is enough to generate a strong angular response because the disk inertia is not large. In two and a half seconds the system already reaches a substantial angular speed. The rim acceleration is of the order of a few meters per second squared, fully plausible for a bench setup. In physical terms, the available rotational cause clearly dominates the inertial [[m]] resistance of the disk.

The most important reading is mechanical rather than numerical. Torque organizes the change in rotation, disk inertia controls how difficult it is to accelerate the body, and final angular momentum summarizes the state stored once target speed is reached. When the same disk has a larger radius, the response is weaker under the same applied torque because inertia rises. When torque is reduced, the disk needs more time to reach the same target speed. At the same time, the linear momentum definition confirms that the center of mass remains without translation. This separation between body rotation and linear rest of the center prevents confusion between rotational dynamics and ordinary linear motion.

# Real-world example

## Context
A CNC milling head can be modeled as a solid disk of mass 2.5 kg and equivalent radius 0.08 m. The servo motor must bring it from rest to 600 rad/s in 0.4 s to reach cutting speed. The manufacturer needs an estimate of minimum motor torque, final angular momentum, and the effect of reducing head mass to 1.8 kg while keeping the same radius.

## Physical estimation
Before computing, it helps to read the scale. A small head with a radius of only a few centimeters should have low rotational inertia. That suggests that the required torque will be significant but still compatible with a compact servo motor. The required angular response is very high because startup time is short.

The target angular acceleration is:

{{f:momento_angular}}

The rotational inertia of the head is:

{{f:segunda_ley_rotacional}}

Applying the rotational second law, the minimum torque becomes:

{{f:segunda_ley_rotacional}}

The final angular momentum is:

{{f:momento_angular}}

When mass is reduced to 1.8 kg, the new inertia is:

{{f:segunda_ley_traslacional}}

The new minimum torque is:

{{f:momento_lineal}}

Because the axis remains fixed, the center of mass does not acquire translational speed and the linear momentum definition again gives a null value for the assembly. That confirms that actuator demand is concentrated in the rotational branch rather than in a linear branch governed by [[F_net]].

## Interpretation
Reducing mass lowers rotational inertia and therefore lowers both startup torque and the rotational state that the brake must later dissipate. The effect is not marginal. The inertia change is large enough to ease servo demand and improve braking margin in a clear way.

This example shows why the fundamental equation is not just an exam formula. It connects mechanical design, motor selection, and safety reasoning. When the head is heavier or has a larger radius, the same startup time demands much higher torque and also leaves a larger final angular momentum that is harder to stop. The relevant physics of the problem is condensed in that relation between rotational cause, inertial resistance, and angular response.