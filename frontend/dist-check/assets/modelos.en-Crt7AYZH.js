const e=`# Models of domestic electricity cost

Electricity cost analysis can be approached at different levels of detail depending on the study objective. Each model is a valid simplification within its domain; choosing the wrong model produces incorrect conclusions even if the mathematical calculation is correct.

## Ideal model

The simplified electricity bill model calculates [[total bill cost|C_total]] as the sum of three components: [[energy cost|C_energia]] (variable by consumption), [[power cost|C_potencia]] (fixed by contract), and [[additional charges and levies|C_extra]] (regulatory). It is the main model of this leaf and allows calculating, comparing, and projecting savings from real bill data.

## Hypotheses

The simplified electricity bill model assumes:

1. The [[total bill cost|C_total]] can be decomposed into three independent terms: [[energy cost|C_energia]], [[power cost|C_potencia]], and [[additional charges and levies|C_extra]].
2. Each tariff band has a fixed [[energy price per tariff band|precio_i]] throughout the billing period.
3. The [[contracted power|P_contratada]] and [[power tariff|tarifa_potencia]] are constant over the analyzed period.
4. The [[billing period days|dias]] are known and fixed.
5. The service delivered (comfort temperature, equipment availability) is equivalent between the scenarios being compared.

## Quantitative validity domain

The model is applicable when the difference in days between compared periods is less than 3 days, climatic conditions are equivalent (monthly mean temperature difference < 5 °C), and the service level is identical. For tariff variations above 5 % between bills or larger day differences, the model introduces errors that may exceed the estimated savings.

## Simplified steady-state model (main model)

The simplified steady-state model calculates [[total bill cost|C_total]] as the sum of its three components, where [[energy cost|C_energia]] is the product of each band's consumption by its band price.

**Key hypothesis:** constant prices per band, homogeneous period, no tariff changes between bills.

**Quantitative domain of validity:** applicable when the difference in conditions between compared scenarios is less than 10 % in billed days and service is identical. For differences of more than 3 days between periods or tariff variations above 5 %, the model introduces errors that can exceed the savings being measured.

**Failure signals:** if the calculated [[percentage savings|Ahorro_pct]] is below 3 %, the result may be within the model's error and not statistically distinguishable from the noise of non-homogeneous periods.

## Model failure signals

The simplified model emits observable failure signals when:

- The calculated [[percentage savings|Ahorro_pct]] is below 3 % between periods with uncontrolled climatic or day differences.
- [[total bill cost|C_total]] in the new scenario is higher than in the reference despite having reduced consumption, signaling that variation in [[billing period days|dias]] or [[additional charges and levies|C_extra]] offsets the savings in [[energy cost|C_energia]].
- Component breakdown reveals that [[power cost|C_potencia]] represents more than 35 % of the bill, indicating [[contracted power|P_contratada]] may be oversized for actual demand.

### ### Model error: confusing consumption and cost

The most serious conceptual error in this model is treating [[energy cost|C_energia]] as if it were [[total bill cost|C_total]]. The [[power cost|C_potencia]] and [[additional charges and levies|C_extra]] represent between 25 % and 45 % of the bill in many residential contracts. Ignoring them produces systematically optimistic savings estimates.

## Extended or alternative model

The extended model disaggregates [[energy per tariff period|E_i]] hour by hour (or in shorter intervals) and uses real-time variable prices, such as PVPC in Spain. It also models seasonal demand variation by applying a climate correction factor to compare periods with different temperatures.

**When to switch models:** switching to the extended model is appropriate when the goal is to optimize the usage schedule of flexible appliances (washing machine, dishwasher, EV charging), when the mean temperature difference between compared periods exceeds 5 °C, or when the bill has more than two bands with significantly different prices. The simplified model does not capture hourly shift effects with sufficient precision for PVPC contracts with high hourly variability.

## Operational comparison

| Feature | Simplified model | Extended model |
|---|---|---|
| Tariff bands | 2–3 fixed | Hourly or dynamic |
| Climate correction | No | Yes (degree-days) |
| Data complexity | Low | High |
| Recommended use | Initial estimate, basic audit | Habit optimization, PVPC contracts |
| Typical comparison error | 3–8 % | < 2 % |

## Quantitative condition for model change

The simplified model loses reliability when the variation in [[power cost|C_potencia]] between compared periods exceeds 5 % of [[total bill cost|C_total]], or when the variation in [[billing period days|dias]] between compared bills exceeds 3 days. In that case, the calculated [[percentage savings|Ahorro_pct]] has an uncertainty that may be comparable to or greater than the estimated real savings.

An operational rule: if the difference in days between periods is greater than 3 or the difference in monthly mean temperature is greater than 5 °C, normalize first (per day or per degree-day) before applying the simplified model.
`;export{e as default};
