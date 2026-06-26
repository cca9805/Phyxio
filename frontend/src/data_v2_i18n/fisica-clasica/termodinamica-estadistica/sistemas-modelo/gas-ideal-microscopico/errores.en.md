## Conceptual errors


### Error 1: Confusing [[temperatura]] with individual particle speed

**Why it seems correct**
When the gas is heated, many particles move faster, so it seems natural to say that [[temperatura]] is the particle speed.

**Why it is incorrect**
[[temperatura]] is related to [[energia_cinetica_media]], not to the exact speed of each individual particle. There is a distribution of speeds, and the temperature only characterizes their average.

**Detection signal**
A student claims that all particles share exactly the same [[velocidad_rms]] at a given temperature.

**Conceptual correction**
[[velocidad_rms]] is a statistical scale representing a typical speed, not a mandatory common speed assigned to every particle.

**Mini-example of contrast**
Two gases at the same [[temperatura]] share the same mean translational [[energia_cinetica_media]], but have different [[velocidad_rms]] if their [[masa_particula]] differs.


### Error 2: Thinking [[presion]] is a force stored inside the gas

**Why it seems correct**
Pressure is felt as a push on the walls and can seem like a quiet internal force that exists independently of motion.

**Why it is incorrect**
[[presion]] arises from microscopic collisions and momentum transfer, not from a single static force distributed throughout the gas.

**Detection signal**
A student explains [[presion]] without mentioning collisions, [[numero_particulas]], [[volumen]], or particle motion.

**Conceptual correction**
Relate [[presion]] to collective impacts using

{{f:presion_microscopica_gas_ideal}}

.

**Mini-example of contrast**
If [[temperatura]] rises at fixed [[volumen]], collisions become more energetic and [[presion]] increases proportionally.

## Model errors


### Error 3: Applying the ideal gas model to any compressed gas

**Why it seems correct**
The ideal formula is simple and works in most introductory problems.

**Why it is incorrect**
At high [[presion]] or small [[volumen]], molecular size and intermolecular interactions cannot be ignored.

**Detection signal**
The result predicts ideal [[presion]] in conditions close to liquefaction.

**Conceptual correction**
Use the ideal model only for dilute gases in thermal equilibrium and well above condensation conditions.

**Mini-example of contrast**
At low density, helium approximates ideal behavior; near liquefaction it requires a real-gas model.


### Error 4: Using the monatomic model for every gas

**Why it seems correct**
Many ideal gas formulas appear universal and are stated without qualification.

**Why it is incorrect**
The direct link between [[temperatura]] and translational [[energia_cinetica_media]] is clean for monatomic particles; polyatomic gases store additional energy in rotational and vibrational modes.

**Detection signal**
A student applies the same internal energy expression to helium and carbon dioxide without any distinction.

**Conceptual correction**
Distinguish translational kinetic energy per particle from total internal energy, which includes rotational and vibrational contributions.

**Mini-example of contrast**
Argon fits the monatomic model much better than a complex hot molecule such as carbon dioxide.

## Mathematical errors


### Error 5: Using Celsius degrees as [[temperatura]]

**Why it seems correct**
Everyday thermometers use Celsius and the numbers feel familiar and manageable.

**Why it is incorrect**
Relations involving [[constante_boltzmann]] require absolute [[temperatura]] in kelvin; using Celsius shifts every result by 273.

**Detection signal**
At 0 °C a student concludes that [[energia_cinetica_media]] is zero.

**Conceptual correction**
Always convert to kelvin before applying

{{f:energia_cinetica_media_temperatura}}

.

**Mini-example of contrast**
0 °C corresponds to 273 K, so microscopic kinetic energy is nonzero and particles are still moving.


### Error 6: Forgetting the square root in [[velocidad_rms]]

**Why it seems correct**
Because energy grows with [[temperatura]], one assumes that speed also grows by the same factor.

**Why it is incorrect**
Kinetic energy depends on the square of speed, so [[velocidad_rms]] grows with the square root of [[temperatura]], not linearly.

**Detection signal**
When [[temperatura]] is doubled, a student doubles [[velocidad_rms]] instead of multiplying by √2.

**Conceptual correction**
Use

{{f:velocidad_cuadratica_media}}

and verify the quadratic dependence on speed before reporting any result.

**Mini-example of contrast**
If [[temperatura]] is quadrupled, [[velocidad_rms]] doubles; it does not quadruple.

## Interpretation errors


### Error 7: Reading [[energia_cinetica_media]] as total gas energy

**Why it seems correct**
The word energy invites one to think of the whole system rather than a single particle.

**Why it is incorrect**
[[energia_cinetica_media]] is energy per particle, while total kinetic energy depends on [[numero_particulas]] and is much larger.

**Detection signal**
A student compares per-particle [[energia_cinetica_media]] with macroscopic energy without multiplying by [[numero_particulas]].

**Conceptual correction**
Distinguish the microscopic per-particle scale from the collective sum over all [[numero_particulas]] particles.

**Mini-example of contrast**
One particle has [[energia_cinetica_media]] of order 10^-21 J, but one mole contains an enormous number of particles, making their total energy measurable.


### Error 8: Interpreting [[velocidad_rms]] as a direction of motion

**Why it seems correct**
Velocity is usually drawn as an arrow in mechanics, so any speed value seems to need a direction.

**Why it is incorrect**
[[velocidad_rms]] is a scalar typical speed, not a vector with a fixed direction.

**Detection signal**
A student assigns a positive or negative sign to [[velocidad_rms]] to indicate movement direction.

**Conceptual correction**
Read [[velocidad_rms]] as a speed scale associated with energy, not as a directed particle velocity.

**Mini-example of contrast**
At equilibrium there is no preferred direction of motion, even though particles move very fast in random directions.

## Quick self-control rule

Before interpreting: check that [[temperatura]] is in kelvin, that you distinguish per-particle from total magnitudes, that ideal gas conditions hold, and that [[velocidad_rms]] is read as a statistical speed scale, not as a common particle velocity.
