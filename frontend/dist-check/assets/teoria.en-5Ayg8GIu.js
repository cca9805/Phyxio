const e=`# Theory of the Overdamped Regime

## Conceptual context

The overdamped regime occurs when a linear oscillatory system has enough dissipation to avoid periodic crossing of equilibrium. It does not mean that the system is optimally designed or that it returns instantly. It means that energy loss dominates the natural tendency to oscillate, producing a non-oscillatory return formed by two real exponential modes.

In this leaf, [[gamma]] measures effective damping and [[omega0]] sets the natural scale. From that comparison one decides whether the return lies above the critical boundary. The central question is how to predict a return without oscillation while detecting whether excessive damping makes the response too slow.

## 🟢 Essential level

The essential idea is to separate absence of oscillation from speed. An overdamped system ideally does not rebound, but it may take longer to approach equilibrium than a critically damped system. Therefore, adding damping is not automatically an improvement. It may be useful when overshoot is dangerous, but harmful when a fast response is required.

The physical condition is read by comparing effective dissipation with the natural scale. If dissipation exceeds that scale, the characteristic equation gives two real decay modes. These modes are not angular frequencies of rotation; they indicate how fast different parts of the transient disappear.

The graph of [[x]] should be read as a return history. At early times there may be a fast drop, but at later times a slow tail can remain. This explains why a heavily damped system may look safe because it does not cross equilibrium, while still being inefficient because it keeps a significant displacement for too long.

## 🔵 Formal level

The first formal step is regime classification:

{{f:condicion_sobreamortiguado}}

This inequality states that the model lies above the critical boundary. Before using the time expressions, [[gamma]] and [[omega0]] must have the same inverse-time units and both must be positive. If this condition is not satisfied, the roots do not represent the overdamped regime.

The slow root is:

{{f:raices_sobreamortiguado}}

The fast root is:

{{f:raiz2_sobreamortiguado}}

Both roots are negative when the model is coherent. [[r1]] lies closer to zero and therefore governs late response; [[r2]] is more negative and describes a transient that disappears rapidly. The separation between roots increases when [[gamma]] becomes much larger than [[omega0]], which can make the slow tail more visible.

The ideal time solution is:

{{f:solucion_sobreamortiguada}}

This expression adds two real exponentials. [[C1]] and [[C2]] are not universal constants; they depend on initial position and velocity. Therefore, knowing [[gamma]] and [[omega0]] is not enough to draw a specific curve. The correct order is to classify the regime, compute the roots, determine the constants, and then evaluate [[x]] at the relevant times.

## 🔴 Structural level

Structurally, the overdamped regime belongs to linear second-order systems with equivalent viscous damping. The model assumes that the dissipative force is proportional to velocity and that the effective stiffness remains constant during motion. Under these assumptions, the dynamics reduces to a characteristic equation with two real roots.

The word equivalent matters. A hydraulic closer, a mechanical sensor, or a support with internal losses may not have purely viscous friction, but it can behave as if it had it within a window of amplitudes and speeds. Outside that window, stops, dry friction, turbulence, heating, or nonlinear stiffness can break the simple reading of [[r1]] and [[r2]].

It is also necessary to distinguish free response from forced response. This leaf describes return after an initial disturbance, not a system dominated by a periodic external force. If continuous excitation is present, the observed curve may contain a steady component that does not belong to the double exponential decay.

## Deep physical interpretation

Overdamping reveals a useful paradox: removing oscillation does not always reduce response time. Increasing [[gamma]] removes the tendency to cross equilibrium, but the slow root may approach zero. The dominant mode then decays slowly. In a measuring instrument, this can avoid pointer rebound but delay the final reading.

The physical reading must ask what is being optimized. If the main criterion is avoiding overshoot, moderate overdamping can be acceptable. If the main criterion is fast settling, critical damping is usually a better reference. This leaf teaches that decision through roots rather than through visual appearance alone.

## Order of magnitude

If [[omega0]] is around 10 rad/s and [[gamma]] only slightly exceeds it, the roots have scales from a few s^-1 to several tens of s^-1. Settling may occur in tenths of a second. If [[gamma]] grows strongly, for example 100 rad/s with [[omega0]] equal to 10 rad/s, [[r2]] becomes very negative while [[r1]] may remain comparatively close to zero; the fast mode vanishes and the slow mode dominates.

A quick check is to inspect sign and scale. [[r1]] and [[r2]] must have units of s^-1 and negative values. The products [[r1]][[t]] and [[r2]][[t]] must be dimensionless inside exponentials. [[C1]], [[C2]], and [[x]] must share the unit of length or of the displaced quantity. If an exponential receives a dimensional argument, the calculation is physically wrong.

## Personalized resolution method

First identify whether the problem asks for regime classification or for a time response. For classification, compare [[gamma]] with [[omega0]]. For a time response, compute [[r1]] and [[r2]], determine [[C1]] and [[C2]] from initial conditions, and evaluate [[x]] at the requested [[t]]. Reversing that order can produce a formally written curve with the wrong physical regime.

Then interpret the curve. Ask whether [[x]] changes sign, whether the fast mode has already disappeared, whether the slow mode fits the allowed time, and whether the linear assumptions are credible. A correct answer does not end with a number; it ends with a decision about speed, safety, and model validity.

## Special cases and extended example

One special case occurs near the critical boundary. If [[gamma]] exceeds [[omega0]] only slightly, the two roots can be close and the response may resemble critical damping during part of the transient. Mathematically the classification is still overdamped, but the practical difference may depend on experimental tolerance.

Another case occurs with excessive damping. At first it seems desirable because it removes rebound, but the slow root can make settling very long. A door closer may avoid impact but remain open too long; a sensor may avoid oscillation but provide a late reading.

## Real student questions

A common question is whether overdamped means more stable. It is stable if both roots are negative, but not necessarily more useful. Another question is why two exponents appear. They arise because the second-order system carries two independent initial conditions: position and velocity. These are combined into [[C1]] and [[C2]].

Students also ask whether [[r1]] or [[r2]] are frequencies. They are not in this regime. They are decay rates. The absence of an imaginary part in the roots removes ideal oscillation, so the graph should show return without sustained cycles.

## Cross-cutting connections and study paths

This leaf is best understood after underdamping and critical damping, because the three leaves form the complete classification of damped free regimes. It also connects with the mass-spring oscillator, where [[omega0]] and the second-order structure appear, and with forced systems, where the response no longer depends only on initial conditions.

## Final synthesis

The overdamped regime teaches how to read a non-oscillatory return as the sum of two real decays. The final competence is deciding whether extra damping fulfills the physical objective or merely removes rebound at the cost of slow response.
`;export{e as default};
