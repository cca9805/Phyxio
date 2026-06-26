# Physical models: Hanging Block

## Ideal model

This leaf works with the point-mass block suspended from an ideal vertical cable model. The central simplifications are: the block is treated as a point mass without extent, the cable is inextensible (does not stretch) and inelastic (does not store energy), gravity [[g]] is constant and uniform, and there is no air resistance or friction in the guide.

This model captures the essence of vertical dynamics: the difference between the upward cable tension and the downward gravitational weight produces acceleration according to Newton's second law. Under school laboratory conditions (kilogram blocks hanging from nylon threads a few metres long) the model reproduces experimental results with errors below 5 %.

## Hypotheses

- **Ideal cable**: no own mass, inextensible and inelastic. Violating it (cable of several kilometres depth) adds the cable's weight to the load and permits elastic oscillations.
- **Uniform gravitational field**: [[g]] constant throughout the block's travel. Violating it (heights of hundreds of km) requires considering gravity variation with altitude.
- **Point block**: all mass concentrated at a point with no size. Violating it (extended bodies that rotate) introduces moment of inertia and rotational energy.
- **No air resistance**: the only vertical force is tension. Violating it (high speeds or large cross-section bodies) requires adding a drag term proportional to the square of the velocity.

## Quantitative validity domain

The model is reliable when the following conditions are met simultaneously:

- Block velocity is less than 5 m/s, a range in which air resistance is negligible for masses above 1 kg.
- Cable length is less than 100 m, an interval where the cable's own weight is less than 5 % of typical load.
- Acceleration is less than 2 m/s², which avoids significant transverse oscillations of the cable.
- Acceptable relative error is above 3 %, since under real conditions there are slight frictions in pulleys and guides.

## Model failure signals

- Measured tension differs from calculated by more than 10 % systematically, indicating the cable has appreciable mass or there is unmodelled friction.
- The block oscillates transversely with increasing amplitude, indicating that the one-dimensional vertical model is insufficient.
- Acceleration is not constant despite constant tension, a sign that the cable is stretching (elasticity) or the guide has variable friction.
- The system enters resonance at certain excitation frequencies, revealing cable wave dynamics not captured by the rigid model.

## Extended or alternative model

The extended model incorporates cable elasticity as a linear spring with elastic constant k, transforming the system into a vertical mass-spring oscillator. This model predicts harmonic oscillations when the block is displaced from equilibrium position and allows calculating the system's natural frequency.

When to switch to the extended model: if the cable is long and thin (more than 100 m), if persistent oscillations are observed after a sudden tension change, or if the dynamic response to time-varying forces needs to be predicted. In those cases, the simple algebraic model is replaced by the forced oscillator differential equation: mass times acceleration plus the cable's elastic constant times displacement, equals the difference between time-varying tension and constant weight.

## Operational comparison

| Aspect | Rigid cable model | Elastic cable model |
|--------|-------------------|---------------------|
| Typical precision | 95–98 % in laboratory | above 99 % with calibration |
| Mathematical tool | Algebra and kinematics | Ordinary differential equations |
| Resolution time | Minutes (pen and paper) | Requires numerical simulation |
| When to use it | Education, preliminary design | Vibration analysis, long cables |
| Required parameters | Mass and gravity | Mass, gravity and cable elastic constant |
