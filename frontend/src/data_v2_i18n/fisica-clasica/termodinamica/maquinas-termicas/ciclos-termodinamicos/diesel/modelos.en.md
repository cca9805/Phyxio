# Models — Diesel Cycle

## Ideal model

The standard Diesel cycle model assumes an ideal gas with constant properties (cold air, [[gamma]] of 1.4) undergoing four reversible processes: adiabatic compression, isobaric expansion with heat addition, adiabatic expansion, and isochoric heat rejection. There are no friction losses, heat transfer to walls, or gas leaks. Combustion is modeled as external heat addition at constant pressure, without considering the chemical kinetics of the fuel.

## Hypotheses

- The working fluid is ideal air with constant molar mass and fixed [[gamma]] of 1.4.
- All processes are internally reversible and quasi-static.
- Compression (1 to 2) and expansion (3 to 4) are perfectly adiabatic, with no heat exchange with walls.
- Combustion (2 to 3) occurs at strictly constant pressure, equivalent to an ideal isobaric process.
- Heat rejection (4 to 1) occurs at constant volume, equivalent to instantaneous exhaust valve closing.
- There are no mechanical losses from piston, ring, or bearing friction.
- The injected fuel mass is negligible compared to the air mass.
- There are no gas leaks through piston rings or valves.

## Quantitative validity domain


The cold-air standard model is reasonably accurate (error below 15 %) when the compression ratio [[r]] is between 12 and 25, the cutoff ratio [[r_c]] is between 1.2 and 4, and maximum cycle temperatures do not exceed 2000 K. For higher temperatures, the variation of [[gamma]] with temperature introduces errors of 10 to 20 %. For compression ratios outside this range, deviations from ideal gas behavior become significant.

| Parameter | Valid range | Typical error outside range |
|---|---|---|
| [[r]] | 12 to 25 | Greater than 15 % if [[r]] below 10 |
| [[r_c]] | 1.2 to 4 | Greater than 20 % if [[r_c]] above 5 |
| Maximum temperature | Below 2000 K | Molecular dissociation and variable [[gamma]] |
| Pressure | Below 200 bar | Ideal gas deviations |

## Model failure signals

- Calculated efficiency exceeds Carnot between the extreme cycle temperatures: indicates the model is inconsistent with the second law and likely an incorrect [[gamma]] was used or ratios were confused.
- Efficiency exceeds 0.70 for typical industrial conditions: the cold-air standard model probably overestimates because real [[gamma]] is below 1.4.
- Calculated net work is negative: indicates an input data error, likely [[r_c]] greater than [[r]] or swapped values.
- Maximum cycle temperature exceeds 2500 K: at these temperatures molecular dissociation of nitrogen and oxygen occurs, invalidating the ideal gas model.
- Rejected heat [[Q_C]] exceeds absorbed heat [[Q_H]]: fundamental error violating the first law.

## Extended or alternative model

When to switch models: if cycle temperatures exceed 2000 K or if accuracy better than 10 % is required, it is necessary to transition to the hot-air standard or the dual cycle.

The **hot-air standard model** uses an average [[gamma]] of 1.3 that better represents combustion gas properties at high temperature. It typically reduces theoretical efficiency by 10 to 15 % compared to the cold-air standard.

The **Diesel cycle with variable properties** numerically integrates the equations of state using air thermodynamic tables (temperature-dependent internal energy and enthalpy functions). It is the most accurate method but requires computational calculation.

The **dual or mixed cycle** combines a constant-volume combustion phase followed by a constant-pressure phase. It is more representative of real Diesel engines, where fuel injection begins before top dead center and pressure first rises rapidly then remains approximately constant.

## Operational comparison

| Feature | Cold-air Diesel | Hot-air Diesel | Dual cycle |
|---|---|---|---|
| [[gamma]] | 1.4 fixed | 1.3 average | variable with T |
| Combustion | pure isobaric | pure isobaric | isochoric plus isobaric |
| Typical accuracy | 15 to 20 % error | 8 to 12 % error | 3 to 8 % error |
| Complexity | closed algebraic | closed algebraic | numerical or iterative |
| Main use | didactic and exams | engineering estimates | engine design |
