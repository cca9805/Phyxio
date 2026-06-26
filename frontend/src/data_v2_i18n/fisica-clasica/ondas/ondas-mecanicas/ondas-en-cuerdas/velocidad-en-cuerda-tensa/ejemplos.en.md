# Exam-type example


## Problem statement

A horizontal laboratory string is under a tension of 45 N. Its linear density is 0.0050 kg/m. A periodic transverse disturbance of [[frecuencia]] 60 Hz is generated. Calculate the propagation speed of the wave on the string and the [[lambda]] associated with that [[frecuencia]]. Then compare what would happen if the string were replaced by another with twice the linear density while keeping the same tension.

## Data

- String tension: 45 N
- Linear density: 0.0050 kg/m
- Frequency imposed by the source: 60 Hz
- Second string: doubled linear density
- Active length for complementary fundamental-mode reading: 1.5 m
- Flexible uniform string with small amplitude

## System definition

The physical system is a taut string acting as a mechanical medium. The source imposes the rhythm [[frecuencia]], but the speed [[velocidad_de_propagacion]] must be read from the string properties: [[tension_de_la_cuerda]] and [[mu]]. The effective length [[longitud_efectiva]] is not needed to find local speed, although it would matter if standing modes were requested.

## Physical model

We use the ideal-string model: uniform tension, constant linear mass, small amplitude, and no appreciable dispersion. Under those conditions, [[velocidad_de_propagacion]] depends on the balance between restoration by [[tension_de_la_cuerda]] and inertia by [[mu]]. Once speed is known, it is connected with [[frecuencia]] to obtain [[lambda]].

## Model justification

The string is a laboratory string, tension is held fixed, and the statement mentions no stiffness, knots, or mass variation. It is therefore reasonable to treat it as uniform. The [[frecuencia]] of 60 Hz is not extreme and the amplitude is small, so the nondispersive model is sufficient. The comparison with the second string is physically meaningful because only [[mu]] changes, isolating the effect of linear inertia.

## Symbolic solution

First, propagation speed is obtained from tension and linear density:

{{f:velocidad_cuerda_tensa}}

This reading shows that [[tension_de_la_cuerda]] accelerates propagation and [[mu]] slows it. The computed speed is then related to the imposed [[frecuencia]]:

{{f:frecuencia_desde_velocidad}}

To find the spatial separation of the wave at fixed [[frecuencia]], use the [[lambda]] form:

{{f:longitud_onda_desde_velocidad}}

If the same segment is fixed at both ends and the compatible fundamental [[frecuencia]] is requested, active length enters as a boundary condition:

{{f:frecuencia_fundamental_cuerda}}

If the string is replaced by another with doubled [[mu]] and the same [[tension_de_la_cuerda]], speed decreases because inertia per meter increases. The source [[frecuencia]] is not modified, so the main visible change will be a shorter [[lambda]].

## Numerical substitution

With [[tension_de_la_cuerda]] equal to 45 N and [[mu]] equal to 0.0050 kg/m, dividing tension by linear density gives 9000 in compatible units. The square root of that value gives an approximate speed of 95 m/s. Therefore [[velocidad_de_propagacion]] ≈ 95 m/s.

With [[frecuencia]] equal to 60 Hz, dividing speed by [[frecuencia]] gives a [[lambda]] close to 1.6 m. Therefore [[lambda]] ≈ 1.6 m.

If the active segment [[longitud_efectiva]] is 1.5 m and its ends behave as fixed ends, dividing 95 m/s by twice that length gives a fundamental close to 32 Hz. That reading does not change the speed already calculated; it only translates the same propagation into a mode compatible with the available length.

For the second string, linear density becomes 0.010 kg/m. Keeping 45 N, the mechanical quotient is reduced by half. The resulting speed drops to about 67 m/s. With the same 60 Hz [[frecuencia]], [[lambda]] becomes close to 1.1 m.

## Dimensional validation

- Mechanical speed: the ratio between tension and linear density has dimension `[L² T⁻²]`; taking the square root leaves `[L T⁻¹]`.
- Wavelength: dividing a speed `[L T⁻¹]` by a frequency with dimension `[T⁻¹]` leaves dimension `[L]`.
- Frequency: dividing a speed `[L T⁻¹]` by a length `[L]` leaves dimension `[T⁻¹]`.

The fixed-string fundamental check is coherent as well: speed divided by an active length gives a [[frecuencia]].

All three checks agree with the expected units: m/s for [[velocidad_de_propagacion]], m for [[lambda]], and Hz for [[frecuencia]].

## Physical interpretation

The result shows that speed belongs to the medium: the initial string allows the disturbance to advance about 95 meters each second because it combines moderate tension and low linear mass. The source [[frecuencia]] did not cause that speed; it only decided how many oscillations per second are drawn on a wave whose mechanical speed is already fixed.

When [[mu]] is doubled, the string becomes harder to accelerate in each meter. Tension remains the same, but it must move more distributed inertia. That is why speed decreases and, because [[frecuencia]] remains fixed, [[lambda]] also decreases. The comparison isolates the core idea of the leaf: a heavier string per meter does not need a slower source in order to propagate more slowly; its own inertia already reduces [[velocidad_de_propagacion]].

The reading of [[longitud_efectiva]] adds a different physical consequence. If the segment is fixed, the same mechanical speed is forced to fit into a round-trip path; therefore the fundamental [[frecuencia]] is not a new cause, but a geometric constraint on propagation already set by the string. In a laboratory, this prevents mixing decisions: changing linear mass modifies the medium, changing active length modifies boundary conditions, and changing the source only changes the imposed rhythm.

In a laboratory, this reading allows the model to be tested experimentally by measuring pulse travel times. In an instrument, it explains why a thicker string can produce lower notes without necessarily changing active length: by modifying [[mu]], speed changes and therefore the frequencies that can be sustained also change.

# Real-world example


## Context

A technician prepares a demonstration with a long string to show transverse pulses to a group of students. The goal is for the pulse to take a visible fraction of a second to travel several meters. The technician can choose between a thin string and a heavier one, and can also adjust tension using a hanging mass.

## Physical estimation

If the technician uses a string with linear density near 0.020 kg/m and tension of 20 N, the expected speed is on the order of 30 m/s. On a 5 m string, the full travel time would be around one tenth of a second, visible with slow motion or with markers on the string. If tension is raised to 80 N with the same string, speed roughly doubles; it does not become four times larger.

If instead of raising tension the technician switches to a string four times heavier per meter, speed is reduced roughly by half. This estimate helps design the demonstration: to observe the pulse well, the string should not be too light and the tension should be moderate. The goal is not to maximize [[velocidad_de_propagacion]], but to obtain a travel time that can be measured.

## Interpretation

The practical decision depends on the physical question. To show causality between tension and speed, keep [[mu]] constant and change [[tension_de_la_cuerda]]. To compare materials, keep [[tension_de_la_cuerda]] constant and change [[mu]]. In both cases, the correct reading is not to look only at the shaking rhythm of the hand, but to measure how long the pulse takes to cover a known distance.

The real example also shows why the ideal model is useful even when it is not perfect. A real string loses energy, has supports that reflect, and may not be completely uniform. Even so, the main trend allows the experiment to be planned: more tension accelerates propagation, more linear density slows it, and source [[frecuencia]] adjusts the spatial separation of the wave.
