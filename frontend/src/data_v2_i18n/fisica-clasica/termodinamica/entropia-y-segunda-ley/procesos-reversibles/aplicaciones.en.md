## 1. Power cycle design in thermal power plants

In every thermal power plant (coal, natural gas, nuclear), the cycle engineer first calculates [[eta_Carnot]] between the temperatures of the hot reservoir (combustion chamber or reactor) and the cold reservoir (condenser, cooling tower). This value establishes the maximum efficiency that no cycle modification can exceed.

The real cycle (Rankine for steam, Brayton for gas) is evaluated by comparing its efficiency with [[eta_Carnot]]. The second-law efficiency compares real performance with [[eta_Carnot]] and quantifies design quality: values of 70-85% indicate good utilisation; values below 60% signal significant room for improvement.

Typical improvements aim to bring the real cycle closer to the reversible one: feedwater preheating (reduces irreversibility in the boiler), intermediate reheat in the turbine (reduces moisture and losses), and combined gas-steam cycles (better utilise the temperature range).

Dominant variable: [[eta_Carnot]] as reference and eta_II as quality indicator
Validity limit: [[eta_Carnot]] assumes constant-temperature reservoirs, but in Rankine cycles steam temperature varies during heat absorption. For greater precision, the thermodynamic mean temperature is used.

## 2. Refrigeration and heat pumps

The maximum coefficient of performance (COP) of a reversible refrigerator is COP_Carnot = [[T_frio]] / ([[T_caliente]] − [[T_frio]]), and for a reversible heat pump COP_HP = [[T_caliente]] / ([[T_caliente]] − [[T_frio]]). Both are derived directly from [[DeltaS_univ]] = 0.

The HVAC engineer uses these values as references to evaluate commercial equipment. A domestic air conditioner with a real COP of 3.5 versus a reversible COP near 12 indicates a second-law efficiency of 29%, signalling much theoretical room for improvement.

The practical limit comes from the T gradients needed in heat exchangers (evaporator and condenser), compressor friction, and pressure losses in piping. Each of these sources generates entropy and reduces real COP below the reversible value.

Dominant variable: COP_Carnot as reference and COP_real / COP_Carnot as quality indicator
Validity limit: the COP_Carnot formula assumes constant reservoir temperatures. If the heat source or sink varies in temperature (e.g., heating water from 10 °C to 60 °C), integration is required.

## 3. Gas liquefaction and cryogenics

In the cryogenic industry, the minimum work to liquefy a gas from ambient temperature to its boiling point is calculated through an idealised reversible process. The minimum work is the exergy difference between gaseous and liquid states, equivalent to the work of a Carnot cycle operating between T_ambient and T_liquefaction.

To liquefy nitrogen from ambient temperature down to 77 K, the reversible reference gives a Carnot fraction near 74%. The minimum work per kg is obtained as an exergy difference and is about 768 kJ/kg. Real systems (Linde, Claude) consume 3-5 times more, indicating a second-law efficiency of 20-33%.

Comparison with the reversible process allows evaluating whether investing in improving the liquefaction cycle (pre-cooling, expanders instead of valves) is worthwhile or if the losses are inherent to the temperature range.

Dominant variable: minimum reversible work per kg of liquefied gas (kJ/kg)
Validity limit: the reversible model assumes ideal gas for the gaseous phase. At pressures and temperatures near the transition zone, real equations of state (Peng-Robinson, NIST) are needed.

## 4. Hydrogen fuel cells

A hydrogen fuel cell converts chemical energy to electrical energy. The maximum reversible efficiency is not limited by Carnot (because it is not a cyclic heat engine) but by the reaction thermodynamics: eta_max = ΔG / ΔH, where ΔG is the Gibbs free energy and ΔH the reaction enthalpy.

For the reaction H₂ + ½O₂ → H₂O at 25 °C: ΔG = −237 kJ/mol, ΔH = −286 kJ/mol. The maximum reversible efficiency is 237/286 = 82.9%. This is the reference against which real cell efficiency is measured (typically 50-65%).

The difference between real and reversible efficiency is due to internal irreversibilities: electrode polarisation, membrane ohmic resistance, mass transport limitations. Each source generates entropy and reduces cell voltage below the reversible value (1.23 V at 25 °C).

Dominant variable: real cell voltage vs reversible voltage (V) and second-law efficiency
Validity limit: at elevated temperatures (SOFC cells at 800 °C), ΔG changes with T and maximum reversible efficiency increases. The 25 °C model is not directly applicable.

## 5. Compressed air energy storage (CAES)

In compressed air energy storage systems, air is compressed during off-peak hours (cheap electricity) and expanded during peak hours to generate electricity. Maximum storage efficiency is calculated assuming isentropic (reversible adiabatic) compression and expansion.

For a pressure ratio of 70:1 and isentropic compression from 300 K, the ideal final temperature is near 1032 K. The isentropic compression work is about 735 kJ/kg. Isentropic expansion theoretically recovers 100% of that work.

In practice, real compression generates entropy (air temperature higher than isentropic) and real expansion also generates entropy (final temperature higher than isentropic). The round-trip efficiency of adiabatic CAES systems is 60-70%, compared to 100% reversible.

Comparison with the reversible process allows quantifying losses from compressor irreversibility (typical isentropic efficiency: 85-90%) and turbine irreversibility (typical isentropic efficiency: 88-93%), and deciding whether investing in higher-efficiency compressors justifies the cost.

Dominant variable: isentropic efficiency of compressor and turbine (dimensionless)
Validity limit: the isentropic model assumes air as an ideal gas with constant c_p. At 70 atm pressures, ideality deviations are 2-5% and may require real gas corrections.
