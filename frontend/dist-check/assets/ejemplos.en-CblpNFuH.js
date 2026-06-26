const e=`# Exam-type example

## Problem statement

A laboratory pump contains molecular nitrogen at a temperature of 27 °C and a pressure of 101 325 Pa. Determine the root mean square speed of the nitrogen molecules, the mean kinetic energy per molecule, and the pressure that the same gas would exert if compressed to half the original volume at the same temperature.

## Data

- Gas: molecular nitrogen (N₂)
- Molar mass of nitrogen: 28.0 g per mole
- Temperature: 27 °C (to be converted to kelvin)
- Initial pressure: 101 325 Pa
- Boltzmann constant: 1.381 × 10⁻²³ J/K
- Avogadro's number: 6.022 × 10²³ molecules per mole
- Final volume: half the initial volume

## System definition

The system is the nitrogen gas enclosed in the container. It is a closed system (the number of molecules [[N]] remains constant) with initially rigid walls, then deformable for the second part of the problem. The gas is assumed to satisfy the ideal kinetic model hypotheses: point-like molecules without intermolecular interactions and an isotropic velocity distribution.

## Physical model

The model applied is the **ideal kinetic gas model**, whose central quantities are [[v_rms]], [[T]], [[m_mol]], [[E_k_mol]], [[P]] and [[V]]. All three leaf formulas apply: root mean square speed depends on [[T]] and [[m_mol]]; mean kinetic energy depends only on [[T]]; and kinetic pressure connects [[N]], [[m_mol]], [[v_rms]] and [[V]].

## Model justification

Nitrogen at atmospheric pressure and room temperature behaves as an ideal gas with deviations below 0.1 %. The temperature of 300 K is well above the critical temperature of nitrogen (126 K), ensuring the gas is in the gas phase and far from condensation. The ideal kinetic model hypotheses are fully valid under these conditions.

The model would cease to be valid if pressure were raised above several MPa or if temperature dropped toward 130 K, where nitrogen's intermolecular interactions become significant.

## Symbolic solution

**Step 1 — Root mean square speed.**

First, convert temperature to kelvin: 27 °C plus 273.15 gives 300.15 K, approximated to 300 K.

The mass of one nitrogen molecule is obtained by dividing the molar mass by Avogadro's number. The molar mass is 28.0 g/mol, i.e. 0.0280 kg/mol. Dividing by 6.022 × 10²³ gives [[m_mol]] of approximately 4.65 × 10⁻²⁶ kg per molecule.

Applying the root mean square speed formula:

{{f:velocidad_cuadratica_media}}

**Step 2 — Mean kinetic energy per molecule.**

With temperature already in kelvin and Boltzmann's constant [[k_B]], apply directly:

{{f:energia_cinetica_media}}

**Step 3 — Pressure after compressing to half the volume.**

At constant temperature (isothermal process), [[v_rms]] does not change. The kinetic pressure of the gas is:

{{f:presion_cinetica}}

Reducing [[V]] to half while keeping [[N]], [[m_mol]] and [[v_rms]] constant doubles the factor [[N]] divided by [[V]], so [[P]] also doubles.

## Numerical substitution

**Calculation of [[v_rms]].**

Multiplying three times [[k_B]] (1.381 × 10⁻²³ J/K) by [[T]] (300 K) gives approximately 1.243 × 10⁻²⁰ J. Dividing by [[m_mol]] (4.65 × 10⁻²⁶ kg) gives approximately 2.674 × 10⁵ m²/s². The square root of that result is approximately 517 m/s. Therefore [[v_rms]] ≈ 517 m/s.

**Calculation of [[E_k_mol]].**

Multiply three halves by [[k_B]] (1.381 × 10⁻²³ J/K) by [[T]] (300 K). Three halves times 1.381 × 10⁻²³ gives approximately 2.072 × 10⁻²³ J/K. Multiplying by 300 K yields approximately 6.21 × 10⁻²¹ J. Therefore [[E_k_mol]] ≈ 6.21 × 10⁻²¹ J per molecule.

**Calculation of [[P]] after compression.**

The initial pressure is 101 325 Pa. Halving the volume at constant temperature doubles the molecular density. Therefore final [[P]] ≈ 202 650 Pa, approximately twice the standard atmospheric pressure.

## Dimensional validation

**Root mean square speed:** the dimension of the argument inside the square root is \`[M L² T⁻² Theta⁻¹]·[Theta]·[M]⁻¹\`, which simplifies to \`[L² T⁻²]\`. The square root gives \`[L T⁻¹]\`, which is the dimension of speed. ✓

**Mean kinetic energy:** the dimension of [[k_B]] multiplied by [[T]] is \`[M L² T⁻² Theta⁻¹]·[Theta]\`, giving \`[M L² T⁻²]\`, i.e. joules. ✓

**Kinetic pressure:** the dimension of [[N]] (dimensionless) times [[m_mol]] \`[M]\`, times [[v_rms]] squared \`[L² T⁻²]\`, divided by [[V]] \`[L³]\`, gives \`[M L⁻¹ T⁻²]\`, which is the dimension of the pascal. ✓

## Physical interpretation

The result [[v_rms]] of approximately 517 m/s for nitrogen at room temperature is higher than the speed of sound in air (340 m/s), which is not a coincidence: sound propagates thanks to molecular motion and its phase velocity is related to [[v_rms]], although they are not the same quantity. This order of magnitude confirms the result is physically reasonable.

The mean kinetic energy [[E_k_mol]] of 6.21 × 10⁻²¹ J per molecule seems tiny, but must be compared with the molecular scale. The energy of a typical covalent bond is of the order of 10⁻¹⁹ J, about fifteen times larger. This explains why molecular collisions at room temperature do not break bonds: gas molecules collide with enough energy to bounce elastically, but not enough to rupture the internal structure of the nitrogen molecule.

If temperature increased by a factor of 225 (to about 67 500 K), [[E_k_mol]] would reach the order of magnitude of covalent bond energy and molecular dissociations would begin. That is precisely what happens in the upper ionosphere, where ultraviolet radiation heats the gas to equivalent temperatures sufficient to dissociate molecular nitrogen.

The isothermal compression that doubles pressure clearly illustrates that [[v_rms]] is a temperature quantity, not a density quantity: the molecules have not accelerated, they have simply been packed into a smaller space, increasing the collision frequency with the walls. This is the microscopic foundation of Boyle's law.

---

# Real-world example

## Context

Aircraft tires must withstand pressures of up to 1.4 MPa during landing. On the ground before flight, technicians check the pressure of the nitrogen used to inflate them (aircraft tires are inflated with pure nitrogen instead of air to avoid moisture and oxidation problems). During flight, the gas temperature in the tire can range from −50 °C at altitude (when the landing gear is exposed to outside cold) to 200 °C immediately after landing due to friction heat. Estimate how much tire pressure varies between these two extreme conditions.

## Physical estimation

Nitrogen temperature ranges from −50 °C (equivalent to 223 K) to 200 °C (equivalent to 473 K). The tire volume is assumed approximately constant (rubber is very rigid at these pressures) and the number of molecules [[N]] does not change.

At constant volume, kinetic pressure [[P]] is proportional to [[N]] times [[m_mol]] times [[v_rms]] squared divided by three times [[V]]. Since [[v_rms]] squared is proportional to [[T]], pressure at constant [[V]] and [[N]] is proportional to [[T]].

Starting from a reference pressure of 1.0 MPa at 223 K, the pressure at 473 K can be estimated by multiplying by the temperature ratio: 473 divided by 223 is approximately 2.12. Therefore the estimated pressure after landing is approximately 2.12 MPa.

This pressure variation of more than double is why aircraft tire systems are designed with very wide safety margins and why technicians always measure pressure cold (before flight) as the operational reference.

## Interpretation

The kinetic model accurately predicts this effect: gas pressure increases proportionally with [[T]] when volume and number of molecules are constant. This is Gay-Lussac's law, which the kinetic model derives without needing additional experimental data.

The advantage of nitrogen over air in this context is not kinetic but chemical: pure nitrogen contains neither water vapor (which condenses upon cooling, generating additional pressure variations) nor oxygen (which reacts with rubber, accelerating its degradation). The root mean square speed of nitrogen at those temperatures is of the order of 400 to 600 m/s, well within the ideal gas regime with no corrections needed.
`;export{e as default};
