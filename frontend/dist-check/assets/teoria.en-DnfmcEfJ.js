const e=`# Energy in Rolling\r
\r
## Conceptual context\r
\r
Energy in rolling appears when a body translates and rotates at the same time. It is not only translational energy, because the center of mass moves with [[v_cm]], and it is not only rotational energy, because the body also changes position. The correct reading adds both parts and asks whether the contact allows the no-slipping rolling condition. That is why this leaf connects [[K_total]], [[m]], [[I]], [[R]], [[omega]], and the contact geometry.\r
\r
In an ideal wheel, every point of the rigid body shares the same [[omega]], while the center of mass advances. If the contact point does not slip, center-of-mass speed and spin are linked by a kinematic contact condition. That relation is not automatic; it is a physical hypothesis about the contact. When it holds, forward motion and spin are linked, and total kinetic energy is split between translation and rotation.\r
\r
The contrast with sliding is important. A block sliding down an incline may transform gravitational energy mostly into translation. A rolling cylinder must reserve part of the available energy for spin. Therefore its [[a_cm]] is usually smaller than that of an ideal sliding block, even though ideal static friction does not dissipate energy in pure rolling.\r
\r
## 🟢 Essential level\r
\r
The essential idea is that a rolling body has two kinetic stores. The first depends on mass [[m]] and center-of-mass speed [[v_cm]]. The second depends on moment of inertia [[I]] and angular speed [[omega]]. Their sum is [[K_total]]. If only one part is computed, the energy balance is incomplete.\r
\r
The rolling condition uses radius [[R]] to connect forward motion and spin. If a wheel advances too much for its spin, or spins too much for its advance, there is slipping or the effective radius is wrong. This check prevents formulas for pure rolling from being applied to skidding tires, slipping coins, or cylinders that lose contact.\r
\r
Physically, [[I]] decides what fraction of [[K_total]] is stored in spin. A hoop keeps mass far from the axis and uses more energy for rotation. A solid disk uses less for rotation and more for translation for the same available energy. That difference explains why bodies with equal mass and radius do not descend an incline in the same way.\r
\r
## 🔵 Formal level\r
\r
The core rolling-energy formula is\r
\r
{{f:energia_total_rodadura}}\r
\r
The rolling kinematic condition is\r
\r
{{f:condicion_rodadura_energia}}\r
\r
. The first term is kinetic energy of the center of mass; the second is spin energy about the center. If rolling without slipping also holds, this condition lets us substitute [[v_cm]] using [[R]] and [[omega]], but only after the contact has been checked.\r
\r
Acceleration has a related condition:\r
\r
{{f:aceleracion_cm_rodadura}}\r
\r
. This belongs to rolling kinematics rather than directly to energy, but it links the energy split with dynamics. On an incline of angle [[phi]], gravity [[g]] drives the motion, and the static-friction torque [[tau]] can change spin without doing ideal dissipative work at the contact point.\r
\r
When a potential reference is included, use\r
\r
{{f:energia_mecanica_total_rodadura}}\r
\r
for the complete mechanical balance. [[E_total]] may add [[K_total]] and potential energy, while [[K_total]] only measures kinetic energy. Separating those names prevents confusing energy available on an incline with energy already transformed into motion. The angular displacement [[theta]] can appear if work is computed from torque and angular displacement.\r
\r
## 🔴 Structural level\r
\r
Structurally, solving rolling energy requires three decisions. First, decide whether the system is a rigid body with constant [[I]]. Second, decide whether contact allows [[v_cm]] equal to [[R]] times [[omega]]. Third, decide whether the balance needs only [[K_total]] or a mechanical energy [[E_total]] including potential energy, losses, or external work.\r
\r
Static friction often causes confusion. In pure rolling it can provide the torque that adjusts [[omega]] and [[a_cm]] without dissipating energy at the contact point. If slipping occurs, the situation changes: thermal loss appears and the rolling condition is no longer valid. Then using the ideal formula with an invalid contact assumption produces an answer that is too clean for the actual process.\r
\r
The difficulty progression goes from identifying terms to diagnosing validity. In simple problems, adding translation and rotation is enough. On inclines, [[g]], [[phi]], and conservation of [[E_total]] enter. In real machinery, deformation, effective radius, bearings, losses, and adhesion limits matter. The same formula remains useful, but only inside a declared model.\r
\r
## Deep physical interpretation\r
\r
[[K_total]] measures how much organized motion the rolling body has. The translational part says how much the center advances; the rotational part says how much mass spins about that center. The rolling condition does not create energy; it forces both parts to evolve together.\r
\r
The role of [[I]] is to redistribute energy. For the same [[v_cm]], a body with larger [[I]] needs more rotational energy because it must spin with the [[omega]] imposed by [[R]]. This is why geometry affects final speed on an incline even when mass and radius are equal.\r
\r
## Order of magnitude\r
\r
A small wheel with [[m]] near 1 kg, [[R]] near 0.1 m, and [[v_cm]] near 2 m/s stores only a few joules. A vehicle wheel with tens of kilograms and much larger speed can store thousands of joules in translation and rotation. If the result is millions of times outside the expected scale, units, radius, rpm, or moment of inertia are probably wrong.\r
\r
## Personalized resolution method\r
\r
First identify pure rolling or slipping. Second, write translational and rotational energy separately. Third, use [[R]] to connect [[v_cm]] and [[omega]] only if contact permits it. Fourth, decide whether the target is [[K_total]] or [[E_total]]. Fifth, check whether [[a_cm]], [[alpha]], [[tau]], or [[theta]] belong to the process or are only contextual data.\r
\r
## Special cases and extended example\r
\r
A hoop, a disk, and a sphere can share the same [[m]] and [[R]] but have different [[I]]. On an ideal incline, the body with the smaller rotational fraction usually gains more translational speed. If slipping occurs, the split changes because part of the energy is dissipated. If the effective radius changes by deformation, the kinematic condition also changes.\r
\r
## Real student questions\r
\r
Does friction do work in pure rolling? At the ideal contact point there is no relative displacement, so static friction does not dissipate energy there. Why does it still produce torque? Because it can change spin without turning mechanical energy into heat. Can I always use [[v_cm]] equal to [[R]] times [[omega]]? No; first confirm no slipping.\r
\r
## Cross-cutting connections and study paths\r
\r
This leaf connects rotational kinetic energy, rolling kinematics, rolling dynamics, and energy conservation. It also prepares analysis of real bodies, where [[E_total]] includes losses, deformation, and thermal transfer. A useful path is moment of inertia first, then rolling condition, then energy in rolling, then incline problems.\r
\r
The same distinction also helps with diagnostics. If a result predicts a very large [[omega]] for a modest [[v_cm]], the radius may be wrong. If the rotational share is zero while [[I]] and [[omega]] are nonzero, a term has been dropped. If [[E_total]] changes in an ideal problem with no external work, a hidden loss or a modeling mistake must be present.\r
\r
## Final synthesis\r
\r
Energy in rolling is a split. [[K_total]] adds center-of-mass advance and spin about the center; [[E_total]] expands the balance when potential energy or external work exists. The relation using [[R]] is valid only without slipping. Choosing the model correctly is as important as substituting the numbers correctly.`;export{e as default};
