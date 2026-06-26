# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: clasificacion-de-transiciones
# Target response file: teoria.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Classification of Transitions
## Conceptual context
A phase transition is not classified merely because a material looks different after changing [[temperatura]]. The central task is to decide which quantity changes, whether the change is discontinuous or continuous, and which macroscopic variable reveals the internal reorganization. The [[temperatura_critica]] marks the region where phases compete or where one phase loses stability. The [[energia_libre_gibbs]] compares the thermodynamic preference of phases, while the [[parametro_de_orden]] acts as a visible signature of symmetry, structure, or internal order. Classification is therefore a disciplined reading of jumps, singularities, and critical behavior.

## 🟢 Essential level
The classification of phase transitions asks whether a system changes phase through a sudden jump or through a continuous transformation. In a first-order transition there is finite [[calor_latente]] and a finite [[salto_entropia]]: energy is absorbed or released while phases coexist near the [[temperatura_critica]]. A [[salto_parametro_de_orden]] may also appear, showing that internal organization changes abruptly. In a continuous transition there is no finite [[calor_latente]], but the [[parametro_de_orden]] approaches zero smoothly and some response quantities can become very large. That is why one must not classify only by visual appearance. The correct reading compares [[energia_libre_gibbs]], thermodynamic discontinuities, and the behavior of the [[parametro_de_orden]]. Classification turns a laboratory observation into a structured physical diagnosis and filters out noise, history, and visual shortcuts.
## 🔵 Formal level
The formal starting point is the [[energia_libre_gibbs]], because its derivatives encode entropy, volume, and response functions under controlled conditions. The [[orden_de_transicion]] identifies the first thermodynamic derivative that becomes discontinuous or singular when the system crosses the [[temperatura_critica]].

{{f:criterio_derivada_energia_libre}}

For a first-order transition, the most direct diagnostic is [[calor_latente]] connected with the molar [[salto_entropia]]. At the transition point, finite entropy discontinuity means finite energy exchange during phase coexistence.

{{f:salto_entropia_latente}}

The structural part of the diagnosis is expressed through the [[parametro_de_orden]]. If its values on both sides of the transition differ by a finite amount, [[salto_parametro_de_orden]] signals a macroscopic discontinuity.

{{f:salto_parametro_orden}}

For a continuous transition, the [[parametro_de_orden]] often approaches zero through a critical law controlled by [[exponente_critico_beta]] and scaled by [[amplitud_critica]].

{{f:exponente_parametro_orden}}

These relations form a diagnostic chain. First one checks thermodynamic jumps, then whether [[parametro_de_orden]] jumps or vanishes continuously, and finally assigns [[orden_de_transicion]] through the derivative criterion of [[energia_libre_gibbs]]. Thus, classification combines thermodynamic discontinuities with structural continuity or discontinuity.

The result is not a standalone label: it must agree with all measured signatures at the same time.
## 🔴 Structural level
The model assumes that the system can be described by equilibrium or quasi-equilibrium states near the [[temperatura_critica]], with pressure, composition, and external constraints sufficiently controlled. It also assumes that [[energia_libre_gibbs]] is the right thermodynamic potential for comparing phases and that the chosen [[parametro_de_orden]] truly distinguishes the relevant phases. If the selected quantity does not respond to the symmetry or organization that changes, the classification becomes blind: a diagram may look smooth even though the microscopic state reorganizes.

The central invariant is that the stable phase minimizes [[energia_libre_gibbs]] under the imposed conditions. A first-order transition appears when two competing minima exchange stability and the system jumps from one state to another, producing [[calor_latente]], [[salto_entropia]], or [[salto_parametro_de_orden]]. A continuous transition preserves continuity of the [[parametro_de_orden]] but may show singular behavior in susceptibilities or higher derivatives; therefore, absence of a visible jump is not absence of a transition.

Validity limits matter. Far from the [[temperatura_critica]], the critical law for the [[parametro_de_orden]] is not reliable; too close to it, fluctuations, finite size, and impurities can round apparent discontinuities. In small samples, a [[salto_entropia]] can appear as a smooth band; in real materials, hysteresis, nucleation, and defects may shift the observed change away from the ideal [[temperatura_critica]]. If supercooling, metastability, or slow transformation is present, the reading must separate kinetics from thermodynamics.

Boundary cases are especially subtle. A weakly first-order transition may have small [[calor_latente]] and look continuous. A continuous transition with a small critical exponent may make the [[parametro_de_orden]] drop very rapidly and look abrupt. The Svg representation in this leaf should be read as a decision map: first identify continuity or jump, then check [[salto_entropia]], [[calor_latente]], and [[salto_parametro_de_orden]], and finally connect the evidence with [[orden_de_transicion]]. The model fails when classification is made from visual appearance alone, when the conjugate quantity is not measured, or when out-of-equilibrium phase mixtures are treated as equilibrium phases. It also fails when a critical law is extrapolated outside its window or when rounded finite-size behavior is reported as a perfect discontinuity.

As a boundary rule, a robust classification requires reproducibility when the thermal cycle is repeated. If the supposed jump changes strongly between trials, the evidence should be treated as provisional rather than as a universal feature of the material.
## Deep physical interpretation
[[calor_latente]] is not just “extra heat”; it is the energetic trace of reorganizing one phase into another at [[temperatura_critica]]. [[salto_entropia]] measures how the number of accessible configurations changes when the phase boundary is crossed. The [[parametro_de_orden]] condenses a qualitative difference, such as magnetization, density, orientation, or symmetry, into a measurable quantity. Its jump or continuous disappearance tells whether the system reorganizes abruptly or gradually loses order. The [[energia_libre_gibbs]] acts as the decision landscape: it does not describe every particle, but it identifies which phase is thermodynamically preferred.

## Order of magnitude
For ordinary first-order transitions, molar [[calor_latente]] may range from 10² to 10⁴ J/mol, depending strongly on the material. A [[salto_entropia]] between 1 and 100 J/(mol·K) can already be calorimetrically meaningful. Near [[temperatura_critica]], relative intervals such as |[[temperatura]] - [[temperatura_critica]]|/[[temperatura_critica]] < 10⁻² may show critical behavior, although impurities and finite-size rounding can hide it. A small [[salto_parametro_de_orden]] should not be dismissed without estimating experimental resolution.

## Personalized resolution method
First fix the control variable, usually [[temperatura]], and locate [[temperatura_critica]]. Next identify the two phases and choose a [[parametro_de_orden]] that separates them. Third, search for finite discontinuities: [[calor_latente]], [[salto_entropia]], or [[salto_parametro_de_orden]]. Fourth, if no finite jump appears, test whether [[parametro_de_orden]] vanishes through a critical law involving [[exponente_critico_beta]] and [[amplitud_critica]]. Fifth, interpret the result through [[energia_libre_gibbs]]: continuity of the function is not enough, because its derivatives decide the class. Finally, check hysteresis, finite size, and impurities.

## Special cases and extended example
Consider a material changing phase around [[temperatura_critica]]. If it absorbs [[calor_latente]] and its [[parametro_de_orden]] jumps from one finite value to another, the diagnosis is first order. If no measurable [[calor_latente]] appears, but the [[parametro_de_orden]] decreases smoothly toward zero, a critical law becomes more appropriate. In a weakly first-order case, [[salto_entropia]] may be so small that an imprecise sensor rounds it into a smooth curve. In a real experiment, one repeats heating and cooling sweeps: hysteresis may reveal kinetic delay rather than the pure thermodynamic class.

## Real student questions
Does a continuous transition mean nothing changes abruptly? Not quite: it means the [[parametro_de_orden]] has no finite jump, even though some responses may diverge.

If there is [[calor_latente]], is it always first order? In the standard thermodynamic framework, yes: finite [[calor_latente]] implies [[salto_entropia]] and a discontinuity in a derivative of [[energia_libre_gibbs]].

Is [[orden_de_transicion]] directly measured? Usually no. It is inferred from discontinuities, singularities, and the behavior of the [[parametro_de_orden]].

Why is [[parametro_de_orden]] so important? It converts microscopic symmetry or organization into a measurable macroscopic signal.

## Cross-cutting connections and study paths
This leaf connects calorimetry, phase equilibrium, Landau theory, critical phenomena, and statistical mechanics. Useful next steps include studying [[energia_libre_gibbs]], thermodynamic potentials, stability, susceptibilities, and critical scaling. The same logic appears in magnetic transitions, superconductivity, binary mixtures, and liquid-gas changes.

## Final synthesis
Classifying a phase transition means reading how [[energia_libre_gibbs]], its derivatives, and the [[parametro_de_orden]] behave around [[temperatura_critica]]. The physical diagnosis combines jumps, continuity, critical scales, and experimental limits.
