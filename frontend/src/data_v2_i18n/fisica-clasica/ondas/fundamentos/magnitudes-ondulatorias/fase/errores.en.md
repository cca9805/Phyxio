## Conceptual errors

### Error 1: confusing phase with amplitude

**Why it seems correct:** when looking at a wave, visible height draws more attention than cycle state.

**Why it is incorrect:** [[phi]] does not measure disturbance size. It measures advance within the cycle. Two waves with different amplitude may share phase.

**Detection signal:** someone says that larger phase means a more intense wave.

**Correction:** separate oscillation size from position within the cycle.

**Contrast mini-example:** two signals can cross equilibrium at the same time even if one has larger amplitude.

### Error 2: believing that absolute phase always has direct meaning

**Why it seems correct:** [[phi]] appears as a concrete number in the calculation.

**Why it is incorrect:** phase depends on origin and convention. The more robust physical quantity is usually [[Delta_phi]].

**Detection signal:** a phase from one experiment is compared with another without checking the origin.

**Correction:** always ask which reference defines [[phi0]].

**Contrast mini-example:** changing the time origin shifts all phases, but it does not change the phase difference between two microphones.

## Model errors

### Error 3: applying one phase to a pulse that is too short

**Why it seems correct:** any wave-like signal seems to have rises and falls.

**Why it is incorrect:** if there are not enough cycles, one [[phi]] does not describe the phenomenon stably.

**Detection signal:** the result changes strongly when another part of the pulse is chosen.

**Correction:** use spectral components or local phase.

**Contrast mini-example:** a sustained note admits clear phase; a sharp hit needs another description.

## Mathematical errors

### Error 4: forgetting that radians are dimensionless

**Why it seems correct:** rad looks like an independent unit.

**Why it is incorrect:** the radian labels the cycle, but adds no physical dimension.

**Detection signal:** someone rejects a sum of phase terms because rad/m and rad/s seem incompatible after multiplication by position and time.

**Correction:** check that each contribution ends as an angular cycle reading.

**Contrast mini-example:** [[k]] multiplied by distance and [[omega]] multiplied by time both leave phase.

### Error 5: reversing [[omega]] and [[k]] when calculating [[v_phi]]

**Why it seems correct:** both quantities describe phase rates.

**Why it is incorrect:** one measures temporal rate and the other spatial rate; reversing them gives an incompatible unit.

**Detection signal:** the result does not have dimension `[L T⁻¹]`.

**Correction:** remember that phase speed compares temporal advance with spatial repetition.

**Contrast mini-example:** in sound, the result should be of order hundreds of m/s, not seconds per metre.

## Interpretation errors

### Error 6: calling every negative sign a delay

**Why it seems correct:** the sign seems to indicate lag automatically.

**Why it is incorrect:** sign meaning depends on propagation convention and on how phase is written.

**Detection signal:** the sign is interpreted without mentioning propagation direction.

**Correction:** fix the convention before speaking about lead or lag.

**Contrast mini-example:** changing the sign convention for propagation reverses the verbal reading of phase difference.

## Quick self-control rule

Before interpreting phase, check four things: which origin defines [[phi0]], which sign convention is used, whether the wave has recognizable cycles, and whether [[k]] and [[omega]] belong to the same component. If one condition fails, do not turn the phase number into a strong physical reading.
