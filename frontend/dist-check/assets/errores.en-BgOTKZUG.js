const e=`# Errors — Electric Field Lines

## Conceptual errors

### Error 1: Believing that field lines are charge trajectories

**Por qué parece correcto**

The most immediate analogy with something visible is a trajectory: the student sees a line with an arrow and identifies it with the path something travels. Since the field indicates the direction of the force on a positive charge, it seems logical that the charge follows the field line as if it were a rail.

**Por qué es incorrecto**

A moving charge has inertia. Newton's second law states that force changes velocity, not position directly. If the initial velocity of the charge is not tangent to the field line, the trajectory curves differently from the line. Only in the special case that the initial velocity is exactly tangent to a straight field line does the trajectory coincide with the field line.

**Señal de detección**

The student claims that a charge launched perpendicular to field lines "should" turn and follow the nearest line. Or they compute a curved trajectory assuming the charge always points toward the tangent of the field line.

**Corrección conceptual**

Field lines indicate the direction of force at each point, not the direction of motion. To obtain the trajectory one must solve the equations of motion by integrating the acceleration over time. Only in uniform fields are trajectories parabolas (uniformly accelerated motion), not the straight field lines.

**Mini-ejemplo de contraste**

A positive charge launched horizontally in a vertical uniform electric field follows a parabola, exactly like a projectile under gravity. Field lines are vertical and straight, but the charge trajectory is curved. If the student applied the error, they would say the charge turns to become vertical; the correct result is that it never stops advancing horizontally.

---

### Error 2: Believing that field lines can intersect outside a charge

**Por qué parece correcto**

When manually drawing lines for two same-sign charges, the student tends to draw some that approach and "merge" between the charges, thinking they repel and cross at the midpoint where the field is weak.

**Por qué es incorrecto**

If two lines crossed at a point, the field [[E]] would have two distinct directions at that point simultaneously. The uniqueness of the electric field (guaranteed by Poisson's equation with well-defined boundary conditions) prevents this from occurring. At the neutral point between two equal same-sign charges, the field is zero, but no lines pass through that point; lines curve to avoid it.

**Señal de detección**

The student draws a diagram where two field lines touch or cross in a region without a visible charge. Or they argue that the "zero" field at the midpoint justifies the crossing because "there is no field there to separate the lines".

**Corrección conceptual**

Precisely where the field is zero there is no field line. Lines surround that point without passing through it. Crossing of lines is impossible because it would violate the mathematical uniqueness of the field.

**Mini-ejemplo de contraste**

For two equal positive charges, the midpoint has [[E]] equal to zero. If the student draws lines crossing there, they can verify by computing the field vectorially at that exact point (sum of two equal opposite vectors) the result is zero: there is no vector tangent to those crossed lines, because there is no vector at that point.

## Model errors

### Error 3: Confusing the number of lines with the number of charges

**Por qué parece correcto**

The student learns that lines leave positive charges. From this they deduce that if there are two positive charges, exactly the same number of lines must leave each one, regardless of their values.

**Por qué es incorrecto**

The number of lines leaving a charge [[q_fuente]] is proportional to the absolute value of that charge, not to the number of charges. If one charge has double the value, it gets double the lines. The convention is established by fixing a number of lines per unit charge; all representations must be consistent with this scale.

**Señal de detección**

The student draws the same number of lines around a 2 μC charge and a 1 μC charge. Or in a problem with different charge values assigns lines without accounting for the proportion.

**Corrección conceptual**

Before drawing, establish the scale: for example, 4 lines per microcoulomb. A 2 μC charge has 8 lines, a 1 μC charge has 4 lines, and a −3 μC charge has 12 lines entering it. This consistency ensures that line density correctly reflects the magnitude of [[E]] in each region.

**Mini-ejemplo de contraste**

A dipole with a 2 μC positive charge and a 1 μC negative charge cannot have the same number of lines leaving and entering. If the student draws 8 equal lines at both charges, the diagram is wrong: 4 of the 8 lines from the positive charge must "go to infinity" (because there is insufficient negative charge to absorb them all), and only 4 terminate at the negative charge.

## Mathematical errors

### Error 4: Computing flux [[phi_E]] using only the field magnitude without the cosine factor

**Por qué parece correcto**

The student remembers that flux has to do with "how much field passes" and directly substitutes [[E]] for [[phi_E]] by multiplying field by area, without considering the relative orientation between [[E]] and the surface.

**Por qué es incorrecto**

Flux [[phi_E]] depends on how many lines cross the surface, not on how many are in the region. If the field is parallel to the surface, no lines cross it and the flux is zero even if the field is strong. The [[angulo_campo]] between [[E]] and the outward normal is essential: only the component perpendicular to the plane contributes to the flux.

**Señal de detección**

The student gets the same flux for a horizontal and a vertical surface placed in the same vertical uniform field, arguing the field has the same magnitude in both cases. Or the flux result is non-zero for a surface parallel to the field.

**Corrección conceptual**

Flux is the product of the field by the area of the perpendicular projection of the surface onto the wave front (equivalently, area multiplied by the cosine of the angle between [[E]] and the normal). Always ask: "how many field lines cross this surface?" The answer is zero if the field is tangent to it.

**Mini-ejemplo de contraste**

A vertical uniform field of magnitude [[E]] points upward. A horizontal surface of area A has flux [[phi_E]] equal to [[E]] times A (all lines cross it). A vertical surface of the same area has zero flux (no lines cross it). If the student gets the same value for both, their calculation ignores the angle and is incorrect.

## Interpretation errors

### Error 5: Thinking that the nearest field line indicates the field direction at an arbitrary point

**Por qué parece correcto**

In a diagram with discrete lines, the student visually identifies the line nearest to a point of interest and assumes the field at that point points exactly in the direction of that line, even if the point does not lie on it.

**Por qué es incorrecto**

Field lines give the field direction only at points belonging to them. At a point between two lines, the actual direction of [[E]] is a vector interpolation between the tangents to neighbouring lines, weighted by distance. Discrete lines are a sample of the continuous field, not the field itself.

**Señal de detección**

The student draws the field direction at an intermediate point as exactly parallel to the nearest line, without considering the influence of neighbouring lines. Or they claim the field has exactly a vertical direction because there is a nearby vertical line, when the actual field at that point has an appreciable horizontal component.

**Corrección conceptual**

To estimate the field direction at a point between lines, one must interpolate: the actual direction lies between the tangents of the two neighbouring lines, closer to the tangent of the nearer line. For greater precision, add more lines to the diagram or compute the field analytically.

**Mini-ejemplo de contraste**

In the electric dipole, the point on the equatorial plane exactly midway between the two charges has a field directed opposite to the dipole moment. If the student only looks at the nearest field line (which may be slightly tilted), they could estimate an incorrect direction. The analytical calculation by superposition gives the exact direction.

## Quick self-control rule

For any field line diagram, check systematically:

1. **Do lines originate at positive charges and terminate at negative ones?** If lines terminate at a positive charge or originate at a negative one, the diagram is incorrect.
2. **Do they intersect at any point without a charge?** If yes, there is an error: redo the drawing.
3. **Is the number of lines proportional to the absolute value of each charge?** Count the lines at each charge and verify the proportion.
4. **Does line density increase when approaching a charge?** If density decreases when approaching, the diagram inverts Coulomb's law.
5. **Is the flux through a surface enclosing no charge zero?** Count lines entering and leaving; they must be equal.
`;export{e as default};
