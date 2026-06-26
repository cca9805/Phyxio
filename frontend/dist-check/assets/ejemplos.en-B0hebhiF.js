const e=`# Exam-type example

## Problem statement

A rectangular loop is placed in a region where the magnetic field is uniform. The field has magnitude 0.40 T, the loop area is 0.030 m², and the initial orientation factor [[cos_theta]] is 0.75. The loop is then rotated until the orientation factor becomes 0.20. Determine the initial flux, final flux, and flux change.

## Data

- Uniform magnetic field: 0.40 T.
- Loop area: 0.030 m².
- Initial orientation factor: 0.75.
- Final orientation factor: 0.20.
- Same chosen normal throughout the process.

## System definition

The physical system is a single flat loop. The relevant surface is the area enclosed by the loop, not the wire thickness. The normal is chosen once and kept when comparing [[Phi_i]] and [[Phi_f]].

## Physical model

The model is uniform field and flat surface. The core quantities are [[B]], [[B_perp]], [[A]], [[cos_theta]], [[Phi_B]], and [[DeltaPhi]]. Since the field is uniform and the area does not change, the physical change comes only from orientation.

## Model justification

The statement specifies a uniform field and a flat loop, so flux can be described with the algebraic model. The model would no longer be sufficient if the field varied strongly over the loop, if the surface deformed, or if the normal convention changed between initial and final states.

## Symbolic solution

First calculate the flux in each state using:

{{f:flujo_uniforme}}

The normal component that justifies the orientation reading is:

{{f:componente_normal}}

The maximum reference scale for this loop and field is:

{{f:flujo_maximo}}

Finally, the change that matters for induction is obtained using:

{{f:variacion_flujo}}

## Numerical substitution

For the initial state, multiplying 0.40 T by 0.030 m² and by 0.75 gives 0.0090 Wb. Therefore [[Phi_i]] has value 0.0090 Wb.

For the final state, the same product using factor 0.20 gives 0.0024 Wb. Therefore [[Phi_f]] has value 0.0024 Wb.

The initial normal component [[B_perp]] is obtained by applying factor 0.75 to the 0.40 T field, giving 0.30 T. In the final state, applying factor 0.20 gives a normal component of 0.080 T.

The maximum scale is obtained from field and area with no orientation loss; the result is 0.012 Wb. Thus [[Phi_max]] checks that both real fluxes stay below the maximum.

The final value minus the initial value gives a change of -0.0066 Wb. Therefore [[DeltaPhi]] is negative and its magnitude is 0.0066 Wb.

## Dimensional validation

Tesla multiplied by square metre produces weber. In dimensional notation, \`T·m²\` corresponds to \`[M L² T⁻² I⁻¹]\`, which is the dimension of [[Phi_B]].

The factor [[cos_theta]] is dimensionless, so it does not alter units. The difference between [[Phi_f]] and [[Phi_i]] also keeps weber, so [[DeltaPhi]] has the same physical unit as flux.

## Physical interpretation

Flux decreases because the loop is less effectively oriented toward the field. Neither [[B]] nor [[A]] changes; the change is entirely in [[cos_theta]] and in the normal component [[B_perp]]. Physically, the loop remains inside the same field, but it presents less projected area to the field lines.

The negative sign of [[DeltaPhi]] does not indicate an impossible flux. It indicates that, with the chosen normal, final flux is lower than initial flux. This sign will be essential when studying induced emf and the opposition described by Lenz's law.

If rotation continued until the loop was inverted, the sign of [[Phi_B]] could change even though [[B]] and [[A]] remained the same. This possibility shows that flux is an oriented reading, not a simple amount of field accumulated without direction.

# Real-world example

## Context

In a school dynamo, a coil rotates between magnetic poles. Although the magnet field is almost constant, flux changes because the coil orientation changes. This periodic change of [[Phi_B]] is the basis of elementary electrical generation.

## Physical estimation

Suppose a coil with effective area 0.005 m² in a field of 0.20 T. The maximum flux of one turn is approximately 0.001 Wb. When the coil rotates from perpendicular crossing to tangent orientation, flux goes from that maximum value to a value near zero.

If the coil has many turns, total linked flux increases in proportion to the number of turns, but the physical idea does not change: what matters is that [[DeltaPhi]] repeats cycle after cycle.

## Interpretation

The device does not need to increase [[B]] to produce flux variation; changing orientation is enough. This reading separates the geometric cause from the magnetic cause and explains why generators convert mechanical rotation into an electrical signal.

The correct analysis order is to identify [[Phi_max]], read how [[cos_theta]] changes, and then interpret [[DeltaPhi]]. If only the magnet field is considered, the main reason why the dynamo works is missed.

In a real dynamo, increasing coil area is not always the best solution, because it also increases size and resistance. Flux reading helps decide whether to improve [[B]], increase [[A]], or change the effective orientation during rotation.

This also explains why a small classroom dynamo can still produce a visible signal. Its absolute flux may be modest, but the repeated change of orientation creates a persistent sequence of flux changes. The practical design question is therefore not only how large [[Phi_max]] is, but how reliably the device produces [[DeltaPhi]] during each cycle.
`;export{e as default};
