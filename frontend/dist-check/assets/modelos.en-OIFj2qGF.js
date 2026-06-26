const e=`## Ideal model\r
The ideal model assumes a resistive equivalent element, stable parameters, and coherent measurements of [[V]] and [[I]] on the same component. Under these assumptions, power is directly obtained with:\r
\r
{{f:potencia_base}}\r
\r
For loads that are well represented by effective resistance, two derived forms are useful:\r
\r
{{f:potencia_resistiva_corriente}}\r
\r
{{f:potencia_resistiva_tension}}\r
\r
For accumulated energy over a defined interval:\r
\r
{{f:energia_desde_potencia}}\r
\r
This model is strong for first-pass design and causal interpretation, but it neglects thermal drift of [[R]], source limitations, and strong dynamic effects.\r
\r
## Hypotheses\r
1. The main element can be represented by positive effective [[R]].\r
2. [[V]] and [[I]] measurements are simultaneous or representative of the same state.\r
3. Operation is quasi-steady over the analyzed interval.\r
4. Thermal variation does not dominate parameter drift in first estimation.\r
5. If the waveform varies, RMS or average values are correctly defined.\r
\r
These hypotheses are operational constraints, not formal decorations.\r
\r
## Quantitative validity domain\r
The ideal model is considered valid when:\r
1. [[R]] > 0 and relative drift satisfies |Delta[[R]]|/[[R]] <= 0.05.\r
2. Difference between direct measured estimate and resistive estimate is <= 10%.\r
3. Peak-to-average ratio of [[P]] is <= 2 for single-average treatment.\r
4. Estimated component temperature remains below data-sheet limit with at least 10 C margin.\r
\r
If any criterion fails, the model should be upgraded before final conclusions.\r
\r
## Model failure signals\r
1. Computed [[P]] is inconsistent with observed heating.\r
2. [[V]], [[I]], and inferred [[R]] are not mutually coherent.\r
3. Resistance drift exceeds accepted threshold.\r
4. Reactive or switching behavior dominates operation.\r
5. Nominal power is exceeded even when average energy seems moderate.\r
\r
These signs indicate missing physics in the simplified model.\r
\r
## Extended or alternative model\r
An extended model introduces electrothermal coupling and non-ideal source behavior. [[R]] becomes temperature-dependent, and power is analyzed over time segments or profile [[P]](t). A clear switching rule is recommended: if |Delta[[R]]|/[[R]] > 0.05 or formula disagreement exceeds 10%, migrate to the extended model.\r
\r
In power electronics, switching is also advisable when repetitive current peaks approach thermal limits despite acceptable averages. Another useful alternative is a source model with internal resistance and current limiting, improving prediction of available [[P]] under load.\r
\r
## Operational comparison\r
Ideal model:\r
1. Pros: fast, transparent, didactic, excellent for first estimates.\r
2. Cons: reduced fidelity under thermal nonlinearity and dynamic conditions.\r
3. Preferred use: preliminary design, magnitude checks, quick diagnostics.\r
\r
Extended model:\r
1. Pros: better thermal realism and safer final decisions.\r
2. Cons: requires more measurements and computational effort.\r
3. Preferred use: validation near limits, failure analysis, final sizing.\r
\r
The expert workflow is progressive: start simple, verify thresholds, then increase model depth when evidence demands it.`;export{e as default};
