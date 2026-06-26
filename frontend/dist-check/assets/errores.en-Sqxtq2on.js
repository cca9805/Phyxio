const e=`# Common Errors in Standing-Wave Condition

## Conceptual errors

The most common error is believing that a standing wave is motionless at every point. The spatial pattern remains fixed, but most of the medium oscillates. Nodes have zero displacement by cancellation, while antinodes reach maximum amplitude. The word standing describes the pattern, not total absence of motion.

Another conceptual error is forgetting that standing behavior depends on boundaries. Without boundary conditions, there is no discrete selection of modes. A free traveling wave can have many wavelengths, but a cavity only sustains those that fit its geometry.

## Model errors

A model error is applying the fixed-string condition to every cavity. Open tubes, closed tubes, membranes, and plates have different conditions. The idea of discrete mode remains, but the fraction of [[lambda]] fitting in [[L]] changes.

It is also wrong to ignore losses, stiffness, or dispersion when they dominate the experiment. If nodes become blurred or frequency changes with amplitude, the ideal model no longer describes the situation.

## Mathematical errors

The usual algebraic error is confusing [[L]] and [[lambda]]. In the fundamental mode of a fixed string, [[L]] contains half a wavelength, not a full wavelength. Another error is forgetting that doubling [[n]] doubles [[f_n]] only if [[L]] and [[v]] remain constant.

Units are also mixed: centimeters for [[L]] with meters per second for [[v]], or frequency in kilohertz without conversion. Dimensional coherence must produce frequency in \`[T⁻¹]\`.

## Interpretation errors

A correct result can be misread if one believes that any nearby frequency produces the mode. The condition says that there are allowed frequencies, but observed amplitude depends on coupling and losses. A possible mode may not appear if it is not excited properly.

[[f_n]] is also sometimes read as a property only of the source. It actually combines source, medium, and boundary. Changing [[L]] changes the allowed frequencies even if the source can emit the same signal.

## Quick self-control rule

Before closing a problem, check that [[L]] is positive, [[lambda]] is positive, [[n]] is a positive integer, and [[v]] is coherent with the medium. Then verify that [[f_n]] corresponds to that same mode. If the boundary is not an ideal fixed string boundary, switch model before trusting the number.
`;export{e as default};
