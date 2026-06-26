const e=`# Standing Waves on Strings\r
\r
## Conceptual context\r
\r
Standing waves emerge when two traveling waves of equal amplitude and frequency propagate in opposite directions within a bounded domain. Their interference produces a fixed spatial pattern that oscillates temporally without traveling. This phenomenon is the physical basis of string instruments, laser cavities and quantized vibration modes in wave mechanics.\r
\r
> [!NOTE]\r
> The central question is: **why are only certain patterns possible?** The answer lies in the boundary conditions imposed by the fixed ends.\r
\r
## 🟢 Essential level\r
\r
When you pluck a guitar string, you observe that some points remain motionless while others move with maximum amplitude. The stationary points are called **nodes**, and the points of maximum movement are called **antinodes**.\r
\r
The standing wave arises from the **superposition** of two identical waves traveling in opposite directions. One wave advances toward the bridge, reflects inverted, and upon meeting incident waves produces a pattern that does not travel but oscillates in place.\r
\r
The key lies in the **fixed ends**. The string is anchored at both ends, forcing those points to remain always at rest. This condition imposes severe restrictions: only those waves whose wavelength satisfies a specific relation with the string length can establish themselves.\r
\r
The result is **spatial quantization**: the string can only vibrate in certain discrete modes labeled by an integer [[numero_armonico]]. In the simplest mode there is a single central antinode. In higher modes multiple antinodes appear separated by nodes. The oscillation frequency determines the perceived **musical pitch**.\r
\r
## 🔵 Formal level\r
\r
The mathematical description results from the superposition of two harmonic traveling waves of equal amplitude [[amplitud_maxima]], wavelength [[longitud_onda_estacionaria]] and frequency [[frecuencia_modo]], propagating in opposite directions with velocity [[velocidad_propagacion]]:\r
\r
{{f:funcion_onda_estacionaria}}\r
\r
This expression explicitly separates spatial dependence from temporal dependence. The spatial function determines the **stationary envelope**, while the temporal part describes the synchronized oscillation of all points.\r
\r
The **boundary conditions** for fixed ends require zero amplitude at the ends for all time. This quantizes the wavelength according to the integer [[numero_armonico]] of half-wavelengths that fit in the string:\r
\r
{{f:longitud_onda_estacionaria}}\r
\r
From this spatial quantization, temporal quantization is derived. Substituting the expression for [[longitud_onda_estacionaria]] into the general wave relation yields the discrete spectrum of allowed frequencies:\r
\r
{{f:frecuencia_estacionaria}}\r
\r
The fundamental mode with [[numero_armonico]] equal to 1 establishes the **base frequency** of the harmonic series:\r
\r
{{f:frecuencia_fundamental}}\r
\r
Higher modes form a harmonic series where [[frecuencia_modo]] is exactly [[numero_armonico]] times [[frecuencia_fundamental]]. The position of each node [[posicion_nodo]] is determined by the integer index [[indice_nodo]] that labels each node or antinode within the mode. Node positions are located at:\r
\r
{{f:posicion_nodos}}\r
\r
And antinodes, points of constructive interference where amplitude is twice [[amplitud_maxima]], are located at the antinode position [[posicion_vientre]] given by:\r
\r
{{f:posicion_vientres}}\r
\r
The stationary pattern of mode [[numero_armonico]] consists of [[numero_armonico]] identical half-wavelength segments, each with a central antinode and [[numero_armonico]]+1 nodes in total.\r
\r
## 🔴 Structural level\r
\r
Standing waves in strings connect deeply with multiple areas of physics. In **quantum mechanics**, quantization imposed by boundary conditions is the direct analogue of the particle in a box: the wave function must vanish at the boundaries, producing discrete energy levels proportional to the square of the mode number.\r
\r
Musical **acoustics** is founded on this phenomenon. String instruments produce sounds whose timbre results from the superposition of multiple simultaneous modes. The attack position of the bow or pick selectively excites certain harmonics, determining the characteristic tonal color of each instrument.\r
\r
In **optics**, laser cavities operate under analogous principles. Mirrors act as fixed ends for electromagnetic waves, quantizing the longitudinal emission modes. The spectral separation between consecutive modes depends inversely on cavity length.\r
\r
The transition to **two-dimensional systems** (membranes) or three-dimensional systems (acoustic cavities) generalizes the concept, although the spectrum ceases to be harmonic and modal shapes involve special functions such as Bessel functions or spherical harmonics.\r
\r
> [!TIP]\r
> The mathematical structure of normal modes reappears in very different physical systems: the resemblance between the vibrating string and the hydrogen atom is not superficial; both obtain discrete spectra by the same mechanism of boundary conditions.\r
\r
## Deep physical interpretation\r
\r
The stationary character of the pattern does not mean the string is at rest: each point experiences a transverse displacement [[desplazamiento_transversal]] whose amplitude depends on its position, but the pattern shape does not travel. Energy flows continuously between kinetic energy (maximum when the string crosses equilibrium) and elastic potential energy (maximum at instants of greatest curvature).\r
\r
Nodes are points of **permanent destructive interference**: the two traveling waves always arrive with opposite phases, canceling displacement but not tension. Antinodes are points of **permanent constructive interference**: phases coincide and amplitudes add, producing double excursion.\r
\r
> [!WARNING]\r
> A common error is thinking that nodes have no dynamics. In reality, they experience maximum shear tension variations and are the points with greatest material deformation gradient.\r
\r
## Order of magnitude\r
\r
For typical string instruments, the vibrating length [[longitud_cuerda]] ranges from 0.3 m to 0.7 m, and the propagation velocity [[velocidad_propagacion]] from 100 m/s to 500 m/s. This places the fundamental frequency [[frecuencia_fundamental]] between 70 Hz and 800 Hz, the range of low and mid musical notes of the instrument. Higher modes can reach several kHz before material inharmonicity makes the ideal model inadequate.\r
\r
## Personalized resolution method\r
\r
For a standing wave problem on a string with fixed ends, the systematic procedure is:\r
\r
1. **Identify mode [[numero_armonico]]**: determine whether the problem asks for the fundamental (mode one) or a higher harmonic.\r
2. **Calculate [[longitud_onda_estacionaria]]**: apply the quantization relation with [[longitud_cuerda]] and [[numero_armonico]].\r
3. **Calculate [[frecuencia_modo]]**: use the frequency relation with [[velocidad_propagacion]] and [[numero_armonico]], or alternatively multiply [[longitud_onda_estacionaria]] by [[frecuencia_modo]] to verify consistency with [[velocidad_propagacion]].\r
4. **Locate nodes and antinodes**: use [[numero_armonico]] and [[longitud_cuerda]] to obtain exact positions.\r
5. **Verify coherence**: the number of antinodes must be [[numero_armonico]] and the number of nodes must be [[numero_armonico]]+1.\r
\r
> [!NOTE]\r
> The coherence check in step 5 catches most boundary condition application errors before delivering the final result.\r
\r
## Special cases and extended example\r
\r
**Fundamental mode (n equal to one)**: the string forms a single arc. Exactly half a wavelength fits in the string length. This is the mode of lowest frequency and greatest wavelength.\r
\r
**Case of very large n**: very high modes have very small wavelengths. Quantization remains valid, but in real strings flexural stiffness raises frequencies above the ideal prediction, producing inharmonicity.\r
\r
**Extended example — violin**: a violin string has a vibrating length of approximately 0.33 m. When the musician presses the string against the fingerboard, they shorten [[longitud_cuerda]], which increases [[frecuencia_fundamental]] inversely proportional and produces a higher-pitched note. The rich timbre of the violin results from the bow simultaneously exciting dozens of harmonics with relative amplitudes that depend on the exact point of contact.\r
\r
## Real student questions\r
\r
**"Why are nodes always at the ends of the string?"**\r
\r
The ends are physically anchored to rigid elements (nut and bridge). The material prevents any transverse movement, permanently forcing zero amplitude at those points. This fixed boundary condition is what quantizes the entire spectrum of allowed modes.\r
\r
**"Can a standing wave exist with a single node?"**\r
\r
No. The minimum is two nodes, at the ends. The fundamental mode has exactly those two end nodes and a central antinode. A single node would require the string to be unanchored at the other end, which completely changes the boundary conditions and resulting spectrum.\r
\r
**"What happens if the ends are not perfectly fixed?"**\r
\r
In real strings, supports have finite mechanical impedance, allowing small displacements. This slightly modifies resonance frequencies from the ideal model and attenuates oscillations due to energy losses in the supports.\r
\r
## Cross-cutting connections and study paths\r
\r
Standing waves connect directly with **wave superposition** (prerequisite), with the concepts of **resonance** and **natural frequencies**, and anticipate **quantum mechanics** where the same formalism produces discrete energy spectra. The study of **tubes with fixed or open ends** generalizes the same pattern with different boundary conditions.\r
\r
To deepen understanding: study inharmonicity in real strings (Rayleigh model), modes in membranes (Bessel functions) and three-dimensional acoustic cavities.\r
\r
## Final synthesis\r
\r
Standing waves in strings with fixed ends result from the interference between traveling waves reflected in a bounded domain. Boundary conditions simultaneously quantize wavelength and frequency, producing a complete harmonic series. Mode [[numero_armonico]] is completely characterized by [[numero_armonico]] antinodes, [[numero_armonico]]+1 nodes and a frequency that is exactly [[numero_armonico]] times the fundamental frequency [[frecuencia_fundamental]].\r
`;export{e as default};
