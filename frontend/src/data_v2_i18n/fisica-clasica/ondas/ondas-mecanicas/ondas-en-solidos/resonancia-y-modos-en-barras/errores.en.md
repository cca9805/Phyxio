## Conceptual errors


### Error 1: Believing all harmonics are present in any boundary condition

**Why it seems correct**

The student has learned the harmonics of a free-free or fixed-fixed string (all integers) and generalises to any configuration without distinguishing boundary conditions.

**Why it is incorrect**

In a fixed-free bar, the asymmetry of conditions (node at one end, antinode at the other) eliminates even harmonics. Only odd ones survive (f, 3f, 5f...). In free-free and fixed-fixed, symmetry allows all harmonics. Using the incorrect formula produces 100% errors (confusing the second frequency with 2f instead of 3f).

**Detection signal**

The student assigns the second fixed-free mode to twice the fundamental, or is surprised that harmonics are missing from the measured spectrum.

**Conceptual correction**

Before applying the formula, identify the boundary condition. If there is asymmetry (one node end and one antinode end), harmonics go as 2n-1. If there is symmetry (both nodes or both antinodes), harmonics go as n.

**Contrast mini-example**

One-metre bar with longitudinal velocity of 5000 m/s. Free-free modes appear at 2500, 5000 and 7500 Hz. Fixed-free modes are odd-only: 1250, 3750 and 6250 Hz. The spectra are completely different.

**Mini-example of contrast**

Check 1: In Resonance and Modes in Bars, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Confusing bar velocity with P-wave velocity of the infinite medium

**Why it seems correct**

Both are calculated from elastic properties and density, and both describe longitudinal waves. The student does not distinguish the geometry.

**Why it is incorrect**

Bar velocity is obtained from the longitudinal bar velocity relationship and applies when the bar is laterally free, so the cross-section contracts through Poisson effect without constraint. P-wave velocity uses the confined longitudinal stiffness of an infinite medium. P-wave velocity is always greater than [[velocidad_de_onda_longitudinal_en_barra]] for positive Poisson ratio.

**Detection signal**

The student uses v_P in the bar frequency formula or obtains systematically higher frequencies than measured.

**Conceptual correction**

For slender bars, always use the longitudinal bar velocity. P-wave velocity corresponds to propagation in three-dimensional media (seismology, ultrasonics in blocks). The difference is of the order of 10-20% for metals with Poisson ratio near 0.3.

**Contrast mini-example**

For typical steel, bar velocity is about 5190 m/s, while P-wave velocity in an infinite medium is about 5940 m/s. The difference is about 14%. Using P-wave velocity in the bar frequency formula gives frequencies too high by that proportion.

## Model errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Applying slender bar formulae at high frequencies

**Why it seems correct**

The formulae are simple and produce perfectly equally spaced harmonics. The student applies them to all modes without verifying the validity range.

**Why it is incorrect**

When the mode wavelength approaches the bar's transverse dimension, lateral inertia (Rayleigh-Love correction) reduces the effective phase velocity. Harmonics cease to be equally spaced and real frequencies are lower than predicted. For a bar of radius r and mode n, the error becomes significant when n > L/(pi r).

**Detection signal**

Measured frequencies of high harmonics are systematically lower than n times f_1.

**Conceptual correction**

Verify that [[lambda_n]] is much greater than the bar diameter. If not, apply the dispersive correction or use the Pochhammer-Chree bar model.

**Contrast mini-example**

Aluminium bar of 0.3 m and radius of 5 mm. The first three modes have wavelengths much greater than the diameter, so the simple formula is valid. At a high mode, wavelength can become comparable to diameter; then a correction of several percent is expected and the real frequency is lower than predicted.

## Mathematical errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Starting mode numbering at n = 0 instead of n = 1

**Why it seems correct**

In some conventions (vibrating strings, quantum mechanics), states are numbered from zero.

**Why it is incorrect**

In bar frequency formulae, the zero index corresponds to the rigid body mode, with zero frequency and no deformation. The first mode with elastic deformation is mode 1. Starting at zero shifts all frequencies by one mode.

**Detection signal**

The student calculates the rigid body mode and then assigns the first vibratory frequency to the second mode, misaligning the entire series.

**Conceptual correction**

In these formulae, the vibratory mode index always starts at 1. If the rigid body mode is listed, it is written separately and is not counted as a vibration mode.

**Contrast mini-example**

In a free-free bar, starting with the first vibratory mode gives the fundamental, second mode and third mode with correct labels. If the rigid mode is inserted first, the same numerical values appear with shifted labels and can cause confusion when communicating results.

## Interpretation errors

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.


### Error 5: Believing resonance frequency depends only on length

**Why it seems correct**

In the basic formulae, the L dependence is the most visible (frequency inversely proportional to L). The student forgets that wave velocity depends on material.

**Why it is incorrect**

Frequency depends on the velocity-to-length ratio, and velocity depends on [[modulo_de_young]] and [[rho]]. Two bars of equal length but different material have very different frequencies. Additionally, a temperature change can alter [[modulo_de_young]] and [[rho]] slightly, changing the resonance frequency.

**Detection signal**

The student predicts the same frequency for bars of different material with the same length, or does not understand why an aluminium tuning fork sounds different from a steel one of the same size.

**Conceptual correction**

The free-free fundamental depends on wave velocity and length. Two materials with different velocity have different frequency even if the length is the same. Steel and aluminium give similar frequencies; nylon, with much lower velocity, gives a frequency several times lower.

**Contrast mini-example**

Half-metre free-free bar. Steel and aluminium produce fundamentals near 5 kHz, while nylon is near 1.7 kHz. Length is the same, but the material clearly changes the tone.

## Quick self-control rule

Always verify: (1) boundary condition determines whether harmonics are n or (2n-1); (2) velocity to use is [[velocidad_de_onda_longitudinal_en_barra]] for longitudinal and [[velocidad_de_onda_de_corte]] for torsional; (3) torsional frequencies must be lower than longitudinal for the same mode; (4) n starts at 1; (5) the dimensional formula gives Hz.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.