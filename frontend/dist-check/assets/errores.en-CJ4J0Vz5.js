const e=`\uFEFF# Common mistakes in Communicating Vessels\r
\r
## Conceptual errors\r
\r
### Error 1: Believing that heights always become equal even when densities differ\r
- **Why it seems correct**: The school sentence "communicating vessels equalize levels" is often remembered too rigidly.\r
- **Why it is incorrect**: That conclusion only holds directly when both branches contain the same fluid under the same surface conditions. With different densities, what becomes equal at the same depth is pressure, not necessarily height.\r
- **Detection clue**: The student obtains [[h2]] = [[h1]] even when [[rho1]] and [[rho2]] are clearly different.\r
- **Conceptual correction**: Replace the visual rule with the physical rule: at the same depth, pressure must match. Then decide whether that forces equal heights or a density-compensated difference.\r
- **Mini-example**: If water and oil share a common bottom, the oil column can be taller without breaking equilibrium.\r
\r
### Error 2: Thinking that vessel shape determines the final equilibrium\r
- **Why it seems correct**: A curved tube or a wider branch looks visually important.\r
- **Why it is incorrect**: In the ideal model, decorative geometry does not change the hydrostatic equilibrium condition. Effective height and density matter, not the outer drawing of the vessel.\r
- **Detection clue**: The student justifies a height difference only by saying that one branch is wider or narrower.\r
- **Conceptual correction**: Ask: "which effective columns weigh on the same horizontal level?" That question brings the focus back to [[h1]], [[h2]], [[rho1]], and [[rho2]].\r
- **Mini-example**: Two branches with different cross sections may still end at the same height if they contain the same fluid.\r
\r
## Model errors\r
\r
### Error 3: Measuring heights from different references\r
- **Why it seems correct**: In the sketch it is easy to use the bottom of each branch or the nearest visible surface as the origin.\r
- **Why it is incorrect**: The leaf equation compares columns from one common horizontal line. If [[h1]] and [[h2]] are not taken from the same reference, they stop being homologous quantities.\r
- **Detection clue**: The sketch looks reasonable, but the result contradicts the limit case [[rho1]] = [[rho2]].\r
- **Conceptual correction**: Draw the common horizontal first and only then measure [[h1]] and [[h2]].\r
- **Mini-example**: Taking [[h1]] from the tube bottom and [[h2]] from the interface produces an apparent equality that has no physical meaning.\r
\r
### Error 4: Compressing a multi-segment setup into only two columns\r
- **Why it seems correct**: The formula [[rho1]] [[h1]] = [[rho2]] [[h2]] is compact and looks universal.\r
- **Why it is incorrect**: If one branch contains several fluids or several interfaces, one single density no longer represents the whole column. The problem requires a segment-by-segment balance.\r
- **Detection clue**: The student ignores one interface in the sketch or merges two different fluids as if they were one.\r
- **Conceptual correction**: Walk the pressure path through the layers and add hydrostatic contributions whenever the setup cannot be reduced to one height per side.\r
- **Mini-example**: A branch containing water and oil cannot be modeled with one single average density unless that approximation is explicitly justified.\r
\r
## Mathematical errors\r
\r
### Error 5: Solving for the target height incorrectly\r
- **Why it seems correct**: The equation looks simple enough to manipulate from memory.\r
- **Why it is incorrect**: When solving for [[h2]], [[rho2]] must remain in the denominator. If it ends up multiplying, the physical trend is reversed.\r
- **Detection clue**: The result says that a denser compensating fluid needs more height, which contradicts the correct physical reading.\r
- **Conceptual correction**: Before substituting numbers, check the trend: if [[rho2]] rises, [[h2]] must fall for the same [[h1]].\r
- **Mini-example**: With [[rho1]] = 1000, [[h1]] = 0.20, and [[rho2]] = 800, the correct height is 0.25 m, not a smaller value by algebraic inertia.\r
\r
### Error 6: Forgetting to test the equal-density limit\r
- **Why it seems correct**: The student is satisfied with one numerical answer and does not perform a consistency check.\r
- **Why it is incorrect**: The case [[rho1]] = [[rho2]] is a powerful control. If the model and algebra are correct, it must recover [[h1]] = [[h2]].\r
- **Detection clue**: Even with equal densities, the solution keeps different heights without any additional explanation.\r
- **Conceptual correction**: Always introduce one quick limit check with equal fluids.\r
- **Mini-example**: If water is compared with water, any systematic height difference in the ideal model signals a setup mistake.\r
\r
## Interpretation errors\r
\r
### Error 7: Reading a taller column as "more pressure" without checking density\r
- **Why it seems correct**: Visually, a taller column looks like a larger load.\r
- **Why it is incorrect**: Hydrostatic pressure depends on density and height. A tall column of light fluid may balance a shorter column of dense fluid.\r
- **Detection clue**: The student claims that the taller branch always "wins" even when that branch contains a much lighter fluid.\r
- **Conceptual correction**: Read each height together with its density. The correct physical question is which density-times-height product is larger, not which height alone is larger.\r
- **Mini-example**: A taller oil column and a shorter water column may be perfectly balanced.\r
\r
## Quick self-control rule\r
1. Mark one common horizontal line.\r
2. Check that [[h1]] and [[h2]] are taken from that same reference.\r
3. Confirm that [[rho1]] belongs to the [[h1]] column and [[rho2]] to the [[h2]] column.\r
4. Use \r
\r
{{f:equilibrio_vasos}}\r
\r
 or \r
\r
{{f:equilibrio_vasos}}\r
\r
.\r
5. Test the limit [[rho1]] = [[rho2]].\r
6. Close with one physical sentence explaining why one branch needs more or less height.\r
\r
`;export{e as default};
