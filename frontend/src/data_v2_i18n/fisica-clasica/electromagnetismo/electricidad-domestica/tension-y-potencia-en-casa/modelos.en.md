## Ideal model

The ideal model assumes stable loads at constant voltage (230 V), without transients, with linear equivalent behavior. This is the baseline model used for first-estimation calculations in domestic installations. It simplifies analysis by eliminating secondary complexities that, although present in reality, do not significantly alter results for most everyday applications.

In this model, the conserved magnitudes are [[tension_electrica]], [[intensidad_de_corriente]] and [[resistencia_electrica]], related through Ohm's law. The ignored magnitudes include temporal variations of resistance with temperature, inductive and capacitive effects, and wiring connection resistance. This simplification enables direct calculations without numerical methods or complex simulations.

The physical meaning of the central simplification lies in that, for purely resistive loads in steady state, the dissipated power depends only on the applied voltage and load resistance, with [[potencia_electrica]] proportional to the square of [[tension_electrica]] and inversely proportional to [[resistencia_electrica]]. This approximation captures the essential system behavior without introducing parameters that would unnecessarily complicate preliminary estimation analysis.

## Hypotheses

- **Constant grid voltage at 230 V**: Voltage remains fixed regardless of load changes. If violated, voltage drops under heavy loads will produce lower current values than calculated, underestimating thermal risk in wiring.

- **Linear and constant resistances**: Resistances exhibit ohmic behavior without dependence on temperature or operation time. Violation: heating elements increase their resistance by 10-15% when heated, reducing actual current compared to the initially calculated value.

- **Steady-state without transients**: The system operates in stationary state, ignoring startup and stabilization phenomena. Violation: electric motors present startup currents 3-7 times higher than nominal, which may trip protections sized only for steady-state operation.

- **Unity power factor**: Loads are purely resistive without reactive component. Violation: motors and transformers present typical power factors of 0.7-0.9, requiring higher currents to deliver the same active power calculated with the ideal model.

- **Independent circuits without coupling**: Each load operates in isolation without influence from others connected simultaneously. Violation: simultaneity of multiple high-power loads may saturate the circuit even when individually within limits.

## Quantitative validity domain

The models are physically reasonable when operating within specific ranges that ensure simplification hypotheses do not introduce unacceptable errors. The ideal approximation maintains acceptable accuracy (< 10% error) under the following conditions:

**Validity inequality for voltage:** 207 V ≤ [[tension_electrica]] ≤ 253 V (230 V ± 10% per European standard EN 50160). Outside this range, domestic equipment may malfunction or suffer damage.

**Current range per circuit:** 0.1 A ≤ [[intensidad_de_corriente]] ≤ 25 A, where the upper limit depends on conductor cross-section (1.5 mm² → ~16 A, 2.5 mm² → ~25 A) and the type of installed protection.

**Unit power order of magnitude:** 20 W ≤ [[potencia_electrica]] ≤ 4000 W for individual appliances. Lower powers correspond to standby state or small electronics; higher powers typically require dedicated circuits according to the Low Voltage Electrotechnical Regulation (REBT).

**Operational resistance range:** 1 Ω ≤ [[resistencia_electrica]] ≤ 100 kΩ. Resistances below 1 Ω indicate probable short circuit; above 100 kΩ correspond to leakage or insulation, not operational loads.

**Transition thresholds:** When the calculated current exceeds 70% of the circuit protection capacity, or when simultaneously considering more than three high-power loads (> 1000 W), the extended model becomes necessary to ensure safety.

## Model failure signals

Observable symptoms indicating that the ideal or extended model hypotheses no longer apply, and which the student can detect through measurement or inspection:

- **Localized heating at connections** at currents calculated as "safe": indicates elevated contact resistance not contemplated in the model, typical of deteriorated sockets or loose connections.

- **Protection tripping during startup** of appliances without permanent overload: signal that insertion transients exceed protection limits, ignored in steady-state calculation.

- **Measured voltage drops exceeding 5%** at circuit endpoints: the model assumes constant voltage, but actual wiring resistance produces significant drops under high loads.

- **Systematic differences > 20%** between calculated and measured power with a wattmeter: suggests power factor significantly different from 1, typical of inductive loads or electronics with switched-mode supplies.

- **Temporal variation of measured resistance** in heating elements: resistance changing more than 5% between cold and hot invalidates the constant resistance hypothesis.

- **Mixing units without conversion** producing order-of-magnitude errors: confusion between W and kW, or between minutes and hours, generates physically impossible results (e.g., consumption of 1000 kWh in one hour by a domestic appliance).

## Extended or alternative model

The extended model abandons the simplifications of the ideal model to incorporate phenomena relevant in scenarios of greater complexity or criticality. The fundamental difference lies in recognizing that real domestic installations operate with variables that fluctuate in time and space.

**Main extensions:**

- **Startup multipliers**: Electric motors present inrush currents 3-7 times higher than nominal during the first seconds. The extended model incorporates these temporary peaks to size protections with adequate margins.

- **Duty cycles**: Appliances like refrigerators and electric water heaters operate in ON/OFF cycles. The extended model calculates time-averaged energy consumption, not constant instantaneous power.

- **Resistive voltage drops**: Includes installation wiring resistance (typically 0.1-0.5 Ω depending on length and cross-section), producing 1-3% drops under nominal load.

- **Simultaneity factors**: Recognizes that not all connected appliances operate simultaneously at full power. Simultaneity coefficients of 0.7-0.9 are applied when summing individual loads to estimate probable maximum demand.

- **Power factor correction**: For inductive loads (motors, transformers, fluorescent lights), the extended model distinguishes between active power (W), reactive power (VAR) and apparent power (VA), calculating actual current by dividing [[potencia_electrica]] by the product of [[tension_electrica]] and the power factor cos φ.

**Explicit transition:** Switch to the extended model and away from the ideal when:
- The calculated ideal current exceeds 70% of the circuit protection capacity
- Sizing protections for motor-driven appliances (washing machines, refrigerators, air conditioners)
- Evaluating old installations (> 20 years) where contact resistance may be significant
- Requiring precise monthly/annual energy consumption estimation for comparison with actual bills

## Operational comparison

| Criterion | Ideal model | Extended model |
|-----------|-------------|----------------|
| **Precision** | ±10-15% relative to reality | ±3-5% with supporting measurements |
| **Complexity** | Direct calculation, one formula | Requires simultaneity tables, correction factors |
| **Application range** | Preliminary estimates, known single loads | Protection sizing, multiple simultaneous loads |
| **Data required** | Only nameplate nominal values | Usage history, in-situ measurements, startup characteristics |
| **Calculation time** | Immediate | 3-5× longer due to multiple scenario consideration |
| **Inherent safety** | Low (may underestimate point demands) | High (incorporates regulatory safety margins) |
| **Regulatory compliance** | Not sufficient for certification | Required by REBT for new installations |

**Advantages of the ideal model:** Speed, conceptual simplicity, sufficient for simple everyday decisions (can I plug in this appliance?). Ideal for first didactic approach.

**Advantages of the extended model:** Precision, guaranteed safety, regulatory compliance, valid for any real domestic scenario. Essential for professional installers and energy audits.

**Limitations of the ideal:** Inadequate for limit situations, ignores potentially dangerous transient phenomena, does not consider installation aging.

**Limitations of the extended:** Requires data that the particular user does not always possess (motor startup curves, actual wiring resistance), greater cognitive load, risk of conservative over-sizing if all margins are applied simultaneously.

**Integration with other models:** Both electrical models couple with thermal models for cable heating evaluation (I²R), economic models for tariff optimization, and reliability models for component lifetime estimation. Complete installation analysis necessarily requires this multidisciplinary vision.