# Exam-type example

## Problem statement
A Venturi meter is installed in a horizontal water pipe ([[rho]] = 1000 kg/m³). The wide section has a diameter of 20 cm and the throat has a diameter of 10 cm. If a differential manometer connected between both sections marks a pressure drop [[dp]] of 20 kPa, calculate the fluid velocity in the wide section [[v1]] and the volumetric flow rate [[Q]].

## Data
- Inlet diameter: D1 = 20 cm; [[A1]] ≈ 0.0314 m²
- Throat diameter: D2 = 10 cm; [[A2]] ≈ 0.00785 m²
- Water density [[rho]] = 1000 kg/m³
- Pressure drop [[dp]] = 20 000 Pa

## System definition
The system consists of a control volume covering the pipe segment from the wide section to the throat. The internal flow of an incompressible liquid in steady state is analyzed. The flow is horizontal, which eliminates the contribution of gravitational potential energy from Bernoulli's equation.

## Physical model
The flow is modeled as steady, incompressible, and ideal (frictionless). The magnitudes involved are the velocities [[v1]] and [[v2]], the areas [[A1]] and [[A2]], and the pressures [[p1]] and [[p2]]. The flow rate [[Q]] remains constant by continuity.

## Model justification
The fluid is treated as ideal because the dynamic viscosity of water is low (on the order of 10⁻³ Pa·s) and the path between sections is short, so friction losses represent less than 2% of the total energy balance. The flow is considered incompressible because the variation in density [[rho]] of water at the working pressure is less than 0.01%. Bernoulli's model is directly applicable because the pipe is horizontal and the flow is steady.

## Symbolic solution
**Step 1 — Continuity**: the continuity equation requires the flow rate [[Q]] to be identical in both sections:

{{f:continuity_venturi}}

For circular sections, the area ratio is [[A1]]/[[A2]] = (D1/D2)² = (20/10)² = 4. Therefore [[v2]] = 4·[[v1]].

**Step 2 — Bernoulli**: we conserve mechanical energy between the wide section and the throat:

{{f:bernoulli_venturi}}

Rearranging, the pressure drop [[dp]] = [[p1]] − [[p2]] is expressed as a function of [[v1]] and the area ratio. Substituting [[v2]] = 4·[[v1]], the geometric factor ([[A1]]/[[A2]])² − 1 = 16 − 1 = 15:

{{f:dp_venturi}}

## Numerical substitution
Solving for [[v1]] from the above expression with [[dp]] = 20 000 Pa, [[rho]] = 1000 kg/m³ and geometric factor = 15:

- [[v1]] = sqrt(2 · 20 000 / (15 · 1000)) = sqrt(40/15) ≈ 1.63 m/s
- [[v2]] = 4 · 1.63 ≈ 6.52 m/s
- [[Q]] = [[A1]] · [[v1]] ≈ 0.0314 · 1.63 ≈ 0.051 m³/s

The resulting flow rate is 51 liters per second, corresponding to high-demand domestic flow or a small-capacity industrial circuit.

## Dimensional validation
The [[dp]] expression has units of pressure (pascal = kg per cubic-meter times squared-meter per squared-second). Solving for [[v1]] gives a velocity in m/s, and [[Q]] = [[A1]]·[[v1]] has units of m³/s. The dimensional analysis confirms the consistency of the result.

## Physical interpretation
A pressure difference of 20 kPa between the wide section and the throat is sufficient for the fluid to quadruple its velocity when passing through the constriction. The pressure energy [[p1]] − [[p2]] is completely converted into additional kinetic energy (½·[[rho]]·([[v2]]² − [[v1]]²)), with no net energy loss in the ideal model. The Venturi meter exploits precisely this exchange: it measures [[dp]] with a differential manometer and deduces [[v1]] and [[Q]] without moving parts, making it a highly reliable instrument for the process industry.

It is worth emphasizing that the order of magnitude of [[dp]] (tens of kilopascals) for velocities of a few meters per second confirms that the Venturi effect is perfectly measurable with standard industrial equipment, and that small variations in the throat diameter have a quadratic effect on the pressure drop, requiring tight manufacturing tolerances.

Physically, this means the device is not measuring an abstract force, but a redistribution of energy between pressure and speed. Upstream of the constriction, part of the fluid's energy is stored as static pressure; downstream, a larger fraction appears as motion. If the throat were slightly wider, the pressure drop would be smaller and the inferred flow rate would also be smaller; if it were narrower, the system would become more sensitive but would reach losses and cavitation sooner. That link between geometry and flow regime is what makes the Venturi meter useful as a sensor.

# Real-world example

## Context
The paint sprayer (industrial airbrush) uses the Venturi effect to suck liquid from a tank below the nozzle. Compressed air flowing at high velocity through the nozzle creates a low-pressure zone [[p2]] at the throat, which draws the paint upward. There is no pump or moving part: the only energy source is the compressed air pressure.

## Physical estimation
Consider a typical airbrush operating at low air speed in the main tube ([[v1]] around 5 m/s) through the main section of area [[A1]] around 2 cm², with a throat of area [[A2]] around 0.2 cm². By continuity, the throat velocity [[v2]] reaches approximately 50 m/s. With air density [[rho]] of 1.2 kg/m³ and geometric factor approximately 99, the pressure drop [[dp]] is about 1485 Pa. To lift paint of density 1200 kg/m³ by 12 cm requires roughly 1411 Pa, leaving only a 74 Pa margin. Increasing [[v2]] to 60 m/s with a narrower throat boosts [[dp]] to about 2160 Pa, providing a comfortable 53% safety margin.

## Interpretation
The quantitative analysis reveals a key engineering insight: the Venturi effect is not a passive curiosity but an active design tool. The quadratic dependence of [[dp]] on [[v2]] means that small geometric changes produce large pressure effects. For dense liquids or tall suction columns, the designer must increase [[v2]] — either by reducing [[A2]] or increasing the air flow rate — while always monitoring that [[p2]] remains above the liquid's vapor pressure (cavitation limit). If [[A2]] drops by 10%, the pressure drop no longer changes linearly: the effect is amplified and can move the system from weak suction to useful suction or, in the opposite extreme, to cavitation. The discharge coefficient C (typically 0.97 for a well-designed nozzle) introduces a modest 3% correction to the ideal flow rate, confirming that the ideal Venturi model is an excellent first approximation for real devices and validating its widespread use in preliminary engineering design without requiring complex computational fluid dynamics simulations.

This means the phenomenon has a real operating threshold: below that pressure drop, the air only speeds up and the liquid does not rise; above it, suction becomes stable and the paint column climbs continuously. So the calculation is not just a numeric exercise, but a decision rule that tells us whether the sprayer will actually work in practice.

Physically, the key question is not only the value of [[dp]], but whether that pressure drop exceeds the hydrostatic head of the paint column. If the available suction stays below that threshold, the device behaves like a fast air passage with poor liquid entrainment. If it exceeds the threshold with margin, the paint is drawn in, atomized, and the flow becomes steady; if it is pushed too far, losses increase, the spray becomes too fine, and local cavitation or unstable intake can appear. The correct interpretation therefore compares scales, not just isolated numbers.