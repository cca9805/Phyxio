## Ideal model

The ideal model compares two states of the same system and assumes that state-to-state energy accounting is enough to answer the question. In this frame, [[Ki]], [[Ui]], [[Kf]], and [[Uf]] are organized as boundary quantities, while [[Em]] is interpreted as the global mechanical content of each state.

This model is powerful because it removes unnecessary intermediate detail when the problem only asks for initial-final relations. It is not a shortcut by habit; it is a justified simplification under clear physical assumptions.

## Hypotheses

The minimum hypotheses are explicit system boundaries, consistent potential baseline between initial and final states, and transparent treatment of non-conservative exchange through [[Wnc]] whenever losses or external input are relevant. Classical scale and moderate speed are also assumed.

A practical reading is that the ideal model is acceptable when neglected losses are small enough not to change the qualitative conclusion. If this condition is not met, conservation in its strict form should not be imposed.

## Quantitative validity domain

A typical educational-engineering domain includes moderate height changes, nonrelativistic speeds, and scenarios where dissipative effects stay below dominant balance terms. A useful check is to estimate a ratio between expected losses and initial mechanical content.

When that ratio remains low, the conservative model can provide a reliable first estimate. When it becomes significant, [[Wnc]] must be activated and interpreted physically instead of being hidden in numerical error.

## Model failure signals

Failure signals are observable and conceptual. Observable: measured final speed is systematically lower than ideal prediction under repeated trials. Conceptual: the narrative includes relevant friction but the solution still enforces strict constancy of [[Em]].

Another strong signal appears when the result demands physically impossible outputs, such as negative kinetic energy in the final state. In that case, the issue is usually model choice, sign convention, or inconsistent potential reference.

## Extended or alternative model

The extended model introduces non-conservative exchange explicitly through [[Wnc]]. This is not a cosmetic correction; it is a change in physical description. With this model, [[Em]] no longer needs to remain constant between states, and interpretation shifts to net transfer.

In systems with braking, drag, frictional heating, or active driving, this extended form is often the correct default. More advanced cases can combine state balances with dynamic equations to model how [[Wnc]] evolves.

## Operational comparison

| Question | Recommended starting model | Control magnitudes |
|---|---|---|
| Is mechanical energy conserved? | Ideal conservative model | [[Ki]], [[Ui]], [[Kf]], [[Uf]], [[Em]] |
| Are losses or external inputs relevant? | Extended transfer model | [[Wnc]], [[Ki]], [[Ui]], [[Kf]], [[Uf]] |
| Is potential reference consistent? | Baseline-consistency check | [[Ui]], [[Uf]], [[U]] |
| Is the result physically defensible? | Final model validation | [[Em]], [[Kf]], [[Wnc]] |

This operational map prevents equation-first solving. Model choice is the central decision that determines whether the final number is physically meaningful or only algebraically coherent.