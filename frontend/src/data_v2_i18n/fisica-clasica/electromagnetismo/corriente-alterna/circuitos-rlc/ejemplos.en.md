# Exam-type example


## Problem statement

A series RLC branch fed by a sinusoidal source operates at a frequency for which reactances have already been evaluated. The known data are [[resistencia_serie]] equal to 40 ohm, [[reactancia_inductiva]] equal to 90 ohm, [[reactancia_capacitiva]] equal to 50 ohm, and [[tension_rms]] equal to 230 volts RMS. The task is to determine [[impedancia_total]], [[corriente_rms]], [[phi]], [[potencia_activa]], [[potencia_reactiva]], and [[potencia_aparente]], classify the branch, and explain whether the load is using source capacity in a reasonable way.

## Data

The problem data are already expressed in the correct language of the leaf: resistive part [[resistencia_serie]], inductive reactance [[reactancia_inductiva]], capacitive reactance [[reactancia_capacitiva]], and effective voltage [[tension_rms]]. This avoids the preliminary step of reconstructing component values and allows the analysis to focus on structure. The most valuable information is not only numerical: [[reactancia_inductiva]] exceeds [[reactancia_capacitiva]], so the branch suggests inductive behaviour from the beginning.

## System definition

The chosen system is the whole series branch connected to the source. The goal is not to isolate each element but to read the global behaviour of the load through [[impedancia_total]], [[corriente_rms]], [[phi]], [[potencia_activa]], [[potencia_reactiva]], and [[potencia_aparente]]. The system boundary coincides with the supply terminals, and interpretation is performed in sinusoidal steady state with RMS values. This definition avoids confusing mean transfer with internal alternating storage.

## Physical model

The physical model is a linear series RLC branch in steady regime. In that framework, [[resistencia_serie]] represents the in-phase part, while [[reactancia_inductiva]] together with [[reactancia_capacitiva]] build the net reactive part that determines [[impedancia_total]] and [[phi]]. Current [[corriente_rms]] is fixed by [[tension_rms]] and the magnitude of [[impedancia_total]], whereas [[potencia_activa]], [[potencia_reactiva]], and [[potencia_aparente]] organize the energetic reading of the case. The example is strongly anchored to the leaf because it depends directly on how [[resistencia_serie]], [[reactancia_inductiva]], and [[reactancia_capacitiva]] combine in one AC load.

## Model justification

The model is justified because the statement already provides [[reactancia_inductiva]] and [[reactancia_capacitiva]] at one common frequency, does not mention nonlinearities or multiple frequency bands, and treats the branch as a series equivalent. This makes the closed chain of the leaf coherent. If the case involved saturation, strong harmonics, parallel topology, or dominant parasitics, another model would be required. Here the goal is precisely to diagnose how total opposition and phase shift redistribute source demand.

## Symbolic solution

The total impedance is obtained with:

{{f:impedancia_rlc}}

The effective current is obtained with:

{{f:corriente_total}}

The branch phase shift is interpreted with:

{{f:desfase_rlc}}

Active power is obtained with:

{{f:potencia_activa}}

Reactive power is obtained with:

{{f:potencia_reactiva}}

Apparent power is obtained with:

{{f:potencia_aparente}}

## Numerical substitution

The reactive imbalance is 40 ohm in favour of the inductive part because [[reactancia_inductiva]] exceeds [[reactancia_capacitiva]] by that amount. With this datum, [[impedancia_total]] is about 56.6 ohm. The current [[corriente_rms]] associated with [[tension_rms]] equal to 230 volts RMS is close to 4.06 amperes. The angle [[phi]] is positive and close to 45 degrees, which confirms that the branch is inductive and that the power factor is still far from one.

With these results, [[potencia_aparente]] is in the order of 934 VA. Active power [[potencia_activa]] is around 660 W, while [[potencia_reactiva]] remains of comparable order with inductive sign under the convention of the leaf. The important point is not the last decimal place but the structure: the load absorbs meaningful active power while forcing the source to sustain a considerably larger total demand because phase shift still matters.

## Dimensional validation

Dimensional validation closes at every stage. [[impedancia_total]], [[resistencia_serie]], [[reactancia_inductiva]], and [[reactancia_capacitiva]] all share the ohm unit, so the relation leading to [[impedancia_total]] preserves electrical meaning. Dividing [[tension_rms]] by [[impedancia_total]] yields amperes for [[corriente_rms]], and combining [[tension_rms]] with [[corriente_rms]] yields apparent-power units for [[potencia_aparente]]. When projected with cosine or sine, [[potencia_activa]] and [[potencia_reactiva]] remain power magnitudes.

Conceptual validation is also correct. [[impedancia_total]] is greater than [[resistencia_serie]], [[potencia_activa]] remains below [[potencia_aparente]], and the positive sign of [[phi]] matches the fact that [[reactancia_inductiva]] dominates over [[reactancia_capacitiva]]. This means the problem is not only correctly computed but also correctly interpreted.

## Physical interpretation

Physically, the branch is not close to compensation. The inductive contribution dominates clearly and therefore the load demands a current that the source must sustain even though not all of it becomes [[potencia_activa]]. The difference between [[potencia_aparente]] and [[potencia_activa]] is not an arithmetic detail: it expresses network capacity occupied by a load whose phase displacement still matters operationally.

From a technical viewpoint, the case suggests two conclusions. First, the load can work, but it is not optimized from the viewpoint of total demand. Second, a compensation strategy could reduce [[potencia_reactiva]] and bring [[potencia_aparente]] closer to [[potencia_activa]], although that improvement should be evaluated without pushing the circuit into excessive sensitivity or overcurrent. That is the lesson of the example: compensation should not be performed blindly but interpreted through the structure of the problem.

# Real-world example


## Context

An industrial test bench feeds an equivalent RLC load associated with a transformer, an adjustable coil, and a compensation capacitor. The maintenance engineer observes that line current is high compared with measured useful power and wants to know whether the issue is purely resistive or whether the branch is using source capacity inefficiently.

## Physical estimation

Instrument readings provide an equivalent set with [[resistencia_serie]] in the order of tens of ohms, [[reactancia_inductiva]] clearly larger than [[reactancia_capacitiva]], an industrial-level [[tension_rms]], and a current [[corriente_rms]] several amperes above what a purely resistive intuition would suggest. The first diagnosis does not require extreme precision. It requires a structural comparison between [[potencia_activa]], [[potencia_reactiva]], and [[potencia_aparente]]. If the gap between [[potencia_aparente]] and [[potencia_activa]] is large and the sign of [[phi]] confirms inductive dominance, the most reasonable hypothesis is poor power factor.

The valid physical estimate is this: even without reconstructing every internal detail of the bench, the split between [[potencia_activa]] and [[potencia_reactiva]] already tells whether the source is transporting excessive reactive demand. If the process must preserve the same useful power, lowering [[potencia_reactiva]] through compensation can reduce [[potencia_aparente]] and therefore the stress on source, protections, and wiring. That effect is invisible if one looks only at active power.

## Interpretation

The practical lesson of the case is that an RLC load is managed badly when only useful consumption is observed. Technical operation requires the load to be read as a combination of active and reactive demand. In this context, [[potencia_reactiva]] is not decorative theory; it is a network criterion. If it is ignored, the system may keep operating while occupying much more electrical capacity than necessary.

The model choice also becomes clear here. For preliminary maintenance, the linear series equivalent is sufficient and operational. It allows the engineer to decide whether further measurements are worthwhile, whether compensation is needed, and whether the observed current is coherent with the phasor structure of the load. Only when the decision requires higher precision does it become necessary to move to a richer model. That scaling of reasoning is one of the central competences of the leaf.