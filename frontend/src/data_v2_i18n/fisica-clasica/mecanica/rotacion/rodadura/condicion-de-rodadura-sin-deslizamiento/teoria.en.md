# Rolling Kinematic Condition

## Conceptual context

This leaf studies the fundamental question that determines whether a wheel is rolling or sliding. It does not yet deal with complex tires or suspension, but with the basic constraint that connects the center of mass's advance with the body's rotation when the contact point with the ground remains instantaneously at rest.

Physics is precise: translation and rotation can appear separately and only become coordinated when the contact imposes a geometric restriction compatible with the available grip. This leaf teaches how to move from a common visual scene to a quantitative regime test, allowing one to diagnose whether the contact point is scraping the ground or remains at rest.

## 🟢 Essential level

The essential intuition is concrete: a wheel rolls without slipping when the edge does not "drag" the ground at the contact point. The center advances and the wheel rotates, but the bottom contact does not sweep surface forward or backward.

Imagine a mark painted on the periphery. If there is pure rolling, that mark reaches the ground and, at that instant, remains momentarily still relative to the pavement. If the mark is seen "rubbing" the ground, the ideal constraint has been broken. This forces us to separate three states: the wheel can rotate without advancing (spinning), advance without rotating (skidding/locking), or do both in a coordinated way (rolling). Only the third case, where the advance and the rotation are perfectly synchronized, belongs to pure rolling.

Understanding the rolling condition is not just about memorizing an equality, but about learning to read the "state" of an interface. It is the difference between observing an object that moves and understanding why that movement is efficient and non-dissipative.

## 🔵 Formal level

The central relationship is the ideal rolling condition, which links the linear velocity of the center of mass [[v]] with the angular velocity of the solid [[omega]] and the geometric radius [[R]]:

{{f:condicion_rodadura}}

This equality expresses that the advance of the axis coincides with the arc perimeter "unrolled" on the ground. To diagnose what is actually happening at the contact point, we define the instantaneous contact velocity:

{{f:velocidad_contacto}}

A zero value indicates pure rolling and the absence of relative sliding. If it is non-zero, the interface is sliding. This same idea is condensed into the scalar regime indicator or slip residue, a fundamental tool for classifying the motion:

{{f:consistencia_rodadura}}

A positive residue (

{{f:relacion_aceleracion}}

) indicates that the center advances more than the rotation accompanies (skidding due to translation). A negative residue (

{{f:relacion_aceleracion}}

) indicates that the rotation exceeds the linear advance (spinning due to rotation). If the system evolves in time while maintaining this adherence regime, the constraint is transmitted directly to the linear acceleration [[a]] and the angular acceleration [[alpha]]:

{{f:relacion_aceleracion}}

Precision at this level requires a rigorous and consistent sign convention. If the positive direction of rotation is not chosen in harmony with the advance, the sign of the residue will be inverted, invalidating the essential physical diagnosis between spinning and skidding.

## 🔴 Structural level

The validity of this constraint depends on four pillars: a rigid geometry with a constant radius [[R]], a well-defined point contact, sufficient grip, and an appropriate time scale. In dynamic terms, the available static friction [[f_s]], governed by the static friction coefficient [[mu_s]] and the body's weight (the product of mass [[m]] by gravity [[g]]), must be sufficient to prevent relative dragging.

If adherence breaks, the system becomes dependent on the kinetic coefficient [[mu_k]], and the ideal model must be replaced by a dissipative sliding model. Furthermore, at the structural level, the ease of initiating or altering this rolling motion is dictated by the body's moment of inertia [[I]] and, on inclined planes, by the angle [[theta]] of the surface. If the body deforms, the effective radius changes and the constraint ceases to be exact.

Structurally, the formula

[[delta]] acts as a regime detector. As long as [[delta]] is negligible compared to the scale of motion, the ideal constraint remains valid. When [[delta]] grows, the condition stops acting like an operational law and instead signals that the model has failed, requiring full dynamics with friction and dissipation.

In real systems, such as vehicle tires or mobile robots, this condition is never 100% fulfilled. There is always a small slip or deformation. Therefore, pure rolling is a limit model: an extremely useful idealization that marks the boundary between purely kinematic movement and the dynamic process of friction and wear.

## Deep physical interpretation

The physical heart of the topic is the difference between real advance and rotation-required advance. When [[v_contacto]] is zero, the bottom point is instantaneously at rest. This does not imply the absence of force; static friction can be large, but it performs no dissipative work because there is no local relative displacement.

This efficiency is what makes the wheel a revolutionary technology: it avoids continuous scraping against the ground. As soon as a significant [[delta]] appears, the interface starts dissipating mechanical energy as heat and noise. The sign of [[delta]] gives the diagnosis: skidding is usually associated with positive [[delta]], while spin-out is usually associated with negative [[delta]].

## Order of magnitude

If a wheel with [[R]] = 0.30 m advances at [[v]] = 6 m/s, the compatible [[omega]] must be on the order of 20 rad/s. A residual [[delta]] of 0.02 m/s may be negligible for a car at 30 m/s, but critical for a precision robot moving at 0.10 m/s. The validity criterion is not absolute zero, but the smallness of [[delta]] relative to [[v]].

## Personalized resolution method

1. Establish a consistent sign convention for all kinematic magnitudes.
2. Calculate the theoretical advance compatible with rotation using [[omega]] and [[R]].
3. Compare that value with measured linear velocity [[v]].
4. Compute [[delta]] or, equivalently, [[v_contacto]].
5. Diagnose: if [[delta]] is approximately zero, rolling is pure; otherwise, sliding is present.
6. Apply the relation between [[a]] and [[alpha]] only if the diagnosis confirms pure rolling.

## Special cases and extended example

Suppose a wheel with [[R]] = 0.25 m and [[omega]] = 16 rad/s. The compatible advance is [[v]] = 4.0 m/s.

- If we measure [[v]] = 4.0 m/s, [[delta]] is zero: pure rolling.
- If we measure [[v]] = 5.0 m/s, [[delta]] = +1.0 m/s: skidding (translation dominates).
- If we measure [[v]] = 3.0 m/s, [[delta]] = -1.0 m/s: spin-out (rotation dominates).

The absolute value of the residue measures the intensity of the constraint failure, while its sign classifies the nature of the sliding.

## Real student questions

- **Why use [[v_contacto]] and [[delta]] if they seem similar?** [[v_contacto]] focuses on local rest at contact, while [[delta]] provides a global regime indicator.
- **Is there friction in pure rolling?** Yes, there can be static friction. What is absent is relative sliding (scraping).
- **When do I apply the acceleration coupling?** Only after confirming that contact remains adhered during the studied time interval.

## Cross-cutting connections and study paths

This leaf is the bridge between rotational kinematics and dynamics with friction. It is fundamental for understanding ABS (Anti-lock Braking System), traction control in vehicles, and odometry in robotics, where small slip residues accumulate as positioning errors.

## Final synthesis

Mastering the rolling condition means knowing how to verify a constraint. It is not an automatic recipe, but an adhesion hypothesis. The success of the analysis depends on calculating [[delta]]: if it is nearly zero, the kinematic model is valid; if not, its sign indicates whether the wheel is skidding or spinning, which signals the need for a more complete dynamic model.