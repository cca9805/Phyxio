# Applications

## 1. Domestic electricity bill audit

Dominant variable: [[coste_total_de_la_factura]]

A domestic audit consists of decomposing [[coste_total_de_la_factura]] into its three components — [[coste_de_energia]], [[coste_de_potencia]], and [[costes_adicionales_y_peajes]] — and assigning [[energia_por_periodo_tarifario]] from each band to the load families that generate it: heating and cooling, domestic hot water, cooking, washing, and standby appliances. This analysis reveals at what times and with which appliances [[coste_de_energia]] is concentrated, and what fraction of [[coste_total_de_la_factura]] is outside the user's control.

Validity limit: The audit is valid for contracts with a known price structure and comparable periods. If the contract changes its tariff structure between analyzed bills, the historical breakdown loses direct comparability.

In Spain, smart meters installed from 2010 onwards allow downloading the hourly consumption profile from the distributor's portal. With that profile and PVPC prices, it is possible to assign each kWh to its band and calculate [[coste_de_energia]] with real hourly resolution.

---

## 2. Optimization of flexible load usage schedules

Dominant variable: [[energia_por_periodo_tarifario]]

Flexible loads are appliances whose usage time can be changed without reducing service: washing machine, dishwasher, electric vehicle charger, water pumps, and heating schedulers. Shifting [[energia_por_periodo_tarifario]] from the highest [[energy price per tariff band|precio_i]] band to the lowest-price band reduces [[coste_de_energia]] without reducing total kWh consumption. The theoretical maximum saving from shifting a quantity of energy from peak to off-peak is that quantity multiplied by the price difference between the two bands.

Validity limit: Only applicable in contracts with real time-of-use pricing. With a flat tariff, [[energy price per tariff band|precio_i]] is identical in all bands and shifting produces no savings in [[coste_de_energia]]. The measure is most effective when the price difference between bands is large.

With the PVPC tariff in Spain, the difference between peak and off-peak prices can exceed 0.15 EUR/kWh on high-demand days. A washing machine consuming 1.5 kWh shifted from peak to off-peak saves between 0.15 and 0.23 EUR per cycle, representing 5–8 EUR monthly if used daily.

---

## 3. Evaluation of energy efficiency investment returns

Dominant variable: [[ahorro_porcentual]]

Before investing in technological improvements (heat pump, insulation, A+++ appliances), it is necessary to calculate the expected [[ahorro_porcentual]] on the real [[coste_total_de_la_factura]], not just on consumption. The investment is profitable if [[coste_del_escenario_de_referencia]] multiplied by the annual [[ahorro_porcentual]] produces an absolute saving that pays back the investment in an acceptable number of years. The simple payback period is the investment divided by the annual absolute saving.

Validity limit: The payback calculation assumes energy prices are stable and the service level is identical before and after the improvement. If prices rise or if the improvement allows raising the comfort level (more heating hours), actual savings may differ significantly from the estimate.

A heat pump replacing direct electric heating can reduce the heating [[coste_de_energia]] by 60–70 %, but [[ahorro_porcentual]] on total [[coste_total_de_la_factura]] depends on how much heating weighs in the bill. If heating represents 40 % of [[coste_de_energia]] and that in turn is 65 % of the bill, the saving on the total bill is on the order of 17 %, not 65 %.

---

## 4. Adjustment of contracted power

Dominant variable: [[potencia_contratada]]

[[potencia_contratada]] directly determines [[coste_de_potencia]] through [[power tariff|tarifa_potencia]] and [[billing period days|dias]]. Reducing it is a [[coste_total_de_la_factura]] reduction measure that does not require changing consumption habits. However, it requires verifying that the home's real demand peaks do not exceed the new [[potencia_contratada]]; if they do, the power control breaker trips and cuts supply.

Validity limit: The measure is only safe if the real simultaneous peak demand (measured or estimated with margin) is below the new [[potencia_contratada]]. If the home has an electric cooker, air conditioning, and a washing machine that can run simultaneously, the combined power can easily exceed 7–9 kW and a reduction to 4.6 kW would cause frequent outages.

In Spain, the most common contracted powers in homes are 3.45 kW, 4.6 kW, 5.75 kW, and 6.9 kW. Reducing from 6.9 kW to 4.6 kW saves approximately (6.9 − 4.6) × 0.11 × 30 = 7.59 EUR per month in [[coste_de_potencia]], which is significant if real peaks allow it.

---

## 5. Comparison and negotiation of electricity contract type

Dominant variable: [[energy price per tariff band|precio_i]]

Analysis of actual [[coste_de_energia]] allows comparing whether a free-market contract with a fixed price is more economical than the PVPC for the home's specific consumption profile. If the home concentrates more than 60 % of its [[energia_por_periodo_tarifario]] in the off-peak band and the free-market price is 0.16 EUR/kWh flat, it may be more economical than PVPC with peak at 0.24 EUR/kWh even though off-peak is at 0.10 EUR/kWh, depending on the exact distribution.

Validity limit: The comparison is valid only if the analysis period is representative of the complete annual profile. A summer profile without air conditioning is not representative of a home with high winter demand. The comparison should be made with at least one full year of data or with equivalent profiles by season.

During periods of high PVPC variability (energy crises, cold snaps), peak prices can exceed 0.40 EUR/kWh for several days. For homes with a high daytime consumption profile, a fixed-price contract can offer a reduction in [[coste_de_energia]] and therefore [[coste_total_de_la_factura]], especially in months of greatest uncertainty.

---

## Cross-cutting considerations

Analysis of [[coste_total_de_la_factura]] is central to all investment and habit decisions in a home. The pivot variable is [[ahorro_porcentual]], but its validity always depends on the quality of [[coste_del_escenario_de_referencia]]. Without a reliable, comparable, and documented baseline, none of the five applications above produces verifiable conclusions.

The epistemological limit common to all applications is the impossibility of controlling all variables simultaneously in a real domestic environment. The practical solution is to repeat the analysis over several equivalent periods and look for statistical consistency, not certainty from a single data point.

An order-of-magnitude check that applies to all five applications: if the calculated [[ahorro_porcentual]] is less than 3–5 %, the result is within the typical error of the simplified model when comparing non-perfectly-homogeneous periods, and should not be treated as statistically confirmed savings without additional evidence across multiple equivalent periods.