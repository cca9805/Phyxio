const e=`# Self-Inductance

## Conceptual context

Self-inductance appears when a coil changes its own current and therefore changes the magnetic flux it links. It is not an added external effect: the coil creates a field, that field links its turns, and any change in [[I]] modifies [[lambda_B]].

This leaf explains why a coil resists abrupt changes, why it can generate overvoltage when a circuit is opened, and why it stores energy in its magnetic field. The dominant quantity is [[L]], which summarizes geometry, number of turns, and magnetic properties of the medium.

> [!NOTE]
> Self-induction does not oppose the existence of current; it opposes current change.

## 🟢 Essential level

A coil carrying current creates a magnetic field. If current increases, its own field increases; if current decreases, its own field decreases. Self-induction is the coil response to that change: an [[epsilon_L]] appears and tends to slow the variation of [[I]].

The intuitive idea is similar to electromagnetic inertia. An ideal coil can carry steady current without producing self-induced emf, but it reacts strongly when current changes rapidly. That is why switches, relays, and motors with coils need protection against voltage spikes.

In an everyday reading, the coil does not treat the absolute current value as the problem. It responds to its own field changing. If the change is slow, the response may be small; if the change is abrupt, the response may be large even when the initial current is not huge.

> [!WARNING]
> If you look only at instantaneous [[I]], you may miss the phenomenon. The key is [[DeltaI]] during [[Deltat]].

## 🔵 Formal level

In a linear coil, linked flux and current keep a proportional relation. The operational definition of self-inductance is:

{{f:definicion_inductancia}}

This relation separates the magnetic state [[lambda_B]] from the electrical cause [[I]]. If the slope is constant, the coil has a well-defined [[L]] over that segment. The same idea can be written as flux linkage produced by a current:

{{f:flujo_enlazado_lineal}}

When current changes during an interval, Faraday-Lenz law applied to the coil own flux gives the average emf:

{{f:fem_autoinducida_media}}

The negative sign is not decorative: it expresses that induced emf is oriented against current change. If [[DeltaI]] is positive, the coil responds by opposing the increase; if [[DeltaI]] is negative, it tends to sustain the current.

The energy stored in the magnetic field of a linear coil is:

{{f:energia_magnetica}}

These four relations connect three readings: magnetic slope, dynamic opposition, and energy storage. Self-induction is complete only when they are read together.

In practical calculation, these readings should not be mixed. [[lambda_B]] describes a magnetic state, [[epsilon_L]] describes a time change, and [[U_B]] describes available energy. The same [[L]] appears in all three, but the physical question decides which relation is used.

## 🔴 Structural level

The deep structure of self-induction is local electromagnetic feedback. Current [[I]] creates magnetic field, the field produces [[lambda_B]], and the change of that linkage creates [[epsilon_L]]. The circuit does not need another magnet or another coil: it induces itself because its own field is linked with its turns.

Inductance [[L]] depends on geometry, number of turns, core, and spatial field distribution. In a coil with a ferromagnetic core, [[L]] may vary if the material saturates; then the slope between [[lambda_B]] and [[I]] is no longer fixed.

Self-induced emf does not mean energy is created from nothing. It indicates exchange between source, magnetic field, and circuit. When a source increases current, part of the work is stored as [[U_B]]. When the circuit is opened, that energy must leave through some path: a spark, a flyback diode, a discharge resistor, or an overvoltage.

It is also important to distinguish self-induction from mutual inductance. In self-induction, the changing flux belongs to the same coil. In mutual inductance, a change in one coil affects another.

> [!TIP]
> To diagnose an inductive problem, always ask: which current changes, over what time, and what inductance links that change.

## Deep physical interpretation

The sign of [[epsilon_L]] is a reading of causality. It does not mean the coil is an ordinary battery, but that the magnetic field reorganizes the circuit to oppose the imposed change. This opposition is the local version of Lenz's law applied to self flux.

Energy [[U_B]] explains why inductive transients can be dangerous. A current-carrying coil stores energy even when the current is steady. If it is interrupted rapidly, the circuit must redistribute that energy in a short time, raising voltages if no safe discharge path exists.

## Order of magnitude

A small electronics inductor may be in microhenries; a filter coil may be in millihenries; a large electromagnet may reach henries. A change of 1 A in 1 ms with a 0.1 H coil can already produce emf of order one hundred volts.

An absurd result appears if a huge emf is predicted by using milliseconds as seconds, or if negative energy is obtained. The scale of [[epsilon_L]] grows when [[Deltat]] is reduced, and the scale of [[U_B]] grows rapidly with current.

## Personalized resolution method

First identify whether the problem asks for state, change, or energy. If it asks for magnetic state, use [[lambda_B]] and [[L]]. If it asks for induced voltage, locate [[DeltaI]] and [[Deltat]]. If it asks about opening or discharge risk, compute [[U_B]].

Then keep the signs. The chosen direction for [[I]] fixes the sign of [[DeltaI]] and [[epsilon_L]]. Finally check the domain: if there is saturation, nonlinear core behavior, or important parasitics, constant inductance is only a first approximation.

## Special cases and extended example

With steady current, an ideal coil has linked flux and stored energy, but no self-induced emf. This case is often confusing because the field exists, although it is not changing. Emf appears from variation, not from static field presence.

When a relay opens, [[DeltaI]] is negative and [[Deltat]] may be very small. The coil tries to sustain current and may raise the voltage at its terminals. A protection diode does not remove the energy; it provides a path to dissipate it in a controlled way.

As an extended example, compare a low-[[L]] coil and a high-[[L]] coil subjected to the same current change. The second produces larger [[epsilon_L]] and stores more [[U_B]] for the same current, so switching requires more care.

## Real student questions

**Does inductance always slow current?** No. In the ideal model it opposes changes in [[I]]. A steady current produces no self-induced emf.

**Why does a spark appear when a coil is opened?** Because stored [[U_B]] must leave. If the current path is cut, voltage may rise until another path opens.

**Why does the change time matter so much?** Because the same [[DeltaI]] produces larger [[epsilon_L]] when it occurs over smaller [[Deltat]].

**Is the coil energy stored in the wire?** Not mainly. It is stored in the magnetic field associated with current.

## Cross-cutting connections and study paths

This leaf connects with [Magnetic flux](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/flujo-magnetico), where linked field through a surface is interpreted. It also connects with [Faraday's law](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/ley-de-faraday), which gives the structure of induced emf.

Next it is natural to study [Mutual inductance](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/inductancia/inductancia-mutua), transformers, and RL circuits. Self-induction is the case where the affected circuit is the same one that creates the flux.

## Final synthesis

Self-induction is the response of a coil to changes in its own current. [[L]] measures magnetic linkage per current, [[epsilon_L]] expresses opposition to change, and [[U_B]] reveals energy stored in the field.
`;export{e as default};
