const r=`# Common errors in resistors in parallel\r
\r
## Conceptual errors\r
### Error 1: Treating parallel as if it were series\r
Why it seems correct:\r
The visual list of resistors triggers direct-sum memory from series exercises.\r
\r
Detection signal:\r
Computed [[Req]] is higher than the smallest active branch resistance.\r
\r
Mini contrast example:\r
A passive parallel network must offer at least one additional conductive path.\r
\r
Conceptual correction:\r
Use reciprocal-resistance aggregation or direct conductance summation.\r
\r
### Error 2: Assuming equal branch currents because voltage is equal\r
Why it seems correct:\r
Equal branch voltage is confused with equal branch current.\r
\r
Detection signal:\r
[[I1]] and [[I2]] are reported identical while [[R1]] and [[R2]] differ strongly.\r
\r
Mini contrast example:\r
At fixed [[V]], lower branch resistance should draw higher branch current.\r
\r
Conceptual correction:\r
Separate voltage-equality rule from current-sharing rule in parallel blocks.\r
\r
## Model errors\r
### Error 3: Keeping a disconnected branch inside equations\r
Why it seems correct:\r
The initial diagram had three branches and the model is copied without topology update.\r
\r
Detection signal:\r
[[It]] prediction and measurement diverge systematically despite clean units.\r
\r
Mini contrast example:\r
An open branch contributes no conduction and must be removed from active closure.\r
\r
Conceptual correction:\r
Rebuild the active topology before computing equivalent quantities.\r
\r
### Error 4: Ignoring wiring resistance when current level makes it relevant\r
Why it seems correct:\r
Wiring is assumed ideal by default.\r
\r
Detection signal:\r
Measured branch sharing drifts from ideal prediction beyond operational tolerance.\r
\r
Mini contrast example:\r
Long wiring and higher branch demand can shift effective branch resistance.\r
\r
Conceptual correction:\r
Switch to extended model when discrepancy changes protection or reliability decisions.\r
\r
## Mathematical errors\r
### Error 5: Mixing ohm and kiloohm in one substitution chain\r
Why it seems correct:\r
Numbers look plausible and scale mismatch is not noticed.\r
\r
Detection signal:\r
Branch currents jump to impossible order for given source level.\r
\r
Mini contrast example:\r
A kiloohm branch under low-voltage supply cannot produce ampere-level current in linear regime.\r
\r
Conceptual correction:\r
Normalize units first, then perform substitution.\r
\r
### Error 6: Summing branch currents without fixed sign convention\r
Why it seems correct:\r
Partial results are copied with implicit direction assumptions.\r
\r
Detection signal:\r
[[It]] changes with equation writing order.\r
\r
Mini contrast example:\r
With one sign convention, nodal closure must be unique and reproducible.\r
\r
Conceptual correction:\r
Define direction references at start and keep them until final interpretation.\r
\r
## Interpretation errors\r
### Error 7: Declaring branch safe only from moderate current value\r
Why it seems correct:\r
Current seems moderate and local thermal context is ignored.\r
\r
Detection signal:\r
Localized overheating appears in one branch under sustained operation.\r
\r
Mini contrast example:\r
Similar branch currents may still produce different dissipation outcomes.\r
\r
Conceptual correction:\r
Interpret branch current together with thermal and protection constraints.\r
\r
### Error 8: Accepting arithmetic closure without physical trend check\r
Why it seems correct:\r
Equation closure is mistaken for full physical validation.\r
\r
Detection signal:\r
Adding a conductive branch appears to reduce source current at same supply voltage.\r
\r
Mini contrast example:\r
In passive parallel networks, higher total conductance should increase demand current.\r
\r
Conceptual correction:\r
Always include trend-based sanity check after symbolic closure.\r
\r
## Quick self-control rule\r
Before accepting any result, confirm four points: [[Req]] below each active branch value, branch-current closure consistent with [[It]], homogeneous units in all substitutions, and physically coherent trend when branches are added or removed.`;export{r as default};
