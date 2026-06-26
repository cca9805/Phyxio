const e=`# Exam-type example

## Problem statement

Estimate the tidal acceleration produced by the Moon on Earth and compare it with a simplified central acceleration scale. Use lunar perturbing mass [[M]] = 7.35e22 kg, Earth radius [[R]] = 6.37e6 m, and mean center-to-center distance [[d]] = 3.84e8 m. Then, if a secondary orbital perturbation has [[ap]] = 1.1e-6 m/s2 and the central acceleration of the system is [[ac]] = 2.7e-3 m/s2, decide whether the perturbation can be treated as small.

## Data

The relevant data are [[G]] = 6.674e-11 N*m2/kg2, [[M]] = 7.35e22 kg, [[R]] = 6.37e6 m, and [[d]] = 3.84e8 m for the tidal estimate. For the perturbative criterion the data are [[ap]] = 1.1e-6 m/s2 and [[ac]] = 2.7e-3 m/s2. The main unknown in the first part is [[am]]. The second reading asks for [[eps]], not for a new force.

## System definition

The affected body is Earth and the perturber is the Moon. Earth is not treated as a particle, because the aim is to compare the lunar field between points separated by a scale of the order of its radius [[R]]. The Moon, however, is approximated as an external concentrated mass [[M]] located at a distance [[d]] much larger than Earth's radius. That separation permits a first-order approximation.

## Physical model

The physical model is a first-order Newtonian tidal estimate. The core formula that calculates the differential acceleration scale is:

{{f:aceleracion_mareal}}

To decide whether a secondary acceleration can be studied as a perturbation of a central orbit, use:

{{f:parametro_perturbativo}}

The two conceptual relations of the leaf are also mentioned to declare the limits of the model:

{{f:torque_mareal_conceptual}}

{{f:aceleracion_total_conceptual}}

A numerical tidal torque model [[tau]] is not used here because the problem gives no deformation, phase lag, or internal dissipation.

## Model justification

The geometric condition is reasonable because [[d]] is much larger than [[R]]. Therefore the lunar field changes only slightly across Earth and can be approximated through a first-order gradient. In addition, the second part does not ask for the complete trajectory, but for a scale decision: whether [[ap]] is small compared with [[ac]]. For that decision [[eps]] is sufficient, provided one remembers that it does not give orbital direction.

## Symbolic solution

First identify the tidal scale [[am]] with the differential acceleration relation. The expected physical reading is that [[am]] grows linearly with [[M]] and [[R]], but decreases very strongly when [[d]] increases. Then compute [[eps]] as the ratio between [[ap]] and [[ac]]. If that ratio is much smaller than one, the perturbation does not destroy the central motion as a first approximation.

One may also make a qualitative comparison: if the Moon were twice as far away, the tide would not be half as large, but much smaller. This conclusion is obtained before inserting numbers and helps detect wrong distance dependence.

To make the full conceptual structure explicit, the symbolic solution also states that a precise orbital description would require vector addition of accelerations:

{{f:aceleracion_total_conceptual}}

And that any rotational evolution due to tides would require an additional torque model:

{{f:torque_mareal_conceptual}}

## Numerical substitution

For the lunar tide one obtains approximately [[am]] = 1.10e-6 m/s2. The order of magnitude is a microacceleration, very small compared with ordinary surface gravity. For the orbital perturbation, [[eps]] = 1.1e-6 / 2.7e-3 = 4.1e-4. This value is clearly smaller than one and also smaller than one hundredth.

If one wanted to compare with another perturber, [[M1]], [[M2]], [[d1]], [[d2]], [[am1]], and [[am2]] would be introduced through:

{{f:comparacion_perturbadores}}

In this example it is not necessary because only one absolute tide and one simple perturbative criterion are required.

## Dimensional validation

The expression for [[am]] combines [[G]], [[M]], [[R]], and [[d]] to produce acceleration units. The constant [[G]] contributes length cubed divided by mass and time squared; multiplying by mass and radius gives length to the fourth over time squared; dividing by distance cubed leaves length over time squared. The ratio [[eps]] has no units because it divides two accelerations.

## Physical interpretation

The result shows why the lunar tide can matter even though its differential acceleration is tiny. It does not compete with a person's weight, but it acts on entire oceans and does so periodically. The parameter [[eps]] indicates that the proposed secondary perturbation is small compared with the central acceleration, so an initial perturbative treatment is reasonable. Still, if that perturbation repeats over many orbits, accumulation and direction must be studied.

# Real-world example

## Context

A team designing the orbit of a satellite around Earth wants to decide whether the Moon can be ignored during a preliminary estimate. The satellite follows central dynamics dominated by Earth, but the Moon produces a secondary acceleration that slowly modifies orbital geometry. The goal is not a precise ephemeris, but an initial modeling criterion.

## Physical estimation

The team estimates a central acceleration [[ac]] of 8.7 m/s2 for a low orbit and a lunar perturbing acceleration [[ap]] of about 3.0e-5 m/s2. With the perturbative criterion, [[eps]] is about 3.4e-6. As an instantaneous scale it is extremely small. However, the mission lasts years and requires positional precision, so the effect is not removed from the final simulator: it is kept as a cumulative perturbation.

For a geostationary satellite, [[ac]] would be lower and the Moon's relative perturbation would be more significant. This comparison shows that the same perturber does not always have the same importance: it depends on the central scale of the motion and on orbital distance.

## Interpretation

The correct reading is not "the Moon does not matter" or "the Moon dominates." The correct reading is that the Moon acts as a small perturbation compared with central dynamics in low orbit, but it can accumulate changes in phase, node, or inclination over long scales. The criterion [[eps]] selects the modeling level: sufficient for a quick estimate, insufficient for precise navigation. This distinction is exactly the physical use of the leaf.
`;export{e as default};
