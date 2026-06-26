const e=`# Common errors\r
\r
## Error 1: choosing the wrong operation\r
\r
The error occurs when exponents are added during division or subtracted during multiplication. It may look like a small algebraic detail, but in physics it can change the answer by many factors of ten.\r
\r
For example, if \`v = d / t\`, a distance of \`10^3 m\` and a time of \`10^1 s\` give \`10^2 m/s\`, not \`10^4 m/s\`. Detect this by writing the physical operation before operating with exponents.\r
\r
## Error 2: losing the meaning of the variable\r
\r
Comparing exponents without looking at the quantity leads to false conclusions. \`10^3 Pa\`, \`10^3 J\`, and \`10^3 m\` have the same exponent but do not represent the same physical reality.\r
\r
Correct this by naming the variable: pressure, energy, length, force, or time. Order of magnitude can only be interpreted within a quantity and a unit.\r
\r
## Error 3: ignoring units\r
\r
An estimate without units may look correct and still be useless. If you obtain \`10^2\` without knowing whether it means metres per second, newtons, or joules, you cannot decide whether it makes sense.\r
\r
Detect this by checking the final unit of the formula. Correct it by preserving simplified units: metres per second, newtons times metres, coulombs per second. Scale and unit must travel together.\r
\r
## Error 4: confusing sign and magnitude\r
\r
Order of magnitude usually refers to size, not sign. A velocity of \`-30 m/s\` has a magnitude of order \`10^1 m/s\`, but the sign indicates direction relative to the chosen axis.\r
\r
The mistake is to erase the sign and lose physical information. Correct it by separating two questions: what is the scale of the value, and what does its sign mean in the model?\r
\r
## Error 5: applying a rule outside its domain\r
\r
Estimation is not enough when two quantities are close and their difference matters. If two forces are \`1.1 N\` and \`1.3 N\`, both have the same order of magnitude, but the difference may matter in a delicate equilibrium.\r
\r
It is also insufficient when the problem asks for experimental precision. Order of magnitude detects large errors; it does not replace significant figures, uncertainty, or statistical analysis.\r
\r
## Quick detection rule\r
\r
If the estimated result falls on an impossible scale for the phenomenon, check the work before calculating further. A person does not walk at \`10^4 m/s\`, a table is not \`10^-6 m\` tall, and a small battery does not store \`10^9 J\`.\r
\r
The quick rule is: compatible unit, reasonable exponent, and comparison with a known scale. If one of these fails, the solution is not yet trustworthy.\r
\r
<!-- algebra-depth-v2 -->\r
## Quick diagnosis\r
\r
Input error: using a datum without unit, scale, or a decision about whether it is constant. In order of magnitude, an isolated number rarely contains all the physical information.\r
\r
Structure error: applying a correct operation to the wrong relation. The arithmetic may be right while the physics is wrong if the selected pattern does not represent the phenomenon.\r
\r
Output error: accepting a number without comparing it with an estimate. A result must have a reasonable unit, order of magnitude, sign, and dependence.\r
\r
`;export{e as default};
