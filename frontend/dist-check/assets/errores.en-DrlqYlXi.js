const e=`# Common errors\r
\r
## Conceptual errors\r
### Error 1: treating [[Icm]] as universal for every axis\r
\r
**Why it seems correct**\r
Students overgeneralize: if [[Icm]] is “the inertia of the body,” then it feels reusable everywhere.\r
\r
**Why it is incorrect**\r
Inertia depends on axis choice. Using [[Icm]] on a displaced axis solves a different physical problem.\r
\r
**Detection signal**\r
[[I]] does not change when the axis changes, or becomes smaller than [[Icm]].\r
\r
**Conceptual correction**\r
Identify the real axis first; only then transfer from [[Icm]] if axes are parallel.\r
\r
**Mini-contrast example**\r
A rod about its center and about its end cannot have the same inertia under the same geometry.\r
\r
## Model errors\r
### Error 2: applying Steiner to non-parallel axes\r
\r
**Why it seems correct**\r
Students use a false analogy: “axis changed” is mistaken for “Steiner applies.”\r
\r
**Why it is incorrect**\r
Steiner is a parallel-axis model. Orientation changes require tensor treatment.\r
\r
**Detection signal**\r
The same scalar correction is used for perpendicular or tilted axes.\r
\r
**Conceptual correction**\r
Use scalar transfer only for parallel axes; switch model when orientation changes.\r
\r
**Mini-contrast example**\r
Transferring a transverse rod inertia to a longitudinal axis with Steiner yields a number that does not match experiments.\r
\r
## Mathematical errors\r
### Error 3: using the wrong distance for [[d]]\r
\r
**Why it seems correct**\r
A visible point distance in a sketch is confused with axis-to-axis separation.\r
\r
**Why it is incorrect**\r
Only the perpendicular distance between axes enters the model.\r
\r
**Detection signal**\r
Units look right, but trend with geometry is physically inconsistent.\r
\r
**Conceptual correction**\r
Mark both axes and draw their perpendicular separation before substitution.\r
\r
**Mini-contrast example**\r
If two axis placements use the same [[d]], the model predicts equal [[I]] despite different geometry.\r
\r
## Interpretation errors\r
### Error 4: rejecting large [[I]] as “unrealistic”\r
\r
**Why it seems correct**\r
Plausibility bias: students expect values close to reference data.\r
\r
**Why it is incorrect**\r
A large [[I]] is often the expected outcome of a large axis shift.\r
\r
**Detection signal**\r
The computed value is manually reduced to “look reasonable.”\r
\r
**Conceptual correction**\r
Interpret with dynamics: with the same [[tau]], larger [[I]] means smaller [[alpha]].\r
\r
**Mini-contrast example**\r
For a long barrier pivoting at one end, forcing a small inertia predicts startup rates that are not observed in practice.\r
\r
## Quick self-control rule\r
1. Identify real and centroidal axes.\r
2. Check axis parallelism.\r
3. Check perpendicular [[d]].\r
4. Verify [[I]] >= [[Icm]].\r
5. Confirm dynamic trend between [[tau]], [[I]], and [[alpha]].\r
`;export{e as default};
