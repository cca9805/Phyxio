# Exam-type example

## Problem statement
A cylindrical steel flywheel of mass 1500 kg and radius 1.2 m initially rotates at a constant [[velocidad-angular]] of 300 rad/s. Suddenly, a generator is coupled that applies a constant resistive [[torque]] of 450 N·m. Calculate the time required for the system to reduce its speed by half and determine the total [[posicion-angular]] covered by the flywheel during this braking process. Additionally, evaluate the initial instantaneous power and the tangential velocity of a point on the flywheel's rim at the final instant of the process.

## Data
- Flywheel mass (M): 1500 kg
- Flywheel radius (R): 1.2 m
- Initial angular velocity (omega_0): 300 rad/s
- Final angular velocity (omega_f): 150 rad/s (half of the initial value)
- Constant resistive [[torque]] (tau): -450 N·m (negative value indicating that the [[torque]] vector opposes the initial angular velocity vector)

## System definition
The system is defined as a rigid body with cylindrical symmetry rotating exclusively around a fixed principal axis of inertia. There are no translational movements of the center of mass, so all the system's energy is purely rotational. The dynamic variables are coupled through Newton's second law for rotation, treating the system as a collection of particles whose distance from the axis remains invariable throughout the entire braking process.

## Physical model
We adopt the model of an ideal solid cylinder of uniform density, where the [[momento-de-inercia]] depends quadratically on the radius. The kinematic behavior is defined by the [[posicion-angular]] and the [[velocidad-angular]], while the dynamic response depends on the [[aceleracion-angular]] produced by the applied net [[torque]]. It is assumed that the rotation axis is perfectly rigid and that there are no precession effects, allowing for a one-dimensional angular analysis.

## Model justification
Choosing a rigid body is appropriate given that industrial-grade steel has an extremely high Young's modulus, ensuring that torsional deformations are orders of magnitude smaller than the total angular displacement. The constant [[torque]] hypothesis is valid for electronically controlled regenerative braking systems. Ignoring air friction is acceptable as a first approximation if the flywheel operates in a protected chamber or if the applied [[torque]] is significantly higher than residual aerodynamic drag forces.

## Symbolic solution
The resolution begins with determining the system's inertial constant:
{{f:posicion-angular-definicion}}
Applying Newton's second law for rotation, we obtain the constant angular acceleration:
{{f:segunda-ley-rotacion}}
We use the rotational kinematic equation for the braking time:
{{f:posicion-angular-definicion}}
For the total angular displacement, we turn to the angular position relation under constant acceleration:
{{f:posicion-angular-definicion}}
Instantaneous power is calculated as

{{f:posicion-angular-definicion}}

.
Finally, tangential velocity is found using the linear-angular relation:
{{f:relacion-lineal-angular-v}}

## Numerical substitution
1. **Moment of inertia (I):**
   {{f:posicion-angular-definicion}}
2. **Angular acceleration (alpha):**
   {{f:posicion-angular-definicion}}
3. **Partial braking time (t):**
   {{f:posicion-angular-definicion}}
4. **Total angular displacement ([[posicion-angular]]):**
   {{f:posicion-angular-definicion}}
5. **Final tangential velocity (v_f):**
   {{f:posicion-angular-definicion}}

## Dimensional validation
- **Inertia (I):**

{{f:posicion-angular-definicion}}

. Correct.
- **Acceleration ([[aceleracion-angular]]):**

{{f:posicion-angular-definicion}}

(rad/s²). Correct.
- **Angle ([[posicion-angular]]):**

{{f:posicion-angular-definicion}}

. Correct.
- **Velocity (v):**

{{f:relacion-lineal-angular-v}}

. Correct.

## Physical interpretation
The result of 81000 radians **indicates** that the flywheel covers nearly thirteen thousand complete revolutions before reducing its speed by half. This **means** that the system possesses considerable rotational inertia that effectively **opposes** abrupt changes in motion. The negative acceleration **indicates** that the applied [[torque]] **decreases** the system's kinetic energy in a controlled manner. Physically, this is **consistent** with the fact that the resistive [[torque]] extracts work from the system to convert it into electricity. Furthermore, the tangential velocity value **depends** directly on the radius, which **implies** that structural stresses are higher at the rim, where the material **dominates** the dynamic response against centripetal force. This whole process **physically** demonstrates how rotational energy can be managed safely.

# Real-world example

## Context
In modern renewable energy microgrids, high-speed flywheel energy storage systems (FESS) made of carbon fiber are used. These devices operate in vacuum chambers to eliminate air friction and use magnetic levitation bearings. A typical flywheel of this type can rotate at speeds of up to 50000 RPM. Its primary function is to act as a frequency buffer, injecting or absorbing energy in milliseconds to stabilize the electrical grid against the intermittency of solar or wind sources.

## Physical estimation
For a 100 kg flywheel with a 0.4 m radius spinning at 30000 RPM, the stored energy is on the order of tens of megajoules. The velocity at the disk's periphery reaches supersonic values (

{{f:relacion-lineal-angular-v}}

), creating immense internal stresses. A reasonable estimation of the system's response time is less than 20 ms, making it orders of magnitude faster than a conventional thermal plant. The cost per energy unit is high, but the cost per cycle is extremely low, justifying its use in critical infrastructure.

## Interpretation
The critical advantage of the flywheel over chemical batteries is its ability to perform millions of charge and discharge cycles without degradation. The physical interpretation of its operation is based on precise manipulation of angular momentum. When there is excess energy in the grid, the system accelerates the disk by increasing its [[velocidad-angular]]; when there is a deficit, the disk slows down to deliver energy. Precision in controlling [[posicion-angular]] is fundamental so that the generated alternating current's frequency is exactly 50 Hz or 60 Hz, avoiding damage to sensitive equipment.