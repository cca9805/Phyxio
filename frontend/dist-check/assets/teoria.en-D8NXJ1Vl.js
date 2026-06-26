const e=`# Capacitors

## Conceptual context

A **capacitor** is a device that stores energy in the form of an electric field. Unlike a battery, which converts chemical energy into electrical energy, the capacitor simply separates opposite charges on two nearby conducting surfaces —the plates— and maintains that separation as long as the applied voltage lasts.

It appears in filter circuits, camera flashes, cardiac defibrillators, computer memories, and smartphone touch sensors. Understanding the capacitor means understanding how the electric field stores and releases energy in a controlled manner.

The capacitor bridges electrostatics and electric circuits: its behavior depends on the static electric field between its plates, yet in AC circuits it becomes a reactive element that blocks DC and passes high-frequency current. This leaf covers the electrostatic side: how capacitance is defined, how energy is stored, and what physical factors determine the capacitance of a parallel-plate capacitor.

## 🟢 Essential level

When a capacitor is connected to a battery, electric charges redistribute: one plate accumulates positive charge and the other accumulates negative charge of equal magnitude. Between the two plates an **electric field** is trapped — this is the physical manifestation of the stored energy.

What defines a capacitor as a better or worse charge storage device is its **capacitance** [[C]]. A high-capacitance capacitor accumulates a lot of charge for a small voltage; a low-capacitance one needs high voltages to accumulate the same charge. Capacitance does not depend on the applied voltage or the stored charge: it is a fixed property of the device, determined by its geometry and its dielectric material.

The **voltage** [[V]] between the plates is the direct cause of everything that happens in the capacitor. Higher voltage means more accumulated charge [[Q]] and more stored energy [[E_cap]]. The relationship is simple and elegant: charge grows proportionally with voltage, and energy grows quadratically.

## 🔵 Formal level

The **quantitative definition of capacitance** is obtained by measuring how much charge [[Q]] the capacitor accumulates per volt [[V]] of applied voltage:

{{f:capacidad_definicion}}

This equation has three useful readings: it calculates [[C]] by measuring Q and V, predicts [[Q]] knowing C and V, or finds [[V]] knowing C and Q. All three forms are exactly equivalent and derive from the same linear relationship.

The **stored energy** in the electric field is half the product of charge and voltage — the 1/2 factor arises because voltage grows from zero during charging, so the average work is half the final value:

{{f:energia_condensador}}

For parallel-plate capacitors, capacitance depends directly on geometry and dielectric material:

{{f:capacidad_plana}}

where [[epsilon]] is the **permittivity** of the material between the plates (in F/m), \\(A\\) is the area of each plate (in m²), and \\(d\\) is the separation between them (in m). This formula allows designing capacitors with the desired capacitance by choosing material, area, and separation.

## 🔴 Structural level

The relationship between [[Q]] and [[V]] is linear (with [[C]] as the slope), but the consequences of that linearity are profound. In the [[Q]] vs [[V]] graph, a capacitor with higher [[C]] produces a steeper line. The **stored energy** [[E_cap]] corresponds to the area of the triangle below the line, between zero voltage and the value of interest. This geometric interpretation visually explains why the 1/2 factor appears and why energy grows quadratically rather than linearly with voltage.

**Dielectric effects.** Permittivity [[epsilon]] = ε₀·εᵣ is the product of the permittivity of vacuum (ε₀ = 8.854×10⁻¹² F/m) by the relative dielectric constant εᵣ of the material. A dielectric with εᵣ = 10 multiplies capacitance by 10 for the same geometry. The physical mechanism is **dielectric polarization**: the electric field orients the material's dipoles, generating a polarization field that partially opposes the external field and allows storing more charge at the same voltage.

**Breakdown voltage.** Every dielectric has a maximum admissible **electric field** above which it abruptly conducts. This limits the maximum applicable voltage: breakdown voltage = breakdown field × separation d. Exceeding it even briefly destroys the capacitor irreversibly.

**Capacitor combinations.** Two capacitors in parallel share voltage and their capacitances add. In series they share charge and the equivalent capacitance is always less than either one — opposite to resistors, because capacitance measures ease of storing charge (analogous to conductance, not resistance).

**Frequency dependence.** The relations among [[C]], [[Q]], and [[V]] are valid in static or quasi-static regime. In AC, the capacitor has a **reactive impedance** inversely proportional to frequency and [[C]]. At very high frequencies, parasitic inductance dominates and the device no longer behaves as a pure capacitance.

## Deep physical interpretation

The energy stored in a capacitor **resides in the electric field**, not in the conductors. This is a profound result of electromagnetic field theory: energy is distributed in the space between the plates with a volumetric density proportional to [[epsilon]] and the square of the electric field. Integrating that density over the volume between the plates reproduces exactly the [[E_cap]] formula with the 1/2 factor.

This perspective is conceptually superior to thinking of "energy of the charges": the charges are only the source of the field, but the energy is in the field itself. The same idea generalizes to inductors (energy in the magnetic field) and to electromagnetic waves (energy transported by E and B fields in vacuum).

The fact that [[E_cap]] grows as V² has an important practical consequence: to double stored energy while keeping the same capacitance, voltage must be multiplied by √2 ≈ 1.41, not by 2. Conversely, a 30% reduction in voltage (from 100 V to 70 V) reduces stored energy by nearly 50%. This explains why cardiac defibrillators and cameras charge their capacitors to the highest voltage the component allows: maximizing voltage is the most efficient way to maximize stored energy with a fixed capacitance.

## Order of magnitude

The unit of capacitance, the **farad (F)**, is enormously large compared to capacitors found in ordinary electronic circuits. The practical reference scale is the microfarad (µF = 10⁻⁶ F), nanofarad (nF = 10⁻⁹ F), and picofarad (pF = 10⁻¹² F):

- **1 pF**: high-frequency trimmer capacitor, radio antennas.
- **100 nF**: decoupling capacitor in digital integrated circuits.
- **100 µF**: electrolytic filter capacitor in 5 V power supplies.
- **1 F**: energy storage supercapacitor for embedded systems.

To compare with everyday energies: a 1000 µF capacitor at 230 V stores approximately 26.5 J (applying the [[E_cap]] formula with the 1/2 factor), energy equivalent to lifting an apple (100 g) about 27 meters. A 1.5 V AA battery with 2500 mAh stores 13,500 J — 500 times more — illustrating the energy density difference between capacitors and batteries.

A physically absurd result would be obtaining a capacitance of 10 F for a capacitor with 1 cm² plates separated by 1 mm with air. Applying the [[C_plana]] formula with ε₀, 1 cm², and 1 mm gives approximately 0.9 pF. Any calculation giving farads for that geometry with air implies a unit error of 10¹³ or more.

## Personalized resolution method

To solve any capacitor problem:

1. **Identify known quantities**: determine which of [[C]], [[Q]], [[V]], and [[E_cap]] are given and which is sought.
2. **Select the appropriate relation**: if [[C]] is sought from geometry, use the parallel-plate formula with [[epsilon]], area, and separation. If energy or charge is sought, use the [[E_cap]] formula and the relation between [[Q]], [[C]], and [[V]].
3. **Check units**: always convert to farads (F), coulombs (C), volts (V), and joules (J) before computing. Prefix errors (µF vs F) are the most frequent cause of absurd results.
4. **Calculate and confront with expected order of magnitude**: if the result is in farads for an ordinary component, recheck unit conversion.
5. **Verify consistency**: confirm that the product [[C]]·[[V]] equals [[Q]], and that the [[E_cap]] formula is consistent whether using [[C]] and [[V]] or [[Q]] and [[V]].

In the **Q vs V graph**, the graphical method consists of identifying the slope as C, reading the charge on the Y axis for the voltage of interest, and calculating energy as the area of the triangle below the line.

## Special cases and extended example

**Capacitor with inserted dielectric.** If a dielectric with εᵣ = 5 is inserted between the plates of a capacitor previously charged to 100 V and then the source is disconnected, charge [[Q]] remains constant (it cannot escape). Then capacitance [[C_plana]] increases 5 times and [[V]] drops 5 times (from 100 V to 20 V), since [[Q]] is fixed and [[C]] quintupled. [[E_cap]] also drops 5 times: the energy difference was absorbed as the mechanical work of inserting the dielectric (the capacitor pulled the dielectric inward). If instead the source remained connected, [[V]] stays fixed, [[Q]] increases 5 times and energy increases 5 times — the source supplied additional energy.

**Dielectric breakdown.** Reducing d between plates increases [[C_plana]] (the formula shows [[C_plana]] grows as d decreases). But d also determines the maximum admissible voltage: reducing d from 10 µm to 1 µm increases [[C_plana]] ten times but reduces maximum voltage from 100 V to 10 V. The maximum storable [[E_cap]] grows with d, so there is a fundamental trade-off between high capacitance (small d) and high working voltage (large d).

## Real student questions

**Why does the capacitor energy formula carry a 1/2 factor?**
Because voltage is not constant during charging: it begins at zero and grows to the final value. The work at each charge increment is the instantaneous voltage times the elemental charge; integrating from zero to the final charge introduces the 1/2 factor.

**Does capacitance change if I change the voltage?**
No. [[C]] is a geometric and material property, independent of voltage. What changes is the stored [[Q]] and [[E_cap]]; [[C]] itself does not change (except in nonlinear dielectrics).

**Why do capacitors in series have lower capacitance than either one alone?**
In series they share the same [[Q]] but voltage is distributed between them. Equivalent capacitance measures charge per total volt; distributing voltage reduces the charge accumulated for a given total voltage below what either capacitor alone would store.

**Why does a capacitor block DC but pass AC?**
In DC, once charged to source voltage, current stops — charge cannot cross the dielectric. In AC, voltage changes sign constantly so the capacitor charges and discharges alternately; the external current appears to "pass through", though no charge actually crosses the dielectric.

## Cross-cutting connections and study paths

The capacitor is the culmination of electrostatics study in this block. It depends directly on the concepts of electric field and potential difference studied in the previous electrostatics leaves; without understanding them, the relation between [[C]], [[Q]], and [[V]] is only arithmetic without physical substance.

Looking forward, the capacitor is essential for understanding RC circuits (charge and discharge), signal filters in analog electronics, DC-DC converters, and oscillators. The leaf [Dielectrics](leaf:fisica-clasica/electromagnetismo/electrostatica/aplicaciones/dielectricos) deepens the effect of permittivity from the perspective of matter polarization, which is the natural continuation of the [[epsilon]] section of this leaf.

In materials physics, permittivity [[epsilon]] and its frequency dependence connect with optics (refractive index) and solid-state electronics (high-K dielectrics in modern field-effect transistors). The capacitor is literally the device that connects the classical electrostatics of the 19th century with the materials physics of the 21st century.

## Final synthesis

The capacitor stores energy in the electric field between its plates. Its **capacitance** [[C]] is the central property: fixed for a given geometry and material, it determines how much charge [[Q]] and energy [[E_cap]] the device stores for each applied voltage [[V]]. Energy grows with the square of voltage, making [[V]] the most critical design parameter. The **geometry** of the parallel-plate capacitor links [[C_plana]] with [[epsilon]], area, and separation.
`;export{e as default};
