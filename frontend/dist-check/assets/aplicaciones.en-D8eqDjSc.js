const e=`## 1. Electric generators

An electric generator converts mechanical motion into induced emf. When a coil rotates inside a magnetic field, linked flux changes even if the field is almost constant. Faraday's law explains why sustained rotation produces alternating voltage.

The dominant hypothesis is that the coil links repeatable flux changes and that [[N]] multiplies effectively. If the field is nonuniform or turns are not equivalent, the simple model gives only an estimate.

In design, increasing rotation speed, number of turns, or flux per turn increases available emf. But losses, heating, and mechanical demands also grow. The decision is not only to raise [[epsilon_ind]], but to do it stably.

The practical reading separates cause from consequence. The cause is linked-flux change produced by rotation; the consequence is useful voltage, which later depends on load, internal resistance, and regulation. Faraday fixes the initial scale before those details.

This separation is important in troubleshooting. If a generator gives low voltage, the fault may be insufficient speed, weak magnetic field, poor winding connection, or losses after induction. Faraday identifies the first layer before the circuit model is added.

Dominant variable: flux-change rate [[r_Phi]] produced by rotation.
Validity limit: invalid if saturation, losses, or complex geometry dominates the waveform.

## 2. Transformers

In a transformer, the primary creates variable flux in the core and that flux links the secondary coil. Faraday's law connects flux change with induced emf in each winding.

The dominant simplification is that almost all turns link the same flux and that the core guides the field. If leakage is important, the flux reaching the secondary is smaller than expected.

The application shows why [[N]] matters. More secondary turns increase induced emf if flux per turn is comparable. However, insulation, resistance, and losses limit useful increase.

It also explains why frequency matters. For the same maximum flux variation, a faster change produces larger average or instantaneous emf. A transformer designed for one frequency therefore cannot be used freely at another without checking saturation and heating.

In maintenance, this reading helps distinguish a winding problem from a core problem. If [[N]] is correct but induced voltage is low, the linked flux may be too small because the core path, excitation, or coupling has changed.

Dominant variable: number of turns [[N]] linked by variable flux.
Validity limit: invalid if the core saturates or magnetic leakage is dominant.

## 3. Electromagnetic braking

In magnetic brakes, a conducting piece moves through a field. Motion changes flux linked by internal conducting paths, and induced currents appear opposing the motion.

The dominant hypothesis is that the conductor allows induced currents and geometry keeps a stable relation between speed and flux change. If heating changes resistance, braking force may vary.

Faraday's law gives the initial cause: flux change. Lenz's law explains why the response opposes the motion producing that change. Braking therefore increases with speed and disappears at rest.

The application is useful because it shows emf without a chemical source or battery. The induced electrical energy comes from mechanical work trying to maintain motion against electromagnetic opposition.

Dominant variable: flux change caused by relative motion.
Validity limit: invalid if temperature, extreme nonuniform fields, or saturation modifies the response.

## 4. Inductive sensors

An inductive sensor detects motion, position, or metal presence through linked-flux changes. The electrical signal appears because [[Phi_B]] changes when the magnetic environment of the coil changes.

The dominant simplification is that the measured change comes from the detected object. In real applications, temperature, vibration, external fields, and parasitics may also modify the signal.

Design seeks useful flux change larger than noise. [[A]], number of turns, core, and readout electronics are adjusted for that purpose. Faraday's law provides the initial signal scale.

The sensor does not measure "metal" directly. It measures a modification of linked flux that becomes an electrical signal. This distinction helps explain false positives caused by external fields or mounting vibration.

Dominant variable: detectable flux change [[DeltaPhi_B]] produced by the object.
Validity limit: invalid if parasitic couplings or electronic noise hide the magnetic change.

## 5. Dynamic microphones and pickups

In a dynamic microphone or guitar pickup, a coil moves relative to a magnet. That motion changes linked flux, and an emf appears reproducing the mechanical vibration.

The dominant hypothesis is that displacement produces small, linear flux changes. If the coil leaves the linear segment or strong mechanical resonances appear, the signal is distorted.

This application shows a fine reading: the goal is not maximum emf, but emf proportional to motion. Quality depends on keeping the relation between motion, [[DeltaPhi_B]], and [[epsilon_ind]] stable.

The design criterion is linearity. A useful musical or acoustic signal must preserve time shape, not only amplitude. If flux changes non-proportionally with motion, induced emf contains distortion.

For that reason, magnetic circuit geometry is part of sound quality. It shapes how faithfully mechanical vibration becomes electrical signal.

Dominant variable: flux-change rate associated with vibration.
Validity limit: invalid if mechanical nonlinearity or magnetic saturation dominates the signal.
`;export{e as default};
