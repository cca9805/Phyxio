const e=`# Common errors in the Venturi effect\r
\r
## Conceptual errors\r
\r
### Error 1: Believing that "more speed implies more pressure"\r
**Why it seems correct**: There is an everyday intuition that a fast-moving fluid has "more force" or "pushes harder" against whatever it encounters.\r
**Why it is incorrect**: Static pressure is a measure of the fluid's potential energy. To gain kinetic energy (velocity), the fluid must "pay" with its pressure energy. If velocity increases, pressure decreases to conserve total energy.\r
**Detection signal**: Obtaining a pressure [[p2]] greater than [[p1]] in a horizontal constriction.\r
**Conceptual correction**: Remember that pressure is the cause of acceleration; high pressure behind and low pressure in front is needed to push the fluid forward.\r
**Mini-example**: When blowing between two sheets of paper, they come together instead of moving apart, because the fast air between them creates a low-pressure zone.\r
\r
### Error 2: Confusing flow rate with velocity\r
**Why it seems correct**: One tends to think that if the space is smaller, the fluid "piles up" and therefore slows down, like in a traffic jam.\r
**Why it is incorrect**: Fluids are continuous and incompressible (in this model). If the flow rate [[Q]] does not change, the same amount of liters per second must pass through the wide section [[A1]] and the narrow section [[A2]]. The only way is for the fluid to run faster in the constriction.\r
**Detection signal**: Thinking that the velocity [[v2]] is less than [[v1]] when the area decreases.\r
**Conceptual correction**: Always apply the continuity equation before performing any pressure balance: the product [[A1]]·[[v1]] must equal [[A2]]·[[v2]] if the fluid is incompressible.\r
**Mini-example**: When partially covering a hose outlet, the water comes out with more force (velocity), it is not held back inside.\r
\r
## Model errors\r
\r
### Error 1: Ignoring cavitation\r
**Why it seems correct**: Bernoulli's mathematical calculations can yield very large negative pressures without the equation "complaining."\r
**Why it is incorrect**: Liquids have a physical limit called vapor pressure. If the pressure [[p2]] falls below this limit, the liquid turns into vapor bubbles, breaking the continuous flow.\r
**Detection signal**: Absolute pressure results close to zero or negative.\r
**Conceptual correction**: Always verify that $p_2$ is greater than the vapor pressure of the fluid at that temperature.\r
**Mini-example**: In industrial pumps, the "clattering" noise (like stones inside the pipe) indicates that the Venturi is cavitating and damaging the material.\r
\r
### Error 2: Neglecting viscosity in real pipes\r
**Why it seems correct**: The Bernoulli model is much simpler to apply than equations with head loss.\r
**Why it is incorrect**: In real pipes, friction with the walls consumes energy. This means that the pressure does not fully recover after the constriction.\r
**Detection signal**: The pressure measured downstream of the Venturi is much lower than the inlet pressure [[p1]].\r
**Conceptual correction**: Use the Venturi model for short sections and use discharge coefficients for real engineering applications.\r
**Mini-example**: A real Venturi meter always has a small systematic error that forces it to be multiplied by a correction factor (approx. 0.98).\r
\r
## Mathematical errors\r
\r
### Error 1: Forgetting to square the velocities\r
**Why it seems correct**: Bernoulli is associated with a linear sum of energy terms.\r
**Why it is incorrect**: Kinetic energy depends on the square of the velocity ($v^2$). Forgetting this exponent drastically undervalues the effect of the pressure drop [[dp]] when the velocity increases.\r
**Detection signal**: Obtaining pressure differences inconsistent with the expected orders of magnitude in fast fluids.\r
**Conceptual correction**: Always check the exponent 2 in each kinetic term of the equation.\r
**Mini-example**: If the velocity doubles, the pressure drop multiplies by 4, not by 2.\r
\r
## Interpretation errors\r
\r
### Error 1: Attributing the pressure drop to friction\r
**Why it seems correct**: In daily life, we associate "pressure loss" with "friction" or "energy loss."\r
**Why it is incorrect**: In the ideal Venturi effect, the pressure drop [[dp]] is not an energy loss, but a transformation of potential energy into kinetic energy. Total energy is conserved.\r
**Detection signal**: Believing that the fluid heats up due to the pressure drop in the constriction.\r
**Conceptual correction**: Understand that the pressure falls because the fluid is "busy" moving fast, not because it has rubbed against something.\r
**Mini-example**: In an ideal Venturi, when returning to the wide section, the pressure returns to its original value [[p1]].\r
\r
## Quick self-control rule\r
**"Less area, more speed, less pressure"**. If in your results the narrower section has a higher pressure than the wide section, the exercise is almost certainly incorrectly set up. Always verify that the pressure drop [[dp]] is positive in the direction of the narrowing.`;export{e as default};
