const e=`# Potential Difference

## Conceptual context

Potential difference is one of the central quantities in electrostatics and, by extension, throughout electrical engineering. Its importance lies in the fact that it **allows quantifying the energetic effect of the electric field without knowing the path** a charge takes between two points. This path-independence follows directly from the conservative nature of the electric field.

Historically, the concept of potential difference arose as a generalisation of mechanical work. Once it was established that the work done by the electric force moving a charge between two points was path-independent, it became possible to define a scalar function—the electric potential—whose difference between two points gave that work per unit charge directly.

This leaf focuses on the central physical question: **how much work per unit charge is needed to move a charge between two points of the electric field?** The answer makes potential difference the fundamental tool for analysing circuits, capacitors, and the motion of charged particles.

## 🟢 Essential level

Imagine carrying a ball uphill: you need to do work. If you release it, gravity carries it downhill without any push. The electric field acts analogously with charges: between two points there is always an "energy slope" that facilitates motion in one direction and opposes it in the other.

The potential difference [[V_AB]] between two points A and B measures exactly that "slope" per unit charge: how much work the field does when moving a positive charge from A to B. If [[V_AB]] is positive, the field drives the charge from A to B (A is "uphill" in the energy landscape). If [[V_AB]] is negative, the field opposes that motion.

An immediate consequence: if you move a charge along a surface where the potential is constant—an **equipotential surface**—the field does no work. Electric field lines are always perpendicular to equipotential surfaces.

> [!NOTE]
> The voltage displayed on your phone charger (5 V, 12 V, 20 V) is exactly a potential difference. It indicates how much energy per coulomb of charge that charger can deliver to the device's circuit.

## 🔵 Formal level

The potential difference between A and B is defined as the work done by the electric field per unit positive charge:

{{f:diferencia_potencial_trabajo}}

where [[V_AB]] is the potential difference in volts, [[W_AB]] is the work done by the electric force in joules, and [[q]] is the electric charge in coulombs.

The volt is the SI unit for potential difference, equivalent to one joule per coulomb (J·C⁻¹). This definition shows that [[V_AB]] does not depend on [[q]]: it is a property of the field at those two points, not of the moving charge.

When the field is **uniform**—as between the plates of a flat capacitor—the potential difference is computed directly as:

{{f:diferencia_potencial_campo_uniforme}}

where [[E_unif]] is the field magnitude in N/C and [[d_AB]] is the projection of the displacement A→B onto the field direction in metres.

**Dimensionally**, the volt decomposes into J·C⁻¹, equivalent to N·m·C⁻¹ and to kg·m²·s⁻³·A⁻¹. The dimensional consistency of the second formula: the product N/C times metres yields N·m/C, that is J/C, which is precisely the volt ✓.

> [!TIP]
> Potential difference has a sign: reversing the subscript order changes the sign, so [[V_AB]] and [[V_BA]] are opposites. Common convention: the first subscript is the point of arrival relative to the point of departure.

## 🔴 Structural level

Potential difference is a direct consequence of the **conservative character of the electric field**. A field is conservative if the work it does depends only on the initial and final points, not on the path. This property allows a scalar function—the electric potential—to be defined at every point of space, so that:

The potential difference [[V_AB]] equals the difference of the absolute potentials at A and B. The absolute potential requires choosing a reference point with zero potential (usually infinity or ground), but the potential difference is independent of that choice.

In the **differential form**, the electric field is the negative gradient of the potential: the field points in the direction of steepest decrease of potential. This implies that the field is stronger where equipotential surfaces are closer together.

The relation between [[E_unif]] and [[V_AB]] in uniform fields reflects this idea: the field is larger when the same potential difference is compressed into a shorter distance [[d_AB]]. This principle explains why small capacitors with the same voltage have stronger fields than large ones, with direct consequences for dielectric breakdown.

> [!WARNING]
> The uniform-field formula (proportionality between [[V_AB]], [[E_unif]] and [[d_AB]]) is only valid for uniform fields. Near a point charge the field is non-uniform and the potential difference requires integration.

The **path-invariance of potential difference** has a profound consequence: along any closed path returning to the starting point, the total work done by the electric field is zero. This is the circulation theorem of the electrostatic field and is equivalent to stating that no electrostatic energy source can be created by recirculating a charge.

## Deep physical interpretation

The electric potential at a point in space is a kind of "stored energy per unit charge". A positive charge placed at a high-potential point has high potential energy; when released, the field accelerates it towards lower-potential points, converting potential energy into kinetic energy.

Potential difference [[V_AB]] measures exactly how much potential energy per unit charge can be converted to work in going from A to B. In electric circuits, this is the foundation of all electrical engineering: a battery maintains a potential difference between its terminals, and that difference drives electrons around the circuit.

> [!NOTE]
> Equipotential surfaces are analogous to contour lines on a topographic map. The electric field always points "downhill", perpendicular to equipotentials, just as gravitational force points in the direction of steepest descent.

## Order of magnitude

Potential differences of practical interest span more than fifteen orders of magnitude: from microvolts in neural signals (10⁻⁶ V) to megavolts in lightning and high-voltage transformers (10⁶ V). In consumer electronics, typical voltages are 1.5 V (battery), 5 V (USB), 12 V (car), 230 V (mains supply).

The electron-volt (eV), widely used in particle physics and electronics, is the energy gained by an electron crossing a potential difference of 1 V: it is equivalent to 1.6×10⁻¹⁹ J. An electron accelerated through 100 V gains 100 eV, equivalent to 1.6×10⁻¹⁷ J of kinetic energy.

## Personalized resolution method

To compute [[V_AB]] or [[W_AB]] systematically:

1. **Identify points A and B**: specify the starting and ending points. Subscript order determines the sign.
2. **Determine the field type**: is it uniform (flat capacitor) or non-uniform (point charge, continuous distribution)?
3. **Choose the appropriate formula**: uniform field → multiply [[E_unif]] by [[d_AB]]; general case → compute work or use absolute potentials.
4. **Calculate [[d_AB]]**: if the field is uniform, project the displacement onto the field direction.
5. **Obtain [[V_AB]]**, then compute work [[W_AB]] by multiplying [[q]] by [[V_AB]] if needed.
6. **Check the sign**: does the field facilitate or oppose the motion? The sign of [[V_AB]] must be consistent with the geometry.

## Special cases and extended example

**Motion perpendicular to the field**: if the charge moves perpendicularly to the electric field, the projection [[d_AB]] is zero and [[V_AB]] is zero. The charge moves along an equipotential surface and the field does no work. This explains why charges in a conductor distribute on the surface: any redistribution creating interior potential differences would drive currents until they vanish.

**Negative charge in a field**: if [[V_AB]] is positive and [[q]] is negative, [[W_AB]] is negative: the field opposes the negative charge moving from A to B (in the field direction). The negative charge would be accelerated moving from B to A, opposite to the field.

**Flat capacitor**: a capacitor with plates separated by 2 mm and a field of 10⁴ N/C has a potential difference of 20 V (product of 10⁴ by 2×10⁻³). If the separation is doubled with the same field, the potential difference doubles to 40 V.

## Real student questions

**Why does the work of the electric field not depend on the path?**

Because the electric field in electrostatics derives from a scalar potential: it is the negative gradient of the potential. Mathematically, the line integral of a gradient between two points depends only on the values of the function at those points, not on the path. This property is exactly the definition of a conservative field.

**Is potential difference the same as voltage?**

Yes. "Voltage" and "potential difference" are equivalent terms in practice. "Voltage" is used more in electrical engineering and circuits; "potential difference" in fundamental physics. Both are measured in volts (V).

**Why does the electric field point from higher to lower potential?**

Because the field is the negative gradient of the potential. The gradient points in the direction of maximum increase of the function; the field, being its negative, points in the direction of maximum decrease. A free positive charge moves in the field direction and hence towards lower potentials, gaining kinetic energy and losing potential energy.

**Can there be a potential difference without a charge between the two points?**

Yes. Potential difference is a property of the field at those two points, not of any charges that may be present between them. The field—and hence the potential—exists even without test charges.

## Cross-cutting connections and study paths

Potential difference connects backwards to Coulomb's law (from which the potential of a point charge is derived) and to Gauss's law (which determines the field from which the potential is computed). Looking ahead, it is the foundation of capacitor analysis (leaf: condensadores), electric potential energy, and all electrical engineering through Ohm's law and Kirchhoff's laws.

In modern physics, the generalised potential difference appears in quantum electrodynamics as the scalar component of the electromagnetic four-potential, linking this classical quantity to the fundamental structure of the electromagnetic interaction.

## Final synthesis

Potential difference [[V_AB]] quantifies the work of the electric field per unit charge when moving a charge from A to B, independently of the path because of the conservative nature of the field. In a uniform field, [[V_AB]] is proportional to [[E_unif]] and [[d_AB]], making the geometry of the problem the key factor. The work on any specific charge is obtained by multiplying [[V_AB]] by [[q]], connecting the field property to the measurable dynamical effect.
`;export{e as default};
