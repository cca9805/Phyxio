const e=`# Differential and Thermal-Magnetic Breakers\r
\r
In a domestic consumer unit, two types of protection devices coexist that are frequently confused: the residual current device (RCD/differential) and the thermal-magnetic circuit breaker (MCB). Although both interrupt the supply when they trip, they monitor entirely different physical quantities and respond to different threats. The [[I_delta]] that the RCD measures is not the total circuit [[I]], but the imbalance between phase and neutral conductors. The [[margen_termico]] that determines when the MCB trips depends on whether [[I]] exceeds [[I_n]]. Understanding this distinction is the first step toward correctly diagnosing any electrical incident in the home.\r
\r
## Conceptual context\r
\r
The consumer unit organises the distribution of energy into independent circuits and protects each one with at least one MCB. The RCD, generally one per group of circuits, adds an additional layer of protection against leakage current. The most frequent confusion is treating these two devices as equivalent or interchangeable, when in fact they measure completely different things.\r
\r
The MCB operates by comparing [[I]] with the nominal rating [[I_n]]. If the current exceeds that value for long enough, the bimetallic element heats up, deforms, and opens the circuit. For a short circuit, the magnetic element acts in milliseconds. The MCB does not measure whether there is leakage to earth: it only monitors the total magnitude of [[I]] in its circuit.\r
\r
The RCD operates by measuring [[I_fase]] and [[I_neutro]] simultaneously. Under normal conditions without earth leakage, all current entering via the phase returns via the neutral: [[I_delta]] is practically zero. If there is a leakage, part of the current returns via an alternative path and [[I_delta]] becomes non-zero. When [[I_delta]] exceeds [[I_dn]], the RCD trips. This mechanism is independent of the total magnitude of [[I]].\r
\r
## 🟢 Essential level\r
\r
The RCD does not limit the power of the home or protect wiring against overloads. Its sole function is to detect imbalance between phase and neutral. If [[I_delta]] exceeds [[I_dn]], it cuts the supply to protect people against indirect electrical contact.\r
\r
The MCB does not detect earth leakage or protect people directly. Its function is to protect wiring against excess current and the heating that excess produces. When the current exceeds the nominal rating sustainably or when there is a short circuit, it interrupts the circuit.\r
\r
An important consequence: there can be real electrical risk without either device tripping. If there is a balanced overload without leakage, the RCD does not act. If the leakage current is small but constant at a deteriorated connection point, local heat may be significant without the total current exceeding the rating.\r
\r
The phrase "nothing tripped" is not evidence of safety. It is simply evidence that the total current did not exceed the rating and that [[I_delta]] did not exceed [[I_dn]] at that moment.\r
\r
## 🔵 Formal level\r
\r
The current flowing through a circuit when a load is connected is:\r
\r
{{f:corriente_carga}}\r
\r
This [[I]] is compared with [[I_n]] of the MCB. If [[I]] exceeds [[I_n]], there is an overload. To quantify what fraction of the nominal capacity is being used, the [[margen_termico]] is defined:\r
\r
{{f:ratio_termico}}\r
\r
Values of [[margen_termico]] equal to or greater than 1 indicate that the MCB is in the potential trip zone.\r
\r
The imbalance between conductors measured by the RCD is:\r
\r
{{f:desequilibrio}}\r
\r
where [[I_fase]] is the current measured in the phase conductor and [[I_neutro]] is the current measured in the neutral conductor. When [[margen_dif]] reaches 1, the RCD trips:\r
\r
{{f:ratio_diferencial}}\r
\r
The approximate maximum power that can be connected before the MCB trips is:\r
\r
{{f:potencia_limite}}\r
\r
## 🔴 Structural level\r
\r
Each protection responds to an independent variable, so their operating domains are complementary but not overlapping:\r
\r
- **Balanced overload:** [[I]] exceeds [[I_n]], [[I_delta]] is small. The MCB trips; the RCD may not.\r
- **Earth leakage:** [[I_delta]] exceeds [[I_dn]], but [[I]] may be within rating. The RCD trips; the MCB may not.\r
- **Local thermal fault:** degraded connection with high contact resistance. Local heat dissipation is high but [[I]] does not exceed [[I_n]] and [[I_delta]] is small. Neither device trips, but there is real fire risk.\r
\r
The model of two independent protections is valid for single-phase residential analysis with a standard consumer unit. It loses accuracy in installations with high harmonic content or when the RCD is type A rather than type AC.\r
\r
## Deep physical interpretation\r
\r
When asking "why did one trip and not the other?", the correct answer requires identifying which physical quantity exceeded its threshold. If the RCD tripped, there was a significant [[I_delta]] difference between [[I_fase]] and [[I_neutro]]. If the MCB tripped, [[I]] exceeded [[I_n]] in that specific circuit.\r
\r
The [[margen_dif]] and [[margen_termico]] are diagnostic tools: a [[margen_termico]] of 0.85 indicates the circuit is operating at 85 % of nominal capacity. A [[margen_dif]] of 0.6 indicates current leakage is 60 % of the threshold: it does not trip, but signals something is not in ideal condition.\r
\r
## Order of magnitude\r
\r
In a typical Spanish residential installation: [[I_dn]] = 30 mA for a high-sensitivity RCD; typical [[I_n]] values are 10 A for lighting, 16 A for general sockets, 25 A for kitchen circuits. For [[V]] = 230 V, the [[P_lim]] of a 16 A circuit is approximately 3.7 kW. A leakage of 30 mA at 230 V dissipates only 6.9 W, but is sufficient to be lethal if it flows through the human body.\r
\r
## Personalized resolution method\r
\r
To diagnose an incident with protection devices:\r
\r
1. Identify which device tripped (RCD, MCB, or neither).\r
2. Estimate the circuit [[I]] using known [[P]] and nominal [[V]].\r
3. Calculate [[margen_termico]] = [[I]] / [[I_n]] and compare with 1.\r
4. If [[I_fase]] and [[I_neutro]] measurements are available, calculate [[I_delta]] and [[margen_dif]].\r
5. If there are thermal symptoms without a trip, inspect connection points and check contact resistance.\r
6. Correct the root cause: redistribute loads, repair leakage, replace degraded connection.\r
7. Verify in real operation; do not accept "it doesn't trip now" as the only success criterion.\r
\r
## Special cases and extended example\r
\r
**Case A — Pure overload.** 230 V circuit with 16 A MCB. Total [[P]] = 4 800 W connected. The resulting [[I]] is approximately 20.9 A. The [[margen_termico]] exceeds 1.30, indicating a 30% overload. MCB expected to trip within minutes.\r
\r
**Case B — Leakage without overload.** Measured [[I_fase]] = 9.62 A and [[I_neutro]] = 9.57 A. The absolute difference gives [[I_delta]] of 0.05 A equivalent to 50 mA. With [[I_dn]] of 30 mA, the [[margen_dif]] exceeds unity: RCD expected to trip although total [[I]] does not exceed any rating.\r
\r
**Case C — Thermal fault without trip.** Circuit with [[I]] of 13 A and 16 A MCB. The [[margen_termico]] is approximately 0.81, within rating. No appreciable leakage. However, a loose connection has elevated contact resistance and dissipates heat locally. Neither protection trips, but the fault exists.\r
\r
## Real student questions\r
\r
**If the RCD trips, should I raise its threshold [[I_dn]]?** No. Raising [[I_dn]] removes personal protection. The source of [[I_delta]] must be identified and corrected.\r
\r
**If the MCB trips, is it enough to fit one with a higher [[I_n]]?** Only if the wiring, installation, and general protection permit it. Changing [[I_n]] without recalculating the entire line may leave the conductor unprotected.\r
\r
**What does not trip the RCD?** Balanced overloads where [[I_fase]] ≈ [[I_neutro]], and some local thermal faults without appreciable leakage.\r
\r
## Cross-cutting connections and study paths\r
\r
This leaf connects directly with **electrical safety** (effect of protections on human risk), with **sockets and outlets** (local thermal faults with or without tripping), and with **voltage and power at home** (basis for estimating [[I]] of each circuit).\r
\r
Recommended study path: **electric current → resistance and Ohm's law → voltage and power at home → differential and thermal-magnetic breakers (this leaf) → electrical safety.**\r
\r
## Final synthesis\r
\r
The RCD and the MCB do not protect the same things or against the same threats. The RCD monitors [[I_delta]] and protects people. The MCB monitors [[I]] relative to [[I_n]] and protects wiring. Knowing which physical quantity exceeds which threshold in each incident allows precise diagnosis, safe action, and avoidance of the dangerous decisions of raising ratings without technical justification.\r
`;export{e as default};
