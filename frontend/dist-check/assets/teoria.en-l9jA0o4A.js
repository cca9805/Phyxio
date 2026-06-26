const e=`# Electrical Safety

## Conceptual context

Electrical safety is the set of physical and regulatory principles that determine when an electrical installation can cause harm to people or property. Each regulatory limit has a measurable physical justification based on the human body's physiological response to electric current.

In the domestic context, the grid at 230 V AC 50 Hz is sufficient to cause death if a person remains connected between phase and ground. Safe coexistence with this voltage is a direct consequence of installed physical protections: the residual current device (RCD) and the circuit breaker.

Understanding electrical safety requires knowing three inseparable concepts: the contact voltage applied to the body, the body resistance that limits current flow, and the resulting current that produces physiological damage.

## 🟢 Essential level

When a person accidentally touches a live conductor, the human body acts as a resistance in the circuit. The resulting current depends on the source voltage and the resistance opposed by the body.

Biological damage is not produced by voltage directly, but by the **electric current flowing through the tissues**. Currents below 1 mA are imperceptible. Between 1 and 10 mA cause a painful tickle. From 10 mA, muscles contract involuntarily (tetanization), preventing the person from letting go of the conductor. Between 30 and 100 mA, there is a real risk of ventricular fibrillation if exposure exceeds 30 ms.

**Body resistance** varies drastically depending on skin conditions. With dry hands it can exceed 50,000 Ω, while with wet hands it drops to 1,000 Ω, multiplying the resulting current by 50. Therefore, safety standards are extremely strict in bathrooms and wet areas.

## 🔵 Formal level

The fundamental relationship of electrical safety is Ohm's Law applied to the contact circuit:

{{f:corriente_corporal}}

where [[I_cuerpo]] is the current flowing through the body (in amperes), [[V_contacto]] is the contact voltage (in volts), and [[R_cuerpo]] is the electrical resistance of the body (in ohms).

The normative reference value for [[R_cuerpo]] is 1000 Ω (according to international standard IEC 60479), representing the worst case with wet skin. With 230 V and this resistance, the theoretical body current would reach 230 mA, massively exceeding the fibrillation threshold.

The evaluation of the installed differential's protection level is quantified by the margin:

{{f:margen_proteccion}}

where [[I_diferencial]] is the threshold of the installed differential device. The [[margen]] is a dimensionless quantity; a value greater than 1 indicates effective protection, while less than 1 indicates an unmitigated risk.

To evaluate direct biological risk on the organism against the tolerable limit, the physiological safety ratio is used:

{{f:ratio_seguridad}}

where [[ratio_seguridad]] is the safety ratio and [[I_segura]] is the safe limit current (30 mA). If [[ratio_seguridad]] exceeds unity, the body current surpasses the physiological safety threshold for ventricular protection.

The physiological thresholds of [[I_segura]] established by standard IEC 60479 are:
- **Less than 1 mA**: imperceptible.
- **1 to 10 mA**: perception and tickle without danger.
- **10 to 30 mA**: muscle tetanization and inability to let go.
- **30 to 100 mA**: possible ventricular fibrillation with exposure over 30 ms.
- **More than 100 mA**: ventricular fibrillation almost certain and potentially lethal.

The standard 30 mA differential is designed to trip at the threshold of the fibrillation zone, in a time under 30 ms.

## 🔴 Structural level

The complexity of electrical safety lies in the real interdependence of physical parameters.

**Temporal dependence of resistance.** Body resistance decreases with exposure time. Electrical burns progressively destroy the skin's resistive layer, reducing [[R_cuerpo]] during contact. This creates a dangerous positive feedback: longer contact time leads to lower resistance and higher body current. The fast RCD response (under 30 ms) stops this lethal cycle before it develops.

**Anatomical path and cardiac risk.** Fibrillation risk depends on the fraction of [[I_cuerpo]] crossing the heart. The left hand-to-feet path is the most dangerous because it crosses the cardiac muscle directly. Paths like hand-to-hand are also critical, while right hand-to-feet presents a slightly lower but still lethal cardiac risk.

**Contact voltage vs. grid voltage.** In indirect contacts (insulation failure in appliances), the contact voltage depends on the ground circuit resistance. With a proper ground, voltage is reduced to safe levels; with faulty ground, contact voltage can reach the full 230 V grid voltage.

**Temporal dependence of thresholds.** IEC 60479 establishes safety curves in the current-time plane. With 100 mA the maximum safe time is 30 ms, while with 30 mA it extends to seconds. Differential trip time is critical: it must open the circuit before the current-time product causes irreversible biological damage.

**Accumulated leakage currents and selectivity.** Real installations present small parasitic leakages due to insulation aging and capacitive filters. The sum of these leakages consumes part of the differential threshold, reducing the safety [[margen]] for accidental contacts. Therefore, high-sensitivity differentials (10 mA) are installed in high-risk wet areas like bathrooms, leaving higher thresholds for general circuits.

## Deep physical interpretation

Electrical safety illustrates how real danger differs from intuitive perception. People usually fear high voltage, but voltage is only the indirect cause. The direct biological damage agent is the resulting electric current. A 30,000 V generator with 10 MΩ internal resistance is harmless (current under 3 mA), while the 230 V domestic grid with low resistance is deadly.

Safety standards design protections based on the worst-case body resistance (1000 Ω). This ensures the differential protects effectively even under the most unfavorable contact circumstances.

The physical relationship also explains why 50 V is the normative safe voltage limit: with the minimum body resistance of 1000 Ω, it produces exactly 50 mA, the threshold value above which muscle tetanization prevents voluntary release of the conductor.

## Order of magnitude

Relevant electrical safety currents span four orders of magnitude on the milliampere scale (mA = 10⁻³ A):

- **0.5 mA**: perception threshold (physiologically insignificant).
- **10 mA**: muscle tetanization threshold (inability to let go).
- **30 mA**: standard differential trip threshold (equivalent power of about 6.9 W at 230 V).
- **100 mA**: ventricular fibrillation threshold in short exposures.

Any calculation producing [[I_cuerpo]] above 300 mA with domestic voltage indicates an [[R_cuerpo]] below 770 Ω, which is physically and physiologically implausible except in the presence of open wounds or direct mucous contact.

## Personalized resolution method

To evaluate electrical risk in a contact scenario:

1. **Identify contact voltage** [[V_contacto]]: determine if it is direct phase contact (230 V) or indirect contact through a faulty enclosure.
2. **Estimate body resistance** [[R_cuerpo]]: classify the environment as dry (above 10,000 Ω), wet (1000 to 5000 Ω), or damp (below 1000 Ω).
3. **Calculate body current** [[I_cuerpo]] as the ratio between [[V_contacto]] and [[R_cuerpo]].
4. **Evaluate danger level** by comparing [[I_cuerpo]] with IEC 60479 standard thresholds.
5. **Calculate the safety ratio** [[ratio_seguridad]] by dividing [[I_cuerpo]] by [[I_segura]] (30 mA) and the protection [[margen]] by dividing [[I_diferencial]] by [[I_cuerpo]].
6. **Determine protection effectiveness**: check if the [[margen]] is greater than or equal to 1 and trip time is less than 30 ms.

## Special cases and extended example

**Special case 1: the bathroom.** The presence of water and conductive surfaces reduces body resistance to 500 Ω. An insulation failure in an appliance without proper ground generates 230 V of contact, producing a 460 mA current, lethal in milliseconds. This justifies the requirement for high-sensitivity differentials and strict safety distances.

**Special case 2: the open neutral.** Although neutral is usually at ground potential (close to 0 V), an interruption in the neutral conductor shifts its potential toward the phase (100 to 230 V). Assuming the neutral is always safe is a critical conceptual error.

**Special case 3: the wet glove paradox.** Dry leather gloves raise resistance to 100,000 Ω, blocking current. However, if they get wet with sweat, resistance drops drastically to 5,000 Ω, allowing tetanizing currents (46 mA). Protections must always be designed for the worst wet scenario.

## Real student questions

**Why are 1 mA differentials not used everywhere?**
Because all installations present harmless parasitic leakage currents due to cable capacitance and equipment filters. Their sum usually reaches 5 to 10 mA. A 1 mA differential would cause continuous nuisance tripping. The 30 mA threshold balances safety and service continuity.

**Why is AC more dangerous than DC?**
The 50 Hz frequency of the AC grid directly interferes with the heart's natural electrical rhythm, facilitating fibrillation. In direct current, hazard thresholds are four times higher because there is no bioelectrical resonance.

**Can an RCD in good condition fail to protect?**
Yes, if the installation already accumulates 25 mA of parasitic leakage, leaving only 5 mA of real protection [[margen]]. It also happens if the RCD mechanism is slow (over 100 ms), allowing a lethal exposure before disconnection.

## Cross-cutting connections and study paths

Electrical safety connects directly to the previous leaf [Differential and circuit breaker](leaf:fisica-clasica/electromagnetismo/electricidad-domestica/diferencial-y-magnetotermico), which details the physical trip mechanisms analyzed here from a biological effectiveness standpoint. The calculated [[margen]] justifies the selection of device sensitivities.

Ohm's Law in this leaf extends basic circuit principles by applying them to a biological resistance. Here, the calculation determines a survival threshold.

Looking forward, the leaf [Risks and precautions](leaf:fisica-clasica/electromagnetismo/electricidad-domestica/riesgos-y-precauciones) concretes preventive measures and safety distances derived from this analysis.

## Final synthesis

Domestic electrical safety is governed by Ohm's Law applied to the human body, relating contact voltage, body resistance, and resulting current. The biological damage is produced by the current, not the voltage directly. Differential protections limit exposure time and current below the ventricular fibrillation threshold. Body resistance is the most critical variable: its drastic drop in wet environments can transform an ordinary contact into a lethal event.
`;export{e as default};
