# Models

## Ideal model

The ideal reversed cycle model assumes a reversible Carnot cycle between two reservoirs of infinite capacity at constant temperatures [[T_C]] and [[T_H]]. The working fluid undergoes perfect isothermal and isentropic processes. There is no friction, pressure drops or finite temperature differences in the heat exchangers. The resulting minimum work is [[W]] equal to [[Q_C]] times ([[T_H]] minus [[T_C]]) divided by [[T_C]], and the total entropy change [[Delta_S_total]] is exactly zero. This constitutes the theoretical upper bound of efficiency for any reversed cycle operating between the same temperatures.

## Hypotheses

- Thermal reservoirs have infinite heat capacity: their temperatures do not change when exchanging heat.
- The cycle is fully reversible: isentropic compression and expansion, isothermal exchanges.
- No friction losses or refrigerant leaks.
- Refrigerant temperatures match the reservoir temperatures exactly during exchange.
- The system operates in cyclic steady state.
- The first law applies: [[Q_H]] equals [[Q_C]] plus [[W]] always.

## Quantitative validity domain

The Carnot model is valid as a theoretical reference for temperature differences between 10 and 80 K, with cold reservoir temperatures between 200 and 300 K. It is used when the goal is to evaluate the relative efficiency of a real system against the ideal. Quantitatively, the model predicts that the minimum work to extract 1000 J with [[T_C]] of 263 K and [[T_H]] of 303 K is 152 J. The model ceases to be quantitative when irreversibilities dominate (real work exceeding 5 times minimum) or when temperature differences are extreme (cryogenics below 100 K).

## Model failure signals

- Real work is more than 5 times the Carnot work: irreversibilities invalidate the ideal prediction.
- Calculated [[Delta_S_total]] is negative: indicates data error or hypothesis violation.
- Refrigerant temperature varies significantly during exchange: the isothermal hypothesis does not hold.
- The compressor operates in frequent start-stop cycles: steady state does not apply.
- Reservoir capacity is limited and its temperature changes appreciably during the process.

## Extended or alternative model

The vapor-compression cycle model replaces the Carnot isothermal processes with real processes: real isentropic compression with isentropic efficiency of 70 to 85 percent, isobaric condensation at variable refrigerant temperature, isenthalpic expansion through throttling valve, and isobaric evaporation with superheating. This model predicts real work with 10 to 20 percent error.

When to switch to the extended model: when quantitative predictions of real work are needed, when evaluating specific component performance, or when the difference between the Carnot model and reality exceeds 50 percent of the work.

## Operational comparison

| Aspect | Ideal model (Carnot) | Real model (vapor compression) |
|---|---|---|
| Compression | Reversible isentropic | Isentropic with 70-85 % efficiency |
| Heat exchange | Isothermal, no temperature difference | Isobaric, with 5-15 K difference |
| Expansion | Reversible isentropic | Isenthalpic (irreversible) |
| [[Delta_S_total]] | Zero | Positive (0.1 to 5 J/K per cycle) |
| Work [[W]] | Carnot minimum | 2 to 5 times minimum |
| Application | Theoretical reference, bounds | Design, performance evaluation |
