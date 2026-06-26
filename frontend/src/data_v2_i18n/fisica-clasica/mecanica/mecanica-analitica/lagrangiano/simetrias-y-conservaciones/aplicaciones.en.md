# Applications of Symmetries and Conservation Laws

## 1. Free Particle and Conservation of Linear Momentum

On an air table, a glider moving with negligible friction does not encounter a privileged position on the plane. The Lagrangian [[L]] does not change if the whole experiment is translated by a fixed distance. This spatial symmetry becomes conservation of [[P]], so the relation between [[m]] and [[v]] is not merely a numerical definition: it is the observable consequence of space behaving the same way at every point in the working domain.

The application is especially useful in the laboratory because it provides a diagnostic. If [[P]] changes without a collision or an identified external force, the setup is not truly homogeneous: the table may be tilted, airflow may be uneven, or residual friction may be present. Conservation therefore does not only solve the problem; it also audits the quality of the experiment.

Dominant variable: [[P]].
Validity limit: it fails if an appreciable horizontal external force, friction, or variable mass is present.

## 2. Orbits and Conservation of Angular Momentum

In a central potential, the absolute orientation of the system does not select a privileged direction. Rotating the entire problem around the center does not change [[L]], and that rotational symmetry produces conservation of [[J]]. In a simplified scalar reading, [[J]] may be related to [[r]] and [[P]], provided that the lever-arm geometry and the direction of motion are compatible with that reduction.

This application explains why an orbiting body sweeps angular position faster when it approaches the focus and slower when it moves away. No mysterious tangential force is required: if [[J]] remains constant, a change in [[r]] forces the transverse part of the motion to reorganize. Conservation acts as the physical criterion connecting geometry and dynamics.

Dominant variable: [[J]].
Validity limit: it requires zero external torque about the chosen center; perturbations, atmospheric drag, or additional bodies break exact conservation.

## 3. Autonomous Systems and Conservation of Energy

In an ideal mechanical oscillator, the Lagrangian [[L]] does not depend explicitly on time. The properties of the system are the same now, one minute later, or after shifting the time origin of the calculation. This time-translation invariance is expressed through the energy [[E]], built from [[p_i]], [[qdi]], and [[L]]. The formula is not a memorized sum: it is the charge associated with the fact that the laws do not change with the reference instant.

In practice, this application is a strong test for numerical integrators. If a solver simulates an autonomous conservative system and [[E]] drifts systematically, the time step, method, or model is introducing artificial loss. For teaching, this connects formal mechanics with computational quality control.

Dominant variable: [[E]].
Validity limit: it fails with dissipative forces, external driving, or explicitly time-dependent Lagrangians.

## 4. Cyclic Coordinates in Mechanisms and Rotating Pendula

A cyclic coordinate appears when [[L]] does not depend on that coordinate, although it may depend on its velocity. In that case, the conjugate momentum [[p_i]] is constant and [[dpdt]] equal to zero reduces the problem. In a pendulum with an ignorable angular variable, or in a mechanism with axial symmetry, this property removes one differential equation and replaces it with a conserved quantity.

The didactic value is significant because it shows that a variable may be physically relevant even if it does not appear directly in [[L]]. What matters is structural dependence: if the coordinate is ignorable, its conjugate momentum becomes the carrier of the dynamical information.

Dominant variable: [[p_i]].
Validity limit: the coordinate must truly be cyclic, and no active constraint or external force may depend on it.

## 5. Auditing Simulations and Experiments with Conserved Charges

In multibody simulations, molecular dynamics, or high-frequency experimental data, a well-identified charge [[Q]] functions as a global coherence test. One does not inspect only a position or a velocity, but an entire structure: symmetry, generator [[X_i]], conjugate momentum [[p_i]], and time evolution. If the conserved charge remains within tolerance, the model gains credibility; if it drifts, the drift points toward symmetry breaking or numerical defects.

This application is valuable because it does not require knowing the exact full trajectory in advance. It is enough to know which symmetry should be conserved. Conservation laws are therefore used as quality monitors: they detect integration errors, omitted terms, poorly scaled units, or undeclared external forces.

Dominant variable: [[Q]].
Validity limit: an almost constant charge does not prove exact conservation; the drift must be compared with model precision and with the physical scale of the system.

## Applied Closure

These applications show that symmetries are not theoretical decoration. They decide which quantities should remain constant, which data are suspicious, and which simplifications have physical support. The final competence is to look at a system, recognize the symmetry of [[L]], construct or interpret the charge [[Q]], and use its conservation as a tool for prediction, diagnosis, and reduction of calculation.
