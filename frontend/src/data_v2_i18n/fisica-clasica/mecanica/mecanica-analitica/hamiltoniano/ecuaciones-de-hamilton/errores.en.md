# Common Errors in Hamilton's Equations

## Conceptual Errors

### Error 1: Believing constant H means rest

Why it seems correct: if a quantity is conserved, the student may think that nothing changes.

Why it is incorrect: [[H]] may be conserved while [[qi]] and [[p]] evolve along a level curve.

Detection signal: [[qd]] and [[pd]] are concluded to be zero only because [[dHdt]] is zero.

Conceptual correction: conservation means remaining on a level surface, not stopping the flow.

Mini contrast example: an ideal oscillator conserves [[H]] and still travels around a phase ellipse.

### Error 2: Treating H only as numerical energy

Why it seems correct: in many conservative models [[H]] equals energy.

Why it is incorrect: in Hamiltonian mechanics, the decisive objects are slopes of [[H]], because they cause [[qd]] and [[pd]].

Detection signal: [[H]] is computed but its slopes are not differentiated.

Conceptual correction: use [[H]] as a motion-generating function, not only as a numerical result.

Mini contrast example: two points may have the same [[H]] and different directions of motion.

## Model errors

### Error 3: Using non-canonical variables

Why it seems correct: many pairs of variables look like position and momentum.

Why it is incorrect: Hamilton's equations require canonical pairs; not every variable works.

Detection signal: units or signs of the equations do not match [[qd]] and [[pd]].

Conceptual correction: verify that [[p]] is conjugate to [[qi]] and that [[H]] is written in those variables.

Mini contrast example: using velocity instead of momentum breaks the simple canonical form.

### Error 4: Applying the linear oscillator outside range

Why it seems correct: the quadratic form is simple and familiar.

Why it is incorrect: constant effective stiffness [[k]] only describes small linear oscillations.

Detection signal: [[pd]] proportional to [[qi]] is used for large displacements without justification.

Conceptual correction: check whether the potential remains quadratic in the region studied.

Mini contrast example: a nonlinear potential preserves Hamilton's structure, but not the straight line [[pd]] versus [[qi]].

## Mathematical Errors

### Error 5: Swapping derivatives

Why it seems correct: both equations contain partial derivatives of [[H]].

Why it is incorrect: [[qd]] comes from the derivative with respect to [[p]], while [[pd]] comes from the derivative with respect to [[qi]] with a minus sign.

Detection signal: the coordinate changes by a spatial slope and momentum by a kinetic slope.

Conceptual correction: first state which variable is held fixed in each derivative.

Mini contrast example: for the oscillator, differentiating with respect to [[p]] gives velocity; differentiating with respect to [[qi]] gives restoring force with changed sign.

### Error 6: Losing the minus sign

Why it seems correct: the sign may look like an algebraic detail.

Why it is incorrect: the minus sign produces the correct orientation of canonical flow.

Detection signal: the oscillator moves away from equilibrium instead of returning.

Conceptual correction: preserve the structural sign of the second equation.

Mini contrast example: with positive [[qi]] and positive [[k]], [[pd]] must be negative.

## Interpretation Errors

### Error 7: Reading the graph as two independent curves

Why it seems correct: the graph may show [[qd]] and [[pd]] with separate axes.

Why it is incorrect: both components form one phase vector.

Detection signal: [[qd]] is interpreted without combining it with [[pd]].

Conceptual correction: each point needs both components to indicate state direction.

Mini contrast example: positive qdot and negative pdot describe coordinate advance with momentum loss.

## Quick self-control rule

Before accepting the result, check whether [[H]] is in canonical variables, whether you differentiated with respect to the correct variable, whether you kept the minus sign, and whether you distinguish conservation from rest. If any answer fails, the Hamiltonian reading is not complete.
