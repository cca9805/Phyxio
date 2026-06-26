# Closed system

## Conceptual context

Thermodynamics classifies systems according to the exchanges they allow with their surroundings. The **closed system** occupies the intermediate position between the isolated system (no exchange at all) and the open system (with matter exchange): it allows energy to pass in the form of heat and work through its boundary, but prohibits matter flow. This configuration is the most common in laboratory and engineering thermodynamic analyses, accurately describing piston engines, closed combustion chambers, electric batteries, and sealed reaction vessels.

The closed system is the natural setting for the first law of thermodynamics in its most complete form, where the change in internal energy results from the interaction of two qualitatively distinct energy transfer processes: heat, driven by temperature gradients, and work, driven by pressure, tension, or other generalized force gradients.

## 🟢 Essential level

A closed system is a system that neither gains nor loses mass, but can gain or lose energy. Think of a sealed syringe: the plunger can move (work exchange) and the walls can transmit heat, but the gas inside the syringe does not escape. That is a closed system.

The most direct consequence is that the internal energy [[DeltaU]] of the system can change, and that change depends exactly on how much heat [[Q]] enters or leaves and how much work [[W]] enters or leaves. If more energy enters than leaves, [[DeltaU]] increases. If more leaves than enters, [[DeltaU]] decreases. The closed system boundary is permeable to energy but not to matter.

## 🔵 Formal level

The first law of thermodynamics establishes the exact relationship between [[DeltaU]], [[Q]], and [[W]] for any process in a closed system:

{{f:primer_principio_cerrado}}

This expression states that the change in [[DeltaU]] equals the sum of the heat [[Q]] received by the system and the work [[W]] received by the system. The sign convention is fundamental: [[Q]] positive when the system absorbs heat from the surroundings; [[W]] positive when the surroundings perform work on the system (IUPAC convention).

The second law imposes a constraint on the entropy change [[S]] of the closed system. The Clausius inequality states that:

{{f:segundo_principio_cerrado}}

Equality holds only for reversible processes; strict inequality indicates that the process is irreversible and entropy is generated inside the system. Unlike the isolated system, the entropy [[S]] of a closed system can decrease if the system releases enough heat to the surroundings at low temperature, without violating the second law, since the total entropy of the universe still does not decrease.

## 🔴 Structural level

The depth of the closed system lies in the distinction between state functions and process functions. [[DeltaU]] is a state function: its value depends only on the initial and final thermodynamic states, regardless of the path followed. In contrast, [[Q]] and [[W]] are process functions: their individual values depend on the thermodynamic path and can be completely different for two processes leading to the same final state.

This asymmetry has concrete experimental consequences: in an isochoric process (constant volume, no compression work), all the change in [[DeltaU]] comes from heat [[Q]]. In an adiabatic process (no heat), all the change comes from work [[W]]. In an isothermal process for an ideal gas, [[DeltaU]] is zero because the internal energy of an ideal gas depends only on temperature, so [[Q]] equals minus [[W]].

> [!NOTE]
> Thermodynamic cycles — such as the Carnot or Otto cycle — are sequences of processes in a closed system where the system returns to its initial state. Since [[DeltaU]] is a state function, its integral over a complete cycle is necessarily zero. The net work produced by the cycle equals the net heat absorbed.

The distinction between reversible and irreversible processes takes on its greatest relevance in the closed system. A process is reversible if it can be reversed without leaving any trace in the system or surroundings. Real processes are always irreversible because they involve finite temperature and pressure gradients, friction, and other dissipations. The Clausius inequality quantifies this irreversibility through internal entropy generation [[S]], which is always non-negative for the universe.

> [!WARNING]
> The sign convention for work is a frequent source of error. In physics and chemistry the IUPAC convention is commonly used (W positive when the system receives work), while in mechanical engineering the opposite convention is used (W positive when the system does work). Before applying the first law, explicitly declare which convention is being used.

## Deep physical interpretation

The conservation of [[DeltaU]] under the first law is a manifestation of Noether's theorem applied to temporal homogeneity: if physical laws do not change with time, energy is conserved. In the closed system, this conservation does not imply that [[DeltaU]] is constant, but that any change in [[DeltaU]] has an identifiable cause: [[Q]] or [[W]]. There can be no change in [[DeltaU]] without a corresponding transfer mechanism.

The Clausius inequality connects the first and second laws precisely: in a closed system, entropy [[S]] can decrease (the system can become "more ordered") if heat is extracted at a sufficiently high temperature. Refrigeration machines are exactly this: a closed system (the refrigerant) that releases more entropy to the hot surroundings than it receives from the cold surroundings, thanks to a work input that pays the thermodynamic cost of ordering.

## Order of magnitude

For a gas in a cylinder with a piston subjected to an adiabatic compression of 10:1, the temperature can increase by a factor of the order of 2 to 3 for diatomic gases, representing an increase in [[DeltaU]] of the order of 200 to 300% relative to the initial value. The compression work needed to compress 1 mol of ideal gas from 1 bar to 10 bar adiabatically is of the order of 2000 J.

For an isobaric heating process of 1 kg of water from 20 °C to 100 °C, [[Q]] is of the order of 335 000 J (using the specific heat of 4186 J/kg·K), while the expansion work at atmospheric pressure is of the order of 30 J, negligible compared to the heat. In this case, [[DeltaU]] is practically equal to [[Q]].

## Personalized resolution method

To analyze a closed system, follow this protocol:

1. **Declare the system and boundary**: identify what constitutes the closed system and confirm that the boundary is impermeable to matter. If there is mass flow, the model must be changed to an open system.
2. **Declare the sign convention**: IUPAC (Q positive = system receives heat; W positive = system receives work) or engineering (W positive = system does work). Be consistent throughout.
3. **Identify the type of process**: isochoric (zero W), isobaric, isothermal, adiabatic (zero Q), or general process. This simplifies the first law.
4. **Apply the first law**: calculate [[DeltaU]], [[Q]], or [[W]] from the available data.
5. **Apply the second law**: calculate [[S]] or verify that the Clausius inequality is satisfied. Distinguish between the entropy of the system and the entropy of the universe.
6. **Interpret the result**: relate the value of [[DeltaU]] to changes in temperature, phase, or chemical composition of the system.

## Special cases and extended example

**Adiabatic process:** [[Q]] is zero by definition. The first law reduces to [[DeltaU]] equals [[W]]. In an adiabatic compression, the work done on the gas increases its internal energy and, for an ideal gas, its temperature. This is the process that occurs in the cylinders of a combustion engine during the compression stroke.

**Isochoric process:** Pressure-volume work is zero. The first law reduces to [[DeltaU]] equals [[Q]]. All the exchanged heat directly modifies internal energy. This is the process that occurs in a bomb calorimeter.

**Complete cyclic process:** The system returns to its initial state, so [[DeltaU]] is exactly zero. Net work produced equals net heat absorbed. This is the basis of heat engines: a closed cycle in which the system exchanges heat with two sources at different temperatures and produces net work.

## Real student questions

**Why do Q and W depend on the path if [[DeltaU]] does not?**

Because [[DeltaU]] reflects the difference between state properties (which are unique for each system state), while [[Q]] and [[W]] describe how the transfer occurs, which can vary enormously. The final state can be reached by a path where almost everything is heat and almost nothing is work, or by a path where almost everything is work and almost nothing is heat. In both cases [[DeltaU]] is the same, but [[Q]] and [[W]] are very different.

**Can the entropy of a closed system decrease?**

Yes. A refrigerator is an everyday example: the refrigerant (a closed system that does not lose mass) has an entropy that decreases when it releases heat to the condenser. This decrease is possible because the compressor provides work, and that work pays the thermodynamic cost of the decrease in system entropy. The entropy of the universe (system plus surroundings) never decreases.

**What is the practical difference between a closed system and an isolated system?**

In an isolated system, [[DeltaU]] is always zero because neither [[Q]] nor [[W]] can be non-zero. In a closed system, [[DeltaU]] can change freely through [[Q]] and [[W]]. The practical difference is that the closed system can be used as an engine, refrigerator, or heater, while the isolated system cannot exchange useful energy with the surroundings.

## Cross-cutting connections and study paths

The closed system connects downward directly to the [isolated system](leaf:fisica-clasica/termodinamica/fundamentos/sistemas-termodinamicos/sistema-aislado), which is the special case where both [[Q]] and [[W]] are zero. Upward it connects to the [open system](leaf:fisica-clasica/termodinamica/fundamentos/sistemas-termodinamicos/sistema-abierto), which generalizes the balance by including enthalpy flow at mass crossings.

Toward more advanced topics, the closed system is the setting for **thermodynamic processes** (isochoric, isobaric, isothermal, adiabatic) and **thermodynamic cycles** (Carnot, Otto, Diesel, Rankine). The concept of **enthalpy** arises naturally in closed systems at constant pressure, where [[Q]] equals the change in enthalpy.

## Final synthesis

The closed system is the canonical setting of the first law: [[DeltaU]] equals [[Q]] plus [[W]]. Its matter-impermeable boundary ensures that every change in internal energy has an identifiable energetic cause. The second law adds the constraint that [[S]] can decrease in the system if heat is extracted, but the total entropy of the universe never decreases.
