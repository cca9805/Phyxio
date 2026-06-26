## Conceptual context

Mutual inductance appears when the magnetic field created by one coil links another coil. Physical proximity is not enough: there must be **common flux** effectively crossing the receiving circuit. Two coils may be near each other and still couple weakly if their axes, cores, or field paths do not favor linkage.

This leaf explains how a variation of [[corriente_fuente]] produces an emf [[epsilon_2]] in another coil, what role [[inductancia_mutua]] plays, and why coefficient [[coeficiente_de_acoplamiento]] separates coil size from coupling quality. It is needed for transformers, inductive sensors, ignition coils, and contactless energy transfer.

> [!NOTE]
> Mutual inductance does not describe an isolated coil. It describes a magnetic relation between two coils.

## 🟢 Essential level

A primary coil carrying current creates a magnetic field. If part of that field crosses a secondary coil, flux linkage [[lambda_21]] appears. While primary current stays steady, that flux may exist without producing sustained emf. The new phenomenon begins when [[corriente_fuente]] changes.

The secondary coil responds to the flux change with an emf [[epsilon_2]]. That emf does not require the secondary to carry a closed current; it can be measured even with an open circuit. The important point is **change of magnetic linkage**, not electrical contact between coils.

A simple way to see it is to imagine a transmitting coil and a receiving coil. The transmitter decides how the field changes; the receiver responds only to the part of that field that actually crosses it. If that shared part is small, induction is small too.

> [!WARNING]
> The basic error is looking only at proximity. The right question is how much flux from one coil is linked with the other.

## 🔵 Formal level

In the linear regime, primary current and secondary flux linkage keep a proportional relation. The operational definition of mutual inductance is:

{{f:definicion_inductancia_mutua}}

The same relation can be read as mutual flux produced by a primary current:

{{f:flujo_mutuo_lineal}}

When primary current changes over an interval, Faraday-Lenz law applied to mutual flux gives the average emf in the secondary coil:

{{f:fem_mutua_media}}

The negative sign expresses opposition to linked-flux change. If [[cambio_de_corriente_primaria]] increases secondary flux in the chosen reference, [[epsilon_2]] appears with polarity tending to oppose that increase. Actual polarity is fixed by dot convention or winding direction.

To distinguish coil self-scale from coupling quality, introduce:

{{f:coeficiente_acoplamiento}}

This relation shows that [[inductancia_mutua]] is not determined only by large coils. Two coils with large [[inductancia_propia_primaria]] and [[inductancia_propia_secundaria]] may have small [[inductancia_mutua]] if [[coeficiente_de_acoplamiento]] is low. Conversely, a common core may strongly increase [[coeficiente_de_acoplamiento]] without arbitrarily changing the self-inductances.

Formally, these expressions separate three tasks. The first measures coupling from flux, the second predicts secondary flux for a given state, and the third estimates induced voltage during a transient. Mixing them usually creates sign errors or source-variable errors.

The relation is chosen from the question. If [[lambda_21]] and [[corriente_fuente]] are known, [[inductancia_mutua]] is measured. If [[inductancia_mutua]] is known and [[corriente_fuente]] changes, [[epsilon_2]] is predicted. If [[inductancia_propia_primaria]] and [[inductancia_propia_secundaria]] are known, [[coeficiente_de_acoplamiento]] judges whether coupling is strong or weak.

## 🔴 Structural level

The deep structure of mutual inductance is a chain of shared magnetic causality. Current [[corriente_fuente]] creates a field; part of that field links the second coil as [[lambda_21]]; change of that linkage produces [[epsilon_2]]. The secondary does not respond directly to primary current, but to the flux that current manages to send through it.

Quantity [[inductancia_mutua]] condenses geometry, number of turns, core permeability, distance, orientation, and leakage flux. Therefore it is not a property of the primary alone or the secondary alone. It is a **property of the pair**. Changing separation, rotating a coil, or inserting a core modifies coupling even when each individual coil remains the same.

Coefficient [[coeficiente_de_acoplamiento]] organizes the structural interpretation. If [[coeficiente_de_acoplamiento]] is near one, almost all relevant flux is shared. If [[coeficiente_de_acoplamiento]] is small, much of the field created by the primary does not link the secondary. This distinction prevents confusing a large self-inductance with efficient coupling.

There are also clear limits. If the core saturates, [[inductancia_mutua]] is no longer constant. If the coils move, coupling changes with time. If the change is very fast, parasitic capacitances and electromagnetic waves may participate. In those cases, the model of two linear coupled inductors is no longer a complete description.

The structure also explains practical reciprocity of coupling: in linear media and fixed geometry, exchanging source and receiver preserves the same coupling scale. What changes is the current reference, the observed coil, and the polarity used to read induced emf.

In a real setup, this reciprocity helps test the system by swapping transmitter and receiver without changing geometry.

> [!TIP]
> To diagnose mutual induction, separate three questions: which current changes, what fraction of flux is shared, and what polarity is imposed by Lenz's law.

## Deep physical interpretation

The emf [[epsilon_2]] does not mean the primary sends charge through space. Transfer begins as reorganization of the magnetic field. The secondary detects that its linked flux changes and responds with an emf compatible with Lenz's law.

The sign is especially delicate. The same positive [[inductancia_mutua]] may produce different polarity readings depending on terminal and winding conventions. That is why transformers use dot marks: they do not change the value of [[inductancia_mutua]], but they fix which terminals rise or fall in potential together.

## Order of magnitude

In separated laboratory coils, [[inductancia_mutua]] may be in microhenries or less. In common-core transformers, it may reach millihenries or henries. A variation of 1 A in 1 ms with [[inductancia_mutua]] of 0.05 H produces secondary emf of order several tens of volts.

An absurd result appears if [[coeficiente_de_acoplamiento]] is greater than one in passive coils, if [[inductancia_mutua]] clearly exceeds the scale compatible with [[inductancia_propia_primaria]] and [[inductancia_propia_secundaria]], or if a huge emf is predicted because milliseconds were not converted to seconds. The scale of [[epsilon_2]] grows when [[intervalo_de_tiempo]] decreases.

## Personalized resolution method

First identify the source coil and the receiving coil. If the data mention primary current, use [[corriente_fuente]] or [[cambio_de_corriente_primaria]]. If they mention magnetic linkage in the secondary, use [[lambda_21]]. If induced voltage is requested, locate [[inductancia_mutua]] and [[intervalo_de_tiempo]].

Then preserve sign references. The polarity of [[epsilon_2]] depends on how windings, normals, and terminals are oriented. Finally check whether the problem asks for coupling quality: then [[coeficiente_de_acoplamiento]], [[inductancia_propia_primaria]], and [[inductancia_propia_secundaria]] enter, not only induced emf.

## Special cases and extended example

If the secondary circuit is open, [[epsilon_2]] may exist even though no appreciable secondary current flows. This is normal in an induced-voltage measurement. Absence of current does not remove emf; it only prevents sustained power transfer to a load.

If primary current is steady, constant [[lambda_21]] may exist without average secondary emf. The common flux exists, but it does not change. This difference separates magnetic field presence from active electromagnetic induction.

As an extended example, compare two pairs of coils with equal [[inductancia_propia_primaria]] and [[inductancia_propia_secundaria]]. The pair with a common core and nearby windings has larger [[coeficiente_de_acoplamiento]], therefore larger [[inductancia_mutua]] and larger [[epsilon_2]] for the same [[cambio_de_corriente_primaria]]. The separated pair may have the same self-inductances and still induce much less.

## Real student questions

**Does the secondary need to be connected for emf to exist?** No. [[epsilon_2]] may exist with an open circuit. What is missing then is sustained secondary current.

**Why is [[inductancia_mutua]] not simply [[inductancia_propia_primaria]] or [[inductancia_propia_secundaria]]?** Because [[inductancia_propia_primaria]] and [[inductancia_propia_secundaria]] describe each coil with itself. [[inductancia_mutua]] describes flux shared between two coils.

**Can there be mutual flux without induced voltage?** Yes. If [[corriente_fuente]] is steady, [[lambda_21]] may remain constant and produce no average emf.

**What does small [[coeficiente_de_acoplamiento]] mean?** It means much of the flux created by the primary does not link effectively with the secondary.

## Cross-cutting connections and study paths

This leaf relies on [Magnetic flux](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/flujo-magnetico), because the central concept is field linkage with a coil. It also depends on [Faraday's law](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/ley-de-faraday), which fixes the relation between flux change and emf.

Before this, it is useful to master [Self-Inductance](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/inductancia/autoinduccion). Afterward, the natural path leads to transformers, coupled circuits, and inductive energy transfer.

## Final synthesis

Mutual inductance measures how one coil changes electrically because of flux created by another. [[inductancia_mutua]] summarizes coupling, [[epsilon_2]] expresses induced response, and [[coeficiente_de_acoplamiento]] separates self-size from quality of magnetic linkage.