const e=`# Energy of a Wave

## Conceptual context

Waves transport energy through space without transporting matter in a net manner. This capacity to transfer energy from a source to a distant receiver is one of the most important properties of wave phenomena. From ocean waves to the electromagnetic signals carrying information to our devices, energy transport via waves is fundamental in nature and technology.

The energetic analysis of waves allows us to understand how much energy propagates, how it is distributed spatially, and what factors control its intensity. This knowledge is essential for designing communication systems, harvesting marine renewable energy, understanding architectural acoustics, and predicting earthquake behavior.

## 🟢 Essential level

A wave is a disturbance that propagates. When we throw a stone into a pond, circular waves transport the impact energy toward the edges. The water does not move outward in a net manner; rather, it oscillates locally while energy travels through the medium.

The energy of a wave is directly related to its **amplitude**. A tall ocean wave carries much more energy than a small ripple. In fact, energy grows with the square of the amplitude: doubling the wave height quadruples its energy. This explains why storms with giant waves are so destructive.

**Frequency** also plays a crucial role. Waves of higher frequency (which oscillate faster) transport more energy than low-frequency waves with the same amplitude. This principle explains why high-frequency ultrasound can be used in medicine for therapeutic procedures, while low-frequency sounds of large amplitude can damage structures through resonance.

## 🔵 Formal level

The mathematical description of wave energy transport begins with energy density. For a transverse wave on a string, the instantaneous energy density [[u_energia]] at a point depends on the properties of the medium and the disturbance:

{{f:densidad_energia_cuerda}}

This expression shows that energy density varies harmonically with position and time, being maximum where the sine squared reaches its unit value. The factor [[mu]] represents the linear inertia of the medium, [[omega]] the oscillation rate, and [[A]] the magnitude of the disturbance.

To obtain the total energy contained in a complete wave cycle, we integrate the density over one wavelength. Averaging the temporal contributions, we arrive at the fundamental expression:

{{f:energia_total_ciclo}}

This formula reveals that energy per cycle depends quadratically on both amplitude and angular frequency. The quadratic dependence on [[omega]] is particularly significant: doubling the frequency quadruples the energy, while doubling the amplitude also quadruples it.

The rate of energy transfer, that is, the **power** [[P_onda]] transported by the wave, is obtained by multiplying the energy per unit length by the propagation velocity:

{{f:potencia_onda_cuerda}}

This expression is valid for unidirectional progressive waves. For waves in three-dimensional media, the generalization introduces the cross-sectional area [[S]] through which energy flows:

{{f:potencia_onda_general}}

This unified formulation applies to mechanical, electromagnetic, and acoustic waves, highlighting the universality of wave energy transport. The power [[P_onda]] represents the energy crossing a section of the medium per unit time, being the key magnitude for designing wave energy harvesting systems.

## 🔴 Structural level

The deep structure of wave energy transport reveals a continuous exchange between kinetic and potential forms of energy. In a vibrating string, when an element passes through the equilibrium position, its transverse velocity is maximum (maximum kinetic energy) while the deformation is zero (minimum potential energy). Half a period later, the element reaches its maximum displacement with zero velocity: all energy is potential, stored in elastic deformation.

This perpetual exchange, which averages to equal contribution from both forms over a cycle, is what allows propagation without net energy accumulation at any point. Energy flows through the medium; it does not stay in it. This distinction is crucial: the medium acts as a conductor, not as a permanent energy capacitor.

The **validity limits** of the linear model arise when the amplitude [[A]] ceases to be small compared to the wavelength [[lambda]]. The condition A << [[lambda]] ensures that the slopes of the string remain small, validating the constant tension approximation. When A approaches [[lambda]], nonlinear effects appear: the propagation velocity depends on local amplitude, the wave form distorts generating higher harmonics, and the dispersion relation modifies.

In real dissipative media, the calculated power [[P_onda]] represents an ideal value. Attenuation due to internal friction reduces power exponentially with distance traveled, following a factor exp(-αx) where α depends on the viscoelastic properties of the medium. For electromagnetic waves in conductors, this attenuation is extremely rapid (skin effect), while in ultra-pure silica optical fibers it can be as low as 0.2 dB/km.

## Deep physical interpretation

The **quadratic proportionality** of energy with amplitude has roots in the harmonic nature of the underlying oscillator. Both the kinetic energy (proportional to velocity squared) and potential energy (proportional to displacement squared for linear restoring forces) contribute with terms in A². This double contribution explains the 1/2 averaging factor when integrated over the cycle.

The quadratic dependence on [[omega]] reflects that the transverse velocity of medium elements scales linearly with frequency for a given amplitude (v_max = [[omega]]·[[A]]). As kinetic energy depends on the square of velocity, the [[omega]]² appears. Physically, this means that high-frequency waves are intrinsically more energetically "intense" than low-frequency waves with the same amplitude.

The concept of **energy density** [[u_energia]] introduces a spatial localization of energy that is not possible in point particle mechanics. In the continuum limit, we can speak of energy contained in an infinitesimal volume element, allowing analysis of local fluxes and differential energy balances.

## Order of magnitude

The scales of wave energy span enormous ranges. A typical audible sound wave transports an energy density of approximately 10⁻⁶ J/m³, equivalent to the kinetic energy of a fly in the volume of a room. In contrast, a short-pulse laser (picosecond) with peak power of gigawatts reaches energy densities exceeding 10¹² J/m³, comparable to the combustion energy of the same volume of gasoline.

In the context of **marine renewable energy**, waves in the North Atlantic typically transport 50-70 kW per meter of wave front. A 100-meter long capture device exposed to these waves could theoretically access several megawatts of power, although real conversion efficiencies rarely exceed 30%.

To detect calculation errors, verify that total energy [[E_onda]] never exceeds (1/2)·[[mu]]·[[lambda]]³·[[omega]]², which would be the kinetic energy of translation of the entire mass of a cycle moving at velocity [[omega]]·[[A]]. Higher values indicate violation of the linear regime or error in parameters.

## Personalized resolution method

The energetic analysis of waves requires a systematic sequence:

1. **Identify the wave type**: transverse mechanical, longitudinal, electromagnetic, or acoustic. This determines which energy density expressions apply.

2. **Characterize the medium**: linear density [[mu]], cross-sectional area [[S]], relevant elastic moduli. For electromagnetic waves, the permittivity and permeability of the medium.

3. **Determine kinematic parameters**: amplitude [[A]], frequency [[omega]], wavelength [[lambda]], propagation velocity v.

4. **Calculate energy density**: apply the specific formula for the wave type, temporally averaging if seeking the mean value.

5. **Integrate for total energy**: multiply average density by volume (or length for one-dimensional waves) of the system.

6. **Evaluate transported power**: relate energy to characteristic transit time, or use direct energy flux expression.

> [!TIP]
> Always verify first the linear regime validity condition: A << λ. If not satisfied, all previous analysis requires revision with nonlinear methods.

## Special cases and extended example

**Standing waves** represent a special case where the net transported power is zero. Two progressive waves of equal amplitude and frequency traveling in opposite directions interfere creating fixed nodes and antinodes in space. Energy oscillates locally between kinetic and potential forms, but there is no net flow. This condition is essential in musical instruments where resonant frequencies establish stationary patterns.

**Isolated pulses** are not pure harmonic waves and require different treatment. Total energy is calculated by integrating the instantaneous density over the entire spatial domain where the pulse has significant value. Average power requires specifying a temporal observation interval.

**Extended example**: A guitar string with linear density approximately 0.5 g/m and tension of 70 N, vibrating at its fundamental frequency of 440 Hz (A4) with amplitude of 2 mm. The wave velocity results from the square root of tension divided by linear density, giving approximately 374 m/s. The corresponding wavelength is the quotient between this velocity and the frequency, approximately 0.85 m. Applying the total energy formula with these values, the energy per cycle results in approximately 2.6 mJ. The average power, considering the string is plucked 10 times per second, results in approximately 26 mW. This power, though small, is sufficient to excite the resonance box and produce audible sound.

## Real student questions

**Why does energy depend on the square of amplitude and not linearly?**

Both the kinetic and potential energy of a harmonic oscillator depend on the square of the state variables (velocity and displacement respectively). As the maximum velocity is proportional to amplitude multiplied by frequency, both energy contributions scale quadratically with [[A]].

**Where is the energy in a wave: in the points that move most or those that deform most?**

At points of maximum displacement (antinodes) the energy is purely elastic potential. At equilibrium points crossing with maximum velocity, the energy is purely kinetic. There is no fixed "place" where energy resides; it flows continuously between these forms and through space.

**Why do electromagnetic waves transport energy without needing a material medium?**

The oscillating electric and magnetic fields contain energy density (proportional to E² and B² respectively) that mutually self-regenerate according to Maxwell's equations. The temporal change of the electric field generates the rotational magnetic field and vice versa, allowing self-propagation in vacuum.

**How can a wave transport energy if the mean motion of the medium is zero?**

Transport does not require net mass displacement, but transfer of motion state between neighboring elements. Each element transfers its momentum to the next during half a period, receiving it back during the next half period, resulting in zero mean displacement but continuous energy flow.

## Cross-cutting connections and study paths

The analysis of wave energy naturally connects with [wave intensity](leaf:fisica-clasica/ondas/energia-y-transporte/intensidad-ondulatoria), where power is normalized per unit area to obtain a characteristic far-field magnitude. In [energy flux](leaf:fisica-clasica/ondas/energia-y-transporte/flujo-de-energia) the Poynting vector and its mechanical generalizations are studied.

The mechanical basis of energy transport refers back to [simple harmonic motion](leaf:fisica-clasica/mecanica/cinematica/movimiento-armonico-simple) where the fundamental energetic relations of the oscillator are established. For electromagnetic waves, the study connects with [electromagnetic waves](leaf:fisica-clasica/electromagnetismo/ondas-electromagneticas/ecuacion-de-onda) where energy density is expressed in terms of E and B fields.

In engineering, these concepts underpin the design of [architectural acoustics](leaf:fisica-clasica/ondas/aplicaciones/aislamiento-acustico) and [wave energy systems](leaf:fisica-clasica/ondas/aplicaciones/energia-undimotriz), where maximizing wave power capture is the central objective.

## Final synthesis

The energy of a wave is a manifestation of the perpetual exchange between kinetic and potential forms of mechanical (or electromagnetic) energy, localized in the propagation medium and transported at finite velocity through space. Its quantification requires carefully distinguishing between local instantaneous density, total cycle energy, and power or transfer rate. The quadratic dependence on amplitude and frequency makes high-intensity waves physically dominant phenomena, while the limits of the linear regime mark the boundaries of standard analysis validity. Understanding these energetic aspects is essential both for fundamental physics and for technological applications of wave transport.
`;export{e as default};
