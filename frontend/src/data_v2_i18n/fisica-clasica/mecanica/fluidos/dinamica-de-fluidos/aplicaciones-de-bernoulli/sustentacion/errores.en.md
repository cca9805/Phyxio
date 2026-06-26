## Conceptual errors

### Error 1: Thinking lift is caused only by a longer upper path

**Why it seems correct**
A common school explanation says that upper-surface air travels farther and therefore must move faster. It is simple, but too rigid.

**Why it is incorrect**
The flow is not forced to reach the trailing edge simultaneously on both paths. Pressure distribution depends on boundary conditions, circulation, viscosity and boundary-layer state.

**Detection signal**
The student cannot explain why a flat plate at angle of attack can also generate lift.

**Conceptual correction**
Lift must be read as a combination of pressure, flow deflection and circulation.

**Contrast mini-example**
A flat plate at a small angle of attack can generate lift even without a clearly longer upper surface. This shows that the path-length explanation is insufficient.

## Model errors

### Error 1: Using the global equation during stall

**Why it seems correct**
The equation for [[L]] looks universal because it contains few parameters.

**Why it is incorrect**
If the flow separates, [[C_L]] no longer behaves as a smooth coefficient. A numerical answer may hide model failure.

**Detection signal**
Increasing angle of attack no longer increases force, or [[C_L]] becomes implausibly large.

**Conceptual correction**
Check regime, angle and attached flow before applying the formula.

**Contrast mini-example**
If a calculation requires an extremely high [[C_L]] for an ordinary light aircraft, the issue is likely stall, flaps or input data, not simply a larger number.

## Mathematical errors

### Error 1: Not converting speed or area units

**Why it seems correct**
The algebra seems correct even if km/h or cm² are inserted.

**Why it is incorrect**
The force is in newtons only if [[rho]], [[v]] and [[S]] are in compatible SI units.

**Detection signal**
The result is several orders of magnitude above or below the expected weight.

**Conceptual correction**
Always convert speed to m/s and area to m² before substitution.

**Contrast mini-example**
Using 90 as m/s when the data are actually km/h artificially multiplies the estimated force and can turn a normal wing into an impossible result.

## Interpretation errors

### Error 1: Confusing large lift with possible flight

**Why it seems correct**
If [[L]] is large, it may seem that flight is guaranteed.

**Why it is incorrect**
The force must be compared with [[W]], and drag, power, stability and stall margin must also be considered.

**Detection signal**
The student does not check whether [[L]] balances weight or whether the regime is stable.

**Conceptual correction**
Interpret lift within the full flight balance.

**Contrast mini-example**
A car wing can generate a large force, but it does not make the car fly: its orientation produces downforce and must be read with the tire normal force.

## Quick self-control rule

Before closing any exercise, ask whether the units are SI, whether [[C_L]] is plausible and whether the stated regime allows the model. If one of these fails, the number may be calculated correctly and still be physically useless.