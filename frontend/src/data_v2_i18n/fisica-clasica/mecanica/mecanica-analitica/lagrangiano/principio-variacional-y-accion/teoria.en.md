# Variational principle and action

## Conceptual context

The variational principle introduces a different way to decide which motion is physically possible. Instead of adding forces component by component, it compares complete paths between fixed endpoints and asks which one makes a quantity called [[S]] stationary. That quantity is not an instantaneous energy; it is the time accumulation of the [[L]] along the whole motion.

This leaf belongs immediately before Lagrange's equations. Without stationary action, Euler-Lagrange can look like an algebraic recipe. With the variational principle, the local equation is understood as the consequence of a global comparison of paths.

## 🟢 Essential level

The essential idea is that the system does not choose a path because it has the shortest distance or because it always minimizes energy. The Lagrangian criterion is more precise: among kinematically admissible paths with the same endpoints, the physical path makes the action unchanged to first order under small allowed variations.

This means that a nearby path may have larger action, smaller action, or even form a saddle-type stationary point. Therefore the correct phrase is stationary action, not universal least action. The student should picture a family of paths: action is computed for each one, and the physical path appears where the first variation vanishes.

Three objects must be kept separate. A possible path respects kinematics and endpoints. A virtual variation slightly changes that path without moving the endpoints. The physical path is the one that passes the variational test. This prevents the common error of varying the final time or changing the problem itself.

## 🔵 Formal level

The Lagrangian action is defined by integrating the Lagrangian between two fixed times:

{{f:accion_lagrangiana}}

Hamilton's principle requires first-order stationarity:

{{f:condicion_accion_estacionaria}}

When that condition is developed for a generalized coordinate [[qi]] and its velocity [[qdi]], the local residual appears:

{{f:residuo_variacional_euler_lagrange}}

The conservative physical path is characterized by:

{{f:ecuacion_euler_lagrange_desde_accion}}

The formal reading matters: [[S]] depends on a complete function [[qi]] from [[t1]] to [[t2]]. This is not an ordinary derivative with respect to a number, but a variation with respect to a path. The residual [[Ri]] appears because stationarity must hold for every independent admissible variation.

If [[Ri]] does not vanish, the candidate path does not satisfy the variational principle of the conservative model. If external non-potential forces are present, the leaf on Lagrange's equations extends the balance through generalized forces; here the ideal core explains where the structure comes from.

The formal step also clarifies why boundary conditions are not administrative detail. After integration by parts, boundary terms disappear only when variations vanish at the endpoints. If the final endpoint were free, an additional natural condition would appear and the problem would no longer be the same leaf. This precision prevents the principle from becoming an incomplete recipe.

## 🔴 Structural level

Structurally, the variational principle turns a dynamical problem into a selection problem inside a space of paths. Local information about forces is encoded in [[L]], but the selection criterion is global: integrate, vary, and impose stationarity. This is why the formalism works naturally with generalized coordinates and ideal constraints.

Fixed endpoints are decisive. If the initial or final point is allowed to move without changing the statement of the problem, a different problem is being solved. Virtual variations are not alternative real paths produced by another force; they are mathematical changes compatible with the restrictions, used to detect whether the proposed path is stationary.

There are also model limits. This form of the principle assumes a regular Lagrangian, smooth coordinates, and relevant forces incorporated into [[L]]. Dry friction, impacts, discontinuous actuation, or non-ideal constraints may require additional terms, generalized forces, or extended variational methods.

The resulting structure can audit models. If two candidate paths share endpoints but one violates a constraint, it is not part of the comparison set. If a variation changes the duration, it introduces another physical question. And if a non-conservative external force is absent from [[L]], the conservative condition is not closed. The principle does not replace physical judgment; it forces it to be declared.

## Deep physical interpretation

The deeper interpretation is that laws of motion can be read as a path-coherence condition. Nature is not consciously testing paths; the variational principle is a compact way of expressing an equivalent differential law under certain hypotheses. Its value is that it organizes dynamics from a scalar function.

For a teacher, this leaf explains why analytical mechanics is not merely complicated Newtonian notation. The question changes from "which force acts on each axis" to "which path makes the model's action stationary." That question connects energy, coordinates, and symmetries within one framework.

## Order of magnitude

If [[L]] is of order 10 J and the interval from [[t1]] to [[t2]] is 2 s, then [[S]] is of order 20 J s. The absolute number can change if the zero of potential energy is shifted, but stationarity under admissible variations preserves the relevant dynamical content.

The quantity [[deltaS]] must be interpreted as a first-order change. On an ideal physical path this term vanishes even if the total action is not zero. Therefore the scale of [[S]] does not directly predict the size of [[deltaS]].

## Personalized resolution method

First define the system, its coordinates [[qi]], and the time interval. Second build [[L]] with compatible energies and interactions. Third form [[S]] as the time integral of the Lagrangian. Fourth declare the admissible variations, keeping endpoints fixed.

Fifth impose stationarity through [[deltaS]]. Sixth obtain the residual [[Ri]] and set it to zero for each independent coordinate. Seventh interpret the resulting equation and check that it recovers known behavior in a simple case.

## Special cases and extended example

For a free particle, all paths between two points are not equivalent. The straight uniform path makes the action stationary because admissible curvature changes the kinetic balance to first order. For a harmonic oscillator, the sinusoidal path appears because the Lagrangian combines kinetic and elastic potential energy.

A subtle case appears when a path makes the action stationary without being an absolute minimum. This does not invalidate the principle; it shows that stationarity is the correct criterion. In advanced problems, one action may have several stationary paths, each requiring physical and stability analysis.

## Real student questions

A common question is why one cannot vary only the position at a single instant. The answer is that the principle compares complete functions joining fixed endpoints. Changing an isolated point without smoothly adjusting the path is not an admissible variation of the continuous problem.

Another question is whether action can be measured directly. Usually it is not measured as a simple instrument reading; it is computed from the model. Its educational role is to select the path and derive equations, not to replace a direct energy reading.

## Cross-cutting connections and study paths

This leaf should be studied after kinetic and potential energy, and before Lagrange's equations. It connects with generalized coordinates because action is written in variables adapted to the system. It connects with constraints because only compatible variations are allowed. It connects with symmetries because Noether interprets invariances of the action.

After mastering it, the natural step is to apply Euler-Lagrange, study generalized forces, and move to the Hamiltonian through the Legendre transformation. Action also prepares modern physics: variational optics, quantum mechanics, and field theories use the same structural idea.

## Final synthesis

The variational principle states that the physical path makes action stationary under admissible fixed-endpoint variations. Its didactic goal is to make Euler-Lagrange understandable: a local condition arising from comparison of complete paths.
