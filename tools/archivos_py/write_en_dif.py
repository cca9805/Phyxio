from pathlib import Path

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/diferencial-y-magnetotermico')

# ── teoria.en.md ──────────────────────────────────────────────────────────────
teoria_en = '''# Differential and Thermal-Magnetic Breakers

In a domestic consumer unit, two types of protection devices coexist that are frequently confused: the residual current device (RCD/differential) and the thermal-magnetic circuit breaker (MCB). Although both interrupt the supply when they trip, they monitor entirely different physical quantities and respond to different threats. The [[I_delta]] that the RCD measures is not the total circuit [[I]], but the imbalance between phase and neutral conductors. The [[margen_termico]] that determines when the MCB trips depends on whether [[I]] exceeds [[I_n]]. Understanding this distinction is the first step toward correctly diagnosing any electrical incident in the home.

## Conceptual context

The consumer unit organises the distribution of energy into independent circuits and protects each one with at least one MCB. The RCD, generally one per group of circuits, adds an additional layer of protection against leakage current. The most frequent confusion is treating these two devices as equivalent or interchangeable, when in fact they measure completely different things.

The MCB operates by comparing [[I]] with the nominal rating [[I_n]]. If the current exceeds that value for long enough, the bimetallic element heats up, deforms, and opens the circuit. For a short circuit, the magnetic element acts in milliseconds. The MCB does not measure whether there is leakage to earth: it only monitors the total magnitude of [[I]] in its circuit.

The RCD operates by measuring [[I_fase]] and [[I_neutro]] simultaneously. Under normal conditions without earth leakage, all current entering via the phase returns via the neutral: [[I_delta]] is practically zero. If there is a leakage, part of the current returns via an alternative path and [[I_delta]] becomes non-zero. When [[I_delta]] exceeds [[I_dn]], the RCD trips. This mechanism is independent of the total magnitude of [[I]].

## 🟢 Essential level

The RCD does not limit the power of the home or protect wiring against overloads. Its sole function is to detect imbalance between phase and neutral. If [[I_delta]] exceeds [[I_dn]], it cuts the supply to protect people against indirect electrical contact.

The MCB does not detect earth leakage or protect people directly. Its function is to protect wiring against excess [[I]] and the heating that excess produces. When [[I]] exceeds [[I_n]] sustainably or when there is a short circuit, it interrupts the circuit.

An important consequence: there can be real electrical risk without either device tripping. If there is a balanced overload without leakage, the RCD does not act. If the leakage current is small but constant at a deteriorated connection point, local heat may be significant without [[I]] exceeding [[I_n]].

The phrase "nothing tripped" is not evidence of safety. It is simply evidence that [[I]] did not exceed [[I_n]] and that [[I_delta]] did not exceed [[I_dn]] at that moment.

## 🔵 Formal level

The current flowing through a circuit when a load is connected is:

{{f:corriente_carga}}

This [[I]] is compared with [[I_n]] of the MCB. If [[I]] exceeds [[I_n]], there is an overload. To quantify what fraction of the nominal capacity is being used, the [[margen_termico]] is defined:

{{f:ratio_termico}}

Values of [[margen_termico]] equal to or greater than 1 indicate that the MCB is in the potential trip zone.

The imbalance between conductors measured by the RCD is:

{{f:desequilibrio}}

where [[I_fase]] is the current measured in the phase conductor and [[I_neutro]] is the current measured in the neutral conductor. When [[margen_dif]] reaches 1, the RCD trips:

{{f:ratio_diferencial}}

The approximate maximum power that can be connected before the MCB trips is:

{{f:potencia_limite}}

## 🔴 Structural level

Each protection responds to an independent variable, so their operating domains are complementary but not overlapping:

- **Balanced overload:** [[I]] exceeds [[I_n]], [[I_delta]] is small. The MCB trips; the RCD may not.
- **Earth leakage:** [[I_delta]] exceeds [[I_dn]], but [[I]] may be within rating. The RCD trips; the MCB may not.
- **Local thermal fault:** degraded connection with high contact resistance. Local heat dissipation is high but [[I]] does not exceed [[I_n]] and [[I_delta]] is small. Neither device trips, but there is real fire risk.

The model of two independent protections is valid for single-phase residential analysis with a standard consumer unit. It loses accuracy in installations with high harmonic content or when the RCD is type A rather than type AC.

## Deep physical interpretation

When asking "why did one trip and not the other?", the correct answer requires identifying which physical quantity exceeded its threshold. If the RCD tripped, there was a significant [[I_delta]] difference between [[I_fase]] and [[I_neutro]]. If the MCB tripped, [[I]] exceeded [[I_n]] in that specific circuit.

The [[margen_dif]] and [[margen_termico]] are diagnostic tools: a [[margen_termico]] of 0.85 indicates the circuit is operating at 85 % of nominal capacity. A [[margen_dif]] of 0.6 indicates current leakage is 60 % of the threshold: it does not trip, but signals something is not in ideal condition.

## Order of magnitude

In a typical Spanish residential installation: [[I_dn]] = 30 mA for a high-sensitivity RCD; typical [[I_n]] values are 10 A for lighting, 16 A for general sockets, 25 A for kitchen circuits. For [[V]] = 230 V, the [[P_lim]] of a 16 A circuit is approximately 3.7 kW. A leakage of 30 mA at 230 V dissipates only 6.9 W, but is sufficient to be lethal if it flows through the human body.

## Personalized resolution method

To diagnose an incident with protection devices:

1. Identify which device tripped (RCD, MCB, or neither).
2. Estimate the circuit [[I]] using known [[P]] and nominal [[V]].
3. Calculate [[margen_termico]] = [[I]] / [[I_n]] and compare with 1.
4. If [[I_fase]] and [[I_neutro]] measurements are available, calculate [[I_delta]] and [[margen_dif]].
5. If there are thermal symptoms without a trip, inspect connection points and check contact resistance.
6. Correct the root cause: redistribute loads, repair leakage, replace degraded connection.
7. Verify in real operation; do not accept "it doesn't trip now" as the only success criterion.

## Special cases and extended example

**Case A — Pure overload.** 230 V circuit with 16 A MCB. Total [[P]] = 4 800 W connected. [[I]] = 4800 / 230 = 20.9 A. [[margen_termico]] = 20.9 / 16 = 1.30 > 1: 30 % overload. MCB expected to trip within minutes.

**Case B — Leakage without overload.** Measured [[I_fase]] = 9.62 A and [[I_neutro]] = 9.57 A. [[I_delta]] = |9.62 − 9.57| = 0.05 A = 50 mA. With [[I_dn]] = 30 mA, [[margen_dif]] = 50/30 = 1.67 > 1: RCD expected to trip although total [[I]] does not exceed any rating.

**Case C — Thermal fault without trip.** Circuit with [[I]] = 13 A and 16 A MCB. [[margen_termico]] = 0.81: within rating. No appreciable leakage. However, a loose connection has elevated contact resistance and dissipates heat locally. Neither protection trips, but the fault exists.

## Real student questions

**If the RCD trips, should I raise its threshold [[I_dn]]?** No. Raising [[I_dn]] removes personal protection. The source of [[I_delta]] must be identified and corrected.

**If the MCB trips, is it enough to fit one with a higher [[I_n]]?** Only if the wiring, installation, and general protection permit it. Changing [[I_n]] without recalculating the entire line may leave the conductor unprotected.

**What does not trip the RCD?** Balanced overloads where [[I_fase]] ≈ [[I_neutro]], and some local thermal faults without appreciable leakage.

## Cross-cutting connections and study paths

This leaf connects directly with **electrical safety** (effect of protections on human risk), with **sockets and outlets** (local thermal faults with or without tripping), and with **voltage and power at home** (basis for estimating [[I]] of each circuit).

Recommended study path: **electric current → resistance and Ohm's law → voltage and power at home → differential and thermal-magnetic breakers (this leaf) → electrical safety.**

## Final synthesis

The RCD and the MCB do not protect the same things or against the same threats. The RCD monitors [[I_delta]] and protects people. The MCB monitors [[I]] relative to [[I_n]] and protects wiring. Knowing which physical quantity exceeds which threshold in each incident allows precise diagnosis, safe action, and avoidance of the dangerous decisions of raising ratings without technical justification.
'''

# ── modelos.en.md ─────────────────────────────────────────────────────────────
modelos_en = '''# Models of Differential and Thermal-Magnetic Protection

## 1. Ideal model of two independent protections

The simplified model represents the domestic consumer unit with two strictly separate protection functions: the MCB acts as a current [[I]] limiter relative to its rating [[I_n]], and the RCD acts as a detector of imbalance [[I_delta]] relative to its sensitivity [[I_dn]]. Both protections are independent: the actuation of one does not imply or replace the other.

This ideal model allows quick classification of the incident type based on which device tripped, without advanced instrumental measurement. It is sufficiently accurate for routine residential diagnostic analysis when the installed ratings and approximate circuit load are known.

**Quantitative MCB trip condition:** [[margen_termico]] = [[I]] / [[I_n]] must be greater than or equal to 1 for guaranteed long-term tripping. For short circuits, current may exceed [[I_n]] by a factor of 10 or more and tripping is instantaneous.

**Quantitative RCD trip condition:** [[margen_dif]] = [[I_delta]] / [[I_dn]] must be greater than or equal to 1. For a 30 mA RCD, any leakage generating [[I_delta]] ≥ 30 mA should cause tripping in under 300 ms per standard.

## 2. Extended model with time and environment

The extended model incorporates three additional variables that the ideal model ignores: trip time, bimetallic temperature, and environmental conditions. An MCB that has been operating near its limit for hours has a warmer bimetallic element and may trip at currents slightly below [[I_n]]. An RCD in a very humid environment may have distributed leakage currents throughout the installation that, when summed, exceed [[I_dn]] even though none individually is significant.

**When to switch to the extended model:** when the ideal model does not reproduce the observed trip pattern, when there are repeated trips with loads within rating, or when symptoms are seasonal or temperature/humidity dependent.

## 3. Quantitative domain of validity

The ideal model is valid for standard single-phase residential analysis when:
- The approximate circuit load is known (within ±20 %).
- MCB and RCD ratings are standard (10 A, 16 A, 25 A; 30 mA, 300 mA).
- There is no significant harmonic presence.
- Ambient temperature is in the normal range (10–40 °C).

It loses accuracy in installations with variable-frequency drives, high-power switching power supplies, or environments with vibrations that deteriorate connections faster than usual.

## 4. Model failure signals

Signs that the ideal model is insufficient:
- Repeated tripping with no apparent cause when environmental conditions change.
- Absence of tripping with clear thermal symptoms at connection points.
- Circular diagnosis: protection devices are reset without identifying the causative physical variable.
- Rating increases as a "solution" that hides the real problem without correcting it.
- Selective trips affecting only one specific appliance and not the rest of the circuit.

## 5. Comparison with alternative models

**Binary trip / no-trip model:** useful for initial incident classification but does not allow margin quantification or future behaviour prediction.

**Time-current curve model:** necessary for installations where selectivity between series MCBs is critical. Allows prediction of whether the circuit MCB trips before the main MCB.

**Instrumented consumer unit model:** necessary for advanced diagnosis with network analysers. Provides [[I_fase]], [[I_neutro]], harmonics, power factor, and [[I_delta]] in real time.

Practical rule: always separate fault by overcurrent, differential leakage, and local thermal defect. Each requires a different instrument and a different corrective action.
'''

# ── errores.en.md ─────────────────────────────────────────────────────────────
errores_en = '''# Common Errors in Differential and MCB Analysis

## Conceptual errors

### Error: confusing the functions of RCD and MCB

**Description:** Believing the RCD protects against overload, or that the MCB detects earth leakage. This leads to changing the wrong device when an incident occurs.

**Correction:** The RCD only monitors [[I_delta]] = |[[I_fase]] − [[I_neutro]]|. The MCB only monitors [[I]] relative to [[I_n]]. Neither performs the other's function.

**Indicator:** The student says "I raised the RCD because the cable was getting hot." That problem required checking [[I]] against [[I_n]], not acting on the RCD.

### Error: assuming "nothing tripped" means there is no risk

**Description:** Interpreting the absence of tripping as evidence of electrical safety. This ignores the third scenario: local thermal defect without tripping.

**Correction:** There can be fire risk from a degraded connection if [[I]] < [[I_n]] and [[I_delta]] < [[I_dn]] simultaneously. The absence of tripping only guarantees those two conditions were not exceeded at that instant.

## Model errors

### Error: analysing with total household power instead of the specific circuit

**Description:** Comparing total connected household power with the main MCB, ignoring that each circuit has its own MCB with its own [[I_n]].

**Correction:** Locate the affected circuit, estimate its [[I]] using that circuit's specific [[P]] and [[V]] = 230 V, and compare with that circuit's [[I_n]].

**Numerical example:** Household with 6 kW total connected, but the trip is on the kitchen circuit with a 25 A MCB. The relevant [[I]] is the kitchen circuit's, not the total.

### Error: comparing [[I_delta]] in mA with [[I]] in A without converting

**Description:** Mixing units when comparing differential imbalance with load current. For example: "the current is 8 A and the RCD is 30, so there is plenty of margin."

**Correction:** The differential threshold [[I_dn]] = 30 mA = 0.030 A. Load [[I]] may be 8 A. These are physically distinct quantities that are not compared directly. The [[I_delta]] that trips the RCD is typically 0.3 % or less of the total circuit [[I]].

## Interpretation errors

### Error: raising [[I_dn]] or [[I_n]] as a solution to repeated tripping

**Description:** When faced with repeated trips, replacing the devices with higher-rated versions without identifying the physical cause.

**Correction:** Repeated RCD tripping indicates systematically elevated [[I_delta]]: there is a persistent leakage. Repeated MCB tripping indicates [[I]] consistently near or above [[I_n]]: there is a real overload. The solution in both cases is to correct the cause, not increase the threshold.

**Indicator:** The installer says "I fitted a 300 mA RCD so it stops tripping so much." That can eliminate personal protection against a dangerous leakage.

### Error: diagnosing only from the symptom without measuring the causative quantity

**Description:** Acting directly on the device that tripped without measuring [[I]], [[I_fase]], [[I_neutro]], or [[I_delta]] to identify the unbalanced physical variable.

**Correction:** Correct diagnosis requires at least estimating [[I]] = [[P]] / [[V]] and comparing with [[I_n]], and if possible measuring [[I_delta]] and calculating [[margen_dif]].

## Self-check rule

Before resetting or modifying any protection device, verify:
1. Which protection tripped: RCD, MCB, or neither?
2. What is the estimated [[I]] of the affected circuit and how does it compare with [[I_n]]?
3. Is there evidence of elevated [[I_delta]]: appliance casing energised, leakage symptoms?
4. Is there local thermal evidence: smell, discolouration, heat at connection point?
5. Has the physical cause been identified and corrected before resetting?
'''

# ── ejemplos.en.md ────────────────────────────────────────────────────────────
ejemplos_en = '''# Examples — Differential and Thermal-Magnetic Breakers

# Exam-style example

## Statement

A single-phase circuit at [[V]] = 230 V has a [[I_n]] = 16 A MCB and a [[I_dn]] = 30 mA RCD installed. Equipment with total [[P]] = 4 400 W is connected simultaneously. Additionally, [[I_fase]] = 9.62 A and [[I_neutro]] = 9.57 A are measured in another circuit of the same consumer unit.

Required: (a) calculate [[I]] of the first circuit and determine whether there is overload; (b) calculate [[I_delta]] of the second circuit and determine whether the RCD trips; (c) calculate [[margen_termico]] and [[margen_dif]] for both cases.

## Data

- [[V]] = 230 V
- [[I_n]] = 16 A (MCB of overloaded circuit)
- [[I_dn]] = 30 mA = 0.030 A (RCD)
- [[P]] = 4 400 W (overloaded circuit)
- [[I_fase]] = 9.62 A (leakage circuit)
- [[I_neutro]] = 9.57 A (leakage circuit)

## System definition

System: single-phase residential consumer unit with standard MCB and high-sensitivity RCD. State variables: [[I]] in each circuit, [[I_delta]] between phase and neutral.

## Physical model

The ideal model of two independent protections is applied. The MCB trips when [[margen_termico]] = [[I]] / [[I_n]] ≥ 1. The RCD trips when [[margen_dif]] = [[I_delta]] / [[I_dn]] ≥ 1. Both conditions are independent of each other.

## Model justification

The simplified model is valid because the ratings are standard, the loads are approximately resistive, and no special environmental conditions are described. The time-current curve model is not required because the objective is to determine whether tripping occurs, not to predict the exact trip time.

## Symbolic solution

Load current from [[P]] and [[V]]:

{{f:corriente_carga}}

Thermal load ratio to evaluate MCB overload:

{{f:ratio_termico}}

Differential imbalance between [[I_fase]] and [[I_neutro]]:

{{f:desequilibrio}}

Differential ratio to evaluate RCD tripping:

{{f:ratio_diferencial}}

MCB reference power limit:

{{f:potencia_limite}}

## Numerical substitution

Load circuit current:

{{f:corriente_carga}}

With [[P]] = 4 400 W and [[V]] = 230 V: [[I]] = 4400 / 230 = **19.1 A**.

[[margen_termico]] = 19.1 / 16 = **1.19** — 19 % overload, MCB trip expected.

Second circuit imbalance:

{{f:desequilibrio}}

[[I_delta]] = |9.62 − 9.57| = **0.05 A = 50 mA**.

[[margen_dif]] = 50 mA / 30 mA = **1.67** — threshold exceeded, RCD trip expected.

[[P_lim]] = 230 × 16 = **3 680 W** — approximate maximum power before overload.

## Dimensional validation

- [[I]]: W / V = A. Correct.
- [[I_delta]]: A − A = A. Correct.
- [[margen_termico]]: A / A = dimensionless. Correct.
- [[margen_dif]]: A / A = dimensionless. Correct.
- [[P_lim]]: V × A = W. Correct.

## Physical interpretation

A [[margen_termico]] of 1.19 indicates that [[I]] = 19.1 A exceeds the 16 A rating. The MCB will trip within minutes if the load is maintained. The RCD of that circuit does not trip because there is no imbalance between [[I_fase]] and [[I_neutro]].

In the second circuit, the total [[I]] (≈ 9.6 A) is well below any standard MCB rating. However, the 50 mA [[I_delta]] exceeds the 30 mA [[I_dn]]. This means 50 mA is flowing via an unintended path: an earth leakage exists. The RCD will trip. The MCB will not trip because the total [[I]] is small.

## Order-of-magnitude validation

For a 230 V circuit with [[P]] = 4 400 W, the order of magnitude of [[I]] is clearly above 16 A (since 16 A × 230 V = 3 680 W < 4 400 W). The result of 19.1 A is consistent. The 50 mA [[I_delta]] represents only 0.52 % of the total [[I]] of 9.6 A in the second circuit, illustrating the high sensitivity of the standard RCD.

---

# Real-world application example

## Context

A user reports that the RCD in their home trips intermittently, mainly in winter when using the bathroom heater. The bathroom circuit MCB (16 A) has never tripped. The goal is to diagnose the cause and calculate the safety margins.

## Physical estimation

The bathroom heater has [[P]] = 1 500 W at [[V]] = 230 V. Expected [[I]] = 1 500 / 230 ≈ 6.5 A, well below [[I_n]] = 16 A: [[margen_termico]] ≈ 0.41. No MCB overload. The problem is differential: the RCD trips because [[I_delta]] exceeds 30 mA when the heater is on.

## Diagnostic resolution

[[I]] = 1 500 / 230 = **6.52 A** — [[margen_termico]] = 6.52 / 16 = 0.41. No overload.

For RCD to trip: [[I_delta]] ≥ 0.030 A. Since [[I_fase]] ≈ 6.52 A, the [[I_delta]] causing the trip is at least 0.030 A, representing 0.46 % of total [[I]]. This small fraction can be generated by insulation degradation in a damp heater.

[[margen_dif]] = [[I_delta]] / 0.030. If [[I_delta]] = 35 mA → [[margen_dif]] = 1.17: trips. If [[I_delta]] = 25 mA → [[margen_dif]] = 0.83: does not trip.

## Interpretation

The seasonal pattern (more trips in winter, with the heater on) points to insulation degradation that depends on temperature or humidity. In cold weather, the heater has colder resistances at startup and there may be internal condensation. The leakage grows until it exceeds [[I_dn]].

The correct action is to inspect the heater and its socket, not to modify [[I_dn]]. Raising [[I_dn]] to 300 mA would eliminate personal protection against a leakage that may become dangerous.
'''

# ── historia.en.md ────────────────────────────────────────────────────────────
historia_en = '''# History of Differential and Thermal-Magnetic Protection

## 1. The historical unsolved problem

For decades, domestic electrical protection was limited to fuses that only responded to extreme short-circuit currents. Moderate overloads and earth leakage could persist for long periods without anything acting. Incidents from indirect electrical contact and fires from degraded connections were frequent and difficult to prevent with available instruments.

## 2. What was not understood before

Before the standardisation of differential protection, the distinction between protection of people and protection of installations was conceptually confused. Consumer units were treated as a "black box" that either tripped or did not, without identifying which physical quantity was out of range. The usual response was to act by trial and error: reset, wait, and change the fuse if it tripped again.

## 3. The conceptual shift

The introduction of standardised MCBs in the second half of the twentieth century made it possible to associate the trip with a measurable physical current: if [[I]] exceeded [[I_n]] for long enough, the bimetallic element acted reproducibly. This transformed diagnosis: instead of asking "why did the box trip?", one could ask "which circuit had elevated [[I]] and why?".

The generalisation of high-sensitivity RCDs (30 mA) in residential installations, driven by regulations such as the Low Voltage Electrical Regulations (REBT in Spain), added a protection layer specific to people. This protection required understanding [[I_delta]] as a quantity independent of total [[I]] — a conceptual leap that still generates confusion today.

## 4. Conceptual evolution

The focus of residential electrical analysis shifted from "what tripped?" to "which physical quantity exceeded which threshold?". This shift made it possible to separate three types of problems: overcurrent ([[I]] > [[I_n]]), differential leakage ([[I_delta]] > [[I_dn]]), and local thermal defect without tripping. Each type requires a different instrument and a different correction.

## 5. Connection with current technology

Modern smart consumer unit monitors measure [[I_fase]], [[I_neutro]], and [[I_delta]] in real time and log events. This allows detection of patterns: an installation that habitually has [[margen_dif]] at 0.7 and rises to 0.9 in humid seasons indicates progressive degradation before the first trip. The transition from reactive protection to predictive maintenance is the next step in residential electrical management.
'''

# ── aplicaciones.en.md ────────────────────────────────────────────────────────
aplicaciones_en = '''# Applications of Differential and MCB Analysis

## 1. Diagnosing consumer units with repeated trips

When an RCD or MCB trips repeatedly, the analysis of [[I]], [[I_delta]], [[margen_termico]], and [[margen_dif]] allows distinction between three fundamentally different causes: circuit overload, real earth leakage, or apparent tripping due to environmental conditions. Without this analysis, the usual response is to change the device that tripped, which resolves the symptom but not the cause.

The practical application consists of measuring [[I]] with a clamp meter during normal use, calculating [[margen_termico]] = [[I]] / [[I_n]], and comparing with 1. If [[margen_termico]] < 0.85, the cause of the trip is not sustained overload: look for startup transients or a differential cause.

## 2. Sizing in home renovations

When adding new loads or extending circuits, the analysis of [[P_lim]] = [[V]] × [[I_n]] allows deciding whether the existing circuit has sufficient capacity or requires a new MCB with higher [[I_n]]. The practical rule is that the sum of [[I]] of the planned loads should not exceed 80 % of [[I_n]] for a safe operating margin: [[margen_termico]] ≤ 0.80 under normal use conditions.

## 3. Incidents in damp areas

Seasonal differential trips — more frequent in winter or with rain — typically correspond to insulation degradation that increases [[I_delta]] as humidity rises. Analysis of [[margen_dif]] under different environmental conditions allows confirming this diagnosis without dismantling the entire installation.

## 4. Verification before commissioning

In new installations or after renovations, verify that [[margen_termico]] and [[margen_dif]] are within safe margins before connecting the definitive load. A [[margen_dif]] greater than 0.5 with installation on no-load indicates residual leakage in the wiring or connected appliances that must be corrected before first use.

## 5. Technical training and safety incident resolution

This analysis is the basis for any electrical incident response protocol in the home. Knowing that [[I_delta]] < [[I_dn]] does not guarantee absence of local thermal defect, and that [[I]] < [[I_n]] does not guarantee absence of significant leakage, are two principles that radically change how the safety of an installation is evaluated.
'''

files_en = {
    'teoria.en.md': teoria_en,
    'modelos.en.md': modelos_en,
    'errores.en.md': errores_en,
    'ejemplos.en.md': ejemplos_en,
    'historia.en.md': historia_en,
    'aplicaciones.en.md': aplicaciones_en,
}

for name, content in files_en.items():
    p = base / name
    p.write_text(content, encoding='utf-8')
    words = len(content.split())
    print(f'{name}: {words} words')
