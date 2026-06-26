## Ideal model

The ideal model assumes a resistive equivalent element, stable parameters, and coherent measurements of [[tension_electrica]] and [[corriente_electrica]] on the same component. Under these assumptions, power is directly obtained with:

{{f:potencia_base}}

For loads that are well represented by effective resistance, two derived forms are useful:

{{f:potencia_resistiva_corriente}}

{{f:potencia_resistiva_tension}}

For accumulated energy over a defined interval:

{{f:energia_desde_potencia}}

This model is strong for first-pass design and causal interpretation, but it neglects thermal drift of [[resistencia_electrica]], source limitations, and strong dynamic effects.

## Hypotheses

1. The main element can be represented by positive effective [[resistencia_electrica]].
2. [[tension_electrica]] and [[corriente_electrica]] measurements are simultaneous or representative of the same state.
3. Operation is quasi-steady over the analyzed interval.
4. Thermal variation does not dominate parameter drift in first estimation.
5. If the waveform varies, RMS or average values are correctly defined.

These hypotheses are operational constraints, not formal decorations.

## Quantitative validity domain

The ideal model is considered valid when:
1. [[resistencia_electrica]] > 0 and relative drift satisfies |Delta[[resistencia_electrica]]|/[[resistencia_electrica]] <= 0.05.
2. Difference between direct measured estimate and resistive estimate is <= 10%.
3. Peak-to-average ratio of [[potencia_electrica]] is <= 2 for single-average treatment.
4. Estimated component temperature remains below data-sheet limit with at least 10 C margin.

If any criterion fails, the model should be upgraded before final conclusions.

## Model failure signals

1. Computed [[potencia_electrica]] is inconsistent with observed heating.
2. [[tension_electrica]], [[corriente_electrica]], and inferred [[resistencia_electrica]] are not mutually coherent.
3. Resistance drift exceeds accepted threshold.
4. Reactive or switching behavior dominates operation.
5. Nominal power is exceeded even when average energy seems moderate.

These signs indicate missing physics in the simplified model.

## Extended or alternative model

An extended model introduces electrothermal coupling and non-ideal source behavior. [[resistencia_electrica]] becomes temperature-dependent, and power is analyzed over time segments or profile [[potencia_electrica]](t). A clear switching rule is recommended: if |Delta[[resistencia_electrica]]|/[[resistencia_electrica]] > 0.05 or formula disagreement exceeds 10%, migrate to the extended model.

In power electronics, switching is also advisable when repetitive current peaks approach thermal limits despite acceptable averages. Another useful alternative is a source model with internal resistance and current limiting, improving prediction of available [[potencia_electrica]] under load.

When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.

## Operational comparison

Ideal model:
1. Pros: fast, transparent, didactic, excellent for first estimates.
2. Cons: reduced fidelity under thermal nonlinearity and dynamic conditions.
3. Preferred use: preliminary design, magnitude checks, quick diagnostics.

Extended model:
1. Pros: better thermal realism and safer final decisions.
2. Cons: requires more measurements and computational effort.
3. Preferred use: validation near limits, failure analysis, final sizing.

The expert workflow is progressive: start simple, verify thresholds, then increase model depth when evidence demands it.