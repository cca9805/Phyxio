const e=`# Applications of plugs and sockets\r
\r
## 1. Sizing power strips in workspaces\r
\r
In workspaces with multiple computing devices, evaluating [[P_tot]] and [[I_tot]] determines the minimum required strip capacity. The protocol is to list all connected devices, sum their nominal powers to obtain [[P_tot]], calculate [[I_tot]], and verify that [[margen_uso]] does not exceed 0.8 in continuous use.\r
\r
For a typical workstation with a 400 W computer, two 80 W monitors, a 150 W printer, and 30 W chargers: [[P_tot]] = 740 W, [[I_tot]] = 3.2 A, [[margen_uso]] = 0.20 with a 16 A ([[I_max]]) strip. Wide margin. Adding a 2 000 W electric heater raises [[P_tot]] to 2 740 W, [[I_tot]] to 11.9 A and [[margen_uso]] to 0.74: monitoring zone. Adding a second 2 000 W heater raises [[P_tot]] to 4 740 W, [[I_tot]] to 20.6 A and [[margen_uso]] to 1.28: active overload requiring a dedicated socket for the heater.\r
\r
**Dominant variable:** [[margen_uso]] as indicator of nominal capacity usage; [[I_max]] as strip design parameter.\r
\r
**Validity limit:** Applicable for loads with power factor > 0.8. For devices with low-quality switched-mode supplies, peak current may exceed RMS by a factor of 2 or more.\r
\r
## 2. Diagnosing heating in sockets of old installations\r
\r
In installations over 30 years old with aluminium wiring or oxidised brass contacts, [[R_contacto]] can be significantly higher than in new installations. Visible or olfactory heating of a socket under moderate load indicates elevated [[R_contacto]], not necessarily current overload.\r
\r
Diagnosis requires measuring [[I_tot]] with a clamp ammeter and estimating [[P_perdida]] = [[I_tot]]² × [[R_contacto]]. If [[I_tot]] is low but heat is perceptible, [[R_contacto]] is the dominant factor. The solution is to replace the socket mechanism, not to redistribute load. A [[P_perdida]] of 5 W in a coin-sized contact can raise the plastic surface temperature above the PVC softening point (70-80 °C) in poorly ventilated environments.\r
\r
**Dominant variable:** [[R_contacto]] as the diagnostic quantity; [[P_perdida]] as local thermal risk indicator.\r
\r
**Validity limit:** The localised Joule model is valid for steady state. In installations with high harmonic currents, RMS current may not reflect peak heating.\r
\r
## 3. Verifying strips in kitchens and wet areas\r
\r
Kitchens have special socket restrictions: they must be installed outside splash zones. In kitchens the sum of powers can be very high. A 2 000 W oven, 1 200 W microwave, 1 200 W coffee machine, and 900 W toaster give [[P_tot]] = 5 300 W. A dedicated kitchen circuit of 20 A with [[P_max]] = 4 600 W may seem sufficient for the circuit, but if all the above devices are connected to the same individual socket with [[I_max]] = 16 A ([[P_max]] = 3 680 W), [[margen_uso]] for that socket would be 5 300 / 3 680 = 1.44: severe overload even if the overall circuit does not trip the MCB.\r
\r
**Dominant variable:** [[P_max]] of the individual socket as design limit; [[P_tot]] as evaluation variable.\r
\r
**Validity limit:** In kitchens it is assumed not all high-power devices are powered simultaneously. The worst case (all on) is the safety estimate; in actual use the simultaneity factor reduces effective [[P_tot]].\r
\r
## 4. Selecting extension leads and travel adapters\r
\r
Extension leads have their own [[I_max]] which may be lower than the source socket. A 6 A extension lead in a 16 A socket does not inherit the socket capacity: the operating limit is that of the most restrictive element in the chain. The [[margen_uso]] evaluation must use the [[I_max]] of the extension lead, not the socket.\r
\r
Travel adapters introduce additional [[R_contacto]] which can be significant in low-quality adapters. With [[I_tot]] = 10 A and [[R_contacto]] = 0.5 Ω in the adapter, [[P_perdida]] = 50 W: risk condition even if the load is within the declared [[I_max]].\r
\r
**Dominant variable:** [[I_max]] of the most restrictive element in the chain; [[R_contacto]] of the adapter as additional risk factor.\r
\r
**Validity limit:** The model assumes the only significant parasitic resistance point is the adapter or socket contact. In long extension leads (> 10 m), cable resistance also contributes to the total loss.\r
\r
## 5. Domestic electrical safety education\r
\r
The [[margen_uso]] and [[P_perdida]] analysis provides a quantitative framework for domestic electrical safety education. It allows replacing the empirical rule "don't plug too many things into the same strip" with a precise criterion: calculate [[P_tot]], obtain [[I_tot]] = [[P_tot]] / [[V]], and verify that [[margen_uso]] = [[I_tot]] / [[I_max]] does not exceed 0.8 in continuous use.\r
\r
This framework is applicable by any user without instrumentation: it only requires knowing the nominal powers of devices (printed on the manufacturer label), the mains voltage (230 V in Europe), and [[I_max]] of the socket or strip (label or national standard). The five formulas of the leaf form a complete chain from the observable datum ([[P]] from the label) to the risk indicator ([[margen_uso]] and [[P_perdida]]).\r
\r
**Dominant variable:** [[margen_uso]] as the primary preventive indicator; [[P_tot]] as input sum.\r
\r
**Validity limit:** Applicable to single-phase residential installations with loads of power factor > 0.8. For industrial, three-phase, or highly non-linear loads, a more detailed analysis of the actual current is required.`;export{e as default};
