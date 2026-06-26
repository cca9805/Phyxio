## Conceptual errors


### Error 1: Treating each [[espin]] as a full classical arrow
**Why it seems correct**
The usual drawing shows arrows up and down, so it looks literal.

**Why it is incorrect**
Here [[espin]] is a binary model variable, not a complete vector or quantum description.

**Detection signal**
The reasoning uses continuous angles without changing model.

**Conceptual correction**
Use Ising for two-state orientation choices.

**Mini-example of contrast**
A planar rotating moment needs another model; Ising keeps only two states.


### Error 2: Confusing [[magnetizacion_total]] with perfect local order
**Why it seems correct**
Large [[magnetizacion_total]] suggests many aligned spins.

**Why it is incorrect**
Domains and defects may still exist.

**Detection signal**
A student says there are no boundaries because [[magnetizacion_media]] is high.

**Conceptual correction**
Read magnetization as a global signal.

**Mini-example of contrast**
Two lattices can have the same [[magnetizacion_media]] and different domain patterns.

## Model errors


### Error 3: Ignoring the sign of [[acoplamiento]]
**Why it seems correct**
J is often introduced as a positive strength.

**Why it is incorrect**
Its sign decides whether equal or opposite neighbors are favored.

**Detection signal**
Low [[energia_ising]] is always linked to equal spins.

**Conceptual correction**
Fix the physical sign convention first.

**Mini-example of contrast**
Ferromagnetic coupling favors equal neighbors; antiferromagnetic coupling favors alternation.


### Error 4: Applying Ising to any real magnet
**Why it seems correct**
The model captures magnetization and ordering.

**Why it is incorrect**
It omits many material details, anisotropy, disorder, and dynamics.

**Detection signal**
A minimal lattice is used as an exact material prediction.

**Conceptual correction**
Declare the model as a controlled simplification.

**Mini-example of contrast**
A disordered crystal needs local parameters or an extended model.

## Mathematical errors


### Error 5: Computing [[magnetizacion_media]] incorrectly
**Why it seems correct**
Counting positive spins feels natural.

**Why it is incorrect**
Signed spin values must be summed and divided by [[numero_espines]].

**Detection signal**
[[magnetizacion_media]] falls outside its physical range.

**Conceptual correction**
Use signed [[espin]] values and normalize.

**Mini-example of contrast**
Three up and one down spin give a signed balance, not merely three positives.


### Error 6: Using [[beta_termica]] with inconsistent units
**Why it seems correct**
The formula looks symbolic.

**Why it is incorrect**
[[beta_termica]] must combine with [[energia_ising]] to give a dimensionless exponent.

**Detection signal**
Energy units remain inside the exponent.

**Conceptual correction**
Convert energy units before evaluating [[probabilidad_configuracion]].

**Mini-example of contrast**
Mixing eV and joules changes the statistical weight.

## Interpretation errors


### Error 7: Reading lower [[energia_ising]] as lower [[temperatura]]
**Why it seems correct**
Energy and temperature appear in the same probability expression.

**Why it is incorrect**
Energy labels a configuration; [[temperatura]] controls thermal tolerance.

**Detection signal**
A low-energy configuration is called “colder.”

**Conceptual correction**
Separate configuration energy from bath temperature.

**Mini-example of contrast**
At the same [[temperatura]], two configurations can have different [[energia_ising]].


### Error 8: Treating [[campo_externo]] as always minor
**Why it seems correct**
Neighbor interaction is often emphasized first.

**Why it is incorrect**
A strong field can dominate the sign of [[magnetizacion_total]].

**Detection signal**
The answer ignores h even when it is large.

**Conceptual correction**
Compare field, coupling, and thermal scale.

**Mini-example of contrast**
A strong field can align spins despite noticeable thermal agitation.

## Quick self-control rule

Check the sign of [[acoplamiento]], the scale [[constante_boltzmann]]·[[temperatura]], and the normalization of [[magnetizacion_media]] by [[numero_espines]] before interpreting.