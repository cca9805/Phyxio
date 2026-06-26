const e=`## Ideal model\r
The ideal model represents the branch as linear series RLC under stable sinusoidal excitation. In this frame, resonance position is captured by [[omega0]] and [[f0]], response shape by [[Q]] and [[BW]], and branch-demand estimate by [[Ires]] under given [[V]].\r
\r
This model is useful because it separates roles clearly: [[L]] and [[C]] mainly place tuning position, while [[R]] controls damping and selectivity behavior. That separation enables fast first-pass design and coherent trend checks.\r
\r
## Hypotheses\r
First hypothesis: near-linear component behavior in the operating amplitude window. Second hypothesis: excitation is periodic with well-defined frequency. Third hypothesis: losses can be represented by an effective series resistance [[R]].\r
\r
A measurement hypothesis is also required: voltage and current are treated with RMS coherence. A systems hypothesis is required too: load interaction does not dominate branch behavior in the baseline pass.\r
\r
## Quantitative validity domain\r
A practical baseline is reliable when THD <= 5%, when normalized tuning mismatch satisfies abs(f_measured - [[f0]])/[[f0]] <= 0.05, and when relative parasitic-loss indicator remains bounded, for example R_parasitic/[[R]] <= 0.20.\r
\r
For narrowband interpretation, another useful criterion is [[BW]]/[[f0]] <= 0.30. If this ratio grows too much, narrowband approximations become less trustworthy for fine design closure.\r
\r
## Model failure signals\r
A common warning is persistent mismatch between measured center response and predicted [[f0]] after unit and measurement checks. This often indicates thermal drift, coupling effects, or nonlinearity outside baseline assumptions.\r
\r
Another warning is operational: if measured branch current near resonance systematically exceeds expected [[Ires]] under comparable conditions, effective damping representation is incomplete.\r
\r
A third warning is trend inversion. If damping is increased but the observed response appears narrower under the same setup, parameter extraction or model framing should be revisited.\r
\r
## Extended or alternative model\r
The next-level model includes distributed losses, dielectric effects, thermal drift, load coupling, and full complex response fitting across frequency windows.\r
\r
The transition condition can be stated explicitly: when it is convenient to change to an alternative model is when abs(f_measured - [[f0]])/[[f0]] > 0.05, or R_parasitic/[[R]] > 0.20, or [[BW]]/[[f0]] > 0.30 in a design that needs selective behavior.\r
\r
Under those conditions, relying only on the minimal model can produce misleading closure.\r
\r
## Operational comparison\r
Ideal modeling is excellent for causal understanding, first-pass sizing, and sanity checks. Extended modeling is preferable for final specification, safety validation, and environments with strong non-ideal effects.\r
\r
These layers are complementary. Strong engineering practice starts with ideal structure, then escalates only where measured evidence and risk profile require higher fidelity.\r
\r
In implementation teams, this staged approach also improves workflow speed: quick baseline decisions remain possible, while high-risk zones receive deeper modeling effort with explicit justification.`;export{e as default};
