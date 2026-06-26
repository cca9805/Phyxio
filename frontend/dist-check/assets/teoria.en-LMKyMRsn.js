const e=`# Isobaric Process

## Conceptual context

The **isobaric process** is one of the four canonical thermodynamic processes of the ideal gas, alongside the isothermal, isochoric, and adiabatic processes. Its defining characteristic is simple yet powerful: **pressure remains constant** throughout the transformation. This occurs, for example, when a gas is contained in a cylinder with a frictionless piston: any heat added or removed causes the gas to change volume without altering the pressure.

The importance of the isobaric process extends well beyond the laboratory. Internal combustion engines operate, in part, under approximately isobaric conditions during the expansion phase of burned gases. Refrigeration cycles, domestic heating systems, and industrial steam systems frequently operate at constant pressure. Understanding how energy is distributed in this process is essential for designing efficient heat engines and interpreting real pressure-volume diagrams.

Within the tree of [thermodynamic processes](leaf:fisica-clasica/termodinamica/gases-y-modelos/procesos-termodinamicos/isotermico), the isobaric process occupies a central position because it is the only one in which both temperature and volume change simultaneously while pressure remains fixed. This distinguishes it from the isothermal (constant T), the isochoric (constant V), and the adiabatic (zero heat exchange) processes.

## 🟢 Essential level

Imagine an inflated balloon left in the sun. As it absorbs heat, the interior gas expands, but the pressure inside does not change because the elastic material adjusts freely. That is an approximately isobaric process: **the gas receives heat, expands, and its temperature rises**, all at constant pressure.

The key intuition is that **heating a gas at constant pressure produces two simultaneous effects**: the gas expands and does work on its surroundings, and its temperature also rises because its internal energy increases. Unlike the adiabatic process, heat exchange does occur here; unlike the isothermal process, temperature does change. The isobaric process is, in that sense, the richest in energy exchanges.

> [!NOTE]
> The magnitude that remains fixed is [[p]]. In the pV diagram, the process is represented as a **horizontal line**, the simplest possible, at the height of the constant pressure.

## 🔵 Formal level

The equation governing work in an isobaric process is the most straightforward of all thermodynamic processes. Since [[p]] does not vary, the work integral reduces to:

{{f:trabajo_isobarico}}

The product of constant pressure and volume change [[DeltaV]] = [[V2]] - [[V1]] gives the exchanged work directly. If [[DeltaV]] > 0 (expansion), [[W]] > 0 and the gas delivers mechanical energy to surroundings. If [[DeltaV]] < 0 (compression), [[W]] < 0 and surroundings do work on the gas.

The relationship between temperature and volume at constant pressure is established by **Gay-Lussac's law**, a direct consequence of the ideal gas equation of state (product p·V proportional to T) with \\(p\\) constant:

{{f:ley_gay_lussac}}

This direct proportionality between volume and absolute temperature has a profound consequence: **doubling [[T1]] on the kelvin scale doubles [[V1]]**. Any temperature change produces a proportional volume change, and vice versa. This is why the isobaric process appears as a straight line in the \\(V\\)-\\(T\\) diagram.

The complete energy balance is established by the first law applied to the isobaric process:

{{f:primer_principio_isobarico}}

Unlike the adiabatic process (where [[Q]] = 0 and [[DeltaU]] = -[[W]]), here [[Q]] is not zero. Absorbed heat is distributed between internal energy increase and work done. For an ideal gas, [[DeltaU]] depends only on [[DeltaT]], regardless of pressure.

## 🔴 Structural level

The deep structure of the isobaric process lies in the **partitioning of heat** between mechanical work and internal energy. This partition is encoded in the molar heat capacity at constant pressure \\(C_p\\), which is always greater than \\(C_V\\) (heat capacity at constant volume). The difference \\(C_p - C_V\\) equals \\(R\\) (Mayer's relation) and expresses precisely that **at constant pressure, part of the heat is invested in the work of expansion**, something that does not occur in an isochoric process.

For a monatomic ideal gas, \\(C_V\\) takes the value \\(\\frac{3}{2}R\\) and \\(C_p\\) takes the value \\(\\frac{5}{2}R\\), so only 60% of absorbed heat goes to internal energy and the remaining 40% converts to mechanical work. For a diatomic gas, the partition shifts: \\(C_V\\) takes the value \\(\\frac{5}{2}R\\) and \\(C_p\\) takes the value \\(\\frac{7}{2}R\\), with a more work-favourable distribution.

> [!WARNING]
> **Classic confusion**: constant pressure does not mean constant temperature. Temperature rises because the internal energy of an ideal gas depends exclusively on \\(T\\), and if more heat is absorbed than work is done, temperature necessarily increases. Confusion with the isothermal process is the most frequent error.

The pV diagram of the isobaric process is a **horizontal line**: the area of the rectangle formed between [[V1]], [[V2]], and [[p]] is exactly [[W]]. This simple geometry has an important consequence: of all processes connecting the same initial state to a final state of equal volume, the isobaric process **produces the most work** (in expansion), because pressure remains high throughout, whereas in the adiabatic process pressure falls progressively.

The **validity limits** of the isobaric model are specific. The process ceases to be isobaric if pressure varies (polytropic process). The ideal gas model fails at high pressures (around 10 MPa or above) or near the liquefaction point. The quasi-static process assumption fails in very fast processes, where pressure is not uniform inside the container.

> [!TIP]
> A sign of model failure is observing that the pV diagram line is not perfectly horizontal, or that temperature and volume data do not follow the ratio [[V1]]/[[T1]] = [[V2]]/[[T2]]. Any appreciable deviation indicates pressure was not truly constant.

The connection with the **Brayton cycle** (gas turbine cycle) illustrates structural relevance: two of its four stages are isobaric — combustion (isobaric expansion at high pressure) and cooling (isobaric compression at low pressure). Calculating the work and heat of each isobaric stage is the first step to obtaining the efficiency of the complete cycle.

## Deep physical interpretation

The isobaric process reveals something fundamental about the nature of heat: **not all heat absorbed by a gas converts to internal energy**. In a rigid container (isochoric process), it does: there is no work and [[Q]] = [[DeltaU]]. But when the gas can expand at constant pressure, part of the heat "escapes" as mechanical work. This is precisely why \\(C_p\\) is greater than \\(C_V\\): at constant pressure, more heat is needed to raise the temperature by one degree, because part of that heat is spent pushing the piston.

The **physical causality** of the isobaric process is also instructive. It is not that the gas decides to expand because heat arrives; rather, the constant pressure imposed by surroundings (the free piston, the atmosphere) forces the volume to change in exact proportion to temperature. If heating were very fast, the interior pressure would fluctuate and the process would no longer be isobaric. The quasi-static condition guarantees the system is always in mechanical equilibrium with surroundings.


## Order of magnitude

Under standard laboratory conditions, with atmospheric pressure (approximately \\(10^5\\) Pa) and a volume change from 1 L to 2 L ([[DeltaV]] of about \\(10^{-3}\\) m³), the isobaric work is [[W]] ≈ 100 J. For comparison, the internal energy of one mole of diatomic ideal gas at 300 K is approximately 6250 J, so expansion work is only 1.6% of total internal energy.

In industrial applications, a gas turbine expanding at constant pressure from 500 kPa with a flow rate of 10 m³/s can perform work at the level of \\(10^6\\) W. This four-order-of-magnitude difference from the laboratory means that detecting an absurd result in a laboratory problem is straightforward: if the calculated work exceeds kilojoules for litre-scale containers, there is almost certainly a unit error (confusing Pa with kPa, or m³ with L).

> [!NOTE]
> Practical rule: one mole of ideal gas at 300 K expanding from 1 L to 2 L at constant pressure does [[W]] ≈ 100 J and absorbs [[Q]] ≈ 250 J (for diatomic gas), of which [[DeltaU]] ≈ 150 J goes to internal energy.

## Personalized resolution method

To solve isobaric process problems successfully, follow this sequence:

1. **Identify constant pressure** [[p]] and the initial and final states in terms of two of the three variables: [[V1]], [[V2]], [[T1]], [[T2]]. If data are missing, use Gay-Lussac's law to deduce the unknown variable.
2. **Calculate [[DeltaV]]** = [[V2]] - [[V1]] and determine whether the process is expansion ([[DeltaV]] > 0) or compression ([[DeltaV]] < 0).
3. **Calculate [[W]]** = [[p]] · [[DeltaV]]. This is the central step; do not use formulas from other processes.
4. **Calculate [[DeltaU]]** if heat [[Q]] is known via the first law, or using [[DeltaU]] = \\(n C_V \\Delta T\\) for ideal gas.
5. **Verify the balance** [[Q]] = [[DeltaU]] + [[W]] to detect calculation errors.
6. **Draw the pV diagram**: trace the horizontal line between ([[V1]], [[p]]) and ([[V2]], [[p]]) and verify that the rectangular area matches [[W]].

The critical distinction between **symbolic solution** and **numerical substitution** is especially useful here: working first with [[W]] = [[p]] · [[DeltaV]] in symbols allows sign inconsistencies to be detected before numbers are introduced.

## Special cases and extended example

**Case 1 — Isobaric process in a cycle**: the Brayton cycle has two isobaric stages; net work depends on the difference between their work values.

**Case 2 — Real gas with variable \\(C_p\\)**: if [[DeltaT]] is large, \\(\\gamma\\) may change in polyatomic gases. The model with constant \\(C_p\\) overestimates [[Q]] and [[DeltaU]].

**Case 3 — Phase change at constant pressure**: during boiling at 1 atm, volume changes but temperature does not. [[DeltaU]] = [[Q]] - [[W]] remains valid, but \\(n C_V \\Delta T\\) cannot be used.

## Real student questions

**Why is [[Q]] > [[W]] in isobaric expansion?** Because part of the heat increases internal energy: the fraction [[W]]/[[Q]] (equal to \\(R/C_p\\)) is always less than 1.

**Difference from the isothermal process in the pV diagram?** In the isothermal, the path is a hyperbola (\\(p \\cdot V\\) constant); in the isobaric it is a horizontal line. Isobaric work (rectangular area) always exceeds isothermal work between the same volumes.

**Can there be an isobaric process without temperature change?** Only with a phase change. In ideal gas without phase change, Gay-Lussac's law guarantees volume and temperature change in the same proportion.

## Cross-cutting connections and study paths

The isobaric process is closely linked to the [isochoric process](leaf:fisica-clasica/termodinamica/gases-y-modelos/procesos-termodinamicos/isocorico) (where volume is constant and there is no work) and the [isothermal process](leaf:fisica-clasica/termodinamica/gases-y-modelos/procesos-termodinamicos/isotermico) (where temperature is constant and work is maximum for ideal gas). Comparing these three processes on the same pV diagram is one of the most instructive representations in ideal gas thermodynamics.

The natural next step is the [Brayton cycle](leaf:fisica-clasica/termodinamica/ciclos/ciclo-brayton), where isobaric stages are fundamental to calculating efficiency.

Mayer's relation (\\(C_p - C_V\\) equalling \\(R\\)) connects the isobaric process with kinetic theory: the reason \\(C_p\\) exceeds \\(C_V\\) is exactly the extra work that must be done at constant pressure to expand the gas. This is not a mathematical accident, but a direct consequence of the ideal equation of state.

## Final synthesis

The isobaric process is the transformation in which **pressure remains constant** while the gas exchanges heat with surroundings, changes its volume, and modifies its temperature. Mechanical work is the direct product of that constant pressure and the volume change, and the first-law energy balance distributes absorbed heat between work and internal energy. Gay-Lussac's law guarantees direct proportionality between volume and absolute temperature, making the isobaric process the most transparent for visualising the connection between heat, work, and temperature in the ideal gas.
`;export{e as default};
