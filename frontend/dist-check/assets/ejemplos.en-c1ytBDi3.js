const e=`# Exam-type example

## Problem statement
A region of space in vacuum is analyzed where an electric field [[E]] oscillates sinusoidally in a specific direction. It is required to verify the consistency of this field with Maxwell's local laws, determining the necessary charge density [[rho]], the existence of magnetic sources, and the current density [[J]] required for system stability. Finally, it must be checked if the solution satisfies the electromagnetic wave equation.

## Data
- The propagation medium is absolute vacuum.
- The maximum amplitude of the electric field [[E]] is three hundred volts per meter.
- The angular oscillation frequency is three times ten to the eight radians per second.
- The medium constants are permittivity [[epsilon0]] and permeability [[mu0]].
- A propagation speed equal to the speed of light [[c]] is assumed.

## System definition
The system consists of an infinitesimal volume of empty space where no external material sources have been detected. A Cartesian coordinate system is defined where the electric field [[E]] vibrates on the Y axis and moves along the X axis. The associated magnetic field [[B]] must be determined by Faraday's induction relations. There are no physical obstacles or nearby edges distorting the field. The system is considered stationary in its sources but dynamic in its fields.

## Physical model
The problem is approached using the **local classical electrodynamics** model. Fields are assumed to be differentiable functions at every point. The fundamental relations are the Gauss, Faraday, and Ampère-Maxwell laws in their differential form:

{{f:gauss_local_e}}

{{f:gauss_local_b}}

{{f:faraday_local}}

{{f:ampere_local}}

{{f:continuidad_carga}}

{{f:onda_electromagnetica}}

## Model justification
This model is **valid** because we are analyzing the point behavior of fields in vacuum, where there are no quantum effects or significant material discontinuities. It is **assumed** that the medium is linear and isotropic, with uniform [[epsilon0]] and [[mu0]] constants. It is **considered** that the partial derivatives exist and are continuous, which allows for the direct use of the [[divE]], [[divB]], [[curlE]], and [[curlB]] operators. **Because** the system is dynamic, we must explicitly include the displacement current term in the Ampère-Maxwell law. The use of the differential formulation is superior to the integral one in this case because it allows observing the phase-to-phase interaction at each point of the wave without needing to integrate over large volumes.

## Symbolic solution
First, to determine the charge density [[rho]], we apply the divergence to the expression of the electric field [[E]]:

{{f:gauss_local_e}}

Since it is a field whose component varies only transversely to the propagation direction, the divergence [[divE]] is found to be zero. Therefore, it is concluded that the value of [[rho]] is zero.

For magnetic sources, we verify the divergence of the field [[B]] using the corresponding law:

{{f:gauss_local_b}}

We apply the [[divB]] operator on the induction vector to confirm the absence of local magnetic monopoles.

For induction, we calculate the curl of the field [[E]]. According to Faraday's law, the value of [[curlE]] must match the negative temporal variation of the magnetic field [[dB_dt]]:

{{f:faraday_local}}

From here, the functional form and amplitude of the field [[B]] are deduced. Finally, for the current density [[J]], we use the local Ampère-Maxwell law relating the curl to dynamic sources:

{{f:ampere_local}}

By isolating the current term [[J]], we check if a flow of real charges is necessary to sustain the field in that specific region, considering the displacement current:

{{f:definicion_corriente_maxwell}}

As a final structural consistency check, we verify that the system complies with charge conservation and wave propagation:

{{f:continuidad_carga}}

{{f:onda_electromagnetica}}

## Numerical substitution
We use vacuum values to illustrate consistency:
- The electric divergence [[divE]] is zero, implying that [[rho]] is zero.
- The magnetic divergence [[divB]] is zero at all evaluated points.
- The calculated curl [[curlE]] has a magnitude of three hundred international system units.
- The temporal variation of the magnetic field [[dB_dt]] exactly matches the previous value.
- When calculating the total source using the Ampère-Maxwell law, the contribution of the magnetic curl [[curlB]] exactly cancels with the displacement current proportional to [[dE_dt]], resulting in a zero current density [[J]].

## Dimensional validation
We verify the units of the displacement current term. Multiplying the unit of [[epsilon0]] (farads per meter) by the unit of [[dE_dt]] (volts per meter and second), we obtain coulombs per volt and meter multiplied by volts per meter and second. After simplifying the volts, the result is coulombs per square meter and second, which is equivalent to amperes per square meter. This final unit exactly matches the dimension of the current density [[J]], validating the dimensional consistency of the Ampère-Maxwell law in its differential form and ensuring that we are summing physically compatible magnitudes.

## Physical interpretation
The result where both [[J]] and [[rho]] are zero indicates that the field is propagating in pure vacuum, without the need for real charges or currents present at the observation point. The temporal variation of the magnetic field [[dB_dt]] acts as the source of the electric curl [[curlE]], and the variation of the electric field [[dE_dt]] acts as the source of the magnetic curl [[curlB]]. This mutual **causal interpretation** is what allows for the existence of self-sustaining electromagnetic waves traveling through the universe at constant speed.

# Real-world example

## Context
The transmission of a high-frequency radio signal emitted by an antenna located in deep vacuum, far from any terrestrial interference, is analyzed. It is sought to understand why the signal can travel thousands of kilometers without a conducting wire and without an immediate energy loss that stops its progress through interstellar space.

## Physical estimation
On a macroscopic **scale**, the **order of magnitude** of the displacement current based on [[dE_dt]] exactly compensates for the magnetic curl [[curlB]]. **Approximately**, for a commercial radio wave, the fields fluctuate millions of times per second. It is a **reasonable value** to expect that in perfect vacuum no real sources exist, which is confirmed by seeing that the divergence [[divE]] is zero. This **estimation** allows us to ensure that the signal is a pure wave that satisfies the fundamental structural relation:

{{f:onda_electromagnetica}}

## Interpretation
The persistence of the radio signal in vacuum is a direct consequence of the differential form of Maxwell's laws. Since there are no charges [[rho]] or currents [[J]] to absorb energy or distort the local field, the mutual induction between the [[E]] and [[B]] fields maintains the integrity of the information across astronomical distances. The speed [[c]] acts as the natural rhythm of this constant energy exchange, allowing light to be physics' most efficient messenger.
`;export{e as default};
