const e=`# Common errors in the analysis of the heat pump

## Conceptual errors

### Error 1: Confusing energy transport with energy creation
**Why it seems correct**
The student observes that the system delivers 4 units of [[heat|q_calor]] consuming only 1 unit of [[electricity|w_elec]]. By analogy with mechanical efficiency, they assume the system has an efficiency of 400%, which intuitively leads them to think that the equipment is "creating" extra energy through some mysterious internal process.

**Why it is incorrect**
Physically, energy is not created; it is conserved. The error lies in ignoring the second source of energy: the outdoor environment. The heat pump is an open system that collects thermal energy already existing in the air. [[Electricity|w_elec]] is only used to move that energy, not to generate it from scratch.

**Detection signal**
The student obtains a performance of 400% and freezes thinking it is an impossible value because it exceeds 100%.

**Conceptual correction**
Think of the heat pump as a thermal truck. The truck doesn't "create" the cargo it carries; it only uses fuel ([[electricity|w_elec]]) to transport goods ([[heat|q_calor]]) from one city (the outside) to another (your home).

**Contrast mini-example**
If a truck delivers 1000 tons of food consuming 100 liters of diesel, we don't say the truck "created" food. We say it moved it. The same happens with the heat pump and the [[delivered heat|q_calor]].

## Model errors

### Error 2: Assuming that COP is constant for any temperature
**Why it seems correct**
Many students consider [[COP|cop]] as a fixed parameter of the device (like the [[power|kilovatio]] of a light bulb). This overgeneralization occurs because in simplified statements a single efficiency value is usually given to facilitate calculation.

**Why it is incorrect**
The [[COP|cop]] depends drastically on the thermal jump between the sources. As the outdoor temperature drops, the pressure in the evaporator decreases and the compressor must work much harder to reach the condensation pressure, which reduces efficiency. Ignoring this dependence leads to overestimating [[savings|ahorro]] in extreme climates.

**Detection signal**
The student predicts the same [[economic savings|ahorro]] for a home on the tropical coast as for one in the high mountains, based solely on the technical data sheet of the equipment at standard conditions.

**Conceptual correction**
The performance of a heat pump is a variable function, not a constant. Imagine riding a bicycle up a hill: your performance for moving forward depends on the slope's inclination (the temperature difference).

**Contrast mini-example**
If [[COP|cop]] were constant, the equipment would work just as well at -270 degrees Celsius as at 10 degrees Celsius. However, near absolute zero there is no thermal energy to extract, so the system would stop heating long before reaching that point.

## Mathematical errors

### Error 3: Mixing power and energy units in the balance
**Why it seems correct**
The confusion of magnitudes between [[kilowatt|kilovatio]] and [[kilowatt-hours|kWh]] is the most persistent mathematical error. The student uses the [[kW|kilovatio]] of the compressor directly in formulas that require [[total electric consumption|e_elec]], due to a lack of attention to the temporal dimension of the process.

**Why it is incorrect**
Power is the speed at which energy is transferred, while accumulated heat is a total quantity. Mixing them invalidates the dimensional coherence of the problem, giving results that cannot be compared with the electric bill or the thermal demand of the building.

**Detection signal**
Absurd results appear in the [[cost|coste]] calculation, with values of cents to heat a hotel or bills of millions of euros for a light bulb, due to factors of 3600 (seconds per [[hour|hora]]) not applied.

**Conceptual correction**
Remember that [[kilowatt|kilovatio]] are like a car's speed (km/h), while [[kilowatt-hours|kWh]] are the distance traveled (km). To know how much energy you have spent, you must multiply how fast the flow was going by how long it has been on.

**Contrast mini-example**
If you confuse magnitudes, a 10 [[kilowatt|kilovatio]] heat pump would spend the same in one second as in a year, which is logically impossible.

## Interpretation errors

### Error 4: Believing that extracted ambient heat is "wasted energy"
**Why it seems correct**
Seeing the term [[ambient heat|q_ambiente]] on the negative side of a flow diagram, some students assume it is a loss of heat to the outside, similar to heat escaping through a chimney in a traditional boiler.

**Why it is incorrect**
It is exactly the opposite. [[ambient heat|q_ambiente]] is the gain of renewable energy. The error comes from a poor interpretation of signs in the balance: the system steals heat from the outside (cooling the street air) to inject it into the interior. It is energy gained for the user, not lost.

**Detection signal**
The student subtracts ambient heat from the delivered heat instead of adding it to the electrical work to close the first law balance.

**Conceptual correction**
Imagine the outside is a free energy bank. [[ambient heat|q_ambiente]] is the money you take out of the ATM to spend in your home. It is not a loss; it is a thermal income.

**Contrast mini-example**
If ambient heat were a loss, a heat pump would heat more if you unplugged it from the outside, which is absurd since the cold exhaust air is proof that heat has entered the house.

## Quick self-control rule
To verify if your heat pump analysis is physically coherent, always apply this Second Law check:
1. Check that the [[COP|cop]] is strictly greater than the unit. If the result is equal to or less than 1, your pump behaves like a simple stove (model error).
2. Verify that the output heat [[delivered heat|q_calor]] equals the sum of the work [[electric work|w_elec]] and the extracted heat [[ambient heat|q_ambiente]]. If the output heat is less than the electricity consumed, you have violated the conservation of energy.
3. Make sure that [[megajoules|MJ]] and [[kilowatt-hours|kWh]] are correctly converted: one [[kilowatt-hour|kWh]] is equivalent to 3.6 [[megajoules|MJ]]. If you have not used this factor, your economic [[cost|coste]] will be wrong by a factor of almost 4 times.
`;export{e as default};
