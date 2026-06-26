# Exam-type example


## Problem statement

A straight conductor segment is placed inside a uniform magnetic field. The current flows perpendicular to the field. Calculate the total magnetic force on the segment, the force per unit length, and explain the direction in which the force acts.

## Data

- Current: 4.0 A.
- Effective length inside the field: 0.30 m.
- Uniform magnetic field: 0.50 T.
- Orientation: conductor perpendicular to the field, with maximal angular factor.

## System definition

The system is the conductor segment inside the magnetic region. The current [[intensidad_de_corriente]] crosses the effective length [[longitud_efectiva]], while the field [[campo_magnetico]] acts on moving charges in the metal. The requested magnitudes are [[fuerza_magnetica_sobre_el_conductor]] and [[fuerza_magnetica_por_unidad_de_longitud]].

## Physical model

Use the model of a straight conductor with steady current in a uniform field. Perpendicular orientation lets [[s_theta]] take its maximal value. Force is interpreted as collective mechanical action on the segment, not as force on a single isolated electron.

## Model justification

The statement fixes a uniform field and a defined effective length, so force can be treated as regularly distributed. The model would stop being valid if the field changed over the segment, if the conductor bent, or if heating altered the current.

## Symbolic solution

For the total force on the conductor:

{{f:fuerza_conductor_recto}}

For the force per unit length:

{{f:fuerza_por_unidad_longitud}}

The solution uses [[fuerza_magnetica_sobre_el_conductor]], [[intensidad_de_corriente]], [[longitud_efectiva]], [[campo_magnetico]], [[s_theta]], and [[fuerza_magnetica_por_unidad_de_longitud]]. Force direction is not obtained from a numerical sign, but from the right-hand rule applied to conventional current and field.

## Numerical substitution

For [[fuerza_magnetica_sobre_el_conductor]], multiplying 4.0 A by 0.30 m, by 0.50 T, and by the maximal angular factor gives about 0.60 N. The segment therefore receives a lateral force clearly measurable in a laboratory.

For [[fuerza_magnetica_por_unidad_de_longitud]], multiplying 4.0 A by 0.50 T and by the maximal angular factor gives about 2.0 N*m^-1. That reading means that each effective metre of conductor would carry two newtons of magnetic force under the same conditions.

## Dimensional validation

- Total force: ampere times metre times tesla gives newton, dimension `[M L T⁻²]`.
- Force per length: ampere times tesla gives newton per metre, dimension `[M T⁻²]`.

The dimensional difference confirms that [[fuerza_magnetica_sobre_el_conductor]] and [[fuerza_magnetica_por_unidad_de_longitud]] are not the same magnitude. One has total force units and the other describes a linear distribution.

## Physical interpretation

The result indicates that a moderate current in a half-tesla field can produce appreciable mechanical force. Individual charges do not need to leave the conductor: they transfer momentum to the material and the whole segment experiences a lateral push.

If [[intensidad_de_corriente]] doubled, both [[fuerza_magnetica_sobre_el_conductor]] and [[fuerza_magnetica_por_unidad_de_longitud]] would increase in the same proportion. If [[longitud_efectiva]] doubled, only [[fuerza_magnetica_sobre_el_conductor]] would increase, because [[fuerza_magnetica_por_unidad_de_longitud]] is already normalized by length. This distinction separates local magnetic intensity from the size of the active segment.

The force direction would change if current were reversed or if the field were reversed. This is the idea that makes actuators possible: controlling currents and fields to produce mechanical forces with predictable direction.

The effective length is also not an administrative detail. If the same wire had only 0.10 m inside the field, the total force would be three times smaller, while [[fuerza_magnetica_por_unidad_de_longitud]] would remain the same. That comparison clearly separates what belongs to the magnetic environment from what belongs to setup geometry.

If the conductor were tilted, the force could not be estimated by copying the perpendicular case. The factor [[s_theta]] would reduce the push because only the perpendicular part of the segment relative to [[campo_magnetico]] contributes effectively. Therefore the conductor and field should be drawn before substituting data: the numerical result depends on that geometric reading.

The difference between [[fuerza_magnetica_sobre_el_conductor]] and [[fuerza_magnetica_por_unidad_de_longitud]] also helps check an experimental result. If a balance measures total force, it should be compared with [[fuerza_magnetica_sobre_el_conductor]]. If a report asks for distributed mechanical load to design supports, the relevant reading is [[fuerza_magnetica_por_unidad_de_longitud]]. Mixing both magnitudes can overdesign or underdesign the setup.

# Real-world example


## Context

In a dynamic loudspeaker, a current-carrying coil sits inside the magnetic field of a magnet. Force on the conducting segments of the coil pushes the diaphragm and converts an electrical signal into sound.

## Physical estimation

If instantaneous current increases, [[fuerza_magnetica_sobre_el_conductor]] increases and the diaphragm receives a stronger push. If the effective length of wire inside the gap is increased, total force also grows. The magnitude [[fuerza_magnetica_por_unidad_de_longitud]] compares designs before depending on how many turns the coil has.

## Interpretation

The real application shows that force on conductors is not a laboratory detail. It is the mechanism that converts variable electrical information into mechanical motion. The magnet field supplies the reference, current supplies time control, and effective coil length determines how much push is obtained.

If the loudspeaker overheats, coil resistance changes and the real current no longer matches the expected value. If the coil partly leaves the uniform field, effective [[longitud_efectiva]] changes during motion. A good design therefore seeks not only a large field, but a stable active region where [[fuerza_magnetica_sobre_el_conductor]] is produced.

The example also explains why a coil has many turns. Each turn adds active length inside the field, so total force can grow even when force per metre is unchanged. The practical limit appears when extra wire increases mass, resistance, and heating.