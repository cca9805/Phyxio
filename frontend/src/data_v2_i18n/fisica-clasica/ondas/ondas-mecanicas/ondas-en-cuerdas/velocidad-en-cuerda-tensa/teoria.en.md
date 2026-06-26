## Conceptual context

A taut string transmits transverse disturbances because each small segment pulls on its neighbors. The wave does not advance because the whole string travels along its length; it advances because **mechanical information** is passed from segment to segment. This leaf studies what sets that speed in an ideal string and why looking only at the source [[frecuencia]] is not enough.

The central distinction is between three roles: the source sets the temporal rhythm [[frecuencia]], the string sets the speed [[velocidad_de_propagacion]], and their combination fixes the spatial scale [[lambda]]. In a uniform string, the main mechanical controls are [[tension_de_la_cuerda]] and [[mu]].

This idea is useful for tuning instruments, interpreting pulses on cables, estimating delays in lab setups, and preparing the study of standing waves. If tension or material changes, the speed at which a disturbance travels along the string changes.

## 🟢 Essential level

The essential idea is direct: a tighter string transmits the disturbance sooner, while a string with more mass per meter responds more slowly. Tension acts as the **restoring agent**; linear density acts as **distributed inertia**.

> [!NOTE]
> [[velocidad_de_propagacion]] is not the speed at which one point moves up and down. A point of the string oscillates transversely; [[velocidad_de_propagacion]] measures how fast the shape of the disturbance advances along the string.

If [[tension_de_la_cuerda]] increases, each segment pulls more effectively on neighboring segments. If [[mu]] increases, there is more mass to accelerate in each meter. That is why a thin, highly taut string transmits pulses quickly, while a thick, loose string transmits pulses more slowly.

The [[frecuencia]] does not by itself determine the speed. A hand can shake the string faster or slower, but if the string, its tension, and its linear mass do not change, the medium keeps nearly the same [[velocidad_de_propagacion]]. What adjusts then is [[lambda]].

## 🔵 Formal level

The ideal model summarizes the balance between elastic restoration and linear inertia through the speed relation for a taut string:

{{f:velocidad_cuerda_tensa}}

This formula says that [[tension_de_la_cuerda]] acts as the restoring cause and [[mu]] as the inertial resistance. The square root matters: a large increase in tension produces a real increase in [[velocidad_de_propagacion]], but not a directly proportional one.

Once [[velocidad_de_propagacion]] is known, it can be connected with the wave's temporal rhythm and spatial separation:

{{f:frecuencia_desde_velocidad}}

The same relation, read from the spatial scale when the source imposes a [[frecuencia]], is:

{{f:longitud_onda_desde_velocidad}}

These three relations do not say the same thing. The first one determines speed from mechanical properties of the string. The other two translate that speed into wave reading: if [[frecuencia]] is fixed, a larger [[velocidad_de_propagacion]] makes [[lambda]] larger.

When the same segment is fixed at both ends, [[longitud_efectiva]] does not determine local speed, but it converts that speed into the fundamental [[frecuencia]] of the standing pattern:

{{f:frecuencia_fundamental_cuerda}}

This last relation is a boundary bridge. It reads what a string already characterized by [[tension_de_la_cuerda]] and [[mu]] does when its active length is also known. If [[longitud_efectiva]] increases while the string keeps the same [[velocidad_de_propagacion]], the fundamental decreases because the compatible pattern needs more travel time. The roles stay separated: [[tension_de_la_cuerda]] restores, [[mu]] supplies inertia, and [[longitud_efectiva]] selects modes.

> [!WARNING]
> Do not confuse cause and consequence. In an ideal string, [[tension_de_la_cuerda]] and [[mu]] set the speed. [[frecuencia]] and [[lambda]] organize around that speed.

## 🔴 Structural level

The model rests on an idealization: the string is flexible, uniform, keeps nearly constant tension, and vibrates with small amplitude. Under those conditions, each string segment behaves as part of a continuous medium where the transverse force appears through local curvature.

The dependence on [[tension_de_la_cuerda]] and [[mu]] has a causal reading. Tension communicates transverse displacement to neighboring regions; linear density marks how much inertia resists that acceleration. Therefore two strings with the same length can have very different speeds if they differ in material, gauge, or tension.

The effective length [[longitud_efectiva]] is not a direct local cause of speed in a uniform string. However, [[longitud_efectiva]] becomes crucial when studying standing modes, because it determines which patterns fit between endpoints. This leaf focuses on local propagation; modes appear later as a geometric consequence.

The model stops being sufficient when the string is very stiff, when amplitude significantly changes tension, when friction is strong, when density varies along the string, or when the supports absorb energy. In those cases, speed may depend on [[frecuencia]], position, or dynamic state.

It is also important to distinguish wave speed, energy speed, and phase speed. In the simple model they coincide in practice for pulses and nondispersive sinusoidal waves. In thick real strings, especially in demanding instruments, corrections shift harmonics and modify the ideal reading.

The structural diagnosis is to ask what is being held fixed when a reading changes. If [[tension_de_la_cuerda]] changes while [[mu]] does not, restoration is being tested; if [[mu]] changes while [[tension_de_la_cuerda]] does not, distributed inertia is being tested; if [[longitud_efectiva]] changes without changing the string, a boundary condition is being tested, not a new local speed. This distinction prevents using a correct formula at the wrong level and helps identify whether a datum belongs to the medium, the source, or the endpoints.

## Deep physical interpretation

Propagation speed is a **property of the medium**, not of the source. If a generator changes its [[frecuencia]], it forces the string to oscillate with another rhythm, but it does not automatically change how each segment pulls on its neighbors. To change [[velocidad_de_propagacion]], one must change the string as a mechanical system: its [[tension_de_la_cuerda]], its [[mu]], or its physical conditions.

This explains a common observation: tightening a guitar string raises the pitch because [[velocidad_de_propagacion]] increases. The string does not "know music"; it simply transmits disturbances faster. When the active length stays fixed, a larger speed raises the frequencies compatible with standing patterns.

> [!TIP]
> If the value of [[velocidad_de_propagacion]] looks strange, first check whether [[tension_de_la_cuerda]] and [[mu]] have coherent units. Many errors come from using grams per meter as if they were kilograms per meter.

## Order of magnitude

In light teaching strings, [[velocidad_de_propagacion]] may be tens of meters per second. In taut musical strings, several hundred meters per second are reasonable. In very light and highly tensioned cables, speed can be even larger, although the ideal model then requires care with stiffness and losses.

A quick estimate: tensions of tens of newtons and linear densities of a few grams per meter commonly produce speeds comparable to musical strings. If a calculation gives centimeters per second or tens of kilometers per second, units should be reviewed.

## Personalized resolution method

1. Identify whether the problem asks for medium speed, [[frecuencia]], or [[lambda]].
2. If it asks for [[velocidad_de_propagacion]], look for [[tension_de_la_cuerda]] and [[mu]] before using source data.
3. Convert [[mu]] to kg/m and [[tension_de_la_cuerda]] to newtons.
4. Compute speed with the mechanical taut-string relation.
5. Only then connect [[velocidad_de_propagacion]] with [[frecuencia]] or [[lambda]] if the statement asks for it.
6. Interpret the result: more tension accelerates; more linear density slows.

## Special cases and extended example

A laboratory string may have [[tension_de_la_cuerda]] adjusted with a hanging mass and [[mu]] measured by weighing a known segment. If the hanging mass is doubled, tension increases, but speed does not double. The change is visible, though smaller than direct proportionality would suggest.

In a guitar, a bass string usually has larger [[mu]] than a treble string. To keep it useful, tension, length, and material are chosen together. The manufacturer does not choose [[velocidad_de_propagacion]] in isolation: the design must produce useful frequencies, acceptable feel, and mechanical durability.

In a nonuniform string, a pulse can change shape as it propagates. The denser part responds with another speed and partial reflections appear. That case is no longer well described by a single global [[mu]] and requires a piecewise model.

## Real student questions

**Why does a tighter string sound higher?** Because increasing [[tension_de_la_cuerda]] raises [[velocidad_de_propagacion]]. If the active length does not change, compatible standing patterns vibrate at higher [[frecuencia]].

**Does the [[frecuencia]] of my hand change the pulse speed?** Not directly. The source changes the rhythm [[frecuencia]]; the string decides speed through its mechanical properties. At fixed [[frecuencia]], the visible adjustment appears in [[lambda]].

**Why can a thick string sound low even when it is tense?** Because a thick string usually has larger [[mu]]. That linear inertia reduces speed and allows lower frequencies for the same length.

**Does string length change speed?** In the uniform model, not as a local cause. [[longitud_efectiva]] matters for standing modes and allowed notes, but local speed depends on tension and linear density.

## Cross-cutting connections and study paths

This leaf connects with [[[frecuencia]] and period](leaf:fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/[[frecuencia]]-y-periodo), [[[lambda]]](leaf:fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/longitud-de-onda), and [standing waves](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-cuerdas/ondas-estacionarias). First understand what sets [[velocidad_de_propagacion]]; then the allowed frequencies of a string become physically meaningful.

## Final synthesis

Propagation speed on a taut string is a balance: [[tension_de_la_cuerda]] communicates the disturbance and [[mu]] supplies inertia. The source may change [[frecuencia]], but the string sets [[velocidad_de_propagacion]]; from that, [[lambda]] and the compatible frequencies follow.