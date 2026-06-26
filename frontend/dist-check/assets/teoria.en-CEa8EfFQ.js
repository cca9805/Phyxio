const e=`# Orbital Energy

## Conceptual context

Orbital energy lets us read an orbit as a mechanical state, not only as a curve in space. The instantaneous position [[r]] and speed [[v]] do not separately decide whether a satellite remains trapped, escapes, or changes orbit: the decision comes from the combination of kinetic energy, potential energy, and the escape reference.

In Newtonian gravitation, gravitational potential energy is taken as zero at infinity. Therefore a bound orbit has negative energy. This does not mean that energy is impossible; it means that energy must be supplied to take the object to infinity with zero final speed. This idea connects launch, transfer, escape, and stability in one reading.

## 🟢 Essential level

A bound orbit is energetically an object inside a gravitational well. If the satellite has little total mechanical energy, it remains confined around the central mass. If it receives enough energy to reach the zero threshold, it may escape. Orbital energy does not ask only "how fast is it moving"; it asks whether that speed compensates the depth of the field at the current position.

The kinetic energy [[K]] measures motion and is always positive. The potential energy [[U]] in an attractive field is negative when zero is placed at infinity. The sum [[E]] gives the actual balance: a satellite may move fast and still be bound if the potential energy is even more negative. Thus two satellites with the same speed do not necessarily have the same orbital state if they are at different [[r]].

To compare orbits without depending on satellite mass, one uses the specific energy [[eps]]. This magnitude divides mechanical energy by unit mass and classifies states of probes, satellites, or fragments without making the result depend on how many kilograms each object has.

## 🔵 Formal level

Total mechanical energy adds the two main contributions:

{{f:energia_total_desde_k_u}}

The contribution associated with motion is computed from satellite mass [[m]] and instantaneous speed [[v]]:

{{f:energia_cinetica}}

The position contribution in the field of central mass [[M]], with zero reference at infinity, is:

{{f:energia_potencial}}

When the goal is to classify the state without carrying the mass [[m]], specific energy is used:

{{f:energia_especifica_estado}}

For a bound Keplerian orbit, total energy is directly related to the semi-major axis [[a]]:

{{f:energia_total_ligada}}

The same relation per unit mass is:

{{f:energia_especifica_ligada}}

The circular orbit is a special case where [[r]] coincides with [[a]]:

{{f:energia_circular}}

Finally, the conceptual sign criterion classifies the state:

{{f:clasificacion_orbital_conceptual}}

If [[E]] or [[eps]] is negative, the orbit is bound; if it reaches the threshold [[E0]], it is ideal parabolic escape; if it is positive, the trajectory is open.

## 🔴 Structural level

The model assumes a two-body system with dominant central mass, Newtonian regime, and no thrust, atmospheric drag, or strong perturbations. Under these conditions, mechanical energy is conserved and can be used as a global criterion. If an engine is firing, drag is present, or close encounters with third bodies occur, [[E]] is no longer constant and the interval and model must be specified.

The difference between [[r]] and [[a]] is structural. The radius [[r]] describes the current point of the orbit; the semi-major axis [[a]] summarizes the size of a complete bound orbit. In a circle they coincide, but in an ellipse they do not. Confusing them makes students apply circular relations to elliptical states and lose the correct energy reading.

Specific energy [[eps]] is especially powerful because it removes the satellite mass [[m]]. Two objects in the same orbital state around the same [[M]] have the same [[eps]] even if their masses differ. Total energy [[E]], by contrast, does scale with [[m]] and is needed when work, fuel, or power associated with an orbital change is computed.

## Deep physical interpretation

Orbital energy transforms the question "where is it and how does it move" into a question about dynamical fate. High speed does not guarantee escape if the satellite is deep in the gravitational well; moderate speed may be enough far from the central body. The energy sign summarizes this competition between motion and position.

It also explains why changing orbit costs energy in non-intuitive ways. To raise a bound orbit, the energy must become less negative, not simply "increase" without reference. To circularize, the distribution between kinetic and potential energy is adjusted until the state is compatible with a circular trajectory.

## Order of magnitude

In low Earth orbit, typical specific energies are of the order of tens of millions of joules per kilogram in absolute value. That number is large because moving one orbital kilogram involves a planetary gravitational scale, not only accelerating an object in a laboratory.

In high orbits, [[eps]] approaches zero from negative values. This does not mean that the satellite stops; it means that it is less tightly bound. In the ideal escape limit, specific energy reaches zero with zero residual speed at infinity.

## Personalized resolution method

First identify whether the problem gives an instantaneous state or an orbit described by [[a]]. If it gives [[r]] and [[v]], use state specific energy and then classify the sign. If it gives the semi-major axis, use the bound energy relation. If total energy is also required, multiply the specific reading by [[m]] or use the mass-dependent formula directly.

Then check the reference: in this leaf the energy zero is at infinity. With that convention, [[U]] is negative, [[K]] is positive, and [[E]] may be negative, zero, or positive. The final answer must interpret the sign: bound, escape threshold, or open trajectory.

Finally, distinguish energy result from orbital geometry. Energy fixes the size of a bound orbit through [[a]], but it does not by itself determine orientation, plane, phase, or eccentricity. A full orbital description requires additional orbital elements.

## Special cases and extended example

In a circular orbit, total energy is half the potential energy and has negative sign. This gives a clear reading: circular speed is not escape speed, but the speed that maintains continuous fall around the center with bound energy.

In an ideal escape trajectory, [[E]] and [[eps]] reach the zero threshold. If the satellite keeps positive energy, it reaches infinity with residual speed. If energy remains negative, it does not escape: even if it rises far away, it will return if no other effects intervene.

In an elliptical orbit, speed changes along the trajectory, but total mechanical energy remains constant if there are no non-conservative forces. The satellite is faster near periapsis and slower near apoapsis without [[E]] changing.

## Real student questions

Why is negative energy not an error? Because zero was chosen at infinity. Negative energy means the object is bound and energy must be supplied to separate it permanently.

Why does satellite mass disappear in [[eps]]? Because all energy is divided by [[m]]. This studies the orbit as a dynamical state regardless of whether the object is a small probe or a heavy satellite.

Are orbital energy and orbital speed the same thing? No. Speed provides the kinetic part, but orbital energy also includes position in the gravitational field. The same [[v]] can mean different situations at different radii.

## Cross-cutting connections and study paths

This leaf connects with orbital speed because speed enters kinetic energy and state specific energy. It also connects with gravitational potential energy, since the negative sign of [[U]] is the basis of the binding criterion.

After this topic, the natural route goes to orbital transfers, escape speed, Hohmann maneuvers, and perturbations. In all those cases, the energy question comes before the geometric one: first decide whether the energy state allows the desired trajectory.

## Final synthesis

Understanding orbital energy means reading an orbit through its mechanical balance. The competition between [[K]], [[U]], [[E]], and [[eps]] decides whether the satellite is bound, whether it can escape, and how energy relates to orbital size. The final goal is to use energy as a physical criterion, not as an algebraic sum without interpretation.
`;export{e as default};
