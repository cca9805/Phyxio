const e=`# Torque of a Force

## Conceptual context

The torque of a force measures the ability of one force to produce rotation about an axis. Knowing the force [[F]] is not enough: where it is applied and in what direction also matter. A large force may produce little rotation if its line of action passes close to the axis, while a smaller force may be very effective if it acts far away and almost perpendicularly.

This leaf studies one individual contribution, not the sum of several torques. The central quantity is [[tau]], which summarizes force, geometry, and rotation sense. The perpendicular arm [[d_perp]] is the effective distance between the axis and the force line of action. The radial distance [[r]] and the angle [[theta]] allow that arm to be obtained when the force is not perpendicular.

## 🟢 Essential level

A door opens more easily when pushed far from the hinges than near them. It also opens more easily when pushed perpendicular to the door than when pushed toward the hinges. That everyday experience summarizes torque: rotation depends on force, distance to the axis, and direction.

The relevant arm is not always the direct distance to the point of application. If the force is oblique, only part of that distance produces rotation. That is why the perpendicular arm is used: it measures the distance from the axis to the line of action.

The result indicates turning tendency about the chosen axis. Its magnitude measures intensity; its sign is assigned by a clockwise or counterclockwise convention. This leaf studies one isolated force to understand its rotational effectiveness before adding several contributions.

## 🔵 Formal level

If the perpendicular arm is known directly, the most direct torque definition is:

{{f:torque_perpendicular_definition}}

When the radial distance [[r]] and the angle [[theta]] between force and radius are known, the effective arm is identified through:

{{f:lever_arm_relation}}

Substituting that relation gives the trigonometric torque expression:

{{f:torque_trigonometric_definition}}

The three expressions describe the same physics. The first uses [[d_perp]] directly. The second explains how that arm appears from geometry. The third combines force, radial distance, and angle in one relation.

The units of [[tau]] are N m, equivalent in dimension to energy, but torque is not interpreted as energy. Torque describes turning tendency about an axis, not work performed. The sine of [[theta]] is dimensionless: it only changes what fraction of [[r]] acts as the effective arm.

Formally, magnitude and sign should be separated. The expressions above compute the intensity of the rotational tendency; the sign is assigned afterward according to the chosen rotation sense. If a force would rotate clockwise and that sense is defined as negative, the algebraic value of [[tau]] is written negative even though [[F]], [[r]], and [[d_perp]] are positive magnitudes.

It is also useful to distinguish the two calculation routes. If [[d_perp]] is measured directly, the direct form is cleaner. If the available data are a diagram with radial distance and angle, the geometric relation prevents substituting [[r]] as if it were always the effective arm. This formal choice prevents overestimating torque for oblique forces.

## 🔴 Structural level

The model has three structural decisions. First, choose the rotation axis. Second, draw the line of action of the force. Third, measure the perpendicular distance from the axis to that line, or compute it from [[r]] and [[theta]]. Only then should [[tau]] be computed.

The axis is part of the physical datum. The same force applied at the same point can have different torques if measured about different axes. Therefore torque is not a property of the force alone, but of the force with respect to a specific axis.

The main structural criterion is zero arm. If the line of action passes through the axis, [[d_perp]] is zero and torque is zero, even if [[F]] is large. If the force is perpendicular to the radius, [[d_perp]] equals [[r]] and torque is maximal for those values of force and distance.

## Deep physical interpretation

The torque of a force does not by itself say whether the body actually rotates. It says what turning tendency that force contributes. To decide equilibrium or angular acceleration, other contributions and, in dynamics, moment of inertia are needed. This leaf prepares that reading by measuring one individual contribution precisely.

The quantity [[d_perp]] avoids a common confusion: the important distance is not always the length of the tool or bar, but the perpendicular separation between the axis and the force line of action. When a wrench is pushed in a poor direction, [[F]] may be large and [[r]] may also be large, but a small [[theta]] reduces torque.

The sign of [[tau]] does not come from force being positive or negative as a magnitude. It comes from the rotation sense the force would produce. The same force may be considered positive or negative depending on the chosen convention, while the magnitude of its rotational effectiveness is set by force, arm, and angle.

## Order of magnitude

In introductory problems, forces of tens of newtons applied at distances of tenths of a meter produce torques of a few N m. If [[F]] = 20 N and [[d_perp]] = 0.30 m, the expected torque is on the scale of 6 N m. If a result appears in meters or newtons, a physical factor has been lost.

The angular check is also essential. If [[theta]] approaches 90 degrees, the sine approaches one and [[d_perp]] is close to [[r]]. If [[theta]] approaches 0 or pi, the sine approaches zero and torque disappears. This variation must appear in both calculation and interpretation.

## Personalized resolution method

1. Choose the axis about which rotation is measured.
2. Locate the point where the force is applied.
3. Identify [[F]], [[r]], and [[theta]], or measure [[d_perp]] directly.
4. Compute the effective arm if the force is oblique.
5. Compute [[tau]] and assign sign by the rotation convention.
6. Validate units, zero-arm behavior, and the perpendicular case.

This procedure prevents automatically using the full length of the bar. The decisive step is locating the line of action and measuring the arm that actually produces rotation.

## Special cases and extended example

If the force points directly toward the axis, [[theta]] is 0 or pi and there is no torque. If the force is perpendicular to the radius, torque is maximal for that force and distance. If [[F]] is doubled while geometry is unchanged, [[tau]] doubles. If [[r]] is doubled while the angle is unchanged, torque also doubles.

When moving to equilibrium problems, this individual torque is added to other torques. But that is another question: first each contribution must be computed correctly.

## Real student questions

Why can a large force produce no rotation?
Because if its line of action passes through the axis, the perpendicular arm is zero.

Are [[r]] and [[d_perp]] the same?
Only when the force is perpendicular to the radius. In general, [[d_perp]] is the effective part of [[r]].

Why does torque have a sign?
Because the sign indicates whether the force would rotate in the chosen positive or negative sense.

Is N m the same as energy?
It has the same dimension, but torque is interpreted as turning tendency, not work.

## Cross-cutting connections and study paths

This leaf connects with levers, rotational equilibrium, rotational work, and angular dynamics. The natural next step is the torque-sum condition, where several individual contributions are combined algebraically.

It also connects with vector geometry: in higher courses, torque is written as a vector product. The physical idea remains the same: a force applied with an effective arm about an axis.

## Final synthesis

The torque of a force quantifies the tendency of one force to produce rotation about an axis. It can be computed with [[F]] and [[d_perp]], or with [[r]], [[F]], and [[theta]]. The quantity [[tau]] increases with force, arm, and perpendicularity, and vanishes if the line of action passes through the axis. This leaf measures one individual contribution; summing several contributions belongs to rotational equilibrium analysis.
`;export{e as default};
