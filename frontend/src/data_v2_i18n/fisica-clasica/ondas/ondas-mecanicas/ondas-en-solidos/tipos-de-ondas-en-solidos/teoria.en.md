## Conceptual context

When a mechanical disturbance is applied to an elastic solid, the energy does not propagate indiscriminately: the material channels that disturbance into **well-defined wave types**, each with its own propagation velocity, particle displacement pattern and specific dependence on the elastic properties of the material.

The distinction between these wave types is not a technical detail: it is the foundation of seismology, non-destructive testing of materials, ultrasonic transducer design and coating engineering. Understanding **which wave type is generated, how it propagates and at what speed** is the central physical question of this leaf.

The solid is distinguished from fluids precisely by the variety of waves it can host. While in a gas or liquid only the compression wave exists, in a solid at least three wave families coexist, and that coexistence imposes fascinating constraints on the elastic properties of the material.

## 🟢 Essential level

An elastic solid can transmit two fundamental types of body wave and at least one surface wave.

**Longitudinal waves** (or compression waves, called P-waves in seismology) move particles in the same direction as the wave advances. They are the fastest in any solid and exist in both solids and fluids. They can be imagined as the motion of a spring: alternating zones of compression and expansion advancing in the same direction.

**Transverse waves** (or shear waves, called S-waves in seismology) move particles perpendicular to the propagation direction. They are slower than longitudinal waves in the same material and, crucially, **cannot exist in fluids**, because fluids do not resist shear stresses. This is the deepest physical difference between a solid and a fluid from a wave perspective.

**Rayleigh surface waves** propagate confined to the free surface of the solid, with a retrograde elliptical particle motion. Their amplitude decays exponentially with depth. They are almost as fast as the shear waves of the same material.

> [!NOTE]
> The existence of transverse waves is the dynamic signature of a solid. If a material transmits S-waves, it is a solid; if not, it is a fluid or a gas.

## 🔵 Formal level

The velocities of the three wave types are determined by the elastic properties of the material and its density [[rho]].

The longitudinal wave velocity [[velocidad_de_onda_longitudinal_p]] in an isotropic three-dimensional solid is calculated from Young's modulus [[modulo_de_young]] and Poisson's ratio [[nu]]:

{{f:vel_longitudinal}}

The factor in parentheses combines [[modulo_de_young]] and [[nu]] to form the **confined modulus**, which is always larger than [[modulo_de_young]] for any positive [[nu]]. This is why [[velocidad_de_onda_longitudinal_p]] in a 3D solid is larger than the longitudinal velocity in a thin bar of the same material.

The transverse wave velocity [[velocidad_de_onda_transversal_s]] depends exclusively on the shear modulus [[modulo_de_corte]] and density:

{{f:vel_transversal}}

The simplicity of this expression is revealing: [[velocidad_de_onda_transversal_s]] does not depend on how the material responds to compression, only on how it responds to shear. Therefore, when [[modulo_de_corte]] tends to zero (fluid limit), [[velocidad_de_onda_transversal_s]] tends to zero and the S-wave disappears.

The Rayleigh wave velocity [[velocidad_de_onda_de_rayleigh]] is obtained as a fraction of [[velocidad_de_onda_transversal_s]] that depends gently on [[nu]] through Viktorov's approximation:

{{f:vel_rayleigh}}

This formula shows that [[velocidad_de_onda_de_rayleigh]] is always between 87 and 96% of [[velocidad_de_onda_transversal_s]], regardless of the material. The velocity hierarchy is invariant: [[velocidad_de_onda_longitudinal_p]] greater than [[velocidad_de_onda_transversal_s]] greater than [[velocidad_de_onda_de_rayleigh]] in any isotropic elastic solid.

> [!TIP]
> To identify wave type in an ultrasonic test, measure the arrival time of the first pulse (P-wave) and the second (S-wave). The ratio of their velocities directly reveals the Poisson's ratio of the material.

## 🔴 Structural level

The physical architecture of the three wave types reflects the two independent ways in which a solid can store elastic energy: **compression energy** and **shear energy**.

The longitudinal wave involves both: the compression disturbance activates both resistance to volume change (bulk modulus K) and resistance to shape change (shear modulus G). The effective confined modulus of that wave is precisely the combination of both mechanisms, weighted by Poisson's ratio [[nu]].

The transverse wave, by contrast, is **purely shape-dissipative**: it moves the material angularly without changing its volume. It activates only [[modulo_de_corte]], which is why its speed relation is simpler and slower than the longitudinal one. This purity makes [[velocidad_de_onda_transversal_s]] measurements the best estimators of the shear modulus in non-destructive testing.

The **velocity hierarchy** is not accidental: it can be proved that for any stable isotropic material (with [[nu]] between zero and 0.5), [[velocidad_de_onda_longitudinal_p]] always exceeds [[velocidad_de_onda_transversal_s]]. The relative difference depends exclusively on [[nu]] and becomes very large when [[nu]] approaches 0.5 (nearly incompressible materials such as rubber), because in that limit the confined modulus diverges while [[modulo_de_corte]] remains finite.

The Rayleigh wave presents additional physics: its penetration depth is approximately one wavelength, making it a natural probe of the surface layer of the material. In a layered solid (with different properties at different depths), the Rayleigh wave becomes **dispersive**: different frequencies travel at different speeds, and the dispersion curve contains information about the stiffness profile with depth. This property is exploited in characterisation of pavements, soils and coatings.

> [!WARNING]
> In a real solid with attenuation, phase velocity and group velocity may differ. Viktorov's formula gives the phase velocity in the purely elastic case; in viscoelastic materials waves are dispersive even in a homogeneous medium.

The condition for the existence of the Rayleigh wave — that the solid has a **free surface** — is physical, not geometric. If the solid is confined between two surfaces (a plate), Lamb waves appear, which are the generalisation of Rayleigh waves in finite-thickness media. If the solid has a low-velocity layer over a substrate, **Love waves** appear, which are horizontally polarised S-waves guided by that layer. These extended types are not covered in this leaf, but they are the natural evolution of the surface wave concept.

The validity limits of the isotropic elastic model are reached when:

- Strains are large (non-linear regime, near the yield limit).
- The material has an oriented internal structure (composites, wood, biological tissue).
- The frequency is so high that the wavelength approaches the grain or microstructure size (Mie or grain Rayleigh scattering).

## Deep physical interpretation

The classification of wave types reflects a deep truth about elasticity: **not all stiffness is equal**. Compressive stiffness (how much the material resists changing volume) and shear stiffness (how much it resists changing shape) are independent properties, and each wave type extracts only the information that corresponds to it.

This has immediate practical consequences: a material soft in shear (low G) but stiff in compression (high K) — such as rubber — has a moderate [[velocidad_de_onda_longitudinal_p]] but a very low [[velocidad_de_onda_transversal_s]]. A material stiff in shear but light — such as aluminium — has a high [[velocidad_de_onda_transversal_s]] for its density. The combination of [[velocidad_de_onda_longitudinal_p]] and [[velocidad_de_onda_transversal_s]] measured experimentally allows simultaneous determination of two of the five elastic moduli of the material without any macroscopic deformation.

The Rayleigh wave adds a third source of information: being sensitive only to the surface zone, it can detect property changes at the interface or in the residual compression layer from a thermal or mechanical treatment.

## Order of magnitude

For structural steel (E approximately 200 GPa, G approximately 80 GPa, density approximately 7800 kg/m³, [[nu]] approximately 0.30), the three wave types give velocities in the range of thousands of metres per second:

- Longitudinal wave: around 5900 m/s.
- Transverse wave: around 3200 m/s.
- Rayleigh wave: around 2970 m/s.

For aluminium (E approximately 70 GPa, G approximately 26 GPa, density approximately 2700 kg/m³, [[nu]] approximately 0.33):

- Longitudinal wave: around 6300 m/s.
- Transverse wave: around 3100 m/s.

These values contrast with those of soft materials: in soft geotechnical soil, [[velocidad_de_onda_transversal_s]] can be as low as 50 m/s, while [[velocidad_de_onda_longitudinal_p]] is around 300 m/s. The separation between [[velocidad_de_onda_longitudinal_p]] and [[velocidad_de_onda_transversal_s]] is doubly large in relative terms, because [[nu]] of saturated soil approaches 0.5.

A physically absurd result would be obtaining [[velocidad_de_onda_transversal_s]] greater than [[velocidad_de_onda_longitudinal_p]] in the same material: that would imply a Poisson's ratio outside the physically admissible range, or an error in the input moduli.

## Personalized resolution method

The analysis process for wave types in a solid follows a reproducible protocol:

1. **Identify the material parameters**: [[modulo_de_young]], [[modulo_de_corte]], [[rho]] and [[nu]]. If only two of the four are known, verify the elastic relation linking them before proceeding.

2. **Calculate [[velocidad_de_onda_longitudinal_p]]** with the full 3D solid formula if the medium is three-dimensionally homogeneous; or with the thin-bar version if the solid is geometrically confined.

3. **Calculate [[velocidad_de_onda_transversal_s]]** using [[modulo_de_corte]] and [[rho]]. This step always precedes the calculation of [[velocidad_de_onda_de_rayleigh]].

4. **Calculate [[velocidad_de_onda_de_rayleigh]]** using Viktorov's approximation if [[nu]] is between 0 and 0.5.

5. **Verify the hierarchy**: [[velocidad_de_onda_longitudinal_p]] greater than [[velocidad_de_onda_transversal_s]] greater than [[velocidad_de_onda_de_rayleigh]]. If not satisfied, there is an error in the data or the model.

6. **Interpret**: The ratio [[velocidad_de_onda_transversal_s]]/[[velocidad_de_onda_longitudinal_p]] determines [[nu]]; the ratio [[velocidad_de_onda_de_rayleigh]]/[[velocidad_de_onda_transversal_s]] is an additional indicator of [[nu]]. If all three velocities are mutually consistent, the material characterisation can be trusted.

## Special cases and extended example

**Nearly incompressible material ([[nu]] close to 0.5)**: in rubber, [[velocidad_de_onda_longitudinal_p]] grows strongly because the confined modulus increases, while [[velocidad_de_onda_transversal_s]] remains moderate. The P-S separation becomes large: the P-wave looks fluid-like, but the S-wave reveals solid shear stiffness.

**Auxetic material (negative [[nu]])**: in re-entrant foams the P-S separation is reduced, and Viktorov's approximation for [[velocidad_de_onda_de_rayleigh]] becomes less reliable.

**Stainless steel 304**: with E of 193 GPa, G of 77 GPa, density of 7900 kg/m³ and [[nu]] of 0.25, the approximate speeds are [[velocidad_de_onda_longitudinal_p]] = 5700 m/s, [[velocidad_de_onda_transversal_s]] = 3120 m/s and [[velocidad_de_onda_de_rayleigh]] = 2900 m/s. The hierarchy holds and [[velocidad_de_onda_transversal_s]]/[[velocidad_de_onda_longitudinal_p]] is consistent with [[nu]].

## Real student questions

**Why does the S-wave not exist in water if water seems "stiff" under pressure?**

Water resists compression, but its shear modulus is zero: it does not sustain tangential stress at rest. Only shear stiffness permits S-waves.

**Why is the Rayleigh wave always slower than the S-wave if both use the same moduli?**

Its surface mode combines compression and shear without maximising propagation speed. The solution for [[velocidad_de_onda_de_rayleigh]] lies slightly below [[velocidad_de_onda_transversal_s]].

**What information does the ratio [[velocidad_de_onda_transversal_s]]/[[velocidad_de_onda_longitudinal_p]] give me about the material?**

This ratio depends only on Poisson's ratio [[nu]]. By measuring both velocities in the same material, [[nu]] can be calculated without tensile or bending tests — only with two ultrasonic measurements.

**Can a solid have just one wave type and not three?**

Not in general: a disturbance in a solid decomposes into P and S waves. Bars and plates can couple them into guided modes such as Lamb or Love.

## Cross-cutting connections and study paths

This leaf connects to topics that separate geometry, interfaces and material elasticity:

- [Longitudinal waves in bars](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-longitudinales-en-barras): P-wave with confined geometry.
- [Transverse shear waves](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-transversales-de-corte): S-wave in finite media.
- [Reflection and transmission in solids](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/reflexion-y-transmision-en-solidos): conversion at interfaces.
- [Elastic properties of the solid](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/propiedades-elasticas-del-solido): origin of the moduli used here.

In seismology, P and S arrive first as body waves; Rayleigh and Love arrive later as surface waves and often dominate damage.

## Final synthesis

Elastic solids host longitudinal, transverse and Rayleigh surface waves. Their speeds depend on different combinations of elastic moduli and [[rho]]. The hierarchy [[velocidad_de_onda_longitudinal_p]] greater than [[velocidad_de_onda_transversal_s]] greater than [[velocidad_de_onda_de_rayleigh]] is the diagnostic summary: S-waves are the direct dynamic signature of shear resistance.