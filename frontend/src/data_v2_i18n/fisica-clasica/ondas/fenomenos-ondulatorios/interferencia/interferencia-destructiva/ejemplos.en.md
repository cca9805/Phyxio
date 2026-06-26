# Exam-type example

## Problem statement

Two coherent loudspeakers emit the same tone in a large room. A microphone is placed at a position where the path from loudspeaker A is shorter than the path from loudspeaker B. The wavelength of the sound in the room air is 0.68 m.

Determine whether the position can correspond to the first destructive minimum, compute the associated phase offset, and estimate the resultant intensity if the individual intensities measured separately are comparable but not identical.

## Data

- Path difference between the two routes: 0.34 m.
- Wavelength of the tone: 0.68 m.
- Destructive order considered: 0.
- Individual intensity from loudspeaker A at the point: 2.0 mW/m².
- Individual intensity from loudspeaker B at the point: 1.8 mW/m².
- Sources synchronized by the same generator.

## System definition

The physical system is the measurement point of the microphone and the two sound waves reaching it. The key geometric quantity is [[Delta_r]], because it compares the two routes. The relevant spatial scale is [[lambda]], not the absolute distance to either loudspeaker.

The observable result is [[I_resultante]]. The quantities [[I1]] and [[I2]] are interpreted as intensities measured separately, before the waves are recombined coherently.

## Physical model

We use the model of two coherent waves with common frequency and stable relative phase. The position is a destructive minimum if [[Delta_r]] contains a half-cycle added to an integer number of cycles.

Intensity is not obtained by simply adding [[I1]] and [[I2]], because phase decides whether the interference term reinforces or reduces the signal. Therefore the model needs [[delta_phi]] in addition to the individual intensities.

## Model justification

The model is valid because the loudspeakers are synchronized by the same generator, the tone is nearly monochromatic, and the microphone measures a small region compared with the spacing between minima. Under these conditions, relative phase is not averaged randomly.

It would stop being valid if the loudspeakers emitted independent sounds, if the microphone averaged a wide region of the room, or if strong wall reflections dominated the two direct paths. In those cases, [[Delta_r]] for the direct routes would not be enough.

## Symbolic solution

The geometric condition for the destructive minimum is evaluated with:

{{f:condicion_destructiva_camino}}

For the first minimum, [[m_orden]] represents the initial destructive order. The expected path difference is obtained by taking half a cycle of [[lambda]].

The equivalent phase offset is read with:

{{f:fase_destructiva}}

That phase offset corresponds to phase opposition. Once the destructive condition is identified, the remaining intensity is computed using:

{{f:intensidad_interferencia_dos_ondas}}

In this last relation, the term controlled by [[delta_phi]] reduces the incoherent sum. If [[I1]] and [[I2]] were identical, ideal cancellation could take [[I_resultante]] down to zero.

## Numerical substitution

With [[m_orden]] equal to zero and [[lambda]] of 0.68 m, the half-cycle path gives 0.34 m. Therefore the observed [[Delta_r]] matches the condition for the first destructive minimum.

For phase, the first minimum corresponds to an angular separation given by an odd multiple of pi. Thus [[delta_phi]] is approximately 3.14 rad.

For intensity, start from 2.0 mW/m² and 1.8 mW/m². The incoherent sum would be 3.8 mW/m², but the interference term in phase opposition subtracts almost all of the common contribution. The calculation gives a small remaining intensity, approximately 0.006 mW/m². Therefore [[I_resultante]] is almost zero, but not exactly zero because [[I1]] and [[I2]] are not identical.

## Dimensional validation

The path condition compares lengths: both [[Delta_r]] and [[lambda]] have dimension `[L]`, while [[m_orden]] contributes no physical dimension. The geometric result remains in metres.

The phase [[delta_phi]] is dimensionless and measured in radians. The resultant intensity keeps dimension `[M T⁻³]`, the same as [[I1]] and [[I2]], because every term describes average power transported per unit area.

## Physical interpretation

The microphone is at a destructive minimum because the path difference introduces phase opposition. The signal does not vanish because sound is absent, but because the pressure disturbances arrive almost with opposite signs and compensate locally.

The intensity is not exactly zero because the two contributions do not have the same effective amplitude. If [[I1]] increased while [[I2]] stayed fixed, the minimum would be less deep. If both intensities became equal while [[delta_phi]] stayed the same, cancellation would be much closer to zero.

Physically, the result explains why walking a few centimetres in a room can change perceived volume. The pattern depends on [[Delta_r]] and [[lambda]], so another frequency would shift the quiet zone.

# Real-world example

## Context

An active noise-control system tries to reduce a low-frequency hum near a passenger seat. The control microphone detects a nearly periodic signal, and the cancellation loudspeaker is adjusted so that the secondary wave reaches the ear in opposite phase.

The goal is not to eliminate sound everywhere in the cabin, but to reduce [[I_resultante]] in a small region around the ear. This is why the system continuously measures phase and corrects the emitted signal.

## Physical estimation

If the hum has a wavelength near 1.4 m in air, a path shift near 0.7 m can produce phase opposition. In headphones, the space is much smaller, so electronics introduce the equivalent phase delay instead of relying only on geometry.

As a quantitative estimate, if the unwanted signal contributes 1.0 mW/m² and the adjusted secondary signal contributes 0.9 mW/m², the minimum does not reach zero but can remain near 0.003 mW/m² under ideal phase opposition. That reading corresponds to a reduction greater than 99 % relative to the incoherent sum of 1.9 mW/m².

The residual intensity depends on balancing the amplitude of the secondary wave with that of the unwanted wave. If the secondary signal is too weak, [[I_resultante]] falls only slightly; if it is too strong, a remaining opposite-phase signal is also heard. A phase error of an appreciable fraction of a cycle would already raise the residual intensity and make the hum audible.

## Interpretation

The application shows that destructive interference is local control of phase and amplitude. It works very well for stable noise because [[delta_phi]] can be held near opposition, but it loses effectiveness for impulsive sounds or multiple arrival directions.

The practical dominant variable is [[I_resultante]], because it summarizes what the user hears. However, the real adjustment is made by correcting [[delta_phi]] and balancing [[I1]] with [[I2]].
