const e=`# Common Errors in Kepler's Laws

## Conceptual errors

### Error 1 : placing the central mass at the center of the ellipse

**Why it seems correct**: many school diagrams show a centered ellipse and a visually symmetric central body. If center and focus are not distinguished, putting [[M]] at the geometric center seems natural.

**Why it is incorrect**: the first law places the central mass at one focus. Therefore [[r]] is measured from the focus and changes with [[theta]] when [[e]] is not zero.

**Detection signal**: the student uses [[b]] or the ellipse center to compute distances to the Sun or Earth.

**Conceptual correction**: draw center, foci, and orbital point separately. The physical distance in the law is focal, not radial from the geometric center.

**Contrast mini-example**: in an orbit with appreciable [[e]], periapsis and apoapsis are not at the same distance from [[M]], although they belong to the same ellipse.

### Error 2 : believing orbital speed is constant

**Why it seems correct**: in introductory circular orbit, [[r]] and speed may be constant. That picture is incorrectly transferred to every orbit.

**Why it is incorrect**: the second law conserves [[dA_dt]], not linear speed. Near the focus, more arc is covered in the same time.

**Detection signal**: equal times are said to imply equal arcs.

**Conceptual correction**: compare sectors of area, not lengths of path. Kepler's clock is areal.

**Contrast mini-example**: two sectors with different arc lengths may correspond to the same time interval if their swept areas from the focus are equal.

## Model errors

### Error 3 : applying the comparative form to different central masses

**Why it seems correct**: the comparative form is simple and seems to depend only on [[a1]], [[a2]], [[T1]], and [[T2]].

**Why it is incorrect**: that comparison cancels [[G]] and [[M]] only if both orbits share the same central mass. If [[M]] changes, [[mu]] changes and so does the orbital clock.

**Detection signal**: a lunar orbit and an Earth orbit are compared with the same semi-major-axis ratio without mentioning central mass.

**Conceptual correction**: check the attracting center first. If it is not the same, use the absolute third law or the form with [[mu]].

**Contrast mini-example**: the same semi-major axis around Earth and around the Sun does not produce the same period.

### Error 4 : using Kepler as an exact model in perturbed orbits

**Why it seems correct**: many real orbits look like ellipses over short intervals.

**Why it is incorrect**: drag, thrust, planetary oblateness, or third bodies can change [[a]], [[e]], and the orbital plane.

**Detection signal**: reentry or precession is predicted with a fixed ellipse.

**Conceptual correction**: use Kepler as the initial reference and switch to a perturbed model when accumulated changes matter.

**Contrast mini-example**: a low satellite may have an instantaneous Keplerian period, while its [[a]] slowly decreases due to drag.

## Mathematical errors

### Error 5 : scaling period linearly with semi-major axis

**Why it seems correct**: if a length doubles, intuition expects the time to double as well.

**Why it is incorrect**: the third law uses a three-halves power in the comparison between semi-major axes and periods.

**Detection signal**: if [[a2]] is twice [[a1]], the answer says [[T2]] is twice [[T1]].

**Conceptual correction**: compute with the correct power and check whether the result exceeds the linear factor.

**Contrast mini-example**: doubling [[a]] increases the period by more than a factor of two, not exactly by two.

### Error 6 : mixing units in the absolute third law

**Why it seems correct**: astronomy naturally uses kilometers, astronomical units, days, and years.

**Why it is incorrect**: the form with [[G]] and [[M]] requires strict dimensional coherence if [[T]] is to be obtained in seconds.

**Detection signal**: [[a]] is in kilometers while [[G]] is in SI, or [[M]] is entered in solar masses without conversion.

**Conceptual correction**: convert to SI before applying the absolute form, or use a comparative form if the problem allows it.

**Contrast mini-example**: the comparative form tolerates common units in [[a1]] and [[a2]], but the absolute form does not tolerate mixing them with [[G]].

## Interpretation errors

### Error 7 : confusing eccentricity with energy

**Why it seems correct**: [[e]] visually resembles symbols used for specific energy in other leaves.

**Why it is incorrect**: here [[e]] measures orbital shape. It does not by itself decide whether an orbit is bound or replace energetic analysis.

**Detection signal**: a more eccentric orbit is interpreted as necessarily more energetic or having a longer period.

**Conceptual correction**: separate shape, period, and energy. In this leaf, [[a]] controls the scale of [[T]], while [[e]] controls flattening.

**Contrast mini-example**: two orbits with the same [[a]] may have different [[e]] and still share the same ideal period.

### Error 8 : reading the second law as a position formula

**Why it seems correct**: the expression for [[dA_dt]] looks like an equation that should directly give where the body is.

**Why it is incorrect**: the second law is a temporal sweep criterion. To obtain position, one needs to integrate the motion or use additional orbital relations.

**Detection signal**: [[theta]] is solved from [[dA_dt]] alone, without time interval or geometry.

**Conceptual correction**: use the second law to compare times and rhythms, not as a complete position solution.

**Contrast mini-example**: knowing that area per second is constant is not enough to locate the planet without knowing accumulated area from a reference.

## Quick self-control rule

Before closing a problem, answer three questions. First: am I using the correct focus to measure [[r]]. Second: am I comparing areas or periods, not arcs and radii indiscriminately. Third: do the orbits share a central mass if I use the comparative form. If any answer fails, the calculation may look clean but it does not represent a correct Keplerian orbit.
`;export{e as default};
