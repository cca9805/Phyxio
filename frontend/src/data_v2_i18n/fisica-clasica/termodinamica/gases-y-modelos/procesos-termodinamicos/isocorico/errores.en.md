## Conceptual errors

### Error 1: Confusing zero work with zero internal energy

**Why it seems correct**

Students associate "nothing moves" with "no energy change". If the gas does not push a piston or inflate a balloon, it seems reasonable to conclude that the system's energy does not change. This over-generalisation merges the concept of mechanical work with the broader concept of internal energy.

**Why it is incorrect**

Mechanical work measures only the energy exchange through a boundary that moves. Internal energy includes all the kinetic and potential energy of the molecules, which changes whenever heat is exchanged, regardless of whether there is boundary displacement. In the isochoric process [[W]] is zero but [[DeltaU]] can be very large.

**Detection signal**

The student writes that [[DeltaU]] is zero in an isochoric process without checking whether heat is present. Or applies the first law and concludes that [[Q]] is zero because "there is no work".

**Conceptual correction**

The first law states that [[DeltaU]] equals [[Q]] minus [[W]]. In the isochoric process [[W]] is zero, so [[DeltaU]] equals [[Q]]. If there is heat, there is a change in internal energy. If there is a temperature change, there is a change in internal energy.

**Contrast mini-example**

A sealed steel container with 2 moles of helium is heated by 200 K. Saying [[DeltaU]] is zero would imply that no heat is needed to heat it, which is absurd. The internal energy has increased by approximately 5000 J.

---

### Error 2: Believing that in the isochoric process pressure is also constant

**Why it seems correct**

In standard physics nomenclature, the four ideal processes are isochoric, isobaric, isothermal and adiabatic. A student who has not consolidated the meaning of the prefix "iso-" may confuse which quantity is constant in each case and assume that if volume is constant, pressure may also be constant.

**Why it is incorrect**

In an ideal gas, if volume is constant and temperature changes, pressure inevitably changes. Gay-Lussac's law states that at constant volume, pressure and absolute temperature are proportional. If [[T]] increases, [[p]] increases in the same proportion. A process that is simultaneously isochoric and isobaric implies temperature is also constant, trivialising the process (no quantity changes).

**Detection signal**

The student correctly uses the [[DeltaU]] formula but assigns constant pressure when computing work or drawing the pV diagram. Or concludes that the pT diagram is a horizontal line instead of a positively sloped line through the origin.

**Conceptual correction**

In the isochoric process only volume is constant. Pressure changes proportionally to absolute temperature. In the pV diagram the process is a vertical line (fixed volume, variable pressure). In the pT diagram it is a line with positive slope passing through the origin.

**Contrast mini-example**

A container with nitrogen at 300 K and 1 atm is heated to 600 K at constant volume. If pressure were also constant, the ideal gas would contradict itself because the product of pressure times volume divided by temperature must remain constant. Final pressure must be 2 atm, not 1 atm.

---

## Model errors

### Error 1: Using Cp instead of [[Cv]] to calculate [[DeltaU]]

**Why it seems correct**

The specific heat of water is a well-known single value that students memorise. When studying gas thermodynamics, they do not always distinguish that gases have two different specific heats (at constant volume and at constant pressure) and tend to use the most familiar value or the first one in the table.

**Why it is incorrect**

[[Cv]] measures how much heat the gas absorbs per mole and per kelvin when volume does not change. Cp measures the same when pressure does not change. Cp is always greater than [[Cv]] for an ideal gas because in the isobaric process part of the heat is converted into expansion work. In the isochoric process there is no work, so the absorbed energy is less than in the isobaric process for the same [[DeltaT]]. Using Cp overestimates [[DeltaU]] by between 40 % (monatomic gas) and 30 % (diatomic gas).

**Detection signal**

The student obtains a [[DeltaU]] value that is reasonable in magnitude but systematically higher than correct. Or when comparing the result with measured heat, there is an excess of approximately [[n]] times R times [[DeltaT]].

**Conceptual correction**

For the isochoric process always use [[Cv]]. For the isobaric process always use Cp. The difference between Cp and [[Cv]] is exactly the gas constant R for an ideal gas.

**Contrast mini-example**

For 1 mole of nitrogen with [[DeltaT]] of 100 K, the real isochoric heat with [[Cv]] of 20.8 J per mole and kelvin is 2080 J. Using Cp of 29.1 J per mole and kelvin gives 2910 J, an error of 830 J representing a 40 % excess. That excess corresponds to the expansion work that exists in the isobaric process but not in the isochoric one.

---

### Error 2: Applying the isobaric work formula to the isochoric process

**Why it seems correct**

The work formula for a gas is pressure times volume change. A student who has learned it that way, without the context of when it applies, may try to compute [[W]] by multiplying gas pressure by a supposed volume change even when the process is isochoric.

**Why it is incorrect**

If volume is constant, the volume change is exactly zero, and any product with zero gives zero. There is no "volume change" in the isochoric process. Expansion-compression work requires a boundary displacement, which simply does not occur in the isochoric process.

**Detection signal**

The student computes [[W]] as the product of average pressure by an invented volume change or by the value of [[DeltaT]] multiplied by some incorrect coefficient.

**Conceptual correction**

In the isochoric process [[W]] is zero by definition. There is no calculation to do for work; the first line of any isochoric solution must be to identify [[W]] as zero.

**Contrast mini-example**

If one attempts to calculate the work of a gas in a rigid container and obtains a non-zero value, that result alone proves an error was made because it is inconsistent with constant volume.

---

## Mathematical errors

### Error 1: Using Celsius temperatures in Gay-Lussac's law

**Why it seems correct**

In the [[DeltaU]] isochoric formula, [[DeltaT]] in kelvins equals [[DeltaT]] in degrees Celsius numerically, so for that calculation the error does not appear. The student incorrectly extrapolates that temperatures may be used in Celsius for any isochoric calculation, including the verification of the pressure ratio.

**Why it is incorrect**

Gay-Lussac's law establishes proportionality between pressure and absolute temperature. This proportionality holds only on the Kelvin scale, where zero corresponds to the complete absence of molecular agitation. On the Celsius scale, zero is arbitrary (water melting point), and the ratio of two Celsius temperatures has no physical meaning equivalent to the ratio of absolute temperatures.

**Detection signal**

The student obtains a pressure ratio different from the kelvin temperature ratio, or obtains a negative temperature (impossible in kelvins) when performing the proportion.

**Conceptual correction**

Always convert to kelvins by adding 273.15 before applying any temperature ratio or proportion in thermodynamics. Temperature differences can be calculated in any scale, but ratios and proportions are only valid in kelvins.

**Contrast mini-example**

A gas at 27 °C (300 K) is heated to 327 °C (600 K). Pressure doubles because 600 divided by 300 is 2. But 327 divided by 27 gives 12.1, a physically incorrect result stating pressure increases by a factor of 12. The Celsius error produces a fictitious amplification of the ratio.

---

## Interpretation errors

### Error 1: Deducing that positive [[DeltaU]] means the gas has done work

**Why it seems correct**

In many mechanics contexts, "increasing energy" implies the system "can do things". Students intuitively transfer that positive [[DeltaU]] means the gas has more capacity to do work, confusing stored energy with work done in the process.

**Why it is incorrect**

Positive [[DeltaU]] in the isochoric process only means the gas has absorbed heat and its temperature has risen. It does not imply any work done in the process, because [[W]] is zero. The additional energy is stored as molecular kinetic energy, not mechanically transferred to the surroundings. That the gas may do work in the future (in a subsequent different process) is a separate question.

**Detection signal**

The student writes that the gas "has done work" upon computing positive [[DeltaU]], or tries to distribute [[DeltaU]] between work and heat when [[W]] should be zero.

**Conceptual correction**

In the isochoric process the sign of [[DeltaU]] indicates whether the gas heats up (positive) or cools down (negative). There is no work in any case. The change in internal energy is identical to the heat exchanged.

**Contrast mini-example**

A sealed container absorbs 5000 J of heat and [[DeltaU]] increases by 5000 J. Deducing that the gas has done 5000 J of work would lead to an impossible energy balance where the total energy absorbed would be double the input.

---

## Quick self-control rule

Before accepting any isochoric process solution, verify these four conditions:

1. **[[W]] is zero**: if the result shows non-zero work, the process is not isochoric or there is a calculation error.
2. **[[Q]] equals [[DeltaU]]**: if the two values do not coincide, there is an error in one of the two calculations.
3. **Temperatures are in kelvins**: check that each temperature used in ratios or proportions is on the absolute scale.
4. **[[Cv]] was used instead of Cp**: confirm that the heat capacity used corresponds to constant volume, identifying the type of gas (monatomic, diatomic, triatomic) before assigning the numerical value.
