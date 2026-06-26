const e=`\r
## Conceptual context\r
\r
The simple pendulum is the minimal oscillation case in mechanics: an idealized point mass moves around a fixed suspension point under gravity. Its didactic value is not complexity, but the discipline it forces on the student: define the system, identify the state, state the cause, and then read the experiment. The quantities that organize the problem are [[L]], [[g]], [[theta]], [[theta0]], [[t]], [[phi]], [[omega0]], [[T]], [[f]], [[theta_dot]], [[theta_dd]], and [[E]].\r
\r
The central physical question is easy to state but not trivial to answer: what makes the system take more or less time to repeat its motion. The answer does not live in a single variable; it comes from the balance between [[L]] and [[g]] in the linear regime, from the initial condition encoded by [[theta0]] and [[phi]], and from the way [[theta]] evolves in time. Once that is understood, the calculation stops being a recipe and becomes a modeling decision.\r
\r
In school laboratory work, the simple pendulum is a bridge between intuition and formalization. It allows the student to compare a measured period with a prediction and decide whether the chosen amplitude was actually small. That sequence matters because it shows that an equation can be correct only inside a specific domain.\r
\r
## 🟢 Essential level\r
\r
The core idea is causal: gravity drives the system back toward equilibrium and creates repeated motion. Length [[L]] sets the time scale of that motion: larger [[L]] means slower oscillation. Gravity [[g]] acts in the opposite direction: larger [[g]] means faster oscillation.\r
\r
At this level, no full equation is needed. The student only needs to answer three questions: what causes restoration, what is observed in time, and under which conditions the explanation remains valid. This prevents formula-first reasoning without physical control.\r
\r
The main validity condition is a small initial amplitude [[theta0]]. If that condition holds, the linear model is useful for prediction and comparison. If it does not hold, the same essential reasoning already signals that a richer model is needed.\r
\r
Without advanced mathematics, this level still gives a strict rule: every prediction must be linked to its validity domain.\r
\r
## 🔵 Formal level\r
\r
Here the mathematical core of the leaf appears. The natural scale of oscillation in the small-angle regime is:\r
\r
{{f:omega0_ps}}\r
\r
From that scale we obtain the linear period:\r
\r
{{f:periodo_ps}}\r
\r
The corresponding frequency is:\r
\r
{{f:frecuencia_ps}}\r
\r
And the idealized time evolution of the angle is written as:\r
\r
{{f:ecuacion_angular_ps}}\r
\r
When the amplitude is no longer small, the full nonlinear equation becomes relevant:\r
\r
{{f:ecuacion_no_lineal_ps}}\r
\r
To study energy and finite amplitudes we also use:\r
\r
{{f:energia_ps}}\r
\r
The formal point is not to memorize four different expressions, but to understand that they describe different fidelity levels. [[omega0]] and [[T]] summarize the linear regime; [[theta]] organizes the time evolution; [[theta_dd]] shows the instantaneous restoring action; and [[E]] becomes useful once amplitude is no longer small.\r
\r
In exercises, the correct formal sequence is: set SI, identify the requested quantity, apply the appropriate relation, and close with a consistency check between [[T]] and [[f]]. When working with experimental data, the initial amplitude [[theta0]] must also be checked to decide whether the small-angle approximation is still acceptable.\r
\r
A practical formal closure is cross-validation: if [[L]] or [[g]] changes, [[omega0]], [[T]], and [[f]] must change coherently. If one quantity breaks the expected trend, the issue is usually units, substitution, or an assumption used outside its domain.\r
## 🔴 Structural level\r
\r
The linear simple pendulum works under precise hypotheses. The mass is treated as point-like, the string or rod as ideal, the support point as fixed, and the amplitude as small enough for the restoring action to be nearly proportional to displacement. If one of these conditions fails, the meaning of [[T]] changes even if the formula still looks correct.\r
\r
A useful quantitative criterion is to treat initial amplitudes below about 0.35 rad as a reference in classroom practice. Below that threshold, the period usually remains close to the linear value. If the measured period grows systematically when [[theta0]] increases, the linear model no longer represents the system well and the nonlinear equation or energy must be used.\r
\r
Structure also requires a proper definition of [[phi]] and [[t]]. Knowing the period is not enough if you do not know from which instant the oscillation starts. The initial phase shifts maxima and minima without changing the physics of the period, and that distinction prevents a condition of start from being confused with a real change in the system.\r
\r
## Deep physical interpretation\r
\r
The deep reading of the simple pendulum is based on the sign of [[theta_dd]]. When [[theta]] is displaced to one side of equilibrium, the angular acceleration points to the opposite side. That opposition is not an algebraic accident; it is the signature of the gravitational restoring torque. Without that sign opposition, the motion would not be oscillatory around equilibrium.\r
\r
The quantity [[theta_dot]] adds another layer of meaning: it is maximum near equilibrium and zero at the ends, exactly where potential energy dominates. That is why [[E]] helps explain why the system speeds up and slows down during the cycle. Energy does not replace the period, but it explains the continuous exchange between displacement and speed.\r
\r
It is also important not to confuse [[omega0]] with [[f]]. Both describe repetition rate, but one is measured in rad/s and the other in Hz. Converting correctly between them avoids errors when comparing with external excitations or other oscillators.\r
\r
## Order of magnitude\r
\r
A laboratory pendulum with [[L]] between 0.1 m and 2 m and terrestrial [[g]] produces typical periods from fractions of a second to several seconds. If the result gives milliseconds for a large length or minutes for a short pendulum, there is a clear inconsistency in units or setup.\r
\r
Sensitivity matters too. Because [[T]] depends on the square root of [[L]], doubling the length does not double the period; it only multiplies it by a factor smaller than two. That simple estimate is enough to validate results without redoing the whole calculation.\r
\r
## Personalized resolution method\r
\r
1. Define the system: mass, support point, positive direction, and time reference.\r
2. Identify the regime: small-angle linear or nonlinear.\r
3. Choose the target quantity among [[T]], [[f]], [[omega0]], [[theta]], or [[E]].\r
4. Substitute values in SI and track units carefully.\r
5. Check whether [[theta0]] keeps the linear model justified.\r
6. Interpret the result with the same physics used to set it up.\r
\r
If you have time-series data, compare several cycles rather than just one. If the period changes with amplitude, the ideal model is no longer enough.\r
\r
## Special cases and extended example\r
\r
Special case 1: very small amplitude. The linear model is very stable, [[theta_dd]] is almost proportional to [[theta]], and [[T]] barely depends on amplitude.\r
\r
Special case 2: moderate amplitude. The real period grows slightly relative to the linear value, and energy [[E]] becomes more useful for interpreting the evolution.\r
\r
Special case 3: nonzero initial phase. [[phi]] shifts the start of the motion, but it does not change the length or gravity; it only changes where the oscillation begins in time.\r
\r
Extended example: if a pendulum of [[L]] = 0.90 m oscillates on Earth, the expected period is around two seconds. If the measured value is very different, the first review should not be algebraic but physical: check [[theta0]], the support point, the unit of [[L]], and the control of time.\r
\r
## Real student questions\r
\r
- Why is the simple pendulum used so much in basic physics? Because it connects simple geometry with measurable time behavior and lets students practice modeling from explicit assumptions.\r
- What controls the period more: mass or length? In this ideal model, length [[L]] and gravity [[g]] control the period; mass does not appear in the linear relation.\r
- When should I leave the linear period behind? When [[theta0]] is no longer small or when the measured period changes with amplitude.\r
- What does a nonzero initial phase [[phi]] mean? It means the pendulum does not start from the same time reference as the standard case.\r
- How do I know whether the result is reasonable? By checking order of magnitude, units, and physical trend.\r
\r
## Cross-cutting connections and study paths\r
\r
This leaf connects with forces, energy, harmonic oscillations, resonance, and linear models. It also serves as an entry point to the physical pendulum, where mass is no longer point-like and mass distribution becomes crucial.\r
\r
Suggested study paths:\r
\r
- reinforce weight force and Newton's second law,\r
- review harmonic oscillations and phase reading,\r
- compare the simple pendulum with the physical pendulum,\r
- study the nonlinear case when amplitude is not small.\r
\r
## Final synthesis\r
\r
The simple pendulum teaches a central lesson in physics: a simple relation can be powerful if used within its domain of validity. [[L]] and [[g]] determine the time scale, [[theta0]] and [[phi]] set the initial condition, [[T]] and [[f]] summarize the cycle, and [[theta_dd]] shows the instantaneous restoring action.\r
\r
Solving this topic well is not about repeating a formula; it is about justifying why that formula applies, what each quantity means physically, and when a richer model must be used. That is the difference between getting a result and understanding the system.`;export{e as default};
