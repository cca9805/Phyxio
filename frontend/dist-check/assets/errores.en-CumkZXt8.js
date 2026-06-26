const e=`\uFEFF# Common mistakes: center of mass in extended bodies\r
\r
## Conceptual errors\r
\r
### Mistake 1: assuming that the center of mass always coincides with the geometric center\r
\r
**Why it seems correct:**\r
The student remembers homogeneous symmetric objects, where the visual center and the center of mass coincide.\r
\r
**Why it is wrong:**\r
In an extended body with variable density, the weighted average shifts toward the region containing more mass. The relevant formula is not a visual rule, but the integral definition of the needed component.\r
\r
{{f:xcm}}\r
\r
**Detection signal:**\r
The student marks the geometric center without checking [[lambda]], [[sigma]], or [[rho]].\r
\r
**Conceptual correction:**\r
First identify the density distribution and then compare the result with geometry. If density is homogeneous and symmetry is sufficient, the centroid may be valid. Otherwise integration is required.\r
\r
**Mini contrast example:**\r
A one-meter rod with linear density increasing to the right does not balance at the midpoint. Its [[xcm]] shifts toward the denser end, even though the geometric shape is perfectly symmetric.\r
\r
## Model errors\r
\r
### Mistake 2: ignoring symmetry when simplifying one center-of-mass coordinate\r
\r
**Why it seems correct:**\r
Calculating every component seems safer than reasoning before integrating.\r
\r
**Why it is wrong:**\r
Symmetry is a physical condition, not a cosmetic shortcut. If the body is symmetric about an axis, a component such as [[ycm]] or [[zcm]] may be fixed without explicit calculation.\r
\r
**Detection signal:**\r
The student develops a long integral and obtains zero at the end without explaining the symmetry that imposed that result from the start.\r
\r
**Conceptual correction:**\r
Before using formulas, draw axes and decide which components are determined by symmetry.\r
\r
{{f:ycm}}

{{f:zcm}}
\r
**Mini contrast example:**\r
A homogeneous rectangular plate centered at the origin has transverse components canceled by symmetry. Integrating them is not wrong, but it increases the chance of unnecessary errors.\r
\r
## Mathematical errors\r
\r
### Mistake 3: confusing total mass with differential mass\r
\r
**Why it seems correct:**\r
The student remembers that [[M]] appears in the definition and places it inside the integrand.\r
\r
**Why it is wrong:**\r
[[M]] normalizes the average at the end. Inside the integral there must be [[dm]], because each region of the body contributes a small local mass.\r
\r
{{f:M}}\r
\r
**Detection signal:**\r
The integrand uses total mass as if each point of the body carried the whole mass.\r
\r
**Conceptual correction:**\r
Replace [[dm]] with the correct differential according to the model: linear, surface, or volumetric.\r
\r
{{f:dm_linear}}

{{f:dm_surface}}

{{f:dm_volume}}
\r
**Mini contrast example:**\r
In a lamina, using [[sigma]] with [[dA]] produces a differential mass. Using [[M]] inside every element breaks both dimensions and interpretation.\r
\r
### Mistake 4: choosing wrong limits when changing variables\r
\r
**Why it seems correct:**\r
The original limits seem to describe the visible figure, so the student keeps them after changing coordinates.\r
\r
**Why it is wrong:**\r
If the integration variable changes, the domain changes as well. The new domain must cover exactly the same material, without duplicating it or leaving parts out.\r
\r
**Detection signal:**\r
The result lies outside the body, contradicts symmetry, or gives a total mass incompatible with the object's scale.\r
\r
**Conceptual correction:**\r
Review the domain before integrating [[M]]. If the domain is wrong, every component of [[rcm]] is contaminated.\r
\r
**Mini contrast example:**\r
In a half circular lamina, using the domain of a full circle removes the displacement that should appear. The result looks more symmetric, but it represents a different body.\r
\r
## Interpretation errors\r
\r
### Mistake 5: believing that the center of mass is a material point\r
\r
**Why it seems correct:**\r
The phrase center of mass suggests a place where matter is physically concentrated.\r
\r
**Why it is wrong:**\r
[[rcm]] is an average position. In a homogeneous ring, it can lie at the empty center. In a part with holes, it can lie outside the material and still be physically useful.\r
\r
**Detection signal:**\r
The student says that all mass is located at the center of mass or that the point cannot exist if no material is present there.\r
\r
**Conceptual correction:**\r
Read the center of mass as a tool for describing global translation, not as a real particle attached to the body.\r
\r
**Mini contrast example:**\r
A ring can balance around its geometric center even though there is no matter at that point. That does not contradict the definition; it confirms it.\r
\r
## Quick self-control rule\r
\r
Before accepting a result, check:\r
\r
1. **Units:** [[M]] must be mass; [[xcm]], [[ycm]], [[zcm]], and [[rcm]] must have length scale.\r
2. **Density:** if [[lambda]], [[sigma]], or [[rho]] are not constant, the center does not have to coincide with the geometric center.\r
3. **Differential:** [[dL]], [[dA]], and [[dV]] are not interchangeable.\r
4. **Symmetry:** a zero component must have a physical explanation, not just appear at the end.\r
\r
\r
`;export{e as default};
