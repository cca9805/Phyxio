const e=`# Common mistakes: Terminal Velocity\r
\r
## Conceptual errors\r
\r
### Error 1: Treating effect as cause\r
\r
Students often believe that reaching [[v_t]] somehow causes the force balance. The physical direction is the opposite: force balance produces [[v_t]]. Terminal speed is the consequence of equilibrium between weight and drag.\r
\r
### Error 2: Applying the formula without validating the model\r
\r
It is tempting to substitute numbers immediately, but the real physics question is whether linear or quadratic drag is the defensible block. If that decision is wrong, the computed [[v_t]] is not physically meaningful.\r
\r
### Error 3: Mixing similar quantities\r
\r
[[v_t]] is often confused with an arbitrary instantaneous speed, and [[C_d]] is sometimes mixed with [[b]] as if both belonged to the same model. They do not. [[v_t]] is an outcome, while [[b]] and [[C_d]] belong to different drag descriptions.\r
\r
## Model errors\r
\r
### Error 4: Not recognizing model failure\r
\r
A model that worked in one exercise is often reused blindly. But terminal-speed prediction depends on the drag law. A block that fits low-speed behavior may fail at higher speed or for a different geometry.\r
\r
### Error 5: Ignoring known validity limits\r
\r
Once the formula is learned, students often treat it as universal. That is unsafe. [[C_d]], [[A]], and even [[rho]] depend on context, posture, and medium conditions.\r
\r
## Mathematical errors\r
\r
### Error 6: Careless algebraic rearrangement\r
\r
Small algebra mistakes can reverse physical dependencies. In the quadratic model, larger [[rho]], [[C_d]], or [[A]] should reduce [[v_t]], not increase it.\r
\r
### Error 7: Unit inconsistency\r
\r
Mixed units can move terminal-speed predictions by orders of magnitude. The final result must be consistent with SI and reported in m/s.\r
\r
## Interpretation errors\r
\r
### Error 8: Reporting false precision\r
\r
Many decimals can give an illusion of accuracy. Model uncertainty is often much larger than the displayed numerical precision.\r
\r
### Error 9: Stopping at the number\r
\r
A numerical value alone does not finish the physics. A complete answer must explain why the limiting speed appears, which variable dominates it, and what the model-validity limit is.\r
\r
## Quick self-control rule\r
\r
Use this checklist before accepting the result:\r
\r
- Was the drag block justified?\r
- Was [[v_t]] interpreted as an equilibrium speed rather than just a speed value?\r
- Do the dependencies on [[m]], [[b]], [[rho]], [[C_d]], and [[A]] make physical sense?\r
- Do the units lead to m/s?\r
- Is the validity limit explicitly stated?\r
\r
If any answer is no, the solution is not finished yet.\r
`;export{e as default};
