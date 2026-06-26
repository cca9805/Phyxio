const e=`## Historical problem

The speed of sound was the subject of measurement and theoretical controversy for more than two centuries. The question was not only technical but philosophical: if sound is a perturbation of air, at what speed does that perturbation propagate? Can it be calculated from first principles, or can it only be measured?

The first systematic measurements of [[v_son]] in air were made in the seventeenth century using the delay between the flash of a cannon and the bang of the shot, observed from known distances. In 1656, Giovanni Alfonso Borelli and Vincenzo Viviani obtained values of [[v_son]] close to 350 m/s, remarkably close to the current value. Mersenne had obtained similar values decades earlier.

The theoretical problem was harder than the experimental one: how to derive [[v_son]] from the properties of air? Isaac Newton addressed this question in the Principia Mathematica (1687) and obtained the first theoretical expression for [[v_son]]. His result was ~18 % lower than the experimental one, and for more than a century the discrepancy remained unsatisfactorily resolved.

## Prior conceptual difficulty

Newton calculated [[v_son]] assuming that acoustic compressions and rarefactions occurred **isothermally**: compressed air immediately gave its heat to the surroundings and remained at constant temperature. Under this hypothesis, the elastic modulus of air was simply the equilibrium pressure, and his prediction came out too low.

For air at 0 °C and 1 atm, this gives approximately 280 m/s, while measurements gave ~331 m/s. Newton was aware of the discrepancy but could not find a satisfactory explanation. He proposed ad hoc corrections (considering the intrinsic volume of air particles) that were not fully convincing.

The underlying conceptual difficulty was that Newton did not have thermodynamics as a formal science. The distinction between isothermal and adiabatic processes did not exist as a theoretical category in 1687. Without that distinction, it was impossible to identify the cause of the error.

## What changed

Pierre-Simon Laplace resolved the discrepancy in 1816, in a brief paper in the Annales de Chimie et de Physique. His argument was elegant: acoustic compressions are so fast that there is no time for heat to flow between the compressed and rarefied regions. The process is not isothermal but **adiabatic**. For an adiabatic process, the bulk modulus of the gas is not P but [[gamma_gas]] × P, where [[gamma_gas]] is the ratio of specific heats (cp/cv).

With this correction, the correct modulus includes the factor [[gamma_gas]]. For air, that factor raises the prediction from 280 m/s to 331 m/s, in perfect agreement with experiments. Laplace's correction is historically notable for several reasons: it was conceptually simple yet had required more than a century to be formulated; it established that acoustic waves are adiabatic phenomena; and it anticipated the importance of [[gamma_gas]] as a central parameter of gas thermodynamics.

## Impact on physics

The resolution of the Newton-Laplace problem had an impact far beyond acoustics. The identification of acoustic compressions as adiabatic was one of the first examples of a well-defined thermodynamic process with a quantitative experimental consequence. This contributed to the formal development of thermodynamics in the following decades.

The distinction between isothermal and adiabatic moduli introduced into physics the idea that the macroscopic properties of a material depend on the speed of the process: under slow (isothermal) and rapid (adiabatic) conditions, the same material has a different elastic response. This principle is fundamental in materials physics, rheology, and fluid mechanics.

Precise measurement of [[v_son]] became a method for determining [[gamma_gas]] experimentally, which in turn allowed verification of the predictions of the kinetic theory of gases (Clausius, Maxwell, Boltzmann) about molecular degrees of freedom. Measurement of [[v_son]] in different gases and fitting of the obtained [[gamma_gas]] values provided direct evidence of the molecular structure of gases.

## Connection with modern physics

The concept of speed of sound generalises in modern physics to other contexts. In cosmology, the speed of sound in the primordial plasma (mixture of photons and baryons before recombination) determined the scale of baryon acoustic oscillations, observed today as the acoustic peak in the power spectrum of temperature fluctuations of the cosmic microwave background. The position of that peak depends on the size of the acoustic horizon at the moment of recombination, which is directly the speed of sound multiplied by the recombination time.

In particle physics and condensed matter physics, the speed of sound in the quark-gluon plasma (state of matter at extreme temperatures in heavy ion collisions) is a key observable that characterises the properties of the plasma. The physics of sound from Newton and Laplace, originating in the musical and meteorological acoustics of the seventeenth century, connects directly to the observables of twenty-first century high-energy physics.
`;export{e as default};
