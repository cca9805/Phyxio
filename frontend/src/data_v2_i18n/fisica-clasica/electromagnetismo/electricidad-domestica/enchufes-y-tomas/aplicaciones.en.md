# Applications

## 1. Sizing power strips in workspaces

In workspaces with multiple computing devices, evaluating [[potencia_total_simultanea]] and [[corriente_total_en_la_toma]] determines the minimum required strip capacity. The protocol is to list all connected devices, sum their nominal powers to obtain [[potencia_total_simultanea]], calculate [[corriente_total_en_la_toma]], and verify that [[margen_uso]] does not exceed 0.8 in continuous use.

For a typical workstation with a 400 W computer, two 80 W monitors, a 150 W printer, and 30 W chargers: [[potencia_total_simultanea]] = 740 W, [[corriente_total_en_la_toma]] = 3.2 A, [[margen_uso]] = 0.20 with a 16 A ([[corriente_maxima_nominal]]) strip. Wide margin. Adding a 2 000 W electric heater raises [[potencia_total_simultanea]] to 2 740 W, [[corriente_total_en_la_toma]] to 11.9 A and [[margen_uso]] to 0.74: monitoring zone. Adding a second 2 000 W heater raises [[potencia_total_simultanea]] to 4 740 W, [[corriente_total_en_la_toma]] to 20.6 A and [[margen_uso]] to 1.28: active overload requiring a dedicated socket for the heater.

Dominant variable: ** [[margen_uso]] as indicator of nominal capacity usage; [[corriente_maxima_nominal]] as strip design parameter.

Validity limit: ** Applicable for loads with power factor > 0.8. For devices with low-quality switched-mode supplies, peak current may exceed RMS by a factor of 2 or more.

## 2. Diagnosing heating in sockets of old installations

In installations over 30 years old with aluminium wiring or oxidised brass contacts, [[resistencia_de_contacto]] can be significantly higher than in new installations. Visible or olfactory heating of a socket under moderate load indicates elevated [[resistencia_de_contacto]], not necessarily current overload.

Diagnosis requires measuring [[corriente_total_en_la_toma]] with a clamp ammeter and estimating [[potencia_disipada_en_el_contacto]] = [[corriente_total_en_la_toma]]² × [[resistencia_de_contacto]]. If [[corriente_total_en_la_toma]] is low but heat is perceptible, [[resistencia_de_contacto]] is the dominant factor. The solution is to replace the socket mechanism, not to redistribute load. A [[potencia_disipada_en_el_contacto]] of 5 W in a coin-sized contact can raise the plastic surface temperature above the PVC softening point (70-80 °C) in poorly ventilated environments.

Dominant variable: ** [[resistencia_de_contacto]] as the diagnostic quantity; [[potencia_disipada_en_el_contacto]] as local thermal risk indicator.

Validity limit: ** The localised Joule model is valid for steady state. In installations with high harmonic currents, RMS current may not reflect peak heating.

## 3. Verifying strips in kitchens and wet areas

Kitchens have special socket restrictions: they must be installed outside splash zones. In kitchens the sum of powers can be very high. A 2 000 W oven, 1 200 W microwave, 1 200 W coffee machine, and 900 W toaster give [[potencia_total_simultanea]] = 5 300 W. A dedicated kitchen circuit of 20 A with [[potencia_maxima_nominal]] = 4 600 W may seem sufficient for the circuit, but if all the above devices are connected to the same individual socket with [[corriente_maxima_nominal]] = 16 A ([[potencia_maxima_nominal]] = 3 680 W), [[margen_uso]] for that socket would be 5 300 / 3 680 = 1.44: severe overload even if the overall circuit does not trip the MCB.

Dominant variable: ** [[potencia_maxima_nominal]] of the individual socket as design limit; [[potencia_total_simultanea]] as evaluation variable.

Validity limit: ** In kitchens it is assumed not all high-power devices are powered simultaneously. The worst case (all on) is the safety estimate; in actual use the simultaneity factor reduces effective [[potencia_total_simultanea]].

## 4. Selecting extension leads and travel adapters

Extension leads have their own [[corriente_maxima_nominal]] which may be lower than the source socket. A 6 A extension lead in a 16 A socket does not inherit the socket capacity: the operating limit is that of the most restrictive element in the chain. The [[margen_uso]] evaluation must use the [[corriente_maxima_nominal]] of the extension lead, not the socket.

Travel adapters introduce additional [[resistencia_de_contacto]] which can be significant in low-quality adapters. With [[corriente_total_en_la_toma]] = 10 A and [[resistencia_de_contacto]] = 0.5 Ω in the adapter, [[potencia_disipada_en_el_contacto]] = 50 W: risk condition even if the load is within the declared [[corriente_maxima_nominal]].

Dominant variable: ** [[corriente_maxima_nominal]] of the most restrictive element in the chain; [[resistencia_de_contacto]] of the adapter as additional risk factor.

Validity limit: ** The model assumes the only significant parasitic resistance point is the adapter or socket contact. In long extension leads (> 10 m), cable resistance also contributes to the total loss.

## 5. Domestic electrical safety education

The [[margen_uso]] and [[potencia_disipada_en_el_contacto]] analysis provides a quantitative framework for domestic electrical safety education. It allows replacing the empirical rule "don't plug too many things into the same strip" with a precise criterion: calculate [[potencia_total_simultanea]], obtain [[corriente_total_en_la_toma]] = [[potencia_total_simultanea]] / [[tension_de_suministro]], and verify that [[margen_uso]] = [[corriente_total_en_la_toma]] / [[corriente_maxima_nominal]] does not exceed 0.8 in continuous use.

This framework is applicable by any user without instrumentation: it only requires knowing the nominal powers of devices (printed on the manufacturer label), the mains voltage (230 V in Europe), and [[corriente_maxima_nominal]] of the socket or strip (label or national standard). The five formulas of the leaf form a complete chain from the observable datum ([[potencia_de_carga]] from the label) to the risk indicator ([[margen_uso]] and [[potencia_disipada_en_el_contacto]]).

Dominant variable: ** [[margen_uso]] as the primary preventive indicator; [[potencia_total_simultanea]] as input sum.

Validity limit: ** Applicable to single-phase residential installations with loads of power factor > 0.8. For industrial, three-phase, or highly non-linear loads, a more detailed analysis of the actual current is required.