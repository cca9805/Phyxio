const e=`# Introduction to waves in solids

## Conceptual context

Mechanical waves in solids are disturbances that propagate transporting energy without transporting matter. Unlike fluids, solids possess rigidity both in compression and in shear, allowing the simultaneous existence of two fundamental wave types: longitudinal and transverse. This duality is exclusive to solids and forms the basis of seismology, non-destructive testing and vibration engineering.

Within the block on waves in solids, this leaf introduces the basic concepts developed in depth in subsequent leafs: phase velocity, the relationship with elastic constants, wave types and the fundamental dispersion relation.

## 🟢 Essential level

A wave in a solid is a vibration that travels from one point to another in the material. When you strike a steel bar at one end, particles near the impact vibrate and push their neighbours, which in turn push the next ones. The disturbance travels along the bar without the material moving from one place to another: only the vibratory motion is transferred.

There are two ways in which a solid can vibrate as a wave passes:
- **Longitudinal waves**: particles vibrate in the same direction as the wave advances. They are analogous to sound in air and produce alternating compressions and expansions of the material.
- **Transverse waves**: particles vibrate perpendicular to the direction of advance. These are exclusive to solids because they require the material to resist shear stresses, something fluids cannot do.

The speed at which the wave travels, [[v_fase]], depends on two material properties: its stiffness (how difficult it is to deform) and its density [[rho]] (its inertia). A very stiff, low-density material transmits waves very quickly; a soft, dense material transmits them slowly. Steel, which is stiff and dense, has a longitudinal velocity of about 5900 m/s. Rubber, soft and relatively dense, has velocities of barely 50 m/s.

The wave frequency [[f]] is determined by the source generating the vibration and does not change when passing from one medium to another. What does change is the wavelength [[lambda]], which adapts to maintain the fundamental relationship between velocity, frequency and wavelength.

## 🔵 Formal level

Wave propagation in solids is governed by the equations of motion of continuum mechanics. For a linearly elastic, homogeneous and isotropic solid, the wave equation decomposes into two independent modes.

For **longitudinal** waves in a thin bar (transverse dimension much smaller than wavelength):

{{f:velocidad_longitudinal_barra}}

Where [[E_young]] is the Young's modulus of the material and [[rho]] is its density. This expression shows that velocity depends exclusively on intrinsic material properties and not on geometry or frequency (in the non-dispersive regime).

For **transverse** waves:

{{f:velocidad_transversal}}

Where [[G_mod]] is the shear modulus. Since in all solids the shear modulus is less than Young's modulus (typically [[G_mod]] is between one third and one half of [[E_young]]), transverse velocity is always less than longitudinal in the same material. This difference is what allows seismologists to distinguish between P waves (longitudinal, faster) and S waves (transverse, slower).

The fundamental dispersion relation connects velocity, frequency and wavelength:

{{f:relacion_dispersion}}

In non-dispersive media, [[v_fase]] is constant and the relation between [[f]] and [[lambda]] is a hyperbola. If the medium is dispersive (velocity depends on frequency), the pulse shape changes during propagation.

## 🔴 Structural level

Modelling decisions affecting wave propagation in solids depend on several factors:

- **Geometry**: in thin bars [[E_young]] is used; in extended media (thick plates, blocks) the plane wave modulus is used, which incorporates Poisson's ratio and gives higher velocities.
- **Wave mode**: longitudinal or transverse. Each has its own velocity and its own constitutive equation.
- **Material**: isotropy allows using two independent elastic constants. In anisotropic materials (composites, crystals) up to 21 elastic constants are needed and velocity depends on propagation direction.
- **Frequency**: at low frequencies (wavelength much greater than transverse dimensions) the plane wave model is valid. At high frequencies guided modes, dispersion and boundary effects appear.

> [!NOTE]
> Fluids do not transmit transverse waves because they lack shear rigidity ([[G_mod]] is zero). This is the fundamental reason why seismic S waves do not cross Earth's liquid outer core, allowing inference of its state of aggregation.

The energy transported by a mechanical wave in a solid is proportional to the square of the amplitude and to the medium's impedance. The specific impedance (product of [[rho]] times [[v_fase]]) determines how much energy is transmitted or reflected at each interface between different materials, a concept developed in the mechanical impedance leaf.

> [!WARNING]
> The velocity formulae presented here assume linearly elastic material. If amplitude is large (strains above 1%), nonlinear effects appear: harmonic generation, amplitude-dependent velocity and possible material damage.

## Deep physical interpretation

Phase velocity in solids encodes the competition between two fundamental properties of matter: elastic rigidity (which tends to restore the original shape) and inertia (which opposes changes in particle velocity). An infinitely rigid material would transmit signals instantaneously; an infinitely dense material would never move. The actual velocity is the compromise between both tendencies, expressed mathematically as the square root of the ratio between the relevant elastic modulus and density.

The existence of two wave modes in solids has an immediate practical consequence: any point source in a solid simultaneously generates longitudinal and transverse waves travelling at different speeds. At a distant receiver two arrivals separated in time are received. The time difference between them allows calculating the distance to the source, the fundamental principle of seismic location and acoustic emission testing.

## Order of magnitude

For quick orientation:
- Metals (steel, aluminium, copper): longitudinal [[v_fase]] between 4000 and 6500 m/s.
- Ceramics (alumina, glass): between 5000 and 10000 m/s.
- Rigid polymers (PMMA, nylon): between 1500 and 2700 m/s.
- Elastomers (rubber, silicone): between 20 and 500 m/s.

Transverse velocity is always less than longitudinal. The typical ratio is 0.5 to 0.6 in isotropic metals.

If a velocity result for a metal gives less than 1000 m/s or more than 12000 m/s, there is very likely an error in the data or in the units.

## Personalized resolution method

1. Identify the wave type: longitudinal or transverse?
2. Select the correct elastic modulus: [[E_young]] for longitudinal waves in bars, [[G_mod]] for transverse.
3. Obtain [[rho]] of the material from reference tables.
4. Calculate [[v_fase]] with the corresponding formula.
5. If [[lambda]] is requested, divide [[v_fase]] by the given frequency [[f]].
6. Check coherence: longitudinal velocity must be greater than transverse for the same material.

## Special cases and extended example

When the material is a fluid ([[G_mod]] is zero), only longitudinal waves exist. Velocity in fluids depends on bulk modulus rather than Young's modulus.

When frequency is very high (wavelength comparable to transverse dimensions of the part), guided Lamb modes (in plates) or Pochhammer-Chree modes (in cylindrical bars) appear. In this regime velocity depends on frequency and the phase velocity concept becomes complicated with group velocity.

For a steel bar with [[E_young]] of 200 GPa and [[rho]] of 7800 kg/m³: the longitudinal velocity is approximately 5064 m/s. If excitation frequency is 100 kHz, wavelength [[lambda]] is about 51 mm.

## Real student questions

- Why is the speed of sound in solids greater than in gases? Because the rigidity of a solid far exceeds that of a gas. Although solids are also denser, the effect of rigidity dominates overwhelmingly.

- Can a wave change type (longitudinal to transverse) in a solid? Yes, at every oblique interface mode conversion occurs. An incident longitudinal wave generates both longitudinal and transverse reflected and transmitted waves.

- Why are there no transverse waves in fluids? Because fluids do not resist shear stresses: when you try to deform them tangentially, they simply flow rather than restoring their original shape.

## Cross-cutting connections and study paths

This leaf connects with reflection and transmission in solids, where what happens when the wave encounters an interface is studied. It also relates to mechanical impedance, which quantifies the medium's resistance to vibration. Dispersion and attenuation, covered in subsequent leafs, generalise the concept of constant velocity to more realistic situations where velocity depends on frequency and amplitude decreases with distance.

The analogy with waves in fluids is useful but limited: in fluids only longitudinal waves exist and the relevant rigidity is volumetric compressibility. In solids, the existence of shear rigidity opens a wider range of wave phenomena.

## Final synthesis

Wave propagation in solids is governed by the competition between elastic stiffness and material inertia. The relevant elastic modulus ([[E_young]] for longitudinal, [[G_mod]] for transverse) and density [[rho]] completely determine phase velocity [[v_fase]]. The fundamental dispersion relation connects velocity, frequency [[f]] and wavelength [[lambda]]. These concepts form the foundation upon which all wave phenomena in solids are built: reflection, transmission, impedance, dispersion and attenuation.
`;export{e as default};
