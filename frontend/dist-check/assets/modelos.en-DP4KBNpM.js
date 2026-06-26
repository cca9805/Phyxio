const e=`# Physical Models for the Kelvin-Planck Statement\r
\r
## Ideal Model\r
\r
The ideal model represents a heat engine operating in a [[ciclo]] between two reservoirs: a hot one at [[T_H]] and a cold one at [[T_C]]. In each cycle it absorbs [[Q_H]], produces [[W]] and rejects [[Q_C]]. The working substance returns to its initial state, so the energy balance cannot hide internal accumulation.\r
\r
In this model the conceptual boundary is clear: an engine with zero [[Q_C]] and positive [[W]] would try to convert all heat into work as its only effect. That is exactly the situation forbidden by Kelvin-Planck.\r
\r
## Hypotheses\r
\r
- The engine operates cyclically and has no internal state change at the end.\r
- Thermal reservoirs keep well-defined absolute temperatures.\r
- [[Q_H]], [[Q_C]] and [[W]] are measured per cycle.\r
- No net internal energy is stored in the working substance.\r
- Useful work is distinguished from rejected heat and dissipative losses.\r
\r
These hypotheses separate the first law, which conserves energy, from the second law, which limits complete conversion of heat into work.\r
\r
## Quantitative Validity Domain\r
\r
The model is adequate when the device can be represented as a cyclic engine and when reservoirs are large enough for [[T_H]] and [[T_C]] to remain nearly constant during a cycle. In school problems, it is usually enough to require [[T_H]] greater than [[T_C]], positive [[Q_H]], non-negative [[Q_C]] and [[eta]] below one.\r
\r
As an operational criterion, if the cycle time is much shorter than the cooling time of the hot reservoir, the nearly constant reservoir approximation is reasonable. If the reservoir temperature changes significantly in one cycle, switch to a finite-reservoir model with heat capacities.

Minimum quantitative criterion: [[eta]] in the 0-1 range, positive [[Q_H]], non-negative [[Q_C]], and [[T_H]] greater than [[T_C]] with both temperatures positive. If Carnot is also used, [[eta]] must remain below [[eta_carnot]]. As an order of magnitude, real steam or combustion engines often lie between 0.2 and 0.5, not near 1.
\r
## Model Failure Signals\r
\r
The ideal model fails when the device is not cyclic, when the working substance ends in a different state, or when chemical reactions are not included in the balance. It also fails if one describes a battery, a fuel cell or a one-shot expansion as an ordinary cyclic heat engine.\r
\r
Another failure signal appears when calculated [[eta]] exceeds [[eta_carnot]]. That does not reveal a superior technology; it reveals incorrect temperatures, omitted [[Q_C]] or mixed gross and net work.\r
\r
## Extended or Alternative Model\r
\r
When reservoirs are not ideal, the extended model includes heat capacities, finite heat transfer, friction, power, internal irreversibilities and changing temperature. Then [[DeltaS_universo]] becomes not only a conceptual warning but a diagnostic magnitude.\r
\r
Switch to the alternative model when the problem asks for real power, fuel consumption, plant efficiency, condenser behavior, turbine losses, finite gradients or exergy. Kelvin-Planck remains the limit, but calculation needs more variables than the simple [[Q_H]], [[Q_C]] and [[W]] per cycle scheme.\r
\r
## Operational comparison\r
\r
The ideal model decides whether a proposal violates the second law and estimates upper bounds. The extended model sizes equipment and compares real technologies. The first answers "is it possible"; the second answers "how close is it to the limit".\r
`;export{e as default};
