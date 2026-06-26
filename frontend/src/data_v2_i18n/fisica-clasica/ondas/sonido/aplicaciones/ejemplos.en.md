# Exam-type example

## Problem statement

An oceanographic vessel uses active sonar to measure the depth of the seabed in a cold-water zone of the North Atlantic. The equipment emits an ultrasonic pulse and the seabed echo reaches the receiver 3.6 seconds after emission. The water temperature is 5 °C, corresponding to a speed of sound of 1462 m/s. Calculate the depth of the seabed and determine whether the value is consistent with an abyssal plain zone.

Additionally, on board, the vessel machinery generates a sound intensity level of 92 dB on the bridge. Maritime regulations require that the noise level in that working space does not exceed 75 dB. Calculate how many decibels of isolation the bulkhead separating the engine room from the bridge must provide to comply with the regulation.

## Data

- Sonar echo travel time: 3.6 s
- Speed of sound in water at 5 °C: 1462 m/s
- Machinery intensity level in engine room: 92 dB
- Maximum permitted level on bridge: 75 dB

## System definition

The sonar system consists of a transmitter-receiver transducer on the vessel hull, the propagation medium (seawater at 5 °C) and the seabed as reflecting surface. The pulse travels vertically downward, reflects off the seabed and returns to the transducer. The acoustic isolation system consists of the engine room as the source space, the separating bulkhead and the bridge as the receiving space.

## Physical model

For sonar distance: homogeneous isotropic lossless medium echo model, applying the echo-distance relation. For the required isolation level: regulations impose a difference between [[IL_fuente]] and [[IL_rec]] which, under diffuse field conditions, is approximately equal to the sound reduction index [[R_aislamiento]] of the bulkhead.

## Model justification

The homogeneous medium model is adequate for this application because the cold North Atlantic waters at 5 °C have a relatively uniform velocity profile in deep water, and a single echo measurement does not require the velocity profiling that would be needed for high-precision sonar in waters with a pronounced thermocline. For the isolation problem, the model of level difference equivalent to [[R_aislamiento]] is an acceptable conservative approximation for an initial design estimate.

## Symbolic solution

Seabed depth using the echo formula:

{{f:distancia_eco}}

Required bulkhead isolation: the level difference between engine room and bridge must be at least 92 dB minus 75 dB. The necessary sound reduction index is that level difference.

{{f:aislamiento_requerido}}

The reading of dB levels is based on the logarithmic definition:

{{f:nivel_intensidad}}

On that scale, the level [[IL]] summarises a physical intensity [[I]] expressed relative to the auditory reference.

## Numerical substitution

For depth, inserting into the echo formula: the product of [[v_sonido]] of 1462 m/s by [[t_vuelo]] of 3.6 s gives 5263.2 m. Dividing by 2 gives [[d_eco]] approximately equal to 2631.6 m, rounded to 2632 m.

For the required isolation: [[IL_fuente]] of 92 dB minus [[IL_rec]] of 75 dB gives 17 dB. Therefore the bulkhead must have a sound reduction index [[R_aislamiento]] of at least 17 dB.

## Dimensional validation

For depth: [[v_sonido]] in m/s multiplied by [[t_vuelo]] in s gives metres; dividing by 2 (dimensionless) the result remains in metres. Dimensional check: `[L T⁻¹] · [T] = [L]`. For isolation: the difference between two values in dB gives a result in dB, which is the unit of [[R_aislamiento]].

## Physical interpretation

The calculated depth of approximately 2632 m is consistent with the North Atlantic abyssal plain, whose typical depth ranges from 2000 to 4000 m. The value is physically plausible and confirms that the constant-velocity model at 1462 m/s at 5 °C is a good approximation for this measurement.

The minimum required isolation of 17 dB is relatively modest and achievable with a standard naval steel bulkhead. A 6 mm steel bulkhead typically has [[R_aislamiento]] of 27 to 30 dB at mid frequencies, providing a 10 dB safety margin above the minimum required. However, the analysis should be extended to low frequencies (diesel machinery), where the isolation of lightweight building elements can fall below the mid-frequency value.

The division by 2 is the critical point in the sonar calculation: a technician who forgets that factor would report a depth of 5264 m, nearly double the real value, which could be confused with an ocean trench when in fact it is a normal abyssal plain.

---

# Real-world example

## Context

Medical ultrasound is the most widely used sound application in medical diagnosis worldwide, with more than 200 million scans performed annually. The principle is identical to sonar: a piezoelectric transducer emits a high-frequency ultrasonic pulse (between 2 and 15 MHz) that penetrates the patient's tissues. At each interface where acoustic impedance changes (boundary between different tissues or organs), part of the pulse is reflected and returns to the transducer. The equipment records the travel time of each echo and reconstructs an image of the internal structures.

For a typical adult abdominal ultrasound, a 3.5 MHz transducer is used. The speed of sound in soft tissue is approximately 1540 m/s. The right kidney of a patient is located 8 cm below the skin surface. The echo from the anterior wall of the kidney reaches the transducer approximately 104 microseconds after emission.

## Physical estimation

Applying the echo formula with [[v_sonido]] of 1540 m/s and [[t_vuelo]] of 104 microseconds: the product of both values gives 0.16016 m, and dividing by 2 yields 0.08008 m, approximately 8 cm. This value matches the known anatomical position of the kidney, confirming that the echo formula with the correct [[v_sonido]] in tissue produces the correct localisation without significant errors.

The ultrasound wavelength at 3.5 MHz in soft tissue is approximately 0.44 mm. This means structures larger than 1 mm can be distinguished in the ultrasound image, which is sufficient to diagnose kidney stones larger than 2 mm, cysts and masses of several centimetres.

## Interpretation

Medical ultrasound illustrates how the echo formula — apparently very simple — becomes a high-precision diagnostic tool when [[v_sonido]] of the medium and pulse frequency are carefully controlled. Modern ultrasound equipment fires thousands of pulses per second in different directions and combines the echoes to reconstruct a real-time image with sub-millimetre resolution.

The main limitation of the technique is that [[v_sonido]] varies between tissues (1450 m/s in fat, 1540 m/s in muscle, 3500 m/s in bone). The equipment assumes a single calibration value (1540 m/s), which introduces geometric distortions at interfaces between tissues of different velocity. This is why bony structures produce shadows in the ultrasound image: bone has a very different [[v_sonido]] from soft tissue, distorting the echoes from structures located behind it.
