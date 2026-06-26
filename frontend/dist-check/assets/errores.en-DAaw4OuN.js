const n=`# Common mistakes: Free-Body Diagrams\r
\r
## Conceptual errors\r
\r
### Error 1: Confusing cause and effect\r
\r
**Why it seems correct**\r
When motion is visible, students often add a "force of motion" arrow to explain it.\r
\r
**Why it is incorrect**\r
Motion is an effect of external interactions, not an external interaction itself.\r
\r
**Detection signal**\r
An arrow appears with no source body, then gets used as if it were a valid force.\r
\r
**Conceptual correction**\r
Require an explicit "agent -> system" statement for every arrow.\r
\r
**Contrast mini-example**\r
Invented "forward force" versus real rope tension [[T]].\r
\r
### Error 2: Applying formulas mechanically without context\r
\r
**Why it seems correct**\r
Using familiar equations quickly feels efficient.\r
\r
**Why it is incorrect**\r
Correct equations used in the wrong regime still produce wrong physical conclusions.\r
\r
**Detection signal**\r
Substitution starts before axis convention, contact state, and friction regime are declared.\r
\r
**Conceptual correction**\r
Set system, axes, and regime first; then choose equations.\r
\r
**Contrast mini-example**\r
Using [[fk]] while there is no slip instead of testing whether [[fs]] applies.\r
\r
### Error 3: Confusing similar magnitudes\r
\r
**Why it seems correct**\r
Many quantities share force units and look interchangeable.\r
\r
**Why it is incorrect**\r
[[P]], [[N]], [[Fx]], and [[Fy]] have different causal roles.\r
\r
**Detection signal**\r
Replacing [[N]] with [[P]] without geometric justification, or treating [[Fext]] as an axis component.\r
\r
**Conceptual correction**\r
Classify each quantity by source, direction, and function in the balance.\r
\r
**Contrast mini-example**\r
On an incline, [[Ppar]] cannot replace [[Pperp]] even though both come from weight.\r
\r
## Model errors\r
\r
### Error 4: Not recognizing when the simplified model fails\r
\r
**Why it seems correct**\r
Base FBD models solve many classroom problems well.\r
\r
**Why it is incorrect**\r
Real systems include vibration, contamination, and transients that can break assumptions.\r
\r
**Detection signal**\r
Predictions repeatedly disagree with measurements despite clean algebra.\r
\r
**Conceptual correction**\r
Keep the FBD core, then extend contact or transient detail only when evidence requires it.\r
\r
**Contrast mini-example**\r
Same [[T]] with different humidity yields different outcomes due to [[mu_s]] drift.\r
\r
### Error 5: Ignoring known model limits\r
\r
**Why it seems correct**\r
Once learned, the model appears universal.\r
\r
**Why it is incorrect**\r
Every model has explicit validity limits.\r
\r
**Detection signal**\r
Quasi-static balances are used during impact-like events without regime updates.\r
\r
**Conceptual correction**\r
Document assumptions and verify that the scenario remains inside the validity domain.\r
\r
**Contrast mini-example**\r
Using simple vertical equilibrium while contact is partially lost.\r
\r
## Mathematical errors\r
\r
### Error 6: Careless algebraic rearrangements\r
\r
**Why it seems correct**\r
Fast symbolic manipulation feels productive.\r
\r
**Why it is incorrect**\r
One sign mistake can reverse acceleration direction and invalidate interpretation.\r
\r
**Detection signal**\r
Computed [[ax]] sign contradicts observed tendency and no axis check is done.\r
\r
**Conceptual correction**\r
Audit sign handling in each projection before final substitution.\r
\r
**Contrast mini-example**\r
Dropping the sign on [[Ppar]] and concluding uphill acceleration with no matching force cause.\r
\r
### Error 7: Forgetting constants or units\r
\r
**Why it seems correct**\r
Units are treated as bookkeeping only.\r
\r
**Why it is incorrect**\r
Bad unit conversion shifts magnitudes and regime thresholds.\r
\r
**Detection signal**\r
[[P]] or [[N]] appears far outside plausible order of magnitude for the chosen mass.\r
\r
**Conceptual correction**\r
Enforce dimensional checks at every axis closure.\r
\r
**Contrast mini-example**\r
Using wrong [[g]] and overestimating adhesion margin.\r
\r
## Interpretation errors\r
\r
### Error 8: Claiming more precision than the model supports\r
\r
**Why it seems correct**\r
Extra decimals look scientific.\r
\r
**Why it is incorrect**\r
Numerical precision cannot compensate uncertain contact parameters.\r
\r
**Detection signal**\r
Reporting many decimals while [[mu_s]] was only roughly estimated.\r
\r
**Conceptual correction**\r
Match significant figures to physical uncertainty.\r
\r
**Contrast mini-example**\r
Reporting a threshold with four decimals from coarse friction measurements.\r
\r
### Error 9: Skipping physical interpretation of the computed result\r
\r
**Why it seems correct**\r
A final number feels like completion.\r
\r
**Why it is incorrect**\r
Without causal reading, no operational decision can be trusted.\r
\r
**Detection signal**\r
Solution ends at arithmetic without regime or risk statement.\r
\r
**Conceptual correction**\r
Always close with dominant agent, critical axis, and recommended action.\r
\r
**Contrast mini-example**\r
Reporting only [[Fx]] value versus stating whether the system accelerates, balances, or changes regime.\r
\r
## Quick self-control rule\r
\r
1. Does every arrow have a physical source?\r
2. Are axes consistent with the geometry?\r
3. Was friction regime declared before substitution?\r
4. Are signs and units coherent on both axes?\r
5. Does the conclusion translate numbers into physics?\r
\r
If any answer is no, revise the setup before trusting the output.\r
`;export{n as default};
