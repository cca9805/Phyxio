# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: modelo-de-einstein
# Target response file: errores.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Einstein Model

## Conceptual errors

### Error 1: Treating [[temperatura_einstein]] as the actual [[temperatura]]

**Why it seems correct**
Both quantities are measured in kelvin and appear together, so they may look like two names for the same thermometer reading.

**Why it is incorrect**
[[temperatura]] describes the thermal state of the solid. [[temperatura_einstein]] is a material scale tied to [[frecuencia_angular_einstein]] through [[constante_planck_reducida]] and [[constante_boltzmann]].

**Detection signal**
The student says the solid has heated up when only the material parameter has changed.

**Conceptual correction**
Separate state from material: [[temperatura]] is experimental, [[temperatura_einstein]] is a model parameter.

**Mini-example of contrast**
Two solids at 300 K may have different [[calor_especifico_molar_volumen_constante]] because their [[temperatura_einstein]] values differ.

### Error 2: Thinking low [[temperatura]] means no vibrational energy

**Why it seems correct**
Everyday language connects coldness with lack of energy.

**Why it is incorrect**
The model separates [[energia_interna]] from [[capacidad_calorifica_volumen_constante]]. Zero-point energy can remain even when the thermal response is small.

**Detection signal**
A low [[calor_especifico_molar_volumen_constante]] is described as total absence of vibration.

**Conceptual correction**
Read heat capacity as thermal sensitivity, not total stored energy.

**Mini-example of contrast**
At very low [[temperatura]], [[energia_interna]] may include a quantum part, while extra heating changes it only weakly.

## Model errors

### Error 3: Using Einstein when the solid shows a cubic law

**Why it seems correct**
The model is quantum, so it may seem valid for any cold solid.

**Why it is incorrect**
A cubic low-[[temperatura]] behavior indicates distributed acoustic modes, not one [[frecuencia_angular_einstein]].

**Detection signal**
The experimental curve falls smoothly with a power law, while the Einstein curve drops too steeply.

**Conceptual correction**
Use Einstein for a single-frequency quantum picture; use Debye when the phonon spectrum matters.

**Mini-example of contrast**
If the data between 2 K and 20 K fit a cubic pattern, one [[temperatura_einstein]] is not enough.

### Error 4: Applying the molar expression to a finite atom count

**Why it seems correct**
Both versions describe thermal capacity of the same solid.

**Why it is incorrect**
The molar expression uses [[constante_gases]], while the total capacity of a finite system depends on [[numero_atomos]] and [[constante_boltzmann]].

**Detection signal**
The answer has units J mol⁻¹ K⁻¹ although the problem asked for J K⁻¹.

**Conceptual correction**
Use [[calor_especifico_molar_volumen_constante]] for one mole and [[capacidad_calorifica_volumen_constante]] for the full system.

**Mini-example of contrast**
A nanocrystal and one mole can share the same regime but not the same total heat capacity.

## Mathematical errors

### Error 5: Inverting [[parametro_reducido]]

**Why it seems correct**
A ratio of two temperatures may look symmetric.

**Why it is incorrect**
The Einstein regime uses the defined comparison between [[temperatura_einstein]] and [[temperatura]]. Inverting it swaps the limiting cases.

**Detection signal**
Increasing [[temperatura]] appears to make thermal excitation harder.

**Conceptual correction**
Use the reference:

{{f:parametro_reducido_einstein}}

and check that [[parametro_reducido]] decreases when [[temperatura]] increases.

**Mini-example of contrast**
If [[temperatura]] doubles while [[temperatura_einstein]] stays fixed, [[parametro_reducido]] must become smaller.

### Error 6: Replacing the exponential behavior by a linear rule

**Why it seems correct**
Many calorimetry problems use almost proportional changes.

**Why it is incorrect**
Einstein [[calor_especifico_molar_volumen_constante]] contains exponential dependence, so low-[[temperatura]] behavior cannot be fixed by a simple rule of three.

**Detection signal**
The calculation gives nearly similar values for 50 K and 100 K when [[temperatura_einstein]] is large.

**Conceptual correction**
Use the full relation:

{{f:calor_especifico_molar_einstein}}

before making approximations.

**Mini-example of contrast**
Near [[temperatura_einstein]], doubling [[temperatura]] can strongly alter the slope; far above it, the curve flattens.

## Interpretation errors

### Error 7: Reading the curve as a straight line

**Why it seems correct**
Many school graphs train students to search for constant slope.

**Why it is incorrect**
The graph of [[calor_especifico_molar_volumen_constante]] versus [[temperatura]] is saturating, not globally linear.

**Detection signal**
The student claims direct proportionality across the whole range.

**Conceptual correction**
Read slope and curvature: quantum unlocking dominates first, saturation dominates later.

**Mini-example of contrast**
From low to intermediate [[temperatura]] the rise is strong; at high [[temperatura]] extra kelvin change little.

### Error 8: Ignoring absolute units

**Why it seems correct**
Celsius degrees are familiar, and temperature differences sometimes use the same interval size.

**Why it is incorrect**
[[parametro_reducido]] is a ratio of absolute temperatures. Celsius destroys the physical scale.

**Detection signal**
Negative or zero [[temperatura]] enters a thermal quantum formula.

**Conceptual correction**
Convert [[temperatura]] to kelvin before calculating.

**Mini-example of contrast**
0 °C is not thermal zero; in the model it is 273 K.

## Quick self-control rule

Before accepting the answer, check three locks: [[temperatura]] in kelvin, correctly oriented [[parametro_reducido]], and [[calor_especifico_molar_volumen_constante]] consistent with the regime set by [[temperatura_einstein]].

