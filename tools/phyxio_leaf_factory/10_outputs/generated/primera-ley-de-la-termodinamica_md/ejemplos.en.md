# Exam-type example

## Problem statement

A gas enclosed in a cylinder with a piston receives 1800 J of heat from an external heater. During the same process, the surroundings compress the gas and do 450 J of work on the system. The system is closed: no mass enters or leaves. Calculate [[variacion_energia_interna]] of the gas. If the initial internal energy is 12 000 J, also determine [[energia_interna_final]]. Interpret the physical sign of the result.

## Data

- [[calor_intercambiado]]: 1800 J, entering the system.
- [[trabajo_sobre_sistema]]: 450 J, done by the surroundings on the gas.
- [[energia_interna_inicial]]: 12 000 J.
- System: closed gas in a cylinder with piston.
- Convention: heat and work are positive when entering the system.

## System definition

The system is only the gas inside the cylinder. The piston, heater, and outside air belong to the surroundings. This choice matters because [[calor_intercambiado]] crosses the boundary from the heater to the gas, while [[trabajo_sobre_sistema]] crosses the boundary through piston compression. Since no gas enters or leaves, no mass-carried energy term is required. The quantity summarizing the internal effect is [[variacion_energia_interna]], and it is later compared with [[energia_interna_inicial]] to obtain [[energia_interna_final]].

## Physical model

The closed-system first-law model is used. The gas may exchange energy with its surroundings through heat and work, but its amount of matter remains fixed. The convention of this leaf takes work done on the system as positive, so external compression supplies energy. The process does not need to be reversible or ideal; for this balance, the essential requirement is that all relevant energy transfers are counted.

## Model justification

The problem states that the gas is enclosed, so a closed-system model is appropriate. The heater supplies heat and the piston supplies mechanical work, exactly the two transfer mechanisms in the balance. No heat loss, gas leakage, or direct electrical energy crossing the chosen gas boundary is stated. Therefore the balance involving [[calor_intercambiado]], [[trabajo_sobre_sistema]], and [[variacion_energia_interna]] is sufficient to describe the gas energy.

## Symbolic solution

First apply the first law with work done on the system:

{{f:primera_ley_balance}}

Because the final state is also requested, use the definition of internal energy change:

{{f:definicion_variacion_energia_interna}}

The first relation gives [[variacion_energia_interna]]. The second relation adds that change to [[energia_interna_inicial]] to obtain [[energia_interna_final]]. The adiabatic formula is not used because the problem explicitly states that [[calor_intercambiado]] is not zero.

## Numerical substitution

The energy balance adds the two incoming transfers: 1800 J of heat and 450 J of work done on the system. Therefore [[variacion_energia_interna]] is 2250 J.

With [[energia_interna_inicial]] equal to 12 000 J, the final state is 2250 J above the initial state. Therefore [[energia_interna_final]] is 14 250 J.

## Dimensional validation

[[calor_intercambiado]] is in joules and [[trabajo_sobre_sistema]] is also in joules. Adding them gives joules, the correct unit for [[variacion_energia_interna]]. Then [[energia_interna_inicial]] and [[variacion_energia_interna]] can be added because both are energies. There is no mixture of kJ, calories, or mechanical units left unconverted, so the dimensional structure is coherent.

## Physical interpretation

The positive result means the gas ends with more internal energy than it had initially. It indicates that the two energy-transfer mechanisms reinforce each other: heat enters through [[calor_intercambiado]], and compression adds energy through [[trabajo_sobre_sistema]]. This implies that both arrows in the energy free-body diagram point into the system boundary. Therefore [[variacion_energia_interna]] increases. Physically, the energy may appear as greater molecular agitation or other microscopic internal contributions; it does not mean that heat itself is stored. The interpretation depends on the declared work convention. If the work had been subtracted, the calculation would correspond to a different convention.

---

# Real-world example

## Context

In a bicycle pump, the air inside the cylinder is compressed rapidly. During a fast compression, there is little time for thermal contact with the outside, so [[calor_intercambiado]] can be approximated as small. The hand does [[trabajo_sobre_sistema]] on the air. The dominant variable is [[variacion_energia_interna]], because it explains why the pump warms after repeated compressions.

## Physical estimation

Estimate that the hand does about 25 J of work on the trapped air during one compression. If the process is approximately adiabatic, the relevant relation is:

{{f:proceso_adiabatico}}

The order of [[variacion_energia_interna]] is therefore about 25 J for that small amount of air. This estimate is a reasonable value: the absolute magnitude is modest, but the energy is concentrated in a small gas volume and nearby walls. On the scale of a hand pump, repeated compressions can accumulate enough energy to produce a noticeable temperature rise. The approximate calculation also shows why the effect becomes weaker when compression is slow and heat escapes during the stroke.

## Interpretation

The pump warms because mechanical work from the hand does not disappear: it enters the air as [[trabajo_sobre_sistema]] and initially increases [[variacion_energia_interna]]. This implies that the gas becomes a temporary energy store. Therefore, once the gas and cylinder wall are warmer than the surroundings, [[calor_intercambiado]] can flow outward. Physically, the first law separates the stages: first there is mechanical transfer into the gas; later there may be thermal transfer out to the room. The result depends on the compression rate and on how well the pump exchanges heat with the environment.
