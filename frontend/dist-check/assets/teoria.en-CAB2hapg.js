const e=`# Electric Field Lines

## Conceptual context

The electric field [[E]] is a vector quantity: at each point in space it has a magnitude, direction, and sense. Writing a number at each point is insufficient to communicate that information quickly and intuitively. Field lines are the graphical solution: a family of oriented curves that simultaneously encode the direction, sense, and relative intensity of the field throughout space.

This representation was systematised by Michael Faraday in the first half of the nineteenth century, before the mathematical formalism of vector fields existed. Faraday conceived the space around charges as filled with "tubes of force" transmitting electric action from one point to another. That intuitive picture proved to be physically correct and mathematically powerful.

Field lines are not a pedagogical simplification: they are the basis of Gauss's law, the concept of electric flux, and the geometric interpretation of electric potential. Mastering their reading and interpretation is a prerequisite for understanding advanced electrostatics, electrodynamics, and the behaviour of capacitors.

## 🟢 Essential level

Imagine placing a positive test charge at a point in space where there is an electric field. That charge feels a force in a definite direction. If instead of holding it still you let it move freely following the force at each instant, it traces a continuous curve. That curve is a **field line**.

The most important rule is that of **density**: where lines are close together, the field [[E]] is strong; where they are far apart, the field is weak. Near a point charge the lines crowd together because the field grows strongly as one approaches. Far away they spread apart because the field decays.

Two rules complete the picture: lines **originate from positive charges** and **terminate at negative charges**. And they never intersect, because at the intersection point the field would have two directions simultaneously, which is impossible.

> [!NOTE]
> Field lines are not the actual trajectory of any charge. They coincide with the trajectory only when the field is straight and the initial velocity of the charge is tangent to the line. In curved fields, inertia deflects the trajectory.

## 🔵 Formal level

The precise definition of a field line is: **a curve whose tangent at every point is parallel to the vector [[E]] at that point**. Mathematically, if the curve is parametrised as r(s), the condition is that dr/ds is parallel to E(r).

The number of lines leaving a charge [[q_fuente]] is proportional to the absolute value of that charge. This convention ensures that the **line density** [[rho_lineas]] is proportional to the field magnitude:

{{f:densidad_lineas_campo}}

where the proportionality constant k depends on the total number of lines chosen for the reference charge. This relationship allows one to "read" the magnitude of [[E]] from a diagram without any calculation: simply count the lines per unit area perpendicular to the field.

Electric flux [[phi_E]] formalises the idea of "how many lines cross a surface". For a flat surface in a uniform field, with [[angulo_campo]] the angle between [[E]] and the normal:

{{f:flujo_electrico_superficie}}

The cosine factor is essential: if the field is perpendicular to the surface (zero angle), all lines cross it and flux is maximum. If the field is tangential (ninety-degree angle), no line crosses it and flux is zero. This geometry is the core of Gauss’s law.

**Gauss’s law** connects total flux with the charge generating the lines. For a closed surface enclosing [[q_fuente]]:

{{f:carga_fuente_gauss}}

This relation quantifies the convention: the number of lines leaving [[q_fuente]] is proportional to its absolute value.

> [!TIP]
> To compute the flux, first identify the angle between [[E]] and the **outward normal** to the surface, not the inward normal. An error in this sign reverses the sign of the flux.

## 🔴 Structural level

Field lines satisfy three topological properties that follow directly from Maxwell's equations in the static regime:

1. **They originate and terminate at charges**: in the absence of charges, lines cannot begin or end in the vacuum. If a region without charges shows lines originating inside it, there is an error in the diagram.
2. **They never intersect**: the uniqueness of the solution of the Laplace and Poisson equations guarantees that [[E]] has a single value at each regular point in space. Two intersecting lines would imply two distinct values of [[E]] at that point.
3. **They close at infinity or at the opposite charge**: for a single positive charge, lines go to infinity. For a dipole, all lines originate at the positive charge and terminate at the negative one.

The **architecture of the lines** reveals the field geometry immediately. For a point charge they are radial and their separation grows with the square of the distance. For an ideal capacitor they are parallel and equidistant (uniform field) and curve at the edges. For a dipole they draw a toroidal pattern reflecting the vector superposition of both charges.

Gauss's law states that the net flux [[phi_E]] through any closed surface is proportional to the enclosed charge: **the net number of lines leaving is proportional to the interior charge**. If the same number enters and exits, the net charge is zero.

> [!WARNING]
> In time-varying fields (electrodynamics), [[E]] has an induced component that generates lines **closing upon themselves** (not originating or terminating at charges). In that regime, the static interpretation of field lines is incomplete and must be complemented by the magnetic field (field B) lines and wave propagation.

**Edge effects** are a direct consequence of symmetry breaking. At the ends of a capacitor, field lines curve outward because there is no charge to "guide" them in that direction. This effect is quantifiable and produces an effective capacitance larger than that of the ideal infinite-plate model.

## Deep physical interpretation

Line density is not merely a visual device: it is the geometric projection of Coulomb's law onto space. A point charge emits radial lines in all directions. As one moves away, those lines must cover increasingly large spherical surfaces. The area of a sphere grows with the square of the radius, so line density falls with the square of the distance — exactly as the field does. The three-dimensional geometry of space is the deep cause of the 1/r² law.

When two charges of opposite sign are present, their fields superpose vectorially. The result is that the lines curve toward the opposite-sign charge foci. The region between the charges, where the fields of both add in the same direction, shows the densest lines and therefore the strongest field. This concentration of lines in the intermediate zone is the geometric visualisation of Coulomb attraction.

## Order of magnitude

The atmospheric electric field on a clear day is approximately 100 V/m, with lines pointing toward the ground. During a thunderstorm the field can reach values of order 10 kV/m, and dielectric breakdown of air occurs around 3 MV/m. Near a conductor with a typical surface charge of 10 nC/m², the field immediately outside is around 1000 V/m.

To detect absurd results: if a calculation for a laboratory charge (of order microcoulombs) at one centimetre distance gives a field below 1 kV/m, there is an error. The Coulomb field at that distance exceeds 100 MV/m. Likewise, a field of 10¹⁵ V/m for a normal charge indicates an order-of-magnitude error.

## Personalized resolution method

To draw or interpret a field line diagram:

1. **Identify the source charges** and their sign. Lines originate at positive charges and terminate at negative ones.
2. **Assign a number of lines proportional** to the absolute value of each charge. If one charge is twice as large, it must have twice as many lines.
3. **Draw lines leaving radially** from each positive charge (and entering radially into negative ones) for small distances.
4. **Curve the lines** so they are tangent to the resultant field at each point, using vector superposition for multiple charges.
5. **Verify that they do not intersect** and that the number of lines leaving each closed surface is consistent with the enclosed charge.
6. **Read the density**: count the lines per unit perpendicular length in two regions to compare relative magnitudes of [[E]].

## Special cases and extended example

**Uniform field between parallel plates.** Between the plates of an ideal capacitor, lines are straight, parallel, and equidistant. This means [[E]] is constant in magnitude, direction, and sense. Line density is the same throughout the interior. This is the only practical case where line density is literally uniform over an extended region.

**Electric dipole.** With a positive and a negative charge of equal magnitude, all lines from the positive charge terminate at the negative one. In the equatorial plane the field points opposite to the dipole moment; on the axis it points in the same direction.

**Equilibrium point between two same-sign charges.** There exists a point where [[E]] is zero: the contributions cancel. Lines curve around that point without passing through it. A test charge there feels no net force.

## Real student questions

**Are field lines real or just a representation?** They are a geometric representation, not physical objects. The field [[E]] exists at every point in space and lines are a way to visualise it. There is no fixed number of lines; we choose how many to draw to make the diagram informative.

**Why does a positive charge not always follow the field line if the force on it is proportional to [[E]]?** For a positive charge, the force is parallel to [[E]] and therefore tangent to the line at that instant. However, if the charge has an initial velocity not tangent to the line, its inertia deflects it and the resulting trajectory does not coincide with the field line.

**What happens at a point where the field is zero?** At that point there is no field line. Lines approach the point but curve away without passing through it. An example is the neutral point between two equal same-sign charges.

**How do I interpret field lines in a charge-free region?** In that space the lines pass through without originating or terminating. The spacing between them indicates the variation of [[E]]: if they converge while crossing the region, the field grows; if they diverge, the field decreases.

## Cross-cutting connections and study paths

Field lines are the visual starting point for **electric flux** and **Gauss's law**, which allows computing fields with high symmetry far more efficiently than integrating differential contributions. See the Gauss's law leaf.

The line density between capacitor plates is directly related to **capacitance** and **stored energy**. See the capacitors and dielectrics leafs.

In electrodynamics, the lines of the electric field and those of the magnetic field form coupled patterns in **electromagnetic waves**. The [[E]] lines are transverse to the propagation direction and perpendicular to the magnetic field lines (field B).

## Final synthesis

Electric field lines are the geometric representation of the vector [[E]]: their tangent indicates the direction and sense of the field, their density [[rho_lineas]] is proportional to the magnitude, they originate at positive charges and terminate at negative ones, and they never intersect. Flux [[phi_E]] formalises quantitatively the idea of "lines crossing a surface", and Gauss's law converts that line count into a precise computational tool.
`;export{e as default};
