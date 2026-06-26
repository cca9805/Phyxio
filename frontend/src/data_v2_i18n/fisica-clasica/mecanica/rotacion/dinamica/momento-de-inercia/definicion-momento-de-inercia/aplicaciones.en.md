# Applications: Definition of the Moment of Inertia

## 1. Flywheel design

In combustion engine engineering and energy storage systems, **flywheels** are designed by maximizing the radius of mass distribution. Concentrating the greatest part of the mass at the outer edge achieves the largest possible moment of inertia with the least total mass, thanks to the quadratic dependence

{{f:definicion_continua}}

.

This geometry optimizes the ratio between stored energy and total component mass, which is the critical parameter in portable systems such as Formula 1 KERS devices. A hollow-ring flywheel of radius R has

{{f:definicion_continua}}

, twice that of a solid disk of equal mass and radius (

{{f:definicion_continua}}

). However, the hollow ring concentrates all centrifugal stress on the outer wall, limiting the maximum safe angular velocity.

The energy storage capacity is

{{f:energia_rotacional}}

: doubling [[omega]] quadruples the energy, but also quadruples the centrifugal stress. Therefore, optimal flywheel design is a balance between geometry (maximizing [[I]]) and mechanical strength (limiting [[omega]]).

Dominant variable: r (radius of mass distribution).
Validity limit: the centrifugal stress at the rim

{{f:definicion_continua}}

must not exceed the material's yield strength; above this, the rigid body model fails.

## 2. Spinning skaters and sports dives

Athletes **actively manipulate their moment of inertia** during free flight to control their angular velocity. By pulling arms and legs toward the body axis, they reduce [[r]] of their peripheral masses and [[I]] decreases. By conservation of angular momentum (no external torque), [[omega]] increases proportionally.

This is the only available physical mechanism: in the absence of external torque, speed and inertia exchange inversely. The athlete converts this into a precise technical skill. In a 10 m platform dive, the athlete has approximately 1.4 s of flight time. A professional skater can go from

{{f:energia_rotacional}}

 kg·m² (arms extended) to

{{f:energia_rotacional}}

kg·m² (arms tucked), tripling their angular velocity without any external intervention.

Dominant variable: r (distance of limb mass from the body axis).
Validity limit: the model applies only during free-flight phases without ground or water contact. During takeoff or landing, external torques alter angular momentum.

## 3. Tire and wheel balancing

A tire with **asymmetric mass distribution** relative to the rotation axis has an off-center moment of inertia that generates variable centrifugal forces. At high speeds this produces vibrations that damage the suspension and ride comfort. Counterweights are added to align the principal inertia axis with the actual rotation axis.

The goal is not merely to balance total mass, but to ensure the **inertia tensor** has the rotation axis as a principal axis, eliminating parasitic imbalance torques. An asymmetry of just 30 g at the rim of a 0.3 m radius wheel generates a centrifugal force exceeding 50 N at 120 km/h—enough to produce the characteristic steering wheel «shimmy» felt by the driver.

Dominant variable: I (inertia distribution relative to the rotation axis).
Validity limit: correctable only in the rigid body regime. Rubber deformation at high temperature or speed alters dynamic balance and requires periodic rebalancing.

## 4. Satellite attitude control with reaction wheels

Satellites use **reaction wheels** (disks with an integrated motor) to change their orientation without consuming propellant. By spinning an internal wheel, the satellite—with a much larger moment of inertia—rotates in the opposite direction to conserve the system's total angular momentum.

The design requires knowing each satellite component's moment of inertia precisely: solar panels, antennas, structure. A 5% error in I produces an equivalent error in the pointing maneuver speed. Earth observation satellites such as ESA's Sentinel series have I on the order of 10^3 kg·m² and use three orthogonal reaction wheels, each with

{{f:energia_rotacional}}

–0.1 kg·m², to independently control all three rotation axes.

Dominant variable: I (satellite moment of inertia about the orientation axis).
Validity limit: the model fails during solar panel deployment (I changes dynamically) or upon micrometeorite impact that redistributes mass. Real-time estimation of I(t) is then required.

## 5. High-performance running prosthetics design

Blade prosthetics for sprinters are designed to **minimize the moment of inertia** about the hip axis. Each stride requires accelerating and decelerating the prosthetic from rest to flight speed and back. A smaller I reduces the required muscular torque and allows stride frequencies impossible with heavy biological legs.

The optimization is a trade-off: reducing I implies thinner geometries that may exceed the elastic limit under ground impact. An average biological leg has

{{f:energia_rotacional}}

 kg·m² about the hip; competition prosthetics achieve values of

{{f:energia_rotacional}}

–0.5 kg·m², enabling stride frequencies 15–20% higher under the same available muscular torque.

Dominant variable: m (total mass of the prosthetic located far from the joint axis).
Validity limit: minimum I must be balanced against the required structural resistance. The prosthetic must withstand impacts of up to 6 times body weight during the contact phase.