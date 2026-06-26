const e=`# Isolated System

## Conceptual context

Thermodynamics classifies systems according to the types of exchanges they allow with their surroundings. An **isolated system** is one whose boundary simultaneously forbids the exchange of **matter**, **heat**, and **mechanical work**. It is the most restrictive idealization among the three types of thermodynamic systems and, paradoxically, the one that yields the most powerful laws: the first law reduces to a single constraint and the second law takes its purest form.

Understanding the isolated system is not an abstract exercise. It is the conceptual foundation for understanding why processes have a temporal direction, why equilibrium is a preferred state, and why certain transformations are irreversible in nature. Without this type of system, the concept of entropy loses its most direct foundation.

## 🟢 Essential level

An isolated system is, intuitively, a system that cannot "communicate" with its surroundings. It neither receives nor releases heat, performs no work and has none done on it, and no particle crosses its boundary. Imagine a perfectly sealed container with absolutely rigid walls and no thermal conductivity whatsoever: that would be, ideally, an isolated system.

The immediate consequence is that the **total energy of the system does not change**. What happens inside —mixing, reactions, temperature redistributions— does not alter the total energy; it merely reorganizes it. This does not mean the system is inactive: intense internal processes can occur. The difference is that none of them have an "outlet" for energy to reach the exterior.

The other consequence, perhaps less obvious, is that the microscopic disorder of the system can increase but never decrease. Isolated systems evolve spontaneously toward more disordered states until they reach equilibrium, and there they stop.

## 🔵 Formal level

The first law of thermodynamics states that the change [[DeltaU]] of a system equals the sum of the heat [[Q_ais]] it receives and the work [[W_ais]] it receives from its surroundings. In an isolated system, both transfers are zero by definition of the boundary:

{{f:primer_principio_aislado}}

This expression, although algebraically simple, encapsulates the complete definition of isolation. The adiabatic boundary imposes zero [[Q_ais]]; the rigid boundary imposes zero [[W_ais]]; the impermeable boundary ensures no matter-flow terms appear in the balance. The result is that [[DeltaU]] is always zero for a perfectly isolated system.

The second law introduces the complementary constraint. The change in [[S_ais]] must satisfy the Clausius-Planck inequality for isolated systems:

{{f:entropia_aislado}}

This inequality distinguishes between **reversible** processes (zero entropy change, a theoretical limit unreachable in real macroscopic systems) and **irreversible** processes (strictly positive entropy change, the case for any real spontaneous process). Together, these two laws completely determine which processes are possible in an isolated system: those that conserve total internal energy and do not decrease entropy.

## 🔴 Structural level

The depth of the isolated system lies in the asymmetry introduced by the second law. While the first law is completely time-symmetric —conservation of [[DeltaU]] does not distinguish past from future— the second law breaks that symmetry: entropy grows or remains constant but never decreases. This is the basis of the **thermodynamic arrow of time**.

Structurally, the isolated system reaches equilibrium when [[S_ais]] reaches its maximum value compatible with internal constraints (fixed volume, energy, composition). At that state, all internal gradients have vanished: no temperature gradient, no pressure gradient, no difference in chemical potential between parts of the system. Equilibrium is not a state of microscopic inactivity, but of macroscopic equipartition.

> [!NOTE]
> Internal processes of the isolated system —mixing of gases, temperature equalization, free expansion of a gas into vacuum— are precisely those that produce entropy generation. Each one irreversibly increases [[S_ais]].

A critical distinction for the advanced student: the isolated system must not be confused with the **thermodynamic universe**. The universe (system plus surroundings) is the maximum isolated system, which is why the second law is often stated as "the entropy of the universe does not decrease." But when the analysis focuses on a specific laboratory system declared isolated, the same rules apply directly to that subsystem.

The **boundary** is the defining element of the isolated system, and its properties are more demanding than those of any other type of system. An adiabatic boundary forbids heat flow (zero thermal conductivity in the limit); a rigid boundary forbids pressure-volume work (mechanically undeformable); an impermeable boundary forbids matter flow (no pores or cracks). In practice, the **Dewar flask** (vacuum flask or thermos) is the best technological approximation: its internal vacuum eliminates thermal conduction and convection, and the reflective coating drastically reduces radiation.

> [!WARNING]
> No real physical system is perfectly isolated. Isolation is always an approximation valid over a finite time interval, whose duration depends on the constructive quality of the boundary. Over very long times, even the best Dewar flask exchanges energy with its surroundings.

The connection to the other types of systems is important: a **closed system** allows exchange of heat and work but not matter; an **open system** allows all three. The isolated system is the most restricted limit. Knowing its properties is the mandatory starting point for understanding the other two types, because the isolated system reveals which laws are absolute (conservation of [[DeltaU]] and non-decrease of [[S_ais]]) versus those that require additional hypotheses.

## Deep physical interpretation

The conservation of [[DeltaU]] in the isolated system is a direct manifestation of temporal homogeneity: the laws of physics do not change over time, and this translates, via Noether's theorem, into energy conservation. The isolated system is the scenario where this conservation manifests itself without complications from exchange: internal energy is a constant of motion of the thermodynamic system.

The non-decrease of [[S_ais]] has an equally profound statistical interpretation: the microstates of the system are equiprobable, and the most probable macrostate is the one with maximum entropy (maximum number of microstates). The isolated system evolves statistically toward that macrostate because there are overwhelmingly more equilibrium microstates than non-equilibrium ones. Irreversibility is not an "extra" law, but a statistical consequence of the enormous difference in the number of microstates.

## Order of magnitude

For one kilogram of liquid water going from 20 °C to 21 °C through internal processes in an isolated system, the associated entropy increment is on the order of 14 J/K. By comparison, the entropy of mixing of two gases at room temperature can generate increments of several tens of J/K per mole. These values contrast with the precision required in industrial refrigeration processes, where unwanted entropy increments from mechanical irreversibilities can exceed 1000 J/K per cycle.

To detect whether a real system is truly isolated in the laboratory, the clearest signal is a change in internal temperature or pressure that cannot be explained by known internal processes: any non-zero [[DeltaU]] points to energy leakage through the boundary. A result of [[DeltaU]] equal to 0.01 J in a system with 1 kJ of internal energy represents a leakage of 0.001%, negligible in many contexts but unacceptable in high-precision calorimetry.

## Personalized resolution method

To analyze an isolated system, follow this protocol:

1. **Identify the boundary** and explicitly verify that it is adiabatic (no thermal conductivity), rigid (no external volume change), and impermeable (no matter flow).
2. **Set [[Q_ais]] and [[W_ais]] to zero** with justification from the boundary, not for convenience.
3. **Apply the first law**: since [[Q_ais]] and [[W_ais]] are zero, [[DeltaU]] is immediately zero. If the problem gives a different value, revisit the previous step.
4. **Analyze internal processes**: identify whether there is heat redistribution, substance mixing, or reactions, and determine how they affect [[S_ais]].
5. **Apply the second law**: calculate or estimate [[S_ais]] and verify that it is greater than or equal to zero. A positive value confirms a spontaneous process; zero indicates ideal reversibility.
6. **Describe the final equilibrium state**: identify which variables become equal (temperature, pressure, chemical potential) when the system reaches maximum [[S_ais]].

## Special cases and extended example

**Free expansion into vacuum (Joule experiment):** A perfect gas expands into a vacuum chamber inside an isolated container. The outer boundary is rigid and adiabatic, so [[DeltaU]] is zero. The temperature of the perfect gas does not change (its molecular interactions do not depend on volume). However, [[S_ais]] increases because the gas now occupies a larger number of accessible microstates. This process is irreversible: the gas never spontaneously compresses back to its half.

**Mixing of gases at the same temperature and pressure:** Two inert gases at equal temperature and pressure mix in an isolated system. [[DeltaU]] remains zero (no reaction, no temperature change). However, [[S_ais]] increases by the entropy of mixing, which is always positive for ideal mixtures. This increment is irreversible: spontaneous separation of the gases is statistically impossible.

**Isolated system with internal chemical reaction:** An exothermic reaction occurs inside an isolated system. The energy released by the reaction increases the internal temperature of the system. Total [[DeltaU]] remains zero (chemical energy converts to thermal energy without leaving the boundary). [[S_ais]] increases due to the higher temperature and the reaction entropy generation.

## Real student questions

**Can an isolated system have internal processes?**

Yes, and this is a crucial point. Isolation refers exclusively to exchanges with the surroundings through the boundary. Inside the system, mixing, reactions, temperature redistributions, and internal expansions can all occur. None of those processes violates isolation because they do not involve crossing the outer boundary.

**Why can [[S_ais]] not decrease if internal energy is conserved?**

Conservation of [[DeltaU]] is a quantitative constraint (how much total energy exists) but does not determine how it is distributed microscopically. The second law adds the qualitative constraint: the microscopic distribution of that fixed energy spontaneously tends toward the most probable configurations, which are those of maximum entropy. These are two distinct constraints operating on different aspects of the system.

**Is the universe an isolated system?**

In the standard cosmological model, the universe is the isolated system par excellence, as it has no defined "exterior" with which to exchange energy. This is why the second law is sometimes stated as "the entropy of the universe does not decrease." In advanced cosmology, this statement requires additional clarifications related to the expansion of the universe and gravity.

**How long can a real system be considered isolated?**

It depends on the quality of the boundary and the required precision. A domestic thermos can be considered isolated for hours for temperature measurements with 1% error. A research calorimeter can maintain isolation for days with 0.01% error. For most classroom calculations, a closed metallic container in air can be approximated as isolated during the first seconds of a fast process.

## Cross-cutting connections and study paths

The isolated system is directly connected to the other types of systems in this block. Understanding the isolated system is the mandatory conceptual prerequisite for understanding the [closed system](leaf:fisica-clasica/termodinamica/fundamentos/sistemas-termodinamicos/sistema-cerrado), which adds the possibility of exchanging heat and work, and the [open system](leaf:fisica-clasica/termodinamica/fundamentos/sistemas-termodinamicos/sistema-abierto), which adds matter flow.

Toward more advanced topics, the isolated system connects directly with **thermodynamic variables** (temperature, pressure, entropy as state variables) and with **thermodynamic processes** where the system evolves under different boundary constraints. The concept of **thermodynamic equilibrium** takes its most precise definition in the context of the isolated system: it is the state that maximizes [[S_ais]] given a fixed total [[U]].

## Final synthesis

The isolated system is the thermodynamic idealization that allows the two fundamental laws to be stated in their cleanest form. Conservation of [[DeltaU]] expresses the impossibility of creating or destroying energy; non-decrease of [[S_ais]] expresses the irreversible direction of spontaneous processes. These two constraints together completely define what can happen inside a system when no external influence intervenes.
`;export{e as default};
