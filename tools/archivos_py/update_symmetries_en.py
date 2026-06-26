#!/usr/bin/env python3
import os
import pathlib

leaf_dir = pathlib.Path("frontend/src/data_v2_i18n/fisica-clasica/mecanica/mecanica-analitica/lagrangiano/simetrias-y-conservaciones")

# ejemplos.en.md
ejemplos_en = """# Examples: Symmetries and Conserved Quantities

## Example 1: Cyclic Coordinate and Momentum Conservation

**Problem:** A particle moves in a potential $V(r, \theta, z)$ that depends only on $(r, z)$, not on $\theta$. The Lagrangian is:
$$L = \frac{1}{2}m(\dot{r}^2 + r^2\dot{\theta}^2 + \dot{z}^2) - V(r,z)$$

**Analysis:** The coordinate $\theta$ does not appear explicitly in $L$ (it is cyclic). Therefore, $\frac{\partial L}{\partial \theta} = 0$, which means $\frac{d}{dt}(mr^2\dot{\theta}) = 0$. The angular momentum $L_z = mr^2\dot{\theta}$ is conserved.

**Result:** The system has one fewer effective degree of freedom. The motion in $(r,z)$ is decoupled from $\theta$ motion once $L_z$ is known.

## Example 2: Time-Independent Lagrangian

**Problem:** A mass-spring system with no dissipation. The Lagrangian is $L = \frac{1}{2}m\dot{x}^2 - \frac{1}{2}kx^2$. It does not depend on time explicitly.

**Analysis:** Since $\frac{\partial L}{\partial t} = 0$, energy is conserved: $E = \frac{1}{2}m\dot{x}^2 + \frac{1}{2}kx^2 = \text{constant}$.

**Result:** Oscillations persist indefinitely; amplitude never decays (absent other mechanisms).

## Example 3: Approximate Symmetry

**Problem:** A pendulum with air resistance proportional to $\dot{\theta}$: $L = \frac{1}{2}mL^2\dot{\theta}^2 + mgL\cos\theta - \frac{1}{2}\gamma\dot{\theta}^2$.

**Analysis:** The system is not time-independent due to dissipation. Energy is approximately conserved on short timescales ($t \\ll m/\\gamma$) but decays on longer timescales.

**Result:** The system is quasi-integrable; approximate conservation is valid only for short times.
"""

# modelos.en.md
modelos_en = """# Models and Framework

## Noether Symmetry Model

In Lagrangian mechanics, a symmetry is a transformation leaving the action invariant. Continuous symmetries (Lie groups) generate conserved quantities. The central model is:

**Assumption:** The Lagrangian $L(q, \\dot{q}, t)$ is invariant under a continuous family of transformations parameterized by $\\epsilon$.

**Consequence:** A quantity $Q(q, p)$ is conserved: $\\frac{dQ}{dt} = 0$ along the equations of motion.

## Exact vs Approximate Symmetries

A symmetry is exact if the Lagrangian truly obeys it under all conditions. A symmetry is approximate if it holds only under stated assumptions (e.g., ignoring friction, assuming weak external fields).

For approximate symmetries, one can compute the rate of change of the "conserved" quantity due to symmetry breaking terms:
$$\\frac{dQ}{dt} \\approx \\epsilon_{\\text{breaking}} \\cdot \\text{(some combination of state variables)}$$

where $\\epsilon_{\\text{breaking}}$ is small but non-zero.

## Cyclic Coordinates and Gauge Freedom

A coordinate is cyclic if it does not appear in the Lagrangian. Its conjugate momentum is immediately conserved. This property is the basis for efficient reduction of multidimensional problems.
"""

# errores.en.md
errores_en = """# Common Errors and Misconceptions

## Error 1: Confusing "Almost Conserved" with "Conserved"

**Mistake:** Treating a quantity that changes slowly as if it were exactly conserved.

**Why it happens:** In perturbative problems, corrections to conservation appear only at higher order, making the quantity seem stable to leading order.

**Fix:** Estimate the rate of change explicitly. If $|\\frac{dQ}{dt}| < 10^{-6}|Q|$ over the time scale of interest, the approximation is acceptable. Otherwise, treat $Q$ as merely decreasing.

## Error 2: Applying Noether Blindly Without Checking Invariance

**Mistake:** Assuming a quantity is conserved because it "matches" the form of a conserved quantity, without verifying that the Lagrangian is actually invariant under the corresponding transformation.

**Why it happens:** Formulas can look similar even when assumptions differ.

**Fix:** Always verify that the Lagrangian is unchanged (up to total derivatives) under the proposed transformation before claiming conservation.

## Error 3: Forgetting that Symmetries Must Hold Globally

**Mistake:** Declaring a quantity conserved when symmetry holds only in a limited region of phase space.

**Why it happens:** Local analysis may obscure global breaking of symmetry elsewhere.

**Fix:** Check that the symmetry-generating transformation is well-defined and leaves the Lagrangian invariant over the entire domain of interest.

## Error 4: Mixing Dynamical Quantites with Topological Charges

**Mistake:** Treating a dynamically conserved quantity (like energy) the same as a topological charge (like winding number).

**Why it happens:** Both are "constant along trajectories," but their physical origins and violation mechanisms differ.

**Fix:** Distinguish between conserved quantities arising from smooth symmetries (Noether) and those from topological properties (sectors).
"""

# aplicaciones.en.md
aplicaciones_en = """# Applications in Real Problems

## Application 1: Celestial Mechanics

In planetary orbits around the Sun, the Lagrangian is invariant under:
- **Spatial translations** (far from the Sun, homogeneity approximately holds) → momentum conservation.
- **Rotations about the solar axis** → angular momentum conservation.
- **Time translation** (the Sun's gravity is constant) → energy conservation.

These three integrals of motion allow predicting orbital elements (semi-major axis, eccentricity, inclination) without solving differential equations point-by-point.

## Application 2: Molecular Dynamics and Constraints

In molecular dynamics, if interatomic potentials depend only on relative distances, the system has translation and rotation invariance. This symmetry reduces the computational burden by separating center-of-mass motion (trivial) from internal (interesting) dynamics.

## Application 3: Gauge Field Theory

In electromagnetism, the Lagrangian is invariant under local gauge transformations $\\phi \\to \\phi + \\chi(\\vec{r},t)$. This symmetry generates the requirement that charge is conserved locally.

## Application 4: Control and Stabilization

In control engineering, exploiting symmetries allows designing controllers that preserve invariants. For example, controlling the angular momentum of a spinning system is easier if we recognize its conserved status.
"""

# historia.en.md
historia_en = """# Historical Development and Context

## Emmy Noether (1915)

Emmy Noether proved the fundamental theorem linking symmetries and conservation laws. This result, often called Noether's theorem, revolutionized theoretical physics by showing that conservation of energy, momentum, and angular momentum all follow from deep symmetry principles rather than being independent axioms.

## Impact on Modern Physics

Noether's insight became the guiding principle for the Standard Model of particle physics. Every fundamental interaction (electromagnetic, weak, strong) is now understood as a consequence of local gauge symmetries, with corresponding conserved charges.

## Mathematical Formalization

The proof relies on the principle of least action and calculus of variations. A small variation of the fields leaves the action stationary if and only if the equations of motion are satisfied. By relating the symmetry transformation to this variation, Noether showed that symmetries automatically yield conservation laws.

## Pedagogical Evolution

Classical mechanics courses traditionally taught conservation laws as separate principles. Modern analytical mechanics integrates them as consequences of symmetry, making the theory more unified and predictive.
"""

files_to_write = {
    "ejemplos.en.md": ejemplos_en,
    "modelos.en.md": modelos_en,
    "errores.en.md": errores_en,
    "aplicaciones.en.md": aplicaciones_en,
    "historia.en.md": historia_en,
}

for filename, content in files_to_write.items():
    filepath = leaf_dir / filename
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Updated {filename}")

print("All .en.md files updated successfully.")
