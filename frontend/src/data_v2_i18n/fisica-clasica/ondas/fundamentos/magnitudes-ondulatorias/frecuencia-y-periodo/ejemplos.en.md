# Exam-type example

## Problem statement

In a laboratory, a string is observed to complete 12 cycles in a time window of 3.0 s. Estimate the frequency, the period, and the angular frequency of the oscillation. Also interpret whether the rhythm is slow or fast for a visible school experiment.

## Data

Number of cycles [[N]]: 12 complete cycles.

Observation interval [[Delta_t]]: 3.0 s.

The observation refers to complete cycles counted from the same state of the string each time. Half cycles and incomplete crests at the beginning or end of the window are not mixed into the count.

No spatial distance is provided, so the data describe temporal rhythm only. They are sufficient for [[f]], [[T]], and [[omega]], but not for propagation speed.

## System definition

The system is one point of a string oscillating almost periodically. Only the temporal rhythm is studied, not the speed at which the disturbance travels along the string. The reading focuses on [[f]], [[T]], and [[omega]].

## Physical model

The model assumes recognizable cycles and stable rhythm during the window. [[N]] estimates an average frequency in [[Delta_t]]. Then [[T]] is obtained as the duration of one cycle and [[omega]] translates the same rhythm into angular phase advance.

## Model justification

Counting several cycles reduces error compared with measuring only one cycle because human delay when starting or stopping the timer is spread over many repetitions. If the string keeps a repeated pattern, each cycle returns to the same oscillation state and the quotient between [[N]] and [[Delta_t]] represents the average temporal rhythm of the observed point.

The inverse relation between frequency and period is temporally causal: more cycles in the same time imply less available time for each cycle. Nothing is being assumed about the spatial speed of the wave; only local repetition of the motion is used to connect count, duration, and angular phase advance.

## Symbolic solution

To estimate frequency from a count, use:

{{f:frecuencia_por_conteo}}

To relate frequency and period, use:

{{f:frecuencia_periodo}}

To express rhythm as angular advance, use:

{{f:frecuencia_angular}}

The quantity [[f]] measures cycles per second. The quantity [[T]] measures seconds per cycle. The quantity [[omega]] measures angular advance per second and should not be read as Hz.

## Numerical substitution

Dividing 12 complete cycles by 3.0 s gives a frequency of about 4.0 Hz. This means that the point completes four cycles every second.

The associated period is read as the inverse of 4.0 Hz. The result is about 0.25 s per cycle, so each repetition lasts one quarter of a second.

For angular frequency, multiplying 2 pi by 4.0 Hz gives a value near 25 rad/s. Therefore [[omega]] describes phase advance of about four turns per second.

## Dimensional validation

In frequency by counting, [[N]] is dimensionless and [[Delta_t]] has time dimension. The result has dimension `[T⁻¹]`.

In the relation with period, the inverse of a duration also has dimension `[T⁻¹]`, coherent with [[f]].

Angular frequency keeps dimension `[T⁻¹]`, although it is written in rad/s because the radian labels phase without adding physical dimension.

## Physical interpretation

A frequency of 4.0 Hz is slow compared with audible sound, but fast for following every cycle visually without help. The period of 0.25 s makes the oscillation imaginable: four complete up-and-down repetitions fit into one second.

If the count [[N]] increased while the same window [[Delta_t]] was kept, frequency would rise and period would fall. If the window doubled while the same number of cycles was kept, the estimated frequency would fall. The physical interpretation depends on comparing cycles and time, not on string amplitude.

The angular frequency of a few tens of rad/s is the same information expressed for phase calculations. It does not indicate a new oscillation, but another way of writing the temporal rhythm.

The result also shows why propagation speed cannot be inferred from these data. To know how the disturbance advances along the string, a spatial scale such as wavelength or crest travel distance would be needed.

# Real-world example

## Context

A phone records a vibrating string and 30 complete oscillations are counted during 5.0 s. The question is whether the observed rhythm corresponds to a slow laboratory vibration or to an audible sound signal.

## Physical estimation

Thirty cycles in 5.0 s give a frequency of order 6 Hz. The corresponding period is of order 0.17 s. This scale is visible as a slow mechanical vibration and lies far below the usual human audible range, which begins near tens of Hz.

## Interpretation

The estimate shows that the string can oscillate clearly without producing a strong audible note. The eye can follow part of the motion because the period is an appreciable fraction of a second.

The reading also shows why measuring several cycles is useful. If only one period were measured with an imprecise camera, the error would be large; counting [[N]] cycles in [[Delta_t]] smooths small inaccuracies and gives a more stable average frequency.

This is also a model check. If the first half of the video and the second half give similar counts, one frequency is a good description. If they differ strongly, the result should be reported as an average over the chosen window, not as a permanent property of the string.
