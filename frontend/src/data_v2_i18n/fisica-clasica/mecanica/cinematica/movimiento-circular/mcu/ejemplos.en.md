# Exam-type example: Communications Satellite Orbit

## Problem statement

A communications satellite orbits the Earth in a stable circular path at a constant altitude, allowing it to function as an efficient signal repeater. These types of orbits are fundamental to the global telecommunications infrastructure, enabling the transmission of data, television, and internet services across vast distances. In this specific scenario, the satellite completes one exact revolution around our planet every 12 hours. The total radius of its orbit, meticulously measured from the geometric center of the Earth to the satellite's center of mass, is 20,000 km. The goal of this exhaustive analysis is to characterize the satellite's kinematics in detail to understand the extreme physical magnitudes and dynamic equilibrium conditions under which these technological marvels operate in the space environment.

Determine the following physical parameters with precision:
1. The angular velocity of the satellite expressed in radians per second to quantify its spatial rotation rate.
2. The tangential speed at which it moves in its orbit to understand the magnitude of its linear progress through the vacuum.
3. The centripetal acceleration it is permanently subjected to in order to maintain said perfect circular path without escaping into deep space due to inertia.
4. The angular displacement (in radians) that the satellite sweeps in a time interval of 3 hours during its surveillance mission.
5. The total number of revolutions [[N]] that the satellite completes after one day of operation (24 hours).

## Data

To solve the problem with scientific rigor, we organize the known magnitudes ensuring their consistency in the International System of Units (SI):
*   Rotation period [[T]] : 12 h (time needed to complete a 360-degree cycle or 2*pi radians).
*   Orbital radius [[R]] : 20,000 km (constant radial distance from the terrestrial rotation center). It is equivalent to 20,000,000 meters.
*   Time interval [[dt]] for the fourth question: 3 h (equivalent to 10,800 s).
*   Implicit constants: We consider the path to be a perfect circumference, which simplifies the initial kinematic analysis.

## System definition

The physical system under study consists of a single object, the artificial satellite, which for the purposes of this kinematic analysis is treated under the point particle model. This simplification is fully valid since the satellite's structural dimensions (a few meters) are orders of magnitude smaller than its orbital radius (millions of meters), meaning its internal geometry does not affect the global trajectory calculations. The inertial reference center is located at the center of the Earth, which we consider as a fixed point in space for this specific time frame. The motion is described in the two-dimensional orbital plane using a polar coordinate system (radius and angle). The only relevant vector directions are the radial direction (pointing toward the Earth's center and defining the acceleration) and the tangential direction (defining the instantaneous direction of motion).

## Physical model

The **Uniform Circular Motion (UCM)** model is applied for this analysis. This ideal model describes the motion of a body traveling along a circumference with constant speed, sweeping equal angles in equal time intervals. The core magnitudes defining this state are the angular velocity [[omega]] , the period [[T]] , the centripetal acceleration [[ac]] , and the angular displacement [[dtheta]] . The defining characteristic is that, although the magnitude of velocity (speed) does not change, the direction of the velocity vector varies continuously due to the presence of a constant radial acceleration. This model is a precise representation of circular orbits where there are no significant resistance forces.

## Model justification

The choice of UCM as the analysis model is fully justified in this scenario for three main reasons. First, the statement specifies that the satellite maintains a constant altitude, which guarantees an invariant [[R]] , a fundamental requirement for the circular path. Second, being located in the vacuum of outer space, far from the dense layers of the Earth's atmosphere, dissipative forces such as air friction are negligible, allowing [[omega]] to remain constant without the need for continuous propulsion. Finally, for a satellite in stable orbit, the force of gravity acts as the net force that provides exactly the necessary acceleration to curve the path. The model would only cease to be valid if the satellite performed propulsion maneuvers to change orbits or if it were in such a low orbit that atmospheric friction caused a spiral orbital decay.

## Symbolic solution

The resolution process is divided into four logical stages that link angular magnitudes with linear and temporal ones:

**Stage 1: Calculation of the angular rotation rate**
Angular velocity is defined as the total angle swept (one full revolution or 2*pi radians) divided by the total time taken (the period):

{{f:mcu_omega_periodo}}

**Stage 2: Determination of tangential speed**
Tangential speed links angular displacement with the physical distance traveled. It is obtained by multiplying the angular velocity by the radius of the path:

{{f:mcu_relacion_lineal}}

**Stage 3: Calculation of curvature acceleration**
Centripetal acceleration is the magnitude that quantifies the change in direction of the velocity vector. It can be expressed as the ratio between the square of the tangential speed and the radius of the orbit:

{{f:mcu_aceleracion_v}}

**Stage 4: Calculation of angular displacement in a segment**
The angle swept in any segment is obtained by multiplying the constant angular velocity by the duration of the time interval considered:

{{f:mcu_desplazamiento_angular}}

**Stage 5: Full cycle count**
To find the number of revolutions, we divide the total angular displacement by the angle of one revolution (2*pi):

{{f:mcu_vueltas}}

## Numerical substitution

We perform the calculations ensuring precision in each intermediate step:

**Step 1: Time synchronization**
We convert the period [[T]] to seconds to operate in SI: twelve hours result in 43,200 s. We also convert the interval [[dt]] of three hours to seconds, obtaining a value of 10,800 s.

**Step 2: Obtaining angular velocity**
We apply the symbolic relation from Stage 1:

{{f:mcu_omega_periodo}}

The resulting value for [[omega]] is approximately 0.0001454 rad/s.

**Step 3: Obtaining tangential speed**
We use the linear connection formula with the radius in meters (20,000,000 m):

{{f:mcu_relacion_lineal}}

The resulting value for [[v]] is 2,908 m/s (nearly 3 km/s).

**Step 4: Obtaining centripetal acceleration**
We use the expression for radial acceleration:

{{f:mcu_aceleracion_v}}

The value for [[ac]] is 0.423 m/s².

**Step 5: Obtaining angular displacement**
We apply the definition of angular displacement for the 3-hour interval:

{{f:mcu_desplazamiento_angular}}

*   Value of [[dtheta]] : 1.57 rad (which represents a right angle).

**Step 6: Obtaining the number of revolutions**
For a full day (24 h), which is twice the period [[T]], the satellite must complete:

{{f:mcu_vueltas}}

*   Value of [[N]] : 2 exact revolutions.

## Dimensional validation

We verify the physical consistency of the results using the **Phyxio v5 Blue Notation Style**:
*   For angular velocity: `` `[T⁻¹]` ``. Correct.
*   For tangential speed: `` `[T⁻¹] * [L] = [L T⁻¹]` ``. Correct.
*   For acceleration: `` `[L T⁻¹]² / [L] = [L T⁻²]` ``. Correct.
*   For angular displacement: `` `[T⁻¹] * [T] = [1]` ``. Correct, angles are dimensionless magnitudes.

## Physical interpretation

The results reveal a precise balance. The satellite travels at almost 3 km/s to counteract gravity and not fall, but that same gravity forces it to curve with an acceleration of 0.423 m/s². The angular displacement of 1.57 rad in 3 hours has a very clear physical meaning: the satellite covers exactly one-quarter of its total orbit in that time. This is consistent with the fact that 3 hours is one-quarter of its total period of 12 hours. UCM allows for predicting with millimeter precision where the satellite will be at any time in the future, a critical capability for maintaining global communication networks.

# Real-world example

## Context

Consider the **high-speed laboratory centrifuge**, essential in medicine for sample separation. By spinning at thousands of revolutions per minute, it generates an acceleration that dominates over Earth's gravity, allowing for density-based component separation in minutes.

## Physical estimation

To perform a robust estimation of the centrifuge's behavior, we start from a standard rotation rate of 4,000 RPM (revolutions per minute). This value must be converted to frequency [[f]] by dividing by 60 s, which gives us f ≈ 66.7 Hz. Considering a typical laboratory radius of [[R]] : 0.15 m, we estimate the following critical magnitudes:

1.  **Angular velocity:** The rotation rate in radians is [[omega]] = 2 * pi * f. We estimate an [[omega]] of approximately 419 rad/s. This means the rotor sweeps more than 400 radians every second.
2.  **Tangential speed:** At the edge of the rotor, the speed [[v]] is the product of [[omega]] and [[R]], resulting in about 62.8 m/s (more than 220 km/h).
3.  **Centripetal acceleration:** This is the dominant magnitude. We calculate [[ac]] = [[omega]]² * [[R]], which yields an estimation of 26,334 m/s². 

Comparing this [[ac]] with Earth's gravity (g ≈ 9.8 m/s²), we observe that the sedimentation acceleration is almost 2,700 times higher. This quantitative relationship explains why processes that would take days by natural decantation occur in minutes in the centrifuge.

## Interpretation

The acceleration nearly 2,700 times higher than Earth's gravity allows for rapid sedimentation of microscopic particles. The design must withstand massive mechanical stresses, as acceleration increases with the square of the angular velocity. This example illustrates how precise control of the rotation rate allows for tasks impossible under natural gravity.
