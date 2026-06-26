const e=`# Faraday's Law

## Conceptual context

Faraday's law describes how induced emf appears when magnetic flux linked by a circuit changes. It is a central law of electromagnetic induction because it turns magnetic variation into a measurable electrical response.

This leaf explains what must change, what roles [[DeltaPhi_B]], [[Deltat]], and [[N]] play, and why the sign of [[epsilon_ind]] is not algebraic decoration but the Lenz opposition reading. It supports generators, transformers, sensors, and coils.

Thinking with Faraday's law also prevents a common mistake in induction problems: searching for a magnetic field value while ignoring the time history of the circuit.

> [!NOTE]
> Not every magnetic field induces emf. The key is change of linked flux.

## 🟢 Essential level

Imagine a loop crossed by magnetic field. If the field, effective area, or orientation changes, the flux through the loop changes. Faraday's law says that this change produces an emf [[epsilon_ind]] around the circuit.

The essential idea is **change**, not presence. A stationary magnet near a loop may produce flux, but no sustained emf if the flux does not vary. Moving the magnet, rotating the loop, or changing the field can induce voltage.

If the loop has many turns, the effect accumulates. Number [[N]] multiplies the response when turns link similar flux changes. That is why a coil can produce noticeable emf even when the change per turn is small.

> [!WARNING]
> The most common error is using flux as if it were the direct cause. The cause of emf is flux variation during a time interval.

## 🔵 Formal level

For a finite flux change, the average form of Faraday's law is:

{{f:ley_faraday_media}}

The relation shows three controls: how much flux changes, how long the change takes, and how many turns link that change. If [[DeltaPhi_B]] increases in magnitude or [[Deltat]] decreases, the magnitude of [[epsilon_ind]] grows. If [[N]] increases, contributions from more turns add.

It is useful to isolate the average rate of flux change first:

{{f:tasa_cambio_flujo}}

With that quantity, the law becomes a linear relation between temporal cause and induced response:

{{f:ley_faraday_tasa}}

This form is especially useful for graphs. If [[N]] stays fixed, changing [[r_Phi]] changes [[epsilon_ind]] proportionally and with opposite sign. The slope does not represent a resistance or an external source; it represents how many turns add the induced response.

When flux comes from an effective uniform field crossing an area, it can be estimated with:

{{f:flujo_uniforme}}

These formulas do not describe four separate phenomena. They decompose one reading: first determine [[Phi_B]], then the change [[DeltaPhi_B]], then the rate [[r_Phi]], and finally the emf [[epsilon_ind]] with opposition sign.

The order of use matters. If [[epsilon_ind]] is computed before defining which surface produces [[Phi_B]], sign and scale have no physical base. Formal mathematics therefore starts with linked flux and ends with induced emf.

## 🔴 Structural level

The deep structure of Faraday's law connects geometry, field, and circuit. Flux [[Phi_B]] is not just magnetic field: it includes which surface is chosen, what orientation it has, and what part of the field crosses it. The same field may induce different responses in circuits with different area or orientation.

The law also separates state from process. [[Phi_B]] describes a magnetic state; [[DeltaPhi_B]] describes a difference between states; [[r_Phi]] describes the average rate of that difference. Induced emf belongs to the process, not to the isolated state. This distinction prevents assigning emf to a static field.

There are several physical ways to change flux. [[B_perp]] may change, [[A]] may change, the effective orientation may change, or the circuit shape may change. The simple model uses [[B_perp]] and [[A]] when the field can be treated as uniform; if the field varies strongly in space, an integral description is needed.

The negative sign represents the causal part of Lenz's law: induced emf appears with polarity opposing the flux change that produces it. Without that reading, the law would give only magnitude and lose the physical direction of response.

Limits appear when the circuit is not well defined, when the change is so fast that a quasistatic approximation is not enough, or when a nonuniform field cannot be summarized by one [[B_perp]]. In those cases, Faraday's idea remains central, but the elementary estimate is insufficient.

Structurally, this is why the same law works for motion, changing current in a nearby coil, and changing area. These mechanisms look different mechanically, but they share one electromagnetic feature: the linked flux assigned to the circuit does not remain the same.

> [!TIP]
> To solve, always ask: which flux links the circuit, how it changes, how long it changes, and what sign Lenz imposes.

## Deep physical interpretation

Faraday's law does not say that magnetic field "pushes" charges merely by being present. It says that changing magnetic linkage creates an induced electrical circulation. Emf is a response of the whole circuit, not just of one local point.

The word linked is decisive. A nearby field that does not cross the chosen surface does not contribute to that circuit's flux. Likewise, a large area does not matter if effective component [[B_perp]] is zero.

## Order of magnitude

A coil with 100 turns and a flux change of 0.001 Wb per turn in 0.01 s can produce emf of order 10 V. In small sensors, emf may be microvolts or millivolts; in generators and transformers, it may reach hundreds or thousands of volts.

An absurd result appears if a large emf is predicted with zero [[DeltaPhi_B]], if [[Deltat]] is used in milliseconds without conversion, or if [[N]] is forgotten in a coil.

## Personalized resolution method

First identify the surface and positive normal. Then compute or estimate [[Phi_B]] in the relevant states. If the problem gives initial and final states, obtain [[DeltaPhi_B]] before thinking about emf.

Then convert [[Deltat]] to seconds, apply [[N]] if there is a coil, and preserve the sign. Finally interpret polarity: emf is oriented against flux change, not against flux itself.

## Special cases and extended example

With constant flux, average induced emf is zero even if flux is large. This occurs with a magnet stationary relative to a fixed loop. There is field and flux, but no linkage change.

If a loop rotates in a uniform field, flux changes even though field magnitude does not. Induction may come from orientation, area, field, or motion. Faraday groups all these possibilities under linked-flux change.

As an extended example, compare two coils subjected to the same flux change per turn. The coil with larger [[N]] produces larger [[epsilon_ind]], provided the turns link similar changes. If only part of the turns link the field, using total turns exaggerates emf.

## Real student questions

**Can there be flux without induced emf?** Yes. If [[Phi_B]] remains constant, there is no average emf even when flux is nonzero.

**Why does the negative sign matter?** It indicates the polarity opposing flux change. It is the Lenz reading.

**Does increasing area always increase emf?** Not necessarily. It increases flux only if the added area is crossed by effective [[B_perp]] and changes in the process.

**Does emf appear at one particular point?** Not like an ideal point battery. The law describes emf around the linked circuit.

## Cross-cutting connections and study paths

This leaf relies on [Magnetic flux](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/flujo-magnetico), where linkage of field with a surface is defined. It also connects with [Lenz's Law](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/ley-de-lenz), which interprets the sign.

Next, it is natural to study [Self-Inductance](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/inductancia/autoinduccion), [Mutual Inductance](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/inductancia/inductancia-mutua), generators, and transformers.

## Final synthesis

Faraday's law states that induced emf arises from linked magnetic flux change. [[DeltaPhi_B]], [[Deltat]], [[N]], and the Lenz sign turn magnetic variation into an interpretable electrical response.
`;export{e as default};
