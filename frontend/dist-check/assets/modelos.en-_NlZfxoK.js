const e=`# Models\r
\r
## Ideal model\r
\r
The ideal conservative-system model assumes that the process can be described as a redistribution between [[K]] and [[U]] without relevant net loss or external input. In that reading, [[Em]] acts as the closure quantity for the mechanical state, and comparing [[Ki]], [[Ui]], [[Kf]], and [[Uf]] is enough to interpret the evolution. This model is especially effective in short free falls, ideal ascents, low-loss springs, and smooth paths where the relevant interaction admits a well-defined potential-energy description.\r
\r
Its main strength is that it replaces point-by-point tracking with a state-to-state reading. Instead of following every local detail, the analysis focuses on how much of the budget was initially stored in motion and how much in configuration. That makes the model efficient, readable, and often physically clearer than a purely local narrative.\r
\r
## Hypotheses\r
\r
The first hypothesis is that the dominant interaction is conservative. The second is that [[Ui]] and [[Uf]] are evaluated using the same potential baseline. The third is that the chosen system remains the same between initial and final states. The fourth is that any non-conservative exchange is either absent or small enough not to control the answer.\r
\r
These hypotheses are not formal decoration. If one of them fails, the conservative model may still output a number, but not a defensible interpretation. Model selection therefore happens before substitution, not after it.\r
\r
## Quantitative validity domain\r
\r
As an operational criterion, the ideal model is reasonable when the magnitude of [[Wnc]] is <= 5% of [[Em]] at the scale of the problem and when the expected measurement uncertainty is larger than that deviation. It is also reasonable when the same potential baseline is used consistently for [[Ui]] and [[Uf]]. If friction, drag, or external driving exceeds that margin, the purely conservative reading is no longer the best first model.\r
\r
Another useful criterion is to compare the expected exchange between [[K]] and [[U]] with any known dissipative mechanism. If dissipation is much smaller than the main exchange, the ideal model remains informative. If dissipation is of the same order, the balance must be extended through [[Wnc]].\r
\r
## Model failure signals\r
\r
The model fails when it forces a negative [[Kf]], when it requires a baseline switch between states, when it predicts a height recovery the real system does not show, or when the measured mechanical sum drops systematically from one state to the next. It also fails when the problem explicitly includes friction, braking, irreversible deformation, or motor input and the analyst still imposes ideal conservation.\r
\r
Another failure signal appears when the verbal interpretation and the computed result no longer agree. If the result only looks plausible after forcing signs, hiding losses, or redefining the baseline, the selected model is no longer reading the real physics correctly.\r
\r
## Extended or alternative model\r
\r
The extended model introduces [[Wnc]] and turns ideal conservation into a general balance. The question is no longer whether [[Em]] remains constant, but by how much it changes because of non-conservative mechanisms. This does not destroy the structure of the topic. It extends it naturally.\r
\r
Knowing when to switch matters. When a mechanism produces observable dissipation or external input, it should appear explicitly in both the equation and the interpretation. Otherwise, the model remains elegant but physically weak.\r
\r
## Operational comparison\r
\r
The ideal model is simpler and extremely powerful when the problem is dominated by exchange between [[K]] and [[U]]. The extended model is more faithful when departure from the ideal case is no longer small. The first offers speed and conceptual clarity. The second offers physical honesty and prevents overclaiming conservation.\r
\r
In expert use, the two models complement rather than compete with each other. One first tests whether the conservative idealization captures the dominant mechanism. If not, the analysis moves to [[Wnc]] without abandoning the energetic language. That continuity is one of the strongest features of the leaf.`;export{e as default};
