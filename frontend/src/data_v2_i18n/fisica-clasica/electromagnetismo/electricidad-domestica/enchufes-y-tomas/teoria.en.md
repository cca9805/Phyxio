## Conceptual context

A socket connects the fixed installation of the home to the user's portable devices. It is the last link in a chain of protections that includes the RCD, the MCB, and the installation wiring. However, the socket itself has no active protection: its only design limit is [[corriente_maxima_nominal]], a passive threshold that does not trip — it only defines when use is safe and when it is not.

The concept of [[margen_uso]] connects this leaf with that of differential and thermal-magnetic breakers: there the margin is calculated relative to the trip threshold of active protections; here it is calculated relative to the passive limit of the socket. The logic is the same: a dimensionless ratio measuring proximity to the safety limit.

## 🟢 Essential level

A socket has a current limit [[corriente_maxima_nominal]] printed on the device or declared by the manufacturer. In European domestic installations, the most common value is 16 A. A low-quality power strip may have 10 A.

When several devices are connected to the same socket or strip, the individual current [[corriente_individual_de_carga]] of each device adds up. If that sum exceeds [[corriente_maxima_nominal]], the socket is in overload. The contacts heat up. If the situation persists, the casing plastic may soften, contacts may oxidise or deform, and fire risk increases.

The fact that no RCD or MCB trips does not guarantee the socket is safe. The RCD detects earth leakage; the MCB protects the circuit wiring. Neither protects the internal contacts of the socket against local overload.

## 🔵 Formal level

The current demanded by an individual device of power [[potencia_de_carga]] connected to a socket at voltage [[tension_de_suministro]] is:

{{f:corriente_individual}}

The total current flowing through the contacts when several devices of total power [[potencia_total_simultanea]] are simultaneously connected is:

{{f:corriente_total}}

This [[corriente_total_en_la_toma]] is compared with [[corriente_maxima_nominal]]. To quantify the socket usage margin, the ratio is defined as:

{{f:ratio_uso}}

When [[margen_uso]] reaches 1, the socket is at its nominal limit. Higher values indicate active overload.

The maximum power connectable without exceeding the nominal limit is:

{{f:potencia_max}}

To evaluate local thermal risk when the socket or plug shows degraded contact, the localised Joule law is applied:

{{f:perdida_contacto}}

This [[potencia_disipada_en_el_contacto]] grows with the square of [[corriente_total_en_la_toma]]: doubling the current quadruples the heat dissipated at the contact.

## 🔴 Structural level

The ideal socket model assumes [[resistencia_de_contacto]] = 0 and therefore [[potencia_disipada_en_el_contacto]] = 0. In practice, even new sockets have [[resistencia_de_contacto]] on the order of hundredths of an ohm. Over time and use, [[resistencia_de_contacto]] can increase due to oxidation of the metallic contact, dirt accumulated at the interface, mechanical deformation of the terminal, or degradation of the conducting material.

The validity limit of the resistive model is steady state with RMS AC current. Motor startup transients or capacitor charging currents can generate brief current peaks exceeding [[corriente_maxima_nominal]] without causing immediate degradation, because the energy dissipated in each transient is small.

The model does not include the temperature distribution in the casing or the thermal resistance from the contact to the environment. Under reduced-ventilation conditions (strip under furniture, covered socket) the actual temperature may be higher than predicted by a steady-state dissipation model.

Practical validity domain: steady state, resistive or near-resistive load, power factor close to unity. For loads with high inrush or significant power electronics, analysis requires considering the current waveform.

## Deep physical interpretation

The difference between overload and thermal contact defect is the most important conceptual distinction in this leaf. In overload, [[corriente_total_en_la_toma]] exceeds [[corriente_maxima_nominal]] and heat is produced because the current is excessive. In a thermal defect, [[corriente_total_en_la_toma]] may be within the limit but [[resistencia_de_contacto]] is abnormally high, and [[potencia_disipada_en_el_contacto]] = [[corriente_total_en_la_toma]]² · [[resistencia_de_contacto]] is significant because [[resistencia_de_contacto]] has increased through degradation.

Both phenomena have the same physical consequence — contact heating — but different causes and different solutions. Identifying which is present is the first diagnostic step: calculate [[margen_uso]] and, if it is acceptable, estimate whether [[potencia_disipada_en_el_contacto]] could be significant given the contact condition.

## Order of magnitude

In a typical Spanish residential installation, [[tension_de_suministro]] = 230 V. A standard socket has [[corriente_maxima_nominal]] = 16 A, so its [[potencia_maxima_nominal]] is approximately 3 680 W. A low-quality 10 A strip has [[potencia_maxima_nominal]] of 2 300 W.

Connecting a 2 000 W heater, a 90 W laptop, and an 18 W charger to the same strip gives [[potencia_total_simultanea]] of 2 108 W, equivalent to [[corriente_total_en_la_toma]] of 9.2 A, with [[margen_uso]] of 0.57. Within limits. Adding a second 2 000 W heater raises [[potencia_total_simultanea]] to 4 108 W, [[corriente_total_en_la_toma]] to 17.9 A, and [[margen_uso]] to 1.12: active overload.

A [[resistencia_de_contacto]] of 0.1 Ω with [[corriente_total_en_la_toma]] = 16 A dissipates 25.6 W at the contact. With [[resistencia_de_contacto]] = 0.5 Ω (degraded contact), dissipation rises to 128 W, enough to damage the plastic within minutes.

## Personalized resolution method

To evaluate whether a socket or strip is overloaded:

1. Identify all simultaneously connected devices and their nominal powers [[potencia_de_carga]].
2. Sum powers: calculate [[potencia_total_simultanea]].
3. Calculate [[corriente_total_en_la_toma]] using the total current formula with [[tension_de_suministro]] = 230 V.
4. Identify [[corriente_maxima_nominal]] of the socket or strip (manufacturer label).
5. Calculate [[margen_uso]] and compare with 1.
6. If [[margen_uso]] > 0.8 in continuous use, redistribute load or switch to a higher-capacity strip.
7. If thermal symptoms appear (heat at plug, burning smell, discoloured plastic), inspect [[resistencia_de_contacto]] and replace the socket.

## Special cases and extended example

**Case A — Strip with multiple chargers.** Four 18 W smartphone chargers, a 65 W laptop, and a 10 W LED lamp: [[potencia_total_simultanea]] = 147 W, [[corriente_total_en_la_toma]] = 0.64 A. [[margen_uso]] = 0.04. No thermal risk.

**Case B — Heaters on a strip.** Two 2 000 W heaters on a 10 A strip ([[potencia_maxima_nominal]] = 2 300 W): [[potencia_total_simultanea]] = 4 000 W, [[corriente_total_en_la_toma]] = 17.4 A. [[margen_uso]] = 1.74. Severe overload. Immediate risk.

**Case C — Degraded contact without overload.** [[corriente_total_en_la_toma]] = 8 A (within the 16 A limit) with [[resistencia_de_contacto]] = 0.3 Ω due to oxidation: [[potencia_disipada_en_el_contacto]] = 19.2 W. No MCB trips, but local heat can progressively damage the contact.

## Real student questions

**If the strip has its own fuse, is it protected against overload?** The strip fuse protects the circuit against short circuit, but not necessarily against slow thermal degradation from moderate overload. A 16 A fuse may not act against a 10% overload that, sustained for hours, progressively degrades the contact.

**Is a higher-ampere strip always better?** A 16 A strip is safer than a 10 A one only if the internal wiring and contacts are dimensioned for 16 A. A low-quality strip labelled 16 A may have contacts that cannot handle that current. The quality mark and product standard (EN 61058) are more relevant than the declared [[corriente_maxima_nominal]] value.

**Why are heaters the main risk in power strips?** Because they have high and constant [[potencia_de_carga]] for hours. A 2 000 W heater draws approximately 8.7 A continuously. If other devices share the same strip, [[corriente_total_en_la_toma]] can quickly exceed [[corriente_maxima_nominal]]. Additionally, the heater heat raises the strip's ambient temperature, reducing its dissipation capacity.

## Cross-cutting connections and study paths

This leaf connects directly with **differential and thermal-magnetic breakers** (protections do not detect local socket overload), with **voltage and power at home** (P and V as input data), and with **electrical safety** (consequences of contact heating). The Joule law localised at [[resistencia_de_contacto]] is the bridge between the observable electrical quantity ([[corriente_total_en_la_toma]]) and the physical risk (contact temperature).

Recommended study path: **electric current → resistance and Ohm's law → electrical power → voltage and power at home → plugs and sockets (this leaf) → differential and thermal-magnetic breakers → electrical safety.**

## Final synthesis

The socket has a limit [[corriente_maxima_nominal]] that must not be exceeded in continuous operation. Total current [[corriente_total_en_la_toma]] = [[potencia_total_simultanea]] / [[tension_de_suministro]] is the quantity flowing through the contacts. The ratio [[margen_uso]] = [[corriente_total_en_la_toma]] / [[corriente_maxima_nominal]] quantifies proximity to overload. The Joule law localised at [[resistencia_de_contacto]] explains the thermal risk even with currents within the limit when the contact is degraded. No circuit protection detects this risk: the only defence is not to exceed [[margen_uso]] and to maintain contacts in good condition.