const e=`## Conceptual errors\r
\r
### Error 1: confusing pressure with force\r
\r
**Why it seems correct**  \r
The student sees that a hydraulic press “produces a large force” and concludes that pressure and force are the same quantity. The intuition fails because both quantities appear in the same phenomenon.\r
\r
**Why it is incorrect**  \r
Pressure [[p]] is force per unit area. Force [[F]] is a total interaction. Two systems may have the same pressure and different forces if their areas [[A]] are different.\r
\r
**Detection signal**  \r
The error appears when the answer to a pressure question is given in newtons, or when the student claims that “more force always means more pressure” without checking area.\r
\r
**Conceptual correction**  \r
First calculate or identify [[p]]. Then, if needed, transform that pressure into force using the corresponding area.\r
\r
**Contrast mini-example**  \r
Two pistons may have the same [[p]] and different [[F]] because their [[A]] values are different.\r
\r
### Error 2: thinking pressure only acts downward\r
\r
**Why it seems correct**  \r
In hydrostatics, students repeatedly hear that pressure increases with depth depth, so they associate pressure with vertical weight.\r
\r
**Why it is incorrect**  \r
In a fluid at rest, pressure at a point acts normal to any surface. It can produce lateral forces on walls, upward forces on a bottom surface, or forces on a piston.\r
\r
**Detection signal**  \r
The student draws pressure only vertically or ignores lateral forces in containers.\r
\r
**Conceptual correction**  \r
Depth determines the hydrostatic value, but the force produced by pressure is normal to the specific surface.\r
\r
**Contrast mini-example**  \r
A vertical wall receives horizontal force from water even though depth is measured vertically.\r
\r
## Model errors\r
\r
### Error 1: using uniform pressure where depth varies\r
\r
**Why it seems correct**  \r
It is tempting to choose one average pressure and multiply by the whole area because [[F]] = [[p]][[A]] looks simple.\r
\r
**Why it is incorrect**  \r
If depth changes over the surface, pressure also changes. On a vertical wall, the lower part supports more pressure than the upper part.\r
\r
**Detection signal**  \r
The statement mentions height, a vertical wall, or a deep tank, but the solution uses a single pressure without justification.\r
\r
**Conceptual correction**  \r
Use uniform pressure only on small surfaces or surfaces at the same depth. If pressure varies, use a justified average, intervals, or integration.\r
\r
**Contrast mini-example**  \r
A small horizontal plate at fixed depth may use one pressure; a tall wall cannot.\r
\r
### Error 2: applying hydrostatic pressure to an accelerated fluid\r
\r
**Why it seems correct**  \r
The formula with density, gravity, and depth is familiar and seems applicable to any liquid.\r
\r
**Why it is incorrect**  \r
The basic hydrostatic relation requires a fluid at rest. If there are strong accelerations, jets, pumps, or rapid flow, dynamic terms and losses appear.\r
\r
**Detection signal**  \r
The problem mentions motion, speed, or a pump, but the solution uses only the static-column formula.\r
\r
**Conceptual correction**  \r
Before using hydrostatic pressure, check whether the fluid can be modeled as static.\r
\r
**Contrast mini-example**  \r
A quiet tank may use densitygravitydepth; a pumped jet needs a dynamic model.\r
\r
## Mathematical errors\r
\r
### Error 1: not converting area to square meters\r
\r
**Why it seems correct**  \r
Area is often given in cm² and the student copies it directly because the number looks convenient.\r
\r
**Why it is incorrect**  \r
Pressure in pascals requires [[A]] in m². A conversion error can multiply or divide the result by \\(10^4\\).\r
\r
**Detection signal**  \r
The result is absurdly small or large in piston, plate, or needle problems.\r
\r
**Conceptual correction**  \r
Always convert area before substituting. It is safer to write the conversion on a separate line.\r
\r
**Contrast mini-example**  \r
\\(10\\) cm² is \\(10^{-3}\\) m², not \\(10\\) m².\r
\r
### Error 2: rearranging the area incorrectly\r
\r
**Why it seems correct**  \r
Because [[A]] appears in the denominator, some students move terms mechanically and write an inverted relation.\r
\r
**Why it is incorrect**  \r
From the mechanical definition, if pressure increases with fixed force, area must decrease. A wrong rearrangement usually violates that reading.\r
\r
**Detection signal**  \r
The result predicts that reducing pressure requires reducing area, which contradicts the physical interpretation.\r
\r
**Conceptual correction**  \r
Check the rearrangement qualitatively: for fixed force, larger area must imply lower pressure.\r
\r
**Contrast mini-example**  \r
With the same [[F]], doubling [[A]] halves [[p]].\r
\r
## Interpretation errors\r
\r
### Error 1: treating negative gauge pressure as impossible\r
\r
**Why it seems correct**  \r
The student remembers that absolute pressure cannot be negative and applies that rule to every reading.\r
\r
**Why it is incorrect**  \r
Gauge pressure [[p_man]] is relative to [[p_atm]]. It can be negative if the system is below atmosphere, while [[p_abs]] remains positive.\r
\r
**Detection signal**  \r
A partial-vacuum value is rejected or the sign of a gauge reading is changed without justification.\r
\r
**Conceptual correction**  \r
Before judging the sign, identify the reference: absolute relative to vacuum or gauge relative to atmosphere.\r
\r
**Contrast mini-example**  \r
A reading of \\(-20000\\) Pa gauge can still mean positive [[p_abs]].\r
\r
### Error 2: reading high pressure as danger without looking at area\r
\r
**Why it seems correct**  \r
The word “high” suggests immediate risk.\r
\r
**Why it is incorrect**  \r
A high pressure over a microscopic area may imply a small force, while a moderate pressure over a huge area may generate a dangerous total force.\r
\r
**Detection signal**  \r
The student decides the mechanical effect without calculating [[F]] or estimating [[A]].\r
\r
**Conceptual correction**  \r
To evaluate total load, convert pressure into force using the affected surface.\r
\r
**Contrast mini-example**  \r
High [[p]] on a needle may imply less total [[F]] than moderate [[p]] on a door.\r
\r
## Quick self-control rule\r
\r
Before closing a pressure exercise, check four questions. First: does the datum represent [[p]], [[F]], or [[A]]? Second: is the force used normal to the surface? Third: is the pressure absolute [[p_abs]] or gauge [[p_man]]? Fourth: is pressure uniform or does it depend on depth?\r
\r
If any of these answers remains ambiguous, the calculation may be algebraically clean and physically wrong. Pressure is simple in form, but demanding in system reading.`;export{e as default};
