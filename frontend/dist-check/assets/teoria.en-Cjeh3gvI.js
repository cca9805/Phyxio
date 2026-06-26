const e=`# Dielectrics

## Conceptual context

A vacuum capacitor stores charge between its plates. When the gap is filled with certain materials — glass, plastic, ceramic, water — something remarkable happens: the capacitance increases without any change in geometry. These materials are called **dielectrics** and their effect is one of the most direct consequences of the internal structure of matter.

The study of dielectrics connects macroscopic electrostatics with molecular physics. The guiding question of this leaf is not "how much charge is there" but "how does the material respond to the field". The answer explains high-capacitance capacitors, high-voltage insulators, and the behaviour of biological membranes.

> [!NOTE]
> Dielectrics are not conductors. They do not allow free charge to flow. Their effect on the electric field arises through **polarisation**: a microscopic redistribution of the bound charges already present within the material.

## 🟢 Essential level

When a dielectric material is placed between the plates of a capacitor, the atoms and molecules of the material respond to the external electric field. The negative and positive charges of each molecule shift slightly in opposite directions, creating small microscopic **electric dipoles**.

These dipoles align collectively along the field direction and generate their own field opposing the external one. The result is a **reduced net field** inside the material. Because the field is smaller at the same potential difference, the capacitor can store more charge: the capacitance [[C_d]] is larger than in vacuum by a factor equal to [[epsilon_r]], the dielectric constant of the material.

> [!TIP]
> The dielectric constant [[epsilon_r]] is always greater than or equal to one. For vacuum it is exactly one; for liquid water it is around eighty; for barium titanate it can exceed ten thousand.

## 🔵 Formal level

The fundamental relation of this leaf states that the capacitance with dielectric is the vacuum capacitance multiplied by the relative dielectric constant [[epsilon_r]]:

{{f:capacitancia_dielectrico}}

Here [[C_0]] is the geometric capacitance of the capacitor in the absence of material, determined solely by the plate area and their separation. The factor [[epsilon_r]] is dimensionless and characterises the material. For a parallel-plate capacitor, [[C_0]] is computed as the product of the permittivity of vacuum times the area divided by the separation.

The electric field inside the dielectric is reduced according to the second relation of this leaf:

{{f:campo_en_dielectrico}}

where \\(E_{\\text{ext}}\\) is the field that would exist in vacuum under the same charge conditions. The reduction is a direct consequence of **electric polarisation** [[P_pol]]: the alignment of dipoles generates surface charges of opposite sign to the free charges on the plates, opposing the external field. The volumetric polarisation relates to [[E_d]] and [[epsilon_r]] as:

{{f:polarizacion_dielectrico}}

where the factor [[epsilon_r]] minus one is the electric susceptibility of the material.

> [!WARNING]
> [[epsilon_r]] is dimensionless. The absolute permittivity of the material is the product of [[epsilon_r]] and the permittivity of vacuum and has units of F/m. Mixing the two is the most frequent error in this leaf.

## 🔴 Structural level

**Microscopic mechanism of polarisation.** Polarisation [[P_pol]] can arise through three distinct mechanisms that coexist with different weights depending on the material and the signal frequency:

- **Electronic polarisation**: the electron cloud shifts relative to the nucleus under the external field. Present in all materials and active up to optical frequencies.
- **Ionic polarisation**: in ionic crystals such as NaCl, the positive and negative ions shift in opposite directions. Active up to the infrared.
- **Orientational polarisation**: in polar molecules (such as water), the field aligns permanent dipoles. Only effective at low frequencies; disappears at radio or microwave frequencies.

The total contribution to [[epsilon_r]] is the sum of the susceptibilities of each mechanism. This is why [[epsilon_r]] of liquid water (≈ 80) is much larger than that of ice (≈ 3): in ice the molecules are fixed and cannot orient themselves.

**Dielectric breakdown field.** The field [[E_d]] inside the material cannot grow indefinitely. When it exceeds the **breakdown field** of the material, the field strips electrons from atoms and the dielectric ionises abruptly: it conducts current and is destroyed. This limit is measured in V/m and ranges from about 3 MV/m for air to over 200 MV/m for some polymers. Real capacitor design always operates well below this limit, with a typical safety margin of three to five times.

**Dielectric losses and frequency.** Under alternating current [[epsilon_r]] is not real but complex: its imaginary part quantifies the energy losses associated with the phase lag between the field and the polarisation. A material with high losses dissipates energy as heat. High-frequency capacitors use materials with minimal imaginary part (dissipation factors below 0.001). The dependence of [[epsilon_r]] on frequency — **dielectric dispersion** — limits the use of each material to certain spectral ranges.

**Validity condition of the linear model.** The model [[C_d]] = [[epsilon_r]] · [[C_0]] assumes that [[epsilon_r]] is constant: the material responds proportionally to the applied field. This linearity holds for most materials at moderate fields, but **ferroelectrics** exhibit hysteresis (polarisation depends on the history of the field) and **paraelastics** show saturation at high fields. Outside the linear regime, the relation between capacitance and [[epsilon_r]] is no longer proportional.

## Deep physical interpretation

The dielectric constant [[epsilon_r]] is not a mysterious property of the material: it is the measurable consequence of the internal dipoles producing a field that opposes the external one. The more easily the dipoles polarise (higher susceptibility), the larger the opposing field and the larger [[epsilon_r]]. The field [[E_d]] experienced by the material is the outcome of the competition between the external field (trying to displace charges) and the polarisation field (resisting that displacement).

The reduction of [[E_d]] does not mean the dielectric absorbs energy: the energy stored in the field is greater with the dielectric than without it, precisely because [[C_d]] is larger. The additional energy comes from the source that maintained the voltage constant while the dielectric was inserted. If instead the capacitor was charged and disconnected before inserting the dielectric, the energy decreases when it is introduced (the charge does not change, but [[C_d]] increases and the voltage drops).

> [!NOTE]
> This asymmetry — energy that increases or decreases depending on the conditions of the process — is a common exam trap. The key variable determining the outcome is whether voltage or charge remains constant when the dielectric is inserted.

## Order of magnitude

For a parallel-plate capacitor with a plate area of one square centimetre and a separation of one millimetre with air between the plates, [[C_0]] is of the order of tenths of a picofarad. Filling it with ordinary glass ([[epsilon_r]] ≈ 7) raises [[C_d]] to a few picofarads. With barium titanate ([[epsilon_r]] ≈ 10 000), the same capacitor would reach capacitances of the order of a nanofarad.

These scales allow absurd results to be detected: a capacitance of microfarads for a square-centimetre vacuum capacitor is impossible; millimetres of barium titanate can explain nanofarads with a reasonable geometry. Any result in the farad range for laboratory-scale geometries indicates a unit error or incorrect input data.

## Personalized resolution method

When faced with a dielectrics problem, the recommended procedure is:

1. **Identify [[C_0]]**: if not given directly, compute it from the capacitor geometry (area and separation for the planar case).
2. **Read [[epsilon_r]]** from the given material. Verify that it is dimensionless and greater than or equal to one.
3. **Calculate [[C_d]]** by multiplying [[C_0]] by [[epsilon_r]]. If the problem asks for [[epsilon_r]] from capacitance measurements, divide [[C_d]] by [[C_0]].
4. **Calculate [[E_d]]** if the interior field is needed: divide the external field by [[epsilon_r]].
5. **Compare [[E_d]] with the breakdown field** of the material to verify that the solution is physically viable.

The most frequent error is omitting step 5: a correct [[epsilon_r]] result that implies an interior field larger than the dielectric strength of the material has no physical meaning.

## Special cases and extended example

**Partial dielectric.** If the dielectric does not completely fill the space between the plates — for example, a sheet occupying half the gap — the system behaves as two capacitors in series (one with dielectric and one in vacuum). The equivalent capacitance is smaller than [[C_d]] but larger than [[C_0]]. The calculation requires treating each region separately and combining the results.

**Parallel dielectric mix.** If the capacitor is divided into two lateral regions with different materials (different [[epsilon_r]] in each half), the system is equivalent to two capacitors in parallel. The total capacitance is the sum of the capacitances of each region, and the effective [[epsilon_r]] is the area-weighted average.

**Water as a high-[[epsilon_r]] dielectric.** Liquid water has [[epsilon_r]] ≈ 80 at room temperature. This property makes it extraordinarily effective at shielding electric fields, which explains why ionic reactions in aqueous solution occur readily: the interaction energy between ions is reduced to about one-eightieth of its vacuum value. However, water's dielectric losses at microwave frequencies are high, which explains the operation of domestic microwave ovens.

## Real student questions

**Why does the dielectric not conduct if electrons move?** In dielectrics, charges shift only a few picometres around their equilibrium positions. There is no net transport of free charge from one plate to the other: the electrons remain bound to their atoms. The difference from a conductor is that in a conductor electrons move macroscopically without obstruction, whereas in a dielectric the microscopic displacement is reversible and local.

**Does inserting the dielectric always increase the stored energy?** No. It depends on how it is done. If the voltage between plates is kept constant (capacitor connected to a battery), the charge increases and the stored energy rises. If the capacitor was charged and isolated (constant charge), the voltage decreases when the dielectric enters and the energy decreases as well. The difference between the two cases is the energy exchanged with the external source.

**What happens if the breakdown field is exceeded?** The field ionises the atoms of the dielectric, creating a conducting channel that short-circuits the capacitor. The material is permanently destroyed at that point. This phenomenon is called **dielectric breakdown** and is the main cause of failure in high-voltage capacitors.

**Can [[epsilon_r]] be less than one?** In active media with optical gain it can occur in certain frequency ranges, but for any passive material in the static regime [[epsilon_r]] is always greater than or equal to one. A value below one in a static calculation indicates an error in the data or in the units.

## Cross-cutting connections and study paths

Dielectrics are the natural extension of the [Capacitors](leaf:fisica-clasica/electromagnetismo/electrostatica/aplicaciones/condensadores) leaf: the vacuum capacitance [[C_0]] calculated there is the starting point for the [[epsilon_r]] factor. The concept of the reduced electric field inside the material connects with the [electrostatic field](leaf:fisica-clasica/electromagnetismo/electrostatica/campo-electrostatico) block and with Gauss's law in material media.

At a more advanced level, polarisation [[P_pol]] opens the path towards the electrodynamics of continuous media, where the electric displacement vector is introduced and boundary conditions at dielectric interfaces are derived. In optics, [[epsilon_r]] is the square of the refractive index for non-magnetic materials, establishing the bridge between electromagnetism and optics discussed in the electromagnetic wave leaf.

## Final synthesis

Dielectrics amplify the capacitance of a capacitor because their bound charges polarise under the external field and generate an opposing field that reduces the net interior field. The central parameter [[epsilon_r]] encapsulates all that polarising response of the material and is always greater than or equal to one. The capacitance [[C_d]] is the product of [[C_0]] and [[epsilon_r]], and the field [[E_d]] inside is the external field divided by [[epsilon_r]]. Both relations are valid as long as the field remains below the breakdown field of the material and the response remains linear.
`;export{e as default};
