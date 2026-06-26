## Conceptual errors


### Error 1: Reversing the subscript order

**Why it seems correct**

The student treats [[diferencia_de_potencial]] and [[diferencia_de_potencial_inversa]] as the same quantity, by analogy with the distance between two points, which is symmetric. The subscript notation looks like a simple label for the pair of points rather than an indication of direction.

**Why it is incorrect**

Potential difference has a sign and depends on order: [[diferencia_de_potencial]] is the potential at A minus the potential at B, while [[diferencia_de_potencial_inversa]] is the potential at B minus the potential at A. They are opposite in sign. Reversing them also reverses the sign of work [[trabajo_electrico]], which can lead to concluding that the field decelerates a charge when it actually accelerates it.

**Detection signal**

The calculated work has the correct magnitude but the wrong sign. The charge apparently gains kinetic energy while moving against the field direction, which contradicts physics.

**Conceptual correction**

The first subscript of [[diferencia_de_potencial]] indicates the point from which the calculation starts, and the second indicates the reference point. Before computing, explicitly identify which is A and which is B, and draw the displacement vector A→B to assign the correct sign.

**Mini-example of contrast**

If A is at 100 V and B at 0 V, [[diferencia_de_potencial]] is 100 V and the field drives a positive charge from A to B. If the student incorrectly uses [[diferencia_de_potencial_inversa]] as 100 V instead of −100 V, they will conclude that the field drives the charge in the opposite direction, which is physically absurd.


### Error 2: Confusing potential difference with potential energy

**Why it seems correct**

The names "potential difference" and "electric potential energy" are very similar and are sometimes used interchangeably in everyday language. Both quantities are related, which reinforces the confusion.

**Why it is incorrect**

[[diferencia_de_potencial]] has units of volts (J/C), not joules. It is work per unit charge, a property of the field at those two points. Electric potential energy, by contrast, is [[trabajo_electrico]] and also depends on the charge [[carga_de_prueba]] that moves: [[trabajo_electrico]] is [[carga_de_prueba]] multiplied by [[diferencia_de_potencial]].

**Detection signal**

The "work" result has units of volts instead of joules, or the numerical value differs from the correct one by a factor equal to the charge.

**Conceptual correction**

Always distinguish: [[diferencia_de_potencial]] is the "energy height difference per unit charge"; [[trabajo_electrico]] is the energy gained or lost by a specific charge [[carga_de_prueba]] descending that height difference. To obtain [[trabajo_electrico]], multiply [[diferencia_de_potencial]] by [[carga_de_prueba]] with its sign.

**Mini-example of contrast**

A potential difference of 9 V between battery terminals does not mean the battery delivers 9 J to any load. If a resistor through which 2 C of charge flows is connected, the energy delivered is 18 J. Confusing [[diferencia_de_potencial]] with [[trabajo_electrico]] would give 9 J regardless of the charge transferred, which is incorrect.

## Model errors


### Error 3: Applying the uniform field formula outside its domain

**Why it seems correct**

The formula relating [[diferencia_de_potencial]] to [[campo_electrico_uniforme]] and [[distancia_entre_puntos]] proportionally is simple and always yields a numerical result, even when the field is not uniform. The student applies it by default without checking the uniformity condition.

**Why it is incorrect**

The proportional relation between [[diferencia_de_potencial]], [[campo_electrico_uniforme]], and [[distancia_entre_puntos]] is only valid when the field is constant throughout the entire region between A and B. Near a point charge, the field decreases with the square of the distance; applying the uniform formula there gives systematically incorrect results.

**Detection signal**

The result differs from that obtained by direct integration. If the geometry is spherical or cylindrical, the dependence of [[diferencia_de_potencial]] on distance is logarithmic or follows a power law, not linear.

**Conceptual correction**

Before applying the formula, verify that the field is truly uniform in the region of interest. For spherically or cylindrically symmetric geometries, use field integration or absolute potentials derived from Coulomb's law.

**Mini-example of contrast**

Computing the potential difference between 1 cm and 2 cm from a 1 µC point charge using the uniform field (with the field at the midpoint) gives a result that differs by more than 20 % from the correct value obtained by integration. The real potential difference varies with the inverse of distance, not linearly.


### Error 4: Ignoring fringe effects in real capacitors

**Why it seems correct**

The ideal flat capacitor model with uniform field is the one taught in textbooks, and the student applies it without considering that it is only valid away from the edges.

**Why it is incorrect**

Near the plate edges, the field curves outward and is no longer perpendicular to the plates. The potential difference calculated with the uniform field model overestimates the real value in those regions.

**Detection signal**

Experimental field measurements near the edges differ significantly from the uniform model predictions. The measured field has lateral components that the model ignores.

**Conceptual correction**

The uniform field model is valid only when the plate separation is much smaller than the lateral plate dimensions. For real capacitors with moderate aspect ratios, the fringe effect modifies the field over a strip of width comparable to the plate separation.

**Mini-example of contrast**

A capacitor with 2 cm × 2 cm plates separated by 1 cm has fringe effects that influence almost the entire capacitor. The uniform model predicts the same field at the centre and at the edge, when in reality they differ substantially.

## Mathematical errors


### Error 5: Using the total path length instead of the projection onto the field

**Why it seems correct**

The student identifies [[distancia_entre_puntos]] with the distance travelled, that is, the path length, by analogy with other physics problems where total distance is the relevant parameter.

**Why it is incorrect**

Only the component of displacement parallel to the field contributes to [[diferencia_de_potencial]]. If the path is oblique relative to the field, [[distancia_entre_puntos]] is the projection of the displacement vector onto the field direction, not the path length. A longer path perpendicular to the field produces no potential difference.

**Detection signal**

The value of [[diferencia_de_potencial]] depends on which path is chosen between A and B, which contradicts the conservative character of the electric field: potential difference between two points is unique.

**Conceptual correction**

[[distancia_entre_puntos]] is the scalar projection of the displacement vector A→B onto the field direction. If the displacement makes an angle with the field, multiply the displacement magnitude by the cosine of that angle. Displacement perpendicular to the field produces no change in potential.

**Mini-example of contrast**

An electron moving 5 cm diagonally in a horizontal field, with a horizontal component of 3 cm and a vertical component of 4 cm, experiences the same potential difference as if it had moved only 3 cm in the field direction. Using 5 cm overestimates [[diferencia_de_potencial]] by a factor of 5/3 ≈ 1.67.

## Interpretation errors


### Error 6: Concluding that the field is zero because the potential difference is zero

**Why it seems correct**

If there is no potential difference between two points, the field "does nothing" when moving a charge between them, which intuitively sounds like there is no field in that region.

**Why it is incorrect**

Zero [[diferencia_de_potencial]] means A and B are at the same potential, that is, the integral of the field along any path between A and B is zero. But the field can be strong at every point along the path; its positive and negative contributions to the integral simply cancel. The field is zero at a point only if its magnitude is zero at that specific point.

**Detection signal**

The student claims there is no electric field between two equipotential points. However, between the two faces of a conductor in equilibrium the potential difference is zero and the interior field is zero, but the field at the outer surface can be strong.

**Conceptual correction**

Separate the statements: "zero potential difference between A and B" does not imply "zero field at all points between A and B". Equipotential surfaces are precisely those on which the field does no work, but the field can be perpendicular to them with a non-zero magnitude.

**Mini-example of contrast**

Two diametrically opposite points on a conducting sphere have zero potential difference between them (the entire sphere is equipotential), but the electric field at the outer surface can be strong and perpendicular to it. Concluding zero surface field from zero [[diferencia_de_potencial]] would be wrong.

## Quick self-control rule

To verify that the calculation of [[diferencia_de_potencial]] and [[trabajo_electrico]] is correct, apply these three checks before presenting the result:

**Sign check**: Potential decreases in the direction of the field. If the displacement A→B follows the field direction, [[diferencia_de_potencial]] must be positive (A is at higher potential). If it is negative or the displacement opposes the field, verify that the sign of [[diferencia_de_potencial]] is consistent with the described geometry.

**Dimensional check**: [[diferencia_de_potencial]] must have units of volts (J/C). The product of [[carga_de_prueba]] and [[diferencia_de_potencial]] must give joules. If the units do not match, there is an error in identifying the quantities used.

**Magnitude check**: In a typical laboratory capacitor (plates separated by 1 cm with a field of 10³ N/C), the potential difference is of the order of 10 V. Potential differences greater than kV or smaller than mV in that same system indicate a calculation or data error. Always use an order-of-magnitude estimate to detect absurd results before presenting the final answer.