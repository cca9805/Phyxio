const e=`# Common Errors in Dynamics Problems: error taxonomy\r
\r
## Conceptual errors\r
\r
### Error 1: Confusing cause and effect\r
\r
**Why it seems correct**: The formula has multiple variables, and it is easy to lose track of which is the cause and which is the consequence.\r
\r
**The trap**: Thinking that a magnitude arises spontaneously without a cause generating it.\r
\r
**How to avoid it**: Always ask yourself: What force, what interaction, what principle generates this magnitude? The direction of causality matters.\r
\r
### Error 2: Applying the formula mechanically without validating context\r
\r
**Why it seems correct**: If the formula is in the textbook, should it not always work?\r
\r
**The trap**: Forgetting that every formula has hypotheses. Apply it outside those hypotheses and you will get nonsense.\r
\r
**How to avoid it**: Before calculating, ask: Are the hypotheses satisfied here? Is the system simple or complex? Am I within the validity range?\r
\r
### Error 3: Confusing similar magnitudes\r
\r
**Misinterpreted force [[fuerza_erronea]] vs a similar magnitude**\r
\r
Common error: Including inertial forces in non-inertial systems, or tensions in the full-system equation.\r
\r
How to distinguish them: Identify the physical role of each force. Internal forces appear in individual bodies but cancel in the global summation.\r
\r
**Sign of acceleration [[signo_aceleracion]] vs another similar magnitude**\r
\r
Common error: Mixing sign conventions between linked bodies.\r
\r
How to distinguish them: Choose a single positive direction for the whole system from the start and apply it consistently.\r
\r
### Error 4: Assuming N = m·g on all surfaces\r
\r
**Why it seems correct**: On a horizontal surface, the normal force equals the weight.\r
\r
**The trap**: On an inclined plane, the weight has two components. Only the perpendicular one equals the normal force.\r
\r
**How to avoid it**: Use [[componente_normal_erronea]] with the cosine projection:\r
\r
{{f:proyeccion_normal_plano}}\r
\r
Never assume [[componente_normal_erronea]] = [[masa_cuerpo]] x [[aceleracion_gravedad]] unless the surface is horizontal (θ = 0°).\r
\r
### Error 5: Including internal tension in the global force sum\r
\r
**Why it seems correct**: Tension is a real force, so it should appear in Newton law.\r
\r
**The trap**: Tension is an internal force of the system. In the global equation for all linked bodies, internal forces cancel in pairs and must not be added to [[F_ext_net]].\r
\r
**How to avoid it**: Define the system boundary first. Only forces crossing that boundary are external and contribute to [[F_ext_net]]. Apply:\r
\r
{{f:ley_newton_sistemas}}\r
\r
## Model errors\r
\r
### Error 6: Not recognising when the simplified model fails\r
\r
**Why it seems correct**: The ideal model works 90% of the time, so it is easy to rely on it even when inappropriate.\r
\r
**The trap**: In 10% of cases (complex real systems, high-energy systems, extreme scales) the model fails silently.\r
\r
**How to avoid it**: Develop the habit of asking: Is this a simple case or a complex one? What effects am I ignoring? Are they truly negligible?\r
\r
### Error 7: Ignoring known model limits\r
\r
**Why it seems correct**: If you learned the model, it seems it should always work.\r
\r
**The trap**: Naive extrapolation. Applying the model in a regime where it was never validated.\r
\r
**How to avoid it**: Always know the documented limits. Find them, understand them, respect them.\r
\r
## Mathematical errors\r
\r
### Error 8: Careless algebraic manipulation\r
\r
**Why it seems correct**: The rule of three always works in pure mathematics.\r
\r
**The trap**: In physics problems, context matters. A mathematically valid rearrangement can be physically meaningless.\r
\r
**How to avoid it**: After isolating a variable, check: Does the result have correct dimensions? Does the sign make sense? Is the order of magnitude reasonable?\r
\r
### Error 9: Forgetting fundamental constants or units\r
\r
**Why it seems correct**: Units seem like secondary administrative details.\r
\r
**The trap**: One wrongly converted unit ruins the entire calculation by ten orders of magnitude.\r
\r
**How to avoid it**: Convert all units to SI at the start. Check dimensions step by step, not just at the end.\r
\r
## Interpretation errors\r
\r
### Error 10: Interpreting a result as more precise than the model allows\r
\r
**Why it seems correct**: A number with many decimal places looks exact.\r
\r
**The trap**: The model has inherent uncertainty. Numerical precision does not reflect model precision.\r
\r
**How to avoid it**: Always express results with the level of precision the model justifies. If the model is 5% precise, your result does not merit more than 1-2 significant figures.\r
\r
## Quick self-control rule\r
\r
Use this mental checklist after solving a problem:\r
\r
Check — Does it have correct dimensions?\r
\r
Check — Is it physically reasonable? Is it within typical orders of magnitude?\r
\r
Check — Is the sign correct? Does it indicate a direction consistent with the problem?\r
\r
Check — Does it respect model limits? Am I in the range where the model was validated?\r
\r
Check — Can I explain what it means? If you cannot tell the physical story of the result, something is missing.\r
\r
If any of these points fails, re-examine your work before trusting the result.\r
`;export{e as default};
