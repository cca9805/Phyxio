# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: fermiones
# Target response file: errores.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Fermions

## Conceptual errors

### Error 1: Assuming all fermions can occupy the lowest [[energia]] state
**Why it seems correct**
Classically, systems tend toward lower [[energia]], so it seems natural to place every particle there.
**Why it is incorrect**
Fermions obey Pauli exclusion: [[degeneracion_estado]] limits how many can share a level and [[numero_ocupacion]] cannot grow without a ceiling.
**Detection signal**
The result gives [[numero_ocupacion]] greater than [[degeneracion_estado]].
**Conceptual correction**
Before minimizing [[energia]], count the available states and apply {{f:exclusion_pauli_ocupacion_maxima}}.
**Mini-example of contrast**
A level with [[degeneracion_estado]] 2 cannot hold 10 identical fermions in the same state.

### Error 2: Treating [[ocupacion_estado]] as a total particle count
**Why it seems correct**
Occupation sounds like direct counting.
**Why it is incorrect**
[[ocupacion_estado]] is a mean probability per state or substate; total counting requires [[numero_ocupacion]] and [[degeneracion_estado]].
**Detection signal**
A number between 0 and 1 is compared with a macroscopic particle count.
**Conceptual correction**
Separate mean probability, available substates, and grouped counting.
**Mini-example of contrast**
[[ocupacion_estado]] of 0.5 in a level with [[degeneracion_estado]] 4 suggests mean [[numero_ocupacion]] near 2.

## Model errors

### Error 3: Using equilibrium for a driven system
**Why it seems correct**
Fermi-Dirac occupation is famous and may look universal.
**Why it is incorrect**
{{f:fermi_dirac_ocupacion}} requires equilibrium with meaningful [[temperatura_absoluta]] and [[potencial_quimico]].
**Detection signal**
The population depends on pumping, an external pulse, or time.
**Conceptual correction**
Use a nonequilibrium distribution or clearly state a local-equilibrium approximation.
**Mini-example of contrast**
A strongly illuminated semiconductor may not follow one electronic [[temperatura_absoluta]].

### Error 4: Applying the ideal gas scale to a strongly interacting material
**Why it seems correct**
{{f:energia_fermi_gas_3d}} gives a compact scale from [[densidad_numerica]].
**Why it is incorrect**
The ideal relation assumes free fermions, stable [[masa_particula]], and uniform states.
**Detection signal**
Estimated [[energia_fermi]] disagrees with band or heat-capacity measurements.
**Conceptual correction**
Switch to band structure, effective [[masa_particula]], or interaction models.
**Mini-example of contrast**
Nearly free electrons in a simple metal may work; correlated electrons in an oxide may not.

## Mathematical errors

### Error 5: Reversing the sign of [[energia_reducida]]
**Why it seems correct**
The subtraction between [[energia]] and [[potencial_quimico]] looks almost symmetric.
**Why it is incorrect**
The sign decides whether the state is above or below the reference, changing [[ocupacion_estado]].
**Detection signal**
A high [[energia]] state appears almost full without a physical reason.
**Conceptual correction**
Check the order of the difference before using {{f:parametro_reducido_fermi}}.
**Mini-example of contrast**
If [[energia]] is clearly above [[potencial_quimico]], occupation should fall, not rise.

### Error 6: Forgetting the [[constante_boltzmann]][[temperatura_absoluta]] scale
**Why it seems correct**
It can seem enough to compare absolute energies.
**Why it is incorrect**
The transition width depends on the thermal scale, not only on the difference in [[energia]].
**Detection signal**
Tiny differences produce huge effects without checking [[temperatura_absoluta]].
**Conceptual correction**
Measure the [[energia]] separation in units of [[constante_boltzmann]][[temperatura_absoluta]].
**Mini-example of contrast**
A small separation can matter at low [[temperatura_absoluta]] and be mild at high [[temperatura_absoluta]].

## Interpretation errors

### Error 7: Reading the graph as a proportional straight line
**Why it seems correct**
Many school graphs use linear relations.
**Why it is incorrect**
Fermionic occupation is bounded and decreasing, not simple proportionality.
**Detection signal**
A constant slope is assumed between [[energia]] and [[ocupacion_estado]].
**Conceptual correction**
Read the slope as local sensitivity of occupation.
**Mini-example of contrast**
Near [[potencial_quimico]] the curve changes strongly; far away it saturates.

### Error 8: Thinking higher [[temperatura_absoluta]] removes Pauli exclusion
**Why it seems correct**
Heating can populate higher [[energia]] states.
**Why it is incorrect**
[[temperatura_absoluta]] smooths the distribution but does not allow [[numero_ocupacion]] to exceed [[degeneracion_estado]].
**Detection signal**
The result accepts occupation above the available maximum.
**Conceptual correction**
Separate thermal excitation from quantum exclusion.
**Mini-example of contrast**
A hot state may change its population, but it does not allow unlimited occupation.

## Quick self-control rule

Accept the result only if 0 <= [[ocupacion_estado]] <= 1 per substate, [[numero_ocupacion]] <= [[degeneracion_estado]], and occupation decreases with increasing [[energia]] when [[potencial_quimico]] and [[temperatura_absoluta]] are fixed.

