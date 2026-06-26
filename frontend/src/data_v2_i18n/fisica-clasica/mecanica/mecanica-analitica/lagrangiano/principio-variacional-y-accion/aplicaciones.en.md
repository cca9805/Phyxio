# Applications

## 1. Simple pendulum as an angular path

Dominant variable: [[S]]

Validity limit: moderate amplitudes, ideal string, and smooth motion without dominant friction.

For the simple pendulum, the variational principle avoids solving tension as the primary unknown. The angular coordinate [[qi]] already incorporates the fixed length, and the Lagrangian [[L]] concentrates kinetic and potential energy. By forming [[S]], the physical angular path is selected by stationarity rather than by visually choosing a curve.

This application is valuable in teaching because it shows that a real force may not be the protagonist of the reduced equation. Students see that tension maintains the constraint, while angular motion comes from comparing admissible paths. Action does not replace the physics of the pendulum; it organizes its conditions in a compact form.

## 2. Free particle between two points

Dominant variable: [[deltaS]]

Validity limit: constant mass, no external forces, and fixed spatial and temporal endpoints.

A free particle illustrates stationarity without hiding behind potentials. Between two fixed points, uniform straight motion makes action stationary. Other curves may join the same endpoints, but they introduce velocity variations that alter the kinetic balance.

This example fights the idea that nature always seeks the shortest distance for a purely geometric reason. What is stationary is [[S]], built from [[L]], and the result coincides with the straight path because the model contains no interactions. If a potential is added, the stationary path changes.

## 3. Design of mechanical simulations

Dominant variable: [[Ri]]

Validity limit: numerical integration with sufficiently small steps and a regular Lagrangian.

In mechanical simulations, the variational principle motivates algorithms that better respect the structure of motion. Even if an introductory course does not program variational integrators, the didactic idea is clear: a simulation should not merely update positions, but preserve coherence between path, energy, and restrictions.

The residual [[Ri]] acts as a model-quality test. If the numerical path accumulates systematic residual, the discretization, time step, or Lagrangian may be poorly posed. The reading is physical, not only computational: the calculation must still represent an approximately stationary path.

## 4. Optics and Fermat's principle as an analogy

Dominant variable: [[S]]

Validity limit: formal analogy; mechanical action must not be confused with optical time without declaring the model.

Fermat's principle in optics offers a powerful analogy: the real ray makes optical time stationary. Analytical mechanics uses another quantity, action, but shares the idea of comparing complete paths. This application helps students recognize that variational principles are not exclusive to masses and forces.

The analogy must be used carefully. The point is not that light and a particle obey the same local formula, but that both problems can be formulated as path selection by stationarity. This prepares the transition to modern physics without introducing unnecessary formalism too early.

## 5. Auditing models with generalized coordinates

Dominant variable: [[L]]

Validity limit: smooth coordinates, compatible constraints, and energies written in the same configuration.

When a problem is expressed with generalized coordinates, action serves as an audit. If [[L]] mixes energies from different configurations, [[S]] loses meaning. If [[t1]] and [[t2]] are not fixed, the set of compared paths changes. If a variation does not respect the constraint, it does not belong to the model.

This application is especially important for teachers. It makes it possible to check solutions before deriving long equations: first verify that variables, energies, endpoints, and variations belong to the same system. Then use the variational principle. The goal is not to decorate the solution with an integral, but to ensure that the dynamical model is well built.

In advanced exercises, this audit also helps decide whether to move to generalized forces, multipliers, or a Hamiltonian formulation. If the problem has no well-defined endpoints, if the path has jumps, or if the Lagrangian does not represent all relevant interactions, simple stationary action should not be applied automatically. The application therefore teaches a boundary criterion: when the principle is powerful and when the tool must change.

A second use is communicative. Two students may choose different coordinates and obtain equivalent equations if both respect the same action and the same admissible variations. Comparing their setups through [[S]] separates notational differences from model errors. If one shifts the zero of potential while preserving the variational structure, the dynamics should not change. If another changes a boundary condition, they are no longer solving the same problem. This application turns the principle into a common language for discussing solutions.

It also helps assess qualitative explanations. An answer may contain correct derivatives and still fail to explain which paths are compared, which endpoints remain fixed, or what physical information [[L]] contains. Requiring those three pieces raises a solution from calculation to analytical mechanics. For a teacher, this makes it possible to correct not only the final result, but the physical contract that makes it valid.
