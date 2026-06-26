const e=`# Examples of domestic electricity cost

# Exam-type example

## Problem statement

A home with a two-band time-of-use tariff (peak and off-peak) receives its monthly bill with the following known data: [[energy per tariff period|E_i]] of 120 kWh during peak hours at [[energy price per tariff band|precio_i]] of 0.24 EUR/kWh, and 160 kWh during off-peak hours at 0.12 EUR/kWh. The [[contracted power|P_contratada]] is 4.6 kW, the [[power tariff|tarifa_potencia]] is 0.10 EUR/(kW·day), the period covers 30 [[billing period days|dias]], and [[additional charges and levies|C_extra]] are 8.50 EUR.

Required: (a) calculate [[energy cost|C_energia]], (b) [[power cost|C_potencia]], (c) [[total bill cost|C_total]].

## Data

- [[energy per tariff period|E_i]] peak: 120 kWh at [[energy price per tariff band|precio_i]] = 0.24 EUR/kWh
- [[energy per tariff period|E_i]] off-peak: 160 kWh at [[energy price per tariff band|precio_i]] = 0.12 EUR/kWh
- [[contracted power|P_contratada]] = 4.6 kW
- [[power tariff|tarifa_potencia]] = 0.10 EUR/(kW·day)
- [[billing period days|dias]] = 30
- [[additional charges and levies|C_extra]] = 8.50 EUR

## System definition

System: residential home with two-band time-of-use tariff (peak and off-peak). State variables: [[energy per tariff period|E_i]] per band, [[contracted power|P_contratada]], and [[billing period days|dias]].

## Physical model

The applicable model is the simplified bill model with two-band time-of-use pricing. The [[total bill cost|C_total]] is the sum of three independent terms. The [[contracted power|P_contratada]] determines [[power cost|C_potencia]] completely independently of actual [[energy per tariff period|E_i]] consumption.

## Model justification

The simplified model is valid because both bands have known fixed prices, the period has a defined duration, and the service level is constant. No climate correction is required because the objective is to calculate the bill, not to compare it with another.

## Symbolic solution

First, [[energy cost|C_energia]] is calculated by summing the product of [[energy per tariff period|E_i]] by [[energy price per tariff band|precio_i]] across each band:

{{f:coste_energia}}

Then [[power cost|C_potencia]] as the product of [[contracted power|P_contratada]] by [[power tariff|tarifa_potencia]] by [[billing period days|dias]]:

{{f:coste_potencia}}

Finally [[total bill cost|C_total]] summing the three components:

{{f:coste_total}}

To compare this scenario with another (for example, after applying savings measures), the [[percentage savings|Ahorro_pct]] formula is used:

{{f:ahorro_pct}}

## Numerical substitution

Substituting into the [[energy cost|C_energia]] formula with the given [[energy per tariff period|E_i]] and [[energy price per tariff band|precio_i]] values:
120 × 0.24 + 160 × 0.12 = 28.80 + 19.20 = **48.00 EUR**.

Substituting into the [[power cost|C_potencia]] formula with [[contracted power|P_contratada]], [[power tariff|tarifa_potencia]], and [[billing period days|dias]]:
4.6 × 0.10 × 30 = **13.80 EUR**.

Substituting into the [[total bill cost|C_total]] formula:
48.00 + 13.80 + 8.50 = **70.30 EUR**.

## Dimensional validation

- [[energy cost|C_energia]]: units kWh × EUR/kWh give EUR. Correct.
- [[power cost|C_potencia]]: units kW × EUR/(kW·day) × days give EUR. Correct.
- [[total bill cost|C_total]]: sum of EUR terms gives EUR. Correct.

## Physical interpretation

The physically meaningful result is that [[energy cost|C_energia]] represents 68.3 % of [[total bill cost|C_total]] and [[power cost|C_potencia]] represents 19.6 %. Any measure that reduces consumption acts on less than two-thirds of the bill; the remaining third is inelastic with respect to usage. Physically, [[power cost|C_potencia]] indicates the home pays 13.80 EUR per month to have up to 4.6 kW available at any moment, regardless of whether it uses them.

The peak [[energy price per tariff band|precio_i]] (0.24 EUR/kWh) doubles the off-peak price (0.12 EUR/kWh): each kWh at peak has twice the economic impact of the same kWh off-peak. Shifting consumption from peak to off-peak does not reduce total [[energy per tariff period|E_i]], but does reduce [[energy cost|C_energia]].

---

# Real-world example

## Context

The same home applies two simultaneous savings measures: (1) shift 50 kWh from peak to off-peak by scheduling the washing machine and dishwasher at night, and (2) replace an old electric boiler with a more efficient model, reducing total consumption by 40 kWh. The goal is to calculate [[percentage savings|Ahorro_pct]] and the absolute saving in EUR.

## Physical estimation

Expected order of magnitude: shifting 50 kWh from 0.24 EUR/kWh to 0.12 EUR/kWh saves 50 × (0.24 − 0.12) = 6.00 EUR. Reducing 40 kWh at 0.12 EUR/kWh saves another 4.80 EUR. Combined saving ~10–11 EUR, approximately 14–16 % of the original [[total bill cost|C_total]]. The fixed terms (22.30 EUR) are not reduced, so the saving on the variable component ([[energy cost|C_energia]] = 48.00 EUR) represents 22.5 %.

New [[energy cost|C_energia]]: peak (120−50)×0.24 = 16.80 EUR; off-peak (160+50−40)×0.12 = 20.40 EUR; total = 37.20 EUR.

New [[total bill cost|C_total]] = 37.20 + 13.80 + 8.50 = **59.50 EUR** ([[new scenario cost|C_nuevo]]).

The [[reference scenario cost|C_base]] is the original [[total bill cost|C_total]] of 70.30 EUR.

Applying the [[percentage savings|Ahorro_pct]] formula:

{{f:ahorro_pct}}

Result: 100 × (1 − 59.50 / 70.30) = **15.4 %**.

## Interpretation

The [[percentage savings|Ahorro_pct]] of 15.4 % means the two measures reduce [[total bill cost|C_total]] from 70.30 to 59.50 EUR, saving 10.80 EUR/month. Time-shifting contributes 6.00 EUR (55.6 %) and efficiency improvement 4.80 EUR (44.4 %). The total [[percentage savings|Ahorro_pct]] (15.4 %) is lower than the percentage reduction in kWh (32.1 %) because the fixed terms of [[total bill cost|C_total]] (31.7 % of the original bill) are not reduced by these measures.
`;export{e as default};
