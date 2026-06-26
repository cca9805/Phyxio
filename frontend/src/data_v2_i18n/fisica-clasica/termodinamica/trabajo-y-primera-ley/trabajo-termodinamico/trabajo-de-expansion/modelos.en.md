## Ideal model

The standard model of expansion work treats processes as **quasi-static**: the system passes through a continuous succession of equilibrium states, and the internal gas pressure is well defined and equal to the external pressure at every instant. Under this hypothesis, work is computed as [[trabajo_termodinamico]] = ∫p dV, where p is the equilibrium gas pressure at each volume.

For the particular case of an isobaric process, the model simplifies to [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]], which is the most operational expression and the most commonly used in introductory problems.

## Hypotheses

The quasi-static model rests on the following hypotheses:

- The process is sufficiently slow for the system to remain in internal thermodynamic equilibrium at every instant.
- [[presion]] is uniform throughout the gas (no internal pressure gradients).
- There is no friction in the piston and no gas leakage.
- The system is closed: no matter exchange with the surroundings.
- The system boundary (piston) is the only path for mechanical work exchange.

## Quantitative validity domain

The quasi-static model is a good approximation when the piston velocity is much lower than the speed of sound in the gas. For gases at room temperature, this means piston velocities below a few metres per second. In explosions, detonations or rapid combustion the model fails completely.

For the isobaric model, the condition is that the pressure change during the process is negligible compared to the initial pressure (less than 1–2 %). In the laboratory this holds when the container is open to the atmosphere.

## Model failure signals

The quasi-static model fails when:

- The process is violently irreversible (explosions, rapid expansions against very low constant pressure).
- Expansion occurs against vacuum (free expansion): the work computed with ∫p dV does not describe the actual work because there is no internal equilibrium during the process.
- The piston has significant friction, which dissipates part of the work as heat without transferring it to the surroundings.
- The gas leaks, making the system open.

## Extended or alternative model

For rapid irreversible processes at constant external pressure, work is computed as [[trabajo_termodinamico]] = p_ext·[[variacion_de_volumen]], where p_ext is the constant surroundings pressure, not the gas pressure. This is the most appropriate model for rapid expansions in chemistry (reactions producing gas at constant atmospheric pressure).

For general irreversible processes, computing [[trabajo_termodinamico]] requires full knowledge of the process history (piston velocity, friction dissipation, etc.) and cannot be reduced to a simple integral of p dV.


When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.
## Operational comparison

| Criterion | Quasi-static isobaric | General quasi-static | Rapid irreversible |
|---|---|---|---|
| Formula | [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]] | [[trabajo_termodinamico]] = ∫p dV | [[trabajo_termodinamico]] = p_ext·[[variacion_de_volumen]] |
| Required data | [[presion]] and [[variacion_de_volumen]] | Complete p(V) function | p_ext and [[variacion_de_volumen]] |
| Validity | Only for constant [[presion]] | Any slow process | Rapid expansion against constant p_ext |
| Maximum work | Equal to quasi-static | Maximum possible for those states | Less than quasi-static |
| Typical application | Processes at atmospheric pressure | Combustion engines, compressors | Open exothermic chemical reactions |