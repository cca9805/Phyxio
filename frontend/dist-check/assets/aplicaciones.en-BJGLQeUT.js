const e=`# Applications of isolated systems and external forces\r
\r
## 1. Traffic accident reconstruction\r
\r
**Context:** Forensic experts use conservation of [[momento_lineal_total]] to reconstruct pre-collision velocities. When two vehicles collide and stick together, the system can be treated as isolated during the very brief instant of impact.\r
\r
**Dominant variable:** [[Pfinal]]\r
\r
**Description:** From the common velocity [[vf]] of the combined set after the collision and the [[masa_individual]] of each vehicle, the perfectly inelastic collision formula yields the initial velocities [[v1i]] and [[v2i]]. The key insight is that the horizontal [[fuerza_externa_neta]] (friction, parallel gravity) has negligible [[impulso_externo]] during the impact instant (milliseconds), so the [[variacion_momento_total]] is zero within that time window. Outside that instant, friction acts and conservation no longer applies. Skid marks before and after the impact are analyzed with separate kinematic friction models, and the [[momento_lineal_total]] at the point of impact serves as the bridge between the two phases of the accident analysis.\r
\r
**Validity limit:** The model is valid only during the collision instant. Pre- or post-impact skid marks must be analyzed with separate friction models. If the contact interval is long (rollovers, cushioned impacts), the [[impulso_externo]] from friction is not negligible and simple conservation fails.\r
\r
---\r
\r
## 2. Rocket propulsion and stage separation\r
\r
**Context:** A rocket expels mass (gases) backward to increase its forward [[momento_lineal_total]]. Stage separation is a case of internal explosion from a moving system.\r
\r
**Dominant variable:** [[momento_lineal_individual]]\r
\r
**Description:** The rocket-gas system is isolated in vacuum (no significant [[fuerza_externa_neta]]). When the lower stage separates at backward [[v2f]], the payload acquires a higher forward [[v1f]]. The recoil law guarantees that the [[variacion_momento_total]] of the combined system is zero: what the lower stage gains of [[Pinitial]] backward, the payload gains forward. The [[masa_individual]] of each stage is the key design parameter for the rocket.\r
\r
**Validity limit:** The isolated system model is valid in deep vacuum or during brief intervals in tenuous atmospheres where aerodynamic drag has negligible [[impulso_externo]]. In dense atmospheres, the aerodynamic [[fuerza_externa_neta]] must be included in the balance.\r
\r
---\r
\r
## 3. Particle physics collisions\r
\r
**Context:** In particle accelerators, detectors record the [[momento_lineal_individual]] of fragments produced in a collision. Their vector sum must be conserved if the system is isolated.\r
\r
**Dominant variable:** [[variacion_momento_total]]\r
\r
**Description:** Before the collision, the system [[Pinitial]] is known precisely. After the impact, the sum of all fragment [[momento_lineal_individual]] values must equal [[Pfinal]] = [[Pinitial]]. Any deviation in the [[variacion_momento_total]] indicates undetected particles (like neutrinos) or unmodeled [[fuerza_externa_neta]]. This principle was crucial in the discovery of the neutrino: Pauli proposed it in 1930 precisely to explain the apparent [[variacion_momento_total]] in beta decay.\r
\r
**Validity limit:** Conservation of [[momento_lineal_total]] is exact in the absence of external forces. In high-energy experiments, electromagnetic interactions with the beam or the detector's magnetic fields constitute external forces that must be calibrated and subtracted from the analysis.\r
\r
---\r
\r
## 4. Firearms and recoil\r
\r
**Context:** When fired, the bullet-gun system is initially at rest ([[Pinitial]] = 0). The expansion of the propellant gases is an internal force to the system, so the [[momento_lineal_total]] is conserved.\r
\r
**Dominant variable:** [[v1f]]\r
\r
**Description:** The [[masa_individual]] of the bullet is [[m1]] with forward [[v1f]]; the [[masa_individual]] of the gun is [[m2]] (much larger) with backward recoil velocity [[v2f]]. The recoil law guarantees [[m1]]·[[v1f]] + [[m2]]·[[v2f]] = 0, so the [[variacion_momento_total]] of the system is zero. The gun experiences zero [[impulso_externo]] during the shot (gases act internally). The discomfort of shooting comes from the large [[fuerza_externa_neta]] the shooter must exert to absorb the gun's recoil. Designers exploit this principle by using heavier guns or muzzle brakes that redirect gas outward to reduce the backward [[impulso_externo]] felt by the shooter. In recoil-operated semi-automatic pistols, this backward momentum transfer is the mechanism that cycles the action.\r
\r
**Validity limit:** The model is valid while the system is the gun + bullet and friction with the ground during the very brief firing instant is negligible. If the gun is attached to a recoil damping system, the [[fuerza_externa_neta]] of the recoil mechanism modifies the balance.\r
\r
---\r
\r
## 5. Orbital maneuvers: space docking\r
\r
**Context:** Two spacecraft approach for docking. Before contact, each has its own [[momento_lineal_individual]]. After coupling, they form a single system with a common [[vf]].\r
\r
**Dominant variable:** [[vf]]\r
\r
**Description:** If both spacecraft cut their engines during the docking maneuver, the gravitational [[impulso_externo]] is equal for both (similar trajectories) and can be considered negligible on the scale of the encounter. The docking collision is perfectly inelastic: the system [[Pinitial]] determines the combined [[vf]]. The [[masa_total]] of the combined system and the relative velocity difference are the parameters flight controllers must calculate to plan subsequent correction maneuvers. The relative [[velocidad_individual]] between the two craft must be carefully controlled — too large a closing speed would imply a large post-docking [[variacion_momento_total]] that could destabilize the combined vehicle.\r
\r
**Validity limit:** The isolated system model is a valid approximation during the docking instant. Before and after, engines and orbital gravity constitute [[fuerza_externa_neta]] that dominates the long-term trajectory.\r
`;export{e as default};
