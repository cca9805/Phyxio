# Exam-type example

## Problem statement

A block of mass [[m]] rests on a rigid incline with known segment length and angle [[theta]]. The contact has static friction [[mu_e]] and, once motion begins, kinetic friction [[mu_c]]. Determine whether the block remains at rest or starts sliding, compute the critical angle [[theta_c]], and if sliding occurs, determine acceleration [[a]], final speed, and travel time.

## Data

- [[m]] = 5.0 kg
- [[theta]] = 24 degrees
- [[mu_e]] = 0.40
- [[mu_c]] = 0.28
- [[g]] = 9.8 m/s2
- Segment length: 3.0 m
- initial [[v]] = 0

Interpretation rules:

- If tan([[theta]]) <= [[mu_e]], the block may remain at rest.
- If tan([[theta]]) > [[mu_e]], static equilibrium breaks and the block slides.
- Near the threshold, careful rounding matters.

## System definition

System: a block of mass [[m]] on a fixed ramp. Relevant forces are weight, normal force [[N]], and friction [[f_r]].

Axes:

- Parallel axis: direction of possible sliding.
- Perpendicular axis: direction of contact reaction.

Core magnitudes:

- [[N]] sets the friction scale.
- [[f_s_max]] is the maximum static friction.
- [[f_r]] is kinetic friction once sliding starts.
- [[theta_c]] separates rest and motion.

## Physical model

The model has two branches.

First, the static branch:

{{f:normal_plano_inclinado}}

{{f:friccion_estatica_maxima}}

{{f:umbral_reposo}}

{{f:angulo_critico}}

If tan([[theta]]) <= [[mu_e]], the block remains at rest and static friction exactly matches the needed tangential component up to its maximum.

Second, the kinetic branch:

{{f:friccion_cinetica}}

{{f:aceleracion_plano_rozamiento}}

If tan([[theta]]) > [[mu_e]], the block slides and friction becomes kinetic. That transition is the key idea in the topic.

## Model justification

The physical justification is twofold. First, the normal force [[N]] determines how strong the contact is, and therefore how large the friction can be. Second, the critical angle [[theta_c]] compresses the whole question into a single stability test: does gravity along the plane exceed the contact's ability to hold the block?

It is not enough to say "there is friction." We must know whether the contact is holding the block at rest or dissipating energy during motion. That distinction changes the entire dynamic response.

## Symbolic solution

1. Close the normal axis:

{{f:normal_plano_inclinado}}

2. Compute the maximum static friction:

{{f:friccion_estatica_maxima}}

3. Compare with the parallel weight component to decide the regime:

{{f:umbral_reposo}}

{{f:angulo_critico}}

4. If the block slides, use kinetic friction:

{{f:friccion_cinetica}}

5. Obtain the actual acceleration on the ramp:

{{f:aceleracion_plano_rozamiento}}

6. With constant acceleration, compute final speed and time using standard kinematic relations for uniformly accelerated motion.

The symbolic key is that motion depends on comparing [[theta]] with [[theta_c]], not on the total weight alone.

## Numerical substitution

First the threshold:

- [[theta_c]] = arctan(0.40) ~= 21.8 degrees.
- Since [[theta]] = 24 degrees > [[theta_c]], the block slides.

Then the normal force:

- [[N]] = [[m]] [[g]] cos([[theta]]) = 5.0 x 9.8 x cos(24 degrees)
- [[N]] ~= 49.0 x 0.9135 ~= 44.8 N.

Maximum static friction:

- [[f_s_max]] = [[mu_e]] [[N]] = 0.40 x 44.8 ~= 17.9 N.

Parallel weight component:

- [[m]] [[g]] sin([[theta]]) = 5.0 x 9.8 x sin(24 degrees)
- ~= 49.0 x 0.4067 ~= 19.9 N.

Because 19.9 N > 17.9 N, rest is impossible.

Kinetic friction:

- [[f_r]] = [[mu_c]] [[N]] = 0.28 x 44.8 ~= 12.5 N.

Net force along the plane:

- net force ~= 19.9 - 12.5 = 7.4 N.

Acceleration:

- [[a]] = net force / [[m]] ~= 7.4 / 5.0 = 1.48 m/s2.

Final speed:

- final speed approximately 2.98 m/s.

Time:

- travel time approximately 2.01 s.

## Dimensional validation

- [[N]] and [[f_r]] are in newtons.
- [[a]] is in m/s2.
- Speed is in m/s.
- Time is in seconds.

Consistency checks:

- If [[theta]] dropped below [[theta_c]], the block should not slide.
- If [[mu_c]] increased, [[a]] should decrease.
- If [[mu_e]] increased, [[theta_c]] should also increase.

## Physical interpretation

The result teaches three important ideas. First, not every incline produces motion: there is a real angular threshold. Second, static and kinetic friction do not play the same role; one decides whether rest is broken, the other governs motion once it begins. Third, the normal force [[N]] is not a mathematical detail; it sets the friction scale.

The correct conceptual reading does not stop at [[a]]. The real message is that a small increase in [[theta]] can push the system above [[theta_c]], and then the regime changes completely.

In practice, that means the ramp is not merely a geometric surface. It is a decision boundary that determines whether a load stays put, moves gently, or moves with enough energy to require a downstream brake. That is the operational meaning of the critical angle.

# Real-world example

## Context

An industrial platform needs a discharge ramp for light boxes. The surface coating is known to have [[mu_e]] of 0.55 and [[mu_c]] of 0.42. Available segment length is 2.5 m. The team wants the ramp to help boxes move without letting them leave too fast at the exit.

Three angles are tested: 20 degrees, 30 degrees, and 35 degrees. The practical question is not only whether the boxes move, but how safely they move.

## Physical estimation

For [[mu_e]] = 0.55:

- [[theta_c]] = arctan(0.55) ~= 28.8 degrees.

Therefore:

1. At 20 degrees:

- tan(20 degrees) ~= 0.36 < 0.55, so the box stays at rest.
- Static friction is enough to balance the parallel weight component.
- There is no spontaneous discharge.

2. At 30 degrees:

- tan(30 degrees) ~= 0.58 > 0.55, so the box slides.
- [[N]] ~= [[m]] [[g]] cos(30 degrees).
- [[f_r]] ~= [[mu_c]] [[N]] and the acceleration is moderate.

3. At 35 degrees:

- the block slides with greater acceleration than at 30 degrees.
- final speed rises and the exit impact becomes more severe.

Design reading:

- 20 degrees is not enough if automatic discharge is needed.
- 30 degrees works, but the exit speed must be monitored.
- 35 degrees may be useful only if a stop, damper, or second stage follows.

If the box mass is 8 kg, the 30-degree case admits a concrete estimate: [[N]] ~= 8 x 9.8 x cos(30 degrees) ~= 67.9 N, kinetic friction ~= 0.42 x 67.9 ~= 28.5 N, and the parallel weight component is 8 x 9.8 x sin(30 degrees) = 39.2 N. The net force is therefore about 10.7 N, so [[a]] ~= 1.34 m/s2. Over a 2.5 m segment, that gives a final speed near 2.6 m/s and a travel time of about 1.93 s.

## Interpretation

The real case shows why the friction model is more useful than the ideal one when the goal is safety and control. The critical angle [[theta_c]] is not decorative: it defines a design boundary. A good system does not merely try to "move," but to move in the correct range.

The operational lesson is clear. If the angle is below [[theta_c]], gravity alone will not start motion and the process fails by lack of flow. If the angle is well above [[theta_c]], flow occurs but may become too fast. Good design lives between those extremes and uses friction as a tool, not as an accident.

The quantitative conclusion matters: moving from a non-flowing angle to a working angle changes not only whether motion exists, but also the exit scale. A difference of only a few degrees can separate a stuck box, a controlled descent, and a box arriving with too much energy at the next stage.

The full physical reading is that the system is not designed to eliminate friction, but to place it where it helps. In a useful ramp, static friction prevents unwanted slipping during loading, while kinetic friction helps limit exit energy once motion has already started. That dual role explains why the same contact can be desirable or problematic depending on the operational goal.

What matters operationally is the chain: threshold first, motion next, energy control last. Once that chain is explicit, the angle is no longer just a geometric input; it becomes a controllable decision that trades off flow, safety, and exit speed.

That is why the working angle is not chosen to maximize or minimize a single equation. It is chosen so the whole handling process remains stable. An angle near [[theta_c]] may be ideal for initiating motion, yet still too steep if the next stage cannot accept that exit energy. Useful physics connects threshold, speed, and the full process chain.

In other words, the example is not only about solving for [[a]] or v_f. It teaches how to read the ramp as a system boundary: below the threshold, nothing starts; above it, the ramp dictates the throughput of the whole installation. That is the design value of the model.