const e=`## 1. Industrial electrostatic painting

In the manufacture of car bodies and appliances, paint is applied by electrostatic process: atomized paint particles are negatively charged by corona effect at the nozzle, while the metal workpiece to be painted is kept grounded (with [[q_neta]] practically zero). The charge difference generates an electric field that directs the particles toward the workpiece with high efficiency, coating even hidden areas thanks to field lines that wrap around the object.

Process efficiency depends directly on [[q]] imparted to each particle: a larger charge means a stronger Coulomb force and a more accurate trajectory toward the surface. However, if [[q]] is raised too much, mutual repulsion between particles (all carrying the same sign) reduces jet density and decreases coating uniformity.

Dominant variable: the charge [[q]] of each paint particle, which determines the attraction force toward the workpiece and deposition efficiency.
Validity limit: the isolated point-particle model ceases to be valid when jet density is so high that the collective field of the particles distorts the application field, which occurs at densities above several million particles per cubic centimetre.

## 2. Cardiac defibrillator

An external defibrillator delivers a current pulse to the heart to restore rhythm when it enters ventricular fibrillation. The device charges an internal capacitor to a specific [[q]] (order of tens of microcoulombs to millicoulombs, depending on the model) and then discharges that [[q]] in milliseconds through the patient's chest via electrodes.

The amount of charge discharged determines the energy delivered to the heart. Insufficient [[q]] does not generate the electric field needed to depolarize cardiac tissue simultaneously; excessive [[q]] can cause skin burns or myocardial damage. Medical protocols adjust [[q]] based on patient weight and device type, with narrow safety margins.

The concept of [[q_neta]] is also relevant here: the [[q_neta]] of the human body is practically zero at all times; the defibrillator discharge temporarily drives a flow of [[q]] through the tissue, but does not alter the body's [[q_neta]] because current enters through one electrode and exits through the other.

Dominant variable: the charge [[q]] stored in the defibrillator capacitor, which determines the energy of the pulse delivered to the heart.
Validity limit: the point-charge model does not apply here; the electric field inside the human body depends on tissue geometry and biological impedance. The simple [[q]] per electrode model is only an initial approximation.

## 3. Dust sensor in electrostatic air purifiers

Air purifiers with electrostatic filters work by charging airborne dust particles through an ionizing grid and then capturing them on a collecting plate of opposite sign. The process depends on the [[q]] acquired by each dust particle being sufficient for the Coulomb force to overcome the aerodynamic drag of the airflow.

Capture efficiency varies with particle size: large particles (above 10 µm) easily acquire sufficient [[q]]; ultrafine particles (below 0.1 µm) acquire very little [[q]] because their surface is small. In high-efficiency models, the integer [[n]] of elementary charges per particle is controlled by adjusting the ionizing grid voltage. An increase in [[n]] raises [[q]] linearly, in accordance with charge quantization.

The [[q_neta]] of the air leaving the purifier is practically zero: the same [[q]] deposited on dust is compensated by ions of opposite sign generated in the corona discharge.

Dominant variable: the charge [[q]] per dust particle, which determines the capture force and filter efficiency.
Validity limit: the linear model between [[n]] and ionizing voltage ceases to be valid when the concentration of charged particles is so high that the ionic field saturates, which occurs in very dusty environments.

## 4. Charge measurement in Millikan's oil drop experiment

Millikan's experiment (1909) is the direct experimental demonstration of charge quantization. An ionized oil drop is kept in equilibrium between gravity and the electric force of an external field. By adjusting the field until the drop is stationary, [[q]] of the drop can be determined from the force balance.

Millikan measured [[q]] of thousands of different drops and found that all values were multiples of the same minimum value: the elementary charge [[e]]. He thereby determined the value of [[e]] with high precision. The integer [[n]] of elementary charges on each drop was obtained by dividing [[q]] by [[e]] and verifying that the result was an integer.

The key of the experiment is precisely that [[n]] is always an integer: if charge were continuous, [[n]] could take any decimal value. The empirical fact that [[n]] is always an integer directly proves that charge is quantized in units of [[e]].

Dominant variable: the charge [[q]] of the oil drop, which determines the balance between gravitational force and the electric force of the external field.
Validity limit: the model requires the drop to be small enough for [[n]] to be low (fewer than a few tens of charges) and large enough for hydrodynamic forces to be negligible compared to electric ones. Drops with radius above 3 µm make equilibrium control difficult.

## 5. Charge control in semiconductors and transistors

In modern electronic devices, controlling [[q]] in nanometre-scale semiconductor regions is the basis of field-effect transistor (MOSFET) operation. Applying a voltage to the transistor gate induces an accumulation of [[q]] in the adjacent semiconductor channel, creating or destroying a conductive path between source and drain.

The [[q]] induced in the channel determines conductivity: a larger [[q]] implies more free carriers (electrons or holes) and lower resistance between source and drain. Controlling [[q]] through the gate voltage means controlling the current flow through the device: this is how amplification and digital switching work.

In modern transistors with channels of just a few nanometres, [[n]] can be so small that quantum fluctuations in the number of carriers (variations of a single electron) become significant and limit miniaturisation. This is the regime where quantization of [[q]] in units of [[e]] is no longer a theoretical detail but a real technological limitation.

Dominant variable: the charge [[q]] induced in the transistor channel by the gate voltage, which controls conductivity and therefore output current.
Validity limit: the classical continuous-charge model for the channel fails when the number [[n]] of carriers is so small that fluctuations of a single electron are comparable to the mean value, which occurs in channels below approximately 5 nm at standard operating temperatures.
`;export{e as default};
