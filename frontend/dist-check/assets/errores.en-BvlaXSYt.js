const e=`# Frequent mistakes: Newton's Second Law (Force, Mass, and Acceleration)\r
\r
## Conceptual errors\r
\r
### Error 1: Mixing cause and effect\r
\r
**Why it seems plausible**: visible motion is incorrectly treated as direct evidence of high force.\r
\r
**Why it is incorrect**: second law links [[F_net]] to [[a]], not force directly to velocity.\r
\r
**Mini contrast example**: two cars can move at the same speed with near-zero resultant if their motion state is unchanged.\r
\r
**Self-correction heuristic**: check acceleration state before inferring force state.\r
\r
### Error 2: Mechanical substitution without context\r
\r
**Why it seems plausible**: memorized equations feel universally ready.\r
\r
**Why it is incorrect**: without system definition and axis conventions, projected terms like [[F_x]] and [[a_x]] are ambiguous.\r
\r
**Mini contrast example**: solving incline dynamics without axis projection gives wrong acceleration sign.\r
\r
**Self-correction heuristic**: define system, frame, and axes before substitution.\r
\r
### Error 3: Confusing related magnitudes\r
\r
**Why it seems plausible**: [[F_net]] is confused with one individual force, and [[m]] is confused with weight.\r
\r
**Why it is incorrect**: resultant is external vector sum, while mass and weight are distinct physical quantities.\r
\r
**Mini contrast example**: motor force in a cart is not equal to [[F_net]] when friction is significant.\r
\r
**Self-correction heuristic**: compute resultant explicitly and keep quantity identities separate.\r
\r
## Model errors\r
\r
### Error 4: Missing model-break conditions\r
\r
**Why it seems plausible**: base model works in many classroom cases.\r
\r
**Why it is incorrect**: dominant unmodeled effects can invalidate predictions.\r
\r
**Mini contrast example**: at higher speeds, drag can become large enough to require extended modeling.\r
\r
**Self-correction heuristic**: compare prediction versus measurement and track persistent mismatch.\r
\r
### Error 5: Ignoring known validity limits\r
\r
**Why it seems plausible**: law is remembered as unconditional.\r
\r
**Why it is incorrect**: constant-mass and inertial-frame assumptions are not optional.\r
\r
**Mini contrast example**: variable-mass propulsion cannot be treated as a fixed-mass block case.\r
\r
**Self-correction heuristic**: report assumptions and exit criteria in every solution.\r
\r
## Mathematical errors\r
\r
### Error 6: Careless algebraic manipulation\r
\r
**Why it seems plausible**: algebra can look correct while physical meaning is wrong.\r
\r
**Why it is incorrect**: sign errors and projection mistakes break causal interpretation.\r
\r
**Mini contrast example**: negative [[F_x]] yielding positive [[a_x]] due to sign mishandling.\r
\r
**Self-correction heuristic**: validate signs and dimensions step by step.\r
\r
### Error 7: Unit-discipline failure\r
\r
**Why it seems plausible**: unit conversion is treated as minor bookkeeping.\r
\r
**Why it is incorrect**: one unit error can shift results by orders of magnitude.\r
\r
**Mini contrast example**: entering mass in grams while force is in N creates unrealistic acceleration scale.\r
\r
**Self-correction heuristic**: convert to SI first and keep unit trace to the final line.\r
\r
## Interpretation errors\r
\r
### Error 8: Overstating precision\r
\r
**Why it seems plausible**: extra decimals look rigorous.\r
\r
**Why it is incorrect**: true precision is limited by sensor quality and model assumptions.\r
\r
**Mini contrast example**: reporting acceleration with four decimals when instrument supports only one or two.\r
\r
**Self-correction heuristic**: align significant figures with uncertainty.\r
\r
### Error 9: Skipping physical interpretation\r
\r
**Why it seems plausible**: obtaining a number feels like completion.\r
\r
**Why it is incorrect**: without causal reading, the solution does not answer the physics question.\r
\r
**Mini contrast example**: computing [[a]] but not stating which variable should change to reach target response.\r
\r
**Self-correction heuristic**: finish with explicit cause-effect statement connecting [[F_net]], [[m]], and [[a]].\r
\r
## Quick self-control rule\r
\r
1. System and axes declared.\r
2. [[F_net]] built as real external resultant.\r
3. Vector and component forms checked for consistency.\r
4. SI units and signs verified.\r
5. Final causal interpretation written.\r
`;export{e as default};
