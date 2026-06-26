const e=`# Exam-type example\r
\r
## Problem statement\r
\r
In a school laboratory, a simple pendulum is built with [[L]] of 0.84 m. Local gravity is [[g]] of 9.81 m/s^2. The pendulum is released from a small initial amplitude [[theta0]]. The task is to compute [[omega0]], [[T]], and [[f]], justify why the linear model is valid, and explain what changes when amplitude is no longer small.\r
\r
The exercise also asks for a physical interpretation of the sign of [[theta_dd]] when [[theta]] is positive. The answer must connect computation with physical causality.\r
\r
## Data\r
\r
- Effective length [[L]]: 0.84 m.\r
- Local gravity [[g]]: 9.81 m/s^2.\r
- Initial amplitude [[theta0]]: small, inside the linear regime.\r
- Initial phase [[phi]]: simple starting reference.\r
\r
Target quantities:\r
\r
- [[omega0]] in rad/s.\r
- [[T]] in s.\r
- [[f]] in Hz.\r
- [[E]] for an energy consistency check.\r
\r
## System definition\r
\r
We model a point mass suspended from an ideal string with a fixed support. Angular displacement [[theta]] is measured from stable equilibrium. Time [[t]] is measured from release.\r
\r
## Physical model\r
\r
Natural scale in the small-angle regime:\r
\r
{{f:omega0_ps}}\r
\r
Linear period:\r
\r
{{f:periodo_ps}}\r
\r
Temporal frequency:\r
\r
{{f:frecuencia_ps}}\r
\r
Angular evolution in time:\r
\r
{{f:ecuacion_angular_ps}}\r
\r
When amplitude is not small, the nonlinear model is required:\r
\r
{{f:ecuacion_no_lineal_ps}}\r
\r
To analyze exchange between energy forms:\r
\r
{{f:energia_ps}}\r
\r
## Model justification\r
\r
The linear model is used because [[theta0]] is small, so the restoring effect is close to proportional to angular displacement. In this range, the difference from the real period is usually below common manual timing uncertainty.\r
\r
If [[theta0]] grows systematically, the measured period drifts away from the linear value and one must move to the nonlinear model. This is the operational rule that links assumptions, measurements, and validity.\r
\r
## Symbolic solution\r
\r
First, obtain natural angular frequency:\r
\r
{{f:omega0_ps}}\r
\r
Then compute period:\r
\r
{{f:periodo_ps}}\r
\r
Then compute frequency by reciprocity:\r
\r
{{f:frecuencia_ps}}\r
\r
For time evolution:\r
\r
{{f:ecuacion_angular_ps}}\r
\r
For non-small amplitudes:\r
\r
{{f:ecuacion_no_lineal_ps}}\r
\r
For finite-amplitude energy consistency:\r
\r
{{f:energia_ps}}\r
\r
## Numerical substitution\r
\r
With [[L]] of 0.84 m and [[g]] of 9.81 m/s^2, natural angular frequency is close to 3.42 rad/s.\r
\r
With that value, period is close to 1.84 s.\r
\r
Associated frequency is close to 0.54 Hz.\r
\r
Internal consistency check: [[omega0]], [[T]], and [[f]] remain mutually coherent for linear-regime data.\r
\r
For energy, taking a reference mass of 0.05 kg and [[theta0]] of 0.1 rad gives total energy on the order of 2e-3 J. That order of magnitude is realistic for classroom setups.\r
\r
## Dimensional validation\r
\r
- [[omega0]] must have inverse-time dimension.\r
- [[T]] must keep time dimension.\r
- [[f]] must be cycles per second.\r
- [[E]] must be in joule.\r
\r
If a computed value violates these constraints, the issue is setup or unit conversion rather than physics.\r
\r
## Physical interpretation\r
\r
When [[theta]] is positive, [[theta_dd]] points in the opposite direction. That opposition is the signature of gravitational restoring torque and explains why motion returns toward equilibrium instead of diverging.\r
\r
Angular velocity [[theta_dot]] increases near equilibrium and decreases at the turning points. This behavior matches the exchange between potential and kinetic contributions represented by [[E]].\r
\r
If real data shows period growth with larger [[theta0]] or cycle-to-cycle decrease of [[E]], that implies departure from the ideal linear regime due to finite amplitude or dissipation.\r
\r
# Real-world example\r
\r
## Context\r
\r
A teacher compares two pendulums with the same small initial amplitude and different lengths to evaluate temporal sensitivity and model-validity criteria.\r
\r
## Physical estimation\r
\r
The longer pendulum should have larger [[T]] and smaller [[f]]. The dependence of [[T]] on the square root of [[L]] allows trend prediction before detailed computation. For a length change from [[L]] of 1.0 m to [[L]] of 0.25 m, the expected period scale moves from about 2.0 s to about 1.0 s, which is a clear order-of-magnitude estimate for classroom timing.\r
\r
## Comparative analysis\r
\r
Case A: [[L]] of 1.0 m.\r
\r
- [[omega0]] around 3.13 rad/s.\r
- [[T]] around 2.0 s.\r
- [[f]] around 0.5 Hz.\r
\r
Case B: [[L]] of 0.25 m.\r
\r
- [[omega0]] around 6.26 rad/s.\r
- [[T]] around 1.0 s.\r
- [[f]] around 1.0 Hz.\r
\r
The comparison shows that reducing [[L]] to one quarter reduces [[T]] to about one half. This trend matches linear-model expectations. It also provides causal reading: shorter length increases characteristic angular rate, so the oscillator repeats cycles faster under the same gravity.\r
\r
## Interpretation\r
\r
To close with an energy criterion, use:\r
\r
{{f:energia_ps}}\r
\r
With a reference mass of 0.05 kg and equal amplitude in both setups, energy of the long pendulum is about four times that of the short pendulum. This gives an extra consistency test: with other parameters fixed, energy scales with [[L]].\r
\r
The final reading is not only numerical. The example provides a concrete rule for deciding when the linear model remains sufficient and when measured deviations require the nonlinear description.\r
\r
To make the rule operational, the student can compare measured and predicted period at two amplitudes under the same setup. If relative deviation stays below five percent, the linear model remains acceptable for the intended precision. If deviation grows above that threshold, the finite-amplitude effect is no longer secondary and the nonlinear equation becomes the appropriate reference.\r
\r
This decision process is important because it prevents two frequent mistakes: trusting a formula outside its domain, and blaming random noise for a systematic drift that is actually physical. In practice, combining period comparison with an energy trend check gives a stronger diagnosis than either criterion alone.`;export{e as default};
