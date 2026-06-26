const e=`# Common Errors in Intensive Variables

## Conceptual errors

### Error 1: "Two bodies together have twice the temperature"

**Confusion.** The student takes two identical samples with the same [[T]] and concludes that joining them should produce a doubled total temperature.

**Why it fails.** The [[T]] does not measure total energy amount. It measures thermal state and possible direction of heat exchange.

**Conceptual correction.** When identical copies are joined, [[m]] increases, but [[T]] remains equal if there is no exchange with the surroundings and no state change.

**Contrast mini-example.** Two cups of water at the same temperature make more water, not doubled temperature. The thermometer reads the same thermal condition.

### Error 2: "Every variable computed with mass is extensive"

**Confusion.** Because [[rho]] is computed using [[m]], it is automatically classified as extensive.

**Why it fails.** Density also uses [[V]]. If both quantities grow in the same proportion, the ratio does not change.

**Conceptual correction.** [[rho]] measures mass per volume, not total mass. Its behavior under [[lambda_escala]] decides the classification.

**Contrast mini-example.** One water sample and two equal samples have different total mass, but approximately the same density.

## Model errors

### Error 3: "An intensive variable is always uniform"

**Confusion.** The student thinks that if a variable is intensive, it must have the same value at all points of the system.

**Why it fails.** Intensive describes a local reading. It can vary spatially if the system is not at equilibrium or has gradients.

**Conceptual correction.** In a nonuniform system one uses local [[T]], local [[P]], or local [[rho]]. The variable is still intensive, but one number is no longer enough.

**Contrast mini-example.** A bar heated at one end has different temperatures along its length; each local reading is still temperature.

## Mathematical errors

### Error 4: "Averaging intensives without weights"

**Confusion.** To mix two parts with [[X_A]] and [[X_B]], the student always uses a simple arithmetic mean.

**Why it fails.** If amounts differ, the larger part should influence the final value more. Weighting requires a compatible amount, such as [[m]].

**Conceptual correction.** In simple estimates a weighted mean is used when the physics allows it. The leaf rule for this situation is:

{{f:promedio_ponderado_intensivo}}

**Contrast mini-example.** A hot cup mixed with a large warm pot does not end at the simple average of both readings; it stays closer to the pot.

### Error 5: "Comparing pressures as total forces"

**Confusion.** Two vessels with the same [[P]] are interpreted as exerting the same total force on any wall.

**Why it fails.** The [[P]] is force per area. Total force also depends on boundary area.

**Conceptual correction.** Pressure compares local mechanical state; total force needs additional geometric information.

**Contrast mini-example.** A small valve and a large wall may have the same pressure, but the large wall receives a larger total force.

## Interpretation errors

### Error 6: "Equal equilibrium means equal amount"

**Confusion.** The student thinks that two bodies at equilibrium must have the same [[m]], the same [[V]], or the same total energy.

**Why it fails.** Thermal or mechanical equilibrium is recognized by equality of compatible intensive variables, not equality of inventory.

**Conceptual correction.** Two different masses can have the same [[T]]. Two vessels of different size can share [[P]] if they are in the same mechanical state.

**Contrast mini-example.** A lake and a cup can be at the same temperature, although the stored energy amount is very different.

## Quick self-control rule

Before adding a variable, ask whether it really counts total amount. If duplicating a uniform sample leaves the value unchanged, it is an intensive variable. If you need to compare two samples of different size, start with [[T]], [[P]], [[rho]], or a normalized property. If you need inventory, return to extensive quantities.
`;export{e as default};
