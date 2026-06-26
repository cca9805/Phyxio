# Physical models: Terminal Velocity

## Ideal model

The ideal model in this leaf describes motion through a fluid where a limiting speed [[v_t]] appears once weight and drag balance each other. The key task is not only solving an equation, but deciding which drag law is physically defensible in the relevant operating range.

Two operational blocks are used: a linear drag model summarized by [[b]], and a quadratic drag model using [[rho]], [[C_d]], and [[A]]. Both can produce a terminal speed, but they should not be treated as interchangeable.

## Hypotheses

The model relies on the following assumptions:

1. Motion can be treated as effectively one-dimensional along the main fall or travel direction.
2. Weight is described with constant [[m]] and [[g]] over the region of interest.
3. The medium can be summarized by effective parameters that remain approximately constant over the analyzed band.
4. Body orientation does not change enough to invalidate the reference [[A]] or [[C_d]].

If these assumptions fail, the predicted [[v_t]] loses explanatory value.

## Quantitative validity domain

A useful operational framework is:

- Linear model: reasonable when effective drag grows approximately in direct proportion to speed over the relevant range and fit errors remain below about 10%.
- Quadratic model: reasonable when effective drag grows approximately with the square of speed and the use of [[rho]], [[C_d]], and [[A]] stays consistent with data within about 10% to 15%.
- Model switch: required when a single block fails to reproduce the whole band and the systematic error exceeds about 15%.

## Model failure signals

The most useful failure indicators are:

1. Computed [[v_t]] clearly disagrees with observed steady-speed behavior.
2. Small posture changes strongly modify the motion while the model keeps [[C_d]] or [[A]] fixed.
3. A linear fit works at low speed but fails as speed grows.
4. A quadratic fit performs well in one band but overpredicts drag elsewhere.

## Extended or alternative model

Transition should be stated explicitly:

1. If the observed behavior is almost linear in the relevant band, use the linear block with [[b]].
2. If the behavior depends strongly on speed and frontal geometry, move to the quadratic block with [[rho]], [[C_d]], and [[A]].
3. If the system crosses two behavior bands, use a piecewise model or additional experimental validation before fixing a single [[v_t]].

This matters because terminal speed is not independent of the drag law. Changing the model changes both the numerical value of [[v_t]] and the way the system approaches equilibrium.

## Operational comparison

| Aspect | Linear model | Quadratic model |
|---|---|---|
| Key parameters | [[m]], [[g]], [[b]] | [[m]], [[g]], [[rho]], [[C_d]], [[A]] |
| Drag dependence | proportional to speed | proportional to speed squared |
| Typical use | very viscous regimes or low-speed motion | inertia-dominated regimes with strong geometric effects |
| Main risk | hiding medium dependence behind one parameter | treating [[C_d]] and [[A]] as universal constants |
| When to switch | when error grows with speed | when the fit works only in a narrow band |

The structural lesson is straightforward: there is no single terminal-velocity formula valid for all cases. Model quality depends on recognizing when one block explains the physics and when the description must change.
