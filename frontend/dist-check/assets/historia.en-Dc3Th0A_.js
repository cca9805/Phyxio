const e=`## Historical problem

Since antiquity it was known that sound travels through air and that different materials transmit voice with varying effectiveness. However, the central question remained without a quantitative answer: **what properties of the medium determine the speed of sound?** Newton was the first to address the problem systematically in the *Principia* (1687), where he proposed that the speed depended on the pressure and density of air, obtaining a theoretical value of approximately 290 m/s. Experimental measurements of the era, performed by timing cannon shots at known distances, consistently yielded values close to 340 m/s, a 15 % discrepancy that no one managed to explain satisfactorily for over a century.

## Prior conceptual difficulty

The fundamental obstacle was the thermodynamic nature of compression. Newton assumed that the compressions and rarefactions of sound occur at **constant temperature** (isothermal process), which implied that the heat generated during compression dissipates instantaneously. This assumption seemed reasonable in an era when the distinction between isothermal and adiabatic processes had not yet been formally established. Thermodynamics as a discipline would not develop until the mid-nineteenth century, so Newton's theoretical framework lacked the conceptual tool necessary to resolve the discrepancy.

Furthermore, the idea that a gas could have a quantifiable "elasticity" (what we now call [[B]]) was not obvious. Fluids were conceived as essentially passive media, and the notion that volumetric stiffness could vary depending on the type of thermodynamic process was entirely foreign to the thinking of the time.

## What changed

In 1816, **Pierre-Simon Laplace** proposed the decisive correction: the compressions of sound are fast enough that no appreciable heat exchange occurs with the surroundings, so the process is **adiabatic**, not isothermal. Laplace introduced the adiabatic coefficient (the ratio of specific heats at constant pressure and constant volume) as a multiplicative factor for the bulk modulus. This correction raised the theoretical speed value to agree with experimental measurements within the available margin of error.

Laplace's advance was made possible by the parallel development of caloric theory and the first gas calorimetry studies, which allowed quantitative distinction between the two specific heats of a gas.

## Impact on physics

Laplace's correction had consequences that transcended acoustics. It demonstrated that wave phenomena in fluids are intimately linked to the **thermodynamics of the medium**, not just its static mechanical properties. This connection drove the development of thermodynamics of rapid processes and established the foundation for studying shock waves and supersonic compressions in the twentieth century.

Moreover, the mathematical structure of the solution (speed as the square root of the ratio between a restoring property and an inertial one) was revealed as a **universal pattern** applicable to strings, membranes, solids, and electromagnetic waves, unifying apparently disparate phenomena under a single formalism.

## Connection with modern physics

The relationship between [[v]], [[B]], and [[rho]] remains the foundation of modern acoustics. In oceanography, sound speed profiles as a function of depth (which depend on temperature, salinity, and pressure) are calculated with extensions of the same formula. In medicine, ultrasound directly uses the known speed in tissues to convert echo times into distances. In materials engineering, ultrasonic measurement of [[v]] allows determination of [[B]] from samples without destroying them, an essential technique in aeronautical and nuclear quality control.

The extension of the model to nonlinear and viscothermal regimes connects with current research in high-power acoustics, focused ultrasound therapy, and acoustic propulsion at the micrometre scale.
`;export{e as default};
