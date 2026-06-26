## Ideal model

The ideal model used in this leaf is the **classical monatomic or diatomic ideal gas**. In this approximation, we consider that the system is composed of point particles that experience no mutual forces of attraction or repulsion, and whose physical volume is absolutely negligible compared to the total volume of the container.

Under these premises, the **internal energy** [[energia_interna]] is greatly simplified, since the molecular potential energy due to long-range interactions is completely zero. Thus, the energy of the system is reduced exclusively to the **molecular kinetic energy** of translation (and rotation in the case of diatomic gases), depending solely on the **absolute temperature** of the system.

---

## Hypotheses

To structure this physical model, we assume the following fundamental hypotheses:
- **Point particles**: Molecules do not occupy physical volume, which simplifies the geometry and collisions of the system.
- **Absence of intermolecular forces**: There are no long-range interactions between particles. If these forces existed, the internal energy [[energia_interna]] would vary upon changing the average distance between molecules, making it volume-dependent.
- **Elastic collisions**: All kinetic energy is conserved in molecular collisions, preventing losses toward degrees of freedom not considered.
- **Constant degrees of freedom**: It is assumed that molar coefficients such as [[capacidad_calorifica_a_volumen_constante]] do not vary within the analyzed temperature range.

---

## Quantitative validity domain

The ideal gas approximation presents a validity domain well-defined by low-density physical conditions:
- The model is highly accurate for moderate or low pressures, typically below 10 atmospheres.
- In terms of temperature, it is applicable as long as the thermal energy of the gas is much greater than the intermolecular binding energy. Quantitatively, for gases like helium or nitrogen, this is satisfied in ranges where the absolute temperature is higher than the condensation limit, specifically for T > 5 K or T > 80 K respectively.
- Under these conditions, the deviation of internal energy relative to the real gas is less than 1 %, keeping the same **order of magnitude** as the ideal theoretical prediction.

---

## Model failure signals

The student or researcher can identify that the ideal gas model has failed through the following symptoms observable in the experimental data:
- **Volume dependence**: If during an isothermal expansion (where temperature remains constant) a change in internal energy [[variacion_de_energia_interna]] different from zero is detected, or a heat exchange that does not match the measured work.
- **Variation in heat capacity**: If when measuring the molar coefficient [[capacidad_calorifica_a_volumen_constante]] at high temperatures, its value increases due to the activation of molecular vibrational degrees of freedom that the classical model considers inactive.
- **Critical pressure exceeded**: When the system pressure exceeds the critical threshold of the substance, causing the gas to deviate significantly from the linear proportionality law between [[energia_interna]] and [[temperatura]].

---

## Extended or alternative model

To overcome the limitations of the ideal model, we resort to more robust approximations such as the **van der Waals equation** or the virial expansion. In these extended models, an intermolecular attraction term (cohesion parameter) and a physical exclusion volume of the particles (covolume) are introduced.

Consequently, the real internal energy [[energia_interna]] includes a negative potential contribution that depends inversely on the molar volume. The internal energy change is no longer just a function of temperature, but increases when expanding the real gas at constant temperature due to the work performed against the attractive forces.

> [!NOTE]
> **When to switch to the extended model**: this transition is necessary in industrial applications of high pressure, gas liquefaction, extreme cryogenics, or when working with dense vapors close to their saturation curve.

---

## Operational comparison

Below is a comparison between the behavior of the ideal model and the real model:

| Criterion | Ideal gas model | Real gas model (van der Waals) |
|---|---|---|
| **Dependence on quantities** | Depends only on absolute temperature | Depends on both absolute temperature and the volume of the system |
| **Intermolecular potential energy** | Completely negligible (assumes zero interaction forces) | Considers the attractive cohesion energy as a negative term |
| **Heat capacity** | Constant and independent of temperature | Variable with temperature due to quantum and vibrational effects |
| **Mathematical precision** | High at low pressures and dilute densities | High in ranges of high density and close proximity to the critical point |
| **Calculation complexity** | Low, with simple linear relationships | Medium-high, requiring integrations with respect to volume |