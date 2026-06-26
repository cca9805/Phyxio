const e=`# Exam-type example

## Problem statement

A flat square surface of side 20 cm is placed in a uniform electric field of magnitude [[E]] equal to 500 V/m. The field makes an angle of 30° with the outward normal to the surface.

**(a)** Compute the electric flux [[phi_E]] through the surface.

**(b)** What angle should the field make with the normal for the flux to be half the value computed in part (a)?

**(c)** If the number of field lines crossing the original surface is 40, how many lines would cross a parallel surface of twice the area in the same field region?

## Data

- Side of the surface: 20 cm, equivalent to 0.20 m
- Field magnitude: [[E]] equivalent to 500 V/m
- Angle between [[E]] and the outward normal: [[angulo_campo]] equivalent to 30°
- Point charge responsible for the uniform field in the region: [[q_fuente]] of positive sign generating outward field lines
- Number of lines through the original surface: 40 lines
- Area of the second surface: twice that of the first

## System definition

System: flat square surface in a uniform field. The outward normal is defined as the vector perpendicular to the plane of the surface pointing outward. The field [[E]] is uniform throughout the region, so its magnitude and direction are constant over the surface. Flux [[phi_E]] measures how many field lines cross the surface taking into account the relative orientation.

## Physical model

The model applies the proportionality between [[rho_lineas]] and [[E]], and the definition of electric flux [[phi_E]] as the product of field, area, and the cosine of angle [[angulo_campo]]. The core magnitudes of the leaf are [[E]], [[phi_E]], [[rho_lineas]], and [[angulo_campo]].

## Model justification

The uniform-field flux model is valid because the field [[E]] has the same magnitude, direction, and sense throughout the space near the surface. This ensures that the cosine factor is constant over the entire surface and the integral reduces to a simple product. The model would fail if the field varied significantly from one end of the surface to the other, which occurs near point charges where the field variation scale is comparable to the surface dimensions.

## Symbolic solution

**Part (a):** The flux is obtained by applying the relationship between [[phi_E]], [[E]], area, and angle [[angulo_campo]]:

{{f:flujo_electrico_superficie}}

The area of the square surface is the product of the side with itself. With [[angulo_campo]] of 30°, the cosine equals the square root of 3 divided by 2 (approximately 0.866). The flux is proportional to [[E]] multiplied by the area and by that cosine factor.

**Part (b):** For the flux to be half the value found in part (a), the cosine of the new [[angulo_campo]] must be half the cosine of 30°. The cosine of the new angle equals approximately 0.433, which corresponds to an angle of approximately 64°.

**Part (c):** The relationship between [[rho_lineas]] and [[E]] indicates that the number of lines crossing a surface is proportional to the area of that surface (for the same field density). If the area doubles and the field is unchanged, the number of lines doubles as well.

{{f:densidad_lineas_campo}}

To connect the diagram scale with the charge that originates the lines, Gauss's relation between [[q_fuente]] and net flux [[phi_E]] is used:

{{f:carga_fuente_gauss}}

## Numerical substitution

**Part (a):** The area of the square surface is 0.20 multiplied by 0.20, giving 0.04 m². Multiplying 500 V/m by 0.04 m² gives 20 V·m. Multiplying by cos(30°), equivalent to 0.866, yields a flux of approximately 17.3 V·m. Therefore [[phi_E]] ≈ 17.3 V·m.

**Part (b):** Half of the flux from part (a) is approximately 8.65 V·m. The cosine of the new [[angulo_campo]] must be 8.65 divided by (500 × 0.04), giving 0.433. The new [[angulo_campo]] is approximately 64°.

**Part (c):** With 40 lines for an area of 0.04 m², doubling the area to 0.08 m² in the same field region gives 80 lines. The density [[rho_lineas]] is the same (same field, same orientation), but the total number of lines doubles because the surface doubles.

## Dimensional validation

**Part (a):** Units of [[E]] are V/m; units of area are m²; the angle is dimensionless. The product has units \`[V/m] · [m²]\` simplifying to \`[V·m]\`, which is the correct unit for [[phi_E]] ✓

**Part (c):** The number of lines is dimensionless and proportional to area multiplied by [[rho_lineas]] expressed in lines/m². The ratio remains dimensionless ✓

## Physical interpretation

The result of part (a) indicates that [[phi_E]] depends critically on the orientation of the surface relative to the field. An angle of 30° between [[E]] and the normal means that the surface captures approximately 87% of the maximum possible flux (which it would capture if perpendicular to the field). This means that tilting the surface by only 30° from the optimal position barely reduces the captured flux.

Part (b) shows that to reduce the flux by half the surface must be tilted to nearly 64°. This indicates that [[phi_E]] decreases slowly for small angles (the cosine varies little near zero) and more rapidly for large angles. This non-linearity is conceptually important: it is not enough to "tilt slightly" the surface to halve the flux; a substantial tilt is required.

Part (c) reveals that [[rho_lineas]] is a local quantity: it does not change when the surface is enlarged because it depends only on the field in that region, not on the size of the measurement tool. Doubling the area simply doubles the number of captured lines, but the field strength [[E]] in that region is identical. This confirms that line density is a property of the field in space, not of the chosen surface.

For the field diagram, the number of lines assigned to the [[q_fuente]] that creates this uniform field is the reference that fixes the scale of the entire diagram: if [[q_fuente]] is larger, it gets more lines and [[rho_lineas]] throughout the region would be proportionally greater.

# Real-world example

## Context

A telecommunications engineer designs the shielding of a coaxial cable. The dielectric between the inner conductor and the outer mesh has dimensions such that the intermediate cylindrical surface has a lateral area of 0.15 m². The field [[E]] in that region, perpendicular to the cable axis, has magnitude 2 kV/m. The engineer wants to estimate flux [[phi_E]] through that cylindrical surface to verify that the dielectric breakdown limit is not exceeded.

## Physical estimation

The cylindrical surface is perpendicular to the radial field at all its points (the field is radial and the outward normal to the cylindrical surface is also radial), so [[angulo_campo]] is zero at all points of the surface. The flux is therefore the direct product of [[E]] and the area, without reduction by the angle. Multiplying 2000 V/m by 0.15 m² gives [[phi_E]] of 300 V·m.

The line density [[rho_lineas]] in that region is proportional to [[E]] of 2 kV/m. If the diagram scale assigns one line per 100 V/m, there will be 20 lines per square metre crossing the surface.

## Interpretation

The computed [[phi_E]] of 300 V·m indicates that the linear charge of the inner conductor, multiplied by the proportionality constant of Gauss's law, is consistent with that flux. Physically it means that [[E]] of 2 kV/m dominates the inner region of the cable and determines the electrical stress the dielectric must bear. If [[E]] increased (for example, with a larger signal current), the flux would grow proportionally and [[rho_lineas]] would also increase — shown in the diagram as more crowded lines near the inner conductor. This geometric mechanism explains why coaxial cables with thin dielectric have lower voltage tolerance than those with thick dielectric.
`;export{e as default};
