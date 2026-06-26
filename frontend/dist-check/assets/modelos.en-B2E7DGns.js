const e=`## Ideal model\r
The ideal model treats the capacitor as a purely reactive element with linear behavior and negligible losses. Under that assumption, [[Xc]] depends on [[omega]] and [[C]], [[Ic]] follows from [[V]] and reactance, and [[Qc]] captures reactive-exchange magnitude in steady sinusoidal regime.\r
\r
This model is highly useful for first-pass design and didactic clarity because it produces correct qualitative trends and often adequate quantitative estimates in controlled operating windows.\r
\r
## Hypotheses\r
First hypothesis: sinusoidal steady operation over the analysis window. Second hypothesis: near-linear component behavior within voltage and temperature range of interest. Third hypothesis: dielectric and series losses remain secondary relative to reactive behavior.\r
\r
A measurement hypothesis is also required: voltage and current values used in formulas are RMS-consistent and refer to the same operating state.\r
\r
## Quantitative validity domain\r
Operationally, the minimal model is robust when THD <= 5%, normalized frequency stays within 0.98 <= f_measured/f_nominal <= 1.02, and relative loss indicator remains small, for example ESR/[[Xc]] <= 0.10 in the main band.\r
\r
Thermal stability is another useful criterion. If effective capacitance drift exceeds about 5% during operation, model confidence should be reduced and recalibration of branch-current expectations is recommended.\r
\r
## Model failure signals\r
An early failure signal is trend mismatch: if frequency increases while measured branch current does not follow expected direction under fixed voltage, non-ideal effects may be dominant.\r
\r
A second signal is energetic mismatch: if branch behavior shows active-loss evidence beyond uncertainty bounds, pure-reactive interpretation is no longer sufficient. High cycle-to-cycle dispersion under nominally stable conditions is another warning sign.\r
\r
## Extended or alternative model\r
The next-level model includes equivalent series resistance, temperature dependence, and full complex-impedance interpretation when needed. This extension separates reactive exchange from losses and improves thermal-risk prediction.\r
\r
The explicit transition condition is practical: when it is convenient to change to an alternative model is exactly when ESR/[[Xc]] > 0.10, THD exceeds 5%, or frequency drift leaves operational bounds. In those cases, relying only on ideal equations can misguide engineering decisions.\r
\r
## Operational comparison\r
Ideal modeling is superior for conceptual clarity, fast sanity checks, and baseline estimation. Extended modeling is superior for final design validation, safety margins, and non-ideal operating environments.\r
\r
These are complementary layers, not competing doctrines. Professional quality comes from recognizing when ideal simplicity remains valid and when measurable evidence requires richer representation.\r
\r
A final operational note is implementation pace. In industrial teams, minimal and extended models often coexist during transition windows: the minimal model supports fast monitoring dashboards, while the extended model supports root-cause studies and final parameter tuning. Keeping both layers aligned improves decision traceability.`;export{e as default};
