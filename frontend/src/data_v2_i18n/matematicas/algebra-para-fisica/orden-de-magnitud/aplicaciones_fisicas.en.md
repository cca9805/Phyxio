# Physical applications

## 1. Checking results in problems

The most immediate use is detecting impossible answers. If a human acceleration comes out as `10^5 m/s^2`, the problem does not need more decimals; it needs a review of units, formula, or data.

This control should happen before submitting any result. A calculator can produce many digits for an answer that has no physical meaning.

## 2. Kinematics

<!-- algebra-numbered-app-fix-v1:2 -->
Physical context: motion with known ranges of speed, distance, and time. Operational use: estimate the scale before calculating and detect impossible conversions.

In motion, order of magnitude separates walking, running, driving, flying, and orbiting. Each situation occupies different ranges of speed, distance, and time.

It also helps detect wrong conversions between kilometres per hour and metres per second, or between minutes and seconds.

## 3. Dynamics and forces

<!-- algebra-numbered-app-fix-v1:3 -->
Physical context: mechanical interactions competing on the same body. Operational use: compare force orders to decide which term dominates the model.

In dynamics, comparing force orders of magnitude helps identify dominant interactions. A force of `10^3 N` is not treated like a force of `10^-2 N` if both act on the same body.

This is essential when deciding whether friction, weight, thrust, tension, or air resistance may be neglected in a first approximation.

## 4. Energy and power

<!-- algebra-numbered-app-fix-v1:4 -->
Physical context: energy transfer or consumption in devices and processes. Operational use: estimate power or energy and detect whether the result belongs to another physical scale.

Orders of magnitude distinguish everyday, industrial, and astronomical energy scales. A joule, a kilojoule, a megajoule, and a gigajoule describe very different processes.

Power behaves similarly: milliwatts, watts, kilowatts, and megawatts correspond to radically different devices and systems.

## 5. Astronomical and microscopic scales

In astronomy and microscopic physics, order of magnitude is essential because exact numbers are often less informative than scale. Planetary radii, orbital distances, atoms, and molecules are separated by many powers of ten.

Reading exponents places the phenomenon at the correct level and prevents comparisons between objects belonging to incompatible scales.

<!-- algebra-intensive-fix-v1 -->
## Intensive transfer closure

In mechanics, the typical context is estimating whether a velocity, acceleration, or energy has human, planetary, or microscopic scale. The operational use is to make an approximate calculation before detailed calculation to detect unit errors.

In electricity, an order-of-magnitude power estimate distinguishes a sensor, a bulb, a motor, and a power plant. If the result is six orders away from expectation, the problem is not rounding: a conversion or model is probably wrong.

In the laboratory, estimating order of magnitude decides whether a measurement will be visible with the available instrument. An uncertainty of `0.1 mm` cannot resolve an expected variation of `10^-6 m` without changing technique.

