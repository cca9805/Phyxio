## Conceptual context

The domestic electrical network is the system that distributes electrical energy from the utility company to all receptors in a dwelling. Unlike a constant current source, the European network is designed to maintain a **practically constant voltage** of 230 V at a frequency of 50 Hz, regardless of how many appliances are connected.

This constant voltage source behavior has fundamental physical implications. When we connect a receptor (a lamp, a refrigerator, a computer), it draws from the network the current it needs to operate, proportional to its power. The voltage does not decrease, but the **total current** flowing through the line increases. This is the central principle that explains why domestic circuits have power limits and why miniature circuit breakers (MCBs) exist as protection.

Understanding this model is essential for sizing installations, avoiding overloads, and comprehending the practical limitations of electricity in the home.

## 🟢 Essential level

The dominant physical idea is surprisingly simple: **the electrical network always maintains 230 V**, and each appliance you connect "requests" the current it needs. The network does not "send" current; rather, receptors extract it according to their power.

Imagine the network as a water tank at constant pressure (the voltage). When you open a tap, water flows out at a certain rate (the current). If you open more taps, the total flow rate increases, but the pressure remains constant as long as the system can supply the water. Only when you exceed the capacity of the pipes does the pressure begin to drop or a safety valve activates.

In electricity, the same thing happens. A 2000 W oven draws approximately 8.7 A from the network. If you also connect a 1500 W hair dryer, it draws another 6.5 A. The **total current** adds both: 15.2 A. The voltage remains 230 V, but the wiring and the MCB must withstand those 15.2 A without overheating.

The **MCB (magnetotermico)** is the guardian of the circuit. It is calibrated to withstand a maximum current (typically 16 A, 20 A, or 25 A in domestic installations). If the total current exceeds that limit, the device automatically cuts the supply to prevent fires from overheating of the wiring.

> [!IMPORTANT]
> The network voltage **does not decrease** when you connect more appliances. The network is designed as a constant voltage source. What increases is the total current, not the voltage.

## 🔵 Formal level

The resistive model operates within the context of the European network with its characteristic parameters:

{{f:frecuencia_contexto}}

The mathematical relationship between power, voltage, and current is expressed through the fundamental formula of the resistive model:

{{f:corriente_total}}

This equation establishes that the **total current** [[corriente_total_de_linea]] demanded by the installation is directly proportional to the **total connected power** [[potencia_total_conectada]] and inversely proportional to the **network voltage** [[tension_de_red]], which remains constant at 230 V in the European standard.

The formula has a natural rearrangement that allows calculating power if we know the current:

{{f:potencia_total}}

This pair of equations constitutes the mathematical core of the model. Both are valid exclusively for **resistive loads** with unity power factor, where active power coincides with apparent power.

To evaluate the overload risk, we introduce a crucial dimensionless magnitude: the **usage margin** [[margen_uso]], defined as the ratio between the total demanded current and the maximum current allowed by the MCB:

{{f:margen_capacidad}}

Where [[corriente_maxima_del_circuito]] represents the **nominal rating** of the MCB (16 A, 20 A, 25 A, etc.). When [[margen_uso]] reaches or exceeds the value 1, the circuit is overloaded and the protection must trip.

> [!NOTE]
> The margin [[margen_uso]] is a dimensionless fraction. A value of 0.8 indicates that we are using 80 % of the circuit capacity, leaving a 20 % safety margin.

## 🔴 Structural level

The domestic electrical network model rests upon a **constant voltage source architecture** with practical limitations that define its validity domain and failure conditions.

**Structural hypotheses of the model:**

- The network behaves as a perfectly constant voltage source (230 V ± regulatory tolerance)
- Receptors are connected in **parallel**, not in series
- The impedance of the household wiring is negligible compared to the resistances of the receptors
- Receptors are purely resistive (power factor = 1)
- There is no phase imbalance (standard single-phase installation)

**Validity conditions:**

The model is valid when:
- Receptors are resistive (heaters, incandescent lamps, electric ovens without electronics)
- Lines are short and of adequate cross-section (voltage drop less than 3 %)
- The actual voltage at terminals remains close to 230 V
- There are no significant harmonics distorting the sinusoidal waveform

**Model failure signals:**

The model ceases to be applicable when:
- Receptors are inductive (motors, transformers) or capacitive, introducing phase shifts between voltage and current
- The wiring is old or of insufficient cross-section, producing appreciable voltage drops
- Overvoltages or undervoltages occur in the general network
- The network frequency varies significantly from the nominal 50 Hz

> [!WARNING]
> The model **fails silently** when you connect many inductive appliances (refrigerator motors, washing machine, air conditioner). The actual current may be greater than that calculated by the resistive model due to the power factor.

## Deep physical interpretation

The constant voltage nature of the domestic electrical network has its origin in the **regulation by the utility company**. Distribution transformers are designed to maintain the secondary voltage within strict margins (typically ±10 %), regardless of the connected load. This contrasts with a constant current source, where the current would be fixed and the voltage would vary with the load.

The **parallel connection** of receptors is fundamental. When you connect a second appliance, you do not reduce the voltage available to the first (as would happen in a series connection with resistances), but both see the same 230 V. Each one draws its current independently, and the supply cable must transport the sum of both.

The **MCB** acts as a **reusable fuse sensitive to current**. When the total current [[corriente_total_de_linea]] exceeds the limit [[corriente_maxima_del_circuito]] for a sufficient time, the heat generated by the Joule effect in a bimetallic element causes the mechanical opening of the circuit. The parameter [[margen_uso]], obtained by dividing [[corriente_total_de_linea]] by [[corriente_maxima_del_circuito]], is a direct indicator of the **thermal risk** of the wiring.

## Order of magnitude

In a typical European domestic installation, the orders of magnitude are:

- **Voltage**: 230 V (regulatory constant)
- **Power of a basic circuit**: up to 3680 W
- **Power of a high-capacity circuit**: up to 4600 W or 5750 W
- **Current of an oven**: 8–12 A
- **Current of a washing machine**: 6–10 A
- **Current of LED lighting**: 0.1–2 A

The typical usage margin [[margen_uso]] varies:
- 0.0–0.3: Installation with little load (safe)
- 0.3–0.7: Normal load of a dwelling (safe with margin)
- 0.7–0.9: High load (caution, avoid connecting more)
- 0.9–1.0: Critical load (risk of imminent tripping)
- greater than or equal to 1.0: Overload (the MCB must trip)

> [!TIP]
> As a practical rule, **do not exceed 80 % of the circuit capacity** continuously. Leave margin for motor starting peaks and future expansions.

## Personalized resolution method

To solve domestic circuit sizing problems, follow this sequence:

1. **Power inventory**: Sum the nominal powers [[potencia_total_conectada]] of all receptors that could operate simultaneously on the circuit.

2. **Current calculation**: Apply the current formula using [[tension_de_red]] fixed at 230 V. You obtain the theoretical maximum current.

3. **Application of simultaneity coefficient**: In practice, not all appliances operate at once. Apply a coefficient of 0.7–1.0 according to actual use (1.0 for circuits with a single fixed appliance like an oven).

4. **Rating selection**: Choose an MCB with [[corriente_maxima_del_circuito]] higher than the calculated current, selecting the immediately higher commercial value (16, 20, 25 A).

5. **Margin verification**: Calculate the margin by dividing total current by [[corriente_maxima_del_circuito]]. If it is greater than 0.8, distribute the load or increase the rating if the installation permits.

6. **Cable cross-section verification**: Consult electrical regulations to confirm the cable can safely carry the selected [[corriente_maxima_del_circuito]].

## Special cases and extended example

**Case 1: Connection of electric motors**

Electric motors (refrigerator, washing machine, dishwasher pump) present a **power factor** different from 1 and a **starting current** 5–7 times higher than the nominal current during the first seconds. The resistive model underestimates the actual current. In these cases, it is prudent to leave a more conservative usage margin (value of [[margen_uso]] less than 0.7).

**Case 2: Voltage drop in long lines**

In large dwellings or commercial premises with very extensive wiring, the resistance of the conductors is not negligible. The voltage at the extreme receptors may be lower than 230 V, causing them to draw more current to compensate and maintain their power. The model fails under these conditions.

**Complete numerical example:**

A kitchen has the following receptors on the same 16 A circuit:
- Oven: 2400 W
- Ceramic hob (2 burners): 2000 W
- Microwave: 800 W

The maximum total power [[potencia_total_conectada]] reaches 5200 W.

The calculated current dividing 5200 W by 230 V gives 22.6 A

The 16 A MCB will trip if you try to use everything simultaneously. The practical solution is to distribute across two circuits (oven on one, hob and microwave on another) or increase to 25 A if the installation permits.

## Real student questions

**Q: Why doesn't the voltage drop when I connect more appliances?**
A: Because the network is designed as a constant voltage source. Distribution transformers actively regulate the voltage. What increases is the total current, not the voltage.

**Q: Can I change the 16 A MCB for a 25 A one to get more power?**
A: Only if the wiring is sized to safely carry 25 A without overheating. A 1.5 mm² cable cannot safely carry 25 A. Consult an electrician before changing ratings.

**Q: Why does the refrigerator sometimes make the breaker trip when it starts?**
A: Motors have a starting current much higher than the nominal current (can be 6 times higher) for a few seconds. If the circuit is already loaded, that peak can momentarily exceed [[corriente_maxima_del_circuito]].

**Q: Does the model fail with LEDs?**
A: LEDs have internal electronics (driver) that make them not behave as pure resistances. However, their consumption is so low that the model error is insignificant in practice.

**Q: How do I know if I'm near the limit without doing calculations?**
A: Sum mentally: every 1000 W is approximately 4.3 A at 230 V. A 16 A circuit can support about 3600 W of continuous load. If you have an oven (2000 W) and a hair dryer (1500 W), you are already near the limit.

## Cross-cutting connections and study paths

This leaf connects directly with other topics in the domestic electricity block, where the switching connection of circuits and the physical interfaces of connection are analyzed.

From here, you can advance towards:
- **Electrical consumption analysis**: Leaf on electricity bills, contracted power, and energy optimization
- **Domestic electrical safety**: Residual current devices, grounding, protection against indirect contacts
- **Power electronics**: Voltage source versus current source, switched-mode regulation

In the **electromagnetism** block, this leaf is the foundation for understanding real installations before studying more complex circuits.

## Final synthesis

The domestic electrical network operates as a **constant voltage source of 230 V**. Each receptor connected in parallel draws the current it needs according to its power, and the **total current** is the sum of all those individual currents. The **MCB** protects the installation by cutting the supply when the total current exceeds the safety limit of the wiring.

The resistive model, based on the relationship between [[corriente_total_de_linea]], [[potencia_total_conectada]] and [[tension_de_red]], allows calculating the expected current and evaluating the **usage margin** of the circuit. However, this model has limitations: it fails with inductive loads, long lines, or when the wiring impedance is not negligible. Understanding these validity boundaries is as important as mastering the equations of the basic model.