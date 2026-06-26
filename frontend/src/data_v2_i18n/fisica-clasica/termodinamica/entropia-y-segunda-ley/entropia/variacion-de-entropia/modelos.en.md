## Ideal model

The base model for calculating [[DeltaS]] assumes the process is **reversible** (quasi-static) and that material properties ([[c_p]], [[c_v]]) remain constant across the entire temperature range. For ideal gases, it additionally assumes that intermolecular interactions are zero and that the equation of state PV = [[n]][[R]][[T]] holds exactly.

The central simplification consists of treating temperature as a continuous integration variable and heat capacities as constant material parameters. This allows obtaining closed analytical expressions (natural logarithms) instead of requiring numerical integration. The conserved quantities are [[DeltaS]] as a state function and total system mass; the ignored quantities are microscopic fluctuations, the dependence of [[c_p]] on [[T]], and real molecular interactions.

## Hypotheses

- **Process reversibility**: the [[DeltaS]] calculation is performed along an equivalent reversible path. If the actual process is irreversible, the fictitious reversible path is used because [[DeltaS]] is a state function.
  - Violation: if [[Q_rev]] is confused with actual heat in an irreversible process, the result underestimates the universe's actual [[DeltaS]].

- **Constant heat capacities**: [[c_p]] and [[c_v]] do not depend on [[T]] within the calculation interval.
  - Violation: at very low temperatures (< 50 K) heat capacities vary strongly with [[T]] (Debye law); at very high temperatures, vibrational degrees of freedom activate and [[c_v]] increases.

- **Ideal gas** (when applying the general formula): behaviour described by the ideal equation of state, with no relevant intermolecular forces.
  - Violation: real gases at high pressure or near condensation show significant deviations. Corrections such as Van der Waals are needed.

- **Closed system**: no mass transfer with the surroundings.
  - Violation: if there is mass flow, the generalised entropy balance including mixing entropy terms is required.

- **No phase change within the interval** (for the heating formula).
  - Violation: if a melting or boiling point is crossed, an enthalpy discontinuity appears that requires separate treatment.

## Quantitative validity domain

The formulas with constant [[c_p]] are typically valid for:
- **Solids and liquids**: from about 100 K up to temperatures near decomposition or phase change. For liquid water: 273–373 K with < 1% error in [[c_p]].
- **Ideal gases**: low pressures, below 10 atm, and moderate temperatures (200-2000 K). For air at 1 atm, ideal gas deviation is less than 0.1% between 250 and 1000 K.

> [!NOTE]
> For diatomic gases such as N₂ or O₂, [[c_v]] ≈ (5/2)[[R]] is valid between 250 K and 1000 K. Above 1000 K, vibrational modes activate and [[c_v]] → (7/2)[[R]].

The main quantitative condition is that the relative variation of [[c_p]] within the interval [[[T_i]], [[T_f]]] be less than 5%. If that variation remains below 5%, the logarithmic formula is an excellent approximation.

## Model failure signals

- **Calculated [[DeltaS]] differs by more than 10% from the tabulated value** for the same substance and process: indicates [[c_p]] is not constant in that range.
- **The result diverges or is excessively large**: possible signal that [[T_i]] or [[T_f]] is near 0 K where the model fails.
- **An unexpected sign change appears in [[DeltaS]]** when a monotonic process is expected: may indicate the interval crosses an unaccounted phase change.
- **For gas at high pressure**, if [[DeltaS]] calculated with the ideal formula differs significantly from experimental measurements: indicates intermolecular interactions are relevant.
- **If comparison with thermodynamic table data** shows error exceeding 5–10%, one must suspect that some hypothesis (constant c, ideal gas, no phase) does not hold.

## Extended or alternative model

To overcome the limitations of the constant [[c_p]] model:

- **Integration with [[c_p]] dependent on [[T]]**: use tables or empirical polynomials for [[c_p]] as a function of [[T]] (Shomate or NASA polynomial type) and evaluate the entropic contribution by numerical integration. This approach is standard in chemical engineering and provides precision on the order of 0.1%.

- **Real gas equations of state**: for non-ideal gases, use real-gas models such as Van der Waals, Redlich-Kwong or Peng-Robinson. The additional entropy contribution depends on interactions and is obtained with tables or correction functions.

When to switch model: if the range crosses a phase change, if [[c_p]] changes appreciably, or if the gas operates at high pressure, leave the simple logarithmic model and calculate by stages or with tables.

The transition from the ideal to the extended model is justified when:
- Pressure exceeds 5–10 atm for gases.
- Temperature varies in a range where [[c_p]] changes by more than 5%.
- Engineering precision is required (< 1% error in [[DeltaS]]).

## Operational comparison

| Criterion | Ideal model (constant c, ideal gas) | Extended model (c(T), real gas) |
|---|---|---|
| **Precision** | ±5–10% for moderate T ranges | < 1% with validated polynomials |
| **Complexity** | Closed analytical formulas (logarithms) | Numerical integration or tables |
| **Application range** | 200–1000 K, P < 10 atm | Full thermodynamic range |
| **Main advantage** | Fast calculation, intuitive understanding | High quantitative fidelity |
| **Main limitation** | Fails at T extremes and high P | Requires tabulated data or software |
| **Typical use** | Teaching, quick estimates, exams | Industrial design, research |
