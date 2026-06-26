# Applications

## 1. Domestic electricity distribution transformer

On every city street or in every residential area, a transformer reduces the distribution voltage of thousands of volts to the domestic 230 V. The transformer is located in a cubicle or nearby substation, feeding dozens or hundreds of homes. The typical primary voltage in Europe is 15 kV or 20 kV, while the secondary provides 400 V three-phase or 230 V single-phase.

The analysis of this application begins with the transformation ratio. The transformer nominal power, typically between 50 kVA and 1000 kVA, determines how many homes it can feed simultaneously. The simplifying hypothesis is that the load is evenly distributed among phases and that the average power factor is close to 0.9.

In planning, the same transformer is checked against daily load curves rather than against a single instant. A unit that is acceptable at night may approach its thermal limit during evening demand peaks. This is why [[potencia_aparente]], [[corriente_secundaria]], and losses [[perdidas_totales]] are interpreted together when deciding whether reinforcement is needed.

Dominant variable: apparent power [[potencia_aparente]] limits the maximum transformer capacity and decides how many homes can be supplied without thermal overload.
Validity limit: the ideal model stops being sufficient at peak hours, when unbalanced phase loading causes significant neutral currents that the basic model does not include.

## 2. Isolation transformer in hospitals and operating rooms

Isolation transformers have a one-to-one transformation ratio, that is, equal number of turns in primary and secondary. Their function is not to change voltage but to galvanically separate the fed circuit from the general grid, increasing electrical safety in medical environments where patients may be in direct contact with conductive equipment.

In an operating room, the isolation transformer feeds operating tables, monitoring equipment and surgical lighting systems. The critical hypothesis is that parasitic capacitance between windings is minimal, which limits leakage current in case of accidental contact.

Dominant variable: secondary voltage [[tension_secundaria]] must remain within strict limits even when the primary grid fluctuates.
Validity limit: the ideal model is valid only while galvanic isolation remains very high; when capacitive leakage or insulation degradation appears, the analysis must include leakage currents and clinical monitoring.

## 3. Arc welding transformer

Arc welding machines use special transformers that provide low voltage, typically between 20 V and 80 V at no-load, and high current, of hundreds of amperes, when the arc is established between the electrode and the piece to be welded. The transformer must withstand frequent short circuits and sudden load variations.

The design of these transformers includes a high leakage reactance that limits short-circuit current and stabilises the arc. The operating hypothesis is that the transformer internal impedance is significant, of the order of 10% to 20%, which substantially deviates from the ideal model.

Dominant variable: secondary current [[corriente_secundaria]] determines arc intensity, penetration, and the thermal regime of the weld.
Validity limit: the simple model stops being useful when the arc is unstable; then leakage impedance and the nonlinear electric-arc characteristic must be included.

## 4. Instrument and protection transformer

Current and voltage transformers reduce high-power electrical magnitudes to measurable and safe levels for instruments and protection relays. A current transformer can reduce 1000 A from a high-voltage line to the standardised 5 A for measuring equipment.

Precision is critical in this application. Ratio and angle errors must be kept within strict limits defined by international standards. The hypothesis is that the transformer operates practically at short circuit in the secondary for current transformers, or at no-load for voltage transformers.

Protection use adds a second requirement: the transformer must reproduce fault conditions reliably enough for a relay to trip. A device designed only for measurement accuracy may saturate during a short circuit, hiding the actual current from the protection system and delaying disconnection.

Dominant variable: the transformation ratio [[numero_de_espiras_primario]]/[[numero_de_espiras_secundario]] must be exact and stable throughout the operating range.
Validity limit: core saturation is the limiting effect; if primary current exceeds the design nominal value, the transformation ratio ceases to be valid and unacceptable measurement errors appear.

## 5. Impedance transformer in audio amplifiers

Valve output transformers in audio amplifiers adapt the high internal impedance of valves to the low impedance of loudspeakers. A valve may have an output impedance of 3000 ohms, while a typical loudspeaker has 8 ohms. The transformer performs this adaptation while conserving power.

The optimal turns ratio is the square root of the impedance ratio. In the example, the ratio between [[numero_de_espiras_primario]] and [[numero_de_espiras_secundario]] should be close to the square root of 3000 divided by 8, around 19.4. The hypothesis is that the transformer has a flat frequency response in the audio band, between 20 Hz and 20 kHz.

Dominant variable: reflected impedance depends on the square of the turns ratio and controls how much power actually reaches the loudspeaker.
Validity limit: the ideal model fails at extreme frequencies, where parasitic capacitances and leakage inductances degrade the response and increase distortion.