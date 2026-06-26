## Conceptual errors


### Error 1: Reducing [[entropia]] to visual disorder
**Why it seems correct**
It seems correct because many examples use mixing or expansion.

**Why it is incorrect**
It is incorrect because this leaf connects reversible thermal exchange with microscopic multiplicity, not visual messiness.

**Detection signal**
The explanation never mentions [[calor_reversible]], [[temperatura]], or [[numero_microestados]].

**Conceptual correction**
Verify that [[delta_entropia]] is calculated from the multiplicity of accessible configurations, not from visual appearance or spatial extent.

**Mini-example of contrast**
An expanded gas may look unchanged while having more accessible microstates.


### Error 2: Treating classical and statistical readings as different quantities
**Why it seems correct**
It seems plausible because the inputs look unrelated.

**Why it is incorrect**
It is incorrect: both readings describe the same [[delta_entropia]] for the same state change.

**Detection signal**
Two incompatible answers appear without checking assumptions.

**Conceptual correction**
Confirm that both the classical and statistical readings apply to the same state change in the same system so they yield the same [[delta_entropia]].

**Mini-example of contrast**
The result from [[calor_reversible]] should match the result from [[ratio_microestados]].

## Model errors


### Error 3: Using irreversible heat as [[calor_reversible]]
**Why it seems correct**
It seems acceptable because both are heat transfers.

**Why it is incorrect**
It is incorrect because the direct classical relation requires a reversible or equivalent path.

**Detection signal**
The process includes friction, free expansion, or strong gradients and real heat is divided by [[temperatura]].

**Conceptual correction**
Construct an equivalent reversible path between the same states before dividing heat by [[temperatura]] to correctly compute [[delta_entropia]].

**Mini-example of contrast**
In free expansion, compute [[delta_entropia]] with an equivalent reversible path.


### Error 4: Comparing microstates of different systems
**Why it seems correct**
It seems harmless when both counts are huge.

**Why it is incorrect**
It is incorrect because [[ratio_microestados]] only compares multiplicities under compatible constraints.

**Detection signal**
The initial and final states do not describe the same system.

**Conceptual correction**
Ensure that [[ratio_microestados]] compares multiplicities of the same system under compatible macroscopic constraints.

**Mini-example of contrast**
Do not compare one gas with another of different composition without redefining the model.

## Mathematical errors


### Error 5: Using Celsius for [[temperatura]]
**Why it seems correct**
It seems natural because Celsius is common in the lab.

**Why it is incorrect**
It is incorrect because the formula needs absolute temperature.

**Detection signal**
The calculation creates zero divisions or strange signs near 0 °C.

**Conceptual correction**
Convert to kelvin before using [[temperatura]] in the classical relation; without absolute temperature the thermal ratio is physically meaningless.

**Mini-example of contrast**
Convert to kelvin before relating [[calor_reversible]] to [[delta_entropia]].


### Error 6: Reading the logarithm as linear growth
**Why it seems correct**
It seems natural because more [[numero_microestados]] gives more [[entropia]].

**Why it is incorrect**
It is incorrect because the statistical connection is logarithmic.

**Detection signal**
Doubling [[numero_microestados]] is treated as doubling [[entropia]].

**Conceptual correction**
Apply the logarithmic scale correctly: doubling [[numero_microestados]] does not double [[delta_entropia]] because the connection involves a logarithm of the ratio between states.

**Mini-example of contrast**
A huge [[ratio_microestados]] does not create a linearly huge [[delta_entropia]].

## Interpretation errors


### Error 7: Ignoring the sign of [[delta_entropia]]
**Why it seems correct**
It seems secondary when only the number is requested.

**Why it is incorrect**
It is incorrect because the sign indicates growth or reduction of accessible multiplicity.

**Detection signal**
A positive result is explained as loss of microstates, or the opposite.

**Conceptual correction**
Determine the sign of [[delta_entropia]] by comparing final and initial multiplicity: [[ratio_microestados]] greater than one means increasing, less than one means decreasing [[entropia]].

**Mini-example of contrast**
If [[ratio_microestados]] > 1, the statistical reading must indicate increasing [[entropia]].


### Error 8: Forgetting the role of [[k_boltzmann]]
**Why it seems correct**
It seems like a decorative constant.

**Why it is incorrect**
It is incorrect because it converts dimensionless information into J/K.

**Detection signal**
The statistical result has no units or is compared directly with energy.

**Conceptual correction**
Include [[k_boltzmann]] in the statistical calculation so the result has J/K units and can be directly compared with the classical reading of [[delta_entropia]].

**Mini-example of contrast**
[[k_boltzmann]] lets microscopic counting match classical [[entropia]].

## Quick self-control rule

Before accepting a [[delta_entropia]], check that [[calor_reversible]] belongs to a reversible path, [[temperatura]] is in kelvin, and the sign matches the change in [[ratio_microestados]].
