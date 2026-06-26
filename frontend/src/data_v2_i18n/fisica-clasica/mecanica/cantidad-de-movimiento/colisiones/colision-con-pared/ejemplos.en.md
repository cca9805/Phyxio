# Exam-type example

## Problem statement

An analysis is performed on the impact of a basketball of mass [[m]] equal to 0.60 kg thrown against a vertical concrete wall. The ball impacts obliquely with an initial velocity [[vi]] of 15 m/s, forming an angle of incidence [[theta_i]] of 30° with the wall normal. It has been experimentally determined that the coefficient of restitution [[e]] for this pair of materials is 0.80. Assuming that the wall is perfectly smooth and that the contact time [[Delta_t]] during impact is 0.02 seconds, it is requested to:
1. Calculate the normal and tangential components of the velocity after the rebound, [[vfn]] and [[vft]].
2. Determine the magnitude of the final velocity [[vf]] and the rebound angle [[theta_f]].
3. Quantify the linear impulse [[J]] exerted by the wall and the average impact force [[F_avg]].
4. Calculate the kinetic energy loss [[DeltaK]] produced by the collision.
5. If this collision had occurred after a free fall, how would it relate to the rebound height [[hf]]?

## Data

For the resolution, we organize the physical parameters:
- **Inertial properties**: Mass [[m]] = 0.60 kg.
- **Initial kinematic state**: Velocity [[vi]] = 15 m/s with angle [[theta_i]] = 30°.
- **Contact parameters**: Coefficient of restitution [[e]] = 0.80 and contact time [[Delta_t]] = 0.02 s.

A reference system is assumed where the wall normal points in the positive direction of the X-axis for the rebound.

## System definition

The physical system is composed of the ball in interaction with the wall. Due to the enormous difference in masses, the wall is modeled as a fixed object of infinite mass that does not move or absorb linear momentum macroscopically. All momentum transfer is translated into the ball's change in velocity [[vf]]. The system is considered isolated regarding impulsive forces during the very brief interval of the collision.

## Physical model

The smooth wall collision model is applied. In this framework, the coefficient of restitution [[e]] only affects the velocity component perpendicular to the surface [[vfn]], while the parallel (tangential) component [[vft]] is fully preserved. Newton's laws in their impulsive form and the mechanical energy [[K]] balance will be used to quantify dissipation [[DeltaK]].

## Model justification

The choice is justified by the nature of the contact. Being a "smooth" concrete wall, tangential friction forces during impact are negligible compared to the enormous normal restitution force. Therefore, the conservation of the tangential component [[vft]] is an excellent approximation. The use of the coefficient [[e]] allows avoiding the analysis of complex elastic deformations of the ball, summarizing all contact physics into a single robust experimental parameter. If we were facing a rough surface, the tangential conservation model would fail.

## Symbolic solution

The procedure is broken down into the following analytical steps:

1. **Initial velocity decomposition**:
   Normal [[vin]] and tangential [[vit]] components are obtained using the projection of the initial velocity [[vi]] onto the normal and parallel axes to the surface.

2. **Rebound component calculation**:
   We apply the law of restitution for the normal component [[vfn]]:

{{f:vfn}}

   And the smooth wall condition for the tangential one [[vft]]:

{{f:vft}}

3. **Final velocity composition**:
   The magnitude of the final velocity [[vf]] is obtained through the vector sum of its components and the angle [[theta_f]] through the modified law of reflection:

{{f:rebound_angle}}

4. **Impulsive analysis**:
   Impulse [[J]] is calculated from the change in momentum experienced by the body of mass [[m]]:

{{f:impulse_wall}}

   Average force [[F_avg]] is derived from the relationship between total impulse [[J]] and contact duration [[Delta_t]]:

{{f:average_force_wall}}

5. **Energy balance**:
   Energy dissipation [[DeltaK]] is obtained by evaluating the net change in the system's kinetic energy [[K]] after the impact:

{{f:energy_loss_wall}}

6. **Relation with heights**:
   As a consistency check of the leaf, the relationship between rebound height [[hf]] and drop height [[h0]] would be given by:

{{f:rebound_height}}

## Numerical substitution

We perform the calculations with the provided values:

1. **Initial components**:
   The initial normal component [[vin]] is -12.99 m/s (towards the wall) and the tangential component [[vit]] is 7.50 m/s.

2. **Exit components**:
   Using the value 0.80 for [[e]], we obtain a final normal component [[vfn]] of 10.39 m/s, while the tangential component [[vft]] remains at 7.50 m/s.

3. **Final velocity and angle**:
   The resulting final speed [[vf]] is approximately 12.81 m/s, with a rebound angle [[theta_f]] of 35.8 degrees relative to the normal.

4. **Impulse and Force**:
   The net impulse [[J]] is 14.03 N s. When divided by the contact time [[Delta_t]], it results in an average force [[F_avg]] of 701.5 N.

5. **Energy dissipated**:
   Initial kinetic energy [[K]] is 67.5 J and final is 49.2 J, yielding a loss [[DeltaK]] of 18.3 J.

## Dimensional validation

All obtained magnitudes respect the International System units. It is verified that the calculated value complies with the system's thermodynamic restriction for the coefficient [[e]]:

{{f:rango_e}}

This ensures there is no net energy [[K]] gain in the passive collision.

## Physical interpretation

The results reveal a behavior typical of a partially inelastic collision, where the energy exchange is inherently imperfect due to the non-ideal nature of real materials. The object exits the impact having lost a substantial fraction of its original capacity for motion, which qualitatively indicates that the material has absorbed a significant portion of the impact's intensity through internal work and micro-structural rearrangements. This localized loss of velocity, appearing exclusively on the axis perpendicular to the rigid surface, breaks the specular symmetry of the trajectory. Consequently, the exit angle is wider than the entrance angle, meaning the ball effectively "drifts away" from the normal more aggressively than it approached it. This asymmetry is the macroscopic signature of the restitution coefficient's governing role in dissipative dynamics.

From a deeper dynamical perspective, the fact that such a massive change in momentum occurs over an extremely short time interval implies that the average interaction forces must reach astronomical levels to decelerate and then accelerate the body in the opposite direction. The wall acts as an immovable inertial barrier that forces the projectile to internalize all the thermodynamic consequences of the contact. This process perfectly illustrates the degradation of ordered kinetic energy into randomized thermal energy and acoustic pressure waves. The "sound of the bounce" is, in fact, the audible evidence of energy leaving the mechanical system and entering the environment as irreversible disorder.

Ultimately, the causal interpretation of this result is a cornerstone of safety and materials science: the object loses approximately twenty percent of its normal velocity in each encounter. This behavior proves that no surface is a truly passive observer; instead, every rigid boundary acts as an energy sink that dictates the eventual decay of the system's mechanical life. In any real-world scenario, this inescapable dissipation is what guarantees that all physical objects eventually come to a state of rest after a finite number of interactions, fulfilling the second law of thermodynamics in every bounce.

# Real-world example

## Context

Consider a quality control scenario in a sports materials factory. It is desired to verify compliance with the regulations for a high-competition tennis ball. The standard procedure consists of a vertical free-fall test onto a perfectly rigid granite plate. The ball is released from an initial height [[h0]] of 2.00 meters. After impact, the maximum height of the first bounce [[hf]] is measured. In our test, a bounce height [[hf]] of 1.28 meters is recorded. It is required to determine the coefficient of restitution [[e]] of the lot and predict the maximum height after the third bounce.

## Physical estimation

The preliminary qualitative analysis suggests that the collision is highly efficient, yet it exhibits a clear and measurable loss of mechanical potential energy. Given that the object manages to recover significantly more than half of its original elevation after the first contact, we can infer that the polymer material possesses a superior elastic memory. However, the measurable difference between the initial and final heights serves as an undeniable proof that a portion of the system's energy has been irreversibly transformed at the microscopic level. This estimation prepares us for a restitution value that is close to the ideal limit, which is the hallmark of high-performance athletic equipment designed to maximize energy return for the player.

## Interpretation

To obtain the precise technical value, we apply the experimental derivation formula that links fall kinematics with material response:

{{f:rebound_height}}

Substituting the measured values, we obtain a coefficient of restitution exactly equal to 0.80.

The deep physical interpretation of this result confirms that the ball's molecular structure is optimized for rapid deformation recovery. The inability to return to the original height is not a failure, but a characteristic limitation imposed by material hysteresis and the viscous resistance of the surrounding air. In this specific scenario, the Earth's colossal mass acts as a perfect sink for the impulse, allowing the projectile to manifest the full phenomenology of the rebound without any detectable motion of the ground. This calibration process is vital for the sport, as it ensures that every ball in a competition behaves with a level of predictability and consistency that allows athletes to rely on their muscle memory. Furthermore, the geometric decay of the height in successive bounces provides a clear timeline of how energy is bled out of the system, illustrating the transition from a highly dynamic state to eventual thermal equilibrium with the environment.

