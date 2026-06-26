const e=`# Orbital Velocity Models\r
\r
## Ideal model\r
The ideal orbital-velocity model assumes a body with negligible mass compared with central [[M]] moving under a purely central gravitational force. In that framework, a circular orbit is determined by [[r]] and central mass, and [[v_orb]] is obtained without atmospheric drag or continuous thrust terms. The model is highly useful because it captures the physical core of the problem and provides clean first-order predictions.\r
\r
It also assumes spherical symmetry of the source, so dynamics depends only on radial distance. This simplification enables the use of [[mu]] as a compact parameter and supports rapid comparison among different orbits without rebuilding derivations each time. In introductory contexts, this idealization is the gateway to understanding why low orbits are faster and have shorter periods.\r
\r
## Hypotheses\r
Hypothesis 1. Central [[M]] dominates the system, so satellite mass does not significantly modify the field.\r
\r
Hypothesis 2. Dissipative forces are negligible on the analyzed timescale, including atmospheric drag.\r
\r
Hypothesis 3. Strong third-body perturbations are not dominant during the scenario considered.\r
\r
Hypothesis 4. Newtonian approximation is sufficient for the intended precision.\r
\r
Hypothesis 5. Input parameters are expressed in coherent units, especially [[r]] in meters and [[M]] in kilograms.\r
\r
These hypotheses are not decorative. They act as a validity contract. If they fail, the model may remain pedagogically informative but loses quantitative reliability for fine decisions.\r
\r
## Quantitative validity domain\r
The ideal model generally performs well where atmospheric drag is small compared with mean gravitational acceleration. In foundational practice this is true for many non-extremely-low orbits and for time windows where accumulated perturbations are still secondary.\r
\r
It is also reliable when mass asymmetry is large. In that case, treating the source as fixed introduces errors smaller than the precision usually targeted in fundamentals courses.\r
\r
In energetic terms, [[E]] and vis-viva remain informative while motion is approximately Keplerian. If the system enters strongly perturbed dynamics, these magnitudes still describe tendencies, but point predictions can require full numerical propagation.\r
\r
## Model failure signals\r
Signal 1. The model predicts stable orbit, but observed trajectory decays quickly. This indicates non-negligible drag.\r
\r
Signal 2. Measured and predicted values show systematic drift not explained by rounding. Possible causes include oblateness, third-body forcing, or unmodeled thrust.\r
\r
Signal 3. [[v_orb]] looks reasonable, but observed period differs persistently. This suggests noncircular geometry or breakdown of strict two-body assumptions.\r
\r
Signal 4. Energy interpretation with [[E]] becomes contradictory, with sign inconsistent with observed regime. Then either data handling is wrong or the base model is insufficient.\r
\r
## Extended or alternative model\r
A natural extension introduces perturbations explicitly: drag, geopotential terms, and third-body effects. This approach requires differential equations with time integration and often parameter updates along propagation.\r
\r
Another alternative is to use osculating elements with semi-analytical propagators. It may be beyond basic courses, but in real applications it offers a useful tradeoff between computational effort and fidelity.\r
\r
For high-precision contexts, relativistic corrections and nonspherical source models are no longer optional. Even then, advanced models still use the ideal baseline to diagnose how much error comes from omitted physics and how much comes from data quality.\r
\r
## Operational comparison\r
Ideal model:\r
- Main advantage: conceptual clarity and fast calculation.\r
- Cost: low.\r
- Recommended use: learning, preliminary estimation, coherence checks.\r
\r
Extended model:\r
- Main advantage: better match to real data and long-horizon prediction.\r
- Cost: higher in data, time, and computation.\r
- Recommended use: mission design, precise navigation, operational control.\r
\r
Operational comparison is not about replacing one model with the other. It is about understanding complementary roles. The ideal model organizes intuition and sets scales; the extended model corrects deviations when real-world accuracy is required.`;export{e as default};
