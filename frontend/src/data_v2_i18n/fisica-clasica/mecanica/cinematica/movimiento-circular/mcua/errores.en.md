# Common mistakes: UACM

## Conceptual errors

### Error 1: Confusing Angular Acceleration (\(\alpha\)) with Tangential Acceleration (\( [[a_t]] \))

**Why it seems correct**
Because both describe a "change" in the rotation rhythm, and their names sound very similar in both technical and colloquial language.

**Why it is incorrect**
It is a category error in rotational physics. Angular acceleration (\(\alpha\)) describes how fast the angular velocity changes in radians per second squared, and is a value shared by all points of a rigid rotating body. Tangential acceleration (\( [[a_t]] \)), however, describes the rate of change of linear speed in meters per second squared and scales linearly with the radius ( [[a_t]] ). A point at the center of a disk and one at the rim have the same \(\alpha\), but the one at the rim has a much higher \( [[a_t]] \). Failing to distinguish them makes it impossible to calculate the mechanical stress on the outer parts of a machine.

**Detection signal**
The student attempts to add \(\alpha\) to linear velocities or uses \(\text{m/s}^2\) for the motor's angular rate of change.

**Conceptual correction**
Always separate the "angular domain" (rad, rad/s, \(\text{rad/s}^2\)) from the "linear domain" (m, m/s, \(\text{m/s}^2\)) using the radius as the sole mathematical bridge.

**Contrast mini-example**
In a starting fan, all blades gain turns at the same rate (\(\alpha\)), but the tips have a higher speed increase (\( [[a_t]] \)) than the parts near the axis.

## Model errors

### Error 2: Assuming Centripetal Acceleration (\( [[a_c]] \)) is Constant in UACM

**Why it seems correct**
Because in the simpler UCM model, centripetal acceleration is indeed constant, and we tend to carry over that assumption to more complex motions.

**Why it is incorrect**
In UACM, angular velocity \(\omega\) is constantly changing over time. Since centripetal acceleration depends on the square of that velocity ( [[a_c]] ), the radial force required to maintain the circular path must also change every second. Treating \( [[a_c]] \) as a fixed value leads to critical errors when designing industrial rotors, as it would underestimate (if accelerating) or overestimate (if braking) the required structural strength.

**Detection signal**
The student uses a single \( [[a_c]] \) value calculated at the beginning or end of the interval to answer questions about the entire process.

**Conceptual correction**
Treat centripetal acceleration as a time-dependent function: [[a_c]] (t) → (ω_0 + α t)² R. It must be recalculated for each specific instant of interest.

**Contrast mini-example**
In a centrifuge that is speeding up, the pressure of the sample against the wall does not stay constant; it increases quadratically as the motor gains speed.

## Mathematical errors

### Error 3: Sign Errors in Angular Deceleration Processes

**Why it seems correct**
Because students often prefer using absolute values in formulas to avoid the complexity of dealing with negative numbers.

**Why it is incorrect**
In rotational mechanics, the sign of \(\alpha\) relative to the initial velocity is what determines if the system is gaining or losing energy. If a rotor spins in a positive direction but is braking, \(\alpha\) must be negative. Forgetting this sign in the displacement equation (θ → θ_0 + ω_0 t + 1/2 α t²) will result in the object appearing to speed up indefinitely instead of coming to a stop. This leads to physically impossible results, such as negative times or infinite turns.

**Detection signal**
When calculating the time to stop, the student obtains a negative value or a final speed higher than the initial one while braking.

**Conceptual correction**
Always define an angular reference system. If rotation and acceleration have opposite senses, \(\alpha\) must enter the equations with a negative sign.

**Contrast mini-example**
If a motor takes 5 seconds to stop, its \(\alpha\) must be such that when subtracted from the initial rate, the result is zero, not an increase.

## Interpretation errors

### Error 4: Mixing Frequency Units (rpm) with Angular Velocity (rad/s) in Formulas

**Why it seems correct**
Because revolutions per minute are the standard unit used in industry and are almost always provided in problem statements.

**Why it is incorrect**
The derived kinematic equations of UACM, such as ω² → ω_0² + 2αΔθ, are built upon the definition of radians. Directly plugging rpm values into these formulas produces errors by a factor of \(2\pi/60\) (≈ 0.1) that are then squared, resulting in massive orders-of-magnitude errors. This is one of the most common causes of engineering failures in academic exercises.

**Detection signal**
Results for acceleration or displacement that are either extremely small or physically absurd for the given device.

**Conceptual correction**
Develop the rigorous habit of converting all input data to SI units (rad/s and rad) as the very first step before manipulating any equation.

**Contrast mini-example**
A motor at $60\;\text{rpm}$ has a speed of $2\pi\;\text{rad/s}$ (approx. $6.28$). Using $60$ instead of $6.28$ in a squared formula will produce an error of nearly 100 times.

## Quick self-control rule

Before submitting any UACM solution, perform the **3-A Check**:
1. **Angular**: Did I calculate \(\alpha\) in \(\text{rad/s}^2\)?
2. **A**: Did I distinguish between tangential (\( [[a_t]] \)) and centripetal (\( [[a_c]] \)) acceleration?
3. **Absolute**: Does the modulus of the total acceleration increase if the system is speeding up?
If you can answer "yes" to all three, your physical interpretation is likely correct.
