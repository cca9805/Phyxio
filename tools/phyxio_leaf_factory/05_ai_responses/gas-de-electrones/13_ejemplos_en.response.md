# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: gas-de-electrones
# Target response file: ejemplos.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Exam-type example
## Problem statement
A metallic sample is modeled as a free three-dimensional electron gas. The sample contains a known [[numero_electrones]] distributed in a known [[volumen]]. Estimate [[densidad_electronica]], [[energia_fermi]], [[temperatura_fermi]], and [[velocidad_fermi]], and explain what happens to [[ocupacion_estado]] for a state whose [[energia_estado]] lies slightly above [[potencial_quimico]] at room temperature. The goal is not to describe every band of the metal, but to answer how density fixes the fermionic filling scale.

## Data
- [[numero_electrones]]: 8.5·10²⁸ electrons in an equivalent 1 m³ sample
- [[volumen]]: 1.0 m³
- [[masa_electron]]: 9.11·10⁻³¹ kg
- [[constante_planck_reducida]]: 1.055·10⁻³⁴ J·s
- [[constante_boltzmann]]: 1.381·10⁻²³ J/K
- [[temperatura_absoluta]]: 300 K
- Test state: [[energia_estado]] slightly above [[potencial_quimico]]

## System definition
The system is the set of free conduction electrons inside a macroscopic portion of metal. The ionic background is treated as uniform and only provides electrical neutrality. The input magnitude summarizing the system is [[densidad_electronica]], because it combines how many electrons are present with the [[volumen]] in which they compete for quantum states. The calculation does not track a single electron trajectory; it studies the statistical filling of many allowed states.

## Physical model
The model is a free, ideal, three-dimensional, nonrelativistic electron gas in equilibrium. Pauli exclusion prevents all electrons from occupying the lowest [[energia_estado]], so occupation progressively fills momentum states up to [[energia_fermi]]. For occupation near the edge, the Fermi-Dirac distribution is used: [[potencial_quimico]] marks the center of the transition and [[temperatura_absoluta]] controls its width.

## Model justification
This model is appropriate for an order-of-magnitude estimate in simple metals, where [[densidad_electronica]] is high and room [[temperatura_absoluta]] is usually much lower than [[temperatura_fermi]]. That separation of scales makes the occupation edge very sharp. If the problem required detailed bands, effective mass, or crystal anisotropy, [[masa_electron]] would need to be replaced by material parameters. Here the requested relation is the general link between density, filling energy, and state occupation, which is exactly the free electron gas picture.

## Symbolic solution
First obtain [[densidad_electronica]] from [[numero_electrones]] and [[volumen]]. Then compute [[energia_fermi]] using the 3D free-gas relation:

{{f:energia_fermi_gas_electrones_3d}}

The equivalent thermal scale is obtained with:

{{f:temperatura_fermi_gas_electrones}}

The edge speed scale is estimated with:

{{f:velocidad_fermi}}

For a particular state near the boundary, use electronic occupation:

{{f:ocupacion_fermi_dirac_electrones}}

and interpret the separation with:

{{f:energia_reducida_electrones}}

If [[energia_estado]] is above [[potencial_quimico]], [[energia_reducida]] is positive and [[ocupacion_estado]] decreases relative to the central value.

## Numerical substitution
With the given data, [[densidad_electronica]] is approximately 8.5·10²⁸ m⁻³. This density, together with free [[masa_electron]] and [[constante_planck_reducida]], gives [[energia_fermi]] on the scale of several electronvolts, about 7 eV for a typical metallic estimate. Dividing by [[constante_boltzmann]] gives [[temperatura_fermi]] of order 8·10⁴ K. The associated [[velocidad_fermi]] is of order 10⁶ m/s, clearly below the speed of light, so the nonrelativistic assumption is consistent.

## Dimensional validation
[[densidad_electronica]] has dimension m⁻³. In {{f:energia_fermi_gas_electrones_3d}}, the combination of [[constante_planck_reducida]] and [[masa_electron]] must end in joules, an energy unit. In {{f:temperatura_fermi_gas_electrones}}, dividing energy by [[constante_boltzmann]] produces kelvin. In {{f:velocidad_fermi}}, combining energy with mass gives m²/s² before the square root, so the final unit is m/s. [[ocupacion_estado]] is dimensionless and must remain between 0 and 1.

## Physical interpretation
The result means that the metallic [[densidad_electronica]] imposes a [[energia_fermi]] much larger than the thermal energy available at room [[temperatura_absoluta]]. Physically, this indicates that most states below the edge are already occupied and Pauli-blocked, while states far above it are nearly empty. This implies that ordinary thermal changes mainly affect states whose [[energia_estado]] lies close to [[potencial_quimico]]. Therefore [[ocupacion_estado]] depends very sensitively on the reduced separation near the edge, but decreases rapidly above it. The large [[temperatura_fermi]] does not mean that the metal is actually that hot; it indicates a quantum filling scale. As [[densidad_electronica]] increases, the Fermi boundary increases too.

# Real-world example
## Context
In a copper wire, conduction electrons form a degenerate gas. Although the wire is at room temperature, electrical response comes mainly from electrons near [[energia_fermi]], not from all electrons equally. The large [[densidad_electronica]] explains why the occupation edge sits far above the ordinary thermal scale.

## Physical estimation
For [[densidad_electronica]] of order 10²⁸ m⁻³, an order estimate gives [[energia_fermi]] of a few eV. The approximate [[temperatura_fermi]] is then on the scale of 10⁴ to 10⁵ K, while room [[temperatura_absoluta]] is about 300 K. This magnitude comparison gives a reasonable value for a strongly degenerate electron gas. The estimate of [[velocidad_fermi]] is also on the scale of 10⁶ m/s, which is large microscopically but still nonrelativistic. The key point is not exact precision; it is the scale separation between thermal energy and Fermi filling. A reasonable value should preserve this hierarchy even when input constants are rounded.

## Interpretation
The wire does not conduct because all electrons accelerate equally from rest. Most deep states are occupied and blocked; the relevant changes occur near [[energia_fermi]]. If [[densidad_electronica]] is changed through material choice, pressure, or doping, the filling edge and the availability of states near [[potencial_quimico]] change. Thus the electron gas connects a macroscopic magnitude, [[densidad_electronica]], with a microscopic reading of [[ocupacion_estado]].

