# Speed of Sound

## Conceptual context

Sound requires a material medium to propagate: it does not exist in a vacuum. But once in a medium, at what speed does it travel? The answer is not trivial. Newton attempted to calculate it theoretically in the seventeenth century and obtained a value 18 % below the experimental one. Laplace resolved the problem a century later by recognising that acoustic compressions are adiabatic, not isothermal. This historical episode encapsulates the essential physics of the leaf: the speed of sound depends on the elastic stiffness of the medium and its inertia, and for gases, the thermodynamic nature of the compression process determines which elastic modulus (adiabatic or isothermal) is the correct one.

Understanding [[v_son]] is a necessary condition for calculating wavelengths, propagation times, Doppler effects, tube and cavity resonances, and for designing sonar systems, medical ultrasound diagnostic techniques, and industrial ultrasound quality control.

## 🟢 Essential level

When a tuning fork is struck, the pressure perturbation it generates moves away from it in all directions. The speed at which that perturbation moves away is [[v_son]]: the speed of sound in the medium. It is not the speed at which air molecules oscillate back and forth; it is the speed at which the wavefront travels, like the crest of a wave on the sea.

[[v_son]] is a property of the medium, not the source. A cannon and a flute produce very different sounds, but both travel at the same [[v_son]] in the same medium and at the same temperature. What distinguishes the two sources is amplitude and frequency, not propagation speed.

In air at room temperature (20 °C), [[v_son]] is approximately 343 m/s. This is equivalent to covering 1 km in just under 3 seconds, which explains the delay between lightning (travels at the speed of light, practically instantaneous) and thunder (travels at [[v_son]]). Counting the seconds between lightning and thunder and dividing by 3 gives approximately the distance to the storm in kilometres.

[[v_son]] depends on the medium and temperature. In water, [[v_son]] ≈ 1480 m/s (nearly 4.4 times faster than in air); in steel, [[v_son]] ≈ 5100 m/s (15 times faster than in air). In air, [[v_son]] increases with temperature at a rate of about 0.6 m/s per degree Celsius.

> [!NOTE]
> The idea that sound travels faster in denser media is a very common error. Steel is thousands of times denser than air and yet transmits sound much faster, because it is also enormously stiffer. It is the stiffness of the medium, not its density, that accelerates sound.

## 🔵 Formal level

The physics of acoustic propagation shows that [[v_son]] results from the balance between two properties of the medium: its stiffness (measured by the bulk modulus [[B_mod]]) and its inertia (measured by the density [[rho_med]]). The Newton-Laplace formula expresses this balance:

{{f:newton_laplace}}

This formula is valid for any continuous medium. [[B_mod]] quantifies how much pressure must be applied to compress the medium by 1 % in volume; [[rho_med]] is the mass per unit volume. A stiffer medium (higher [[B_mod]]) propagates sound faster; a denser medium (higher [[rho_med]]) propagates it more slowly, because the greater inertia makes it harder to accelerate the particles.

For an ideal gas, the formula is expressed in terms of molecular and thermodynamic parameters:

{{f:v_gas_ideal}}

where [[gamma_gas]] is the adiabatic index, the universal gas constant is used in SI units, [[T_abs]] is the absolute temperature in kelvin, and [[M_mol]] is the molar mass of the gas in kg/mol. For ordinary dry air, this formula gives [[v_son]] close to 343 m/s at room temperature.

In the range of atmospheric temperatures, the dependence on temperature can be approximated linearly:

{{f:v_son_temperatura_aire}}

where T is in degrees Celsius and the result is in m/s.

> [!TIP]
> The reason why [[v_son]] in an ideal gas does not depend on equilibrium pressure is subtle but elegant: when pressure increases, [[B_mod]] (proportional to pressure) and [[rho_med]] (also proportional to pressure at fixed temperature) increase in the same proportion, and the ratio [[B_mod]]/[[rho_med]] remains constant. Pressure cancels in the ratio.

## 🔴 Structural level

The role of the adiabatic index [[gamma_gas]] in the formula for [[v_son]] is the key to Laplace's correction. Newton had calculated [[v_son]] using the isothermal modulus of air, obtaining [[v_son]] = sqrt(P/[[rho_med]]) ≈ 280 m/s at 0 °C, 18 % below the experimental value (331 m/s). Newton's error was implicit: he assumed that acoustic compressions were slow enough for the air to remain at constant temperature (isothermal process). Laplace recognised that acoustic oscillations are so fast that there is no time for heat to flow between the compressed (hot) and rarefied (cold) regions: the process is **adiabatic**, not isothermal. The adiabatic modulus is [[gamma_gas]] times the isothermal one, and the real speed is sqrt([[gamma_gas]]) ≈ 1.18 times the isothermal prediction, eliminating the discrepancy.

The independence of [[v_son]] from frequency in an ideal gas is a fundamental property deserving attention. It means that sound is **non-dispersive** in air at audible frequencies: all frequency components of a complex sound (the harmonics of a musical instrument) travel at exactly the same [[v_son]] and arrive at the listener simultaneously. If sound were dispersive, a distant listener would hear low tones before or after high tones, and the instrument's timbre would change with distance. This fact is the basis of sound being spatially coherent.

The dependence of [[v_son]] on temperature has important physical consequences beyond the 0.6 m/s/°C variation usually cited. In the atmosphere, temperature varies with altitude (typically decreasing with height in the troposphere, but increasing in the stratosphere). This variation of [[v_son]] with altitude causes **acoustic refraction**: sound does not travel in a straight line but curves towards regions of lower [[v_son]]. On cold nights, air is colder near the ground, [[v_son]] is lower there, and sound curves downward, allowing conversations or music to be heard at much greater distances than usual. On hot days, the phenomenon reverses and sound curves upward, creating acoustic shadow zones.

> [!WARNING]
> In solid media, the speed of sound depends not only on the volumetric bulk modulus but also on the vibration mode. Longitudinal waves read a combined compression-and-shear stiffness; transverse waves read only shear stiffness. In fluids, shear stiffness is zero and only longitudinal waves exist.

## Deep physical interpretation

The Mach number of a moving object is the ratio of its speed to [[v_son]] in the surrounding medium. When a vehicle approaches [[v_son]] (Mach 1), the wavefronts it emits pile up at its front and form a shock wave (sonic boom). Above Mach 1, the linear model of acoustic propagation fails completely: shock waves are non-linear pressure perturbations requiring different mathematical treatment.

The speed of sound also defines the range measurement basis for underwater communication systems: active sonar emits acoustic pulses and measures the round-trip travel time to calculate distances. System accuracy depends directly on how well [[v_son]] is known under the actual medium conditions (temperature, salinity, and pressure of the water at the operating depth).

## Order of magnitude

In ordinary air, [[v_son]] is close to 340 m/s; in water it is around 1480 m/s; in longitudinal steel waves it is around 5100 m/s. These values are an immediate filter: if an atmospheric calculation gives tens of metres per second or several kilometres per second, there is almost always a unit, absolute-temperature, or model error.

## Personalized resolution method

To calculate [[v_son]] in different contexts:

- **Generic medium**: use the Newton-Laplace formula with adiabatic [[B_mod]] and [[rho_med]] of the medium.
- **Ideal gas with thermodynamic parameters**: use the formula with [[gamma_gas]], R, [[T_abs]], and [[M_mol]]. Make sure to convert temperature to kelvin.
- **Air under atmospheric conditions**: use the linear approximation for quick calculations in the range -20 °C to +50 °C.
- **Verification**: compare the result with reference values (air ~340 m/s, water ~1480 m/s, steel ~5100 m/s). If the calculated value differs by more than 10 %, check units and the choice of modulus (isothermal vs adiabatic).

> [!TIP]
> To remember the order of magnitude: [[v_son]] in air is approximately 340 m/s ≈ 1200 km/h ≈ 1/3 km/s. The 3-seconds-per-kilometre trick for lightning and thunder comes directly from this value.

## Special cases and extended example

In light gases such as helium, a smaller [[M_mol]] raises [[v_son]] markedly, which is why the apparent voice pitch changes. In humid mixtures, the effective composition also changes the mean molar mass. In solids, by contrast, the dominant question is no longer only temperature: the elastic mode must be identified, because longitudinal and shear waves do not read the same stiffness.

As an extended example, an ultrasonic thickness measurement in steel uses a [[v_son]] calibrated for the longitudinal mode. If a shear-wave speed were used by mistake, the inferred distance would be too small. The correct reading requires linking medium, mode, and speed before interpreting the time of flight.

## Real student questions

**If I shout louder, does the sound arrive sooner?** No. The amplitude and intensity increase, but [[v_son]] remains fixed by the medium as long as propagation stays linear.

**Why does sound travel faster in water than in air if water is denser?** Because the bulk stiffness of water grows much more than its inertia. Density alone does not decide the speed.

## Cross-cutting connections and study paths

[[v_son]] is the link between wave parameters (frequency, wavelength) and the medium. The relation lambda = [[v_son]] / f connects the frequency of sound with its wavelength in the medium, and determines the size of resonators (tubes, cavities, strings) for each note. The Doppler effect leaf requires comparing the source speed with [[v_son]] to calculate the apparent frequency. The tube resonance leaf shows that the natural frequencies of a tube are multiples of c/(2L) or c/(4L) depending on the boundary conditions, where c is [[v_son]].

In medical ultrasound (echography), [[v_son]] in soft tissues (~1540 m/s) is the parameter that calibrates distances calculated from echo return times: if [[v_son]] is not precisely known, images are distorted. Knowing [[v_son]] and its variations is therefore a physics topic with direct medical implications.

## Final synthesis

The speed of sound [[v_son]] in a medium is the square root of the ratio between the medium's elastic stiffness ([[B_mod]]) and its inertia ([[rho_med]]). In ideal gases, [[v_son]] depends only on [[T_abs]], [[gamma_gas]], and [[M_mol]], and is independent of pressure. Laplace's correction (factor [[gamma_gas]] in the modulus) resolves the historical 18 % discrepancy predicted by Newton. In air, [[v_son]] increases 0.6 m/s per degree Celsius. These principles determine the design of musical instruments, sonar systems, ultrasound equipment, and underwater acoustic communication protocols.
