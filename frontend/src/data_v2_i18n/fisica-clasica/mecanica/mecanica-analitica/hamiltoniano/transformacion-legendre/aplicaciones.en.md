# Applications of the Legendre Transformation

## 1. Mechanical oscillator in phase space

The most direct application appears when a mass-spring oscillator is transformed from its Lagrangian description to a Hamiltonian description. Instead of tracking only position as a function of time, one studies the plane formed by [[qi]] and [[p]].

This reading makes it possible to compare amplitudes, energy, and direction of motion without solving the whole trajectory again. Two points with the same position may correspond to forward or backward motion depending on the sign of momentum, and that becomes visible in the phase portrait. For the student, the benefit is understanding that the mechanical state is not fixed by position alone; for the teacher, the benefit is a compact representation of the whole motion.

Dominant variable: [[p]], because it distinguishes states with the same position and opposite directions of motion.

Validity limit: the spring must be describable through conservative potential energy [[V]], and the effective mass [[m]] must be approximately constant.

## 2. Teaching phase portraits

For a teacher, the transformation justifies why a phase portrait is not an arbitrary drawing. Each point in the portrait contains one coordinate and one conjugate momentum; that pair comes from a regular transformation from [[L]].

This avoids presenting the phase plane as a technique detached from the Lagrangian. A lesson can move from kinetic and potential energy to the Lagrangian, then to conjugate momentum, and finally to the Hamiltonian. The graph then appears not as a new recipe, but as the visual consequence of choosing natural variables for the state.

Dominant variable: [[H]], because Hamiltonian level curves show families of states with the same energy in conservative models.

Validity limit: if [[H]] does not equal mechanical energy, the level curves must be interpreted as levels of the Hamiltonian function, not necessarily as observable total energy.

## 3. Systems with generalized coordinates

In pendulums, rotations, and constrained systems, conjugate momentum is not always linear momentum. The Legendre transformation forces [[p]] to be computed from [[DLv]], avoiding the copy of a Cartesian formula that does not apply.

The application is especially important for angular coordinates. The conjugate momentum may be angular momentum or a geometry-dependent combination. This difference helps detect unit and interpretation errors: kg m/s should not be demanded if the selected coordinate is not a linear distance.

Dominant variable: [[qi]], because the nature of the coordinate determines the units and meaning of the conjugate momentum.

Validity limit: the chosen coordinates must describe the configuration correctly and must not introduce singularities in the region studied.

## 4. Stability analysis

Once [[H]] has been built, many stability questions are reformulated as the study of the geometry of a function in phase space. Minima, stationary points, and level curves provide qualitative information before solving complete equations.

In equilibrium problems, this reading helps decide whether a small perturbation remains confined near a point or moves away from it. The Hamiltonian provides a reference surface: nearby states are compared by how its value changes and by the shape of its level curves. The Legendre transformation is required because that geometry needs momenta, not only velocities.

Dominant variable: [[H]], because it organizes the dynamics and allows nearby states to be compared.

Validity limit: the simple energy reading requires a regular conservative system; forced or dissipative systems require extended models.

## 5. Bridge to modern physics

Quantum mechanics and statistical mechanics use conjugate variables systematically. The Legendre transformation prepares this idea by showing that position and momentum are not simply independent data added by hand, but variables related by a dynamical structure.

In statistical mechanics, states are counted in phase space. In quantum mechanics, the relation between coordinate and momentum becomes even deeper. Studying the classical transformation gives a precise intuition for those topics: conjugate variables are not arbitrary vocabulary, but a way of reorganizing physical information.

Dominant variable: [[p]], because it acts as a conjugate variable and anticipates the role of canonical pairs.

Validity limit: classical mechanics describes states simultaneously by coordinate and momentum; in quantum physics that reading is modified, although the formal structure remains clearly visible.

## Applied closure

The Legendre transformation is used to decide when Hamiltonian language is a faithful reformulation of the Lagrangian one. Its applications are not about memorizing another formula, but about moving from velocities to momenta, checking regularity, and using [[H]] to reason about states, conservation, and the geometry of dynamics.

The final criterion is operational: if the problem requires trajectories with constraints, the Lagrangian language is often the entry point; if it requires comparing states, stability, or phase structure, the transformation toward [[H]] becomes natural. Choosing that language is a physical competence, not just a mathematical one.

This is why the transformation is useful beyond formal courses. It gives a disciplined test for deciding whether a change of variables is physically faithful, computationally useful, and didactically transparent.
