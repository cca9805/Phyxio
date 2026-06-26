# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: modelo-de-ising
# Target response file: modelos.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Ising Model

## Ideal model

The ideal model represents the material as a fixed lattice of [[numero_espines]] binary [[espin]] variables. Each spin has two possible orientations and interacts with neighbors through [[acoplamiento]]. A [[campo_externo]] may bias one direction, while [[temperatura]] controls how strongly unfavorable configurations are suppressed. The useful outputs are [[energia_ising]], [[magnetizacion_total]], [[magnetizacion_media]], and [[probabilidad_configuracion]].

## Hypotheses

- Fixed lattice: if geometry or defects dominate, the neighbor count is no longer uniform.
- Binary [[espin]]: if the magnetic moment rotates continuously, important information is lost.
- Homogeneous [[acoplamiento]]: if links change sign or strength, [[energia_ising]] is no longer a simple uniform score.
- Thermal equilibrium: without equilibrium, [[probabilidad_configuracion]] cannot be read only as a Boltzmann weight.
- Uniform [[campo_externo]]: if the field varies spatially, [[magnetizacion_total]] may hide local domains.

## Quantitative validity domain

For a stable collective trend, a teaching simulation usually needs [[numero_espines]] ≥ 10². Small lattices can show large fluctuations in [[magnetizacion_media]]. The controlling comparison is |[[acoplamiento]]| against [[constante_boltzmann]]·[[temperatura]]. With [[temperatura]] > 0 and a field not overwhelmingly larger than the coupling, the model shows thermal competition. If |[[campo_externo]]| ≫ |[[acoplamiento]]|, the field dominates the outcome.

## Model failure signals

The simple model fails when the observed response depends strongly on history, real hysteresis, strong anisotropy, impurities, or long-range interactions. It also fails if one reads a single microscopic configuration as a full macroscopic prediction. If two small simulations give very different [[magnetizacion_media]], size or statistical averaging is probably insufficient.

## Extended or alternative model

One may extend Ising with random couplings, local fields, three-dimensional lattices, or specific boundary conditions. If spins have continuous orientations, an XY or Heisenberg model is more appropriate. If time evolution matters, a kinetic rule or Monte Carlo dynamics is required.

## Operational comparison

| Situation | Suitable model | Main reading |
|---|---|---|
| Binary neighboring spins | Ideal Ising | [[magnetizacion_media]] versus [[temperatura]] |
| Strong uniform field | Ising with field | Bias in [[magnetizacion_total]] |
| Disordered links | Random Ising | Frustration and domains |
| Continuous spins | XY/Heisenberg | Vector orientation |

