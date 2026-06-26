const e=`# Cost of Electricity

The domestic electricity bill is not simply kilowatt-hours multiplied by a price: it is the sum of at least three physical-economic components that respond to different causes and can only be reduced with different strategies. The [[total bill cost|C_total]] on the receipt reflects how much energy was consumed, what supply capacity was reserved, and what regulatory levies apply regardless of usage. Understanding this structure is the first step toward taking savings decisions that are physically coherent and economically verifiable.

## Conceptual context

A home's electrical consumption is a physical quantity measured in kilowatt-hours. However, the cost on the bill does not depend solely on that quantity: it also depends on which tariff band the energy was consumed in, how many days the billing period covers, the [[contracted power|P_contratada]] the user has reserved with their distributor, and a set of regulatory levies and taxes. Confusing consumption with cost is the most frequent conceptual error in domestic bill analysis.

Two homes with identical total consumption in kWh may have very different bills if one has contracted more power, if one consumed more during peak hours, or if the billed periods have different lengths. Correct analysis requires decomposing the bill into its three components and treating them separately.

## 🟢 Essential level

The first essential concept is that the kilowatt-hour measures energy, not money. The [[energy cost|C_energia]] results from multiplying each block of [[energy per tariff period|E_i]] by its corresponding [[energy price per tariff band|precio_i]]. If the contract has time-of-use pricing, the same kWh has a different price depending on whether it is consumed during peak, flat, or off-peak hours.

The second concept is that the bill has a fixed component that does not depend on consumption: the [[power cost|C_potencia]]. This term is paid simply for having electricity available at the contracted power, even if not a single watt is consumed. If a home has a [[contracted power|P_contratada]] of 4.6 kW and pays 0.11 EUR per kW per day for 30 days, the fixed term is about 15 EUR per month — appearing on the bill even in August with the house empty.

The third concept is that reducing the [[total bill cost|C_total]] requires acting on the right component: consumption to reduce the variable term, or [[contracted power|P_contratada]] to reduce the fixed term, but only if real demand peaks allow it. Without knowing the bill's structure, it is impossible to know which measure has the greatest impact.

The most important implication of the essential level is that **two months with the same total consumption can have different bills** if they differ in billed days, hourly consumption distribution, or the price applied in each band. Concluding that "the bill went up without consuming more" without controlling for these variables is an analytical error, not evidence of fraud.

## 🔵 Formal level

The [[energy cost|C_energia]] is the sum over all tariff bands of each band's consumption multiplied by its price:

{{f:coste_energia}}

The [[power cost|C_potencia]] is the fixed term proportional to [[contracted power|P_contratada]], the [[power tariff|tarifa_potencia]], and the [[billing period days|dias]]:

{{f:coste_potencia}}

The [[total bill cost|C_total]] is the sum of the three components: energy term, power term, and [[additional charges and levies|C_extra]]:

{{f:coste_total}}

To compare two scenarios quantitatively, the [[percentage savings|Ahorro_pct]] relative to the reference scenario is:

{{f:ahorro_pct}}

where [[reference scenario cost|C_base]] is the reference period cost and [[new scenario cost|C_nuevo]] is the cost after the evaluated measure.

The formal analysis separates which part of the [[total bill cost|C_total]] responds to habits controllable by the user (the [[energy cost|C_energia]] part) and which corresponds to less flexible contractual decisions (the [[power cost|C_potencia]]). In a typical domestic bill, the fixed term can represent between 15 % and 35 % of the total; ignoring it leads to overestimating the savings potential of efficiency measures.

## 🔴 Structural level

At the structural level, electricity cost analysis must consider the limits and biases of the simplified model:

**Temporal comparison bias:** The model assumes that [[reference scenario cost|C_base]] is comparable to [[new scenario cost|C_nuevo]] in conditions, period, and service. Comparing a winter month with active heating to a summer month without it means any difference in [[total bill cost|C_total]] primarily reflects thermal demand variation, not the impact of any measure. The model loses validity if the scenarios are not equivalent in service delivered.

**Weight of the fixed term:** If [[power cost|C_potencia]] represents 25 % of the bill and [[additional charges and levies|C_extra]] another 12 %, then [[energy cost|C_energia]] only represents 63 % of the total. A measure that reduces consumption by 20 % saves only 20 % of that 63 %, i.e., 12.6 % of the total bill. The real impact of energy efficiency measures is systematically lower than their impact on kWh consumption alone suggests.

**Domain of validity:** The model is valid for simplified residential analysis with known consumption data per band and price structure. It does not apply directly to industrial contracts, dynamic contracts, or periods with tariff changes.

**Cause attribution error:** The most frequent misinterpretation consists of attributing a change in [[total bill cost|C_total]] to a single cause without controlling other variables. A bill reduction in spring compared to the previous winter does not prove a new boiler is efficient; it may simply reflect reduced heating demand.

## Deep physical interpretation

The causal chain of electricity cost has two parallel branches converging in the bill. The first branch is usage: household appliances consume [[energy per tariff period|E_i]] based on their power ratings and usage times, and that consumption is weighted by [[energy price per tariff band|precio_i]] to give [[energy cost|C_energia]]. The second branch is capacity: the user has reserved a [[contracted power|P_contratada]] that determines [[power cost|C_potencia]] regardless of actual use.

The key to rigorous analysis is understanding that these two branches can only be reduced with different instruments. Reducing [[energy cost|C_energia]] requires reducing kWh consumption or shifting it to cheaper bands. Reducing [[power cost|C_potencia]] requires lowering [[contracted power|P_contratada]], which is only safe if the home's real peak demand stays below that new limit. Trying to reduce the fixed term without verifying demand peaks can cause supply interruptions at peak usage moments.

The [[percentage savings|Ahorro_pct]] only has physical meaning when [[reference scenario cost|C_base]] and [[new scenario cost|C_nuevo]] are comparable in service, period, and climatic conditions. This comparability requirement is the most frequently violated one in domestic analyses and explains most erroneous conclusions about the impact of savings measures.

## Order of magnitude

In a typical Spanish home (80 m², 3 occupants), the monthly electricity bill in winter ranges from 60 to 150 EUR. The [[energy cost|C_energia]] represents between 55 % and 75 % of the total depending on the tariff and habits. The [[power cost|C_potencia]] with 4.6 kW contracted under the regulated tariff amounts to about 14–18 EUR/month. The [[additional charges and levies|C_extra]] (electricity tax, VAT, meter rental) add between 8 and 20 EUR.

With these orders of magnitude, a measure that reduces consumption by 10 % produces monthly savings on the order of 5–8 EUR in winter, not 15 EUR as might be suggested if fixed terms were ignored. This estimate is what allows evaluating whether a technical investment has a reasonable payback period.

## Personalized resolution method

When receiving an electricity bill and wishing to analyze or project savings, the systematic procedure is:

1. **Identify the components:** separate [[energy cost|C_energia]], [[power cost|C_potencia]], and [[additional charges and levies|C_extra]] as they appear on the bill.
2. **Calculate the percentage of each component** relative to [[total bill cost|C_total]] to know which part each measure can act on.
3. **Apply the measure only to the affected component:** an efficiency measure reduces [[energy per tariff period|E_i]]; a contract adjustment reduces [[power cost|C_potencia]].
4. **Calculate [[new scenario cost|C_nuevo]]** with the modified values and the rest unchanged.
5. **Verify comparability of [[reference scenario cost|C_base]]:** same days, same season, same service level.
6. **Calculate [[percentage savings|Ahorro_pct]]** and express it relative to the complete [[total bill cost|C_total]].

## Special cases and extended example

**Flat tariff vs. time-of-use tariff:** With a flat tariff, [[energy price per tariff band|precio_i]] is the same for all hours and [[energy cost|C_energia]] is total consumption times that single price. With time-of-use pricing, shifting 50 kWh from peak (0.25 EUR/kWh) to off-peak (0.10 EUR/kWh) saves 7.5 EUR that month without changing total consumption.

**Variation in billed days:** A 31-day month has [[power cost|C_potencia]] 3.3 % higher than a 30-day month even if daily consumption is identical.

## Real student questions

**Why has my bill gone up even though I used the same energy as last month?** The most frequent answer is not consumption: [[billing period days|dias]] may differ (more days means more [[power cost|C_potencia]]), [[additional charges and levies|C_extra]] may have increased due to regulation, or [[energy price per tariff band|precio_i]] may have changed. Before concluding that consumption rose, these three factors must be checked.

**Is it worth lowering contracted power?** It depends exclusively on the home's simultaneous demand peaks. If peaks are recorded for a full month and the maximum is, say, 3.8 kW, then lowering from 4.6 kW to 3.45 kW is safe and reduces [[power cost|C_potencia]] by approximately 3.3 EUR/month at typical tariffs. If the maximum is 5.2 kW, it is not safe.

**How much real savings should I expect if I switch to a time-of-use tariff?** It depends on what percentage of your [[energy per tariff period|E_i]] falls in off-peak hours. If you already naturally consume 70 % during night hours, savings can be 10–15 % on [[energy cost|C_energia]]. If you consume mostly during peak hours, a flat tariff may be more economical.

## Cross-cutting connections and study paths

This leaf connects directly with **electrical power** (the instantaneous consumption that determines the [[contracted power|P_contratada]] needed), with **electrical energy** (the integral of power that produces [[energy per tariff period|E_i]]), and with the concepts of **energy efficiency** of appliances (which determine how much [[energy per tariff period|E_i]] each device consumes for a given service). It also connects with statistical time-series analysis in the context of comparative data normalization.

Recommended study path: **electrical power → electrical energy → cost of electricity (this leaf) → appliance efficiency → HVAC and energy certification.**

## Final synthesis

Electricity cost is the result of a mixed physical-economic model. When the bill is decomposed into [[energy cost|C_energia]], [[power cost|C_potencia]], and [[additional charges and levies|C_extra]], each component points to a different action instrument. Savings decisions stop being intuition and become verifiable strategy. A real and stable [[percentage savings|Ahorro_pct]] can only be demonstrated with equivalent reference periods, breakdown by components, and verification that service (comfort, availability) has not degraded.
`;export{e as default};
