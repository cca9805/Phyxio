## Conceptual context

A switch is a device that opens or closes an electrical circuit mechanically or electronically. In a domestic installation, wall switches control lights; appliance switches control motors and heating elements; thermostats are temperature-controlled switches. In all these cases, the physical function is the same: to allow or cut the flow of current [[corriente_de_maniobra]] between the supply voltage [[tension_de_alimentacion]] and the load of power [[potencia_de_la_carga]].

The ideal switch does not exist in practice. A real switch presents in ON state (closed) a non-zero resistance [[resistencia_en_estado_on]] that generates a loss [[perdida_resistiva_en_on]] by the Joule effect. That heat is dissipated in the metallic contacts of the switch. If [[perdida_resistiva_en_on]] is large enough or the conduction time [[t_on]] is long enough, the accumulated energy [[energia_disipada_en_conduccion]] can degrade the contacts, reduce the switch service life, and in extreme cases create a fire risk.

## 🟢 Essential level

A switch has two states: OFF (open, no current) and ON (closed, with current [[corriente_de_maniobra]]). When ON, the current demanded by a load of power [[potencia_de_la_carga]] connected to voltage [[tension_de_alimentacion]] is:

From [[potencia_de_la_carga]] and [[tension_de_alimentacion]], the switching current [[corriente_de_maniobra]] of the switch is obtained.

If the switch has contact resistance [[resistencia_en_estado_on]], that current produces a local loss:

With that [[corriente_de_maniobra]] and the contact [[resistencia_en_estado_on]], the local loss [[perdida_resistiva_en_on]] is proportional to the square of [[corriente_de_maniobra]].

A quality domestic switch has very small [[resistencia_en_estado_on]] — in the order of milliohms — so [[perdida_resistiva_en_on]] is usually negligible. An aged, oxidised or poor-quality switch can have [[resistencia_en_estado_on]] in tenths of an ohm, making [[perdida_resistiva_en_on]] noticeable even with moderate currents.

## 🔵 Formal level

The complete causal chain starts from circuit data. The voltage [[tension_de_alimentacion]] and load power [[potencia_de_la_carga]] determine the switching current [[corriente_de_maniobra]] of the switch:

{{f:corriente}}

With that [[corriente_de_maniobra]] and the contact [[resistencia_en_estado_on]] of the switch, the resistive loss is:

{{f:perdida_on}}

If the switch operates for a time [[t_on]], the energy dissipated in its contacts is:

{{f:energia_on}}

The quadratic dependence [[perdida_resistiva_en_on]] ∝ [[corriente_de_maniobra]]² has important implications: a contact with moderate [[resistencia_en_estado_on]] can dissipate watts when current is high. For [[corriente_de_maniobra]] = 4 A and [[resistencia_en_estado_on]] = 0.05 Ω, the loss is 0.8 W — small but noticeable in continuous use. This value grows quadratically with current.

The quadratic dependence of [[perdida_resistiva_en_on]] on [[corriente_de_maniobra]] means doubling the current quadruples the loss. A light switch (60 W load, [[corriente_de_maniobra]] ≈ 0.26 A) dissipates 270 times less than a heater switch (2,000 W load, [[corriente_de_maniobra]] ≈ 8.7 A) if both have the same [[resistencia_en_estado_on]], even though they look like similar devices.

The three output quantities of the analysis — [[perdida_resistiva_en_on]], [[energia_disipada_en_conduccion]], and [[corriente_de_maniobra]] — form a diagnostic hierarchy: [[corriente_de_maniobra]] indicates whether the switch is sized for the load; [[perdida_resistiva_en_on]] indicates instantaneous thermal risk; [[energia_disipada_en_conduccion]] indicates accumulated thermal load over the usage period.

## 🔴 Structural level

The resistive ON switch model assumes [[resistencia_en_estado_on]] is constant throughout conduction. In reality, [[resistencia_en_estado_on]] depends on contact temperature, the oxidation state of the metal surface, and the geometry of the contact pair. As the contact ages, [[resistencia_en_estado_on]] increases irreversibly.

The model does not include switching phenomena: at the moment of opening and closing, a brief electric arc occurs that can erode the contacts more than thousands of hours of steady conduction. That is why switch service life is expressed in number of operations (typically 10,000 to 100,000 cycles for domestic switches) rather than in conduction hours.

The validity domain of the model is steady state with resistive load. For inductive (motors) or capacitive (switched-mode supplies) loads, the current at switch closure can be much larger than [[corriente_de_maniobra]] in steady state: inrush current can exceed 5–10 times nominal [[corriente_de_maniobra]] for milliseconds. Those inrush current peaks degrade the contact disproportionately even if they last no time at all.

The transition to the extended model — when to switch models from static to dynamic analysis — is justified when the switch operates with significant inductive loads, cycles very frequently (more than 100 times per hour), or shows heating symptoms with loads within the nominal range.

## Deep physical interpretation

The key conceptual distinction is between steady-state loss and switching degradation. The steady-state loss [[perdida_resistiva_en_on]] can be calculated with the resistive model and is proportional to [[corriente_de_maniobra]]² · [[resistencia_en_estado_on]]. Switching degradation depends on the arc when opening and closing the contact and is not modelled by the static resistance.

In a standard domestic wall switch, the steady-state loss is negligible in almost all practical cases: [[resistencia_en_estado_on]] ≈ 0.01–0.05 Ω and typical [[corriente_de_maniobra]] ≈ 0.3–2 A, giving [[perdida_resistiva_en_on]] ≈ 0.001–0.2 W. The safety analysis focus is on switching degradation and on the maximum current the switch can safely interrupt.

## Order of magnitude

Wall switch (light, 60 W, [[tension_de_alimentacion]] = 230 V): [[corriente_de_maniobra]] = 0.26 A, [[perdida_resistiva_en_on]] ≈ 0.0007 W with [[resistencia_en_estado_on]] = 0.01 Ω. Negligible.

Heater switch (2,000 W, 230 V): [[corriente_de_maniobra]] = 8.7 A, [[perdida_resistiva_en_on]] ≈ 7.6 W with [[resistencia_en_estado_on]] = 0.1 Ω (degraded contact). Noticeable — the switch heats up significantly.

Boiler thermostat (3,000 W, 230 V): [[corriente_de_maniobra]] = 13 A, [[perdida_resistiva_en_on]] ≈ 16.9 W with [[resistencia_en_estado_on]] = 0.1 Ω. Real thermal risk — inspection or replacement required.

Over a full day of 8 h use, a heater switch with elevated [[resistencia_en_estado_on]] dissipates tens of Wh per day in the contact alone — all converted to heat in the switching component. The accumulated [[energia_disipada_en_conduccion]] over a heating season can reach tens of kWh.

## Personalized resolution method

1. Identify [[tension_de_alimentacion]] (installation context) and [[potencia_de_la_carga]] of the load (device label).
2. Calculate [[corriente_de_maniobra]] = [[potencia_de_la_carga]] / [[tension_de_alimentacion]].
3. Estimate or measure [[resistencia_en_estado_on]] (new: 0.01–0.05 Ω; aged: 0.05–0.5 Ω; degraded: > 0.5 Ω).
4. Calculate [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]² · [[resistencia_en_estado_on]].
5. If [[perdida_resistiva_en_on]] > 1 W in continuous use, calculate [[energia_disipada_en_conduccion]] = [[perdida_resistiva_en_on]] · [[t_on]] for the analysis period.
6. Evaluate: [[perdida_resistiva_en_on]] < 0.1 W → negligible; 0.1–1 W → monitor; > 1 W → inspect; > 5 W → replace.

## Special cases and extended example

**Boiler thermostat** — cycles frequently (≈ 5–10 times/hour) with inductive load (pump motor, 500 W). Motor inrush current can be 5 × nominal [[corriente_de_maniobra]] for 50–100 ms at each start. With 8 starts/hour and 12 hours daily operation, the contact experiences 96 transients per day. The static [[perdida_resistiva_en_on]] model significantly underestimates actual contact degradation. Correct analysis requires the extended model with arc and inductive transient consideration.

**MOSFET switch in power electronics** — [[resistencia_en_estado_on]] can be milliohms (0.001–0.01 Ω) but [[corriente_de_maniobra]] can be tens of amperes. The loss [[perdida_resistiva_en_on]] remains significant and is the central design parameter of switched converters.

## Real student questions

**Why does the heater switch heat up but not the light switch?** Because the heater current is 30–50 times larger than the bulb current, and [[perdida_resistiva_en_on]] ∝ [[corriente_de_maniobra]]². The same [[resistencia_en_estado_on]] produces 900–2,500 times more heat with the heater.

**Does a switch with high [[resistencia_en_estado_on]] protect against overloads?** No. High [[resistencia_en_estado_on]] generates heat in the switch itself but does not significantly limit the load current. For current limitation, a fuse or MCB is needed, not a degraded switch.

**Can [[resistencia_en_estado_on]] be measured at home?** Yes, with a milliohm-resolution multimeter (low resistance measurement function, typically marked "Low Ω" or "mΩ"). With a basic multimeter it is difficult because the resolution is insufficient to distinguish between 0.01 and 0.1 Ω.

## Cross-cutting connections and study paths

- Sibling leaf **enchufes-y-tomas**: there the focus is on usage margin = total current / rated current in the power strip; here the focus is on [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]² · [[resistencia_en_estado_on]] in the switching device. Both apply localised Joule's law.
- Sibling leaf **diferencial-y-magnetotérmico**: the MCB protects the wiring by detecting overcurrent; the switch simply allows or cuts current flow without an active protection function.
- **Ohm's law** (basic electromagnetism): [[resistencia_en_estado_on]] is the contact resistance. The voltage drop across the switch is V_on = [[corriente_de_maniobra]] · [[resistencia_en_estado_on]], also calculable to verify the voltage loss at the load.
- **Joule effect** (basic thermodynamics): [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]² · [[resistencia_en_estado_on]] is the local form of Joule's law. The energy [[energia_disipada_en_conduccion]] is entirely converted to heat in the contacts.

## Final synthesis

The ideal switch has [[resistencia_en_estado_on]] = 0 and dissipates no energy. The real switch has [[resistencia_en_estado_on]] > 0 and generates [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]² · [[resistencia_en_estado_on]] when conducting. The loss grows with the square of [[corriente_de_maniobra]]: high-power switches have the greatest contact thermal risk. The accumulated energy [[energia_disipada_en_conduccion]] = [[perdida_resistiva_en_on]] · [[t_on]] determines whether heating is significant over the usage period. A switch with heating symptoms (surface temperature > 40 °C, smell, discolouration) must be inspected or replaced regardless of whether the current is within the nominal range, because the problem is elevated [[resistencia_en_estado_on]], not circuit overload.