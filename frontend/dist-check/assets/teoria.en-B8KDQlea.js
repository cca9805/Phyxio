const e=`# Theory of Resonance

## Conceptual context

Resonance studies the maximum response of an oscillator when it is driven periodically. It is not enough to say that an external force acts on the system; that belongs to forced oscillation. Here the question is more specific: as [[omega_f]] is varied, where does the amplitude [[X]] become maximum, and how do [[b]], [[m]], and [[k]] limit or shift that maximum?

The phenomenon appears when the source supplies energy at a rate compatible with the internal dynamics of the system. If dissipation is small, response can grow strongly around a critical frequency. If dissipation is large, the peak becomes lower, broader, or may cease to be a clear displacement resonance.

## 🟢 Essential level

The essential idea is frequency comparison. An oscillator has its own internal scale, while the source imposes another external scale. Resonance occurs when the frequency sweep reaches a zone where the system absorbs energy especially efficiently and amplitude reaches a maximum.

That maximum does not mean that the system oscillates by itself. In steady state it still follows the external source. What changes is the efficiency of energy transfer: each cycle adds motion with favorable timing, and damping determines how much energy is lost before the next cycle.

Resonance is not automatically a disaster. In musical instruments, sensors, or filters it can be useful because it amplifies a specific frequency. In bridges, engines, or structures it can be dangerous because moderate excitation produces excessive response. The physical criterion is not "large amplitude" in isolation, but large amplitude relative to tolerances and to the width of the critical zone.

This is why selectivity matters. A high, narrow peak requires very accurate control of operating frequency. A lower, broader peak may look less dramatic, but it affects a wider range of frequencies. The didactic reading must connect three elements: where the peak is, how high the response becomes, and how selective the system is.

## 🔵 Formal level

Formally, the starting point is the steady amplitude curve of the forced oscillator. For each value of [[omega_f]], amplitude [[X]] is determined by the competition among stiffness, inertia, and damping:

{{f:amplitud_respuesta}}

This relation does not declare resonance by itself. It is a curve: one must observe how [[X]] changes while [[omega_f]] is scanned. Displacement resonance is located by searching for the maximum of that curve, provided damping allows a real peak and the linear model remains valid.

The angular frequency of the displacement peak is estimated by:

{{f:frecuencia_resonancia}}

The expression shows two important ideas. First, the maximum does not coincide exactly with [[omega0]] when [[b]] is not negligible. Second, if the dissipative term is too large, the displacement maximum is no longer well defined as an ordinary resonance peak. This prevents calling every forced oscillation near the natural frequency resonance.

The selectivity of the peak is summarized by the quality factor:

{{f:factor_calidad}}

A large [[Q]] means low relative dissipation, a narrow peak, and strong sensitivity to small changes in [[omega_f]]. A small [[Q]] means a more damped and less selective response. In real problems, [[Q]] helps decide whether one must avoid a precise frequency or control a broader band.

The operational resonance criterion is expressed as a comparison between operating frequency and peak position:

{{f:criterio_resonancia}}

This criterion must be read carefully. Exact equality is an idealization; in a real curve, what matters is whether [[omega_f]] lies inside the high part of the peak. That zone depends on [[Q]], on the admissible tolerance for [[X]], and on the validity of the linear model.

## 🔴 Structural level

Structurally, resonance is a curve reading, not a single datum. A large value of [[X]] can come from a large [[F0]], a small [[k]], or a frequency close to the peak. To separate those causes, one must inspect the dependence of [[X]] on [[omega_f]], not only the displacement measured at one frequency.

Damping [[b]] acts at two levels. It lowers the maximum because it dissipates energy every cycle, and it shifts the maximum relative to [[omega0]]. This double function explains why adding damping can be effective in structural safety even if it does not substantially change the natural frequency.

It is also necessary to distinguish resonance from transient response. If measurement is taken during start-up, the signal may mix free oscillation and forced response. The resonant peak is defined in steady state, when the free response has decayed and the amplitude-frequency curve represents a stable property of the system.

In design, the structural criterion is to compare three scales: operating frequency [[omega_f]], critical frequency [[omega_r]], and the width associated with [[Q]]. If operating frequency lies in a dangerous zone, one may change [[m]], [[k]], [[b]], or the excitation itself. Each intervention moves a different part of the problem.

## Deep physical interpretation

Resonance is a condition of efficient energy transfer. The external source does not need to be enormous: if it pushes with the right timing, the system accumulates response cycle after cycle until dissipation balances incoming energy. Steady state is not infinite energy, but a balance between supply and loss.

The comparison between [[omega0]] and [[omega_r]] gives a fine physical reading. [[omega0]] describes an ideal internal scale of the system; [[omega_r]] describes where the amplitude maximum appears under forcing and damping. With weak damping they are very close, but didactically they should not be identified without checking conditions.

## Order of magnitude

In laboratory mechanical systems, [[omega0]] may range from a few rad/s to hundreds of rad/s. A [[Q]] of 2 or 3 already shows some selectivity, while values of 20 or 50 produce narrow peaks that require fine frequency sweeps. The amplitude [[X]] must be compared with admissible lengths: millimeters in precision machines, centimeters in flexible setups, or much smaller values in sensors.

Order of magnitude also helps detect mistakes. If the calculation gives a huge peak with large [[b]], the dissipative term was probably omitted. If [[omega_r]] lies far from [[omega0]] with small damping, units for [[b]], [[m]], or [[k]] should be checked.

## Personalized resolution method

First identify the system parameters: [[m]], [[k]], and [[b]]. Then compute or estimate [[omega0]] if the problem provides it as the natural scale. Next locate [[omega_r]] and compute [[Q]] to decide whether the peak is narrow or broad. Only then compare operating frequency [[omega_f]] with the critical zone.

If the exercise asks for a specific amplitude, use the response curve to compute [[X]] at that frequency. If it asks whether resonance occurs, one isolated calculation is not enough: explain whether [[omega_f]] coincides with the maximum or lies near it according to peak width. That physical sentence is often more important than the final number.

## Special cases and extended example

With very small damping, the peak appears very close to [[omega0]] and [[Q]] is large. In that case a small frequency variation changes amplitude strongly. With moderate damping, the peak lowers and shifts. With strong damping, there may be no clear displacement maximum, although forced response still exists.

Imagine a base frame working near a critical speed. If increasing [[b]] lowers the amplitude while [[omega_f]] remains fixed, the problem was not only frequency; it was energy accumulation per cycle. If changing [[k]] moves the critical frequency away from operating speed, the design prevents the sweep from crossing the maximum-response zone.

## Real student questions

"Does resonance mean infinite amplitude?" Not in a real system. The ideal undamped model can diverge, but any dissipation, material limit, or nonlinearity imposes a finite amplitude. The right question is whether that amplitude exceeds the safe range.

"Does it always occur at [[omega0]]?" Only approximately when [[b]] is small. The actual displacement peak is better described by [[omega_r]]. This difference is small in many introductory exercises, but important in design and measurement.

"Can it be seen with one measurement?" One measurement may suggest risk, but resonance is confirmed by comparing amplitude while varying [[omega_f]]. The curve is the physical evidence.

## Cross-cutting connections and study paths

Resonance connects with forced oscillation because it uses its steady response, but adds the idea of a maximum under frequency sweep. It connects with damping because [[b]] determines peak height and width. It also appears in sound, electrical circuits, instrumentation, bridges, engines, and vibration control.

After this leaf, it is useful to study normal modes, frequency response, and coupled systems. In all of them the same question returns: which frequencies excite the system strongly, and which mechanisms limit that response?

## Final synthesis

Understanding resonance means reading a response curve, not memorizing a word. You must distinguish imposed frequency, natural frequency, peak frequency, and system selectivity. The final objective is to decide whether a periodic excitation is safe, useful, or dangerous from the amplitude it produces and from the system capacity to dissipate energy.
`;export{e as default};
