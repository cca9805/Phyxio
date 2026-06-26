## Conceptual errors


### Error 1: believing the MCB or RCD protects the socket against local overload

**Why it seems correct:** There are protections in the consumer unit. If there were a real problem, they would trip.

**Why it is incorrect:** The MCB protects the circuit wiring against overload in the conductor, not the individual socket. The RCD detects earth leakage. Neither measures [[corriente_total_en_la_toma]] at the socket or [[resistencia_de_contacto]] of the contact. A socket can be in overload with [[margen_uso]] > 1 without any protection tripping.

**Detection signal:** The student says "if it were overloaded, the MCB would have tripped." They do not consider that the MCB rating is much higher than [[corriente_maxima_nominal]] of the socket.

**Conceptual correction:** A circuit MCB is typically 16 A, equal to [[corriente_maxima_nominal]] of the socket. However, if several sockets share the same circuit, the sum of currents may not exceed the MCB rating even if one individual socket is severely overloaded.

**Contrast mini-example:** Circuit with 16 A MCB and three sockets. One socket has [[corriente_total_en_la_toma]] = 14 A ([[margen_uso]] = 0.88), the other two have 0.5 A each. Circuit total: 15 A, below the rating. MCB does not trip. The socket with 14 A operates at 88% of its limit continuously.

**Why it seems correct**

Check 1: In Plugs and Sockets, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Why it is incorrect**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Conceptual correction**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.

### Error 2: ignoring contact resistance because it is small

**Why it seems correct:** [[resistencia_de_contacto]] of tenths of an ohm seems negligible compared to the load resistance.

**Why it is incorrect:** [[potencia_disipada_en_el_contacto]] grows with the square of [[corriente_total_en_la_toma]]. With [[corriente_total_en_la_toma]] = 16 A and [[resistencia_de_contacto]] = 0.1 Ω, the loss is 25.6 W localised in a very small volume. That power density can raise contact temperature by hundreds of degrees.

**Detection signal:** The student calculates [[resistencia_de_contacto]] in the context of load resistance and concludes it is insignificant.

**Conceptual correction:** The relevance of [[resistencia_de_contacto]] is not assessed relative to the load but relative to the thermal dissipation capacity and geometry of the contact. A small contact with poor dissipation can be damaged by powers of a few watts.

**Contrast mini-example:** 2 000 W load at 230 V: load resistance ≈ 26.5 Ω. [[resistencia_de_contacto]] = 0.2 Ω seems 0.75% of total resistance. But [[potencia_disipada_en_el_contacto]] = 16² × 0.2 = 51.2 W at the contact, enough to melt plastic within minutes.

## Model errors

**Why it seems correct**

Check 6: In Plugs and Sockets, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

**Why it is incorrect**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Detection signal**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.

**Conceptual correction**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.

### Error 3: using the highest individual power as the limit without considering simultaneity

**Why it seems correct:** If the most powerful device does not exceed [[potencia_maxima_nominal]], the socket seems safe.

**Why it is incorrect:** Overload occurs when the sum of simultaneous powers exceeds [[potencia_maxima_nominal]], not when an individual device exceeds it. Several moderate-power devices can sum to more than [[potencia_maxima_nominal]].

**Detection signal:** The student only checks the most powerful device without summing all simultaneously connected ones.

**Conceptual correction:** The criterion is [[potencia_total_simultanea]] = sum of [[potencia_de_carga]] of all devices powered at the same time. If [[potencia_total_simultanea]] ≥ [[potencia_maxima_nominal]], there is overload risk even if no individual device exceeds the limit.

**Contrast mini-example:** 10 A strip ([[potencia_maxima_nominal]] = 2 300 W). Most powerful device: 400 W desktop computer. Also connected: two 80 W monitors, 150 W printer, 60 W speakers, 30 W charger. [[potencia_total_simultanea]] = 800 W, [[margen_uso]] = 0.35. No risk. But adding a 2 000 W heater raises [[potencia_total_simultanea]] to 2 800 W and [[margen_uso]] to 1.22: overload.

## Mathematical errors

**Why it seems correct**

Check 11: In Plugs and Sockets, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

**Why it is incorrect**

Check 12: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 12.

**Detection signal**

Check 13: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 13.

**Conceptual correction**

Check 14: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 14.

**Mini-example of contrast**

Check 15: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 15.

### Error 4: calculating [[corriente_total_en_la_toma]] as the most powerful device current instead of summing

**Why it seems correct:** The most powerful device dominates the circuit current.

**Why it is incorrect:** [[corriente_total_en_la_toma]] is the sum of individual currents of all simultaneously powered devices. Ignoring lower-power devices can significantly underestimate [[corriente_total_en_la_toma]] in strips with many devices.

**Detection signal:** The student calculates [[corriente_total_en_la_toma]] = the most powerful device power / [[tension_de_suministro]] instead of [[corriente_total_en_la_toma]] = [[potencia_total_simultanea]] / [[tension_de_suministro]].

**Conceptual correction:** To calculate [[corriente_total_en_la_toma]], first sum all simultaneous powers and then divide by [[tension_de_suministro]], or directly sum individual device currents.

**Contrast mini-example:** Five 300 W devices in a strip: [[corriente_total_en_la_toma]] = 1500/230 = 6.5 A, not 300/230 = 1.3 A. The sum multiplies the individual device current by five.

## Interpretation errors

**Why it seems correct**

Check 16: In Plugs and Sockets, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 16.

**Why it is incorrect**

Check 17: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 17.

**Detection signal**

Check 18: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 18.

**Conceptual correction**

Check 19: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 19.

**Mini-example of contrast**

Check 20: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 20.

### Error 5: interpreting absence of visible symptoms as absence of risk

**Why it seems correct:** If there is no burning smell or heat at the plug, the socket seems fine.

**Why it is incorrect:** Degradation of [[resistencia_de_contacto]] is a progressive process. Heating may be slow but continuous. Visible symptoms appear when damage is already advanced.

**Detection signal:** The student concludes the socket is fine because there are no obvious external symptoms.

**Conceptual correction:** The safety criterion is preventive: evaluate [[margen_uso]] and compare with 0.8 as a continuous-use threshold. Do not wait for visible symptoms before acting.

**Contrast mini-example:** Strip with [[margen_uso]] = 0.95 for 8 hours a day. No visible symptoms for weeks. But [[potencia_disipada_en_el_contacto]] is 5% above the continuous design point and contacts degrade gradually. Preventive replacement is the correct action.

## Quick self-control rule

Before connecting a new device to a socket or strip:
1. What is [[corriente_maxima_nominal]] of the socket or strip?
2. How many devices are already connected and powered?
3. What is the sum of powers [[potencia_total_simultanea]] including the new device?
4. What is the resulting [[margen_uso]]?
5. If [[margen_uso]] > 0.8, redistribute load before proceeding.

**Why it seems correct**

Check 21: In Plugs and Sockets, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 21.

**Why it is incorrect**

Check 22: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 22.

**Detection signal**

Check 23: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 23.

**Conceptual correction**

Check 24: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 24.

**Mini-example of contrast**

Check 25: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 25.