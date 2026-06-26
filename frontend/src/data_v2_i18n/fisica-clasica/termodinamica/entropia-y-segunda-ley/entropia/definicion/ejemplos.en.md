# Exam-type example

## Problem statement

In a laboratory, 500 g of ice at zero degrees Celsius is melted by a thermal bath kept at the same temperature throughout the process. The change is idealized as reversible because the system and surroundings exchange heat without a finite temperature jump. The latent heat of fusion of ice is 334 J/g. Calculate the entropy change [[DeltaS]] of the ice, the entropy change of the bath, and the total entropy change of the universe.

## Data

The mass of ice is 500 g. The absolute melting temperature used as [[T_abs]] is 273 K. The latent heat of fusion is 334 J per gram. The ice absorbs heat, so its [[Q_rev]] is positive; the bath supplies the same energy and its [[Q_rev]] has the opposite sign. The process is treated as isothermal and reversible.

## System definition

The main system is the ice that changes from solid to liquid. The immediate surroundings are the thermal bath. The requested magnitude is [[DeltaS]], not absolute entropy [[S]], so only the initial and final states matter. Because the phase change occurs at constant temperature, the physical reading depends on two quantities: the reversible heat [[Q_rev]] exchanged and the absolute temperature [[T_abs]] at which the exchange occurs.

## Physical model

The appropriate model is an isothermal phase change. During melting, temperature does not rise: the supplied heat breaks the crystal structure and increases the number of accessible microstates in the liquid. Therefore the Clausius relation for an isothermal process is used.

{{f:entropia_isotermica}}

The same relation applies to the bath with the opposite heat sign. The reversible hypothesis matters: it does not describe a fast real melting process with a much hotter bath, but the limiting path that allows [[DeltaS]] to be calculated as a state function.

## Model justification

The formula is valid because [[T_abs]] stays constant throughout the phase change and because the heat considered is [[Q_rev]], the heat that would be exchanged by the system along a reversible path between the same states. If temperature changed appreciably, the integral entropy-change model would be needed instead of this direct division. If the exchange were irreversible, [[DeltaS]] of the ice would still be computed with the equivalent reversible path, while entropy generated in the universe would be positive.

## Symbolic solution

First, the reversible heat absorbed by the ice is obtained from the mass and latent heat. That heat is then inserted into the isothermal definition of [[DeltaS]]. For the bath, the energy has the same magnitude but the opposite sign because the bath releases heat.

{{f:entropia_isotermica}}

{{f:definicion_entropia_clausius}}

The total entropy change of the universe is found by adding the system and surroundings contributions. In the reversible limit, both contributions have the same magnitude and opposite signs.

## Numerical substitution

The heat absorbed by the ice is the product of 500 g and 334 J/g, giving 167000 J. Dividing this value by 273 K gives an entropy change of the ice of about 612 J/K. For the bath, the heat has the opposite sign and the temperature is the same; therefore its entropy change is about minus 612 J/K. Adding both contributions gives a total universe entropy change of 0 J/K within the reversible approximation.

## Dimensional validation

The unit of [[Q_rev]] is joule and the unit of [[T_abs]] is kelvin. Their quotient gives joule per kelvin, the unit of [[DeltaS]]. The order of magnitude is also reasonable: melting half a kilogram of ice involves a large heat transfer, so an entropy change of several hundred J/K is expected.

## Physical interpretation

The positive sign of [[DeltaS]] for the ice indicates increased energy dispersal and more accessible molecular configurations. The liquid water is not simply "hotter"; it is at the same temperature. What changes is how energy is distributed among microstates: the liquid phase allows many more positions and orientations than the crystal lattice.

The negative sign for the bath does not contradict the second law, because the second law applies to system plus surroundings. In this ideal case, the bath loses exactly the entropy gained by the ice. A real process would require a slightly warmer bath for heat to flow in finite time; then the bath would lose less entropy in magnitude and the universe would gain a positive amount. That difference is the irreversibility measured by entropy.

# Real-world example

## Context

A food company freezes 1 kg trays of water to make industrial ice. Although the real device does not operate reversibly, the technician needs a reference estimate: how much entropy must be removed from the water during solidification near 273 K. This estimate helps compare refrigerators, detect losses, and understand why freezing large masses requires substantial power.

## Physical estimation

Use the same latent heat reference, 334 J/g. For 1 kg of water, the heat of solidification has a magnitude of 334000 J. Because the water solidifies, the system releases heat: its [[Q_rev]] is negative. With [[T_abs]] near 273 K, the entropy change of the water is about minus 1220 J/K. The refrigerator and the ambient environment must receive at least that entropy; in practice they receive more, because the compressor, heat exchangers, and temperature gradients generate irreversibilities.

The quantitative reading is direct: doubling the mass would double the magnitude of [[Q_rev]] and also the magnitude of [[DeltaS]]. Solidifying at a slightly higher absolute temperature would reduce the magnitude of the entropy change a little because of the division by [[T_abs]]. This is why the same thermal energy carries more entropic weight at low temperature.

## Interpretation

The estimate does not aim to describe every detail of the refrigeration cycle; it provides the thermodynamic limit for the product being frozen. If the water loses about 1220 J/K, the exterior must gain at least that amount for the process to be possible. If an experimental balance gave a negative total change, it would not indicate an exceptional machine: it would point to a sign, temperature-unit, or system-boundary error. The entropy definition turns the qualitative phrase "extracting heat" into a quantitative condition on the irreversible direction of the process.
