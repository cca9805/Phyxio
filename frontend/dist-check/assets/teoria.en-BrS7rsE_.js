const e=`# Lorentz Force

## Conceptual context

The Lorentz force is the fundamental force experienced by any charged particle in the presence of electromagnetic fields. It is the bridge between electrostatics (forces on stationary charges) and electrodynamics (forces on moving charges): it unifies in a single expression the electric force and the magnetic force.

In Phyxio's physics tree, the Lorentz force is placed after electric charge, the electric field and the magnetic field, because it is the synthesis of all of them. Understanding the Lorentz force means understanding how particles respond to the fields surrounding them: it is the equation that closes the cycle between "creating fields" and "interacting with them".

The Lorentz force also underpins countless devices: the cathode-ray tube, the mass spectrometer, the cyclotron, the electric motor, the loudspeaker, auroras boreales and particle accelerators all operate thanks to this single law.

## 🟢 Essential level

A particle with charge [[q]] placed in a field experiences an action on it. When the source is an electrostatic origin, this action points along the field direction for positive [[q]] and opposite for negative [[q]]; it acts on the particle whether it is at rest or moving.

If the particle is also moving, the field [[B]] exerts an additional action perpendicular to both the velocity [[v]] and the field itself. This action cannot accelerate or decelerate the particle: it only curves its trajectory.

The Lorentz force [[F_L]] is the sum of both actions. For positive [[q]] moving perpendicular to [[B]], the action due to [[B]] points in the third orthogonal direction (right-hand rule). For negative [[q]], the direction reverses.

The most important point: the action of [[B]] on the particle **never does work** because it is always perpendicular to the motion. The field [[B]] can only change the direction of [[v]], never its magnitude.

## 🔵 Formal level

The complete expression of the Lorentz force combines both components. For the magnitude of the magnetic component:

{{f:fuerza_magnetica_modulo}}

Here [[F_m]] is the magnetic force magnitude, [[q]] is the particle charge, [[v]] is its speed, [[B]] is the magnetic field magnitude, and [[sin_theta]] is the sine of the angle between the velocity vector and the magnetic field vector.

For the total force including the electric component [[F_E]] and the magnetic component [[F_m]]:

{{f:fuerza_lorentz_total}}

The electric component [[F_E]] depends only on [[q]] and the electric field [[E]]; it does not depend on [[v]]. The magnetic component does depend on [[v]] and is zero for particles at rest. This difference is the key conceptual insight of all electrodynamics.

Breakdown of the formula:
- If [[v]] approaches zero, [[F_L]] reduces to the pure electric force: proportional to [[q]] and [[E]].
- If [[E]] is zero, [[F_L]] is purely magnetic: proportional to [[q]], [[v]], [[B]] and [[sin_theta]].
- If [[sin_theta]] is zero (velocity parallel to field), [[F_m]] is zero even if the particle moves fast.
- If [[sin_theta]] is 1 (velocity perpendicular to field), [[F_m]] is maximum for that [[v]] and [[B]].

## 🔴 Structural level

The Lorentz force has a deep asymmetry between its electric and magnetic components that is not obvious from the scalar formula: the electric component is **conservative** (it can do work; the work depends only on start and end points) while the magnetic component is **non-conservative but non-dissipative** (it does no work in any displacement).

This asymmetry has concrete consequences. In a uniform purely magnetic field, a particle with [[v]] perpendicular to [[B]] describes a circle whose radius is proportional to the particle's linear momentum and inversely proportional to [[q]] and [[B]]. This is the principle of the mass spectrometer: particles with different charge-to-mass ratios trace different radii under the same [[B]], allowing identification. In the cyclotron, the electric component accelerates the particle and the magnetic one keeps it on a circular path.

> [!WARNING]
> The magnetic force is perpendicular to [[v]] at **every instant**, not just initially. This means that even though the trajectory is curved, at each point the force vector points toward the local centre of curvature, continuously changing direction. Calculating [[F_m]] only at the initial instant and assuming its direction does not change is one of the most serious errors.

If [[v]] is not perpendicular to [[B]], the particle describes a **helix**: the component of [[v]] parallel to [[B]] experiences no magnetic force and remains constant, while the perpendicular component describes a circle. The result is a helical trajectory with axis parallel to [[B]].

> [!TIP]
> To solve trajectory problems in a magnetic field: decompose [[v]] into components parallel and perpendicular to [[B]]. The parallel component determines the helix pitch; the perpendicular component determines the circle radius. Their geometric combination gives the full trajectory.

The Lorentz force is also the basis of **Wien's velocity selector**: when a beam of particles traverses a region with [[E]] and [[B]] perpendicular to each other and to the beam, only particles with a specific velocity at which the electric and magnetic forces cancel exactly pass through in a straight line. All others are deflected. This device selects particles by velocity regardless of their charge.

## Deep physical interpretation

The Lorentz force has an internal coherence that is not obvious: in special relativity, the electric and magnetic fields are not separate entities but two aspects of the same electromagnetic field tensor. An observer at rest sees a purely electric field; the same field observed from a moving frame includes a magnetic component. The Lorentz force is the covariant expression of this reality: when transforming between inertial frames, [[F_E]] and [[F_m]] mix in a controlled way.

In operational terms, this means there is no absolute distinction between "electric force" and "magnetic force": the distinction depends on the observer's reference frame. What is magnetic force for one observer may be partially electric force for another. The total Lorentz force [[F_L]] is the quantity all observers agree on in its dynamical effect on the particle.

> [!NOTE]
> The instantaneous power delivered by the magnetic force to the particle is always zero because [[F_m]] is perpendicular to [[v]]. This means only the electric field can change the particle's kinetic energy. An accelerator that uses only magnetic fields to guide the particle necessarily needs electric fields to accelerate it.

## Order of magnitude

The force on an electron (charge approximately 1.6×10⁻¹⁹ C) moving at 10⁶ m/s in a magnetic field of 0.1 T with [[sin_theta]] equal to 1 is of the order of 1.6×10⁻¹⁴ N. This force, though tiny on a macroscopic scale, is enormous compared with the electron's weight (approximately 9×10⁻³⁰ N): the ratio is about 10¹⁵, explaining why magnetic fields completely dominate the motion of free electrons.

For a macroscopic charged water drop carrying 1 µC moving at 1 m/s in Earth's field (5×10⁻⁵ T), the magnetic force is of order 5×10⁻¹¹ N: negligible compared to its weight (about 10⁻⁶ N). Magnetic effects on everyday slowly-moving charged objects are irrelevant.

## Personalized resolution method

Sequence for solving Lorentz force problems:

1. **Identify which fields are present**: determine whether [[E]], [[B]] or both exist.
2. **Determine [[sin_theta]]**: read the problem geometry; if [[v]] is perpendicular to [[B]], [[sin_theta]] is 1; if parallel, it is 0.
3. **Calculate [[F_m]]**: use the magnetic magnitude formula with the identified values.
4. **Calculate [[F_E]]**: if there is an electric field, add the electric component.
5. **Combine vectorially**: the direction of [[F_m]] is perpendicular to the plane of [[v]] and [[B]]; that of [[F_E]] is parallel to [[E]].
6. **Verify coherence**: if [[v]] is parallel to [[B]], the total force must be purely electric.

## Special cases and extended example

**Case 1 — Circular motion**: Particle with [[v]] perpendicular to a uniform [[B]] and no electric field. The magnetic force is always perpendicular to [[v]] and acts as centripetal force. The particle describes a circle with radius depending on the linear momentum divided by the product of [[q]] and [[B]]. Doubling [[B]] halves the radius.

**Case 2 — Helical trajectory**: Particle with [[v]] not perpendicular to [[B]]. The component of [[v]] parallel to [[B]] experiences no force; the perpendicular component describes a circle. The combination produces a helix whose axis is parallel to [[B]].

**Case 3 — Wien velocity selector**: [[E]] and [[B]] are arranged perpendicular to each other and to the beam direction. Only particles with [[v]] such that the electric and magnetic forces cancel pass through in a straight line, regardless of [[q]]. This device selects velocities, not masses.

## Real student questions

**Why does the magnetic force do no work?**

Work is the integral of force in the direction of displacement. The magnetic force [[F_m]] is always perpendicular to [[v]], which is the direction of instantaneous displacement. The dot product of [[F_m]] and the displacement is always zero: the magnetic force cannot transfer energy to the particle.

**How do I find the direction of the force if the cross product is hard to visualise?**

The right-hand rule: point your fingers in the direction of [[v]], curl toward [[B]]; your thumb points in the direction of [[F_m]] for positive charge. For negative charge, the force is opposite. With practice, this rule is fast and reliable.

**What happens if the particle is initially at rest?**

The magnetic component is zero (it depends on [[v]]). The only force is the electric [[F_E]] if there is an electric field. The magnetic field has no influence on a stationary charge.

## Cross-cutting connections and study paths

The Lorentz force connects backward to [electric charge](leaf:fisica-clasica/electromagnetismo/fundamentos/carga-electrica) and the [magnetic field](leaf:fisica-clasica/electromagnetismo/fundamentos/campo-magnetico), which are its ingredients. Forward, it leads to charged particle motion, mass spectrometers and relativistic electromagnetism.

Wien's velocity selector is the cleanest direct application of [[F_L]] equal to zero: the two forces cancel exactly at a specific velocity.

## Final synthesis

The Lorentz force unifies the electric and magnetic forces in a single expression. The electric component acts on charges at rest or in motion; the magnetic one acts only on moving charges and never does work. Full mastery requires controlling the geometric factor [[sin_theta]] and the vector geometry of the cross product.
`;export{e as default};
