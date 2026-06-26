# Exam-type example


## Problem statement

A DC source drives a one-loop series chain made of three resistors [[resistencia_uno]], [[resistencia_dos]], and [[resistencia_tres]]. The task is to compute total equivalent resistance [[resistencia_equivalente]], common [[corriente]] [[corriente]], and local drops [[caida_de_tension]] across each element. The statement also requires a physical explanation of why [[corriente]] remains common while voltage is distributed, and it asks for a consistency check against total source voltage [[tension_total]].

The exam emphasis is not only numerical completion. It explicitly asks for model justification and interpretation quality. Therefore, an acceptable solution must connect equations to topology, identify validity assumptions, and explain whether the obtained drop pattern is physically reasonable for the given resistance hierarchy.

## Data

Known inputs are:

- [[resistencia_uno]] in low-to-mid ohm scale.
- [[resistencia_dos]] in mid ohm scale.
- [[resistencia_tres]] in a higher ohm scale than at least one other element.
- [[tension_total]] in typical laboratory DC range.

No thermal coefficients or uncertainty intervals are provided in the baseline statement, so first-pass solving uses ideal linear behavior. A short sensitivity comment is then added to assess what would change if one [[resistencia_generica]] drifts with temperature.

## System definition

The system boundary is the full loop, including source and all three resistors. Since there is no branch splitting, the topology is strict series and the flow variable [[corriente]] is single-valued across all components.

Input set: [[resistencia_uno]], [[resistencia_dos]], [[resistencia_tres]], [[tension_total]].
Output set: [[resistencia_equivalente]], [[corriente]], and each local [[caida_de_tension]].
Generic symbol [[resistencia_generica]] is used when discussing local relations independent of element index.

This system definition matters because it determines admissible equations. Using parallel reduction or branch-current rules would contradict the defined topology and produce formally polished but physically invalid results.

## Physical model

The model assumes passive ohmic resistors, steady-state DC, and negligible parasitic branching. Under these assumptions, total opposition is represented by [[resistencia_equivalente]], global [[corriente]] by [[corriente]], and local drop by [[caida_de_tension]] on each element.

The model structure is hierarchical. A global stage determines the operating regime of the chain, and a local stage distributes source effect according to each [[resistencia_generica]]. This hierarchy is physically meaningful: local quantities do not float freely, they inherit constraints from global loop conditions.

## Model justification

The model is justified by topology and operating regime. Topology gives a single [[corriente]] path, therefore common [[corriente]] is physically required. Operating regime is low-frequency DC with linear resistive behavior, so proportional voltage-current relations are valid.

Justification is also conditional. If output loading becomes strong in a divider use case, the effective network is no longer the original series chain and ideal allocation fails. If resistor values shift significantly with self-heating, static [[resistencia_generica]] assumptions become weak. Therefore, this model is explicit about when it is valid and when escalation to an extended model is necessary.

## Symbolic solution

Global equivalent stage:

{{f:req_serie}}

{{f:Req_formula}}

Global [[corriente]] stage:

{{f:i_total}}

{{f:I_formula}}

Local drop stage:

{{f:caida_ohm}}

{{f:Vi_formula}}

Divider check stage:

{{f:divisor}}

Loop-closure check:

{{f:Vt_formula}}

## Numerical substitution

Numerical substitution follows the symbolic order to avoid hidden dependency errors. First compute [[resistencia_equivalente]] from [[resistencia_uno]], [[resistencia_dos]], and [[resistencia_tres]]. Second compute [[corriente]] from [[tension_total]] and [[resistencia_equivalente]]. Third compute each [[caida_de_tension]] using common [[corriente]] and each local [[resistencia_generica]].

At this step, scale reading is mandatory. If [[resistencia_equivalente]] is in hundreds of ohms and [[tension_total]] is in tens of volts, [[corriente]] should land around tenths or hundredths of ampere, not in high-amp ranges. This scale filter catches unit mistakes before they propagate into power checks.

## Dimensional validation

Dimensional validation is performed at three layers:

- Equivalent layer: resistance plus resistance keeps ohm units.
- Current layer: volt divided by ohm yields ampere.
- Local layer: ampere multiplied by ohm yields volt for [[caida_de_tension]].

Then loop closure is checked with source [[tension_total]]. If both sides are in volt and numerically compatible under one sign convention, the solution is dimensionally and physically coherent.

## Physical interpretation

The computed pattern represents constrained energy distribution. The element with higher [[resistencia_generica]] captures a larger share of [[tension_total]], so it tends to carry a higher local electrical stress. This is a direct consequence of single-path [[corriente]] and resistance-weighted allocation, not a numerical coincidence.

Causally, changing one resistor affects both local and global behavior. Locally, its own [[caida_de_tension]] changes. Globally, [[resistencia_equivalente]] shifts, which changes [[corriente]] for the entire branch. This dual impact explains why component tuning in series is a system-level action.

This interpretation is physically richer than a table of numbers because it predicts behavior under change. If source [[tension_total]] rises while resistors remain fixed, [[corriente]] increases everywhere at once and each local drop scales coherently with resistance share. If one resistor value drifts with temperature, allocation shifts and thermal load can migrate to a different element. Therefore the model supports decisions about margin, not only arithmetic completion.

# Real-world example


## Context

A low-current reference stage must be fed from a fixed source [[tension_total]] using a two-resistor series divider. The design target is a stable output fraction while keeping branch [[corriente]] [[corriente]] moderate to limit heating and improve reliability. The stage is expected to operate continuously, so drift and loading sensitivity are practical concerns.

The engineering question is whether ideal series design is sufficient for first deployment. If load impedance is much larger than divider resistance scale, ideal allocation is acceptable. If not, the effective network is altered and output calibration will drift under operating conditions.

## Physical estimation

An order-of-magnitude estimate starts with total divider [[resistencia_equivalente]]. If [[resistencia_equivalente]] is in kiloohm range and [[tension_total]] is around a few to a few tens of volts, [[corriente]] should be in milliamp range. That level usually supports low-power reference behavior with manageable dissipation.

Next, output [[caida_de_tension]] is estimated by resistance ratio. If one resistor contributes about two thirds of total [[resistencia_equivalente]], the corresponding drop should be near two thirds of [[tension_total]]. This quantitative estimate provides a rapid feasibility gate before full tolerance analysis.

A practical safety estimate then checks worst-case drop under resistor tolerance spread. Even if nominal behavior is correct, tolerance accumulation can push output outside allowable reference windows.

## Interpretation

This real example yields a design rule: series divider design is efficient for low-current references when load interaction is weak and resistor spread is controlled. The physics behind that rule is straightforward but nontrivial: common [[corriente]] sets global energy throughput, while each [[resistencia_generica]] determines how much of [[tension_total]] is converted locally.

Therefore, good interpretation combines causality and limits. If load impedance decreases, the model boundary must expand. If temperature drift increases, static [[resistencia_generica]] assumptions must be revisited. With those conditions stated explicitly, the final answer is not just numerically correct but operationally trustworthy.

The same interpretation also explains failure modes. If one resistor drifts upward, output [[caida_de_tension]] can move in the desired direction while total [[corriente]] drops, creating a false impression of improved safety. In reality, local dissipation can still rise in a specific element depending on allocation, so thermal verification remains mandatory. This is why engineering interpretation cannot stop at one metric.

A physically complete reading links numbers to decisions: keep load impedance high enough, choose resistor tolerances matched to reference accuracy, and confirm power margin in worst-case conditions. Under those constraints, the divider is not only a solved exercise but a controllable subsystem with predictable behavior.