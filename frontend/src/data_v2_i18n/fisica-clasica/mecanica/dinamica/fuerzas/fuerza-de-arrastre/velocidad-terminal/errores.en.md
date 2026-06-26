# Common mistakes: Terminal Velocity

## Conceptual errors

### Error 1: Treating effect as cause

Students often believe that reaching [[v_t]] somehow causes the force balance. The physical direction is the opposite: force balance produces [[v_t]]. Terminal speed is the consequence of equilibrium between weight and drag.

### Error 2: Applying the formula without validating the model

It is tempting to substitute numbers immediately, but the real physics question is whether linear or quadratic drag is the defensible block. If that decision is wrong, the computed [[v_t]] is not physically meaningful.

### Error 3: Mixing similar quantities

[[v_t]] is often confused with an arbitrary instantaneous speed, and [[C_d]] is sometimes mixed with [[b]] as if both belonged to the same model. They do not. [[v_t]] is an outcome, while [[b]] and [[C_d]] belong to different drag descriptions.

## Model errors

### Error 4: Not recognizing model failure

A model that worked in one exercise is often reused blindly. But terminal-speed prediction depends on the drag law. A block that fits low-speed behavior may fail at higher speed or for a different geometry.

### Error 5: Ignoring known validity limits

Once the formula is learned, students often treat it as universal. That is unsafe. [[C_d]], [[A]], and even [[rho]] depend on context, posture, and medium conditions.

## Mathematical errors

### Error 6: Careless algebraic rearrangement

Small algebra mistakes can reverse physical dependencies. In the quadratic model, larger [[rho]], [[C_d]], or [[A]] should reduce [[v_t]], not increase it.

### Error 7: Unit inconsistency

Mixed units can move terminal-speed predictions by orders of magnitude. The final result must be consistent with SI and reported in m/s.

## Interpretation errors

### Error 8: Reporting false precision

Many decimals can give an illusion of accuracy. Model uncertainty is often much larger than the displayed numerical precision.

### Error 9: Stopping at the number

A numerical value alone does not finish the physics. A complete answer must explain why the limiting speed appears, which variable dominates it, and what the model-validity limit is.

## Quick self-control rule

Use this checklist before accepting the result:

- Was the drag block justified?
- Was [[v_t]] interpreted as an equilibrium speed rather than just a speed value?
- Do the dependencies on [[m]], [[b]], [[rho]], [[C_d]], and [[A]] make physical sense?
- Do the units lead to m/s?
- Is the validity limit explicitly stated?

If any answer is no, the solution is not finished yet.
