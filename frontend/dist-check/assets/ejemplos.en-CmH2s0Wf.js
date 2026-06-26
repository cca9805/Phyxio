const e=`# Exam-type example

## Problem statement

Two fixed coils share a linear core. The mutual inductance between them is 0.080 H. Primary current goes from 0.20 A to 1.40 A in 6.0 ms. Compute the final secondary flux linkage due to the primary and the average emf induced in the secondary. Then, if [[L1]] is 0.20 H and [[L2]] is 0.50 H, estimate the coupling coefficient.

## Data

- Mutual inductance [[M]]: 0.080 H.
- Initial primary current [[I1]]: 0.20 A.
- Final primary current: 1.40 A.
- Primary current change [[DeltaI1]]: increase of 1.20 A.
- Time interval [[Deltat]]: 6.0 ms, equivalent to 0.0060 s.
- Self-inductances for coupling: [[L1]] of 0.20 H and [[L2]] of 0.50 H.

## System definition

The system consists of two coils. The primary is the source of flux, and the secondary is the coil where emf is measured. The positive reference of [[I1]] is chosen in the direction that produces positive [[lambda_21]].

## Physical model

The linear mutual-inductance model is used. Quantity [[M]] connects [[I1]] with [[lambda_21]], and the change [[DeltaI1]] during [[Deltat]] produces [[epsilon_2]]. Coefficient [[k]] is used only to interpret coupling quality relative to [[L1]] and [[L2]].

## Model justification

The statement specifies fixed coils and a linear core, so [[M]] is treated as constant during the transient. If the core saturated, if relative motion appeared, or if a loaded secondary strongly modified the flux, this reading would only be a first approximation.

Primary current increases, so [[DeltaI1]] is positive in the chosen reference. The secondary emf must appear with sign opposing the increase of linked flux.

## Symbolic solution

Mutual inductance is defined through secondary flux created by primary current:

{{f:definicion_inductancia_mutua}}

Final secondary flux linkage is obtained with the linear relation:

{{f:flujo_mutuo_lineal}}

Average induced emf during the change is obtained with:

{{f:fem_mutua_media}}

Coupling is estimated with:

{{f:coeficiente_acoplamiento}}

## Numerical substitution

For the final state, multiplying 0.080 H by 1.40 A gives 0.112 Wb. Therefore final [[lambda_21]] is approximately 0.112 Wb in the chosen reference.

Primary current increases by 1.20 A during 0.0060 s. The average rate of change is 200 A/s. Multiplying by 0.080 H gives an emf magnitude of 16 V. The sign of [[epsilon_2]] is negative relative to the reference that would make secondary flux grow, because emf opposes the increase.

For [[k]], the product of 0.20 H and 0.50 H has square root of about 0.316 H. Dividing 0.080 H by that scale gives coupling near 0.25. This is noticeable coupling, but far from an almost perfect ideal case.

## Dimensional validation

Henry times ampere produces weber, coherent with [[lambda_21]]. Henry multiplied by ampere and divided by second produces volt, coherent with [[epsilon_2]]. In coefficient [[k]], henry divided by henry gives a dimensionless quantity.

The sign reading is also coherent: an increase in [[I1]] increases mutual flux, and induced emf appears with polarity opposed to the change according to Lenz.

## Physical interpretation

The result shows that moderate primary current can produce a clear secondary voltage if the change happens in a few milliseconds. The value of [[M]] summarizes how much of the primary field actually links the secondary coil.

The value of [[k]] completes the reading. Although the coils have self-inductances of tenths of a henry, only a fraction of maximum coupling is used. This may be due to leakage flux, separation, or nonideal geometry.

Physically, the secondary is not reacting to the primary current as a number on a wire. It reacts to the portion of the magnetic field that actually threads its turns. That is why [[M]] and [[k]] carry the meaning of the result more strongly than the current value alone.

The negative sign of [[epsilon_2]] also has a physical role. It says that the secondary polarity is arranged to oppose the increase of linked flux, not to help it. Without that Lenz reading, the calculation would give a voltage magnitude but not the behavior of the coupled coils.

If the same current change occurred ten times more slowly, the magnitude of [[epsilon_2]] would be ten times smaller. By contrast, final [[lambda_21]] would depend on final [[I1]], not on how quickly that state was reached.

# Real-world example

## Context

An inductive charger uses a transmitting coil and a receiving coil. The transmitter changes its current to create variable flux; the receiver obtains emf by mutual induction. The goal is not for coils to touch, but for them to share enough flux.

## Physical estimation

Suppose an effective [[M]] of 20 microhenries and a primary current change of 2 A in 10 microseconds. The average rate of change is large, so induced emf may be of the order of several volts. If the receiver shifts and [[k]] falls by half, [[M]] also falls and available voltage drops by roughly the same proportion.

The quantitative estimate helps decide whether receiver position is acceptable. A small displacement may not change [[L1]] or [[L2]] much, but it can reduce [[k]] and degrade transfer.

## Interpretation

The real application shows that mutual inductance is a property of the pair and its alignment. Choosing large coils is not enough; distance, orientation, frequency, and core must be controlled.

Correct design reads [[M]], [[k]], [[DeltaI1]], and [[Deltat]] together. If only nominal primary current is considered, the decisive part is missed: how much flux actually reaches the receiver and how fast it changes.
`;export{e as default};
