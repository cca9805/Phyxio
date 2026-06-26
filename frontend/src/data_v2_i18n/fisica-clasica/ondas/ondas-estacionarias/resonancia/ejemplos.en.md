# Exam-type example

## Problem statement

An inertia-spring system consists of a 0.5 kg body attached to a spring with elastic constant 200 N/m. The system is subjected to a harmonic external force of amplitude 10 N. Knowing that the system has a quality factor of 20, determine:

a) The natural frequency of the system
b) The oscillation amplitude when the driving frequency exactly matches the natural frequency
c) The bandwidth of the resonance curve

## Data

- System inertia: [[masa]] = 0.5 kg
- Restoring constant: [[constante_restauradora]] = 200 N/m
- External force amplitude: F₀ = 10 N
- Quality factor: [[factor_calidad]] = 20
- Driving frequency: [[frecuencia_forzada]] = [[frecuencia_natural]] (for part b)

## System definition

The physical system consists of a damped and driven harmonic oscillator, constituted by a point body attached to an ideal spring and subjected to a harmonic external force. The system operates in steady state after sufficient time to dissipate initial transients.

The relevant magnitudes are the body inertia, the spring constant providing the restoring force, and the quality factor characterizing the system's energy losses.

## Physical model

We apply the damped and driven harmonic oscillator model in steady state. This model relates three fundamental magnitudes: the natural frequency [[frecuencia_natural]] determined by the system inertia [[masa]] and stiffness [[constante_restauradora]], the forced amplitude [[amplitud_forzada]] depending on the quality factor [[factor_calidad]], and the external driving frequency [[frecuencia_forzada]].

The fundamental hypotheses are:

- The spring obeys Hooke's law (linear behavior)
- Damping is viscous and linear (proportional to velocity)
- The external force is purely harmonic (without components of other harmonics)
- The system has reached steady state (transients have been dissipated)

## Model justification

The model is appropriate because:

- The spring deformations with expected amplitudes remain in the typical linear range of metal springs (less than 10% relative deformation)
- The moderate quality factor (20 units) indicates dominant viscous damping without significant nonlinear effects
- The pure harmonic force is a reasonable idealization for well-designed electromechanical exciters
- The establishment time for this quality factor is approximately twenty cycles, reasonably achievable in a laboratory experiment

## Symbolic solution

For part a, we apply the system natural frequency formula:

{{f:frecuencia_natural_sistema}}

Solving for the natural frequency:

[[frecuencia_natural]] = (1/(2π)) × √([[constante_restauradora]]/[[masa]])

For part b, at resonance the amplitude simplifies considerably. The phase shift between force and displacement is ninety degrees, and the amplitude depends exclusively on damping:

[[amplitud_forzada]] = F₀ / (b × [[frecuencia_natural]])

Where b is the damping coefficient, related to the quality factor through:

[[factor_calidad]] = [[frecuencia_natural]] × [[masa]] / b

Combining these relations, we obtain:

[[amplitud_forzada]] = (F₀ × [[factor_calidad]]) / ([[constante_restauradora]])

For part c, the bandwidth results directly from the quality factor:

[[ancho_banda]] = [[frecuencia_natural]] / [[factor_calidad]]

## Numerical substitution

Part a:

Substituting the values, the natural frequency is approximately 3.18 Hz.

Part b:

Substituting the values, the resonance amplitude is 1.0 meter.

Part c:

The bandwidth results from dividing the natural frequency by the quality factor, obtaining approximately 0.16 Hz.

## Dimensional validation

The dimensions of the results are consistent:

- Natural frequency: square root of force per length divided by inertia yields units of inverse time, that is, hertz
- Amplitude: force divided by damping coefficient times frequency yields units of length, that is, meters
- Bandwidth: frequency divided by dimensionless factor yields units of frequency, that is, hertz

## Physical interpretation

The natural frequency of 3.18 Hz corresponds to moderately rapid oscillations, approximately three complete cycles per second. This value is reasonable for a laboratory inertia-spring system with the specified inertia and stiffness.

The resonance amplitude of 1.0 meter is considerably large, indicating that the system with quality factor 20 significantly accumulates energy from the external force. In a real situation, this amplitude might exceed the linear range of the spring, suggesting that the model might need nonlinear corrections or that the system requires protection against excessive amplitudes.

The bandwidth of 0.16 Hz indicates a moderately selective resonance. The system responds significantly only when the driving frequency is within approximately 0.08 Hz of the natural frequency (half-width at half-height). This implies that tuning must be precise to obtain maximum response.

---

# Real-world example

## Context

AM radio receivers use LC resonant circuits to select the desired station among all signals arriving at the antenna. Each station transmits at a specific carrier frequency, and the receiver's resonant circuit must be tuned to that frequency to capture it preferentially.

Consider an AM radio receiver that must tune to stations in the range of 530 kHz to 1700 kHz. The tuned circuit uses a variable capacitor whose capacitance can be adjusted between 50 pF and 500 pF. The inductor has a fixed inductance that must be determined to cover the entire required frequency range.

## Physical estimation

The resonance frequency of an LC circuit follows a mathematical structure analogous to the mechanical oscillator, with inductance L representing magnetic flux inertia (similar to mechanical inertia) and capacitance C representing charge storage capacity (inversely analogous to stiffness).

To cover the complete AM frequency range with the available capacitance range, we calculate the necessary inductance. The frequency is inversely proportional to the square root of the product of inductance and capacitance.

For the maximum frequency (1700 kHz) we use the minimum capacitance (50 pF), and vice versa. Solving for inductance yields an expression where L is inversely proportional to the square of the frequency multiplied by the capacitance.

For a frequency of 530 kHz and capacitance of 500 pF, the calculation yields approximately 180 microhenries.

We verify with 1700 kHz and 50 pF, obtaining approximately 175 microhenries.

The consistency between both calculations confirms that an inductance of approximately 180 μH allows covering the entire AM frequency range with the specified variable capacitor.

The quality factor of these circuits typically exceeds 50, providing sufficient selectivity to separate adjacent stations spaced by 10 kHz (standard separation in AM).

## Interpretation

The LC resonant circuit acts as a frequency selective filter. By turning the radio dial, the capacitance of the variable capacitor is varied, shifting the natural frequency of the circuit. When this natural frequency coincides with the carrier frequency of a station, the circuit enters resonance and efficiently transmits that signal to the subsequent amplifier.

The high quality factor (Q > 50) guarantees that the circuit responds significantly only to the tuned frequency, rejecting nearby stations. Without this selectivity, all stations would be heard simultaneously superimposed. Electrical resonance, analogous to mechanical resonance, allows selecting specific signals from a complex spectrum.
