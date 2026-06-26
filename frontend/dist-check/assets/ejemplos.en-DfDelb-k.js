const n=`# Exam-type example

## Problem statement

A block with [[m]] = 12 kg is pulled on a horizontal floor by a rope that applies a force with magnitude [[Fm]] = 80 N at an angle [[theta]] = 35 deg measured from the positive x axis. Determine components [[Fx]] and [[Fy]], rebuild the magnitude from components, and discuss how vertical contact changes when [[Fy]] increases.

Then connect to an inclined-plane scenario: the same block is placed on a ramp with [[theta]] = 20 deg and [[g]] = 9.81 m/s^2. Compute [[Ppar]] and [[Pperp]] to interpret sliding tendency and contact loading.

## Data

- Horizontal case: [[Fm]] = 80 N, [[theta]] = 35 deg.
- Inclined case: [[m]] = 12 kg, [[g]] = 9.81 m/s^2, [[theta]] = 20 deg.
- Support magnitudes for physical reading: [[N]], [[fk]], [[muk]], [[a]], [[T]], [[W]].
- Convention: x axis to the right, y axis upward.

## System definition

System 1: block on a horizontal surface under an oblique applied force. System 2: block on a ramp with rotated axes, one parallel and one perpendicular to the slope. In both systems, the goal is to convert vector information into scalar components that reveal the dominant causal effect on each axis.

## Physical model

We use a point-mass rigid-body approximation with uniform gravity [[g]] and orthogonal projections. For the horizontal case, components come from standard trigonometric projection:

{{f:comp_cartesianas}}

{{f:comp_cartesianas_fx}}

{{f:comp_cartesianas_fy}}

If components are known, the original magnitude is reconstructed by Pythagoras:

{{f:modulo_desde_componentes}}

For the inclined case, total weight [[W]] = [[m]]*[[g]] is decomposed into parallel and perpendicular components:

{{f:comp_plano_inclinado}}

{{f:comp_plano_inclinado_paralela}}

{{f:comp_plano_inclinado_perpendicular}}

This is physically useful because [[Ppar]] drives motion along the ramp, while [[Pperp]] controls contact load and therefore the possible friction range through [[N]] and [[fk]] = [[muk]]*[[N]].

## Model justification

The model is valid because the angular reference is explicitly declared and axis choice is consistent in each scenario. In the horizontal case, [[theta]] is measured from x, so sine and cosine map to y and x projections respectively. In the ramp case, [[theta]] is the ramp angle, so weight naturally splits into [[Ppar]] and [[Pperp]].

The didactic value is continuity: the same mathematical projection logic explains two apparently different situations. This avoids rote memorization and supports transfer to new systems.

The model starts to fail when angle reference is ambiguous, when contact conditions vary strongly along the path, or when [[muk]] changes with speed/temperature and cannot be treated as constant. Then a richer contact model is required.

## Symbolic solution

Horizontal case:

1) Obtain [[Fx]] and [[Fy]] from [[Fm]] and [[theta]].

{{f:comp_cartesianas_fx}}

{{f:comp_cartesianas_fy}}

2) Verify coherence by reconstructing [[Fm]].

{{f:modulo_desde_componentes}}

3) Physical reading: increasing [[Fy]] reduces effective floor loading, which can modify [[N]] and available [[fk]].

Inclined case:

1) Decompose weight in ramp-aligned axes.

{{f:comp_plano_inclinado_paralela}}

{{f:comp_plano_inclinado_perpendicular}}

2) Use the complete relation as consistency check.

{{f:comp_plano_inclinado}}

3) Physical reading: [[Ppar]] competes with friction and sets the sign of [[a]] along the slope; [[Pperp]] sets contact intensity and influences [[N]].

## Numerical substitution

Horizontal case:

- [[Fx]] = 80*cos(35 deg) = 65.5 N
- [[Fy]] = 80*sin(35 deg) = 45.9 N
- Reconstructed [[Fm]] = sqrt(65.5^2 + 45.9^2) = 80.0 N

Inclined case:

- [[W]] = [[m]]*[[g]] = 12*9.81 = 117.72 N
- [[Ppar]] = 12*9.81*sin(20 deg) = 40.3 N
- [[Pperp]] = 12*9.81*cos(20 deg) = 110.6 N

Contact-impact estimate:

- If [[muk]] = 0.20, friction estimate is [[fk]] = [[muk]]*[[N]].
- With [[N]] approx [[Pperp]], [[fk]] approx 22.1 N.
- Since [[Ppar]] = 40.3 N > [[fk]], the block tends to slide downward with nonzero [[a]].

## Dimensional validation

- Cartesian projections for [[Fx]] and [[Fy]] preserve force units.
- Magnitude reconstruction remains in force units and is consistent with orthogonal decomposition.
- Inclined-plane relations map mass and gravity to force components with consistent dimensions.
- Contact reading is coherent because [[muk]] is dimensionless and scales [[N]] into [[fk]].

Therefore, major residual risk is geometric interpretation (wrong angle reference), not dimensional inconsistency.

## Physical interpretation

The key learning is causal separation by axes. [[Fx]] governs horizontal effect of the applied pull, while [[Fy]] changes vertical loading and indirectly modifies the friction budget. On a ramp, [[Ppar]] is the driving component and [[Pperp]] is the contact-loading component.

This explains operational decisions: reducing slip is not only about increasing motor effort; it often requires changing [[theta]], improving [[muk]], or redistributing force direction so that the useful component on the motion axis increases.

A robust diagnostic check is to ensure no component exceeds the parent magnitude and that reconstructed magnitude matches the original value. If that fails, the issue is usually projection setup, not system physics.

# Real-world example

## Context

In a packaging plant, a crate with [[m]] = 18 kg moves upward on a 15 deg conveyor while a motorized roller applies tension [[T]] at a small angle relative to belt direction. Maintenance engineers observe intermittent slip at startup even though nominal motor torque is unchanged.

They log belt angle, humidity (which alters [[muk]]), motor current, and belt speed. The goal is to identify the dominant variable behind adhesion loss, not merely to compute one force value.

## Physical estimation

Fast order-of-magnitude check:

- [[W]] = [[m]]*[[g]] approx 176.6 N
- [[Ppar]] = [[m]]*[[g]]*sin(15 deg) approx 45.7 N
- [[Pperp]] = [[m]]*[[g]]*cos(15 deg) approx 170.6 N

Dry shift with [[muk]] = 0.35 gives friction budget [[fk]] approx 59.7 N, larger than [[Ppar]], so startup should be stable. Wet shift with [[muk]] = 0.20 gives [[fk]] approx 34.1 N, lower than [[Ppar]], so slip is expected.

Force-direction details matter too. If roller alignment changes, part of [[T]] is wasted in the wrong axis, reducing useful drive component and changing [[N]]. That can move the system across the no-slip/slip boundary.

## Interpretation

Operational reading: the observed regime change is controlled by geometry-contact coupling, dominated by [[muk]] and by decomposition of [[T]] and [[W]], not by nominal motor torque alone.

Recommended protocol is projection-first diagnosis: verify [[theta]], estimate [[Ppar]] and [[Pperp]], compute friction margin, and compare margin against required driving component. If margin is small, adjust surface condition or force orientation before increasing speed.

This method transfers directly to mining conveyors, inclined lifts, and airport-baggage transport systems: decompose, identify dominant component, then act on the most sensitive parameter.
`;export{n as default};
