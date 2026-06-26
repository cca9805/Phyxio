const e=`# Exam-type example

## Problem statement

A guitar string of length sixty-five centimeters vibrates in its second harmonic. It is observed that the displacement nodes are separated thirty-two point five centimeters from each other.

Calculate:
- The wavelength of the standing wave
- The position of the third node relative to the lower bridge
- The distance from the lower bridge to the second antinode

## Data

- String length: sixty-five centimeters
- Distance between consecutive nodes: thirty-two point five centimeters
- Vibration mode: second harmonic

## System definition

The system consists of a string fixed at both ends vibrating in its second normal mode. In this mode, the string presents three nodes including the two fixed ends and two antinodes located between the nodes. The standing wave results from the superposition of traveling waves that reflect at the ends.

## Physical model

The standing wave model in a string with fixed ends is applied. The positions of nodes and antinodes are determined by the geometric relations derived from wave interference.

The fundamental magnitudes are [[lambda_onda]] for wavelength, [[distancia_entre_nodos]] for the separation between consecutive nodes, [[posicion_nodo]] for the location of each node, and [[posicion_antinodo]] for the location of each antinode.

## Model justification

The standing wave model with nodes at the ends is applicable because the string is rigidly fixed at both bridges, which imposes the condition of zero amplitude at those points. The harmonic wave hypothesis is valid for small amplitudes where the string tension remains approximately constant.

The model ceases to be valid if the amplitudes are so large that the tension varies significantly during oscillation, or if there are damping losses that alter the nodal positions.

## Symbolic solution

For the distance between consecutive nodes, we apply the fundamental formula:

{{f:distancia_nodos}}

This relation indicates that the distance between nodes is exactly half the wavelength.

Solving for the wavelength:

[[lambda_onda]] = 2 * [[distancia_entre_nodos]]

For the position of the third node, we use the nodal position formula:

{{f:posicion_nodo_lambda}}

Where [[numero_nodo]] represents the order of the node starting from zero. For the third node, the index is 2.

For the position of the second antinode, we apply the antinode position formula:

{{f:posicion_antinodo_lambda}}

Where [[numero_antinodo]] represents the order of the antinode. For the second antinode, the index is 1.

## Numerical substitution

For the wavelength, using the measured distance between nodes:

{{f:distancia_nodos}}

Solving for [[lambda_onda]], we substitute [[distancia_entre_nodos]] with the measured value.

Substituting [[distancia_entre_nodos]] with 32.5 cm, we obtain a wavelength of 65 cm.

For the position of the third node, with index 2:

{{f:posicion_nodo_lambda}}

Applying [[numero_nodo]] equal to 2 and [[lambda_onda]] equal to 65 cm, the nodal position falls at the right end.

The result of 65 cm indicates that the third node coincides with the final end of the string, verifying the boundary conditions.

For the position of the second antinode, with index 1:

{{f:posicion_antinodo_lambda}}

Applying [[numero_antinodo]] equal to 1 and [[lambda_onda]] equal to 65 cm, the requested internal antinode is obtained.

The calculation produces a position of 48.75 cm for the second antinode.

To check the local separation between a node and the nearest antinode, we use:

{{f:distancia_nodo_antinodo}}

With [[lambda_onda]] equal to 65 cm, [[distancia_nodo_antinodo]] is 16.25 cm. This distance confirms that each antinode lies one quarter wavelength from its neighboring node.

The amplitude reading is supported by:

{{f:amplitud_maxima_antinodo}}

[[amplitud_maxima]] does not change node or antinode positions; it only indicates that the antinode is the point of greatest oscillation in the standing pattern.

## Dimensional validation

Verification of dimensions:

- Wavelength [[lambda_onda]]: length units \`[L]\` - correct
- Node position [[posicion_nodo]]: length units \`[L]\` - correct
- Antinode position [[posicion_antinodo]]: length units \`[L]\` - correct
- Node-antinode distance [[distancia_nodo_antinodo]]: length units \`[L]\` - correct
- Maximum amplitude [[amplitud_maxima]]: length units \`[L]\` - correct

All resulting magnitudes have dimensions consistent with spatial magnitudes.

## Physical interpretation

The node and antinode pattern we have calculated reveals the fundamental spatial structure of a standing wave on a string with fixed ends. The coincidence between [[lambda_onda]] and the total length of the string is not arbitrary: it indicates that the system vibrates in its second normal mode, where the string accommodates exactly one complete wavelength distributed between its ends.

The points of zero amplitude —the nodes— represent locations where the traveling waves composing the pattern permanently cancel each other through destructive interference. This perfect cancellation occurs because, at every instant, one wave reaches its positive maximum while the other reaches its negative maximum with identical magnitude. The net result is permanent rest, even though the string on both sides of the node oscillates vigorously.

In contrast, antinodes manifest constructive interference. At these points, both traveling waves arrive in phase: when one reaches its maximum positive displacement, the other does the same. The superposition produces [[amplitud_maxima]], which exceeds the amplitude of either individual wave. This duality between cancellation and extreme reinforcement is the physical essence of the standing pattern.

The [[distancia_entre_nodos]] —half of [[lambda_onda]]— defines the minimum spatial scale of the pattern. If we knew only this distance, we could reconstruct the entire structure: nodes would be uniformly spaced by identical intervals, and antinodes would occupy intermediate positions exactly at [[distancia_nodo_antinodo]] from each neighboring node.

The regularity of this pattern has immediate practical implications. A violinist knows that the second harmonic resonates best when the string is excited near the central antinode, not near the nodes. An engineer designing an ultrasound transducer places detector electrodes at antinodes to maximize sensitivity. Knowledge of these positions is not merely numeric: it determines where to act on the system to obtain the desired effect.

If the string length were modified while maintaining tension, the entire pattern would scale proportionally. A shorter string would produce closer nodes and antinodes, implying a smaller [[lambda_onda]] and therefore a higher vibration frequency. This relationship between geometry, wavelength, and frequency is the foundation of tuning string instruments.

---

# Real-world example

## Context

In the design of ultrasound transducers for medical applications, it is crucial to know the exact distribution of nodes and antinodes in the piezoelectric element. These devices operate through standing waves to concentrate energy at specific points.

A medical transducer operates at a frequency of one megahertz, generating standing waves in a quartz crystal. The speed of sound propagation in quartz is five thousand seven hundred meters per second.

## Physical estimation

The piezoelectric crystal has a thickness of two millimeters. To determine the distribution of nodes and antinodes:

First we estimate the wavelength in the material. Using the basic relation where velocity equals frequency multiplied by wavelength, we solve for wavelength equivalent to velocity divided by frequency.

Substituting values: five thousand seven hundred meters per second divided by one million hertz gives zero point zero zero five seven meters, equivalent to five point seven millimeters.

Comparing with the crystal thickness (two millimeters), we observe that the thickness is less than half wavelength (two point eighty-five millimeters). This implies that the crystal operates in half-wave standing mode.

In this mode, the ends of the crystal function as displacement nodes, and there is a single central antinode where the oscillation amplitude is maximum.

The distance between nodes in this material would be approximately two point eighty-five millimeters.

## Interpretation

The design shows that the crystal operates in half-wave standing mode, with the ends being displacement nodes. The placement of detection electrodes at the central antinode (one millimeter from each face) maximizes the transducer sensitivity.

The frequency of one megahertz is typical for high-resolution medical imaging. The small difference between the actual thickness and half wavelength indicates that the design could be optimized by slightly adjusting the frequency or thickness to achieve perfect resonance.

This example illustrates how the abstract concept of nodes and antinodes directly determines the physical design and performance of high-technology medical devices. The exact position of the central antinode is critical for the efficiency of the transducer.
`;export{e as default};
