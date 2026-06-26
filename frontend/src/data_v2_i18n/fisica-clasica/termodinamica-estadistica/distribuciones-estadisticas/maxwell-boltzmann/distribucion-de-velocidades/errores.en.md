## Conceptual errors


### Error 1: Believing every molecule has the same [[velocidad]]
**Why it seems correct**
The gas has one [[temperatura_absoluta]], so it seems natural to imagine one molecular speed.
**Why it is incorrect**
[[temperatura_absoluta]] sets a statistical scale, not an individual value. [[densidad_probabilidad_velocidad]] exists because many [[velocidad]] values are present.
**Detection signal**
The solution uses only [[velocidad_media]] and describes all particles as having that value.
**Conceptual correction**
Read [[velocidad_mas_probable]], [[velocidad_media]], and [[velocidad_rms]] as different summaries of one distribution.
**Mini-example of contrast**
Nitrogen at 300 K contains slow and fast molecules; [[velocidad_media]] does not erase the fast tail.


### Error 2: Treating curve height as direct probability
**Why it seems correct**
The graph looks like it shows how much probability is at each point.
**Why it is incorrect**
[[densidad_probabilidad_velocidad]] is probability per unit [[velocidad]]. A real probability over a range is [[probabilidad_intervalo]].
**Detection signal**
A single height is compared with a percentage.
**Conceptual correction**
Use the area between [[velocidad_minima]] and [[velocidad_maxima]].
**Mini-example of contrast**
A high narrow region can give less [[probabilidad_intervalo]] than a lower but wider region.

## Model errors


### Error 3: Applying Maxwell-Boltzmann outside equilibrium
**Why it seems correct**
The formula looks universal for any gas.
**Why it is incorrect**
The model requires enough collisions and a meaningful [[temperatura_absoluta]]. Without equilibrium, [[densidad_probabilidad_velocidad]] may have several peaks.
**Detection signal**
The problem mentions a beam, rapid expansion, or local heating.
**Conceptual correction**
Check whether a single thermal equilibrium state exists.
**Mini-example of contrast**
A resting thermal gas may use Maxwell-Boltzmann; a filtered molecular beam needs another model.


### Error 4: Using one [[masa_particula]] for a mixture
**Why it seems correct**
A mixture can share one [[temperatura_absoluta]].
**Why it is incorrect**
Each species has its own [[masa_particula]] and therefore its own speed scale.
**Detection signal**
One [[velocidad_mas_probable]] is computed for helium and argon together.
**Conceptual correction**
Build one distribution per species.
**Mini-example of contrast**
At the same [[temperatura_absoluta]], helium has larger [[velocidad_media]] than argon.

## Mathematical errors


### Error 5: Using Celsius instead of kelvin
**Why it seems correct**
Everyday temperature is often given in Celsius.
**Why it is incorrect**
The formulas require [[temperatura_absoluta]], because [[constante_boltzmann]] converts kelvin into energy scale.
**Detection signal**
Negative temperatures or unrealistically small speeds appear.
**Conceptual correction**
Convert to kelvin before calculating.
**Mini-example of contrast**
20 °C is entered as about 293 K, not as 20.


### Error 6: Confusing [[velocidad_rms]] with [[velocidad_media]]
**Why it seems correct**
Both are characteristic speeds with the same unit.
**Why it is incorrect**
[[velocidad_rms]] emphasizes fast molecules through squared speed.
**Detection signal**
The result places [[velocidad_rms]] below [[velocidad_media]].
**Conceptual correction**
Remember the order: [[velocidad_mas_probable]], then [[velocidad_media]], then [[velocidad_rms]].
**Mini-example of contrast**
The fast tail raises [[velocidad_rms]] more than [[velocidad_media]].

## Interpretation errors


### Error 7: Thinking the peak contains nearly all molecules
**Why it seems correct**
The maximum is visually dominant.
**Why it is incorrect**
The peak only locates [[velocidad_mas_probable]]; molecules occupy a broad range.
**Detection signal**
The width of the distribution is ignored.
**Conceptual correction**
Interpret areas and widths, not only the maximum.
**Mini-example of contrast**
When [[temperatura_absoluta]] rises, the peak can become lower while typical speeds increase.


### Error 8: Assuming larger [[masa_particula]] gives larger [[energia_cinetica_media]]
**Why it seems correct**
Kinetic energy contains mass.
**Why it is incorrect**
In classical equilibrium, [[energia_cinetica_media]] depends on [[temperatura_absoluta]], not on species.
**Detection signal**
The heavier gas is assigned more mean kinetic energy at the same [[temperatura_absoluta]].
**Conceptual correction**
Mass changes speeds, not the mean translational energy at equal [[temperatura_absoluta]].
**Mini-example of contrast**
Helium moves faster than argon, but both share the same [[energia_cinetica_media]] if they are at equal [[temperatura_absoluta]].

## Quick self-control rule

Check kelvin, species, equilibrium, and area: for probability use [[velocidad_minima]], [[velocidad_maxima]], and [[probabilidad_intervalo]], not a single curve height.