# Common Errors: Typical Moments of Inertia

## Conceptual errors

### Error 1: Confusing the shape factor with an arbitrary constant

**Why it seems correct**
The factors in typical formulas (1/2, 2/5, 1/12) are small dimensionless numbers printed in tables without derivational context. Not recalling their origin, students treat them as interchangeable numerical conventions.

**Why it is incorrect**
Each factor arises from the integral

{{f:disco-macizo}}

applied to the specific geometry of the body. The 1/2 factor for the solid disk reflects that mass is distributed with uniform radial density from the axis to the rim; the 2/5 factor for the solid sphere reflects the three-dimensional distribution. Mixing them produces a moment of inertia that does not correspond to any real object.

**Detection signal**
The calculated inertia exceeds that of the thin ring of the same radius and mass (

{{f:disco-macizo}}

), which is the theoretical upper bound for that radius. Any result with an effective factor greater than 1 signals a modeling error.

**Conceptual correction**
Associate each factor with a geometric image: disk (mass stacked in a plane), solid sphere (mass in three dimensions), ring (mass concentrated at the rim). If the image does not match the problem's object, neither does the formula.

**Mini contrast example**
Solid sphere of 2 kg and radius 0.3 m. Correct factor:

{{f:disco-macizo}}

 kg·m². Disk factor:

{{f:disco-macizo}}

kg·m² (25% larger, wrong geometry).

---

### Error 2: Using the catalog without checking the real object's geometry

**Why it seems correct**
The object looks approximately spherical, cylindrical, or rectangular. Students look up the closest shape in the catalog and apply the formula without checking whether uniform-density and ideal-geometry hypotheses hold.

**Why it is incorrect**
Catalog formulas assume uniform volumetric density and perfect geometry. If the object has internal voids, material gradients, or irregular shape, the real shape factor differs from the theoretical one and the inertia from the catalog formula is incorrect.

**Detection signal**
The experimental shape factor

{{f:esfera-maciza}}

from dynamic measurement differs from the catalog by more than 5%. Objects like Earth have a real factor near 0.33 rather than 0.4 because the metallic core is concentrated close to the axis.

**Conceptual correction**
Before using a catalog formula, explicitly verify that the object is homogeneous and that its external geometry matches the chosen primitive. If this cannot be verified, measure the inertia experimentally through a torsion pendulum rather than assuming the theoretical factor.

**Mini contrast example**
Thick-walled hollow sphere: using

{{f:disco-macizo}}

overestimates the true inertia, because part of the mass is in the hollow center and does not contribute. The correct formula integrates over the inner and outer radii.

---

## Model errors

### Error 3: Applying thin-object formulas to objects with significant thickness

**Why it seems correct**
The formula

{{f:barra-centro}}

 for a rod or

{{f:barra-centro}}

for a disk is presented without a scale warning. Students apply them to any long prism or cylinder without checking the aspect ratio.

**Why it is incorrect**
These formulas are derived assuming the transverse dimension is negligible. If the rod's diameter or the disk's thickness exceeds 10% of the main dimension, the transverse-radius contribution to the moment of inertia is no longer zero and the systematic error exceeds the acceptable calculation margin.

**Detection signal**
In simulation or experiment, the measured inertia consistently exceeds the catalog value even though mass and length data are correct. The discrepancy grows as the relative thickness increases.

**Conceptual correction**
Verify that the transverse dimension is at least one order of magnitude smaller than the main dimension. If not, use the solid-cylinder or rectangular-prism formula that includes the transverse radius or the plate dimensions a and b.

**Mini contrast example**
Cylinder of radius

{{f:barra-centro}}

 m and length

{{f:barra-centro}}

 m. Rod formula:

{{f:barra-centro}}

. Full cylinder formula:

{{f:barra-centro}}

. The gap between the two grows as R/L increases.

---

### Error 4: Omitting Steiner's theorem when the axis does not pass through the center of mass

**Why it seems correct**
The catalog provides a numerical value for each shape. Students assume that value is sufficient for any configuration without checking whether the problem axis matches the catalog axis.

**Why it is incorrect**
Catalog formulas give the inertia about the axis passing through the center of mass along the symmetry direction. If the actual axis is displaced by a distance d, the correct inertia is

{{f:placa-rectangular}}

. Omitting the md^2 term always underestimates the inertia.

**Detection signal**
The torque needed to produce the calculated angular acceleration is less than the experimentally measured torque, or the system reaches the target speed more slowly than predicted.

**Conceptual correction**
Before using a catalog formula, check whether the problem axis passes through the center of mass. If not, compute I_{cm} from the catalog and add md^2, where d is the distance between the two parallel axes.

**Mini contrast example**
Rod of mass

{{f:barra-centro}}

 kg and length

{{f:barra-centro}}

 m rotating about one end. Without Steiner:

{{f:barra-centro}}

 kg·m². With Steiner (

{{f:barra-centro}}

):

{{f:barra-centro}}

kg·m². The omission error is 75%.

---

## Mathematical errors

### Error 5: Substituting diameter instead of radius

**Why it seems correct**
The diameter is the dimension most frequently found in catalogs and technical diagrams. Students read it directly from the data and insert it into the formula without conversion.

**Why it is incorrect**
Typical formulas are written in terms of the radius R, not the diameter. Since

{{f:aro-fino}}

, substituting D for R squares an extra factor of 2, producing a 300% error in the final result.

**Detection signal**
The result is four times larger than the order-of-magnitude estimate, or larger than the inertia of the thin ring with the same nominal radius, which is the theoretical upper bound.

**Conceptual correction**
Before substituting, identify whether the given dimension is a radius or a diameter and convert

{{f:aro-fino}}

before squaring — never after.

**Mini contrast example**
Disk with mass

{{f:disco-macizo}}

 kg and diameter

{{f:disco-macizo}}

 m. Correct:

{{f:disco-macizo}}

 m,

{{f:disco-macizo}}

 kg·m². Incorrect:

{{f:disco-macizo}}

kg·m² (four times larger).

---

## Interpretation errors

### Error 6: Treating the catalog value as the final answer for any rotation axis

**Why it seems correct**
The catalog provides a named, illustrated value. Students interpret it as the definitive answer for any problem involving that shape, without recognizing that the catalog axis is only the body's symmetry axis at its center of mass.

**Why it is incorrect**
Catalog formulas are intrinsic properties of the center of mass. In most real applications the rotation axis does not pass through the geometric center, and the operative inertia is I_{cm} + md^2. This "catalog paralysis" blocks students from solving real problems where axes almost never coincide with the symmetry center.

**Detection signal**
The student searches unsuccessfully for a catalog formula for "a rod rotating about a point at one-third of its length," instead of composing the solution from the table formula and Steiner's theorem.

**Conceptual correction**
Treat catalog formulas as a starting point, not a final answer. The correct interpretation requires identifying whether the problem axis matches the catalog symmetry axis and applying the displacement term when it does not.

**Mini contrast example**
Rectangular plate of mass m, sides a and b, rotating about a corner instead of the center. The catalog gives

{{f:placa-rectangular}}

. Adding Steiner for the corner axis yields

{{f:placa-rectangular}}

. Using only the catalog underestimates the inertia by half.

---

## Quick self-control rule

To verify the validity of a typical formula choice, apply the **F.G.A. rule (Factor, Geometry, Axis)**:

1. **Factor**: Compare the number (1/2, 2/5, etc.). Is it consistent with mass concentration? More mass far from the axis means a larger factor.
2. **Geometry**: Is the object truly uniform and thin according to the formula's hypotheses? Is the thickness negligible compared to the main dimension?
3. **Axis**: Does the catalog axis exactly match the problem's axis? If the axis is displaced, add md^2.