const e=`# Models for Canonical Transformations\r
\r
## Ideal model\r
\r
The ideal model is a regular classical system in which changes of chart, symplectic preservation, generating functions, new variables, and equivalence of Hamiltonian descriptions can be described with smooth variables [[q]], [[p]], [[Q]], [[P]], [[K]], [[Fgen]], [[C]]. The model assumes that the analytical structure is the object being tested, not an optional decoration.\r
\r
## Hypotheses\r
\r
- The variables belong to the same coherent mechanical system.\r
- The transformations, derivatives, separations, or linearizations are regular.\r
- The dominant quantity [[C]] has the physical role declared in magnitudes.yaml.\r
- The limiting case remains recognizable after applying the formal relation.\r
\r
## Quantitative validity domain\r
\r
The model is quantitatively valid while the structural scale stays controlled. Small oscillations require small \`eta\`; canonical changes require the bracket condition to remain exact; Hamilton-Jacobi separation requires a consistent action scale; Poisson criteria require smooth observables. A ten percent drift in a supposedly exact structural check is already a model warning.\r
\r
\r
The quantitative criterion must be explicit: for an approximation labeled small, use a control such as relative change <= 10% (0.10); for an exact canonical or bracket condition, the accepted tolerance is zero in the theoretical model and only numerical roundoff in computation. It is convenient to change model when this bound is exceeded, when a singular transformation appears, when a mode ceases to be linear, or when the conserved structure drifts for no physical reason.\r
\r
## Model failure signals\r
\r
The model fails when the result depends on variables that are not admissible, when a conserved structure drifts without physical cause, when dimensions are mixed, or when a limiting case is not recovered. In those cases the formula may still be writable, but it no longer represents the original system.\r
\r
## Extended or alternative model\r
\r
Use constrained Hamiltonian mechanics, perturbation theory, nonlinear normal modes, numerical integration, or a direct Lagrangian model when the assumptions fail. The extension must be chosen because of the physical failure, not because the algebra became inconvenient.\r
\r
## Operational comparison\r
\r
Direct equations are best for explicit trajectories. This advanced leaf is best for structure, reduction, and diagnosis. Numerical models are best when the reduced structure does not close analytically. The correct model is the simplest one that preserves the physical question.\r
\r
## Transition criterion\r
\r
Change to the alternative model when the observable error is larger than the declared tolerance, when the limiting case is lost, or when the dominant quantity no longer keeps its physical unit and role. This transition is part of the physics, not a last-minute repair.\r
`;export{e as default};
