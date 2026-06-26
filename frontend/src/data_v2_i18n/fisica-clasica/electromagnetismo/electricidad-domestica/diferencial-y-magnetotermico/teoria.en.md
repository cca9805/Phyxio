## Conceptual context

The consumer unit organises the distribution of energy into independent circuits and protects each one with at least one MCB. The RCD, generally one per group of circuits, adds an additional layer of protection against leakage current. The most frequent confusion is treating these two devices as equivalent or interchangeable, when in fact they measure completely different things.

The MCB operates by comparing [[corriente_de_carga]] with the nominal rating [[corriente_nominal_del_magnetotermico]]. If the current exceeds that value for long enough, the bimetallic element heats up, deforms, and opens the circuit. For a short circuit, the magnetic element acts in milliseconds. The MCB does not measure whether there is leakage to earth: it only monitors the total magnitude of [[corriente_de_carga]] in its circuit.

The RCD operates by measuring [[corriente_de_fase]] and [[corriente_de_neutro]] simultaneously. Under normal conditions without earth leakage, all current entering via the phase returns via the neutral: [[desequilibrio_diferencial]] is practically zero. If there is a leakage, part of the current returns via an alternative path and [[desequilibrio_diferencial]] becomes non-zero. When [[desequilibrio_diferencial]] exceeds [[umbral_diferencial_nominal]], the RCD trips. This mechanism is independent of the total magnitude of [[corriente_de_carga]].

## 🟢 Essential level

The RCD does not limit the power of the home or protect wiring against overloads. Its sole function is to detect imbalance between phase and neutral. If [[desequilibrio_diferencial]] exceeds [[umbral_diferencial_nominal]], it cuts the supply to protect people against indirect electrical contact.

The MCB does not detect earth leakage or protect people directly. Its function is to protect wiring against excess current and the heating that excess produces. When the current exceeds the nominal rating sustainably or when there is a short circuit, it interrupts the circuit.

An important consequence: there can be real electrical risk without either device tripping. If there is a balanced overload without leakage, the RCD does not act. If the leakage current is small but constant at a deteriorated connection point, local heat may be significant without the total current exceeding the rating.

The phrase "nothing tripped" is not evidence of safety. It is simply evidence that the total current did not exceed the rating and that [[desequilibrio_diferencial]] did not exceed [[umbral_diferencial_nominal]] at that moment.

## 🔵 Formal level

The current flowing through a circuit when a load is connected is:

{{f:corriente_carga}}

This [[corriente_de_carga]] is compared with [[corriente_nominal_del_magnetotermico]] of the MCB. If [[corriente_de_carga]] exceeds [[corriente_nominal_del_magnetotermico]], there is an overload. To quantify what fraction of the nominal capacity is being used, the [[margen_termico]] is defined:

{{f:ratio_termico}}

Values of [[margen_termico]] equal to or greater than 1 indicate that the MCB is in the potential trip zone.

The imbalance between conductors measured by the RCD is:

{{f:desequilibrio}}

where [[corriente_de_fase]] is the current measured in the phase conductor and [[corriente_de_neutro]] is the current measured in the neutral conductor. When [[margen_dif]] reaches 1, the RCD trips:

{{f:ratio_diferencial}}

The approximate maximum power that can be connected before the MCB trips is:

{{f:potencia_limite}}

## 🔴 Structural level

Each protection responds to an independent variable, so their operating domains are complementary but not overlapping:

- **Balanced overload:** [[corriente_de_carga]] exceeds [[corriente_nominal_del_magnetotermico]], [[desequilibrio_diferencial]] is small. The MCB trips; the RCD may not.
- **Earth leakage:** [[desequilibrio_diferencial]] exceeds [[umbral_diferencial_nominal]], but [[corriente_de_carga]] may be within rating. The RCD trips; the MCB may not.
- **Local thermal fault:** degraded connection with high contact resistance. Local heat dissipation is high but [[corriente_de_carga]] does not exceed [[corriente_nominal_del_magnetotermico]] and [[desequilibrio_diferencial]] is small. Neither device trips, but there is real fire risk.

The model of two independent protections is valid for single-phase residential analysis with a standard consumer unit. It loses accuracy in installations with high harmonic content or when the RCD is type A rather than type AC.

## Deep physical interpretation

When asking "why did one trip and not the other?", the correct answer requires identifying which physical quantity exceeded its threshold. If the RCD tripped, there was a significant [[desequilibrio_diferencial]] difference between [[corriente_de_fase]] and [[corriente_de_neutro]]. If the MCB tripped, [[corriente_de_carga]] exceeded [[corriente_nominal_del_magnetotermico]] in that specific circuit.

The [[margen_dif]] and [[margen_termico]] are diagnostic tools: a [[margen_termico]] of 0.85 indicates the circuit is operating at 85 % of nominal capacity. A [[margen_dif]] of 0.6 indicates current leakage is 60 % of the threshold: it does not trip, but signals something is not in ideal condition.

## Order of magnitude

In a typical Spanish residential installation: [[umbral_diferencial_nominal]] = 30 mA for a high-sensitivity RCD; typical [[corriente_nominal_del_magnetotermico]] values are 10 A for lighting, 16 A for general sockets, 25 A for kitchen circuits. For [[tension_de_suministro]] = 230 V, the [[potencia_limite_magnetotermica]] of a 16 A circuit is approximately 3.7 kW. A leakage of 30 mA at 230 V dissipates only 6.9 W, but is sufficient to be lethal if it flows through the human body.

## Personalized resolution method

To diagnose an incident with protection devices:

1. Identify which device tripped (RCD, MCB, or neither).
2. Estimate the circuit [[corriente_de_carga]] using known [[potencia_de_carga]] and nominal [[tension_de_suministro]].
3. Calculate [[margen_termico]] = [[corriente_de_carga]] / [[corriente_nominal_del_magnetotermico]] and compare with 1.
4. If [[corriente_de_fase]] and [[corriente_de_neutro]] measurements are available, calculate [[desequilibrio_diferencial]] and [[margen_dif]].
5. If there are thermal symptoms without a trip, inspect connection points and check contact resistance.
6. Correct the root cause: redistribute loads, repair leakage, replace degraded connection.
7. Verify in real operation; do not accept "it doesn't trip now" as the only success criterion.

## Special cases and extended example

**Case A — Pure overload.** 230 V circuit with 16 A MCB. Total [[potencia_de_carga]] = 4 800 W connected. The resulting [[corriente_de_carga]] is approximately 20.9 A. The [[margen_termico]] exceeds 1.30, indicating a 30% overload. MCB expected to trip within minutes.

**Case B — Leakage without overload.** Measured [[corriente_de_fase]] = 9.62 A and [[corriente_de_neutro]] = 9.57 A. The absolute difference gives [[desequilibrio_diferencial]] of 0.05 A equivalent to 50 mA. With [[umbral_diferencial_nominal]] of 30 mA, the [[margen_dif]] exceeds unity: RCD expected to trip although total [[corriente_de_carga]] does not exceed any rating.

**Case C — Thermal fault without trip.** Circuit with [[corriente_de_carga]] of 13 A and 16 A MCB. The [[margen_termico]] is approximately 0.81, within rating. No appreciable leakage. However, a loose connection has elevated contact resistance and dissipates heat locally. Neither protection trips, but the fault exists.

## Real student questions

**If the RCD trips, should I raise its threshold [[umbral_diferencial_nominal]]?** No. Raising [[umbral_diferencial_nominal]] removes personal protection. The source of [[desequilibrio_diferencial]] must be identified and corrected.

**If the MCB trips, is it enough to fit one with a higher [[corriente_nominal_del_magnetotermico]]?** Only if the wiring, installation, and general protection permit it. Changing [[corriente_nominal_del_magnetotermico]] without recalculating the entire line may leave the conductor unprotected.

**What does not trip the RCD?** Balanced overloads where [[corriente_de_fase]] ≈ [[corriente_de_neutro]], and some local thermal faults without appreciable leakage.

## Cross-cutting connections and study paths

This leaf connects directly with **electrical safety** (effect of protections on human risk), with **sockets and outlets** (local thermal faults with or without tripping), and with **voltage and power at home** (basis for estimating [[corriente_de_carga]] of each circuit).

Recommended study path: **electric current → resistance and Ohm's law → voltage and power at home → differential and thermal-magnetic breakers (this leaf) → electrical safety.**

## Final synthesis

The RCD and the MCB do not protect the same things or against the same threats. The RCD monitors [[desequilibrio_diferencial]] and protects people. The MCB monitors [[corriente_de_carga]] relative to [[corriente_nominal_del_magnetotermico]] and protects wiring. Knowing which physical quantity exceeds which threshold in each incident allows precise diagnosis, safe action, and avoidance of the dangerous decisions of raising ratings without technical justification.