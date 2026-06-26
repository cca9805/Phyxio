# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: gas-ideal-microscopico
# Target response file: ejemplos.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Exam-type example

## Problem statement

A container holds a monatomic ideal gas at [[temperatura]] of 300 K. Each particle has [[masa_particula]] of 6.64·10^-27 kg, approximately the mass of a helium atom. Estimate the translational [[energia_cinetica_media]] per particle and the [[velocidad_rms]]. Then interpret what happens if the [[temperatura]] rises to 600 K while the gas remains ideal.

## Data

- Initial [[temperatura]]: 300 K
- Final [[temperatura]]: 600 K
- [[masa_particula]]: 6.64·10^-27 kg
- [[constante_boltzmann]]: 1.38·10^-23 J/K
- Gas: monatomic ideal gas
- Targets: [[energia_cinetica_media]] and [[velocidad_rms]]

## System definition

The system is a gas sample in thermal equilibrium. We do not track one molecule; we describe a population statistically. The [[temperatura]] is the macroscopic variable fixing the microscopic agitation scale. The [[energia_cinetica_media]] is interpreted per particle, not as total gas energy. The [[velocidad_rms]] gives a typical speed scale associated with the quadratic average of microscopic velocities.

## Physical model

We use the classical monatomic ideal-gas model. Particles are pointlike, collisions are elastic, and intermolecular interactions are neglected except during collisions. The [[presion]] is not the numerical target, but it belongs to the same picture: many particles collide with walls inside a [[volumen]]. The central relation is that absolute [[temperatura]] directly measures translational [[energia_cinetica_media]].

## Model justification

The model is suitable because the problem states a monatomic ideal gas and gives [[temperatura]] in kelvin. There is no indication of high [[presion]], very small [[volumen]], condensation, or quantum behavior requiring a real-gas model. The goal is not to reconstruct the full speed distribution; it is to obtain two statistical scales, [[energia_cinetica_media]] and [[velocidad_rms]]. The [[masa_particula]] enters only when converting energy scale into speed scale.

## Symbolic solution

First connect [[energia_cinetica_media]] with [[temperatura]]:

{{f:energia_cinetica_media_temperatura}}

Next connect that energy scale with a typical speed:

{{f:velocidad_cuadratica_media}}

The [[velocidad_rms]] depends on the square root of the thermal energy scale divided by [[masa_particula]]. Therefore, multiplying [[temperatura]] by a factor does not multiply the typical speed by the same factor; it multiplies it by the square root of that factor.

## Numerical substitution

At 300 K, [[energia_cinetica_media]] is approximately (3/2)·1.38·10^-23·300 J, or 6.21·10^-21 J per particle. With [[masa_particula]] equal to 6.64·10^-27 kg, [[velocidad_rms]] is about 1.37·10^3 m/s. At 600 K, [[energia_cinetica_media]] doubles to about 1.24·10^-20 J. The [[velocidad_rms]] increases by √2, giving roughly 1.93·10^3 m/s.

## Dimensional validation

The [[constante_boltzmann]] has units J/K and [[temperatura]] has units K, so their product has units J. That matches [[energia_cinetica_media]]. For [[velocidad_rms]], energy divided by [[masa_particula]] has units J/kg. Since 1 J is kg·m^2/s^2, J/kg becomes m^2/s^2. Taking a square root gives m/s, the correct unit for speed.

## Physical interpretation

The result means that [[temperatura]] is a microscopic energy scale, not a direct particle speed. The value of [[energia_cinetica_media]] at 300 K is tiny in joules because it is per particle; this indicates why microscopic energy units look small while the collective gas can still produce measurable [[presion]]. Doubling [[temperatura]] doubles [[energia_cinetica_media]], therefore the energetic agitation per particle increases linearly. The [[velocidad_rms]] does not double; it increases by √2 because speed depends quadratically on kinetic energy. Physically, this implies hotter helium atoms collide more intensely with the walls, and the macroscopic effect depends on both the microscopic speed scale and the number of particles present.

# Real-world example

## Context

A laboratory vacuum chamber is filled with helium to calibrate a pressure sensor. The individual atoms are not observed, but the sensor response depends on [[presion]], and that pressure comes from microscopic collisions. The technician wants to know whether raising [[temperatura]] from 300 K to 450 K strongly changes the microscopic motion scale.

## Physical estimation

Use an order-of-magnitude estimate rather than a full molecular simulation. The [[energia_cinetica_media]] is proportional to [[temperatura]], so increasing from 300 K to 450 K gives an approximate factor of 1.5. That scale is a reasonable value for thermal energy growth. The [[velocidad_rms]] grows with the square root of that factor, so the speed estimate changes by about √1.5, roughly 1.22. In magnitude terms, a light gas can already have speeds of order 10^3 m/s, so a 22 % increase is noticeable but not explosive. This estimate is physically reasonable because kinetic energy depends on speed squared.

## Interpretation

This application shows that microscopic motion and macroscopic flow are different. Helium atoms may have large [[velocidad_rms]] while the gas as a whole has no net drift. Raising [[temperatura]] increases disordered agitation, which increases [[energia_cinetica_media]] and makes wall collisions more energetic. The sensor does not see individual atoms; it responds to the collective effect of many impacts. The ideal model remains useful as long as the gas is dilute, the [[volumen]] is not extremely small, and interactions do not dominate over translational kinetic energy.

