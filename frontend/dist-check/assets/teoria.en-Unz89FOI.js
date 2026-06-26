const e=`# Heat

## Conceptual context

Heat is one of the most misunderstood concepts in physics. In everyday language people talk about "stored heat" in a body, about "having heat" or "losing heat", but these expressions are physically incorrect. In thermodynamics, **heat is not a property of the system**: it is energy in transit, a transfer process that occurs only when a temperature difference exists between two systems.

This leaf sits within the heat and thermal effects block, as a prerequisite for understanding calorimetry and the first law of thermodynamics. Understanding heat as a process rather than a substance is the conceptual prerequisite for all subsequent thermodynamics.

The concept of heat is intimately linked to that of temperature, but they are radically different quantities: temperature describes the state of a system, while heat describes an exchange between systems. Distinguishing these two concepts with precision is the first conceptual leap in thermodynamics.

## 🟢 Essential level

When you touch a hot object, you feel that "heat passes" into your hand. This accurately describes what happens: energy flows from the hotter body to the cooler one. That energy flow is what we call **heat** [[Q]].

Heat does not exist as a property of a body; it only exists during the transfer process. Once the two bodies reach equilibrium, heat has ceased. What remains is a new equilibrium temperature, not "accumulated heat".

The amount of heat absorbed by a body depends on three factors: how much matter is present ([[m]]), what material it is made of ([[c_esp]]), and how much its temperature changes ([[DeltaT]]). Different materials respond very differently to the same energy input: water needs far more heat than iron to warm by the same amount.

## 🔵 Formal level

Heat transfer without phase change — called **sensible heat** — follows the relation:

{{f:calor_sensible}}

Here [[Q]] is the energy transferred in joules, [[m]] the mass in kilograms, [[c_esp]] the specific heat capacity of the material in J/(kg·K), and [[DeltaT]] the difference between final and initial temperature in kelvin or degrees Celsius.

The sign of [[Q]] is crucial: if [[DeltaT]] is positive (the system heats up), [[Q]] is positive and the system absorbs heat. If [[DeltaT]] is negative (the system cools down), [[Q]] is negative and the system releases heat to the surroundings.

When the process involves a **phase change** — melting, vaporization, solidification, or condensation — temperature remains constant throughout the entire transition even though energy is being transferred. In that case, the exchanged heat is **latent heat**:

{{f:calor_latente}}

where [[L]] is the specific latent heat of the material (in J/kg). The sign of the complete process depends on the direction of the transition: melting and vaporization are endothermic ([[Q]] > 0), while solidification and condensation are exothermic ([[Q]] < 0).

## 🔴 Structural level

The distinction between sensible and latent heat reveals the deep structure of how energy is distributed in matter. In sensible heat, energy goes into increasing the thermal agitation of molecules (average kinetic energy), which manifests as a temperature rise. In latent heat, energy is invested in breaking or forming intermolecular bonds — intermolecular potential energy — without changing the average kinetic energy, which is why temperature does not change.

This distinction has highly relevant practical consequences. The latent heat of vaporization of water at 100 °C is approximately 2 260 000 J/kg, compared to 334 000 J/kg for the heat of fusion. To raise water from 0 °C to 100 °C requires about 419 000 J/kg; however, to complete vaporization at 100 °C requires more than five times that amount. This explains why steam burns are far more severe than boiling water burns at the same temperature.

The specific heat capacity of liquid water — 4186 J/(kg·K) — is exceptionally high compared to most solid and liquid materials. This anomaly originates in water's hydrogen bond network, which stores energy without significantly raising temperature. This property makes water an irreplaceable thermal regulator both in living organisms and in planetary climate systems.

From a formal standpoint, heat is not a state function: its value depends on the thermodynamic path taken, not only on the initial and final states. Two processes that take the same system from the same initial to the same final state can exchange different amounts of heat. This path dependence is what distinguishes heat from work and from internal energy in the first law of thermodynamics.

The SI unit of energy is the joule (J). Historically the **calorie** (cal) was used, defined as the energy needed to raise 1 g of water from 14.5 °C to 15.5 °C, equivalent to 4.186 J. The kilocalorie (kcal), commonly used in nutrition, equals 4186 J.

## Deep physical interpretation

The sign of [[Q]] is the compass of the thermal process. A positive [[Q]] indicates that the surroundings supply energy to the system; the system is the "receiver" of the process. A negative [[Q]] indicates that the system delivers energy to the surroundings; the system is the "donor".

In a process with a phase change, latent heat acts as an energy "lock": the system absorbs or delivers energy without any observable change in temperature. To an observer who only measures temperature, the transition looks like a pause in which "nothing happens", when in reality the molecular structure is being reorganized.

> [!NOTE]
> Heat [[Q]] and temperature are radically different quantities. Temperature is a state; heat is a process. A body may be at high temperature yet release little energy (if its specific heat or mass are small), or be at moderate temperature yet release large amounts of energy (if [[m]] or [[c_esp]] are large).

## Order of magnitude

For water: heating 1 kg from 20 °C to 100 °C requires 4186 × 1 × 80 ≈ 335 000 J, roughly under 0.1 kWh. To completely vaporize that same kilogram at 100 °C requires an additional 2 260 000 J, equivalent to about 0.63 kWh.

For metals: copper has [[c_esp]] ≈ 386 J/(kg·K) and aluminium ≈ 900 J/(kg·K). For the same temperature rise and the same mass, aluminium requires more than twice the energy of copper.

A result of [[Q]] on the order of 10⁶ J or above for masses of a few kilograms with normal temperature changes is a sign of unit error. Likewise, a [[Q]] on the order of 10⁻² J for kilogram-scale masses suggests that specific heat was entered in cal/(g·°C) without conversion.

## Personalized resolution method

1. **Identify the type of process**: is there a phase change? If not, use sensible heat. If so, split the process into segments and apply latent heat at the transition.
2. **Check units before calculating**: mass in kg, specific heat in J/(kg·K), temperatures in K or °C (the increment is identical).
3. **Compute [[DeltaT]] correctly**: always as T_final − T_initial. The resulting sign determines the sign of [[Q]].
4. **Apply the corresponding formula** and verify that the sign of [[Q]] is consistent with the physical intuition of the process.
5. **Check the order of magnitude**: compare with typical values from specific heat and latent heat tables.

## Special cases and extended example

**Mixed process (sensible + latent)**: To completely melt 500 g of ice at −10 °C until obtaining water at 20 °C, the process has three segments: (1) heat the ice from −10 °C to 0 °C using the specific heat of ice (2090 J/(kg·K)), (2) melt the ice at 0 °C using the latent heat of fusion (334 000 J/kg), and (3) heat the water from 0 °C to 20 °C using the specific heat of water (4186 J/(kg·K)). The three heat values must be added to obtain the total [[Q]]. The melting segment represents more than 90 % of the total in this example.

**Adiabatic process**: If [[Q]] is zero, there is no heat exchange. This can occur because the process is very fast (no time to transfer heat) or because the system is perfectly insulated. In an adiabatic process, temperature can still change, but that temperature change is due to work done on the system, not to heat transfer.

> [!WARNING]
> A very common error is computing [[DeltaT]] as T_initial − T_final. This error inverts the sign of [[Q]] and leads to physically inconsistent results: a system that is cooling would appear to absorb heat.

## Real student questions

**Why does water take so long to boil but cools quickly in a glass?**
Heating to 100 °C involves sensible heat with a high [[c_esp]], requiring large amounts of energy. Once the water is at room temperature in a glass, heat release to the surroundings is a continuous but slower process than the concentrated heat source of the stove. The asymmetry between heating (concentrated source) and cooling (dissipation at ambient temperature) explains the perceived difference in rates.

**If temperature does not change during melting, does that mean no energy is being transferred?**
No. During melting exactly [[Q]] = [[m]] · [[L]] of energy is transferred, but that energy is invested in breaking the crystalline structure of the solid, not in increasing thermal agitation. That is why temperature stays constant: average agitation does not increase, but intermolecular potential energy does.

**Does the specific heat capacity of water change with temperature?**
Yes, though modestly in the usual range. Between 0 °C and 100 °C the [[c_esp]] of water varies by less than 1 %, so it can be treated as constant for standard calculations. At extreme temperatures or in other phases (ice or steam), specific heat changes significantly.

**Why does heat depend on the path and not just on the initial and final states?**
Because heat is not a state function. The system can reach from A to B by many different thermodynamic paths (at constant pressure, at constant volume, combinations), and on each path the exchanged heat is different. Only internal energy and entropy are state functions; heat and work are path functions.

## Cross-cutting connections and study paths

Heat is the input quantity of [calorimetry](leaf:fisica-clasica/termodinamica/calor-y-efectos-termicos/calorimetria), where energy conservation is applied to mixtures of systems. It is also one of the two terms of the [first law of thermodynamics](leaf:fisica-clasica/termodinamica/trabajo-y-primera-ley/primera-ley-de-la-termodinamica), alongside work.

[Temperature](leaf:fisica-clasica/termodinamica/calor-y-efectos-termicos/temperatura) is the conceptual prerequisite: without understanding what temperature measures, the sign of [[DeltaT]] and the direction of [[Q]] flow cannot be correctly interpreted.

[Heat transfer](leaf:fisica-clasica/termodinamica/transferencia-de-calor/conduccion) studies the mechanisms by which [[Q]] flows (conduction, convection, radiation) — the "how" of the process whose "how much" this leaf defines.

## Final synthesis

Heat [[Q]] is energy in transit driven by a temperature difference. Its magnitude in processes without phase change depends linearly on mass, material specific heat, and temperature change; during a phase change, it depends on mass and latent heat. The sign of [[Q]] is the most relevant information about the process: it determines whether the system gains or loses energy and is in all cases consistent with the sign of [[DeltaT]].
`;export{e as default};
