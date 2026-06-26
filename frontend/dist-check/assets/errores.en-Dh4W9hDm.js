const e=`\uFEFF# Common mistakes in Manometers\r
\r
## Conceptual errors\r
\r
### Error 1: Thinking the manometer gives absolute pressure by itself\r
Many students see a scale and assume the instrument directly returns system pressure.\r
- **Why it looks reasonable**: In lab language people often say "read the pressure on the manometer", which sounds like a direct reading.\r
- **Why it is wrong**: The manometer first measures a level difference [[dh]], translates it into [[dp]], and only with a reference [[p1]] can it reconstruct [[p2]].\r
- **Detection sign**: The student obtains a value in pascals but cannot say with respect to what reference it is defined.\r
- **Correction**: Always separate differential reading from final pressure. Mandatory question: "what pressure reference is used in this problem".\r
- **Mini-example**: Two manometers with the same [[dh]] may correspond to different absolute pressures if one uses atmospheric reference and the other uses another system branch.\r
\r
### Error 2: Confusing vertical level difference with tube length\r
In inclined or curved tubes it is very common to measure the visible distance along the glass.\r
- **Why it looks reasonable**: The ruler naturally follows the tube rather than the vertical direction.\r
- **Why it is wrong**: The manometric relation uses [[dh]], the vertical level difference. Hydrostatic balance depends on the equivalent vertical column weight, not on the geometric path along the tube.\r
- **Detection sign**: The computed [[dp]] is too large and does not match the observed geometry.\r
- **Correction**: Draw a horizontal reference first and keep only the difference in vertical coordinates.\r
- **Mini-example**: A strongly inclined tube may show 20 cm along the glass but only 5 cm of true vertical level difference.\r
\r
## Model errors\r
\r
### Error 3: Using the density of the process fluid instead of the manometric liquid\r
This appears often when the system contains air, gas, or steam, but the manometer contains water or mercury.\r
- **Why it looks reasonable**: The student focuses on the main process fluid and forgets the measuring instrument itself.\r
- **Why it is wrong**: The column that balances pressure is the manometric liquid. Therefore the relevant density in \r
\r
{{f:manometro}}\r
\r
 is the density [[rho]] of the liquid inside the manometer.\r
- **Detection sign**: The result changes absurdly when switching from water to mercury even though the observed level difference is the same.\r
- **Correction**: Before substituting values, answer explicitly: "which fluid forms the column I am reading".\r
- **Mini-example**: A manometer measuring compressed air with water still uses the density of water, not the density of compressed air.\r
\r
### Error 4: Applying the basic equation when the instrument is not in equilibrium\r
If the setup vibrates or receives strong pulsations, the reading may oscillate.\r
- **Why it looks reasonable**: The equation is short and looks universal.\r
- **Why it is wrong**: The law is hydrostatic. If the column accelerates, weight balance alone is no longer enough.\r
- **Detection sign**: The meniscus never stabilizes and the operator selects an arbitrary point of the motion.\r
- **Correction**: Use time averaging, damping, or a sensor appropriate for the dynamic regime.\r
- **Mini-example**: In a line affected by pump pulsations, the column rises and falls continuously, so the instantaneous reading is not a reliable measure of [[dp]].\r
\r
## Mathematical errors\r
\r
### Error 5: Forgetting unit conversions\r
The most common case is using [[dh]] in cm or mm while [[rho]] and [[g]] remain in SI units.\r
- **Why it looks reasonable**: The level difference is read visually in centimeters and feels harmless.\r
- **Why it is wrong**: The equation produces pascals only if [[dh]] is expressed in meters.\r
- **Detection sign**: A level difference of only a few centimeters produces pressure differences of hundreds of kilopascals, which is physically implausible.\r
- **Correction**: Always convert cm -> m or mm -> m before substitution.\r
- **Mini-example**: 10 cm of water means 0.10 m, not 10 m; the numerical gap is a factor of 100.\r
\r
### Error 6: Flipping the sign of pressure difference without checking the convention\r
The student sees one column rise and immediately decides to "add" or "subtract" without defining which branch is the reference.\r
- **Why it looks reasonable**: The image of the tube invites quick top-versus-bottom intuition.\r
- **Why it is wrong**: The sign of [[dp]] depends on how the reference pressure is defined and which branch is compared to which.\r
- **Detection sign**: The final result contradicts the sketch itself: the branch that looked more pressurized ends up with a smaller pressure.\r
- **Correction**: Write the verbal convention first: "I will take positive difference as the difference between [[p2]] and [[p1]]".\r
- **Mini-example**: If branch 2 pushes harder, then [[p2]] is greater than [[p1]]; if [[dp]] is defined as the difference between [[p2]] and [[p1]], the sign must be positive.\r
\r
## Interpretation errors\r
\r
### Error 7: Ending the exercise with a number and no physical reading\r
The student computes [[dp]] or [[p2]] and stops without explaining what the value means in the system.\r
- **Why it looks reasonable**: Many classroom formats reward the final number.\r
- **Why it is wrong**: In instrumentation, the value matters only if it can be interpreted as normal, abnormal, high, low, or compatible with equipment state.\r
- **Detection sign**: The solver cannot answer whether the filter is dirty, whether the line loses pressure, or whether the setup is consistent.\r
- **Correction**: Always add one causal sentence explaining what the computed reading implies for the real system.\r
- **Mini-example**: 250 Pa across a filter is not "just a number"; it may be the replacement threshold.\r
\r
## Quick self-control rule\r
Before accepting a manometer solution, apply this sequence:\r
1. Check that [[dh]] is vertical and expressed in meters.\r
2. Confirm that [[rho]] belongs to the manometric liquid, not to the process fluid.\r
3. Compute [[dp]] with \r
\r
{{f:manometro}}\r
\r
.\r
4. Declare the reference [[p1]] before obtaining [[p2]].\r
5. Finish with a physical sentence: what does that reading say about the real system.\r
\r
`;export{e as default};
