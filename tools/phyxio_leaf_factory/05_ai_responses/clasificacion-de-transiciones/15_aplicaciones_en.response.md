# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: clasificacion-de-transiciones
# Target response file: aplicaciones.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Applications
## 1. Calorimetry of materials with structural change
Dominant variable: [[calor_latente]]
Validity limit: [[calor_latente]] > 10² J/mol and sufficiently slow thermal sweeps

In differential calorimetry, one measures energy exchanged while crossing a range of [[temperatura]] near [[temperatura_critica]]. If the integrated signal gives finite [[calor_latente]], the classification points toward a first-order transition. This application predicts whether a material can absorb or release energy in a narrow thermal window, which matters for thermal storage. The complementary magnitude is [[salto_entropia]], because it connects exchanged energy with the reorganization of accessible configurations. The practical limit appears when the signal is comparable with noise or when the sample does not reach equilibrium. In that case, a broad calorimetric peak may mix a real transition, hysteresis, and kinetic delay.

## 2. Magnetic transitions and loss of order
Dominant variable: [[parametro_de_orden]]
Validity limit: |[[temperatura]] - [[temperatura_critica]]|/[[temperatura_critica]] < 10⁻¹ near the critical regime

In a magnetic material, [[parametro_de_orden]] may represent spontaneous magnetization. As the system approaches [[temperatura_critica]], its behavior distinguishes continuous disappearance from an abrupt jump. If no [[calor_latente]] is detected and [[parametro_de_orden]] decreases smoothly, the transition is interpreted as continuous or critical. The important prediction is not only the value of [[temperatura_critica]], but how internal organization changes. [[exponente_critico_beta]] and [[amplitud_critica]] help fit the critical scale. The model becomes insufficient when domains, strong anisotropies, or impurities round the curve and hide the ideal behavior.

## 3. Design of shape-memory materials
Dominant variable: [[salto_parametro_de_orden]]
Validity limit: [[salto_parametro_de_orden]] larger than five times instrumental uncertainty

In shape-memory alloys, a phase change may involve a strong structural reorganization. [[salto_parametro_de_orden]] quantifies the difference between two phases and helps decide whether the change is abrupt. If [[calor_latente]] also appears, the material can store energy during the cycle, but it may show hysteresis. What is measured is a structural, optical, or mechanical signal related to [[parametro_de_orden]]. What is predicted is the repeatability of the change and the useful [[temperatura]] range. Classification constrains design: a strong transition gives intense response, but a more continuous transition may be smoother and more stable under repeated cycling.

## 4. Phase diagrams in binary mixtures
Dominant variable: [[energia_libre_gibbs]]
Validity limit: compared phases in equilibrium and composition controlled within the experimental range

In binary mixtures, phases are compared using [[energia_libre_gibbs]]. Classifying a transition helps decide whether two phases coexist with discontinuity or whether composition and order change gradually. One measures [[temperatura_critica]], composition, and, when appropriate, a [[parametro_de_orden]] associated with separation, structure, or orientation. The analysis predicts whether phase coexistence, property jumps, or critical behavior should appear. The validity limit arises when diffusion is slow: the sample may look out of equilibrium and give a misleading classification. Therefore the thermodynamic reading must be separated from the kinetics of mixing.

## 5. Superconductivity and transitions without latent heat
Dominant variable: [[orden_de_transicion]]
Validity limit: absence of resolvable [[calor_latente]] and reproducible transition near [[temperatura_critica]]

Many ideal superconducting transitions are classified as continuous: no finite [[calor_latente]] is observed, but a [[parametro_de_orden]] associated with the collective state changes. The value of the classification is that it constrains what one expects to measure: not a large molar energy jump, but changes in electromagnetic response and critical behavior. Although this leaf does not develop the microscopic model, it supplies the language for separating thermodynamic discontinuity, continuity of [[parametro_de_orden]], and singular responses. The validity limit appears if the sample is granular, impure, or under strong external fields, because those factors broaden the transition and obscure [[orden_de_transicion]].

