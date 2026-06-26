# Theory of Forced Oscillation

## Conceptual context

A forced oscillation occurs when an oscillator is not left to evolve freely but receives an external periodic excitation. The system no longer chooses the final rhythm by itself: in steady state it responds at the frequency imposed by the source. The relevant question is not only whether it vibrates, but how much it vibrates and how late it responds relative to the applied force.

This leaf studies the permanent response of a linear oscillator with mass [[m]], stiffness [[k]], and damping [[b]]. The source provides an amplitude [[F0]] and an angular frequency [[omega_f]]. The steady output is summarized by an amplitude [[X]], a phase lag [[delta]], and a time position [[x]]. The derivatives [[x_d]] and [[x_dd]] appear because the full equation includes velocity and acceleration.

## 🟢 Essential level

The essential idea is that an external force can impose a rhythm on the system. If an object attached to a spring is pushed periodically, its final response does not necessarily keep its free natural frequency; it synchronizes with the driving force. What changes as the driving rhythm changes is the amplitude obtained and the lag of the response.

At low frequency, the system often behaves almost as if the force were applied slowly: stiffness dominates. At high frequency, inertia dominates and the system cannot follow easily. Between those behaviors, a large-response region may appear, which is studied more specifically in resonance. Here the goal is to construct the general steady response.

Phase lag is as important as amplitude. Two systems may vibrate with similar amplitudes and still respond with different delays. That delay indicates how stiffness, inertia, and dissipation share the response during a cycle.

## 🔵 Formal level

The dynamic model is written as a balance among inertia, dissipation, elasticity, and external force:

{{f:ecuacion_diferencial_forzada}}

Once the free transient has decayed, the steady-state amplitude is computed with:

{{f:amplitud_forzada}}

This relation does not merely say that more force produces more motion. The denominator expresses the system dynamic opposition. The elastic term [[k]] competes with the inertial term involving [[m]] and the imposed frequency, while [[b]] introduces velocity-proportional dissipation.

The angular lag between force and response is computed through:

{{f:desfase_forzada}}

Finally, the steady position is represented by:

{{f:respuesta_estacionaria}}

The recommended formal order is to state the equation, compute [[X]], compute [[delta]], and then write [[x]]. If phase lag is skipped, the time response may have the correct amplitude but an incomplete physical reading.

Formally, three output levels must also be distinguished. [[X]] is an amplitude number for one specific frequency; [[delta]] is an angular reading of delay; [[x]] is the time signal combining both. The differential equation also contains [[x_d]] and [[x_dd]], which are not algebraic decoration: they represent the mechanisms through which damping and inertia enter the balance. This separation prevents treating the whole problem as a single amplitude formula.

## 🔴 Structural level

Structurally, this leaf describes the permanent regime of a linear system. It does not describe the full start-up. At the beginning, a transient part inherited from initial conditions coexists with a forced part. After enough time, the transient dissipates and only the response synchronized with the source remains.

The model assumes that the external force is sinusoidal, [[m]], [[k]], and [[b]] are constant, and the amplitude does not activate nonlinearities. If stiffness changes, damping depends on velocity in a complex way, or the source is not sinusoidal, this formulation is no longer sufficient.

The distinction from resonance is didactically important. Forced oscillation studies the response at any imposed frequency; resonance studies the region where that response becomes especially large. This leaf is the operational basis for understanding the resonant maximum later.

If the system is measured in the laboratory, this structure is checked by waiting several cycles before taking data. A measurement taken too early mixes free motion with forced motion. A response that is too large may activate nonlinear effects. Steady state is therefore a powerful idealization, but it requires a carefully chosen experimental window.

## Deep physical interpretation

Forced response shows that a system is defined not only by internal properties but also by how it is excited. The same mass and spring may respond weakly or strongly depending on external frequency. Therefore knowing the natural frequency is not enough; the source must be compared with the full dynamic opposition.

Phase lag reveals information that amplitude alone does not contain. When the response is nearly in phase, the system follows the force. When lag grows, energy is stored and dissipated differently during the cycle. In real applications, this delay may matter as much as amplitude, for instance in actuators, sensors, and vibrating structures.

## Order of magnitude

If [[F0]] is 10 N and [[k]] is 100 N/m, the low-frequency quasi-static response is of order 0.1 m. If [[omega_f]] increases, the inertial term can reduce or modify that reading. The product [[b]][[omega_f]] has the units of effective stiffness and must be compared with [[k]] and with [[m]] times frequency squared.

A quick check is dimensional: [[X]] must be in meters, [[delta]] in radians, and [[omega_f]][[t]] must be dimensionless. If the amplitude denominator is interpreted as force instead of effective stiffness, the result loses physical meaning.

## Personalized resolution method

First identify whether the problem asks for amplitude, phase, or a time signal. For amplitude, focus on [[F0]], [[k]], [[m]], [[b]], and [[omega_f]]. For phase, check the sign of the elastic-minus-inertial term and the quadrant of [[delta]]. For [[x]], do not compute the time signal until [[X]] and [[delta]] are known.

Then interpret the result using steady-state language. Ask whether the response is large or small relative to the elastic scale, whether the phase lag is negligible or relevant, and whether the transient can already be ignored. This interpretation separates general forced response from the specific study of resonance.

## Special cases and extended example

Under slow forcing, the response resembles a static deformation following the force. Under very fast forcing, mass prevents the system from following the drive and amplitude may be small. In an intermediate region, amplitude may grow noticeably, especially if damping [[b]] is low.

For example, a machine applying a small periodic force may still produce a noticeable response if [[omega_f]] lies in a sensitive dynamic region. The conclusion is not automatically "there is resonance"; first the steady response is computed and the size of [[X]] is judged.

## Real student questions

A common question is whether the response uses the natural frequency. In forced steady state, the response uses the external force frequency. Another question is why phase lag appears. It appears because inertia, dissipation, and stiffness do not respond at the same time during the cycle.

Students also ask whether the amplitude formula includes the transient. It does not: it describes the permanent part after free motion has faded.

## Cross-cutting connections and study paths

This leaf connects with damping because [[b]] determines dissipation and phase. It connects with resonance because that leaf studies the maximum response obtained by varying [[omega_f]]. It also connects with control and mechanical vibrations, where designers choose excitations that produce or avoid motion.

## Final synthesis

Forced oscillation teaches how to move from an external periodic source to a steady response with amplitude, phase, and time signal. The final competence is deciding how imposed frequency modifies response without confusing this general analysis with the special case of resonance.
