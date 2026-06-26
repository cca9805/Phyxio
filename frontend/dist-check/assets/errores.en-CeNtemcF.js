const e=`# Frequent errors in plug and socket analysis\r
\r
## Conceptual errors\r
\r
### Error 1: believing the MCB or RCD protects the socket against local overload\r
\r
**Why it seems correct:** There are protections in the consumer unit. If there were a real problem, they would trip.\r
\r
**Why it is incorrect:** The MCB protects the circuit wiring against overload in the conductor, not the individual socket. The RCD detects earth leakage. Neither measures [[I_tot]] at the socket or [[R_contacto]] of the contact. A socket can be in overload with [[margen_uso]] > 1 without any protection tripping.\r
\r
**Detection signal:** The student says "if it were overloaded, the MCB would have tripped." They do not consider that the MCB rating is much higher than [[I_max]] of the socket.\r
\r
**Conceptual correction:** A circuit MCB is typically 16 A, equal to [[I_max]] of the socket. However, if several sockets share the same circuit, the sum of currents may not exceed the MCB rating even if one individual socket is severely overloaded.\r
\r
**Contrast mini-example:** Circuit with 16 A MCB and three sockets. One socket has [[I_tot]] = 14 A ([[margen_uso]] = 0.88), the other two have 0.5 A each. Circuit total: 15 A, below the rating. MCB does not trip. The socket with 14 A operates at 88% of its limit continuously.\r
\r
### Error 2: ignoring contact resistance because it is small\r
\r
**Why it seems correct:** [[R_contacto]] of tenths of an ohm seems negligible compared to the load resistance.\r
\r
**Why it is incorrect:** [[P_perdida]] grows with the square of [[I_tot]]. With [[I_tot]] = 16 A and [[R_contacto]] = 0.1 Ω, the loss is 25.6 W localised in a very small volume. That power density can raise contact temperature by hundreds of degrees.\r
\r
**Detection signal:** The student calculates [[R_contacto]] in the context of load resistance and concludes it is insignificant.\r
\r
**Conceptual correction:** The relevance of [[R_contacto]] is not assessed relative to the load but relative to the thermal dissipation capacity and geometry of the contact. A small contact with poor dissipation can be damaged by powers of a few watts.\r
\r
**Contrast mini-example:** 2 000 W load at 230 V: load resistance ≈ 26.5 Ω. [[R_contacto]] = 0.2 Ω seems 0.75% of total resistance. But [[P_perdida]] = 16² × 0.2 = 51.2 W at the contact, enough to melt plastic within minutes.\r
\r
## Model errors\r
\r
### Error 3: using the highest individual power as the limit without considering simultaneity\r
\r
**Why it seems correct:** If the most powerful device does not exceed [[P_max]], the socket seems safe.\r
\r
**Why it is incorrect:** Overload occurs when the sum of simultaneous powers exceeds [[P_max]], not when an individual device exceeds it. Several moderate-power devices can sum to more than [[P_max]].\r
\r
**Detection signal:** The student only checks the most powerful device without summing all simultaneously connected ones.\r
\r
**Conceptual correction:** The criterion is [[P_tot]] = sum of [[P]] of all devices powered at the same time. If [[P_tot]] ≥ [[P_max]], there is overload risk even if no individual device exceeds the limit.\r
\r
**Contrast mini-example:** 10 A strip ([[P_max]] = 2 300 W). Most powerful device: 400 W desktop computer. Also connected: two 80 W monitors, 150 W printer, 60 W speakers, 30 W charger. [[P_tot]] = 800 W, [[margen_uso]] = 0.35. No risk. But adding a 2 000 W heater raises [[P_tot]] to 2 800 W and [[margen_uso]] to 1.22: overload.\r
\r
## Mathematical errors\r
\r
### Error 4: calculating [[I_tot]] as the most powerful device current instead of summing\r
\r
**Why it seems correct:** The most powerful device dominates the circuit current.\r
\r
**Why it is incorrect:** [[I_tot]] is the sum of individual currents of all simultaneously powered devices. Ignoring lower-power devices can significantly underestimate [[I_tot]] in strips with many devices.\r
\r
**Detection signal:** The student calculates [[I_tot]] = the most powerful device power / [[V]] instead of [[I_tot]] = [[P_tot]] / [[V]].\r
\r
**Conceptual correction:** To calculate [[I_tot]], first sum all simultaneous powers and then divide by [[V]], or directly sum individual device currents.\r
\r
**Contrast mini-example:** Five 300 W devices in a strip: [[I_tot]] = 1500/230 = 6.5 A, not 300/230 = 1.3 A. The sum multiplies the individual device current by five.\r
\r
## Interpretation errors\r
\r
### Error 5: interpreting absence of visible symptoms as absence of risk\r
\r
**Why it seems correct:** If there is no burning smell or heat at the plug, the socket seems fine.\r
\r
**Why it is incorrect:** Degradation of [[R_contacto]] is a progressive process. Heating may be slow but continuous. Visible symptoms appear when damage is already advanced.\r
\r
**Detection signal:** The student concludes the socket is fine because there are no obvious external symptoms.\r
\r
**Conceptual correction:** The safety criterion is preventive: evaluate [[margen_uso]] and compare with 0.8 as a continuous-use threshold. Do not wait for visible symptoms before acting.\r
\r
**Contrast mini-example:** Strip with [[margen_uso]] = 0.95 for 8 hours a day. No visible symptoms for weeks. But [[P_perdida]] is 5% above the continuous design point and contacts degrade gradually. Preventive replacement is the correct action.\r
\r
## Quick self-control rule\r
\r
Before connecting a new device to a socket or strip:\r
1. What is [[I_max]] of the socket or strip?\r
2. How many devices are already connected and powered?\r
3. What is the sum of powers [[P_tot]] including the new device?\r
4. What is the resulting [[margen_uso]]?\r
5. If [[margen_uso]] > 0.8, redistribute load before proceeding.\r
`;export{e as default};
