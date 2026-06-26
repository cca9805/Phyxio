const e=`# Common errors: Complete Analysis of Frictional Systems\r
\r
## Conceptual errors\r
\r
### Error 1: Believing that static friction always equals its maximum\r
\r
**Why it seems correct**\r
\r
The student learns the maximum static friction formula and generalises: they think friction at rest always equals [[mu_e]] times [[N]]. The rule looks simple and universal, inviting uncritical application.\r
\r
**Why it is wrong**\r
\r
[[f_emax]] is an upper bound, not a fixed value. While the block remains at rest, friction adjusts to exactly match [[F_ext]]. It only reaches the maximum value at the very instant before the block breaks free. Always using the maximum is like saying a spring is always at full stretch, which is absurd.\r
\r
**Detection signal**\r
\r
If when solving an equilibrium problem the friction force you calculate does not depend on the applied force but only on the normal, you are probably using the maximum incorrectly.\r
\r
**Conceptual correction**\r
\r
In the static regime, actual friction is reactive and matches the push: [[f_r]] coincides with [[F_ext]]. Only when asking "does it move?" is [[F_ext]] compared with [[f_emax]] to decide the regime.\r
\r
**Contrast mini-example**\r
\r
A 5 kg block (weight about 49 N, with [[mu_e]] of 0.4) receives a 10 N horizontal push. If the maximum (19.6 N) is used as the actual friction, the force balance would give a net force of minus 9.6 N, suggesting the block moves backwards for no reason. The correct answer is that friction equals 10 N and the block stays at rest.\r
\r
### Error 2: Using the kinetic coefficient before verifying the regime\r
\r
**Why it seems correct**\r
\r
[[mu_c]] appears in the acceleration formula, which is the "final" result of the problem. The student wants to reach the answer quickly and jumps straight to the dynamic equation without asking whether there is sliding.\r
\r
**Why it is wrong**\r
\r
The equation for [[a]] is only valid after confirming that [[F_ext]] exceeds [[F_ext_crit]]. If the block is at rest, there is no acceleration and kinetic friction plays no role. Applying the dynamic formula without checking the regime can produce a meaningless negative acceleration.\r
\r
**Detection signal**\r
\r
If the result for [[a]] is negative when the push is positive in the expected direction, the static threshold was probably not checked first.\r
\r
**Conceptual correction**\r
\r
The correct procedure is always sequential: first calculate [[N]], then [[f_emax]], then compare [[F_ext]] with the threshold, and only if there is sliding use the kinetic formula.\r
\r
**Contrast mini-example**\r
\r
A block with a threshold of 30 N receives a 20 N push. If the kinetic formula is applied directly with a kinetic friction of 24 N, the net force would be negative (minus 4 N) and the acceleration absurd. The correct answer is that the block does not move and friction equals 20 N.\r
\r
## Model errors\r
\r
### Error 3: Assuming the normal always equals the weight\r
\r
**Why it seems correct**\r
\r
In the simple horizontal model, [[N]] does coincide with the weight. The student generalises this equality to any geometry or force configuration, which works in many exercises but fails silently in others.\r
\r
**Why it is wrong**\r
\r
If the push has a vertical component (for example, pushing downward and forward) or if a rope pulls upward, the normal changes. The normal is obtained from the complete vertical equilibrium, not from a fixed recipe. On an inclined plane, the normal equals the weight times the cosine of the angle, not the weight directly.\r
\r
**Detection signal**\r
\r
When the problem mentions a tilted push, an angled rope or an inclined plane and the student writes directly that the normal equals the weight without justification.\r
\r
**Conceptual correction**\r
\r
Always set up the force equilibrium in the direction perpendicular to the surface to obtain [[N]]. Only after confirming that there are no other forces with a normal component can it be equated to the weight.\r
\r
**Contrast mini-example**\r
\r
A 10 kg block on a table receives a 50 N push angled 30° below the horizontal. The vertical component of the push adds about 25 N to the support. The normal rises from 98 N to 123 N. If 98 N is used as the normal, the friction threshold is underestimated by 25 %, which may reverse the conclusion about whether the block breaks free or not.\r
\r
## Mathematical errors\r
\r
### Error 4: Subtracting forces without respecting the axis sign\r
\r
**Why it seems correct**\r
\r
The student associates "friction slows things down" with "subtract", and does so mechanically without defining an axis. In many simple problems this gives the correct result by coincidence.\r
\r
**Why it is wrong**\r
\r
Newton's second law requires adding all forces with their sign according to the chosen axis. If the positive axis is to the right, the push is positive and friction negative, but if the block moves to the left friction might be positive. Without a defined axis, ad hoc subtractions generate sign errors.\r
\r
**Detection signal**\r
\r
If reversing the axis direction changes the magnitude of the result and not just its sign, the forces are not being added correctly.\r
\r
**Conceptual correction**\r
\r
Always define a positive axis, assign a sign to each force according to that axis and apply the algebraic sum. The resulting acceleration inherits the axis sign and its physical meaning is read at the end.\r
\r
**Contrast mini-example**\r
\r
A block pushed to the right with 50 N and kinetic friction of 30 N. With positive axis to the right, the net force is 50 N minus 30 N, that is 20 N positive. If the axis is reversed (positive to the left), the push is minus 50 N and friction plus 30 N, giving minus 20 N. The magnitude is the same; only the sign changes. If the student obtains different magnitudes when switching axes, there is a sign error.\r
\r
## Interpretation errors\r
\r
### Error 5: Interpreting acceleration as velocity\r
\r
**Why it seems correct**\r
\r
Both quantities describe motion and have similar-looking units (m/s² versus m/s). The student calculates [[a]] and interprets it as "the speed of the block", confusing the cause of velocity change with velocity itself.\r
\r
**Why it is wrong**\r
\r
[[a]] indicates how much the velocity changes per unit time, not how fast the block moves. A block with an acceleration of 2 m/s² starting from rest needs a full second to reach 2 m/s of velocity. Confusing the two quantities leads to wrong predictions about times and distances.\r
\r
**Detection signal**\r
\r
If the student writes that the block "moves at 2 m/s²" or interprets the acceleration as the sliding speed, the confusion is evident.\r
\r
**Conceptual correction**\r
\r
Acceleration is the time derivative of velocity. To obtain velocity, multiply the acceleration by time (starting from rest) or integrate if the acceleration varies. They are never interchangeable.\r
\r
**Contrast mini-example**\r
\r
A block starts with [[a]] of 3 m/s². After 0.5 s its velocity is 1.5 m/s, not 3 m/s. After 2 s the velocity is 6 m/s. If [[a]] is interpreted as a constant velocity, the predicted displacement would be wrong for most time intervals.\r
\r
## Quick self-control rule\r
\r
After solving any friction problem, apply this verification sequence:\r
\r
1. Check that the regime (static or kinetic) was decided before calculating the acceleration.\r
2. Verify that [[N]] was obtained from the complete vertical equilibrium and not assumed equal to the weight without justification.\r
3. Confirm that the result dimensions are \`[L T⁻²]\` for acceleration and \`[M L T⁻²]\` for forces.\r
4. Check that the order of magnitude of [[a]] lies between 0 and a few m/s² for school laboratory situations.\r
5. If [[a]] turns out negative with the push in the positive-axis direction, the chosen regime is incorrect or there is a sign error.\r
`;export{e as default};
