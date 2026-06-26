const e=`# Transformers

## Conceptual context

A transformer is a static device that transfers electrical energy between two circuits through mutual electromagnetic induction. Unlike generators and motors, it has no moving parts: energy transfer occurs entirely through the magnetic field in a shared ferromagnetic core.

Transformers are the backbone of worldwide electrical power systems. They allow voltage to be raised for transmission over large distances with minimal losses, and then reduced for domestic and industrial use. Every phone charger, every electrical substation and every distribution network depends on them. Understanding their operation is understanding how electrical energy travels from generating power stations to the sockets in our homes.

## 🟢 Essential level

A transformer consists of two wire windings wrapped around an iron core. When alternating voltage is applied to the primary winding, a varying magnetic field is generated that passes through the core. This varying field induces a voltage in the secondary winding, allowing energy transfer without direct electrical connection between the two circuits.

The relationship between input and output voltages depends only on the number of turns in each winding. If the secondary has more turns than the primary, the voltage increases. If it has fewer, the voltage decreases. Current behaves inversely: where voltage rises, current falls proportionally, maintaining constant transferred power.

This symmetry between voltage elevation and current reduction is the key to efficient electrical transport. Joule losses in transmission cables depend on the square of the current, so raising the voltage and reducing the current dramatically minimises losses over long distances.

## 🔵 Formal level

The mathematical description of the ideal transformer starts from Faraday's law of electromagnetic induction. The alternating voltage applied to the primary of [[N_1]] turns generates an alternating magnetic flux in the core. The relationship between primary [[V_1]] and secondary [[V_2]] voltages is directly proportional to the ratio between the number of turns:

{{f:relacion_transformacion}}

This equation reveals that voltage transformation is purely geometric, depending only on the turns ratio [[N_1]]/[[N_2]]. A step-up transformer has [[N_2]] > [[N_1]], while a step-down transformer has [[N_2]] < [[N_1]].

Power conservation in the ideal transformer implies that apparent power in the primary equals that in the secondary. Since power is the product of voltage and current, the currents must obey an inverse relationship:

{{f:relacion_corriente}}

The apparent power [[S]], product of [[V_1]] and [[I_1]], represents the transformer's transfer capacity. This rated parameter limits the maximum admissible currents in both windings:

{{f:potencia_aparente}}

In a real transformer, energy losses slightly reduce efficiency. Efficiency [[eta]] compares output active power [[P_2]] with input active power [[P_1]], quantifying the fraction of useful power transferred:

{{f:rendimiento_transformador}}

Total losses [[P_p]] consist of winding copper losses due to the Joule effect [[P_Cu]] and iron core losses due to hysteresis and eddy currents [[P_Fe]]:

{{f:perdidas_totales}}

## 🔴 Structural level

The five equations above form a coherent system that completely describes the transformer's operation at steady state. Primary voltage [[V_1]] and the turns ratio [[N_1]]/[[N_2]] determine the available secondary voltage [[V_2]]. The load connected to the secondary demands a current [[I_2]] that, by power conservation, imposes a primary current [[I_1]] adjusted by the same turns ratio but in inverse form.

This chain of dependencies reveals a fundamental principle: the transformer is a passive device that automatically adapts to the load. If secondary impedance decreases, [[I_2]] increases and consequently [[I_1]], maintaining the energy balance. The primary only consumes the current necessary to supply the power demanded by the secondary plus losses.

Rated apparent power [[S]] is the design parameter that limits the maximum transfer capacity. For any operating point, currents must satisfy [[V_1]] × [[I_1]] ≤ [[S]] and [[V_2]] × [[I_2]] ≤ [[S]]. Exceeding these limits causes overheating due to excessive losses in the conductors.

Efficiency [[eta]] typically reaches its maximum between 50% and 75% of nominal load. At low loads, fixed iron losses dominate. At full load, variable copper losses become significant. This bell-shaped curve guides the selection of the optimal operating point in industrial installations.

The structure also depends on operating frequency and on the magnetic state of the core. At too low a frequency, the core needs more flux to sustain the same [[V_1]] and may approach saturation; at too high a frequency, material losses and winding design constraints become more important. A transformer is therefore not just a turns ratio: it is a compromise among insulation, cooling, copper section, magnetic material, and load regime.

> [!WARNING]
> The ideal model stops being a reliable guide when saturation, accumulated heating, nonlinear load, or short circuit conditions appear. In those cases, [[V_2]] no longer follows the simple geometric relation, and losses [[P_p]] control the physical reading.

## Deep physical interpretation

Mutual induction between windings is the physical manifestation of the interaction between varying magnetic fields and electrical circuits. The alternating magnetic flux generated by primary current links both windings, acting as an energy bridge between electrically isolated circuits. This galvanic separation allows voltage levels to be manipulated without risk of direct connection between systems at different potentials.

Iron losses represent the energy cost of cyclically magnetising and demagnetising the core. Magnetic hysteresis dissipates energy in each cycle as heat, while eddy currents induced in the core itself generate additional losses. The use of laminated cores reduces these parasitic currents, improving overall efficiency.

The efficiency close to 99% in modern power transformers demonstrates that losses can be drastically minimised through careful design. However, the theoretical impossibility of reaching 100% reflects the irreversible nature of magnetisation processes and the finite resistance of conductors.

## Order of magnitude

A typical domestic distribution transformer has a ratio of 13800 V to 230 V, with a rated power of 50 kVA. The nominal currents are approximately 3.6 A in the high-voltage primary and 217 A in the low-voltage secondary. Typical efficiency is 98.5%, with total losses of about 750 W.

In long-distance power transmission, 500 MVA transformers raise voltage from 20 kV to 400 kV. The current reduction from 25000 A to 1250 A decreases line losses by a factor of 400, making transcontinental electrical transport viable.

## Personalized resolution method

To solve transformer problems, follow this order. First identify the known data: [[N_1]], [[N_2]], [[V_1]], [[V_2]], [[I_1]], [[I_2]], [[S]], or [[eta]]. Second, determine the turns ratio [[N_1]]/[[N_2]]. Third, calculate the unknown magnitude using the direct ratio for voltages or the inverse for currents. Fourth, verify the conservation of apparent power. Fifth, if loss or efficiency data are available, apply the corresponding energy balance.

Remember that in the ideal transformer the voltage ratio follows the turns ratio, while the current ratio follows the inverse relation. If [[S]] is known, each rated current is obtained by dividing that apparent power by the voltage of the corresponding winding.

## Special cases and extended example

The no-load transformer is the case where no load is connected to the secondary. Current [[I_2]] is zero, and the primary only consumes the small magnetisation current necessary to establish the flux in the core. This test allows iron losses [[P_Fe]] to be measured.

The short circuit is the limit case where the secondary is directly shorted. The theoretical current would be infinite, but the internal impedance of the transformer limits it to a finite but very high value. The short-circuit test allows copper losses [[P_Cu]] at full load to be determined.

Extended example: a transformer with one thousand primary turns and fifty secondary turns has a twenty-to-one transformation ratio. With [[V_1]] of 230 V, the secondary voltage is 11.5 V. If the connected load demands [[I_2]] of 4 A, the output power is approximately 46 W. The primary current is around 0.2 A, because current is reduced on the primary side by the corresponding inverse proportion. With 95% efficiency, losses are approximately 2.4 W and input power is approximately 48.4 W. These magnitudes are typical of a small power transformer for electronic applications.

## Real student questions

Why doesn't a transformer work with direct current? Because a varying magnetic field is needed to induce voltage in the secondary. With DC, the flux is constant and there is no induction.

Why does a transformer make noise? Due to magnetostriction: the iron core slightly changes dimensions when magnetised cyclically, generating mechanical vibrations.

Can a transformer increase power? No. The active power output is always less than the input due to losses. It only transforms the voltage-current product, maintaining approximately constant power.

What happens if I overload a transformer? Copper losses grow with the square of the current, generating excessive heat that can damage the insulation and cause internal short circuits.

## Cross-cutting connections and study paths

The transformer connects directly with Faraday's concepts of electromagnetic induction and with energy conservation. It is the most important practical application of mutual induction between circuits. The inverse relationship between voltage and current reflects the conservation of power in systems without moving parts.

It also connects with Ohm's law, since the secondary load determines the demanded current. Circuit analysis with transformers requires understanding the reflection of impedances from secondary to primary.

At an advanced level, three-phase transformers are the basis of modern electrical power generation, transmission and distribution. Understanding the single-phase transformer is the indispensable prerequisite for addressing these systems.

## Final synthesis

The transformer transfers electrical energy between circuits through mutual electromagnetic induction in a common ferromagnetic core. The transformation ratio between voltages is direct to the turns ratio, while between currents it is inverse, conserving power. Copper and iron losses reduce efficiency below 100%, although modern transformers achieve efficiencies above 98%. The absence of moving parts makes them robust and reliable, constituting the fundamental element of modern electrical power systems.
`;export{e as default};
