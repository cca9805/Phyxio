# Exam-type example


## Problem statement

An electronic component marked as a 1500 \(\Omega\) precision resistor is available. A student decides to verify this value in the laboratory by applying a potential difference or [[tension]] of exactly 12.0 V using a regulated direct [[intensidad]] power supply. When measuring with a high-impedance digital ammeter, a [[intensidad]] intensity or [[intensidad]] of 8.0 mA is recorded flowing through the device. The student must determine through rigorous calculation:
1. The actual measured [[resistencia]] [[resistencia]] using the fundamental relationship of conduction.
2. The [[conductancia]] of the component to evaluate its ease of passage.
3. The percentage relative error compared to the value marked by the manufacturer.
4. A geometric verification: if the component were a carbon cylinder 5 mm long with a 0.1 mm2 cross-section, what theoretical [[resistencia]] would be expected?

## Data

- Applied [[tension]]: 12.0 V (measured with precision voltmeter).
- Measured [[intensidad]]: 8.0 mA (equivalent to 0.008 A in SI).
- Nominal [[resistencia]]: 1500 \(\Omega\) (indicated by manufacturer).
- For verification: [[longitud]] = 0.005 m, [[area]] = 0.0000001 m2, carbon [[rho]] = 0.000035 \(\Omega \cdot m\).

## System definition

The analyzed physical system consists of a single linear resistor connected to a simple mesh with an ideal constant [[tension]] source. It is assumed that the connecting cables have negligible parasitic [[resistencia]] compared to the value of the component under test. The ammeter is considered ideal, introducing no internal [[tension]] drop that could skew the component's [[tension]] reading.

## Physical model

The steady-state ideal ohmic component model is adopted. The relationship between the fundamental quantities is governed by the direct proportionality between [[tension]] and current. It is assumed that the element's temperature does not vary during data collection. Furthermore, the geometric [[resistencia]] model is used for the physical verification of the material.

{{f:ley_ohm}}

{{f:resistencia_geometrica}}

To quantify the material's capacity to allow charge flow, the physical magnitude known as [[conductancia]] is used:

{{f:definicion_conductancia}}

## Model justification

The use of this model is fully appropriate since the component is a metal film resistor designed to operate linearly in the laboratory [[tension]] range. This is because in these materials the charge carriers have a constant relaxation time, ensuring that the [[intensidad]] responds proportionally to the [[tension]]. DC and steady-state measurement allows ignoring inductive effects. Furthermore, the test time interval is short, ensuring that thermal dissipation through the Joule effect does not raise the material's temperature.

## Symbolic solution

The fundamental relationships defined for this leaf are applied to solve for the target variables based on known [[tension]] and [[intensidad]] data, as well as geometric properties in the second step:

{{f:ley_ohm}}

{{f:definicion_conductancia}}

{{f:resistencia_geometrica}}

## Numerical substitution

1. We calculate the device's actual [[resistencia]] applying Ohm's Law proportionality relationship:
\( 12.0 / 0.008 \rightarrow 1500 \ \Omega \)

2. We calculate the corresponding [[conductancia]], providing a measure of the ease of electrical conduction:
\( 1 / 1500 \rightarrow 0.000667 \ S \)
This figure indicates that for every applied volt, charge flow increases by approximately 0.67 mA.

3. We evaluate the component's relative error by comparing the measured value with the nominal 1500 \(\Omega\):
\( 0 \% \) relative error.

4. Theoretical geometric verification with carbon data:
\( (0.000035 \cdot 0.005) / 0.0000001 \rightarrow 1750 \ \Omega \)
This value is close to nominal, suggesting the real component might be made of a similar [[rho]] material or a slightly different geometry.

## Dimensional validation

- The quotient between volts (unit of [[tension]]) and amperes (unit of [[intensidad]]) results in \(\Omega\), which is the correct unit for [[resistencia]].
- The reciprocal of the [[resistencia]] unit results in siemens (S), the standard unit for [[conductancia]] in the SI.
- In the geometric formula, multiplying \(\Omega \cdot m\) by meters and dividing by square meters cancels [[longitud]] units, leaving only \(\Omega\).

## Physical interpretation

The numerical result obtained shows a perfect match between the nominal value and the experimental value measured. Physically, this indicates the component is of extremely high precision. The obtained [[conductancia]] informs us that for every volt of potential difference applied, the material allows a flow of approximately 0.667 mA. The component demonstrates ideal ohmic behavior. Geometric verification shows that small changes in dimensions or material can adjust [[resistencia]] to specific design values.

# Real-world example


## Context

In designing electrical infrastructure for a small industrial building, a team must select the appropriate copper cable to transport energy over a distance of 50 meters from the main control panel to a precision motor. The technical design requires the cable to have a total maximum [[resistencia]] of 0.05 \(\Omega\) to minimize heat losses and avoid [[tension]] drops exceeding 2% of the nominal supply. Electrolytic high-purity copper with a [[rho]] of 0.0000000172 \(\Omega \cdot m\) at room temperature is used.

## Physical estimation

Before performing the exact calculation, engineers perform a scale estimation based on experience. They know that a standard \( 1.5 \ \mathrm{mm}^2 \) copper cable has a [[resistencia]] of approximately \( 0.012 \ \Omega \) per meter. For \( 50 \) meters, this would result in a [[resistencia]] of \( 0.6 \ \Omega \) (product of \( 0.012 \cdot 50 \)), which is 12 times higher than the \( 0.05 \ \Omega \) limit allowed by the design. Therefore, it is estimated that a much thicker cable will be needed, approximately \( 18 \ \mathrm{mm}^2 \).

To determine the exact cross-sectional [[area]] [[area]] needed, we apply the geometric [[resistencia]] model:

{{f:resistencia_geometrica}}

Input data:
- Total [[longitud]] of conductor: 50 m.
- Maximum allowed [[resistencia]]: 0.05 \(\Omega\).
- Electrolytic copper [[rho]]: 0.0000000172 \(\Omega \cdot m\).

Solving for the [[area]] from the formula yields the minimum theoretical value required to meet the standard:
\( (0.0000000172 \cdot 50) / 0.05 \rightarrow 0.0000172 \ \mathrm{m}^2 \)

## Interpretation

The calculated value of \( 0.0000172 \ \mathrm{m}^2 \) (or \( 17.2 \ \mathrm{mm}^2 \)) confirms the engineers' initial physical estimation. Any cable with a smaller section would result in an [[resistencia]] greater than \( 0.05 \ \Omega \), causing a [[tension]] drop exceeding the acceptable safety limit. In commercial practice, the immediately higher gauge (probably \( 25 \ \mathrm{mm}^2 \)) would be selected to ensure an additional safety margin against temperature increase. This choice demonstrates how controlling geometry allows adapting a fixed material property to rigorous operational requirements.