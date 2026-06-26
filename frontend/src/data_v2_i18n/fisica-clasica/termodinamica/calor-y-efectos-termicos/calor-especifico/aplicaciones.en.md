## 1. Cold management in HVAC systems using water as heat-transfer fluid

Large building and data center refrigeration systems use chilled water as a heat-transfer fluid in closed circuits. The water absorbs the heat dissipated by equipment and transports it to outdoor chillers. The effectiveness of the system depends directly on [[c]] of water: because it is high (4186 J/(kg·K)), a large amount of heat can be extracted with modest temperature changes (typically [[DeltaT]] of 5 to 10 K between supply and return). This reduces the required flow rate and consequently the energy consumption of the pumps.

If a fluid with lower [[c]] were used, such as mineral oil (≈2000 J/(kg·K)), twice the mass flow rate would be needed to transfer the same power with the same [[DeltaT]], doubling the hydraulic pump power and operating cost.

Dominant variable: the specific heat capacity [[c]] of the heat-transfer fluid, which determines the energy per unit mass and temperature change that the circuit can transport.
Validity limit: the sensible heat model with constant [[c]] is valid as long as the fluid remains in the liquid phase. If temperature drops below the fluid's freezing point, antifreeze mixtures can alter [[c]] and the model requires tabular adjustment.

## 2. Material identification by mixing calorimetry in analytical chemistry

Determining the specific heat capacity of an unknown material through mixing calorimetry is a standard technique in analytical chemistry and materials science. A sample of the material is heated to a known temperature, placed in a calorimeter with water at a known temperature, and the equilibrium temperature is measured. From [[c]] of water, the mass of the material and water, and the temperature changes, [[c]] of the unknown material is calculated.

The precision of the method depends on minimizing calorimeter losses and measuring [[DeltaT]] with sufficient resolution. A 1 % uncertainty in temperature measurement produces a direct 1 % uncertainty in [[c]], because [[c]] is proportional to the ratio [[Q]] / [[DeltaT]]. By comparing the obtained [[c]] with reference tables, the material can be narrowed down to a few options and confirmed with other analyses.

Dominant variable: the [[DeltaT]] of the water in the calorimeter, which is the effective denominator in the calculation of [[c]] of the unknown material. A larger water [[DeltaT]] reduces the relative measurement error.
Validity limit: the technique is valid as long as [[c]] of the material is constant over the temperature range of the experiment. For materials with strongly T-dependent [[c]] (such as certain polymers or alloys), the determined value is only an average over the tested range.

## 3. Heat sink design in power electronics

Heat sinks in power converters, audio amplifiers, and LED lighting modules must absorb transient heat pulses without the component temperature exceeding the safety limit. The design parameter is the total heat capacity [[C_total]] of the heat sink, which determines how much energy it can absorb per kelvin of temperature rise.

Aluminium (c ≈ 900 J/(kg·K), density ≈ 2700 kg/m³) is the standard material for heat sinks because it combines a reasonable volumetric heat capacity (density × c ≈ 2 430 000 J/(m³·K)) with low density and high thermal conductivity. Copper (c ≈ 386 J/(kg·K), density ≈ 8900 kg/m³) has a similar volumetric heat capacity (≈ 3 430 000 J/(m³·K)) but is heavier and more expensive, so it is reserved for high-power applications where its superior thermal conductivity is decisive.

Dominant variable: the total heat capacity [[C_total]] of the heat sink, which scales with the mass of the material and determines the damping of temperature peaks during power transients.
Validity limit: the constant-[[c]] model is valid over the typical operating range of heat sinks (0–150 °C). The thermal conductivity of the material, not only [[c]], determines temperature uniformity in the heat sink; a high [[c]] without high conductivity only buffers the surface temperature, not the internal distribution.

## 4. Oceanic climate regulation and coastal climate stability

The oceans act as the main thermal regulator of Earth's climate system thanks to the high [[c]] of liquid water. The oceans can absorb or release enormous amounts of solar energy with relatively small temperature changes, buffering seasonal thermal fluctuations. Coastal areas have milder climates than continental ones because proximity to the ocean provides a gigantic heat reservoir whose temperature changes slowly.

The total heat capacity of the global ocean (mass ≈ 1.4 × 10²¹ kg, [[c]] ≈ 3900 J/(kg·K) for seawater) is approximately 5.5 × 10²⁴ J/K. This means that for the mean surface ocean temperature to rise one kelvin, approximately 5.5 × 10²⁴ joules of extra energy must be absorbed, an amount equivalent to several decades of the solar power reaching Earth. This massive thermal inertia explains why the ocean responds so slowly to changes in climate forcing.

Dominant variable: the specific heat capacity [[c]] of seawater, which determines the amount of solar energy the oceans can absorb per kelvin of warming.
Validity limit: the constant-[[c]] model is a good approximation for seawater in the 0–30 °C range of surface temperature. [[c]] of seawater varies slightly with salinity and pressure at depth, but the effect is below 2 % under normal oceanic conditions.

## 5. Temperature control in industrial plastic injection molds

In injection molding processes, molten plastic (at temperatures between 200 °C and 300 °C) is injected into a metal mold that must cool it rapidly to the demolding temperature (60–80 °C). The cycle time of the process — and therefore the machine's productivity — depends directly on how quickly the mold can absorb the heat from the plastic and transfer it to the cooling water circulating through its internal channels.

The mold steel (c ≈ 490 J/(kg·K)) has a [[C_total]] determined by its mass. For a given cycle, the heat that must be extracted from the plastic is the product of the part mass, [[c]] of the plastic, and the solidification [[DeltaT]]. The cooling water extracts that heat by absorbing [[Q]] through the channels; the cooling effectiveness depends on the water flow rate, [[c]] of water, and the temperature difference between the mold and the cooling water.

Dominant variable: the total heat capacity [[C_total]] of the mold + part system, which determines the cooling time required for temperature to drop to the demolding value.
Validity limit: the constant-[[c]] model is valid for mold steel in the 20–300 °C range with error below 8 %. For the plastic, [[c]] can vary significantly during solidification (especially in semi-crystalline plastics, where there is a latent heat of crystallization), and in that range the sensible heat model is only an approximation.
