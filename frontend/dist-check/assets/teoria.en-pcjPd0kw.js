const e=`# Switches\r
\r
## Conceptual context\r
\r
A switch is a device that opens or closes an electrical circuit mechanically or electronically. In a domestic installation, wall switches control lights; appliance switches control motors and heating elements; thermostats are temperature-controlled switches. In all these cases, the physical function is the same: to allow or cut the flow of current [[I]] between the supply voltage [[V]] and the load of power [[P]].\r
\r
The ideal switch does not exist in practice. A real switch presents in ON state (closed) a non-zero resistance [[R_on]] that generates a loss [[P_on]] by the Joule effect. That heat is dissipated in the metallic contacts of the switch. If [[P_on]] is large enough or the conduction time [[t_on]] is long enough, the accumulated energy [[E_on]] can degrade the contacts, reduce the switch service life, and in extreme cases create a fire risk.\r
\r
## 🟢 Essential level\r
\r
A switch has two states: OFF (open, no current) and ON (closed, with current [[I]]). When ON, the current demanded by a load of power [[P]] connected to voltage [[V]] is:\r
\r
From [[P]] and [[V]], the switching current [[I]] of the switch is obtained.\r
\r
If the switch has contact resistance [[R_on]], that current produces a local loss:\r
\r
With that [[I]] and the contact [[R_on]], the local loss [[P_on]] is proportional to the square of [[I]].\r
\r
A quality domestic switch has very small [[R_on]] — in the order of milliohms — so [[P_on]] is usually negligible. An aged, oxidised or poor-quality switch can have [[R_on]] in tenths of an ohm, making [[P_on]] noticeable even with moderate currents.\r
\r
## 🔵 Formal level\r
\r
The complete causal chain starts from circuit data. The voltage [[V]] and load power [[P]] determine the switching current [[I]] of the switch:\r
\r
{{f:corriente}}\r
\r
With that [[I]] and the contact [[R_on]] of the switch, the resistive loss is:\r
\r
{{f:perdida_on}}\r
\r
If the switch operates for a time [[t_on]], the energy dissipated in its contacts is:\r
\r
{{f:energia_on}}\r
\r
The quadratic dependence [[P_on]] ∝ [[I]]² has important implications: a contact with moderate [[R_on]] can dissipate watts when current is high. For [[I]] = 4 A and [[R_on]] = 0.05 Ω, the loss is 0.8 W — small but noticeable in continuous use. This value grows quadratically with current.\r
\r
The quadratic dependence of [[P_on]] on [[I]] means doubling the current quadruples the loss. A light switch (60 W load, [[I]] ≈ 0.26 A) dissipates 270 times less than a heater switch (2,000 W load, [[I]] ≈ 8.7 A) if both have the same [[R_on]], even though they look like similar devices.\r
\r
The three output quantities of the analysis — [[P_on]], [[E_on]], and [[I]] — form a diagnostic hierarchy: [[I]] indicates whether the switch is sized for the load; [[P_on]] indicates instantaneous thermal risk; [[E_on]] indicates accumulated thermal load over the usage period.\r
\r
## 🔴 Structural level\r
\r
The resistive ON switch model assumes [[R_on]] is constant throughout conduction. In reality, [[R_on]] depends on contact temperature, the oxidation state of the metal surface, and the geometry of the contact pair. As the contact ages, [[R_on]] increases irreversibly.\r
\r
The model does not include switching phenomena: at the moment of opening and closing, a brief electric arc occurs that can erode the contacts more than thousands of hours of steady conduction. That is why switch service life is expressed in number of operations (typically 10,000 to 100,000 cycles for domestic switches) rather than in conduction hours.\r
\r
The validity domain of the model is steady state with resistive load. For inductive (motors) or capacitive (switched-mode supplies) loads, the current at switch closure can be much larger than [[I]] in steady state: inrush current can exceed 5–10 times nominal [[I]] for milliseconds. Those inrush current peaks degrade the contact disproportionately even if they last no time at all.\r
\r
The transition to the extended model — when to switch models from static to dynamic analysis — is justified when the switch operates with significant inductive loads, cycles very frequently (more than 100 times per hour), or shows heating symptoms with loads within the nominal range.\r
\r
## Deep physical interpretation\r
\r
The key conceptual distinction is between steady-state loss and switching degradation. The steady-state loss [[P_on]] can be calculated with the resistive model and is proportional to [[I]]² · [[R_on]]. Switching degradation depends on the arc when opening and closing the contact and is not modelled by the static resistance.\r
\r
In a standard domestic wall switch, the steady-state loss is negligible in almost all practical cases: [[R_on]] ≈ 0.01–0.05 Ω and typical [[I]] ≈ 0.3–2 A, giving [[P_on]] ≈ 0.001–0.2 W. The safety analysis focus is on switching degradation and on the maximum current the switch can safely interrupt.\r
\r
## Order of magnitude\r
\r
Wall switch (light, 60 W, [[V]] = 230 V): [[I]] = 0.26 A, [[P_on]] ≈ 0.0007 W with [[R_on]] = 0.01 Ω. Negligible.\r
\r
Heater switch (2,000 W, 230 V): [[I]] = 8.7 A, [[P_on]] ≈ 7.6 W with [[R_on]] = 0.1 Ω (degraded contact). Noticeable — the switch heats up significantly.\r
\r
Boiler thermostat (3,000 W, 230 V): [[I]] = 13 A, [[P_on]] ≈ 16.9 W with [[R_on]] = 0.1 Ω. Real thermal risk — inspection or replacement required.\r
\r
Over a full day of 8 h use, a heater switch with elevated [[R_on]] dissipates tens of Wh per day in the contact alone — all converted to heat in the switching component. The accumulated [[E_on]] over a heating season can reach tens of kWh.\r
\r
## Personalized resolution method\r
\r
1. Identify [[V]] (installation context) and [[P]] of the load (device label).\r
2. Calculate [[I]] = [[P]] / [[V]].\r
3. Estimate or measure [[R_on]] (new: 0.01–0.05 Ω; aged: 0.05–0.5 Ω; degraded: > 0.5 Ω).\r
4. Calculate [[P_on]] = [[I]]² · [[R_on]].\r
5. If [[P_on]] > 1 W in continuous use, calculate [[E_on]] = [[P_on]] · [[t_on]] for the analysis period.\r
6. Evaluate: [[P_on]] < 0.1 W → negligible; 0.1–1 W → monitor; > 1 W → inspect; > 5 W → replace.\r
\r
## Special cases and extended example\r
\r
**Boiler thermostat** — cycles frequently (≈ 5–10 times/hour) with inductive load (pump motor, 500 W). Motor inrush current can be 5 × nominal [[I]] for 50–100 ms at each start. With 8 starts/hour and 12 hours daily operation, the contact experiences 96 transients per day. The static [[P_on]] model significantly underestimates actual contact degradation. Correct analysis requires the extended model with arc and inductive transient consideration.\r
\r
**MOSFET switch in power electronics** — [[R_on]] can be milliohms (0.001–0.01 Ω) but [[I]] can be tens of amperes. The loss [[P_on]] remains significant and is the central design parameter of switched converters.\r
\r
## Real student questions\r
\r
**Why does the heater switch heat up but not the light switch?** Because the heater current is 30–50 times larger than the bulb current, and [[P_on]] ∝ [[I]]². The same [[R_on]] produces 900–2,500 times more heat with the heater.\r
\r
**Does a switch with high [[R_on]] protect against overloads?** No. High [[R_on]] generates heat in the switch itself but does not significantly limit the load current. For current limitation, a fuse or MCB is needed, not a degraded switch.\r
\r
**Can [[R_on]] be measured at home?** Yes, with a milliohm-resolution multimeter (low resistance measurement function, typically marked "Low Ω" or "mΩ"). With a basic multimeter it is difficult because the resolution is insufficient to distinguish between 0.01 and 0.1 Ω.\r
\r
## Cross-cutting connections and study paths\r
\r
- Sibling leaf **enchufes-y-tomas**: there the focus is on usage margin = total current / rated current in the power strip; here the focus is on [[P_on]] = [[I]]² · [[R_on]] in the switching device. Both apply localised Joule's law.\r
- Sibling leaf **diferencial-y-magnetotérmico**: the MCB protects the wiring by detecting overcurrent; the switch simply allows or cuts current flow without an active protection function.\r
- **Ohm's law** (basic electromagnetism): [[R_on]] is the contact resistance. The voltage drop across the switch is V_on = [[I]] · [[R_on]], also calculable to verify the voltage loss at the load.\r
- **Joule effect** (basic thermodynamics): [[P_on]] = [[I]]² · [[R_on]] is the local form of Joule's law. The energy [[E_on]] is entirely converted to heat in the contacts.\r
\r
## Final synthesis\r
\r
The ideal switch has [[R_on]] = 0 and dissipates no energy. The real switch has [[R_on]] > 0 and generates [[P_on]] = [[I]]² · [[R_on]] when conducting. The loss grows with the square of [[I]]: high-power switches have the greatest contact thermal risk. The accumulated energy [[E_on]] = [[P_on]] · [[t_on]] determines whether heating is significant over the usage period. A switch with heating symptoms (surface temperature > 40 °C, smell, discolouration) must be inspected or replaced regardless of whether the current is within the nominal range, because the problem is elevated [[R_on]], not circuit overload.\r
`;export{e as default};
