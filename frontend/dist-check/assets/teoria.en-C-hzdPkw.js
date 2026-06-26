const e=`# Plugs and Sockets\r
\r
A socket is not an unlimited access point to the electrical network. It is a physical component with a nominal current limit [[I_max]] which, when exceeded continuously, generates heat in the metallic contacts and can cause degradation, short circuit, or fire. Understanding which quantities determine that limit and how to calculate them is the core competency of this leaf.\r
\r
The risk mechanism is not strictly electrical — there is no leakage, no phase-neutral imbalance — but thermal: the contact resistance [[R_contacto]] dissipates heat following the localised Joule law. The greater the total current [[I_tot]], the greater the heating, and that heating grows with the square of [[I_tot]].\r
\r
## Conceptual context\r
\r
A socket connects the fixed installation of the home to the user's portable devices. It is the last link in a chain of protections that includes the RCD, the MCB, and the installation wiring. However, the socket itself has no active protection: its only design limit is [[I_max]], a passive threshold that does not trip — it only defines when use is safe and when it is not.\r
\r
The concept of [[margen_uso]] connects this leaf with that of differential and thermal-magnetic breakers: there the margin is calculated relative to the trip threshold of active protections; here it is calculated relative to the passive limit of the socket. The logic is the same: a dimensionless ratio measuring proximity to the safety limit.\r
\r
## 🟢 Essential level\r
\r
A socket has a current limit [[I_max]] printed on the device or declared by the manufacturer. In European domestic installations, the most common value is 16 A. A low-quality power strip may have 10 A.\r
\r
When several devices are connected to the same socket or strip, the individual current [[I]] of each device adds up. If that sum exceeds [[I_max]], the socket is in overload. The contacts heat up. If the situation persists, the casing plastic may soften, contacts may oxidise or deform, and fire risk increases.\r
\r
The fact that no RCD or MCB trips does not guarantee the socket is safe. The RCD detects earth leakage; the MCB protects the circuit wiring. Neither protects the internal contacts of the socket against local overload.\r
\r
## 🔵 Formal level\r
\r
The current demanded by an individual device of power [[P]] connected to a socket at voltage [[V]] is:\r
\r
{{f:corriente_individual}}\r
\r
The total current flowing through the contacts when several devices of total power [[P_tot]] are simultaneously connected is:\r
\r
{{f:corriente_total}}\r
\r
This [[I_tot]] is compared with [[I_max]]. To quantify the socket usage margin, the ratio is defined as:\r
\r
{{f:ratio_uso}}\r
\r
When [[margen_uso]] reaches 1, the socket is at its nominal limit. Higher values indicate active overload.\r
\r
The maximum power connectable without exceeding the nominal limit is:\r
\r
{{f:potencia_max}}\r
\r
To evaluate local thermal risk when the socket or plug shows degraded contact, the localised Joule law is applied:\r
\r
{{f:perdida_contacto}}\r
\r
This [[P_perdida]] grows with the square of [[I_tot]]: doubling the current quadruples the heat dissipated at the contact.\r
\r
## 🔴 Structural level\r
\r
The ideal socket model assumes [[R_contacto]] = 0 and therefore [[P_perdida]] = 0. In practice, even new sockets have [[R_contacto]] on the order of hundredths of an ohm. Over time and use, [[R_contacto]] can increase due to oxidation of the metallic contact, dirt accumulated at the interface, mechanical deformation of the terminal, or degradation of the conducting material.\r
\r
The validity limit of the resistive model is steady state with RMS AC current. Motor startup transients or capacitor charging currents can generate brief current peaks exceeding [[I_max]] without causing immediate degradation, because the energy dissipated in each transient is small.\r
\r
The model does not include the temperature distribution in the casing or the thermal resistance from the contact to the environment. Under reduced-ventilation conditions (strip under furniture, covered socket) the actual temperature may be higher than predicted by a steady-state dissipation model.\r
\r
Practical validity domain: steady state, resistive or near-resistive load, power factor close to unity. For loads with high inrush or significant power electronics, analysis requires considering the current waveform.\r
\r
## Deep physical interpretation\r
\r
The difference between overload and thermal contact defect is the most important conceptual distinction in this leaf. In overload, [[I_tot]] exceeds [[I_max]] and heat is produced because the current is excessive. In a thermal defect, [[I_tot]] may be within the limit but [[R_contacto]] is abnormally high, and [[P_perdida]] = [[I_tot]]² · [[R_contacto]] is significant because [[R_contacto]] has increased through degradation.\r
\r
Both phenomena have the same physical consequence — contact heating — but different causes and different solutions. Identifying which is present is the first diagnostic step: calculate [[margen_uso]] and, if it is acceptable, estimate whether [[P_perdida]] could be significant given the contact condition.\r
\r
## Order of magnitude\r
\r
In a typical Spanish residential installation, [[V]] = 230 V. A standard socket has [[I_max]] = 16 A, so its [[P_max]] is approximately 3 680 W. A low-quality 10 A strip has [[P_max]] of 2 300 W.\r
\r
Connecting a 2 000 W heater, a 90 W laptop, and an 18 W charger to the same strip gives [[P_tot]] of 2 108 W, equivalent to [[I_tot]] of 9.2 A, with [[margen_uso]] of 0.57. Within limits. Adding a second 2 000 W heater raises [[P_tot]] to 4 108 W, [[I_tot]] to 17.9 A, and [[margen_uso]] to 1.12: active overload.\r
\r
A [[R_contacto]] of 0.1 Ω with [[I_tot]] = 16 A dissipates 25.6 W at the contact. With [[R_contacto]] = 0.5 Ω (degraded contact), dissipation rises to 128 W, enough to damage the plastic within minutes.\r
\r
## Personalized resolution method\r
\r
To evaluate whether a socket or strip is overloaded:\r
\r
1. Identify all simultaneously connected devices and their nominal powers [[P]].\r
2. Sum powers: calculate [[P_tot]].\r
3. Calculate [[I_tot]] using the total current formula with [[V]] = 230 V.\r
4. Identify [[I_max]] of the socket or strip (manufacturer label).\r
5. Calculate [[margen_uso]] and compare with 1.\r
6. If [[margen_uso]] > 0.8 in continuous use, redistribute load or switch to a higher-capacity strip.\r
7. If thermal symptoms appear (heat at plug, burning smell, discoloured plastic), inspect [[R_contacto]] and replace the socket.\r
\r
## Special cases and extended example\r
\r
**Case A — Strip with multiple chargers.** Four 18 W smartphone chargers, a 65 W laptop, and a 10 W LED lamp: [[P_tot]] = 147 W, [[I_tot]] = 0.64 A. [[margen_uso]] = 0.04. No thermal risk.\r
\r
**Case B — Heaters on a strip.** Two 2 000 W heaters on a 10 A strip ([[P_max]] = 2 300 W): [[P_tot]] = 4 000 W, [[I_tot]] = 17.4 A. [[margen_uso]] = 1.74. Severe overload. Immediate risk.\r
\r
**Case C — Degraded contact without overload.** [[I_tot]] = 8 A (within the 16 A limit) with [[R_contacto]] = 0.3 Ω due to oxidation: [[P_perdida]] = 19.2 W. No MCB trips, but local heat can progressively damage the contact.\r
\r
## Real student questions\r
\r
**If the strip has its own fuse, is it protected against overload?** The strip fuse protects the circuit against short circuit, but not necessarily against slow thermal degradation from moderate overload. A 16 A fuse may not act against a 10% overload that, sustained for hours, progressively degrades the contact.\r
\r
**Is a higher-ampere strip always better?** A 16 A strip is safer than a 10 A one only if the internal wiring and contacts are dimensioned for 16 A. A low-quality strip labelled 16 A may have contacts that cannot handle that current. The quality mark and product standard (EN 61058) are more relevant than the declared [[I_max]] value.\r
\r
**Why are heaters the main risk in power strips?** Because they have high and constant [[P]] for hours. A 2 000 W heater draws approximately 8.7 A continuously. If other devices share the same strip, [[I_tot]] can quickly exceed [[I_max]]. Additionally, the heater heat raises the strip's ambient temperature, reducing its dissipation capacity.\r
\r
## Cross-cutting connections and study paths\r
\r
This leaf connects directly with **differential and thermal-magnetic breakers** (protections do not detect local socket overload), with **voltage and power at home** (P and V as input data), and with **electrical safety** (consequences of contact heating). The Joule law localised at [[R_contacto]] is the bridge between the observable electrical quantity ([[I_tot]]) and the physical risk (contact temperature).\r
\r
Recommended study path: **electric current → resistance and Ohm's law → electrical power → voltage and power at home → plugs and sockets (this leaf) → differential and thermal-magnetic breakers → electrical safety.**\r
\r
## Final synthesis\r
\r
The socket has a limit [[I_max]] that must not be exceeded in continuous operation. Total current [[I_tot]] = [[P_tot]] / [[V]] is the quantity flowing through the contacts. The ratio [[margen_uso]] = [[I_tot]] / [[I_max]] quantifies proximity to overload. The Joule law localised at [[R_contacto]] explains the thermal risk even with currents within the limit when the contact is degraded. No circuit protection detects this risk: the only defence is not to exceed [[margen_uso]] and to maintain contacts in good condition.`;export{e as default};
