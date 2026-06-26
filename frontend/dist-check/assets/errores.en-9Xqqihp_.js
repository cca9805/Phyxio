const e=`# Common Errors:

The study of the inclined plane is prone to several conceptual and mathematical errors that can completely invalidate a dynamic analysis.

## Conceptual errors

### Error 1: The myth of "energy creation"
#### Why it seems correct
Because the effort [[P]] required to lift the load is significantly less than the total weight [[W]], suggesting a net gain.
#### Why it is incorrect
Because it violates the conservation of energy. The saving in force is exactly compensated by the increase in the distance traveled [[L]].
#### Detection signal
Obtaining an input work less than the change in potential energy.
#### Conceptual correction
The inclined plane is a force multiplier, but the ideal mechanical work remains constant.
#### Mini-example
To lift 100 N to 1 m (100 J), a 4 m ramp requires 25 N. The effort drops, but the work (25 N * 4 m) remains 100 J.

## Model errors

### Error 2: Neglecting friction in real ramps
#### Why it seems correct
Basic physics exercises often ignore friction for simplicity, and we tend to apply ideal formulas in real-world situations.
#### Why it is incorrect
In a real ramp, friction [[f]] can represent up to 30-50% of the total effort. Ignoring it drastically underestimates the required power.
#### Detection signal
The object does not move despite applying the calculated ideal force.
#### Conceptual correction
Always incorporate the coefficient [[mu]] and the Normal [[N]] in the force balance.
#### Mini-example
In a wooden ramp, ignoring friction leads to designing motors that burn out from overexertion.

## Mathematical errors

### Error 3: Confusion between mass and weight
#### Why it seems correct
In everyday life we often use "kilos" for both magnitudes, which leads to error when using mass [[m]] directly in force balances.
#### Why it is incorrect
Newton's laws operate with forces (Newtons). Using kilograms in a sum of forces dimensionally invalidates the calculation.
#### Detection signal
Force or acceleration results that differ by a factor of approximately 10 ([[g]]).
#### Conceptual correction
Always multiply mass by gravity to obtain the weight:
{{f:peso_total}}
#### Mini-example
A 10 kg block on a ramp does not exert a force of 10 on the plane, but 98.1 N (its weight).

## Interpretation errors

### Error 4: Efficiency greater than 100%
#### Why it seems correct
Rounding errors or misapplication of the efficiency formula [[eta]] can yield results greater than 1.
#### Why it is incorrect
It violates the second law of thermodynamics. No real machine can return more energy than it receives.
#### Detection signal
An [[eta]] value > 1 in the final results.
#### Conceptual correction
Review the energy balance: output work is always less than or equal to input work.
#### Mini-example
If you calculate that a ramp returns 120 J having applied 100 J, there is a sign or concept error.

## Quick self-control rule
- [ ] **Normal Coherence**: Is your normal force [[N]] less than or equal to the total weight [[W]]?
- [ ] **Effort Consistency**: Is the applied effort [[P]] less than the weight [[W]] in ideal conditions?
- [ ] **Energy Balance**: Is the input work (P * L) greater than or equal to the potential energy gain (W * h)?
- [ ] **Efficiency**: Is the efficiency [[eta]] less than or equal to 100%?

### Correction formula registry

Sliding Component:
{{f:descomposicion_paralela}}

Surface Reaction Force:
{{f:normal_plano}}

Real Friction Calculation:
{{f:fuerza_rozamiento}}
`;export{e as default};
