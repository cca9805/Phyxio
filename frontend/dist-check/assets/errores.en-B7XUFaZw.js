const e=`# Common Errors in Orbital Velocity\r
\r
## Conceptual errors\r
Conceptual error 1: confusing [[r]] with [[h]]. This is the most frequent issue. When altitude is given, many students substitute it directly into orbital relations. The number may look clean, but the physics is wrong. The correction is geometric reconstruction: identify [[R]], then add altitude to obtain center radius.\r
\r
Conceptual error 2: treating [[v_escape]] as circular-orbit speed. Both belong to the same gravitational context but represent different conditions. [[v_orb]] corresponds to bound circular motion; [[v_escape]] is the threshold for leaving the field.\r
\r
Conceptual error 3: assuming higher orbits must be faster because the path is longer. The path is longer, but field strength and required curvature change. In the ideal model, larger [[r]] means lower [[v_orb]].\r
\r
Conceptual error 4: believing satellite mass strongly changes circular speed in the basic model. Under dominant central mass assumptions, dependence is mainly on [[M]] and [[r]].\r
\r
## Model errors\r
Model error 1: using two-body equations where drag dominates. If altitude is very low or timescale is long, ideal assumptions break and predictions drift.\r
\r
Model error 2: comparing with real data while ignoring third-body effects or nonspherical gravity. In introductory contexts this may be acceptable, but systematic mismatch should not be blamed on rounding only.\r
\r
Model error 3: applying vis-viva as if all orbits were circular. The relation is general, but [[a]] and [[r]] must be handled carefully.\r
\r
Model error 4: reusing parameter values across different central bodies without recalibrating [[mu]]. This creates major inconsistency.\r
\r
## Mathematical errors\r
Math error 1: mixing kilometers and meters in one expression. Because powers and roots are involved, this introduces large scaling mistakes.\r
\r
Math error 2: excessive early rounding. Rounding [[mu]] or [[r]] too early can distort [[v_orb]] and [[T]] enough to alter decisions.\r
\r
Math error 3: ignoring dimensional checks. If units are not tracked explicitly, incorrect substitutions can look numerically plausible.\r
\r
Math error 4: mishandling sign information in [[E]]. Specific energy sign is a regime indicator, not a decorative detail.\r
\r
## Interpretation errors\r
Interpretation error 1: accepting final values without plausibility checks. Order-of-magnitude reasoning should filter absurd outputs.\r
\r
Interpretation error 2: assuming small speed differences are always negligible. In mission design, small velocity differences can imply large cost changes.\r
\r
Interpretation error 3: inferring causal conclusions from two isolated calculations without controlled parameter changes.\r
\r
Interpretation error 4: treating one simulation snapshot as universally valid without checking assumptions.\r
\r
## Quick self-control rule\r
Rule 1. Decide first whether the task is circular orbit, escape threshold, or energy classification.\r
\r
Rule 2. Convert [[h]] and [[R]] to [[r]] before substitutions.\r
\r
Rule 3. Keep SI consistency for [[G]], [[M]], [[r]], and outputs.\r
\r
Rule 4. Check trend: increasing [[r]] should reduce [[v_orb]] in the ideal model.\r
\r
Rule 5. Validate plausibility and energy sign when relevant.\r
\r
Following these checks takes little time and prevents most cumulative mistakes. The objective is not only obtaining a number, but preserving a coherent physical interpretation from setup to conclusion.`;export{e as default};
