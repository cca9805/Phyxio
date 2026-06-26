const e=`# Theory of the Underdamped Regime

## Conceptual context

The underdamped regime describes an oscillator that still crosses equilibrium, but with decreasing amplitude. It is the typical case of a vibration visible for several cycles before fading away. Dissipation is not large enough to suppress oscillation, but it removes energy during each cycle.

In this leaf, [[gamma]] measures the amplitude-loss rate, [[omega0]] sets the natural scale, and [[omega_d]] gives the angular rhythm actually observed. The curve [[x]] does not keep constant peaks: it is enclosed by an envelope [[x_env]] that decreases with time [[t]]. The phase [[phi]] only decides where in the cycle the motion begins.

## 🟢 Essential level

The essential idea is that an underdamped system combines two simultaneous behaviors: it oscillates and it fades. If only one cycle is observed, it may look like simple harmonic motion. If a longer interval is observed, each peak is smaller than the previous one. That difference is the physical signature of dissipation.

The regime is recognized because the restoring tendency still dominates over energy loss. Therefore there are equilibrium crossings and sign changes in [[x]]. Those crossings do not mean perfect energy conservation: the envelope decreases and indicates how much amplitude remains available.

Didactically, it is useful to separate cycle rhythm from amplitude loss. Rhythm is observed in the spacing between crossings; decay is observed in the reduction of peaks. Mixing them produces common errors, such as calling the dissipation rate a frequency or interpreting the limiting amplitude as instantaneous position.

## 🔵 Formal level

The first formal step is checking the regime condition:

{{f:condicion_subamortiguado}}

When it holds, the motion keeps an oscillatory part. The visible angular frequency is not exactly the undamped natural value; it is reduced by dissipation:

{{f:pulsacion_amortiguada}}

This relation requires a positive radicand. If [[gamma]] approaches [[omega0]], [[omega_d]] decreases and oscillation becomes slower before disappearing at the critical boundary. If [[gamma]] is small compared with [[omega0]], the difference between [[omega_d]] and [[omega0]] may be small.

This formula also organizes experimental interpretation. Measuring the time between maxima or crossings estimates [[omega_d]], but it does not determine [[gamma]] by itself. To find dissipation, one must inspect how peak heights change. A complete time record therefore contains two different pieces of information: horizontal rhythm and vertical reduction.

The maximum available amplitude at each instant is modeled by:

{{f:envolvente}}

The instantaneous position combines the envelope with the cosine:

{{f:solucion_subamortiguada}}

The recommended formal order is to classify the regime, compute [[omega_d]], evaluate [[x_env]] if remaining amplitude is requested, and compute [[x]] only when [[A]], [[t]], and [[phi]] are known. This order avoids using an oscillatory solution when the system can no longer oscillate.

The complete solution must pass two controls. First, the computed value of [[x]] must remain between the positive and negative bounds fixed by [[x_env]]. Second, the cosine argument must be dimensionless; if [[omega_d]][[t]] keeps units, the calculation has no physical meaning.

These controls also help connect algebra with observation. A graph that keeps the correct rhythm but exceeds its amplitude bound is not a better oscillation; it is evidence that the assumed parameters, units, or model conditions must be reviewed.

## 🔴 Structural level

Structurally, the underdamped regime belongs to linear second-order models with equivalent viscous damping. The dissipative force is assumed proportional to velocity, and parameters do not change during the transient. Under those hypotheses, the response contains an oscillatory part and an exponential envelope.

The model becomes unreliable when the amplitude activates stops, dry friction, stiffness changes, or temperature-dependent dissipation. It also no longer represents free response if a dominant periodic external force is present. In those cases, a decreasing oscillatory curve may still appear, but its parameters cannot be interpreted directly with this leaf's formulas.

The key physical structure is scale separation. [[omega_d]] governs how many cycles fit in a time interval; [[gamma]] governs how much their height decreases. A system can oscillate fast and fade slowly, or oscillate slowly and fade fast, depending on the relation between both magnitudes.

## Deep physical interpretation

Underdamping is the regime that preserves oscillatory memory. The system does not return to equilibrium in one pass: it crosses it, moves away, loses energy, and crosses again with lower amplitude. That history shows that mechanical energy is not removed instantly but dissipated progressively.

The envelope is a powerful conceptual tool because it allows energy loss to be read without following every point of the curve. If experimental maxima do not approximately follow the expected envelope, the issue is not merely numerical: nonlinear friction, external forcing, or calibration error may be present.

## Order of magnitude

If [[omega0]] is about 20 rad/s and [[gamma]] is 2 s^-1, the damped angular frequency remains close to 20 rad/s and several cycles are visible before the amplitude falls strongly. If [[gamma]] rises to 15 s^-1 with the same [[omega0]], [[omega_d]] decreases noticeably and the envelope falls quickly.

A quick check is to verify that [[omega_d]] lies between zero and [[omega0]], that [[gamma]][[t]] is dimensionless, and that [[x_env]] has the same unit as [[A]] and [[x]]. If the envelope grows with time in a free dissipative system, a sign or model error is present.

## Personalized resolution method

First identify whether the problem asks for classification, visible frequency, remaining amplitude, or a specific position. For classification, compare [[gamma]] and [[omega0]]. For visible frequency, compute [[omega_d]]. For remaining amplitude, use [[x_env]]. For instantaneous position, use the complete solution with [[phi]].

Then interpret. A correct answer must say whether oscillation is physically visible, how many cycles could be observed, and whether the decay is compatible with the real system. Computing a number is not enough; it must be connected with the shape of the curve.

## Special cases and extended example

One special case occurs when [[gamma]] is very small. The envelope decreases slowly, and for a few cycles the system appears almost undamped. Another case occurs near critical damping: [[omega_d]] becomes small, cycles spread out, and the response approaches the boundary where oscillation disappears.

In a sensor with [[A]] equal to 4 mm, [[gamma]] equal to 1 s^-1, and [[omega_d]] equal to 9 rad/s, the envelope after 2 s is reduced by an exponential factor. The curve may still cross equilibrium several times, but its peaks no longer reach the initial amplitude.

## Real student questions

A common question is whether damped means non-oscillatory. In this regime it does not: the system oscillates, but each cycle loses amplitude. Another question is why two frequencies appear. [[omega0]] is the undamped reference; [[omega_d]] is the observed rhythm when dissipation exists.

Students also ask whether [[x_env]] is a position. It is not. It is an amplitude bound. The real position [[x]] may be positive, negative, or zero inside that bound.

## Cross-cutting connections and study paths

This leaf connects directly with critical and overdamped regimes, because the three complete the classification of damped free regimes. It also prepares the study of resonance and external forces: there, an oscillation may be maintained by energy input even while dissipation exists.

## Final synthesis

The underdamped regime teaches how to read a realistic oscillation: visible cycles, decreasing amplitude, and reduced frequency. The final competence is distinguishing motion rhythm, energy loss, and the validity domain of the model.
`;export{e as default};
