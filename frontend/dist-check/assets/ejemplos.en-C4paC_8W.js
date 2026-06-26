const e=`\uFEFF# Exam-type example: Center of Mass of a Four-Particle System (2D)

## Problem statement

An engineering team is designing a support platform for a precision instrument. To ensure stability, they need to locate the center of mass of the system composed of four point masses distributed in a horizontal plane:
- Particle A: [[m1]] with a value of 2.0 kg located at position [[x1]] of 0.0 m and y1 of 0.0 m.
- Particle B: [[m2]] with a value of 3.0 kg located at position [[x2]] of 4.0 m and y2 of 0.0 m.
- Particle C: m3 with a value of 5.0 kg located at position x3 of 2.0 m and y3 of 6.0 m.
- Particle D: m4 with a value of 10.0 kg located at position x4 of 2.0 m and y4 of 2.0 m.

Calculate the total system mass [[M]], the center-of-mass coordinates ([[xcm]], [[ycm]]), and verify if the result lies within the region bounded by the masses. Analyze how the most massive particle (m4) conditions the final result relative to the masses [[m1]] and [[m2]].

## Data

- [[m1]] is 2.0 kg; [[x1]] is 0.0 m; y1 is 0.0 m.
- [[m2]] is 3.0 kg; [[x2]] is 4.0 m; y2 is 0.0 m.
- m3 is 5.0 kg; x3 is 2.0 m; y3 is 6.0 m.
- m4 is 10.0 kg; x4 is 2.0 m; y4 is 2.0 m.

## System definition

The system under study is a discrete configuration of four bodies that interact as a single rigid entity regarding their collective translation. Being distributed in a two-dimensional (XY) plane, locating the center of mass requires the independent calculation of the [[xcm]] and [[ycm]] coordinates. The system is considered isolated from dissipative external forces, and the masses are treated as material points concentrated at their respective geometric coordinates. This abstraction allows ignoring the internal geometry of the objects and focusing exclusively on the distribution of the inertia of the set.

## Physical model

The physical model is based on the principle of superposition of mass moments. The center of mass ([[rcm]]) is defined as the point where the entire system mass [[M]] can be considered concentrated for translational analysis purposes. Mathematically, this translates into a weighted average where the position of each particle ([[x_i]], [[y_i]]) has a statistical weight proportional to its mass [[m_i]].

The fundamental relations of the model are:
1. The total mass [[M]] is the scalar sum of all individual contributions.
2. The [[xcm]] coordinate depends linearly on the positions [[x1]], [[x2]] and the rest of the horizontal components.
3. The [[ycm]] coordinate depends on the vertical distribution.

This model predicts that the center of mass will shift preferentially towards the regions where the mass density is higher, regardless of the geometric distance from the origin.

## Model justification

The choice of a discrete model is appropriate because the number of bodies is small (four) and their physical dimensions are negligible compared to the distances separating them. The use of continuous densities or volume integrals is not required, as the masses are clearly localized. Using separate scalar components for [[xcm]] and [[ycm]] is justified by the orthogonality of the axes in Euclidean space, allowing the problem to be solved as two independent one-dimensional averages. Furthermore, the model assumes that the gravitational field is uniform over the entire extent of the system, which ensures that the center of mass coincides with the center of gravity.

## Symbolic solution

1. Determination of the total system mass [[M]]:
{{f:M_sum}}

2. Application of the summation for the horizontal center-of-mass component [[xcm]]:
{{f:xcm_sum}}

3. Application of the summation for the vertical center-of-mass component [[ycm]]:
{{f:ycm_sum}}

4. Expression of the final position vector [[rcm]]:
{{f:rcm_vector}}

## Numerical substitution

- **Total mass**:
[[M]] is obtained by adding [[m1]], [[m2]], m3, and m4 for a total of 20.0 kg.

- **x-component**:
[[xcm]] is calculated by dividing the sum of products by the total mass.
[[xcm]] results in a value of 2.1 m.

- **y-component**:
[[ycm]] is calculated by dividing the sum of products by the total mass.
[[ycm]] results in a value of 2.5 m.

- **Final vector**:
[[rcm]] has a location of 2.1 meters in x and 2.5 meters in y.

## Dimensional validation

The verification of units is a critical step to confirm the procedure's coherence. In the formulas used, the numerator has units of mass times length (kg·m) due to the product of mass times position. The denominator has units of mass (kg). Therefore, the division results in:
Mass times length units divided by mass result in length.
Which matches the expected unit for a position (meters in SI). This dimensional consistency ensures that no terms have been omitted in the summation nor have invalid algebraic operations been performed between quantities of a different nature.

## Physical interpretation

The result for [[rcm]] yields a value of 2.1 meters along the horizontal axis and 2.5 meters along the vertical axis. Although masses [[m1]] and [[m2]] are located at the base (where y is zero), the center of mass rises considerably due to the influence of the upper masses m3 and m4. It is notable to observe that m4, representing 50% of the total mass [[M]], acts as a gravitational anchor: the final center of mass is very close to the coordinates where x is 2.0 and y is 2.0 of this dominant particle.

From the stability point of view, the fact that [[xcm]] is 2.1 m indicates that the system is almost perfectly balanced horizontally relative to the geometric center of the set (which would be at a position of x equal to 2.0 m). The slight shift to the right (0.1 m) is because [[m2]] (3.0 kg) is heavier than [[m1]] (2.0 kg), breaking the horizontal symmetry of the base. This analysis demonstrates that the center of mass is not just a geometric point, but the place where the inertia of all components is balanced, allowing the prediction that if the system were supported at the point with coordinates x equal to 2.1 and y equal to 2.5, it would have no tendency to rotate under gravity.

# Real-world example: Load Balancing in a Transport Drone

## Context

In logistical transport using multirotor drones, load distribution is the determining factor for flight autonomy and operational safety. If the center of mass of the load (composed of several discrete packages) does not coincide with the drone's central axis of thrust, the motors will have to work asymmetrical, increasing battery consumption and the risk of mechanical failure due to overheating. Let's consider a drone carrying four medical supplies placed in different compartments of its chassis.

## Physical estimation

Suppose the packages have unequal masses. If the front package ([[m1]]) is light and the rear package (m4) is very heavy, the drone's barycenter will shift backwards. On-board sensors will detect this shift through the natural tilt of the chassis. Engineers must perform a quick estimate: if the total load [[M]] is 20 kg and the CM shifts more than 5 cm from the central axis, the flight control software will enter emergency mode.

In our previous example, with a CM at x equal to 2.1 and y equal to 2.5, if the drone's axis were at x equal to 2.0 and y equal to 2.0, we would have an eccentricity of 0.1 m on the x-axis and 0.5 m on the y-axis. This quantitative estimation allows deciding whether it is necessary to relocate the packages or add counterweights to return the center of mass to a safe zone.

## Interpretation

The interpretation of these data is what separates a successful flight from an accident. The center of mass acts as the point of application of the inertial force during accelerations. If the drone attempts to move forward quickly, inertia will pull from the point with coordinates x of 2.1 and y of 2.5. Since this point is elevated relative to the motor base, a rotational moment will be generated that will tend to tilt the drone backwards.

Understanding the barycenter location allows optimizing the vehicle's control laws. In short, discrete system physics provides the mathematical tool to convert a chaotic cloud of masses into a single manageable analytical point, radically simplifying the complexity of flight dynamics and allowing precise and safe navigation in critical environments. Without this calculation, the control of any multi-body system would be an extremely costly and dangerous trial-and-error task.
\r
`;export{e as default};
