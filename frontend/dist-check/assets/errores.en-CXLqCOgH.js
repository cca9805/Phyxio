const r=`## Conceptual errors\r
### Error 1: Mixing [[P]] and [[E]]\r
Treating watts as accumulated energy leads to invalid comparisons.\r
Fix: keep [[P]] as rate and [[E]] as accumulation through:\r
\r
{{f:energia_desde_potencia}}\r
\r
### Error 2: Assuming high power is always desirable\r
Without thermal context, higher [[P]] may indicate overload rather than performance.\r
Fix: always compare with rating and cooling capability.\r
\r
### Error 3: Using equations as endpoints\r
A numeric result is reported without physical meaning.\r
Fix: add causal interpretation with dominant variable and limiting condition.\r
\r
## Model errors\r
### Error 1: Applying resistive forms outside resistive regime\r
Using resistive-voltage form for strongly non-resistive loads gives biased estimates.\r
Fix: start from direct measured relation with [[V]] and [[I]].\r
\r
### Error 2: Assuming constant [[R]] despite thermal rise\r
Material heating can shift effective resistance.\r
Fix: if resistance drift exceeds 5%, switch to an extended model.\r
\r
### Error 3: Ignoring source non-ideality\r
Voltage sag under load changes effective power.\r
Fix: measure under real load or include source internal model.\r
\r
## Mathematical errors\r
### Error 1: Time-unit mismatch\r
Minutes or hours are inserted into SI equations without conversion.\r
Fix: convert [[t]] to seconds for joule-based energy in SI.\r
\r
### Error 2: Premature rounding\r
Intermediate truncation can distort margin decisions.\r
Fix: preserve precision and round only at final reporting.\r
\r
### Error 3: Missing dimensional check\r
Numbers are accepted without unit consistency.\r
Fix: verify units for every equation used.\r
\r
## Interpretation errors\r
### Error 1: Looking only at averages\r
Average [[P]] can hide damaging peaks.\r
Fix: inspect maxima when switching or startup exists.\r
\r
### Error 2: Skipping nominal comparison\r
Computed [[P]] is reported without rating contrast.\r
Fix: include explicit rating margin check.\r
\r
### Error 3: Ignoring measurement uncertainty\r
Small uncertainty in [[V]] or [[I]] can amplify in squared relations.\r
Fix: report likely interval when decision depends on narrow margins.\r
\r
## Quick self-control rule\r
1. Am I reporting [[P]] or [[E]]?\r
2. Is the chosen model valid for this regime?\r
3. Are units and dimensions coherent?\r
4. Is [[P]] below rating with margin?\r
5. Does the conclusion explain physics, not only arithmetic?`;export{r as default};
