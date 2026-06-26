const e=`# Applications

## 1. Sizing the Kitchen Circuit in a Full Renovation

A kitchen renovation project requires deciding how many independent circuits to install. Regulations allow various configurations, but the physics of this leaf imposes a design condition: the sum of powers must not translate into an [[I_tot]] that saturates the [[I_max]] of the circuit breaker during real simultaneous use.

The installer must estimate not the nominal power of each appliance, but the current that will actually flow. An oven with high [[P_tot]] demands a different rating than a hob of equal nominal power if their usage profiles differ. The technical decision consists of predicting [[margen_uso]] under variable simultaneity scenarios.

Installer experience accounts for the fact that not all receptors operate simultaneously. The oven may be running while the hob is turned off. However, during intensive meal preparation periods, the probability of coincidence increases. The calculation must consider this worst-case scenario to ensure protection does not trip unjustifiably.

The total current [[I_tot]] is obtained by summing the individual currents that each receptor demands from the network. Since all share the same voltage [[V]], the power of each determines its contribution to the aggregated current. A common error consists in summing powers without converting them to current, forgetting that the technical decision is made in the domain of current that the cable must carry.

Dominant variable: [[I_tot]] under maximum simultaneous demand conditions.

Validity limit: Resistive loads with power factor close to unity; lines with impedance negligible compared to protection.

## 2. Integrating Air Conditioning in an Old Dwelling

A dwelling with an installation over thirty years old has circuits protected at 10 A and 16 A. The owner wants to install a 2500 W air conditioner. The question is not whether the appliance works, but whether the chosen circuit can carry the resulting [[I_tot]] without [[margen_uso]] dangerously approaching the limit.

Comparative analysis of existing circuits reveals that one feeds low-consumption LED lighting, while another shares outlets with a television and small chargers. The derivation decision cannot be based solely on the appliance power, but on the residual current available in each circuit. An assignment error turns the compressor start-up into repeated tripping of the breaker.

Old dwellings were designed for much smaller loads than modern ones. A refrigerator from past decades consumed fractions of power compared to modern equipment. The cables, if in good condition, can support more load than originally planned, but the protection must not be exceeded.

The usage margin [[margen_uso]] indicates what fraction of the circuit capacity is committed. A value close to unity means the circuit operates at the limit, with no reserve for unforeseen events. Good practice requires keeping this margin sufficiently away from one hundred percent to absorb starting peaks and voltage variations.

Dominant variable: [[margen_uso]] available in each candidate circuit.

Validity limit: Steady-state temperature conditions; prolonged inductive starting peaks are not considered.

## 3. Home Workshop with Power Tools

A DIY enthusiast installs a workbench in a utility room with a drill, sander and chip vacuum. Each tool has different nominal power, but all share the characteristic of universal motors with behavior close to resistive in established regime. The risk emerges when several tools operate simultaneously.

The design calculation must consider not only the arithmetic sum of powers, but the temporal distribution of use. The vacuum may run continuously while the drill operates in brief cycles. The instantaneous maximum current determines the protection rating, but the average current influences the accumulated heating of the wiring.

DIY tools present a particular usage profile. They do not run for continuous hours like a domestic oven, but operate in short bursts with pauses between operations. This pattern allows some flexibility in design, but does not eliminate the need to verify the worst-case simultaneity scenario.

The total power [[P_tot]] at the instant of maximum demand determines whether the installation can support intensive workshop use. A well-designed workshop allows working without concern for protection tripping, while a poorly calculated one transforms every DIY project into a struggle against the circuit breaker.

Dominant variable: [[P_tot]] peak in partial simultaneous use scenarios.

Validity limit: Intermittent duty cycles with rest time between activations; does not apply to machines with prolonged direct starting.

## 4. Home Office with Multiple Chargers

Remote work has converted a secondary bedroom into office space with laptop computer, external monitor, laser printer, dedicated router and desk lamp. All these loads are small individually, but their accumulation in a single power strip connected to a 16 A outlet requires physical assessment.

The temptation to add an additional power strip in cascade multiplies failure points and hides the real sum of currents. The power strip is not a new circuit, but an extension of the existing one. The protection of the original circuit remains the only barrier against overload. The [[I_tot]] calculation must include all loads connected through any level of power strips.

Modern computer equipment consumes less than its predecessors, but the proliferation of devices compensates for individual efficiency. A laptop, monitor, router and printer add up to an appreciable current when sharing the same power strip. The aggregated current [[I_tot]] may approach the limit without any individual device seeming excessive.

The risk increases when mobile device chargers, additional lamps or even a desktop coffee maker are added. Each element contributes its current to the total sum. The power strip shows indicator lights, but does not protect against upstream circuit overload.

Dominant variable: [[I_tot]] aggregated in multiple extension configuration.

Validity limit: Electronic loads with high-efficiency switched-mode supplies; old linear transformers with low power factor are not included.

## 5. Consumption Analysis for Electricity Rate Optimization

A household intends to migrate to a time-of-use tariff. Savings depend on shifting consumption to off-peak periods, but physical viability requires that the circuit feeding those receptors can support the new temporal distribution without concentrated overloads. An appliance that previously operated dispersed now runs in the nighttime band together with others.

The feasibility study must verify that the design current does not exceed the rating in any hourly scenario. Economic optimization cannot violate the physical safety condition. The analysis requires knowing the [[I_max]] of each affected circuit and comparing it with the projected [[I_tot]] in the new usage window.

Time-of-use tariffs incentivize concentrating consumption when prices are lower. However, concentrating means summing powers that were previously separated in time. The dishwasher that ran at noon and the electric water heater that warmed in the morning may end up coinciding in the off-peak early morning hours.

The circuit rating [[I_max]] represents the absolute limit that must not be exceeded. If load redistribution concentrates too much power in the same time window, the economic savings will be nullified by frequent breaker tripping. The analysis must anticipate these scenarios before committing to the new tariff.

Dominant variable: [[I_max]] of the circuit in relation to load redistribution.

Validity limit: Reprogramming of uses without change in installed power; power expansions in the tariff migration are not contemplated.
`;export{e as default};
