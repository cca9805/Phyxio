# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: fenomenos-criticos
# Target response file: teoria.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Critical Phenomena
## Conceptual context
Critical phenomena appear when a system approaches a [[temperatura_critica]] and its fluctuations stop being local. The [[temperatura_reducida]] tells how close the system is and from which side it approaches. Near that point, the [[parametro_de_orden]] weakens, the [[susceptibilidad]] grows, and the [[longitud_correlacion]] can become much larger than microscopic distances.

## 🟢 Essential level
Near the [[temperatura_critica]], a system behaves collectively rather than as many independent small regions. The [[parametro_de_orden]] tells whether the ordered phase is still visible, such as spontaneous magnetization or another symmetry-breaking signal. As the transition is approached from the ordered side, this signal fades. At the same time, the [[susceptibilidad]] becomes large because a small external perturbation can reorganize many correlated regions. The [[longitud_correlacion]] also grows, meaning that a fluctuation at one place is statistically connected to fluctuations farther away. The [[temperatura_reducida]] is the compact measure of closeness to criticality: its sign labels the side, while its magnitude measures distance. The core idea is collective amplification near a special temperature.

## 🔵 Formal level
The organizing variable is the [[temperatura_reducida]], built from [[temperatura]] and [[temperatura_critica]].

{{f:temperatura_reducida_critica}}

For a continuous transition, the [[parametro_de_orden]] follows a scaling law controlled by [[amplitud_critica]] and [[exponente_critico_beta]].

{{f:parametro_orden_ley_critica}}

The response to a conjugate perturbation is represented by [[susceptibilidad]], whose critical growth is described by [[amplitud_susceptibilidad]] and [[exponente_critico_gamma]].

{{f:susceptibilidad_critica}}

The spatial range of fluctuations is measured through [[longitud_correlacion]], with [[amplitud_correlacion]] as microscopic scale and [[exponente_critico_nu]] as the divergence exponent.

{{f:longitud_correlacion_critica}}

The [[calor_especifico]] may show an anomaly controlled by [[amplitud_calor_especifico]] and [[exponente_critico_alpha]].

{{f:calor_especifico_critico}}

These formulas separate material scales from critical exponents. Amplitudes depend on the sample and units, while exponents describe the shape of the approach to [[temperatura_critica]].

## 🔴 Structural level
The critical model assumes a continuous transition with a well-defined [[temperatura_critica]]. It also assumes that the studied interval is close enough for scaling to dominate, but not so close that finite-size rounding, impurities, residual fields, or thermal resolution erase the ideal trend. If the sample shows strong hysteresis, coexistence with latent heat, or abrupt jumps, the interpretation may belong to a first-order transition rather than to the critical laws used here.

A key invariant is that exponents are the comparative part of the model. [[exponente_critico_beta]], [[exponente_critico_gamma]], [[exponente_critico_nu]], and [[exponente_critico_alpha]] can be compared across systems, while [[amplitud_critica]], [[amplitud_susceptibilidad]], [[amplitud_correlacion]], and [[amplitud_calor_especifico]] set material scales. The sign of [[temperatura_reducida]] matters because the ordered and disordered sides may use different amplitudes, and the [[parametro_de_orden]] is usually meaningful only on the ordered side.

The boundary cases are diagnostic. Far from [[temperatura_critica]], the power laws stop being accurate. Exactly at the ideal critical point, the theory may predict divergences, but real data saturate because the system is finite and measurements have limited resolution. Graph reading should therefore look for stable log-log slopes, consistent side conventions, and saturation near the closest points. The model fails when different observables imply incompatible exponents, when the interval mixes critical and noncritical data, or when sample inhomogeneity makes the apparent [[longitud_correlacion]] a measurement artifact.

## Deep physical interpretation
Critical phenomena say that a system near [[temperatura_critica]] loses its ordinary microscopic scale. A large [[longitud_correlacion]] means that fluctuations spread through extended domains. A high [[susceptibilidad]] means the system is ready to respond collectively. A decreasing [[parametro_de_orden]] means that the macroscopic distinction between phases is fading. The exponents are not decorative parameters; they describe how the collective behavior is built as the critical point is approached.

## Order of magnitude
Experimental critical windows often use [[temperatura_reducida]] between about 10^-2 and 10^-5. If [[amplitud_correlacion]] is nanometric, [[longitud_correlacion]] can reach tens or hundreds of nanometers. [[susceptibilidad]] may grow by orders of magnitude, but finite size and residual fields usually stop a perfect divergence.

## Personalized resolution method
Start by identifying [[temperatura_critica]] and computing [[temperatura_reducida]] with its sign. Choose the observable: [[parametro_de_orden]], [[susceptibilidad]], [[longitud_correlacion]], or [[calor_especifico]]. Apply the matching formula, then check whether the data lie in a plausible critical interval. Use log-scale plots to estimate slopes and interpret whether the trend matches the side of the transition.

## Special cases and extended example
For a magnetic sample with [[temperatura_critica]] near 300 K, measurements below the transition may show a nonzero [[parametro_de_orden]]. As [[temperatura]] approaches 300 K, that value falls. Above the transition, spontaneous order disappears, but [[susceptibilidad]] can still be large. A plateau close to the critical point does not automatically disprove the model; it may indicate finite-size rounding or poor thermal resolution.

## Real student questions
Is infinite [[susceptibilidad]] real? Not as a perfect measured number. It is an ideal trend that describes rapid growth.

Why use [[temperatura_reducida]]? It makes closeness to [[temperatura_critica]] dimensionless and comparable across materials.

Does [[calor_especifico]] always diverge? No. The behavior depends on [[exponente_critico_alpha]] and on experimental rounding.

## Cross-cutting connections and study paths
This topic connects phase transitions, magnetism, liquid-gas critical points, scaling, universality, and statistical simulations. It prepares the route toward finite-size scaling and renormalization ideas.

## Final synthesis
Near [[temperatura_critica]], the [[parametro_de_orden]] fades, [[susceptibilidad]] rises, and [[longitud_correlacion]] grows. The [[temperatura_reducida]] organizes those changes into critical laws.

