# Common errors in reflection

## Conceptual errors

### Error 1: measuring the angle from the surface

**Why it seems correct**

The drawing shows a very visible surface line, and the student uses it as the immediate reference. This is a confusion of geometric reference.

**Why it is incorrect**

The law of reflection uses the local normal. If the angle is measured from the surface, the complementary angle is taken and the reflected direction is constructed incorrectly.

**Detection signal**

The reflected ray looks symmetric about the surface, not about the normal.

**Conceptual correction**

Draw the normal first and measure [[theta_i]] and [[theta_r]] from it. The surface only serves to construct that perpendicular.

**Contrast mini-example**

A ray almost parallel to a table has a small angle from the table, but a large angle from the normal. Using the wrong reference reverses the prediction.

## Model errors

### Error 2: applying specular reflection to a rough surface

**Why it seems correct**

The student remembers that every wall reflects something and generalizes the plane-mirror picture. The cognitive mechanism is excessive simplification.

**Why it is incorrect**

If roughness is comparable with the wavelength, there is no single effective normal. Reflected energy spreads over many directions and one [[theta_r]] no longer describes the phenomenon.

**Detection signal**

The problem mentions a matte surface, irregular wall, foam, or texture, but the solution draws one perfectly reflected ray.

**Conceptual correction**

Use specular reflection only for surfaces smooth at the wave scale. Otherwise describe diffuse reflection or absorption.

**Contrast mini-example**

A mirror returns a clear image. A white wall reflects light, but it does not form a sharp image because it scatters the wave into many directions.

## Mathematical errors

### Error 3: confusing reflectance with a direct percentage

**Why it seems correct**

Everyday language says “it reflects eighty percent”, and the student enters 80 as if it were a fraction. This is a scale confusion.

**Why it is incorrect**

[[R_reflectancia]] is dimensionless and at a passive boundary must lie between zero and one. Using 80 would artificially multiply [[I_reflejada]].

**Detection signal**

The reflected intensity becomes much larger than [[I_incidente]] without the problem mentioning an active medium.

**Conceptual correction**

Convert percentages to fractions before computing. Eighty percent corresponds to 0.80 as the value of [[R_reflectancia]].

**Contrast mini-example**

A wave of 10 W/m² incident on a material reflecting eighty percent should return 8 W/m², not eight hundred W/m².

## Interpretation errors

### Error 4: believing reflected direction implies total reflected energy

**Why it seems correct**

The ray diagram shows a clean reflected arrow. The visual representation hides transmission, absorption, and losses.

**Why it is incorrect**

The angular law only determines direction. Reflected intensity depends on [[R_reflectancia]], which may be small even when the reflected ray is well defined.

**Detection signal**

The solution computes [[theta_r]] correctly and concludes without justification that the whole wave returns.

**Conceptual correction**

After direction, ask how much energy returns. That requires [[I_incidente]] and [[R_reflectancia]].

**Contrast mini-example**

Clean glass produces a visible reflection, but most light may pass through it. The reflected direction is correct even when its intensity is low.

## Quick self-control rule

Before closing a reflection problem, check three points. First, angles must be measured from the normal. Second, the surface must be smooth compared with the wavelength if specular reflection is used. Third, intensity requires [[R_reflectancia]], not geometry alone.

If the result gives negative [[I_reflejada]] or larger than [[I_incidente]] at a passive boundary, there is a scale, unit, or interpretation error. If the drawing has no normal, the solution is not ready.
