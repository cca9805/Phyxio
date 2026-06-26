# Exam-type example

## Problem statement

Two systems with the same dynamical structure are compared. The first is a cart with mass [[m]] of 12 kilograms receiving a horizontal net force [[F_net]] of 18 newtons. The second is a disk mounted on a fixed axis with moment of inertia [[I]] of 0.60 kilogram meter squared receiving a net torque [[tau]] of 0.90 newton meter. The task is to compute the cart linear acceleration [[a]] and the disk angular acceleration [[alpha]]. After that, the student must compare the dynamical state reached after 4 seconds through the cart linear momentum [[p]] and the disk angular momentum [[L]], using [[v]] and [[omega]] as intermediate kinematic states.

The question asks for more than numbers. It asks why the linear law, the rotational law, and the two momentum definitions play analogous roles, and why that analogy does not make force and torque identical physical quantities.

## Data

Cart data:
- mass of 12 kilograms
- horizontal net force of 18 newtons
- initial state at rest

Disk data:
- moment of inertia of 0.60 kilogram meter squared
- net torque of 0.90 newton meter
- initial state at rest

Common data:
- observation time of 4 seconds

## System definition

The first system is the whole cart, so [[F_net]] represents the effective sum of external forces along the chosen direction. The second system is the rigid disk about the fixed axis, so the net torque [[tau]] represents the effective rotational cause about that axis. The analogy is only valid if both dynamical causes have been built correctly.

## Physical model

For the linear branch use the translational second law:

{{f:segunda_ley_traslacional}}

For the rotational branch use the rotational second law:

{{f:segunda_ley_rotacional}}

To read the state reached at the end of the interval use the linear and angular momentum definitions:

{{f:momento_lineal}}

{{f:momento_angular}}

## Model justification

Both systems have one relevant coordinate and start from rest. The cart mass can be treated as constant and the disk moment of inertia is already given about the correct axis. The exercise is not trying to refine friction or deformation. Its purpose is to show how the same dynamical structure appears in linear language and in rotational language.

## Symbolic solution

Linear route:

{{f:segunda_ley_traslacional}}

{{f:segunda_ley_traslacional}}

{{f:momento_lineal}}

Rotational route:

{{f:segunda_ley_rotacional}}

{{f:segunda_ley_rotacional}}

{{f:momento_angular}}

The important comparison is structural. In one branch there is the ratio between [[F_net]] and linear inertia [[m]]. In the other there is the ratio between torque [[tau]] and rotational inertia [[I]]. Then, in each branch, momentum summarizes the accumulated dynamical state.

## Numerical substitution

Using the statement data, the explicit substitution confirms the same structural pattern in both branches. In the linear branch, the ratio [[F_net]]/[[m]] fixes [[a]], and that value then determines [[v]] and [[p]] at the end of 4 s.

For the cart:

{{f:segunda_ley_traslacional}}

{{f:momento_lineal}}

{{f:momento_lineal}}

Evaluating this block gives [[a]] = 1.5 m/s^2, [[v]] = 6 m/s, and [[p]] = 72 kg*m/s.

For the disk:

{{f:segunda_ley_rotacional}}

{{f:momento_angular}}

{{f:momento_angular}}

In the rotational branch, substitution gives [[alpha]] = 1.5 rad/s^2, [[omega]] = 6 rad/s, and [[L]] = 3.6 kg*m^2/s. The numerical equality between [[a]] and [[alpha]] in this case is scenario-specific, not a physical identity.

## Dimensional validation

In the linear branch, dividing net force by mass gives linear acceleration units. In the rotational branch, dividing torque by moment of inertia gives angular acceleration units. The final momenta have different units, but in both cases they describe accumulated dynamical state.

## Physical interpretation

The result gives a useful teaching coincidence: the numerical value of the linear acceleration matches the numerical value of the angular acceleration in this example. That does not mean translation and rotation are identical. It only means both branches were chosen with the same proportion between net cause and inertia.

The second important reading concerns dynamical state. After four seconds, the cart stores linear momentum and the disk stores angular momentum. That comparison shows why the leaf does not stop at the pair force and torque, but also needs the pair formed by the two momenta.

# Real-world example

## Context

A production line coordinates two subsystems. A linear cart moves boxes across a short track and a rotating table reorients them before packaging. The technical team wants a first estimate of whether both actuators are working under comparable dynamical demand. The analogy is useful here not to merge units, but to compare physical structure.

## Physical estimation

Assume the cart has an effective mass [[m]] of 40 kilograms and available [[F_net]] of 80 newtons. The rotating table has moment of inertia [[I]] of 5.0 kilogram meter squared and available net torque [[tau]] of 10 newton meter. This is not a final design calculation. It is a first quantitative estimate used to judge whether the actuation split is balanced.

With those values, the expected linear acceleration is:

{{f:segunda_ley_traslacional}}

The expected angular acceleration is:

{{f:momento_angular}}

The first diagnosis is straightforward. Both branches operate with a cause to inertia ratio of the same order. That suggests that, during startup, neither subsystem is obviously oversized or obviously underpowered relative to the other. The estimate is already strong enough to support a preliminary engineering decision about control balance.

If both subsystems operate for 3 seconds from rest, the predicted speeds are:

{{f:segunda_ley_traslacional}}

{{f:segunda_ley_rotacional}}

The accumulated dynamical states then become:

{{f:momento_lineal}}

{{f:momento_angular}}

## Interpretation

The correct reading is not to ask whether eighty newtons are larger or smaller than ten newton meters. That direct comparison is physically empty. The correct reading is to compare the expected response in each coordinate and the state that each actuator leaves stored by the end of the useful interval.

That has immediate practical value. If the rotating table looks slow, the team should not conclude that the subsystem simply lacks "force". It should check whether the available torque is small for the actual rotational inertia of the table. In the same way, if the cart responds poorly, the relevant question is not what torque the other subsystem has, but whether the cart net force is adequate for its effective mass.

This estimate also helps with braking and control. A subsystem may not accelerate very much and still store substantial dynamical state by the end of motion. For the table that appears as angular momentum. For the cart it appears as linear momentum. The analogy reminds the engineer that both stored states matter when the goal is to stop, synchronize, or correct motion.

The operational conclusion is that this leaf transfers judgment, not units. It helps ask whether the cause to inertia ratio is reasonable in each branch, whether the accumulated state will be easy to dissipate, and whether a behavior difference comes from the dynamical law itself or from a poorly built model.