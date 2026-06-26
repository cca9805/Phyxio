## Conceptual context

A current-carrying conductor contains many moving charges. When that conductor crosses [[campo_magnetico]], each charge receives magnetic deflection and the collective effect appears as a mechanical force on the wire. This leaf translates force on individual charges into the macroscopic language of conductors.

The idea explains motors, loudspeakers, conducting rails, and forces between coils. It is not only a force calculation: it is the mechanism by which electric current can produce mechanical motion through a field.

This macroscopic viewpoint is useful because a conductor can be measured, held, weighed, and connected to a circuit. The same magnetic interaction that is microscopic in a single charge becomes an engineering force on a visible object.

> [!NOTE]
> The conductor is not pushed because it is metallic, but because it carries [[intensidad_de_corriente]] inside a magnetic field with suitable orientation.

## 🟢 Essential level

Magnetic force on a conductor appears when there is **current** inside a magnetic field. If no current flows, charges have no organized motion and the segment receives no net magnetic force in the ideal model. The central magnitude is [[fuerza_magnetica_sobre_el_conductor]], the total push on the segment inside the field.

The effect depends on current, exposed length, field strength, and orientation. If the conductor is parallel to the field, the force disappears; if it is perpendicular, the effect is maximal.

> [!WARNING]
> Do not draw the force along the wire. Direction comes from the right-hand rule applied to [[intensidad_de_corriente]] and [[campo_magnetico]].

## 🔵 Formal level

For a straight segment of effective length [[longitud_efectiva]], with conventional current [[intensidad_de_corriente]] in a uniform magnetic field [[campo_magnetico]], the force magnitude is:

{{f:fuerza_conductor_recto}}

The relation shows that [[fuerza_magnetica_sobre_el_conductor]] is proportional to every factor. If [[intensidad_de_corriente]] doubles, force doubles while [[longitud_efectiva]], [[campo_magnetico]], and [[s_theta]] remain unchanged. If only part of the wire lies inside the field, that part defines [[longitud_efectiva]]; using the full physical length of the circuit would be a model error.

The expression also fixes a control reading. [[intensidad_de_corriente]] is the electrical variable that can be adjusted quickly, [[campo_magnetico]] usually comes from the magnet or electromagnet, [[longitud_efectiva]] depends on geometric design, and [[s_theta]] records alignment. Thus the same conductor can produce very different forces without changing material.

When conductors of different length must be compared, it is useful to normalize force per effective metre:

{{f:fuerza_por_unidad_longitud}}

The magnitude [[fuerza_magnetica_por_unidad_de_longitud]] separates local intensity from total geometry. Two conductors can have the same [[fuerza_magnetica_por_unidad_de_longitud]] and different total forces if their exposed lengths are not equal. This distinction is essential in actuators, motors, and laboratory setups.

In comparison problems, [[fuerza_magnetica_por_unidad_de_longitud]] prevents a field difference from being blamed for what actually comes from active length. In design problems, [[fuerza_magnetica_sobre_el_conductor]] is the final magnitude that the mechanical support must withstand.

## 🔴 Structural level

The deep structure is collective. The current [[intensidad_de_corriente]] represents many moving charges crossing the conductor. Each charge feels magnetic deflection, but the charges do not freely leave the metal: they transfer momentum to the material lattice. Therefore the whole conductor can move, vibrate, or exert force on a support.

Geometry controls the result. [[s_theta]] summarizes the perpendicular component between the conductor oriented by current and [[campo_magnetico]]. A conductor parallel to the field may carry a large current and still receive no lateral magnetic force. A perpendicular conductor in the same field receives maximal action.

The effective length [[longitud_efectiva]] is another structural filter. The total circuit length does not count; only the segment immersed in the field with relevant orientation does. In a real motor, opposite sides of a loop may receive forces in opposite directions; the useful effect appears as torque or rotation, not simple translation.

The model fails if the field changes strongly over the conductor, if current is not uniform, if heating deforms the piece, or if mechanical force changes geometry during measurement. Then a straight-segment formula must be replaced by a sum over segments.

Force per unit length reveals local structure before the whole circuit is integrated. If [[fuerza_magnetica_por_unidad_de_longitud]] is large but [[longitud_efectiva]] is small, the total effect can be moderate. If [[fuerza_magnetica_por_unidad_de_longitud]] is modest but distributed over many active segments, the machine can produce considerable total force.

There is also an implicit energy reading. The magnetic field guides force direction, but mechanical energy delivered in a motor comes from the source maintaining the current. Separating geometric cause from energy supply prevents reading [[campo_magnetico]] as a mechanical battery.

> [!TIP]
> Always think in three layers: organized current, external field, and effective segment. Force appears where those three layers coincide.

## Deep physical interpretation

Force on conductors is the bridge between electricity and mechanics. Current does not only transport electrical energy; it can also interact with the field to produce a measurable push. This is the conceptual basis of electric motors.

Direction is as important as magnitude. Reversing [[intensidad_de_corriente]] reverses the force, reversing [[campo_magnetico]] also reverses it, and reversing both preserves the same direction. This symmetry allows motion to be controlled with switches and coils.

## Order of magnitude

A 0.20 m conductor carrying 5 A in a 0.10 T field can receive a force of tenths of a newton if it is perpendicular to the field. With environmental microtesla fields, the force drops by several orders of magnitude. If a small wire in a weak magnet gives full newtons, units, effective length, or orientation should be checked.

For classroom magnets, millinewtons to tenths of a newton are common enough to observe with balances or light supports. Industrial machines reach much larger forces because many active segments add their contributions.

## Personalized resolution method

First identify the segment actually inside the field. Then fix the conventional direction of [[intensidad_de_corriente]] and the direction of [[campo_magnetico]]. For magnitude, use [[intensidad_de_corriente]], [[longitud_efectiva]], [[campo_magnetico]], and [[s_theta]]. For direction, apply the right-hand rule; if only comparison between wires is requested, use [[fuerza_magnetica_por_unidad_de_longitud]].

## Special cases and extended example

If the conductor is parallel to the field, [[s_theta]] vanishes and there is no force even with large current. If it is perpendicular, force is maximal and is often observed as lateral displacement or tension on a support.

In a rectangular loop, two sides may feel opposite forces. If those forces act on different lines, they generate rotation. Thus force on conductors explains not only translation, but also motor torque.

## Real student questions

- **Why does the wire move if charges are inside the metal?** Because charges transfer momentum to the conductor lattice and the effect becomes mechanical.
- **Does the entire wire length count?** No. [[longitud_efectiva]] is the effective part inside the field with relevant orientation.
- **Is force in the direction of current?** No. It comes from the joint orientation of [[intensidad_de_corriente]] and [[campo_magnetico]].
- **Why use force per unit length?** Because [[fuerza_magnetica_por_unidad_de_longitud]] compares different segments without mixing total length.

## Cross-cutting connections and study paths

This leaf relies on [magnetic force on moving charges](leaf:fisica-clasica/electromagnetismo/magnetismo/fuerzas-magneticas/sobre-cargas-en-movimiento), because a conductor is a collection of moving charges. It also connects with motors, generators, and forces between currents.

The natural route is to move from a straight conductor to a loop and then to a motor. At every step the same local idea remains, but geometry converts lateral forces into rotational motion.

## Final synthesis

Magnetic force on conductors shows how current inside a field can produce mechanical action. Reading it requires separating current, effective length, field, orientation, and force per unit length.