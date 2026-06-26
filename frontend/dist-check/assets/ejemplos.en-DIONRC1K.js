const e=`# Exam-type example\r
\r
## Problem statement\r
\r
An integrated dynamics worksheet compares five canonical centripetal-force scenarios: object on a horizontal string, flat road curve, ideal banked curve, top of a vertical loop, and circular orbit. The goal is to compute the shared radial demand and verify how the dominant physical force source changes from one context to another. Known quantities across subcases include [[m]], [[r]], [[v]], [[mu]], [[g]], [[th]], [[G]], and [[M]].\r
\r
The instructor requires one coherent explanation, not five disconnected recipes. The student must show why [[Frad]] and [[Fc]] are not extra forces but radial readings of real interactions such as [[Tn]], [[Nn]], [[fs]], and gravitational pull.\r
\r
## Data\r
\r
- Subcase A (horizontal string): [[m]] = 2.0 kg, [[r]] = 1.2 m, [[v]] = 3.0 m/s.\r
- Subcase B (flat curve): [[r]] = 60 m, [[mu]] = 0.45, [[g]] = 9.8 m/s^2.\r
- Subcase C (ideal banked curve): [[r]] = 90 m, [[th]] = 0.20 rad, [[g]] = 9.8 m/s^2.\r
- Subcase D (loop at the top): [[r]] = 12 m, [[g]] = 9.8 m/s^2.\r
- Subcase E (circular orbit): [[M]] = 5.97e24 kg, [[G]] = 6.674e-11, [[r]] = 6.8e6 m.\r
\r
The answer must include a dimensional check and a final physical interpretation connecting all five contexts.\r
\r
## System definition\r
\r
In every subcase, the radial axis is defined positive toward the center of curvature. Motion is modeled as approximately circular with secondary perturbations neglected to isolate the dominant mechanism. Quantity [[ac]] represents the kinematic curvature requirement, while [[Frad]] represents the radial sum of real forces.\r
\r
For the string case, radial support is provided by [[Tn]]. On a flat curve, support is mainly [[fs]] up to the adherence limit controlled by [[mu]]. In the ideal banked case, geometry through [[th]] allows a radial contribution from [[Nn]]. In the loop case, contact condition is governed by [[Nn]] and [[g]]. In orbital motion, the interaction controlled by [[G]] and [[M]] provides the radial requirement.\r
\r
## Physical model\r
\r
The six core leaf relations used are:\r
\r
{{f:base_radial}}\r
\r
{{f:cuerda_tension}}\r
\r
{{f:curva_plana_velocidad_max}}\r
\r
{{f:peralte_ideal}}\r
\r
{{f:loop_contacto_minimo}}\r
\r
{{f:orbita_circular}}\r
\r
The model unifies all scenarios: radial demand has one structural form, while the physical source that supplies it changes with context.\r
\r
## Model justification\r
\r
This model choice is appropriate because each subcase is a standard, high-value pattern in introductory dynamics and engineering practice. The string case isolates a single radial agent. The flat curve exposes friction limits. The banked curve demonstrates geometric redistribution. The loop captures minimum-contact condition. The orbit case extends the same radial logic to gravitational scale.\r
\r
This set is intentionally selected to avoid formula fragmentation. Solving them as one family strengthens transfer: students learn to identify mechanisms first, equations second.\r
\r
## Symbolic solution\r
\r
1. Start with radial structure linking [[Frad]], [[m]], [[v]], and [[r]].\r
2. In the string case, identify [[Tn]] as direct radial provider.\r
3. On flat curve, compute speed limit through [[mu]], [[g]], and [[r]], with [[fs]] bounded by static adherence.\r
4. On ideal banked curve, compute design speed from [[th]], [[g]], and [[r]].\r
5. At loop top, apply minimum-contact condition with [[Nn]] at threshold.\r
6. In orbit, relate [[G]], [[M]], [[r]], and [[v]] for stable circular motion.\r
\r
Finally, compare all subcases in one conceptual matrix: radial demand, force source, and validity condition.\r
\r
## Numerical substitution\r
\r
In the string subcase, required [[Tn]] is on the order of tens of newtons, consistent with small masses and short radii. In the flat-curve subcase, the computed maximum speed is realistic for secondary-road operation and clearly sensitive to [[mu]]. A wet-condition drop in adherence reduces margin immediately.\r
\r
In the ideal-banked subcase, resulting design speed for moderate [[th]] exceeds the flat-curve counterpart, showing geometric leverage. In the loop subcase, the top-point threshold confirms that completing the loop is not enough; contact requires a minimum speed condition. In orbit, computed speed is in the expected km/s scale for low Earth trajectories.\r
\r
The numerical comparison confirms conceptual unity: scales differ, radial causality does not.\r
\r
## Dimensional validation\r
\r
All expressions are dimensionally consistent:\r
\r
- Radial base gives force units from mass, speed, and radius.\r
- Flat-curve limit gives speed from dimensionless [[mu]] and [[g]][[r]].\r
- Banking equation keeps tangent argument dimensionless through [[th]].\r
- Loop condition gives speed as square root of acceleration times length.\r
- Orbital relation recovers speed from [[G]], [[M]], and [[r]].\r
\r
This check prevents frequent mistakes: radius-diameter confusion, assigning units to [[mu]], or mixing inconsistent speed units.\r
\r
## Physical interpretation\r
\r
The key didactic output is explicit: centripetal force is not an extra actor. In each case, a real force source or force decomposition supplies the radial requirement: [[Tn]] on string, [[fs]] on flat curve, radial component of [[Nn]] on banked curve, gravity-plus-normal condition on loop, and gravity in orbit.\r
\r
The analysis also shows why speed control matters: increasing [[v]] quickly raises radial demand, shrinking safety margin when force supply has hard limits. Therefore, intervention strategy must be context-dependent: adherence and geometry for roads, threshold speed for loops, and radius-energy planning for orbit.\r
\r
The final reading is causal and transferable: one radial framework, multiple physical implementations.\r
\r
# Real-world example\r
\r
## Context\r
\r
An engineering training center runs a five-station laboratory: circular string rig, flat-curve mock-up, banked-track module, vertical loop instrument, and orbital simulator. The learning objective is to remove the misconception that each turning problem is a separate formula universe.\r
\r
## Physical estimation\r
\r
At each station, teams measure [[v]] and [[r]], estimate radial demand, and identify the real force source. Instrumentation reveals common patterns: where radial supply is capped, margin becomes highly sensitive to speed and contact conditions. On flat curves, small changes in [[mu]] shift safe range significantly. On banked modules, tuning [[th]] transfers part of radial load from friction to normal geometry.\r
\r
At the loop station, the top point is critical: below threshold, contact is lost and the simplified model no longer applies. In the orbital simulator, changing [[r]] shifts equilibrium speed exactly as predicted by the gravitational relation.\r
\r
## Interpretation\r
\r
This integrated lab shows why typical examples are powerful: they are not isolated exercises but a structured family sharing one radial core with different physical providers. Students who master this family stop memorizing templates and start reasoning by mechanism.\r
\r
In professional settings, that shift improves design and safety decisions because teams can identify which lever actually controls risk in each context: geometry, adherence, speed, or contact condition.\r
`;export{e as default};
