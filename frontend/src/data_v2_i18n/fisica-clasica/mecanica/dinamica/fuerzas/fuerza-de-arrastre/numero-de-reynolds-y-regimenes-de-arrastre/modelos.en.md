# Physical models: Reynolds Number and Drag Regimes

## Ideal model

The ideal model in this leaf does not compute drag force directly. Its primary function is to diagnose the flow regime through [[Re]] and then select the most coherent drag-model block. This separation prevents a common mistake: applying a force law before validating whether its regime assumptions are satisfied.

Under this model, the scene is represented by a characteristic length [[L]], a relevant relative speed [[v]], and a viscous property of the medium ([[eta]] or [[nu]]). With these inputs, [[Re]] is estimated and interpreted as viscosity-dominant, inertia-dominant, or transitional behavior.

## Hypotheses

The model rests on explicit assumptions:

1. The selected [[L]] truly represents the dominant geometric scale.
2. The chosen [[v]] is the physically relevant relative speed for the interaction.
3. Medium properties ([[rho]], [[eta]], [[nu]]) match the actual thermodynamic state.
4. The objective is operational regime classification, not a full turbulence closure model.

These assumptions are appropriate for preliminary model selection and scenario comparison.

## Quantitative validity domain

A practical reading framework is:

- Zone A (viscosity-dominant): [[Re]] below about $10^2$ in simple external flow, or below about $2\times 10^3$ in typical internal flow.
- Zone B (transitional): intermediate intervals where small changes in [[v]] or roughness can change flow organization.
- Zone C (inertia-dominant): [[Re]] above about $10^3$ in simple external flow, or above about $4\times 10^3$ in typical internal flow.

These values are modeling guides, not universal boundaries. Geometry and boundary conditions can shift them.

## Model failure signals

Regime-based selection starts failing when:

1. Classification changes dramatically under minor, unjustified variations in [[L]].
2. The operational [[v]] band crosses regimes but a single drag block is still forced.
3. Predicted forces differ systematically from measurements by more than about 15%.
4. Medium properties are taken from conditions that do not match the actual test state.

When these signals appear, improving decimals is not the solution; model architecture must be revised.

## Extended or alternative model

Model transition should be explicit:

1. If operation stays in Zone A, prioritize a viscous-dominant linear drag block.
2. If operation stays in Zone C, prioritize an inertia-dominant nonlinear drag block.
3. If operation crosses Zone B, adopt a piecewise strategy or a validated transitional correlation.

In practice, this may include roughness dependence, confinement effects, or range-specific effective coefficients.

## Operational comparison

| Aspect | Simple [[Re]]-based selection | Extended piecewise approach |
|---|---|---|
| Purpose | Fast regime diagnosis | Robust prediction over wide operation bands |
| Required data | [[v]], [[L]], [[eta]] or [[nu]] | Same data + experimental validation |
| Complexity | Low | Medium/High |
| Extrapolation risk | High in mixed zones | Lower when transitions are explicit |
| Recommended use | Preliminary estimation | Design and operation under variability |

The main modeling lesson in this leaf is straightforward: [[Re]] guides the entry point, but reliable prediction requires stating when and why the model must switch.
