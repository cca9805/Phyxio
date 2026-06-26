# Physical models of the inertia tensor

## Ideal model

The ideal model treats the body as rigid and fixes an origin and a set of Cartesian axes relative to which the mass distribution does not change during the interval of interest. In that setting, the inertia tensor is a constant symmetric matrix and the relation between [[momento_angular]] and [[omega]] can be written as a linear map. The point of the ideal model is not only numerical calculation: it lets us distinguish when rotation is aligned with a principal axis and when off-diagonal coupling appears through [[producto_inercia]].

## Hypotheses

- The body is rigid and internal distances do not change appreciably.
- The origin and reference axes are explicitly defined.
- The mass distribution stays fixed relative to those axes.
- Off-diagonal terms represent genuine products of inertia, not sign or axis mistakes.
- The move to principal axes is performed by an orthogonal rotation, not by changing the physical quantities themselves.

## Quantitative validity domain

The matrix model is reasonable when the relative deformation satisfies

{{f:rel_l_omega}}

and the body orientation does not change so much during the interval that the tensor must be recomputed at every instant. If Delta r / R ge 0.01, or if mass redistribution makes the matrix time dependent, a single constant tensor is no longer enough. In laboratory work, a second useful criterion is that axis or mass-location uncertainty should stay below about 5% if one wants to decide reliably whether [[producto_inercia]] is truly zero.

## Model failure signals

- [[momento_angular]] looks parallel to [[omega]] on paper, but measurement or simulation shows clear precession or misalignment.
- [[producto_inercia]] changes sign only because axes were permuted incorrectly or because the origin changed without notice.
- The matrix stops being symmetric because components were assembled from inconsistent frames.
- Elastic corrections, hinges, or sliding masses modify the tensor during the process.

## Extended or alternative model

The first alternative model is the principal-axis frame. There the [[producto_inercia]] terms vanish and the tensor becomes diagonal. This does not change the physical body; it only chooses axes that reveal the natural structure of the mass distribution. One should switch to this model when `rel_l_omega` needs to be read cleanly as a componentwise relation between principal moments and principal angular velocities.

The second extended model appears when the body cannot be treated as rigid or when the tensor changes in time. Then a constant matrix is no longer enough: one needs a time-dependent tensor, a deformable-body model, or a full rigid-body formulation in non-aligned rotation. The transition must be explicit: if the products of inertia depend on the evolving state, one has to switch to the time-dependent model before continuing as if nothing had changed.

## Operational comparison

The arbitrary-axis Cartesian model is best for seeing why [[momento_angular]] and [[omega]] are not aligned. The principal-axis model is better for interpreting stability, energy, and eigen-directions. The time-dependent or deformable model is the right one when geometry changes during the motion. In practice, one should switch models when the current representation hides the cause of the phenomenon: if the arbitrary frame hides the natural modes, move to principal axes; if the rigid model hides real geometric changes, move to a time-dependent tensor.