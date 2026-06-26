const e=`## 1. Experimental determination of specific heat capacity of materials by the mixing method

The calorimetric mixing method is the standard technique for measuring the specific heat capacity [[c_i]] of solid materials in the laboratory. The sample is heated to a known temperature, introduced into a calorimeter containing water at room temperature, and the equilibrium temperature [[T_eq]] is measured. Applying the calorimetry principle with the zero-sum condition for [[Q_i]], [[c_i]] of the unknown material is solved for directly.

The precision of the method depends on minimizing heat losses to the surroundings (reducing transfer time and using well-insulated calorimeters) and on accurately measuring masses and temperatures. With careful experimental technique, [[c_i]] values with uncertainty below 5 % can be obtained, sufficient to identify the material by comparison with reference tables.

Dominant variable: the experimentally measured equilibrium temperature [[T_eq]], whose precision directly determines the precision of the calculated [[c_i]]. A 0.1 K error in [[T_eq]] produces a relative error of approximately 2 % in [[c_i]] for standard laboratory experiments.
Validity limit: the method is valid as long as the material undergoes no phase change in the experimental temperature range and [[c_i]] is essentially constant over that range. For materials with strongly T-dependent [[c_i]], the determined value is only an average over the tested range.

## 2. Temperature control in solar domestic hot water systems

Solar domestic hot water systems accumulate solar energy in hot water tanks and mix it with cold network water to produce the flow at the desired consumption temperature. The mixing control follows exactly the calorimetric principle: the mixing temperature is the weighted average of the hot tank water temperature and the cold network water temperature, with weights equal to their mass flow rates times the [[c_i]] of water.

The system designer calculates the hot water flow rate needed to reach a shower temperature of 40 °C, given that the tank is at 65 °C and the network water is at 12 °C. Applying the calorimetric principle to continuous flow (rather than discrete masses), the required fraction of hot water is (40 − 12) / (65 − 12) ≈ 0.53: approximately 53 % of the total flow must be hot water from the solar tank.

Dominant variable: the temperature of the solar storage tank water, which determines the mixing ratio and therefore the total water flow used per unit of available solar hot water flow.
Validity limit: the lossless calorimetric mixing model is valid for short mixing times inside the thermostatic valve. In long pipework, thermal losses to the walls modify the arriving temperature and the model requires correction for pipe losses.

## 3. Quenching and selection of quench fluid in metal heat treatment

In metal quenching processes, a hot part is immersed in a quenching fluid (water, oil, or aqueous polymer) for rapid cooling to fix the desired microstructure. The final temperature of the quenching fluid after each quenching cycle determines whether the process can be repeated without waiting for the bath to cool, directly affecting workshop productivity. The calorimetry principle allows estimating this final temperature without complex simulations.

To keep the quench bath temperature below a safety limit (for example, 60 °C for oil or 40 °C for water), the minimum mass of quenching fluid is calculated as a function of the number of parts quenched per hour and their total heat capacities. If the bath temperature exceeds the limit, a bath cooling system is installed whose design is also based on the calorimetric principle.

Dominant variable: the total heat capacity of the quench bath ([[m_i]] · [[c_i]] of the fluid), which determines how much energy it can absorb per kelvin of bath temperature rise.
Validity limit: the model assumes instantaneous and homogeneous mixing of the quench fluid, which is an approximation for large baths with agitation. In baths without agitation, temperature gradients form so that the local temperature in contact with the part is higher than the mean bath temperature; the model underestimates the maximum local temperature.

## 4. Design of sensible heat thermal energy storage systems

Sensible heat energy storage systems (without phase change) accumulate energy by heating a tank of high volumetric heat capacity material during periods of energy surplus and release it by cooling the tank when needed. The sizing of the tank follows directly from the calorimetric principle: the stored energy is the total heat capacity of the tank multiplied by the temperature change between charge and discharge.

A 1000-litre water tank heated from 45 °C to 80 °C stores 1000 × 4186 × (80 − 45) / 1000 ≈ 146 510 kJ ≈ 40.7 kWh. An equivalent concrete tank (density 2200 kg/m³, [[c_i]] ≈ 880 J/(kg·K)) of 0.45 m³ (same mass of 1000 kg) over the same temperature range stores 1000 × 880 × 35 / 1000 ≈ 30 800 kJ ≈ 8.6 kWh, less than one quarter. Water is the most efficient sensible heat storage material per unit mass.

Dominant variable: the total heat capacity of the tank ([[m_i]] · [[c_i]]), which determines the energy stored per kelvin of temperature variation. Increasing the tank mass increases stored energy proportionally, while temperature variation is the second design lever.
Validity limit: the pure sensible heat model is valid as long as the tank material does not cross any phase transition in the operating range. If water is heated above 100 °C at atmospheric pressure, the system must be pressurized or a higher-boiling-point fluid must be used.

## 5. Calorimeter calibration in food science and pharmacology

Differential scanning calorimetry (DSC) is an analytical technique that measures the heat absorbed or released by a sample as a function of temperature with very high precision. It is used to determine specific heat capacities, reaction heats, melting temperatures, and thermal stability of pharmaceuticals, polymers, and foods. Calibration of the instrument requires applying the calorimetric principle with standards of accurately known [[c_i]] (sapphire, indium).

In the food industry, calorimetry is used to determine the specific heat capacity of composite foods and to design pasteurization, sterilization, and rapid cooling processes. The calorimetry principle ensures that the energy needed to heat a food from storage temperature to process temperature is exactly the sum of the total heat capacities of all its components (water, fats, proteins, carbohydrates) multiplied by [[DeltaT_i]] of each component.

Dominant variable: the equilibrium temperature [[T_eq]] reached by the sample in contact with the DSC reference system, whose high-precision measurement allows [[c_i]] of the sample to be calculated with uncertainty below 0.5 % when the instrument is well calibrated.
Validity limit: the DSC method is valid for homogeneous or quasi-homogeneous samples in local thermodynamic equilibrium. For heterogeneous materials with composition gradients or for rapid irreversible processes, the DSC signal requires careful interpretation and the simple calorimetric equilibrium model may not be sufficient.
`;export{e as default};
