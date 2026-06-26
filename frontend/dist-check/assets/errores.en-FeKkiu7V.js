const e=`# Common Errors in Longitudinal Waves\r
\r
The study of longitudinal waves presents significant conceptual challenges. Below are the most frequent misunderstandings following the Level 5 Armored structure.\r
\r
## Conceptual errors\r
\r
### Error\r
**Confusing oscillation direction with propagation direction**\r
**Why it seems correct:** In the most common waves (strings, water), the motion is up and down while the wave advances, which makes visualization easier.\r
**Why it is incorrect:** In fluids, the medium does not have the stiffness to "pull" particles sideways; it can only push them in the line of advance.\r
**Detection signal:** Attempting to draw a physical high "crest" in an air wave.\r
**Conceptual correction:** Visualize a spring stretching and shrinking; particles only move on the same line as the energy.\r
**Mini-example:** When speaking, your vocal cords push air forward, not toward the ceiling.\r
\r
### Error\r
**Believing that air travels from the source to the receiver**\r
**Why it seems correct:** We feel the "wind" from a fan or an explosion, suggesting an airflow.\r
**Why it is incorrect:** Sound is an oscillation of energy, not a massive flow. Particles return to their place.\r
**Detection signal:** Thinking that sound would stop if there were a gentle headwind.\r
**Conceptual correction:** Air is the messenger, not the message. The messenger oscillates at their post.\r
**Mini-example:** In a stadium "wave," people go up and down but no one changes seats.\r
\r
### Error\r
**Identifying displacement nodes as pressure nodes**\r
**Why it seems correct:** It is assumed that if nothing moves, "nothing happens" and pressure must be normal.\r
**Why it is incorrect:** Where particles do not move is where they are most squeezed or furthest apart.\r
**Detection signal:** Drawing pressure peaks coinciding with displacement peaks.\r
**Conceptual correction:** there is a 90° phase shift. Pressure is maximum where the change in position is zero but convergent.\r
**Mini-example:** In a traffic jam, the point where cars are stopped is where there is the most bumper-to-bumper "pressure."\r
\r
## Model errors\r
\r
### Error\r
**Using the isothermal model for sound in gases**\r
**Why it seems correct:** The air seems to be at a constant temperature while we speak.\r
**Why it is incorrect:** Oscillations are so fast that heat does not have time to flow (adiabatic process).\r
**Detection signal:** Obtaining a speed of sound of ~290 m/s instead of ~340 m/s.\r
**Conceptual correction:** Use adiabatic bulk modulus, not isothermal pressure instead of bulk modulus equal to pressure.\r
**Mini-example:** Newton's error was precisely ignoring this adiabatic character.\r
\r
### Error\r
**Assuming that higher density always slows down sound**\r
**Why it seems correct:** The formula the speed relation between [[c]], [[B]] and [[rho]] puts density in the denominator.\r
**Why it is incorrect:** Dense media are usually orders of magnitude stiffer (high B), compensating for the inertia.\r
**Detection signal:** Predicting that sound is slower in steel than in air.\r
**Conceptual correction:** Stiffness dominates over mass in most solids and liquids.\r
**Mini-example:** Sound travels at >5000 m/s in steel despite being much denser than air.\r
\r
## Mathematical errors\r
\r
### Error\r
**Sign error in Hooke's Law for fluids**\r
**Why it seems correct:** We usually think that more displacement implies more pressure.\r
**Why it is incorrect:** An increase in volume (positive displacement gradient) reduces pressure.\r
**Detection signal:** Obtaining negative pressures in compression zones.\r
**Conceptual correction:** The correct formula is the pressure-displacement gradient relation.\r
**Mini-example:** If you stretch a gas (s increases with x), the pressure drops.\r
\r
## Interpretation errors\r
\r
### Error\r
**Interpreting the s(x) graph as the physical shape of the wave**\r
**Why it seems correct:** The brain is trained to see curves as material shapes.\r
**Why it is incorrect:** The vertical axis in s(x) represents longitudinal displacement mapped to vertical for graphical convenience.\r
**Detection signal:** Thinking that air physically "rises" at the peaks of the graph.\r
**Conceptual correction:** The curve is a state map, not a photograph of the air geometry.\r
**Mini-example:** A thermometer goes up when it's hot, but heat doesn't physically move "upwards."\r
\r
## Quick self-control rule\r
If when plotting pressure and displacement on the same axis, the peaks coincide at the same x position, **your model is wrong**. Pressure peaks [[p_hat]] must coincide with points where displacement [[s_hat]] crosses the horizontal axis (zero value). Remember: Maximum compression occurs where displacement is changing direction.`;export{e as default};
