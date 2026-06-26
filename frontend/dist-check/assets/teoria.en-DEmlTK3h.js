const e=`\uFEFF# Perfectly inelastic collisions\r
\r
## Conceptual context\r
\r
A perfectly inelastic collision is the extreme case where bodies **unite after impact and move as a single object**. It is the collision that loses the maximum possible kinetic energy without violating momentum conservation. In this model, the coefficient of restitution is zero.\r
\r
Although it seems like a "simple" case (one unknown), it is of enormous practical relevance: it models a projectile embedding itself in a block, railway cars coupling, a meteorite hitting a planet, and particle capture in nuclear physics.\r
\r
## 🟢 Essential level\r
\r
The essential idea is not the formula but the physical result: after impact, two independent motions no longer exist. The bodies form a single assembly and therefore share a single final velocity.\r
\r
That common velocity does not mean the collision was "soft." It means the system gives up conserving separate motions. The total momentum still determines how the assembly moves forward, but part of the initial kinetic energy [[Ki]] is no longer seen as translation and is transformed into deformation, heat, or sound.\r
\r
It is important at this level to recognize two simultaneous facts. First, the assembly keeps moving because momentum does not disappear. Second, the collision no longer returns the bodies as separate objects, so the final motion is poorer than the initial one from an energetic point of view.\r
\r
If a light body arrives very fast against another much heavier one, the final assembly usually moves slowly. If the masses are similar, the common velocity may be more intermediate and the energy loss is especially visible. This is the intuition that should be clear before moving on to mathematical expressions.\r
\r
> [!IMPORTANT]\r
> The final velocity is always between the initial velocities of the two bodies. It can never be greater than the largest nor less than the smallest of the initial velocities.\r
\r
## 🔵 Formal level\r
\r
### Energy balance and dissipation\r
\r
The fundamental expression of the model is the linear momentum balance:\r
\r
which determines the common final velocity [[vf]] of the assembly:\r
\r
{{f:vf}}\r
\r
From this final state, we calculate the energetic magnitudes of the leaf. The energy available before impact is [[Ki]]:\r
\r
{{f:Ki}}\r
\r
The kinetic energy that survives as translation of the joined assembly is [[Kf]]:\r
\r
{{f:Kf}}\r
\r
And the amount of degraded mechanical energy is quantified by the variation [[DeltaK]]:\r
\r
{{f:DeltaK}}\r
\r
Since it is a perfectly inelastic collision, [[DeltaK]] is always negative (or zero in the trivial case): the final kinetic energy [[Kf]] is strictly less than the initial [[Ki]].\r
\r
To evaluate the severity of the loss, we usually calculate the fraction of energy that has been transformed into non-mechanical forms:\r
\r
{{f:loss_fraction}}\r
\r
If the target is at rest, this fraction depends exclusively on the mass ratio. If the target [[m2]] is much heavier than the projectile [[m1]], almost all the energy is dissipated. If the projectile is dominant, most of the energy is conserved as translation of the assembly.\r
\r
In the leaf's vocabulary, [[vf]] sets the shared motion, [[Ki]] sets the starting energy scale, [[Kf]] identifies the useful part that survives, and [[DeltaK]] along with [[loss_fraction]] characterize the dissipative nature of the impact.\r
\r
### Maximum loss demonstration\r
\r
In the center of mass frame, the kinetic energy before the collision represents all the "relative" energy of the system. After a perfectly inelastic collision, both bodies are at rest in the CM frame, which means all relative energy has dissipated. This demonstrates that the condition of stuck bodies corresponds to the maximum possible loss of mechanical energy.\r
\r
### 2D vector case\r
\r
In two dimensions, the principle remains the same: the total linear momentum vector is conserved. The common final velocity [[vf]] is the mass-weighted average of the initial vector velocities. The direction of the assembly after impact will not, in general, coincide with any of the original trajectories, but will follow the line of the net momentum of the system.\r
\r
{{f:p_balance}}\r
\r
## 🔴 Structural level\r
\r
### Position in the collision spectrum\r
\r
The perfectly inelastic collision is the lower end of the spectrum according to the coefficient of restitution:\r
- **Elastic**: Totally conserved.\r
- **Inelastic**: Partially dissipated.\r
- **Perfectly inelastic**: Maximum dissipation allowed by the momentum balance.\r
- **Superelastic**: Increase in kinetic energy (explosion or internal release).\r
\r
### Maximum irreversibility\r
\r
By dissipating all relative energy, the perfectly inelastic collision produces the maximum entropy generation. The bodies, after uniting, have no way of spontaneously separating (energy would have to be injected). This makes the perfectly inelastic collision a fundamentally one-way process.\r
\r
### Connection with particle physics\r
\r
In high-energy physics, the capture of one particle by another (formation of a composite state) is a relativistic perfectly inelastic collision. The invariant mass of the product is greater than the sum of the masses of the reactants because the dissipated kinetic energy has been converted into mass (energy-mass equivalence). Example: formation of the Z boson in LEP.\r
\r
### Minimum conserved energy\r
\r
The kinetic energy that survives is that of the motion of the center of mass. This amount is "indestructible" by internal forces: only a net external force can alter the overall motion of the system. In the perfectly inelastic collision, we are left with exactly this energetic minimum.\r
\r
## Deep physical interpretation\r
\r
In the perfectly inelastic collision, all the kinetic energy that could be lost is effectively lost. It is the "worst-case scenario" in terms of mechanical energy conservation, but the simplest in algebraic terms: a single momentum equation gives the answer. Paradoxically, the most destructive case is the easiest to solve.\r
\r
The phenomenon illustrates a profound truth: momentum conservation is more robust than kinetic energy conservation. Momentum is immune to internal forces; kinetic energy is not.\r
\r
Causal reading helps not to mechanize formulas. If the total mass [[m1]] + [[m2]] increases while keeping the initial momentum fixed, [[vf]] decreases because the same net impulse must drag a heavier assembly. If the difference between [[v1i]] and [[v2i]] increases, [[Ki]] grows and so does the magnitude of [[DeltaK]], because the collision must eliminate more relative energy to force a common output.\r
\r
## Order of magnitude\r
\r
A ballistic pendulum captures a projectile of approximately 10 g at 400 m/s in a block of 2 kg. The fraction of conserved kinetic energy is roughly 0.5 percent. In astrophysics, the accretion of matter by a neutron star is essentially perfectly inelastic, transforming kinetic energy into X-ray radiation with luminosities reaching 10 to the power of 37 Watts.\r
\r
## Personalized resolution method\r
\r
1. **Confirm** that the bodies unite after impact.\r
2. **State** the linear momentum balance:\r
\r
\r
3. **Calculate** the common final velocity [[vf]] by solving from the previous expression.\r
4. **If energy loss is requested**: determine [[Ki]] and [[Kf]] to find the variation [[DeltaK]].\r
5. **If height is requested** (ballistic pendulum): equate the final kinetic energy [[Kf]] with the gravitational potential energy at the highest point.\r
\r
## Special cases and extended example\r
\r
**Ballistic pendulum.** A bullet embeds itself in a suspended block. By sticking together, the assembly acquires a velocity [[vf]] that entirely transforms its energy [[Kf]] into potential energy, allowing the calculation of the projectile's initial velocity [[v1i]] from the height reached.\r
\r
**2D Collision.** If bodies collide with oblique trajectories, linear momentum is conserved as a vector. The resulting assembly will follow the direction of the initial total momentum, averaging the original velocities according to their respective masses [[m1]] and [[m2]].\r
\r
## Real student questions\r
\r
- **Is a perfectly inelastic collision always the one that loses the most energy?** Yes, for a given mass and momentum. It is the lower limit for the final kinetic energy of the system.\r
- **Can one body absorb another without deforming?** In principle, yes (a sandbag catching a projectile), but there is always internal dissipation.\r
- **Can the elastic formula be used with a zero coefficient of restitution?** Yes: the general formulas with a coefficient of restitution give identical velocities for both bodies when that coefficient is zero, which is the formula for the perfectly inelastic collision.\r
\r
## Cross-cutting connections and study paths\r
\r
- **Contrast**: [Elastic collisions](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-elasticas) and [Inelastic collisions](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-inelasticas).\r
- **Quantification**: [Coefficient of restitution](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/coeficiente-de-restitucion) (e=0).\r
- **Classic application**: ballistic pendulum (determination of projectile velocity).\r
\r
## Final synthesis\r
\r
The perfectly inelastic collision (coefficient of restitution of zero) unites bodies into a single object, losing the maximum kinetic energy compatible with momentum conservation. Its resolution is algebraically the simplest (one equation, one unknown) and has direct applications in ballistics, impact engineering, and particle physics.\r
\r
\r
\r
`;export{e as default};
