## Ideal model

The ideal model assumes pure sinusoidal waveform, stable frequency, and stationary operating regime. Under this framework, temporal behavior is encoded by [[v_t]], [[omega]], [[frecuencia]], [[periodo]], and [[phi]], while energetic behavior is summarized through [[tension_eficaz]], [[corriente_eficaz]], and [[potencia_activa]].

This model is valuable because it provides a compact and operational language for AC interpretation. It does not capture every real-network effect, but it offers a reliable first-order structure for analysis, teaching, and diagnosis.

## Hypotheses

First hypothesis: periodic stability. The waveform pattern remains sufficiently stable over the measurement window. Second hypothesis: practical linearity in operating range, so parameter relations do not drift strongly during analysis. Third hypothesis: dominant fundamental component with limited distortion.

A metrological hypothesis is also required: RMS, phase, and frequency values must come from the same operating state and reference convention.

## Quantitative validity domain

As a practical criterion, the basic model is robust when THD <= 5 percent and relative frequency drift satisfies |delta [[frecuencia]]|/[[frecuencia]] <= 0.02 in the relevant interval. In that region, peak-to-RMS conversion for pure sine and active-power estimation remain operationally consistent.

Amplitude stability should also be controlled, for example relative variation of [[amplitud_de_tension]] below about 5 percent during main acquisition. If these conditions are violated, minimal sinusoidal equations become insufficient and generalized RMS or harmonic analysis is required.

## Model failure signals

One failure signal is inconsistency between reciprocal quantities, such as period-frequency mismatch beyond instrument uncertainty. Another signal is active-power estimation incompatible with measured RMS magnitudes and phase relation.

Model failure is also evident when waveform shape shows clipping, asymmetry, or strong harmonics that cannot be reconciled with pure sine assumptions.

## Extended or alternative model

When ideal assumptions break, the natural extension is harmonic decomposition plus generalized RMS evaluation on real waveform data. This preserves conceptual roles of frequency and phase while distributing energetic contribution across spectral components.

In power-electronics contexts, this extension is often mandatory. It separates phase-related transfer effects from distortion-related effects and supports better correction strategies.

The explicit transition rule is practical: if THD exceeds about 5 percent or if normalized frequency leaves an acceptable stability interval, shift to the extended model before reporting final design conclusions.

When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.

When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.

## Operational comparison

The ideal model is superior for first-pass interpretation, unit consistency, and didactic clarity. The extended model is superior for precision diagnosis and decision-making under non-ideal waveforms.

Model choice is purpose-driven: conceptual coherence and quick checks favor ideal formulation, while specification and validation under distortion demand extended analysis.

In short, ideal modeling is a controlled baseline, not a universal endpoint. The engineering skill is to know when that baseline is still valid and when measurable evidence requires a richer representation.