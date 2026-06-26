const e=`# Specific Heat Capacity

## Conceptual context

Specific heat capacity is the quantity that allows us to compare how different materials respond to the same thermal energy input. In everyday life it is observed that the metal of a frying pan heats up much faster than the water it contains, even though the heat source is the same. Ocean water takes months to change temperature while adjacent ground varies by several degrees within a few hours. A hot stone in a clay oven maintains its temperature for hours after being extinguished. All these phenomena share the same cause: materials differ in their specific heat capacity [[c]].

This leaf sits within the heat and thermal effects block, after the concept of heat [[Q]] and before calorimetry, where specific heat capacity is applied to the problem of mixing substances at different temperatures. Understanding [[c]] as an intensive property of the material — independent of the amount — is the conceptual core that distinguishes this leaf from the heat [[Q]] leaf.

The fundamental distinction of this leaf from the heat leaf is: heat [[Q]] describes a process of energy transfer; specific heat capacity [[c]] describes a property of the material that determines how it responds to that process. One is a process variable; the other is a material constant.

## 🟢 Essential level

When water and metal are heated with the same source for the same time, the metal reaches much higher temperatures than the water. This does not happen because the metal "absorbs less heat": both receive the same energy. It happens because the metal needs less energy than water to raise its temperature by the same amount.

The **specific heat capacity** [[c]] of a material is the amount of energy needed to heat one kilogram of that material by exactly one kelvin. A high [[c]] means the material "resists" temperature change: it needs a lot of energy to heat up a little. A low [[c]] means the material heats easily with little energy.

Specific heat capacity is a property of the material, not of the system. One kilogram of water has the same [[c]] as an ocean. What changes with the amount of matter is the **total heat capacity** [[C_total]], which is simply [[c]] multiplied by the mass.

## 🔵 Formal level

Specific heat capacity is defined as the ratio of the heat transferred to the product of the mass and the temperature change:

{{f:definicion_c}}

This relation is both the definition of [[c]] and the operational formula for measuring it experimentally. If [[Q]], [[m]], and [[DeltaT]] are known, [[c]] is obtained directly.

The total heat capacity of the system is the product of mass and specific heat capacity:

{{f:capacidad_calorifica_total}}

Here [[C_total]] has units of J/K and describes the thermal inertia of the complete system. The difference between [[c]] and [[C_total]] is conceptually crucial: [[c]] is an **intensive** property (depends only on the material, not on the amount), while [[C_total]] is an **extensive** property (depends on the amount of matter in the system).

The sign of [[DeltaT]] determines the sign of [[Q]]: if temperature rises, [[Q]] is positive; if it falls, [[Q]] is negative. Specific heat capacity [[c]] is always positive.

Operationally, the same relation is read in two ways: if the material is being studied, [[c]] is solved from [[Q]], [[m]], and [[DeltaT]]; if a concrete system is being designed, [[C_total]] estimates how much energy the whole body needs per kelvin. This separation prevents mixing the material property with the thermal response of a real sample.

## 🔴 Structural level

Specific heat capacity has its origin in the microscopic structure of matter. At the molecular scale, when energy is transferred to a solid or liquid, that energy is distributed among the available modes of motion: translation, rotation, and vibration of the molecules. A material with many accessible modes distributes energy among them and its temperature rises little per joule absorbed, giving a high [[c]]. A material with few modes channels all the energy into temperature, giving a low [[c]].

Water has an exceptionally high [[c]] (4186 J/(kg·K)) due to its hydrogen bond network: these bonds store additional energy without directly contributing to temperature increase. The result is that water can absorb enormous amounts of [[Q]] with relatively modest temperature increments. This is why the oceans are the main regulator of Earth's climate.

The Dulong-Petit law (1819) established empirically that the molar specific heat capacities of solid metals are approximately equal and close to 25 J/(mol·K). This is equivalent to saying that each metal atom has approximately 3kT of average thermal energy per vibrational degree of freedom, in line with the classical equipartition theorem. For copper (molar mass 63.5 g/mol), the Dulong-Petit law predicts c ≈ 25/0.0635 ≈ 394 J/(kg·K), in good agreement with the experimental value of 386 J/(kg·K).

For solids at low temperature, specific heat capacity is not constant: it decreases following Debye's law and tends to zero as temperature approaches absolute zero. This T-dependence of [[c]] is a manifestation of the quantization of the vibrational modes of the crystal lattice and is one of the first successes of 20th-century quantum physics.

For ideal gases, specific heat capacity depends on whether the process is carried out at constant volume or constant pressure. This leaf works with constant-pressure processes for solids and liquids, where the difference between both is negligible.

## Deep physical interpretation

Specific heat capacity acts as the "thermal laziness" of the material: the larger [[c]], the more slowly it responds to heat. This thermal inertia has opposite consequences depending on the application. In refrigeration, a coolant with high [[c]] is desirable because it can absorb a lot of heat without heating up excessively. In electronics, a heat sink with low [[c]] is desirable because it heats up quickly, triggering dissipation before the component is damaged.

The intensive/extensive distinction between [[c]] and [[C_total]] has direct practical implications. In calorimetry, the energy conservation principle is written in terms of [[C_total]] of each participating body, not of [[c]], because each body has a different mass. Two bodies of the same material but different mass have the same [[c]] but different [[C_total]]: they respond differently to the same input of [[Q]].

> [!NOTE]
> Specific heat capacity [[c]] is a property of the material, independent of quantity. Total heat capacity [[C_total]] is a property of the system, which depends on how much matter it contains. They must never be used as synonyms.

## Order of magnitude and reference table

Values of [[c]] in J/(kg·K) for common materials at room temperature:
- Liquid water: 4186
- Ethyl alcohol: 2400
- Ice at 0 °C: 2090
- Water vapor at 100 °C: 2010
- Aluminium: 900
- Glass: 840
- Iron/Steel: 450
- Copper: 386
- Silver: 234
- Lead: 128
- Liquid mercury: 140

Liquid water is the historical reference: the calorie was originally defined as the energy needed to heat one gram of water by one degree Celsius, equivalent to 4.186 J.

## Personalized resolution method

1. **Identify what is asked**: specific heat capacity [[c]] of the material, total heat [[Q]], temperature change [[DeltaT]], mass [[m]], or total heat capacity [[C_total]]?
2. **Select the appropriate formula**: for processes without phase change, use the definition of [[c]]. To calculate [[C_total]], use the product [[m]] · [[c]].
3. **Check units before substituting**: [[c]] in J/(kg·K), [[m]] in kg, [[DeltaT]] in K (or °C, the increment is identical), [[Q]] in J.
4. **Compute [[DeltaT]] correctly**: T_final − T_initial. The sign must match that of [[Q]].
5. **Verify the result against the table**: the experimentally calculated [[c]] should fall within the range of known materials. A result outside the range usually indicates a unit error.

## Special cases and extended example

**Mixture of materials**: when a system is composed of several materials (for example, a metal container holding water), the [[C_total]] of the assembly is the sum of the \`m_i · c_i\` products of each component. A single [[c]] cannot be used for the entire heterogeneous system.

**Temperature dependence**: for materials such as water, [[c]] varies slightly with temperature. In the range 0–100 °C, the variation is below 1 %, so the constant value of 4186 J/(kg·K) is accepted. For metals at high temperature or for gases, the dependence can be significant and must be obtained from tables.

**Molar specific heat capacity**: in chemistry and advanced thermodynamics, the molar specific heat capacity \`c_m\` in J/(mol·K) is frequently used, which is the heat required per mole of substance. To convert: \`c_m\` equals [[c]] multiplied by the molar mass of the material in kg/mol.

> [!WARNING]
> The most common error is confusing [[c]] (J/(kg·K)) with [[C_total]] (J/K). If the problem asks "how much energy does the system need?", the answer uses [[C_total]]; if it asks "what property does the material have?", the answer uses [[c]].

## Real student questions

**Why does beach sand heat up so much more than the sea water under the same sun?**
Sand has a [[c]] of about 840 J/(kg·K), roughly five times lower than water. With the same solar energy flux, each kilogram of sand rises in temperature five times faster than each kilogram of water. That is why the beach burns bare feet at midday while the water remains cool.

**Why is the specific heat capacity of ice different from that of liquid water?**
Ice (2090 J/(kg·K)) and liquid water (4186 J/(kg·K)) are the same chemical compound but in different states of aggregation, with radically different molecular structures. The hydrogen bond network of liquid water stores more energy per mode of motion than the crystalline structure of ice, raising its [[c]]. Specific heat capacity depends on the state of aggregation: the same material can have several different [[c]] values depending on whether it is solid, liquid, or gaseous.

**How is specific heat capacity measured in the laboratory?**
The direct method is the mixing calorimeter: a sample of the material is heated to a known temperature, then placed in water of known mass and temperature, and the equilibrium temperature is measured. From the heat released by the sample to the water (calculated using the known [[c]] of water) the [[c]] of the sample is determined. The precision of the method depends on the thermal insulation of the calorimeter and the precision of the temperature measurements.

**Can specific heat capacity change with pressure?**
For solids and liquids, the dependence of [[c]] on pressure is very small and is ignored under standard conditions. For gases, the difference between the specific heat capacity at constant pressure and at constant volume is significant and is determined by Mayer's relation. Engineering thermodynamics typically works with specific heat capacity at constant pressure for liquids and solids.

## Cross-cutting connections and study paths

Specific heat capacity is the immediate prerequisite of [calorimetry](leaf:fisica-clasica/termodinamica/calor-y-efectos-termicos/calorimetria), where the energy conservation principle is applied to mixtures of bodies. It is also one of the two key properties in [phase change](leaf:fisica-clasica/termodinamica/calor-y-efectos-termicos/cambios-de-estado) problems, where [[c]] describes the temperature-varying segments and latent heat describes the phase transitions.

[Heat capacity](leaf:fisica-clasica/termodinamica/calor-y-efectos-termicos/capacidad-calorifica) is the complementary extensive quantity: [[C_total]] = [[m]] · [[c]].

At advanced level, the temperature dependence of [[c]] connects with [statistical physics](leaf:fisica-moderna/fisica-estadistica/distribucion-de-boltzmann) through the equipartition theorem and the partition function.

## Final synthesis

Specific heat capacity [[c]] is the intensive property of a material that quantifies its resistance to temperature change: how many joules must each kilogram absorb to rise one kelvin. It is determined experimentally as the ratio of heat transferred to the product of mass and temperature change. Total heat capacity [[C_total]] is its extensive counterpart, proportional to the mass of the system. The distinction between both — intensive vs extensive — is the conceptual core of this leaf and the prerequisite for calorimetry.
`;export{e as default};
