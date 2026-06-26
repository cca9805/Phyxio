# Exam-type example


## Problem statement

A container holds a monatomic ideal gas at thermal equilibrium with [[temperatura]] of 300 K. A sample contains [[numero_particulas]] equal to 2.0·10^20 particles. Calculate the translational [[energia_media]] of one particle and the translational [[energia_total]] of the sample. Interpret whether the result describes one specific particle or a statistical average of the gas.

## Data

- [[temperatura]]: 300 K
- [[numero_particulas]]: 2.0·10^20 particles
- [[k_boltzmann]]: 1.38·10^-23 J/K
- Model: classical monatomic ideal gas at thermal equilibrium

## System definition

The system is the full gas sample inside the container, but the calculation separates two levels. The first level is microscopic: one typical particle represented by its translational [[energia_media]]. The second level is macroscopic: the sum of the average contributions of all particles, giving [[energia_total]]. The container only provides the equilibrium setting; no boundary work or heat-transfer process is being calculated.

## Physical model

The model is a classical ideal gas with translational kinetic energy. [[temperatura]] sets the energy scale per particle through [[k_boltzmann]]. Because the gas is at equilibrium, one value of [[temperatura]] can be used for the whole sample. [[energia_total]] is obtained by multiplying the microscopic average by [[numero_particulas]].

## Model justification

The gas is monatomic and ideal, so rotational and vibrational molecular modes are not included. The sample is treated as dilute, with no persistent interactions except brief collisions. A [[temperatura]] of 300 K is a reasonable classroom regime for a classical treatment. The goal is not to describe each instantaneous velocity; it is to find the average of a stable statistical distribution.

## Symbolic solution

First compute the average energy per particle:

{{f:energia_media_particula}}

Then connect that microscopic average with the whole sample:

{{f:energia_total_gas_ideal}}

The combined relation may also be used directly:

{{f:energia_total_temperatura}}

The logic is that [[temperatura]] determines [[energia_media]], while [[numero_particulas]] converts microscopic average energy into [[energia_total]].

## Numerical substitution

For one average particle, use the classical translational factor and multiply by [[k_boltzmann]] and [[temperatura]]. With the given data, the order is 10^-21 J per particle. Numerically, [[energia_media]] is approximately 6.2·10^-21 J. For the full sample, multiply by [[numero_particulas]], giving [[energia_total]] of approximately 1.2 J. The contrast is central: a tiny per-particle energy becomes a macroscopic energy when many particles are summed.

## Dimensional validation

The unit of [[k_boltzmann]] is energy divided by temperature, J/K. Multiplying it by [[temperatura]] in K gives joules, so [[energia_media]] has the correct energy unit. In

{{f:energia_total_gas_ideal}}

, [[numero_particulas]] is a dimensionless count, so multiplying by [[energia_media]] keeps the final unit as joules. The dimensional check confirms that both [[energia_media]] and [[energia_total]] are energies, but they refer to different physical scales.

## Physical interpretation

The result means that the gas has a typical translational kinetic energy per particle of about 6.2·10^-21 J. It indicates the center of a statistical distribution, not a fixed energy stamped onto every particle. This implies that some particles are faster and some are slower at any instant; therefore the average depends on the equilibrium distribution set by [[temperatura]]. Physically, increasing [[temperatura]] increases [[energia_media]], while increasing [[numero_particulas]] at the same [[temperatura]] increases [[energia_total]] instead. The sample value of about 1.2 J is macroscopic because it adds a tiny microscopic contribution over 2.0·10^20 particles.

# Real-world example


## Context

In a laboratory vacuum chamber, a small amount of noble gas is introduced to calibrate a thermal sensor. The sensor does not measure one particle's energy directly, but the microscopic interpretation lets the researcher check whether the measured [[temperatura]] corresponds to a plausible energy scale for the gas.

## Physical estimation

Assume [[temperatura]] is approximately 290 K and the sample contains [[numero_particulas]] of order 10^18. The estimate for [[energia_media]] remains on the order of 10^-21 J, because it is set by [[k_boltzmann]] and the thermal scale. The approximate [[energia_total]] is then found by multiplying that microscopic magnitude by the particle count, giving a scale near a few thousandths of a joule. That is a reasonable value: one particle carries a tiny energy, but many particles create a detectable accumulated energy. The order-of-magnitude check prevents confusing microscopic and macroscopic scales.

## Interpretation

This application shows why [[temperatura]] is a bridge between macroscopic measurement and microscopic motion. One does not need to follow a particular particle; equilibrium allows a representative [[energia_media]] to be assigned. If the gas is not equilibrated, becomes dense, or develops strong interactions, this reading becomes unreliable. While the model is valid, the graph of [[energia_media]] against [[temperatura]] behaves like a calibrated ruler: higher [[temperatura]] means a larger average energy per particle, and the total effect also depends on [[numero_particulas]].

The same reading checks any result: first the microscopic scale, then the macroscopic sum. If these two layers are mixed, the number may look correct while telling the wrong physical story.
 This final check protects the interpretation.