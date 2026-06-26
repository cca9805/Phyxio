const e=`# Projectile Motion

## Conceptual context

Projectile motion describes a body launched with initial speed [[v0]] at an angle [[theta]] when the only relevant acceleration is gravity [[g]]. The central idea is to split the motion into two axes: horizontal motion keeps its velocity, while vertical motion changes because of gravity. Both axes share the same time [[t]].

The path is parabolic because horizontal uniform motion combines with vertical uniformly accelerated motion. Therefore the first step is not to choose a range formula, but to define the frame, origin [[x0]], initial height [[y0]], sign convention, and impact condition.

## 🟢 Essential level

Imagine a ball thrown forward and upward. It rises while it has positive vertical velocity [[vy0]], then reaches an instant where the vertical component becomes zero, and finally falls. During the same interval, the horizontal component [[vx0]] remains constant if air resistance is neglected.

The most common mistake is to treat the magnitude [[v0]] as if it already belonged to both axes. Initial speed gives the size of the launch vector, not how much motion each axis receives. Another frequent error is to assume every landing is symmetric. That symmetry appears only when launch and impact occur at the same vertical level.

The essential reading should remain visual: forward motion keeps advancing, while gravity changes the vertical state. If a learner can narrate that scene without numbers, the formal layer later adds precision to an idea that is already stable.

## 🔵 Formal level

The calculation begins by decomposing initial speed. The initial horizontal component [[vx0]] is the projection of [[v0]] onto the horizontal axis:

{{f:tp_componentes_vx0}}

The initial vertical component [[vy0]] is the part of the launch that drives the projectile upward:

{{f:tp_componentes_vy0}}

With the components known, horizontal position [[x]] follows uniform motion:

{{f:tp_posicion_x}}

Vertical position [[y]] combines initial height, initial vertical motion, and the fall caused by [[g]]:

{{f:tp_posicion_y}}

The horizontal velocity [[vx]] remains constant in the ideal model:

{{f:tp_velocidad_horizontal}}

The vertical velocity [[vy]] changes linearly with time and locates the apex when it becomes zero:

{{f:tp_velocidad_y}}

The time to the apex is [[t_ap]]:

{{f:tp_tiempo_apice}}

The height gained above the launch point is [[h_max]]:

{{f:tp_altura_maxima}}

If the launch height is not zero, the absolute maximum height [[y_max]] adds [[y0]]:

{{f:tp_altura_maxima_absoluta}}

The instantaneous speed [[v]] combines velocity components:

{{f:tp_velocidad_total}}

For launch and impact at the same level, total flight time [[T]] is twice the ascent time:

{{f:tp_tiempo_vuelo_mismo_nivel}}

In that same-level case, the horizontal range [[R]] is:

{{f:tp_alcance_suelo}}

For an arbitrary impact height [[y_impacto]], use the general impact time [[t_impacto]]:

{{f:tp_tiempo_impacto_general}}

Eliminating time gives the spatial trajectory:

{{f:tiro_parabolico_trayectoria}}

## 🔴 Structural level

The model requires uniform gravity, negligible drag, fixed axes, and a scale small enough to treat Earth as flat. If air resistance becomes important, [[vx]] is no longer constant. If impact height differs from launch height, ascent and descent are not symmetric and the ground-level range formula must not be used.

Structurally, horizontal formulas answer how far the projectile advances; vertical formulas answer when it rises, falls, reaches the apex, or impacts. Time [[t]] links both readings. A reliable solution checks positivity of time, sign of [[vy]], dimensional consistency, and order of magnitude.

The role of [[theta]] is structural too. A small angle preserves most of the speed in [[vx0]] but gives little flight time; a large angle increases [[vy0]] but reduces horizontal advance per second. The ideal maximum range for same-level launch and impact appears when those tendencies balance. In real situations, such as sports jumps or water jets with drag, the optimal angle may differ from that ideal case.

This is also why projectile motion should not be read as a single stored equation. The same launch data can answer different questions depending on the closing condition: highest point, position at a given time, landing at the same level, or impact at a specified height. The structure of the problem selects the relation to use.

## Deep physical interpretation

The parabola is not decorative; it is the geometric trace of two coordinated motions. The horizontal axis preserves inertial motion, while the vertical axis shows the competition between [[vy0]] and [[g]]. At the highest point the projectile is not at rest: only [[vy]] is zero, while [[vx]] remains.

This separation explains why two projectiles with the same [[vy0]] stay in the air for the same duration even if their ranges differ. It also explains why two projectiles with the same [[vx0]] may land in very different places when their vertical conditions change. The deep physics of the leaf is learning which part of a result comes from each axis.

## Order of magnitude

In laboratory and sports launches, times are usually fractions of a second to a few seconds, heights range from centimeters to tens of meters, and ranges are often meters to tens of meters. If a classroom ball gives hundreds of seconds or kilometers of range, the error is usually in units, angles, or a formula used outside its domain.

As a reference, a ball launched at about 20 m/s can travel tens of meters in the ideal model. A fountain jet usually has a range of a few meters. A long-range ballistic path requires corrections beyond this leaf.

Order of magnitude is especially useful after algebraic work because many mistakes still have plausible-looking symbols. A degree/radian error, a sign error in the vertical axis, or using total speed where only [[vx0]] belongs can produce a number that is formally computed but physically unreasonable.

## Personalized resolution method

1. Fix axes, origin, [[x0]], [[y0]], and sign convention.
2. Decompose [[v0]] into [[vx0]] and [[vy0]].
3. Write [[x]] and [[y]] as functions of [[t]].
4. Apply the closing condition: apex, same level, impact height, or requested position.
5. Compute [[vx]], [[vy]], and [[v]] if velocity is required.
6. Check domain, units, sign, and order of magnitude.

## Special cases and extended example

The symmetric case occurs when [[y0]] equals [[y_impacto]]. Then the flight time is [[T]], the apex occurs halfway through the motion, and the range can be computed with the ground-level formula. If the projectile starts from a balcony or lands on a raised platform, the correct time is [[t_impacto]] and the range follows from [[vx0]] times that time.

A useful extended comparison is between two launches with the same [[v0]] and complementary angles, such as 30° and 60°. In the ideal same-level model, both may have the same [[R]], but the higher shot stays longer in the air and reaches a larger [[h_max]]. This shows that equal range does not mean equal trajectory.

## Real student questions

**Why not use [[v0]] directly in the horizontal position?** Because the horizontal axis only receives [[vx0]].

**Is velocity zero at the highest point?** No. At the apex [[vy]] is zero, but [[vx]] remains.

**Does the range formula always apply?** No. It applies only to same-level launch and impact without air resistance.

## Cross-cutting connections and study paths

This leaf connects with horizontal projectile motion, free fall, graph analysis, and relative velocity. It prepares range, interception, and trajectory-design problems where the final condition may be a specific height rather than “back to the ground.”

## Final synthesis

Mastering projectile motion means separating components, using one shared time, and choosing the correct closing condition. The physics is not memorizing the range formula; it is knowing when that formula applies and when the general vertical analysis is required.
`;export{e as default};
