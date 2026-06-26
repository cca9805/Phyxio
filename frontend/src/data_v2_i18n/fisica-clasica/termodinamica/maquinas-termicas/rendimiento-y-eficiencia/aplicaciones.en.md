## 1. Coal and natural-gas thermoelectric power plants

Conventional thermoelectric power plants burn fossil fuel to heat steam, which expands in a turbine and drives an alternator. The complete cycle—boiler, turbine, condenser, pump—directly defines [[Q_H]], [[W_util]], and [[Q_C]]. The real efficiency of these plants has historically been low: coal installations from the 1960s–1990s operated with [[eta]] between 0.28 and 0.36.

The move toward supercritical and ultra-supercritical cycles raises steam temperature above 600 °C, lifting [[eta_Carnot]] and enabling real [[eta]] of 0.44–0.48. The condenser cooled by river water at 15–20 °C acts as the cold reservoir. The dominant variable for efficiency is the maximum steam temperature in the turbine: each 10 °C increase raises [[eta]] by approximately 0.4 percentage points.

Dominant variable: maximum steam cycle temperature, which determines the upper Carnot efficiency bound and therefore the possible improvement margin.
Validity limit: the two-reservoir model loses accuracy when steam temperature varies by more than 15% during heat absorption in the boiler; for supercritical cycles with reheat, integrating the temperature profile along the heat exchanger is needed.

## 2. Internal combustion engines in automotive applications

Gasoline and diesel engines are the most widely known applications of thermal efficiency. In both cases, [[Q_H]] comes from fuel combustion, [[W_util]] is the mechanical work transferred to the crankshaft, and [[Q_C]] is distributed between hot exhaust gases and the water cooling system.

The diesel engine has higher [[eta]] than the gasoline engine (0.40–0.46 versus 0.25–0.35) because it operates with a higher compression ratio, which increases the maximum cycle temperature and raises the effective [[eta_Carnot]]. However, the exhaust temperature of both engine types remains high (400–700 °C), indicating that a significant fraction of [[Q_C]] is discharged to the atmosphere without exploitation. Turbocharger systems recover part of that exhaust gas enthalpy to compress intake air, indirectly reducing the [[Q_H]] needed for the same [[W_util]].

Dominant variable: geometric compression ratio, which sets the maximum cycle temperature and conditions the indicated engine efficiency before subtracting mechanical losses.
Validity limit: the fixed-reservoir model loses validity during cold-start and hard-acceleration transients; in those regimes combustion temperature varies cycle by cycle and instantaneous [[eta]] differs from the steady-state value.

## 3. Gas turbines in distributed power generation

Simple-cycle gas turbines—used in distributed generation and peak-demand service—absorb heat in the combustion chamber ([[Q_H]]) and reject heat in exhaust gases ([[Q_C]]). The efficiency of these turbines is around 0.28–0.35, clearly below the Carnot limit for their reservoirs (combustion temperature of 1200–1400 K and exhaust temperature of 800–900 K).

The gap between [[eta]] and [[eta_Carnot]] reveals that these turbines operate with large heat-transfer irreversibilities: the temperature gradient between the flame and the working fluid is enormous. In the combined cycle, exhaust gases from the gas turbine serve as the hot reservoir of a secondary steam cycle, converting part of the gas turbine's [[Q_C]] into the steam turbine's [[Q_H]]. The result is a global system [[eta]] exceeding 0.58–0.62, well above the efficiency of each cycle separately.

Dominant variable: turbine inlet temperature (TIT), which sets the Carnot upper bound; increasing it requires refractory materials and high-technology blade cooling systems.
Validity limit: the combined cycle assumes exhaust gases exit at a temperature sufficient to heat the secondary steam; if TIT drops under partial load, the secondary cycle may shut down and global [[eta]] falls abruptly.

## 4. Geothermal energy plants

Geothermal plants extract heat from underground hot-water reservoirs at 80–200 °C and reject heat to condensers cooled by surface water or air. [[eta_Carnot]] for reservoirs at 180 °C and 30 °C (453 K and 303 K) is only 0.33, limiting real efficiency to 0.10–0.20 even with well-designed cycles.

Although [[eta]] is low in absolute terms, the heat source is free (Earth's internal heat), so the marginal cost per kilowatt-hour is very low. The relative efficiency [[eta]]/[[eta_Carnot]] of the best geothermal plants exceeds 0.55, comparable to combustion engines, indicating the cycle is well optimised within its temperature constraints.

Binary cycles (organic Rankine cycle) allow operation with sources at 80–120 °C that cannot be used with standard steam cycles, expanding the exploitable geothermal resource even though [[eta]] is even lower (0.08–0.14).

Dominant variable: geothermal source temperature, which determines both [[eta_Carnot]] and the mass flow rate needed to produce a given power output.
Validity limit: reservoir temperature may decline with exploitation if the extraction rate exceeds natural recharge; in that case [[eta_Carnot]] decreases and plant efficiency falls over the years.

## 5. Waste-heat recovery in the steel industry

High-temperature industries—steelworks, cement plants, glass furnaces—generate enormous quantities of [[Q_C]] as hot exhaust gases (700–1100 °C) and slag. Installing heat recovery steam generators (HRSGs) allows converting part of that industrial [[Q_C]] into useful electrical or mechanical [[W_util]].

In these installations, the [[Q_H]] of the steam cycle is the [[Q_C]] of the industrial process: waste heat is recycled as input to a second engine cycle. The global energy system efficiency is the weighted sum of the main process efficiency and the recovery cycle efficiency, which typically contributes between 15 and 25 additional percentage points of chemical-energy-to-electricity conversion.

The magnitude [[eta]] of the recovery cycle is essential for deciding whether the investment in the HRSG is economically viable: if [[eta]] of the secondary cycle exceeds 20% and the available [[Q_C]] flow exceeds 10 MW thermal, the installation pays back within five years in most industrial contexts.

Dominant variable: exhaust gas temperature from the main process, which determines the recovery cycle's [[eta_Carnot]] and the steam flow that can be generated per unit mass flow of exhaust gases.
Validity limit: if exhaust gas temperature varies with furnace load (common in batch furnaces), the recovery cycle may operate under suboptimal conditions during low-load periods, reducing the time-integrated average efficiency.
