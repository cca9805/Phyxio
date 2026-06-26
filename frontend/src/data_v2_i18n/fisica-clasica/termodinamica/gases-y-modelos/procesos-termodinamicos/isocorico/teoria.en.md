# Isochoric Process

## Conceptual context

The **isochoric process** is one of the four fundamental ideal thermodynamic processes, alongside the isobaric, isothermal and adiabatic processes. Its name derives from the Greek *isos* (equal) and *khoros* (space or volume), describing any gas transformation occurring at **strictly constant volume**.

The prototypical physical situation is a gas enclosed in a perfectly rigid container, such as a sealed pressure cooker or a steel cylinder. When that container is heated or cooled, the gas changes temperature and pressure but cannot expand or compress. This geometric constraint has an immediate thermodynamic consequence: **no mechanical work is performed**.

Understanding the isochoric process is not merely about solving secondary-school exercises. It is about grasping why steam boilers have safety valves, why combustion engines can rupture if coolant stops circulating, and why pressure cookers prepare food faster. Constant volume makes this process the purest case of the first law of thermodynamics: all exchanged heat goes directly to modifying the internal energy of the gas.

## 🟢 Essential level

Imagine a tightly sealed, perfectly rigid metal container full of gas. Place it over a flame and the gas cannot expand because the walls do not yield. Pressure rises, temperature rises, but volume does not change at all. That is the isochoric process: **heat enters or leaves with volume fixed**.

The most important consequence is that there is no **mechanical work** [[W]]. Without expansion or compression, the gas does not push or displace any boundary. All the heat the gas absorbs goes entirely into its **internal energy** [[DeltaU]]. The first law of thermodynamics simplifies to its maximum: heat absorbed and change in internal energy are exactly equal.

The central magnitude of the process is the **temperature change** [[DeltaT]]. Positive [[DeltaT]] means the gas has warmed up and absorbed heat; negative [[DeltaT]] means the gas has cooled down and released heat to the surroundings. To quantify how much heat is exchanged, one also needs to know the number of moles [[n]] and the **molar heat capacity at constant volume** [[Cv]], which characterises the calorific capacity of the gas according to its molecular structure.

## 🔵 Formal level

The mathematical description of the isochoric process starts from the first law of thermodynamics. The thermodynamic work in a constant-volume process is zero by definition, since expansion-compression work depends on volume change. This is expressed by the isochoric work formula:

{{f:trabajo_isocorico}}

With [[W]] zero, the first law reduces to the identity between absorbed heat and the change in internal energy. The **change in internal energy** of the gas is determined by:

{{f:energia_interna_isocorica}}

This formula shows that [[DeltaU]] depends linearly on three factors: the number of moles [[n]], the molar heat capacity at constant volume [[Cv]], and the temperature change [[DeltaT]]. The exchanged heat follows the same expression:

{{f:calor_isocorico}}

The equality between [[Q]] and [[DeltaU]] is the defining identity of the isochoric process. Note that [[Cv]] is the parameter that depends on the type of gas: for an ideal monatomic gas it is approximately 12.5 joules per mole and kelvin, for a diatomic gas about 20.8, and for triatomic about 24.9. These differences reflect the molecular degrees of freedom that participate in energy storage.

The temperature change is obtained as:

{{f:variacion_temperatura_isocorica}}

It is essential to always use temperatures in kelvins. A common error is applying Gay-Lussac's law (the ratio of [[T1]] to [[T2]] equals the ratio of initial to final pressures) with temperatures in degrees Celsius, which produces incorrect results because the direct proportionality only holds on the absolute scale.

## 🔴 Structural level

The isochoric process occupies a place of special clarity within thermodynamic space. In the pressure-volume (pV) diagram, it is represented as a **vertical line**: volume remains fixed while pressure varies freely. The geometric consequence is immediate: the area under the curve in the pV diagram is zero, and that is exactly [[W]]. This connection between geometry and physics is not trivial: in isobaric processes the area is a rectangle proportional to work; in isothermal processes the curve is a hyperbola with positive area. In the isochoric process, the «curve» degenerates into a line with no area.

In the pressure-temperature (pT) diagram, the isochoric process appears as a **straight line segment passing through the coordinate origin**. This expresses Gay-Lussac's law at constant volume: pressure and absolute temperature are proportional. The slope of that line depends on the number of moles and the enclosed volume. Different containers with the same gas but different volumes give lines of different slopes, all passing through the origin.

The internal energy of an ideal gas depends exclusively on temperature, not on volume or pressure. This property, demonstrated by Joule in his free expansion experiment, is why [[DeltaU]] can be computed with the expression above for any process of an ideal gas, not only isochoric ones. The advantage of the isochoric process is that, since [[W]] is zero, the absorbed heat is directly computable without knowing the path of the process.

**The heat capacity [[Cv]] connects the isochoric process with the molecular structure of the gas.** According to kinetic theory, for an ideal monatomic gas with three translational degrees of freedom, [[Cv]] equals exactly three-halves of R (the gas constant), approximately 12.5 J per mol and kelvin. For diatomic gases with five active degrees of freedom at normal temperatures, [[Cv]] equals five-halves of R, about 20.8 J per mol and kelvin. At very high temperatures vibrational modes activate and [[Cv]] increases, but over the temperature range of secondary school or first-year university courses, [[Cv]] can be treated as constant with good accuracy.

A structurally important aspect is the **difference between [[Cv]] and Cp**, the heat capacity at constant pressure. For any ideal gas, Cp is greater than [[Cv]] by the gas constant R (approximately 8.314 J per mol and kelvin). This difference has a direct physical interpretation: in the isobaric process the gas must absorb additional heat to perform expansion work against the external pressure, while in the isochoric process there is no expansion and that extra heat is not needed. The isochoric process is therefore more «efficient» in the sense that all heat goes into internal energy.

The validity regime of the simple isochoric model requires the container to be perfectly rigid, no mass loss (the gas cannot escape), the process to be quasi-static so intermediate states are in equilibrium, and the gas to behave as an ideal gas. Under real industrial conditions, containers have finite rigidity and may deform slightly at high pressure, introducing a small work term that the ideal model does not account for. The clearest failure signal of the model is that the product of pressure times volume changes during the process, indicating the container is not as rigid as assumed.

## Deep physical interpretation

The isochoric process reveals that **internal energy is not a property of visible motion but of invisible molecular motion**. When a gas in a rigid container absorbs heat, no piston moves, no balloon inflates, nothing changes at the macroscopic scale except temperature and pressure. Yet the internal energy of the gas has increased because each molecule moves faster. Pressure increases because those faster molecules strike the walls with greater force.

The sign of [[DeltaU]] and [[Q]] is the most important reading variable. Positive heat means the surroundings are hotter than the gas and transfer energy to it; negative heat means the gas is hotter than the surroundings and releases energy. This asymmetry is key for understanding safety phenomena: a sealed hot-gas container that cools undergoes an isochoric process with negative [[DeltaU]] and negative [[DeltaT]], so its pressure drops. Conversely, a container that heats up experiences a pressure increase that can exceed the rupture limit if there is no relief valve.

## Order of magnitude

For one mole of diatomic gas (for example, nitrogen with [[Cv]] of 20.8 J per mol and kelvin) with a temperature increase of 100 K, the change in internal energy is approximately 2080 J, about 2 kJ. For 10 moles the result is 20 kJ. In industrial applications with 100 moles and [[DeltaT]] of 500 K, [[DeltaU]] reaches approximately 1 MJ.

If the result of [[DeltaU]] is of the order of joules for several moles and hundreds of kelvin, there is an error; the unit of [[Cv]] was probably confused, or the specific heat per unit mass was used instead of the molar value. A negative [[DeltaU]] result when heat is supplied is an immediate sign of an error in the sign of [[DeltaT]].

## Personalized resolution method

To solve any isochoric problem systematically, follow this sequence:

1. **Confirm the isochoric condition**: verify that volume is constant. If so, [[W]] is immediately zero and the first law reduces to [[Q]] equal to [[DeltaU]].
2. **Convert temperatures to kelvins**: add 273.15 to each Celsius temperature. This step is mandatory for any ratio or absolute formula.
3. **Identify the type of gas and [[Cv]]**: monatomic (12.5 J per mol and kelvin), diatomic (20.8), or triatomic (24.9).
4. **Calculate [[DeltaT]]**: subtract the initial temperature from the final. The sign determines whether the process is heating or cooling.
5. **Calculate [[DeltaU]] and [[Q]]**: multiply [[n]] by [[Cv]] by [[DeltaT]].
6. **Verify coherence**: the ratio of final to initial pressure must equal the ratio of [[T2]] to [[T1]].

## Special cases and extended example

**Isochoric cooling**: If the rigid container is placed in a cold bath, [[DeltaT]] is negative, [[DeltaU]] is negative and [[p]] drops. In an autoclave that cools rapidly without being opened, [[p]] can fall below atmospheric.

**Otto engine**: The combustion phase of the idealised Otto cycle is modelled as an isochoric process: combustion sharply raises [[T]] and [[p]] while the piston barely moves.

## Real student questions

**Why use [[Cv]] instead of Cp?** Because [[Cv]] is the heat capacity at constant [[V]]. Cp includes expansion work that does not exist in the isochoric process.

**Why kelvins instead of Celsius in Gay-Lussac's law?** The proportionality between [[p]] and [[T]] only holds on the absolute scale. For [[DeltaT]] in the [[DeltaU]] formula, the difference is the same in both scales, but in ratios only kelvins are valid.

## Cross-cutting connections and study paths

The isochoric process connects with the **isobaric process** (constant [[p]]), where [[Cv]] is replaced by Cp and expansion work is non-zero. Recommended study path: first law → isochoric → isobaric → isothermal → Carnot cycle.

The isochoric process links to Gay-Lussac's law and kinetic theory through the microscopic meaning of [[Cv]] and molecular degrees of freedom.

## Final synthesis

The isochoric process concentrates the entire essence of the first law of thermodynamics in its cleanest form: with constant volume, mechanical work is zero and all absorbed heat converts entirely into the change in internal energy of the gas. Mastering this process means understanding what [[DeltaU]] is, how it relates to temperature and to the type of gas through [[Cv]], and why the Kelvin scale is indispensable for pressure-to-temperature proportionality calculations.
