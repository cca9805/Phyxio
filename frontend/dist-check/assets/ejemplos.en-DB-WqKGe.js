const e=`# Exam-type example

## Problem statement

A telecommunications engineer needs to verify the relationship between the vacuum constants and the speed of light, and from there compute the wave parameters of a 2.4 GHz WiFi signal. Using [[mu0]] = 4π×10⁻⁷ H/m and [[epsilon0]] = 8.854×10⁻¹² F/m, obtain: (a) the propagation speed [[c]], (b) the angular frequency [[omega]], (c) the wave number [[k]], and (d) the wavelength [[lambda]] in vacuum.

## Data

- [[mu0]] = 4π×10⁻⁷ H/m ≈ 1.2566×10⁻⁶ H/m (magnetic permeability of vacuum)
- [[epsilon0]] = 8.854×10⁻¹² F/m (electric permittivity of vacuum)
- f = 2.4×10⁹ Hz (standard 802.11g/n WiFi signal frequency)
- Unknowns: [[c]], [[omega]], [[k]], [[lambda]]

## System definition

The system is a monochromatic plane wave in vacuum. The fields [[E]] and [[B]] are perpendicular to each other and to the propagation direction. The wave travels in a straight line from the emission point. The vacuum model without free charges or currents applies.

## Physical model

The quantities [[c]], [[omega]], and [[k]] are linked by the dispersion relations that emerge directly from the electromagnetic wave equation. The propagation speed [[c]] is fixed for vacuum and arises from the product [[mu0]]·[[epsilon0]]. The relation between [[omega]] and [[k]] is the linear vacuum dispersion relation.

## Model justification

The plane-wave vacuum model is valid for WiFi signals because the operating distance (a few metres) greatly exceeds the signal's [[lambda]], and air has electrical and magnetic properties so close to vacuum that the correction is below 0.1%. The model would fail in a conductor or lossy dielectric, where the imaginary part of [[k]] would need to be included.

## Symbolic solution

For part (a), the propagation speed arises from the product of [[mu0]] and [[epsilon0]]:

{{f:velocidad_luz}}

For part (b), the angular frequency is obtained by multiplying the ordinary frequency by 2π: [[omega]] = 2π·f.

For part (c), the wave number [[k]] is obtained from the dispersion relation by dividing [[omega]] by [[c]]: [[k]] = [[omega]]/[[c]].

For part (d), the wavelength [[lambda]] is the ratio of 2π to [[k]]: [[lambda]] = 2π/[[k]].

Once [[c]], [[omega]] and [[k]] are known, the plane-wave particular solution is fully determined by:

{{f:solucion_onda_plana_E}}

## Numerical substitution

**Part (a) — propagation speed:**

Multiplying [[mu0]] by [[epsilon0]] gives 1.2566×10⁻⁶ multiplied by 8.854×10⁻¹², which is approximately 1.1127×10⁻¹⁷ s²/m². The square root of that product is approximately 1.0549×10⁻⁸ s/m. The reciprocal gives [[c]] ≈ 2.998×10⁸ m/s.

**Part (b) — angular frequency:**

Multiplying 2π by 2.4×10⁹ Hz gives [[omega]] ≈ 1.508×10¹⁰ rad/s.

**Part (c) — wave number:**

Dividing [[omega]] ≈ 1.508×10¹⁰ rad/s by [[c]] ≈ 2.998×10⁸ m/s gives [[k]] ≈ 50.3 rad/m.

**Part (d) — wavelength:**

Dividing 2π by [[k]] ≈ 50.3 rad/m gives [[lambda]] ≈ 0.125 m ≈ 12.5 cm.

## Dimensional validation

The formula for [[c]] combines units of [[mu0]] (henries per metre) and [[epsilon0]] (farads per metre). Expressing each constant's dimension in fundamental SI units, the product (H/m)·(F/m) turns out to be s²/m², whose inverse square root is m/s ✓. The ratio of [[omega]] to [[c]] has dimensions rad/m ✓.

## Physical interpretation

The result [[c]] ≈ 2.998×10⁸ m/s is not merely a number: it is the quantitative prediction that Maxwell extracted in 1865 from the constants [[mu0]] and [[epsilon0]], determined independently from experiments with electric and magnetic forces. The fact that it matches [[c]] measured optically or mechanically is the proof that light is an electromagnetic wave and not a perturbation of some other medium.

For the WiFi signal, the [[lambda]] of 12.5 cm directly explains antenna design: a half-wave dipole antenna measures exactly half of [[lambda]], that is, about 6.25 cm, which matches the actual antennas in domestic routers. The linear dispersion relation [[omega]] = [[c]]·[[k]] ensures that all WiFi frequencies (2.4 GHz and 5 GHz) travel at the same [[c]] in vacuum, eliminating temporal distortion of the signal during propagation.

The physical cause of [[c]] being a universal constant is that [[mu0]] and [[epsilon0]] are properties of vacuum itself, not of any material medium. This was Maxwell's revelation: the speed of light depends neither on the source nor the observer, but on how much vacuum resists changes in [[E]] and [[B]]. That source-independence is the seed of special relativity.

---

# Real-world example

## Context

Physicists at the NIST laboratory (National Institute of Standards and Technology, USA) need to verify the value of [[c]] from independent measurements of [[mu0]] and [[epsilon0]] to confirm the coherence of the International System of Units. They have measurements of the fine-structure constant, the elementary charge, and Planck's constant, but also want to check the direct route: measure electric and magnetic forces, obtain [[epsilon0]] and [[mu0]], and compute [[c]] to see if it matches the defining value of 299 792 458 m/s.

## Physical estimation

The permittivity [[epsilon0]] is obtained by measuring the force between two parallel plates at a known voltage, and [[mu0]] from the force between two parallel conductors of known length carrying a known current. Modern experiments determine [[epsilon0]] with a relative uncertainty of order 10⁻⁹. The product [[mu0]]·[[epsilon0]] reproduces [[c]] with that same relative precision. Since [[c]] is now a defined constant (not measured), any discrepancy is interpreted as an adjustment of the mass or current units, not as an error in the wave equation.

## Interpretation

This example illustrates that the electromagnetic wave equation is not just a calculation tool but the metrological foundation of the SI. The metre, the second, and the ampere are all connected through [[c]], [[mu0]], and [[epsilon0]], and the wave equation is the mathematical expression of that connection. Any experiment that measures [[c]] is implicitly verifying the consistency of Maxwell's equations with the structure of spacetime.
`;export{e as default};
