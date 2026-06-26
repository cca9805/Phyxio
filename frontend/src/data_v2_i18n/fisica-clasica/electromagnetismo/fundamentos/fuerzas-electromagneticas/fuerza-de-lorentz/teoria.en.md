## Conceptual context

The Lorentz force is the fundamental force experienced by any charged particle in the presence of electromagnetic fields. It is the bridge between electrostatics (forces on stationary charges) and electrodynamics (forces on moving charges): it unifies in a single expression the electric force and the magnetic force.

In Phyxio's physics tree, the Lorentz force is placed after electric charge, the electric field and the magnetic field, because it is the synthesis of all of them. Understanding the Lorentz force means understanding how particles respond to the fields surrounding them: it is the equation that closes the cycle between "creating fields" and "interacting with them".

The Lorentz force also underpins countless devices: the cathode-ray tube, the mass spectrometer, the cyclotron, the electric motor, the loudspeaker, auroras boreales and particle accelerators all operate thanks to this single law.

## 🟢 Essential level

A particle with charge [[carga_electrica]] placed in a field experiences an action on it. When the source is an electrostatic origin, this action points along the field direction for positive [[carga_electrica]] and opposite for negative [[carga_electrica]]; it acts on the particle whether it is at rest or moving.

If the particle is also moving, the field [[campo_magnetico]] exerts an additional action perpendicular to both the velocity [[velocidad_de_la_particula]] and the field itself. This action cannot accelerate or decelerate the particle: it only curves its trajectory.

The Lorentz force [[fuerza_de_lorentz]] is the sum of both actions. For positive [[carga_electrica]] moving perpendicular to [[campo_magnetico]], the action due to [[campo_magnetico]] points in the third orthogonal direction (right-hand rule). For negative [[carga_electrica]], the direction reverses.

The most important point: the action of [[campo_magnetico]] on the particle **never does work** because it is always perpendicular to the motion. The field [[campo_magnetico]] can only change the direction of [[velocidad_de_la_particula]], never its magnitude.

## 🔵 Formal level

The complete expression of the Lorentz force combines both components. For the magnitude of the magnetic component:

{{f:fuerza_magnetica_modulo}}

Here [[fuerza_magnetica]] is the magnetic force magnitude, [[carga_electrica]] is the particle charge, [[velocidad_de_la_particula]] is its speed, [[campo_magnetico]] is the magnetic field magnitude, and [[sin_theta]] is the sine of the angle between the velocity vector and the magnetic field vector.

For the total force including the electric component [[fuerza_electrica]] and the magnetic component [[fuerza_magnetica]]:

{{f:fuerza_lorentz_total}}

The electric component [[fuerza_electrica]] depends only on [[carga_electrica]] and the electric field [[campo_electrico]]; it does not depend on [[velocidad_de_la_particula]]. The magnetic component does depend on [[velocidad_de_la_particula]] and is zero for particles at rest. This difference is the key conceptual insight of all electrodynamics.

Breakdown of the formula:
- If [[velocidad_de_la_particula]] approaches zero, [[fuerza_de_lorentz]] reduces to the pure electric force: proportional to [[carga_electrica]] and [[campo_electrico]].
- If [[campo_electrico]] is zero, [[fuerza_de_lorentz]] is purely magnetic: proportional to [[carga_electrica]], [[velocidad_de_la_particula]], [[campo_magnetico]] and [[sin_theta]].
- If [[sin_theta]] is zero (velocity parallel to field), [[fuerza_magnetica]] is zero even if the particle moves fast.
- If [[sin_theta]] is 1 (velocity perpendicular to field), [[fuerza_magnetica]] is maximum for that [[velocidad_de_la_particula]] and [[campo_magnetico]].

## 🔴 Structural level

The Lorentz force has a deep asymmetry between its electric and magnetic components that is not obvious from the scalar formula: the electric component is **conservative** (it can do work; the work depends only on start and end points) while the magnetic component is **non-conservative but non-dissipative** (it does no work in any displacement).

This asymmetry has concrete consequences. In a uniform purely magnetic field, a particle with [[velocidad_de_la_particula]] perpendicular to [[campo_magnetico]] describes a circle whose radius is proportional to the particle's linear momentum and inversely proportional to [[carga_electrica]] and [[campo_magnetico]]. This is the principle of the mass spectrometer: particles with different charge-to-mass ratios trace different radii under the same [[campo_magnetico]], allowing identification. In the cyclotron, the electric component accelerates the particle and the magnetic one keeps it on a circular path.

> [!WARNING]
> The magnetic force is perpendicular to [[velocidad_de_la_particula]] at **every instant**, not just initially. This means that even though the trajectory is curved, at each point the force vector points toward the local centre of curvature, continuously changing direction. Calculating [[fuerza_magnetica]] only at the initial instant and assuming its direction does not change is one of the most serious errors.

If [[velocidad_de_la_particula]] is not perpendicular to [[campo_magnetico]], the particle describes a **helix**: the component of [[velocidad_de_la_particula]] parallel to [[campo_magnetico]] experiences no magnetic force and remains constant, while the perpendicular component describes a circle. The result is a helical trajectory with axis parallel to [[campo_magnetico]].

> [!TIP]
> To solve trajectory problems in a magnetic field: decompose [[velocidad_de_la_particula]] into components parallel and perpendicular to [[campo_magnetico]]. The parallel component determines the helix pitch; the perpendicular component determines the circle radius. Their geometric combination gives the full trajectory.

The Lorentz force is also the basis of **Wien's velocity selector**: when a beam of particles traverses a region with [[campo_electrico]] and [[campo_magnetico]] perpendicular to each other and to the beam, only particles with a specific velocity at which the electric and magnetic forces cancel exactly pass through in a straight line. All others are deflected. This device selects particles by velocity regardless of their charge.

## Deep physical interpretation

The Lorentz force has an internal coherence that is not obvious: in special relativity, the electric and magnetic fields are not separate entities but two aspects of the same electromagnetic field tensor. An observer at rest sees a purely electric field; the same field observed from a moving frame includes a magnetic component. The Lorentz force is the covariant expression of this reality: when transforming between inertial frames, [[fuerza_electrica]] and [[fuerza_magnetica]] mix in a controlled way.

In operational terms, this means there is no absolute distinction between "electric force" and "magnetic force": the distinction depends on the observer's reference frame. What is magnetic force for one observer may be partially electric force for another. The total Lorentz force [[fuerza_de_lorentz]] is the quantity all observers agree on in its dynamical effect on the particle.

> [!NOTE]
> The instantaneous power delivered by the magnetic force to the particle is always zero because [[fuerza_magnetica]] is perpendicular to [[velocidad_de_la_particula]]. This means only the electric field can change the particle's kinetic energy. An accelerator that uses only magnetic fields to guide the particle necessarily needs electric fields to accelerate it.

## Order of magnitude

The force on an electron (charge approximately 1.6×10⁻¹⁹ C) moving at 10⁶ m/s in a magnetic field of 0.1 T with [[sin_theta]] equal to 1 is of the order of 1.6×10⁻¹⁴ N. This force, though tiny on a macroscopic scale, is enormous compared with the electron's weight (approximately 9×10⁻³⁰ N): the ratio is about 10¹⁵, explaining why magnetic fields completely dominate the motion of free electrons.

For a macroscopic charged water drop carrying 1 µC moving at 1 m/s in Earth's field (5×10⁻⁵ T), the magnetic force is of order 5×10⁻¹¹ N: negligible compared to its weight (about 10⁻⁶ N). Magnetic effects on everyday slowly-moving charged objects are irrelevant.

## Personalized resolution method

Sequence for solving Lorentz force problems:

1. **Identify which fields are present**: determine whether [[campo_electrico]], [[campo_magnetico]] or both exist.
2. **Determine [[sin_theta]]**: read the problem geometry; if [[velocidad_de_la_particula]] is perpendicular to [[campo_magnetico]], [[sin_theta]] is 1; if parallel, it is 0.
3. **Calculate [[fuerza_magnetica]]**: use the magnetic magnitude formula with the identified values.
4. **Calculate [[fuerza_electrica]]**: if there is an electric field, add the electric component.
5. **Combine vectorially**: the direction of [[fuerza_magnetica]] is perpendicular to the plane of [[velocidad_de_la_particula]] and [[campo_magnetico]]; that of [[fuerza_electrica]] is parallel to [[campo_electrico]].
6. **Verify coherence**: if [[velocidad_de_la_particula]] is parallel to [[campo_magnetico]], the total force must be purely electric.

## Special cases and extended example

**Case 1 — Circular motion**: Particle with [[velocidad_de_la_particula]] perpendicular to a uniform [[campo_magnetico]] and no electric field. The magnetic force is always perpendicular to [[velocidad_de_la_particula]] and acts as centripetal force. The particle describes a circle with radius depending on the linear momentum divided by the product of [[carga_electrica]] and [[campo_magnetico]]. Doubling [[campo_magnetico]] halves the radius.

**Case 2 — Helical trajectory**: Particle with [[velocidad_de_la_particula]] not perpendicular to [[campo_magnetico]]. The component of [[velocidad_de_la_particula]] parallel to [[campo_magnetico]] experiences no force; the perpendicular component describes a circle. The combination produces a helix whose axis is parallel to [[campo_magnetico]].

**Case 3 — Wien velocity selector**: [[campo_electrico]] and [[campo_magnetico]] are arranged perpendicular to each other and to the beam direction. Only particles with [[velocidad_de_la_particula]] such that the electric and magnetic forces cancel pass through in a straight line, regardless of [[carga_electrica]]. This device selects velocities, not masses.

## Real student questions

**Why does the magnetic force do no work?**

Work is the integral of force in the direction of displacement. The magnetic force [[fuerza_magnetica]] is always perpendicular to [[velocidad_de_la_particula]], which is the direction of instantaneous displacement. The dot product of [[fuerza_magnetica]] and the displacement is always zero: the magnetic force cannot transfer energy to the particle.

**How do I find the direction of the force if the cross product is hard to visualise?**

The right-hand rule: point your fingers in the direction of [[velocidad_de_la_particula]], curl toward [[campo_magnetico]]; your thumb points in the direction of [[fuerza_magnetica]] for positive charge. For negative charge, the force is opposite. With practice, this rule is fast and reliable.

**What happens if the particle is initially at rest?**

The magnetic component is zero (it depends on [[velocidad_de_la_particula]]). The only force is the electric [[fuerza_electrica]] if there is an electric field. The magnetic field has no influence on a stationary charge.

## Cross-cutting connections and study paths

The Lorentz force connects backward to [electric charge](leaf:fisica-clasica/electromagnetismo/fundamentos/carga-electrica) and the [magnetic field](leaf:fisica-clasica/electromagnetismo/fundamentos/campo-magnetico), which are its ingredients. Forward, it leads to charged particle motion, mass spectrometers and relativistic electromagnetism.

Wien's velocity selector is the cleanest direct application of [[fuerza_de_lorentz]] equal to zero: the two forces cancel exactly at a specific velocity.

## Final synthesis

The Lorentz force unifies the electric and magnetic forces in a single expression. The electric component acts on charges at rest or in motion; the magnetic one acts only on moving charges and never does work. Full mastery requires controlling the geometric factor [[sin_theta]] and the vector geometry of the cross product.