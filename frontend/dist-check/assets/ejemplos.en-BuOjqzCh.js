const e=`# Exam-type example

## Problem statement

A tense string produces a periodic transverse wave. The distance between two consecutive crests is 0.80 m and the oscillation frequency is 12 Hz. In another trial with the same string, a tension of 48 N and a linear density of 0.50 kg/m are measured. Estimate the pattern speed using [[lambda]] and [[f]], compare it with the string model, and explain what that speed represents.

## Data

The pattern data are [[lambda]] equal to 0.80 m and [[f]] equal to 12 Hz. The medium data in the second trial are [[T]] equal to 48 N and [[mu]] equal to 0.50 kg/m. The target magnitude is [[v]]. The amplitude [[A]] is not needed to calculate speed if the wave is small, but it reminds us that one point of the string moves locally while the shape advances.

## System definition

The system is a segment of string approximated as uniform and tense. The hand generating the disturbance and the final support are not studied. A region is observed where the pattern is periodic and slopes are small. This definition separates local motion of the string from propagation of the wave shape.

## Physical model

Two compatible models are applied. The first is the general periodic-wave relation, connecting [[lambda]], [[f]], and [[v]]. The second is the ideal string model, where [[T]] provides restoration and [[mu]] provides inertia. If both results have the same order of magnitude, the statement is coherent with a mechanical wave on a string.

## Model justification

The physical justification is that there is a clear material medium: the string. We assume an ideal model because the disturbance is small, the string is considered uniform, tension is constant, and friction is neglected during the observation. The disturbance is transverse, the statement describes repeated crests, and it does not mention strong dissipation or large deformation. Therefore a periodic reading of [[lambda]] and [[f]] is valid. The second trial also provides medium properties, [[T]] and [[mu]], which are exactly the variables needed to explain why the medium transmits the wave at a certain speed.

This is why the calculation belongs to this leaf rather than to electromagnetic waves or to isolated oscillations.

## Symbolic solution

First calculate speed from spatial and temporal repetition.

{{f:onda_mecanica_velocidad}}

Then calculate the speed expected for an ideal string using medium properties.

{{f:velocidad_cuerda}}

The symbolic comparison separates two questions: how the pattern repeats and what medium properties sustain that propagation.

## Numerical substitution

With [[lambda]] of 0.80 m and [[f]] of 12 Hz, the pattern speed is close to 9.6 m/s. With [[T]] of 48 N and [[mu]] of 0.50 kg/m, the string speed is close to 9.8 m/s. The difference is small for a school estimate, so the data are compatible.

## Dimensional validation

The pattern relation combines \`[L]\` with \`[T⁻¹]\` and produces \`[L T⁻¹]\`. The string relation combines \`[M L T⁻²]\` with \`[M L⁻¹]\`; the quotient has dimension \`[L² T⁻²]\` and its square root gives \`[L T⁻¹]\`. The validation confirms that speed is being calculated, not amplitude or energy.

## Physical interpretation

The result means that the wave shape advances about ten meters each second. It does not mean that a marked point of the string travels ten meters per second along the string. That point oscillates locally with amplitude [[A]]. The coherence between both estimates shows that pattern speed can be read from the drawing and also explained from the mechanical properties of the medium.

# Real-world example

## Context

In a laboratory, a string must be adjusted so that a mechanical signal reaches the other end faster. The technician can increase tension or replace the string with a lighter one. The practical question is not only the value of [[v]], but which medium variable should be modified and what safety limit appears.

## Physical estimation

Before calculating, the physical estimation is made by order of magnitude and by medium scale. Increasing [[T]] is expected to raise speed because the string restores equilibrium more strongly. Increasing [[mu]] is expected to lower speed because the medium has more inertia per unit length. A reasonable value for a laboratory string lies on the scale of meters per second or tens of meters per second, not on the scale of light and not centimeters per hour. If doubling tension barely changed the result, or if a heavier string transmitted faster without changing another parameter, the model or data would need review.

## Interpretation

The real application shows why a mechanical wave is not defined only by its shape. Two waves with the same [[lambda]] and [[f]] may require different media if their speed is supported by different mechanisms. On a string, tension and linear inertia are relevant; in air, compressibility and density are relevant. This leaf trains precisely that reading: identify medium, disturbance, repetition scale, and restoring mechanism before trusting a formula.

It also supports a simple technical decision. If higher speed is needed without changing string length, increasing [[T]] may help, but only up to the safe limit of the material. If a string with lower [[mu]] is chosen, speed also increases, although mechanical strength and produced sound may change. The answer is therefore physical, not merely algebraic: the medium decides what adjustment is meaningful.
`;export{e as default};
