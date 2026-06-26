const n=`## Conceptual errors\r
\r
### Error 1: treating conservation as no change at all\r
\r
**Why it seems correct**\r
Students often read "conserved" as "every term stays fixed".\r
\r
**Why it is incorrect**\r
Conservation applies to the global accounting, not to each term separately. [[Ki]] may decrease while [[Uf]] increases, and the full state reading can still be consistent with [[Em]].\r
\r
**Detection signal**\r
The explanation claims that if energy is conserved then speed cannot change.\r
\r
**Conceptual correction**\r
State clearly that conservation means a preserved global balance, not frozen component values.\r
\r
## Model errors\r
\r
### Error 1: enforcing ideal conservation with visible dissipation\r
\r
**Why it seems correct**\r
Problem statements do not always mention friction explicitly.\r
\r
**Why it is incorrect**\r
If losses are physically relevant, [[Wnc]] must be included. Otherwise strict conservation is an invalid model assumption.\r
\r
**Detection signal**\r
Predicted [[Kf]] is repeatedly higher than measured outcomes.\r
\r
**Conceptual correction**\r
Switch to a transfer-aware balance and justify the sign of [[Wnc]] physically.\r
\r
## Mathematical errors\r
\r
### Error 1: accepting negative kinetic outputs\r
\r
**Why it seems correct**\r
The algebra chain looks clean.\r
\r
**Why it is incorrect**\r
[[K]] and [[Kf]] are nonnegative in classical mechanics. Negative results indicate sign, model, or unit issues.\r
\r
**Detection signal**\r
Computed [[Kf]] is below zero.\r
\r
**Conceptual correction**\r
Review unit consistency, baseline consistency for [[U]], and the sign convention for [[Wnc]].\r
\r
## Interpretation errors\r
\r
### Error 1: closing with a number only\r
\r
**Why it seems correct**\r
The numeric value matches expected answers.\r
\r
**Why it is incorrect**\r
Without causal interpretation, the model choice remains unvalidated and transfer to new problems is weak.\r
\r
**Detection signal**\r
The student cannot explain what changes if losses increase or baseline changes.\r
\r
**Conceptual correction**\r
Add a one-sentence causal close: which term grows, which term decreases, and why.\r
\r
## Quick self-control rule\r
\r
Before submission, run this 30-second checklist:\r
\r
1. System boundary is explicit.\r
2. [[Ui]] and [[Uf]] use one baseline.\r
3. [[Wnc]] sign is physically justified.\r
4. [[Kf]] and [[K]] are physically admissible.\r
5. Final reading explains how [[Em]] was redistributed.\r
\r
This compact rule removes most recurring mistakes and turns a numerical answer into a physically defensible conclusion.`;export{n as default};
