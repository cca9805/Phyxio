const e=`# Modes in Plates and Membranes

## Conceptual context

When a metal plate or a drum membrane vibrates freely, it does not do so chaotically. Its motion decomposes into well-defined spatial patterns called **normal modes**, each with a natural frequency and a characteristic distribution of nodes and antinodes. Understanding these modes is the key to predicting when a structure will resonate, how it behaves under acoustic excitation, and how it can be designed to absorb or reject specific frequencies.

This leaf extends to the two-dimensional domain the concepts already seen in the vibrating string and in bar modes. The fundamental novelty is that the structure now has two independent spatial dimensions, introducing a double modal index (m, n) and producing nodal patterns in the form of crossed lines rather than simple nodal points. Both geometry and material properties jointly determine the modal spectrum, and the distinction between elastic plate and tensioned membrane leads to physically different behaviors.

## 🟢 Essential level

A **plate** is a two-dimensional solid structure that resists bending through its elastic stiffness. A **membrane** is a sheet so thin and flexible that its capacity to vibrate comes exclusively from the tension with which it is stretched, with no bending stiffness of its own.

When either structure is disturbed, **nodal lines** appear: geometrical loci where the surface does not move. Between two consecutive nodal lines, the surface oscillates upward and downward in a coordinated way. The set of nodal lines and the associated frequency define a **normal mode of vibration**.

Modes are labeled with two positive integers, m and n, which count how many complete half-periods fit in each direction. The simplest mode has a single vibration bubble in each direction and is the **fundamental mode**. Higher-index modes have finer nodal lines and higher frequencies.

The frequency of each mode depends fundamentally on how stiff or how tensioned the structure is, on how heavy it is per unit area, and on its dimensions. A larger, softer or heavier structure resonates at lower frequencies; a smaller, stiffer or lighter one resonates at higher frequencies.

> [!NOTE]
> The modes of a square plate are special: pairs (m,n) and (n,m) have exactly the same frequency. This is called **modal degeneracy** and produces combined nodal patterns that are visually very rich.

## 🔵 Formal level

The **central parameter of the plate** is its bending stiffness [[D_placa]], combining Young's modulus [[E_young]], plate thickness [[h_placa]] and Poisson's ratio [[nu_p]]:

{{f:rigidez_flexion_placa}}

The cubic dependence on thickness makes this parameter highly sensitive to thickness changes: doubling [[h_placa]] multiplies [[D_placa]] by eight. The surface mass density [[rho_s]] is obtained by multiplying the volumetric density [[rho_vol]] by the thickness:

{{f:densidad_superficial_placa}}

With [[D_placa]] and [[rho_s]] available, the frequency of mode (m,n) for a **simply supported rectangular plate** is:

{{f:frecuencia_modal_placa}}

Integers m and n must be at least 1. The fundamental mode (1,1) has the lowest frequency in the spectrum. The formula shows that [[f_mn]] grows as the square of the modal indices, producing a modal density that increases rapidly with frequency.

For a **tensioned rectangular membrane** the restoring mechanism is not bending stiffness but surface tension [[T_mem]], and the inertia comes from its surface mass density [[rho_mem]]. The modal frequency takes the form:

{{f:frecuencia_modal_membrana}}

The mathematical structure is analogous to the plate but with [[T_mem]]/[[rho_mem]] instead of [[D_placa]]/[[rho_s]]. The physical difference is that in the membrane [[T_mem]] can be modified externally (tuning), whereas in the plate the parameters are fixed once it is manufactured.

> [!TIP]
> To distinguish whether a system behaves more like a plate or a membrane, compute the ratio of bending stiffness to the product of tension times the square of length. If that ratio is much less than 1, the system is a membrane; if it is much greater than 1, it is a plate.

## 🔴 Structural level

The governing differential equation of the Kirchhoff plate involves the **bilaplacian** of the transverse displacement, whereas the membrane equation involves only the ordinary Laplacian. This mathematical difference has deep physical consequences.

In the **plate**, modal frequencies scale as the square of the modal wavenumbers, producing group velocity dispersion: high-frequency bending waves propagate faster than low-frequency ones. In the **ideal membrane**, there is no dispersion: propagation speed is constant and equal to the square root of [[T_mem]]/[[rho_mem]], regardless of frequency.

This distinction has practical importance in **acoustic design**. A plate radiates sound efficiently at its modal frequencies and attenuates intermediate frequencies; a membrane has a more uniform modal spectrum because its modes are more evenly spaced in frequency for the most common rectangular aspect ratios.

The phenomenon of **modal degeneracy** in square geometries or geometries with rational aspect ratios (rational [[a_dim]]/[[b_dim]] ratio) deserves special attention. When two modes have the same frequency, any linear combination of both is also a solution. The famous **Chladni patterns**, observed by sprinkling sand on a vibrating plate, are precisely these superpositions of degenerate modes, producing nodal figures of great beauty and apparent complexity.

Boundary conditions modify the numerical coefficients of the modal formula but not the functional structure. A clamped edge also constrains the surface slope, which raises modal frequencies compared to the simply supported edge. For free edges, the fundamental modal frequency can decrease considerably.

> [!WARNING]
> The Kirchhoff model fails when plate thickness [[h_placa]] is comparable to the in-plane dimensions. In that case, shear deformation significantly reduces modal frequencies and the Mindlin theory must be used.

## Deep physical interpretation

The modal spectrum of a plate or membrane is its **vibratory fingerprint**: determined by geometry and material, it is unique to each combination of these parameters. When an external source emits energy at a frequency coinciding with one of the modes, the structure absorbs that energy efficiently and can amplify it if damping is low.

The roles of [[D_placa]] and [[rho_s]] are not symmetric: [[D_placa]] determines the absolute frequency scale, while mode indices and dimensions determine the relative distribution. Doubling [[D_placa]] raises all frequencies by the square root of two, without changing their relative ratios. This contrasts with the effect of dimensions: changing the aspect ratio [[a_dim]]/[[b_dim]] redistributes the modes and can make previously well-separated modes collide or move apart.

The membrane physics makes tension [[T_mem]] the tuning parameter par excellence: it is the only one that can be modified without changing the instrument. In percussion, precise tuning is achieved by adjusting tension at different points of the membrane head to compensate for mode inequality and obtain the desired sound quality.

## Order of magnitude

For a steel plate measuring 0.3 m × 0.2 m × 2 mm, with [[E_young]] of 210 GPa, [[rho_vol]] of 7850 kg/m³ and [[nu_p]] of 0.3, the stiffness [[D_placa]] is approximately 153 N·m and the surface mass density [[rho_s]] is approximately 15.7 kg/m². The fundamental mode (1,1) falls around 160 Hz, clearly in the audible range. Mode (2,2) is already above 600 Hz.

For a mylar membrane approximately 0.35 m in diameter with [[T_mem]] of 1500 N/m and [[rho_mem]] of 0.2 kg/m², the equivalent rectangular fundamental mode lies around 90–110 Hz, corresponding to the fundamental frequency of a medium-sized drum head.

A modal frequency above 20 kHz for a decimeter-scale plate is a warning sign: [[E_young]] has probably been entered in GPa instead of Pa, introducing an error of a factor of 10⁹.

## Personalized resolution method

To calculate [[f_mn]] for a plate:

1. Identify the material and obtain [[E_young]], [[rho_vol]] and [[nu_p]].
2. Compute [[rho_s]] by multiplying [[rho_vol]] by [[h_placa]].
3. Compute [[D_placa]] using the bending stiffness formula.
4. Substitute [[D_placa]], [[rho_s]], [[a_dim]], [[b_dim]] and the chosen indices m, n into the [[f_mn]] formula.
5. Verify that mode (1,1) yields the lowest frequency.

For a membrane:

1. Measure or estimate [[T_mem]] and [[rho_mem]].
2. Compute the membrane wave speed as the square root of [[T_mem]]/[[rho_mem]].
3. Substitute into the [[f_mn]] formula with the desired indices and dimensions.

An error signal in plate calculations: if [[f_mn]] results in kHz for decimeter-scale dimensions, review the units of [[E_young]] and [[D_placa]].

## Special cases and extended example

**Square plate:** when [[a_dim]] and [[b_dim]] are equal, modes (m,n) and (n,m) have the same frequency (degeneracy). Excitation by a point source at the center simultaneously excites both modes, producing diagonal nodal patterns that are neither pure (m,n) nor pure (n,m) but linear combinations. This explains the visual richness of Chladni figures on square plates.

**Circular membrane:** for drums, microphone membranes and eardrums, the relevant geometry is circular. Modes are not described by rectangular indices (m,n) but by Bessel functions, and nodal lines are circles and diameters. Modal frequencies are no longer rational multiples of each other, which produces the specific timbre of percussion instruments. This case lies outside the rectangular model presented here, but it is the natural extension of the same underlying principle.

## Real student questions

**Why do modes (m,n) and (n,m) of a square plate have the same frequency?**
Because the [[f_mn]] formula contains terms (m/a)² and (n/b)² in a symmetric way. If [[a_dim]] and [[b_dim]] are equal, swapping m and n does not change the result. Geometric symmetry implies spectral degeneracy.

**Why does a drum membrane sound different from a microphone membrane if both are made of mylar?**
Because the dimensions, tension [[T_mem]] and surface mass density [[rho_mem]] are very different. A microphone diaphragm is tiny and highly tensioned, with modes in the kHz range. A drum head is large and less tensioned, with modes in the tens to hundreds of Hz range.

**Does it make sense to talk about mode (0,1) or (0,0)?**
Not in the plate or membrane model with fixed edges. Indices must be at least 1 because an index of zero implies constant amplitude in that direction (no nodes), incompatible with zero-displacement boundary conditions. Mode (0,0) would correspond to rigid translation.

**How does damping affect the modes?**
The model presented is conservative (no damping). In the presence of damping, resonance frequencies shift slightly downward and spectrum peaks broaden. The modal frequency calculated without damping is a good approximation as long as the damping ratio is below 20 %.

## Cross-cutting connections and study paths

Modes in plates and membranes connect directly with the leaf on [resonance and modes in bars](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/resonancia-y-modos-en-barras), which treats the one-dimensional case of which this leaf is the natural extension. The difference is the appearance of a second modal index and the distinction between plate (stiffness) and membrane (tension).

Understanding bending wave dispersion in plates connects with the leaf on [dispersion and attenuation in solids](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/dispersion-y-atenuacion-en-solidos). For practical applications to vibration control, the leaf on [ultrasound applications and testing](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/aplicaciones-ultrasonidos-y-ensayos) is the natural continuation.

## Final synthesis

Normal modes in plates and membranes are two-dimensional vibratory patterns with natural frequencies determined by geometry and material. The distinction between plate (governed by [[D_placa]]) and membrane (governed by [[T_mem]]) reflects two different physical mechanisms: elastic stiffness versus pretension. In both cases, the modal spectrum is dense and grows with indices (m,n), and understanding modal degeneracy explains the complexity of the nodal patterns observed experimentally.
`;export{e as default};
