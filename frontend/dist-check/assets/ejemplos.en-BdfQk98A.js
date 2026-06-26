const e=`# Exam-type example

## Problem statement

A point mass with [[m]]=1.5 kg moves along one linear generalized coordinate [[qi]]. It is attached to a spring with stiffness [[k]]=12 N/m and receives a constant external generalized force [[Qi]]=3 N. Build the Lagrangian [[L]], obtain the forced Lagrange equation, and compute the acceleration [[qddi]] when [[qi]]=0.20 m.

## Data

- [[m]]=1.5 kg as inertial parameter.
- [[k]]=12 N/m as elastic stiffness.
- [[qi]]=0.20 m as instantaneous displacement.
- [[Qi]]=3 N as non-potential external action.
- The generalized velocity [[qdi]] is kept symbolic so the origin of [[pi]] remains visible.

## System Definition

The system has one independent coordinate. Instead of splitting the motion into Cartesian force components, the model uses kinetic energy, elastic potential energy, and one external generalized force that is not absorbed into [[V]].

## Physical Model

Kinetic energy depends on [[qdi]], potential energy depends on [[qi]], and both build [[L]]. The force [[Qi]] enters only through the forced closure of the equation.

{{f:lagrangiano_mecanico}}

{{f:momento_conjugado_lagrangiano}}

{{f:operador_euler_lagrange}}

{{f:ecuacion_lagrange_conservativa}}

{{f:ecuacion_lagrange_forzada}}

{{f:aceleracion_oscilador_forzado}}

## Model justification

The model is appropriate because the system has one independent coordinate and one conservative elastic interaction that belongs in [[V]]. The action [[Qi]] is not part of that potential: it represents an external agent and therefore must enter through the forced equation, rather than through an ad hoc alteration of the Lagrangian.

Keeping the steps through [[pi]] and [[Ri]] also matters. If one jumps directly to acceleration, the numerical result may still be right, but the example stops teaching the central point of this leaf: how an equation of motion is generated from the structure of [[L]].

## Symbolic solution

First, the conjugate momentum that links the kinetic dependence to the later equation is recovered explicitly:

{{f:momento_conjugado_lagrangiano}}

For this oscillator:

- [[T]] is proportional to [[m]] and the square of [[qdi]].
- [[V]] is proportional to [[k]] and the square of [[qi]].
- [[L]] combines both contributions.

Applying the forced Lagrange equation leaves the evolution of [[qi]] controlled by the balance between the external action [[Qi]] and the elastic restoring term. The conservative equation serves as a reference: if [[Qi]] vanishes, the residual [[Ri]] must vanish as well. In the present case, the forced closure shifts that balance and the result is written directly as acceleration [[qddi]]:

{{f:aceleracion_oscilador_forzado}}

## Numerical Substitution

The elastic contribution is:

- [[k]][[qi]]=12*0.20=2.4 N.

Therefore:

- [[Qi]]-[[k]][[qi]]=3.0-2.4=0.6 N.
- [[qddi]]=0.6/1.5=0.40 \\(\\mathrm{m/s^2}\\).

This value should not be read in isolation. With the same parameters, if [[qi]] increased to 0.25 m, the elastic term would reach 3.0 N and the acceleration would vanish. That threshold identifies the instantaneous equilibrium encoded by the model.

## Dimensional Validation

The numerator has force units. Dividing by [[m]] yields acceleration, so [[qddi]] has the expected dimension.

## Physical Interpretation

Acceleration is positive because the applied force exceeds the restoring action of the spring. If [[Qi]] were smaller than [[k]][[qi]], acceleration would reverse sign and the system would tend back toward the origin. The result is not merely numerical: it shows that the actuator is shifting the dynamical balance.

The example also clarifies how to read [[pi]]. Although no numerical value for conjugate momentum is required, its presence guarantees that the reasoning passes through the dependence of [[L]] on [[qdi]]. That stage distinguishes genuine Euler-Lagrange modeling from a mere restatement of Newton's second law.

It also gives a causal reading of the sign. Positive acceleration means the imposed action wins over the restoring tendency at that configuration. Zero acceleration marks a balance point, and negative acceleration marks the opposite hierarchy. These three cases explain the graph qualitatively before any parameter sweep is performed.

# Real-world example

## Context

In a linear actuator with elastic return, the controller applies a programmed force to a carriage attached to a spring. The relevant variable is not every Cartesian component of motion, but the effective travel coordinate [[qi]].

## Physical estimation

If the carriage has [[m]]=0.8 kg, stiffness is [[k]]=40 N/m, the instantaneous position is [[qi]]=0.03 m, and the controller delivers [[Qi]]=2.0 N, then the restoring term equals 1.2 N and the initial acceleration is close to 1.0 \\(\\mathrm{m/s^2}\\).

The estimate also supports design reasoning. Increasing [[k]] reduces that acceleration for the same [[Qi]], whereas decreasing [[m]] enlarges it. The model is therefore not just a calculator; it guides sensitivity analysis.

## Interpretation

The Lagrangian model separates stored energy from externally supplied action. That distinction prevents double counting and makes it possible to discuss whether the actuator dominates the spring or the spring recovers the motion.

In a technical review, this formulation leaves a traceable diagnostic path. If measurements disagree with the estimate, the team knows where to inspect the model: the elastic approximation, the representation of [[Qi]], or the assumption that one coordinate [[qi]] is sufficient.

That traceability is the educational point of the application. The equation is compact, but the model remains auditable because every contribution has a declared physical role.
`;export{e as default};
