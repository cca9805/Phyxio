# Models — Coefficient of Performance

## Ideal model

The ideal model is the reversed Carnot cycle operating between two thermal reservoirs at absolute temperatures [[T_H]] and [[T_C]]. This model assumes total reversibility: isentropic compression and expansion, isothermal heat exchange in evaporator and condenser, no friction, no pressure drops and no finite temperature differences between fluid and reservoirs. The Carnot refrigeration COP is [[T_C]] divided by the difference [[T_H]] minus [[T_C]], and the Carnot heat pump COP is [[T_H]] divided by the same difference. This model provides the absolute upper efficiency limit for any refrigerator or heat pump operating between the same reservoirs.

## Hypotheses

The ideal model hypotheses are five. First, the thermal reservoirs have infinite heat capacity and maintain constant temperatures [[T_H]] and [[T_C]]. Second, all cycle processes are internally reversible. Third, there is no friction or mechanical losses in the compressor. Fourth, heat exchange occurs isothermally with no temperature difference between fluid and reservoir. Fifth, there are no pressure drops in piping or heat exchangers.

## Quantitative validity domain

The Carnot model is an upper bound, not a prediction of real performance. For domestic refrigeration systems with [[T_C]] of 255 K and [[T_H]] of 308 K, the Carnot COP is 4.8 while the real COP ranges between 2 and 3, representing 40 to 60 % of the theoretical value. For geothermal heat pumps with [[T_C]] of 283 K and [[T_H]] of 318 K, the Carnot COP is 9.1 and the real COP between 3.5 and 5. As a quantitative criterion, if the measured COP exceeds 65 % of the Carnot COP between the same temperatures, the input data should be reviewed. The model is universally valid as a comparative reference as long as temperatures are in kelvin and the difference is positive.

## Model failure signals

The model fails when the real COP exceeds the Carnot COP, which would indicate violation of the second law or an error in the data. It also fails as a quantitative prediction when irreversibilities are large: cycles with wet compression, expansion through throttling valves (non-isentropic), or heat exchangers with temperature differences greater than 10 K between fluid and reservoir.

## Extended or alternative model

The most widely used extended model is the vapor-compression cycle with real refrigerant, which replaces the Carnot isotherms with phase-change processes. This model includes superheating in the evaporator, subcooling in the condenser, non-isentropic compression with compressor isentropic efficiency, and isenthalpic expansion through a throttling valve. The COP of the real vapor-compression cycle is typically 30 to 60 % of the Carnot COP, depending on the refrigerant, operating conditions and equipment quality.

It is advisable to switch from the Carnot model to the vapor-compression cycle when quantitative estimates of real COP are needed to size components, when system irreversibilities are significant, or when specific refrigerants need to be evaluated.

## Operational comparison

| Aspect | Carnot model | Real vapor-compression cycle |
|---|---|---|
| Compression | isentropic (reversible) | non-isentropic with 70 to 85 % efficiency |
| Heat exchange | isothermal, no temperature difference | with finite difference of 5 to 15 K |
| Expansion | isentropic (reversible) | isenthalpic through valve, irreversible |
| Working fluid | ideal gas | real refrigerant with phase change |
| Typical COP | theoretical upper bound | 30 to 60 % of Carnot value |
| Utility | reference and comparison | design and engineering of real systems |
