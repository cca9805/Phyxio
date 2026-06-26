## Conceptual errors


### Error 1: Believing voltage drops when connecting more appliances

**Why it seems correct**

Mechanical intuition suggests that when consuming more of a finite resource, the pressure must drop. Students incorrectly transfer the analogy of hydraulic pressure.

**Why it is incorrect**

The electrical network is designed as a regulated voltage source. Transformers maintain the secondary voltage within strict margins through active regulation. The voltage remains at [[tension_de_red]] constant; what increases is the total current [[corriente_total_de_linea]] to maintain the delivered power.

**Detection signal**

The student formulates problems such as "if I connect another radiator, how much will the voltage drop?" or expects lower-power appliances to work worse when large appliances are connected simultaneously.

**Conceptual correction**

The network voltage is independent of the load under normal conditions. What limits the network capacity is the maximum current [[corriente_maxima_del_circuito]] that the cables can withstand without overheating. The MCB protects against excess current.

**Mini-example of contrast**

*Incorrect*: You connect a high-power oven and the voltage drops, so the real power is lower.

*Correct*: The voltage remains at 230 V. The oven extracts the current calculated through the total current formula. If the current exceeds the MCB rating, it trips protecting the installation.


### Error 2: Confusing parallel connection with series connection

**Why it seems correct**

In simple textbook circuits, receptors often appear drawn one after another. Students confuse the physical arrangement of sockets with the actual electrical arrangement.

**Why it is incorrect**

In a series connection, the voltage is divided between the receptors. In the real domestic installation, all sockets are connected directly to the phase and neutral conductors, forming parallel branches. Each receptor sees the full voltage of [[tension_de_red]] and extracts its own current.

**Detection signal**

The student calculates the equivalent resistance of the house as if all appliances were in series. They also expect that when a bulb burns out, the supply to the entire house is interrupted.

**Conceptual correction**

The domestic installation uses exclusively parallel connection. Each receptor has its own terminals connected directly to the line. The total current [[corriente_total_de_linea]] is the sum of all individual currents.

**Mini-example of contrast**

*Incorrect*: Three lamps in series consume the total power and each receives lower voltage, glowing dimly.

*Correct*: Three lamps in parallel consume the total power, each receives the nominal voltage glowing at maximum, and the total current is the sum calculated with the corresponding formula.

## Model errors


### Error 3: Applying the resistive model to motors and inductive loads

**Why it seems correct**

Electric motors have labels with nominal power and voltage values. The student assumes that the relationship between power and current is universal and that simply applying the formula gives the current.

**Why it is incorrect**

Motors present a power factor different from 1 due to their inductive windings. The active power is less than the apparent power by a factor typically of 0.7 to 0.9. Additionally, motors have starting current several times higher than the nominal.

**Detection signal**

Current calculations for refrigerators give values lower than those measured. The MCB trips when the motor starts even though the nominal power suggests it should withstand it.

**Conceptual correction**

The resistive model only applies to receptors with power factor equal to 1. For inductive loads, the real current is greater than that calculated by the simple model. Motors require models that include inductive reactance.

**Mini-example of contrast**

*Incorrect*: A refrigerator of nominal power consumes according to the resistive model a small current, well within a standard circuit.

*Correct*: With power factor less than 1, the nominal current is greater. Additionally, the starting current reaches several amperes for several seconds. If it starts simultaneously with other appliances, it can exceed the circuit margin.

## Mathematical errors


### Error 4: Confusing total power with maximum circuit power

**Why it seems correct**

The student reads that a circuit has an MCB of [[corriente_maxima_del_circuito]] and calculates the maximum power as the product of [[tension_de_red]] by [[corriente_maxima_del_circuito]]. Then they sum the powers of all appliances in the house and compare directly with that limit.

**Why it is incorrect**

Although the theoretical maximum power is the product of [[tension_de_red]] by [[corriente_maxima_del_circuito]], in practice appliances do not all operate simultaneously. Summing nominal powers without weighting real use produces pessimistic estimates. The correct calculation requires estimating the real simultaneous power using the usage margin [[margen_uso]].

**Detection signal**

The student declares that a kitchen with oven, ceramic hob and microwave necessarily needs the sum of their powers and therefore cannot work with a standard circuit. They do not consider that rarely are they all used at maximum simultaneously.

**Conceptual correction**

The total connected power can exceed the maximum circuit power as long as not everything is activated at once. The relevant parameter is the simultaneous total current calculated from the active powers at each moment. Correct design distributes high loads across independent circuits.

**Mini-example of contrast**

*Incorrect*: Having many watts connected throughout the house requires a high-capacity circuit breaker.

*Correct*: With a typical simultaneity coefficient, the expected simultaneous power is less than the nominal sum. Calculating [[corriente_total_de_linea]] with the corresponding formula and comparing with [[corriente_maxima_del_circuito]] through the usage margin, it is verified that a standard breaker may be sufficient with margin.

## Interpretation errors


### Error 5: Interpreting the usage margin as probability of failure

**Why it seems correct**

The usage margin [[margen_uso]] is a fraction between 0 and 1. The student confuses it with a probability: they think that a margin of 0.8 means probability of failure or that there is free capacity without risk.

**Why it is incorrect**

The usage margin is a load fraction, not a probability. A value of 0.8 indicates that we are using 80 % of the nominal capacity of the circuit. However, this margin is not linear or guaranteed: motor starting peaks can make it trip even with [[margen_uso]] close to 0.8.

**Detection signal**

The student concludes that with [[margen_uso]] of 0.9 they can continue connecting appliances until reaching 1.0 exactly. They also expect the MCB to trip instantly when the margin reaches 1.0.

**Conceptual correction**

The usage margin is a risk indicator, not a strict limit. As a practical rule, it is recommended not to exceed 80 % continuously to leave margin for peaks. The MCB has time-current tripping curves that allow temporary overloads but act upon sustained overloads.

**Mini-example of contrast**

*Incorrect*: With [[margen_uso]] of 0.95 you have minimum probability of the MCB tripping; with 0.8 you have ample safe margin.

*Correct*: With [[margen_uso]] of 0.95 you are at 95 % of capacity, which is risky because any starting peak can exceed the threshold. With 0.8 you have margin for peaks, but the risk depends on the real load profile, not on abstract probability.

## Quick self-control rule

Before solving any household electrical network problem, mentally verify:

1. **Am I using [[tension_de_red]] constant?** If your answer implies that voltage changes with load, review the concept of voltage source.

2. **Have I summed currents or powers?** In parallel, currents are summed; voltage is common. If you sum powers, verify that all receptors are at the same voltage.

3. **Does my result for [[corriente_total_de_linea]] make physical sense?** An oven is typically between 8 to 12 A; an LED lamp between 0.05 to 0.2 A. If you get 50 A for a domestic appliance, you have made a unit error possibly confusing watts with kilowatts.

4. **Have I checked the usage margin [[margen_uso]]?** Always calculate the ratio between [[corriente_total_de_linea]] and [[corriente_maxima_del_circuito]]. If it is greater than 0.8, there is overload risk. If it is greater than 1.0, the MCB should trip.