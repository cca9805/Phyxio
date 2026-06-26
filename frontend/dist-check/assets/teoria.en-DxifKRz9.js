const e=`\uFEFF# The Wheel and Axle

The wheel and axle is a simple machine that converts a small effort applied at a large radius into a large resistance developed at a small radius, or vice versa. Steering wheels, screwdrivers, water-tap handles, winches, and flywheels are all examples of the same principle: two coaxial cylinders of different radii that rotate together, exchanging force for arc travel.

## Conceptual context

The physics of the wheel and axle is the physics of torque. When a force acts at a certain distance from a rotation axis, it produces a rotational effect proportional to the product of force times distance. Two forces in equilibrium on the same machine must generate equal and opposite torques about the common axis. That torque-balance principle is the seed of all the formulas in this leaf.

From an energy perspective, the wheel and axle is a pure exchanger: what you gain in force you pay in arc length traveled. The input work [[FR]] times [[sR]] is always greater than or equal to the useful work [[Fr]] times [[sr]], the difference being energy dissipated by friction. This is the Golden Rule applied to rotation.

## 🟢 Essential level

The core idea is simple: if the wheel is large and the axle is small, a force applied at the wheel can overcome a much larger force at the axle, because the wheel arm [[R]] is greater than the axle arm [[r]].

Imagine a stiff water tap. If you push directly on the metal spindle, you need a lot of force. If you fit a long handle, the same torque is achieved with much less force. The handle is the wheel; the tap spindle is the axle.

In the ideal model, the effort [[FR]] you apply at the wheel is related to the resistance [[Fr]] at the axle through the ratio r/R. Since R is greater than r, we have [[FR]] less than [[Fr]]: you apply less force than you get.

The ideal mechanical advantage [[VM]] summarises that gain.

If [[R]] is 30 cm and [[r]] is 3 cm, the mechanical advantage is 10: with 50 N at the wheel you can overcome 500 N at the axle. The price is that the hand travels 10 times more arc than the load point.

## 🔵 Formal level

The key result in the ideal model is:

{{f:ley_rueda_ideal}}

The ideal mechanical advantage [[VM]] is:

{{f:ventaja_mecanica_ideal}}

The base expression for rotational moment is:

{{f:torque}}

To fully quantify the system we also need to relate displacements. Wheel and axle share the same rotation angle, but the arcs are different because the radii are different:

{{f:relacion_desplazamientos}}

The input arc [[sR]] is always greater than the output arc [[sr]] when R exceeds r. This is the kinematic expression of the Golden Rule: what you gain in force you pay in travel.

In real practice, friction in the bearings and at the rope-axle contact reduces system efficiency. The efficiency [[eta]] captures all those losses in a single number between 0 and 1. With efficiency included, the real effort is:

{{f:ley_rueda_real}}

The real mechanical advantage [[VM_real]] is always less than the ideal:

{{f:ventaja_mecanica_real}}

An efficiency of 85% means [[VM_real]] is 0.85 times the ideal. If the geometric advantage is 10 and efficiency is 0.85, the effective advantage is only 8.5.

The complete energy balance is:

{{f:balance_energia_rueda}}

The left side is the input work; the right side is the useful output scaled by efficiency. The energy difference is heat dissipated by friction.

## 🔴 Structural level

### Torque as the unifying concept

All the formulas above derive from the torque balance. The torque [[tau]] of a force with moment arm [[r_arm]] is:

For the wheel and axle in static equilibrium, the input torque must equal the resistance torque. In the ideal model, the driving torque [[FR]]·R balances the resistive torque [[Fr]]·r. In the real model, losses introduce an additional friction torque that breaks that exact equality.

### Model validity conditions

The constant-efficiency [[eta]] model assumes:

1. **Rigidity**: wheel and axle do not deform under load.
2. **Constant [[eta]]**: [[eta]] does not depend on speed or load.
3. **Constant radii**: [[R]] and [[r]] are fixed. In rope-winding systems, the effective radius grows with each wound layer.
4. **Negligible machine mass**: rotational inertia of wheel and axle is ignored.

### Operating limits

If efficiency [[eta]] falls below the critical value r/R, the real mechanical advantage [[VM_real]] becomes less than 1. In that case the system no longer amplifies force: friction exceeds the geometric gain.

### Dimensional analysis and coherence

- [[FR]] and [[Fr]] in N; [[R]] and [[r]] in m → [[VM]] and [[VM_real]] are dimensionless.
- [[sR]] and [[sr]] in m — they are arcs, not angles in radians.
- [[eta]] is pure and lies between 0 and 1.

A result [[VM]] below 1 with R greater than r invariably signals a radius inversion error. A result [[VM_real]] greater than [[VM]] indicates [[eta]] was placed in the denominator instead of the numerator.

## Deep physical interpretation

The wheel and axle teaches that force and travel are not independent quantities: they are linked by work. You cannot increase the output force without paying in input travel. Efficiency [[eta]] is the reminder that even that exchange has a cost: part of the work is irreversibly lost as heat.

The Golden Rule is a direct consequence of energy conservation. No simple machine can create work from nothing — it can only redistribute force and displacement in the most convenient form.

## Order of magnitude

- Wide-handle screwdriver: [[R]] around 20 mm, [[r]] around 3 mm, [[VM]] around 6.7.
- Well-water winch: [[R]] around 40 cm, [[r]] around 3 cm, [[VM]] around 13.
- Industrial valve handwheel: [[R]] around 60 cm, [[r]] around 2 cm, [[VM]] around 30.

## Personalized resolution method

Follow the I-D-E-V protocol:

1. **Identification**: locate [[R]] (input arm) and [[r]] (output arm); verify R is greater than r for positive advantage.
2. **Diagram**: draw the cross-section of the machine with both tangential forces and their arms.
3. **Equilibrium**: apply the corresponding law:

   for the ideal model, or:

   for the real model.
4. **Validation**: check that the effort is less than the resistance (when R exceeds r) and that [[sR]] exceeds [[sr]] in the same proportion. If arcs are given, verify the energy balance:

## Special cases and extended example

If a winch is designed to lift 500 N and the operator can apply 60 N, the minimum mechanical advantage needed is about 8.3. With [[eta]] of 0.85, the geometric advantage required is about 9.8. Choosing [[R]] of 49 cm and [[r]] of 5 cm gives [[VM_real]] of approximately 8.3. The hand travels about 3.08 m of arc per full turn; the bucket rises 0.31 m. To lift the bucket 10 m the operator turns the wheel 32 times.

## Real student questions

- **Why can't I make the axle infinitely small for unlimited advantage?** The axle must withstand the output torque [[Fr]]·[[r]]. If [[r]] decreases, shear stress in the axle material increases, eventually leading to mechanical failure.
- **Does the wheel and axle work as a speed multiplier?** Yes — if effort is applied at the axle and resistance at the wheel, force is lost but speed is gained. A bicycle pedal-to-rear-sprocket system works this way.
- **What is the difference between a wheel-and-axle and a gear?** In both, torque is transmitted between elements of different radius. In the wheel and axle the two cylinders rotate together on the same axis; in gears, torque passes between two separate axes via meshing teeth.

## Cross-cutting connections and study paths

- **Lever**: the mechanism is analogous; [[R]] and [[r]] play the role of lever arms about the fulcrum.
- **Gears**: a gear train is a chain of wheels and axles where the total transmission ratio is the product of individual radius ratios.
- **Differential brake**: combines wheels of similar radii to achieve very high mechanical advantages with small geometric differences.
- **Conservation of energy**: the Golden Rule is energy conservation expressed in rotational form.

## Final synthesis

The wheel and axle transforms rotation at a large radius into torque at a small radius. The mechanical advantage [[VM]] is R/r — the machine's identity card; [[eta]] is the machine's performance card. Together they determine the real force the user obtains per Newton applied at the wheel.
`;export{e as default};
