# Applications

## 1. Defects in solids
Dominant variable: [[flujo_probabilidad]]
Validity limit: [[desbalance_estadistico]] < 10^-2 with stable [[temperatura]]
In crystals with defects, atoms or vacancies jump between local configurations. Statistical equilibrium allows one to decide whether average occupations are constant even though jumps continue. [[probabilidad_estado]] of each configuration is measured and [[tasa_transicion]] in both directions is estimated. If [[flujo_probabilidad]] is compatible with zero, no net population drift occurs. This constrains diffusion models and avoids confusing microscopic activity with macroscopic evolution. The [[constante_boltzmann]] enters the estimate of [[peso_boltzmann]] when the [[energia_estado]] of each configuration and the [[temperatura]] of the environment are known. If the [[energia_estado]] difference between the two configurations is of order kT, both will have comparable occupations. If it exceeds several units of kT, the lower [[energia_estado]] configuration dominates and [[flujo_probabilidad]] can be nearly zero even when [[tasa_transicion]] differs between directions.

## 2. Molecular populations in two conformations
Dominant variable: [[probabilidad_estado]]
Validity limit: probability sum between 0.999 and 1.001
A flexible molecule can alternate between conformations. The occupation distribution depends on [[energia_estado]], [[temperatura]], and [[peso_boltzmann]] when the thermal environment is stable. The application predicts what fraction of molecules is in each conformation and whether that fraction remains stationary during the observed [[tiempo]]. As [[temperatura]] rises, the relative [[peso_boltzmann]] difference between conformations decreases and the distribution becomes more uniform, increasing the Gibbs [[entropia]]. This analysis allows estimation of conformational transition temperature thresholds in polymers and proteins.

## 3. Monte Carlo simulations
Dominant variable: [[desbalance_estadistico]]
Validity limit: observation longer than 50 correlation times
In a simulation, equilibrium is diagnosed by verifying that occupations do not drift and that [[flujo_probabilidad]] between regions of the state space compensates. If [[desbalance_estadistico]] decreases to the sampling noise level, the sample can be used to estimate [[entropia]]. The practical criterion uses [[desbalance_estadistico]] as a function of simulation step: if the imbalance drops monotonically to the noise level, the sample is ready for thermodynamic analysis. The [[constante_boltzmann]] converts the calculated [[entropia]] into SI units comparable with thermometric measurements.

## 4. Reversible chemical transitions
Dominant variable: [[tasa_transicion]]
Validity limit: direct and inverse rates constant within 5%
In elementary reversible reactions, statistical equilibrium is observed when the population of each state stops changing even though molecular conversions continue. The direct [[tasa_transicion]] does not need to equal the inverse; what must compensate is the product of rate and [[probabilidad_estado]]. The [[constante_boltzmann]] connects the reaction energy barrier with [[peso_boltzmann]] of the transition state. If [[temperatura]] rises, the occupation of activated states increases and the direct rate may no longer compensate the inverse, generating net [[flujo_probabilidad]] toward the product with higher [[entropia]].

## 5. Mesoscopic systems with noise
Dominant variable: [[entropia]]
Validity limit: fluctuations small compared to the measured mean
In mesoscopic devices, state occupation can fluctuate significantly. [[entropia]] summarizes the spread of occupations and [[flujo_probabilidad]] indicates whether a persistent statistical current exists. The application constrains whether the system can be treated as balanced or requires a driven model. In quantum dot devices, [[probabilidad_estado]] of each quantum level depends on the electrochemical potential of the reservoir and [[temperatura]] through the [[constante_boltzmann]]. Statistical equilibrium is detected as equality of [[flujo_probabilidad]] entering and leaving the reservoir.

## 6. Photons in an optical cavity
Dominant variable: [[probabilidad_estado]]
Validity limit: stable [[temperatura]] and mean photon number large compared to quantum noise
In an optical cavity coupled to a thermal radiation bath, field modes can hold different photon numbers with [[probabilidad_estado]] depending on the [[energia_estado]] of each mode and the bath [[temperatura]]. Statistical equilibrium is reached when the [[flujo_probabilidad]] of absorption and spontaneous emission compensate for each transition pair. The [[constante_boltzmann]] and [[temperatura]] determine the energy scale that separates significantly occupied modes from empty ones. The [[entropia]] of the equilibrium distribution measures the spread of photons among field modes. If active optical gain is introduced, [[flujo_probabilidad]] no longer vanishes and the system enters laser or stimulated amplification conditions.

## 7. Ion channels in cell membranes
Dominant variable: [[flujo_probabilidad]]
Validity limit: stable physiological [[temperatura]] and constant membrane voltage
Ion channels in cell membranes alternate between open and closed configurations with [[tasa_transicion]] that depend on membrane voltage and [[temperatura]]. At statistical equilibrium, [[probabilidad_estado]] of each configuration remains constant and net [[flujo_probabilidad]] between states is zero. The [[constante_boltzmann]] and the activation [[energia_estado]] of the channel guide the estimate of [[peso_boltzmann]] under physiological conditions. When an out-of-equilibrium voltage is applied, the [[tasa_transicion]] no longer compensate and a net [[flujo_probabilidad]] arises that generates measurable macroscopic ionic current. Diagnosing equilibrium versus nonequilibrium in ion channels is central to the pharmacology of channel blockers and modulators.

## 8. Statistical traffic networks
Dominant variable: [[tasa_transicion]]
Validity limit: network load below 80% of maximum node capacity
In communication or transport networks, packets or vehicles transit between nodes with entry and exit [[tasa_transicion]]. Statistical equilibrium is the condition in which [[probabilidad_estado]] of each node does not drift systematically. When net [[flujo_probabilidad]] between two nodes is compatible with zero, traffic between them is balanced. If load increases and exit [[tasa_transicion]] cannot compensate entry, [[desbalance_estadistico]] grows and the node accumulates backlog. The [[entropia]] of the load distribution serves as a uniformity indicator: a distribution concentrated in few nodes has lower [[entropia]] and signals incipient statistical imbalance.