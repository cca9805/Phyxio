## Conceptual errors


### Error 1: Treating heat as something stored in the material
**Why it seems correct**

Everyday language says that a wall “has heat” or that a blanket “gives heat”. This makes [[calor_transferido]] look like a substance hidden inside an object.

Touch also misleads: because [[conductividad_termica]] changes the sensation, metal feels more thermally active than wood.

**Why it is incorrect**

[[calor_transferido]] is energy in transit caused by [[diferencia_temperatura]], not a fixed reserve inside the material.

What changes from one material to another is the ease of passage, together with geometry.

**Detection signal**

The explanation ignores [[temperatura_caliente]] and [[temperatura_fria]].

**Conceptual correction**

Speak about transfer driven by thermal contrast.

**Mini-example of contrast**

A metal spoon and a wooden spoon at room temperature feel different because conduction differs.


### Error 2: Believing only the hot temperature matters
**Why it seems correct**

Attention naturally moves to [[temperatura_caliente]], especially near a hot source.

This visual focus can hide the role of the colder boundary.

**Why it is incorrect**

Conduction is driven by [[diferencia_temperatura]], which compares [[temperatura_caliente]] with [[temperatura_fria]].

A single temperature does not describe the thermal drive.

**Detection signal**

The solution never checks [[diferencia_temperatura]].

**Conceptual correction**

Always read the pair of boundary temperatures.

**Mini-example of contrast**

A plate between 80 °C and 70 °C does not conduct like one between 80 °C and 20 °C.

## Model errors


### Error 3: Using a flat one-dimensional model for every shape
**Why it seems correct**

The wall diagram is simple, so it is tempting to use it for corners, tubes, and small parts.

The calculation only needs [[area]] and [[espesor]], which makes it feel universal.

**Why it is incorrect**

The model requires heat to cross mainly along [[espesor]]. If the path spreads sideways, [[gradiente_temperatura]] is not simple.

The effective [[area]] may change along the path.

**Detection signal**

The object has strong curvature, edges, or partial contact.

**Conceptual correction**

Check geometry before choosing the flat model.

**Mini-example of contrast**

A large window fits the model better than a small metal corner.


### Error 4: Ignoring non-steady behavior
**Why it seems correct**

Many classroom tasks present the transfer rate as constant, so [[tiempo]] is used mechanically.

The simplicity hides changing boundary temperatures.

**Why it is incorrect**

Constant [[potencia_termica]] and [[flujo_calor]] require maintained conditions.

If [[temperatura_caliente]] or [[temperatura_fria]] changes, [[calor_transferido]] depends on the whole evolution during [[tiempo]].

**Detection signal**

The statement describes early heating or fast cooling.

**Conceptual correction**

Use steady conduction only with maintained thermal boundaries.

**Mini-example of contrast**

A stable house wall differs from a freshly filled hot cup.

## Mathematical errors


### Error 5: Not converting surface and [[espesor]]
**Why it seems correct**

Centimeters and millimeters appear in drawings, so [[area]] and [[espesor]] are often entered directly.

The resulting number may look harmless without a unit check.

**Why it is incorrect**

Usual [[conductividad_termica]] units require meters, so [[potencia_termica]] and [[flujo_calor]] become distorted.

[[resistencia_termica]] is also wrong if [[espesor]] is not in meters.

**Detection signal**

The answer changes by thousands after conversion.

**Conceptual correction**

Convert lengths to meters and surfaces to square meters.

**Mini-example of contrast**

Ten thousand square centimeters is one square meter.


### Error 6: Confusing heat flux with thermal power
**Why it seems correct**

Both quantities describe transfer and both react to [[diferencia_temperatura]].

If [[area]] is ignored, total rate and surface intensity blur together.

**Why it is incorrect**

[[potencia_termica]] describes the whole system, while [[flujo_calor]] is divided by [[area]].

They answer different physical questions.

**Detection signal**

Objects of different size are compared using only total rate.

**Conceptual correction**

Use [[flujo_calor]] for intensity and [[potencia_termica]] for total transfer.

**Mini-example of contrast**

A large wall may lose more total energy than a small window with higher intensity.

## Interpretation errors


### Error 7: Thinking high thermal resistance means good conduction
**Why it seems correct**

Resistance can sound like strength or capacity.

That everyday meaning can distort [[resistencia_termica]].

**Why it is incorrect**

High [[resistencia_termica]] means strong opposition to heat passage.

For the same [[diferencia_temperatura]], it reduces [[potencia_termica]].

**Detection signal**

An insulator is described as transmitting more heat because the value is high.

**Conceptual correction**

Read [[resistencia_termica]] as a thermal brake.

**Mini-example of contrast**

A good coat reduces losses because it opposes transfer.


### Error 8: Reading Fourier's sign as negative heat
**Why it seems correct**

A negative sign looks like a loss or an impossible value.

The confusion grows when the axis convention is not clear.

**Why it is incorrect**

The sign indicates direction relative to [[gradiente_temperatura]], not absurd energy.

The spontaneous transfer points toward lower temperature.

**Detection signal**

A result is rejected only because of sign.

**Conceptual correction**

Separate magnitude, physical direction, and sign convention.

**Mini-example of contrast**

Leftward transfer can be negative on an axis and still be real.

## Quick self-control rule

Check [[temperatura_caliente]], [[temperatura_fria]], [[diferencia_temperatura]], [[gradiente_temperatura]], [[conductividad_termica]], [[area]], [[espesor]], [[potencia_termica]], [[flujo_calor]], [[tiempo]], [[calor_transferido]], and [[resistencia_termica]] before accepting the result.