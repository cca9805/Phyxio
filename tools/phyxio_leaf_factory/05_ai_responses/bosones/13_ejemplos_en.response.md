# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: bosones
# Target response file: ejemplos.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Exam-type example
## Problem statement
An ideal gas of bosons is in equilibrium at [[temperatura]] of 120 nK. We study an excited state whose [[energia]] is 4.0 x 10^-31 J above the chosen zero. The [[potencial_quimico]] of the gas is -1.0 x 10^-31 J. Calculate the [[ocupacion_media]] of that state and decide whether it is weakly populated or has appreciable bosonic occupation. Then estimate, for atoms of [[masa_particula]] 1.44 x 10^-25 kg, whether a [[densidad_particulas]] of 1.0 x 10^20 m^-3 is near the degenerate regime using [[longitud_onda_termica]].

## Data
- [[temperatura]]: 120 nK
- [[energia]]: 4.0 x 10^-31 J
- [[potencial_quimico]]: -1.0 x 10^-31 J
- [[constante_boltzmann]]: 1.38 x 10^-23 J/K
- [[masa_particula]]: 1.44 x 10^-25 kg
- [[constante_planck]]: 6.63 x 10^-34 J s
- [[densidad_particulas]]: 1.0 x 10^20 m^-3

## System definition
The system is a dilute cloud of material bosons in thermal equilibrium. We are not tracking a named particle; we are finding the mean population of a quantum state with specified [[energia]]. The reservoir fixes [[temperatura]] and [[potencial_quimico]], so the calculation belongs to the grand-canonical picture. [[ocupacion_media]] is not a probability restricted between zero and one. It is an average number of particles in the state. The second part of the problem refers to the whole cloud, not only the chosen state, because [[longitud_onda_termica]] and [[densidad_particulas]] measure the approach to quantum degeneracy.

## Physical model
We use Bose-Einstein statistics for an ideal gas. The state has fixed [[energia]], the gas has uniform [[temperatura]], and [[potencial_quimico]] remains below the relevant energy level. For the spatial quantum scale, we use the thermal de Broglie [[longitud_onda_termica]], appropriate for nonrelativistic particles of [[masa_particula]]. Interactions and trap corrections are ignored, so the result is a first-model estimate, not a full experimental fit.

## Model justification
The model is appropriate because the particles are bosons and can share a state, which is precisely what [[ocupacion_media]] measures. The [[temperatura]] is extremely low, so [[constante_boltzmann]][[temperatura]] is comparable with the stated differences in [[energia]]. Also, [[potencial_quimico]] is lower than the state [[energia]], avoiding an unphysical occupation. For the degeneracy estimate, [[longitud_onda_termica]] is the right scale because it compares the thermal quantum size of a particle with the mean spacing implied by [[densidad_particulas]].

## Symbolic solution
For the state occupation, apply the Bose-Einstein relation:

{{f:bose_einstein_ocupacion}}

The physical control is the difference between [[energia]] and [[potencial_quimico]], divided by [[constante_boltzmann]][[temperatura]]. A large ratio gives small [[ocupacion_media]], while a ratio approaching zero from the allowed side gives strong occupation.

For the spatial quantum scale, use:

{{f:longitud_onda_termica_de_broglie}}

Then build the degeneracy product [[densidad_particulas]][[longitud_onda_termica]]^3. If this product is of order one, thermal matter waves begin to overlap significantly.

## Numerical substitution
The thermal energy scale is approximately [[constante_boltzmann]][[temperatura]] = 1.38 x 10^-23 x 1.20 x 10^-7 J, or 1.66 x 10^-30 J. The relevant energy difference is [[energia]] - [[potencial_quimico]] = 5.0 x 10^-31 J. The ratio is therefore about 0.30. The corresponding exponential is about 1.35, so [[ocupacion_media]] is close to 1/(1.35 - 1), approximately 2.9 bosons.

For [[longitud_onda_termica]], the estimate gives a scale of order 2 x 10^-7 m. Then [[longitud_onda_termica]]^3 is of order 8 x 10^-21 m^3. Multiplying by [[densidad_particulas]] gives a degeneracy product close to 0.8, which is near the quantum-degenerate scale.

## Dimensional validation
In the Bose-Einstein occupation formula, [[energia]], [[potencial_quimico]], and [[constante_boltzmann]][[temperatura]] all have dimensions of energy, so the exponential argument is dimensionless. Therefore [[ocupacion_media]] is dimensionless, because it counts an average number of particles. In [[longitud_onda_termica]], [[constante_planck]] contributes action units and the denominator combines [[masa_particula]] with thermal energy, leaving a length. Finally, [[densidad_particulas]] has units m^-3 and [[longitud_onda_termica]]^3 has units m^3, so their product is dimensionless.

## Physical interpretation
The result [[ocupacion_media]] near 3 means that the state is not nearly empty; it indicates that several bosons can occupy it on average. This implies that the difference between [[energia]] and [[potencial_quimico]] is smaller than the thermal scale, therefore the state is statistically accessible. The value depends on all three controls: increasing [[energia]] decreases the occupation, increasing the allowed [[potencial_quimico]] increases it, and changing [[temperatura]] reshapes the distribution. Physically, a value above 1 is not a paradox, because bosons are not blocked from sharing a state. The degeneracy product close to one also indicates that classical particle individuality is becoming a weak description.

# Real-world example
## Context
In an ultracold-gas laboratory, bosonic atoms are cooled to observe when the cloud stops behaving like a classical gas. Researchers do not only measure a mean speed. They estimate [[temperatura]], [[densidad_particulas]], and [[longitud_onda_termica]] to decide whether quantum matter waves overlap. They also inspect how [[ocupacion_media]] is distributed among states with different [[energia]], because accumulation in low states is the signature of bosonic collective behavior.

## Physical estimation
Take a cloud with [[temperatura]] of about 200 nK and [[masa_particula]] comparable to rubidium. The [[longitud_onda_termica]] is of order 10^-7 m, an enormous scale for an atom. A reasonable value for the mean spacing in a dense ultracold cloud can be on the same approximate scale, so the product [[densidad_particulas]][[longitud_onda_termica]]^3 may have magnitude near one. This estimate does not prove a perfect condensate, but it places the system at the order where quantum statistics is essential. A modest decrease in [[temperatura]] can change the scale enough to move the cloud closer to [[densidad_critica]].

## Interpretation
The real-world example shows why bosons are special. Cooling does not merely reduce thermal agitation; it increases the relevance of shared quantum states. The [[ocupacion_media]] of low levels grows because [[energia]], [[potencial_quimico]], and [[temperatura]] reorganize statistical weight. If the cloud approaches [[densidad_critica]], the system stops being well described as many independent classical trajectories and starts behaving as a collective quantum object. That change of reading, from separated particles to shared state, is the physical core of the leaf.

