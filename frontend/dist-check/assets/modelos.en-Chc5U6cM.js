const e=`# Standing Wave Models\r
\r
## Ideal model\r
\r
The ideal standing wave model for strings describes a perfectly elastic string of uniform density and constant tension, anchored at absolutely rigid ends. The superposition of two traveling waves of equal amplitude and frequency propagating in opposite directions produces a fixed spatial pattern with perfectly defined nodes and antinodes.\r
\r
Each mode frequency is an exact integer multiple of the fundamental frequency, forming a perfect harmonic series. The spatial pattern is exactly sinusoidal and does not evolve in amplitude over time.\r
\r
## Hypotheses\r
\r
- The string is a continuous medium with uniform linear density along its entire length\r
- Oscillations are small compared to the wavelength, validating the linear approximation\r
- The material is perfectly elastic, without internal dissipation or energy radiation to the environment\r
- Vibration is purely transverse, without coupling to longitudinal or torsional modes\r
- Propagation velocity is independent of frequency (absence of dispersion)\r
- The ends completely prevent transverse motion at all times\r
\r
## Quantitative validity domain\r
\r
The model is reliable within the following ranges:\r
\r
- Vibration amplitude less than 10% of the mode wavelength: [[amplitud_maxima]] below 0.1 [[longitud_onda_estacionaria]]\r
- Mode number [[numero_armonico]] less than 10 for typical strings; for [[numero_armonico]] between 10 and 20 corrections are of the order of 1%\r
- Uniform tension with variations less than 5% along the string\r
- Wavelength [[longitud_onda_estacionaria]] much greater than string diameter (ratio greater than 20 to 1)\r
- Damping frequency much less than oscillation frequency (quality factor greater than 10)\r
\r
## Model failure signals\r
\r
**Imperfect nodes**: minimum amplitude points do not reach zero in experimental measurement, indicating significant damping or imperfect boundary conditions at the ends.\r
\r
**Non-harmonic frequencies**: ratios between consecutive mode frequencies differ from the theoretical integer value, revealing inharmonicity due to string flexural stiffness.\r
\r
**End displacement**: anchor points vibrate perceptibly during oscillation, shifting resonance frequencies from model predictions.\r
\r
**Rapid decay**: amplitude decays significantly in times comparable to the oscillation period, making the undamped model inadequate.\r
\r
**Sinusoidal deviation**: for large amplitudes the pattern shape ceases to be perfectly sinusoidal, showing nonlinear effects.\r
\r
## Extended or alternative model\r
\r
**Stiff string model (Rayleigh)**: incorporates bending moment. Frequencies of higher modes rise above the ideal harmonic prediction, with a correction growing with the square of the mode number. This model applies when precision better than 1% is required for piano strings or high-stiffness wires. The switch to the extended model is necessary when measured frequencies of higher modes exceed integer multiples of the fundamental by more than 2%.\r
\r
**Model with damping**: includes viscous dissipation terms proportional to deformation velocity. Predicts exponential amplitude decay and broadening of resonance curves. Applied to strings submerged in dense fluids, materials with high internal loss coefficients, or transient response analysis.\r
\r
## Operational comparison\r
\r
| Aspect | Ideal model | Stiff string model | Damped model |\r
|---|---|---|---|\r
| Spectrum | Exactly harmonic | Growing inharmonic | Harmonic with decay |\r
| Validity at high n | Only [[numero_armonico]] below 10 | Up to [[numero_armonico]] of 20 or more | Independent of n |\r
| Nodes | Exactly zero amplitude | Exactly zero amplitude | Non-zero minimum amplitude |\r
| Application | Basic calculation | Piano, stiff strings | Strings in fluids, acoustics |\r
\r
The ideal model is sufficient for most basic physics calculations. When to switch to the extended model: if inharmonicity exceeds 2%, if working with piano strings or stiff wires at high modes, or if observable damping prevents nodes from reaching zero amplitude. The transition to the damped model is necessary when amplitude decay is comparable to the oscillation period.\r
`;export{e as default};
