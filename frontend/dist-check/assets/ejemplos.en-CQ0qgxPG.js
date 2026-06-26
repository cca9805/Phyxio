const e=`# Exam-type example

## Problem statement

A string fixed at both ends has length [[L]] of 1.20 m. The propagation speed of the traveling waves on the string is [[v]] of 48 m/s. Find the wavelength corresponding to the third mode, its modal frequency [[f_n]], and explain why that mode satisfies the standing-wave condition.

## Data

The system has equivalent fixed boundaries. The useful length is [[L]] of 1.20 m, the mode number is [[n]] equal to 3, and the propagation speed is [[v]] of 48 m/s. The target magnitudes are [[lambda]] and [[f_n]]. The datum [[n]] is not a continuous measurement, but an integer mode selection.

## System definition

The system is an ideal string observed between two immobile ends. Damping is neglected and tension is considered to keep the speed [[v]] constant. The analysis does not study how the string is excited, but whether the spatial shape fits and what frequency corresponds to the chosen mode.

## Physical model

The model is a string fixed at both ends. The spatial condition requires [[n]] complete half-wavelengths to fit inside [[L]]. Then the speed [[v]] converts that allowed wavelength into a frequency [[f_n]]. The model is anchored to this leaf because the question is not looking for any traveling wave, but for a mode respecting the boundaries.

## Model justification

The physical justification is that fixed ends impose nodes and force the shape to close exactly within the length [[L]]. An ideal model is assumed because the string is uniform, the speed [[v]] remains constant, damping is neglected, and the mode [[n]] is integer. These conditions make it valid to use complete half-wavelengths rather than an arbitrary wavelength.

## Symbolic solution

First apply the spatial standing condition.

{{f:condicion_estacionaria_cuerda}}

This relation is rearranged to find [[lambda]] for the selected mode. Then calculate the allowed frequency of the same mode.

{{f:frecuencia_modo_estacionario}}

The solution uses one idea: geometry selects the mode and medium speed fixes its temporal scale.

## Numerical substitution

For [[n]] equal to 3 and [[L]] of 1.20 m, the compatible wavelength is 0.80 m. With [[v]] of 48 m/s, the modal frequency is 60 Hz. The result is coherent: the third mode contains three half-wavelengths inside the string.

## Dimensional validation

The spatial condition relates lengths and a dimensionless number, so it returns meters for [[lambda]]. The modal frequency combines \`[L T⁻¹]\` with \`[L]\`, so the result has \`[T⁻¹]\`. This dimensional reading confirms that amplitude or energy is not being calculated; the output is an allowed frequency.

## Physical interpretation

The result means that the string can sustain a pattern with three antinodes if the excitation supplies energy near 60 Hz. The wavelength of 0.80 m is not the length of the string, but the spatial scale of the traveling waves forming the mode. If a frequency produced noninteger [[n]], the boundary would not allow a pure standing wave.

# Real-world example

## Context

In a laboratory, a vibrating string is adjusted to show standing modes. The string has fixed length, but tension can be changed and therefore the speed [[v]] can be changed. The teacher wants the second mode to appear near an audible and stable frequency.

## Physical estimation

The physical estimation begins with order of magnitude. If [[L]] is near one meter and [[v]] is tens of meters per second, the fundamental frequency should be tens of hertz. The second mode will have an [[f_n]] approximately twice as large if the medium does not change. This reading helps decide whether a value such as thousands of hertz is reasonable or signals a unit error.

## Interpretation

The real application shows that the standing condition does more than compute numbers: it decides whether a demonstration can work. If the source excites near [[f_n]], the mode grows; if it excites between modes, the response is weaker or mixed. Changing [[L]] shifts the whole modal family, while changing [[v]] through tension changes the temporal scale without changing the integer shape required by [[n]].

In a classroom reading, the teacher can first ask for a qualitative prediction: moving from the second to the third mode creates more antinodes and raises the frequency. The calculation then checks that prediction. If prediction and calculation disagree, the issue is not only numerical; [[lambda]] may have been confused with [[L]], or a noninteger [[n]] may have been used.

The experimental decision also depends on precision. A source tuned a few hertz away from [[f_n]] can produce an unstable pattern if the string has low damping. The condition therefore estimates where to search for the mode, while observation confirms whether boundary and medium assumptions are satisfied.

This is why the real example is not only a calculation of 60 Hz. It gives a criterion for action: choose the integer mode, predict the compatible frequency, tune the source near that value, and then check whether the observed nodes stay fixed. If they drift, the model assumptions are being challenged.
`;export{e as default};
