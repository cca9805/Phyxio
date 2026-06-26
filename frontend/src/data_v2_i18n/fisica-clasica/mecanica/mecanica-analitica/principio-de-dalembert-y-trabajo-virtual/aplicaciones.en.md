# Applications

## 1. Bead on a frictionless guide

Dominant variable: [[Wv]]

Validity limit: ideal guide, permanent contact, and no tangential friction.

A bead sliding on a guide shows the direct value of the principle. The normal reaction exists, but it performs no virtual work on the allowed displacement [[dr]]. The balance focuses on active forces [[F]] and on the inertial term associated with [[m]] and [[a]].

This application explains that a force may maintain a constraint without appearing in the reduced equation. Students see that geometry decides admissible displacements and that dynamics is projected only onto those displacements.

## 2. Ideal pendulum

Dominant variable: [[Qj]]

Validity limit: inextensible string, point mass, and negligible friction.

For an ideal pendulum, tension keeps the distance to the suspension point constant. If the angle is used as [[qi]], virtual displacement is angular and tension contributes no virtual work. Gravity, however, does project onto the coordinate and produces a generalized force.

The didactic value is high because it avoids a common confusion: tension is not removed because it is small, but because its compatible virtual work is zero. It may still be computed later to study string failure or support force.

## 3. Ideal Atwood machine

Dominant variable: [[Feff]]

Validity limit: inextensible massless string, ideal pulley, and no slipping.

In an Atwood machine, choosing a coordinate compatible with the string reduces the system. Internal tensions may cancel in virtual work because they act as ideal reactions of the constraint. Acceleration is determined by weight imbalance and total inertia.

The application shows that D'Alembert is not merely abstract technique. It decides which internal forces are unnecessary for obtaining evolution. If the pulley has friction or appreciable inertia, the validity limit is broken and the model must be extended.

## 4. Robotics and joints

Dominant variable: [[Qj]]

Validity limit: joints modeled as ideal constraints and forces projectable onto joint coordinates.

In robotics, internal reactions at a joint may be numerous. To compute motion, the generalized torque driving a joint coordinate is often more relevant. Virtual work turns applied forces into [[Qj]] contributions without first solving every internal contact.

The practical value is separating control from structure. Reactions matter for designing parts, but the equation of motion can be written in generalized coordinates. This separation reduces complexity and improves the physical interpretation of the model.

## 5. Finite elements and weak formulations

Dominant variable: [[dr]]

Validity limit: small compatible variations and a continuum model within the declared elastic or dynamic range.

In computational mechanics, virtual work underlies many weak formulations. Instead of requiring pointwise equilibrium in a strong form, equilibrium is tested against admissible virtual displacements. Although this leaf does not develop finite elements, it introduces the physical idea behind them.

A teacher can use this application to connect analytical mechanics with real engineering. The criterion is not memorizing a sum, but understanding that equations are validated against compatible variations. This way of thinking appears in structures, vibrations, continua, and numerical simulation.

The same reading also diagnoses poorly posed models. If the chosen virtual displacement does not belong to the system, the application is invalid even when the algebraic expression looks correct. If an internal reaction performs virtual work, it must remain in the balance or be transformed into a generalized force. This vigilance turns the principle into a modeling tool, not only a simplification technique.

In all these uses, the common criterion is compatibility. A mechanical application may contain many visible forces, but only those projecting onto admissible displacements enter effective virtual work. This idea organizes problems with many contacts, supports, or joints. First decide which virtual motions the system allows; then ask which agents can do work on them. That sequence avoids long equations with unnecessary unknowns while preserving a clear physical reading.

To close the application, it is useful to stress that the principle does not replace stress or reaction analysis when those quantities are the objective. In a structure, robot, or machine, eliminated reactions may be decisive for design, safety, or wear. D'Alembert only says that, to obtain evolution in compatible coordinates, they do not always need to enter as initial unknowns. That distinction between computing motion and sizing components is an important professional competence.

In class, this distinction supports a two-stage workflow: first obtain the reduced motion, then recover reactions if the problem asks for them. Students therefore do not confuse dynamical simplification with loss of information. The method preserves the possibility of returning to the complete system when the physical question changes. This is especially useful in engineering examples, where one calculation predicts motion and a second calculation checks loads, margins, or contact forces.

It also gives assessment criteria. A complete answer must name the admissible virtual displacement, identify which reactions are ideal, state the dominant generalized variable, and explain the validity limit. Without those elements, the calculation may be algebraically correct but pedagogically incomplete.
