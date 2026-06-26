const e=`# Exam-type example

## Problem statement

In a laboratory, a long spring is observed. In the first setup, a pulse advances along the spring while the end is moved sideways. The total disturbance amplitude is 4.0 cm and the measured perpendicular component is 3.6 cm. In the second setup, coils are compressed along the direction of the spring. The total amplitude is again 4.0 cm and the measured parallel component is 3.2 cm.

Classify each setup as predominantly transverse or longitudinal using the indices of this leaf. Explain why classification depends on disturbance orientation and not on the general appearance of the spring.

## Data

- Sideways setup: total amplitude of 4.0 cm and perpendicular component of 3.6 cm.
- Compression setup: total amplitude of 4.0 cm and parallel component of 3.2 cm.
- Propagation direction: along the spring.
- Medium: mechanical spring with two different excitations.

## System definition

The system is the pulse travelling along the spring. The propagation direction is fixed by the spring axis. The magnitude [[A]] is the common scale for comparing components, while [[u_perp]] and [[u_parallel]] indicate how the disturbance is oriented relative to advance.

The object "spring" is not classified once and for all. Each excitation mode is classified. The same medium can display a transverse pulse when displaced sideways and a longitudinal pulse when compressed.

## Physical model

The model separates the disturbance into perpendicular and parallel components. In the sideways setup, [[u_perp]] should dominate and the index [[C_T]] should be high. In the compression setup, [[u_parallel]] should dominate and the index [[C_L]] should be high.

The decision is geometric. First the propagation direction is fixed; then disturbance components are compared. The absolute size of [[A]] alone does not decide the wave type.

## Model justification

The model is valid because both pulses are recognizable, the advance direction is clear, and components are measured relative to the same spring axis. The total amplitude used for normalization is common within each setup.

It would fail if the spring rotated, if compression and lateral displacement were mixed without separation, or if the perpendicular component were measured in one setup and amplitude in another.

## Symbolic solution

For the sideways setup, use the transverse index:

{{f:coeficiente_transversal}}

The reading compares [[u_perp]] with [[A]]. If the quotient is close to one, the disturbance is mostly perpendicular to advance.

For the compression setup, use the longitudinal index:

{{f:coeficiente_longitudinal}}

The reading compares [[u_parallel]] with [[A]]. If the quotient is close to one, the disturbance is mostly parallel to advance.

## Numerical substitution

For the sideways setup, dividing 3.6 cm by 4.0 cm gives approximately 0.90. Therefore [[C_T]] is high and the pulse is classified as predominantly transverse.

For the compression setup, dividing 3.2 cm by 4.0 cm gives approximately 0.80. Therefore [[C_L]] is high and the pulse is classified as predominantly longitudinal.

Both results are dimensionless because they compare lengths with lengths. They do not measure energy or propagation speed; they measure orientation dominance.

## Dimensional validation

- Transverse quotient: a length \`[L]\` divided by a length \`[L]\` produces an index \`[1]\`.
- Longitudinal quotient: a length \`[L]\` divided by a length \`[L]\` produces an index \`[1]\`.
- The classification does not depend on centimetres or metres if all lengths are converted consistently.

Dimensional validation confirms that [[C_T]] and [[C_L]] are comparison indices. The physics enters when deciding which component corresponds to each direction.

## Physical interpretation

The first setup shows a transverse wave because the main disturbance occurs sideways relative to advance. The pulse travels along the spring, but spring segments move laterally. A rotated drawing would still represent the same wave type if perpendicularity is preserved.

The second setup shows a longitudinal wave because coils approach and separate in the same direction in which the compression advances. The absence of a large vertical height does not mean absence of amplitude; amplitude lies in the parallel compression.

If comparable values of [[C_T]] and [[C_L]] appeared in one setup, it would be better to speak of a mixed wave or combined mode. Forcing a pure label would hide physical information about how the medium deforms.

Physically, the two classifications also imply different measurement strategies. In the transverse setup, a lateral position sensor would capture the relevant disturbance directly. In the longitudinal setup, the same sensor could miss the essential compression pattern, so spacing between coils or pressure-like compression must be observed instead.

The result therefore changes more than the name of the wave. It tells which material deformation carries the signal, which variable should be measured, and why the same spring can display different wave behavior when the excitation direction changes.

# Real-world example

## Context

In a classroom demonstration, a tense string and an air column in a tube are compared. The string shows visible lateral displacement when a pulse passes. The tube shows no visible sideways displacement, but a microphone detects pressure variations aligned with the advance of sound.

## Physical estimation

On the string, if the lateral disturbance is about 9 mm and total visible amplitude is about 10 mm, the transverse index is of order 0.9. That supports a transverse classification. In the tube, if the parallel component associated with compression dominates the measurable disturbance, the longitudinal index is the relevant one.

The quantitative estimate is not intended to measure all wave energy. It decides dominant orientation. An index near one indicates clear dominance; a value near 0.5 would require checking whether the mode is mixed or whether the measurement does not separate components well.

## Interpretation

The comparison shows why visible crests are not enough. The string allows perpendicular displacement to be seen; sound requires reading compressions and rarefactions. Both are waves because they transport disturbance, but the medium participates differently.

In real applications, this distinction decides which sensor to use. For a string, a lateral camera is enough; for sound, pressure or density is needed. Correct classification prevents searching for visual amplitude where the relevant physical magnitude is different.
`;export{e as default};
