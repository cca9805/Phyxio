## Conceptual errors


### Error 1: Classifying only from visual appearance
**Why it seems correct**
A phase often looks different after a transition, so the final image seems enough.

**Why it is incorrect**
Classification depends on [[calor_latente]], [[salto_entropia]], [[salto_parametro_de_orden]], and derivatives of [[energia_libre_gibbs]], not on appearance alone. A sudden visual change may be kinetic.

**Detection signal**
The explanation does not mention [[temperatura_critica]] or any thermodynamic discontinuity.

**Conceptual correction**
Use the visual change as a clue, but decide with measurable quantities and [[parametro_de_orden]].

**Mini-example of contrast**
A crystal can change domain texture without showing resolvable [[calor_latente]].


### Error 2: Thinking continuous means weak
**Why it seems correct**
The word continuous suggests a smooth and unimportant change.

**Why it is incorrect**
A continuous transition can show very large responses near [[temperatura_critica]] and critical behavior of [[parametro_de_orden]].

**Detection signal**
The phenomenon is dismissed only because [[calor_latente]] is absent.

**Conceptual correction**
Separate absence of finite jump from absence of physical strength.

**Mini-example of contrast**
A ferromagnet may lose magnetization continuously and still show strong critical sensitivity.

## Model errors


### Error 3: Choosing an irrelevant order parameter
**Why it seems correct**
Any variable that changes with [[temperatura]] looks useful.

**Why it is incorrect**
[[parametro_de_orden]] must distinguish phases by symmetry or organization. If it is poorly chosen, [[salto_parametro_de_orden]] can hide the transition.

**Detection signal**
The variable changes by ordinary heating but does not separate phases.

**Conceptual correction**
Identify the physical distinction between phases before choosing the magnitude.

**Mini-example of contrast**
Density may not distinguish a magnetic transition, while magnetization does.


### Error 4: Ignoring hysteresis and metastability
**Why it seems correct**
If a curve shows a jump, the class seems settled.

**Why it is incorrect**
The observed jump may depend on nucleation, sweep rate, or thermal history, not only equilibrium [[energia_libre_gibbs]].

**Detection signal**
The apparent [[temperatura_critica]] changes between heating and cooling.

**Conceptual correction**
Compare sweeps, look for coexistence, and separate kinetics from thermodynamics.

**Mini-example of contrast**
Supercooling can shift freezing without changing the ideal classification.

## Mathematical errors


### Error 5: Misreading the sign of the entropy jump
**Why it seems correct**
It seems that only the existence of a jump matters.

**Why it is incorrect**
The sign of [[salto_entropia]] says which phase has higher entropy and determines the sign convention for [[calor_latente]].

**Detection signal**
[[calor_latente]] is reported as positive without stating transition direction.

**Conceptual correction**
Define initial phase, final phase, and sign convention before using

{{f:salto_entropia_latente}}

.

**Mini-example of contrast**
Melting and freezing exchange energy in opposite directions along the same boundary.


### Error 6: Confusing exponent and amplitude
**Why it seems correct**
[[exponente_critico_beta]] and [[amplitud_critica]] appear in the same critical law.

**Why it is incorrect**
[[exponente_critico_beta]] controls the critical curvature near [[temperatura_critica]], while [[amplitud_critica]] sets the scale of [[parametro_de_orden]].

**Detection signal**
The critical slope is changed by adjusting only [[amplitud_critica]].

**Conceptual correction**
Fit scale and exponent separately with

{{f:exponente_parametro_orden}}

.

**Mini-example of contrast**
Doubling [[amplitud_critica]] does not change the critical exponent.

## Interpretation errors


### Error 7: Treating transition order as an absolute label
**Why it seems correct**
[[orden_de_transicion]] sounds like a fixed universal category.

**Why it is incorrect**
It depends on model assumptions, measured variable, resolution, and equilibrium conditions.

**Detection signal**
Uncertainty and contradictory evidence are ignored.

**Conceptual correction**
Present classification as a diagnosis supported by evidence.

**Mini-example of contrast**
A weakly first-order transition may look continuous in a small sample.


### Error 8: Confusing discontinuity with divergence
**Why it seems correct**
Both produce striking graph features.

**Why it is incorrect**
A discontinuity is a finite jump; a divergence or singularity can occur without [[salto_parametro_de_orden]].

**Detection signal**
A continuous curve with a very steep slope is called a jump.

**Conceptual correction**
Check lateral limits, resolution, and continuity of [[parametro_de_orden]].

**Mini-example of contrast**
A susceptibility may become very large near [[temperatura_critica]] while [[parametro_de_orden]] vanishes smoothly.

## Quick self-control rule

Before classifying, ask: is there [[calor_latente]] or [[salto_entropia]], is there [[salto_parametro_de_orden]], and is the evidence near [[temperatura_critica]] under equilibrium conditions?