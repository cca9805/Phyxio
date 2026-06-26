const e=`# Exam-type example

## Problem statement

A linear coil has self-inductance of 0.20 H. It initially carries a current of 3.0 A. The current is reduced to 0.50 A during 5.0 ms when the circuit is opened with a protection system. Compute the initial flux linkage, the average self-induced emf, and the initially stored magnetic energy.

## Data

- Self-inductance [[L]]: 0.20 H.
- Initial current [[I]]: 3.0 A.
- Current change [[DeltaI]]: decrease of 2.5 A.
- Time interval [[Deltat]]: 5.0 ms, equivalent to 0.0050 s.
- Linear coil, with no appreciable saturation.

## System definition

The system is a single coil. Positive current is taken in the initial direction. The flux normal is chosen consistently with that direction, so [[lambda_B]], [[epsilon_L]], and [[DeltaI]] keep sign meaning.

## Physical model

The linear self-induction model is used. Inductance [[L]] connects [[I]] with [[lambda_B]], while emf [[epsilon_L]] appears only during current change. Energy [[U_B]] describes what is stored in the field before the circuit is opened.

## Model justification

The statement specifies a linear coil with no appreciable saturation, so [[L]] can be treated as constant during the transient. The model would fail if the core saturated, if parasitic-capacitance oscillations appeared, or if resistance dominated the discharge.

The situation requires signs to be preserved: current decreases, so [[DeltaI]] is negative in the chosen reference. The inductive response must oppose that decrease.

## Symbolic solution

Self-inductance is defined by the relation between magnetic linkage and current:

{{f:definicion_inductancia}}

Initial flux linkage is obtained with the linear relation:

{{f:flujo_enlazado_lineal}}

Average emf during the transient is obtained with:

{{f:fem_autoinducida_media}}

The initially stored magnetic energy is obtained with:

{{f:energia_magnetica}}

## Numerical substitution

For the initial state, multiplying 0.20 H by 3.0 A gives 0.60 Wb. Therefore initial [[lambda_B]] is approximately 0.60 Wb.

The current change is negative because current falls from 3.0 A to 0.50 A. Dividing that change by 0.0050 s gives a large average rate in magnitude. Multiplying by 0.20 H and applying the opposition sign, [[epsilon_L]] is positive relative to the reference that tries to sustain current, with approximate magnitude of 100 V.

For initial energy, squaring 3.0 A, multiplying by 0.20 H, and taking half gives 0.90 J. Therefore initial [[U_B]] is 0.90 J.

## Dimensional validation

Henry times ampere produces weber in the flux-linkage relation, so [[lambda_B]] has unit Wb. Henry multiplied by ampere and divided by second produces volt, coherent with [[epsilon_L]].

Energy uses henry times squared ampere and gives joule. [[DeltaI]] keeps amperes and [[Deltat]] keeps seconds; therefore the rate-of-change reading is dimensionally consistent.

## Physical interpretation

The sign of [[epsilon_L]] indicates that the coil tries to maintain current in the initial direction. It is not creating new energy; it is returning part of the [[U_B]] stored in the magnetic field.

The magnitude of 100 V is much larger than many control voltages, even though the energy is below 1 J. This shows why opening coils may require diodes, discharge resistors, or overvoltage limiters.

If the same current change occurred over a time ten times larger, the average emf would be ten times smaller. By contrast, initial energy would depend on [[L]] and initial current, not on opening speed.

# Real-world example

## Context

An automotive relay contains a coil powered by direct current. When it is disconnected, the electronic switch does not merely cut a current: it must also manage the magnetic energy stored in the coil.

## Physical estimation

If the coil has [[L]] of tens of millihenries and carries several hundred milliamperes, [[U_B]] may look small, but it is released over a very short interval. That combination can raise [[epsilon_L]] enough to damage a transistor.

For example, with an inductance of 40 mH and an initial current of 0.30 A, the stored energy is of the order of two thousandths of a joule. If that current is forced to fall in 0.20 ms, the expected average emf is of the order of several tens of volts. The quantitative reading shows that a small amount of energy can still produce a dangerous voltage when [[Deltat]] is very short.

A flyback diode increases discharge time and reduces emf magnitude. A discharge resistor allows faster turn-off, but accepts a higher voltage. The technical decision balances electrical safety and response speed.

## Interpretation

Self-induction explains why an apparently simple coil needs switching protection. Steady current was not the problem; the problem appears when [[DeltaI]] is forced over a small [[Deltat]].

The correct design reads [[L]], [[epsilon_L]], and [[U_B]] together. If only nominal current is considered, the energy that the field must deliver at turn-off is ignored.

The estimate is not meant to replace the relay datasheet. It is a quick order-of-magnitude test: decide whether protection is necessary and compare two strategies, slow discharge with low voltage or faster discharge with higher voltage. That is the practical role of the self-induction model in this example.
`;export{e as default};
