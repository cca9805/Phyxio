# Exam-type example

## Problem statement

On a string, five consecutive crests are observed. The distance between the first and fifth crest is 1.20 m. The wave vibrates with frequency 8.0 Hz. Estimate the wavelength, the wavenumber, and the propagation speed. Interpret whether the spatial separation is reasonable for a laboratory string.

## Data

Measured separation [[Delta_x]]: 1.20 m.

Number of complete intervals [[n]]: 4.

Frequency [[f]]: 8.0 Hz.

The count refers to intervals between consecutive crests, not to the number of crests themselves. Five crests enclose four full wavelength intervals.

The measured distance is therefore a spatial span across repeated equivalent states. It is not a vertical displacement and it is not the distance traveled by one point of the string.

## System definition

The system is an approximately periodic transverse wave on a string. Crests are treated as equivalent phase states, so the spacing between consecutive crests estimates [[lambda]]. The speed [[v]] is interpreted as pattern advance, not vertical motion of the string.

## Physical model

The model uses a periodic wave with well-defined crests. [[Delta_x]] measures a total spatial distance, [[n]] counts complete wavelength intervals, [[k]] expresses spatial phase density, and [[f]] connects temporal repetition with speed [[v]].

## Model justification

Measuring from the first to the fifth crest reduces error compared with measuring only one separation, because the uncertainty in locating a crest is distributed over four intervals. The string is treated as uniform during the observation, so crest spacing remains approximately constant.

The speed relation is physically causal: if 8 cycles pass each second and each cycle occupies distance [[lambda]], the pattern advances that distance eight times per second. Amplitude is not used because height does not determine spatial spacing.

## Symbolic solution

To estimate wavelength from several crests:

{{f:longitud_por_crestas}}

To obtain wavenumber:

{{f:numero_onda_longitud}}

To connect wavelength and frequency with speed:

{{f:velocidad_longitud_frecuencia}}

The quantity [[lambda]] comes from a spatial reading; [[k]] expresses the same repetition as phase rate; [[v]] combines spatial scale and temporal rhythm.

## Numerical substitution

Dividing 1.20 m by 4 complete intervals gives a wavelength of about 0.30 m. This means that two consecutive crests are separated by about thirty centimetres.

For wavenumber, dividing one full angular turn by 0.30 m gives a value near 21 rad/m. The value is large compared with 1 rad/m, indicating that phase changes substantially in each metre.

For speed, multiplying 0.30 m by 8.0 Hz gives about 2.4 m/s. This is a reasonable speed for a laboratory string.

## Dimensional validation

In crest measurement, a distance `[L]` divided by a count `[1]` keeps dimension `[L]`.

Wavenumber has dimension `[L⁻¹]`, because it expresses phase per unit distance.

For speed, length `[L]` multiplied by frequency `[T⁻¹]` gives `[L T⁻¹]`, coherent with velocity.

## Physical interpretation

The result shows a spatially visible wave: thirty centimetres between crests is a scale that can be measured with a ruler or an image of the string. It does not describe wave height, but the distance needed to return to the same cycle state.

If frequency increased while the string speed stayed the same, wavelength would have to decrease. If the medium speed increased while frequency stayed the same, crests would be farther apart. Therefore [[lambda]] is not interpreted in isolation: it depends on the medium and the temporal rhythm when the wave propagates.

The calculation also shows why measuring several intervals is better than measuring one. If one crest is located with a small error, distributing 1.20 m over four segments reduces uncertainty. In a real practical, repeating the measurement elsewhere on the string would test whether the pattern is uniform.

# Real-world example

## Context

In a swimming pool, surface waves approach a wall. The distance covered by three consecutive crests is about 80 cm. The goal is to estimate wavelength and decide whether the pattern is short or long compared with the size of the pool.

## Physical estimation

Three consecutive crests contain two complete intervals. A total separation of 80 cm divided between two intervals gives a wavelength of order 40 cm. If the pool is several metres long, many wavelengths fit inside it.

## Interpretation

The estimate shows a spatially repeated pattern on a sub-metre scale. Moving half a metre can take an observer from one crest to another part of the cycle, so position matters when observing maxima and minima.

The real reading requires counting intervals, not crests. If three crests were confused with three wavelengths, the true spacing would be underestimated. This is why equivalent states should be marked and the segments between them counted.

The estimate also predicts how the drawing would change if the source oscillated faster. In the same medium, higher frequency would bring crests closer together; if the medium changed and speed increased, spacing could grow even with the same temporal rhythm.
