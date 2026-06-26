const n=`# Frequent errors: Weight in Different Contexts\r
\r
## Conceptual errors\r
\r
### Error 1: Confusing cause and effect\r
\r
This appears when all variables in one expression are treated as equivalent causal drivers.\r
\r
Why it looks correct: equations list many symbols side by side.\r
\r
Why it is incorrect: [[G]] and [[M]] define field source, while [[a]] modifies support reading [[Pap]].\r
\r
Detection signal: claiming that body mass changed because scale reading changed.\r
\r
Conceptual correction: separate real-field quantities ([[P]], [[gmod]]) from contact quantities ([[Pap]], [[N]]).\r
\r
### Error 2: Applying a formula without checking context\r
\r
Why it looks correct: the equation is familiar and often successful in simple problems.\r
\r
Why it is incorrect: each equation has a validity domain.\r
\r
Detection signal: stable calculations that disagree with telemetry or validated simulation.\r
\r
Conceptual correction: declare model family first (local vs central) and justify it.\r
\r
### Error 3: Mixing similar magnitudes\r
\r
Why it looks correct: [[m]], [[Pmod]], and [[Pap]] can appear in the same practical workflow.\r
\r
Why it is incorrect: they represent different physical roles.\r
\r
Detection signal: statements such as "gravity disappears in orbit because scale reading is near zero".\r
\r
Conceptual correction: label each quantity as body property, field property, or support response.\r
\r
## Model errors\r
\r
### Error 4: Not recognizing simplified-model failure\r
\r
Why it looks correct: local approximations work in many textbook problems.\r
\r
Why it is incorrect: scale changes can invalidate local assumptions.\r
\r
Detection signal: difference between two models exceeds measurement uncertainty.\r
\r
Conceptual correction: use a switch rule. If abs([[h]]) <= 0.02*[[R]] is not met, migrate to central modeling.\r
\r
### Error 5: Ignoring known model limits\r
\r
Why it looks correct: memorized formulas create overconfidence.\r
\r
Why it is incorrect: equations are domain-limited tools, not universal automatic answers.\r
\r
Detection signal: inability to explain why one formula was selected over another from the same leaf.\r
\r
Conceptual correction: state dominant variable, validity limit, and accepted error before solving.\r
\r
## Mathematical errors\r
\r
### Error 6: Careless algebraic rearrangement\r
\r
Why it looks correct: algebraic manipulation may appear mechanically valid.\r
\r
Why it is incorrect: mathematically valid steps can violate physical constraints.\r
\r
Detection signal: negative or undefined values where context requires positive magnitudes.\r
\r
Conceptual correction: validate dimensions, signs, and range after each critical transformation.\r
\r
### Error 7: Forgetting constants or unit consistency\r
\r
Why it looks correct: unit handling is often treated as secondary.\r
\r
Why it is incorrect: one unit mismatch can shift results by many orders of magnitude.\r
\r
Detection signal: output scale is implausible for the problem context.\r
\r
Conceptual correction: convert to SI early and keep explicit conversion traceability.\r
\r
## Interpretation errors\r
\r
### Error 8: Reporting more precision than the model supports\r
\r
Why it looks correct: many decimals look rigorous.\r
\r
Why it is incorrect: numerical precision is not model validity.\r
\r
Detection signal: highly detailed decimals with no model-uncertainty discussion.\r
\r
Conceptual correction: round according to model and instrument quality, not calculator capacity.\r
\r
### Error 9: Skipping physical interpretation\r
\r
Why it looks correct: obtaining a number may feel like finishing the problem.\r
\r
Why it is incorrect: without causal interpretation, the number can be physically meaningless.\r
\r
Detection signal: inability to explain why [[Pap]] changed when [[a]] changed.\r
\r
Conceptual correction: finish with a causal sentence stating what changed first and why.\r
\r
## Quick self-control rule\r
\r
1. Dimensional sense: does the output unit match the target quantity.\r
2. Physical scale: is the value inside plausible order-of-magnitude bounds.\r
3. Sign logic: does sign and trend match direction conventions.\r
4. Domain compliance: are model limits satisfied.\r
5. Causal explanation: can you explain the result in physical language.\r
\r
If any item fails, revisit assumptions before trusting the result.\r
\r
`;export{n as default};
