# Examples of domestic electricity cost

# Exam-type example


## Problem statement

A home with a two-band time-of-use tariff (peak and off-peak) receives its monthly bill with the following known data: [[energia_por_periodo_tarifario]] of 120 kWh during peak hours at [[energy price per tariff band|precio_i]] of 0.24 EUR/kWh, and 160 kWh during off-peak hours at 0.12 EUR/kWh. The [[potencia_contratada]] is 4.6 kW, the [[power tariff|tarifa_potencia]] is 0.10 EUR/(kW·day), the period covers 30 [[billing period days|dias]], and [[costes_adicionales_y_peajes]] are 8.50 EUR.

Required: (a) calculate [[coste_de_energia]], (b) [[coste_de_potencia]], (c) [[coste_total_de_la_factura]].

## Data

- [[energia_por_periodo_tarifario]] peak: 120 kWh at [[energy price per tariff band|precio_i]] = 0.24 EUR/kWh
- [[energia_por_periodo_tarifario]] off-peak: 160 kWh at [[energy price per tariff band|precio_i]] = 0.12 EUR/kWh
- [[potencia_contratada]] = 4.6 kW
- [[power tariff|tarifa_potencia]] = 0.10 EUR/(kW·day)
- [[billing period days|dias]] = 30
- [[costes_adicionales_y_peajes]] = 8.50 EUR

## System definition

System: residential home with two-band time-of-use tariff (peak and off-peak). State variables: [[energia_por_periodo_tarifario]] per band, [[potencia_contratada]], and [[billing period days|dias]].

## Physical model

The applicable model is the simplified bill model with two-band time-of-use pricing. The [[coste_total_de_la_factura]] is the sum of three independent terms. The [[potencia_contratada]] determines [[coste_de_potencia]] completely independently of actual [[energia_por_periodo_tarifario]] consumption.

The physical model considers fundamental system quantities such as [[ahorro_porcentual]], [[coste_de_energia]], [[coste_de_potencia]].


## Model justification

The simplified model is valid because both bands have known fixed prices, the period has a defined duration, and the service level is constant. No climate correction is required because the objective is to calculate the bill, not to compare it with another.

## Symbolic solution

First, [[coste_de_energia]] is calculated by summing the product of [[energia_por_periodo_tarifario]] by [[energy price per tariff band|precio_i]] across each band:

{{f:coste_energia}}

Then [[coste_de_potencia]] as the product of [[potencia_contratada]] by [[power tariff|tarifa_potencia]] by [[billing period days|dias]]:

{{f:coste_potencia}}

Finally [[coste_total_de_la_factura]] summing the three components:

{{f:coste_total}}

To compare this scenario with another (for example, after applying savings measures), the [[ahorro_porcentual]] formula is used:

{{f:ahorro_pct}}

## Numerical substitution

Substituting into the [[coste_de_energia]] formula with the given [[energia_por_periodo_tarifario]] and [[energy price per tariff band|precio_i]] values:
120 × 0.24 + 160 × 0.12 = 28.80 + 19.20 = **48.00 EUR**.

Substituting into the [[coste_de_potencia]] formula with [[potencia_contratada]], [[power tariff|tarifa_potencia]], and [[billing period days|dias]]:
4.6 × 0.10 × 30 = **13.80 EUR**.

Substituting into the [[coste_total_de_la_factura]] formula:
48.00 + 13.80 + 8.50 = **70.30 EUR**.

## Dimensional validation

- [[coste_de_energia]]: units kWh × EUR/kWh give EUR. Correct.
- [[coste_de_potencia]]: units kW × EUR/(kW·day) × days give EUR. Correct.
- [[coste_total_de_la_factura]]: sum of EUR terms gives EUR. Correct.

## Physical interpretation

The physically meaningful result is that [[coste_de_energia]] represents 68.3 % of [[coste_total_de_la_factura]] and [[coste_de_potencia]] represents 19.6 %. Any measure that reduces consumption acts on less than two-thirds of the bill; the remaining third is inelastic with respect to usage. Physically, [[coste_de_potencia]] indicates the home pays 13.80 EUR per month to have up to 4.6 kW available at any moment, regardless of whether it uses them.

The peak [[energy price per tariff band|precio_i]] (0.24 EUR/kWh) doubles the off-peak price (0.12 EUR/kWh): each kWh at peak has twice the economic impact of the same kWh off-peak. Shifting consumption from peak to off-peak does not reduce total [[energia_por_periodo_tarifario]], but does reduce [[coste_de_energia]].

---

# Real-world example


## Context

The same home applies two simultaneous savings measures: (1) shift 50 kWh from peak to off-peak by scheduling the washing machine and dishwasher at night, and (2) replace an old electric boiler with a more efficient model, reducing total consumption by 40 kWh. The goal is to calculate [[ahorro_porcentual]] and the absolute saving in EUR.

## Physical estimation

Expected order of magnitude: shifting 50 kWh from 0.24 EUR/kWh to 0.12 EUR/kWh saves 50 × (0.24 − 0.12) = 6.00 EUR. Reducing 40 kWh at 0.12 EUR/kWh saves another 4.80 EUR. Combined saving ~10–11 EUR, approximately 14–16 % of the original [[coste_total_de_la_factura]]. The fixed terms (22.30 EUR) are not reduced, so the saving on the variable component ([[coste_de_energia]] = 48.00 EUR) represents 22.5 %.

New [[coste_de_energia]]: peak (120−50)×0.24 = 16.80 EUR; off-peak (160+50−40)×0.12 = 20.40 EUR; total = 37.20 EUR.

New [[coste_total_de_la_factura]] = 37.20 + 13.80 + 8.50 = **59.50 EUR** ([[coste_del_escenario_nuevo]]).

The [[coste_del_escenario_de_referencia]] is the original [[coste_total_de_la_factura]] of 70.30 EUR.

Applying the [[ahorro_porcentual]] formula:

{{f:ahorro_pct}}

Result: 100 × (1 − 59.50 / 70.30) = **15.4 %**.

## Interpretation

The [[ahorro_porcentual]] of 15.4 % means the two measures reduce [[coste_total_de_la_factura]] from 70.30 to 59.50 EUR, saving 10.80 EUR/month. Time-shifting contributes 6.00 EUR (55.6 %) and efficiency improvement 4.80 EUR (44.4 %). The total [[ahorro_porcentual]] (15.4 %) is lower than the percentage reduction in kWh (32.1 %) because the fixed terms of [[coste_total_de_la_factura]] (31.7 % of the original bill) are not reduced by these measures.