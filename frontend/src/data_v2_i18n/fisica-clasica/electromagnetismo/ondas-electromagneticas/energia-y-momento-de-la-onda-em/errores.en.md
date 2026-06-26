## Conceptual errors


### Error 1: Confusing intensity with total energy

**Why it seems correct**

The word intensity is often used as a loose synonym for "a lot of energy". That everyday analogy makes a student read [[intensidad_media_de_poynting]] as stored energy or final received energy.

**Why it is incorrect**

[[intensidad_media_de_poynting]] is power per area. Energy per volume is read with [[densidad_media_de_energia_electromagnetica]], and total power needs the area [[area_iluminada]] to obtain [[potencia_electromagnetica_incidente]].

**Detection signal**

The student obtains a result in W/m2 and interprets it as energy or as total device power.

**Conceptual correction**

First separate local reading from total reading. [[intensidad_media_de_poynting]] describes the wave in a region; [[potencia_electromagnetica_incidente]] describes what a concrete object receives.

**Mini contrast example**

Two sensors under the same [[intensidad_media_de_poynting]] do not receive the same [[potencia_electromagnetica_incidente]] if their effective areas differ. The local wave is the same, but total capture changes.

## Model errors

**Mini-example of contrast**

Check 1: In Energy and Momentum of an Electromagnetic Wave, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


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

A black plate and a mirror under the same [[intensidad_media_de_poynting]] do not have the same effective pressure. Applying the mirror case to the black plate exaggerates the push.

## Mathematical errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Mixing intensity, pressure, and power

**Why it seems correct**

The relations are short and look like simple conversions. Confusing magnitudes makes the student move [[velocidad_de_la_luz_en_el_vacio]] or [[area_iluminada]] without asking which physical question has changed.

**Why it is incorrect**

[[intensidad_media_de_poynting]], [[p_rad]], and [[potencia_electromagnetica_incidente]] have different dimensions. [[intensidad_media_de_poynting]] is local flux, [[p_rad]] is force per area, and [[potencia_electromagnetica_incidente]] is total intercepted power.

**Detection signal**

The solution compares W/m2 with W, or discusses pressure without using the conversion from intensity through [[velocidad_de_la_luz_en_el_vacio]].

**Conceptual correction**

Make a dimensional reading before interpreting. If [[area_iluminada]] appears, the question is probably total; if a mechanical surface appears, it is probably pressure.

**Mini contrast example**

An intense beam on a tiny window can have large [[intensidad_media_de_poynting]] and small [[potencia_electromagnetica_incidente]]. Saying both readings are equivalent changes the studied system.

## Interpretation errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Comparing electric and magnetic fields directly

**Why it seems correct**

Drawings of EM waves show [[campo_electrico_eficaz]] and [[campo_magnetico_eficaz]] with visual symmetry. That picture suggests similar numerical values in SI units.

**Why it is incorrect**

[[campo_electrico_eficaz]] and [[campo_magnetico_eficaz]] have different dimensions and are connected through [[velocidad_de_la_luz_en_el_vacio]]. Geometric symmetry does not imply numerical equality.

**Detection signal**

The student suspects [[campo_magnetico_eficaz]] is irrelevant only because its number in teslas is much smaller than the number for [[campo_electrico_eficaz]] in V/m.

**Conceptual correction**

Read both fields as coupled parts of one wave. Energy and momentum transport is electromagnetic, not electrically isolated.

**Mini contrast example**

A wave can have small [[campo_magnetico_eficaz]] on the SI scale and still transport energy through [[intensidad_media_de_poynting]]. The isolated numerical value does not measure physical importance.

## Quick self-control rule

Before accepting a result, ask three questions. First, ask whether the requested magnitude is local or total: [[densidad_media_de_energia_electromagnetica]], [[intensidad_media_de_poynting]], [[densidad_de_momento_electromagnetico]], and [[p_rad]] are local readings, while [[potencia_electromagnetica_incidente]] needs [[area_iluminada]]. Second, identify whether the surface absorbs or reflects. Third, verify whether [[velocidad_de_la_luz_en_el_vacio]] converts in the physically correct direction.

The practical rule is simple: W/m2 is not W, pressure is not power, and a small magnetic field in teslas does not mean an irrelevant field. If the interpretation does not separate those three ideas, the calculation may be numerically reasonable and physically wrong.

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.