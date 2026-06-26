# Exam-type example


## Problem statement

A network voltage is modeled as an ideal sinusoidal signal. Known data include peak voltage [[amplitud_de_tension]], frequency [[frecuencia]], RMS current [[corriente_eficaz]], and phase shift [[phi]] between voltage and current. Build the temporal signal, compute [[omega]], determine [[periodo]], convert to [[tension_eficaz]], and estimate [[potencia_activa]] with full physical justification.

## Data

Given values: [[amplitud_de_tension]] = 325 V, [[frecuencia]] = 50 Hz, [[corriente_eficaz]] = 8 A, [[phi]] = 40 degrees. Work is performed in SI units under sinusoidal steady regime. The objective is not only numerical output but coherent traceability from temporal to energetic interpretation.

## System definition

The system is the source-load pair in periodic steady state. Independent variable is [[tiempo]], instantaneous signal is [[v_t]], and energetic interpretation is performed with [[tension_eficaz]], [[corriente_eficaz]], and [[potencia_activa]]. This separation prevents category mixing between state variables and summary quantities.

## Physical model

Adopted model is single-frequency pure sine with stable phase relation. In this model, temporal waveform is encoded by amplitude and phase, angular frequency is mapped from ordinary frequency, period is reciprocal of frequency, and active power is phase-aware.

Core quantities are explicitly linked: [[v_t]] for temporal state, [[omega]] and [[periodo]] for cycle structure, [[tension_eficaz]] and [[corriente_eficaz]] for energetic equivalence, and [[potencia_activa]] for useful transfer interpretation.

## Model justification

The model is justified because the statement assumes stable sinusoidal operation and does not indicate dominant distortion. Therefore, formula chain from this leaf is operationally consistent. If clipping or strong harmonics were present, model extension would be required.

## Symbolic solution

Instantaneous signal relation:

{{f:senal_sinusoidal}}

Angular-frequency conversion:

{{f:omega_f}}

[[periodo]] relation:

{{[[frecuencia]]:[[periodo]]}}

Peak-to-RMS conversion in pure sine:

{{f:valor_eficaz}}

Active-power relation:

{{[[frecuencia]]:[[potencia_activa]]}}

{{f:omega_f}}

{{f:periodo}}

## Numerical substitution

With [[frecuencia]] = 50 Hz, angular frequency [[omega]] is approximately 314 rad/s. [[periodo]] [[periodo]] is 0.02 s, consistent with standard 50 Hz operation. From [[amplitud_de_tension]] = 325 V, [[tension_eficaz]] is about 230 V under pure-sine assumption. Using [[corriente_eficaz]] = 8 A and [[phi]] = 40 degrees, active power [[potencia_activa]] is in the order of 1.4 kW.

The structural meaning matters more than exact rounding: amplitude sets temporal scale, frequency sets cycle rhythm, phase controls useful-transfer fraction, and RMS bridges waveform description to energetic criteria.

## Dimensional validation

Dimensional closure is consistent across all steps. [[omega]] is in rad/s, [[periodo]] in seconds, [[tension_eficaz]] in volts, and [[potencia_activa]] in watts. Frequency-period reciprocity is numerically satisfied, and RMS conversion preserves expected magnitude relation between peak and effective values.

Physical validation also closes: non-zero phase shift implies active transfer below the naive product of RMS magnitudes alone.

## Physical interpretation

This case demonstrates that high peak amplitude does not automatically imply maximal useful active transfer. Phase shift reorganizes energetic outcome, so two loads with similar RMS current can still deliver different active power.

It also demonstrates measurement-layer discipline: oscilloscope and RMS meter report different but complementary quantities. Confusing them leads to systematic interpretation errors.

A physically rich interpretation goes beyond reporting watts. It explains why the value appears, what assumptions sustain it, and how the result would evolve if phase relation or waveform quality changed. That causal reading is what makes the calculation operationally useful.

The example also reinforces model accountability: equations are not interchangeable recipes, but conditional relations tied to signal regime. Respecting those conditions is essential for trustworthy engineering conclusions.

# Real-world example


## Context

In an industrial maintenance lab, an AC line shows stable RMS voltage but reduced process performance and thermal stress. Before changing hardware, the team performs an AC-quantity diagnostic to separate temporal, frequency, and energetic causes.

## Physical estimation

The technician records [[amplitud_de_tension]], [[frecuencia]], [[corriente_eficaz]], and [[phi]] under operating conditions. First, temporal consistency is checked using [[omega]] and [[periodo]]. Then RMS conversion is validated in waveform regions close to sinusoidal behavior. Finally, [[potencia_activa]] is estimated and compared to expected useful demand.

Results indicate adequate amplitude but phase-related reduction in useful active transfer. This prevents incorrect interventions such as replacing source hardware without phase-context verification.

The estimate also clarifies next-step strategy: if waveform remains near sinusoidal, phase-aware operational correction may be sufficient; if distortion is significant, harmonic model extension becomes necessary before action.

In practice, this stage also documents uncertainty sources: instrument bandwidth, synchronization quality, and repeatability across cycles. Including those notes strengthens confidence in the diagnosis and prevents overconfident single-shot decisions.

A second practical estimate is sensitivity: evaluate whether small phase variations would materially change active transfer. If sensitivity is high, monitoring and control priorities must include phase stability, not only amplitude tracking.

## Interpretation

The real application confirms that AC quantities is a diagnostic framework, not a notation exercise. It enables clear separation of scale errors, timing errors, and energetic errors. With that separation, interventions become evidence-based and technically defensible.

It also reinforces method hierarchy: first close quantity consistency, then close model validity, then decide intervention depth. This sequence reduces cost and avoids false conclusions.

From a learning perspective, the example demonstrates that interpretation quality determines intervention quality. Better language about quantities leads to better technical choices, fewer replacements without evidence, and more predictable corrective outcomes.