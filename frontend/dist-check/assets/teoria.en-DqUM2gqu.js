const e=`# Legendre Transformation

## Conceptual Context

The Legendre transformation appears when a physical description written with a variable and its velocity must be rewritten with the variable and its conjugate momentum. In analytical mechanics, the Lagrangian [[L]] naturally lives in configuration space: it uses the generalized coordinate [[qi]], the generalized velocity [[qdi]], and, when needed, time. The Hamiltonian [[H]] lives in phase space: it uses [[qi]] and the conjugate momentum [[p]].

This change is not a cosmetic translation. It changes which information is treated as primary. In the Lagrangian formalism one asks which path makes the action stationary; in the Hamiltonian formalism one asks how a phase-space point evolves. The Legendre transformation is the technical bridge between both readings when the relation between velocity and momentum is invertible.

## 🟢 Essential Level

The essential idea is simple: if you know how the Lagrangian changes when generalized velocity varies, you can define a new dynamical variable. That variable measures a physical slope, not necessarily a Cartesian linear momentum. For an ordinary free particle it matches the intuition of mass and motion; in generalized coordinates or in systems with fields, it may have a different form.

Then a new dynamical function is built that no longer takes velocity as the primary variable. But the result is truly Hamiltonian only if velocity can be eliminated and written from conjugate momentum. That is why a Legendre transformation always includes a physical condition: writing symbols is not enough; the velocity-momentum map must be invertible and must preserve state information.

## 🔵 Formal Level

To fix the simplest mechanical case, start from a Lagrangian with quadratic kinetic energy and potential energy [[V]]:

{{f:lagrangiano_cuadratico}}

The slope of [[L]] with respect to [[qdi]] defines the conjugate momentum. In this notation, [[DLv]] represents that partial derivative evaluated while holding the coordinate fixed:

{{f:momento_conjugado_legendre}}

If the effective mass [[m]] is constant, the relation reduces to direct proportionality:

{{f:momento_cuadratico}}

The regularity of the transformation is seen by inverting that relation. When [[m]] is nonzero, the velocity is reconstructed from the momentum:

{{f:velocidad_desde_momento}}

For several coordinates, the same idea is expressed through the velocity Hessian [[W]]. The formal condition is not that the formula merely looks solvable, but that the determinant of that matrix does not vanish:

{{f:condicion_regularidad_legendre}}

The Hamiltonian function is then defined as the Legendre transform of the Lagrangian with respect to velocity:

{{f:hamiltoniano_legendre}}

After substituting the quadratic relation, the Hamiltonian is written only with [[p]], [[m]], and [[V]]:

{{f:hamiltoniano_cuadratico}}

These expressions contain the minimal structure of the variable change. First compute the conjugate slope, then check that velocity can be recovered, and finally write [[H]] without hidden velocities. If a [[qdi]] remains in the final result, the move to phase space has not been completed.

## 🔴 Structural Level

The Legendre transformation does not belong only to mechanics. It is a general operation for replacing a variable with its conjugate variable. In thermodynamics, for example, it converts internal energy into potentials whose natural variables include temperature or pressure. In mechanics, the relevant conjugate pair is velocity-momentum.

The deep condition is the curvature of [[L]] with respect to [[qdi]]. In one coordinate that curvature reduces to an effective mass; in several coordinates it is collected by [[W]]. If that curvature distinguishes different velocities through different momenta, the variable change is regular. If several velocities produce the same [[p]], the system is degenerate: constraints appear and the ordinary Hamiltonian formulation is no longer direct.

It is also important to understand that the sign and numerical value of [[H]] depend on the model. In conservative systems with velocity-independent potential, [[H]] equals mechanical energy. In time-dependent systems, electromagnetic systems, or non-inertial coordinates, that identification must be checked carefully.

Structurally, the transformation decides whether two languages contain the same information. When the map is regular, every state described by configuration and velocity has an equivalent state described by configuration and momentum. When the map is not regular, redundant variables or constraints appear and the method must be extended. This boundary is central for teaching the Hamiltonian not as an algebraic recipe, but as a controlled reconstruction of the physical state.

## Deep Physical Interpretation

The Lagrangian organizes dynamics through the balance between kinetic tendency and potential structure. The Hamiltonian reorganizes the same information through the instantaneous state in phase space. Instead of asking "with what velocity does the system pass through this configuration", it asks "with what conjugate momentum does it occupy this configuration".

This distinction matters pedagogically. In Lagrangian problems, velocities usually appear as derivatives of coordinates. In Hamiltonian problems, [[qi]] and [[p]] are treated as independent state variables. The Legendre transformation explains why this independence does not contradict the original definition of [[p]]: it comes from a local inversion of the map between [[qdi]] and [[p]].

## Order of Magnitude

For a particle with mass of order one kilogram moving at one meter per second, [[p]] has order unity in SI units. If the potential energy is also of order one joule, [[H]] lies in the same range as the observable mechanical energy. This scale helps detect errors: using grams as kilograms or confusing velocity with momentum changes [[H]] by large factors.

For angular coordinates, the units change although the logic does not. The conjugate momentum of an angle is angular momentum, not linear momentum. Therefore the unit of [[p]] must be read from the chosen coordinate [[qi]], not from a universal template.

## Personalized Resolution Method

First identify the coordinate [[qi]] and write [[L]] as a function of [[qi]] and [[qdi]]. Second compute [[p]] by differentiating with respect to velocity, not with respect to the coordinate. Third try to solve for [[qdi]] as a function of [[p]]. If you cannot do so uniquely, do not proceed as if the ordinary Hamiltonian had been built.

Fourth substitute the solved velocity into the definition of [[H]]. Fifth check whether [[H]] has an energy interpretation: verify whether the Lagrangian has no explicit time dependence and whether the potential is velocity-independent. Sixth interpret the phase variables: a point with the same position and a different momentum represents a different physical state.

## Special Cases and Extended Example

In the quadratic case, everything looks almost automatic because [[p]] is proportional to [[qdi]]. That simplicity can hide the real physical criterion: the transformation works because the slope of [[L]] changes monotonically with velocity. If the kinetic energy were singular or if a velocity did not appear in [[L]], the conjugate momentum would not allow that velocity to be recovered.

A simple harmonic oscillator illustrates the regular case. The coordinate [[qi]] is displacement, [[m]] measures effective inertia, and [[V]] increases with the square of position. The transformation converts the kinetic information into a quadratic term in [[p]], so the state is described by position and momentum. That form is what allows closed orbits to be drawn in phase space.

## Real Student Questions

A common question is why the Hamiltonian is not simply defined as total energy. The reason is that the formalism needs a construction that works from [[L]]. In many systems the result equals energy, but that equality is a consequence of physical hypotheses, not a universal definition.

Another doubt is why [[p]] is called momentum if it is obtained by differentiating. In ordinary Cartesian coordinates that derivative reproduces linear momentum. In generalized coordinates, the name is kept because the variable plays the dynamical role conjugate to the coordinate, although its unit and interpretation depend on the system.

## Cross-cutting connections and study paths

This leaf connects directly with kinetic and potential energy, Lagrange equations, and Hamilton equations. Before studying it, one should understand how [[L]] is built and what a generalized coordinate means. After it, the natural step is to see how [[H]] generates equations of motion for [[qi]] and [[p]].

It also prepares ideas from modern physics. Conjugate variables appear in statistical mechanics, Hamiltonian optics, and quantum mechanics. The Legendre transformation teaches that changing variables does not lose information, provided the map is regular.

## Final Synthesis

The Legendre transformation converts a velocity-based description into a conjugate-momentum description. Its core is to compute [[p]], check that [[qdi]] can be recovered, and build [[H]] without hidden dependencies. By the end of this node, you should be able to decide when the Hamiltonian represents mechanical energy and when it is only the phase-space function organizing the dynamics.
`;export{e as default};
