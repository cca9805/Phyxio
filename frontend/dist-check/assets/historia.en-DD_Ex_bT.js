const e=`# History

## Historical problem

During the sixteenth and seventeenth centuries, natural philosophers and physicians observed differences in "heat" and "cold" between bodies, but lacked an instrument capable of quantifying those differences in a reproducible way. Tactile sensation was subjective and depended on the observer's prior state. The practical urgency was twofold: medicine needed to measure fever objectively, and astronomy and chemistry needed to record and compare experimental conditions between distant laboratories.

The core problem was not merely to build a thermometer—tubes with liquid that expands with heat had already been built by Galileo around 1592—but to define a **reproducible scale**: a reference system with fixed points that any observer anywhere could reproduce with the same instrument. Without a scale, two different thermometers in two different laboratories were incomparable.

## Prior conceptual difficulty

The deepest conceptual obstacle was the confusion between **heat** and **temperature**. For centuries, heat and temperature were considered the same thing: a substance or quality of the warm body that could be transferred. The caloric theory, dominant in the eighteenth century, imagined heat as a material fluid that flowed from hot to cold bodies. In that framework, temperature was simply "how much caloric" a body possessed, and there was no reason to distinguish heat from temperature.

This confusion made it impossible to understand why two bodies at the same temperature but different masses absorbed different amounts of heat when heated. The conceptual distinction between heat (a process quantity, energy transferred) and temperature (a state quantity, determinant of thermal equilibrium) was only definitively clarified by Black's work (1760) on specific heat and by nineteenth-century thermodynamics.

A second difficulty was the definition of scale fixed points: why water and not another fluid? At what pressure? How to guarantee that the ice or steam is truly at the reference conditions? These metrological questions had no simple answers and generated decades of controversy.

## What changed

The first step was the construction of thermometers with quantitative scales. Fahrenheit, around 1714, was the first to manufacture mercury thermometers with sufficient reproducibility for exchange between laboratories, using human body temperature and the temperature of an ice-ammonium chloride mixture as fixed points. In 1742, Celsius proposed using the melting and boiling points of water as references, with 100 divisions between them; initially the scale was inverted (100 for ice, 0 for steam) and it was Linné who inverted it to the current form.

The decisive conceptual advance came with Carnot's thermodynamics (1824) and the synthesis of Clausius and Thomson (Kelvin) in the 1850s. Thomson demonstrated in 1848 that it was possible to define an **absolute** temperature scale based on the efficiency of a Carnot engine, independent of any thermometric material. This scale, which we now call kelvin in his honour, fixed zero at the point where no work could be extracted from a heat engine: absolute zero.

The kelvin scale transformed temperature from an empirical measurement to a fundamental physical quantity with a precise definition. It ceased to depend on the properties of any particular fluid and became based on universal thermodynamic principles.

## Impact on physics

The thermodynamic definition of temperature had profound consequences that unfolded throughout the nineteenth and twentieth centuries. First, it enabled the formulation of the **third law of thermodynamics** (Nernst, 1906): the entropy of a perfect crystal tends to zero as [[T_K]] tends to zero. This converted absolute zero from an extrapolation into a fundamental truth and established that it cannot be reached in a finite number of steps.

Second, the absolute scale was indispensable for the development of **statistical mechanics** by Boltzmann and Gibbs. Temperature emerges in that framework as a property of the distribution of particle energies: [[T_K]] is proportional to the mean translational kinetic energy in an ideal gas, with the Boltzmann constant as the proportionality factor. This micro-macro connection transformed temperature from a macroscopic observable into a quantity with a precise microscopic interpretation.

Third, the identification of [[T_K]] as the natural variable of statistical thermodynamics was essential for the development of **blackbody radiation** and the crisis that led to quantum mechanics. The Rayleigh-Jeans, Wien, and Planck laws are written in [[T_K]], and the ultraviolet catastrophe of classical physics manifests precisely because high-frequency modes contribute equally without the quantum suppression factor that only emerges when [[T_K]] is used correctly.

## Connection with modern physics

The current definition of the kelvin scale, in force since the 2019 SI revision, is no longer based on the triple point of water (as in ITS-90) but on the fixed value of the Boltzmann constant. The Boltzmann constant has been fixed exactly at 1.380649×10⁻²³ J/K, which defines the kelvin as the thermodynamic temperature change corresponding to an energy change of 1.380649×10⁻²³ joules. This definition completely decouples the temperature scale from any property of a particular substance.

In condensed matter physics, the concept of negative temperature in systems with energy states bounded from above (such as nuclear spins in a magnetic field) is an active research topic. In those systems, temperature can be formally defined with negative values using the fundamental thermodynamic relation, and a "negative" kelvin temperature is in fact "hotter" than any positive temperature. This result, counterintuitive but rigorously correct, illustrates how far modern temperature has transcended the everyday intuition of "hot" and "cold".

In cosmology, the temperature of the cosmic microwave background (CMB)—the echo of the Big Bang—is 2.725 K. The fact that the universe has a perfectly measurable and uniform temperature in all directions is one of the most remarkable observational facts in physics and a direct consequence of the existence of thermal equilibrium in the early universe.
`;export{e as default};
