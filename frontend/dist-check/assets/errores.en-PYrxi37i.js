const e=`# Common mistakes

## Conceptual errors

### Error 1: Confusing intensity with total energy

**Why it seems correct**

The word intensity is often used as a loose synonym for "a lot of energy". That everyday analogy makes a student read [[S_med]] as stored energy or final received energy.

**Why it is incorrect**

[[S_med]] is power per area. Energy per volume is read with [[u_EM]], and total power needs the area [[A]] to obtain [[P_rad]].

**Detection signal**

The student obtains a result in W/m2 and interprets it as energy or as total device power.

**Conceptual correction**

First separate local reading from total reading. [[S_med]] describes the wave in a region; [[P_rad]] describes what a concrete object receives.

**Mini contrast example**

Two sensors under the same [[S_med]] do not receive the same [[P_rad]] if their effective areas differ. The local wave is the same, but total capture changes.

## Model errors

### Error 2: Always doubling radiation pressure

**Why it seems correct**

Many exercises use mirrors, and the student overgeneralizes the reflecting case. They memorize that the push can be doubled and apply it to absorbing surfaces too.

**Why it is incorrect**

This leaf uses [[p_rad]] for ideal absorption. If there is specular reflection, outgoing momentum changes and an extended optical model is required.

**Detection signal**

The statement says absorber, black surface, or thermal detector, but the solution treats the surface as a perfect mirror.

**Conceptual correction**

Before computing [[p_rad]], decide whether the surface absorbs, reflects, or mixes both behaviors. Without that choice, the mechanical model is not fixed.

**Mini contrast example**

A black plate and a mirror under the same [[S_med]] do not have the same effective pressure. Applying the mirror case to the black plate exaggerates the push.

## Mathematical errors

### Error 3: Mixing intensity, pressure, and power

**Why it seems correct**

The relations are short and look like simple conversions. Confusing magnitudes makes the student move [[c]] or [[A]] without asking which physical question has changed.

**Why it is incorrect**

[[S_med]], [[p_rad]], and [[P_rad]] have different dimensions. [[S_med]] is local flux, [[p_rad]] is force per area, and [[P_rad]] is total intercepted power.

**Detection signal**

The solution compares W/m2 with W, or discusses pressure without using the conversion from intensity through [[c]].

**Conceptual correction**

Make a dimensional reading before interpreting. If [[A]] appears, the question is probably total; if a mechanical surface appears, it is probably pressure.

**Mini contrast example**

An intense beam on a tiny window can have large [[S_med]] and small [[P_rad]]. Saying both readings are equivalent changes the studied system.

## Interpretation errors

### Error 4: Comparing electric and magnetic fields directly

**Why it seems correct**

Drawings of EM waves show [[E0]] and [[B0]] with visual symmetry. That picture suggests similar numerical values in SI units.

**Why it is incorrect**

[[E0]] and [[B0]] have different dimensions and are connected through [[c]]. Geometric symmetry does not imply numerical equality.

**Detection signal**

The student suspects [[B0]] is irrelevant only because its number in teslas is much smaller than the number for [[E0]] in V/m.

**Conceptual correction**

Read both fields as coupled parts of one wave. Energy and momentum transport is electromagnetic, not electrically isolated.

**Mini contrast example**

A wave can have small [[B0]] on the SI scale and still transport energy through [[S_med]]. The isolated numerical value does not measure physical importance.

## Quick self-control rule

Before accepting a result, ask three questions. First, ask whether the requested magnitude is local or total: [[u_EM]], [[S_med]], [[g_EM]], and [[p_rad]] are local readings, while [[P_rad]] needs [[A]]. Second, identify whether the surface absorbs or reflects. Third, verify whether [[c]] converts in the physically correct direction.

The practical rule is simple: W/m2 is not W, pressure is not power, and a small magnetic field in teslas does not mean an irrelevant field. If the interpretation does not separate those three ideas, the calculation may be numerically reasonable and physically wrong.
`;export{e as default};
