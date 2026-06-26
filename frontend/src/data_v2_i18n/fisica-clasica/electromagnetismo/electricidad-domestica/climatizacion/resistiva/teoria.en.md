## Conceptual context

## 🟢 Essential level

To understand resistive heating, three concepts that are often confused must be clearly separated:

**Power [[potencia_del_emisor]]** is the rate at which the emitter consumes electricity. A 1.5 kW radiator consumes 1.5 kilowatts every second it operates. It is a fixed characteristic of the equipment that does not change with use. If the thermostat disconnects the device, [[potencia_del_emisor]] stops acting on the circuit; if it keeps it on continuously, [[potencia_del_emisor]] is constant.

**Effective time [[tiempo_efectivo_de_uso]]** is the variable the user controls most freely. It is not measured in hours with the device switched on, but in hours with the resistance actually active. A radiator with a thermostat may be switched on for 8 hours but with the resistance active for only 5 of those hours. Those 5 hours are what determine the [[consumo_electrico]].

**Consumption [[consumo_electrico]]** is the system's result: how much electrical energy the emitter has used in the analyzed period. It is exactly what the meter reads and what appears on the bill. The relationship between these three quantities is the simplest law of applied thermodynamics: [[consumo_electrico]] is the product of [[potencia_del_emisor]] by [[tiempo_efectivo_de_uso]].

This relationship has a direct and powerful implication: in resistive heating, to halve consumption you can halve [[potencia_del_emisor]] (buy a less powerful emitter) or halve [[tiempo_efectivo_de_uso]] (use it half the time). Both strategies are physically equivalent but have very different practical consequences for comfort.

The [[conversion efficiency|eta]] of resistive systems is extraordinarily high, typically between 0.95 and 1.0, meaning that virtually all electricity consumed reaches the space as heat.

## 🔵 Formal level

The fraction of [[consumo_electrico]] that actually heats the room is the [[calor_util]], obtained by applying the emitter's [[conversion efficiency|eta]].

The fundamental mathematical relationship is the definition of [[consumo_electrico]] as the product of [[potencia_del_emisor]] by [[tiempo_efectivo_de_uso]]:

{{f:energia}}

Once consumption is known, the [[calor_util]] delivered to the room is obtained by applying the emitter's [[conversion efficiency|eta]]:

{{f:calor_util}}

In practice, for domestic resistive emitters, [[conversion efficiency|eta]] ≈ 0.98, meaning [[calor_util]] is virtually equal to [[consumo_electrico]].

The [[coeficiente_de_rendimiento]] of the system is defined as the ratio between [[calor_util]] and the electrical energy invested [[consumo_electrico]]:

{{f:cop_resistiva}}

In ideal resistive heating, [[coeficiente_de_rendimiento]] = [[calor_util]]/[[consumo_electrico]] ≈ 1. This equality is the most important conceptual key of the topic: there is no energy gain; each electrical kWh produces at most 1 thermal kWh. Compared to a heat pump that can reach [[coeficiente_de_rendimiento]] = 4, the resistive system needs to consume 4 times more electricity for the same thermal result.

The formal analysis of the system has two complementary dimensions. First, the power dimension: [[potencia_del_emisor]] determines the rate at which the room heats up. If [[potencia_del_emisor]] is insufficient to compensate for the building's thermal losses on a cold day, the setpoint temperature is never reached regardless of [[tiempo_efectivo_de_uso]]. Second, the energy dimension: the [[consumo_electrico]] accumulated over a season is the integral of the active [[potencia_del_emisor]] profile multiplied by [[tiempo_efectivo_de_uso]], and directly determines the bill. The separation between these two dimensions — power for comfort, energy for cost — is the core of any formal analysis of a resistive heating system.

## 🔴 Structural level

At the structural level, analysis of resistive heating must consider its physical limits and the failure mechanisms of the simple model:

**Fundamental thermodynamic limit:** The [[coeficiente_de_rendimiento]] of resistive heating cannot exceed 1 due to energy conservation. This is not a design flaw but a direct consequence of the first law of thermodynamics applied to direct conversion without a thermodynamic cycle. Any system claiming [[coeficiente_de_rendimiento]] > 1 in pure resistive heating violates the laws of physics.

**Dependence on the building's thermal demand:** Total seasonal consumption depends not only on the emitter but on the building envelope. If the home has poor windows or insufficient insulation, the thermal demand the emitter must cover is much greater, increasing [[tiempo_efectivo_de_uso]] and therefore [[consumo_electrico]]. An envelope improvement that halves thermal demand halves consumption without changing the equipment.

**Electrical simultaneity:** Multiple resistive emitters operating simultaneously, together with other high-power appliances (electric cooker, washing machine, etc.), can exceed the contracted power or circuit limits. The sum of simultaneous [[potencia_del_emisor]] values is a safety constraint that the simple model does not address.

**Thermostat inertia:** The stationary model assumes steady-state operation. In practice, thermostat on-off cycles introduce variations that the stationary model simplifies by using [[tiempo_efectivo_de_uso]] as "equivalent active hours."

## Deep physical interpretation

The causal chain in resistive heating follows a direct linear logic: if thermal demand increases (due to colder weather, poorer insulation, or more occupied hours), the thermostat keeps the resistance active for longer, increasing [[tiempo_efectivo_de_uso]] and consequently [[consumo_electrico]] and cost. There is no performance multiplier to break this chain; the [[coeficiente_de_rendimiento]] is irreversibly equal to 1.

This analysis reveals that the two main levers for reducing expenditure are: (1) reducing the building's thermal demand by improving insulation and airtightness, and (2) reducing [[tiempo_efectivo_de_uso]] by adjusting schedules, zoning, and setpoint temperature.

## Order of magnitude

In a 20 m² room in a temperate climate, the daily thermal demand in winter can be 5–10 kWh. With a 2 kW emitter and [[coeficiente_de_rendimiento]] = 1, you will need between 2.5 and 5 effective operating hours to cover it. Over an entire 120-day season, this can represent 600–1200 kWh of electrical consumption, which at 0.22 EUR/kWh equals 132–264 EUR for that room alone.

## Personalized resolution method

To analyze a resistive heating system:
1. Identify each emitter with its nominal [[potencia_del_emisor]] and estimated daily effective [[tiempo_efectivo_de_uso]].
2. Calculate [[consumo_electrico]] per device and in total using the main formula.
3. Apply [[conversion efficiency|eta]] to obtain the real [[calor_util]].
4. Calculate [[coeficiente_de_rendimiento]] and compare it with alternative technologies.
5. Assess simultaneity by summing all simultaneously active [[potencia_del_emisor]] values.
6. Propose improvements: reduce [[tiempo_efectivo_de_uso]] (schedules, thermostat), reduce demand (insulation), or migrate to technology with [[coeficiente_de_rendimiento]] > 1.

## Special cases and extended example

Although the ideal model covers most domestic situations, there are variants that require additional consideration:

**Emitters with multiple power levels**: Some emitters have two or three settings (low, medium, high). In that case, the effective [[potencia_del_emisor]] is the time-weighted average across settings, and total [[consumo_electrico]] is the sum of partial consumptions at each level.

**Multiple emitters on the same circuit**: If several emitters share a circuit, the operational constraint is the sum of their simultaneous [[potencia_del_emisor]] values, which must not exceed the circuit capacity (typically 2.2–4.6 kW for 10–20 A circuits at 230 V). This constraint is independent of seasonal [[consumo_electrico]] but determines which combinations are feasible.

**Quick verification example**: An emitter with [[potencia_del_emisor]] = 1.5 kW running [[tiempo_efectivo_de_uso]] = 6 h/day for 30 days gives [[consumo_electrico]] = 1.5 × 6 × 30 = 270 kWh. With [[conversion efficiency|eta]] = 0.97: [[calor_util]] = 0.97 × 270 = 261.9 kWh. [[coeficiente_de_rendimiento]] = 261.9 / 270 = 0.97. Cost: 270 × 0.22 = €59.4/month.

## Real student questions

- **If it converts almost 100% of electricity into heat, why is it expensive?** Because [[coeficiente_de_rendimiento]] is equal to 1 means you need exactly 1 electrical kWh for every thermal kWh you want. A heat pump with [[coeficiente_de_rendimiento]] is equal to 4 only needs 0.25 electrical kWh for the same heat, making it 4 times cheaper in energy terms.
- **Which matters more, [[potencia_del_emisor]] or [[tiempo_efectivo_de_uso]]?** Both are mathematically equivalent, but in domestic use [[tiempo_efectivo_de_uso]] is easier to control (schedules, thermostat) and usually offers more room for savings.
- **Can I compare resistive and heat pump heating by nominal power?** No. You must compare the [[consumo_electrico]] needed to deliver the same [[calor_util]] under the same conditions.

## Cross-cutting connections and study paths

- **Heat pump**: direct contrast with [[coeficiente_de_rendimiento]] >> 1 for the same thermal service.
- **Efficiency in climate control**: seasonal framework for comparing both technologies.
- **Voltage and power at home**: basis for calculating [[potencia_del_emisor]] and circuit limits.
- **Cost of electricity**: economic impact of the calculated [[consumo_electrico]].

## Final synthesis

Resistive heating is the most transparent system for understanding the relationships between [[potencia_del_emisor]], [[tiempo_efectivo_de_uso]], and [[consumo_electrico]]. Its [[coeficiente_de_rendimiento]] = 1 is not a flaw but its most pedagogically valuable characteristic: it clearly defines the energy floor from which any other heating technology must demonstrate its advantage. Understanding resistive heating well is the first step to rigorously evaluating the efficiency of any alternative system.