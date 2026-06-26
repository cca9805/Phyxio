const e=`# Models of the household electrical network

## Ideal model

The **ideal household electrical network model** represents the installation as a perfectly constant voltage source of 230 V to which purely resistive receptors are connected in parallel. In this simplified model, the **total current** [[I_tot]] is calculated directly from the **total power** [[P_tot]] through the relationship:

{{f:corriente_total}}

The central simplification consists of assuming that the voltage [[V]] remains invariant to any load change, and that all receptors behave as ideal ohmic resistances with unity power factor. The magnitudes that are conserved are the network voltage and the nominal power of each receptor; the impedance of the wiring, inductive or capacitive reactances, and voltage drops in conductors are ignored.

## Hypotheses

- **Hypothesis of ideal voltage source**: The network maintains exactly 230 V regardless of the demanded current. If violated, appreciable voltage drops appear and the current calculation underestimates the real value.

- **Hypothesis of purely resistive receptors**: All connected appliances have a power factor equal to 1, without inductive or capacitive components. If violated, the actual current exceeds the calculated value due to the phase shift between voltage and current.

- **Hypothesis of negligible line impedance**: The resistance of the installation wiring is zero or insignificant compared to that of the receptors. If violated, the voltage at the extremes differs from 230 V and the actual power delivered changes.

- **Hypothesis of perfect parallel connection**: All receptors see the same voltage without mutual interference. If violated (poor connections), contact resistances appear that modify the current distribution.

- **Hypothesis of constant frequency**: The network frequency remains at 50 Hz without variations. This hypothesis mainly affects frequency-sensitive receptors, although in the resistive model it does not alter the calculations.

## Quantitative validity domain

The ideal model is applicable when the following quantitative conditions are met:

- **Purely resistive receptors**: Power factor between 0.95 and 1.0. Below 0.95, the error in the calculated current exceeds 5 %.

- **Short lines**: Wiring length from the panel to the receptor less than 30 meters for standard cross-sections (2.5 mm²). In longer lines, the voltage drop can reach significant values (greater than 3 %).

- **Moderate loads**: Total current [[I_tot]] less than 80 % of the MCB rating [[I_max]]. Above this threshold, heat in the cables begins to be appreciable and the resistance of copper increases slightly.

- **Stable network voltage**: Variations in supply voltage less than ±10 % relative to 230 V. Outside this range, receptors do not operate according to their nominal specifications.

- **Validity inequality**: The model is valid when the product of total current by cable resistance is much less than the nominal voltage. Practically, when the line voltage drop is less than 5 V.

## Model failure signals

The ideal model ceases to be applicable when these observable symptoms appear:

- **Measurable voltage drop**: When connecting a high-power receptor, the voltage at other points in the installation descends appreciably (more than 5 V relative to 230 V). This indicates that the wiring impedance is not negligible.

- **Abnormal heating of cables**: If conductors heat visibly without [[I_tot]] reaching [[I_max]], the cable resistance has increased due to aging or insufficient cross-section.

- **Erratic operation of electronic receptors**: When appliances with switched-mode supplies (computers, LEDs) present unstable behavior, it is usually due to rapid voltage drops not captured by the static model.

- **Current measurement higher than calculated**: If an ammeter shows [[I_tot]] systematically higher than that predicted by the formula, the power factor is different from 1 or there are leakage currents.

## Extended or alternative model

The **extended network model** incorporates the impedance of the wiring and considers receptors with non-unity power factor. In this model, the network is represented as an ideal voltage source in series with an internal resistance (resistance of the go and return conductors).

The concrete difference with respect to the ideal model is that the voltage at the receptor terminals is no longer 230 V, but lower due to losses in the wiring. The actual voltage at terminals is the nominal minus the product of total current by line resistance.

This model is necessary when the wiring is extensive or of reduced cross-section. The transition from the ideal model to the extended one must be made when any of these conditions are met:

- The line length exceeds 30 meters with 2.5 mm² cross-section
- A voltage drop greater than 5 V is observed when connecting loads higher than 2000 W
- It is calculated that [[I_max]] would produce a voltage drop exceeding 10 V in the line
- Working with significant inductive or capacitive receptors (motors, transformers)

The extended model also contemplates the **apparent power**, different from the active power [[P_tot]] when the power factor is less than 1. In this case, the total current results greater than that predicted by the ideal model, explaining why it underestimates the actual current.

## Transition between models

### When to switch to alternative model

The transition from the **ideal model** to the **extended model** should be made when it is detected that the simplifying hypotheses cease to be significantly fulfilled. Changing models is convenient and necessary in the following situations:

- **When measurable voltage drops occur**: When an ammeter or multimeter reveals that the terminal voltage drops more than 5 V with respect to the nominal 230 V when connecting high-power loads.

- **With predominantly inductive receptors**: If the installation mainly feeds motors (refrigerator, washing machine, water pump), the power factor different from 1 causes the ideal model to systematically underestimate the actual current.

- **In long electrical lines**: When the distance between the protection panel and the receptors exceeds 30 meters, the wiring resistance is no longer negligible and must be included in the calculation.

- **For professional design**: In commercial installations or formal electrical projects where complete accuracy guarantees regulatory compliance and safety.

- **When unexplained anomalies occur**: When the circuit breaker trips without the ideal model calculation indicating overload, or when abnormal heating of cables is observed.

### How to perform the transition

The model change consists of:

1. **Measure line resistance**: Determine experimentally the resistance of the go and return conductors from the panel to the point of consumption.

2. **Incorporate the power factor**: Measure or estimate the cosine phi (cos φ) of the main inductive receptors.

3. **Recalculate with the extended model**: Use the complete formula that includes line impedance and apparent power instead of simple active power.

4. **Verify the safety margin**: Check that the current calculated with the extended model maintains a safe usage margin with respect to [[I_max]].

## Operational comparison

| Criterion | Ideal model | Extended model |
|:---|:---|:---|
| **Accuracy** | High (error < 5 %) for resistive receptors and short lines | Very high (error < 2 %) considering all losses |
| **Complexity** | Low. A single linear formula | Medium. Requires knowing cable resistance and power factor |
| **Application range** | Standard domestic installations with resistive loads | Extensive installations, industrial, or with motors |
| **Required variables** | [[P_tot]], [[V]] | [[P_tot]], [[V]], power factor, cable data |
| **Typical validity** | Household circuits with less than 30 m of wiring | Commercial circuits, long lines, inductive loads |
| **Main advantage** | Simplicity and speed of calculation | Realistic accuracy and guaranteed safety |
| **Main limitation** | Fails silently with motors and long lines | Requires additional data difficult to obtain for the average user |
| **When to use** | Rapid sizing, ordinary checks | Formal electrical projects, problem diagnosis |

The ideal model is sufficient for most ordinary domestic situations. The extended model is only necessary when anomalies are detected (unexpected tripping, heating, voltage drops) or in professional installations where complete accuracy justifies the additional calculation effort.
`;export{e as default};
