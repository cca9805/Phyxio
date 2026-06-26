# Exam-type example: the train and the platform

## Problem statement

A train moves at a constant speed of 12 m/s relative to the platform. Inside the carriage, a passenger walks toward the front at a constant speed of 1.5 m/s relative to the train floor. At the initial instant [[t_global]] = 0, the origin of the train frame [[O']] coincides with the carriage door, and this door is 48 m ahead of the origin of the platform frame [[O]] . The passenger is 2 m ahead of the door inside the carriage. Find the passenger's position relative to the platform and her velocity relative to the platform after 4 s.

## Data

We will use two reference frames [[frame_sigma]] . The first is the platform frame (fixed frame), with origin [[O]] at a mark on the ground. The second is the carriage frame (moving frame), with origin [[O']] at the carriage door. We will use the same positive x-axis to the right for both frames and the same classical time [[t_global]] .

Numerical data:
- Moving frame velocity [[v_frame]] = 12 m/s.
- Passenger's velocity in the moving frame [[v_prime]] = 1.5 m/s.
- Initial position of the moving origin relative to the fixed origin x0 = 48 m.
- Initial position of the passenger relative to the moving origin posici?n interna inicial de 2 m.
- Observation time [[t_global]] = 4 s.

Writing the data this way reveals that [[v_frame]] belongs to the relative motion between frames and [[v_prime]] belongs to the passenger's position inside the train. If these two levels are mixed too early, the problem loses physical meaning even if the final numerical sum looks clean.

## System definition

The relevant physical system is the passenger, but the question cannot be answered without precisely defining the observer. Therefore, it is not enough to say "the passenger's position"; one must specify whether it is relative to the platform frame or the carriage frame [[frame_sigma]] . The platform origin [[O]] and the carriage origin [[O']] are not interchangeable. Each sets its own zero coordinate and its own reading of the position [[r_vec]] .

## Physical model

A Galilean model is adopted with two frames moving relative to each other at a constant speed [[v_frame]] . In this model, the physical event is unique, but its description changes when changing the frame [[frame_sigma]] . The magnitude translated between frames is the position [[r_vec]] ; the magnitude linking both frames is [[v_frame]] ; and the common parameter is [[t_global]] .

## Model justification

This model is valid because the train does not accelerate appreciably during the analyzed interval, both axes are considered parallel, and no relativistic effects are needed. The change of observer only requires a Galilean translation. We neglect small oscillations in motion or variations in the passenger's pace because they do not change the dominant physical idea: distinguishing the passenger's own velocity inside the train from the train's velocity relative to the ground.

## Symbolic solution

First, we describe the passenger in the train (moving) frame:
x'(t) = x'_0 + v' * t

Next, we translate this position to the platform (fixed) frame using the **Galilean position transformation**:

{{f:trans_galileo_pos}}

Substituting the internal motion expression into the transformation gives:
x(t) = (x'_0 + v' * t) + x_0 + v_f * t

Grouping by physical meaning:
x(t) = (x'_0 + x_0) + (v' + v_f) * t

Two contributions appear: the accumulated initial displacement and the effect of the added velocities. For the velocity relative to the platform [[v]] , we apply the **Galilean velocity transformation**:

{{f:trans_galileo_vel}}

{{f:invarianza_tiempo}}

{{f:invarianza_distancia}}

## Numerical substitution

The passenger's position relative to the carriage after 4 s is:
x'(4) = 2 + 1.5 * 4 = 8 m

The position of the carriage origin relative to the platform at the same time is:
x_{origin}(4) = 48 + 12 * 4 = 96 m

Therefore, the total passenger position relative to the platform is:
x(4) = 8 + 96 = 104 m

The passenger's velocity relative to the platform [[v]] is:
v = 1.5 + 12 = 13.5 m/s

## Dimensional validation

The position equation combines lengths ([L]), while the velocity one preserves units of [L/T]. There is no dimensional inconsistency. Furthermore, the sign is reasonable: both the passenger and the train move to the right, so the velocity relative to the platform must be positive and greater than the velocity relative to the carriage.

## Physical interpretation

The result x(4) = 104 m does not mean the passenger has "changed reality." It means the same person is being described from another frame [[frame_sigma]] , with another origin [[O]] , and with an additional part of motion due to the moving frame's displacement. The velocity of 13.5 m/s does not contradict the 1.5 m/s observed inside the train; both are correct for their respective observers.

---

# Real-world example: automated warehouse

## Context

In an automated warehouse, a camera is mounted on a moving platform traveling along an aisle at a constant speed [[v_frame]] . The camera must identify whether a box on a secondary belt is moving relative to the platform or is stationary on it. The vision software must decide from which frame [[frame_sigma]] it is describing the scene.

## Physical estimation

Take a platform speed of 2 m/s and a box speed of 0.3 m/s relative to the platform; the ground-frame reading is therefore about 2.3 m/s, while local grasping is governed by 0.3 m/s. This quantitative estimate shows why frame choice changes the control decision.

The platform moves at 2 m/s relative to the floor, while the box moves at only 0.3 m/s relative to the platform. If the algorithm confuses both levels, it will conclude the box is moving fast even if it is almost stationary relative to the robot's gripper. The dominant value for global tracking is [[v_frame]] , but for local grasp control, it is the box's velocity within the platform frame.

## Interpretation

The operational decision changes with the chosen frame. If the goal is to avoid colliding with a shelf, the ground-fixed frame is relevant. If the goal is to close the gripper on the box, a frame following the platform is better as it keeps the relative position [[r_vec]] nearly constant. The same event produces two useful descriptions, and neither is dispensable.
