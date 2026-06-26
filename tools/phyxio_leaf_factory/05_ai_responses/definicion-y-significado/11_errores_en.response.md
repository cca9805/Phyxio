# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: definicion-y-significado
# Target response file: errores.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Definition and Meaning
## Conceptual errors
### Error 1: Confusing [[funcion_particion]] with [[probabilidad_microestado]]
**Why it seems correct**
Because [[funcion_particion]] appears in normalization, it may look like a total probability.
**Why it is incorrect**
The [[funcion_particion]] is a sum of [[peso_boltzmann]], not the probability of one state.
**Detection signal**
The student says [[funcion_particion]] must lie between zero and one.
**Conceptual correction**
Only [[probabilidad_microestado]] is bounded as a probability; [[funcion_particion]] is the accessible statistical total.
**Mini-example of contrast**
Three similar weights can give a [[funcion_particion]] greater than one while each [[probabilidad_microestado]] remains below one.

### Error 2: Assuming all states count equally
**Why it seems correct**
The word sum suggests counting identical objects.
**Why it is incorrect**
Each [[energia_microestado]] changes [[peso_boltzmann]] according to [[temperatura]].
**Detection signal**
The student computes [[funcion_particion]] from only the number of states.
**Conceptual correction**
Weight each state first, then sum.
**Mini-example of contrast**
At low [[temperatura]], a large [[energia_microestado]] may contribute almost nothing.

## Model errors
### Error 3: Using Celsius [[temperatura]]
**Why it seems correct**
Laboratory readings often use Celsius.
**Why it is incorrect**
The model requires absolute [[temperatura]] because [[constante_boltzmann]] sets an energy scale in kelvin.
**Detection signal**
The calculated weights look absurdly suppressed or enhanced.
**Conceptual correction**
Convert to kelvin before forming [[razon_energia_termica]].
**Mini-example of contrast**
Twenty Celsius and twenty kelvin describe very different thermal situations.

### Error 4: Ignoring degeneracy
**Why it seems correct**
If two states share the same [[energia_microestado]], one line may seem enough.
**Why it is incorrect**
Each accessible microstate contributes its own [[peso_boltzmann]] to [[funcion_particion]].
**Detection signal**
The probability of a degenerate level is too small.
**Conceptual correction**
Count every microstate or multiply the weight by degeneracy.
**Mini-example of contrast**
Two equal high states may compete with one low state at sufficient [[temperatura]].

## Mathematical errors
### Error 5: Reversing the physical sign
**Why it seems correct**
Exponent manipulation can hide the physical trend.
**Why it is incorrect**
A larger [[energia_microestado]] should not increase [[peso_boltzmann]] at fixed [[temperatura]].
**Detection signal**
The graph of [[peso_boltzmann]] versus [[razon_energia_termica]] rises.
**Conceptual correction**
Energy cost suppresses statistical contribution.
**Mini-example of contrast**
An excited state should not be more probable than the ground state without extra degeneracy.

### Error 6: Normalizing before all weights are included
**Why it seems correct**
A quick fraction can be formed with visible states.
**Why it is incorrect**
[[probabilidad_microestado]] depends on the complete [[funcion_particion]].
**Detection signal**
Probabilities change strongly when a missing state is added.
**Conceptual correction**
Build all [[peso_boltzmann]] values first, then normalize.
**Mini-example of contrast**
A fourth state with a comparable weight changes the whole distribution.

## Interpretation errors
### Error 7: Reading [[peso_boltzmann]] as final probability
**Why it seems correct**
Weights and probabilities often move in the same direction.
**Why it is incorrect**
[[peso_boltzmann]] does not include competitors; [[probabilidad_microestado]] does.
**Detection signal**
Weights from different systems are compared as absolute probabilities.
**Conceptual correction**
Use [[peso_boltzmann]] for internal comparison and [[probabilidad_microestado]] for normalized prediction.
**Mini-example of contrast**
The same weight may be common in a two-state system and rare in a hundred-state system.

### Error 8: Thinking high [[temperatura]] removes structure
**Why it seems correct**
At high [[temperatura]], weights may become similar.
**Why it is incorrect**
[[funcion_particion]] still depends on accessible states and the structure of [[energia_microestado]].
**Detection signal**
All probabilities are declared equal without checking degeneracy.
**Conceptual correction**
High [[temperatura]] weakens energy penalty but does not create states or erase constraints.
**Mini-example of contrast**
Two accessible states and ten accessible states do not produce the same distribution.

## Quick self-control rule
Check kelvin [[temperatura]], positive [[peso_boltzmann]], complete [[funcion_particion]], and normalized [[probabilidad_microestado]] before trusting the result.

