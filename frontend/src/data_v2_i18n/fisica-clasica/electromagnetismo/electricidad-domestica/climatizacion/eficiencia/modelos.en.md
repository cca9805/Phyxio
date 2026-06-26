The study of efficiency in climate control is not based on a single universal model, but on a hierarchy of approximations that balance physical precision with practical viability for decision-making. Each model has a specific domain of validity and failure signals that indicate when we should move towards a more complex description of reality.

## Ideal model

This is the reference model for most residential energy audits, known as ideal seasonal balance. It is based on the hypothesis that we can represent an extensive period of time (such as a 5-month winter) through a single aggregated value of [[demanda_termica_estacional]] and an average performance coefficient [[rendimiento_estacional_scop]].

This model is extremely useful for making quick estimates of [[consumo_electrico_estacional]] and standardizing the comparison of two climate control units using their energy labels. However, its simplicity hides temporal dynamics. It treats the house as a system in a steady state, ignoring that heat flow fluctuates minute by minute according to solar radiation and occupancy.

## Hypotheses

For the ideal model to be applicable, the following simplifying hypotheses are assumed:
1. **Averaged Steady State**: It is assumed that hourly temperature variations compensate for each other throughout the season.
2. **Load Linearity**: It is assumed that the equipment maintains its nominal [[rendimiento_estacional_scop]] constantly, without being penalized by frequent starts or specific extreme conditions.
3. **Homogeneous Use**: It is assumed that the user maintains a constant setpoint temperature and does not drastically modify their habits between the [[base]] scenario and the [[new|nuevo]] one.

## Quantitative validity domain

The seasonal balance model is valid and accurate (with a margin of error of less than 10%) as long as the following quantitative conditions are met:
- The analysis time horizon must be at least one full season (minimum 120 days).
- The interior setpoint temperature must remain stable, with a maximum variation of ±2 °C from the design value.
- The difference in average outdoor temperature between the [[base]] scenario and the [[new|nuevo]] one must not exceed 3 °C; otherwise, normalization by degree-days is required.
- The thermal jump between the interior and the exterior must not consistently exceed 25 °C.

## Model failure signals

It is imperative to abandon the simplified seasonal model and transition towards a **hourly dynamic simulation** when the following observable failure signals occur:
- **Critical Dimensional Discrepancy**: If after collecting real billing data it is observed that the measured consumption differs by more than 25% from the theoretically calculated one.
- **Sustained Thermal Instability**: If the home fails to reach the target temperature (confort) on the coldest days despite the power calculation being correct. The model fails by not capturing the necessary peak power.
- **Short Compressor Cycles**: If the climate control equipment performs more than 6 starts and stops per hour (*cycling*), which invalidates any savings projection based on seasonal averages.

## Extended or alternative model

For deeper analysis where the ideal model fails, the coupled blocks model or hourly dynamic simulation is used. The **transition to** these models is necessary **when to switch** to a more precise description:
- **Blocks Model**: Decomposes efficiency into four subsystems: Envelope, Generation, Distribution, and Control. It allows for the detection of systemic failures, such as pipe losses or emitter inefficiency.
- **Dynamic Simulation**: Necessary when the home's thermal inertia is very high (stone buildings) and solar gains are very variable. This model calculates the energy balance minute by minute, capturing critical demand peaks.

## Operational comparison

| Feature | Seasonal Model | Blocks Model | Dynamic Model |
| :--- | :--- | :--- | :--- |
| **Complexity** | Low | Medium | High |
| **Main Use** | Energy labels | Technical audit | Architectural design |
| **Required Data** | Annual consumption | Material characteristics | Hourly meteorological data |
| **Accuracy** | Sufficient for savings | Good for optimizing | Maximum for comfort |

In conclusion, for most home savings decisions, the seasonal model offers the best balance between calculation effort and practical utility, as long as its physical validity limits are respected.