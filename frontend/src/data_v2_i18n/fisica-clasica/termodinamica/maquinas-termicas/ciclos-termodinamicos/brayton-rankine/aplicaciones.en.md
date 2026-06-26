# Applications — Brayton and Rankine Cycles

## 1. Gas turbines in peak electricity generation

Industrial gas turbines operating in the Brayton cycle are used to cover peak electricity demand: they start in minutes, while a steam power plant needs hours to reach stable operating conditions. A typical gas turbine with [[r_p]] of 18 and turbine inlet temperature of 1450 K achieves a real [[eta_th]] of 38–42 %.

Context: the gas turbine burns kerosene or natural gas; exhaust gases at 550–600 °C optionally feed a recovery Rankine cycle.

Dominant variable: [[r_p]] and [[T_H]] jointly determine [[eta_th]]; maximum temperature is limited by ceramic materials and internal blade cooling.

Validity limit: the ideal model overestimates [[eta_th]] by 15–25 % compared to the real value; design analyses must use real isentropic efficiencies of the compressor and turbine.

## 2. Jet engines in aviation

The civil aviation turbofan engine is a modified Brayton cycle with multi-stage compressors and [[r_p]] of 40–50 in the most modern engines. At cruise altitudes, the ambient [[T_C]] is 220–230 K, which favors the cycle [[eta_th]].

Context: design prioritizes thrust-to-weight ratio and specific fuel consumption; the [[eta_th]] of the thermogenerator core can exceed 50 % under cruise conditions. Modern geared turbofan architectures decouple the fan speed from the core turbine speed, allowing higher [[r_p]] in the core without sacrificing fan efficiency, which further improves overall propulsive efficiency.

Dominant variable: in aviation, [[W_neto]] per unit mass is as important as [[eta_th]]; the optimal [[r_p]] for maximum [[W_neto]] differs from that for maximum [[eta_th]].

Validity limit: at very high altitudes, variations of [[gamma]] with temperature and the presence of humidity in the air modify cycle behavior relative to the standard model. Additionally, the assumption of constant specific heats breaks down at the extreme temperatures found in military afterburner operation, where combustion products approach 2200 K.

## 3. Coal steam power plants and Rankine cycle

Pulverized coal thermal plants use the Rankine cycle with superheated steam at 550–620 °C and pressures of 25–30 MPa. Two-stage reheating and regeneration with 7–8 extractions raise the real [[eta_th]] to 42–47 %.

Context: [[Q_H]] comes from burning coal in the boiler; [[Q_C]] is rejected to a river or cooling tower; [[W_neto]] drives the electric generator. Ultra-supercritical plants operating at 600 °C and 30 MPa represent the current technological frontier in coal-fired generation, achieving the highest [[eta_th]] values possible with this fuel source.

Dominant variable: [[T_H]] has the greatest impact; each 50 K increase in maximum steam temperature raises [[eta_th]] by approximately 1–1.5 percentage points.

Validity limit: steam temperature is limited by austenitic steels in the boiler; exceeding 650 °C requires superalloys at much higher cost and represents the current limit of ultra-supercritical technology.

## 4. Pressurized water reactor (PWR) nuclear power plants

PWR nuclear plants use the Rankine cycle with saturated steam at ~290 °C because nuclear fuel limits [[T_H]] to 320–330 °C in the primary circuit. The result is a modest [[eta_th]] of 33–36 %.

Context: core cooling imposes strict limits on [[T_H]]; unlike coal plants, it is not straightforward to raise maximum steam temperature to improve efficiency. Advanced reactor designs such as high-temperature gas-cooled reactors aim to push [[T_H]] above 700 °C, which would significantly increase [[eta_th]].

Dominant variable: the [[T_C]] of the condenser has a relatively greater impact here than in other plants, since [[T_H]] is fixed. Coastal plants with cold seawater slightly improve [[eta_th]] compared to inland ones.

Validity limit: the ideal Rankine cycle model predicts efficiencies of 44–46 % at those temperatures; the gap with the real 33–36 % reflects significant irreversibilities in the steam generator and the low-pressure turbine.

## 5. Natural gas combined-cycle plants (CCGT)

Combined-cycle gas turbine (CCGT) plants are the most efficient application of the Brayton-Rankine pair. Exhaust gases from the Brayton at 550–600 °C feed a heat recovery steam generator that produces steam for the Rankine cycle. The global [[eta_th]] exceeds 60 % in the most modern installations.

Context: high-purity natural gas allows Brayton [[T_H]] of 1500–1600 K; Rankine steam operates at 560–580 °C; the condenser rejects [[Q_C]] at 35–45 °C.

Dominant variable: the greatest lever for improving [[eta_th]] in a CCGT is raising the Brayton [[T_H]]; each 50 K increase in gas turbine inlet temperature contributes ~1 percentage point of overall efficiency.

Validity limit: the combined cycle model assumes all exhaust gas energy is recovered in the heat recovery boiler; in practice, exit gas temperature from the recovery boiler does not drop below 80–100 °C, representing a recovery loss of 3–5 % of the primary [[Q_H]]. Triple-pressure cycles with reheating improve residual heat recovery and approach 63 % overall [[eta_th]] in the most advanced class J units, where Brayton [[T_H]] exceeds 1600 K through single-crystal superalloys with ceramic thermal barrier coatings. These plants represent the benchmark for fossil-fuel electricity generation and set the standard against which all competing technologies are measured in terms of carbon emissions per kilowatt-hour.
