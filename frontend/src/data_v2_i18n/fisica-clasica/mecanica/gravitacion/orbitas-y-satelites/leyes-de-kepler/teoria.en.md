# Kepler's Laws

## Conceptual context

Kepler's laws express a central idea: an orbit is not only a curve, but a relation between geometry, time, and central-force motion. The first law states where the central body sits inside the ellipse; the second explains how the rate of motion changes; the third connects the global size of the orbit with its period. In this leaf, [[a]], [[e]], [[r]], [[theta]], [[A]], [[dA_dt]], and [[T]] form a complete physical reading of orbital motion.

Historically, Kepler extracted these laws from astronomical data before Newton supplied the dynamical explanation. Pedagogically, they should be studied after orbital speed because a new difficulty appears here: a motion can be periodic without being circular and without having constant speed. A Keplerian ellipse preserves a global structure, while the local state changes non-uniformly.

## 🟢 Essential level

The first law says that ideal planets and satellites follow ellipses with the central mass at one focus. This corrects a common intuition: the Sun, Earth, or central body is not at the geometric center of the ellipse, but displaced from it. Therefore [[r]] is not constant when [[e]] is nonzero; it changes with [[theta]] although [[a]] remains fixed.

The second law introduces the physical clock of the orbit. The radius vector sweeps equal areas in equal times, so the body moves faster near the focus and slower far from it. What remains constant is not linear speed but [[dA_dt]]. This distinction prevents confusing traveled arc with swept area.

The third law gives the global time scale: orbits with larger [[a]] take longer to complete. The growth of [[T]] is not linear; doubling the semi-major axis does not double the period. To compare two orbits around the same central mass, [[a1]], [[a2]], [[T1]], and [[T2]] are enough.

## 🔵 Formal level

The compact gravitational scale of the system is the parameter [[mu]], defined from the central mass [[M]] and the constant [[G]].

{{f:parametro_gravitatorio}}

The polar form of the first law gives the focal distance [[r]] as a function of [[a]], [[e]], and [[theta]]. This relation allows periapsis, apoapsis, and distance variation to be read from one geometric equation.

{{f:primera_ley_polar}}

The relation between [[a]], [[b]], and [[e]] completes the ellipse description. If [[e]] increases, [[b]] decreases relative to [[a]], and the focus becomes more displaced from the geometric center.

{{f:relacion_semiejes}}

The second law is written as constant areal velocity. The expression is not intended to compute a full instantaneous position by itself; it states a physical condition on the sweep.

{{f:velocidad_areal_constante}}

Newtonian mechanics interprets that constancy as a consequence of angular momentum [[L]] conservation when the force is central and the orbiting mass [[m]] remains constant.

{{f:relacion_momento_angular_conceptual}}

The absolute third law computes the orbital period [[T]] from [[a]], [[G]], and [[M]]. This is the appropriate form when the central mass is known.

{{f:tercera_ley_absoluta}}

The same law can be written with [[mu]], which is common in astrodynamics because [[mu]] is often known more directly than [[G]] and [[M]] separately.

{{f:tercera_ley_mu}}

When two bodies orbit the same central mass, the comparative form removes [[G]], [[M]], and [[mu]]. Only the semi-major axes have to be compared.

{{f:tercera_ley_comparativa}}

## 🔴 Structural level

The validity domain matters as much as the equation. The laws apply cleanly to a two-body problem with dominant central mass, negligible atmospheric drag, no continuous thrust, and no strong perturbation from other bodies. For low satellites, for instance, drag may slowly change [[a]]; then the third law remains a useful instantaneous snapshot but not a complete long-term description.

The first law requires careful interpretation of [[e]]. If [[e]] is zero, the ellipse becomes a circle and [[r]] equals [[a]]. If [[e]] approaches one, the ellipse becomes highly elongated and the contrast between periapsis and apoapsis becomes large. If [[e]] reaches or exceeds one, the path is no longer a bound ellipse.

The third law does not say that all planets with the same period have the same visual orbit. Two orbits may share [[a]] and [[T]] but have different [[e]], different [[b]], and different speed distributions. Kepler separates shape, areal timing, and period scale because each law answers a different part of the same orbital question.

## Deep physical interpretation

Kepler's laws are a grammar for reading orbits. The first law translates shape into focal distance; the second translates dynamical conservation into temporal rhythm; the third translates global size into period. Together they allow an astronomical observation to become an orbital model with physical meaning.

The key conceptual point is that [[a]] and [[e]] do not play the same role. [[a]] controls the time scale through [[T]], whereas [[e]] modifies how distance and speed are distributed along the path. A highly eccentric orbit does not necessarily have a larger period than a less eccentric one if both share the same semi-major axis.

The second law is especially useful didactically because it breaks the idea of uniform motion. The body does not distribute time by arc length, but by area swept from the focus. Near the focus it covers more arc in the same time; far from the focus it covers less. Constant [[dA_dt]] is a geometric reading of a dynamical conservation law.

## Order of magnitude

In low Earth orbits, [[a]] is of the order of millions of meters and [[T]] of thousands of seconds. For Earth around the Sun, [[a]] becomes of the order of hundreds of billions of meters and [[T]] of one year. This jump shows why the third law is strongly sensitive to the cubic spatial scale.

Earth's [[mu]] is of order ten to the fourteenth in SI units, while the Sun's is far larger. Therefore the same orbital distance would not have the same period around Earth and around the Sun. The central mass changes the orbital clock even if the local geometry looks similar.

## Personalized resolution method

First identify whether the problem asks for shape, local rhythm, or global period. If it asks for distance to a focus in an ellipse, use [[a]], [[e]], and [[theta]]. If it asks for qualitative speed in different orbital regions, think in terms of swept area and [[dA_dt]]. If it asks for period or comparison between orbits, work with [[a]] and [[T]].

Then check whether the orbits share the same central mass. If they do, the comparative form avoids unnecessary data. If they do not, you need [[G]] and [[M]], or directly [[mu]]. Finally verify units: [[a]], [[a1]], and [[a2]] must use the same length unit, and the absolute form must use SI to return seconds.

## Special cases and extended example

The circular orbit is the case where [[e]] is zero. In it, [[b]] equals [[a]], [[r]] does not change, and the second law is compatible with constant speed. This case is useful as a starting point, but it should not hide the fact that Kepler's laws were created to explain non-circular orbits.

In an elliptical orbit with fixed [[a]] and large [[e]], the satellite spends little time near periapsis and much more time near apoapsis. The third law keeps the same global period if [[a]] does not change, but the second law redistributes motion within that period. That separation between global scale and local rhythm is the central learning goal of this leaf.

## Real student questions

A common question is: if the planet moves faster near the Sun, why does it not escape. The answer is that local speed alone does not decide period or binding; here we are reading geometry and areal rhythm. The orbital energy leaf completes that decision through energy.

Another frequent doubt is whether a more elongated orbit always takes longer. Not necessarily. If it keeps the same [[a]], the ideal period is the same even if [[e]] changes. What changes is the time distribution inside the orbit: the near-focus region is crossed faster and the far region more slowly.

## Cross-cutting connections and study paths

This leaf connects with orbital speed because circular speed is a simpler limiting case. It also prepares orbital energy, where the semi-major axis receives an energetic interpretation, and tides and perturbations, where deviations from the ideal model become physically relevant.

A good study path is to master [[a]], [[e]], and [[r]] as geometry first; then understand [[dA_dt]] as the areal clock; finally use [[T]] to compare orbital scales. This path avoids mixing formula, diagram, and physical criterion before each part has meaning.

## Final synthesis

Kepler's laws allow a complete orbit to be read without reducing it to a circle. After this leaf, you should distinguish elliptical shape, areal sweep, and temporal scale, know when to use period comparison, and recognize the limits of the ideal two-body model. The final competence is not memorizing three statements, but deciding which law answers each orbital question.
