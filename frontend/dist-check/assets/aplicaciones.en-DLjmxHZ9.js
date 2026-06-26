const e=`# Applications of Kepler's Laws

## 1. Estimating periods of Earth satellites

Kepler's laws allow the period [[T]] of a satellite to be estimated from the semi-major axis [[a]] and Earth's central mass [[M]]. In an early design stage, this estimate decides how many revolutions the satellite completes per day, how long it takes to revisit a region of interest, and what approximate communication windows it may offer. Full orbital detail is not required to obtain a useful time scale.

Dominant variable: [[a]]. The semi-major axis is the variable that most directly governs the period in the third law. Eccentricity [[e]] modifies where the satellite spends more or less time within the orbit, but it does not change the ideal period if [[a]] remains fixed.

Validity limit: the calculation is reliable as a first approximation if atmospheric drag and maneuvers are small during the considered orbit. In very low satellites, [[a]] decreases over time and the period is no longer strictly constant. Earth's non-spherical shape also matters for fine prediction because oblateness introduces precessions not represented by the basic Kepler model.

In practice, this estimate works as an initial filter: if the approximate period already fails the mission requirement, there is no need to move immediately to a more expensive orbital simulation. If it fits, the Keplerian model provides a first architecture that can later be corrected with perturbations.

## 2. Comparing planetary orbits

The comparative form of the third law allows periods of planets orbiting the same Sun to be compared without explicitly introducing [[G]], [[M]], or [[mu]]. If one reference orbit is known, such as Earth's, the period of another can be estimated from the semi-major-axis ratio [[a2]]/[[a1]]. This is pedagogically powerful because it shows that the time scale of the solar system follows a common regularity.

Dominant variable: the ratio [[a2]]/[[a1]]. This ratio decides how [[T2]] scales with respect to [[T1]].

Validity limit: it can only be used if the orbits share the same dominant central mass. Directly comparing an Earth satellite with a solar planet using the comparative form would be a model error. If very high precision is required, mutual planetary perturbations also require corrections to the ideal Keplerian regularity.

This application also helps interpret astronomical tables. When planets are ordered by mean distance from the Sun, their periods grow in a predictable way, and small deviations become evidence that the real system is not exactly a two-body system.

## 3. Interpreting eccentric orbits

For comets, transfer satellites, and highly elongated orbits, the first and second laws explain why the object appears to accelerate strongly near periapsis and spend much more time far from the focus. The variable [[e]] controls elongation, while [[dA_dt]] preserves the areal sweep. This reading prevents treating an eccentric orbit as merely a deformed circle with uniform speed.

Dominant variable: [[e]]. Eccentricity decides how much [[r]] and speed vary along the path.

Validity limit: the interpretation is a bound ellipse only while 0 <= [[e]] < 1. If the trajectory is parabolic or hyperbolic, another model is required. In real comets, gas emission and planetary influence may also alter the path slightly relative to a fixed ellipse.

For teaching, this is one of the clearest uses of the laws: students can see that the same orbit contains slow and fast regions without violating any conservation principle. The diagram becomes a physical argument, not a decorative drawing.

## 4. Planning orbital transfers

In transfer maneuvers, such as moving from a low orbit to a higher one, intermediate ellipses are used. Kepler's laws estimate the flight time of that transfer from the semi-major axis of the transfer ellipse. Although full design requires dynamics, energy, and maneuvers, Kepler provides the basic clock of the ballistic arc.

Dominant variable: [[a]] of the transfer ellipse. Even when perigee and apogee matter, the time for half the transfer is governed by the global scale of the ellipse.

Validity limit: this describes only the coast arc with negligible thrust. During engine burns, the motion is not purely Keplerian and must be treated with maneuver dynamics. It also excludes fuel limits, launch windows, and orbital-plane orientation constraints.

## 5. Diagnosing perturbations

When a real orbit does not preserve the expected relation between [[a]] and [[T]], or when areal sweep is not approximately constant, Kepler's laws serve as a reference test. The deviation does not mean Kepler is useless; it means additional physics is present: drag, planetary oblateness, third-body influence, or unmodeled propulsion.

Dominant variable: deviation of [[T]], [[a]], or [[dA_dt]] from ideal behavior. The ideal law provides the baseline.

Validity limit: the diagnosis requires good data and an appropriate time interval. Small deviations may come from measurement uncertainty, but systematic deviations indicate that the two-body model is no longer sufficient. Kepler's value here is to serve as a comparison pattern: the better the ideal is known, the more clearly the missing physics can be detected.
`;export{e as default};
