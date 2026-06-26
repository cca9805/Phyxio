# Exam-type example

## Problem statement

A lightning bolt strikes 2.5 km from an observer. The air temperature is 15 C. Calculate the speed of sound of the thunder in that air, estimate the time required for the thunder to reach the observer, and check whether the linear temperature approximation gives a coherent reading. Use the thermodynamic data listed below.

## Data

- Ambient temperature: 15 C, equivalent to [[T_abs]] of 288.15 K.
- Distance from lightning to observer: 2500 m.
- Adiabatic index of air [[gamma_gas]]: 1.4.
- Molar mass of dry air [[M_mol]]: 0.029 kg/mol.
- Universal gas constant used in the formula: 8.314 J per mole and kelvin.
- The effective density [[rho_med]] is not measured separately because it is folded into the ideal-gas form of Newton-Laplace.

## System definition

The system is the propagation of the thunder acoustic pulse through approximately homogeneous air. The quantities of interest are [[v_son]] at the stated temperature, [[T_abs]] as the thermodynamic variable, [[gamma_gas]] as the adiabatic correction for the gas, [[M_mol]] as molecular information about the medium, and the arrival time of the wavefront at the observer.

## Physical model

The **ideal gas with adiabatic process** model is applied. The hypotheses are: air at uniform temperature, a disturbance small enough for linear propagation, and no relevant dispersion for the arrival time. The core relation of the leaf is that the effective acoustic stiffness increases with absolute temperature and [[gamma_gas]], while molecular inertia enters through [[M_mol]] and the equivalent [[rho_med]].

## Model justification

Thunder is a quasi-impulsive sound of short duration with a broad frequency spectrum. To estimate propagation speed and arrival time, the ideal gas model at uniform temperature is adequate. If one wanted to analyse the pulse shape in detail, frequency-dependent absorption, turbulence, and vertical temperature gradients would matter; for the first-order arrival-time calculation, those effects are secondary.

## Symbolic solution

Speed of sound in an ideal gas:

{{f:v_gas_ideal}}

The arrival time of the wavefront is obtained by dividing the travelled distance by [[v_son]]. This keeps the physical reading clear: the lightning fixes the distance and the medium fixes the propagation speed.

## Numerical substitution

**Part (a): speed of sound**

The absolute temperature is obtained by adding 273.15 to the Celsius value; for 15 C this gives [[T_abs]] of 288.15 K.

Substituting [[gamma_gas]], the gas constant, [[T_abs]], and [[M_mol]] in the ideal-gas formula gives a square-root argument close to 115645 in speed-squared units. The square root of that value gives [[v_son]] of 340.1 m/s.

**Part (b): arrival time**

Dividing 2500 m by 340.1 m/s gives an arrival time of 7.35 s. The thunder would therefore be heard a little more than seven seconds after the lightning flash.

**Part (c): check with the linear approximation**

{{f:v_son_temperatura_aire}}

The linear approximation adds 9.09 m/s to the reference value of 331.3 m/s and gives 340.4 m/s. The difference from the ideal-gas calculation is only a few tenths of a metre per second, below one tenth of one percent. The agreement confirms that the linear approximation works very well for ordinary air between moderate winter and summer temperatures.

## Dimensional validation

For [[v_son]], the energy-per-mass quotient has dimension `[L² T⁻²]`; taking the square root leaves a speed with dimension `[L T⁻¹]`.

For arrival time, dividing a distance by a speed leaves dimension `[T]`. This check also helps detect the common error of using Celsius degrees as if they were absolute temperature.

## Physical interpretation

A [[v_son]] of 340 m/s at 15 C is a fully reasonable value for air under ordinary atmospheric conditions. The arrival time of 7.35 s for 2.5 km matches the practical "3 seconds per kilometre" rule, which would give 7.5 s and therefore introduces only a small error.

The result also shows why [[v_son]] does not belong to the lightning or thunder as a source. A louder thunderclap would have greater acoustic amplitude, but it would not travel faster if the medium, temperature, and composition of the air were the same. The cause of the variation is in the medium: as [[T_abs]] increases, the molecules transmit the pressure disturbance more rapidly and [[v_son]] increases.

---

# Real-world example

## Context

An industrial maintenance technician wants to measure the thickness of a steel plate using non-destructive ultrasound. A transducer is placed on one face of the plate, an ultrasonic pulse is emitted, and the echo return time from the opposite face is measured. The measured time is 1.96 microseconds. The calibrated longitudinal [[v_son]] for that steel is 5100 m/s.

## Physical estimation

The ultrasonic pulse crosses the plate thickness twice: it first travels to the opposite face and then returns to the transducer. Therefore the one-way travel time is half of the measured time. Half of 1.96 microseconds is 0.98 microseconds; during that interval, a wave propagating at 5100 m/s travels about 0.004998 m, or 5.0 mm.

This quantitative estimate is a direct reading of [[v_son]]: if the calibrated speed were 1 % larger, the inferred thickness would also be 1 % larger. The [[rho_med]] and elastic stiffness of the steel do not appear as separate data in this application because they are already condensed into the measured [[v_son]] for the part and for the longitudinal mode used by the transducer.

## Interpretation

The plate thickness is approximately 5.0 mm. The ultrasonic time-of-flight technique depends directly on knowing [[v_son]] in the material with precision. If [[v_son]] in the steel changes with temperature, composition, or internal mechanical stress, it must be calibrated with reference samples of known thickness before unknown pieces are measured.

This application illustrates that [[v_son]] is not merely a reference value but the central measurement parameter for distances and thicknesses in industrial acoustics. The result is precise enough for quality control in metal-component manufacturing, but only if the selected physical model matches the actual wave mode, material, and test temperature.
