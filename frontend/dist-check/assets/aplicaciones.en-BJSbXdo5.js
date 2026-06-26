const e=`## 1. Domestic heating using water radiators

Centralized hot-water heating systems are one of the most direct applications of sensible heat. Water is heated in a boiler to typical temperatures between 60 °C and 80 °C and circulates through metal radiators distributed throughout the dwelling. In each radiator, the water releases heat to the room air and returns to the boiler at a return temperature between 10 °C and 20 °C lower than the supply temperature.

The amount of heat released in each radiator depends linearly on the mass of water circulating per unit time, the specific heat capacity of water, and the temperature difference between supply and return. Water is irreplaceable as a domestic heat-transfer fluid because its high [[c_esp]] allows it to carry large amounts of [[Q]] at relatively low flow rates and moderate temperatures, reducing thermal risk for occupants and improving system energy efficiency.

Dominant variable: the temperature difference between the water supply and return, which directly determines the thermal power released by the circuit.
Validity limit: the sensible heat model with constant [[c_esp]] is fully valid in the 40–90 °C range of liquid water; outside that range or if partial vaporization occurs, the model must incorporate the latent heat of vaporization.

## 2. Medical autoclave sterilization

Autoclaves use saturated steam at 121 °C (at approximately 2 atm pressure) to sterilize medical instruments. The process involves two heat transfer phenomena: first, condensation of steam on the instrument surface (latent heat of condensation, with [[L]] of about 2 200 000 J/kg), and second, heating of the instrument from its initial temperature to 121 °C (sensible heat). The heat released by steam during condensation is far greater than the subsequent sensible heat contribution.

Sterilization efficacy depends not only on the temperature reached but on the total thermal energy delivered to microorganisms. Using steam instead of dry hot air allows far more [[Q]] to be transferred per unit time at the same temperature, because the latent heat of condensation releases energy massively the moment the steam contacts the cold surface.

Dominant variable: the latent heat of condensation of steam, which represents more than 90 % of the total heat transferred to the instruments during the initial contact phase.
Validity limit: the latent heat model is valid as long as the steam remains saturated and pressure is stable; if pressure drops below 2 atm, the condensation temperature falls below 121 °C and sterilization may be compromised.

## 3. Evaporative cooling in living organisms

Sweating is the main heat-dissipation mechanism in mammals during intense exercise or in hot environments. The principle is the latent heat of vaporization of water: each kilogram of sweat that evaporates removes approximately 2 430 000 J from the organism at 37 °C, without requiring a drop in body temperature to release that energy.

Evaporative thermal regulation is extraordinarily efficient precisely because water's [[L]] is very high. One litre of evaporated sweat removes about 2 430 kJ, equivalent to the energy needed to raise 58 kg of water by one kelvin. Without this mechanism, the human body could not maintain a stable core temperature during prolonged exercise. The effectiveness of the process depends on relative ambient humidity: when humidity is high, evaporation is hindered and [[Q]] is not transferred efficiently to the surroundings.

Dominant variable: the latent heat of vaporization of body water, which determines the amount of [[Q]] extracted per kilogram of sweat evaporated.
Validity limit: the model is valid when evaporation is complete; in high relative humidity environments (above 80 %), the evaporation rate decreases and the latent heat model overestimates the [[Q]] effectively extracted per unit mass of sweat.

## 4. Solar thermal energy storage with phase change materials

High-efficiency solar storage systems use phase change materials (PCM) that absorb large amounts of [[Q]] when melting during the day and release them when solidifying at night. Materials such as paraffin (with a melting [[L]] of 150 000 to 250 000 J/kg at temperatures of 20–70 °C) or hydration salts (sodium nitrate, with [[L]] of about 170 000 J/kg) allow far greater energy storage densities than liquid water heated over the same temperature range.

For liquid water between 20 °C and 60 °C, the energy density is [[m]] · [[c_esp]] · [[DeltaT]], giving 4186 × 40 ≈ 167 000 J/kg. A PCM with a melting [[L]] at 45 °C stores an equivalent amount in a single phase change, occupying the same volume but without requiring temperature variation during charge and discharge, which simplifies integration with low-temperature solar collectors.

Dominant variable: the latent heat of fusion of the phase change material, which determines the energy storage density of the system.
Validity limit: the latent heat model with constant [[L]] is valid at atmospheric pressure and in the transition temperature range; if the operating temperature exceeds the melting point by several degrees, the system shifts to sensible heat with a [[c_esp]] that differs from that of the solid phase.

## 5. Quenching and annealing of metals in industrial heat treatment

Metal heat treatments — quenching, annealing, normalizing — consist of controlled heating and cooling cycles that modify the microstructure and mechanical properties of the material. The heat supplied during heating follows the sensible heat model as long as there is no phase change; when crossing phase transformation temperatures (such as the austenitic transition of steel at about 723 °C), a latent heat associated with crystalline reorganization appears.

The subsequent cooling rate determines the final hardness of the material: rapid cooling in water or oil (quenching) locks in a hard martensitic microstructure, while slow furnace cooling (annealing) produces a softer, more ductile ferritic-pearlitic microstructure. The total energy exchanged in each cycle, calculated as the sum of the sensible heats of each segment and the latent heats of each phase transformation, can reach several MJ per kilogram of material, and must be controlled precisely to guarantee the mechanical properties of the final product.

Dominant variable: the rate of heat transfer during cooling, which controls the speed of microstructural transformation and therefore the hardness and toughness of the treated material.
Validity limit: the sensible heat model with constant [[c_esp]] introduces errors greater than 10 % over temperature ranges of several hundred kelvin for steel; in those cases it is necessary to use tabulated [[c_esp]] values as a function of temperature and to add the latent heats of each phase transformation identified in the material's equilibrium diagram.
`;export{e as default};
