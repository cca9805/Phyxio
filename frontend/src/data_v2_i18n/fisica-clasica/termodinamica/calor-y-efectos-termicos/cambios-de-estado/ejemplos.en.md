# Exam-type example

## Problem statement

A 300 g block of ice at -10 C is placed into an insulated container with 500 g of water at 60 C. Determine whether the ice melts completely and the final temperature.

## Data

- Ice mass: [[m]] = 0.300 kg; initial temperature: -10 C.
- Hot water mass: 0.500 kg; initial temperature: 60 C.
- Specific heat of ice: 2090 J/(kg K); specific heat of water: 4186 J/(kg K).
- Specific latent heat of fusion: [[L]] = 334000 J/kg; transition temperature: [[T_trans]] = 0 C.

## System definition

The system is ice plus water in an ideal calorimeter. The boundary exchanges no heat with the outside, so the energy released by hot water must equal the energy absorbed by ice and by the water formed.

## Physical model

The process has three segments. First the ice warms to [[T_trans]]. Second, a mass [[m]] of ice may melt at constant temperature. Third, if energy remains after the latent segment, all liquid water warms above [[T_trans]]. The core of the model is that [[Q_lat]] is calculated from [[m]] and [[L]], not from a temperature change.

## Model justification

The temperature interval includes no boiling and no container losses. Specific heats can be treated as constant, and the only possible phase change is melting of ice at [[T_trans]]. Before looking for a final temperature, one must verify whether the hot water supplies enough energy to complete the phase change.

## Symbolic solution

The latent energy of fusion for the mass changing state is calculated with the general relation:

{{f:calor_latente_general}}

For this concrete transition, this also applies:

{{f:calor_latente_fusion}}

The decision criterion is to compare the heat available from cooling water to 0 C with the sum of the sensible heat of ice and the latent heat of fusion. If available heat is lower, the answer is an ice-water mixture at [[T_trans]]. If it is higher, the final temperature of the resulting liquid water is calculated.

## Numerical substitution

Heat to warm ice to 0 C: 0.300 * 2090 * 10 = 6270 J.

Latent heat to melt all the ice: [[Q_lat]] = 0.300 * 334000 = 100200 J.

Total energy needed for complete melting: 106470 J. Maximum energy released by water when cooling to 0 C: 0.500 * 4186 * 60 = 125580 J. Since available energy is larger, the ice melts completely and 19110 J remain.

That energy warms 0.800 kg of water from 0 C: final temperature = 19110 / (0.800 * 4186) = 5.7 C.

## Dimensional validation

In the latent segment, [[m]] is in kg and [[L]] in J/kg, so [[Q_lat]] is in J. In the sensible segments, mass times specific heat times temperature interval also gives J. The final temperature is coherent: it is above [[T_trans]] because energy remains, but far below 60 C because the phase change consumes most of the heat.

## Physical interpretation

The low result, 5.7 C, does not mean the hot water had little energy; it means melting ice is energetically expensive. Of the 125.6 kJ available down to 0 C, about 100.2 kJ are consumed only as [[Q_lat]]. Without the latent segment, the computed final temperature would be much higher and physically false.

---

# Real-world example

## Context

A food plant must freeze 50 kg of meat from 20 C to -18 C. Meat contains water, so the dominant segment is the phase change of that water fraction. Estimate the energy the refrigeration system must extract.

## Physical estimation

Estimated data: specific heat above freezing 3350 J/(kg K), approximate freezing point [[T_trans]] = -2 C, effective latent heat [[L]] = 233800 J/kg due to the water fraction, and frozen meat specific heat 1750 J/(kg K).

Cooling from 20 C to -2 C requires 50 * 3350 * 22 = 3.69 MJ. Freezing the mass is estimated with:

{{f:calor_latente_general}}

The latent segment gives [[Q_lat]] = 50 * 233800 = 11.69 MJ. Cooling after -2 C to -18 C requires 50 * 1750 * 16 = 1.40 MJ. Total extracted energy is 16.78 MJ.

## Interpretation

The quantitative reading is clear: the phase change is about 70 % of the total. That is why compressor sizing depends more on [[m]] and [[L]] than on the temperature interval. If the process must finish in 2 h, dividing total energy by time gives a minimum average power of about 2.33 kW, before losses and real efficiency are included. In a real plant the equipment is oversized because heat also enters through walls, replacement air, trays, and motors. The estimate is not a complete design; it shows that the latent term fixes the main scale of the problem.


The same reading supports decisions: halving the processed mass almost halves the [[Q_lat]] term, while changing the final temperature by a few degrees only affects the sensible segments. That is why, whenever a phase change is present, the first plausibility check is mass, transition type, and [[L]].

