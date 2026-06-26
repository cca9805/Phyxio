const e=`# Exam-type example

## Problem statement

A satellite of mass [[m]] = 800 kg moves around Earth, whose central mass is [[M]] = 5.97e24 kg. At one point of the trajectory it is at [[r]] = 8.0e6 m from Earth's center and its instantaneous speed is [[v]] = 7000 m/s. Compute [[K]], [[U]], [[E]], and [[eps]], and classify the orbital state energetically.

## Data

Use [[G]] = 6.674e-11 N*m2/kg2, [[M]] = 5.97e24 kg, [[m]] = 800 kg, [[r]] = 8.0e6 m, and [[v]] = 7000 m/s. The required magnitudes are kinetic energy [[K]], potential energy [[U]], total energy [[E]], and specific energy [[eps]]. The reference threshold is [[E0]] = 0, associated with ideal escape.

## System definition

The system is an approximate two-body problem: Earth acts as the dominant central mass and the satellite as the orbiting mass. Atmospheric drag, thrust, and lunar perturbations are not included. Position is measured from Earth's center and potential energy is measured with zero reference at infinity.

## Physical model

The model combines kinetic energy, potential energy, and state specific energy. The core relations are:

{{f:energia_cinetica}}

{{f:energia_potencial}}

{{f:energia_total_desde_k_u}}

{{f:energia_especifica_estado}}

The classification is closed with:

{{f:clasificacion_orbital_conceptual}}

The relation involving [[a]] is not used directly because the statement gives an instantaneous state, not the semi-major axis of a bound orbit.

## Model justification

The problem gives [[r]] and [[v]], so state energy is the natural tool. The central mass [[M]] dominates and the speed is non-relativistic, making the Newtonian model adequate. Since no engine or drag is mentioned, [[E]] can be interpreted as conserved mechanical energy over the ideal segment.

## Symbolic solution

First compute [[K]] from speed. Then compute [[U]], keeping the negative sign imposed by the infinity reference. The total energy [[E]] is the sum of both. The specific energy [[eps]] is calculated per unit mass and must have the same classificatory sign as [[E]].

To connect with bound orbits, if the result is negative one could compute an equivalent semi-major axis through:

{{f:energia_total_ligada}}

or per unit mass:

{{f:energia_especifica_ligada}}

If the state were circular, one would check it with:

{{f:energia_circular}}

In this exercise those relations are complementary readings, not substitutes for the calculation from [[r]] and [[v]].

## Numerical substitution

The kinetic energy is approximately [[K]] = 1.96e10 J. The potential energy is approximately [[U]] = -3.98e10 J. Therefore [[E]] = [[K]] + [[U]] ≈ -2.02e10 J. Dividing by [[m]] gives [[eps]] ≈ -2.52e7 J/kg.

The sign is negative in both [[E]] and [[eps]], so the state is bound. The threshold [[E0]] has not been reached. The satellite does not have enough energy to escape in this conservative model.

## Dimensional validation

[[K]] has units kg*m2/s2, equivalent to joule. [[U]] combines [[G]], [[M]], [[m]], and [[r]], also giving joule. Adding [[K]] and [[U]], [[E]] keeps energy units. Dividing by [[m]], [[eps]] becomes J/kg, equivalent to m2/s2.

## Physical interpretation

The satellite moves fast, but not fast enough to overcome the depth of the gravitational well at that radius. Negative potential energy dominates in absolute value over positive kinetic energy, leaving [[E]] negative. The physical conclusion is not merely that a negative number appears: it means the satellite belongs to a bound trajectory unless additional energy is supplied or non-conservative forces appear. The arithmetic gives the sign, but the sign gives the fate of the orbital state. This final reading prevents the worked example from becoming a calculator exercise.

# Real-world example

## Context

A spacecraft in a parking orbit must decide whether a maneuver leaves it in a bound transfer or in escape. Engineers know the state after the burn and compute [[eps]] so the decision does not depend on the spacecraft's particular mass. This reading allows mission designs with different spacecraft masses to be compared.

## Physical estimation

Before the maneuver, the spacecraft has negative [[eps]] and is therefore bound. The engine increases [[v]], raises [[K]], and makes [[eps]] approach zero. If after the burn [[eps]] remains negative, the trajectory is a larger orbit or an elliptical transfer. If [[eps]] reaches [[E0]], ideal escape is reached. If [[eps]] is positive, the spacecraft leaves with excess energy.

A quick estimate compares [[eps]] before and after the burn. It is not enough to say that speed increased: one must check whether the kinetic-energy increase compensates the negative potential energy at the maneuver radius.

## Interpretation

Orbital energy acts as a mission decision criterion. If [[eps]] is negative, the plan remains within bound trajectories and a semi-major axis [[a]] can be discussed. If [[eps]] is non-negative, the trajectory type changes and the operational model becomes escape or open trajectory. The physical value is avoiding the confusion between "moving faster" and "escaping." That distinction is essential before selecting a detailed transfer geometry or estimating propellant needs accurately.
`;export{e as default};
