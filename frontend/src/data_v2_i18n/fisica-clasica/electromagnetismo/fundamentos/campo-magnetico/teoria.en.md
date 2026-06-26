## Conceptual context

Electromagnetism unifies electricity and magnetism under a single theory. Just as the electric field describes the influence of charges on space, the **magnetic field** [[campo_magnetico]] describes the influence of currents and magnets on the surrounding space. The central question is: what quantity quantifies the ability of a current to deflect other moving charges that pass nearby?

Magnetic phenomena have been known since antiquity: natural magnets (lodestone) attract iron and compasses point north. However, the connection with electricity was not discovered until 1820, when Ørsted observed that an electric current deflected a nearby compass needle. That discovery triggered the entire theory of electromagnetism. This leaf belongs to the electromagnetism fundamentals block and is the magnetic complement of the electric field.

Understanding the magnetic field allows predicting the motion of charged particles in plasmas, designing electric motors, and understanding the physics of nuclear magnetic resonance.

## 🟢 Essential level

The **magnetic field** [[campo_magnetico]] at a point in space is a vector quantity describing the ability of that point to exert a force on a moving charge. The fundamental difference from the electric field is that [[campo_magnetico]] **only acts on moving charges**: a charge at rest experiences no magnetic force, even in a region where [[campo_magnetico]] is very intense.

The most direct intuition is to imagine a conductor through which a current [[intensidad_de_corriente]] flows. That current modifies the surrounding space, creating a field [[campo_magnetico]] that points circularly around the wire. If a charge [[carga_electrica]] moving through that space is placed there, it experiences a force [[fuerza_magnetica]] perpendicular to its velocity [[velocidad_de_la_carga]] and to the field [[campo_magnetico]]. That perpendicularity has a key consequence: **the magnetic force never does work**, because it is always perpendicular to the displacement.

The magnitude [[campo_magnetico]] exists even if no test charge is present, just as the electric field exists regardless of whether charges are there to detect it. It is a property of space created by currents and magnets. A compass detects [[campo_magnetico]] because its atoms act as tiny magnets that align with the field: this is the most everyday way to visualize [[campo_magnetico]] without any calculation.

> [!NOTE]
> The direction of [[campo_magnetico]] around a conductor is determined by the **right-hand rule**: if the right thumb points along the current [[intensidad_de_corriente]] direction, the curled fingers indicate the circulation direction of [[campo_magnetico]].

## 🔵 Formal level

The **force that [[campo_magnetico]] exerts on a charge [[carga_electrica]] moving** with velocity [[velocidad_de_la_carga]] at angle θ to the field is:

{{f:fuerza_lorentz_magnetica}}

This formula has three immediate implications: the force is maximum when [[velocidad_de_la_carga]] is perpendicular to [[campo_magnetico]] (θ = 90°), zero when [[velocidad_de_la_carga]] is parallel to [[campo_magnetico]] (θ = 0° or 180°), and always perpendicular to the plane formed by [[velocidad_de_la_carga]] and [[campo_magnetico]].

For the most common source of magnetic field at the basic level, the **infinite straight wire** carrying current [[intensidad_de_corriente]], the field at perpendicular distance [[distancia_al_hilo_conductor]] is computed using the permeability of vacuum [[mu_0]]:

{{f:campo_hilo_recto}}

The field direction is circular around the wire. The magnitude [[campo_magnetico]] decreases linearly with the inverse of [[distancia_al_hilo_conductor]]: doubling the distance halves the field. This 1/r dependence is softer than the 1/r² dependence of the point-charge electric field, a consequence of the different source geometry.

## 🔴 Structural level

The deepest structure of the magnetic field emerges from Maxwell's equations. The field [[campo_magnetico]] has **zero divergence**: magnetic monopoles do not exist, so magnetic field lines are always closed loops, with no beginning or end. This contrasts radically with the electric field, whose lines originate and terminate at charges.

The magnetic field and the electric field are not independent quantities: in special relativity, a purely electric field in one reference frame becomes a combination of electric and magnetic fields in a moving reference frame. This unification is the essence of Maxwell's electromagnetic theory.

> [!WARNING]
> The 1/r dependence of the straight wire applies to **very long straight conductors** in **vacuum**. For coils, toroids, and general distributions, the geometry changes the field shape. A long solenoid produces a nearly uniform field inside and practically zero outside.

The **superposition principle** also applies to the magnetic field: the total field from multiple sources is the vector sum of individual fields. This allows computing the interaction between parallel wires: two wires with currents in the same direction attract; in opposite directions, they repel.

The relationship between magnetic and electric fields is even deeper: a varying [[campo_magnetico]] creates an electric field (Faraday's law), and a varying electric field creates a magnetic field (Maxwell's displacement current). This interdependence is the basis of electromagnetic wave propagation.

The classical model has validity limits: for particles at speeds close to light, the Lorentz force must be combined with relativistic dynamics. Inside matter, [[campo_magnetico]] is modified by the relative permeability of the material.

## Deep physical interpretation

The most counterintuitive property of the magnetic field is that [[fuerza_magnetica]] never does work. This is because it is always perpendicular to [[velocidad_de_la_carga]], so it does not change the kinetic energy of the particle. Consequently, the magnetic field can change the **direction** of a charge's motion but never its **speed**. A particle entering a uniform [[campo_magnetico]] field with velocity perpendicular to the field traces a **circular** trajectory of constant radius.

The **radius of curvature** of that circular trajectory depends on the particle's mass, charge, and velocity. This dependence is the basis of the mass spectrometer: particles with different mass-to-charge ratios curve differently in the same [[campo_magnetico]] field and are separated spatially.

> [!TIP]
> The key difference between electric and magnetic fields: the electric field can accelerate or decelerate charges and acts on charges at rest; [[campo_magnetico]] only deflects moving charges and never changes their energy. To accelerate particles, an electric field is needed; to focus and guide them, [[campo_magnetico]] is used.

## Order of magnitude

Typical scales of [[campo_magnetico]] span many orders of magnitude. Earth's magnetic field at the surface is approximately 5×10⁻⁵ T. A refrigerator magnet has a field of about 10⁻² T at its surface. Conventional laboratory electromagnets reach 1–2 T. Superconducting magnets in particle accelerators exceed 10 T.

A result of [[campo_magnetico]] above 10 T under ordinary laboratory conditions is suspicious. A value of [[campo_magnetico]] of order 10⁻⁷ T computed for a current of 1 A at 10 cm is correct (roughly Earth's field divided by 5); if the result differs by several orders, check the units or the 2π factor in the denominator.

## Personalized resolution method

To compute the field of a long straight wire:

1. Identify the current [[intensidad_de_corriente]] and its direction.
2. Measure the perpendicular distance [[distancia_al_hilo_conductor]] to the evaluation point.
3. Compute the magnitude of [[campo_magnetico]] by entering [[mu_0]], [[intensidad_de_corriente]], and [[distancia_al_hilo_conductor]] into the straight-wire formula.
4. Determine the direction with the right-hand rule.
5. If multiple sources are present, compute each field and add vectorially.

To compute the force on a moving charge:

1. Know [[campo_magnetico]] at the point of interest.
2. Identify the charge [[carga_electrica]], speed [[velocidad_de_la_carga]], and angle θ between [[velocidad_de_la_carga]] and [[campo_magnetico]].
3. Compute the magnitude of [[fuerza_magnetica]] with the Lorentz formula.
4. Determine the direction with the right-hand rule applied to [[carga_electrica]](v × B).

## Special cases and extended example

**Motion in a uniform field perpendicular to velocity**: the particle traces a circle. The radius is directly proportional to mass and speed, and inversely proportional to the charge magnitude and field.

**Motion with velocity not perpendicular to B**: the trajectory is a **helix**. The component perpendicular to [[campo_magnetico]] drives circular motion; the parallel component is unaffected by [[campo_magnetico]] and produces linear advance.

**Magnetic shielding**: there is no exact magnetic equivalent of a Faraday cage, because no magnetic monopoles exist. However, high-relative-permeability materials (such as permalloy) concentrate field lines inside them and divert the field from the surrounding space, acting as magnetic shields.

## Real student questions

**Why does the magnetic force do no work?**

Because [[fuerza_magnetica]] is always perpendicular to [[velocidad_de_la_carga]]. Work is the force component along the displacement; if they are perpendicular, the dot product is zero at every instant.

**What is the difference between [[campo_magnetico]] and [[fuerza_magnetica]]?**

[[campo_magnetico]] is a property of space created by currents and magnets; it exists even if no moving charges are present. [[fuerza_magnetica]] is the actual force on a specific charge [[carga_electrica]] moving with velocity [[velocidad_de_la_carga]] in that field.

**Why are [[campo_magnetico]] field lines always closed?**

Because magnetic monopoles do not exist: there are no free magnetic charges where lines can start or end. [[campo_magnetico]] field lines always form closed loops, exiting the north pole and entering the south pole of any magnet.

## Cross-cutting connections and study paths

The magnetic field connects directly with the [electric field](leaf:fisica-clasica/electromagnetismo/fundamentos/campo-electrico): together they form the electromagnetic field. The natural next step is the [force between conductors](leaf:fisica-clasica/electromagnetismo/fundamentos/fuerzas-electromagneticas) and [Faraday's law](leaf:fisica-clasica/electromagnetismo/magnetismo/induccion-electromagnetica), which describes how a varying [[campo_magnetico]] generates an electric field.

## Final synthesis

The magnetic field [[campo_magnetico]] describes the magnetic influence of currents and magnets on space, acting only on moving charges. It never does work: it only deflects trajectories. Its 1/r dependence for the straight wire distinguishes it from the Coulomb electric field. Mastering [[campo_magnetico]] is essential for understanding motors, generators, magnetic resonance, and particle physics.