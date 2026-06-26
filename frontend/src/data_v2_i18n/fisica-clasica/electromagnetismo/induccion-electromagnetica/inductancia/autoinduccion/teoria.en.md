## Conceptual context

Self-inductance appears when a coil changes its own current and therefore changes the magnetic flux it links. It is not an added external effect: the coil creates a field, that field links its turns, and any change in [[corriente_de_la_bobina]] modifies [[flujo_enlazado]].

This leaf explains why a coil resists abrupt changes, why it can generate overvoltage when a circuit is opened, and why it stores energy in its magnetic field. The dominant quantity is [[inductancia_propia]], which summarizes geometry, number of turns, and magnetic properties of the medium.

> [!NOTE]
> Self-induction does not oppose the existence of current; it opposes current change.

## 🟢 Essential level

A coil carrying current creates a magnetic field. If current increases, its own field increases; if current decreases, its own field decreases. Self-induction is the coil response to that change: an [[fem_autoinducida]] appears and tends to slow the variation of [[corriente_de_la_bobina]].

The intuitive idea is similar to electromagnetic inertia. An ideal coil can carry steady current without producing self-induced emf, but it reacts strongly when current changes rapidly. That is why switches, relays, and motors with coils need protection against voltage spikes.

In an everyday reading, the coil does not treat the absolute current value as the problem. It responds to its own field changing. If the change is slow, the response may be small; if the change is abrupt, the response may be large even when the initial current is not huge.

> [!WARNING]
> If you look only at instantaneous [[corriente_de_la_bobina]], you may miss the phenomenon. The key is [[cambio_de_corriente]] during [[intervalo_de_tiempo]].

## 🔵 Formal level

In a linear coil, linked flux and current keep a proportional relation. The operational definition of [[inductancia_propia]] is:

{{f:definicion_inductancia}}

This relation separates the magnetic state [[flujo_enlazado]] from the electrical cause [[corriente_de_la_bobina]]. If the slope is constant, the coil has a well-defined [[inductancia_propia]] over that segment. The same idea can be written as flux linkage produced by a current:

{{f:flujo_enlazado_lineal}}

When current changes during an interval, Faraday-Lenz law applied to the coil own flux gives the average emf:

{{f:fem_autoinducida_media}}

The negative sign is not decorative: it expresses that induced emf is oriented against current change. If [[cambio_de_corriente]] is positive, the coil responds by opposing the increase; if [[cambio_de_corriente]] is negative, it tends to sustain the current.

The energy stored in the magnetic field of a linear coil is:

{{f:energia_magnetica}}

These four relations connect three readings: magnetic slope, dynamic opposition, and energy storage. Self-induction is complete only when they are read together.

In practical calculation, these readings should not be mixed. [[flujo_enlazado]] describes a magnetic state, [[fem_autoinducida]] describes a time change, and [[energia_magnetica_almacenada]] describes available energy. The same [[inductancia_propia]] appears in all three, but the physical question decides which relation is used.

## 🔴 Structural level

The deep structure of self-induction is local electromagnetic feedback. Current [[corriente_de_la_bobina]] creates magnetic field, the field produces [[flujo_enlazado]], and the change of that linkage creates [[fem_autoinducida]]. The circuit does not need another magnet or another coil: it induces itself because its own field is linked with its turns.

Inductance [[inductancia_propia]] depends on geometry, number of turns, core, and spatial field distribution. In a coil with a ferromagnetic core, [[inductancia_propia]] may vary if the material saturates; then the slope between [[flujo_enlazado]] and [[corriente_de_la_bobina]] is no longer fixed.

Self-induced emf does not mean energy is created from nothing. It indicates exchange between source, magnetic field, and circuit. When a source increases current, part of the work is stored as [[energia_magnetica_almacenada]]. When the circuit is opened, that energy must leave through some path: a spark, a flyback diode, a discharge resistor, or an overvoltage.

It is also important to distinguish self-induction from mutual inductance. In self-induction, the changing flux belongs to the same coil. In mutual inductance, a change in one coil affects another.

> [!TIP]
> To diagnose an inductive problem, always ask: which current changes, over what time, and what inductance links that change.

## Deep physical interpretation

The sign of [[fem_autoinducida]] is a reading of causality. It does not mean the coil is an ordinary battery, but that the magnetic field reorganizes the circuit to oppose the imposed change. This opposition is the local version of Lenz's law applied to self flux.

Energy [[energia_magnetica_almacenada]] explains why inductive transients can be dangerous. A current-carrying coil stores energy even when the current is steady. If it is interrupted rapidly, the circuit must redistribute that energy in a short time, raising voltages if no safe discharge path exists.

## Order of magnitude

A small electronics inductor may be in microhenries; a filter coil may be in millihenries; a large electromagnet may reach henries. A change of 1 A in 1 ms with a 0.1 H coil can already produce emf of order one hundred volts.

An absurd result appears if a huge emf is predicted by using milliseconds as seconds, or if negative energy is obtained. The scale of [[fem_autoinducida]] grows when [[intervalo_de_tiempo]] is reduced, and the scale of [[energia_magnetica_almacenada]] grows rapidly with current.

## Personalized resolution method

First identify whether the problem asks for state, change, or energy. If it asks for magnetic state, use [[flujo_enlazado]] and [[inductancia_propia]]. If it asks for induced voltage, locate [[cambio_de_corriente]] and [[intervalo_de_tiempo]]. If it asks about opening or discharge risk, compute [[energia_magnetica_almacenada]].

Then keep the signs. The chosen direction for [[corriente_de_la_bobina]] fixes the sign of [[cambio_de_corriente]] and [[fem_autoinducida]]. Finally check the domain: if there is saturation, nonlinear core behavior, or important parasitics, constant inductance is only a first approximation.

## Special cases and extended example

With steady current, an ideal coil has linked flux and stored energy, but no self-induced emf. This case is often confusing because the field exists, although it is not changing. Emf appears from variation, not from static field presence.

When a relay opens, [[cambio_de_corriente]] is negative and [[intervalo_de_tiempo]] may be very small. The coil tries to sustain current and may raise the voltage at its terminals. A protection diode does not remove the energy; it provides a path to dissipate it in a controlled way.

As an extended example, compare a low-[[inductancia_propia]] coil and a high-[[inductancia_propia]] coil subjected to the same current change. The second produces larger [[fem_autoinducida]] and stores more [[energia_magnetica_almacenada]] for the same current, so switching requires more care.

## Real student questions

**Does inductance always slow current?** No. In the ideal model it opposes changes in [[corriente_de_la_bobina]]. A steady current produces no self-induced emf.

**Why does a spark appear when a coil is opened?** Because stored [[energia_magnetica_almacenada]] must leave. If the current path is cut, voltage may rise until another path opens.

**Why does the change time matter so much?** Because the same [[cambio_de_corriente]] produces larger [[fem_autoinducida]] when it occurs over smaller [[intervalo_de_tiempo]].

**Is the coil energy stored in the wire?** Not mainly. It is stored in the magnetic field associated with current.

## Cross-cutting connections and study paths

This leaf connects with [Magnetic flux](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/flujo-magnetico), where linked field through a surface is interpreted. It also connects with [Faraday's law](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/ley-de-faraday), which gives the structure of induced emf.

Next it is natural to study [Mutual inductance](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/inductancia/inductancia-mutua), transformers, and RL circuits. Self-induction is the case where the affected circuit is the same one that creates the flux.

## Final synthesis

Self-induction is the response of a coil to changes in its own current. [[inductancia_propia]] measures magnetic linkage per current, [[fem_autoinducida]] expresses opposition to change, and [[energia_magnetica_almacenada]] reveals energy stored in the field.