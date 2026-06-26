const e=`# Exam-type example\r
\r
## Problem statement\r
A series RLC branch fed by a sinusoidal source operates at a frequency for which reactances have already been evaluated. The known data are [[R]] equal to 40 ohm, [[Xl]] equal to 90 ohm, [[Xc]] equal to 50 ohm, and [[V]] equal to 230 volts RMS. The task is to determine [[Z]], [[I]], [[phi]], [[P]], [[Q]], and [[S]], classify the branch, and explain whether the load is using source capacity in a reasonable way.\r
\r
## Data\r
The problem data are already expressed in the correct language of the leaf: resistive part [[R]], inductive reactance [[Xl]], capacitive reactance [[Xc]], and effective voltage [[V]]. This avoids the preliminary step of reconstructing component values and allows the analysis to focus on structure. The most valuable information is not only numerical: [[Xl]] exceeds [[Xc]], so the branch suggests inductive behaviour from the beginning.\r
\r
## System definition\r
The chosen system is the whole series branch connected to the source. The goal is not to isolate each element but to read the global behaviour of the load through [[Z]], [[I]], [[phi]], [[P]], [[Q]], and [[S]]. The system boundary coincides with the supply terminals, and interpretation is performed in sinusoidal steady state with RMS values. This definition avoids confusing mean transfer with internal alternating storage.\r
\r
## Physical model\r
The physical model is a linear series RLC branch in steady regime. In that framework, [[R]] represents the in-phase part, while [[Xl]] together with [[Xc]] build the net reactive part that determines [[Z]] and [[phi]]. Current [[I]] is fixed by [[V]] and the magnitude of [[Z]], whereas [[P]], [[Q]], and [[S]] organize the energetic reading of the case. The example is strongly anchored to the leaf because it depends directly on how [[R]], [[Xl]], and [[Xc]] combine in one AC load.\r
\r
## Model justification\r
The model is justified because the statement already provides [[Xl]] and [[Xc]] at one common frequency, does not mention nonlinearities or multiple frequency bands, and treats the branch as a series equivalent. This makes the closed chain of the leaf coherent. If the case involved saturation, strong harmonics, parallel topology, or dominant parasitics, another model would be required. Here the goal is precisely to diagnose how total opposition and phase shift redistribute source demand.\r
\r
## Symbolic solution\r
The total impedance is obtained with:\r
\r
{{f:impedancia_rlc}}\r
\r
The effective current is obtained with:\r
\r
{{f:corriente_total}}\r
\r
The branch phase shift is interpreted with:\r
\r
{{f:desfase_rlc}}\r
\r
Active power is obtained with:\r
\r
{{f:potencia_activa}}\r
\r
Reactive power is obtained with:\r
\r
{{f:potencia_reactiva}}\r
\r
Apparent power is obtained with:\r
\r
{{f:potencia_aparente}}\r
\r
## Numerical substitution\r
The reactive imbalance is 40 ohm in favour of the inductive part because [[Xl]] exceeds [[Xc]] by that amount. With this datum, [[Z]] is about 56.6 ohm. The current [[I]] associated with [[V]] equal to 230 volts RMS is close to 4.06 amperes. The angle [[phi]] is positive and close to 45 degrees, which confirms that the branch is inductive and that the power factor is still far from one.\r
\r
With these results, [[S]] is in the order of 934 VA. Active power [[P]] is around 660 W, while [[Q]] remains of comparable order with inductive sign under the convention of the leaf. The important point is not the last decimal place but the structure: the load absorbs meaningful active power while forcing the source to sustain a considerably larger total demand because phase shift still matters.\r
\r
## Dimensional validation\r
Dimensional validation closes at every stage. [[Z]], [[R]], [[Xl]], and [[Xc]] all share the ohm unit, so the relation leading to [[Z]] preserves electrical meaning. Dividing [[V]] by [[Z]] yields amperes for [[I]], and combining [[V]] with [[I]] yields apparent-power units for [[S]]. When projected with cosine or sine, [[P]] and [[Q]] remain power magnitudes.\r
\r
Conceptual validation is also correct. [[Z]] is greater than [[R]], [[P]] remains below [[S]], and the positive sign of [[phi]] matches the fact that [[Xl]] dominates over [[Xc]]. This means the problem is not only correctly computed but also correctly interpreted.\r
\r
## Physical interpretation\r
Physically, the branch is not close to compensation. The inductive contribution dominates clearly and therefore the load demands a current that the source must sustain even though not all of it becomes [[P]]. The difference between [[S]] and [[P]] is not an arithmetic detail: it expresses network capacity occupied by a load whose phase displacement still matters operationally.\r
\r
From a technical viewpoint, the case suggests two conclusions. First, the load can work, but it is not optimized from the viewpoint of total demand. Second, a compensation strategy could reduce [[Q]] and bring [[S]] closer to [[P]], although that improvement should be evaluated without pushing the circuit into excessive sensitivity or overcurrent. That is the lesson of the example: compensation should not be performed blindly but interpreted through the structure of the problem.\r
\r
# Real-world example\r
\r
## Context\r
An industrial test bench feeds an equivalent RLC load associated with a transformer, an adjustable coil, and a compensation capacitor. The maintenance engineer observes that line current is high compared with measured useful power and wants to know whether the issue is purely resistive or whether the branch is using source capacity inefficiently.\r
\r
## Physical estimation\r
Instrument readings provide an equivalent set with [[R]] in the order of tens of ohms, [[Xl]] clearly larger than [[Xc]], an industrial-level [[V]], and a current [[I]] several amperes above what a purely resistive intuition would suggest. The first diagnosis does not require extreme precision. It requires a structural comparison between [[P]], [[Q]], and [[S]]. If the gap between [[S]] and [[P]] is large and the sign of [[phi]] confirms inductive dominance, the most reasonable hypothesis is poor power factor.\r
\r
The valid physical estimate is this: even without reconstructing every internal detail of the bench, the split between [[P]] and [[Q]] already tells whether the source is transporting excessive reactive demand. If the process must preserve the same useful power, lowering [[Q]] through compensation can reduce [[S]] and therefore the stress on source, protections, and wiring. That effect is invisible if one looks only at active power.\r
\r
## Interpretation\r
The practical lesson of the case is that an RLC load is managed badly when only useful consumption is observed. Technical operation requires the load to be read as a combination of active and reactive demand. In this context, [[Q]] is not decorative theory; it is a network criterion. If it is ignored, the system may keep operating while occupying much more electrical capacity than necessary.\r
\r
The model choice also becomes clear here. For preliminary maintenance, the linear series equivalent is sufficient and operational. It allows the engineer to decide whether further measurements are worthwhile, whether compensation is needed, and whether the observed current is coherent with the phasor structure of the load. Only when the decision requires higher precision does it become necessary to move to a richer model. That scaling of reasoning is one of the central competences of the leaf.`;export{e as default};
