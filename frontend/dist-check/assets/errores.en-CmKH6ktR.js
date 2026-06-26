const e=`# Frequent errors\r
\r
## Conceptual errors\r
A common conceptual mistake is treating each mass as if it could accelerate independently. The constraint removes that freedom and enforces a shared response. Another conceptual mistake is reading tension as a freely chosen external force. In this leaf, [[T]] is an emergent closure variable from the coupled equations. A third conceptual issue is mixing scenario parameters and outputs, which breaks causal interpretation.\r
Another conceptual trap is assuming that the larger mass always implies near-gravity response. That intuition only works under specific contrast ranges and ideal assumptions. Without total-inertia reading, qualitative prediction becomes unstable.\r
\r
## Model errors\r
A model-level mistake is applying ideal equations in setups with dominant friction or significant rope elasticity without stating limitations. Another one is using a one-coordinate representation when lateral vibration is relevant. Constraint logic also fails if rope slack causes intermittent contact. These are not arithmetic problems; they are hypothesis problems.\r
A further model mistake appears when setup conditions are changed between runs but the same model declaration is kept. If effective mass or friction condition changes, comparisons lose validity unless assumptions are updated.\r
\r
## Mathematical errors\r
Typical mathematical mistakes include inconsistent sign conventions, wrong cancellation when combining equations, and incomplete unit conversion across masses. Another mistake is skipping limit checks, especially the symmetric case where equal masses must imply zero acceleration. Dimensional checks are also essential: otherwise algebraic expressions may look plausible but be physically invalid.\r
Early aggressive rounding is also problematic in near-symmetry regimes, where tiny differences can control direction interpretation. Keep sufficient precision through intermediate steps.\r
\r
## Interpretation errors\r
Even with a correct final number, interpretation can fail. A frequent issue is not explaining why mass imbalance controls response or why internal force represents coupling. Another issue is reporting output without validity conditions, as if the model worked under all circumstances. Correct interpretation always links cause, mechanism, and limit.\r
Interpretation is also weak when one single data point is used to claim full model confirmation. A stronger conclusion needs trend consistency across repeated scenarios.\r
\r
## Quick self-control rule\r
Use a five-step rule: define axes, verify units, test symmetry limit, check sign consistency, and write one causal sentence. If one step fails, do not close the solution. This quick protocol removes most recurring mistakes and improves transfer to richer constrained systems.\r
`;export{e as default};
