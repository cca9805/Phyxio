const e=`## Conceptual errors\r
\r
### Error 1: Mixing translation and rotation\r
\r
**Why it seems correct**  \r
Linear and angular analogies look similar, so it is tempting to replace one symbol with another.\r
\r
**Why it is incorrect**  \r
[[v_cm]] and [[omega]], or [[a_cm]] and [[alpha]], have different meanings and dimensions. They require the radius [[R]] and a valid rolling condition.\r
\r
**Detection signal**  \r
Units do not match, or the radius appears without a declared contact model.\r
\r
**Conceptual correction**  \r
Decide first whether the statement describes advance, spin, or rolling.\r
\r
**Mini contrast example**  \r
Equating linear speed with angular speed gives impossible units; multiplying angular speed by the radius gives a linear speed only when the geometry is valid.\r
\r
## Model errors\r
\r
### Error 1: Assuming no slipping without checking contact\r
\r
**Why it seems correct**  \r
Many textbook problems silently use ideal rolling.\r
\r
**Why it is incorrect**  \r
No-slip rolling requires enough static friction. If the required contact force is impossible, the model must change.\r
\r
**Detection signal**  \r
The wheel leaves a sliding mark, or the measured [[v_cm]] and [[omega]] do not match through [[R]].\r
\r
**Conceptual correction**  \r
Declare the contact condition before using an acceleration relation.\r
\r
**Mini contrast example**  \r
A locked wheel on ice translates but does not roll ideally.\r
\r
## Mathematical errors\r
\r
### Error 1: Forgetting rotational kinetic energy\r
\r
**Why it seems correct**  \r
The center of mass is easier to see than the rotation.\r
\r
**Why it is incorrect**  \r
[[K_total]] includes translation and rotation. Omitting the rotational term overestimates speed.\r
\r
**Detection signal**  \r
A disk and a hoop would get the same acceleration despite different [[I]].\r
\r
**Conceptual correction**  \r
Use the total-kinetic-energy relation whenever rolling energy is involved.\r
\r
**Mini contrast example**  \r
A hoop stores more of the same energy in rotation than a solid disk.\r
\r
## Interpretation errors\r
\r
### Error 1: Reading the graph as decoration\r
\r
**Why it seems correct**  \r
The numerical answer appears complete.\r
\r
**Why it is incorrect**  \r
The graph checks model meaning: contact, forces, torque [[tau]], and energy split.\r
\r
**Detection signal**  \r
The result cannot be located visually in the SVG, DCL, or Coord graph.\r
\r
**Conceptual correction**  \r
The graph must answer the central physical question.\r
\r
**Mini contrast example**  \r
If [[E_total]] is treated as conserved while slipping is visible, the graph reveals the model error.\r
\r
## Quick self-control rule\r
\r
Before closing, check model, units, sign, order of magnitude, and graph correspondence. Then ask one method question: is the unknown caused by forces, imposed by a constraint, or obtained from an energy balance?`;export{e as default};
