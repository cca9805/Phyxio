const e=`## 1. Electric transformers

A transformer uses mutual inductance to transfer energy between coils without direct electrical contact. Variable current in the primary creates flux in the core, and that flux links the secondary, producing [[epsilon_2]]. Quantity [[M]] summarizes how much of the primary effectively reaches the secondary.

The dominant hypothesis is that the core operates in a linear regime and that [[k]] is high. If the core saturates, the relation between current and flux bends, and secondary voltage no longer follows the simple model.

In design, increasing [[k]] reduces magnetic leakage and improves transfer, but requires a good core, nearby windings, and suitable insulation. The value of [[M]] is not decided only by turns; it also depends on the shared magnetic path.

The practical decision balances efficiency and safety. Bringing windings closer increases coupling, but also requires insulation between primary and secondary. A real transformer therefore does not maximize only [[M]]: it also controls temperature, losses, dielectric strength, and margin against saturation.

Dominant variable: magnetic coupling represented by [[M]] and [[k]].
Validity limit: invalid if saturation, dominant core losses, or highly nonlinear secondary load controls the behavior.

## 2. Inductive chargers

A wireless charger works because the transmitting coil generates variable flux linked by the receiving coil. Separation and alignment control [[k]], and therefore effective [[M]]. If the receiver shifts, induced voltage decreases.

The dominant simplification is treating position as fixed during transfer. In real use, small motions may change coupling and force the circuit to adjust frequency, power, or control.

Mutual inductance explains why two large coils do not guarantee good transfer. If flux spreads away, [[lambda_21]] is small and [[epsilon_2]] falls even when primary current is high.

The reading of [[k]] is especially useful for diagnosing poor placement. A base may detect that the receiver is off-center because it needs more current to produce the same induced voltage. The transmitting coil has not changed; the pair is sharing less flux.

Dominant variable: coupling coefficient [[k]] between transmitter and receiver.
Validity limit: invalid if frequency, resonance, or control electronics dominates over the simple inductive model.

## 3. Inductive sensors

In sensors, an excitation coil can induce signal in a receiving coil. Metal presence, motion, or position change modifies shared flux. The result is interpreted as change of [[M]] or [[k]].

The dominant hypothesis is that the observed change comes from the environment and not from internal circuit variation. If temperature strongly changes resistance or the core, the reading may be confused.

This principle is used in position detectors, displacement meters, and speed pickups. The advantage is contactless mechanical measurement, but it requires calibration because coupling depends on geometry.

In a well-designed sensor, the useful variation of [[M]] must be larger than noise and thermal drift. Reference coils, shielding, or differential measurements are therefore used. The physics of the leaf separates real magnetic signal from secondary effects.

Dominant variable: effective variation of [[M]] with position or material.
Validity limit: invalid if electric parasitics or saturation hide the magnetic change.

## 4. Ignition coils

An ignition coil uses two coupled windings. The primary is excited and then interrupted rapidly; the change of [[I1]] induces high emf in the secondary. Cut-off speed and [[M]] control available voltage.

The design seeks strong shared flux, sufficient insulation, and controlled discharge. Large [[M]] helps, but saturation and unwanted insulation breakdown must also be avoided.

The application shows that secondary emf does not depend only on number of turns. If coupling is low, part of primary flux is lost and useful voltage is reduced.

A timing restriction also appears. High voltage requires primary current to be interrupted rapidly, but that interruption increases insulation demands and may activate oscillations. Correct design does not seek an arbitrarily abrupt transient, but a controlled one.

Dominant variable: secondary emf [[epsilon_2]] caused by fast [[DeltaI1]].
Validity limit: invalid if capacitances, arcs, or resonances dominate the pulse.

## 5. Interference between nearby circuits

Mutual inductance is not always desired. Two nearby traces or coils can couple and transfer noise. A rapid current change in one line may induce [[epsilon_2]] in another, creating false signals.

Mitigation consists of reducing [[M]] through separation, orientation, shielding, or close current return. [[DeltaI1]] may also be decreased, or [[Deltat]] increased, to soften the transient.

This application shows the diagnostic value of the model. If noise appears correlated with nearby switching, magnetic coupling should be checked before blaming failure of the receiving component.

On real circuit boards, a power trace and a signal trace can form an accidental coupled pair. The solution is not to add filtering blindly, but to reduce loop area, change orientation, or separate return paths to decrease shared flux.

This is why layout is part of electromagnetic design, not just mechanical placement. Mutual inductance turns geometry into an electrical noise path whenever current changes are fast enough.

Dominant variable: unwanted mutual inductance between conductors.
Validity limit: invalid if capacitive or radiated coupling dominates over magnetic coupling.
`;export{e as default};
