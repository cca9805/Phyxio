# Applications

## 1. Simplified ferromagnetism

Dominant variable: [[magnetizacion_media]]
Validity limit: [[numero_espines]] ≥ 10² and approximately uniform [[acoplamiento]]

The model studies how a lattice of binary [[espin]] variables develops collective order. One measures [[magnetizacion_media]] while varying [[temperatura]] and interprets whether alignment from [[acoplamiento]] or thermal mixing dominates. It does not predict every material detail, but it constrains what should happen when interaction energy exceeds the thermal scale. It also shows the role of [[campo_externo]] as a bias that breaks symmetry between opposite orientations. The key reading is the sign and magnitude of [[magnetizacion_media]]: a value near ±1 indicates that one spin orientation dominates, while a value near zero may indicate either thermal disorder or compensated domains. To distinguish these cases, [[energia_ising]] must also be examined: high energy with near-zero [[magnetizacion_media]] suggests random mixing, while low energy with near-zero [[magnetizacion_media]] can signal antiparallel domain organization. The [[probabilidad_configuracion]] under the Boltzmann weight explains quantitatively how strongly each of these situations is favored at the working [[temperatura]].

## 2. Phase-transition simulation

Dominant variable: [[temperatura]]
Validity limit: sufficiently large lattice and approximate statistical equilibrium

By simulating many configurations, one observes how [[magnetizacion_total]] changes with [[temperatura]]. The application measures the passage from ordered behavior to mixed behavior. The estimated curve connects [[energia_ising]] with [[probabilidad_configuracion]]: as thermal agitation increases, less aligned configurations become less strongly penalized. The finite-size limit matters because small lattices show rounded behavior rather than a sharp transition. [[beta_termica]] is the primary control parameter: when it exceeds the inverse of the coupling energy per spin, the system tends toward order; when it falls below that value, disorder dominates. For finite [[numero_espines]], this crossover occurs over a temperature range whose width decreases as the lattice grows. Convergence of the [[magnetizacion_media]] curve with increasing [[numero_espines]] is the standard diagnostic that sampling is sufficient and that [[probabilidad_configuracion]] weights are spread adequately over the relevant configuration space.

## 3. Magnetic domain analysis

Dominant variable: [[energia_ising]]
Validity limit: local interactions dominate and lattice geometry is known

A domain boundary appears when groups of [[espin]] point in opposite directions. The model estimates the cost of those boundaries through [[energia_ising]]. If [[acoplamiento]] favors alignment, more boundaries imply higher energy. This helps predict which configurations are frequent at a given [[temperatura]]. The application also constrains interpretation: a small [[magnetizacion_media]] may come from full disorder or from compensated domains. The energetic cost of a domain wall depends on the number of bonds it crosses. In a one-dimensional chain, creating a single wall involves flipping the sign of one term in [[energia_ising]]. In a two-dimensional lattice, the wall can run across an entire row, making the cost grow with [[numero_espines]]. This is why [[magnetizacion_total]] fluctuations are larger in small systems: creating or destroying a boundary changes a significant fraction of the total energy, and the [[probabilidad_configuracion]] of states with and without the wall can be comparable even at relatively low [[temperatura]].

## 4. External-field response

Dominant variable: [[campo_externo]]
Validity limit: uniform field and no explicit material hysteresis

Applying a [[campo_externo]] biases [[magnetizacion_total]]. The model predicts how the collective response changes when the field competes with [[acoplamiento]] and [[temperatura]]. If the field is strong, it can dominate even in the presence of thermal defects. If it is weak, interaction and temperature control the response. This application shows why a macroscopic magnetic signal depends on both internal coupling and external conditions. When [[campo_externo]] breaks the symmetry between positive and negative [[espin]] orientations, [[magnetizacion_media]] can no longer average to zero because spins parallel to the field accumulate lower [[energia_ising]]. A weak field produces a small bias that thermal fluctuations can overcome at high [[temperatura]], while a strong field maintains a significant [[magnetizacion_total]] even at elevated temperatures. The [[probabilidad_configuracion]] quantifies this bias directly through [[beta_termica]] multiplied by the field contribution to [[energia_ising]], making the connection between external control and statistical outcome explicit.

## 5. Boltzmann weights and sampling

Dominant variable: [[probabilidad_configuracion]]
Validity limit: thermal equilibrium and [[temperatura]] > 0

In Monte Carlo simulations, each configuration is compared through [[probabilidad_configuracion]]. The Ising model provides a clear [[energia_ising]] for deciding which states appear more often. [[beta_termica]] translates [[temperatura]] into energetic sensitivity. This application is used to build representative samples, estimate [[magnetizacion_media]], and study fluctuations. The limit appears when equilibrium is not reached or too few configurations are sampled. The [[probabilidad_configuracion]] derived from [[energia_ising]] defines the Metropolis acceptance rule directly: when a proposed spin flip increases [[energia_ising]], it is accepted with probability proportional to the Boltzmann weight controlled by [[beta_termica]]. When [[beta_termica]] is large, energy-raising moves are frequently rejected and the chain spends most of its time in low-[[energia_ising]] configurations with high [[magnetizacion_media]]. When [[beta_termica]] is small, nearly all moves are accepted and the chain mixes rapidly across configurations with different [[magnetizacion_total]]. This tight connection between the acceptance rule and the physical energy landscape makes the Ising model the canonical pedagogical example of statistical Monte Carlo sampling.