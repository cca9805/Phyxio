const e=`# Models\r
\r
## Ideal model\r
The ideal model represents two masses [[m1]] and [[m2]] linked by an inextensible rope over an ideal pulley. The constraint enforces compatible motion and a single internal force [[T]] along the rope. Shared dynamic response is represented by common acceleration. The point of this model is not only equation handling, but system-level causal structure under geometric restriction.\r
\r
## Hypotheses\r
Assumptions include negligible rope mass, negligible rope elasticity, negligible dominant pulley friction, uniform gravity [[g]], and motion constrained to the principal axis. No slack or loss of contact is assumed during analysis. These hypotheses reduce a potentially high-dimensional problem to a compact closure structure.\r
\r
## Quantitative validity domain\r
The model is reliable when non-ideal effects remain second order compared with dominant gravitational imbalance. A practical criterion is to keep the ideal model when relative mismatch between prediction and measurement remains below about ten percent across repeated runs and does not show a persistent directional bias. In practice, this means low-friction pulley behavior and clean trajectories without dominant lateral oscillations. If prediction-measurement mismatch is small and non-systematic, the ideal domain is acceptable for teaching and first-order estimation.\r
\r
## Model failure signals\r
Signal one: persistent bias between measured and predicted acceleration. Signal two: unexplained speed-dependent response. Signal three: need for different branch tensions to fit observations. Signal four: visible rope stretch or lateral vibration. These signals indicate that ideal assumptions are no longer compatible with the setup.\r
\r
## Extended or alternative model\r
A common extension includes pulley inertia, changing force distribution and acceleration output. Another extension includes axle friction effects. A high-precision alternative can add rope elasticity and extra dynamic states. The ideal model remains useful as a baseline for quantifying how much each added effect matters.\r
\r
## Operational comparison\r
Operationally, the ideal model offers speed, traceability, and clear causal interpretation. Extended models offer better fidelity when systematic deviations are present. Selection depends on objective: conceptual learning, preliminary prediction, or fine experimental fit. Recommended workflow is ideal-first, validate, then scale complexity only when evidence requires it.\r
\r
From a decision perspective, the ideal representation is efficient during exploration and planning because it minimizes free parameters. Extended representations become necessary when tolerance margins are tight or when model-based decisions have direct safety impact. This comparison helps avoid both over-modeling without evidence and over-simplification in the presence of clear contradiction.\r
\r
This tradeoff should always be documented explicitly.\r
`;export{e as default};
