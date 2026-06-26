## Conceptual context

The study of classical thermodynamics is founded on how macroscopic systems exchange **energy** with their surroundings. Within this framework, **internal energy** represents the fundamental thermodynamic variable describing the inherent energy content of a substance.

Unlike classical mechanics, where attention is centered on the motion of the system as a whole, here we delve into the collective behavior of its microscopic constituents. Understanding this concept is essential for analyzing engines, refrigerators, and any **energy conversion process** in nature.

---

## 🟢 Essential level

The **internal energy** is the sum of all energies at the microscopic level within a physical system. Imagine a container filled with gas: the molecules are not static, but constantly moving, colliding with one another, and vibrating. All this agitation constitutes the internal **molecular kinetic energy** of the gas.

In addition to moving, molecules interact through forces of attraction and repulsion. These interactions give rise to a **molecular potential energy**, which depends on the average distance between the atoms. Thus, the total stored energy contains contributions from both thermal motion and chemical bonds.

> [!NOTE]
> It is crucial to understand that internal energy is a **state function**. This means that its value depends solely on the current conditions of the system, such as its pressure and temperature. It does not matter how the system arrived at that state; the accumulated internal energy will be exactly the same.

For this reason, physics focuses on studying the **change in internal energy** when the system undergoes a transformation. If we heat the gas, the average speed of its particles increases and the stored energy rises. Conversely, if the gas performs physical work on the environment and expands without receiving heat, it consumes its own energy and its particles slow down.

---

## 🔵 Formal level

To quantify these microscopic observations into an operational macroscopic model, we define the internal energy [[energia_interna]] and its change [[variacion_de_energia_interna]]. In the **ideal gas** model, we assume that intermolecular forces are null, meaning the molecular potential energy disappears. In this simplified regime, the internal energy depends only on the **absolute temperature** of the gas.

For an ideal gas with a number of active molecular degrees of freedom represented by the variable `f`, the mathematical relationship is expressed as:

{{f:energia_interna_gas_ideal}}

In this equation, the quantity [[energia_interna]] represents the absolute internal energy, the quantity [[temperatura]] indicates the absolute temperature in kelvins, the symbol `n` represents the amount of substance in moles, and the symbol `R` denotes the universal gas constant. The value of `f` depends on molecular geometry: it is three for monatomic gases and five for diatomic gases at laboratory temperatures.

When the system undergoes a transition from an initial state to a final state, its temperature changes. The corresponding **internal energy change** [[variacion_de_energia_interna]] is calculated from:

{{f:variacion_energia_interna}}

Here, the quantity [[capacidad_calorifica_a_volumen_constante]] represents the molar heat capacity at constant volume of the ideal gas. This expression demonstrates that the internal energy change [[variacion_de_energia_interna]] is directly proportional to the temperature change, regardless of the path followed by the system during the transformation.

> [!WARNING]
> A classic error is believing that the previous equation only applies to constant volume (isochoric) processes. Given that the internal energy [[energia_interna]] is a state function, its change [[variacion_de_energia_interna]] depends exclusively on the initial and final temperatures. Therefore, this relationship is valid for **any type of process** that an ideal gas experiences (isobaric, isothermal, adiabatic, or general).

---

## 🔴 Structural level

At a structural level, the internal energy [[energia_interna]] acts as the backbone of the **first law of thermodynamics**. From a deep mathematical perspective, the differential of the internal energy represents an **exact differential**. This has fundamental analytical consequences in the calculation of cyclic processes.

In any closed process where the system returns to its initial state, the line integral of the differential of internal energy is strictly zero. Physically, this implies that in a **complete thermodynamic cycle**, the net change [[variacion_de_energia_interna]] is equal to zero. The constancy of this quantity contrasts with the exchanged heat or performed work, whose cycle integrals are not zero because they are path-dependent inexact differentials.

> [!TIP]
> To understand the internal structure of a real substance, we must abandon the simplified assumptions of the ideal model. In a **real gas**, molecules exert attractive forces on each other (van der Waals forces). This implies that the real internal energy [[energia_interna]] depends on both the temperature [[temperatura]] and the volume of the system.

The range of validity of the ideal gas equations is limited to **low pressures** and **moderate temperatures**. When the gas is highly compressed or approaches the liquefaction point, intermolecular distances decrease and the molecular potential energy term becomes dominant. In such regimes, the variation [[variacion_de_energia_interna]] can no longer be calculated solely through the temperature change, requiring complex equations of state that consider the density and molar volume of the substance.

---

## Deep physical interpretation

The physical interpretation of internal energy [[energia_interna]] lies in it being a macroscopic measure of **cohesion and molecular agitation**. When a system receives heat, this energy transfer increases the motion of its atoms. The quantity [[energia_interna]] increases, which macroscopically manifests as an increase in the absolute temperature [[temperatura]] of the ideal gas.

On the other hand, the sign of the variation [[variacion_de_energia_interna]] provides a direct reading of the **energy balance** of the process. A positive value of [[variacion_de_energia_interna]] means that the system has stored net energy, while a negative sign indicates that it has transferred part of its reserve to the surroundings. This allows structuring thermal analysis without needing to individually monitor the collisions of trillions of particles.

---

## Order of magnitude

To acquire physical judgment and detect absurd results when solving problems, it is useful to handle the typical scales of this quantity:

- A standard laboratory sample of helium (one mole) at room temperature has an internal energy [[energia_interna]] of approximately **3700 J**, which is the order of magnitude of the kinetic energy of a baseball thrown at high speed.
- One cubic meter of atmospheric air in everyday conditions stores close to **250 kJ** of molecular internal energy.
- In contrast, the internal energy accumulated in the Earth's atmosphere exceeds **10^21 J**, a colossal order of magnitude compared to any human industrial scale.

> [!WARNING]
> An absurd result is detected immediately if you obtain a negative absolute value of [[energia_interna]], as the absolute temperature in kelvins can never be lower than absolute zero. Likewise, values of [[variacion_de_energia_interna]] in scales of megajoules for a few grams of gas under normal conditions denote a typical error of unit conversion or scale in the input data.

---

## Personalized resolution method

To solve problems involving energy balances and changes in internal energy [[energia_interna]], follow this operational sequence:

1. **Identify the substance** and its physical model. Determine if the problem allows assuming monatomic or diatomic ideal gas behavior. This defines the degrees of freedom factor `f`.
2. **Extract the conditions** of the initial and final states. Ensure that all temperatures are expressed in the absolute scale of kelvins.
3. **Calculate the appropriate heat capacity**. Use the constant-volume molar heat capacity [[capacidad_calorifica_a_volumen_constante]] corresponding to the molecular nature of the gas.
4. **Evaluate the temperature change** by finding the difference between the final and initial values.
5. **Apply the core formula** to determine [[variacion_de_energia_interna]] from the mass or number of moles and the thermal increment.
6. **Validate the sign consistency**: if the system has heated up, [[variacion_de_energia_interna]] must be positive; if it has cooled down, it must be negative.

---

## Special cases and extended example

A relevant case study is the **isothermal process** in an ideal gas. Since the temperature remains constant throughout the transformation, the temperature change is zero. Therefore, the internal energy change [[variacion_de_energia_interna]] is exactly zero. In this scenario, the first law requires all the heat absorbed by the system to be converted entirely into mechanical expansion work on the environment.

On the other hand, in an **adiabatic expansion**, the system is thermally insulated from the outside, so it exchanges no heat. Upon expanding, the gas performs work by pushing the walls of the container at the expense of its own energy reserve. Consequently, the internal energy [[energia_interna]] decreases and the gas experiences drastic cooling, illustrating the direct conversion of internal energy into mechanical work.

---

## Real student questions

### Why is internal energy a state function if heat and work depend on the path of the process?

Because heat and work describe **transfer mechanisms** of energy in transit, not accumulated properties. The internal energy represents the total energy that the system possesses at a given instant. The net sum of heat and work transfers yields the change in this property, which depends only on the final and initial states of the system.

### How is it possible for the internal energy change to be zero in a complete cycle if the system exchanged heat and performed work?

In a complete cycle, the system returns exactly to the same physical starting state, recovering its initial pressure, volume, and temperature. Since internal energy is a property belonging exclusively to the physical state of the system, its final value coincides with the initial one. The differences between the absorbed heat and the performed work in the different stages compensate for each other to keep the **net balance at zero**.

### Why is the constant-volume heat capacity used to calculate the change in internal energy in processes where volume changes?

Because for an ideal gas, the internal energy depends only on the absolute temperature. The constant-volume heat capacity represents the proportionality factor between energy and temperature. Although the volume changes during a general process, the functional dependence of the internal energy on the temperature remains governed by this same molar coefficient.

### What happens to the internal energy of a substance when the absolute zero of temperature is reached?

At the theoretical temperature of absolute zero, the translational and rotational thermal motion of molecules ceases completely. Within the framework of classical physics, the internal energy of molecular agitation would be zero. However, quantum physics establishes the existence of a residual zero-point energy that cannot be removed from the system.

---

## Cross-cutting connections and study paths

The study of internal energy is closely linked to the concept of [Expansion work](leaf:fisica-clasica/termodinamica/trabajo-y-primera-ley/trabajo-termodinamico/trabajo-de-expansion). Both represent the terms of the first law of thermodynamics, allowing the calculation of heat flows in thermal engineering processes.

Subsequently, this concept facilitates the transition toward the study of complete thermodynamic cycles and the formulation of the second law. The understanding that energy cannot be destroyed but only transformed is the basis for analyzing the efficiency of real heat engines.

---

## Final synthesis

The internal energy constitutes the macroscopic measure of the kinetic and potential energy accumulated by the particles of a system. By behaving as a state function, its change depends exclusively on the initial and final thermal boundaries of the physical process, consolidating itself as the fundamental variable to perform energy balances in classical thermal physics.