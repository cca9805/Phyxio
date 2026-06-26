## Historical problem

The central problem that motivated the development of the domestic socket was to connect and disconnect electrical devices from the network without modifying the fixed installation wiring. In the first domestic distribution systems (Edison, Swan, 1880s), devices were connected directly to the terminals of the fixed installation, implying high risk and making portable device use impossible. The need for a safe, repeatable connection point manipulable by users without technical knowledge defined the design problem.

## Prior conceptual difficulty

The main difficulty was not electrical but mechanical: creating a repeatable metallic contact with low [[resistencia_de_contacto]] that did not degrade with use and was safe for manipulation. The first open-pin plugs (without insulating casing over the pins) allowed accidental contact with live conductors. Introducing insulated-casing pins and guided insertion geometry solved the safety problem, but created a new challenge: ensuring [[resistencia_de_contacto]] remained low after thousands of insertion and extraction cycles.

The concept of [[corriente_maxima_nominal]] as a contact design limit arose precisely from the observation that contacts degraded faster when used with high-[[corriente_individual_de_carga]] loads. The relationship [[potencia_disipada_en_el_contacto]] = [[corriente_total_en_la_toma]]² · [[resistencia_de_contacto]] physically explains why degradation is especially severe with high currents: local heat grows quadratically with current.

## What changed

The introduction of the earth connection with the Schuko connector (1926, Germany) was the most important conceptual change: it separated the electrical connection function from the personal protection function. The earth connection does not limit [[corriente_total_en_la_toma]] or protect the contact against overload, but it does protect the user against dangerous voltages on the device casing. This functional separation is exactly that between [[margen_uso]] (contact protection) and the RCD (personal protection).

The IEC 60884 standard (1994) formalised [[corriente_maxima_nominal]] as a mandatory design parameter and established ageing tests validating that [[resistencia_de_contacto]] does not increase excessively after prolonged use.

## Impact on physics

The analysis of plugs and sockets introduced into domestic electrical engineering the concept of contact resistance as a relevant physical quantity, not just an ignorable imperfection. The localised Joule law, [[potencia_disipada_en_el_contacto]] = [[corriente_total_en_la_toma]]² · [[resistencia_de_contacto]], is the same that explains heating of tungsten filaments in incandescent lamps and losses in power transformers; in the socket context, this law operates at a scale of very small resistances but with currents that can be large.

The concept of [[margen_uso]] as a dimensionless ratio between the observed quantity and its design limit is an abstraction that appears in multiple safety engineering contexts: material usage factor, stability margin in control systems, load factor in power networks. The plugs and sockets leaf is a concrete introduction to this thinking pattern.

## Connection with modern physics

The proliferation of high-power USB-C chargers (up to 140 W per port, equivalent to 0.61 A at 230 V, but with significant harmonic current peaks) has renewed interest in [[resistencia_de_contacto]] and [[potencia_disipada_en_el_contacto]] analysis for sockets and strips. Modern fast-charging chargers generate non-sinusoidal current waveforms that can produce contact heating greater than predicted by the RMS model.

Current standards (IEC 62368-1) incorporate contact temperature tests under load profiles with harmonic components, demonstrating that the physical model of this leaf remains the core of safety analysis, though extended to include the actual current waveform.