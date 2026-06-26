# Exam-type example


## Problem statement

A fermionic system in equilibrium has a quantum state whose [[energia]] is 0.060 eV above the [[potencial_quimico]]. The [[temperatura_absoluta]] is 300 K. Estimate the [[ocupacion_estado]] of that state and, if the grouped level has [[degeneracion_estado]] equal to 2, the mean [[numero_ocupacion]] associated with it. Use [[constante_boltzmann]] = 8.617·10^-5 eV/K. The physical question is direct: how does fermionic character limit state occupation as the state moves upward in [[energia]]?

## Data

The parameters given in the problem, with their SI units, are:

- Separation between [[energia]] and [[potencial_quimico]]: 0.060 eV
- [[temperatura_absoluta]]: 300 K
- [[constante_boltzmann]]: 8.617·10^-5 eV/K
- [[degeneracion_estado]]: 2
- Unknowns: [[energia_reducida]], [[ocupacion_estado]], and [[numero_ocupacion]]

## System definition

The system is treated as indistinguishable fermions in thermal equilibrium. The state under study is not a particle following a classical path; it is an available quantum state inside a statistical distribution. The state [[energia]] is compared with [[potencial_quimico]], which sets the occupation reference. [[temperatura_absoluta]] defines the thermal width of the transition: if the energy separation is large compared with [[constante_boltzmann]][[temperatura_absoluta]], the occupation changes strongly. [[degeneracion_estado]] then lets us convert probability per substate into a mean [[numero_ocupacion]] for the grouped level.

## Physical model

The model is Fermi-Dirac statistics for one state in equilibrium. Pauli exclusion is included by requiring [[ocupacion_estado]] per substate not to exceed 1. For the grouped level, [[numero_ocupacion]] must not exceed [[degeneracion_estado]]. We do not need to calculate [[energia_fermi]] or [[temperatura_fermi]], because the task asks for one state relative to [[potencial_quimico]], not the global scale of an ideal gas.

## Model justification

The relevant datum is not absolute [[energia]], but the difference between [[energia]] and [[potencial_quimico]] measured in thermal units. If that difference is positive, the state lies above the reference and its [[ocupacion_estado]] should be lower than that of a state below it. [[temperatura_absoluta]] prevents the transition from being a perfect step: at 300 K there can still be a small occupation of states slightly above the reference. The model is appropriate because the problem states equilibrium and provides [[constante_boltzmann]], [[temperatura_absoluta]], and [[degeneracion_estado]].

## Symbolic solution

First compute [[energia_reducida]], the dimensionless thermal separation between [[energia]] and [[potencial_quimico]].

{{f:parametro_reducido_fermi}}

Then compute [[ocupacion_estado]] using the fermionic occupation of a state.

{{f:fermi_dirac_ocupacion}}

Finally, for the degenerate group, connect the mean probability per substate with the allowed [[numero_ocupacion]].

{{f:exclusion_pauli_ocupacion_maxima}}

The symbolic structure shows the essential limit: even with two substates available, each substate remains bounded by fermionic occupation. The second example also requires the collective scale of the ideal Fermi gas, given by [[energia_fermi]]:

{{f:energia_fermi_gas_3d}}

That scale converts into [[temperatura_fermi]] through:

{{f:temperatura_fermi}}

## Numerical substitution

The thermal scale [[constante_boltzmann]][[temperatura_absoluta]] at 300 K is about 0.026 eV. Therefore [[energia_reducida]] ≈ 0.060 / 0.026 ≈ 2.32. Fermi-Dirac occupation gives [[ocupacion_estado]] ≈ 1/(exp(2.32)+1) ≈ 0.089. For [[degeneracion_estado]] = 2, the mean [[numero_ocupacion]] of the grouped level is about 2 · 0.089 ≈ 0.18. The value is small but not zero because finite [[temperatura_absoluta]] smooths the boundary.

## Dimensional validation

[[energia_reducida]] must be dimensionless: the numerator is a difference in [[energia]], and the denominator [[constante_boltzmann]][[temperatura_absoluta]] also has units of energy. [[ocupacion_estado]] is dimensionless because it represents a mean probability. [[numero_ocupacion]] is an expected count, also without an SI unit. The additional physical checks are 0 <= [[ocupacion_estado]] <= 1 and [[numero_ocupacion]] <= [[degeneracion_estado]]. Here 0.089 lies between 0 and 1, and 0.18 is below 2.

## Physical interpretation

The result means that the state lies several thermal scales above [[potencial_quimico]], so its [[ocupacion_estado]] is low. It indicates that higher [[energia]] makes occupation less favorable when [[temperatura_absoluta]] and [[potencial_quimico]] stay fixed. This implies that the state is not completely forbidden, because finite [[temperatura_absoluta]] allows thermal smearing, but it is still strongly limited. Therefore the grouped level has a mean [[numero_ocupacion]] far below its [[degeneracion_estado]]. The value depends physically on the competition between energetic cost and thermal broadening. If [[temperatura_absoluta]] increases, the occupation can increase; if the state moves further upward in [[energia]], it decreases.

# Real-world example


## Context

In a simple metal, conduction electrons are often approximated as a gas of fermions. The [[densidad_numerica]] is very high, of order 10^28 m^-3, and [[masa_particula]] is first approximated by the electron mass. [[constante_planck_reducida]] sets the quantum scale associated with available states. Even when the metal is at room [[temperatura_absoluta]], many states below [[energia_fermi]] remain almost filled. Heating mainly changes a narrow region near [[potencial_quimico]], not the entire sea of electrons.

## Physical estimation

Using [[densidad_numerica]] of order 10^28 m^-3,

{{f:energia_fermi_gas_3d}}

gives an [[energia_fermi]] of the order of a few eV. This estimate is approximate, but it has the right scale and magnitude for simple metals. Converting it with [[temperatura_fermi]] gives [[temperatura_fermi]] of order 10^4 K. Compared with [[temperatura_absoluta]] near 300 K, this is a reasonable value showing that ordinary thermal energy is much smaller than the Fermi scale. Therefore only states within an energy band of approximate width [[constante_boltzmann]][[temperatura_absoluta]] near [[potencial_quimico]] change noticeably, which is the reasonable value to compare with experimental thermal changes.

## Interpretation

This explains why metallic electrons do not behave like a classical gas. A high [[energia_fermi]] does not mean every electron is hot in the everyday sense; it means Pauli exclusion has forced fermions into states of progressively larger [[energia]] even at low [[temperatura_absoluta]]. [[ocupacion_estado]] is controlled by each state’s position relative to [[potencial_quimico]]. This reading helps explain electrical and thermal behavior: not all electrons respond equally, because the active population is concentrated near the occupation boundary.