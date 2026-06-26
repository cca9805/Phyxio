const e=`\uFEFF# Exam-type example\r
\r
## Problem statement\r
\r
A thin rod of length 2.0 m is placed on a horizontal axis. The origin is at the left end and the linear density increases proportionally with distance from the origin. The task is to decide which model to use, calculate the total mass [[M]], locate [[xcm]], and explain why the result does not coincide with the geometric center.\r
\r
The goal is not to repeat an integral from memory. The goal is to recognize that the rod is an extended body, that its mass is not concentrated at points, and that each small segment contributes a different [[dm]]. Since density grows to the right, the center of mass must lie to the right of the midpoint.\r
\r
## Data\r
\r
- Body: thin rod, therefore a linear model.\r
- Local coordinate: [[x]], measured from the left end.\r
- Density: [[lambda]] increases with [[x]].\r
- Geometric differential: [[dL]].\r
- Mass element: [[dm]], built with the linear formula.\r
- Model comparison: a lamina would use [[dA]] and a solid would use [[dV]], but here the linear model is justified.\r
\r
## System definition\r
\r
The system includes only the rod. Supports, air, and measuring marks are not included. The rod axis is used as the calculation axis, so the transverse component [[ycm]] is canceled by symmetry and the out-of-plane component [[zcm]] does not intervene.\r
\r
The relevant quantity is [[xcm]], because the distribution changes only along [[x]]. The vector [[rcm]] exists, but in this case all useful information is summarized by that horizontal component.\r
\r
## Physical model\r
\r
First the total mass is calculated:\r
\r
{{f:M}}\r
\r
Then the horizontal component definition is used:\r
\r
{{f:xcm}}\r
\r
Because the body is a thin rod, the mass differential is built as follows:\r
\r
{{f:dm_linear}}\r
\r
This sequence matters. If the geometric center is used before checking [[lambda]], the very information that shifts the average is ignored. If [[M]] is used inside the integrand instead of [[dm]], the local mass distribution is lost.

## Model justification

The integral model is required because the rod is neither a particle nor a small collection of point masses. The density [[lambda]] changes with [[x]], so each segment [[dL]] contributes a different [[dm]]. This is exactly the case for the linear mass element, total mass, and horizontal center-of-mass component.

Transverse symmetry justifies not calculating [[ycm]] or [[zcm]], but it does not allow replacing [[xcm]] with the geometric center. Density variation breaks longitudinal mass symmetry even when the shape is straight.

## Symbolic solution
\r
The linear density grows to the right. Therefore, segments near the right end contribute more mass than segments near the origin. When [[M]] is integrated, each small segment adds its local mass. When [[xcm]] is integrated, each segment also adds its position, so distant dense segments weigh twice in the first moment.\r
\r
The complete formulation of the leaf also recognizes the general vector and the other differentials:\r
\r
{{f:rcm}}

{{f:dm_linear}}

{{f:dm_surface}}

{{f:dm_volume}}
\r
The expected result must satisfy three conditions:\r
\r
- [[M]] must be positive.\r
- [[xcm]] must have length units.\r
- [[xcm]] must lie between the origin and the right end, but closer to the right end than to the geometric center.\r
\r
If the calculation gives a point outside the rod, the error is usually in the limits. If it gives the exact midpoint, [[lambda]] has probably been treated as constant even though the statement said it varied.\r
\r
## Numerical substitution
\r
For a 2.0 m rod with density increasing linearly from the origin, the center of mass lies around two thirds of the length measured from the left end. In this case, that is approximately 1.33 m.\r
\r
The physical reading is clear: the point is not at 1.00 m because the right half contains more effective mass. This means density dominates the position of the average, and the result is physically consistent with the distribution. It is not attached to the end either, because the left half still contributes mass. The intermediate value expresses the balance between position and amount of mass.\r
\r
## Dimensional validation\r
\r
The formula for [[M]] sums elements [[dm]], so the result is a mass. The formula for [[xcm]] divides a first mass moment by [[M]], so the result becomes a length. This dimensional validation prevents accepting results with mass, area, or density units for a coordinate.\r
\r
## Physical interpretation\r
\r
The rod would balance horizontally if supported near [[xcm]], not at its visual center. This means the result indicates a measurable physical property: the support balances the real first mass moment, not the geometric drawing. In a laboratory, this would be observed by moving a support until the rod stops rotating.
\r
This example also shows why the graph must reflect the distribution. If shading or density marks grow to the right, the point marked as center of mass must shift toward that region.\r
\r
# Real-world example\r
\r
## Context\r
\r
A wind turbine blade is long, light near the tip, and reinforced near the hub. Its shape is not enough to locate the center of mass, because material distribution changes along the piece. The linear model can be a first approximation if only the longitudinal direction is studied.\r
\r
## Physical estimation\r
\r
The engineer identifies a coordinate [[x]] from the hub toward the tip. In each segment there is an effective linear density [[lambda]], associated with material, thickness, and local width. The differential [[dL]] represents a small blade segment, and [[dm]] represents the mass of that segment. As a scale estimate, shifting [[xcm]] a few centimeters toward the tip can already increase periodic rotor loads.\r
\r
{{f:dm_linear}}

{{f:M}}

{{f:xcm}}
\r
If the hub reinforcement dominates, [[xcm]] stays near the rotation axis. If too much material is added near the tip, [[xcm]] shifts outward and vibration risk increases. The quantitative reading is not only locating a point: it allows designers to compare mass distributions.\r
\r
## Interpretation\r
\r
The calculated center of mass is used to design supports, balancing, and vibration control. If the real blade does not match the predicted [[xcm]], the rotor can generate periodic loads that reduce system lifetime. That is why the integral is not mathematical decoration, but a physical control tool.\r
\r
\r
\r
\r
`;export{e as default};
