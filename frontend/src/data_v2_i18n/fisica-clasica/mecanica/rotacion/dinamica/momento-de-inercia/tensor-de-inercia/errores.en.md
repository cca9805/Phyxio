# Common errors: inertia tensor

## Conceptual errors

### Error 1: Thinking the tensor is only "a bigger written moment of inertia"

**Why it seems correct:**  
Many first examples diagonalize the tensor immediately, so everything appears to reduce to three isolated numbers.

**Why it is incorrect:**  
The tensor is a matrix relation between [[omega]] and [[momento_angular]]. Its real value appears precisely when axes are not principal and [[producto_inercia]] explains coupling between components.

**Detection signal:**  
The student always uses a scalar formula even when the problem mentions an asymmetric body or arbitrary axes.

**Conceptual correction:**  
Ask first whether [[momento_angular]] and [[omega]] must be parallel. If not, a tensor is needed, not only a scalar.

**Mini contrast example:**  
An asymmetric plate may rotate with [[omega]] in one direction while [[momento_angular]] comes out tilted because of nonzero [[producto_inercia]].

### Error 2: Treating a nonzero product of inertia as a calculation mistake

**Why it seems correct:**  
The diagonal looks clean and the cross terms look like algebraic noise.

**Why it is incorrect:**  
[[producto_inercia]] measures asymmetry relative to the chosen axes. It vanishes automatically only in principal axes or by symmetry.

**Detection signal:**  
The student forces

{{f:rel_l_omega}}

without justifying any symmetry or axis rotation.

**Conceptual correction:**  
Check whether the chosen frame is actually principal before canceling off-diagonal terms.

**Mini contrast example:**  
The same lamina may have `Ixy != 0` in an arbitrary frame and

{{f:rel_l_omega}}

after rotating to the principal frame.

## Model errors

### Error 3: Using the rigid tensor when mass distribution changes during the motion

**Why it seems correct:**  
Once the matrix has been computed, it feels reusable for the whole process.

**Why it is incorrect:**  
If mass redistributes or the shape changes, the tensor is no longer constant and the model must be updated.

**Detection signal:**  
Sliding masses, deployable parts, or elastic deformation are analyzed without recomputing the matrix.

**Conceptual correction:**  
Decide whether the problem still belongs to rigid-body rotation or requires a time-dependent tensor.

**Mini contrast example:**  
A satellite with deployable panels does not keep the same tensor before and after deployment.

### Error 4: Mixing components measured in different frames

**Why it seems correct:**  
Each number may look individually plausible.

**Why it is incorrect:**  
The tensor only has meaning if all components refer to the same origin and the same axis set.

**Detection signal:**  
The matrix stops being symmetric or generates results incompatible with the geometry.

**Conceptual correction:**  
Always label origin, axes, and sign convention before assembling the matrix.

**Mini contrast example:**  
Taking `Ixx` in a laboratory frame and `Ixy` in a body-fixed frame produces a matrix with no physical meaning.

## Mathematical errors

### Error 5: Applying `rel_l_omega` as if it were always a scalar formula

**Why it seems correct:**  
The compact relation

{{f:rel_l_omega}}

is short and easy to memorize.

**Why it is incorrect:**  
In this leaf, `rel_l_omega` becomes scalar only on a principal axis or after a justified reduction. In general it is a matrix relation.

**Detection signal:**  
The student isolates

{{f:rel_l_omega}}

in a problem where [[momento_angular]] and [[omega]] have several components.

**Conceptual correction:**  
Write the matrix form first or state explicitly that the work is being done on a principal direction.

**Mini contrast example:**  
If `Ixy != 0`, the scalar ratio between [[momento_angular]] and [[omega]] hides directional information that the tensor must preserve.

### Error 6: Using `energia_cinetica_tensores` without justifying a principal axis or an equivalent reduction

**Why it seems correct:**  
The energy formula quickly produces a number and often works in simple cases.

**Why it is incorrect:**  
`energia_cinetica_tensores` in this leaf represents a principal-axis reading or an equivalent scalar reduction. Without that justification, the energetic interpretation is incomplete.

**Detection signal:**  
[[E]] is computed with one scalar `I` after the whole problem was handled with a non-diagonal matrix.

**Conceptual correction:**  
Explain whether the system has already been rotated to principal axes or whether an equivalent principal moment is being used.

**Mini contrast example:**  
A matrix with nonzero [[producto_inercia]] may require diagonalization before [[E]] is read with a scalar formula.

## Interpretation errors

### Error 7: Reading the misalignment between [[momento_angular]] and [[omega]] as a contradiction

**Why it seems correct:**  
Introductory courses often draw both vectors as parallel.

**Why it is incorrect:**  
Misalignment is one of the physical signatures of the tensor outside principal axes. It is not an anomaly; it is a reading of the model.

**Detection signal:**  
The student concludes that "something went wrong" only because [[momento_angular]] does not point along [[omega]].

**Conceptual correction:**  
Interpret the tilt as an effect of [[producto_inercia]] and of the chosen axes.

**Mini contrast example:**  
For an asymmetric body, the same magnitude of [[omega]] can produce different directions of [[momento_angular]] depending on the frame.

## Quick self-control rule

Before closing an inertia-tensor problem, check:

1. Whether origin and axes have been declared.
2. Whether the matrix is symmetric and all components belong to the same frame.
3. Whether [[producto_inercia]] was canceled only by justified symmetry or axis rotation.
4. Whether `rel_l_omega` and `energia_cinetica_tensores` are being used in the correct domain.
5. Whether the final direction of [[momento_angular]] is physically coherent with the geometry.