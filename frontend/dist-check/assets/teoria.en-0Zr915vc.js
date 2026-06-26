const e=`# Magnetic Force on Moving Charges

## Conceptual context

An electric charge at rest does not feel a magnetic force merely because it is inside a magnetic field. For a point particle, magnetism appears when there is **relative motion** between charge and field. This leaf connects [[B]] with the actual trajectory of a charged particle.

The idea is used in cloud chambers, mass spectrometers, accelerators, and magnetic plasma confinement. In all of them, the field is not only present: it organizes motion through a perpendicular force.

> [!NOTE]
> This topic does not replace electric force. It studies the magnetic part that appears when [[q]] moves with [[v]] inside [[B]].

## 🟢 Essential level

Magnetic force on a moving charge is a **deflecting force**. If a charged particle enters a region with a magnetic field, the field can bend its path without pushing it forward as a tangential force would. The magnitude that summarizes that interaction is [[F_B]].

The deflection depends on three simple ideas: how much charge the particle carries, how fast it crosses the field, and how strong the field is. **Orientation** also matters. If the particle moves parallel to the field lines, the magnetic effect disappears; if it moves perpendicularly, the effect is maximal.

> [!WARNING]
> Do not imagine [[B]] as a wind dragging the charge. The field sets a geometric direction, and the force appears perpendicular to both motion and field.

## 🔵 Formal level

The formal model uses the magnitude of magnetic force to separate intensity from direction. Direction comes from the right-hand rule and the sign of [[q]]; the magnitude calculation uses [[q]], [[v]], [[B]], and the angular factor [[s_theta]]. The declarative relation is:

{{f:fuerza_magnetica_lorentz}}

This expression shows a linear dependence: doubling [[v]] doubles [[F_B]] if [[q]], [[B]], and [[s_theta]] remain unchanged. The factor [[s_theta]] represents the perpendicular part of motion; therefore the same particle can experience maximal, partial, or zero force in the same field.

The equation also fixes the role of each input. [[q]] sets electromagnetic coupling, [[v]] sets how quickly the particle cuts across the field, [[B]] sets magnetic intensity, and [[s_theta]] filters the usable perpendicular part.

When the force is perpendicular to velocity, it ideally does not increase speed; it produces centripetal acceleration. The dynamic translation between force and inertia is:

{{f:aceleracion_centripeta_magnetica}}

If the field is uniform and the entry is perpendicular, the trajectory is circular. The radius follows from balancing magnetic deflection with particle inertia:

{{f:radio_trayectoria_circular}}

This third result explains why [[r]] increases with [[m]] and [[v]], but decreases with [[q]] and [[B]]. The formula is used with magnitudes; charge sign does not make radius negative, it reverses the sense of rotation.

## 🔴 Structural level

The deep structure of the topic is geometric. Magnetic force is not decided only by "large field" or "large charge", but by the relation among three directions: motion, field, and force. This architecture explains why [[F_B]] is maximal for perpendicular motion and zero for parallel motion.

The second structural layer is dynamic. If [[F_B]] remains perpendicular to [[v]], it ideally does no mechanical work on an isolated particle. Kinetic energy can remain approximately constant while direction changes. For that reason [[a_c]] should not be read as tangential acceleration, but as **change of direction per unit time**.

The radius [[r]] condenses the competition between inertia and magnetism. A more massive particle better preserves its direction; a particle with larger charge bends more. A faster particle has greater transverse inertia and describes a larger radius, even though the force also increases. This reading avoids the mistake that greater speed always means tighter curvature.

The model fails or needs corrections when the field changes strongly within the orbit, when speed approaches relativistic scales, when collisions are frequent, or when an external electric field changes the energy. Then the path is no longer the simple circle described by [[r]], and full vector dynamics is required.

It is also important to separate local scale from global scale. A local force relation may remain correct even when the complete trajectory is not circular because the field changes from region to region. Structural reading therefore asks both what the force is at one point and whether the same assumptions persist along the path.

> [!TIP]
> To reason well, always separate three layers: magnitude of [[F_B]], vector direction decided by [[q]], and path shape summarized by [[r]].

## Deep physical interpretation

Magnetic force reveals a **directional asymmetry**. Knowing the size of [[B]] is not enough; one must know how the charge moves relative to the field. This angular dependence turns magnetism into a selection tool: particles with different relations between [[q]] and [[m]] do not follow the same curve.

The sign of [[q]] does not alter the calculated intensity when magnitudes are used, but it changes an essential observation: the side toward which the path bends. Two particles with equal [[m]], equal speed, and equal charge magnitude may curve with the same [[r]] in opposite directions.

## Order of magnitude

For a proton with speed of order one million metres per second in a field of tenths of a tesla, [[F_B]] can be around ten to the minus fourteen newtons. That looks small, but on microscopic [[m]] it produces enormous [[a_c]]. For environmental fields of microteslas, the force drops by several orders of magnitude. A macroscopic newton-scale result for one elementary particle would be suspicious unless speed or field were extraordinary.

## Personalized resolution method

First identify whether the particle is charged and moving. Then decide whether the question asks for **magnitude**, **direction**, or **trajectory**. For magnitude use [[q]], [[v]], [[B]], and [[s_theta]]. For direction, apply the right-hand rule and correct with the sign of [[q]]. For circular path, check perpendicularity and use [[m]] to estimate [[r]].

> [!WARNING]
> Do not insert the sign of [[q]] to obtain a negative radius. The sign describes rotation sense, not negative length.

## Special cases and extended example

If the charge enters parallel to the field, [[s_theta]] vanishes and there is no magnetic force even if [[B]] is large. If it enters perpendicularly, [[s_theta]] is maximal and the ideal trajectory bends into a circle. Between those extremes a helical path appears: the parallel component advances while the perpendicular component rotates.

In a magnetic particle selector, two ions with equal speed and different charge are not separated by "feeling magnetism" abstractly, but because their [[r]] changes. That difference allows mass or charge-to-mass relation to be inferred from measured curvature.

## Real student questions

- **Why does the magnetic field not change speed?** Because in the ideal perpendicular case [[F_B]] points sideways relative to [[v]], so it changes direction more than kinetic energy.
- **Does a negative charge have negative force?** Not in the magnitude [[F_B]]. What reverses is the vector direction of deflection.
- **Why does the angle matter if the field is the same?** Because only the part of motion perpendicular to [[B]] produces magnetic deflection.
- **Does a faster particle bend more?** Not necessarily. Although [[F_B]] increases, the inertia associated with motion also increases and circular [[r]] grows at fixed field.

## Cross-cutting connections and study paths

This leaf relies on [magnetic field](leaf:fisica-clasica/electromagnetismo/magnetismo/campo-magnetico) and prepares the study of forces on conductors. It also connects with circular motion in mechanics, because [[a_c]] and [[r]] translate an electromagnetic interaction into kinematic language.

The natural route is to move from individual particles to electric currents. A current is a collection of many moving charges, so magnetic force on a conductor is understood as the collective sum of these deflections.

## Final synthesis

Magnetic force on moving charges joins charge, speed, field, and geometry. Its essential feature is perpendicularity: it bends paths, selects particles, and turns magnetism into a tool for controlling motion without necessarily pushing along the direction of travel.
`;export{e as default};
