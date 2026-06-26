# Common errors: Hanging Block

## Conceptual errors

### Error 1: Believing that tension always equals weight

**Why it seems correct**

In the most common situation (hanging block at rest), tension effectively equals weight. The student generalises this equality to all situations, thinking the cable "transmits" the weight mechanically without possibility of variation.

**Why it is wrong**

Tension is a constraint force that adapts to dynamic conditions. It only equals weight when acceleration is zero. In upward accelerated motion, tension exceeds weight; in braking or downward accelerated motion, it is less than weight. In free fall, it approaches zero. Tension is not a fixed consequence of weight but an independent variable that controls motion.

**Detection signal**

If when solving an acceleration problem the student writes [[T]] = [[W]] directly without justifying equilibrium, or calculates an acceleration without verifying that [[T]] differs from [[W]], they are making this error.

**Conceptual correction**

Always distinguish between weight (fixed gravitational force for a given mass) and tension (variable constraint force). The vertical second law equation explicitly shows that the difference between both produces acceleration.

{{f:dinamica_vertical}}

If tension and weight are equal, there is no acceleration.

**Contrast mini-example**

A 5 kg block hangs from a dynamometer. At rest, the dynamometer reads 49 N (the weight). If we lift the block with acceleration of 2 m/s², the reading rises to 59 N. If we lower it with the same acceleration magnitude, the reading drops to 39 N. Tension varies; weight remains 49 N.

### Error 2: Using mass instead of weight in the dynamic equation

**Why it seems correct**

The student remembers that gravity is involved but confuses the magnitude mass [[m]] with the force weight [[W]]. Since both are related by [[g]], in quick mental calculations the numerical values seem close (for example, 10 kg vs 98 N), which reinforces the confusion.

**Why it is wrong**

Newton's second law requires forces (units of newtons) on the left side. Mass is an inertial property, not a force. The vertical dynamic equation requires that [[T]] and [[W]] be comparable forces.

{{f:dinamica_vertical}}

Using [[m]] directly violates dimensional homogeneity and produces absurd results (accelerations of 100 m/s² or more).

**Detection signal**

If calculations produce accelerations of order 10 m/s² when they should be of order g, or if equilibrium tension appears as 10 N for a 10 kg mass (instead of 98 N), the student is probably using mass instead of weight.

**Conceptual correction**

Explicitly convert mass to weight via the gravitational weight formula before applying the second law.

{{f:peso_gravitatorio}}

Always check dimensions: if you subtract mass from force, the units do not match.

**Contrast mini-example**

A student calculates equilibrium tension for an 8 kg block and obtains 8 N (using mass directly). The correct answer is 78.4 N (using weight). The error is almost an order of magnitude, which would be catastrophic in cable design.

## Model errors

### Error 3: Ignoring the cable's weight in real systems

**Why it seems correct**

The leaf's idealised model assumes massless cable. The student applies this idealisation to real situations where the cable does have appreciable mass, especially in systems with long cables (cranes, mine shafts).

**Why it is wrong**

In cables of several metres or more, the cable's own weight adds additional load that the upper part must support. A 10 m long steel cable can weigh tens of newtons, comparable to the weight of small loads. Ignoring this weight underestimates maximum tension and can lead to selecting unsafe cables.

**Detection signal**

When the problem mentions "steel cable", "50 m cable" or similar, and the student only calculates the payload weight without considering the cable itself.

**Conceptual correction**

The leaf's model is valid for short cables where the cable's weight is negligible compared to the load. For long cables, tension varies along the cable (it is maximum at the top and minimum at the bottom) and the analysis requires integration or elastic wave methods.

**Contrast mini-example**

A 100 kg load suspended from a 20 m steel cable: the load's weight is 980 N, but the cable adds about 150 N additional. The tension at the top is 1130 N, 15 % higher than what the simple model would calculate.

## Mathematical errors

### Error 4: Inconsistent signs in the vertical direction

**Why it seems correct**

The student assumes "upward is positive" and writes [[T]] positive and [[W]] negative, but then in the equation subtracts both as if they were magnitudes. The confusion between vector and scalar leads to incorrect signs in acceleration.

**Why it is wrong**

The second law requires algebraic sum with signs according to the chosen axis. If the positive axis is upward, [[T]] is positive and [[W]] is negative, so the equation is [[T]] − [[W]] = [[m]]·[[a]]. If subtracted as absolute magnitudes ([[T]] − [[W]] without considering signs), the result is only correct when [[T]] > [[W]].

**Detection signal**

If the student obtains positive acceleration when calculating that tension is less than weight (which should produce a fall), there is a sign error. Or if the acceleration magnitude is correct but the direction is opposite to expected.

**Conceptual correction**

Explicitly define the positive axis before setting up the equation. Assign consistent signs: forces upward positive, downward negative (or vice versa, but consistently). Verify that the result's sign makes physical sense.

**Contrast mini-example**

A block with weight of 50 N and tension of 30 N. With positive axis upward: (+30 N) + (−50 N) = [[m]]·[[a]], giving negative [[a]] (fall). If written as 30 − 50 without explicit signs, the result −20 is correct in magnitude but ambiguous in interpretation. If written as 30 + 50 by mistake, absurd positive acceleration is obtained.

## Interpretation errors

### Error 5: Interpreting that "rising faster" requires greater tension

**Why it seems correct**

Everyday intuition associates "fast" with "strong". We think that to move something quickly we must push harder. This mechanical intuition confuses velocity with acceleration.

**Why it is wrong**

Once the block reaches a certain upward velocity, maintaining that constant velocity does not require net force. Tension exactly equals weight, regardless of how fast it rises. Extra tension is only needed during initial acceleration, not during uniform motion.

**Detection signal**

If the student says that an elevator rising at 5 m/s requires greater tension than the same elevator rising at 1 m/s (both at constant velocity), they are confusing velocity with acceleration.

**Conceptual correction**

Remember Newton's first law: constant velocity (including zero) implies force equilibrium. Tension depends on acceleration, not velocity. Once in uniform motion, the system does not "know" how fast it is moving, only that it is not accelerating.

**Contrast mini-example**

Two identical elevators: one rises at 1 m/s constant, another at 5 m/s constant. Both have [[a]] = 0, so both require [[T]] = [[W]] (say 10 000 N). To start moving from rest to 1 m/s or to 5 m/s, acceleration and temporary extra tension are indeed needed; but during uniform ascent, tension is identical.

## Quick self-control rule

After solving any hanging block problem, apply this verification sequence:

1. Check that weight ([[W]]) was used, not mass ([[m]]), directly in the dynamic equation.
2. Verify that signs are consistent with the chosen vertical axis.
3. Confirm that result dimensions are `[L T⁻²]` for acceleration and `[M L T⁻²]` for forces.
4. Validate that [[T]] = [[W]] when [[a]] = 0 (equilibrium case).
5. Verify that [[a]] direction makes physical sense: positive when [[T]] > [[W]], negative when [[T]] < [[W]].
