const e=`# Physical models: rotational kinematics\r
\r
## Ideal model\r
\r
The ideal model for rotational kinematics assumes that it is enough to use the analogy with constant-acceleration motion to describe rotation with constant angular acceleration. Only the indispensable structure is kept so that the main relation captures the dominant mechanism and the diagram remains readable. At this level, secondary details of the material, fluid, or contact are removed because they do not change the essential conclusion yet. That simplification is useful only if the learner can explain which phenomenon was neglected and why its absence does not alter the main interpretation. Otherwise the simplification becomes a slogan instead of a model.\r
\r
## Hypotheses\r
\r
The operative hypotheses of the leaf fix which quantities are dominant, which effects are neglected, and why those simplifications still preserve the central physical reading. Once one hypothesis fails, the prediction is no longer just an approximation and must be replaced by an alternative model or by an explicit quantitative correction.\r
\r
## Quantitative validity domain\r
\r
The quantitative validity domain must be stated with explicit thresholds. As a minimum rule, one should demand relative variations below 1%, errors of order 10^-2, and geometric scales comparable between 10^0 and 10^6 depending on the problem. When these criteria fail, the searched magnitude is no longer trustworthy even if the arithmetic looks correct. Declaring the domain forces the writer to justify why the problem truly belongs to that regime.\r
\r
## Model failure signals\r
\r
Model failure usually appears first in the physical reading rather than in the calculator. An unexpected sign change, a reaction becoming negative where contact should exist, or a trend incompatible with trajectories, launches, maneuvers, time graphs, and range estimates shows that the chosen assumptions broke before the final number was obtained. It is also suspicious when a supposedly small correction dominates the whole expression or changes the order of magnitude of the answer.\r
\r
## Extended or alternative model\r
\r
The transition to the extended model becomes necessary when a central hypothesis stops holding and the leaf's dominant magnitude changes appreciably.\r
\r
The extended model introduces corrections when angular acceleration changes or the axis stops being fixed. In that broader description, terms linked to real geometry, changes in the medium, nonlinear effects, or internal redistribution become relevant. The goal is not to make the algebra heavier, but to identify which refinement actually changes the prediction. A practical criterion is to compare how much the searched quantity changes when each correction is activated separately.\r
\r
## Operational comparison\r
\r
Comparison with alternative models helps decide whether a static, dynamic, linear, quadratic, elastic, or purely geometric description is more appropriate. The best option is the one that preserves physical meaning with the smallest number of questionable assumptions and with an interpretation that can be checked in the real setting. Comparing models is not a formal ritual; it is the step that prevents the first remembered equation from being used by habit.`;export{e as default};
