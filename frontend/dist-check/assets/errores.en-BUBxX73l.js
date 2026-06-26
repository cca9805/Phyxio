const e=`# Common mistakes: UACM\r
\r
## Conceptual errors\r
\r
### Error 1: Confusing Angular Acceleration (\\(\\alpha\\)) with Tangential Acceleration (\\( [[a_t]] \\))\r
\r
**Why it seems correct**\r
Because both describe a "change" in the rotation rhythm, and their names sound very similar in both technical and colloquial language.\r
\r
**Why it is incorrect**\r
It is a category error in rotational physics. Angular acceleration (\\(\\alpha\\)) describes how fast the angular velocity changes in radians per second squared, and is a value shared by all points of a rigid rotating body. Tangential acceleration (\\( [[a_t]] \\)), however, describes the rate of change of linear speed in meters per second squared and scales linearly with the radius ( [[a_t]] ). A point at the center of a disk and one at the rim have the same \\(\\alpha\\), but the one at the rim has a much higher \\( [[a_t]] \\). Failing to distinguish them makes it impossible to calculate the mechanical stress on the outer parts of a machine.\r
\r
**Detection signal**\r
The student attempts to add \\(\\alpha\\) to linear velocities or uses \\(\\text{m/s}^2\\) for the motor's angular rate of change.\r
\r
**Conceptual correction**\r
Always separate the "angular domain" (rad, rad/s, \\(\\text{rad/s}^2\\)) from the "linear domain" (m, m/s, \\(\\text{m/s}^2\\)) using the radius as the sole mathematical bridge.\r
\r
**Contrast mini-example**\r
In a starting fan, all blades gain turns at the same rate (\\(\\alpha\\)), but the tips have a higher speed increase (\\( [[a_t]] \\)) than the parts near the axis.\r
\r
## Model errors\r
\r
### Error 2: Assuming Centripetal Acceleration (\\( [[a_c]] \\)) is Constant in UACM\r
\r
**Why it seems correct**\r
Because in the simpler UCM model, centripetal acceleration is indeed constant, and we tend to carry over that assumption to more complex motions.\r
\r
**Why it is incorrect**\r
In UACM, angular velocity \\(\\omega\\) is constantly changing over time. Since centripetal acceleration depends on the square of that velocity ( [[a_c]] ), the radial force required to maintain the circular path must also change every second. Treating \\( [[a_c]] \\) as a fixed value leads to critical errors when designing industrial rotors, as it would underestimate (if accelerating) or overestimate (if braking) the required structural strength.\r
\r
**Detection signal**\r
The student uses a single \\( [[a_c]] \\) value calculated at the beginning or end of the interval to answer questions about the entire process.\r
\r
**Conceptual correction**\r
Treat centripetal acceleration as a time-dependent function: [[a_c]] (t) → (ω_0 + α t)² R. It must be recalculated for each specific instant of interest.\r
\r
**Contrast mini-example**\r
In a centrifuge that is speeding up, the pressure of the sample against the wall does not stay constant; it increases quadratically as the motor gains speed.\r
\r
## Mathematical errors\r
\r
### Error 3: Sign Errors in Angular Deceleration Processes\r
\r
**Why it seems correct**\r
Because students often prefer using absolute values in formulas to avoid the complexity of dealing with negative numbers.\r
\r
**Why it is incorrect**\r
In rotational mechanics, the sign of \\(\\alpha\\) relative to the initial velocity is what determines if the system is gaining or losing energy. If a rotor spins in a positive direction but is braking, \\(\\alpha\\) must be negative. Forgetting this sign in the displacement equation (θ → θ_0 + ω_0 t + 1/2 α t²) will result in the object appearing to speed up indefinitely instead of coming to a stop. This leads to physically impossible results, such as negative times or infinite turns.\r
\r
**Detection signal**\r
When calculating the time to stop, the student obtains a negative value or a final speed higher than the initial one while braking.\r
\r
**Conceptual correction**\r
Always define an angular reference system. If rotation and acceleration have opposite senses, \\(\\alpha\\) must enter the equations with a negative sign.\r
\r
**Contrast mini-example**\r
If a motor takes 5 seconds to stop, its \\(\\alpha\\) must be such that when subtracted from the initial rate, the result is zero, not an increase.\r
\r
## Interpretation errors\r
\r
### Error 4: Mixing Frequency Units (rpm) with Angular Velocity (rad/s) in Formulas\r
\r
**Why it seems correct**\r
Because revolutions per minute are the standard unit used in industry and are almost always provided in problem statements.\r
\r
**Why it is incorrect**\r
The derived kinematic equations of UACM, such as ω² → ω_0² + 2αΔθ, are built upon the definition of radians. Directly plugging rpm values into these formulas produces errors by a factor of \\(2\\pi/60\\) (≈ 0.1) that are then squared, resulting in massive orders-of-magnitude errors. This is one of the most common causes of engineering failures in academic exercises.\r
\r
**Detection signal**\r
Results for acceleration or displacement that are either extremely small or physically absurd for the given device.\r
\r
**Conceptual correction**\r
Develop the rigorous habit of converting all input data to SI units (rad/s and rad) as the very first step before manipulating any equation.\r
\r
**Contrast mini-example**\r
A motor at $60\\;\\text{rpm}$ has a speed of $2\\pi\\;\\text{rad/s}$ (approx. $6.28$). Using $60$ instead of $6.28$ in a squared formula will produce an error of nearly 100 times.\r
\r
## Quick self-control rule\r
\r
Before submitting any UACM solution, perform the **3-A Check**:\r
1. **Angular**: Did I calculate \\(\\alpha\\) in \\(\\text{rad/s}^2\\)?\r
2. **A**: Did I distinguish between tangential (\\( [[a_t]] \\)) and centripetal (\\( [[a_c]] \\)) acceleration?\r
3. **Absolute**: Does the modulus of the total acceleration increase if the system is speeding up?\r
If you can answer "yes" to all three, your physical interpretation is likely correct.\r
`;export{e as default};
