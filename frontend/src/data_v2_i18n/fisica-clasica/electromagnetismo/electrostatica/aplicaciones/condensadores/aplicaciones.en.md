# Applications

## 1. Cardiac defibrillator

The electrical defibrillator uses a high-[[energia_almacenada_en_el_condensador]] capacitor (typically 100–360 J) to stop ventricular fibrillation by applying a high-voltage current pulse to the heart. The capacitor is slowly charged from the grid or batteries to a [[diferencia_de_potencial]] of 700–1500 V over 5–10 seconds, then discharges its energy into the patient's chest in less than 10 ms through electrodes.

The discharge energy range (100–360 J) is clinically determined: below 100 J may be insufficient to reverse fibrillation; above 360 J may damage myocardial tissue. High [[diferencia_de_potencial]] is necessary for current to cross the patient's transthoracic resistance (typically 40–80 Ω). The capacitors used are high-[[capacidad_electrica]] electrolytic (typically 100–300 µF) with a rated voltage of 1.5–2 kV.

Dominant variable: stored energy [[energia_almacenada_en_el_condensador]], maximized by raising [[diferencia_de_potencial]] squared at a fixed capacitance of 100–300 µF.
Validity limit: the ideal capacitor model assumes discharge into a constant resistive load; in practice thoracic impedance varies during the shock, modifying the pulse shape compared to the ideal exponential discharge.

## 2. Filtering in power supplies

DC power supplies convert alternating grid voltage (50 Hz, 230 V in Europe) into direct current. After rectification, the voltage has a ripple (periodic variation) that the filter capacitor must reduce. The capacitor charges at the peaks of the rectified waveform and partially discharges between peaks, supplying charge proportional to [[capacidad_electrica]] times the tolerable voltage drop.

For ripple below 5% in a 12 V DC supply with a 1 A load at 100 Hz, the minimum capacitance is obtained by dividing the current by twice the product of frequency and tolerable voltage drop, giving approximately 8300 µF. This is why linear supplies use large-[[capacidad_electrica]] electrolytic capacitors (thousands of µF).

Dominant variable: capacitance [[capacidad_electrica]], which must be large enough to keep the voltage ripple [[diferencia_de_potencial]] below the limit tolerated by the load.
Validity limit: the capacitor's rated voltage must exceed the rectified peak grid voltage (≥ 325 V for the European grid) with a minimum 20% safety margin; operating beyond this margin risks dielectric breakdown.

## 3. Capacitive touch sensor

Smartphones, tablets, and modern laptops use touch sensors based on capacitors. The touchscreen is coated with a grid of transparent electrodes forming a matrix of small capacitors. When a finger touches the screen, local [[capacidad_geometrica_del_condensador_plano]] increases because the finger (a conductor) acts as a third plate that raises the capacitance at that point — a phenomenon called capacitive coupling.

The detected variation is on the order of 1–5 pF over a base of 1–10 pF, enough for the detection circuit (typical resolution 0.1 pF) to locate the touch with sub-millimeter precision. The circuit measures the charge transferred at a fixed reference voltage to quantify the increase in [[capacidad_electrica]].

Dominant variable: change in [[capacidad_geometrica_del_condensador_plano]] induced by finger proximity, which acts as an additional conductor and modifies the effective geometry of the capacitor.
Validity limit: the finger effect is only detectable if there are no thick materials (glass over 3 mm, work gloves) between the finger and the electrodes, because the [[capacidad_electrica]] variation decreases with the square of distance.

## 4. Starting capacitor in single-phase electric motors

Single-phase induction motors (used in appliances such as washing machines and air conditioners) need a current phase shift to generate starting torque. A starting capacitor connected in series with the auxiliary winding creates the 90° phase shift needed to produce a rotating field at startup. The capacitor has typical [[capacidad_electrica]] of 10–100 µF and operates at grid frequency (50 Hz).

The reactive impedance of the capacitor — obtained by dividing 1 by the product of angular frequency and [[capacidad_electrica]] — determines, in combination with the auxiliary winding inductance, the effectiveness of the phase shift. For a 50 µF capacitor at 50 Hz this impedance is approximately 63.7 Ω. The [[energia_almacenada_en_el_condensador]] stored is secondary; the capacitor's role here is to create phase shift, not to store energy.

Dominant variable: capacitance [[capacidad_electrica]], which sets the reactive impedance and hence the phase angle between the main and auxiliary windings.
Validity limit: the model is valid only during startup; many motors disconnect the starting capacitor once rated speed is reached, because keeping it connected causes losses and overheating.

## 5. Snubber circuit in power electronics

In power converters (inverters, DC-DC converters), transistor switches open and close thousands of times per second. Each opening produces a voltage transient that can damage the transistor. The **snubber circuit** — a capacitor [[capacidad_electrica]] in parallel with the transistor — absorbs the transient by storing [[energia_almacenada_en_el_condensador]] from the voltage spike and releasing it smoothly after closing.

For a 200 V transient with 1 mJ peak energy, the required capacitance is found by solving for [[capacidad_electrica]] from the [[energia_almacenada_en_el_condensador]] formula: dividing twice the energy by the square of the voltage gives approximately 50 nF. The capacitor must have low parasitic inductance to respond to fast-rising transients (under 100 ns); film capacitors (MKP or MKT) are therefore used, not electrolytic. Energy absorbed per transient is dissipated as heat in the snubber resistor, which at high frequencies can be significant and must be included in thermal design.

Dominant variable: transient voltage [[diferencia_de_potencial]], which enters squared in the [[energia_almacenada_en_el_condensador]] formula and sets the minimum capacitance needed to absorb the spike without exceeding the transistor's voltage rating.
Validity limit: the ideal capacitor model assumes negligible parasitic inductance (ESL); if parasitic inductance is comparable to the commutation circuit inductance, the snubber loses effectiveness and may resonate, worsening the transient instead of suppressing it.