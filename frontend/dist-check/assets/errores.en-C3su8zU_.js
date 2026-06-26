const n=`# Frequent mistakes: Inclined Plane with Friction\r
\r
## Conceptual errors\r
\r
### Error 1: Confusing cause and effect\r
\r
Why it seems correct: learners often see [[a]] at the end and treat it as an input.\r
\r
Why it is wrong: [[a]] is an output of force balance, not an independent cause.\r
\r
Detection signal: explanation does not mention [[theta]], [[mu_c]], [[N]], or [[f_r]].\r
\r
Conceptual correction: state the chain explicitly: geometry and contact -> net force -> [[a]].\r
\r
Mini-example: increasing [[theta]] with fixed surface conditions raises downhill drive, which raises [[a]].\r
\r
### Error 2: Applying formulas mechanically\r
\r
Why it seems correct: formulas look universal in textbooks.\r
\r
Why it is wrong: each formula assumes a specific regime and contact model.\r
\r
Detection signal: kinetic equation used before verifying whether sliding actually starts.\r
\r
Conceptual correction: determine branch first using threshold logic, then compute.\r
\r
Mini-example: if tan([[theta]]) <= [[mu_e]], static analysis is mandatory before any kinetic calculation.\r
\r
### Error 3: Mixing similar magnitudes\r
\r
Why it seems correct: [[mu_e]] and [[mu_c]] share units and similar notation.\r
\r
Why it is wrong: they represent different mechanisms: adherence limit vs sliding dissipation.\r
\r
Detection signal: setting [[mu_c]] equal to [[mu_e]] without experimental basis.\r
\r
Conceptual correction: separate static branch ([[f_s_max]]) from kinetic branch ([[f_r]]).\r
\r
Mini-example: a block may remain at rest with high [[mu_e]], but once sliding begins, [[mu_c]] governs response.\r
\r
## Model errors\r
\r
### Error 4: Not recognizing model failure\r
\r
Why it seems correct: ideal models solve many classroom exercises.\r
\r
Why it is wrong: near [[theta_c]], small perturbations can flip regime and invalidate naive assumptions.\r
\r
Detection signal: repeated tests give alternating rest/sliding states under nearly identical settings.\r
\r
Conceptual correction: add sensitivity analysis and switch to extended model when needed.\r
\r
Mini-example: slight humidity changes can alter outcome if operation is near threshold.\r
\r
### Error 5: Ignoring known validity limits\r
\r
Why it seems correct: one successful use encourages overgeneralization.\r
\r
Why it is wrong: models are domain-limited approximations.\r
\r
Detection signal: numerically neat results with systematic mismatch against measured data.\r
\r
Conceptual correction: check assumptions, scale, and contact conditions before trusting outputs.\r
\r
Mini-example: vibration-rich supports often violate constant-coefficient simplifications.\r
\r
## Mathematical errors\r
\r
### Error 6: Careless algebraic manipulation\r
\r
Why it seems correct: symbolic steps look formally valid.\r
\r
Why it is wrong: sign conventions in physics carry directional meaning.\r
\r
Detection signal: predicted sign of [[a]] contradicts observed motion direction.\r
\r
Conceptual correction: redraw axes, rebuild force signs, then re-solve.\r
\r
Mini-example: with downhill-positive axis, friction must enter with opposite sign.\r
\r
### Error 7: Unit and constant mistakes\r
\r
Why it seems correct: units feel secondary compared with equations.\r
\r
Why it is wrong: a single conversion error can dominate the whole result.\r
\r
Detection signal: implausible values of [[N]] or [[a]] for ordinary loads and angles.\r
\r
Conceptual correction: normalize to SI early and finish with dimensional verification.\r
\r
Mini-example: degree/radian confusion in trigonometric input shifts threshold predictions.\r
\r
## Interpretation errors\r
\r
### Error 8: Overstating precision\r
\r
Why it seems correct: many decimals look rigorous.\r
\r
Why it is wrong: model and measurement uncertainty cap meaningful precision.\r
\r
Detection signal: high decimal reporting with no uncertainty discussion.\r
\r
Conceptual correction: report precision consistent with data quality and model scope.\r
\r
Mini-example: if [[mu_c]] has sizeable spread, reporting [[a]] with four decimals is unjustified.\r
\r
### Error 9: Skipping physical interpretation\r
\r
Why it seems correct: obtaining a number feels like completion.\r
\r
Why it is wrong: engineering decisions require regime interpretation, not only arithmetic.\r
\r
Detection signal: solution ends at "[[a]] = value" with no statement about active mechanism.\r
\r
Conceptual correction: translate numbers into behavior, risk, and robustness.\r
\r
Mini-example: similar accelerations can imply very different risk if one case is near [[theta_c]] and the other is far.\r
\r
## Quick self-control rule\r
\r
- Is the branch selection justified (static vs kinetic)?\r
- Are dimensions and signs consistent?\r
- Is the order of magnitude plausible?\r
- Is the result interpreted causally?\r
- Are model limits acknowledged?\r
\r
If any answer is no, revise before accepting the result.`;export{n as default};
