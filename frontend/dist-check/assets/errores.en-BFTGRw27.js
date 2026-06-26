const e=`# Errores frecuentes: Newton's First Law (Inertia)\r
\r
## Conceptual errors\r
\r
### Error 1: Mixing cause and effect\r
\r
**Why it seems plausible**: visible motion invites the intuition that a forward net force must be present.\r
\r
**Why it is incorrect**: first law links state change to [[F_net]], not to motion itself. A body may keep nonzero [[v]] with zero-compatible [[a]].\r
\r
**Mini contrast example**: an air-track glider keeps nearly constant speed while net-force reading stays around zero.\r
\r
**Self-correction heuristic**: ask whether velocity is changing, not only whether position changes.\r
\r
### Error 2: Applying formulas without context validation\r
\r
**Why it seems plausible**: memorized equations feel universal.\r
\r
**Why it is incorrect**: if frame or system definition is wrong, [[F_net]] interpretation is physically invalid.\r
\r
**Mini contrast example**: treating an accelerating elevator as inertial creates a false equilibrium reading.\r
\r
**Self-correction heuristic**: declare frame and system before symbolic substitution.\r
\r
### Error 3: Confusing similar magnitudes\r
\r
**Why it seems plausible**: zero resultant sounds like zero forces; zero acceleration sounds like rest.\r
\r
**Why it is incorrect**: balanced nonzero forces can still produce [[F_net]] near zero, and [[a]] near zero can coexist with constant nonzero [[v]].\r
\r
**Mini contrast example**: balanced block on a table and a skater moving at nearly constant speed.\r
\r
**Self-correction heuristic**: separate force balance, acceleration state, and velocity value.\r
\r
## Model errors\r
\r
### Error 4: Missing model-break conditions\r
\r
**Why it seems plausible**: ideal models work in many textbook cases.\r
\r
**Why it is incorrect**: small disturbances can accumulate and produce measurable drift over longer windows.\r
\r
**Mini contrast example**: cart appears inertial over 1 s, but loses measurable speed over 20 s.\r
\r
**Self-correction heuristic**: set time window and tolerance before claiming inertial regime.\r
\r
### Error 5: Ignoring known model limits\r
\r
**Why it seems plausible**: the law is remembered as unconditional.\r
\r
**Why it is incorrect**: first-law reading requires inertial frame assumptions and valid scale control.\r
\r
**Mini contrast example**: curved-path vehicle with lateral acceleration is not a pure inertial straight-line case.\r
\r
**Self-correction heuristic**: write explicit validity conditions and test them against data.\r
\r
## Mathematical errors\r
\r
### Error 6: Careless algebraic manipulation\r
\r
**Why it seems plausible**: symbolic steps are performed by routine.\r
\r
**Why it is incorrect**: a formally correct manipulation can still lead to wrong physical conclusion if assumptions are mixed.\r
\r
**Mini contrast example**: wrong mass value yields acceleration inconsistent with measured near-constant speed.\r
\r
**Self-correction heuristic**: verify units and causal meaning after each algebraic step.\r
\r
### Error 7: Unit-discipline failure\r
\r
**Why it seems plausible**: conversion is treated as secondary detail.\r
\r
**Why it is incorrect**: one conversion mistake can change threshold decisions and model choice.\r
\r
**Mini contrast example**: mixing cm/s and m/s inflates reported speed drift by two orders of magnitude.\r
\r
**Self-correction heuristic**: convert to SI at the beginning and keep a unit table while solving.\r
\r
## Interpretation errors\r
\r
### Error 8: Overstating precision\r
\r
**Why it seems plausible**: more decimals look more scientific.\r
\r
**Why it is incorrect**: true precision is limited by measurement uncertainty and model simplification.\r
\r
**Mini contrast example**: reporting [[a]] with four decimals when sensor quality supports only two useful digits.\r
\r
**Self-correction heuristic**: align significant figures with uncertainty and model scope.\r
\r
### Error 9: Skipping physical interpretation\r
\r
**Why it seems plausible**: obtaining a number feels like completion.\r
\r
**Why it is incorrect**: without causal reading, the result does not answer the physical question.\r
\r
**Mini contrast example**: computing small speed drift but not deciding whether it is noise or real dynamic change.\r
\r
**Self-correction heuristic**: end with explicit causal conclusion: conserved inertial state or transition to non-equilibrium dynamics.\r
\r
## Quick self-control rule\r
\r
1. Frame and system are explicitly declared.\r
2. [[F_net]] reading is justified by data and tolerance.\r
3. Consistency between [[a]] and [[v]] is checked.\r
4. Model limits are written before final claim.\r
5. Final statement is physically interpreted, not only numeric.\r
`;export{e as default};
