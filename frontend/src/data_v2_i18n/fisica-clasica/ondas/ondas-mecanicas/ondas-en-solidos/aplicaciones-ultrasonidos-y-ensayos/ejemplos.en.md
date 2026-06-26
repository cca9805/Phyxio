# Exam-type example


## Problem statement

An 80 mm thick steel plate is inspected with a contact ultrasonic transducer. The technician sends a pulse from the top surface and records the A-scan signal. An internal defect echo appears at half the time between the entry pulse and the back-wall echo. A calibrated steel block of 50 mm thickness is used to determine [[v_us]]. The objective is to calculate the defect depth and interpret the echo physically.

The problem is representative of standard ultrasonic testing: the measured times must be converted into distance, and the physical meaning of the echo amplitude must be assessed.

## Data

- Calibration block thickness: 50 mm
- Back-wall echo time of the block: 16.95 µs
- Inspected plate thickness: 80 mm
- Back-wall echo time for the plate: 27.12 µs
- Defect echo position: half the time between entry and back-wall echo

These data are typical in quality assurance tests. The calibration block provides a direct measurement of [[v_us]], while the inspected plate yields the actual flight time of the defect echo.

The combination of a known calibration geometry and a measured defect echo is a classic approach in ultrasonic depth estimation.

## System definition

The inspected steel plate is treated as a homogeneous medium with a contact transducer at the top surface. The defect is assumed to be planar and parallel to the surface, so the echo path is axial and the flight time is twice the one-way depth.

The calibration block and the test plate are both similar steel, which allows the use of the same material velocity [[v_us]] for depth estimation.

## Physical model

The physical model assumes that the ultrasonic wave travels through a homogeneous medium with constant speed [[v_us]] and that the defect acts as a normal-incidence discontinuity. The pulse makes a round trip to the defect, so the flight time [[t_vuelo]] corresponds to twice the one-way distance.

Defect depth is described by:

{{f:profundidad_defecto}}

The acoustic impedance of the material is given by:

{{f:impedancia_acustica}}

The reflection coefficient at the defect interface is:

{{f:coeficiente_reflexion}}

## Model justification

The model is suitable because the inspection uses a contact transducer and the incidence is approximately normal. The plate and the reference block are both steel, so [[rho_mat]] and [[v_us]] are comparable. That makes the depth calculation reliable.

The inclusion of [[impedancia_acustica]] and [[coeficiente_de_reflexion_acustica]] is essential for interpreting not only depth but also echo intensity. An air-filled defect produces a high [[coeficiente_de_reflexion_acustica]] and thus a strong echo, while a defect filled with material similar to steel produces a lower [[coeficiente_de_reflexion_acustica]] and a weaker echo.

Furthermore, using the calibrated block avoids relying on tabulated values of [[v_us]] and [[rho_mat]], which can vary with alloy composition and heat treatment. This is a common source of error in ultrasonic testing.

This justification also explains why the depth formula is valid for the defect echo: the echo corresponds to the first internal discontinuity at normal incidence, and the formula factors in the two-way travel time.

## Symbolic solution

From the calibrated block, the known thickness of 50 mm and the echo time of 16.95 µs allow calculation of [[v_us]].

{{f:profundidad_defecto}}

The reference block behaves as a back-wall reflector, and the known 50 mm depth yields a speed close to 5900 m/s.

Then the defect echo time in the inspected plate is 13.56 µs. Substituting into the depth formula gives:

- [[v_us]] = 5900 m/s
- defect [[t_vuelo]] = 13.56 µs
- calculated [[d_defecto]] = 40 mm

## Numerical substitution

Using the values above, the defect depth is calculated explicitly as:

- [[v_us]] * [[t_vuelo]] / 2 = 5900 m/s * 13.56 µs / 2

This substitution shows how time-of-flight translates into distance and confirms the 40 mm defect depth.

It also makes explicit the dependence of [[d_defecto]] on both [[v_us]] and [[t_vuelo]].

This symbolic solution follows the structure of the model and the previously introduced depth formula.

Additionally, estimating [[impedancia_acustica]] and [[coeficiente_de_reflexion_acustica]] helps interpret whether the defect echo corresponds to a strong acoustic contrast or a weaker inclusion.

{{f:impedancia_acustica}}

{{f:coeficiente_reflexion}}

With [[rho_mat]] ≈ 7850 kg/m³ and [[v_us]] ≈ 5900 m/s, steel has high acoustic impedance, and the steel-air interface yields [[coeficiente_de_reflexion_acustica]] close to 1.

The computed [[impedancia_acustica]] is a key material parameter that describes how the wave energy couples into the steel from the transducer.

## Dimensional validation

- [[v_us]] has dimension [L T^{-1}].
- [[t_vuelo]] has dimension `[T]`.
- The product [[v_us]] times [[t_vuelo]] has dimension `[L]`.
- Dividing by 2 leaves dimension `[L]`.

The expression is dimensionally consistent and yields depth in metres.

This check is necessary in ultrasonic problems because incorrect modeling of the round-trip time often leads to wrong units and wrong physical interpretation.

## Physical interpretation

The 40 mm depth places the defect in the mid-region of the plate, where bending and tensile stresses are maximal. This location has structural implications: a surface defect acts as a local stress concentrator, but a deep defect compromises global strength.

Acoustically, the detectable echo (significant amplitude) combined with consistent flight time confirms a real discontinuity with high impedance contrast. If the defect were filled with material similar to steel (e.g., hard oxide inclusion), [[coeficiente_de_reflexion_acustica]] would be smaller and the echo weaker. The strong acoustic contrast suggests the defect is predominantly air or void.

Calibration via the reference block is crucial: by calculating [[v_us]] from known data, velocity uncertainty is eliminated and [[d_defecto]] reflects material reality. Without calibration, any deviation of [[v_us]] from tabulated values produces systematic error in [[d_defecto]].

From a causal physics perspective, the reflection coefficient [[coeficiente_de_reflexion_acustica]] measures acoustic resistance: if two media have very different impedance, the incident wave "sees" a barrier and most of it reflects. The phase of the reflected echo (positive or inverted) encodes which medium has higher impedance, information useful for defect classification.

# Real-world example


## Context

This example fits within non-destructive testing for metal structures, where locating an internal defect without cutting the part is critical. The depth [[d_defecto]] gives the defect position relative to the inspected surface.

Ultrasonic inspection of steel plates is common in industries such as shipbuilding, pipelines, and heavy machinery. The same reasoning applies when checking welds, rolled plates, or pressure vessels.

The use of a calibration block and a separate inspection measurement is standard practice in industrial inspection procedures.

## Physical estimation

With [[rho_mat]] ≈ 7850 kg/m³ and [[v_us]] ≈ 5900 m/s, steel has high acoustic impedance. This means the steel-air interface has [[coeficiente_de_reflexion_acustica]] close to 1, producing a strong echo.

The reflection coefficient depends on the impedance difference. For an air-steel defect, the contrast is maximal, so the defect echo is readily visible.

This estimation allows a qualitative judgment of the defect type. If the observed echo amplitude had been much lower, a less contrasting inclusion or a different interface would be suspected.

The physical estimation also highlights why [[impedancia_acustica]] is useful: it connects density and speed into a single parameter that controls the echo strength.

## Interpretation

A 40 mm defect depth means the flaw is not superficial but still within the region accessible to pulse-echo inspection. Detecting the echo confirms sufficient impedance contrast.

In practice, the calculated depth is compared with plate geometry and other possible reflections. A second measurement using a different transducer or angle can confirm whether the observed echo is from a real defect.

This interpretation combines depth calculation with the core relations of acoustic impedance and reflection coefficient, which are central to understanding ultrasonic testing of solids.

The result is a robust assessment: the depth corresponds to the defect echo, and the high impedance contrast explains why the echo is visible on the A-scan.