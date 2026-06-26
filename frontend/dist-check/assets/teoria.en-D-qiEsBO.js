const e=`# Resistive Heating

Resistive heating is the most direct and transparent method of converting electricity into heat within a domestic space. Oil-filled radiators, electric convectors, quartz heaters, electric underfloor heating, and heated towel rails are its most common everyday manifestations. They all share the same fundamental physical principle: electric current passes through a high-resistance material and, through the Joule effect, electrical energy is dissipated as heat. The elegance of this system lies in its physical transparency: there are no thermodynamic cycles, no refrigerant fluids, no compressors; only the direct and nearly perfect conversion of one form of energy into another.

However, that apparent technical perfection conceals an economic trap worth understanding from a physics perspective. The fact that a resistive emitter converts virtually all the electricity it consumes into useful heat does not necessarily make it the best economic or energy option for seasonal heating. Understanding why requires mastering the relationships between [[emitter power|P]], [[effective usage time|t]], [[electrical consumption|E]], and [[useful heat|Q]], as well as understanding exactly what a [[COP]] equal to 1 means and why that, far from being an absolute advantage, can be the greatest economic challenge of this type of system.

## Conceptual context

Resistive heating operates on the principle that any electrical resistance, when traversed by current, dissipates energy as heat. This dissipation, known as the Joule effect, is an irreversible phenomenon from a thermodynamic standpoint: high-quality electrical energy (capable of performing mechanical work) degrades into low-quality thermal energy (diffuse heat). The law governing this process is expressed simply as the dissipation rate of [[emitter power|P]], which multiplies the operating time [[effective usage time|t]] to obtain the total [[electrical consumption|E]].

What distinguishes resistive heating from other heating technologies is precisely that there is no energy gain: every joule of electricity produces exactly one joule of heat. This contrasts radically with a heat pump, which can extract 3 or 4 joules of heat from the outdoor air for every electrical joule invested, thanks to a thermodynamic cycle that "leverages" the energy of the environment.

## 🟢 Essential level

To understand resistive heating, three concepts that are often confused must be clearly separated:

**Power [[P]]** is the rate at which the emitter consumes electricity. A 1.5 kW radiator consumes 1.5 kilowatts every second it operates. It is a fixed characteristic of the equipment that does not change with use. If the thermostat disconnects the device, [[P]] stops acting on the circuit; if it keeps it on continuously, [[P]] is constant.

**Effective time [[t]]** is the variable the user controls most freely. It is not measured in hours with the device switched on, but in hours with the resistance actually active. A radiator with a thermostat may be switched on for 8 hours but with the resistance active for only 5 of those hours. Those 5 hours are what determine the [[electrical consumption|E]].

**Consumption [[E]]** is the system's result: how much electrical energy the emitter has used in the analyzed period. It is exactly what the meter reads and what appears on the bill. The relationship between these three quantities is the simplest law of applied thermodynamics: [[electrical consumption|E]] is the product of [[emitter power|P]] by [[effective usage time|t]].

This relationship has a direct and powerful implication: in resistive heating, to halve consumption you can halve [[P]] (buy a less powerful emitter) or halve [[t]] (use it half the time). Both strategies are physically equivalent but have very different practical consequences for comfort.

The [[conversion efficiency|eta]] of resistive systems is extraordinarily high, typically between 0.95 and 1.0, meaning that virtually all electricity consumed reaches the space as heat.

## 🔵 Formal level

The fraction of [[electrical consumption|E]] that actually heats the room is the [[useful heat|Q]], obtained by applying the emitter's [[conversion efficiency|eta]].

The fundamental mathematical relationship is the definition of [[electrical consumption|E]] as the product of [[emitter power|P]] by [[effective usage time|t]]:

{{f:energia}}


Once consumption is known, the [[useful heat|Q]] delivered to the room is obtained by applying the emitter's [[conversion efficiency|eta]]:

{{f:calor_util}}

In practice, for domestic resistive emitters, [[conversion efficiency|eta]] ≈ 0.98, meaning [[useful heat|Q]] is virtually equal to [[electrical consumption|E]].

The [[coefficient of performance|COP]] of the system is defined as the ratio between [[useful heat|Q]] and the electrical energy invested [[E]]:

{{f:cop_resistiva}}

In ideal resistive heating, [[COP]] = [[Q]]/[[E]] ≈ 1. This equality is the most important conceptual key of the topic: there is no energy gain; each electrical kWh produces at most 1 thermal kWh. Compared to a heat pump that can reach [[COP]] = 4, the resistive system needs to consume 4 times more electricity for the same thermal result.

The formal analysis of the system has two complementary dimensions. First, the power dimension: [[emitter power|P]] determines the rate at which the room heats up. If [[P]] is insufficient to compensate for the building's thermal losses on a cold day, the setpoint temperature is never reached regardless of [[effective usage time|t]]. Second, the energy dimension: the [[electrical consumption|E]] accumulated over a season is the integral of the active [[P]] profile multiplied by [[effective usage time|t]], and directly determines the bill. The separation between these two dimensions — power for comfort, energy for cost — is the core of any formal analysis of a resistive heating system.

## 🔴 Structural level

At the structural level, analysis of resistive heating must consider its physical limits and the failure mechanisms of the simple model:

**Fundamental thermodynamic limit:** The [[COP]] of resistive heating cannot exceed 1 due to energy conservation. This is not a design flaw but a direct consequence of the first law of thermodynamics applied to direct conversion without a thermodynamic cycle. Any system claiming [[COP]] > 1 in pure resistive heating violates the laws of physics.

**Dependence on the building's thermal demand:** Total seasonal consumption depends not only on the emitter but on the building envelope. If the home has poor windows or insufficient insulation, the thermal demand the emitter must cover is much greater, increasing [[effective usage time|t]] and therefore [[electrical consumption|E]]. An envelope improvement that halves thermal demand halves consumption without changing the equipment.

**Electrical simultaneity:** Multiple resistive emitters operating simultaneously, together with other high-power appliances (electric cooker, washing machine, etc.), can exceed the contracted power or circuit limits. The sum of simultaneous [[P]] values is a safety constraint that the simple model does not address.

**Thermostat inertia:** The stationary model assumes steady-state operation. In practice, thermostat on-off cycles introduce variations that the stationary model simplifies by using [[t]] as "equivalent active hours."

## Deep physical interpretation

The causal chain in resistive heating follows a direct linear logic: if thermal demand increases (due to colder weather, poorer insulation, or more occupied hours), the thermostat keeps the resistance active for longer, increasing [[effective usage time|t]] and consequently [[electrical consumption|E]] and cost. There is no performance multiplier to break this chain; the [[COP]] is irreversibly equal to 1.

This analysis reveals that the two main levers for reducing expenditure are: (1) reducing the building's thermal demand by improving insulation and airtightness, and (2) reducing [[effective usage time|t]] by adjusting schedules, zoning, and setpoint temperature.

## Order of magnitude

In a 20 m² room in a temperate climate, the daily thermal demand in winter can be 5–10 kWh. With a 2 kW emitter and [[COP]] = 1, you will need between 2.5 and 5 effective operating hours to cover it. Over an entire 120-day season, this can represent 600–1200 kWh of electrical consumption, which at 0.22 EUR/kWh equals 132–264 EUR for that room alone.

## Personalized resolution method

To analyze a resistive heating system:
1. Identify each emitter with its nominal [[P]] and estimated daily effective [[t]].
2. Calculate [[electrical consumption|E]] per device and in total using the main formula.
3. Apply [[conversion efficiency|eta]] to obtain the real [[useful heat|Q]].
4. Calculate [[COP]] and compare it with alternative technologies.
5. Assess simultaneity by summing all simultaneously active [[P]] values.
6. Propose improvements: reduce [[t]] (schedules, thermostat), reduce demand (insulation), or migrate to technology with [[COP]] > 1.

## Special cases and extended example

Although the ideal model covers most domestic situations, there are variants that require additional consideration:

**Emitters with multiple power levels**: Some emitters have two or three settings (low, medium, high). In that case, the effective [[emitter power|P]] is the time-weighted average across settings, and total [[electrical consumption|E]] is the sum of partial consumptions at each level.

**Multiple emitters on the same circuit**: If several emitters share a circuit, the operational constraint is the sum of their simultaneous [[P]] values, which must not exceed the circuit capacity (typically 2.2–4.6 kW for 10–20 A circuits at 230 V). This constraint is independent of seasonal [[electrical consumption|E]] but determines which combinations are feasible.

**Quick verification example**: An emitter with [[P]] = 1.5 kW running [[t]] = 6 h/day for 30 days gives [[electrical consumption|E]] = 1.5 × 6 × 30 = 270 kWh. With [[conversion efficiency|eta]] = 0.97: [[useful heat|Q]] = 0.97 × 270 = 261.9 kWh. [[COP]] = 261.9 / 270 = 0.97. Cost: 270 × 0.22 = €59.4/month.

## Real student questions

- **If it converts almost 100% of electricity into heat, why is it expensive?** Because [[COP]] = 1 means you need exactly 1 electrical kWh for every thermal kWh you want. A heat pump with [[COP]] = 4 only needs 0.25 electrical kWh for the same heat, making it 4 times cheaper in energy terms.
- **Which matters more, [[P]] or [[t]]?** Both are mathematically equivalent, but in domestic use [[t]] is easier to control (schedules, thermostat) and usually offers more room for savings.
- **Can I compare resistive and heat pump heating by nominal power?** No. You must compare the [[electrical consumption|E]] needed to deliver the same [[useful heat|Q]] under the same conditions.

## Cross-cutting connections and study paths

- **Heat pump**: direct contrast with [[COP]] >> 1 for the same thermal service.
- **Efficiency in climate control**: seasonal framework for comparing both technologies.
- **Voltage and power at home**: basis for calculating [[P]] and circuit limits.
- **Cost of electricity**: economic impact of the calculated [[electrical consumption|E]].

## Final synthesis

Resistive heating is the most transparent system for understanding the relationships between [[emitter power|P]], [[effective usage time|t]], and [[electrical consumption|E]]. Its [[COP]] = 1 is not a flaw but its most pedagogically valuable characteristic: it clearly defines the energy floor from which any other heating technology must demonstrate its advantage. Understanding resistive heating well is the first step to rigorously evaluating the efficiency of any alternative system.
`;export{e as default};
