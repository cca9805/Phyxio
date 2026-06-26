# Applications of Hamilton's Equations

## 1. Phase portraits of oscillators

Hamilton's equations make it possible to draw how an oscillator moves in the plane formed by [[qi]] and [[p]]. Each point has a vector defined by [[qd]] and [[pd]], so the portrait shows direction of evolution, not only energy.

This application is especially powerful in teaching because it turns a differential equation into a dynamical image. A point near equilibrium is not interpreted only by its energy height, but by the direction of its arrow. One immediately sees whether the system advances toward larger coordinate, loses momentum, or approaches an oscillation extreme.

Dominant variable: [[H]], because its slopes generate the entire flow.

Validity limit: the oscillator must be conservative and the variables must be canonical.

## 2. Stability of equilibria

Near equilibrium, the slopes of [[H]] indicate whether the point returns, moves away, or remains around a region. For a stable quadratic potential, [[pd]] points toward equilibrium and motion remains confined.

In mechanical engineering and vibrations, this reading classifies responses before solving the full trajectory. If small perturbations generate arrows that circle the equilibrium, there is local stability. If arrows open outward, the model predicts loss of stability or the need to include nonlinear terms.

Dominant variable: [[pd]], because it reveals whether momentum changes toward equilibrium or away from it.

Validity limit: linearization only describes small perturbations.

## 3. Energy conservation

When [[Ht]] is zero, [[H]] is conserved along canonical evolution. This makes it possible to check whether a numerical simulation respects the physical structure: the point may move, but it should not leave the level curve.

The real application appears when auditing numerical integrators. An algorithm may produce a visually reasonable trajectory and still lose energy slowly. Hamilton's equations provide a control criterion: if the model is conservative, drift in [[H]] should be small and explainable as numerical error.

Dominant variable: [[dHdt]], because it decides whether the Hamiltonian changes.

Validity limit: conservation requires absence of explicit time dependence and canonical formulation.

## 4. Numerical simulation

In computational physics, Hamilton's equations give a first-order system. This supports integrators that update coordinates and momenta separately. The didactic advantage is seeing that the state is not only position, but position and momentum.

Symplectic integrators rely precisely on this structure. They do not only approximate values; they try to respect phase geometry. For a teacher, this explains why some numerical methods preserve long-term qualitative behavior better than others.

Dominant variable: [[qd]], because it controls coordinate update at each time step.

Validity limit: the numerical step must be small enough not to distort phase geometry.

## 5. Bridge to modern mechanics

Hamiltonian formalism prepares statistical mechanics, Hamiltonian optics, and quantum mechanics. In those fields, conjugate pairs and phase structure are more natural than isolated forces.

In statistical mechanics, counting states requires phase volume. In optics, rays can be treated with analogous equations. In quantum mechanics, the relation between coordinate and momentum changes deeply, but the idea of conjugate pairs remains a fundamental structure.

Dominant variable: [[p]], because it identifies the conjugate variable completing the state.

Validity limit: quantum mechanics modifies the classical simultaneous reading of coordinate and momentum.

## Applied closure

The applied goal is to read motion from geometry. If [[H]] is known, one does not only know an energy: one knows the slopes that move the state. That is why Hamilton's equations are useful for teaching, simulation, and analysis of systems where phase structure matters as much as the time trajectory.

The practical criterion is clear: use these equations when the question is not only where the system is, but how the complete state evolves. In that context, [[qd]] and [[pd]] are more informative than an isolated acceleration because they describe the local phase flow.

An important didactic consequence is that the student learns to validate results by structure, not only by numerical substitution. If the sign of [[pd]] does not point restoratively in the stable oscillator, something is wrong even if the numbers look reasonable. If [[qd]] does not scale with [[p]] in the quadratic model, momentum has been confused with velocity. If [[dHdt]] is not zero in a system declared autonomous and conservative, the model or the calculation must be reviewed. These checks turn Hamilton's equations into a tool for physical diagnosis.

In practice, that ability makes it possible to compare models, experiments, and simulations with the same language. The student learns to ask whether the phase vector makes sense before trusting an attractive graph or a table of values. This is especially valuable in advanced courses, where a wrong sign or a non-canonical variable can produce a solution that looks smooth but describes the wrong physics.

It also helps teachers connect local calculations with global behavior, because each small vector contributes to the visible phase portrait.
