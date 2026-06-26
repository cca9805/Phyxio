## Conceptual errors

### Error 1: Mixing translation and rotation

**Why it seems correct**  
Linear and angular analogies look similar, so it is tempting to replace one symbol with another.

**Why it is incorrect**  
[[v_cm]] and [[omega]], or [[a_cm]] and [[alpha]], have different meanings and dimensions. They require the radius [[R]] and a valid rolling condition.

**Detection signal**  
Units do not match, or the radius appears without a declared contact model.

**Conceptual correction**  
Decide first whether the statement describes advance, spin, or rolling.

**Mini contrast example**  
Equating linear speed with angular speed gives impossible units; multiplying angular speed by the radius gives a linear speed only when the geometry is valid.

## Model errors

### Error 1: Assuming no slipping without checking contact

**Why it seems correct**  
Many textbook problems silently use ideal rolling.

**Why it is incorrect**  
No-slip rolling requires enough static friction. If the required contact force is impossible, the model must change.

**Detection signal**  
The wheel leaves a sliding mark, or the measured [[v_cm]] and [[omega]] do not match through [[R]].

**Conceptual correction**  
Declare the contact condition before using an acceleration relation.

**Mini contrast example**  
A locked wheel on ice translates but does not roll ideally.

## Mathematical errors

### Error 1: Forgetting rotational kinetic energy

**Why it seems correct**  
The center of mass is easier to see than the rotation.

**Why it is incorrect**  
[[K_total]] includes translation and rotation. Omitting the rotational term overestimates speed.

**Detection signal**  
A disk and a hoop would get the same acceleration despite different [[I]].

**Conceptual correction**  
Use the total-kinetic-energy relation whenever rolling energy is involved.

**Mini contrast example**  
A hoop stores more of the same energy in rotation than a solid disk.

## Interpretation errors

### Error 1: Reading the graph as decoration

**Why it seems correct**  
The numerical answer appears complete.

**Why it is incorrect**  
The graph checks model meaning: contact, forces, torque [[tau]], and energy split.

**Detection signal**  
The result cannot be located visually in the SVG, DCL, or Coord graph.

**Conceptual correction**  
The graph must answer the central physical question.

**Mini contrast example**  
If [[E_total]] is treated as conserved while slipping is visible, the graph reveals the model error.

## Quick self-control rule

Before closing, check model, units, sign, order of magnitude, and graph correspondence. Then ask one method question: is the unknown caused by forces, imposed by a constraint, or obtained from an energy balance?