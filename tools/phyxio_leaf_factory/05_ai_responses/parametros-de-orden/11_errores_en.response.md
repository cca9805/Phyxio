# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: parametros-de-orden
# Target response file: errores.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Order Parameters
## Conceptual errors
### Error 1: Treating the order parameter as just temperature
**Why it seems correct**
The [[temperatura]] appears in almost every transition graph, so it seems natural to use it as the phase identifier.

**Why it is incorrect**
The [[temperatura]] controls thermal state, but the [[parametro_de_orden]] measures organization or symmetry.

**Detection signal**
The student says that knowing [[temperatura]] alone is enough to know whether the phase is ordered.

**Conceptual correction**
Use [[temperatura]] to locate the system and [[parametro_de_orden]] to identify the phase.

**Mini-example of contrast**
Two samples near [[temperatura_critica]] may have different [[parametro_de_orden]] values because one is ordered and the other is not.

### Error 2: Reading zero as absence of matter
**Why it seems correct**
A zero value often suggests that nothing exists.

**Why it is incorrect**
Zero [[parametro_de_orden]] means absence of the measured order, not absence of the physical system.

**Detection signal**
The student says the disordered phase disappears because the [[parametro_de_orden]] is zero.

**Conceptual correction**
Read zero as restored symmetry or zero average, not as emptiness.

**Mini-example of contrast**
A magnet above [[temperatura_critica]] still exists even if its average magnetization is zero.

## Model errors
### Error 3: Applying critical scaling far from the transition
**Why it seems correct**
Power laws look general and easy to extrapolate.

**Why it is incorrect**
[[amplitud_critica]] and [[exponente_critico_beta]] describe the neighborhood of [[temperatura_critica]], not the entire curve.

**Detection signal**
Data with large |[[temperatura_reducida]]| are fitted without checking the critical domain.

**Conceptual correction**
Restrict the fit to small [[temperatura_reducida]] values and check whether the exponent is stable.

**Mini-example of contrast**
A fit from |t| 0.001 to 0.03 may be critical; a fit from 0.5 to 2 is not.

### Error 4: Ignoring the conjugate field
**Why it seems correct**
The [[campo_conjugado]] may look small or secondary.

**Why it is incorrect**
Near [[temperatura_critica]], even a small [[campo_conjugado]] can change the [[parametro_de_orden]].

**Detection signal**
[[susceptibilidad]] is reported without stating which perturbation caused the response.

**Conceptual correction**
Separate spontaneous order from order induced by [[campo_conjugado]].

**Mini-example of contrast**
A magnet can show magnetization due to an external field even without stable spontaneous order.

## Mathematical errors
### Error 5: Losing the sign of reduced temperature
**Why it seems correct**
The absolute value of [[temperatura_reducida]] measures distance, and distance seems sufficient.

**Why it is incorrect**
The sign tells which side of [[temperatura_critica]] is being observed.

**Detection signal**
The same interpretation is used above and below [[temperatura_critica]].

**Conceptual correction**
Keep the sign of [[temperatura_reducida]] and link it to ordered or disordered behavior.

**Mini-example of contrast**
The same |t| may correspond to finite [[parametro_de_orden]] or to a disordered phase.

### Error 6: Confusing a jump with a steep slope
**Why it seems correct**
A very steep curve can look almost vertical.

**Why it is incorrect**
A [[salto_parametro_de_orden]] is a finite discontinuity; a steep slope can still be continuous.

**Detection signal**
An abrupt transition is claimed without comparing lateral limits.

**Conceptual correction**
Check whether the two sides approach the same [[parametro_de_orden]] value.

**Mini-example of contrast**
A smooth curve can change quickly near [[temperatura_critica]] without a jump.

## Interpretation errors
### Error 7: Taking sign as a new phase
**Why it seems correct**
Positive and negative values look like different states.

**Why it is incorrect**
Often the sign of [[parametro_de_orden]] represents equivalent symmetry-related orientations.

**Detection signal**
Two phases are counted only because the sign changes.

**Conceptual correction**
Check whether sign reversal is an equivalent orientation or a genuinely distinct phase.

**Mini-example of contrast**
Up and down magnetization can be two domains of the same ordered phase.

### Error 8: Reading susceptibility as isolated
**Why it seems correct**
[[susceptibilidad]] appears as a computable number.

**Why it is incorrect**
Its meaning depends on [[campo_conjugado]] and on how [[parametro_de_orden]] changes.

**Detection signal**
[[susceptibilidad]] is given without unit, perturbation, or linear-response check.

**Conceptual correction**
Interpret [[susceptibilidad]] as differential response under controlled conditions.

**Mini-example of contrast**
A large response near [[temperatura_critica]] means critical sensitivity, not necessarily “more phase”.

## Quick self-control rule
Before classifying, ask what [[parametro_de_orden]] measures, where [[temperatura_critica]] is, what sign [[temperatura_reducida]] has, whether [[salto_parametro_de_orden]] exists, and under which [[campo_conjugado]] [[susceptibilidad]] was measured.

