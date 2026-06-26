# Exam-type example


## Problem statement

A container holds molecular nitrogen treated as an ideal gas at [[temperatura_absoluta]] of 300 K. The [[masa_particula]] of one molecule is 4.65·10^-26 kg. Estimate [[velocidad_mas_probable]], [[velocidad_media]], [[velocidad_rms]], and [[energia_cinetica_media]]. Explain what the [[densidad_probabilidad_velocidad]] represents, and interpret the [[probabilidad_intervalo]] of finding molecules between [[velocidad_minima]] of 400 m/s and [[velocidad_maxima]] of 600 m/s.

## Data

The parameters given in the problem, with their SI units, are:

- Gas: ideal molecular nitrogen
- [[temperatura_absoluta]]: 300 K
- [[masa_particula]]: 4.65·10^-26 kg
- [[constante_boltzmann]]: 1.38·10^-23 J/K
- [[velocidad_minima]]: 400 m/s
- [[velocidad_maxima]]: 600 m/s
- Required magnitudes: [[velocidad_mas_probable]], [[velocidad_media]], [[velocidad_rms]], [[energia_cinetica_media]], [[probabilidad_intervalo]]

## System definition

The system is a macroscopic sample of many identical molecules. We do not track one chosen molecule. We describe the whole population of speeds. The microscopic variable is [[velocidad]], interpreted as speed rather than a vector direction. The function [[densidad_probabilidad_velocidad]] tells how molecular speeds are distributed and allows interval probabilities to be obtained from areas. The [[temperatura_absoluta]] sets the common thermal state, while [[masa_particula]] controls how that energy scale becomes speed.

## Physical model

The Maxwell-Boltzmann model applies to a classical dilute ideal gas in equilibrium. The distribution is normalized: the full area under [[densidad_probabilidad_velocidad]] versus [[velocidad]] represents total probability. The three characteristic speeds are not equal. [[velocidad_mas_probable]] locates the peak, [[velocidad_media]] averages the speed, and [[velocidad_rms]] is tied to a quadratic average and to kinetic energy.

## Model justification

At 300 K, molecular nitrogen can be treated as a classical gas for an ordinary estimate. The expected speeds are hundreds of m/s, far below relativistic conditions. The problem also assumes thermal equilibrium, so a single [[temperatura_absoluta]] is meaningful. If the gas were expanding abruptly or forming a filtered molecular beam, Maxwell-Boltzmann could fail. No such effects are stated here, so the model is appropriate.

## Symbolic solution

First use the complete distribution:

{{f:maxwell_boltzmann_velocidad}}

Then extract the characteristic speeds:

{{f:velocidad_mas_probable}}

{{f:velocidad_media}}

{{f:velocidad_cuadratica_media}}

The mean translational energy is obtained from:

{{f:energia_cinetica_media_gas}}

For the speed interval, interpret the area:

{{f:probabilidad_intervalo_velocidad}}

This separates summary values of the curve from the probability associated with a specific range of [[velocidad]].

## Numerical substitution

With [[temperatura_absoluta]] of 300 K, [[masa_particula]] of 4.65·10^-26 kg, and [[constante_boltzmann]] of 1.38·10^-23 J/K, the characteristic speeds are of the order of 400 to 600 m/s. [[velocidad_mas_probable]] is near 420 m/s, [[velocidad_media]] near 470 m/s, and [[velocidad_rms]] near 520 m/s. The [[energia_cinetica_media]] is of the order of 6·10^-21 J per molecule. The [[probabilidad_intervalo]] between 400 m/s and 600 m/s must be evaluated as area under the curve from [[velocidad_minima]] to [[velocidad_maxima]].

## Dimensional validation

The characteristic speeds must be in m/s because they combine thermal energy per particle with [[masa_particula]]. The [[energia_cinetica_media]] is in joules, since [[constante_boltzmann]] times [[temperatura_absoluta]] has energy dimension. The [[densidad_probabilidad_velocidad]] is not dimensionless. When multiplied by a speed interval in m/s, it gives a dimensionless [[probabilidad_intervalo]]. This check prevents confusing probability density with direct probability.

## Physical interpretation

The result means that [[temperatura_absoluta]] does not give the gas one single molecular speed. It indicates a whole distribution of possible values. [[velocidad_mas_probable]] marks the highest point of the curve, but this implies only local maximum density, not that all molecules move that way. [[velocidad_media]] is larger because the fast tail increases the average. [[velocidad_rms]] is larger again because it depends on squared speed and therefore weights fast molecules more strongly. Physically, increasing [[temperatura_absoluta]] broadens the curve and shifts it toward larger [[velocidad]]. Increasing [[masa_particula]] at fixed [[temperatura_absoluta]] decreases the characteristic speeds. The [[probabilidad_intervalo]] depends on area, so the interval from [[velocidad_minima]] to [[velocidad_maxima]] represents a fraction of molecules, not a special speed.

# Real-world example


## Context

In a vacuum chamber, argon is introduced to calibrate a sensor that responds best to molecules whose [[velocidad]] lies in a selected range. The technician knows the chamber [[temperatura_absoluta]] and wants to know whether a significant fraction of molecules falls between the chosen [[velocidad_minima]] and [[velocidad_maxima]]. The same reasoning is used in gas diagnostics, molecular beams, and thermal calibration devices.

## Physical estimation

For argon near room conditions, [[masa_particula]] is larger than for nitrogen, so the characteristic speeds are lower at the same [[temperatura_absoluta]]. A reasonable value for [[velocidad_mas_probable]] is on the order of a few hundred m/s. To estimate the detector response, one should compare the instrument window with the scale and shape of [[densidad_probabilidad_velocidad]]. If the window is centered near the peak, the approximate [[probabilidad_intervalo]] may be sizable. If it lies far above [[velocidad_rms]], it samples only the fast tail and the signal is small in magnitude. This is a scale argument, not an exact integration, but it gives a reasonable value for deciding whether the detector range is well placed.

## Interpretation

The application shows that velocity distributions are practical design tools. Raising [[temperatura_absoluta]] shifts the population toward larger [[velocidad]], so a fixed detector window may see a larger or smaller signal depending on where it sits on the curve. Changing the gas changes [[masa_particula]], so the same temperature can lead to a different response. The physical control variable is not one molecule but the area of [[densidad_probabilidad_velocidad]] over the selected interval.