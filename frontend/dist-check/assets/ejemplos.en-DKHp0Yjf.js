const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A 12 kg block hangs from the ceiling by an ideal cable. Initially at rest, a traction force is applied generating a tension of 156 N in the cable. Determine: (a) the block's acceleration and its direction; (b) the velocity reached after 3 s of tension application, starting from rest; (c) the minimum tension needed to maintain static equilibrium. Calculate also the gravitational potential energy acquired when the block rises 2 metres from its initial position.\r
\r
## Data\r
\r
- Block mass: 12 kg\r
- Applied tension: 156 N\r
- Gravity: 9.8 m/s²\r
- Initial velocity: 0 m/s\r
- Height of ascent for energy calculation: 2 m\r
\r
## System definition\r
\r
The mechanical system consists of a single rigid body (the block) linked to a fixed support (the ceiling) by a flexible cable that only transmits traction. The block has mass [[m]] concentrated at its centre of gravity, and its motion is restricted to the vertical direction by the nature of the constraint. There is no significant friction or air resistance. The relevant magnitudes are: mass [[m]], tension [[T]], weight [[W]], acceleration [[a]], velocity, time, height [[h]], potential energy [[E_p]], and gravity [[g]].
\r
## Physical model\r
\r
The system is modelled as a point-like block suspended from an ideal vertical cable (with no own mass, inextensible and inelastic). The only vertical forces are upward cable tension and downward gravitational weight. The model applies Newton's second law in the vertical direction.\r
\r
The fundamental formulas governing the system's behaviour are:\r
\r
{{f:peso_gravitatorio}}\r
\r
{{f:dinamica_vertical}}\r
\r
{{f:equilibrio_vertical}}\r
\r
{{f:tension_aceleracion}}\r
\r
{{f:energia_potencial}}\r
\r
## Model justification\r
\r
The hanging block model with ideal cable is valid because the cable's mass is negligible compared to the block's mass (2 m nylon thread vs 12 kg metal block). The velocity reached (less than 10 m/s) is sufficiently low for air resistance to be insignificant compared to gravity and tension forces (less than 1 % effect).\r
\r
The model would cease to be valid if: (a) the cable were very elastic and stretched appreciably during acceleration; (b) the velocity were so high that air resistance compared with weight; (c) the cable had mass comparable to the block's; or (d) the block rotated significantly during motion, introducing unconsidered rotational kinetic energy.\r
\r
## Symbolic solution\r
\r
Step 1: calculate the block's weight using the gravitational weight formula.\r
\r
{{f:peso_gravitatorio}}\r
\r
Step 2: apply Newton's second law in the vertical direction to obtain the acceleration resulting from the difference between tension and weight.\r
\r
{{f:dinamica_vertical}}\r
\r
Solving algebraically for acceleration: [[a]] equals ([[T]] minus [[W]]) divided by [[m]].\r
\r
Step 3: for the velocity after a given time, apply uniform acceleration kinematics starting from rest: the velocity equals [[a]] multiplied by that time.
\r
Step 4: for static equilibrium, the condition is that [[a]] is zero, which implies that [[T]] equals [[W]] according to the equilibrium formula.\r
\r
{{f:equilibrio_vertical}}\r
\r
Step 5: to calculate the tension needed given an acceleration, use the alternative formula solved from the second law.\r
\r
{{f:tension_aceleracion}}\r
\r
Step 6: the gravitational potential energy acquired when ascending a height [[h]] is calculated using the potential energy formula.\r
\r
{{f:energia_potencial}}\r
\r
## Numerical substitution\r
\r
Step 1: calculating weight, we multiply 12 kg by 9.8 m/s², obtaining 117.6 N. We shall say [[W]] is approximately 118 N.\r
\r
{{f:peso_gravitatorio}}\r
\r
Step 2: for acceleration, the difference between tension and weight is 156 N minus 117.6 N, giving 38.4 N upward. Dividing this net force by 12 kg yields an acceleration of 3.2 m/s². The positive sign indicates the block accelerates upward.\r
\r
{{f:dinamica_vertical}}\r
\r
Step 3: after 3 s with acceleration of 3.2 m/s² starting from rest, the reached velocity is 9.6 m/s upward, equivalent to approximately 35 km/h.\r
\r
Step 4: static equilibrium tension equals weight, that is 117.6 N (we shall say approximately 118 N).\r
\r
{{f:equilibrio_vertical}}\r
\r
Step 5: the potential energy when rising 2 m from rest is calculated by multiplying 12 kg by 9.8 m/s² by 2 m, giving 235.2 J, approximately 235 J.\r
\r
{{f:energia_potencial}}\r
\r
## Dimensional validation\r
\r
- Weight [[W]] has units of mass \`[M]\` times acceleration \`[L T⁻²]\`, resulting in \`[M L T⁻²]\` which are newtons ✓\r
- Force difference \`[M L T⁻²]\` divided by mass \`[M]\` gives acceleration \`[L T⁻²]\` in m/s² ✓\r
- Time \`[T]\` multiplied by acceleration \`[L T⁻²]\` gives velocity \`[L T⁻¹]\` in m/s ✓\r
- Potential energy [[E_p]] has units of mass \`[M]\` times acceleration \`[L T⁻²]\` times length \`[L]\`, resulting in \`[M L² T⁻²]\` which are joules ✓\r
\r
## Physical interpretation\r
\r
The result means that the 156 N tension exceeds the 118 N weight by a net margin of 38 N, producing a moderate upward acceleration of 3.2 m/s², approximately one-third of Earth's gravity. This indicates that the system is in accelerated lifting regime, not in dynamic equilibrium. After 3 seconds of constant acceleration, the block rises at almost 10 m/s (36 km/h), a considerable velocity that in real load lifting applications would require caution and adequate braking systems.\r
\r
The minimum equilibrium tension of 118 N represents the critical threshold between ascent and descent. If tension decreases exactly to this value, acceleration vanishes and the block maintains constant velocity (or remains at rest). If it drops below 118 N, the block begins to descend. This behaviour illustrates how cable tension is a constraint force that adapts to dynamic conditions, unlike weight which remains fixed for a given mass.\r
\r
The 235 J of potential energy stored after rising 2 m represents the work done against gravity. If the block were released from that height, this energy would convert to kinetic energy during the fall, reaching approximately 6.3 m/s just before the initial rest position (discounting friction), which verifies the energetic consistency of the analysis.\r
\r
# Real-world example\r
\r
## Context\r
\r
A tower crane at a construction site must lift prefabricated concrete beams of 2500 kg (2.5 tonnes) from ground level to the tenth floor of a building under construction. The operator needs to determine what minimum tension the steel cable must withstand during lifting, and what maximum acceleration can be imparted to the load without exceeding the cable's safe working load, which according to the manufacturer's specifications is 35 000 N. The site engineer also needs to estimate the minimum lifting motor power.\r
\r
## Physical estimation\r
\r
The beam's weight is obtained by multiplying its mass by Earth's gravity: 2500 kg times 9.8 m/s² gives approximately 24 500 N (24.5 kN). This is the equilibrium tension the cable experiences when the beam hangs at rest waiting to be lifted. It is the base load the system must continuously support.\r
\r
To lift the beam with acceleration, tension must exceed weight according to Newton's second law. The difference between the maximum safe load (35 000 N) and the equilibrium weight (24 500 N) is approximately 10 500 N. Dividing this available force margin by the 2500 kg mass yields a maximum permissible acceleration of approximately 4.2 m/s² upward.\r
\r
In industrial practice, cranes accelerate much more gently than this theoretical limit (typically between 0.5 and 1 m/s²) to avoid dangerous oscillations of the suspended load and to reduce cable wear. A practical acceleration of 1 m/s² would require a tension of 24 500 N plus 2500 N (product of mass by desired acceleration), totalling 27 000 N, well within the 35 000 N safe limit and leaving a 23 % safety margin over the maximum load.\r
\r
Motor power is estimated considering that at a constant lifting velocity of 0.5 m/s the mechanical power needed is the product of tension by velocity, that is 27 000 N times 0.5 m/s, giving 13.5 kW, approximately 18 HP, not considering losses from friction in pulleys.\r
\r
## Interpretation\r
\r
The magnitude [[T]] in this engineering context represents the actual traction load the cable must withstand at each instant. The crane designer uses the tension for given acceleration formula to calculate the maximum expected tension during startup (weight plus dynamic overload).\r
\r
{{f:tension_aceleracion}}\r
\r
This calculation allows selecting a cable with nominal tensile strength several times higher than the calculated value. The typical safety factor is 5 to 10 for lifting people, and 3 to 5 for material loads like these beams.\r
\r
Mass [[m]] determines the inertial scale of the system: a heavier beam requires the same tension increase to produce the same acceleration as a lighter one, but the base weight is proportionally larger. This implies that for large masses, total tension approaches the material limit more closely, making precise acceleration control crucial to avoid dynamic overloads that could compromise cable integrity.\r
`;export{e as default};
