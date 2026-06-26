const e=`# Exam-type example

## Problem statement

A block of [[m]] = 10 kg slides on a rough horizontal surface. The kinetic friction coefficient is [[mu]] = 0.47 and the block travels [[d]] = 15 m before stopping. Take [[g]] = 9.8 m/s^2. Find [[fr]], [[Wr]], [[Edis]], and [[Pdis]] if the process lasts [[t]] = 5 s.

The task is not only numerical: it requires separating signed friction work from positive dissipated energy. If those two readings are mixed, the energy balance gets the wrong sign.

## Data

Given data: [[m]] = 10 kg, [[mu]] = 0.47, [[d]] = 15 m, [[g]] = 9.8 m/s^2, and [[t]] = 5 s. The surface is horizontal and no additional vertical force is mentioned, so [[N]] can be computed from weight.

Target quantities: [[fr]] measures contact intensity, [[Wr]] closes the signed mechanical balance, [[Edis]] expresses transformed energy, and [[Pdis]] estimates the rate of dissipation.

## System definition

The system is the block. The table and thermal environment are outside the system, so friction performs external work on the block. With this choice, the block's mechanical energy decreases and friction work must be negative.

If the system also included the table and thermal environment, total energy would not disappear; it would change form. This system choice explains why [[Wr]] and [[Edis]] do not carry the same sign.

## Physical model

The contact is modeled as dry Coulomb friction. The friction force depends on [[mu]] and [[N]]:

{{f:fuerza_rozamiento_cinetico}}

Since the block slides a distance [[d]] while friction opposes motion, work is computed with:

{{f:trabajo_rozamiento}}

Dissipated energy is reported as a positive quantity:

{{f:energia_disipada_rozamiento}}

And average power is obtained from:

{{f:potencia_disipada_media}}

## Model justification

The model is defensible because the statement describes a rough horizontal surface, a constant coefficient, and a sliding segment. There is no evidence of lubrication, rolling, dominant drag, or heating capable of changing [[mu]] during the motion.

It also asks for a global energy estimate, not a microscopic contact simulation. Therefore [[fr]], [[d]], and [[t]] are enough to describe average dissipation.

## Symbolic solution

On a horizontal surface, the normal force is [[N]] = [[m]][[g]]. Then [[fr]] follows from the Coulomb model. With [[fr]] and [[d]], friction work is negative because force and displacement have opposite directions.

The symbolic chain is: first [[N]], then [[fr]], then [[Wr]], then [[Edis]], and finally [[Pdis]]. This sequence avoids using dissipated energy before fixing the sign of work.

The mechanical balance that organizes the loss between initial and final state is:

{{f:balance_energia_mecanica_disipacion}}

In this example, the balance acts as a check: if the block ends with less mechanical energy, [[Wr]] must explain that difference with negative sign.

## Numerical substitution

The normal force is [[N]] = 10 x 9.8 = 98 N. The friction force is [[fr]] = 0.47 x 98 = 46.06 N.

The work is [[Wr]] = -46.06 x 15 = -690.9 J. The dissipated energy is [[Edis]] = -[[Wr]] = 690.9 J. The average dissipated power is [[Pdis]] = 690.9 / 5 = 138.18 W.

## Dimensional validation

The force [[fr]] is in newtons because [[mu]] is dimensionless and [[N]] is measured in newtons. Work [[Wr]] is in joules because newton times meter equals joule. Power [[Pdis]] is in watts because joule divided by second equals watt.

The sign also validates the result: [[Wr]] is negative for the block, while [[Edis]] is positive. If both appeared positive without changing the system, the reasoning would contain a conceptual error.

## Physical interpretation

The block loses 690.9 J of mechanical energy. Physically, this means the block-surface interaction has converted organized motion into heating, vibration, and microscopic deformation of the surfaces. The result is consistent with the chosen system: the block alone receives negative friction work, while the surrounding contact region receives the transformed energy.

The value also indicates which physical change would matter most. Increasing [[mu]] or [[N]] would make the contact more intense; increasing [[d]] would let the same contact act for a longer path. In each case [[Edis]] increases because more mechanical energy is degraded. If the same [[Edis]] occurred in a shorter [[t]], [[Pdis]] would increase even though the total energy loss was unchanged, so the event would be thermally more severe.

Therefore the answer is not merely a list of numbers. It says that the stopping process is governed by a signed mechanical balance, that the lost mechanical energy has a physical destination, and that the time scale determines whether the dissipation is mild or potentially damaging.

# Real-world example

## Context

A car of [[m]] = 1200 kg travels at 16.7 m/s and brakes to rest on a horizontal road. Assume [[mu]] = 0.80, [[g]] = 9.8 m/s^2, and idealized braking where mechanical-energy loss is attributed to friction. Estimate braking distance and dissipated energy.

This case is tied to road safety: it is not enough to say the car stops; one must quantify how much mechanical energy is degraded and over what distance.

## Physical estimation

The initial mechanical energy [[Emi]] is kinetic energy: 0.5 x 1200 x 16.7^2 = 167334 J. At rest at the same height, [[Emf]] = 0 J. The dissipative balance is:

{{f:balance_energia_mecanica_disipacion}}

Thus [[Wr]] = -167334 J. For a horizontal road, friction work is:

{{f:trabajo_rozamiento_horizontal}}

Therefore [[d]] = 167334 / (0.80 x 1200 x 9.8) = 17.8 m. The mechanical-energy change is:

{{f:variacion_energia_mecanica_rozamiento}}

And the associated dissipated energy is read through:

{{f:energia_disipada_rozamiento}}

The quantitative estimate is read by scale: 167 kJ is not small for a tire-road contact, but spreading it over 17.8 m gives a plausible deceleration. If the same energy had to be dissipated over a much shorter distance, force, temperature, and loss-of-grip risk would increase.

## Interpretation

The braking event converts about 167 kJ of mechanical energy into heat and deformation in the tire-road contact and braking system. The model explains why increasing [[mu]] reduces the distance: it allows dissipative work of larger magnitude per meter.

It also shows the didactic limit: if the road is wet, wheels lock, or ABS modulates the force, [[mu]] is no longer a fixed number. The result remains a useful reference, but not a complete engineering prediction.

The physical interpretation is therefore not only "the car stops". It is that a signed mechanical balance predicts a positive dissipated energy, and the distance estimate is valid only while the contact model remains stable.
`;export{e as default};
