# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: fermiones
# Target response file: modelos.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Fermions

## Ideal model

The ideal model treats indistinguishable fermions in thermal equilibrium, distributed among well-defined quantum states. The central question is how [[ocupacion_estado]] changes when [[energia]] increases relative to [[potencial_quimico]]. The answer is not classical: occupation cannot grow without limit because [[degeneracion_estado]] sets a ceiling for [[numero_ocupacion]]. The characteristic curve is decreasing. States with low [[energia]] relative to [[potencial_quimico]] tend to be occupied, while much higher states tend to be empty. [[temperatura_absoluta]] controls how smooth the transition is.

## Hypotheses

- Well-defined quantum states: if different levels are mixed, [[degeneracion_estado]] no longer counts equivalent places and [[numero_ocupacion]] is misread.
- Thermal equilibrium: if the system lacks common [[temperatura_absoluta]] and [[potencial_quimico]], the equilibrium occupation formula does not describe the actual population.
- Identical fermions: if particles do not share the same quantum identity, the Pauli limit does not apply to the whole set.
- Ideal gas for [[energia_fermi]]: if interactions dominate, the relation with [[densidad_numerica]], [[masa_particula]], and [[constante_planck_reducida]] needs corrections.
- Nonrelativistic regime: if the characteristic [[energia]] approaches rest-energy scales, the simple [[energia_fermi]] model is insufficient.

## Quantitative validity domain

For state occupation, [[temperatura_absoluta]] must be greater than 0 K and the thermal scale [[constante_boltzmann]][[temperatura_absoluta]] must be meaningful. Numerical reading is stable when [[energia_reducida]] lies in a manageable range, for example -20 < [[energia_reducida]] < 20; outside that interval [[ocupacion_estado]] is practically saturated near 1 or 0. For the ideal three-dimensional Fermi gas, typical use involves [[densidad_numerica]] of order 10^20 to 10^30 m^-3, positive [[masa_particula]], and nonrelativistic fermions. The checks 0 <= [[ocupacion_estado]] <= 1 per substate and 0 <= [[numero_ocupacion]] <= [[degeneracion_estado]] are mandatory.

## Model failure signals

A first warning is obtaining [[ocupacion_estado]] greater than 1 per substate or below 0. Another warning is [[numero_ocupacion]] exceeding [[degeneracion_estado]], which signals a direct violation of Pauli exclusion or a wrong grouping of states. The interpretation also fails if occupation rises with [[energia]] while [[potencial_quimico]] and [[temperatura_absoluta]] stay fixed. In real materials, strong deviations may come from bands, interactions, confinement, disorder, or an effective [[masa_particula]] different from the bare value.

## Extended or alternative model

The model should change when the states are not free and uniform. In solids, one uses band structure and density of states; in very dense systems, relativistic corrections are added; in correlated materials, interactions must be included. If the system is out of equilibrium, equilibrium occupations are replaced by process-dependent distributions. {{f:fermi_dirac_ocupacion}} remains a reference point, but not always the full story.

## Operational comparison

| Situation | Useful model | Key magnitude | Main risk |
|---|---|---|---|
| Single state in equilibrium | Fermi-Dirac | [[ocupacion_estado]] | Ignoring [[potencial_quimico]] |
| Degenerate level | Pauli with [[degeneracion_estado]] | [[numero_ocupacion]] | Exceeding the allowed maximum |
| Ideal 3D gas | [[energia_fermi]] scale | [[densidad_numerica]] | Applying it with strong interactions |
| Real metal | Electronic bands | [[energia_fermi]] | Confusing a free state with a band |

