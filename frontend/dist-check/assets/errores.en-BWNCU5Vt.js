const r=`# Common Errors: Typical Moments of Inertia\r
\r
## Conceptual errors\r
\r
### Error 1: Confusing the shape factor with an arbitrary constant\r
\r
**Why it seems correct**\r
The factors in typical formulas (1/2, 2/5, 1/12) are small dimensionless numbers printed in tables without derivational context. Not recalling their origin, students treat them as interchangeable numerical conventions.\r
\r
**Why it is incorrect**\r
Each factor arises from the integral\r
\r
{{f:disco-macizo}}\r
\r
applied to the specific geometry of the body. The 1/2 factor for the solid disk reflects that mass is distributed with uniform radial density from the axis to the rim; the 2/5 factor for the solid sphere reflects the three-dimensional distribution. Mixing them produces a moment of inertia that does not correspond to any real object.\r
\r
**Detection signal**\r
The calculated inertia exceeds that of the thin ring of the same radius and mass (\r
\r
{{f:disco-macizo}}\r
\r
), which is the theoretical upper bound for that radius. Any result with an effective factor greater than 1 signals a modeling error.\r
\r
**Conceptual correction**\r
Associate each factor with a geometric image: disk (mass stacked in a plane), solid sphere (mass in three dimensions), ring (mass concentrated at the rim). If the image does not match the problem's object, neither does the formula.\r
\r
**Mini contrast example**\r
Solid sphere of 2 kg and radius 0.3 m. Correct factor:\r
\r
{{f:disco-macizo}}\r
\r
 kg·m². Disk factor:\r
\r
{{f:disco-macizo}}\r
\r
kg·m² (25% larger, wrong geometry).\r
\r
---\r
\r
### Error 2: Using the catalog without checking the real object's geometry\r
\r
**Why it seems correct**\r
The object looks approximately spherical, cylindrical, or rectangular. Students look up the closest shape in the catalog and apply the formula without checking whether uniform-density and ideal-geometry hypotheses hold.\r
\r
**Why it is incorrect**\r
Catalog formulas assume uniform volumetric density and perfect geometry. If the object has internal voids, material gradients, or irregular shape, the real shape factor differs from the theoretical one and the inertia from the catalog formula is incorrect.\r
\r
**Detection signal**\r
The experimental shape factor\r
\r
{{f:esfera-maciza}}\r
\r
from dynamic measurement differs from the catalog by more than 5%. Objects like Earth have a real factor near 0.33 rather than 0.4 because the metallic core is concentrated close to the axis.\r
\r
**Conceptual correction**\r
Before using a catalog formula, explicitly verify that the object is homogeneous and that its external geometry matches the chosen primitive. If this cannot be verified, measure the inertia experimentally through a torsion pendulum rather than assuming the theoretical factor.\r
\r
**Mini contrast example**\r
Thick-walled hollow sphere: using\r
\r
{{f:disco-macizo}}\r
\r
overestimates the true inertia, because part of the mass is in the hollow center and does not contribute. The correct formula integrates over the inner and outer radii.\r
\r
---\r
\r
## Model errors\r
\r
### Error 3: Applying thin-object formulas to objects with significant thickness\r
\r
**Why it seems correct**\r
The formula\r
\r
{{f:barra-centro}}\r
\r
 for a rod or\r
\r
{{f:barra-centro}}\r
\r
for a disk is presented without a scale warning. Students apply them to any long prism or cylinder without checking the aspect ratio.\r
\r
**Why it is incorrect**\r
These formulas are derived assuming the transverse dimension is negligible. If the rod's diameter or the disk's thickness exceeds 10% of the main dimension, the transverse-radius contribution to the moment of inertia is no longer zero and the systematic error exceeds the acceptable calculation margin.\r
\r
**Detection signal**\r
In simulation or experiment, the measured inertia consistently exceeds the catalog value even though mass and length data are correct. The discrepancy grows as the relative thickness increases.\r
\r
**Conceptual correction**\r
Verify that the transverse dimension is at least one order of magnitude smaller than the main dimension. If not, use the solid-cylinder or rectangular-prism formula that includes the transverse radius or the plate dimensions a and b.\r
\r
**Mini contrast example**\r
Cylinder of radius\r
\r
{{f:barra-centro}}\r
\r
 m and length\r
\r
{{f:barra-centro}}\r
\r
 m. Rod formula:\r
\r
{{f:barra-centro}}\r
\r
. Full cylinder formula:\r
\r
{{f:barra-centro}}\r
\r
. The gap between the two grows as R/L increases.\r
\r
---\r
\r
### Error 4: Omitting Steiner's theorem when the axis does not pass through the center of mass\r
\r
**Why it seems correct**\r
The catalog provides a numerical value for each shape. Students assume that value is sufficient for any configuration without checking whether the problem axis matches the catalog axis.\r
\r
**Why it is incorrect**\r
Catalog formulas give the inertia about the axis passing through the center of mass along the symmetry direction. If the actual axis is displaced by a distance d, the correct inertia is\r
\r
{{f:placa-rectangular}}\r
\r
. Omitting the md^2 term always underestimates the inertia.\r
\r
**Detection signal**\r
The torque needed to produce the calculated angular acceleration is less than the experimentally measured torque, or the system reaches the target speed more slowly than predicted.\r
\r
**Conceptual correction**\r
Before using a catalog formula, check whether the problem axis passes through the center of mass. If not, compute I_{cm} from the catalog and add md^2, where d is the distance between the two parallel axes.\r
\r
**Mini contrast example**\r
Rod of mass\r
\r
{{f:barra-centro}}\r
\r
 kg and length\r
\r
{{f:barra-centro}}\r
\r
 m rotating about one end. Without Steiner:\r
\r
{{f:barra-centro}}\r
\r
 kg·m². With Steiner (\r
\r
{{f:barra-centro}}\r
\r
):\r
\r
{{f:barra-centro}}\r
\r
kg·m². The omission error is 75%.\r
\r
---\r
\r
## Mathematical errors\r
\r
### Error 5: Substituting diameter instead of radius\r
\r
**Why it seems correct**\r
The diameter is the dimension most frequently found in catalogs and technical diagrams. Students read it directly from the data and insert it into the formula without conversion.\r
\r
**Why it is incorrect**\r
Typical formulas are written in terms of the radius R, not the diameter. Since\r
\r
{{f:aro-fino}}\r
\r
, substituting D for R squares an extra factor of 2, producing a 300% error in the final result.\r
\r
**Detection signal**\r
The result is four times larger than the order-of-magnitude estimate, or larger than the inertia of the thin ring with the same nominal radius, which is the theoretical upper bound.\r
\r
**Conceptual correction**\r
Before substituting, identify whether the given dimension is a radius or a diameter and convert\r
\r
{{f:aro-fino}}\r
\r
before squaring — never after.\r
\r
**Mini contrast example**\r
Disk with mass\r
\r
{{f:disco-macizo}}\r
\r
 kg and diameter\r
\r
{{f:disco-macizo}}\r
\r
 m. Correct:\r
\r
{{f:disco-macizo}}\r
\r
 m,\r
\r
{{f:disco-macizo}}\r
\r
 kg·m². Incorrect:\r
\r
{{f:disco-macizo}}\r
\r
kg·m² (four times larger).\r
\r
---\r
\r
## Interpretation errors\r
\r
### Error 6: Treating the catalog value as the final answer for any rotation axis\r
\r
**Why it seems correct**\r
The catalog provides a named, illustrated value. Students interpret it as the definitive answer for any problem involving that shape, without recognizing that the catalog axis is only the body's symmetry axis at its center of mass.\r
\r
**Why it is incorrect**\r
Catalog formulas are intrinsic properties of the center of mass. In most real applications the rotation axis does not pass through the geometric center, and the operative inertia is I_{cm} + md^2. This "catalog paralysis" blocks students from solving real problems where axes almost never coincide with the symmetry center.\r
\r
**Detection signal**\r
The student searches unsuccessfully for a catalog formula for "a rod rotating about a point at one-third of its length," instead of composing the solution from the table formula and Steiner's theorem.\r
\r
**Conceptual correction**\r
Treat catalog formulas as a starting point, not a final answer. The correct interpretation requires identifying whether the problem axis matches the catalog symmetry axis and applying the displacement term when it does not.\r
\r
**Mini contrast example**\r
Rectangular plate of mass m, sides a and b, rotating about a corner instead of the center. The catalog gives\r
\r
{{f:placa-rectangular}}\r
\r
. Adding Steiner for the corner axis yields\r
\r
{{f:placa-rectangular}}\r
\r
. Using only the catalog underestimates the inertia by half.\r
\r
---\r
\r
## Quick self-control rule\r
\r
To verify the validity of a typical formula choice, apply the **F.G.A. rule (Factor, Geometry, Axis)**:\r
\r
1. **Factor**: Compare the number (1/2, 2/5, etc.). Is it consistent with mass concentration? More mass far from the axis means a larger factor.\r
2. **Geometry**: Is the object truly uniform and thin according to the formula's hypotheses? Is the thickness negligible compared to the main dimension?\r
3. **Axis**: Does the catalog axis exactly match the problem's axis? If the axis is displaced, add md^2.`;export{r as default};
