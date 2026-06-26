# Physical Models of the Adiabatic Process

## Ideal Model

The ideal model of the adiabatic process describes the transformation of an ideal gas with constant specific heat that evolves quasi-statically between two equilibrium states without exchanging heat with the surroundings. In this model, the only energy exchange pathway is mechanical work. The state variables pressure [[p1]] and [[p2]], volume [[V1]] and [[V2]], and temperature [[T1]] and [[T2]] are connected by the adiabat law and by the ideal gas equation of state.

This model simplifies reality by assuming that the gas is perfectly ideal (no molecular interactions) and that the process is slow enough to maintain equilibrium at each instant while being fast enough to prevent heat flow. In practice, this double requirement makes the ideal model an excellent approximation for real gases in technical processes.

## Hypotheses

- The gas behaves as an ideal gas over the entire pressure and temperature range of the process.
- The process is quasi-static: the gas passes through a succession of equilibrium states.
- Heat exchange with the surroundings is exactly zero or negligible compared to the exchanged work.
- The adiabatic coefficient [[gamma]] remains constant throughout the entire process.
- There is no internal friction, turbulence or mechanical irreversibilities.

If any of these hypotheses fails, the model over- or underestimates temperature change and work. In particular, if there is friction, some work dissipates as internal heat and the process ceases to be strictly adiabatic even if the walls are insulating.

## Quantitative Validity Domain

The model is adequate when heat transfer by conduction, convection and radiation is less than 1% of the exchanged work during the process. For diatomic gases such as air, this condition is practically met if the process time is below a few seconds in insulated laboratory vessels, or below milliseconds in engine cycles.

The quantitative ideal-gas validity condition requires pressure below about 10 MPa and temperature above about 100 K for common gases. An operational criterion is that the inequality \(pV \gg nRT_{critical}\) holds with margin, equivalent to being far from the gas critical point. For air at atmospheric conditions, the margin is wide and the ideal model is very accurate.

## Model Failure Signals

The model fails when:

- The calculated temperature [[T2]] falls below the liquefaction temperature of the gas (about 77 K for nitrogen, 90 K for oxygen), because the gas condenses and the ideal gas assumption loses meaning.
- Pressure exceeds several megapascals, where molecular interactions are appreciable and the compressibility factor deviates from 1.
- The process is slow and heat transfer by natural convection or wall conduction is not negligible, turning the process into a polytropic one with an exponent different from [[gamma]].
- Shock waves form (supersonic process), where the quasi-static model breaks down.
- The calculated [[DeltaT_ad]] is so large that [[gamma]] itself changes significantly between [[T1]] and [[T2]].

An observable failure signal is that the experimentally measured temperature differs by more than 5% from the ideal model prediction. Another is that the real curve in the pV diagram does not follow the expected slope given by [[gamma]].

## Extended or Alternative Model

When the ideal model is insufficient, a polytropic process model with effective exponent n is used. In this model the product of pressure and volume raised to the exponent n remains constant. The exponent n can take any real value and is determined experimentally. When n equals [[gamma]], the ideal adiabatic process is recovered. When n equals 1, the process is isothermal. Intermediate values of n correspond to processes with limited heat exchange, which occurs in real situations where insulation is imperfect.

**When to switch to the polytropic model**: when the measured temperature deviates more than 5% from the ideal prediction, when the process is slow with appreciable thermal losses, or when the gas operates near the critical point.

For real gases at high pressure, equations of state such as van der Waals or Redlich-Kwong correct for molecular interactions. Thermodynamic property tables are also used, giving enthalpy, entropy and specific heat as functions of temperature and pressure, allowing calculation of work and internal energy change without assuming ideal gas or constant [[gamma]].

## Operational Comparison

| Criterion | Ideal adiabatic model | Polytropic / real gas model |
|---|---|---|
| Accuracy | High for low-pressure gases and fast processes | High for any condition including real gas |
| Complexity | Low; two algebraic equations | Medium or high; requires knowing n or using tables |
| Range of application | Far from critical point, quasi-static process | Near critical point or processes with partial heat exchange |
| Typical use | Engines, atmosphere, quick calculations | Industrial compressor, cryogenic refrigeration, CFD simulation |

The ideal model is the first analysis tool. The extended model is used only when ideal model errors exceed the problem tolerance or when working in critical conditions.
