# Exam-type example


## Problem statement

A parallel-plate capacitor has square plates with a side length of 15 cm, separated by 2 mm. The space between the plates is filled with a dielectric with relative constant εᵣ = 5. The capacitor is connected to a 120 V source until fully charged, then disconnected.

(a) Calculate the capacitance of the capacitor.
(b) Calculate the stored charge and stored energy.
(c) After disconnecting the source, the dielectric is removed and replaced by air (εᵣ ≈ 1). Calculate the new voltage between the plates and the new stored energy. Explain the origin of the energy difference.

## Data

- Plate side length: 15 cm (0.15 m)
- Separation: 2 mm (2×10⁻³ m)
- Relative permittivity of dielectric: εᵣ = 5
- Initial voltage: [[diferencia_de_potencial]] of 120 V
- Permittivity of vacuum: ε₀ = 8.854×10⁻¹² F/m

## System definition

The system is a parallel-plate capacitor with dielectric. It is analyzed in two states: (1) with dielectric and charged to 120 V, and (2) with the dielectric removed and disconnected from the source (constant charge).

## Physical model

The ideal parallel-plate capacitor model with uniform field is applied. The central quantities in the problem are capacitance [[capacidad_geometrica_del_condensador_plano]] (determined by geometry and material), stored charge [[carga_almacenada]] (constant after disconnection), voltage [[diferencia_de_potencial]] (variable when the dielectric changes), and stored energy [[energia_almacenada_en_el_condensador]] (which changes because C changes with constant Q).

## Model justification

The ideal capacitor model with uniform field is valid because the separation (2 mm) is much smaller than the plate side (150 mm); the separation-to-side ratio is approximately 0.013, easily satisfying the uniform-field condition. The dielectric is linear and isotropic for constant εᵣ, without losses. The model would cease to be valid if separation were comparable to plate size, if the field exceeded the dielectric breakdown limit, or if operated at frequencies high enough for parasitic inductance to be relevant.

## Symbolic solution

**Part (a):** Capacitance with dielectric is calculated with the parallel-plate formula:

{{f:capacidad_plana}}

where [[epsilon]] is the product of ε₀ and εᵣ, area A is the square of the side, and d is the separation.

**Part (b):** With [[capacidad_geometrica_del_condensador_plano]] known and applied voltage [[diferencia_de_potencial]], stored charge and energy are:

{{f:capacidad_definicion}}

{{f:energia_condensador}}

**Part (c):** After disconnecting the source and removing the dielectric, charge [[carga_almacenada]] remains constant (cannot flow). New capacitance with air is [[capacidad_geometrica_del_condensador_plano]] divided by εᵣ. New voltage is obtained by dividing [[carga_almacenada]] by the new [[capacidad_geometrica_del_condensador_plano]]; new energy is recalculated with the new [[capacidad_geometrica_del_condensador_plano]] and new [[diferencia_de_potencial]].

## Numerical substitution

**Part (a):**

Plate area: A = (0.15)² = 0.0225 m². Dielectric permittivity: ε = ε₀·εᵣ = 8.854×10⁻¹²·5 = 4.427×10⁻¹¹ F/m.

Applying the parallel-plate formula, multiplying ε by A and dividing by d gives: (4.427×10⁻¹¹ × 0.0225) / (2×10⁻³) = 9.96×10⁻¹³ / 2×10⁻³ ≈ 4.98×10⁻¹⁰ F. Therefore [[capacidad_geometrica_del_condensador_plano]] ≈ 498 pF.

**Part (b):**

Applying the capacitance definition, multiplying [[capacidad_geometrica_del_condensador_plano]] by the 120 V of [[diferencia_de_potencial]]: 4.98×10⁻¹⁰ × 120 gives approximately 5.97×10⁻⁸ C. Therefore [[carga_almacenada]] ≈ 59.7 nC.

For energy, applying the stored energy formula: (1/2) × 4.98×10⁻¹⁰ × (120)² = (1/2) × 4.98×10⁻¹⁰ × 14400 ≈ 3.58×10⁻⁶ J. Therefore [[energia_almacenada_en_el_condensador]] ≈ 3.58 µJ.

**Part (c):**

With air, new [[capacidad_geometrica_del_condensador_plano]] is obtained by dividing 4.98×10⁻¹⁰ F by 5, giving approximately 9.96×10⁻¹¹ F (≈ 99.6 pF). Since [[carga_almacenada]] remains at 59.7 nC, new voltage is obtained by dividing [[carga_almacenada]] by new [[capacidad_geometrica_del_condensador_plano]]: 5.97×10⁻⁸ / 9.96×10⁻¹¹ ≈ 599 V, i.e., εᵣ times higher.

New energy: (1/2) × 9.96×10⁻¹¹ × (599)² = (1/2) × 9.96×10⁻¹¹ × 3.59×10⁵ ≈ 1.787×10⁻⁵ J. Therefore new [[energia_almacenada_en_el_condensador]] ≈ 17.87 µJ, exactly εᵣ times higher (a factor of 5) than before.

## Dimensional validation

- Capacitance: `[ε]·[A]/[d]` → `[F m⁻¹]·[m²]·[m⁻¹]` → `[F]` ✓
- Charge: `[C]·[V]` → `[F]·[V]` → `[C V⁻¹]·[V]` → `[C]` ✓
- Energy: `[F]·[V]²` → `[C V⁻¹]·[V²]` → `[C·V]` → `[J]` ✓
- SI dimensions: capacitance `[M⁻¹ L⁻² T⁴ I²]`, charge `[T I]`, energy `[M L² T⁻²]` ✓

## Physical interpretation

The result of part (c) illustrates one of the most pedagogically rich phenomena of the capacitor: **removing a dielectric with the source disconnected increases stored energy**. Initial energy with dielectric was [[energia_almacenada_en_el_condensador]] ≈ 3.58 µJ; after removing the dielectric it rises to 17.87 µJ, multiplied by εᵣ = 5. Where does this extra energy come from? It comes from the **mechanical work done when extracting the dielectric**: the electric field, which has polarized the dielectric, opposes the removal of the material and work must be done to pull it away from the plates. That work is converted into additional electrical energy stored in the field.

The inverse situation is equally instructive: if the source remained connected during extraction, voltage [[diferencia_de_potencial]] would stay fixed at 120 V, capacitance would drop to 99.6 pF, and charge would decrease from 59.7 nC to 11.95 nC. Energy would drop from 3.58 µJ to only 0.716 µJ. In this case, the work of extracting the dielectric adds to energy returned to the source and does not appear as an increase in [[energia_almacenada_en_el_condensador]].

The quadratic dependence of energy on voltage explains why the final voltage of 599 V with air produces 5 times more energy than 120 V with dielectric, even though charge is the same: voltage was multiplied by εᵣ and energy proportional to V² was multiplied by εᵣ².

# Real-world example


## Context

Camera flashes use electrolytic capacitors to store the energy needed for the burst of light. A typical flash requires about 100 J in about 1 ms. The capacitor is slowly charged from batteries (a process that may take several seconds) and releases all its energy at once in the fraction of a millisecond that the flash lasts.

The goal is to estimate the capacitance and charging voltage needed for an 80 J flash with a capacitor operating at 300 V.

## Physical estimation

The energy to be stored is [[energia_almacenada_en_el_condensador]] of 80 J and the working voltage [[diferencia_de_potencial]] is 300 V. Solving for [[capacidad_electrica]] from the [[energia_almacenada_en_el_condensador]] formula (multiplying 2 by 80 J and dividing by the square of 300 V, i.e. 90 000 V²) gives approximately 1.78×10⁻³ F, so [[capacidad_electrica]] ≈ 1780 µF.

This value is completely consistent with the electrolytic capacitors found in real professional camera flashes, which typically range from 1000–4700 µF at 300–400 V. The charge stored in that capacitor would be [[carga_almacenada]] of approximately 0.534 C (product of [[capacidad_electrica]] and [[diferencia_de_potencial]]).

The mean discharge current during the 1 ms flash is on the order of [[carga_almacenada]] divided by time: 0.534 C divided by 10⁻³ s gives approximately 534 A, enormous but extremely brief. Peak power is [[energia_almacenada_en_el_condensador]] divided by time: 80 J divided by 10⁻³ s gives 80 kW.

## Interpretation

This example highlights the singular advantage of capacitors over batteries for **high peak power** applications: the camera batteries (typically AA at 1.5 V and 2500 mAh) cannot supply 80 kW for a millisecond — their internal resistance and chemistry prevent it. Instead, they can slowly charge the capacitor over several seconds at about 100 mA, and the capacitor acts as a "high-power energy reservoir" that releases everything at once when needed.

The stored energy formula shows that, at fixed capacitance [[capacidad_electrica]], the most efficient way to increase [[energia_almacenada_en_el_condensador]] is to increase [[diferencia_de_potencial]]. Doubling voltage from 300 V to 600 V would quadruple stored energy for the same 1780 µF capacitance. However, high-voltage electrolytic capacitors are larger, more expensive, and more sensitive, which explains why camera designers seek trade-offs between [[capacidad_electrica]] and [[diferencia_de_potencial]] depending on equipment size.