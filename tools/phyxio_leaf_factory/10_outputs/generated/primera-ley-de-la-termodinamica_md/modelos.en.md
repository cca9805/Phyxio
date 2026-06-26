# First Law of Thermodynamics

## Ideal model

The ideal model of the first law treats the system as closed, with a clear boundary and no matter exchange. Every relevant energy transfer is classified as [[calor_intercambiado]] or [[trabajo_sobre_sistema]]. This leaf uses one explicit convention: heat is positive when it enters the system, and work is positive when the surroundings do work on the system. Under those assumptions, [[variacion_energia_interna]] is the net internal energy accumulation between two states.

## Hypotheses

- The system is closed. If mass enters or leaves, the balance must include the energy carried by that mass.
- The system boundary is clearly defined. Changing the chosen system changes transfers and signs.
- [[calor_intercambiado]] and [[trabajo_sobre_sistema]] use the same unit. Mixing J, kJ, and calories makes the balance meaningless.
- The work convention remains fixed. If a problem uses work done by the system, the sign must be changed relative to this leaf.
- Initial and final states are defined. Without them, [[energia_interna_inicial]], [[energia_interna_final]], and [[variacion_energia_interna]] cannot be interpreted physically.

## Quantitative validity domain

The simple balance is appropriate when omitted transfers are much smaller than included terms, for example below 1 % of the dominant term. In laboratory calorimetry, it is often acceptable if thermal losses to the room are below 5 % of [[calor_intercambiado]]. In slowly compressed gases, boundary work must be estimated using external pressure and volume change; if friction or leakage exceeds 5-10 %, a more detailed model is needed. In a cycle, the quantitative check is that [[variacion_energia_interna]] returns to zero within experimental uncertainty.

## Model failure signals

The model is failing if the result predicts increasing internal energy while the system visibly cools and performs work without receiving energy. It also fails if mass crosses the boundary, if chemical reactions are not counted, if electrical devices feed energy into the system, or if work signs are mixed. Another clear warning is obtaining nonzero [[variacion_energia_interna]] for a closed cycle without explaining accumulation.

## Extended or alternative model

When to switch model: use a control-volume model if matter flows, a power model if the process is analyzed per unit time, or a thermochemical model if reactions occur. The first law still holds, but the inventory of terms expands. Real machines require shaft work, kinetic energy, potential energy, losses, and efficiency.

## Operational comparison

| Criterion | Simple closed model | Extended model |
|---|---|---|
| System | Fixed mass | Fixed mass or flow |
| Terms | [[calor_intercambiado]], [[trabajo_sobre_sistema]], [[variacion_energia_interna]] | Heat, work, mass, power, losses |
| Typical use | Calorimetry, ideal piston, classroom processes | Turbines, compressors, engines, reactors |
| Main risk | Work sign | Missing energy terms |
| Check | Units and signs | Complete balance and efficiency |
