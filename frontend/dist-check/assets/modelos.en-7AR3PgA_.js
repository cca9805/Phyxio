const e=`## Ideal model

The ideal harmonic model for strings assumes a perfectly flexible, homogeneous string with rigidly fixed ends. In this model, the string has no mass of its own that alters boundary conditions, and tension is uniform along its entire length.

The predictions of this model are purely harmonic frequencies where each mode n has frequency exactly n times the fundamental. Nodes are perfectly localized at the ends and symmetrically distributed for upper harmonics.

This simplified model captures the physical essence of the phenomenon and allows exact analytical calculations. It is the theoretical basis upon which understanding of more complex systems is built.

## Hypotheses

- **Perfectly fixed ends**: The attachment points are ideal nodes with permanently null displacement. Violation: a bridge with finite mass or elastic nut introduces partial movement and shifts frequencies.

- **Perfectly flexible string**: No bending stiffness, only resists tension. Violation: thick or stiff strings have inherent stiffness that raises upper harmonic frequencies above ideal values.

- **Complete homogeneity**: Linear density μ is constant throughout the string. Violation: damaged, frayed or knotted strings locally modify propagation velocity and alter the spectrum.

- **Small amplitude**: Oscillations maintain the linear regime where tension does not vary appreciably. Violation: strong blows introduce nonlinearities that generate unpredicted additional harmonics.

- **No damping**: Mechanical energy is conserved indefinitely. Violation: in real strings, dissipation from internal friction and sound radiation progressively attenuates vibration.

## Quantitative validity domain

The ideal model is valid when the following numerical conditions are met:

- Length/diameter ratio L/d > 100, guaranteeing that bending stiffness is negligible compared to tension.

- Maximum oscillation amplitude y_max < 0.01 L, maintaining the linear regime where sin(θ) ≈ θ.

- Frequencies below 5 kHz for typical musical strings, where stiffness effects are small (< 1 % deviation).

- Uniform tension with relative variations less than 5 % along the entire string.

## Model failure signals

- **Frequencies not exactly integer multiples**: If the ratio between [[f_n]] and [[f_1]] differs significantly from [[n]], **inharmonicity** appears due to string stiffness.

- **Imperfect nodes**: In the experimental graph, minimum amplitude points do not reach complete zero, indicating damping or imperfect boundary conditions.

- **Rapid decay**: If vibration disappears in less than 1 second for musical strings, damping is excessive for the conservative model.

- **Subharmonic generation**: Frequencies below the fundamental indicate nonlinear behavior or complex excitation conditions.

## Extended or alternative model

The **stiff string model** (Rayleigh, 1877) incorporates the bending moment of the string. In that reading, [[f_n]] lies above the ideal value through a correction factor that increases with the square of [[n]].

The stiffness parameter controls how far upper harmonics move away from the ideal series. This model predicts increasing inharmonicity with [[n]].

When to switch to the extended model: piano strings (especially high notes), thick wires at low tension, or when tuning precision better than 1 cent is required.

The **damped model** adds exponential temporal decay, more realistic for sound sustain predictions but mathematically more complex as the stationary nature is lost.

Switch to this model when analyzing attack transients or the temporal evolution of the sound envelope.

## Operational comparison

| Characteristic | Ideal model | Extended model (stiff string) |
|---|---|---|
| Frequency precision | Exact for small n | Superior for all n |
| Mathematical complexity | Low (algebraic) | Medium (square root) |
| Additional parameters | None | B (stiffness) |
| Application range | Thin strings, f < 5 kHz | Thick strings, entire range |
| Calculation time | Instantaneous | Fast |

The ideal model is preferable for quick estimates, conceptual instrument design and pedagogical understanding. The extended model is required for piano tuning, sound quality analysis and precise acoustic simulations.
`;export{e as default};
