const e=`# Common errors: inertia tensor\r
\r
## Conceptual errors\r
\r
### Error 1: Thinking the tensor is only "a bigger written moment of inertia"\r
\r
**Why it seems correct:**  \r
Many first examples diagonalize the tensor immediately, so everything appears to reduce to three isolated numbers.\r
\r
**Why it is incorrect:**  \r
The tensor is a matrix relation between [[omega]] and [[momento_angular]]. Its real value appears precisely when axes are not principal and [[producto_inercia]] explains coupling between components.\r
\r
**Detection signal:**  \r
The student always uses a scalar formula even when the problem mentions an asymmetric body or arbitrary axes.\r
\r
**Conceptual correction:**  \r
Ask first whether [[momento_angular]] and [[omega]] must be parallel. If not, a tensor is needed, not only a scalar.\r
\r
**Mini contrast example:**  \r
An asymmetric plate may rotate with [[omega]] in one direction while [[momento_angular]] comes out tilted because of nonzero [[producto_inercia]].\r
\r
### Error 2: Treating a nonzero product of inertia as a calculation mistake\r
\r
**Why it seems correct:**  \r
The diagonal looks clean and the cross terms look like algebraic noise.\r
\r
**Why it is incorrect:**  \r
[[producto_inercia]] measures asymmetry relative to the chosen axes. It vanishes automatically only in principal axes or by symmetry.\r
\r
**Detection signal:**  \r
The student forces\r
\r
{{f:rel_l_omega}}\r
\r
without justifying any symmetry or axis rotation.\r
\r
**Conceptual correction:**  \r
Check whether the chosen frame is actually principal before canceling off-diagonal terms.\r
\r
**Mini contrast example:**  \r
The same lamina may have \`Ixy != 0\` in an arbitrary frame and\r
\r
{{f:rel_l_omega}}\r
\r
after rotating to the principal frame.\r
\r
## Model errors\r
\r
### Error 3: Using the rigid tensor when mass distribution changes during the motion\r
\r
**Why it seems correct:**  \r
Once the matrix has been computed, it feels reusable for the whole process.\r
\r
**Why it is incorrect:**  \r
If mass redistributes or the shape changes, the tensor is no longer constant and the model must be updated.\r
\r
**Detection signal:**  \r
Sliding masses, deployable parts, or elastic deformation are analyzed without recomputing the matrix.\r
\r
**Conceptual correction:**  \r
Decide whether the problem still belongs to rigid-body rotation or requires a time-dependent tensor.\r
\r
**Mini contrast example:**  \r
A satellite with deployable panels does not keep the same tensor before and after deployment.\r
\r
### Error 4: Mixing components measured in different frames\r
\r
**Why it seems correct:**  \r
Each number may look individually plausible.\r
\r
**Why it is incorrect:**  \r
The tensor only has meaning if all components refer to the same origin and the same axis set.\r
\r
**Detection signal:**  \r
The matrix stops being symmetric or generates results incompatible with the geometry.\r
\r
**Conceptual correction:**  \r
Always label origin, axes, and sign convention before assembling the matrix.\r
\r
**Mini contrast example:**  \r
Taking \`Ixx\` in a laboratory frame and \`Ixy\` in a body-fixed frame produces a matrix with no physical meaning.\r
\r
## Mathematical errors\r
\r
### Error 5: Applying \`rel_l_omega\` as if it were always a scalar formula\r
\r
**Why it seems correct:**  \r
The compact relation\r
\r
{{f:rel_l_omega}}\r
\r
is short and easy to memorize.\r
\r
**Why it is incorrect:**  \r
In this leaf, \`rel_l_omega\` becomes scalar only on a principal axis or after a justified reduction. In general it is a matrix relation.\r
\r
**Detection signal:**  \r
The student isolates\r
\r
{{f:rel_l_omega}}\r
\r
in a problem where [[momento_angular]] and [[omega]] have several components.\r
\r
**Conceptual correction:**  \r
Write the matrix form first or state explicitly that the work is being done on a principal direction.\r
\r
**Mini contrast example:**  \r
If \`Ixy != 0\`, the scalar ratio between [[momento_angular]] and [[omega]] hides directional information that the tensor must preserve.\r
\r
### Error 6: Using \`energia_cinetica_tensores\` without justifying a principal axis or an equivalent reduction\r
\r
**Why it seems correct:**  \r
The energy formula quickly produces a number and often works in simple cases.\r
\r
**Why it is incorrect:**  \r
\`energia_cinetica_tensores\` in this leaf represents a principal-axis reading or an equivalent scalar reduction. Without that justification, the energetic interpretation is incomplete.\r
\r
**Detection signal:**  \r
[[E]] is computed with one scalar \`I\` after the whole problem was handled with a non-diagonal matrix.\r
\r
**Conceptual correction:**  \r
Explain whether the system has already been rotated to principal axes or whether an equivalent principal moment is being used.\r
\r
**Mini contrast example:**  \r
A matrix with nonzero [[producto_inercia]] may require diagonalization before [[E]] is read with a scalar formula.\r
\r
## Interpretation errors\r
\r
### Error 7: Reading the misalignment between [[momento_angular]] and [[omega]] as a contradiction\r
\r
**Why it seems correct:**  \r
Introductory courses often draw both vectors as parallel.\r
\r
**Why it is incorrect:**  \r
Misalignment is one of the physical signatures of the tensor outside principal axes. It is not an anomaly; it is a reading of the model.\r
\r
**Detection signal:**  \r
The student concludes that "something went wrong" only because [[momento_angular]] does not point along [[omega]].\r
\r
**Conceptual correction:**  \r
Interpret the tilt as an effect of [[producto_inercia]] and of the chosen axes.\r
\r
**Mini contrast example:**  \r
For an asymmetric body, the same magnitude of [[omega]] can produce different directions of [[momento_angular]] depending on the frame.\r
\r
## Quick self-control rule\r
\r
Before closing an inertia-tensor problem, check:\r
\r
1. Whether origin and axes have been declared.\r
2. Whether the matrix is symmetric and all components belong to the same frame.\r
3. Whether [[producto_inercia]] was canceled only by justified symmetry or axis rotation.\r
4. Whether \`rel_l_omega\` and \`energia_cinetica_tensores\` are being used in the correct domain.\r
5. Whether the final direction of [[momento_angular]] is physically coherent with the geometry.`;export{e as default};
