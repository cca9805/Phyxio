const e=`# Common Errors: External Impulse and the Rupture of Conservation

## Conceptual Errors

### Error 1: Believing that the Rupture of Conservation Invalidates the Momentum Principle

**Why it seems correct:**
If linear momentum is not conserved (i.e., [[Pinitial]] is not equal to [[Pfinal]]), it seems that the physical principle has failed or is not applicable to that situation.

**Why it is incorrect:**
The momentum principle is universal, but in non-isolated systems it takes the form of the impulse-momentum theorem. The "rupture" of conservation is not a failure of physics, but a transfer of momentum between the system and its environment.

**Detection signal:**
Abandoning the use of dynamic magnitudes and trying to solve the problem with pure kinematics alone when detecting an external force.

**Conceptual correction:**
Use formula **DeltaP_ext** to quantify the change. The final momentum will be exactly the sum of the initial momentum plus the external impulse received.

**Contrast mini-example:**
A car brakes. Its momentum is not conserved because the ground (external) applies an impulse. Physics hasn't failed; the momentum has simply been transferred to the Earth through friction.

## Model Errors

### Error 2: Using the Impact Approximation in Slow Processes

**Why it seems correct:**
In ideal collisions, we ignore external forces (such as gravity) because the process is "fast." There is a tendency to extend this excuse to any process.

**Why it is incorrect:**
The isolated system approximation is only valid if the external impulse (force times time) is negligible. In processes lasting seconds (like an object sliding on a long track), the external force has enough [[t]] to generate a massive impulse that completely breaks momentum conservation.

**Detection signal:**
Obtaining results that completely ignore friction or gravity in movements lasting several seconds.

**Conceptual correction:**
Evaluate the product of the external force by time. If this value (formula **J**) is comparable to the initial momentum, conservation has been broken and the full balance must be used.

**Contrast mini-example:**
A projectile in an explosion (milliseconds) conserves momentum despite gravity. A projectile in parabolic flight (seconds) does NOT conserve vertical momentum because gravity acts too long.

## Mathematical Errors

### Error 3: Adding the Magnitude of the Impulse Instead of Its Vector Value

**Why it seems correct:**
Adding absolute quantities seems more intuitive and avoids dealing with negative signs that "seem" to subtract realism from motion.

**Why it is incorrect:**
Impulse [[J]] is a vector. If the force opposes the motion (friction), the impulse must be negative to reduce the [[P]]. Adding it as positive would predict that friction accelerates objects instead of slowing them down.

**Detection signal:**
An object that should slow down due to friction ends up with a final speed higher than the initial speed according to calculations.

**Conceptual correction:**
Assign signs to external forces according to the reference system before calculating impulse using formula **J**.

**Contrast mini-example:**
Braking force of 10 N for 2 s. Impulse is -20 kg·m/s. If added as +20, the car's momentum would increase, which is physically absurd.

## Interpretation Errors

### Error 4: Not Distinguishing Between External Force and External Impulse

**Why it seems correct:**
If the external force is very large, it is automatically assumed that conservation breaks down massively.

**Why it is incorrect:**
What breaks conservation is not the force, but the impulse (force multiplied by time). A huge external force acting for an infinitesimal time (like weight during a micro-impact) produces negligible rupture. Conversely, a tiny force acting for hours can totally change the system's momentum.

**Detection signal:**
Discarding momentum conservation in a fast collision just because "gravity exists," without evaluating that the action time tends to zero.

**Conceptual correction:**
Always calculate the value of [[J]] before deciding if the conservation rupture is relevant to the problem.

**Contrast mini-example:**
A weight of 100 N acts for 0.001 s in a fast collision: the [[J]] is only 0.1 kg·m/s, negligible if [[Pinitial]] is 50 kg·m/s. In contrast, the same weight for 100 s produces a [[J]] of 10000 kg·m/s, completely breaking conservation. The force is identical; the difference is [[t]].

## Quick Self-Control Rule

Before considering a result correct, apply this checklist:

1. **Exchange**: Have I identified which external agent delivers or takes momentum from the system?
2. **Sign of J**: Does the external impulse have the correct sense (slowing down or accelerating)?
3. **Time Scale**: Does the acting time justify considering the conservation rupture?
4. **Closure**: Is the sum of [[Pinitial]] plus [[J]] equal to [[Pfinal]]?
`;export{e as default};
