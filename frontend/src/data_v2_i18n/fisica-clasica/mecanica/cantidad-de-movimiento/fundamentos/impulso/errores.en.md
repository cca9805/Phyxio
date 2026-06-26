# Common Errors: Impulse [[J]]

The study of impulse often presents cognitive obstacles due to its vectorial nature and the simplification inherent in the average force model. Below, we analyze the most frequent mistakes detected in the resolution of collision and impact problems.

## Conceptual Errors

### Error 1: Confusing the Formal Definition of Impulse with Everyday Intuition

**Why it seems correct:**
In everyday language, "giving an impulse" is vaguely associated with applying a force or gaining speed. This intuition works in simple qualitative contexts, so the student tends to apply it without mathematical rigor in any physical scenario.

**Why it is incorrect:**
The physical definition of impulse [[J]] is a strictly vectorial quantity that depends on the interaction time [[dt]]. It is not simply "a strong force"; it is the accumulation of that force over time. Ignoring the vectorial nature or the time interval leads to serious errors in systems where the force varies or changes direction.

**Detection signal:**
The student obtains a result with the incorrect sign (especially in rebounds) or assigns an absurd impulse magnitude compared to the variation in momentum [[DeltaP]].

**Conceptual correction:**
It is imperative to return to the formal definition: impulse is the integral of the force. You must verify that the units (N·s) match and that the sign is consistent with the chosen reference system. Remember that impulse is the cause and the change in motion [[DeltaP]] is the effect.

**Mini-contrast example:**
A student calculates the impulse on a ball bouncing against a wall. By not considering that the final velocity [[vF]] has the opposite sign to the initial velocity [[v0]], they subtract the magnitudes instead of adding them, obtaining an almost zero impulse when in reality it is double the initial momentum.

## Model Errors

### Error 2: Applying the Ideal Impulse Model Outside Its Domain of Validity

**Why it seems correct:**
The average force model [[Fmed]] is so simple and effective in typical classroom exercises that the student ends up considering it a universal law applicable to any temporal interaction.

**Why it is incorrect:**
Every physical model has limits. The impulse model assumes that the interval [[dt]] is so small that non-impulsive forces (such as weight) are negligible. If the interaction is slow (a prolonged push), weight accumulates a significant impulse that must be included in the total balance, or the "sharp impact" model ceases to be valid.

**Detection signal:**
The numerical result contradicts observable reality or violates physical limits. For example, calculating astronomical impact forces in situations where the object should have deformed or broken long before.

**Conceptual correction:**
Before performing the calculation, verify the hypotheses: Is the contact time short enough? Is the impact force much greater than the object's weight? If the answer is no, you must abandon the simplified model and perform a complete force balance using Newton's Second Law.

**Mini-contrast example:**
When analyzing the braking of a landing gear, a student ignores the aircraft's weight by assuming an "instantaneous crash." The result gives an unrealistically low stopping force because they failed to consider that gravity continues to act throughout the entire process of compressing the shock absorbers.

## Mathematical Errors

### Error 3: Sign Error When Projecting Vectors in the Impulse Calculation

**Why it seems correct:**
Working with absolute values (positive magnitudes) greatly simplifies algebra and avoids apparent confusion with the coordinate axes. The student feels that the sign "can be put at the end" based on their intuition.

**Why it is incorrect:**
Impulse [[J]] and momentum [[p]] are vectors. In a rebound, the change in velocity is the difference between two vectors. If projection signs are not respected, the resulting mathematical operation is physically incorrect. The sign is not an ornament; it determines whether the object speeds up or slows down.

**Detection signal:**
The result has a sign opposite to what is expected according to the force diagram or the physical situation of the rebound. Often, this leads to obtaining negative forces that the student tries to "correct" by erasing the sign without understanding its origin.

**Conceptual correction:**
Always draw a reference system before starting. Define which direction is positive (e.g., to the right). Any vector pointing to the left (such as a rebound velocity [[vF]]) must enter the equation with a negative sign.

**Mini-contrast example:**
A particle moves to the left with negative [[v0]]. Upon colliding, it receives an impulse to the right. If the student sets the velocity as positive for convenience, the calculation will indicate that the particle continues moving to the left after the collision, which is physically impossible.

## Interpretation Errors

### Error 4: Reading the Numerical Result Without Interpreting Its Physical Meaning

**Why it seems correct:**
In exam culture, the final number circled at the end is often considered the goal of the exercise. If the number matches the solution, it is assumed that learning is complete.

**Why it is incorrect:**
A numerical result without physical interpretation is dead information. Not understanding whether a force of 1000 N is a lot or a little for that system, or what it means for the impulse to be negative, prevents the student from detecting major errors and, worse, prevents them from connecting physics with technical reality.

**Detection signal:**
The student presents results without units, without vectorial direction, or without a brief phrase explaining what that value means in the context of the problem (e.g., "the wall exerts a braking force").

**Conceptual correction:**
After obtaining the value of [[J]] or [[Fmed]], ask yourself these questions: Is this order of magnitude reasonable? Where does this force point according to its sign? Could a real material withstand this impact?

**Mini-contrast example:**
A student obtains that the average force [[Fmed]] on a falling egg is 500 N and takes the result as correct without commenting that, under such force, the egg would be instantly destroyed. They have solved the math but failed the physics.

## Quick Self-Control Rule

Before finalizing the resolution of an impulse problem, subject your result to this safety audit:

1.  **Dimensionality**: Are the units N·s or kg·m/s? If you get joules or just Newtons, the calculation is wrong.
2.  **Vector Consistency**: Have you added or subtracted velocities considering their direction? In a 180° rebound, velocities are ALWAYS added in magnitude to calculate [[DeltaP]].
3.  **Physical Realism**: Is the calculated average force [[Fmed]] compatible with the materials involved? A bumper receiving millions of Newtons without breaking indicates a scale error.
4.  **Cause-Effect**: Does the calculated impulse satisfactorily explain the observed change of state? The vector [[J]] must always point in the same direction as the change in velocity.
