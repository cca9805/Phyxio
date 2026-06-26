## Conceptual errors


### Error 1: Confusing harmonic with number of nodes

**Why it seems correct**

The student observes that the first harmonic has two nodes (the ends), the second has three nodes, and generalizes that "harmonic n has n+1 nodes". This mnemonic rule seems consistent with the first cases.

**Why it is incorrect**

The number of nodes is indeed n+1, but n is the **number of half-waves** that fit in the string, not directly the node count. Confusing both concepts leads to errors when calculating wavelength: the student may think each "section" between nodes is the wavelength divided by n instead of divided by 2n.

**Detection signal**

The student writes that the wavelength of harmonic n is the length divided by n, instead of twice the length divided by n. Confusion also appears when graphing: they draw n internal nodes for harmonic n.

**Conceptual correction**

Harmonic n means the string contains n complete half-wavelengths. The nodes include the two fixed ends plus (n-1) intermediate nodes, totaling n+1. The wavelength always results from dividing twice the string length by the harmonic number.

**Contrast mini-example**

For the third harmonic, with [[numero_de_armonico]] equal to 3, the erroneous student calculates the wavelength by dividing 1.5 m by 3, obtaining 0.5 m and triple the real frequency. The correct calculation divides twice 1.5 m by 3, giving 1.0 m, 50 % lower frequency than the wrong estimate.

**Mini-example of contrast**

Check 1: In Harmonics, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Identifying the most intense harmonic as the fundamental

**Why it seems correct**

In some instruments, certain upper harmonics have greater amplitude than the fundamental due to the excitation point. The human ear tends to group sound by perceiving the dominant frequency as "the note".

**Why it is incorrect**

The **fundamental** is strictly the lowest frequency harmonic, the case where [[numero_de_armonico]] is 1, regardless of its intensity. The ear may perceive melodic **pitch** as the fundamental even if physically attenuated (virtual pitch effect), but physically the fundamental remains the frequency corresponding to velocity divided by twice the length.

**Detection signal**

The student claims that the fundamental frequency is "the most audible" or "the strongest", and when presented with a spectrum where the second harmonic dominates, they incorrectly identify that value as the system's reference frequency.

**Conceptual correction**

The fundamental is the harmonic with [[numero_de_armonico]] equal to 1, the lowest possible frequency for that fixed-end system. Its relative intensity depends on the excitation mechanism but its definition is purely frequency-based: the fundamental is lower than the second harmonic, which is lower than the third, and so on

**Contrast mini-example**

A tubular bell has its first harmonic very attenuated; the ear "reconstructs" the fundamental mentally. If a student measures only intensity, they might assign the second harmonic as "the bell's frequency", when physically the fundamental frequency remains half of that measured frequency.

## Model errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Applying ideal string formulas to systems with free ends

**Why it seems correct**

The student has memorized the formulas for wavelength and harmonic frequency for fixed-end strings and applies them universally to any string wave problem, without considering boundary conditions.

**Why it is incorrect**

The harmonic formulas assume **nodes at both ends** (fixed). If one end is free (antinode), the quantization condition changes: the string must contain an odd number of quarter-wavelengths, giving a frequency proportional to velocity divided by four times the length, only for odd harmonics.

**Detection signal**

The student applies the fixed-end frequency formula to a string with one end tied to a ring free to slide vertically, obtaining frequencies that don't match experimental measurements.

**Conceptual correction**

Boundary conditions completely determine the allowed modes. Fixed-fixed, fixed-free, and free-free ends generate three different spectra. Always verify first what type of ends the system has before applying any quantization formula.

**Contrast mini-example**

A 1 m string with one fixed end and one free end, with propagation velocity of 100 m/s. The erroneous student calculates by dividing 100 by 2, giving 50 Hz. The correct answer divides 100 by 4, giving 25 Hz, and only odd harmonics exist (25 Hz, 75 Hz, 125 Hz...).

## Mathematical errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Incorrectly inverting the relationship between n and frequency

**Why it seems correct**

The student confuses direct proportionality with inverse, thinking that "higher harmonic number means lower frequency", possibly associating n with a "descending order" index.

**Why it is incorrect**

The relationship between harmonic frequency and harmonic number (frequency proportional to n times the fundamental) is **linear increasing**: higher frequencies correspond to higher harmonics. The first harmonic has the lowest frequency, not the highest. Inverting this relationship produces physically absurd results.

**Detection signal**

The student claims that harmonic 5 has lower frequency than harmonic 2, or calculates the third harmonic frequency by dividing the fundamental by 3 instead of multiplying by 3.

**Conceptual correction**

The harmonic number n indicates how many half-waves fit in the string. More half-waves means shorter wavelengths (inversely proportional to n), and since velocity is constant, higher frequencies (proportional to the inverse of wavelength). The relationship is direct: frequency is proportional to n.

**Contrast mini-example**

If the fundamental is 100 Hz, an erroneous student might calculate the fourth harmonic as 25 Hz. The correct calculation multiplies 100 Hz by 4, giving 400 Hz. The factor of 16 error is immediately detectable when comparing with the expected audible range.

## Interpretation errors

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.


### Error 5: Expecting continuous rather than discrete frequencies

**Why it seems correct**

The student, familiar with systems where frequencies appear continuous (electronic speakers, function generators), assumes a string can also vibrate at "any frequency" within a range.

**Why it is incorrect**

**Fixed boundary conditions** impose strict quantization: only frequencies satisfying the standing wave resonance relation are physically possible. It is not possible to excite a string at 150 Hz if its allowed harmonics are 100 Hz, 200 Hz, 300 Hz...

**Detection signal**

The student asks how to "tune" a string to an intermediate frequency between two harmonics, or proposes problems where a string vibrates at arbitrary frequencies as if it were a continuous forced system.

**Conceptual correction**

Normal modes are discrete and self-selected by the system's geometry. When exciting a string, only harmonic frequencies resonate; any other excitation frequency generates a transient response that decays rapidly without establishing a stationary pattern.

**Contrast mini-example**

A student tries to make a guitar string sound at 415 Hz (alternative tuning A) keeping L and v constant. If the harmonics are 100 Hz, 200 Hz, 300 Hz..., the string simply does not respond sustainedly. They must modify L (press the appropriate fret) or v (adjust tension) so that 415 Hz coincides with some allowed integer multiple of the fundamental.

## Quick self-control rule

Before submitting any result about harmonics, verify:

- Is the fundamental frequency the lowest of all? If not, check the calculation.
- Does wavelength decrease as n increases? wavelength must be inversely proportional to n.
- Are the ends nodes? If any end is free, the formulas change completely.
- Is the result physically audible? Frequencies > 20 kHz or < 20 Hz for musical instruments suggest unit error.

Mental dimensional verification: f has units of s⁻¹ (Hz), v of m/s, L of m. The combination v/L gives s⁻¹, correct for frequency. The expression L/v would give seconds, incorrect for frequency.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.