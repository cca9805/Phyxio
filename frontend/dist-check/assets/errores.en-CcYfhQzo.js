const e=`# Common Errors in Reynolds Analysis\r
\r
## Conceptual errors\r
\r
### Error 1 : Confusion between dynamic and kinematic viscosity\r
**Why it seems correct**: Both represent resistance to flow and the names are almost identical in many handbooks.\r
**Why it is incorrect**: Mixing [[eta]] with [[nu]] in the same formula completely invalidates the dimensionless result. They have different dimensions (mass over length times time versus length squared over time).\r
**Detection signal**: The student obtains a result with units of meters or seconds instead of a pure number.\r
**Conceptual correction**: If you use density [[rho]], you must use dynamic viscosity [[eta]]. If you use kinematic viscosity [[nu]], you must not include density.\r
**Contrast mini-example**: Using [[nu]] on the order of 10 to the minus 6 instead of [[eta]] on the order of 10 to the minus 3 for water would give a Reynolds number 1000 times smaller than the real one.\r
\r
### Error 2 : Ignoring the thermal dependence of viscosity\r
**Why it seems correct**: In elementary physics problems, properties are often treated as universal constants.\r
**Why it is incorrect**: Viscosity [[eta]] is extremely sensitive to temperature. A 20 degrees Celsius increase can reduce viscosity by a factor of 10.\r
**Detection signal**: The same Reynolds number is assumed for freezing water as for near-boiling water if the velocity is the same.\r
**Conceptual correction**: Always check the fluid temperature before selecting the [[eta]] value from tables.\r
**Contrast mini-example**: An oil that flows laminarly at 20 degrees Celsius can become turbulent at 50 degrees Celsius with the same pump.\r
\r
## Model errors\r
\r
### Error 3 : Incorrect use of the characteristic length\r
**Why it seems correct**: The radius is the base geometric measure in most area and volume formulas.\r
**Why it is incorrect**: The standard criterion of critical Reynolds equal to 2300 was experimentally defined using the diameter [[L]]. Using the radius divides the result by two.\r
**Detection signal**: Misclassifying a flow as laminar with [[Re]] of 1150 when it is actually already at the critical threshold of 2300.\r
**Conceptual correction**: Remember that for closed ducts, the scale of the perturbation depends on the total width of the path.\r
**Contrast mini-example**: A 5cm pipe with a 2.5cm radius would give contradictory results if the correct scale is not used.\r
\r
### Error 4 : Universalizing the critical Reynolds value\r
**Why it seems correct**: The value 2300 is the most famous and is memorized as a single rule for all physics.\r
**Why it is incorrect**: Transition depends on geometry. On a flat plate or an airfoil, it occurs at values on the order of 10 to the power of 5 or 10 to the power of 6.\r
**Detection signal**: Applying 2300 to predict turbulence on an aircraft wing or a ship's hull.\r
**Conceptual correction**: The critical Reynolds number is a property of the system (fluid + geometry), not just the fluid.\r
**Contrast mini-example**: Using 2300 on an aircraft wing would predict turbulence at human walking speeds.\r
\r
## Mathematical errors\r
\r
### Error 5 : Failures in unit scaling\r
**Why it seems correct**: Pipes are commercially measured in mm or inches, and those values are entered directly.\r
**Why it is incorrect**: The International System requires meters for the dimensional cancellation of [[Re]] to be perfect.\r
**Detection signal**: Obtaining Reynolds numbers of impossible orders of magnitude (for example, on the order of 10 to the minus 2 for a river or 10 to the power of 15 for a faucet).\r
**Conceptual correction**: Always perform a prior conversion to meters for all lengths.\r
**Contrast mini-example**: Using 50 mm as "50" would give an error of factor 1000 compared to using 0.05 m.\r
\r
## Interpretation errors\r
\r
### Error 6 : Ignoring the unstable transition zone\r
**Why it seems correct**: A quick binary classification (laminar or turbulent) is sought to simplify calculations.\r
**Why it is incorrect**: Between 2300 and 4000, the flow is intermittent and chaotic; no simplified model is exact in this region.\r
**Detection signal**: Results that claim absolute precision in pressure drop at [[Re]] equal to 3000.\r
**Conceptual correction**: Always report the inherent uncertainty when the result falls in the transition zone.\r
**Contrast mini-example**: A flow sensor may give erratic readings if designed to operate exactly at [[Re]] around 3000.\r
\r
## Quick self-control rule\r
If increasing the diameter [[L]] twofold does not double your Reynolds number [[Re]] as well, check your formula: the relationship must be linear and the result must always be dimensionless.`;export{e as default};
