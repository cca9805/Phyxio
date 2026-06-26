const e=`## Ideal model\r
\r
The ideal simple pendulum model treats the mass as point-like and the string as inextensible. The goal is not to describe every detail of reality, but to capture the dominant cause of the period: gravity provides restoration and length sets the geometric scale of the oscillation. Under that framework, [[L]], [[g]], [[theta]], [[theta0]], [[T]], and [[omega0]] are enough to make useful predictions.\r
\r
The advantage of the ideal model is that it separates the essential from the secondary. If the amplitude is small, the period depends mostly on [[L]] and [[g]]. If the amplitude grows, the prediction should no longer be taken as exact, but as a first-order approximation.\r
\r
## Hypotheses\r
\r
The hypotheses are clear: point mass, massless string, fixed suspension point, secondary friction, and small angles. It is important to state them before calculating because the most common mistake is not algebraic, but model-related. A correct formula can still give a wrong answer if it is applied outside its domain.\r
\r
In a typical problem, [[phi]] and the time reference should also be fixed. That avoids confusing an initial condition with a real change in the system. When [[theta0]] is very small, linearization works; when it is no longer small, the sinusoidal solution ceases to represent the motion faithfully.\r
\r
## Quantitative validity domain\r
\r
A practical criterion is to treat initial angles below about 0.35 rad as a reasonable range for the linear model in school laboratories. In that range, the period changes little with amplitude and the relation between [[T]], [[omega0]], and [[f]] is very stable. If the measured period changes systematically when [[theta0]] increases, the approximation is no longer sufficient.\r
\r
A sensitivity criterion also helps: doubling [[L]] does not double [[T]]; it increases it according to a square root. That moderate response is useful for spotting absurd estimates before closing the exercise. With a [[g]] very different from Earth's or with extreme lengths, it is worth checking whether the experimental scenario is still comparable.\r
\r
## Model failure signals\r
\r
The first failure signal is that observed period depends on amplitude. The second is that the phase looks reasonable but the times of maxima do not match [[T]]. The third appears when the time trace of [[theta]] no longer looks nearly sinusoidal. At that point, the nonlinear equation and energy [[E]] provide a more faithful reading.\r
\r
Another common signal is unit confusion. A [[L]] in centimeters or a frequency in Hz compared with an angular frequency in rad/s can create a prediction that looks clean but is physically inconsistent.\r
\r
## Extended or alternative model\r
\r
When it is time to switch to an alternative model: if the relative change in [[T]] exceeds 5% when comparing two amplitudes under the same setup, the linear model is no longer the best reference. In that case, you should move to the nonlinear equation or use energy for finite amplitudes.\r
\r
Effective damping can also be added if the real system loses energy visibly. The extended model does not replace the ideal one; it corrects it when the experimental environment demands it. That preserves physical clarity without sacrificing fidelity.\r
\r
## Operational comparison\r
\r
Comparing models does not mean always choosing the most complex one. The best model is the one that explains the data well with the fewest false assumptions. The ideal model is preferred when amplitude is small and measurements are consistent. The alternative model is preferred when behavior changes with amplitude or when energy [[E]] no longer remains approximately constant.\r
\r
Practical rule: start with the ideal model, check the validity range, and change models only when a clear physical signal appears. That sequence avoids overfitting and improves the interpretation of experimental results.`;export{e as default};
