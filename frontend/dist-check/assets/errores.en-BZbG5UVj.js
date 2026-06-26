const e=`\uFEFF# Pulleys - Common errors and misunderstandings

## Conceptual errors

### Error 1: Counting the operator's segment as an effective segment

**Why it seems correct**
Students see several visible rope segments, including the one they are pulling. The intuitive reasoning is: "since I am applying force on this rope, this segment also helps me". The confusion arises from not distinguishing between segments that exert force on the moving pulley and the energy-input segment controlled by the operator.

**Why it is incorrect**
Only segments that exert a direct upward force on the moving block (or on the load) contribute to the mechanical advantage [[n]]. The segment where the operator pulls is the system's input; it cannot simultaneously be input and advantage.

**Detection signal**
The student obtains n equal to 3 in a tackle that has only 2 segments supporting the load, plus the operator's segment. The correct value of [[n]] is 2.

**Conceptual correction**
Count only the segments that pass over the moving pulley or the load and terminate at a fixed point or another fixed pulley.

**Contrast mini-example**
A simple moving pulley has two segments supporting the load: [[n]] is 2 and effort P is half of W. If the operator's segment is counted, the apparent n is 3 and the calculated effort is W divided by 3, which implies that 300 N can be held with 100 N in a system that physically has only two support segments. The result is incorrect and easily refuted by measuring the actual force.

## Model errors

### Error 2: Assuming perfect efficiency in real systems

**Why it seems correct**
The ideal model is simple and is used throughout most of the course. When moving to engineering problems, students continue to use [[n]] without including [[eta]], because "no one said we had to change".

**Why it is incorrect**
Any real system has axle friction and rope stiffness. Ignoring [[eta]] systematically underestimates the actual effort and may lead to overloading the system or undersizing the motor.

**Detection signal**
The calculated effort is clearly less than what is measured in practice. Heat generated at the axles during operation is a visible physical indicator that energy is being dissipated.

**Conceptual correction**
Always use the real law for real systems:

{{f:ley_polea_real}}

Estimate [[eta]] between 0.80 and 0.95 depending on lubrication quality and cable stiffness.

**Contrast mini-example**
Consider a tackle with [[n]] of value 4 and a load [[W]] of 800 N. Ideal model: P is 200 N. With efficiency [[eta]] at 80 %: P real rises to 250 N, a 25 % difference. In an industrial safety application, designing for 200 N when 250 N are needed can cause an accident.

## Mathematical errors

### Error 3: Confusing the displacement relationship with total rope length

**Why it seems correct**
The student correctly calculates [[n]] and [[W]], but when applying the kinematic constraint writes the free-end displacement equal to the load displacement instead of multiplying it by [[n]]. The confusion comes from not visualising that each of the [[n]] segments must shorten by the distance the load rises.

**Why it is incorrect**
Each rope segment supporting the moving load shortens as the load rises. The total rope length released at the operator's end is the sum of all those shortenings: [[n]] segments times [[sW]].

**Detection signal**
The calculated work P times [[sP]] is less than the useful work W times [[sW]], directly violating energy conservation.

**Conceptual correction**
The correct relationship is:

{{f:relacion_desplazamientos}}

Input work equals useful work in the ideal model, confirming energetic consistency.

**Contrast mini-example**
System with [[n]] of value 4. The student calculates: I lift the load 1 m, I pull 1 m of rope. Input work is 200 times 1, equal to 200 J. But the 800 N load rises 1 m: useful work is 800 J. Direct contradiction with energy conservation. Correct answer: 4 m of rope must be pulled.

## Interpretation errors

### Error 4: Believing that more pulleys always means less actual effort

**Why it seems correct**
The potential tackle model shows that advantage grows exponentially with [[Np]]. The student concludes that adding pulleys indefinitely reduces effort to zero.

**Why it is incorrect**
Each additional pulley adds its own weight to the system and one more friction axle. Beyond a critical number of pulleys, losses outweigh the geometric gain: actual effort [[P]] starts to increase even though theoretical advantage [[n]] keeps rising.

**Detection signal**
Adding one more moving pulley to the real system does not decrease the measured effort at the rope end; it stays the same or increases.

**Conceptual correction**
Real advantage combines [[n]] with [[eta]]: more pulleys means lower [[eta]]. Because [[eta]] decreases with each pulley added, there is a practical optimum. Industrial block-and-tackle systems rarely operate efficiently with [[n]] above 8.

**Contrast mini-example**
With [[n]] of value 8 and [[eta]] of 0.88: P real is W divided by 7.04. With [[n]] of value 10 and [[eta]] of 0.75 due to the 2 extra pulleys: P real is W divided by 7.50. Real advantage improves only marginally despite adding two more pulleys, increasing cost, weight and maintenance.

## Quick self-control rule

Before accepting a pulley result, apply these three checks:

1. **Golden rule**: Does the product P times [[sP]] match W times [[sW]] in the ideal model? If not, there is an error in [[n]] or in the displacements. In the real model, [[eta]] must be included.
2. **Physical sense check**: Is [[P]] less than [[W]]? If effort equals or exceeds the load in a system with more than one segment, the calculation is wrong or [[eta]] is extremely low.
3. **Visual count**: Draw the tackle and count only the rope segments passing directly over the moving pulley or load. That number must match the value of [[n]] used in the formula.\r
`;export{e as default};
