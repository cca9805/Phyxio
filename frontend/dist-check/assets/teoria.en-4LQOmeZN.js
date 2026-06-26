const e=`# Longitudinal Waves in Bars

## Conceptual context

When one end of a metal bar is struck, the disturbance travels along it as a compression-tension wave. Unlike flexural waves, these longitudinal waves are **non-dispersive** in the slender bar model: all frequencies travel at the same speed. This makes them the simplest case of wave propagation in solids and the natural reference for comparison with dispersive phenomena.

The speed of these waves depends exclusively on two material properties: axial stiffness (Young's modulus [[E_young]]) and volumetric density ([[rho_vol]]). The cross-section geometry does not influence speed, though it does determine the mechanical impedance and therefore how the wave reflects and transmits at discontinuities.

This leaf covers longitudinal waves in slender bars (transverse dimension much smaller than wavelength). It is the direct complement of the flexural waves leaf: there the fourth spatial derivative produces quadratic dispersion; here the second derivative produces dispersion-free propagation.

## 🟢 Essential level

A long thin bar can be thought of as a chain of microscopic springs. When one end is compressed, each layer pushes the next and the disturbance advances. The speed at which this disturbance advances is the **longitudinal wave speed** [[v_barra]].

The essential point is that this speed depends only on the material:
- Stiff materials (high [[E_young]]) transmit fast because the "internal springs" are hard.
- Dense materials (high [[rho_vol]]) transmit slower because there is more inertia to move.

The relationship is a square root: [[v_barra]] grows with the root of stiffness and decreases with the root of density.

Typical values:
- Steel: approximately 5100 m/s
- Aluminium: approximately 5090 m/s
- Copper: approximately 3750 m/s
- Glass: approximately 5200 m/s
- Wood (along grain): 3000–5000 m/s
- Polymers: 1000–2500 m/s

The fundamental property: a compression pulse travels along the bar **without deforming**. Its shape remains identical regardless of distance travelled (as long as there is no damping or discontinuity). This is a direct consequence of the absence of dispersion.

The **mechanical impedance** [[Z_barra]] is the quantity that controls what happens when the wave encounters a change: another bar, a free end, a clamped end, or a junction. It is calculated as the product of density, cross-sectional area, and wave speed.

## 🔵 Formal level

The wave equation for longitudinal displacements u(x,t) in a slender bar is derived from Newton's law on an infinitesimal element combined with Hooke's law:

{{f:velocidad_longitudinal_barra}}

- Net force on an element of length dx is the stress difference across its two faces: dF equals A·d(sigma)/dx·dx
- Stress is sigma equals E·(du/dx) (Hooke)
- Element acceleration is rho·A·dx·(d²u/dt²) (Newton)
- Equating: E·(d²u/dx²) equals rho·(d²u/dt²)

The solution has propagation speed [[v_barra]] equal to the square root of [[E_young]] divided by [[rho_vol]].

The dispersion relation is linear:

{{f:relacion_dispersion_barra}}

This confirms that phase velocity ([[omega]]/[[k_long]]) and group velocity (d[[omega]]/d[[k_long]]) are identical. There is no dispersion.

The longitudinal mechanical impedance is defined as:

{{f:impedancia_barra}}

In a pure progressive wave, axial force F and particle velocity [[u_particula]] are related by F equals Z times [[u_particula]]. The sign depends on propagation direction.

The wavelength is:

{{f:longitud_onda_longitudinal}}

For model validity, [[lambda_long]] must be much larger (at least 6 times) than the bar's largest transverse dimension.

## 🔴 Structural level

The absence of dispersion has deep consequences for wave behaviour in bars:

- **Reflection at ends:** at a free end, a compression wave reflects as a tension wave (inversion of [[sigma_axial]] sign). At a clamped end, it reflects without inversion. Round-trip time is 2L/[[v_barra]].

- **Junctions between bars:** when a wave reaches the junction between two bars of different impedance [[Z_barra]] (Z1 and Z2), it partially reflects. The force reflection coefficient is (Z2 - Z1)/(Z2 + Z1). If Z2 is greater than Z1, the reflected wave has the same sign as the incident one; if Z2 is smaller, it inverts.

- **Transmission:** the transmission coefficient is 2·Z2/(Z1 + Z2). Energy is conserved.

- **Standing waves:** in a finite bar with known boundary conditions, superposition of progressive and reflected waves produces resonance modes. Natural frequencies of a free-free or clamped-clamped bar are n·[[v_barra]]/(2L). For a clamped-free bar: (2n-1)·[[v_barra]]/(4L).

- **Lateral Poisson effect:** although the wave is longitudinal, lateral contraction from Poisson's effect exists. The slender bar model ignores it. At high frequencies (wavelengths comparable to diameter), lateral inertia introduces a dispersive correction known as the Rayleigh-Love effect.

> [!WARNING]
> The speed [[v_barra]] in a slender bar is DIFFERENT from P-wave speed in an infinite medium. In an infinite medium, lateral confinement makes the speed sqrt(M/rho) where M is the plane-wave modulus, always greater than E. Do not use the bar formula for seismic velocities in bulk rock.

## Deep physical interpretation

The non-dispersion of longitudinal bar waves reflects the direct proportionality between restoring force and displacement at local scale. The wave equation is second-order in both space and time, producing the linear [[omega]]-[[k_long]] relation. This contrasts with bending, where the fourth spatial derivative produces a quadratic relation.

Physically, axial stiffness E acts as "spring per unit length" and density rho as "mass per unit length". The ratio E/rho has dimensions of velocity squared and completely determines propagative dynamics.

Impedance [[Z_barra]] represents "resistance to wave energy flow". Two bars with equal impedance behave as a continuous medium: the wave passes without reflection. Any impedance change (material, section, or both) generates reflection.

## Order of magnitude

For a steel bar:
- [[E_young]] is 210 GPa (210 × 10⁹ Pa)
- [[rho_vol]] is 7850 kg/m³
- [[v_barra]] gives sqrt(210e9/7850) approximately 5170 m/s
- At 1 kHz: [[lambda_long]] gives 5170/1000 yielding 5.17 m
- At 100 kHz: [[lambda_long]] gives 0.052 m (5.2 cm)

For an aluminium bar:
- [[E_young]] is 70 GPa, [[rho_vol]] is 2700 kg/m³
- [[v_barra]] gives sqrt(70e9/2700) approximately 5090 m/s

Note: steel and aluminium have similar longitudinal speeds despite very different stiffnesses and densities, because their E/rho ratios are nearly equal.

If [[v_barra]] exceeds 7000 m/s for a common metal, a unit error is very likely (E in GPa without converting, or rho in g/cm³).

## Personalized resolution method

To calculate longitudinal wave speed and related quantities:

1. Obtain [[E_young]] in Pa. If given in GPa, multiply by 10⁹.
2. Obtain [[rho_vol]] in kg/m³. If given in g/cm³, multiply by 1000.
3. Calculate [[v_barra]] as the square root of E/rho.
4. If wavelength is needed: calculate [[lambda_long]] as [[v_barra]]/f, where f is frequency in Hz.
5. If impedance is needed: obtain [[A_seccion]] in m² and calculate [[Z_barra]] as rho·A·[[v_barra]].
6. Verify that [[lambda_long]] is at least 6 times the largest transverse dimension to confirm model validity.

If step 6 fails, consider Rayleigh-Love corrections or a waveguide model.

## Special cases and extended example

**Variable-section bars:** if section changes gradually, local speed remains sqrt(E/rho) but impedance varies with position, producing distributed reflections.

**Composite bars:** for materials with variable modulus and density across the section, effective speed is obtained from the weighted average of stiffness and mass per unit length.

**Chain of joined bars:** in a structure with multiple junctions, each impedance change generates partial reflection. Analysis uses transfer matrices that chain reflection and transmission coefficients.

**High-frequency limit:** when [[lambda_long]] becomes comparable to diameter, the Rayleigh-Love correction reduces effective speed. The corrected speed is less than sqrt(E/rho) and depends on frequency: dispersion appears.

## Real student questions

**Why doesn't speed depend on cross-sectional area?**
Because increasing area simultaneously increases both restoring force (more stiff material) and inertia (more mass). Both effects cancel exactly, leaving speed invariant.

**Why do steel and aluminium have almost the same speed?**
Because E/rho for steel (210e9/7850 approximately 2.68e7) and aluminium (70e9/2700 approximately 2.59e7) are very close values. Steel's high stiffness compensates its high density.

**Is this the same as the speed of sound?**
Only in the sense that both are wave speeds. But the speed of sound in air is due to gas compressibility, while in a bar it is due to Young's stiffness. Also, in an infinite solid the speed differs (P-waves) because lateral confinement changes the effective modulus.

**What happens when the wave reaches the end of the bar?**
If the end is free, the wave reflects with stress inversion (compression returns as tension). If clamped, it reflects without inversion. In both cases particle velocity inverts or not according to the boundary condition.

## Cross-cutting connections and study paths

Connection to [flexural waves in beams](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-flexionales-en-vigas) (dispersive case, fourth derivative), [transverse shear waves](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-transversales-de-corte) (speed depends on shear modulus), and [mechanical impedance in solids](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/impedancia-mecanica-en-solidos) (generalisation of impedance concept).

## Final synthesis

Longitudinal waves in slender bars are the canonical case of non-dispersive propagation in solids. Their speed depends only on E and rho, is independent of frequency and section geometry. Mechanical impedance (rho·A·[[v_barra]]) controls reflection and transmission at discontinuities. The model is valid as long as wavelength is much larger than transverse dimensions.
`;export{e as default};
