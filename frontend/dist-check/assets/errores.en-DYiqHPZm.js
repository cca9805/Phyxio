const e=`# Wheel and Axle — Common Errors and Misconceptions\r
\r
## Conceptual errors\r
\r
### Error 1: Swapping the wheel radius and the axle radius\r
\r
**Why it seems correct**\r
The problem statement mentions "radius" without specifying which one, and the student intuitively associates the larger value with the axle because "the axle rotates faster." Confusion between the physical part and its mechanical role is common.\r
\r
**Why it is incorrect**\r
The effort [[FR]] acts on the element with the larger radius, which is the outer wheel. The resistance [[Fr]] acts on the axle with the smaller radius. Inverting the radii inverts the ratio, yielding [[VM]] below 1 when it should be above 1, and vice versa.\r
\r
**Detection signal**\r
The [[VM]] result is the inverse of the expected value; for example, 0.1 instead of 10. Or [[FR]] turns out much larger than [[Fr]] in a system that should multiply force.\r
\r
**Conceptual correction**\r
Remember: the effort always acts on the long arm [[R]] (the wheel); the resistance always acts on the short arm [[r]] (the axle). The ideal mechanical advantage [[VM]] is R/r and must be greater than 1.\r
\r
**Mini-contrast example**\r
With R of 0.30 m and r of 0.03 m. Correct: [[VM]] of 10, [[FR]] of 50 N for [[Fr]] of 500 N. Incorrect (inverted radii): [[VM]] of 0.1, [[FR]] of 5000 N for [[Fr]] of 500 N. The error multiplies the required effort by 100.\r
\r
## Model errors\r
\r
### Error 2: Using the ideal mechanical advantage in a real system without applying efficiency\r
\r
**Why it seems correct**\r
The ideal model is simpler and is used in most essential-level exercises. The student applies it automatically even when the problem statement indicates friction or gives values of [[eta]].\r
\r
**Why it is incorrect**\r
In any real system with bearings, friction consumes part of the input torque. The real mechanical advantage [[VM_real]] is always less than [[VM]], and the real effort [[FR]] is always greater than the ideal value.\r
\r
**Detection signal**\r
The calculated effort turns out lower than what is measured in a real experiment. The bearing temperature rises, evidencing energy dissipation.\r
\r
**Conceptual correction**\r
For real systems use:\r
\r
{{f:ley_rueda_real}}\r
\r
With [[eta]] estimated between 0.75 and 0.95 depending on lubrication condition.\r
\r
**Mini-contrast example**\r
With R of 0.20 m, r of 0.02 m, and [[Fr]] of 600 N. Ideal model: [[FR]] of 60 N. With [[eta]] of 0.80: real [[FR]] of 75 N. For a motor rated at 70 N, the ideal model says it can handle the load; the real model says it cannot. Using the wrong model can lead to a design failure.\r
\r
### Error 3: Computing [[VM_real]] as R divided by the product of [[eta]] times r\r
\r
**Why it seems correct**\r
The student remembers that efficiency "divides something" and places it in the denominator of the real mechanical advantage formula.\r
\r
**Why it is incorrect**\r
Efficiency reduces the advantage: [[VM_real]] is always less than [[VM]]. Writing R/([[eta]]·r) gives a result greater than R/r, which would imply that friction increases mechanical advantage -- a violation of physics.\r
\r
**Detection signal**\r
The computed [[VM_real]] turns out greater than [[VM]]. That is physically impossible.\r
\r
**Conceptual correction**\r
The correct formula is:\r
\r
{{f:ventaja_mecanica_real}}\r
\r
[[VM_real]] is [[eta]] multiplied by R/r: efficiency multiplies the geometric advantage, it never divides the radius.\r
\r
**Mini-contrast example**\r
With R/r of 10 and [[eta]] of 0.80. Correct: [[VM_real]] of 8. Incorrect: [[VM_real]] of 12.5. The error leads to underestimating the real effort by 56%.\r
\r
## Mathematical errors\r
\r
### Error 4: Confusing radius with diameter\r
\r
**Why it seems correct**\r
Engineering problem statements frequently give the wheel or axle diameter because it is the quantity directly measurable with a calliper. The student uses that value directly as the radius.\r
\r
**Why it is incorrect**\r
The formulas use radii, not diameters. Inserting the diameter doubles the value of [[R]] or [[r]], which changes the radius ratio and therefore the calculated mechanical advantage.\r
\r
**Detection signal**\r
The calculated mechanical advantage is twice or half the expected value. If the problem gives "wheel diameter D of 60 cm," the correct radius to use is [[R]] of 0.30 m.\r
\r
**Conceptual correction**\r
Always extract the radius before substituting: R equals D_wheel divided by 2; r equals d_axle divided by 2.\r
\r
**Mini-contrast example**\r
With D of 0.60 m and d of 0.06 m. Correct: [[VM]] of 10. Using diameters as radii: [[VM]] of 10 (no difference in this case!). But if only one is converted: with R of 0.30 m and r of 0.06 m (axle diameter used as radius): [[VM]] of 5. A 50% error simply from forgetting to halve the axle radius.\r
\r
### Error 5: Using the angle in degrees in the arc formula\r
\r
**Why it seems correct**\r
The rotation angle is a natural datum in many problems (for example, "the wheel turns 90°"). The student substitutes that value directly into [[sR]] equals R·θ.\r
\r
**Why it is incorrect**\r
The formula [[sR]] equals R·θ requires θ in radians. An angle of 90° equals π/2 radians, approximately 1.57 rad, not 90 rad.\r
\r
**Detection signal**\r
The calculated arc is approximately 57 times larger than the correct value (factor 180/π).\r
\r
**Conceptual correction**\r
Always convert to radians: θ in rad equals θ in degrees multiplied by π/180. For a quarter turn: 90° gives π/2 rad.\r
\r
**Mini-contrast example**\r
With R of 0.30 m and θ of 90°. Correct: [[sR]] of 0.30 times π/2, approximately 0.471 m. Incorrect: [[sR]] of 0.30 times 90 equals 27 m. The error multiplies the arc by nearly 57.\r
\r
## Interpretation errors\r
\r
### Error 6: Believing the Golden Rule can be violated with enough engineering\r
\r
**Why it seems correct**\r
The student has seen how adding more pulleys reduces effort, and expects something similar to exist for the wheel and axle: increasing [[R]] indefinitely to obtain arbitrary advantage at no cost.\r
\r
**Why it is incorrect**\r
The Golden Rule is a direct consequence of energy conservation. What you gain in [[Fr]] (force at the axle) you pay exactly in [[sR]] (travel at the wheel). Increasing [[R]] reduces [[FR]] but increases [[sR]] by the same proportion. The input work does not decrease.\r
\r
**Detection signal**\r
The student calculates that increasing R from 10 to 100 times r decreases the input work [[FR]]·[[sR]]. When checked energetically: [[FR]]·[[sR]] equals [[Fr]]·[[sr]] (in the ideal model) and always remains constant.\r
\r
**Conceptual correction**\r
Mechanical advantage redistributes force and travel; it does not reduce work. The only way to reduce total work is to use a motor or an additional energy source.\r
\r
**Mini-contrast example**\r
With R of 10 cm and r of 1 cm, [[VM]] of 10: to lift [[Fr]] of 100 N over [[sr]] of 1 m requires [[FR]] of 10 N over [[sR]] of 10 m. Input work: 10 × 10 equals 100 J. Output work: 100 × 1 equals 100 J. Identical. With R of 1 m and r of 1 cm, [[VM]] of 100: [[FR]] of 1 N, [[sR]] of 100 m. Input work: 1 × 100 equals 100 J. Total work does not change; it is only redistributed between force and displacement.\r
\r
## Quick self-control rule\r
\r
Before accepting a wheel-and-axle result, apply these three checks:\r
\r
1. **Order check**: is R greater than r? If not, the machine has no positive mechanical advantage; check which element is the wheel and which is the axle.\r
2. **Golden Rule**: is the product [[FR]] times [[sR]] equal to or greater than [[Fr]] times [[sr]]? If not, there is an error in the radii or the arcs. In the ideal model they must be equal.\r
3. **Efficiency coherence**: is [[VM_real]] less than or equal to [[VM]]? If [[VM_real]] turns out greater than [[VM]], efficiency was introduced incorrectly in the formula.\r
`;export{e as default};
