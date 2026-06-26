# Exam-type example


## Problem statement

A long coil produces a uniform magnetic field strength inside a core. A linear, reversible material with known relative permeability is inserted. Estimate absolute permeability, magnetic susceptibility, induced [[magnetizacion]], and total magnetic field. Also decide whether the material behaves as a strong field concentrator within the linear model.

## Data

- Applied magnetic field strength: 800 A/m.
- Relative permeability of the material: 1500.
- Vacuum permeability [[mu0]]: 1.2566e-6 H/m.
- Stated regime: linear, isotropic, with no appreciable saturation.

## System definition

The system is the central volume of the core, where [[intensidad_magnetica]] is assumed nearly uniform. The positive direction is taken along the current that magnetizes the coil. The material is not treated as a permanent magnet, but as a medium that responds through induced [[magnetizacion]].

The most useful output quantity for later force or induction questions will be [[campo_magnetico_total]], but [[mu]] and [[chi_m]] should be read first to understand what material response is being used.

## Physical model

The linear model of magnetic materials is used. Relative permeability [[mu_r]] compares the material with vacuum, absolute permeability [[mu]] gives the dimensional scale, and susceptibility [[chi_m]] measures [[magnetizacion]] per unit of [[intensidad_magnetica]].

The internal response is summarized by [[magnetizacion]], whereas [[campo_magnetico_total]] represents the total field inside the material. The separation between these quantities is the central physical point of the exercise.

## Model justification

The statement specifies a linear regime and no appreciable saturation. This justifies using a constant slope to relate [[campo_magnetico_total]] with [[intensidad_magnetica]] and [[magnetizacion]] with [[intensidad_magnetica]]. If the core were near saturation or showed hysteresis, these constants would need to be replaced by an experimental curve.

The value of [[mu_r]] is high, so strong field concentration relative to vacuum is expected. Validity does not come from the number being high, but from the problem restricting the calculation to the linear segment.

## Symbolic solution

First obtain absolute permeability by combining the vacuum reference [[mu0]] with the relative response [[mu_r]]:

{{f:permeabilidad_absoluta}}

Then compute the susceptibility associated with relative permeability:

{{f:susceptibilidad_desde_permeabilidad}}

With that susceptibility, estimate induced [[magnetizacion]]:

{{f:magnetizacion_lineal}}

Finally obtain the total field in the medium:

{{f:campo_material_lineal}}

The logical order avoids confusing cause and result: [[intensidad_magnetica]] is the input, [[magnetizacion]] is internal response, [[mu]] is the medium scale, and [[campo_magnetico_total]] is the final field.

## Numerical substitution

Multiplying 1.2566e-6 H/m by 1500 gives approximately 1.885e-3 H/m. Therefore [[mu]] is approximately 1.885e-3 H/m.

Subtracting the unit reference from 1500 gives 1499. Therefore [[chi_m]] is approximately 1499, a very high positive effective value.

Multiplying 1499 by 800 A/m gives approximately 1.199e6 A/m. Therefore [[magnetizacion]] is approximately 1.199e6 A/m and points along [[intensidad_magnetica]].

Multiplying 1.885e-3 H/m by 800 A/m gives approximately 1.51 T. Therefore [[campo_magnetico_total]] is approximately 1.51 T inside the stated linear segment.

## Dimensional validation

Absolute permeability [[mu]] keeps the unit H/m because [[mu_r]] is dimensionless. Susceptibility [[chi_m]] is also dimensionless because it compares material response with applied excitation.

For [[magnetizacion]], multiplying a dimensionless quantity by [[intensidad_magnetica]] keeps A/m. That unit corresponds to current per length.

For [[campo_magnetico_total]], the product of H/m and A/m yields tesla. The resulting unit has magnetic dimension of mass per squared time and inverse current. The units are coherent with the physical role of each quantity.

## Physical interpretation

The result shows a material that strongly concentrates field in the stated linear segment. The key point is not only that [[campo_magnetico_total]] is large, but that [[mu_r]] and [[chi_m]] are large and positive: induced [[magnetizacion]] follows the applied excitation and amplifies the total field relative to vacuum.

If [[intensidad_magnetica]] doubled within the same linear segment, [[magnetizacion]] and [[campo_magnetico_total]] would also increase proportionally. But that conclusion depends on not reaching saturation. If the real material curve flattens around values close to this field, the 1.51 T estimate would need to be checked against experimental data.

Physically, [[intensidad_magnetica]] is not "the final field of the coil inside the core"; it is the excitation that activates the material response. [[campo_magnetico_total]] is the result that would matter for magnetic forces or flux in a magnetic circuit. Separating those readings prevents the central error of this leaf.

# Real-world example


## Context

In the preliminary design of a small transformer, an engineer compares air with a soft ferromagnetic core. The coil can produce the same [[intensidad_magnetica]] in both cases, but the device needs a much larger [[campo_magnetico_total]] to guide flux with few turns.

The engineer cannot choose only from the nominal value of [[mu_r]]. The operating point must remain far from saturation, and acceptable losses may require a different material.

## Physical estimation

If the core works over a segment with [[mu_r]] of order one thousand, the total field [[campo_magnetico_total]] may be of order one thousand times the field obtained in air for the same [[intensidad_magnetica]]. This is the physical reason magnetic cores reduce the size of transformers and inductors.

However, when [[campo_magnetico_total]] approaches tesla-scale values, the material curve often stops being perfectly straight. Then the initial [[mu_r]] value no longer decides the design by itself. The estimate must be complemented with the saturation curve, frequency, and losses.

## Interpretation

The magnetic material works as a field concentrator only while it keeps a useful slope. In air, [[mu_r]] is close to one and the coil needs more current or more turns to reach the same effect.

The practical decision is not "the material with larger [[mu_r]] always wins". It is to choose the material whose linear response, [[campo_magnetico_total]] limit, losses, and geometry are compatible with the real transformer use.