# Models

## Ideal model

The ideal model treats the string as a one-dimensional, flexible, homogeneous medium under uniform tension. The disturbance is transverse and has small amplitude, so the string geometry barely changes the mean tension. In that regime, [[T]] and [[mu]] determine the speed [[v]], and fixed ends select integer values of [[n]].

The string is not modeled as a rigid rod or as one global spring. It is modeled as a continuous mass distribution that transmits a local disturbance. Therefore the modal frequency [[f_n]] does not depend only on how much string there is, but on the balance between vibrating span, pull, and linear inertia.

## Hypotheses

- The string has approximately uniform [[mu]] over the vibrating span.
- The tension [[T]] is nearly constant during oscillation.
- The ends behave as fixed nodes.
- The transverse amplitude is small compared with [[L]].
- Bending stiffness and friction are negligible at first order.
- The mode [[n]] is an integer and is identified with the visible antinode count.

These hypotheses allow one unique speed [[v]] and a discrete family of modes. If one of them fails, the calculation may still return a number, but that number no longer faithfully represents a real string.

## Quantitative validity domain

As an operational criterion, the model works well when the maximum amplitude is only a few percent of [[L]], when the string tension does not change noticeably during vibration, and when the modal wavelength [[lambda_n]] is much larger than the string diameter. In introductory laboratory work, the first modes usually satisfy these conditions.

The frequency scale should also be checked. For visible strings from tens of centimetres to about one metre, an [[f_n]] from tens to thousands of hertz is reasonable. If the result falls in megahertz or millihertz for an ordinary string, the quantitative domain is warning about a unit mistake or an impossible mechanical parameter.

## Model failure signals

A first failure signal appears when high modes are not almost regular multiples of the fundamental. This often indicates bending stiffness or nonideal support conditions. Another signal appears if the standing pattern deforms, drifts, or dies before it can be read clearly.

The model also fails if [[T]] changes during oscillation, if [[mu]] varies strongly along the string, or if an end does not behave as a node. In those cases, [[f_n]] is no longer a clean reading of the ideal model and starts depending on construction details.

## Extended or alternative model

An extended model includes string stiffness, damping, supports with finite impedance, or tension depending on amplitude. In real instruments, these corrections explain inharmonicity, energy loss, and timbre changes. The pattern remains recognizable as standing, but its frequencies no longer fit the ideal series exactly.

Another alternative is an experimental resonance model: sweep the external frequency and measure response amplitude. That approach does not assume every mechanical parameter from the start; it identifies peaks of [[f_n]] and then interprets their deviations.

## Operational comparison

| Aspect | Ideal model | Extended model |
|---|---|---|
| String | Flexible and uniform | May include stiffness, local changes, or dissipation |
| Ends | Perfect fixed nodes | Supports with small motion or real contact |
| Modes | Almost harmonic series | Shifted or broadened modes |
| Use | Basic calculation of [[v]], [[lambda_n]], and [[f_n]] | Fine tuning, real instruments, and measurements |

Moving to the extended model does not invalidate the main idea. It refines it when the real string shows effects that the ideal model deliberately ignored.
