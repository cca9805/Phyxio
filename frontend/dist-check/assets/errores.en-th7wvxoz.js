const e=`# Frequent errors in the study of capacitors

## Conceptual errors

### Error 1: Believing capacitance [[C]] changes when voltage [[V]] changes

**Why it seems correct**

The student observes that as voltage increases, stored charge [[Q]] also increases. By analogy with Ohm's law (where current changes with both voltage and resistance), they conclude that capacitance must also change, because "something must change in the capacitor" to store more charge.

**Why it is incorrect**

Capacitance [[C]] is a geometric and material property of the capacitor: it depends on plate area, separation, and dielectric permittivity. None of those factors change when the applied voltage changes (in the ideal model). The only thing that changes is [[Q]], which increases proportionally with [[V]] for constant [[C]].

**Detection signal**

The student calculates the ratio [[Q]]/[[V]] for two different voltages and obtains different values, then claims [[C]] changed. If the values obtained are identical (as they should be), the error is absent.

**Conceptual correction**

Capacitance [[C]] is constant for a given capacitor in the linear regime. [[Q]] varies with [[V]], but the proportionality coefficient [[C]] is fixed. [[C]] only changes if the capacitor is physically modified (area, separation, dielectric).

**Mini contrast example**

A 10 µF capacitor is first charged to 5 V (resulting charge: 50 µC) and then to 10 V (resulting charge: 100 µC). If the student applies the erroneous idea, they would compute the charge-to-voltage ratio in both cases and get 10 µF each time — the same capacitance, which disproves the belief that it changed.

---

### Error 2: Assuming both plates accumulate positive charge

**Why it seems correct**

The definition of [[C]] uses [[Q]] as a positive value. The student interprets "the capacitor has charge Q" as applying to its entire structure, without distinguishing between the two plates. Also, the battery "injects" charge into the circuit, suggesting that all charge goes uniformly into the capacitor.

**Why it is incorrect**

In a capacitor, one plate accumulates +Q and the opposite plate accumulates −Q. The net charge of the complete capacitor is always zero. The battery does not "create" charge: it simply transfers it from one plate to the other through the external circuit. The electric field between the plates exists precisely because the charges are opposite.

**Detection signal**

The student calculates the total charge of the capacitor as 2Q instead of recognizing that net charge is zero. Or they apply the force between charges assuming both are positive and obtain repulsion between plates instead of attraction.

**Conceptual correction**

One plate has charge +Q and the other has −Q. The magnitude Q (positive) describes how much charge has been separated, not the total charge. The attraction between opposite charges is precisely what maintains the electric field and stores the energy.

**Mini contrast example**

If both plates had +Q, they would repel each other and there would be no concentrated electric field between them. The capacitor could not store energy — which contradicts its observable operation in any circuit.

## Model errors

### Error 3: Applying the parallel-plate formula outside the uniform field regime

**Why it seems correct**

The formula for [[C_plana]] in terms of [[epsilon]], area, and separation seems a universal expression for any parallel-plate capacitor. The student applies it for geometries where separation d is comparable to the lateral dimensions of the plates, because the formula does not include any explicit condition about that ratio.

**Why it is incorrect**

The formula is only valid when \\(d \\ll \\sqrt{A}\\), the condition that guarantees a uniform electric field between the plates. When d is not negligible compared to plate dimensions, **fringe effects** appear: field lines curve at the edges and actual capacitance is larger than calculated with the formula. For non-planar geometries (cylindrical, spherical), different formulas apply.

**Detection signal**

The student works with a capacitor where d is only 5 or 10 times smaller than the plate length (not 100 times), and obtains a result that differs from the experimentally measured value by more than 5–10%.

**Conceptual correction**

Before applying the [[C_plana]] formula with [[epsilon]], area, and separation, verify that d is at least 10–20 times smaller than the smaller lateral dimension of the plate. If not, the formula underestimates actual capacitance and a model with fringe correction or numerical simulation must be used.

**Mini contrast example**

Square plates of 1 cm side separated by 5 mm: the separation-to-side ratio is 0.5, far from the uniform-field regime. Applying the parallel-plate formula with ε₀, area, and separation gives approximately 17.7 pF. Experimental measurements at these proportions give values up to 30% higher due to fringe effects.

## Mathematical errors

### Error 4: Calculating energy without the 1/2 factor

**Why it seems correct**

When working with other quadratic quantities — kinetic energy, which also carries a 1/2 factor and a squared velocity, or gravitational potential energy — the student vaguely remembers that "energy has a square" but forgets or ignores the 1/2 factor, which may seem arbitrary or decorative.

**Why it is incorrect**

The 1/2 factor in [[E_cap]] is not optional: it arises from integrating charging work from zero voltage to the final value. During charging, voltage grows progressively; work at each instant depends on accumulated charge divided by [[C]], and the integral gives [[Q]]²/(2·[[C]]). Omitting the 1/2 doubles the calculated energy.

**Detection signal**

Calculating energy for a 100 µF capacitor charged to 10 V: applying the formula with the 1/2 factor gives 5 mJ. If the student obtains 10 mJ, they have omitted the factor.

**Conceptual correction**

The correct formula for [[E_cap]] includes the 1/2 factor multiplying [[C]] by [[V]]². Three equivalent expressions exist: using [[C]] and [[V]], using [[Q]] and [[V]], or using [[Q]] and [[C]]. The 1/2 factor reflects that average voltage during charging is half the final value.

**Mini contrast example**

A 1000 µF capacitor at 230 V: applying the formula with the 1/2 factor gives approximately 26.45 J. Without the factor the result is 52.9 J. The difference is a factor of 2: in an energy storage application this represents double or half the available energy.

## Interpretation errors

### Error 5: Interpreting that capacitor energy "is in the charges" rather than "in the field"

**Why it seems correct**

Energy was stored because the battery moved charges from one plate to the other. The student associates stored energy with the movement of those charges and concludes that "energy is in the accumulated charges on the plates." This interpretation seems consistent because when discharging, charges move and release energy.

**Why it is incorrect**

Energy does not reside in the charges but in the **electric field** between the plates. Volumetric energy density is proportional to [[epsilon]] and to the square of the electric field, distributed in the space between the plates. If the plates are separated with the charged disconnected capacitor, energy [[E_cap]] increases even though no charge has been added or removed — because the electric field now occupies a larger volume.

**Detection signal**

The student cannot explain why inserting a dielectric in a disconnected capacitor reduces voltage [[V]] (and energy) without any charge escaping. The "energy in the field" perspective explains it directly: the dielectric reduces the electric field, which reduces the volumetric energy density proportional to [[epsilon]] and the squared field.

**Conceptual correction**

Energy is stored in the electric field between the plates, with a volumetric density proportional to [[epsilon]] and the square of the electric field (in J/m³). Charges on the plates are the source of the field, but energy is distributed in space, not localized on the conducting surfaces. This perspective is fundamental for understanding capacitors with dielectrics and electromagnetic waves.

**Mini contrast example**

If energy were in the charges, inserting a dielectric without moving any charge would leave energy unchanged. However, inserting a dielectric with εᵣ = 4 in a disconnected capacitor reduces voltage from V to V/4 and energy from E to E/4. The electric field was reduced by polarization, proving that energy resided in the field, not in the charges.

## Quick self-control rule

Before submitting any capacitor exercise, systematically verify:

1. **1/2 factor in energy**: Does the [[E_cap]] formula include the 1/2 factor multiplying [[C]] by [[V]]² or [[Q]] by [[V]]? If the factor is absent, there is a definite error.
2. **Capacitance units**: Has µF → F (÷10⁶), nF → F (÷10⁹), or pF → F (÷10¹²) been converted before computing? A result in farads for an ordinary electronic component indicates a prefix error.
3. **Consistency between [[Q]], [[C]] and [[V]]**: does the product of [[C]] by [[V]] equal [[Q]]? If not, one of the three is incorrectly calculated or entered.
4. **Sign of C**: Is the calculated capacitance positive? If negative, Q or V have been inverted.
5. **Absolute vs relative permittivity**: if using the parallel-plate formula, has εᵣ been multiplied by ε₀ = 8.854×10⁻¹² F/m? A result of C in farads equal to εᵣ·A/d without the ε₀ factor is incorrect by a factor of 10¹².
`;export{e as default};
