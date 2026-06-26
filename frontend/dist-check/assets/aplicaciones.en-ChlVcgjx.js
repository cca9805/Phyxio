const e=`## 1. Heat exchanger design in HVAC systems

In air conditioning systems, the refrigerant exchanges heat with room air through an evaporator. The refrigerant evaporates at constant temperature (isothermal process at fixed pressure) absorbing heat from the warm air. The engineer calculates [[DeltaS]] of the refrigerant and the air to evaluate the irreversibility of the exchange and size the evaporator surface so that entropy generation is minimised.

The smaller the temperature difference between refrigerant and air, the lower the [[DeltaS]]_universe generated per unit of heat transferred, but the larger the required exchange surface. The entropic calculation provides the quantitative criterion for the economic trade-off between material cost (surface area) and energy cost (irreversibility that reduces the cycle's COP).

The dominant hypothesis is that the refrigerant evaporates isothermally ([[DeltaS]] = [[Q_rev]]/[[T]]) while the air cools with constant [[c_p]] ([[DeltaS]] = [[m]]·[[c_p]]·ln([[T_f]]/[[T_i]])). The complete entropy balance of the exchanger determines the second-law efficiency of the equipment.

Dominant variable: [[DeltaS]]_universe generated in the exchanger (J/(K·s))
Validity limit: the isothermal model of the refrigerant fails if there is significant pressure drop in the evaporator, because then the evaporation temperature is not constant along the tube.

## 2. Quality control in fusion welding processes

In metal welding, a joint is locally heated to the melting temperature of the filler material. The entropy change of the heat-affected zone (HAZ) determines the final microstructure of the metal: rapid cooling (high rate of [[DeltaS]] variation) produces martensite (hard but brittle), while slow cooling produces ferrite-pearlite (more ductile).

The metallurgist calculates [[DeltaS]] of the metal during post-weld cooling to predict the critical cooling rate and select welding parameters (current, travel speed, preheating) that minimise fracture risk.

The logarithmic formula is applied with steel's [[c_p]] (≈ 500 J/(kg·K)) from the melting temperature (≈ 1800 K) to ambient temperature. The entropic contribution of the phase change (solidification) is added separately as latent heat divided by the solidification temperature.

Dominant variable: [[DeltaS]] per unit mass of the HAZ (J/(kg·K))
Validity limit: the model fails if [[c_p]] varies drastically in the range (allotropic transitions of iron at 1185 K and 1667 K alter [[c_p]] by up to 20%).

## 3. Efficiency evaluation in aeronautical gas turbines

In a turbojet engine, combustion gas expands from the combustion chamber (≈ 1600 K, high pressure) to the exhaust (≈ 800 K, atmospheric pressure). The isentropic efficiency of the turbine is defined by comparing actual extracted work with maximum theoretical work (isentropic process, [[DeltaS]] = 0).

The engineer calculates [[DeltaS]]_gas using the general ideal gas formula with simultaneous temperature and volume change. The difference between actual [[DeltaS]] and zero (ideal case) directly quantifies losses due to aerodynamic friction, turbulence, and parasitic heat transfer in the blades.

The applied formula is [[DeltaS]] = [[n]]·[[c_v]]·ln([[T_f]]/[[T_i]]) + [[n]]·[[R]]·ln([[V_f]]/[[V_i]]), where both terms contribute simultaneously. A total [[DeltaS]] greater than zero indicates the turbine generates internal irreversibility proportional to that difference.

Dominant variable: [[DeltaS]] of gas per unit mass (J/(kg·K)) as an indicator of internal losses
Validity limit: at temperatures > 2000 K, dissociation of CO₂ and H₂O modifies [[c_v]] significantly; furthermore, combustion gases are not strictly a pure ideal gas.

## 4. Food preservation through rapid freezing

In the food industry, ultra-rapid freezing (cryogenic, with liquid nitrogen at 77 K) is preferred over slow freezing because it produces smaller ice crystals that preserve cellular texture. The thermodynamic difference is analysed through the food's entropy change during freezing.

The process is divided into segments: cooling the liquid food from ambient temperature ([[T_i]] ≈ 293 K) to the freezing point ([[T]] ≈ 271 K for foods with solutes), isothermal phase change (solidification), and cooling the solid to storage temperature ([[T_f]] ≈ 255 K). Each segment contributes its share to [[DeltaS]].

The dominant contribution is the phase change: with a freezing latent heat of ≈ 334 kJ/kg and a freezing temperature of 271 K, [[DeltaS]]_phase ≈ −334000/271 ≈ −1232 J/(kg·K) for the food. The rate at which this entropy is extracted (J/(K·s)) determines crystal size and product quality.

Dominant variable: rate of [[DeltaS]] variation during solidification (J/(K·s))
Validity limit: the isothermal phase change model is not exact when solutes depress the freezing point gradually (freezing range instead of a single point).

## 5. Thermal insulation design in space probes

Interplanetary probes operate in environments with extreme thermal gradients: the sun-illuminated face can reach 400 K while the shadow face drops to 100 K. Thermal control systems seek to minimise the entropy change of sensitive electronic components, keeping them within a narrow temperature range.

Calculating [[DeltaS]] of an electronic component fluctuating between [[T_i]] = 280 K and [[T_f]] = 320 K (acceptable range) versus one fluctuating between 200 K and 400 K (dangerous range) quantifies accumulated thermal damage. Each thermal cycle produces a [[DeltaS]] = [[m]]·[[c_p]]·ln([[T_f]]/[[T_i]]) that contributes to the material's thermal fatigue.

The design of the multilayer insulation (MLI) shield and heat pipes is optimised so that [[DeltaS]] per orbital cycle is minimal. A per-cycle [[DeltaS]] below a certain threshold guarantees a service life of thousands of orbital cycles without significant degradation of solder joints and semiconductors.

Dominant variable: accumulated [[DeltaS]] per orbital cycle of the component (J/K per cycle)
Validity limit: the model fails at temperatures below 50 K (Debye law) where [[c_p]] is no longer constant, and when thermal radiation dominates over conduction in the component's energy balance.
`;export{e as default};
