const e=`# Mechanical impedance in solids

## Conceptual context

Mechanical impedance is the quantity that governs the transmission of vibratory energy between solids. When a mechanical wave travels along a bar and reaches a joint with another part, the impedance difference between both determines how much energy passes through and how much returns. This concept is analogous to electrical impedance in circuits, where an impedance mismatch causes signal reflection in transmission lines.

Within the block on waves in solids, mechanical impedance connects material properties ([[rho]], [[c_s]]) and geometry ([[A_sec]]) with the macroscopic behaviour of vibration transfer. Without understanding [[Z_mec]], it is impossible to design efficient joints, vibration isolators or acoustic coupling systems that work correctly.

## 🟢 Essential level

Mechanical impedance [[Z_mec]] measures the **resistance of a solid to vibration**. A heavy, stiff material with a large cross-section has high impedance; a light, flexible, thin one has low impedance. The impedance depends on three factors: the density [[rho]] of the material, the speed at which waves propagate [[c_s]], and the size of the cross-sectional area [[A_sec]].

When a wave reaches the boundary between two parts with different [[Z_mec]], part of the energy reflects and part transmits. If both parts have the same impedance, all energy passes without reflection: this is **impedance matching**. If they differ greatly, most energy bounces back. This principle explains why it is difficult to transmit vibrations between very different materials (metal and rubber, for instance) and why intermediate matching layers are used. In engineering, designing an efficient joint means minimising the difference in [[Z_mec]] between the connected parts.

## 🔵 Formal level

Mechanical impedance is defined as the ratio of the applied harmonic force to the resulting particle velocity. For plane waves in a solid of uniform cross-section, this reduces to:

{{f:impedancia_mecanica}}

Where [[rho]] is the material density, [[c_s]] is the phase velocity of the wave (longitudinal or transverse depending on mode) and [[A_sec]] is the cross-sectional area perpendicular to propagation. The product [[rho]] · [[c_s]] is the specific acoustic impedance of the material, and multiplying by [[A_sec]] yields the total mechanical impedance that includes part geometry.

When the wave strikes an interface perpendicularly between medium 1 (impedance Z₁) and medium 2 (impedance Z₂), the velocity amplitude reflection coefficient is:

{{f:coeficiente_reflexion_impedancia}}

And the velocity amplitude transmission coefficient is:

{{f:coeficiente_transmision_impedancia}}

These expressions satisfy a conservation relation: one plus [[R_Z]] gives exactly [[T_Z]], which guarantees velocity continuity at the interface. Energy conservation is verified through power, which is proportional to impedance times velocity squared. The equality between incident power and the sum of reflected plus transmitted always holds, even when [[T_Z]] exceeds unity, because transmitted power depends on the receiving medium's impedance, not the incident one.

## 🔴 Structural level

Design decisions involving mechanical impedance depend on several interrelated factors:
- **Material**: [[rho]] and [[c_s]] determine the specific impedance; heavy, stiff metals dominate over polymers.
- **Geometry**: [[A_sec]] can vary along the part; abrupt section changes create internal reflection interfaces.
- **Wave mode**: longitudinal and transverse velocities differ, so impedance depends on the excited wave type.
- **Frequency**: at high frequencies where wavelength is comparable to thickness, guided modes appear and simple impedance ceases to be valid.

The coupling agent between two parts acts as a matching layer. For maximum transmission, the intermediate layer impedance should be the geometric mean of both parts' impedances. This principle is analogous to anti-reflective coatings in optics and allows achieving [[R_Z]] of zero at the design frequency.

> [!WARNING]
> The [[R_Z]] formula only holds for normal incidence. If the wave arrives at an oblique angle, mode conversion (longitudinal ↔ transverse) occurs and coefficients change drastically. In that case, Zoeppritz equations adapted for solids are needed.

The main validity limit is the **plane wave hypothesis**: if the cross-section is comparable to the wavelength, higher-order modes appear and impedance becomes a function of frequency (input impedance of the system). In thin bars at low frequency, the plane wave model works well; in plates or complex structures, modal analysis is required.

**Transfer impedance** between two points away from the interface incorporates propagation, attenuation and multiple reflections. The matrix formulation (transfer matrices) generalises the concept for multilayer structures, but the foundation remains the same: each interface reflects according to the [[Z_mec]] contrast.

> [!NOTE]
> In viscoelastic materials, [[Z_mec]] becomes complex: the real part governs energy transmission and the imaginary part governs dissipation. The magnitude of the complex modulus replaces the real elastic modulus in the expression for [[c_s]].

## Deep physical interpretation

Mechanical impedance encodes the **acoustic inertia** of the medium. A solid with high [[Z_mec]] requires a large force to produce a significant particle velocity. When the wave crosses from a low-impedance medium to a high-impedance one, transmitted velocity decreases but force increases; power is conserved because it equals the product of force times velocity.

The sign of [[R_Z]] contains crucial physical information: if positive, medium 2 is stiffer and the reflected wave maintains phase; if negative, medium 2 is softer and the reflected wave inverts its phase. This phase inversion is experimentally detectable and allows identifying the nature of the interface without previously knowing the absolute impedances.

The conservation relation (one plus [[R_Z]] gives [[T_Z]]) implies that transmitted velocity can be **greater** than incident (up to double). This does not violate energy conservation because transmitted power depends on the product of impedance times velocity squared, and if the receiving medium is softer, the reduction in impedance exactly compensates the increase in transmitted velocity.

## Order of magnitude

For a steel bar of cross-section 10 cm² (10⁻³ m²): [[Z_mec]] = 7800 × 5900 × 10⁻³ ≈ 46 000 kg/s. For an aluminium bar of the same section: [[Z_mec]] = 2700 × 6300 × 10⁻³ ≈ 17 000 kg/s. The impedance ratio is approximately 2.7:1, giving [[R_Z]] ≈ 0.46 and an energy reflection of 21%.

If the result of [[Z_mec]] is below 100 kg/s for an engineering solid, there is probably a unit error in [[A_sec]] (cm² not converted to m²). If [[R_Z]] exceeds 1 in absolute value, there is certainly an algebraic error.

## Personalized resolution method

1. Identify the materials on both sides of the interface and obtain [[rho]] and [[c_s]] from tables.
2. Determine [[A_sec]] for each medium (if the section changes at the interface, use the area on each side).
3. Calculate [[Z_mec]] for each medium using the fundamental formula.
4. Apply the [[R_Z]] formula using Z₁ (incident medium) and Z₂ (receiving medium).
5. Calculate [[T_Z]] as 1 + [[R_Z]] or with the direct formula.
6. Verify coherence: check that |[[R_Z]]| ≤ 1 and that energy is conserved (R² + Z₁/Z₂ · T² = 1 when working with powers).

## Special cases and extended example

When Z₁ = Z₂ (identical materials and same section), [[R_Z]] = 0 and [[T_Z]] = 1. All energy transmits without loss. This is the ideal case of a homogeneous bar without discontinuities.

When Z₂ → ∞ (rigid end, clamped), [[R_Z]] → 1 and [[T_Z]] → 2. The velocity at the end doubles in phase, but the force transmitted to the clamp is maximum. In practice, a free end of a bar acts as Z₂ = 0: [[R_Z]] = -1 (reflection with phase inversion) and [[T_Z]] = 0. The reflected wave inverts its velocity sign.

In bolted joints with a soft gasket (rubber, PTFE), the intermediate layer drastically reduces transmission. A gasket thickness of one quarter wavelength can act as an impedance transformer if its impedance is the geometric mean.

## Real student questions

- Why does [[Z_mec]] include area if acoustic impedance does not? Because mechanical impedance relates total force to velocity, while specific acoustic impedance relates pressure to velocity. Pressure is force per unit area, so moving from pressure to force introduces the factor [[A_sec]].

- Can [[T_Z]] be greater than 1? Yes, and it does not violate energy conservation. When the wave passes to a softer medium (lower [[Z_mec]]), transmitted velocity increases but power does not, because power is proportional to Z · v² and the soft medium has lower Z.

- What happens at an oblique interface? Converted modes appear: an incident longitudinal wave generates both longitudinal and transverse reflected and transmitted waves. Coefficients depend on angle and on velocities of both modes in both media.

- How is impedance matching achieved in practice? Using an intermediate layer whose impedance is the geometric mean of the two parts, and whose thickness is one quarter of the wavelength at the working frequency. This creates destructive interference of multiple reflections.

## Cross-cutting connections and study paths

This leaf connects directly with reflection and transmission in solids, where the [[R_Z]] and [[T_Z]] equations are derived from boundary conditions. It also relates to ultrasound applications, where mechanical impedance determines defect detectability and the need for coupling agents.

The analogy with electrical circuits is deep: mechanical impedance is the analogue of electrical impedance, particle velocity corresponds to current and force to voltage. Matching techniques (quarter-wave layers, multilayer stacks) are identical to those used in microwave transmission lines.

## Final synthesis

Mechanical impedance [[Z_mec]] = [[rho]] · [[c_s]] · [[A_sec]] quantifies a solid's resistance to vibratory motion and completely determines the energy partition at each interface. Impedance matching maximises transfer, while mismatch maximises reflection. Mastering this concept enables predicting and controlling the flow of vibrations in any mechanical system with interfaces.
`;export{e as default};
