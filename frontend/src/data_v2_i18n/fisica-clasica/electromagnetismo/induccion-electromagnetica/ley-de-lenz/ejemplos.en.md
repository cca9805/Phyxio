# Exam-type example


## Problem statement

A circular loop faces a magnet whose north pole approaches the loop. The positive normal is chosen pointing toward the magnet. During 0.050 s, linked magnetic flux increases by 0.0040 Wb. Determine the sign of induced emf, its average magnitude for one turn, and the physical direction of induced current.

## Data

- Flux change [[cambio_de_flujo_magnetico]]: increase of 0.0040 Wb.
- Interval [[intervalo_de_tiempo]]: 0.050 s.
- Number of turns [[numero_de_espiras]]: 1.
- Positive normal: toward the magnet.
- The circuit is closed and induced current can flow.

## System definition

The system is a closed loop. The surface is the one enclosed by the loop, and the positive normal points toward the magnet. With that convention, approaching the magnet increases [[flujo_magnetico]], so the change has positive sign.

## Physical model

Lenz's law is used in the average Faraday form. Induced emf must have sign opposite to the flux increase. If current flows, its associated magnetic field must try to slow the increase of [[flujo_magnetico]].

## Model justification

The statement fixes the three pieces that make Lenz applicable: a surface enclosed by the loop, a positive normal pointing toward the magnet, and an increase of [[flujo_magnetico]] during [[intervalo_de_tiempo]]. With these references, the problem is not ambiguous: flux change is positive and the induced response must have the opposite sign.

An average reading is also justified because the total flux change and interval are given, not a detailed time function. Circuit resistance is not needed to decide direction; it would only be needed to compute current intensity. The closed loop lets the polarity of [[epsilon_ind]] be translated into an induced current direction.

## Symbolic solution

First compute the average rate of change [[rapidez_media_de_cambio_de_flujo]]:

{{f:tasa_cambio_flujo}}

Then apply the Lenz-Faraday form:

{{f:ley_lenz_faraday}}

The same opposition can be seen with:

{{f:ley_lenz_tasa}}

For the pure sign rule:

{{f:regla_signos_lenz}}

## Numerical substitution

Flux increases by 0.0040 Wb in 0.050 s. The [[rapidez_media_de_cambio_de_flujo]] has magnitude 0.080 Wb/s and positive sign relative to the chosen normal.

Because [[numero_de_espiras]] is 1, the average magnitude of [[epsilon_ind]] is 0.080 V. The sign of emf is negative relative to the positive reference associated with flux increase, because Lenz requires opposition to the change.

Physically, induced current must produce a field reducing the flux increase toward the magnet. With the right-hand rule, this fixes the circulation direction that makes the face of the loop facing the magnet behave like a pole opposing approach.

## Dimensional validation

Weber divided by second produces volt, coherent with [[epsilon_ind]]. [[numero_de_espiras]] is dimensionless and does not change units. The sign rule uses [[s_flujo]] and [[s_ind]] only as conceptual indicators.

Physical coherence also holds: if the magnet approaches, the loop does not help flux increase further. Induced polarity requires external work to maintain the approach.

## Physical interpretation

The numerical value is not the main point of the example. The key reading is that flux increases and induced current is oriented to oppose that increase. The system turns mechanical work of moving the magnet into electrical energy and heat.

If the magnet moved away with the same speed, the magnitude could be the same, but polarity would reverse. This comparison shows why Lenz is a law of sign and causality, not only a voltage recipe.

The real response could be small if loop resistance were large. Even so, induced emf direction would remain the same, because it depends on flux change and not on how easily current flows.

If the chosen normal is reversed, the written signs of [[cambio_de_flujo_magnetico]] and [[epsilon_ind]] change, but the physical conclusion does not. The face of the loop still opposes the approaching magnet. This check prevents confusing mathematical convention with real physical direction.

# Real-world example


## Context

In a magnetic brake, a conducting disk rotates between magnets. Motion changes flux linked by conducting paths inside the disk, and induced currents appear.

## Physical estimation

If the disk rotates faster, flux change for each conducting region occurs over less time and local induced emf increases. Induced current is not oriented to accelerate the disk, but to produce a magnetic effect opposing relative motion.

An order-of-magnitude estimate compares rotation speed, field, and effective area of induced current paths. If the characteristic time falls from tenths of a second to milliseconds, opposition can grow strongly.

## Interpretation

Lenz's law explains why the brake needs no mechanical contact. Electromagnetic opposition appears because motion tries to change linked flux, and induced response is oriented against that change.

Energy does not disappear. Mechanical energy of the disk is transformed mainly into heat through induced currents. That is why these brakes may heat up even without contact friction.

The application also shows that Lenz is not only a rule for loops drawn on paper. It is a design criterion: if stronger braking is desired, flux change is increased or induced current is made easier; if less heating is desired, that current or coupling is limited.

A simple quantitative reading compares two speeds. If the disk doubles its speed and the rest of the system stays in the same regime, flux-change rate increases roughly in the same proportion. Polarity does not change because of that; the intensity of opposition changes.