## 1. Brayton cycle in gas turbines and jet engines

The **Brayton cycle** describes the operation of industrial gas turbines and jet engines. Of its four stages, two are approximately isobaric: **combustion** (expansion at high pressure) and **exhaust cooling** (contraction at low pressure). Pressure stays constant because the combustion chamber is open towards the nozzle and discharge valve.

During combustion, fuel burns at constant [[p]] and the hot gas expands. The absorbed heat [[Q]] is distributed between the internal energy of the gas (raising [[T2]]) and the work [[W]] that drives the turbine. Cycle efficiency increases with the pressure ratio between the two isobaric stages. Computing [[W]] = [[p]] · [[DeltaV]] in each stage is the starting point for the overall efficiency calculation.

In a civil jet engine the mass flow rate can reach 200 kg/s and chamber temperature exceeds 1800 K. Useful turbine power is on the order of \(10^7\) W, showing how the same isobaric formula scales from the laboratory to commercial aviation.

Dominant variable: [[Q]]
Validity limit: The isobaric model fails if chamber pressure varies by more than about 5% during combustion, which occurs in heavily loaded piston engines; in that case the process is polytropic.

## 2. Evaporators and condensers in refrigeration systems

Vapour-compression refrigeration systems operate with isobaric processes in two stages: **evaporation** (low pressure, constant temperature [[T1]] during phase change) and **condenser sub-cooling** (high pressure, no phase change). In the single-phase sections the working fluid changes [[DeltaT]] at constant [[p]], making the isobaric analysis directly applicable.

The balance [[Q]] = [[DeltaU]] + [[W]] applied to each stage determines how much heat is extracted from the refrigerated space and how much work the compressor consumes. A domestic refrigerator extracts about 200 W from the interior at −18 °C and rejects about 260 W to surroundings, with compressor work ~60 W. Optimising the COP requires correct modelling of the isobaric stages to minimise irreversibilities.

The key design variable is [[DeltaT]] between the working fluid and the refrigerated space: reducing it at constant pressure decreases compressor work and improves efficiency, but increases the required evaporator area.

Dominant variable: [[DeltaT]]
Validity limit: The isobaric model breaks down near the critical point (high reduced pressure), where the liquid-vapour distinction vanishes and thermodynamic properties vary rapidly with [[p]].

## 3. Gas expansion in weather and stratospheric balloons

**Weather balloons** ascend from sea level to 30–40 km altitude. Exterior pressure drops from 1013 hPa to below 10 hPa. The elastic balloon maintains interior pressure essentially equal to exterior pressure at every altitude (local isobaric process), so [[p]] decreases gradually during ascent.

Gay-Lussac's law gives [[V2]]/[[V1]] = [[T2]]/[[T1]] at each pressure level. As exterior temperature falls from ~293 K to ~213 K between the ground and 35 km, volume grows more than temperature alone would predict; the pressure drop dominates and a balloon of 1 m³ can reach 100 m³ before bursting. This maximum volume is the balloon size design criterion.

The work [[W]] = [[p]] · [[DeltaV]] done by the gas against the atmosphere comes from solar and ambient heat absorbed during ascent, and represents the energy the sonde carries to the stratosphere to transmit meteorological data.

Dominant variable: [[V2]]
Validity limit: The pure isobaric model is approximate; the real process combines temperature and pressure changes (polytropic). The isobaric approximation gives maximum volume estimates with errors below 10%.

## 4. Building heating and HVAC systems at constant pressure

Forced-air heating systems operate at constant atmospheric pressure. Air is heated in a heat exchanger and distributed through ducts. Required heating power is the product of mass flow rate, specific heat capacity at constant pressure, and [[DeltaT]]. In an office building with 5 kg/s airflow and [[DeltaT]] = 20 K, required power is ~100 kW.

The isobaric process also explains **natural convection**: when air is heated at constant [[p]], its volume increases (Gay-Lussac's law), density decreases, and it rises by buoyancy. Vertical convective currents in rooms, chimneys, and cooling towers are a direct consequence of the isobaric process acting on hot air.

Building energy efficiency depends on minimising [[Q]] by keeping [[DeltaT]] as small as possible through insulation. The isobaric model directly quantifies the energy saving produced by each kelvin reduction in the interior-exterior temperature difference.

Dominant variable: [[DeltaT]]
Validity limit: The model fails if the duct is sealed and the fan raises [[p]] appreciably (pressure differentials above 500 Pa in industrial systems); in that case the process is no longer isobaric and the compression work contribution must be added.

## 5. Thermochemistry of gas-phase reactions at atmospheric pressure

In chemistry laboratories and industrial reactors, most reactions involving gases occur at constant [[p]] (open reactors, atmospheric flasks). The heat exchanged at constant pressure equals the reaction enthalpy, related to [[DeltaU]] and [[W]] by the isobaric balance (enthalpy equals internal energy plus the isobaric expansion term).

In ammonia synthesis (Haber process), there are 2 fewer moles of gas produced per mole of reaction. At 500 °C and 1 atm, the isobaric work term is approximately −12.9 kJ/mol, while the reaction enthalpy is −92.4 kJ/mol. The difference, [[DeltaU]] ≈ −79.5 kJ/mol, measures the actual internal energy change. Ignoring the isobaric term introduces a 14% error in the heat balance, with direct consequences for heat exchanger design in the reactor.

The reason thermochemistry uses enthalpies rather than internal energies is precisely that the isobaric process is the normal laboratory condition. The concept of [[Q]] at constant pressure is thus the gateway from classical thermodynamics to quantitative chemistry.

Dominant variable: [[DeltaU]]
Validity limit: The isobaric model is exact for ideal gases; for real gases above 1 MPa, the Van der Waals correction can modify [[W]] by more than 5% and more accurate equations of state are required.
