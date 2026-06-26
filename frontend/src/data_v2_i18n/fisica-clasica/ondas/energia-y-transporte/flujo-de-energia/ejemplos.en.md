# Exam-type example


## Problem statement

A violin string has a linear mass density of 0.5 g/m and is under tension that produces a propagation velocity of 400 m/s. The string vibrates in its fundamental mode with a frequency of 440 Hz (note A) and an amplitude of 3 mm. Calculate: (a) the energy density in the string, (b) the energy flux, and (c) the total power transported if the string is 0.33 m long and its entire extension is considered perpendicular to the flux.

## Data

- Linear mass density: 0.5 g/m equivalent to 5×10⁻⁴ kg/m
- Propagation velocity: 400 m/s
- Frequency: 440 Hz
- [[amplitud]]: 3 mm equivalent to 3×10⁻³ m
- String length: 0.33 m

## System definition

The system is a one-dimensional vibrating string that transports mechanical energy from the excitation point (violin bridge) toward the fixed ends (pegbox and tailpiece). The wave is considered harmonic and progressive before reflections at the ends.

## Physical model

The model of transverse wave on ideal string is applied under the following conditions:

- Small oscillations (3 mm << wavelength)
- Uniform string with constant density [[mu]]
- Constant tension along the string
- Absence of dissipation by air friction

The energy flux is described by the constitutive relation of the string model, derived from energy density multiplied by propagation velocity.

## Model justification

The ideal string model is applicable because the amplitude (3 mm) is much smaller than the expected [[lambda]] (approximately 0.9 m for 440 Hz), guaranteeing the linear regime. Steel string has uniform elastic behavior in the typical tension range of violin strings.

The model would cease to be valid if: (1) the amplitude exceeded about 20 mm, entering the nonlinear regime with significant deformations; (2) the tension varied significantly along the string (effects of string with mass comparable to tension); or (3) very long times were considered where acoustic dissipation in air becomes dominant.

## Symbolic solution

For the energy density in a string wave:

{{f:flujo_energia_cuerda}}

Although this formula gives the flux directly, we can obtain the energy density using the fundamental relation:

{{f:flujo_energia_densidad}}

From this relation, energy density is obtained by dividing flux by propagation velocity; for the ideal string it equals the average energy factor of the string model without the [[velocidad_de_propagacion]] factor.

For the total power transported we apply:

{{f:potencia_desde_flujo}}

Where [[area_perpendicular_de_seccion]] in a one-dimensional string is interpreted as the effective length intercepting the flux. In this context, total power along the string is calculated by considering that the flux is distributed over that extension.

## Numerical substitution

First we convert frequency to angular frequency:

Ordinary frequency is converted to angular frequency by multiplying by the full-cycle factor. In this case, [[omega]] ≈ 2764.6 rad/s.

For the energy density (key component of flux):

Operation: (1/2) × (5×10⁻⁴ kg/m) × (2764.6 rad/s)² × (3×10⁻³ m)²

Breakdown: (0.5) × (5×10⁻⁴) × (7.64×10⁶) × (9×10⁻⁶) = 1.72×10⁻² J/m

Therefore [[u_energia]] ≈ 0.017 J/m (energy per meter of string)

For the energy flux:

{{f:flujo_energia_cuerda}}

Operation: (1/2) × (5×10⁻⁴) × (2764.6)² × (3×10⁻³)² × 400

Breakdown: previous result (1.72×10⁻²) × 400 = 6.88 W/m

Therefore [[densidad_de_flujo_de_energia]] ≈ 6.9 W/m

For the total power considering the string length (0.33 m):

{{f:potencia_desde_flujo}}

Interpretation: the flux of 6.9 W/m acts along the 0.33 m of vibrating string

Operation: multiplying the obtained flux by the effective length of 0.33 m gives a power of 2.27 W.

Therefore [[potencia_de_la_onda]] ≈ 2.3 W

## Dimensional validation

- Units of energy density: `kg/m × (rad/s)² × m² = J/m`.
- Units of flux: linear energy density multiplied by speed, giving power per length.
- Units of power: linear flux multiplied by effective length, giving watts.

Dimensional breakdown for flux:

- [[mu]]: `[M L⁻¹]`
- [[omega]] squared: `[T⁻²]`
- [[amplitud]] squared: `[L²]`
- [[velocidad_de_propagacion]]: `[L T⁻¹]`

Dimensional product: `[M L⁻¹] · [T⁻²] · [L²] · [L T⁻¹] = [M L² T⁻³]`, which corresponds to power per length in this string model.

## Physical interpretation

The result shows that a typical violin string transports approximately **2.3 watts of mechanical power** in its fundamental vibration. This value, although modest compared to electrical systems, represents considerable intensity for acoustic mechanical vibrations.

The energy density of 0.017 J/m indicates that each meter of string stores enough energy to raise one gram about 17 centimeters against gravity. The flux of 6.9 W/m means that this energy is transported at a sustained rate along the string.

If the amplitude were reduced by half (1.5 mm), the power would drop to a quarter (approximately 0.6 W) due to the quadratic dependence on amplitude. This explains why violinists can dynamically control the instrument's volume with subtle variations in bow pressure: small amplitude changes produce large changes in emitted acoustic power.

The technical priority in instrument design should focus on maximizing the transfer of this mechanical power to the air as audible sound, minimizing losses in the string's fixed supports.

---

# Real-world example


## Context

**High-intensity focused ultrasound (HIFU)** medical systems use high-frequency mechanical waves concentrated to heat biological tissues for therapeutic purposes. Controlled energy flux allows destruction of tumoral tissue without invasive surgery, selectively heating regions of a few millimeters to lethal temperatures (above 56°C) while surrounding tissues remain cold.

## Physical estimation

A typical HIFU transducer emits ultrasound waves with frequency of 1 MHz (ω = 2π×10⁶ rad/s ≈ 6.3×10⁶ rad/s) in a focused beam. The intensity (energy flux) at the focus reaches values of 10³ to 10⁴ W/cm² (equivalent to 10⁷ to 10⁸ W/m²).

Considering a pressure amplitude of 0.1 MPa in tissue (bulk modulus of biological water K ≈ 2.2 GPa), the molecular displacement amplitude is approximately:

Molecular amplitude is estimated by comparing pressure amplitude with bulk modulus and wave number. With a wavelength near 1.5 mm, the resulting displacement remains microscopic.

Operation: molecular displacement on the order of 10⁻⁸ m, oscillation velocities of 0.06 m/s

The energy density at the focus results in approximately 3.3×10⁴ J/m³, and with the speed of sound in soft tissue (1500 m/s), the flux coincides with the expected clinical values.

## Interpretation

The energy flux of 10⁷ W/m² transported by ultrasound represents an **extreme concentration of power** in a focal point of millimeters. This flux deposits enough energy to raise tissue temperature by more than 10°C per second, achieving the desired thermal necrosis in short times (seconds to minutes).

The key to therapeutic success lies in the **geometry of the flux**: the transducer produces a converging beam that focuses the flux at a point, creating an intense "hot spot" while the flux in neighboring tissues remains low. The direction of the flux, perpendicular to the converging spherical wave surfaces, concentrates energy exactly where required.

Dominant variable: the pressure amplitude at the focus, which quadratically controls the deposited energy flux.

Validity limit: if the flux exceeds 10⁹ W/m², cavitation effects (formation of vapor bubbles) appear that drastically modify energy absorption and can cause unwanted mechanical damage. The valid HIFU regime operates below this threshold, maintaining controlled thermal heating without violent cavitation.