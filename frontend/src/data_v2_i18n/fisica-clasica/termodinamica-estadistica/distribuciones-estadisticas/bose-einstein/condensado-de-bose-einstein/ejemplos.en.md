# Exam-type example


## Problem statement

An ideal homogeneous cloud of bosonic atoms has [[numero_particulas]] equal to 2.0·10⁶ in a [[volumen]] of 2.0·10⁻¹⁴ m³. The mass of each atom is [[masa_particula]] equal to 1.44·10⁻²⁵ kg. The cloud is cooled to a [[temperatura]] of 80 nK. Estimate [[temperatura_critica]], decide whether condensation appears, and compute the ideal [[fraccion_condensada]] and [[numero_condensado]].

## Data

The numerical parameters from the problem statement, expressed in SI units, are:

- [[numero_particulas]]: 2.0·10⁶
- [[volumen]]: 2.0·10⁻¹⁴ m³
- [[masa_particula]]: 1.44·10⁻²⁵ kg
- [[temperatura]]: 80 nK
- [[constante_planck]]: 6.626·10⁻³⁴ J·s
- [[constante_boltzmann]]: 1.381·10⁻²³ J/K

## System definition

The system is a cloud of material bosons confined in an effective [[volumen]]. [[densidad_particulas]] is treated as uniform for a first ideal estimate. The object of study is not an isolated particle, but the statistical population of quantum states. The main interpreted quantity is [[fraccion_condensada]], later converted into [[numero_condensado]] using the total [[numero_particulas]].

## Physical model

We use the nonrelativistic ideal Bose-Einstein gas. [[temperatura_critica]] is computed from [[densidad_particulas]] and [[masa_particula]]. If [[temperatura]] is below [[temperatura_critica]], the part of the boson population that cannot be accommodated in excited states forms the condensate. The model neglects interactions, losses, and detailed trap geometry.

## Model justification

The problem asks for an ideal estimate, so comparing scales is sufficient. The cloud contains many particles, which makes [[fraccion_condensada]] meaningful as a macroscopic proportion. The [[temperatura]] lies in the nanokelvin range, typical for atomic condensation. [[densidad_particulas]] is obtained from [[numero_particulas]] divided by [[volumen]], and that density fixes the threshold together with [[masa_particula]]. If the calculated fraction ever fell outside the physical interval from 0 to 1, the domain condition would have to be applied before interpretation.

## Symbolic solution

First estimate [[densidad_particulas]] from the ratio of [[numero_particulas]] to [[volumen]]. Then compute the ideal critical [[temperatura]]:

{{f:temperatura_critica_bose}}

The condensation condition is the comparison of [[temperatura]] with [[temperatura_critica]]. If the gas is below the threshold, use the condensed-fraction relation:

{{f:fraccion_condensada_bose}}

Finally, [[numero_condensado]] is obtained by multiplying [[fraccion_condensada]] by the total [[numero_particulas]]. The condensation threshold expressed as a density condition uses [[densidad_critica]] of the ideal gas:

{{f:densidad_critica_bose}}

When [[densidad_particulas]] exceeds [[densidad_critica]], the excess population cannot be accommodated in excited states and feeds [[numero_condensado]]. To inspect the microscopic meaning of the threshold, the thermal wavelength may also be estimated:

{{f:longitud_onda_termica_de_broglie}}

## Numerical substitution

The estimated [[densidad_particulas]] is 2.0·10⁶ / 2.0·10⁻¹⁴ m³, or 1.0·10²⁰ m⁻³. With that scale and the stated mass, [[temperatura_critica]] is of order 2.0·10⁻⁷ K, about 200 nK. Since [[temperatura]] is 80 nK, the gas is below the threshold. The thermal ratio T/[[temperatura_critica]] is approximately 0.40. In the ideal model, [[fraccion_condensada]] is of order one minus that ratio raised to 3/2, giving about 0.75. Therefore [[numero_condensado]] is approximately 1.5·10⁶ bosons.

## Dimensional validation

[[densidad_particulas]] has dimension m⁻³. In the formula for [[temperatura_critica]], [[constante_planck]], [[masa_particula]], and [[constante_boltzmann]] combine with density raised to the power 2/3 to produce kelvin. [[fraccion_condensada]] has no unit because it compares temperatures of the same kind. [[numero_condensado]] is a particle count, dimensionless as a pure number, although physically it represents a population.

## Physical interpretation

The result means that the cloud is not merely cold; it is sufficiently below [[temperatura_critica]] for a large portion of [[numero_particulas]] to occupy the ground state. A [[fraccion_condensada]] near 0.75 indicates that collective quantum organization dominates the gas. This implies that raising [[temperatura]] toward 200 nK would decrease the condensate rapidly, while increasing [[densidad_particulas]] at fixed [[temperatura]] would raise [[temperatura_critica]] and make condensation more robust. Therefore the outcome depends on both cooling and concentration. Physically, the calculation compares mean particle spacing with [[longitud_onda_termica]]; when waves overlap, individual identity becomes less useful and macroscopic occupation appears.

# Real-world example


## Context

In an ultracold-atom laboratory, the power of an optical trap is adjusted to compress a rubidium cloud, and evaporative cooling removes the most energetic atoms. The goal is not only to lower [[temperatura]], but to reach a combination of [[densidad_particulas]] and [[temperatura]] that makes a central [[numero_condensado]] peak visible in a time-of-flight image.

## Physical estimation

A reasonable value for an atomic condensate has [[temperatura]] on the order of 50 nK to 500 nK, [[numero_particulas]] between 10⁴ and 10⁷, and [[densidad_particulas]] around 10¹⁹ to 10²¹ m⁻³. With this scale, an approximate [[temperatura_critica]] estimate often has magnitude near 10⁻⁷ K. If the experiment measures [[temperatura]] of 120 nK and estimates [[temperatura_critica]] of 180 nK, the ideal [[fraccion_condensada]] is a reasonable value: noticeable but not complete. The order of the result also warns that expansion imaging must be tied back to the trapped cloud, because density changes during release.

## Interpretation

The application shows that a condensate is controlled by two knobs: cooling and concentration. Lowering [[temperatura]] increases [[longitud_onda_termica]], while increasing [[densidad_particulas]] reduces the mean distance between bosons. When those scales meet, [[fraccion_condensada]] becomes a signal of macroscopic coherence. In practice, deviations from the ideal model are not just errors; they reveal interactions, trap geometry, finite size, and nonequilibrium effects.