## Conceptual errors

### Error 1: Forgetting the factor of 2 in the echo formula

**Por qué parece correcto**

The student reasons: "sound travels from here to the object at the speed of sound, so the distance is velocity times time". This logic is correct for a one-way path, but the time measured by the equipment — the travel time [[t_vuelo]] — is the total round-trip time, not the one-way transit.

**Por qué es incorrecto**

The emitted pulse travels distance [[d_eco]] to the object, reflects, and then travels the same distance [[d_eco]] back to the receiver. The total measured time corresponds to twice the sought distance divided by [[v_sonido]]. Without dividing by 2, the calculated distance is twice the real one: the object appears to be at twice its true distance.

**Detection signal**

The student calculates an object depth of 15 cm in medical ultrasound with a travel time of 195 microseconds and [[v_sonido]] of 1540 m/s. Without the factor of 2 the result is 30 cm, twice the real distance.

**Conceptual correction**

Always apply the echo-distance formula with the divisor 2. The travel time of any echo system is always the round-trip time. If the equipment reports one-way time, multiply by 2 before using that formula, or use the one-way version directly: [[d_eco]] equals [[v_sonido]] multiplied by the one-way time only.

**Mini-example of contrast**

A sonar in water detects an echo with [[t_vuelo]] of 2 seconds and [[v_sonido]] of 1500 m/s. Without factor of 2: apparent distance 3000 m. With the correct factor of 2: real distance 1500 m. The difference amounts to placing the object at twice its real position, a critical navigation error.

---

### Error 2: Using the speed of sound from the wrong medium

**Por qué parece correcto**

The student memorises that the speed of sound is "approximately 340 m/s" and uses that value in any problem involving sound, without noticing that this value applies to air at ambient temperature and that sound travels much faster in liquids and solids.

**Por qué es incorrecto**

[[v_sonido]] depends critically and strongly on the medium. In seawater it is approximately 1500 m/s, more than four times the value in air. In soft tissue it is approximately 1540 m/s. In steel it exceeds 5900 m/s. Using the air value in an underwater sonar problem produces a calculated distance four times smaller than the real one; in medical ultrasound the error is of the same factor.

**Detection signal**

The student calculates the depth of the seabed from a sonar echo of 2 seconds using [[v_sonido]] of 340 m/s, obtaining 340 m, when the real depth (with [[v_sonido]] of 1500 m/s) is 1500 m.

**Conceptual correction**

Always identify the propagation medium before assigning [[v_sonido]]. For underwater sonar: seawater, [[v_sonido]] between 1450 and 1550 m/s depending on temperature and salinity. For medical ultrasound: soft tissue, [[v_sonido]] approximately 1540 m/s. For parking sensors: air, [[v_sonido]] approximately 340 m/s at 20 °C.

**Mini-example of contrast**

An ultrasonic parking sensor detects an obstacle in air with [[t_vuelo]] of 6 ms. With [[v_sonido]] of 340 m/s: correct distance 1.02 m. If the water value (1500 m/s) were used by mistake: calculated distance 4.5 m, completely out of range for a parking sensor.

---

## Model errors

### Error 1: Adding decibels as if they were linear quantities

**Por qué parece correcto**

The student sees that the level of one loudspeaker is 70 dB and that of another is also 70 dB, and concludes that together they produce 140 dB. The logic of "adding the values" seems straightforward, just as volts or metres are added.

**Por qué es incorrecto**

The decibel is a logarithmic scale. Two identical sources of [[IL]] of 70 dB together produce double the intensity of each separately. Converting 70 dB to intensity gives a value proportional to 10 raised to 7 in units of I0. Twice that intensity gives 10 raised to 7 multiplied by 2. Taking the logarithm: 10 times the logarithm of (2 multiplied by 10 raised to 7) gives approximately 73 dB, not 140 dB. The correct result is 73 dB.

**Detection signal**

The student claims that installing a second compressor identical to the first (which produces 85 dB) will raise the level to 170 dB. In reality, the second compressor raises the level by only 3 dB, to 88 dB.

**Conceptual correction**

To combine sound sources: (1) convert each [[IL]] to intensity [[I]] using the inverse sound-level formula, (2) sum the intensities linearly, (3) convert the total intensity back to [[IL]]. Two equal sources always add 3 dB to the level of one alone. Ten equal sources add 10 dB.

**Mini-example of contrast**

Four machines in a room each produce 80 dB. The student who adds directly obtains 320 dB, an impossible level exceeding the physical maximum of approximately 194 dB. The correct calculation: four equal intensities, factor 4 above one alone, which corresponds to 10 times the logarithm base 10 of 4, plus 80 dB, giving approximately 86 dB.

---

## Mathematical errors

### Error 1: Confusing the logarithm formula with the square root

**Por qué parece correcto**

Some students vaguely recall that the decibel involves "a factor of 10 and a power" but confuse the logarithmic formula with a power formula. This leads to calculating [[IL]] as 10 multiplied by the square root of the intensity ratio, instead of the base-10 logarithm of that ratio.

**Por qué es incorrecto**

The correct sound intensity level formula uses the base-10 logarithm of the ratio [[I]]/I0, multiplied by 10. The logarithm and the square root are mathematically distinct functions and produce very different results. For an intensity 100 times greater than I0, the base-10 logarithm of 100 is 2, and [[IL]] gives 20 dB. The square root of 100 is 10, which would give 100 dB: an error of a factor of 5 in the result.

**Detection signal**

The student calculates [[IL]] of 100 dB for an intensity 100 times the reference threshold, when the correct result is 20 dB.

**Conceptual correction**

Memorise the structure of the logarithmic sound-level formula: it is 10 times the base-10 logarithm of the intensity ratio. The leading factor of 10 converts bels to decibels; the base-10 logarithm is the function that produces the characteristic values: 20 dB for a factor of 100 in intensity, 40 dB for 10000, and 60 dB for 1000000.

**Mini-example of contrast**

Intensity of 10⁻⁶ W/m² with I0 of 10⁻¹² W/m²: the ratio is 10⁶. The base-10 logarithm of 10⁶ is 6. Multiplied by 10 gives 60 dB. Using the square root of 10⁶ which is 1000, multiplied by 10 gives 10000 dB: a physically absurd result exceeding any known sound level.

---

## Interpretation errors

### Error 1: Interpreting the sound reduction index as material absorption

**Por qué parece correcto**

The student knows that materials "absorb" sound and thinks [[R_aislamiento]] describes that absorption. A material with [[R_aislamiento]] of 50 dB seems to be one that "absorbs 50% of the sound" or "converts 50% of the energy into heat".

**Por qué es incorrecto**

[[R_aislamiento]] describes how much sound **does not pass** from one space to another through a building element. It is a transmission measure, not an absorption measure. A material can have very high [[R_aislamiento]] (good partition) without absorbing anything: a solid concrete wall reflects almost all the sound it receives back into the source space, with very little absorption, but practically nothing passes to the receiving space. Absorption (expressed as absorption coefficient) describes how much sound is converted into heat within the space itself; they are independent and complementary properties.

**Detection signal**

The student claims that a room with high-absorption walls will have low noise levels in the adjacent room, confusing room acoustic treatment (absorption) with inter-room isolation (sound reduction).

**Conceptual correction**

Critical distinction: **absorption** controls the reverberant level within the same space (reverberation time, echo, intelligibility). **Isolation** ([[R_aislamiento]]) controls how much sound passes to adjacent spaces. To isolate a rehearsal room from the adjacent corridor, high mass and double-leaf partitions (higher [[R_aislamiento]]) are needed. To improve acoustics within the same rehearsal room, absorptive materials must be added to its interior walls.

**Mini-example of contrast**

A recording studio has its interior walls covered with high-absorption acoustic foam (absorption coefficient above 0.9 at mid frequencies). However, the party wall with the floor above has little mass. The result: reverberation inside the studio is excellent (very low reverberation time), but footstep noise from above enters clearly because the wall lacks sufficient [[R_aislamiento]]. The two problems are independent and require different solutions.

---

## Quick self-control rule

To quickly verify sound application calculations, apply the following three checks:

**Check 1 — Echo factor of 2**: In every calculation of [[d_eco]] from [[t_vuelo]], verify that division by 2 has been applied. If the result seems double what is expected for the context, this is the most likely error.

**Check 2 — Correct propagation medium**: Before using [[v_sonido]], identify the medium: air (340 m/s), water (1500 m/s), soft tissue (1540 m/s). A result outside the expected order of magnitude for the context (centimetre distances in abdominal ultrasound, hundreds of metres in harbour sonar) indicates the wrong medium.

**Check 3 — Adding decibels**: When combining sound sources, the result can never exceed the level of one source by more than 10 dB per multiplication by 10 of the number of sources. Two identical sources give 3 dB more than one. If the result exceeds these limits, the dB values were added directly instead of the intensities.
