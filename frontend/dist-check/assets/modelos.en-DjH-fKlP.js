const e=`# Models of Resistive Heating

The analysis of resistive heating can be approached at different levels of complexity depending on the calculation objective. From the simplest stationary model to hourly dynamic simulation, each approximation has its domain of validity and failure signals. Knowing when to switch models is as important as mastering the model itself.

## Ideal model

The ideal stationary model of resistive heating assumes that [[electrical consumption|E]] is calculated exclusively as the product of [[emitter power|P]] by [[effective usage time|t]], with a constant [[conversion efficiency|eta]] close to 1 and a [[coefficient of performance|COP]] = 1. This model represents heating as a purely linear process: doubling [[emitter power|P]] or [[effective usage time|t]] doubles [[electrical consumption|E]] and cost.

This model is the canonical starting point for any first-approximation residential estimate. Its strength lies in transparency: it only requires knowing [[P]] and [[t]] to obtain [[E]] with high reliability when the system operates in quasi-stationary regime. It is the appropriate tool for comparing usage scenarios and evaluating the impact of behavioral changes.

## Hypotheses

For the ideal model to be applicable, the following simplifying conditions are assumed:
1. **Constant power**: [[emitter power|P]] remains at its nominal value throughout the analyzed period; there are no variations due to grid voltage or degradation of the resistive element.
2. **Known effective time**: [[effective usage time|t]] represents the real hours with the resistance actually active, not the hours with the device switched on. The thermostat cycle is assumed to be correctly accounted for in the average.
3. **Stable efficiency**: [[conversion efficiency|eta]] of the emitter is constant and independent of load or ambient temperature.
4. **No dominant dynamic effects**: The thermal inertia of the room and emitter does not significantly alter the seasonal energy average.

## Quantitative validity domain

The stationary model is accurate (error < 10%) when these quantitative conditions are met:
- [[emitter power|P]] is known with accuracy of ±5%.
- [[effective usage time|t]] is estimated or measured with error below 15%.
- The setpoint temperature does not vary more than ±3 °C during the analyzed period.
- Total simultaneous power does not exceed 90% of the contracted power (no risk of disconnection).
- The time horizon is at least one full week to average thermostat cycles.

## Model failure signals

It is necessary to abandon the simple stationary model when these observable signals appear:
- **Bill-to-calculation discrepancy > 20%**: If consumption measured on the bill differs by more than 20% from that calculated with the main consumption formula, [[effective usage time|t]] is poorly estimated or there are uncounted additional loads.
- **High daily variability**: If daily consumption fluctuates more than 40% between similar days with the same outdoor temperature, the stationary model does not capture the room's dynamic effects.
- **Equipment in very short cycles**: If the emitter switches on and off more than 8 times per hour, the room's thermal inertia dominates the balance and the stationary average loses validity.

## Extended or alternative model

When the simple model fails, the recommended transition is to one of these more precise approaches. **Switching models is recommended when** the required accuracy exceeds ±10% or when investment decisions are based on projected savings:

- **Building demand model**: Incorporates envelope losses, solar gains, and thermal inertia to calculate actual hourly demand. Necessary when evaluating the impact of insulation improvements.
- **Comparative model with heat pump**: Replaces the resistive [[COP]] = 1 with the seasonal SCOP of the alternative (typically 3–5), enabling comparison of annual [[electrical consumption|E]] for the same [[useful heat|Q]] delivered.
- **Hourly dynamic simulation**: Calculates the room's thermal balance minute by minute, including inertia, internal gains, and climatic variation. Necessary for high-inertia buildings or advanced control system design.

## Operational comparison

| Feature | Stationary Model | Demand Model | Dynamic Simulation |
| :--- | :--- | :--- | :--- |
| **Complexity** | Low | Medium | High |
| **Required data** | [[P]] and [[t]] | Envelope + climate | Full hourly data |
| **Accuracy** | ±10–20% | ±5–10% | ±1–5% |
| **Main use** | Quick estimate | Renovation audit | Advanced design and control |

The resistive stationary model is the best tool for everyday decision-making and for teaching the fundamental concepts of energy and cost. Scaling to more complex models is only appropriate when decisions have significant economic impact and greater certainty in projections is required.
`;export{e as default};
