const e=`# Electric Field

## Conceptual context

Electrostatics studies how electric charges at rest interact with each other. The central question this leaf answers is: how can one charge exert a force on another charge at a distance, without direct contact? The answer lies in the concept of the **electric field**: charges modify the space around them, and that modification is what acts on other charges.

Before the field concept, physics described the electrical interaction as an instantaneous action at a distance between two charges. Faraday introduced the idea that the space between charges is not empty but is modified by them, creating what he called *lines of force*. Maxwell formalized this intuition into the vector quantity now called the electric field. This leaf belongs to the electromagnetism fundamentals block and is the immediate step after Coulomb's law.

Understanding the electric field allows solving a type of problem that would otherwise require knowing all surrounding charges simultaneously: computing the field at a point is sufficient to predict the force on any charge placed there.

## 🟢 Essential level

The **electric field** [[E]] at a point in space is a vector quantity describing the ability of that point to exert a force on an electric charge. It is a **property of space**, not of the charge placed there: the field exists even if no test charge is present.

The most intuitive way to understand it is to imagine that every charge modifies the space around it. A positive charge creates a field that points radially outward, as if pushing everything that comes near. A negative charge creates a field that points radially inward, as if attracting everything. The **magnitude of [[E]]** indicates the strength of that influence: the larger [[E]] at a point, the more intense the force experienced by any charge placed there.

> [!NOTE]
> The key difference from the electric force [[F_e]] is that [[E]] does not depend on the test charge [[q_0]] used to measure it. Dividing the force by the charge removes the effect of [[q_0]], leaving a pure property of the field.

## 🔵 Formal level

The **operational definition** of the electric field starts by placing a positive infinitesimal test charge [[q_0]] at a point and measuring the force [[F_e]] it experiences. The field at that point is defined as the quotient of both quantities:

{{f:campo_electrico_definicion}}

This definition ensures that [[E]] is independent of [[q_0]]: doubling the test charge also doubles the force, so the quotient remains constant. The test charge must be infinitesimal so as not to disturb the charge distribution generating the field.

For the most fundamental situation—a single isolated **point charge** [[q_fuente]]—the field can be computed directly using Coulomb's law. The result is an expression that depends on the constant [[k_e]], the source charge [[q_fuente]], and the distance [[r]] to the evaluation point:

{{f:campo_electrico_coulomb}}

The field direction is radial: pointing away from [[q_fuente]] if positive, toward it if negative. The magnitude of [[E]] decreases with the square of distance [[r]], meaning that doubling the distance reduces the field strength by a factor of four.

The **force** that any real charge [[q_0]] experiences at a point where the field equals [[E]] is obtained by rearranging the definition: the force is the product of the field and the charge. This illustrates the power of the field concept: compute [[E]] once, then apply it to any charge of interest.

## 🔴 Structural level

The deepest structure of the electric field lies in the **superposition principle**: the field produced by a system of charges at a point is the vector sum of the individual fields of each charge. This principle, which follows from the linearity of Maxwell's equations, allows arbitrarily complex charge distributions to be handled by decomposing them into elementary contributions.

The inverse-square distance dependence has profound geometric consequences. In three dimensions, the spherical surface surrounding a point charge grows with the square of the radius. The number of field lines crossing that surface remains constant because the enclosed charge does not change. Therefore, the density of field lines—which represents the strength of [[E]]—decreases exactly with the square of the distance. This is the geometric reason for the inverse-square law.

> [!WARNING]
> The inverse-square law applies to **point charges** in **vacuum**. For extended distributions (parallel plates, charged spheres, cylinders), the field can have a very different form: it can be uniform (between parallel plates), decay as 1/r (long cylinder), or be zero inside a charged conducting sphere.

**Field lines** are curves tangent to the field vector at every point. They never cross, originate at positive charges, and terminate at negative charges (or at infinity for open distributions). The local density of lines is proportional to the magnitude of [[E]]: where lines are closest together, the field is strongest.

The electric field is intimately connected to **electric potential**: the field is the negative gradient of the potential. This means [[E]] always points in the direction of steepest decrease of the potential. Equipotential surfaces are always perpendicular to field lines, which allows the field direction to be read from potential maps.

The validity of the classical model has precise limits. At distances of the order of the classical electron radius, approximately 2.8×10⁻¹⁵ m, the point-charge model diverges and must be replaced by quantum electrodynamics. In material media, the field is reduced by the **relative permittivity** of the material, which acts as a shielding factor for the Coulomb interaction.

## Deep physical interpretation

The sign of [[q_fuente]] completely determines the **topology of the generated field**: a positive charge creates a divergent field (lines exit), while a negative charge creates a convergent field (lines enter). This asymmetry is the key to understanding why like charges repel and unlike charges attract: in both cases, the test charge moves along the field it experiences.

[[E]] is always a position-dependent quantity. Speaking of "the electric field of a charge" without specifying the point is physically imprecise. The inverse-square dependence on [[r]] means the field varies dramatically with position: at twice the distance, the strength falls to one quarter.

> [!TIP]
> The field concept resolves the action-at-a-distance problem: the source charge does not act directly on the test charge; it acts on the field at every point in space, and that field acts locally on the test charge. The perturbation propagates at a finite speed (the speed of light), though in electrostatics the stationary approximation is used.

## Order of magnitude

Typical scales of [[E]] span many orders of magnitude. The terrestrial electric field at the surface is around 100 N/C. Inside a hydrogen atom, at the Bohr radius distance (approximately 5×10⁻¹¹ m), the proton's field on the electron is on the order of 500 GN/C, i.e. 5×10¹¹ N/C. In a high-voltage industrial capacitor it can reach values of around 10⁶ N/C.

A result above 10⁷ N/C under ordinary laboratory conditions should be considered physically suspicious: it would indicate a field capable of ionizing any known material. A result below 0.1 N/C in a calculation with microcoulomb charges at centimeter distances should also be checked, as it likely indicates a power-of-ten error.

## Personalized resolution method

To calculate the electric field at a point due to a point charge:

1. Identify [[q_fuente]] and its position.
2. Measure or compute the distance [[r]] between the source charge and the evaluation point.
3. Compute the magnitude of [[E]] using Coulomb's formula, entering [[k_e]], the absolute value of [[q_fuente]], and [[r]] squared.
4. Determine the direction: radially outward if [[q_fuente]] is positive, radially inward if negative.
5. If multiple charges are present, repeat for each and add the resulting fields vectorially.

To compute the force on a real test charge from a known field:

1. Know [[E]] at the point of interest.
2. Multiply [[E]] by the charge [[q_0]] value (with its sign).
3. The direction of [[F_e]] matches [[E]] for a positive charge and reverses for a negative charge.

## Special cases and extended example

**Field inside a conductor in equilibrium**: Inside a macroscopic conductor in electrostatic equilibrium, the electric field is strictly zero. If a field existed, the free charges of the conductor would move until it vanished. This has direct practical consequences: the interior of a conducting enclosure (Faraday cage) is shielded from any external field.

**Field on the axis of symmetry of two equal charges**: For two identical positive charges separated by a fixed distance, there is a point on the axis joining them where the fields of both charges cancel exactly. That zero-field point is at the midpoint of the segment joining them. For opposite-sign charges (dipole), there is no cancellation on the axis and the field has its maximum strength at the midpoint.

**Far field of a dipole**: At distances much larger than the separation between the two dipole charges, the field decays with the cube of the distance, not the square. This difference has fundamental consequences in molecular physics: dipole fields (water, proteins) are much weaker at macroscopic distances than fields from net charges.

## Real student questions

**Why do we say the field exists even without a test charge?**

Because the field is the modification of space caused by the source charge. The test charge only reveals that modification, it does not create it. An experiment with different test charges would always give the same ratio [[F_e]] / [[q_0]], confirming that [[E]] is a property of the point.

**Why can the field magnitude not be negative?**

The magnitude of any vector is always non-negative. [[E]] as a scalar quantity (vector magnitude) cannot be negative. Signs appear when projecting the field onto a direction: the component can be negative, indicating the field points opposite to the chosen direction.

**What is the difference between force [[F_e]] and field [[E]]?**

[[F_e]] is the actual force on a specific charge; it depends on both the field and that charge. [[E]] is a property of space that does not depend on which charge is placed there. The field allows splitting the problem into two stages: compute the environment (the field), then analyze any charge in that environment.

**Why do field lines never cross?**

If they crossed, the field at the crossing point would have two directions simultaneously, contradicting that [[E]] is a well-defined vector at each point. The uniqueness of the field at each point (a consequence of the linearity of Maxwell's equations) guarantees that lines do not cross.

## Cross-cutting connections and study paths

The electric field connects directly to [Coulomb's law](leaf:fisica-clasica/electromagnetismo/fundamentos/ley-de-coulomb), which is its foundation for point charges. The natural next step is the [potential difference](leaf:fisica-clasica/electromagnetismo/electrostatica/potencial-electrico/diferencia-de-potencial), which integrates the field along a path and is more useful for energy and work calculations. [Electric potential energy](leaf:fisica-clasica/electromagnetismo/electrostatica/potencial-electrico/energia-potencial-electrica) completes that conceptual triangle.

Toward more advanced physics, the field concept generalizes to Maxwell's theory, where electric and magnetic fields couple to form electromagnetic waves. The field is the fundamental object of the theory: not the charges, but the disturbances they generate in space.

## Final synthesis

The electric field [[E]] is the vector quantity that describes the electrical influence of charges on the surrounding space, regardless of whether another charge is present. Its magnitude indicates the force per unit test charge, and it decays with the square of distance for point distributions. Mastering this concept is the entry key to electromagnetism: without the field there is no potential, without potential there is no capacitor, and without a capacitor there is no electronics.
`;export{e as default};
