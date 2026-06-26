# Common mistakes: center of mass in extended bodies

## Conceptual errors

### Mistake 1: assuming that the center of mass always coincides with the geometric center

**Why it seems correct:**
The student remembers homogeneous symmetric objects, where the visual center and the center of mass coincide.

**Why it is wrong:**
In an extended body with variable density, the weighted average shifts toward the region containing more mass. The relevant formula is not a visual rule, but the integral definition of the needed component.

{{f:xcm}}

**Detection signal:**
The student marks the geometric center without checking [[lambda]], [[sigma]], or [[rho]].

**Conceptual correction:**
First identify the density distribution and then compare the result with geometry. If density is homogeneous and symmetry is sufficient, the centroid may be valid. Otherwise integration is required.

**Mini contrast example:**
A one-meter rod with linear density increasing to the right does not balance at the midpoint. Its [[xcm]] shifts toward the denser end, even though the geometric shape is perfectly symmetric.

## Model errors

### Mistake 2: ignoring symmetry when simplifying one center-of-mass coordinate

**Why it seems correct:**
Calculating every component seems safer than reasoning before integrating.

**Why it is wrong:**
Symmetry is a physical condition, not a cosmetic shortcut. If the body is symmetric about an axis, a component such as [[ycm]] or [[zcm]] may be fixed without explicit calculation.

**Detection signal:**
The student develops a long integral and obtains zero at the end without explaining the symmetry that imposed that result from the start.

**Conceptual correction:**
Before using formulas, draw axes and decide which components are determined by symmetry.

{{f:ycm}}

{{f:zcm}}

**Mini contrast example:**
A homogeneous rectangular plate centered at the origin has transverse components canceled by symmetry. Integrating them is not wrong, but it increases the chance of unnecessary errors.

## Mathematical errors

### Mistake 3: confusing total mass with differential mass

**Why it seems correct:**
The student remembers that [[M]] appears in the definition and places it inside the integrand.

**Why it is wrong:**
[[M]] normalizes the average at the end. Inside the integral there must be [[dm]], because each region of the body contributes a small local mass.

{{f:M}}

**Detection signal:**
The integrand uses total mass as if each point of the body carried the whole mass.

**Conceptual correction:**
Replace [[dm]] with the correct differential according to the model: linear, surface, or volumetric.

{{f:dm_linear}}

{{f:dm_surface}}

{{f:dm_volume}}

**Mini contrast example:**
In a lamina, using [[sigma]] with [[dA]] produces a differential mass. Using [[M]] inside every element breaks both dimensions and interpretation.

### Mistake 4: choosing wrong limits when changing variables

**Why it seems correct:**
The original limits seem to describe the visible figure, so the student keeps them after changing coordinates.

**Why it is wrong:**
If the integration variable changes, the domain changes as well. The new domain must cover exactly the same material, without duplicating it or leaving parts out.

**Detection signal:**
The result lies outside the body, contradicts symmetry, or gives a total mass incompatible with the object's scale.

**Conceptual correction:**
Review the domain before integrating [[M]]. If the domain is wrong, every component of [[rcm]] is contaminated.

**Mini contrast example:**
In a half circular lamina, using the domain of a full circle removes the displacement that should appear. The result looks more symmetric, but it represents a different body.

## Interpretation errors

### Mistake 5: believing that the center of mass is a material point

**Why it seems correct:**
The phrase center of mass suggests a place where matter is physically concentrated.

**Why it is wrong:**
[[rcm]] is an average position. In a homogeneous ring, it can lie at the empty center. In a part with holes, it can lie outside the material and still be physically useful.

**Detection signal:**
The student says that all mass is located at the center of mass or that the point cannot exist if no material is present there.

**Conceptual correction:**
Read the center of mass as a tool for describing global translation, not as a real particle attached to the body.

**Mini contrast example:**
A ring can balance around its geometric center even though there is no matter at that point. That does not contradict the definition; it confirms it.

## Quick self-control rule

Before accepting a result, check:

1. **Units:** [[M]] must be mass; [[xcm]], [[ycm]], [[zcm]], and [[rcm]] must have length scale.
2. **Density:** if [[lambda]], [[sigma]], or [[rho]] are not constant, the center does not have to coincide with the geometric center.
3. **Differential:** [[dL]], [[dA]], and [[dV]] are not interchangeable.
4. **Symmetry:** a zero component must have a physical explanation, not just appear at the end.


