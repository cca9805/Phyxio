# Models of Hamilton's Equations

## Ideal Model

The ideal model uses a canonical pair formed by [[qi]] and [[p]], together with a differentiable Hamiltonian [[H]]. Hamilton's equations convert slopes of [[H]] into the instantaneous flow of the state. The clearest case is the quadratic oscillator, because [[qd]] depends linearly on [[p]] and [[pd]] depends linearly on [[qi]].

The advantage of the ideal model is that it clearly separates energy value from direction of motion. The same value of [[H]] may correspond to many phase points, but each point has its own local vector. This distinction prevents the Hamiltonian from being taught as a static energy only.

## Hypotheses

- [[qi]] and [[p]] form a canonical pair.
- [[H]] is written only with phase variables and parameters.
- [[H]] is differentiable with respect to coordinate and momentum.
- In the oscillator, [[m]] is positive and [[k]] is non-negative.
- The conservation reading requires controlling explicit time dependence [[Ht]].

## Quantitative Validity Domain

In the stable quadratic model, [[m]] must be greater than zero and [[k]] greater than or equal to zero. If [[m]] is very small, the same [[p]] produces a large [[qd]]; if [[k]] is very large, a small displacement produces an intense [[pd]]. The order of magnitude of these slopes determines how rapidly the point travels through the phase portrait.

## Model failure signals

A failure signal appears if the variables are not canonical or if [[H]] retains hidden velocities. Another signal is incompatible units: a derivative with respect to [[p]] that does not produce velocity, or a derivative with respect to [[qi]] that does not produce a generalized force. It is also a failure to interpret constant [[H]] as rest.

## Extended or Alternative Model

The extended model uses many canonical pairs. Each pair has its own coordinate equation and momentum equation. In constrained systems, a Hamiltonian formalism with multipliers or primary constraints may be necessary. In ordinary dissipative systems, the flow is usually not simple Hamiltonian flow and requires an enlarged description.

It is convenient to switch to an alternative model when the variables are not canonical, when constraints prevent velocities from being solved regularly, or when real dissipation reduces energy cycle after cycle. In such cases, applying the simple equations may produce qualitatively false trajectories.

## Operational Comparison

The Newtonian approach centers on forces and accelerations. The Lagrangian approach centers on coordinates and action. The Hamiltonian approach centers on phase flow. Hamilton's equations are especially useful for phase portraits, stability, conservation, canonical symmetries, and bridges toward statistical and quantum mechanics.

Operationally, Newton is often direct for few bodies with clear forces; Lagrange is efficient with constraints; Hamilton is superior when one needs state geometry, constants of motion, or simulations that preserve structure. Choosing among them is part of physical modeling.
