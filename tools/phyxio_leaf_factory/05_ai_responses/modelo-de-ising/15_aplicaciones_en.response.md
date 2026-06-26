# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: modelo-de-ising
# Target response file: aplicaciones.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Applications

## 1. Simplified ferromagnetism

Dominant variable: [[magnetizacion_media]]
Validity limit: [[numero_espines]] ≥ 10² and approximately uniform [[acoplamiento]]

The model studies how a lattice of binary [[espin]] variables develops collective order. One measures [[magnetizacion_media]] while varying [[temperatura]] and interprets whether alignment from [[acoplamiento]] or thermal mixing dominates. It does not predict every material detail, but it constrains what should happen when interaction energy exceeds the thermal scale. It also shows the role of [[campo_externo]] as a bias that breaks symmetry between opposite orientations.

## 2. Phase-transition simulation

Dominant variable: [[temperatura]]
Validity limit: sufficiently large lattice and approximate statistical equilibrium

By simulating many configurations, one observes how [[magnetizacion_total]] changes with [[temperatura]]. The application measures the passage from ordered behavior to mixed behavior. The estimated curve connects [[energia_ising]] with [[probabilidad_configuracion]]: as thermal agitation increases, less aligned configurations become less strongly penalized. The finite-size limit matters because small lattices show rounded behavior rather than a sharp transition.

## 3. Magnetic domain analysis

Dominant variable: [[energia_ising]]
Validity limit: local interactions dominate and lattice geometry is known

A domain boundary appears when groups of [[espin]] point in opposite directions. The model estimates the cost of those boundaries through [[energia_ising]]. If [[acoplamiento]] favors alignment, more boundaries imply higher energy. This helps predict which configurations are frequent at a given [[temperatura]]. The application also constrains interpretation: a small [[magnetizacion_media]] may come from full disorder or from compensated domains.

## 4. External-field response

Dominant variable: [[campo_externo]]
Validity limit: uniform field and no explicit material hysteresis

Applying a [[campo_externo]] biases [[magnetizacion_total]]. The model predicts how the collective response changes when the field competes with [[acoplamiento]] and [[temperatura]]. If the field is strong, it can dominate even in the presence of thermal defects. If it is weak, interaction and temperature control the response. This application shows why a macroscopic magnetic signal depends on both internal coupling and external conditions.

## 5. Boltzmann weights and sampling

Dominant variable: [[probabilidad_configuracion]]
Validity limit: thermal equilibrium and [[temperatura]] > 0

In Monte Carlo simulations, each configuration is compared through [[probabilidad_configuracion]]. The Ising model provides a clear [[energia_ising]] for deciding which states appear more often. [[beta_termica]] translates [[temperatura]] into energetic sensitivity. This application is used to build representative samples, estimate [[magnetizacion_media]], and study fluctuations. The limit appears when equilibrium is not reached or too few configurations are sampled.

