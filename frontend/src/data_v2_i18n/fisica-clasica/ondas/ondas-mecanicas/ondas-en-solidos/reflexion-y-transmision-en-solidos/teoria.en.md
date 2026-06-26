## Conceptual context

When an elastic wave travels through a solid and encounters an interface where medium properties change, part of its energy bounces back and part continues into the second material. This partition is not accidental: it depends exclusively on the acoustic impedances of both media. Impedance summarises in a single number the medium's opposition to wave passage, and the impedance contrast governs how much amplitude and energy are reflected or transmitted.

This phenomenon has direct consequences in engineering (ultrasonic inspection, coupling layer design), in geophysics (detection of seismic discontinuities) and in medicine (ultrasound imaging). Understanding reflection and transmission is prerequisite to any analysis of wave signals crossing more than one medium.

## 🟢 Essential level

The central idea is that a wave cannot cross an interface without adapting to the new medium conditions. If the second material has the same impedance as the first, the wave passes without noticing the boundary. If impedances are very different, most of the wave bounces back.

[[impedancia_acustica_del_medio_1]] and [[impedancia_acustica_del_medio_2]] are the two numbers being compared. Each is calculated as the product of medium density and wave velocity in that medium; the same product can be read as [[impedancia_acustica_generica]] when referring to a generic medium impedance. A dense and stiff medium (like steel) has high impedance. A light and flexible medium (like air) has low impedance.

[[coeficiente_de_reflexion_en_amplitud]] indicates what fraction of the amplitude bounces back. If impedances match, [[coeficiente_de_reflexion_en_amplitud]] is zero: no reflection. If they differ greatly, [[coeficiente_de_reflexion_en_amplitud]] approaches unity in absolute value: nearly all the wave bounces back.

[[coeficiente_de_transmision_en_amplitud]] indicates what fraction of the amplitude passes to the second medium. For normal incidence, reflected and transmitted amplitudes add up to the incident amplitude in terms of displacement continuity.

A confusing point is that the transmitted amplitude can be larger than the incident one without violating any law. This happens when the second medium has lower impedance. There is no contradiction because transmitted energy depends on the product of squared amplitude and impedance, and that product always respects conservation.

At this level it suffices to retain that impedance contrast produces reflection, and absence of contrast produces total transmission.

## 🔵 Formal level

The boundary condition at the interface requires continuity of displacement and normal stress. Imposing these two conditions on plane waves at normal incidence yields the reflection and transmission coefficients in amplitude:

{{f:coeficiente_reflexion_amplitud}}

{{f:coeficiente_transmision_amplitud}}

The relationship between both coefficients satisfies the continuity identity. Summing contributions verifies that the total amplitude at the interface (incident plus reflected on side 1, transmitted on side 2) is consistent.

For energy balances, intensity coefficients are used:

{{f:coeficiente_reflexion_energia}}

{{f:coeficiente_transmision_energia}}

Energy conservation requires that [[coeficiente_de_reflexion_en_energia]] plus [[coeficiente_de_transmision_en_energia]] equals exactly unity. This condition serves as an immediate check for any calculation.

The acoustic impedance of each medium is calculated as:

{{f:impedancia_acustica}}

where [[rho_medio]] is density and [[v_onda]] is wave velocity (longitudinal or transverse, as appropriate). For P waves use longitudinal velocity; for S waves, transverse.

The algebraic structure shows that only the impedance ratio matters, not their absolute values. Two interfaces with the same [[impedancia_acustica_del_medio_2]]/[[impedancia_acustica_del_medio_1]] ratio produce exactly the same reflection, regardless of the specific materials.

The sign of [[coeficiente_de_reflexion_en_amplitud]] has physical meaning: if [[impedancia_acustica_del_medio_2]] is greater than [[impedancia_acustica_del_medio_1]], the reflected wave maintains the phase of the incident one. If [[impedancia_acustica_del_medio_2]] is less than [[impedancia_acustica_del_medio_1]], the reflected wave inverts its phase. This phase change is analogous to what a string experiences at a fixed rigid end versus a free end.

## 🔴 Structural level

The derivation starts from the one-dimensional wave equation and the condition that the interface (at a fixed position) must simultaneously satisfy continuity of displacement and continuity of normal stress. These two conditions uniquely determine the two coefficients.

At oblique incidence, the situation becomes complex because a P wave can generate both a reflected P wave and a reflected S wave (mode conversion), and the same occurs in transmission. The Zoeppritz equations describe this general case and produce four coefficients (PP, PS, SP, SS) depending on incidence angle and P and S velocities in both media.

A critical angle exists beyond which the transmitted wave ceases to propagate as a body wave and becomes evanescent or a surface wave. This phenomenon is analogous to total internal reflection in optics and has direct applications in seismology (head waves) and ultrasonic testing (surface wave technique).

The theory assumes flat, infinite and perfectly bonded interfaces. In reality, interfaces can be rough, have intermediate coupling layers or be partially debonded. Each of these deviations modifies the actual coefficients relative to the ideal ones.

## Deep physical interpretation

Reflection is not a mechanical bounce in the everyday sense. It is a consequence of boundary condition incompatibility: if the second medium cannot sustain the same stress-to-particle-velocity ratio as the incident wave, a reflected wave must necessarily be generated to compensate. Reflection is the system response to the impossibility of transmitting all mechanical information without adjustment.

This reading explains why reflection vanishes when impedances match: if the second medium accepts exactly the same stress/velocity ratio, there is nothing to compensate and the entire wave passes. It is the acoustic equivalent of impedance matching in electrical circuits.

## Order of magnitude

At steel-aluminium interfaces, the amplitude reflection coefficient is of the order of 0.35 and the energy coefficient of the order of 0.12. At steel-air interfaces, reflection is practically total ([[coeficiente_de_reflexion_en_energia]] close to 1) because air impedance is about one hundred thousand times less than steel.

In medical ultrasound, soft tissue-bone interfaces reflect strongly (high contrast), while interfaces between similar soft tissues reflect weakly (low contrast). Detection of internal structures depends on these contrasts.

A quick check: if [[coeficiente_de_reflexion_en_energia]] comes out greater than 1 or negative, there is an error. If [[coeficiente_de_reflexion_en_energia]] plus [[coeficiente_de_transmision_en_energia]] does not sum to 1, there is an error.

## Personalized resolution method

First calculate the impedance of each medium as the product of density and velocity. Second, calculate the amplitude reflection coefficient as difference divided by sum. Third, square to obtain the energy reflection. Fourth, verify that [[coeficiente_de_reflexion_en_energia]] plus [[coeficiente_de_transmision_en_energia]] equals 1.

If the unknown impedance is requested from a measured coefficient, solve the corresponding formula. If working at oblique incidence, identify the angle and apply Zoeppritz (advanced university level).

## Special cases and extended example

If [[impedancia_acustica_del_medio_2]] tends to infinity (ideal rigid wall), R approaches 1 and T approaches 2 in amplitude. The amplitude at the interface doubles (constructive interference between incident and reflected), but transmitted energy is zero because there is no net displacement in the wall.

If [[impedancia_acustica_del_medio_2]] tends to zero (ideal free surface), R approaches -1 and T approaches 0 in amplitude. The reflected wave inverts its phase and all energy returns.

In an ultrasonic test of steel with a crack-type defect (internal air), the steel-air interface produces nearly total reflection. The echo signal detected by the transducer indicates the presence and depth of the defect.

## Real student questions

How can the transmitted amplitude be greater than the incident one? Because energy does not depend only on amplitude, but on the product of squared amplitude and impedance. In a low-impedance medium, amplitude grows, but energy per unit amplitude is less.

Does reflection always cause energy loss in the second medium? It is not a loss, it is a partition. Total energy is conserved: what is not transmitted is reflected. There is no dissipation at an ideal interface.

## Cross-cutting connections and study paths

This topic connects with mechanical impedance (prerequisite), elastic properties (source of velocities and densities), seismic waves (geophysical application), non-destructive testing (industrial application) and ultrasound imaging (medical application). It also prepares understanding of impedance-matching layers (quarter wavelength) and acoustic filters.

## Final synthesis

Reflection and transmission in solids are a direct consequence of acoustic impedance contrast at an interface. The impedance ratio completely determines the coefficients for normal incidence. Energy conservation requires that the sum of energy coefficients equals unity. The didactic key is not to confuse amplitude with energy: a transmitted amplitude greater than one does not violate physics, because transported power also depends on the impedance of the receiving medium.