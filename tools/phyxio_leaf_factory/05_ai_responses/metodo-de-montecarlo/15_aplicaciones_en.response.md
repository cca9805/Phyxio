# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: metodo-de-montecarlo
# Target response file: aplicaciones.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Applications
## 1. Mean energy in molecular simulations
Dominant variable: [[estimador_montecarlo]]
Validity limit: [[numero_muestras]] > 10^4 and [[error_estandar]]/|[[estimador_montecarlo]]| < 0.05

In molecular simulation, Monte Carlo estimates the mean energy of a system without visiting every possible configuration. Each accepted configuration contributes one [[valor_muestra]], and the average of many values gives the [[estimador_montecarlo]]. What is measured is not a time trajectory, but a statistical mean compatible with [[temperatura]] and the sampling rule. [[varianza_muestral]] shows how strongly individual configurations fluctuate, while [[error_estandar]] indicates whether the mean is already useful. In Metropolis sampling, [[probabilidad_aceptacion]] must remain operational to avoid a frozen chain.

## 2. High-dimensional integrals
Dominant variable: [[numero_muestras]]
Validity limit: [[error_estandar]] must decrease when [[numero_muestras]] increases

Many thermodynamic quantities can be written as averages over enormous state spaces. Monte Carlo turns that task into sample-based estimation. Each [[valor_muestra]] represents an evaluation of a physical integrand at a random region of state space. The method predicts a mean and constrains its uncertainty through [[error_estandar]]. It is especially useful when a regular grid is impossible. The limit appears when [[varianza_muestral]] is too large or when samples miss the most important regions. Then [[peso_muestra]] or importance sampling is needed.

## 3. Metropolis sampling of thermal states
Dominant variable: [[probabilidad_aceptacion]]
Validity limit: 0.2 < [[probabilidad_aceptacion]] < 0.8 as an orientative criterion

In thermal models, a proposed move may increase or decrease [[energia_estado]]. [[probabilidad_aceptacion]] decides whether that move enters the sampled sequence, with a scale controlled by [[temperatura]] and [[constante_boltzmann]]. This application predicts physical averages while maintaining a distribution compatible with thermal equilibrium. If acceptance is almost zero, exploration is poor; if it is almost total because moves are tiny, exploration may also be poor. The [[estimador_montecarlo]] is reliable only when the chain visits relevant states and [[error_estandar]] is read together with mixing behavior.

## 4. Observables with weights
Dominant variable: [[peso_muestra]]
Validity limit: no small subset of samples should concentrate almost all weight

When samples are not equivalent, each carries a [[peso_muestra]]. This occurs in importance sampling, reweighting, or corrections from auxiliary distributions. The prediction is a corrected physical average, not a simple arithmetic mean. The weighted [[estimador_montecarlo]] can use efficiently generated samples, but it requires careful weight normalization. If a few weights dominate, the effective [[varianza_muestral]] increases and [[error_estandar]] may be underestimated.

## 5. Computational precision control
Dominant variable: [[error_estandar]]
Validity limit: the cost of increasing [[numero_muestras]] must match the required precision

Monte Carlo is often used to decide when a simulation can stop. The observable may keep fluctuating, but [[error_estandar]] tells whether the average is precise enough. This application does not only measure a physical quantity; it constrains computational cost. If halving the error requires far more [[numero_muestras]], one must ask whether that precision is physically necessary. [[varianza_muestral]] guides the strategy: if it is high, improving the sampling may be better than simply collecting more data.

